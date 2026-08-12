"""
World Bank API - 전세계 국가 거시경제 데이터 대량 수집
인증 불필요, 완전 무료, 일일 호출 제한 없음
"""
import requests, json, time, os

BASE = "https://api.worldbank.org/v2"
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "raw_data")
os.makedirs(OUT_DIR, exist_ok=True)

# 수집할 지표 목록
INDICATORS = {
    # GDP & Economy
    "NY.GDP.MKTP.CD": "gdp_current_usd",
    "NY.GDP.MKTP.KD.ZG": "gdp_growth_pct",
    "NY.GDP.PCAP.CD": "gdp_per_capita",
    "NE.EXP.GNFS.CD": "exports_usd",
    "NE.IMP.GNFS.CD": "imports_usd",
    "BX.KLT.DINV.CD.WD": "fdi_inflow_usd",
    # Population & Labor
    "SP.POP.TOTL": "population",
    "SL.UEM.TOTL.ZS": "unemployment_pct",
    "SL.TLF.TOTL.IN": "labor_force",
    # Industry & Sectors
    "NV.IND.TOTL.ZS": "industry_pct_gdp",
    "NV.IND.MANF.ZS": "manufacturing_pct_gdp",
    "NV.SRV.TOTL.ZS": "services_pct_gdp",
    "NV.AGR.TOTL.ZS": "agriculture_pct_gdp",
    # Technology & Innovation
    "GB.XPD.RSDV.GD.ZS": "rd_expenditure_pct_gdp",
    "IT.NET.USER.ZS": "internet_users_pct",
    "IT.CEL.SETS.P2": "mobile_subscriptions_per100",
    "IP.PAT.RESD": "patent_applications",
    # Finance
    "FM.LBL.BMNY.GD.ZS": "broad_money_pct_gdp",
    "FP.CPI.TOTL.ZG": "inflation_pct",
    "FR.INR.LEND": "lending_rate",
    # Trade & Business
    "IC.BUS.EASE.XQ": "ease_of_business_score",
    "NE.TRD.GNFS.ZS": "trade_pct_gdp",
    # Energy
    "EG.USE.PCAP.KG.OE": "energy_use_per_capita",
    "EG.FEC.RNEW.ZS": "renewable_energy_pct",
    # Health & Education
    "SH.XPD.CHEX.GD.ZS": "health_expenditure_pct_gdp",
    "SE.XPD.TOTL.GD.ZS": "education_expenditure_pct_gdp",
    # Tourism
    "ST.INT.ARVL": "tourist_arrivals",
    "ST.INT.RCPT.CD": "tourism_receipts_usd",
}

def fetch_indicator(indicator_code, date_range="2018:2024", per_page=500):
    """하나의 지표에 대해 전세계 데이터 수집"""
    all_data = []
    page = 1
    while True:
        url = f"{BASE}/country/all/indicator/{indicator_code}?format=json&date={date_range}&per_page={per_page}&page={page}"
        try:
            r = requests.get(url, timeout=30)
            if r.status_code != 200:
                print(f"  HTTP {r.status_code} for {indicator_code} page {page}")
                break
            data = r.json()
            if len(data) < 2 or data[1] is None:
                break
            all_data.extend(data[1])
            total_pages = data[0].get("pages", 1)
            if page >= total_pages:
                break
            page += 1
            time.sleep(0.3)  # rate limiting
        except Exception as e:
            print(f"  Error fetching {indicator_code}: {e}")
            break
    return all_data

def fetch_countries():
    """전체 국가 메타데이터 수집"""
    url = f"{BASE}/country?format=json&per_page=400"
    r = requests.get(url, timeout=30)
    data = r.json()
    countries = {}
    if len(data) >= 2 and data[1]:
        for c in data[1]:
            if c.get("region", {}).get("id", "") != "NA":  # Aggregates 제외
                countries[c["id"]] = {
                    "name": c["name"],
                    "iso2": c["iso2Code"],
                    "iso3": c["id"],
                    "region": c.get("region", {}).get("value", ""),
                    "income": c.get("incomeLevel", {}).get("value", ""),
                    "capital": c.get("capitalCity", ""),
                    "lat": float(c.get("latitude", 0) or 0),
                    "lng": float(c.get("longitude", 0) or 0),
                }
    return countries

def main():
    print("=" * 60)
    print("World Bank Data Fetcher - 전세계 경제 데이터 대량 수집")
    print("=" * 60)

    # 1) 국가 메타데이터
    print("\n[1/2] Fetching country metadata...")
    countries = fetch_countries()
    print(f"  → {len(countries)} countries loaded")
    with open(os.path.join(OUT_DIR, "wb_countries.json"), "w", encoding="utf-8") as f:
        json.dump(countries, f, ensure_ascii=False, indent=2)

    # 2) 각 지표 수집
    print(f"\n[2/2] Fetching {len(INDICATORS)} indicators for all countries...")
    all_indicators = {}
    for i, (code, name) in enumerate(INDICATORS.items(), 1):
        print(f"  [{i}/{len(INDICATORS)}] {name} ({code})...", end=" ", flush=True)
        raw = fetch_indicator(code)
        # 국가별로 정리 (최신 데이터 우선)
        by_country = {}
        for entry in raw:
            cid = entry.get("countryiso3code", "") or entry.get("country", {}).get("id", "")
            if cid and cid in countries and entry.get("value") is not None:
                year = int(entry.get("date", "0"))
                if cid not in by_country or year > by_country[cid]["year"]:
                    by_country[cid] = {"value": entry["value"], "year": year}
        all_indicators[name] = by_country
        count = len(by_country)
        print(f"{count} countries")
        time.sleep(0.5)

    with open(os.path.join(OUT_DIR, "wb_indicators.json"), "w", encoding="utf-8") as f:
        json.dump(all_indicators, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Done! Data saved to {OUT_DIR}/")
    print(f"   - wb_countries.json ({len(countries)} countries)")
    print(f"   - wb_indicators.json ({len(all_indicators)} indicators)")

if __name__ == "__main__":
    main()
