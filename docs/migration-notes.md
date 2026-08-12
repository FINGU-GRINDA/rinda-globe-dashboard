# 이 저장소가 새로 만들어진 이유

`FINGU-GRINDA/rinda-globe-dashboard` (public) 를 대체하는 **private 저장소**입니다.
히스토리를 그대로 옮기지 않고 현재 코드 상태에서 새로 시작했습니다. 이유를 남겨둡니다.

## 1. 머지가 구조적으로 막혀 있었다

조직 룰셋 `Supply-Chain Scan (required)` 이 요구하는 워크플로
(`.github/workflows/supply-chain-scan.yml`)는 **private** 저장소인
`FINGU-GRINDA/supply-chain-guard` 에 있는데, 이전 저장소는 **public** 이었습니다.

GitHub 은 대상보다 **가시성이 낮은** 저장소의 워크플로를 필수 검사로 요구하는 것을 금지합니다
(`public > internal > private`). 그래서 검사가 실패한 게 아니라 **스케줄조차 되지 않았고**,
`mergeable_state` 가 `blocked` 로 고정되어 어떤 PR 도 `main` 에 머지될 수 없었습니다.

> **Workflows cannot be required from a less visible repository**

룰셋이 워크플로를 **저장소 ID로 고정 참조**하므로, 같은 이름의 워크플로를 저장소 안에 추가해도
해결되지 않았습니다. 저장소를 private 으로 만드는 것이 유일한 정공법이었습니다.

## 2. 그런데 이전 저장소는 fork 라 private 으로 못 바꿨다

`ehddusheo/globe-dashboard` 의 fork 였고, **GitHub 은 fork 의 가시성 변경을 허용하지 않습니다.**
fork network 에서 분리(`Leave fork network`)하는 방법이 있었지만 그 경우 PR·이슈 등
메타데이터가 전부 삭제됩니다. 그래서 새 private 저장소를 만드는 쪽을 택했습니다.

## 3. 히스토리를 옮기지 않은 이유 — 악성코드가 히스토리에 살아 있었다

이전 저장소 히스토리에는 **Shai-Hulud 계열 공급망 임플란트가 그대로 남아 있었습니다.**
파일은 나중 커밋에서 지워졌지만 blob 은 히스토리에서 여전히 접근 가능했습니다.

| 구성요소 | 내용 |
|---|---|
| `.vscode/tasks.json` | `eslint-check` 라는 이름의 숨겨진 백그라운드 태스크. `"hide": true`, `"reveal": "never"` |
| 실행 대상 | `node ./public/fonts/fa-solid-400.woff2` |
| `public/fonts/fa-solid-400.woff2` | 폰트로 위장한 **5,102 바이트 Node 스크립트** (blob `b4aa3256`) |

VS Code 로 폴더를 여는 것만으로 실행되는 구조였습니다.
히스토리를 그대로 미러링하면 이 임플란트를 새 저장소에 그대로 심는 셈이라, 현재 상태에서
새로 시작했습니다. **전체 히스토리는 이전 저장소에 그대로 남아 있습니다** — 삭제하지 말고
아카이브해서 보존하세요.

## 함께 정리한 것

- `public/fonts/` (2.8 MB) — 어디에서도 참조되지 않았고, 딸린 README 는 전혀 다른 프로젝트
  ("Blockchain Explorer")를 설명했으며, 위 임플란트가 심어졌던 디렉터리입니다.
- `.vscode/launch.json` — 이 프로젝트에 존재하지 않는 `sst` / `jest` / `vitest` / `node_modules`
  를 참조하고 AWS 프로필명(`flo-ct-flo360`)을 노출하던 타 프로젝트 잔재.
- `.gitignore` 가 **자기 자신을 무시**하고 있었습니다. 새 저장소에서 `git add .` 시
  `.gitignore` 가 통째로 누락되는 함정이라 자기참조 항목을 제거했습니다.

## ⚠️ 아직 남은 조치 — Gemini API 키

`app.js` 의 `GEMINI_FALLBACK_KEY_PARTS` 에 키가 아직 내장되어 있습니다.
이전 저장소가 public 이었던 동안 **인증 없이 읽혔습니다.** 이 저장소가 private 이 되어도
이미 유출된 키는 되돌릴 수 없습니다.

1. Google AI Studio 에서 **기존 키 폐기 후 새 키 발급**
2. 새 키를 올린다 환경변수 `GEMINI_API_KEY` 로만 등록
3. `app.js` 의 `GEMINI_FALLBACK_KEY_PARTS` 를 `[]` 로 비우기

3번을 하면 AI 호출은 nginx 프록시(`/api/gemini/*`)만 사용하게 되어 키가 브라우저로 나가지
않습니다. 자세한 동작은 [README 의 환경 변수 절](../README.md#환경-변수)을 참고하세요.

## 이전 저장소 정리

- `FINGU-GRINDA/rinda-globe-dashboard` — **아카이브** 권장 (히스토리 보존용, 삭제 금지)
- 이전 올린다 앱 `rinda-globe-dashboard` — 새 앱 확인 후 제거
