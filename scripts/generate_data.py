"""
generate_data.py - 수집된 원본 데이터를 합쳐서 data.js 자동 생성
World Bank + IMF + 시장 데이터 → 프론트엔드용 JavaScript 데이터 파일
"""
import json, os, math
from datetime import datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
RAW_DIR = os.path.join(PROJECT_DIR, "raw_data")

# ===== ISO3 → ISO numeric (world-atlas TopoJSON 매칭용) =====
ISO3_TO_NUM = {
    "AFG":"004","ALB":"008","DZA":"012","AGO":"024","ARG":"032","ARM":"051","AUS":"036",
    "AUT":"040","AZE":"031","BHR":"048","BGD":"050","BLR":"112","BEL":"056","BEN":"204",
    "BOL":"068","BIH":"070","BWA":"072","BRA":"076","BRN":"096","BGR":"100","BFA":"854",
    "BDI":"108","KHM":"116","CMR":"120","CAN":"124","CAF":"140","TCD":"148","CHL":"152",
    "CHN":"156","COL":"170","COD":"180","COG":"178","CRI":"188","CIV":"384","HRV":"191",
    "CUB":"192","CYP":"196","CZE":"203","DNK":"208","DOM":"214","ECU":"218","EGY":"818",
    "SLV":"222","GNQ":"226","ERI":"232","EST":"233","SWZ":"748","ETH":"231","FIN":"246",
    "FRA":"250","GAB":"266","GMB":"270","GEO":"268","DEU":"276","GHA":"288","GRC":"300",
    "GTM":"320","GIN":"324","GUY":"328","HTI":"332","HND":"340","HUN":"348","ISL":"352",
    "IND":"356","IDN":"360","IRN":"364","IRQ":"368","IRL":"372","ISR":"376","ITA":"380",
    "JAM":"388","JPN":"392","JOR":"400","KAZ":"398","KEN":"404","KWT":"414","KGZ":"417",
    "LAO":"418","LVA":"428","LBN":"422","LSO":"426","LBR":"430","LBY":"434","LTU":"440",
    "LUX":"442","MDG":"450","MWI":"454","MYS":"458","MLI":"466","MRT":"478","MUS":"480",
    "MEX":"484","MDA":"498","MNG":"496","MNE":"499","MAR":"504","MOZ":"508","MMR":"104",
    "NAM":"516","NPL":"524","NLD":"528","NZL":"554","NIC":"558","NER":"562","NGA":"566",
    "PRK":"408","MKD":"807","NOR":"578","OMN":"512","PAK":"586","PAN":"591","PNG":"598",
    "PRY":"600","PER":"604","PHL":"608","POL":"616","PRT":"620","QAT":"634","ROU":"642",
    "RUS":"643","RWA":"646","SAU":"682","SEN":"686","SRB":"688","SLE":"694","SGP":"702",
    "SVK":"703","SVN":"705","SOM":"706","ZAF":"710","KOR":"410","SSD":"728","ESP":"724",
    "LKA":"144","SDN":"729","SUR":"740","SWE":"752","CHE":"756","SYR":"760","TWN":"158",
    "TJK":"762","TZA":"834","THA":"764","TLS":"626","TGO":"768","TTO":"780","TUN":"788",
    "TUR":"792","TKM":"795","UGA":"800","UKR":"804","ARE":"784","GBR":"826","USA":"840",
    "URY":"858","UZB":"860","VEN":"862","VNM":"704","YEM":"887","ZMB":"894","ZWE":"716",
}

# ===== 국가별 국기 이모지 =====
def get_flag(iso2):
    if not iso2 or len(iso2) != 2:
        return ""
    return chr(0x1F1E6 + ord(iso2[0]) - ord('A')) + chr(0x1F1E6 + ord(iso2[1]) - ord('A'))

# ===== 한국어 국가명 (주요국) =====
KO_NAMES = {
    "USA":"미국","CHN":"중국","JPN":"일본","DEU":"독일","GBR":"영국","FRA":"프랑스",
    "IND":"인도","ITA":"이탈리아","BRA":"브라질","CAN":"캐나다","KOR":"한국","AUS":"호주",
    "RUS":"러시아","ESP":"스페인","MEX":"멕시코","IDN":"인도네시아","NLD":"네덜란드",
    "SAU":"사우디아라비아","TUR":"터키","CHE":"스위스","TWN":"대만","POL":"폴란드",
    "SWE":"스웨덴","BEL":"벨기에","THA":"태국","AUT":"오스트리아","NOR":"노르웨이",
    "ARE":"아랍에미리트","ISR":"이스라엘","IRL":"아일랜드","SGP":"싱가포르",
    "MYS":"말레이시아","PHL":"필리핀","DNK":"덴마크","HKG":"홍콩","COL":"콜롬비아",
    "ZAF":"남아프리카","EGY":"이집트","BGD":"방글라데시","CHL":"칠레","FIN":"핀란드",
    "VNM":"베트남","CZE":"체코","ROU":"루마니아","PRT":"포르투갈","PER":"페루",
    "NZL":"뉴질랜드","GRC":"그리스","IRQ":"이라크","QAT":"카타르","KAZ":"카자흐스탄",
    "HUN":"헝가리","KWT":"쿠웨이트","MAR":"모로코","UKR":"우크라이나","NGR":"나이지리아",
    "NGA":"나이지리아","PAK":"파키스탄","ARG":"아르헨티나","KEN":"케냐","ETH":"에티오피아",
    "MMR":"미얀마","GHA":"가나","TZA":"탄자니아","UZB":"우즈베키스탄","PAN":"파나마",
    "LKA":"스리랑카","JOR":"요르단","OMN":"오만","BHR":"바레인",
}

# ===== 지역 매핑 =====
REGION_MAP = {
    "East Asia & Pacific": "East Asia & Pacific",
    "Europe & Central Asia": "Europe & Central Asia",
    "Latin America & Caribbean": "Latin America & Caribbean",
    "Middle East & North Africa": "Middle East & North Africa",
    "North America": "North America",
    "South Asia": "South Asia",
    "Sub-Saharan Africa": "Sub-Saharan Africa",
}

# ===== 산업 정의 =====
INDUSTRIES_DEF = {
    "tech":          {"name": "기술 & IT",       "nameEn": "Technology & IT",       "icon": "💻", "color": "#00f0ff"},
    "manufacturing": {"name": "제조업",          "nameEn": "Manufacturing",         "icon": "🏭", "color": "#ff6b35"},
    "finance":       {"name": "금융 & 은행",     "nameEn": "Finance & Banking",     "icon": "💰", "color": "#ffd700"},
    "healthcare":    {"name": "헬스케어 & 제약", "nameEn": "Healthcare & Pharma",   "icon": "🏥", "color": "#00ff88"},
    "energy":        {"name": "에너지 & 자원",   "nameEn": "Energy & Resources",    "icon": "⚡", "color": "#ff3366"},
    "agriculture":   {"name": "농업",            "nameEn": "Agriculture",           "icon": "🌾", "color": "#88cc44"},
    "automotive":    {"name": "자동차",          "nameEn": "Automotive",            "icon": "🚗", "color": "#aa66ff"},
    "retail":        {"name": "유통 & 이커머스", "nameEn": "Retail & E-commerce",   "icon": "🛒", "color": "#ff8844"},
    "realestate":    {"name": "부동산",          "nameEn": "Real Estate",           "icon": "🏢", "color": "#44aaff"},
    "telecom":       {"name": "통신",            "nameEn": "Telecommunications",    "icon": "📡", "color": "#cc44ff"},
    "tourism":       {"name": "관광 & 호텔",     "nameEn": "Tourism & Hospitality", "icon": "✈️", "color": "#ffcc00"},
    "education":     {"name": "교육",            "nameEn": "Education",             "icon": "📚", "color": "#44ddcc"},
}

# ===== 산업별 GDP 비율 기반 시장 규모 추정 =====
# 각 산업의 글로벌 평균 GDP 비율과 지역별 보정 계수
INDUSTRY_GDP_RATIOS = {
    "tech":          {"base": 0.05, "growth_base": 7.0},
    "manufacturing": {"base": 0.12, "growth_base": 2.5},
    "finance":       {"base": 0.07, "growth_base": 4.5},
    "healthcare":    {"base": 0.04, "growth_base": 6.0},
    "energy":        {"base": 0.04, "growth_base": 4.0},
    "agriculture":   {"base": 0.03, "growth_base": 2.0},
    "automotive":    {"base": 0.03, "growth_base": 4.0},
    "retail":        {"base": 0.06, "growth_base": 5.0},
    "realestate":    {"base": 0.04, "growth_base": 3.0},
    "telecom":       {"base": 0.02, "growth_base": 4.0},
    "tourism":       {"base": 0.02, "growth_base": 6.0},
    "education":     {"base": 0.02, "growth_base": 5.0},
}

# 지역별 산업 보정 계수
REGION_INDUSTRY_MULTIPLIERS = {
    "North America": {"tech": 1.8, "finance": 1.5, "healthcare": 1.6, "retail": 1.4, "manufacturing": 0.9},
    "East Asia & Pacific": {"tech": 1.5, "manufacturing": 1.6, "automotive": 1.3, "telecom": 1.2},
    "Europe & Central Asia": {"automotive": 1.3, "tourism": 1.3, "finance": 1.2, "energy": 1.1, "manufacturing": 1.1},
    "South Asia": {"tech": 1.3, "agriculture": 1.8, "retail": 1.3, "education": 1.2},
    "Middle East & North Africa": {"energy": 2.5, "realestate": 1.5, "tourism": 1.3, "finance": 1.2},
    "Latin America & Caribbean": {"agriculture": 1.5, "energy": 1.3, "tourism": 1.2, "mining": 1.3},
    "Sub-Saharan Africa": {"agriculture": 2.0, "energy": 1.2, "telecom": 1.3, "education": 1.1},
}

# 기회/리스크 템플릿 (지역/소득별)
OPPO_TEMPLATES = {
    "tech": {
        "high": ["AI/ML 투자 확대", "클라우드 인프라 성장", "사이버보안 수요 증가", "디지털 전환 가속화"],
        "upper_mid": ["IT 아웃소싱 성장", "스타트업 생태계 확대", "5G 인프라 구축", "핀테크 혁신"],
        "lower_mid": ["디지털 경제 도입기", "모바일 서비스 확대", "기술 인력 양성", "전자정부 추진"],
        "low": ["모바일 뱅킹 보급", "기본 인프라 디지털화", "기술 교육 확대", "인터넷 접근성 향상"],
    },
    "manufacturing": {
        "high": ["스마트팩토리 전환", "친환경 제조 전환", "첨단 소재 개발", "리쇼어링 기회"],
        "upper_mid": ["글로벌 공급망 편입", "FDI 유치 확대", "산업 자동화", "수출 제조 성장"],
        "lower_mid": ["노동집약적 제조 기회", "산업단지 개발", "경공업 성장", "글로벌 OEM 기회"],
        "low": ["기초 제조업 도입", "농산물 가공", "섬유/의류 산업", "자원 가공 산업"],
    },
}

RISK_TEMPLATES = {
    "tech": {
        "high": ["규제 강화 리스크", "인재 확보 경쟁", "기술 패권 경쟁", "사이버 위협 증가"],
        "upper_mid": ["기술 격차 확대", "두뇌 유출", "규제 불확실성", "인프라 부족"],
        "lower_mid": ["디지털 격차", "자본 부족", "인재 부족", "인프라 미비"],
        "low": ["기본 인프라 부재", "자본 극심한 부족", "교육 시스템 미비", "전력 불안정"],
    },
    "manufacturing": {
        "high": ["인건비 상승", "환경 규제 강화", "공급망 리스크", "자동화 실업 우려"],
        "upper_mid": ["원자재 가격 변동", "기술 전환 비용", "노동 규제", "경쟁 심화"],
        "lower_mid": ["인프라 부족", "기술력 한계", "물류 비용", "품질 관리"],
        "low": ["전력 부족", "운송 인프라 미비", "자본 부족", "기술 인력 부재"],
    },
}

def get_income_tier(income_str):
    if "High" in income_str and "non-OECD" not in income_str:
        return "high"
    elif "Upper middle" in income_str:
        return "upper_mid"
    elif "Lower middle" in income_str:
        return "lower_mid"
    return "low"

def estimate_industry(gdp_b, region, income, ind_key, all_countries_ind_data, iso3):
    """World Bank 데이터를 기반으로 산업별 시장 규모/성장률/잠재력 추정"""
    ratios = INDUSTRY_GDP_RATIOS[ind_key]
    base_ratio = ratios["base"]

    # 실제 World Bank 데이터로 보정
    if ind_key == "manufacturing" and "manufacturing_pct_gdp" in all_countries_ind_data:
        cd = all_countries_ind_data["manufacturing_pct_gdp"].get(iso3)
        if cd:
            base_ratio = cd["value"] / 100.0

    elif ind_key == "agriculture" and "agriculture_pct_gdp" in all_countries_ind_data:
        cd = all_countries_ind_data["agriculture_pct_gdp"].get(iso3)
        if cd:
            base_ratio = cd["value"] / 100.0

    elif ind_key == "healthcare" and "health_expenditure_pct_gdp" in all_countries_ind_data:
        cd = all_countries_ind_data["health_expenditure_pct_gdp"].get(iso3)
        if cd:
            base_ratio = cd["value"] / 100.0 * 0.8

    elif ind_key == "education" and "education_expenditure_pct_gdp" in all_countries_ind_data:
        cd = all_countries_ind_data["education_expenditure_pct_gdp"].get(iso3)
        if cd:
            base_ratio = cd["value"] / 100.0 * 0.6

    elif ind_key == "energy" and "renewable_energy_pct" in all_countries_ind_data:
        cd = all_countries_ind_data["renewable_energy_pct"].get(iso3)
        if cd:
            base_ratio = max(base_ratio, 0.03)

    elif ind_key == "tourism" and "tourism_receipts_usd" in all_countries_ind_data:
        cd = all_countries_ind_data["tourism_receipts_usd"].get(iso3)
        if cd and gdp_b > 0:
            base_ratio = max(min(cd["value"] / (gdp_b * 1e9), 0.15), 0.005)

    elif ind_key == "tech" and "rd_expenditure_pct_gdp" in all_countries_ind_data:
        cd = all_countries_ind_data["rd_expenditure_pct_gdp"].get(iso3)
        if cd:
            base_ratio = max(base_ratio, cd["value"] / 100.0 * 1.5)

    # 지역별 보정
    region_mult = REGION_INDUSTRY_MULTIPLIERS.get(region, {}).get(ind_key, 1.0)
    base_ratio *= region_mult

    # 시장 규모 (GDP 기반)
    size = round(gdp_b * base_ratio, 1)

    # 성장률 (GDP 성장률 + 산업 기본 성장률 가중 평균)
    gdp_growth = all_countries_ind_data.get("gdp_growth_pct", {}).get(iso3, {}).get("value", 3.0)
    growth = round(ratios["growth_base"] * 0.6 + max(gdp_growth, 0) * 0.4 + (0.5 if "lower" in income.lower() or "low" in income.lower() else 0), 1)

    # 잠재력 점수 (0-100)
    tier = get_income_tier(income)
    potential_base = {"high": 72, "upper_mid": 68, "lower_mid": 62, "low": 50}[tier]
    potential = min(99, max(30, round(potential_base + growth * 2 + math.log10(max(size, 1)) * 3)))

    # 기회/리스크 텍스트
    oppo_pool = OPPO_TEMPLATES.get(ind_key, OPPO_TEMPLATES["tech"]).get(tier, OPPO_TEMPLATES["tech"]["high"])
    risk_pool = RISK_TEMPLATES.get(ind_key, RISK_TEMPLATES["tech"]).get(tier, RISK_TEMPLATES["tech"]["high"])

    return {
        "size": max(1, size),
        "growth": growth,
        "potential": potential,
        "oppo": oppo_pool[:3],
        "risk": risk_pool[:3],
    }

def rank_industries(all_countries, ind_key):
    """특정 산업의 글로벌 순위 계산"""
    sizes = []
    for iso_num, cdata in all_countries.items():
        if ind_key in cdata.get("industries", {}):
            sizes.append((iso_num, cdata["industries"][ind_key]["size"]))
    sizes.sort(key=lambda x: -x[1])
    ranks = {}
    for rank, (iso_num, _) in enumerate(sizes, 1):
        ranks[iso_num] = rank
    return ranks

def build_trade_routes(countries):
    """GDP 기반으로 주요 무역 경로 생성"""
    routes = []
    sorted_countries = sorted(countries.items(), key=lambda x: -x[1].get("gdp", 0))
    top = sorted_countries[:20]
    for i, (id1, c1) in enumerate(top):
        for j, (id2, c2) in enumerate(top):
            if i >= j:
                continue
            vol = min(c1.get("gdp", 0), c2.get("gdp", 0)) / 200
            if vol > 10:
                routes.append({"from": id1, "to": id2, "volume": round(vol)})
    routes.sort(key=lambda x: -x["volume"])
    return routes[:30]

def build_ticker_data(market_data):
    """시장 데이터로 티커 생성"""
    ticker = []
    if not market_data:
        # 기본 티커 데이터
        return [
            {"label": "S&P 500", "value": "--", "dir": "neutral"},
            {"label": "KOSPI", "value": "--", "dir": "neutral"},
            {"label": "Global GDP", "value": "$104.5T", "dir": "up"},
        ]
    for sym, info in market_data.items():
        chg = info.get("change_pct", 0)
        price = info.get("price", 0)
        if info["type"] == "index":
            val = f"{'+' if chg >= 0 else ''}{chg}%"
            d = "up" if chg > 0 else "down" if chg < 0 else "neutral"
        elif info["type"] == "currency":
            val = f"{price:,.2f}" if price < 100 else f"{price:,.0f}"
            d = "neutral"
        elif info["type"] in ("commodity", "crypto"):
            val = f"${price:,.0f}" if price > 100 else f"${price:,.2f}"
            d = "up" if chg > 0 else "down" if chg < 0 else "neutral"
        else:
            continue
        ticker.append({"label": info["name"], "value": val, "dir": d})
    return ticker

def main():
    print("=" * 60)
    print("Data Generator - data.js 자동 생성")
    print("=" * 60)

    # 1) 원본 데이터 로드
    wb_countries = {}
    wb_indicators = {}
    market_data = {}

    wb_countries_path = os.path.join(RAW_DIR, "wb_countries.json")
    wb_indicators_path = os.path.join(RAW_DIR, "wb_indicators.json")
    market_path = os.path.join(RAW_DIR, "market_data.json")

    if os.path.exists(wb_countries_path):
        with open(wb_countries_path, "r", encoding="utf-8") as f:
            wb_countries = json.load(f)
        print(f"  Loaded {len(wb_countries)} countries from World Bank")

    if os.path.exists(wb_indicators_path):
        with open(wb_indicators_path, "r", encoding="utf-8") as f:
            wb_indicators = json.load(f)
        print(f"  Loaded {len(wb_indicators)} indicators")

    if os.path.exists(market_path):
        with open(market_path, "r", encoding="utf-8") as f:
            mkt = json.load(f)
            market_data = mkt.get("quotes", {})
        print(f"  Loaded {len(market_data)} market quotes")

    # 2) 국가 데이터 빌드
    print("\nBuilding country data...")
    countries_output = {}
    min_gdp = 5  # 최소 GDP $5B 이상만 포함

    for iso3, meta in wb_countries.items():
        iso_num = ISO3_TO_NUM.get(iso3)
        if not iso_num:
            continue

        # GDP 가져오기
        gdp_data = wb_indicators.get("gdp_current_usd", {}).get(iso3, {})
        gdp_raw = gdp_data.get("value", 0)
        gdp_b = round(gdp_raw / 1e9, 1) if gdp_raw else 0

        if gdp_b < min_gdp:
            continue

        pop_data = wb_indicators.get("population", {}).get(iso3, {})
        pop_m = round(pop_data.get("value", 0) / 1e6, 1) if pop_data.get("value") else 0

        region = meta.get("region", "")
        income = meta.get("income", "")
        ko_name = KO_NAMES.get(iso3, meta["name"])
        flag = get_flag(meta.get("iso2", ""))

        # 산업 데이터 추정
        industries = {}
        for ind_key in INDUSTRIES_DEF:
            ind_data = estimate_industry(gdp_b, region, income, ind_key, wb_indicators, iso3)
            industries[ind_key] = ind_data

        country_entry = {
            "name": ko_name,
            "nameEn": meta["name"],
            "code": meta.get("iso2", ""),
            "flag": flag,
            "lat": meta.get("lat", 0),
            "lng": meta.get("lng", 0),
            "gdp": gdp_b,
            "pop": pop_m,
            "region": region,
            "income": income,
            "industries": industries,
        }

        # 추가 지표
        for ind_name in ["gdp_growth_pct", "inflation_pct", "unemployment_pct",
                         "trade_pct_gdp", "internet_users_pct", "renewable_energy_pct"]:
            d = wb_indicators.get(ind_name, {}).get(iso3, {})
            if d.get("value") is not None:
                country_entry[ind_name] = round(d["value"], 1)

        countries_output[iso_num] = country_entry

    print(f"  → {len(countries_output)} countries with GDP > ${min_gdp}B")

    # 3) 글로벌 순위 계산
    print("Computing global industry rankings...")
    for ind_key in INDUSTRIES_DEF:
        ranks = rank_industries(countries_output, ind_key)
        for iso_num, rank in ranks.items():
            countries_output[iso_num]["industries"][ind_key]["rank"] = rank

    # 4) 무역 경로
    print("Building trade routes...")
    trade_routes = build_trade_routes(countries_output)
    print(f"  → {len(trade_routes)} trade routes")

    # 5) 티커 데이터
    print("Building ticker data...")
    ticker = build_ticker_data(market_data)
    print(f"  → {len(ticker)} ticker items")

    # 6) data.js 생성
    print("\nGenerating data.js...")

    # Industries 정의
    industries_js = json.dumps(INDUSTRIES_DEF, ensure_ascii=False, indent=4)

    # Countries 데이터
    countries_js = json.dumps(countries_output, ensure_ascii=False, indent=4)

    # Trade routes
    routes_js = json.dumps(trade_routes, ensure_ascii=False, indent=4)

    # Ticker
    ticker_js = json.dumps(ticker, ensure_ascii=False, indent=4)

    # JS 파일 작성
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    data_js = f"""// === GLOBAL INDUSTRY INTELLIGENCE DATABASE ===
// Auto-generated: {now}
// Sources: World Bank, IMF, Yahoo Finance, ExchangeRate API
// Countries: {len(countries_output)} | Industries: {len(INDUSTRIES_DEF)}

const INDUSTRIES = {industries_js};

const COUNTRIES = {countries_js};

const TRADE_ROUTES = {routes_js};

const TICKER_DATA = {ticker_js};
"""

    output_path = os.path.join(PROJECT_DIR, "data.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(data_js)

    file_size = os.path.getsize(output_path)
    print(f"\n✅ data.js generated!")
    print(f"   - {len(countries_output)} countries")
    print(f"   - {len(INDUSTRIES_DEF)} industries per country")
    print(f"   - {len(countries_output) * len(INDUSTRIES_DEF)} total data points")
    print(f"   - File size: {file_size / 1024:.1f} KB")
    print(f"   - Path: {output_path}")

if __name__ == "__main__":
    main()
