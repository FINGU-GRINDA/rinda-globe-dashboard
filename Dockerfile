# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
# Global Industry Intelligence — static site image
#
# The repo root also holds the Python data pipeline (scripts/, raw_data/) which
# only ever runs in GitHub Actions. What actually ships is the static frontend,
# so this image is nginx plus six files, content-hashed and pre-compressed at
# build time.
# ---------------------------------------------------------------------------

# ---- Stage 1: hash + compress the static assets ---------------------------
FROM alpine:3.20 AS assets

WORKDIR /site
COPY index.html styles.css app.js data.js robots.txt sitemap.xml ./

# Rewrite the ?v= cache-busting tokens in index.html to a content hash.
#
# Those tokens are hand-maintained in the repo ("?v=20260310a"), but the daily
# GitHub Action rewrites data.js without touching index.html — so under a long
# cache the freshly fetched World Bank data would never reach returning
# visitors. Deriving the token from the file's own bytes removes that failure
# mode entirely and makes `immutable` caching correct rather than a gamble.
# NOTE: busybox sed has no `\|` alternation, so this stays a plain substitution
# per file. The verification step below is not decoration — a silently
# unmatched pattern would leave the stale hand-written token in place and hand
# every visitor a 1-year `immutable` cache of stale data.
RUN set -eux; \
    for f in app.js styles.css data.js; do \
        hash="$(md5sum "$f" | cut -c1-12)"; \
        sed -i "s|$f?v=[^\"]*|$f?v=$hash|g" index.html; \
        grep -q "$f?v=$hash" index.html \
            || { echo "FATAL: cache-bust rewrite missed $f"; exit 1; }; \
    done; \
    grep -oE '(app\.js|styles\.css|data\.js)\?v=[a-f0-9]+' index.html

# Pre-compress for gzip_static. Build-time -9 beats per-request gzip on both
# ratio and CPU, and data.js alone is ~1 MB raw.
RUN gzip -9 -k index.html styles.css app.js data.js robots.txt sitemap.xml \
 && ls -lh /site

# ---- Stage 2: runtime ------------------------------------------------------
FROM nginx:1.27-alpine

# Drop the stock default.conf; ours ships as a template so the image entrypoint
# can substitute ${GEMINI_API_KEY} at container start.
RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf             /etc/nginx/nginx.conf
COPY nginx/security-headers.conf  /etc/nginx/security-headers.conf
COPY nginx/default.conf.template  /etc/nginx/templates/default.conf.template
COPY nginx/docker-entrypoint.d/05-resolver.sh /docker-entrypoint.d/05-resolver.sh
COPY --from=assets /site/ /usr/share/nginx/html/

RUN chmod +x /docker-entrypoint.d/05-resolver.sh

# Substitute GEMINI_API_KEY and nothing else — an unfiltered envsubst would
# also eat nginx's own $host / $uri / $request_uri in the template.
ENV NGINX_ENVSUBST_FILTER="^GEMINI_API_KEY$" \
    GEMINI_API_KEY=""

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/healthz || exit 1
