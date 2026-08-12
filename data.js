// === GLOBAL INDUSTRY INTELLIGENCE DATABASE ===
// Auto-generated: 2026-03-10 21:35:08
// Sources: World Bank, IMF, Yahoo Finance, ExchangeRate API
// Countries: 149 | Industries: 12

const INDUSTRIES = {
    "tech": {
        "name": "기술 & IT",
        "nameEn": "Technology & IT",
        "icon": "💻",
        "color": "#00f0ff"
    },
    "manufacturing": {
        "name": "제조업",
        "nameEn": "Manufacturing",
        "icon": "🏭",
        "color": "#ff6b35"
    },
    "finance": {
        "name": "금융 & 은행",
        "nameEn": "Finance & Banking",
        "icon": "💰",
        "color": "#ffd700"
    },
    "healthcare": {
        "name": "헬스케어 & 제약",
        "nameEn": "Healthcare & Pharma",
        "icon": "🏥",
        "color": "#00ff88"
    },
    "energy": {
        "name": "에너지 & 자원",
        "nameEn": "Energy & Resources",
        "icon": "⚡",
        "color": "#ff3366"
    },
    "agriculture": {
        "name": "농업",
        "nameEn": "Agriculture",
        "icon": "🌾",
        "color": "#88cc44"
    },
    "automotive": {
        "name": "자동차",
        "nameEn": "Automotive",
        "icon": "🚗",
        "color": "#aa66ff"
    },
    "retail": {
        "name": "유통 & 이커머스",
        "nameEn": "Retail & E-commerce",
        "icon": "🛒",
        "color": "#ff8844"
    },
    "realestate": {
        "name": "부동산",
        "nameEn": "Real Estate",
        "icon": "🏢",
        "color": "#44aaff"
    },
    "telecom": {
        "name": "통신",
        "nameEn": "Telecommunications",
        "icon": "📡",
        "color": "#cc44ff"
    },
    "tourism": {
        "name": "관광 & 호텔",
        "nameEn": "Tourism & Hospitality",
        "icon": "✈️",
        "color": "#ffcc00"
    },
    "education": {
        "name": "교육",
        "nameEn": "Education",
        "icon": "📚",
        "color": "#44ddcc"
    }
};

const COUNTRIES = {
    "004": {
        "name": "Afghanistan",
        "nameEn": "Afghanistan",
        "code": "AF",
        "flag": "🇦🇫",
        "lat": 34.5228,
        "lng": 69.1761,
        "gdp": 17.2,
        "pop": 42.6,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.6,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 127
            },
            "manufacturing": {
                "size": 2.1,
                "growth": 2.9,
                "potential": 57,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 136
            },
            "finance": {
                "size": 1.2,
                "growth": 4.1,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 134
            },
            "healthcare": {
                "size": 2.1,
                "growth": 5.0,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 95
            },
            "energy": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 113
            },
            "agriculture": {
                "size": 6.0,
                "growth": 2.6,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 75
            },
            "automotive": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 110
            },
            "retail": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 133
            },
            "realestate": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 112
            },
            "telecom": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 92
            },
            "tourism": {
                "size": 1,
                "growth": 5.0,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 83
            },
            "education": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 93
            }
        },
        "gdp_growth_pct": 2.3,
        "inflation_pct": -6.6,
        "unemployment_pct": 13.7,
        "trade_pct_gdp": 67.6,
        "internet_users_pct": 17.7,
        "renewable_energy_pct": 20
    },
    "024": {
        "name": "Angola",
        "nameEn": "Angola",
        "code": "AO",
        "flag": "🇦🇴",
        "lat": -8.81155,
        "lng": 13.242,
        "gdp": 101.0,
        "pop": 37.9,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 5.1,
                "growth": 6.5,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 72
            },
            "manufacturing": {
                "size": 12.1,
                "growth": 3.8,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 73
            },
            "finance": {
                "size": 7.1,
                "growth": 5.0,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 73
            },
            "healthcare": {
                "size": 2.1,
                "growth": 5.9,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 96
            },
            "energy": {
                "size": 4.0,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 72
            },
            "agriculture": {
                "size": 22.3,
                "growth": 3.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 34
            },
            "automotive": {
                "size": 3.0,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 74
            },
            "retail": {
                "size": 6.1,
                "growth": 5.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 71
            },
            "realestate": {
                "size": 4.0,
                "growth": 4.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 70
            },
            "telecom": {
                "size": 2.0,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 70
            },
            "tourism": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 84
            },
            "education": {
                "size": 1.5,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            }
        },
        "gdp_growth_pct": 4.4,
        "inflation_pct": 28.2,
        "unemployment_pct": 14.0,
        "trade_pct_gdp": 50.8,
        "internet_users_pct": 44.8,
        "renewable_energy_pct": 52.9
    },
    "008": {
        "name": "Albania",
        "nameEn": "Albania",
        "code": "AL",
        "flag": "🇦🇱",
        "lat": 41.3317,
        "lng": 19.8172,
        "gdp": 27.0,
        "pop": 2.4,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.4,
                "growth": 5.8,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 111
            },
            "manufacturing": {
                "size": 3.6,
                "growth": 3.1,
                "potential": 76,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 111
            },
            "finance": {
                "size": 2.3,
                "growth": 4.3,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 108
            },
            "healthcare": {
                "size": 1.5,
                "growth": 5.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 108
            },
            "energy": {
                "size": 1.2,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 110
            },
            "agriculture": {
                "size": 4.2,
                "growth": 2.8,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 90
            },
            "automotive": {
                "size": 1.1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 107
            },
            "retail": {
                "size": 1.6,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 110
            },
            "realestate": {
                "size": 1.1,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 110
            },
            "telecom": {
                "size": 1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 93
            },
            "tourism": {
                "size": 1.6,
                "growth": 5.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 69
            },
            "education": {
                "size": 1,
                "growth": 4.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 94
            }
        },
        "gdp_growth_pct": 4.0,
        "inflation_pct": 2.2,
        "unemployment_pct": 10.7,
        "trade_pct_gdp": 79.5,
        "internet_users_pct": 83.1,
        "renewable_energy_pct": 41.9
    },
    "784": {
        "name": "아랍에미리트",
        "nameEn": "United Arab Emirates",
        "code": "AE",
        "flag": "🇦🇪",
        "lat": 24.4764,
        "lng": 54.3705,
        "gdp": 552.3,
        "pop": 11.0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 27.6,
                "growth": 5.8,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 33
            },
            "manufacturing": {
                "size": 66.3,
                "growth": 3.1,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 32
            },
            "finance": {
                "size": 38.7,
                "growth": 4.3,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 28
            },
            "healthcare": {
                "size": 22.0,
                "growth": 5.2,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 37
            },
            "energy": {
                "size": 22.1,
                "growth": 4.0,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "agriculture": {
                "size": 4.2,
                "growth": 2.8,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 91
            },
            "automotive": {
                "size": 16.6,
                "growth": 4.0,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 32
            },
            "retail": {
                "size": 33.1,
                "growth": 4.6,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "realestate": {
                "size": 22.1,
                "growth": 3.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "telecom": {
                "size": 11.0,
                "growth": 4.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "tourism": {
                "size": 24.6,
                "growth": 5.2,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "education": {
                "size": 12.9,
                "growth": 4.6,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            }
        },
        "gdp_growth_pct": 4.0,
        "inflation_pct": 1.7,
        "unemployment_pct": 2.2,
        "trade_pct_gdp": 199.0,
        "internet_users_pct": 100,
        "renewable_energy_pct": 1
    },
    "032": {
        "name": "아르헨티나",
        "nameEn": "Argentina",
        "code": "AR",
        "flag": "🇦🇷",
        "lat": -34.6118,
        "lng": -58.4173,
        "gdp": 638.4,
        "pop": 45.7,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 31.9,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 28
            },
            "manufacturing": {
                "size": 76.6,
                "growth": 1.5,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 30
            },
            "finance": {
                "size": 44.7,
                "growth": 2.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 26
            },
            "healthcare": {
                "size": 52.4,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 22
            },
            "energy": {
                "size": 25.5,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 25
            },
            "agriculture": {
                "size": 37.1,
                "growth": 1.2,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 25
            },
            "automotive": {
                "size": 19.2,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 28
            },
            "retail": {
                "size": 38.3,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 23
            },
            "realestate": {
                "size": 25.5,
                "growth": 1.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 23
            },
            "telecom": {
                "size": 12.8,
                "growth": 2.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 24
            },
            "tourism": {
                "size": 3.2,
                "growth": 3.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 43
            },
            "education": {
                "size": 22.6,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 23
            }
        },
        "gdp_growth_pct": -1.3,
        "inflation_pct": 219.9,
        "unemployment_pct": 7.2,
        "trade_pct_gdp": 27.9,
        "internet_users_pct": 89.7,
        "renewable_energy_pct": 9.2
    },
    "051": {
        "name": "Armenia",
        "nameEn": "Armenia",
        "code": "AM",
        "flag": "🇦🇲",
        "lat": 40.1596,
        "lng": 44.509,
        "gdp": 26.0,
        "pop": 3.0,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.3,
                "growth": 6.6,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 112
            },
            "manufacturing": {
                "size": 3.4,
                "growth": 3.9,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 112
            },
            "finance": {
                "size": 2.2,
                "growth": 5.1,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 110
            },
            "healthcare": {
                "size": 1.9,
                "growth": 6.0,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 100
            },
            "energy": {
                "size": 1.1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 111
            },
            "agriculture": {
                "size": 2.0,
                "growth": 3.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 115
            },
            "automotive": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 111
            },
            "retail": {
                "size": 1.6,
                "growth": 5.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 111
            },
            "realestate": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 113
            },
            "telecom": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 94
            },
            "tourism": {
                "size": 1,
                "growth": 6.0,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 85
            },
            "education": {
                "size": 1,
                "growth": 5.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 95
            }
        },
        "gdp_growth_pct": 5.9,
        "inflation_pct": 0.3,
        "unemployment_pct": 12.4,
        "trade_pct_gdp": 150.1,
        "internet_users_pct": 80.0,
        "renewable_energy_pct": 9.1
    },
    "036": {
        "name": "호주",
        "nameEn": "Australia",
        "code": "AU",
        "flag": "🇦🇺",
        "lat": -35.282,
        "lng": 149.129,
        "gdp": 1757.0,
        "pop": 27.2,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 131.8,
                "growth": 4.7,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "manufacturing": {
                "size": 337.3,
                "growth": 2.0,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 9
            },
            "finance": {
                "size": 123.0,
                "growth": 3.2,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 15
            },
            "healthcare": {
                "size": 146.2,
                "growth": 4.1,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "energy": {
                "size": 70.3,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 15
            },
            "agriculture": {
                "size": 35.8,
                "growth": 1.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "automotive": {
                "size": 68.5,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "retail": {
                "size": 105.4,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 14
            },
            "realestate": {
                "size": 70.3,
                "growth": 2.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 14
            },
            "telecom": {
                "size": 42.2,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "tourism": {
                "size": 26.2,
                "growth": 4.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "education": {
                "size": 53.3,
                "growth": 3.5,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            }
        },
        "gdp_growth_pct": 1.4,
        "inflation_pct": 3.2,
        "unemployment_pct": 3.9,
        "trade_pct_gdp": 47.1,
        "internet_users_pct": 97.1,
        "renewable_energy_pct": 12.3
    },
    "040": {
        "name": "오스트리아",
        "nameEn": "Austria",
        "code": "AT",
        "flag": "🇦🇹",
        "lat": 48.2201,
        "lng": 16.3798,
        "gdp": 534.8,
        "pop": 9.2,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 26.7,
                "growth": 4.2,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 34
            },
            "manufacturing": {
                "size": 70.6,
                "growth": 1.5,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 31
            },
            "finance": {
                "size": 44.9,
                "growth": 2.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 25
            },
            "healthcare": {
                "size": 50.6,
                "growth": 3.6,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "energy": {
                "size": 23.5,
                "growth": 2.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "agriculture": {
                "size": 6.5,
                "growth": 1.2,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 70
            },
            "automotive": {
                "size": 20.9,
                "growth": 2.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "retail": {
                "size": 32.1,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "realestate": {
                "size": 21.4,
                "growth": 1.8,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "telecom": {
                "size": 10.7,
                "growth": 2.4,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 32
            },
            "tourism": {
                "size": 20.0,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "education": {
                "size": 16.9,
                "growth": 3.0,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 25
            }
        },
        "gdp_growth_pct": -0.7,
        "inflation_pct": 2.9,
        "unemployment_pct": 5.2,
        "trade_pct_gdp": 108.8,
        "internet_users_pct": 94.9,
        "renewable_energy_pct": 36
    },
    "031": {
        "name": "Azerbaijan",
        "nameEn": "Azerbaijan",
        "code": "AZ",
        "flag": "🇦🇿",
        "lat": 40.3834,
        "lng": 49.8932,
        "gdp": 74.3,
        "pop": 10.2,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 3.7,
                "growth": 5.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 84
            },
            "manufacturing": {
                "size": 9.8,
                "growth": 3.1,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 82
            },
            "finance": {
                "size": 6.2,
                "growth": 4.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 78
            },
            "healthcare": {
                "size": 2.5,
                "growth": 5.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 88
            },
            "energy": {
                "size": 3.3,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 79
            },
            "agriculture": {
                "size": 4.2,
                "growth": 2.8,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 92
            },
            "automotive": {
                "size": 2.9,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 77
            },
            "retail": {
                "size": 4.5,
                "growth": 4.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 83
            },
            "realestate": {
                "size": 3.0,
                "growth": 3.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 82
            },
            "telecom": {
                "size": 1.5,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 83
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 86
            },
            "education": {
                "size": 1.6,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 79
            }
        },
        "gdp_growth_pct": 4.1,
        "inflation_pct": 2.2,
        "unemployment_pct": 5.6,
        "trade_pct_gdp": 82.7,
        "internet_users_pct": 89,
        "renewable_energy_pct": 1.3
    },
    "056": {
        "name": "벨기에",
        "nameEn": "Belgium",
        "code": "BE",
        "flag": "🇧🇪",
        "lat": 50.8371,
        "lng": 4.36761,
        "gdp": 671.4,
        "pop": 11.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 34.3,
                "growth": 4.6,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "manufacturing": {
                "size": 88.6,
                "growth": 1.9,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 25
            },
            "finance": {
                "size": 56.4,
                "growth": 3.1,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "healthcare": {
                "size": 58.0,
                "growth": 4.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "energy": {
                "size": 29.5,
                "growth": 2.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "agriculture": {
                "size": 5.3,
                "growth": 1.6,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 82
            },
            "automotive": {
                "size": 26.2,
                "growth": 2.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "retail": {
                "size": 40.3,
                "growth": 3.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "realestate": {
                "size": 26.9,
                "growth": 2.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "telecom": {
                "size": 13.4,
                "growth": 2.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "tourism": {
                "size": 9.7,
                "growth": 4.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "education": {
                "size": 25.3,
                "growth": 3.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            }
        },
        "gdp_growth_pct": 1.1,
        "inflation_pct": 3.1,
        "unemployment_pct": 5.7,
        "trade_pct_gdp": 158.9,
        "internet_users_pct": 95.8,
        "renewable_energy_pct": 11.7
    },
    "204": {
        "name": "Benin",
        "nameEn": "Benin",
        "code": "BJ",
        "flag": "🇧🇯",
        "lat": 6.4779,
        "lng": 2.6323,
        "gdp": 21.5,
        "pop": 14.5,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 7.7,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 122
            },
            "manufacturing": {
                "size": 2.6,
                "growth": 5.0,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 124
            },
            "finance": {
                "size": 1.5,
                "growth": 6.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 122
            },
            "healthcare": {
                "size": 1,
                "growth": 7.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 119
            },
            "energy": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "agriculture": {
                "size": 5.2,
                "growth": 4.7,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 83
            },
            "automotive": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 112
            },
            "retail": {
                "size": 1.3,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 122
            },
            "realestate": {
                "size": 1,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "telecom": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 95
            },
            "tourism": {
                "size": 1,
                "growth": 7.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 87
            },
            "education": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 96
            }
        },
        "gdp_growth_pct": 7.5,
        "inflation_pct": 1.2,
        "unemployment_pct": 1.6,
        "trade_pct_gdp": 40.6,
        "internet_users_pct": 32.2,
        "renewable_energy_pct": 54.5
    },
    "854": {
        "name": "Burkina Faso",
        "nameEn": "Burkina Faso",
        "code": "BF",
        "flag": "🇧🇫",
        "lat": 12.3605,
        "lng": -1.53395,
        "gdp": 23.1,
        "pop": 23.5,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 6.6,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 117
            },
            "manufacturing": {
                "size": 2.8,
                "growth": 3.9,
                "potential": 59,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 121
            },
            "finance": {
                "size": 1.6,
                "growth": 5.1,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 120
            },
            "healthcare": {
                "size": 1.4,
                "growth": 6.0,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 112
            },
            "energy": {
                "size": 1,
                "growth": 4.8,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 115
            },
            "agriculture": {
                "size": 4.8,
                "growth": 3.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 87
            },
            "automotive": {
                "size": 1,
                "growth": 4.8,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 113
            },
            "retail": {
                "size": 1.4,
                "growth": 5.4,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 118
            },
            "realestate": {
                "size": 1,
                "growth": 4.2,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 115
            },
            "telecom": {
                "size": 1,
                "growth": 4.8,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 96
            },
            "tourism": {
                "size": 1,
                "growth": 6.0,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 88
            },
            "education": {
                "size": 1,
                "growth": 5.4,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 97
            }
        },
        "gdp_growth_pct": 4.8,
        "inflation_pct": 4.2,
        "unemployment_pct": 3.4,
        "trade_pct_gdp": 60.5,
        "internet_users_pct": 17.0,
        "renewable_energy_pct": 71.4
    },
    "050": {
        "name": "방글라데시",
        "nameEn": "Bangladesh",
        "code": "BD",
        "flag": "🇧🇩",
        "lat": 23.7055,
        "lng": 90.4113,
        "gdp": 450.1,
        "pop": 173.6,
        "region": "South Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 29.3,
                "growth": 6.4,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 32
            },
            "manufacturing": {
                "size": 54.0,
                "growth": 3.7,
                "potential": 75,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 37
            },
            "finance": {
                "size": 31.5,
                "growth": 4.9,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 37
            },
            "healthcare": {
                "size": 7.8,
                "growth": 5.8,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 56
            },
            "energy": {
                "size": 18.0,
                "growth": 4.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 36
            },
            "agriculture": {
                "size": 90.5,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 6
            },
            "automotive": {
                "size": 13.5,
                "growth": 4.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 38
            },
            "retail": {
                "size": 35.1,
                "growth": 5.2,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 26
            },
            "realestate": {
                "size": 18.0,
                "growth": 4.0,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 35
            },
            "telecom": {
                "size": 9.0,
                "growth": 4.6,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 36
            },
            "tourism": {
                "size": 2.3,
                "growth": 5.8,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 54
            },
            "education": {
                "size": 6.6,
                "growth": 5.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 49
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 10.5,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 26.8,
        "internet_users_pct": 44.5,
        "renewable_energy_pct": 25
    },
    "100": {
        "name": "Bulgaria",
        "nameEn": "Bulgaria",
        "code": "BG",
        "flag": "🇧🇬",
        "lat": 42.7105,
        "lng": 23.3238,
        "gdp": 113.3,
        "pop": 6.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 5.7,
                "growth": 5.6,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 67
            },
            "manufacturing": {
                "size": 15.0,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 62
            },
            "finance": {
                "size": 9.5,
                "growth": 4.1,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 62
            },
            "healthcare": {
                "size": 7.2,
                "growth": 5.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 60
            },
            "energy": {
                "size": 5.0,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 62
            },
            "agriculture": {
                "size": 2.7,
                "growth": 2.6,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 107
            },
            "automotive": {
                "size": 4.4,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 62
            },
            "retail": {
                "size": 6.8,
                "growth": 4.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 67
            },
            "realestate": {
                "size": 4.5,
                "growth": 3.2,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 66
            },
            "telecom": {
                "size": 2.3,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 65
            },
            "tourism": {
                "size": 2.3,
                "growth": 5.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            },
            "education": {
                "size": 3.1,
                "growth": 4.4,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 62
            }
        },
        "gdp_growth_pct": 3.4,
        "inflation_pct": 2.4,
        "unemployment_pct": 4.2,
        "trade_pct_gdp": 110.2,
        "internet_users_pct": 82.4,
        "renewable_energy_pct": 20.4
    },
    "048": {
        "name": "바레인",
        "nameEn": "Bahrain",
        "code": "BH",
        "flag": "🇧🇭",
        "lat": 26.1921,
        "lng": 50.5354,
        "gdp": 47.1,
        "pop": 1.6,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 2.4,
                "growth": 5.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 96
            },
            "manufacturing": {
                "size": 5.7,
                "growth": 2.5,
                "potential": 79,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 98
            },
            "finance": {
                "size": 3.3,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 97
            },
            "healthcare": {
                "size": 1.5,
                "growth": 4.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 109
            },
            "energy": {
                "size": 1.9,
                "growth": 3.4,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 94
            },
            "agriculture": {
                "size": 1,
                "growth": 2.2,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 132
            },
            "automotive": {
                "size": 1.4,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 99
            },
            "retail": {
                "size": 2.8,
                "growth": 4.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 96
            },
            "realestate": {
                "size": 1.9,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 94
            },
            "telecom": {
                "size": 1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 97
            },
            "tourism": {
                "size": 1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 89
            },
            "education": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 98
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 0.9,
        "unemployment_pct": 1.1,
        "trade_pct_gdp": 157.8,
        "internet_users_pct": 100,
        "renewable_energy_pct": 0
    },
    "070": {
        "name": "Bosnia and Herzegovina",
        "nameEn": "Bosnia and Herzegovina",
        "code": "BA",
        "flag": "🇧🇦",
        "lat": 43.8607,
        "lng": 18.4214,
        "gdp": 29.6,
        "pop": 3.2,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.5,
                "growth": 5.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 110
            },
            "manufacturing": {
                "size": 3.9,
                "growth": 2.7,
                "potential": 75,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 109
            },
            "finance": {
                "size": 2.5,
                "growth": 3.9,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 106
            },
            "healthcare": {
                "size": 2.1,
                "growth": 4.8,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 97
            },
            "energy": {
                "size": 1.3,
                "growth": 3.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 107
            },
            "agriculture": {
                "size": 1.3,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 126
            },
            "automotive": {
                "size": 1.2,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 104
            },
            "retail": {
                "size": 1.8,
                "growth": 4.2,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 109
            },
            "realestate": {
                "size": 1.2,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 109
            },
            "telecom": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 98
            },
            "tourism": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 90
            },
            "education": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 99
            }
        },
        "gdp_growth_pct": 3.0,
        "inflation_pct": 1.7,
        "unemployment_pct": 10.7,
        "trade_pct_gdp": 95.2,
        "internet_users_pct": 86.1,
        "renewable_energy_pct": 36.6
    },
    "112": {
        "name": "Belarus",
        "nameEn": "Belarus",
        "code": "BY",
        "flag": "🇧🇾",
        "lat": 53.9678,
        "lng": 27.5766,
        "gdp": 76.0,
        "pop": 9.1,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 3.8,
                "growth": 5.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 83
            },
            "manufacturing": {
                "size": 10.0,
                "growth": 3.1,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 80
            },
            "finance": {
                "size": 6.4,
                "growth": 4.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 77
            },
            "healthcare": {
                "size": 4.3,
                "growth": 5.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 74
            },
            "energy": {
                "size": 3.3,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 80
            },
            "agriculture": {
                "size": 5.2,
                "growth": 2.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 84
            },
            "automotive": {
                "size": 3.0,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 75
            },
            "retail": {
                "size": 4.6,
                "growth": 4.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 82
            },
            "realestate": {
                "size": 3.0,
                "growth": 3.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 83
            },
            "telecom": {
                "size": 1.5,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 84
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 91
            },
            "education": {
                "size": 2.3,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 68
            }
        },
        "gdp_growth_pct": 4.0,
        "inflation_pct": 5.8,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 131.9,
        "internet_users_pct": 94.3,
        "renewable_energy_pct": 8.2
    },
    "068": {
        "name": "Bolivia",
        "nameEn": "Bolivia",
        "code": "BO",
        "flag": "🇧🇴",
        "lat": -13.9908,
        "lng": -66.1936,
        "gdp": 54.9,
        "pop": 12.4,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.7,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 89
            },
            "manufacturing": {
                "size": 6.6,
                "growth": 2.0,
                "potential": 68,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 89
            },
            "finance": {
                "size": 3.8,
                "growth": 3.2,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "healthcare": {
                "size": 3.0,
                "growth": 4.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            },
            "energy": {
                "size": 2.2,
                "growth": 2.9,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "agriculture": {
                "size": 4.8,
                "growth": 1.7,
                "potential": 67,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "automotive": {
                "size": 1.6,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 91
            },
            "retail": {
                "size": 3.3,
                "growth": 3.5,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 87
            },
            "realestate": {
                "size": 2.2,
                "growth": 2.3,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 87
            },
            "telecom": {
                "size": 1.1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 87
            },
            "tourism": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 92
            },
            "education": {
                "size": 2.7,
                "growth": 3.5,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 67
            }
        },
        "gdp_growth_pct": -1.1,
        "inflation_pct": 5.1,
        "unemployment_pct": 3.3,
        "trade_pct_gdp": 47.0,
        "internet_users_pct": 70.2,
        "renewable_energy_pct": 12.8
    },
    "076": {
        "name": "브라질",
        "nameEn": "Brazil",
        "code": "BR",
        "flag": "🇧🇷",
        "lat": -15.7801,
        "lng": -47.9292,
        "gdp": 2185.8,
        "pop": 212.0,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 109.3,
                "growth": 5.6,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "manufacturing": {
                "size": 262.3,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 13
            },
            "finance": {
                "size": 153.0,
                "growth": 4.1,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "healthcare": {
                "size": 170.2,
                "growth": 5.0,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "energy": {
                "size": 87.4,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "agriculture": {
                "size": 125.7,
                "growth": 2.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 5
            },
            "automotive": {
                "size": 65.6,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 14
            },
            "retail": {
                "size": 131.1,
                "growth": 4.4,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 10
            },
            "realestate": {
                "size": 87.4,
                "growth": 3.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 10
            },
            "telecom": {
                "size": 43.7,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "tourism": {
                "size": 10.9,
                "growth": 5.0,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 27
            },
            "education": {
                "size": 73.7,
                "growth": 4.4,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            }
        },
        "gdp_growth_pct": 3.4,
        "inflation_pct": 4.4,
        "unemployment_pct": 6.8,
        "trade_pct_gdp": 35.6,
        "internet_users_pct": 84.5,
        "renewable_energy_pct": 46.5
    },
    "096": {
        "name": "Brunei Darussalam",
        "nameEn": "Brunei Darussalam",
        "code": "BN",
        "flag": "🇧🇳",
        "lat": 4.94199,
        "lng": 114.946,
        "gdp": 15.3,
        "pop": 0.5,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 5.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 123
            },
            "manufacturing": {
                "size": 2.9,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 120
            },
            "finance": {
                "size": 1.1,
                "growth": 4.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 138
            },
            "healthcare": {
                "size": 1,
                "growth": 5.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 120
            },
            "energy": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 116
            },
            "agriculture": {
                "size": 1,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 133
            },
            "automotive": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 114
            },
            "retail": {
                "size": 1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 134
            },
            "realestate": {
                "size": 1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 116
            },
            "telecom": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 99
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 93
            },
            "education": {
                "size": 1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 100
            }
        },
        "gdp_growth_pct": 4.1,
        "inflation_pct": -0.4,
        "unemployment_pct": 5.2,
        "trade_pct_gdp": 132.6,
        "internet_users_pct": 99.0,
        "renewable_energy_pct": 0
    },
    "072": {
        "name": "Botswana",
        "nameEn": "Botswana",
        "code": "BW",
        "flag": "🇧🇼",
        "lat": -24.6544,
        "lng": 25.9201,
        "gdp": 19.4,
        "pop": 2.5,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 128
            },
            "manufacturing": {
                "size": 2.3,
                "growth": 1.5,
                "potential": 72,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 132
            },
            "finance": {
                "size": 1.4,
                "growth": 2.7,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 128
            },
            "healthcare": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 121
            },
            "energy": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 117
            },
            "agriculture": {
                "size": 1,
                "growth": 1.2,
                "potential": 70,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 134
            },
            "automotive": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 115
            },
            "retail": {
                "size": 1.2,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 126
            },
            "realestate": {
                "size": 1,
                "growth": 1.8,
                "potential": 72,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 117
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 100
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 94
            },
            "education": {
                "size": 1,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 101
            }
        },
        "gdp_growth_pct": -3.0,
        "inflation_pct": 2.8,
        "unemployment_pct": 23.8,
        "trade_pct_gdp": 71.1,
        "internet_users_pct": 81.4,
        "renewable_energy_pct": 27.4
    },
    "124": {
        "name": "캐나다",
        "nameEn": "Canada",
        "code": "CA",
        "flag": "🇨🇦",
        "lat": 45.4215,
        "lng": -75.6919,
        "gdp": 2243.6,
        "pop": 41.3,
        "region": "North America",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 201.9,
                "growth": 4.8,
                "potential": 89,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "manufacturing": {
                "size": 242.3,
                "growth": 2.1,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 14
            },
            "finance": {
                "size": 235.6,
                "growth": 3.3,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "healthcare": {
                "size": 324.8,
                "growth": 4.2,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "energy": {
                "size": 89.7,
                "growth": 3.0,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "agriculture": {
                "size": 35.9,
                "growth": 1.8,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "automotive": {
                "size": 67.3,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "retail": {
                "size": 188.5,
                "growth": 3.6,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "realestate": {
                "size": 89.7,
                "growth": 2.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "telecom": {
                "size": 44.9,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "tourism": {
                "size": 44.9,
                "growth": 4.2,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "education": {
                "size": 65.7,
                "growth": 3.6,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            }
        },
        "gdp_growth_pct": 1.6,
        "inflation_pct": 2.4,
        "unemployment_pct": 6.4,
        "trade_pct_gdp": 65.1,
        "internet_users_pct": 94.0,
        "renewable_energy_pct": 23.8
    },
    "756": {
        "name": "스위스",
        "nameEn": "Switzerland",
        "code": "CH",
        "flag": "🇨🇭",
        "lat": 46.948,
        "lng": 7.44821,
        "gdp": 936.6,
        "pop": 9.0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 46.8,
                "growth": 4.7,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "manufacturing": {
                "size": 123.6,
                "growth": 2.0,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 20
            },
            "finance": {
                "size": 78.7,
                "growth": 3.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "healthcare": {
                "size": 87.6,
                "growth": 4.1,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 16
            },
            "energy": {
                "size": 41.2,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "agriculture": {
                "size": 5.9,
                "growth": 1.7,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 77
            },
            "automotive": {
                "size": 36.5,
                "growth": 2.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "retail": {
                "size": 56.2,
                "growth": 3.5,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "realestate": {
                "size": 37.5,
                "growth": 2.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "telecom": {
                "size": 18.7,
                "growth": 2.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "tourism": {
                "size": 13.0,
                "growth": 4.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "education": {
                "size": 27.7,
                "growth": 3.5,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            }
        },
        "gdp_growth_pct": 1.3,
        "inflation_pct": 1.1,
        "unemployment_pct": 4.3,
        "trade_pct_gdp": 134.1,
        "internet_users_pct": 97.3,
        "renewable_energy_pct": 27.7
    },
    "152": {
        "name": "칠레",
        "nameEn": "Chile",
        "code": "CL",
        "flag": "🇨🇱",
        "lat": -33.475,
        "lng": -70.6475,
        "gdp": 330.3,
        "pop": 19.8,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 16.5,
                "growth": 5.3,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "manufacturing": {
                "size": 39.6,
                "growth": 2.6,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 46
            },
            "finance": {
                "size": 23.1,
                "growth": 3.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 47
            },
            "healthcare": {
                "size": 27.8,
                "growth": 4.7,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 31
            },
            "energy": {
                "size": 13.2,
                "growth": 3.5,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "agriculture": {
                "size": 12.9,
                "growth": 2.3,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 47
            },
            "automotive": {
                "size": 9.9,
                "growth": 3.5,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 49
            },
            "retail": {
                "size": 19.8,
                "growth": 4.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "realestate": {
                "size": 13.2,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "telecom": {
                "size": 6.6,
                "growth": 3.5,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "tourism": {
                "size": 1.7,
                "growth": 4.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 66
            },
            "education": {
                "size": 9.7,
                "growth": 4.1,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 35
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 4.3,
        "unemployment_pct": 8.7,
        "trade_pct_gdp": 63.9,
        "internet_users_pct": 94.5,
        "renewable_energy_pct": 24.2
    },
    "156": {
        "name": "중국",
        "nameEn": "China",
        "code": "CN",
        "flag": "🇨🇳",
        "lat": 40.0495,
        "lng": 116.286,
        "gdp": 18743.8,
        "pop": 1409.0,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1405.8,
                "growth": 6.2,
                "potential": 90,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "manufacturing": {
                "size": 3598.8,
                "growth": 3.5,
                "potential": 86,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 1
            },
            "finance": {
                "size": 1312.1,
                "growth": 4.7,
                "potential": 87,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "healthcare": {
                "size": 891.3,
                "growth": 5.6,
                "potential": 88,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "energy": {
                "size": 749.8,
                "growth": 4.4,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "agriculture": {
                "size": 1270.1,
                "growth": 3.2,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 1
            },
            "automotive": {
                "size": 731.0,
                "growth": 4.4,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "retail": {
                "size": 1124.6,
                "growth": 5.0,
                "potential": 87,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "realestate": {
                "size": 749.8,
                "growth": 3.8,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "telecom": {
                "size": 449.9,
                "growth": 4.4,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "tourism": {
                "size": 374.9,
                "growth": 5.6,
                "potential": 87,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 1
            },
            "education": {
                "size": 450.0,
                "growth": 5.0,
                "potential": 86,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 0.2,
        "unemployment_pct": 4.6,
        "trade_pct_gdp": 37.2,
        "internet_users_pct": 92,
        "renewable_energy_pct": 15.2
    },
    "384": {
        "name": "Cote d'Ivoire",
        "nameEn": "Cote d'Ivoire",
        "code": "CI",
        "flag": "🇨🇮",
        "lat": 5.332,
        "lng": -4.0305,
        "gdp": 87.1,
        "pop": 31.9,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 4.4,
                "growth": 7.1,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 77
            },
            "manufacturing": {
                "size": 10.5,
                "growth": 4.4,
                "potential": 74,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 78
            },
            "finance": {
                "size": 6.1,
                "growth": 5.6,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 79
            },
            "healthcare": {
                "size": 2.4,
                "growth": 6.5,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "energy": {
                "size": 3.5,
                "growth": 5.3,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 77
            },
            "agriculture": {
                "size": 13.8,
                "growth": 4.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 44
            },
            "automotive": {
                "size": 2.6,
                "growth": 5.3,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 81
            },
            "retail": {
                "size": 5.2,
                "growth": 5.9,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 76
            },
            "realestate": {
                "size": 3.5,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 76
            },
            "telecom": {
                "size": 1.7,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 77
            },
            "tourism": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 95
            },
            "education": {
                "size": 1.8,
                "growth": 5.9,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 77
            }
        },
        "gdp_growth_pct": 6.0,
        "inflation_pct": 3.5,
        "unemployment_pct": 2.3,
        "trade_pct_gdp": 51.3,
        "internet_users_pct": 40.7,
        "renewable_energy_pct": 58.2
    },
    "120": {
        "name": "Cameroon",
        "nameEn": "Cameroon",
        "code": "CM",
        "flag": "🇨🇲",
        "lat": 3.8721,
        "lng": 11.5174,
        "gdp": 53.3,
        "pop": 29.1,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.7,
                "growth": 6.1,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "manufacturing": {
                "size": 6.4,
                "growth": 3.4,
                "potential": 71,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 91
            },
            "finance": {
                "size": 3.7,
                "growth": 4.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "healthcare": {
                "size": 1.9,
                "growth": 5.5,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 101
            },
            "energy": {
                "size": 2.1,
                "growth": 4.3,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "agriculture": {
                "size": 9.8,
                "growth": 3.1,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 57
            },
            "automotive": {
                "size": 1.6,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 92
            },
            "retail": {
                "size": 3.2,
                "growth": 4.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 89
            },
            "realestate": {
                "size": 2.1,
                "growth": 3.7,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 89
            },
            "telecom": {
                "size": 1.1,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "tourism": {
                "size": 1,
                "growth": 5.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 96
            },
            "education": {
                "size": 1,
                "growth": 4.9,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 102
            }
        },
        "gdp_growth_pct": 3.5,
        "inflation_pct": 4.5,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 34.4,
        "internet_users_pct": 41.9,
        "renewable_energy_pct": 79.2
    },
    "180": {
        "name": "Congo, Dem. Rep.",
        "nameEn": "Congo, Dem. Rep.",
        "code": "CD",
        "flag": "🇨🇩",
        "lat": -4.325,
        "lng": 15.3222,
        "gdp": 71.0,
        "pop": 109.3,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 3.6,
                "growth": 7.2,
                "potential": 66,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "manufacturing": {
                "size": 8.5,
                "growth": 4.5,
                "potential": 62,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 87
            },
            "finance": {
                "size": 5.0,
                "growth": 5.7,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "healthcare": {
                "size": 2.1,
                "growth": 6.6,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 98
            },
            "energy": {
                "size": 2.8,
                "growth": 5.4,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "agriculture": {
                "size": 6.8,
                "growth": 4.2,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 68
            },
            "automotive": {
                "size": 2.1,
                "growth": 5.4,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "retail": {
                "size": 4.3,
                "growth": 6.0,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "realestate": {
                "size": 2.8,
                "growth": 4.8,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "telecom": {
                "size": 1.4,
                "growth": 5.4,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 86
            },
            "tourism": {
                "size": 1,
                "growth": 6.6,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 97
            },
            "education": {
                "size": 1.2,
                "growth": 6.0,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 87
            }
        },
        "gdp_growth_pct": 6.1,
        "unemployment_pct": 4.4,
        "trade_pct_gdp": 100.6,
        "internet_users_pct": 30.5,
        "renewable_energy_pct": 96.3
    },
    "178": {
        "name": "Congo, Rep.",
        "nameEn": "Congo, Rep.",
        "code": "CG",
        "flag": "🇨🇬",
        "lat": -4.2767,
        "lng": 15.2662,
        "gdp": 15.7,
        "pop": 6.3,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 129
            },
            "manufacturing": {
                "size": 1.9,
                "growth": 3.0,
                "potential": 69,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 138
            },
            "finance": {
                "size": 1.1,
                "growth": 4.2,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 139
            },
            "healthcare": {
                "size": 1,
                "growth": 5.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 122
            },
            "energy": {
                "size": 1,
                "growth": 3.9,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 118
            },
            "agriculture": {
                "size": 1.5,
                "growth": 2.7,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 123
            },
            "automotive": {
                "size": 1,
                "growth": 3.9,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 116
            },
            "retail": {
                "size": 1,
                "growth": 4.5,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 135
            },
            "realestate": {
                "size": 1,
                "growth": 3.3,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 118
            },
            "telecom": {
                "size": 1,
                "growth": 3.9,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 101
            },
            "tourism": {
                "size": 1,
                "growth": 5.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 98
            },
            "education": {
                "size": 1,
                "growth": 4.5,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 103
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 3.1,
        "unemployment_pct": 19.9,
        "trade_pct_gdp": 93.2,
        "internet_users_pct": 38.4,
        "renewable_energy_pct": 71.4
    },
    "170": {
        "name": "콜롬비아",
        "nameEn": "Colombia",
        "code": "CO",
        "flag": "🇨🇴",
        "lat": 4.60987,
        "lng": -74.082,
        "gdp": 418.8,
        "pop": 52.9,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 20.9,
                "growth": 4.8,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "manufacturing": {
                "size": 50.3,
                "growth": 2.1,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 39
            },
            "finance": {
                "size": 29.3,
                "growth": 3.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 39
            },
            "healthcare": {
                "size": 27.3,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 32
            },
            "energy": {
                "size": 16.8,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "agriculture": {
                "size": 38.9,
                "growth": 1.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 22
            },
            "automotive": {
                "size": 12.6,
                "growth": 3.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 40
            },
            "retail": {
                "size": 25.1,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "realestate": {
                "size": 16.8,
                "growth": 2.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "telecom": {
                "size": 8.4,
                "growth": 3.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "tourism": {
                "size": 2.1,
                "growth": 4.2,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 59
            },
            "education": {
                "size": 13.2,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 29
            }
        },
        "gdp_growth_pct": 1.6,
        "inflation_pct": 6.6,
        "unemployment_pct": 9.6,
        "trade_pct_gdp": 37.0,
        "internet_users_pct": 77.3,
        "renewable_energy_pct": 29.7
    },
    "188": {
        "name": "Costa Rica",
        "nameEn": "Costa Rica",
        "code": "CR",
        "flag": "🇨🇷",
        "lat": 9.63701,
        "lng": -84.0089,
        "gdp": 95.4,
        "pop": 5.1,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.8,
                "growth": 5.9,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "manufacturing": {
                "size": 11.4,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 76
            },
            "finance": {
                "size": 6.7,
                "growth": 4.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 76
            },
            "healthcare": {
                "size": 5.2,
                "growth": 5.3,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            },
            "energy": {
                "size": 3.8,
                "growth": 4.1,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 75
            },
            "agriculture": {
                "size": 3.4,
                "growth": 2.9,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 101
            },
            "automotive": {
                "size": 2.9,
                "growth": 4.1,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "retail": {
                "size": 5.7,
                "growth": 4.7,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 72
            },
            "realestate": {
                "size": 3.8,
                "growth": 3.5,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 72
            },
            "telecom": {
                "size": 1.9,
                "growth": 4.1,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 72
            },
            "tourism": {
                "size": 1.5,
                "growth": 5.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 70
            },
            "education": {
                "size": 3.6,
                "growth": 4.7,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 61
            }
        },
        "gdp_growth_pct": 4.3,
        "inflation_pct": -0.4,
        "unemployment_pct": 6.9,
        "trade_pct_gdp": 71.3,
        "internet_users_pct": 85.4,
        "renewable_energy_pct": 34.2
    },
    "192": {
        "name": "Cuba",
        "nameEn": "Cuba",
        "code": "CU",
        "flag": "🇨🇺",
        "lat": 23.1333,
        "lng": -82.3667,
        "gdp": 107.4,
        "pop": 11.0,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 5.4,
                "growth": 4.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 70
            },
            "manufacturing": {
                "size": 12.9,
                "growth": 1.5,
                "potential": 74,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 69
            },
            "finance": {
                "size": 7.5,
                "growth": 2.7,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 71
            },
            "healthcare": {
                "size": 8.1,
                "growth": 3.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 55
            },
            "energy": {
                "size": 4.3,
                "growth": 2.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 68
            },
            "agriculture": {
                "size": 1.3,
                "growth": 1.2,
                "potential": 71,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 127
            },
            "automotive": {
                "size": 3.2,
                "growth": 2.4,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 72
            },
            "retail": {
                "size": 6.4,
                "growth": 3.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 69
            },
            "realestate": {
                "size": 4.3,
                "growth": 1.8,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 68
            },
            "telecom": {
                "size": 2.1,
                "growth": 2.4,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 68
            },
            "tourism": {
                "size": 1.2,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 76
            },
            "education": {
                "size": 5.4,
                "growth": 3.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 54
            }
        },
        "gdp_growth_pct": -1.1,
        "unemployment_pct": 1.8,
        "trade_pct_gdp": 124.9,
        "internet_users_pct": 71.3,
        "renewable_energy_pct": 20.9
    },
    "196": {
        "name": "Cyprus",
        "nameEn": "Cyprus",
        "code": "CY",
        "flag": "🇨🇾",
        "lat": 35.1676,
        "lng": 33.3736,
        "gdp": 37.6,
        "pop": 1.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.9,
                "growth": 5.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 103
            },
            "manufacturing": {
                "size": 5.0,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 102
            },
            "finance": {
                "size": 3.2,
                "growth": 4.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 98
            },
            "healthcare": {
                "size": 2.4,
                "growth": 5.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 91
            },
            "energy": {
                "size": 1.7,
                "growth": 4.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 100
            },
            "agriculture": {
                "size": 1,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 135
            },
            "automotive": {
                "size": 1.5,
                "growth": 4.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 95
            },
            "retail": {
                "size": 2.3,
                "growth": 4.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 102
            },
            "realestate": {
                "size": 1.5,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 102
            },
            "telecom": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 102
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 99
            },
            "education": {
                "size": 1.1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 89
            }
        },
        "gdp_growth_pct": 3.9,
        "inflation_pct": 1.8,
        "unemployment_pct": 4.9,
        "trade_pct_gdp": 190.4,
        "internet_users_pct": 91.2,
        "renewable_energy_pct": 15.6
    },
    "203": {
        "name": "체코",
        "nameEn": "Czechia",
        "code": "CZ",
        "flag": "🇨🇿",
        "lat": 50.0878,
        "lng": 14.4205,
        "gdp": 347.0,
        "pop": 10.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 17.4,
                "growth": 4.7,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "manufacturing": {
                "size": 45.8,
                "growth": 2.0,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 43
            },
            "finance": {
                "size": 29.1,
                "growth": 3.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 40
            },
            "healthcare": {
                "size": 23.6,
                "growth": 4.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 35
            },
            "energy": {
                "size": 15.3,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 42
            },
            "agriculture": {
                "size": 6.6,
                "growth": 1.7,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            },
            "automotive": {
                "size": 13.5,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 39
            },
            "retail": {
                "size": 20.8,
                "growth": 3.5,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 43
            },
            "realestate": {
                "size": 13.9,
                "growth": 2.3,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 43
            },
            "telecom": {
                "size": 6.9,
                "growth": 2.9,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 43
            },
            "tourism": {
                "size": 5.1,
                "growth": 4.1,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 39
            },
            "education": {
                "size": 9.0,
                "growth": 3.5,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 37
            }
        },
        "gdp_growth_pct": 1.2,
        "inflation_pct": 2.4,
        "unemployment_pct": 2.6,
        "trade_pct_gdp": 131.5,
        "internet_users_pct": 87.7,
        "renewable_energy_pct": 17.2
    },
    "276": {
        "name": "독일",
        "nameEn": "Germany",
        "code": "DE",
        "flag": "🇩🇪",
        "lat": 52.5235,
        "lng": 13.4115,
        "gdp": 4685.6,
        "pop": 83.5,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 234.3,
                "growth": 4.2,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "manufacturing": {
                "size": 618.5,
                "growth": 1.5,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 4
            },
            "finance": {
                "size": 393.6,
                "growth": 2.7,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "healthcare": {
                "size": 459.8,
                "growth": 3.6,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "energy": {
                "size": 206.2,
                "growth": 2.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "agriculture": {
                "size": 42.8,
                "growth": 1.2,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "automotive": {
                "size": 182.7,
                "growth": 2.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "retail": {
                "size": 281.1,
                "growth": 3.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "realestate": {
                "size": 187.4,
                "growth": 1.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "telecom": {
                "size": 93.7,
                "growth": 2.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "tourism": {
                "size": 75.9,
                "growth": 3.6,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "education": {
                "size": 147.3,
                "growth": 3.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            }
        },
        "gdp_growth_pct": -0.5,
        "inflation_pct": 2.3,
        "unemployment_pct": 3.4,
        "trade_pct_gdp": 79.1,
        "internet_users_pct": 93.5,
        "renewable_energy_pct": 17.6
    },
    "208": {
        "name": "덴마크",
        "nameEn": "Denmark",
        "code": "DK",
        "flag": "🇩🇰",
        "lat": 55.6763,
        "lng": 12.5681,
        "gdp": 424.5,
        "pop": 6.0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 21.2,
                "growth": 5.6,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 37
            },
            "manufacturing": {
                "size": 56.0,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 36
            },
            "finance": {
                "size": 35.7,
                "growth": 4.1,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 32
            },
            "healthcare": {
                "size": 31.9,
                "growth": 5.0,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "energy": {
                "size": 18.7,
                "growth": 3.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 34
            },
            "agriculture": {
                "size": 3.9,
                "growth": 2.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 95
            },
            "automotive": {
                "size": 16.6,
                "growth": 3.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 33
            },
            "retail": {
                "size": 25.5,
                "growth": 4.4,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 36
            },
            "realestate": {
                "size": 17.0,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 36
            },
            "telecom": {
                "size": 8.5,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 37
            },
            "tourism": {
                "size": 11.8,
                "growth": 5.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "education": {
                "size": 16.2,
                "growth": 4.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            }
        },
        "gdp_growth_pct": 3.5,
        "inflation_pct": 1.4,
        "unemployment_pct": 5.4,
        "trade_pct_gdp": 131.8,
        "internet_users_pct": 99.8,
        "renewable_energy_pct": 39.5
    },
    "214": {
        "name": "Dominican Republic",
        "nameEn": "Dominican Republic",
        "code": "DO",
        "flag": "🇩🇴",
        "lat": 18.479,
        "lng": -69.8908,
        "gdp": 124.3,
        "pop": 11.4,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 6.2,
                "growth": 6.2,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 62
            },
            "manufacturing": {
                "size": 14.9,
                "growth": 3.5,
                "potential": 79,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 64
            },
            "finance": {
                "size": 8.7,
                "growth": 4.7,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 63
            },
            "healthcare": {
                "size": 4.6,
                "growth": 5.6,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 71
            },
            "energy": {
                "size": 5.0,
                "growth": 4.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 63
            },
            "agriculture": {
                "size": 5.5,
                "growth": 3.2,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 79
            },
            "automotive": {
                "size": 3.7,
                "growth": 4.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 63
            },
            "retail": {
                "size": 7.5,
                "growth": 5.0,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 62
            },
            "realestate": {
                "size": 5.0,
                "growth": 3.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 61
            },
            "telecom": {
                "size": 2.5,
                "growth": 4.4,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 61
            },
            "tourism": {
                "size": 7.6,
                "growth": 5.6,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 31
            },
            "education": {
                "size": 2.8,
                "growth": 5.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 65
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 3.3,
        "unemployment_pct": 5.3,
        "trade_pct_gdp": 51.8,
        "internet_users_pct": 91.0,
        "renewable_energy_pct": 14.8
    },
    "012": {
        "name": "Algeria",
        "nameEn": "Algeria",
        "code": "DZ",
        "flag": "🇩🇿",
        "lat": 36.7397,
        "lng": 3.05097,
        "gdp": 269.3,
        "pop": 46.8,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 13.5,
                "growth": 5.7,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "manufacturing": {
                "size": 32.3,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 52
            },
            "finance": {
                "size": 18.9,
                "growth": 4.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "healthcare": {
                "size": 9.4,
                "growth": 5.1,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "energy": {
                "size": 10.8,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "agriculture": {
                "size": 37.6,
                "growth": 2.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 24
            },
            "automotive": {
                "size": 8.1,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 53
            },
            "retail": {
                "size": 16.2,
                "growth": 4.5,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "realestate": {
                "size": 10.8,
                "growth": 3.3,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "telecom": {
                "size": 5.4,
                "growth": 3.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "tourism": {
                "size": 1.3,
                "growth": 5.1,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 73
            },
            "education": {
                "size": 9.1,
                "growth": 4.5,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 36
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 4.0,
        "unemployment_pct": 11.7,
        "trade_pct_gdp": 40.1,
        "internet_users_pct": 76.9,
        "renewable_energy_pct": 0.1
    },
    "218": {
        "name": "Ecuador",
        "nameEn": "Ecuador",
        "code": "EC",
        "flag": "🇪🇨",
        "lat": -0.229498,
        "lng": -78.5243,
        "gdp": 124.7,
        "pop": 18.1,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 6.2,
                "growth": 4.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 63
            },
            "manufacturing": {
                "size": 15.0,
                "growth": 1.5,
                "potential": 75,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 63
            },
            "finance": {
                "size": 8.7,
                "growth": 2.7,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 64
            },
            "healthcare": {
                "size": 7.5,
                "growth": 3.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 58
            },
            "energy": {
                "size": 5.0,
                "growth": 2.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 64
            },
            "agriculture": {
                "size": 11.8,
                "growth": 1.2,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "automotive": {
                "size": 3.7,
                "growth": 2.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 64
            },
            "retail": {
                "size": 7.5,
                "growth": 3.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 63
            },
            "realestate": {
                "size": 5.0,
                "growth": 1.8,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 62
            },
            "telecom": {
                "size": 2.5,
                "growth": 2.4,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 62
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 100
            },
            "education": {
                "size": 2.9,
                "growth": 3.0,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 63
            }
        },
        "gdp_growth_pct": -2.0,
        "inflation_pct": 1.5,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 57.2,
        "internet_users_pct": 77.2,
        "renewable_energy_pct": 18.9
    },
    "818": {
        "name": "이집트",
        "nameEn": "Egypt, Arab Rep.",
        "code": "EG",
        "flag": "🇪🇬",
        "lat": 30.0982,
        "lng": 31.2461,
        "gdp": 389.1,
        "pop": 116.5,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 19.5,
                "growth": 5.7,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 40
            },
            "manufacturing": {
                "size": 46.7,
                "growth": 3.0,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 42
            },
            "finance": {
                "size": 27.2,
                "growth": 4.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 42
            },
            "healthcare": {
                "size": 15.2,
                "growth": 5.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 45
            },
            "energy": {
                "size": 15.6,
                "growth": 3.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 41
            },
            "agriculture": {
                "size": 53.4,
                "growth": 2.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 13
            },
            "automotive": {
                "size": 11.7,
                "growth": 3.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 43
            },
            "retail": {
                "size": 23.3,
                "growth": 4.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 40
            },
            "realestate": {
                "size": 15.6,
                "growth": 3.3,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 40
            },
            "telecom": {
                "size": 7.8,
                "growth": 3.9,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 40
            },
            "tourism": {
                "size": 4.9,
                "growth": 5.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 40
            },
            "education": {
                "size": 7.8,
                "growth": 4.5,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 45
            }
        },
        "gdp_growth_pct": 2.4,
        "inflation_pct": 28.3,
        "unemployment_pct": 6.8,
        "trade_pct_gdp": 39.6,
        "internet_users_pct": 72.7,
        "renewable_energy_pct": 6.1
    },
    "724": {
        "name": "스페인",
        "nameEn": "Spain",
        "code": "ES",
        "flag": "🇪🇸",
        "lat": 40.4167,
        "lng": -3.70327,
        "gdp": 1725.7,
        "pop": 48.8,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 86.3,
                "growth": 5.6,
                "potential": 89,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 16
            },
            "manufacturing": {
                "size": 227.8,
                "growth": 2.9,
                "potential": 85,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 15
            },
            "finance": {
                "size": 145.0,
                "growth": 4.1,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "healthcare": {
                "size": 127.3,
                "growth": 5.0,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "energy": {
                "size": 75.9,
                "growth": 3.8,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "agriculture": {
                "size": 47.5,
                "growth": 2.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 17
            },
            "automotive": {
                "size": 67.3,
                "growth": 3.8,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "retail": {
                "size": 103.5,
                "growth": 4.4,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 15
            },
            "realestate": {
                "size": 69.0,
                "growth": 3.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 15
            },
            "telecom": {
                "size": 34.5,
                "growth": 3.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 15
            },
            "tourism": {
                "size": 44.9,
                "growth": 5.0,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "education": {
                "size": 47.5,
                "growth": 4.4,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 14
            }
        },
        "gdp_growth_pct": 3.5,
        "inflation_pct": 2.8,
        "unemployment_pct": 11.4,
        "trade_pct_gdp": 70.0,
        "internet_users_pct": 95.8,
        "renewable_energy_pct": 19
    },
    "233": {
        "name": "Estonia",
        "nameEn": "Estonia",
        "code": "EE",
        "flag": "🇪🇪",
        "lat": 59.4392,
        "lng": 24.7586,
        "gdp": 43.1,
        "pop": 1.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 2.2,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 99
            },
            "manufacturing": {
                "size": 5.7,
                "growth": 1.5,
                "potential": 77,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 99
            },
            "finance": {
                "size": 3.6,
                "growth": 2.7,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 93
            },
            "healthcare": {
                "size": 2.7,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "energy": {
                "size": 1.9,
                "growth": 2.4,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 95
            },
            "agriculture": {
                "size": 1,
                "growth": 1.2,
                "potential": 74,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 136
            },
            "automotive": {
                "size": 1.7,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 89
            },
            "retail": {
                "size": 2.6,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 99
            },
            "realestate": {
                "size": 1.7,
                "growth": 1.8,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 98
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 103
            },
            "tourism": {
                "size": 1.1,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "education": {
                "size": 1.3,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 84
            }
        },
        "gdp_growth_pct": -0.1,
        "inflation_pct": 3.5,
        "unemployment_pct": 7.6,
        "trade_pct_gdp": 151.0,
        "internet_users_pct": 92.2,
        "renewable_energy_pct": 38
    },
    "231": {
        "name": "에티오피아",
        "nameEn": "Ethiopia",
        "code": "ET",
        "flag": "🇪🇹",
        "lat": 9.02274,
        "lng": 38.7468,
        "gdp": 149.7,
        "pop": 132.1,
        "region": "Sub-Saharan Africa ",
        "income": "Not classified",
        "industries": {
            "tech": {
                "size": 7.5,
                "growth": 7.2,
                "potential": 67,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 59
            },
            "manufacturing": {
                "size": 18.0,
                "growth": 4.5,
                "potential": 63,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 60
            },
            "finance": {
                "size": 10.5,
                "growth": 5.7,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 60
            },
            "healthcare": {
                "size": 3.4,
                "growth": 6.6,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 77
            },
            "energy": {
                "size": 6.0,
                "growth": 5.4,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 60
            },
            "agriculture": {
                "size": 52.1,
                "growth": 4.2,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 14
            },
            "automotive": {
                "size": 4.5,
                "growth": 5.4,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 60
            },
            "retail": {
                "size": 9.0,
                "growth": 6.0,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 59
            },
            "realestate": {
                "size": 6.0,
                "growth": 4.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 59
            },
            "telecom": {
                "size": 3.0,
                "growth": 5.4,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 59
            },
            "tourism": {
                "size": 2.3,
                "growth": 6.6,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 56
            },
            "education": {
                "size": 2.1,
                "growth": 6.0,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 73
            }
        },
        "gdp_growth_pct": 7.6,
        "inflation_pct": 21.0,
        "unemployment_pct": 3.4,
        "trade_pct_gdp": 17.4,
        "internet_users_pct": 16.7,
        "renewable_energy_pct": 90.6
    },
    "246": {
        "name": "핀란드",
        "nameEn": "Finland",
        "code": "FI",
        "flag": "🇫🇮",
        "lat": 60.1608,
        "lng": 24.9525,
        "gdp": 298.7,
        "pop": 5.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 14.9,
                "growth": 4.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 47
            },
            "manufacturing": {
                "size": 39.4,
                "growth": 1.7,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 47
            },
            "finance": {
                "size": 25.1,
                "growth": 2.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "healthcare": {
                "size": 25.0,
                "growth": 3.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 34
            },
            "energy": {
                "size": 13.1,
                "growth": 2.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 46
            },
            "agriculture": {
                "size": 7.4,
                "growth": 1.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 64
            },
            "automotive": {
                "size": 11.6,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "retail": {
                "size": 17.9,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 46
            },
            "realestate": {
                "size": 11.9,
                "growth": 2.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 46
            },
            "telecom": {
                "size": 6.0,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 47
            },
            "tourism": {
                "size": 2.3,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "education": {
                "size": 11.4,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 31
            }
        },
        "gdp_growth_pct": 0.4,
        "inflation_pct": 1.6,
        "unemployment_pct": 8.4,
        "trade_pct_gdp": 83.5,
        "internet_users_pct": 93.5,
        "renewable_energy_pct": 50.2
    },
    "250": {
        "name": "프랑스",
        "nameEn": "France",
        "code": "FR",
        "flag": "🇫🇷",
        "lat": 48.8566,
        "lng": 2.35097,
        "gdp": 3160.4,
        "pop": 68.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 158.0,
                "growth": 4.7,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "manufacturing": {
                "size": 417.2,
                "growth": 2.0,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 7
            },
            "finance": {
                "size": 265.5,
                "growth": 3.2,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "healthcare": {
                "size": 291.6,
                "growth": 4.1,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "energy": {
                "size": 139.1,
                "growth": 2.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "agriculture": {
                "size": 41.1,
                "growth": 1.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "automotive": {
                "size": 123.3,
                "growth": 2.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "retail": {
                "size": 189.6,
                "growth": 3.5,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "realestate": {
                "size": 126.4,
                "growth": 2.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "telecom": {
                "size": 63.2,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            },
            "tourism": {
                "size": 46.7,
                "growth": 4.1,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "education": {
                "size": 101.0,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            }
        },
        "gdp_growth_pct": 1.2,
        "inflation_pct": 2.0,
        "unemployment_pct": 7.4,
        "trade_pct_gdp": 68.1,
        "internet_users_pct": 88.7,
        "renewable_energy_pct": 16.2
    },
    "266": {
        "name": "Gabon",
        "nameEn": "Gabon",
        "code": "GA",
        "flag": "🇬🇦",
        "lat": 0.38832,
        "lng": 9.45162,
        "gdp": 20.9,
        "pop": 2.5,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 130
            },
            "manufacturing": {
                "size": 2.5,
                "growth": 2.9,
                "potential": 75,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 127
            },
            "finance": {
                "size": 1.5,
                "growth": 4.1,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 123
            },
            "healthcare": {
                "size": 1,
                "growth": 5.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 123
            },
            "energy": {
                "size": 1,
                "growth": 3.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 119
            },
            "agriculture": {
                "size": 1.4,
                "growth": 2.6,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 125
            },
            "automotive": {
                "size": 1,
                "growth": 3.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 117
            },
            "retail": {
                "size": 1.3,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 123
            },
            "realestate": {
                "size": 1,
                "growth": 3.2,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 119
            },
            "telecom": {
                "size": 1,
                "growth": 3.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 104
            },
            "tourism": {
                "size": 1,
                "growth": 5.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 101
            },
            "education": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 104
            }
        },
        "gdp_growth_pct": 3.4,
        "inflation_pct": 1.2,
        "unemployment_pct": 20.1,
        "trade_pct_gdp": 92.0,
        "internet_users_pct": 71.9,
        "renewable_energy_pct": 91.3
    },
    "826": {
        "name": "영국",
        "nameEn": "United Kingdom",
        "code": "GB",
        "flag": "🇬🇧",
        "lat": 51.5002,
        "lng": -0.126236,
        "gdp": 3686.0,
        "pop": 69.2,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 184.3,
                "growth": 4.7,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "manufacturing": {
                "size": 486.6,
                "growth": 2.0,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 5
            },
            "finance": {
                "size": 309.6,
                "growth": 3.2,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "healthcare": {
                "size": 328.3,
                "growth": 4.1,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "energy": {
                "size": 162.2,
                "growth": 2.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "agriculture": {
                "size": 23.5,
                "growth": 1.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 32
            },
            "automotive": {
                "size": 143.8,
                "growth": 2.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "retail": {
                "size": 221.2,
                "growth": 3.5,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "realestate": {
                "size": 147.4,
                "growth": 2.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "telecom": {
                "size": 73.7,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "tourism": {
                "size": 95.8,
                "growth": 4.1,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "education": {
                "size": 130.6,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            }
        },
        "gdp_growth_pct": 1.1,
        "inflation_pct": 3.3,
        "unemployment_pct": 4.4,
        "trade_pct_gdp": 62.8,
        "internet_users_pct": 96.3,
        "renewable_energy_pct": 12.2
    },
    "268": {
        "name": "Georgia",
        "nameEn": "Georgia",
        "code": "GE",
        "flag": "🇬🇪",
        "lat": 41.71,
        "lng": 44.793,
        "gdp": 34.2,
        "pop": 3.7,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.7,
                "growth": 8.1,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 107
            },
            "manufacturing": {
                "size": 4.5,
                "growth": 5.4,
                "potential": 81,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 105
            },
            "finance": {
                "size": 2.9,
                "growth": 6.6,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 102
            },
            "healthcare": {
                "size": 1.9,
                "growth": 7.5,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 102
            },
            "energy": {
                "size": 1.5,
                "growth": 6.3,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 103
            },
            "agriculture": {
                "size": 1.9,
                "growth": 5.1,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 117
            },
            "automotive": {
                "size": 1.3,
                "growth": 6.3,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 100
            },
            "retail": {
                "size": 2.1,
                "growth": 6.9,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 104
            },
            "realestate": {
                "size": 1.4,
                "growth": 5.7,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 104
            },
            "telecom": {
                "size": 1,
                "growth": 6.3,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 105
            },
            "tourism": {
                "size": 1,
                "growth": 7.5,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 102
            },
            "education": {
                "size": 1,
                "growth": 6.9,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 105
            }
        },
        "gdp_growth_pct": 9.7,
        "inflation_pct": 1.1,
        "unemployment_pct": 11.6,
        "trade_pct_gdp": 103.5,
        "internet_users_pct": 81.9,
        "renewable_energy_pct": 25.2
    },
    "288": {
        "name": "가나",
        "nameEn": "Ghana",
        "code": "GH",
        "flag": "🇬🇭",
        "lat": 5.57045,
        "lng": -0.20795,
        "gdp": 82.3,
        "pop": 34.4,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 4.1,
                "growth": 6.9,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            },
            "manufacturing": {
                "size": 9.9,
                "growth": 4.2,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 81
            },
            "finance": {
                "size": 5.8,
                "growth": 5.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 82
            },
            "healthcare": {
                "size": 1.9,
                "growth": 6.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 103
            },
            "energy": {
                "size": 3.3,
                "growth": 5.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 81
            },
            "agriculture": {
                "size": 17.2,
                "growth": 3.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 39
            },
            "automotive": {
                "size": 2.5,
                "growth": 5.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 83
            },
            "retail": {
                "size": 4.9,
                "growth": 5.7,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 79
            },
            "realestate": {
                "size": 3.3,
                "growth": 4.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 79
            },
            "telecom": {
                "size": 1.6,
                "growth": 5.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            },
            "tourism": {
                "size": 1,
                "growth": 6.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 103
            },
            "education": {
                "size": 1.4,
                "growth": 5.7,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 83
            }
        },
        "gdp_growth_pct": 5.6,
        "inflation_pct": 22.8,
        "unemployment_pct": 2.8,
        "trade_pct_gdp": 69.8,
        "internet_users_pct": 69.9,
        "renewable_energy_pct": 39
    },
    "324": {
        "name": "Guinea",
        "nameEn": "Guinea",
        "code": "GN",
        "flag": "🇬🇳",
        "lat": 9.51667,
        "lng": -13.7,
        "gdp": 25.0,
        "pop": 14.8,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 6.8,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 118
            },
            "manufacturing": {
                "size": 3.0,
                "growth": 4.1,
                "potential": 72,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 116
            },
            "finance": {
                "size": 1.8,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 113
            },
            "healthcare": {
                "size": 1,
                "growth": 6.2,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 124
            },
            "energy": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 120
            },
            "agriculture": {
                "size": 7.7,
                "growth": 3.8,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 62
            },
            "automotive": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 118
            },
            "retail": {
                "size": 1.5,
                "growth": 5.6,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 113
            },
            "realestate": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 120
            },
            "telecom": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 106
            },
            "tourism": {
                "size": 1,
                "growth": 6.2,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 104
            },
            "education": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 106
            }
        },
        "gdp_growth_pct": 5.4,
        "inflation_pct": 8.1,
        "unemployment_pct": 5.1,
        "trade_pct_gdp": 97.8,
        "internet_users_pct": 26.5,
        "renewable_energy_pct": 66.6
    },
    "226": {
        "name": "Equatorial Guinea",
        "nameEn": "Equatorial Guinea",
        "code": "GQ",
        "flag": "🇬🇶",
        "lat": 3.7523,
        "lng": 8.7741,
        "gdp": 12.8,
        "pop": 1.9,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 4.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 131
            },
            "manufacturing": {
                "size": 1.5,
                "growth": 1.9,
                "potential": 72,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 143
            },
            "finance": {
                "size": 1,
                "growth": 3.1,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 140
            },
            "healthcare": {
                "size": 1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 125
            },
            "energy": {
                "size": 1,
                "growth": 2.8,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 121
            },
            "agriculture": {
                "size": 1,
                "growth": 1.6,
                "potential": 71,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 137
            },
            "automotive": {
                "size": 1,
                "growth": 2.8,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 119
            },
            "retail": {
                "size": 1,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 136
            },
            "realestate": {
                "size": 1,
                "growth": 2.2,
                "potential": 72,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 121
            },
            "telecom": {
                "size": 1,
                "growth": 2.8,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 107
            },
            "tourism": {
                "size": 1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 105
            },
            "education": {
                "size": 1,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 107
            }
        },
        "gdp_growth_pct": 0.9,
        "inflation_pct": 2.9,
        "unemployment_pct": 8.3,
        "trade_pct_gdp": 60.5,
        "internet_users_pct": 60.4,
        "renewable_energy_pct": 4.2
    },
    "300": {
        "name": "그리스",
        "nameEn": "Greece",
        "code": "GR",
        "flag": "🇬🇷",
        "lat": 37.9792,
        "lng": 23.7166,
        "gdp": 256.2,
        "pop": 10.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 12.8,
                "growth": 5.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 52
            },
            "manufacturing": {
                "size": 33.8,
                "growth": 2.3,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 50
            },
            "finance": {
                "size": 21.5,
                "growth": 3.5,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 48
            },
            "healthcare": {
                "size": 17.2,
                "growth": 4.4,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "energy": {
                "size": 11.3,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 49
            },
            "agriculture": {
                "size": 9.6,
                "growth": 2.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 58
            },
            "automotive": {
                "size": 10.0,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 48
            },
            "retail": {
                "size": 15.4,
                "growth": 3.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 52
            },
            "realestate": {
                "size": 10.2,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 52
            },
            "telecom": {
                "size": 5.1,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 52
            },
            "tourism": {
                "size": 8.1,
                "growth": 4.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "education": {
                "size": 5.2,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            }
        },
        "gdp_growth_pct": 2.1,
        "inflation_pct": 2.7,
        "unemployment_pct": 10.0,
        "trade_pct_gdp": 89.8,
        "internet_users_pct": 86.3,
        "renewable_energy_pct": 21.5
    },
    "320": {
        "name": "Guatemala",
        "nameEn": "Guatemala",
        "code": "GT",
        "flag": "🇬🇹",
        "lat": 14.6248,
        "lng": -90.5328,
        "gdp": 113.2,
        "pop": 18.4,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 5.7,
                "growth": 5.7,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 68
            },
            "manufacturing": {
                "size": 13.6,
                "growth": 3.0,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 68
            },
            "finance": {
                "size": 7.9,
                "growth": 4.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 67
            },
            "healthcare": {
                "size": 6.2,
                "growth": 5.1,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 62
            },
            "energy": {
                "size": 4.5,
                "growth": 3.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 67
            },
            "agriculture": {
                "size": 11.1,
                "growth": 2.7,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 52
            },
            "automotive": {
                "size": 3.4,
                "growth": 3.9,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 70
            },
            "retail": {
                "size": 6.8,
                "growth": 4.5,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 68
            },
            "realestate": {
                "size": 4.5,
                "growth": 3.3,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 67
            },
            "telecom": {
                "size": 2.3,
                "growth": 3.9,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 66
            },
            "tourism": {
                "size": 1,
                "growth": 5.1,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 106
            },
            "education": {
                "size": 2.1,
                "growth": 4.5,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 74
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 2.9,
        "unemployment_pct": 2.6,
        "trade_pct_gdp": 47.3,
        "internet_users_pct": 56.1,
        "renewable_energy_pct": 62.1
    },
    "328": {
        "name": "Guyana",
        "nameEn": "Guyana",
        "code": "GY",
        "flag": "🇬🇾",
        "lat": 6.80461,
        "lng": -58.1548,
        "gdp": 24.7,
        "pop": 0.8,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 21.7,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 119
            },
            "manufacturing": {
                "size": 3.0,
                "growth": 19.0,
                "potential": 99,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 117
            },
            "finance": {
                "size": 1.7,
                "growth": 20.2,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 117
            },
            "healthcare": {
                "size": 1,
                "growth": 21.1,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 126
            },
            "energy": {
                "size": 1,
                "growth": 19.9,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 122
            },
            "agriculture": {
                "size": 1.9,
                "growth": 18.7,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 118
            },
            "automotive": {
                "size": 1,
                "growth": 19.9,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 120
            },
            "retail": {
                "size": 1.5,
                "growth": 20.5,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 114
            },
            "realestate": {
                "size": 1,
                "growth": 19.3,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 122
            },
            "telecom": {
                "size": 1,
                "growth": 19.9,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 108
            },
            "tourism": {
                "size": 1,
                "growth": 21.1,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 107
            },
            "education": {
                "size": 1,
                "growth": 20.5,
                "potential": 99,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 108
            }
        },
        "gdp_growth_pct": 43.8,
        "inflation_pct": 2.9,
        "unemployment_pct": 11.9,
        "internet_users_pct": 81.7,
        "renewable_energy_pct": 12.1
    },
    "340": {
        "name": "Honduras",
        "nameEn": "Honduras",
        "code": "HN",
        "flag": "🇭🇳",
        "lat": 15.1333,
        "lng": -87.4667,
        "gdp": 37.1,
        "pop": 10.8,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.9,
                "growth": 6.1,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 104
            },
            "manufacturing": {
                "size": 4.5,
                "growth": 3.4,
                "potential": 71,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 106
            },
            "finance": {
                "size": 2.6,
                "growth": 4.6,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 105
            },
            "healthcare": {
                "size": 2.3,
                "growth": 5.5,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 93
            },
            "energy": {
                "size": 1.5,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 104
            },
            "agriculture": {
                "size": 4.2,
                "growth": 3.1,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 93
            },
            "automotive": {
                "size": 1.1,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 108
            },
            "retail": {
                "size": 2.2,
                "growth": 4.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 103
            },
            "realestate": {
                "size": 1.5,
                "growth": 3.7,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 103
            },
            "telecom": {
                "size": 1,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            },
            "tourism": {
                "size": 1,
                "growth": 5.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 108
            },
            "education": {
                "size": 1,
                "growth": 4.9,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            }
        },
        "gdp_growth_pct": 3.6,
        "inflation_pct": 4.6,
        "unemployment_pct": 4.9,
        "trade_pct_gdp": 91.1,
        "internet_users_pct": 58.3,
        "renewable_energy_pct": 45.9
    },
    "191": {
        "name": "Croatia",
        "nameEn": "Croatia",
        "code": "HR",
        "flag": "🇭🇷",
        "lat": 45.8069,
        "lng": 15.9614,
        "gdp": 93.0,
        "pop": 3.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.7,
                "growth": 5.7,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 74
            },
            "manufacturing": {
                "size": 12.3,
                "growth": 3.0,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 71
            },
            "finance": {
                "size": 7.8,
                "growth": 4.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 68
            },
            "healthcare": {
                "size": 5.3,
                "growth": 5.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 68
            },
            "energy": {
                "size": 4.1,
                "growth": 3.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 70
            },
            "agriculture": {
                "size": 2.7,
                "growth": 2.7,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 108
            },
            "automotive": {
                "size": 3.6,
                "growth": 3.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 65
            },
            "retail": {
                "size": 5.6,
                "growth": 4.5,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "realestate": {
                "size": 3.7,
                "growth": 3.3,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "telecom": {
                "size": 1.9,
                "growth": 3.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "tourism": {
                "size": 7.3,
                "growth": 5.1,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 32
            },
            "education": {
                "size": 2.3,
                "growth": 4.5,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            }
        },
        "gdp_growth_pct": 3.8,
        "inflation_pct": 3.0,
        "unemployment_pct": 5,
        "trade_pct_gdp": 104.9,
        "internet_users_pct": 83.6,
        "renewable_energy_pct": 34.1
    },
    "332": {
        "name": "Haiti",
        "nameEn": "Haiti",
        "code": "HT",
        "flag": "🇭🇹",
        "lat": 18.5392,
        "lng": -72.3288,
        "gdp": 25.2,
        "pop": 11.8,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.3,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 113
            },
            "manufacturing": {
                "size": 3.0,
                "growth": 2.0,
                "potential": 67,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 118
            },
            "finance": {
                "size": 1.8,
                "growth": 3.2,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "healthcare": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 127
            },
            "energy": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 123
            },
            "agriculture": {
                "size": 4.0,
                "growth": 1.7,
                "potential": 67,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 94
            },
            "automotive": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 121
            },
            "retail": {
                "size": 1.5,
                "growth": 3.5,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 115
            },
            "realestate": {
                "size": 1,
                "growth": 2.3,
                "potential": 67,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 123
            },
            "telecom": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 110
            },
            "tourism": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            },
            "education": {
                "size": 1,
                "growth": 3.5,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 110
            }
        },
        "gdp_growth_pct": -4.2,
        "inflation_pct": 26.9,
        "unemployment_pct": 14.6,
        "trade_pct_gdp": 22.2,
        "internet_users_pct": 39.3,
        "renewable_energy_pct": 76.7
    },
    "348": {
        "name": "헝가리",
        "nameEn": "Hungary",
        "code": "HU",
        "flag": "🇭🇺",
        "lat": 47.4984,
        "lng": 19.0408,
        "gdp": 222.7,
        "pop": 9.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 11.1,
                "growth": 4.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "manufacturing": {
                "size": 29.4,
                "growth": 1.7,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 54
            },
            "finance": {
                "size": 18.7,
                "growth": 2.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 52
            },
            "healthcare": {
                "size": 11.3,
                "growth": 3.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 50
            },
            "energy": {
                "size": 9.8,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "agriculture": {
                "size": 6.0,
                "growth": 1.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 76
            },
            "automotive": {
                "size": 8.7,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 50
            },
            "retail": {
                "size": 13.4,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "realestate": {
                "size": 8.9,
                "growth": 2.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "telecom": {
                "size": 4.5,
                "growth": 2.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "tourism": {
                "size": 5.5,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 36
            },
            "education": {
                "size": 5.1,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 56
            }
        },
        "gdp_growth_pct": 0.6,
        "inflation_pct": 3.7,
        "unemployment_pct": 4.5,
        "trade_pct_gdp": 146.5,
        "internet_users_pct": 93.8,
        "renewable_energy_pct": 15.3
    },
    "360": {
        "name": "인도네시아",
        "nameEn": "Indonesia",
        "code": "ID",
        "flag": "🇮🇩",
        "lat": -6.19752,
        "lng": 106.83,
        "gdp": 1396.3,
        "pop": 283.5,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 104.7,
                "growth": 6.2,
                "potential": 86,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 14
            },
            "manufacturing": {
                "size": 268.1,
                "growth": 3.5,
                "potential": 82,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 12
            },
            "finance": {
                "size": 97.7,
                "growth": 4.7,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 18
            },
            "healthcare": {
                "size": 30.2,
                "growth": 5.6,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 29
            },
            "energy": {
                "size": 55.9,
                "growth": 4.4,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "agriculture": {
                "size": 176.1,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 4
            },
            "automotive": {
                "size": 54.5,
                "growth": 4.4,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 16
            },
            "retail": {
                "size": 83.8,
                "growth": 5.0,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 16
            },
            "realestate": {
                "size": 55.9,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 16
            },
            "telecom": {
                "size": 33.5,
                "growth": 4.4,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 16
            },
            "tourism": {
                "size": 7.0,
                "growth": 5.6,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 33
            },
            "education": {
                "size": 10.7,
                "growth": 5.0,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 33
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 2.2,
        "unemployment_pct": 3.3,
        "trade_pct_gdp": 42.6,
        "internet_users_pct": 72.8,
        "renewable_energy_pct": 20.2
    },
    "356": {
        "name": "인도",
        "nameEn": "India",
        "code": "IN",
        "flag": "🇮🇳",
        "lat": 28.6353,
        "lng": 77.225,
        "gdp": 3909.9,
        "pop": 1450.9,
        "region": "South Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 254.1,
                "growth": 7.3,
                "potential": 84,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 4
            },
            "manufacturing": {
                "size": 469.2,
                "growth": 4.6,
                "potential": 79,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 6
            },
            "finance": {
                "size": 273.7,
                "growth": 5.8,
                "potential": 81,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 6
            },
            "healthcare": {
                "size": 104.5,
                "growth": 6.7,
                "potential": 81,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 14
            },
            "energy": {
                "size": 156.4,
                "growth": 5.5,
                "potential": 80,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 6
            },
            "agriculture": {
                "size": 1146.1,
                "growth": 4.3,
                "potential": 80,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 2
            },
            "automotive": {
                "size": 117.3,
                "growth": 5.5,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "retail": {
                "size": 305.0,
                "growth": 6.1,
                "potential": 82,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 3
            },
            "realestate": {
                "size": 156.4,
                "growth": 4.9,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "telecom": {
                "size": 78.2,
                "growth": 5.5,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "tourism": {
                "size": 19.5,
                "growth": 6.7,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 14
            },
            "education": {
                "size": 115.4,
                "growth": 6.1,
                "potential": 80,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            }
        },
        "gdp_growth_pct": 6.5,
        "inflation_pct": 5.0,
        "unemployment_pct": 4.2,
        "trade_pct_gdp": 44.6,
        "internet_users_pct": 55.9,
        "renewable_energy_pct": 34.9
    },
    "372": {
        "name": "아일랜드",
        "nameEn": "Ireland",
        "code": "IE",
        "flag": "🇮🇪",
        "lat": 53.3441,
        "lng": -6.26749,
        "gdp": 609.2,
        "pop": 5.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 30.5,
                "growth": 5.2,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 31
            },
            "manufacturing": {
                "size": 80.4,
                "growth": 2.5,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 28
            },
            "finance": {
                "size": 51.2,
                "growth": 3.7,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "healthcare": {
                "size": 33.4,
                "growth": 4.6,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "energy": {
                "size": 26.8,
                "growth": 3.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "agriculture": {
                "size": 6.2,
                "growth": 2.2,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "automotive": {
                "size": 23.8,
                "growth": 3.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "retail": {
                "size": 36.6,
                "growth": 4.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            },
            "realestate": {
                "size": 24.4,
                "growth": 2.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            },
            "telecom": {
                "size": 12.2,
                "growth": 3.4,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "tourism": {
                "size": 5.4,
                "growth": 4.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 37
            },
            "education": {
                "size": 10.6,
                "growth": 4.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 34
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 2.1,
        "unemployment_pct": 4.3,
        "trade_pct_gdp": 246.2,
        "internet_users_pct": 96.5,
        "renewable_energy_pct": 12.7
    },
    "364": {
        "name": "Iran, Islamic Rep.",
        "nameEn": "Iran, Islamic Rep.",
        "code": "IR",
        "flag": "🇮🇷",
        "lat": 35.6878,
        "lng": 51.4447,
        "gdp": 475.3,
        "pop": 91.6,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 23.8,
                "growth": 5.7,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 36
            },
            "manufacturing": {
                "size": 57.0,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 35
            },
            "finance": {
                "size": 33.3,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 33
            },
            "healthcare": {
                "size": 22.9,
                "growth": 5.1,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 36
            },
            "energy": {
                "size": 19.0,
                "growth": 3.9,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 33
            },
            "agriculture": {
                "size": 51.3,
                "growth": 2.7,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 15
            },
            "automotive": {
                "size": 14.3,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 37
            },
            "retail": {
                "size": 28.5,
                "growth": 4.5,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 34
            },
            "realestate": {
                "size": 19.0,
                "growth": 3.3,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 33
            },
            "telecom": {
                "size": 9.5,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 35
            },
            "tourism": {
                "size": 5.3,
                "growth": 5.1,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "education": {
                "size": 8.1,
                "growth": 4.5,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 43
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 32.5,
        "unemployment_pct": 8.1,
        "trade_pct_gdp": 52.1,
        "internet_users_pct": 79.6,
        "renewable_energy_pct": 0.9
    },
    "368": {
        "name": "이라크",
        "nameEn": "Iraq",
        "code": "IQ",
        "flag": "🇮🇶",
        "lat": 33.3302,
        "lng": 44.394,
        "gdp": 279.6,
        "pop": 46.0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 14.0,
                "growth": 4.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "manufacturing": {
                "size": 33.6,
                "growth": 1.5,
                "potential": 76,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 51
            },
            "finance": {
                "size": 19.6,
                "growth": 2.7,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "healthcare": {
                "size": 12.4,
                "growth": 3.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "energy": {
                "size": 11.2,
                "growth": 2.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "agriculture": {
                "size": 9.5,
                "growth": 1.2,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 59
            },
            "automotive": {
                "size": 8.4,
                "growth": 2.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 52
            },
            "retail": {
                "size": 16.8,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "realestate": {
                "size": 11.2,
                "growth": 1.8,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "telecom": {
                "size": 5.6,
                "growth": 2.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "tourism": {
                "size": 1.4,
                "growth": 3.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 71
            },
            "education": {
                "size": 5.6,
                "growth": 3.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 53
            }
        },
        "gdp_growth_pct": -1.5,
        "inflation_pct": -12.3,
        "unemployment_pct": 15.3,
        "trade_pct_gdp": 70.7,
        "internet_users_pct": 81.7,
        "renewable_energy_pct": 1.1
    },
    "352": {
        "name": "Iceland",
        "nameEn": "Iceland",
        "code": "IS",
        "flag": "🇮🇸",
        "lat": 64.1353,
        "lng": -21.8952,
        "gdp": 33.3,
        "pop": 0.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.7,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 108
            },
            "manufacturing": {
                "size": 4.4,
                "growth": 1.5,
                "potential": 77,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 107
            },
            "finance": {
                "size": 2.8,
                "growth": 2.7,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 104
            },
            "healthcare": {
                "size": 2.4,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 92
            },
            "energy": {
                "size": 1.5,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 105
            },
            "agriculture": {
                "size": 1.3,
                "growth": 1.2,
                "potential": 75,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 128
            },
            "automotive": {
                "size": 1.3,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 101
            },
            "retail": {
                "size": 2.0,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 106
            },
            "realestate": {
                "size": 1.3,
                "growth": 1.8,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 106
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 111
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 110
            },
            "education": {
                "size": 1.5,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 81
            }
        },
        "gdp_growth_pct": -1.0,
        "inflation_pct": 5.9,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 86.0,
        "internet_users_pct": 99.8,
        "renewable_energy_pct": 82.4
    },
    "376": {
        "name": "이스라엘",
        "nameEn": "Israel",
        "code": "IL",
        "flag": "🇮🇱",
        "lat": 31.7717,
        "lng": 35.2035,
        "gdp": 540.4,
        "pop": 10.0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 48.8,
                "growth": 4.5,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "manufacturing": {
                "size": 64.8,
                "growth": 1.8,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 33
            },
            "finance": {
                "size": 37.8,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "healthcare": {
                "size": 30.7,
                "growth": 3.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 28
            },
            "energy": {
                "size": 21.6,
                "growth": 2.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "agriculture": {
                "size": 6.9,
                "growth": 1.5,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 66
            },
            "automotive": {
                "size": 16.2,
                "growth": 2.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 35
            },
            "retail": {
                "size": 32.4,
                "growth": 3.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "realestate": {
                "size": 21.6,
                "growth": 2.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 28
            },
            "telecom": {
                "size": 10.8,
                "growth": 2.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 31
            },
            "tourism": {
                "size": 2.7,
                "growth": 3.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 47
            },
            "education": {
                "size": 19.2,
                "growth": 3.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            }
        },
        "gdp_growth_pct": 0.9,
        "inflation_pct": 3.1,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 54.5,
        "internet_users_pct": 88.2,
        "renewable_energy_pct": 6.2
    },
    "380": {
        "name": "이탈리아",
        "nameEn": "Italy",
        "code": "IT",
        "flag": "🇮🇹",
        "lat": 41.8955,
        "lng": 12.4823,
        "gdp": 2380.8,
        "pop": 59.0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 119.0,
                "growth": 4.5,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "manufacturing": {
                "size": 314.3,
                "growth": 1.8,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 10
            },
            "finance": {
                "size": 200.0,
                "growth": 3.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "healthcare": {
                "size": 160.8,
                "growth": 3.9,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "energy": {
                "size": 104.8,
                "growth": 2.7,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "agriculture": {
                "size": 47.6,
                "growth": 1.5,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 16
            },
            "automotive": {
                "size": 92.9,
                "growth": 2.7,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "retail": {
                "size": 142.8,
                "growth": 3.3,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "realestate": {
                "size": 95.2,
                "growth": 2.1,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "telecom": {
                "size": 47.6,
                "growth": 2.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "tourism": {
                "size": 26.6,
                "growth": 3.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "education": {
                "size": 58.1,
                "growth": 3.3,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            }
        },
        "gdp_growth_pct": 0.7,
        "inflation_pct": 1.0,
        "unemployment_pct": 6.5,
        "trade_pct_gdp": 62.8,
        "internet_users_pct": 89.2,
        "renewable_energy_pct": 17.5
    },
    "388": {
        "name": "Jamaica",
        "nameEn": "Jamaica",
        "code": "JM",
        "flag": "🇯🇲",
        "lat": 17.9927,
        "lng": -76.792,
        "gdp": 22.0,
        "pop": 2.8,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 4.2,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 124
            },
            "manufacturing": {
                "size": 2.6,
                "growth": 1.5,
                "potential": 72,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 125
            },
            "finance": {
                "size": 1.5,
                "growth": 2.7,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 124
            },
            "healthcare": {
                "size": 1.3,
                "growth": 3.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 113
            },
            "energy": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 124
            },
            "agriculture": {
                "size": 1.8,
                "growth": 1.2,
                "potential": 71,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 119
            },
            "automotive": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 122
            },
            "retail": {
                "size": 1.3,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 124
            },
            "realestate": {
                "size": 1,
                "growth": 1.8,
                "potential": 72,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 124
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 112
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 111
            },
            "education": {
                "size": 1,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 111
            }
        },
        "gdp_growth_pct": -0.5,
        "inflation_pct": 5.4,
        "unemployment_pct": 3.2,
        "internet_users_pct": 89.5,
        "renewable_energy_pct": 10.5
    },
    "400": {
        "name": "요르단",
        "nameEn": "Jordan",
        "code": "JO",
        "flag": "🇯🇴",
        "lat": 31.9497,
        "lng": 35.9263,
        "gdp": 53.4,
        "pop": 11.6,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.7,
                "growth": 5.7,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 91
            },
            "manufacturing": {
                "size": 6.4,
                "growth": 3.0,
                "potential": 70,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 92
            },
            "finance": {
                "size": 3.7,
                "growth": 4.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 91
            },
            "healthcare": {
                "size": 3.3,
                "growth": 5.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 78
            },
            "energy": {
                "size": 2.1,
                "growth": 3.9,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 91
            },
            "agriculture": {
                "size": 2.7,
                "growth": 2.7,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            },
            "automotive": {
                "size": 1.6,
                "growth": 3.9,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 93
            },
            "retail": {
                "size": 3.2,
                "growth": 4.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "realestate": {
                "size": 2.1,
                "growth": 3.3,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "telecom": {
                "size": 1.1,
                "growth": 3.9,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 89
            },
            "tourism": {
                "size": 1.7,
                "growth": 5.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 67
            },
            "education": {
                "size": 1.1,
                "growth": 4.5,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            }
        },
        "gdp_growth_pct": 2.5,
        "inflation_pct": 1.6,
        "unemployment_pct": 16.7,
        "trade_pct_gdp": 99.7,
        "internet_users_pct": 92.5,
        "renewable_energy_pct": 11.5
    },
    "392": {
        "name": "일본",
        "nameEn": "Japan",
        "code": "JP",
        "flag": "🇯🇵",
        "lat": 35.67,
        "lng": 139.77,
        "gdp": 4027.6,
        "pop": 124.0,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 308.6,
                "growth": 4.2,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "manufacturing": {
                "size": 773.3,
                "growth": 1.5,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 3
            },
            "finance": {
                "size": 281.9,
                "growth": 2.7,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "healthcare": {
                "size": 346.0,
                "growth": 3.6,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "energy": {
                "size": 161.1,
                "growth": 2.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "agriculture": {
                "size": 37.8,
                "growth": 1.2,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "automotive": {
                "size": 157.1,
                "growth": 2.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "retail": {
                "size": 241.7,
                "growth": 3.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "realestate": {
                "size": 161.1,
                "growth": 1.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "telecom": {
                "size": 96.7,
                "growth": 2.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "tourism": {
                "size": 20.1,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "education": {
                "size": 80.6,
                "growth": 3.0,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 7
            }
        },
        "gdp_growth_pct": 0.1,
        "inflation_pct": 2.7,
        "unemployment_pct": 2.5,
        "trade_pct_gdp": 46.4,
        "internet_users_pct": 87.0,
        "renewable_energy_pct": 8.8
    },
    "398": {
        "name": "카자흐스탄",
        "nameEn": "Kazakhstan",
        "code": "KZ",
        "flag": "🇰🇿",
        "lat": 51.1879,
        "lng": 71.4382,
        "gdp": 291.5,
        "pop": 20.6,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 14.6,
                "growth": 6.2,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "manufacturing": {
                "size": 38.5,
                "growth": 3.5,
                "potential": 80,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 48
            },
            "finance": {
                "size": 24.5,
                "growth": 4.7,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 46
            },
            "healthcare": {
                "size": 8.8,
                "growth": 5.6,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 52
            },
            "energy": {
                "size": 12.8,
                "growth": 4.4,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 47
            },
            "agriculture": {
                "size": 11.3,
                "growth": 3.2,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 50
            },
            "automotive": {
                "size": 11.4,
                "growth": 4.4,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 45
            },
            "retail": {
                "size": 17.5,
                "growth": 5.0,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 47
            },
            "realestate": {
                "size": 11.7,
                "growth": 3.8,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 47
            },
            "telecom": {
                "size": 5.8,
                "growth": 4.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "tourism": {
                "size": 1.9,
                "growth": 5.6,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 60
            },
            "education": {
                "size": 8.5,
                "growth": 5.0,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 40
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 8.8,
        "unemployment_pct": 4.8,
        "trade_pct_gdp": 57.2,
        "internet_users_pct": 93.4,
        "renewable_energy_pct": 2
    },
    "404": {
        "name": "케냐",
        "nameEn": "Kenya",
        "code": "KE",
        "flag": "🇰🇪",
        "lat": -1.27975,
        "lng": 36.8126,
        "gdp": 120.3,
        "pop": 56.4,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 6.0,
                "growth": 6.6,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 64
            },
            "manufacturing": {
                "size": 14.4,
                "growth": 3.9,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 65
            },
            "finance": {
                "size": 8.4,
                "growth": 5.1,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 65
            },
            "healthcare": {
                "size": 4.2,
                "growth": 6.0,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 75
            },
            "energy": {
                "size": 4.8,
                "growth": 4.8,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 65
            },
            "agriculture": {
                "size": 27.0,
                "growth": 3.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 31
            },
            "automotive": {
                "size": 3.6,
                "growth": 4.8,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 66
            },
            "retail": {
                "size": 7.2,
                "growth": 5.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 64
            },
            "realestate": {
                "size": 4.8,
                "growth": 4.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 63
            },
            "telecom": {
                "size": 2.4,
                "growth": 4.8,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 63
            },
            "tourism": {
                "size": 1.8,
                "growth": 6.0,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 62
            },
            "education": {
                "size": 2.9,
                "growth": 5.4,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 64
            }
        },
        "gdp_growth_pct": 4.7,
        "inflation_pct": 4.5,
        "unemployment_pct": 5.5,
        "trade_pct_gdp": 40.2,
        "internet_users_pct": 35.0,
        "renewable_energy_pct": 67.7
    },
    "417": {
        "name": "Kyrgyz Republic",
        "nameEn": "Kyrgyz Republic",
        "code": "KG",
        "flag": "🇰🇬",
        "lat": 42.8851,
        "lng": 74.6057,
        "gdp": 17.5,
        "pop": 7.2,
        "region": "Europe & Central Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 8.3,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 132
            },
            "manufacturing": {
                "size": 2.3,
                "growth": 5.6,
                "potential": 74,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 133
            },
            "finance": {
                "size": 1.5,
                "growth": 6.8,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 125
            },
            "healthcare": {
                "size": 1,
                "growth": 7.7,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 128
            },
            "energy": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 125
            },
            "agriculture": {
                "size": 1.5,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 124
            },
            "automotive": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 123
            },
            "retail": {
                "size": 1.1,
                "growth": 7.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 131
            },
            "realestate": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 125
            },
            "telecom": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 113
            },
            "tourism": {
                "size": 1,
                "growth": 7.7,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 112
            },
            "education": {
                "size": 1,
                "growth": 7.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 112
            }
        },
        "gdp_growth_pct": 9.0,
        "inflation_pct": 10.8,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 127.7,
        "internet_users_pct": 88.5,
        "renewable_energy_pct": 27.6
    },
    "116": {
        "name": "Cambodia",
        "nameEn": "Cambodia",
        "code": "KH",
        "flag": "🇰🇭",
        "lat": 11.5556,
        "lng": 104.874,
        "gdp": 46.4,
        "pop": 17.6,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 3.5,
                "growth": 7.1,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 87
            },
            "manufacturing": {
                "size": 8.9,
                "growth": 4.4,
                "potential": 74,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 86
            },
            "finance": {
                "size": 3.2,
                "growth": 5.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 99
            },
            "healthcare": {
                "size": 1.7,
                "growth": 6.5,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 106
            },
            "energy": {
                "size": 1.9,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 96
            },
            "agriculture": {
                "size": 7.7,
                "growth": 4.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 63
            },
            "automotive": {
                "size": 1.8,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "retail": {
                "size": 2.8,
                "growth": 5.9,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 97
            },
            "realestate": {
                "size": 1.9,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 95
            },
            "telecom": {
                "size": 1.1,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 90
            },
            "tourism": {
                "size": 1.1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 79
            },
            "education": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 113
            }
        },
        "gdp_growth_pct": 6.0,
        "inflation_pct": 0.8,
        "unemployment_pct": 0.3,
        "trade_pct_gdp": 143.4,
        "internet_users_pct": 60.7,
        "renewable_energy_pct": 52.4
    },
    "410": {
        "name": "한국",
        "nameEn": "Korea, Rep.",
        "code": "KR",
        "flag": "🇰🇷",
        "lat": 37.5323,
        "lng": 126.957,
        "gdp": 1875.4,
        "pop": 51.8,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 219.9,
                "growth": 5.0,
                "potential": 89,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "manufacturing": {
                "size": 360.1,
                "growth": 2.3,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 8
            },
            "finance": {
                "size": 131.3,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "healthcare": {
                "size": 130.2,
                "growth": 4.4,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "energy": {
                "size": 75.0,
                "growth": 3.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "agriculture": {
                "size": 27.3,
                "growth": 2.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "automotive": {
                "size": 73.1,
                "growth": 3.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "retail": {
                "size": 112.5,
                "growth": 3.8,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "realestate": {
                "size": 75.0,
                "growth": 2.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "telecom": {
                "size": 45.0,
                "growth": 3.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "tourism": {
                "size": 11.8,
                "growth": 4.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            },
            "education": {
                "size": 65.4,
                "growth": 3.8,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            }
        },
        "gdp_growth_pct": 2.0,
        "inflation_pct": 2.3,
        "unemployment_pct": 2.8,
        "trade_pct_gdp": 84.6,
        "internet_users_pct": 97.9,
        "renewable_energy_pct": 3.6
    },
    "414": {
        "name": "쿠웨이트",
        "nameEn": "Kuwait",
        "code": "KW",
        "flag": "🇰🇼",
        "lat": 29.3721,
        "lng": 47.9824,
        "gdp": 160.2,
        "pop": 4.9,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 8.0,
                "growth": 4.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "manufacturing": {
                "size": 19.2,
                "growth": 1.5,
                "potential": 79,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 58
            },
            "finance": {
                "size": 11.2,
                "growth": 2.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 58
            },
            "healthcare": {
                "size": 6.4,
                "growth": 3.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 61
            },
            "energy": {
                "size": 6.4,
                "growth": 2.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "agriculture": {
                "size": 1,
                "growth": 1.2,
                "potential": 74,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 138
            },
            "automotive": {
                "size": 4.8,
                "growth": 2.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 58
            },
            "retail": {
                "size": 9.6,
                "growth": 3.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "realestate": {
                "size": 6.4,
                "growth": 1.8,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "telecom": {
                "size": 3.2,
                "growth": 2.4,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 113
            },
            "education": {
                "size": 6.2,
                "growth": 3.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 50
            }
        },
        "gdp_growth_pct": -2.6,
        "inflation_pct": 2.9,
        "unemployment_pct": 2.2,
        "trade_pct_gdp": 96.1,
        "internet_users_pct": 99.7,
        "renewable_energy_pct": 0.1
    },
    "418": {
        "name": "Lao PDR",
        "nameEn": "Lao PDR",
        "code": "LA",
        "flag": "🇱🇦",
        "lat": 18.5826,
        "lng": 102.177,
        "gdp": 16.5,
        "pop": 7.8,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 6.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 120
            },
            "manufacturing": {
                "size": 3.2,
                "growth": 3.7,
                "potential": 71,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 113
            },
            "finance": {
                "size": 1.2,
                "growth": 4.9,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 135
            },
            "healthcare": {
                "size": 1,
                "growth": 5.8,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 129
            },
            "energy": {
                "size": 1,
                "growth": 4.6,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 126
            },
            "agriculture": {
                "size": 2.8,
                "growth": 3.4,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 104
            },
            "automotive": {
                "size": 1,
                "growth": 4.6,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 124
            },
            "retail": {
                "size": 1,
                "growth": 5.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 137
            },
            "realestate": {
                "size": 1,
                "growth": 4.0,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 126
            },
            "telecom": {
                "size": 1,
                "growth": 4.6,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "tourism": {
                "size": 1,
                "growth": 5.8,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "education": {
                "size": 1,
                "growth": 5.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            }
        },
        "gdp_growth_pct": 4.1,
        "inflation_pct": 23.1,
        "unemployment_pct": 1.2,
        "internet_users_pct": 63.6,
        "renewable_energy_pct": 49.2
    },
    "422": {
        "name": "Lebanon",
        "nameEn": "Lebanon",
        "code": "LB",
        "flag": "🇱🇧",
        "lat": 33.8872,
        "lng": 35.5134,
        "gdp": 20.1,
        "pop": 5.8,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 4.7,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 133
            },
            "manufacturing": {
                "size": 2.4,
                "growth": 2.0,
                "potential": 67,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 128
            },
            "finance": {
                "size": 1.4,
                "growth": 3.2,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 129
            },
            "healthcare": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 130
            },
            "energy": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 127
            },
            "agriculture": {
                "size": 1,
                "growth": 1.7,
                "potential": 65,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 139
            },
            "automotive": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 125
            },
            "retail": {
                "size": 1.2,
                "growth": 3.5,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 127
            },
            "realestate": {
                "size": 1,
                "growth": 2.3,
                "potential": 67,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 127
            },
            "telecom": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 115
            },
            "tourism": {
                "size": 2.4,
                "growth": 4.1,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 52
            },
            "education": {
                "size": 1,
                "growth": 3.5,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 115
            }
        },
        "gdp_growth_pct": -0.8,
        "inflation_pct": 45.2,
        "unemployment_pct": 11.0,
        "trade_pct_gdp": 104.2,
        "internet_users_pct": 83.5,
        "renewable_energy_pct": 6.8
    },
    "434": {
        "name": "Libya",
        "nameEn": "Libya",
        "code": "LY",
        "flag": "🇱🇾",
        "lat": 32.8578,
        "lng": 13.1072,
        "gdp": 48.5,
        "pop": 7.4,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 2.4,
                "growth": 5.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 97
            },
            "manufacturing": {
                "size": 5.8,
                "growth": 2.3,
                "potential": 75,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 96
            },
            "finance": {
                "size": 3.4,
                "growth": 3.5,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 96
            },
            "healthcare": {
                "size": 3.0,
                "growth": 4.4,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 81
            },
            "energy": {
                "size": 1.9,
                "growth": 3.2,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 97
            },
            "agriculture": {
                "size": 1.2,
                "growth": 2.0,
                "potential": 72,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 130
            },
            "automotive": {
                "size": 1.5,
                "growth": 3.2,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 96
            },
            "retail": {
                "size": 2.9,
                "growth": 3.8,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 95
            },
            "realestate": {
                "size": 1.9,
                "growth": 2.6,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 96
            },
            "telecom": {
                "size": 1,
                "growth": 3.2,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 116
            },
            "tourism": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 115
            },
            "education": {
                "size": 1,
                "growth": 3.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 116
            }
        },
        "gdp_growth_pct": 1.9,
        "inflation_pct": 2.1,
        "unemployment_pct": 19.1,
        "trade_pct_gdp": 128.8,
        "internet_users_pct": 88.5,
        "renewable_energy_pct": 3.1
    },
    "144": {
        "name": "스리랑카",
        "nameEn": "Sri Lanka",
        "code": "LK",
        "flag": "🇱🇰",
        "lat": 6.92148,
        "lng": 79.8528,
        "gdp": 99.0,
        "pop": 21.9,
        "region": "South Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 6.4,
                "growth": 6.7,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 61
            },
            "manufacturing": {
                "size": 11.9,
                "growth": 4.0,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 74
            },
            "finance": {
                "size": 6.9,
                "growth": 5.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 75
            },
            "healthcare": {
                "size": 2.9,
                "growth": 6.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 84
            },
            "energy": {
                "size": 4.0,
                "growth": 4.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 73
            },
            "agriculture": {
                "size": 14.8,
                "growth": 3.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 43
            },
            "automotive": {
                "size": 3.0,
                "growth": 4.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 76
            },
            "retail": {
                "size": 7.7,
                "growth": 5.5,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 61
            },
            "realestate": {
                "size": 4.0,
                "growth": 4.3,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 71
            },
            "telecom": {
                "size": 2.0,
                "growth": 4.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 71
            },
            "tourism": {
                "size": 1.1,
                "growth": 6.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            },
            "education": {
                "size": 1.3,
                "growth": 5.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 85
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": -0.4,
        "unemployment_pct": 4.2,
        "trade_pct_gdp": 42.4,
        "internet_users_pct": 51.2,
        "renewable_energy_pct": 48.8
    },
    "440": {
        "name": "Lithuania",
        "nameEn": "Lithuania",
        "code": "LT",
        "flag": "🇱🇹",
        "lat": 54.6896,
        "lng": 25.2799,
        "gdp": 84.9,
        "pop": 2.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.2,
                "growth": 5.3,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 79
            },
            "manufacturing": {
                "size": 11.2,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 77
            },
            "finance": {
                "size": 7.1,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 74
            },
            "healthcare": {
                "size": 5.2,
                "growth": 4.7,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 70
            },
            "energy": {
                "size": 3.7,
                "growth": 3.5,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 76
            },
            "agriculture": {
                "size": 2.2,
                "growth": 2.3,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 112
            },
            "automotive": {
                "size": 3.3,
                "growth": 3.5,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 71
            },
            "retail": {
                "size": 5.1,
                "growth": 4.1,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "realestate": {
                "size": 3.4,
                "growth": 2.9,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "telecom": {
                "size": 1.7,
                "growth": 3.5,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "tourism": {
                "size": 2.2,
                "growth": 4.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 58
            },
            "education": {
                "size": 2.2,
                "growth": 4.1,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 72
            }
        },
        "gdp_growth_pct": 2.8,
        "inflation_pct": 0.7,
        "unemployment_pct": 6.9,
        "trade_pct_gdp": 143.0,
        "internet_users_pct": 88.5,
        "renewable_energy_pct": 33.2
    },
    "442": {
        "name": "Luxembourg",
        "nameEn": "Luxembourg",
        "code": "LU",
        "flag": "🇱🇺",
        "lat": 49.61,
        "lng": 6.1296,
        "gdp": 93.3,
        "pop": 0.7,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.7,
                "growth": 4.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 75
            },
            "manufacturing": {
                "size": 12.3,
                "growth": 1.6,
                "potential": 78,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 72
            },
            "finance": {
                "size": 7.8,
                "growth": 2.8,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            },
            "healthcare": {
                "size": 4.4,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 72
            },
            "energy": {
                "size": 4.1,
                "growth": 2.5,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 71
            },
            "agriculture": {
                "size": 1,
                "growth": 1.3,
                "potential": 75,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 140
            },
            "automotive": {
                "size": 3.6,
                "growth": 2.5,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 67
            },
            "retail": {
                "size": 5.6,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 74
            },
            "realestate": {
                "size": 3.7,
                "growth": 1.9,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 74
            },
            "telecom": {
                "size": 1.9,
                "growth": 2.5,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 74
            },
            "tourism": {
                "size": 5.8,
                "growth": 3.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 35
            },
            "education": {
                "size": 2.1,
                "growth": 3.1,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 75
            }
        },
        "gdp_growth_pct": 0.4,
        "inflation_pct": 2.1,
        "unemployment_pct": 6.4,
        "trade_pct_gdp": 351.3,
        "internet_users_pct": 98.8,
        "renewable_energy_pct": 20.5
    },
    "428": {
        "name": "Latvia",
        "nameEn": "Latvia",
        "code": "LV",
        "flag": "🇱🇻",
        "lat": 56.9465,
        "lng": 24.1048,
        "gdp": 43.7,
        "pop": 1.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 2.2,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 100
            },
            "manufacturing": {
                "size": 5.8,
                "growth": 1.5,
                "potential": 77,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 97
            },
            "finance": {
                "size": 3.7,
                "growth": 2.7,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 92
            },
            "healthcare": {
                "size": 2.5,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 89
            },
            "energy": {
                "size": 1.9,
                "growth": 2.4,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 98
            },
            "agriculture": {
                "size": 1.8,
                "growth": 1.2,
                "potential": 75,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 120
            },
            "automotive": {
                "size": 1.7,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 90
            },
            "retail": {
                "size": 2.6,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 100
            },
            "realestate": {
                "size": 1.7,
                "growth": 1.8,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 99
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 117
            },
            "tourism": {
                "size": 1.1,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 81
            },
            "education": {
                "size": 1.1,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 91
            }
        },
        "gdp_growth_pct": -0.0,
        "inflation_pct": 1.3,
        "unemployment_pct": 6.9,
        "trade_pct_gdp": 132.3,
        "internet_users_pct": 92.7,
        "renewable_energy_pct": 44
    },
    "504": {
        "name": "모로코",
        "nameEn": "Morocco",
        "code": "MA",
        "flag": "🇲🇦",
        "lat": 33.9905,
        "lng": -6.8704,
        "gdp": 160.6,
        "pop": 38.1,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 8.0,
                "growth": 6.2,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 58
            },
            "manufacturing": {
                "size": 19.3,
                "growth": 3.5,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 57
            },
            "finance": {
                "size": 11.2,
                "growth": 4.7,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 59
            },
            "healthcare": {
                "size": 7.8,
                "growth": 5.6,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 57
            },
            "energy": {
                "size": 6.4,
                "growth": 4.4,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 58
            },
            "agriculture": {
                "size": 17.0,
                "growth": 3.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 40
            },
            "automotive": {
                "size": 4.8,
                "growth": 4.4,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 59
            },
            "retail": {
                "size": 9.6,
                "growth": 5.0,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 58
            },
            "realestate": {
                "size": 6.4,
                "growth": 3.8,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 58
            },
            "telecom": {
                "size": 3.2,
                "growth": 4.4,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 58
            },
            "tourism": {
                "size": 4.5,
                "growth": 5.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 41
            },
            "education": {
                "size": 5.8,
                "growth": 5.0,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 52
            }
        },
        "gdp_growth_pct": 3.8,
        "inflation_pct": 1.0,
        "unemployment_pct": 9.1,
        "trade_pct_gdp": 92.2,
        "internet_users_pct": 91,
        "renewable_energy_pct": 10.9
    },
    "498": {
        "name": "Moldova",
        "nameEn": "Moldova",
        "code": "MD",
        "flag": "🇲🇩",
        "lat": 47.0167,
        "lng": 28.8497,
        "gdp": 18.2,
        "pop": 2.4,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 134
            },
            "manufacturing": {
                "size": 2.4,
                "growth": 1.5,
                "potential": 72,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 129
            },
            "finance": {
                "size": 1.5,
                "growth": 2.7,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 126
            },
            "healthcare": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 131
            },
            "energy": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 128
            },
            "agriculture": {
                "size": 1.3,
                "growth": 1.2,
                "potential": 71,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 129
            },
            "automotive": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 126
            },
            "retail": {
                "size": 1.1,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 132
            },
            "realestate": {
                "size": 1,
                "growth": 1.8,
                "potential": 72,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 128
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 118
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 116
            },
            "education": {
                "size": 1,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 117
            }
        },
        "gdp_growth_pct": 0.1,
        "inflation_pct": 4.7,
        "unemployment_pct": 1.4,
        "trade_pct_gdp": 88.7,
        "internet_users_pct": 80.2,
        "renewable_energy_pct": 21.4
    },
    "450": {
        "name": "Madagascar",
        "nameEn": "Madagascar",
        "code": "MG",
        "flag": "🇲🇬",
        "lat": -20.4667,
        "lng": 45.7167,
        "gdp": 17.4,
        "pop": 32.0,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.4,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 135
            },
            "manufacturing": {
                "size": 2.1,
                "growth": 3.7,
                "potential": 58,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 137
            },
            "finance": {
                "size": 1.2,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 136
            },
            "healthcare": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 132
            },
            "energy": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 129
            },
            "agriculture": {
                "size": 3.9,
                "growth": 3.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 96
            },
            "automotive": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 127
            },
            "retail": {
                "size": 1,
                "growth": 5.2,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 138
            },
            "realestate": {
                "size": 1,
                "growth": 4.0,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 129
            },
            "telecom": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 119
            },
            "tourism": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 117
            },
            "education": {
                "size": 1,
                "growth": 5.2,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 118
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 9.9,
        "unemployment_pct": 3.1,
        "trade_pct_gdp": 55.0,
        "internet_users_pct": 20.4,
        "renewable_energy_pct": 83.1
    },
    "484": {
        "name": "멕시코",
        "nameEn": "Mexico",
        "code": "MX",
        "flag": "🇲🇽",
        "lat": 19.427,
        "lng": -99.1276,
        "gdp": 1856.4,
        "pop": 130.9,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 92.8,
                "growth": 4.8,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 15
            },
            "manufacturing": {
                "size": 222.8,
                "growth": 2.1,
                "potential": 79,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 16
            },
            "finance": {
                "size": 129.9,
                "growth": 3.3,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 14
            },
            "healthcare": {
                "size": 81.7,
                "growth": 4.2,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "energy": {
                "size": 74.3,
                "growth": 3.0,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 14
            },
            "agriculture": {
                "size": 69.1,
                "growth": 1.8,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "automotive": {
                "size": 55.7,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 15
            },
            "retail": {
                "size": 111.4,
                "growth": 3.6,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 13
            },
            "realestate": {
                "size": 74.3,
                "growth": 2.4,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 13
            },
            "telecom": {
                "size": 37.1,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 14
            },
            "tourism": {
                "size": 11.4,
                "growth": 4.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 25
            },
            "education": {
                "size": 45.3,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 15
            }
        },
        "gdp_growth_pct": 1.4,
        "inflation_pct": 4.7,
        "unemployment_pct": 2.7,
        "trade_pct_gdp": 74.6,
        "internet_users_pct": 81.2,
        "renewable_energy_pct": 13
    },
    "807": {
        "name": "North Macedonia",
        "nameEn": "North Macedonia",
        "code": "MK",
        "flag": "🇲🇰",
        "lat": 42.0024,
        "lng": 21.4361,
        "gdp": 17.0,
        "pop": 1.8,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 136
            },
            "manufacturing": {
                "size": 2.2,
                "growth": 2.7,
                "potential": 74,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 135
            },
            "finance": {
                "size": 1.4,
                "growth": 3.9,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 130
            },
            "healthcare": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 133
            },
            "energy": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 130
            },
            "agriculture": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 141
            },
            "automotive": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 128
            },
            "retail": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 139
            },
            "realestate": {
                "size": 1,
                "growth": 3.0,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 130
            },
            "telecom": {
                "size": 1,
                "growth": 3.6,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 120
            },
            "tourism": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 118
            },
            "education": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 119
            }
        },
        "gdp_growth_pct": 3.0,
        "inflation_pct": 3.5,
        "unemployment_pct": 12.3,
        "trade_pct_gdp": 136.3,
        "internet_users_pct": 87.2,
        "renewable_energy_pct": 19.5
    },
    "466": {
        "name": "Mali",
        "nameEn": "Mali",
        "code": "ML",
        "flag": "🇲🇱",
        "lat": 13.5667,
        "lng": -7.50034,
        "gdp": 26.8,
        "pop": 24.5,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1.3,
                "growth": 6.7,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 114
            },
            "manufacturing": {
                "size": 3.2,
                "growth": 4.0,
                "potential": 60,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 114
            },
            "finance": {
                "size": 1.9,
                "growth": 5.2,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 112
            },
            "healthcare": {
                "size": 1,
                "growth": 6.1,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 134
            },
            "energy": {
                "size": 1.1,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 112
            },
            "agriculture": {
                "size": 8.9,
                "growth": 3.7,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 60
            },
            "automotive": {
                "size": 1,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 129
            },
            "retail": {
                "size": 1.6,
                "growth": 5.5,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 112
            },
            "realestate": {
                "size": 1.1,
                "growth": 4.3,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 111
            },
            "telecom": {
                "size": 1,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 121
            },
            "tourism": {
                "size": 1,
                "growth": 6.1,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 119
            },
            "education": {
                "size": 1,
                "growth": 5.5,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 120
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 3.2,
        "unemployment_pct": 2.9,
        "trade_pct_gdp": 49.9,
        "internet_users_pct": 35.1,
        "renewable_energy_pct": 71.1
    },
    "104": {
        "name": "미얀마",
        "nameEn": "Myanmar",
        "code": "MM",
        "flag": "🇲🇲",
        "lat": 21.914,
        "lng": 95.9562,
        "gdp": 74.1,
        "pop": 54.5,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 5.6,
                "growth": 4.7,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 69
            },
            "manufacturing": {
                "size": 14.2,
                "growth": 2.0,
                "potential": 69,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 67
            },
            "finance": {
                "size": 5.2,
                "growth": 3.2,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 85
            },
            "healthcare": {
                "size": 2.6,
                "growth": 4.1,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 86
            },
            "energy": {
                "size": 3.0,
                "growth": 2.9,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 85
            },
            "agriculture": {
                "size": 15.4,
                "growth": 1.7,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 42
            },
            "automotive": {
                "size": 2.9,
                "growth": 2.9,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 79
            },
            "retail": {
                "size": 4.4,
                "growth": 3.5,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 84
            },
            "realestate": {
                "size": 3.0,
                "growth": 2.3,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 84
            },
            "telecom": {
                "size": 1.8,
                "growth": 2.9,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 75
            },
            "tourism": {
                "size": 2.5,
                "growth": 4.1,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 50
            },
            "education": {
                "size": 1,
                "growth": 3.5,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 121
            }
        },
        "gdp_growth_pct": -1.0,
        "inflation_pct": 8.8,
        "unemployment_pct": 2.9,
        "internet_users_pct": 58.5,
        "renewable_energy_pct": 62.9
    },
    "499": {
        "name": "Montenegro",
        "nameEn": "Montenegro",
        "code": "ME",
        "flag": "🇲🇪",
        "lat": 42.4602,
        "lng": 19.2595,
        "gdp": 8.3,
        "pop": 0.6,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.5,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 137
            },
            "manufacturing": {
                "size": 1.1,
                "growth": 2.8,
                "potential": 74,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 148
            },
            "finance": {
                "size": 1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 141
            },
            "healthcare": {
                "size": 1,
                "growth": 4.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 135
            },
            "energy": {
                "size": 1,
                "growth": 3.7,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 131
            },
            "agriculture": {
                "size": 1,
                "growth": 2.5,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 142
            },
            "automotive": {
                "size": 1,
                "growth": 3.7,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 130
            },
            "retail": {
                "size": 1,
                "growth": 4.3,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 140
            },
            "realestate": {
                "size": 1,
                "growth": 3.1,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 131
            },
            "telecom": {
                "size": 1,
                "growth": 3.7,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 122
            },
            "tourism": {
                "size": 1,
                "growth": 4.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 120
            },
            "education": {
                "size": 1,
                "growth": 4.3,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 122
            }
        },
        "gdp_growth_pct": 3.2,
        "inflation_pct": 3.3,
        "unemployment_pct": 13.2,
        "trade_pct_gdp": 109.9,
        "internet_users_pct": 88.9,
        "renewable_energy_pct": 39.6
    },
    "496": {
        "name": "Mongolia",
        "nameEn": "Mongolia",
        "code": "MN",
        "flag": "🇲🇳",
        "lat": 47.9129,
        "lng": 106.937,
        "gdp": 23.8,
        "pop": 3.5,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.8,
                "growth": 6.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 105
            },
            "manufacturing": {
                "size": 4.6,
                "growth": 3.5,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 104
            },
            "finance": {
                "size": 1.7,
                "growth": 4.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 118
            },
            "healthcare": {
                "size": 1.2,
                "growth": 5.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 115
            },
            "energy": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 132
            },
            "agriculture": {
                "size": 1.7,
                "growth": 3.2,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 121
            },
            "automotive": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 131
            },
            "retail": {
                "size": 1.4,
                "growth": 5.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 119
            },
            "realestate": {
                "size": 1,
                "growth": 3.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 132
            },
            "telecom": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 123
            },
            "tourism": {
                "size": 1,
                "growth": 5.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 121
            },
            "education": {
                "size": 1,
                "growth": 5.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 123
            }
        },
        "gdp_growth_pct": 5.1,
        "inflation_pct": 6.2,
        "unemployment_pct": 5.2,
        "trade_pct_gdp": 138.4,
        "internet_users_pct": 83.0,
        "renewable_energy_pct": 3
    },
    "508": {
        "name": "Mozambique",
        "nameEn": "Mozambique",
        "code": "MZ",
        "flag": "🇲🇿",
        "lat": -25.9664,
        "lng": 32.5713,
        "gdp": 22.7,
        "pop": 34.6,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 5.6,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 125
            },
            "manufacturing": {
                "size": 2.7,
                "growth": 2.9,
                "potential": 57,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 123
            },
            "finance": {
                "size": 1.6,
                "growth": 4.1,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 121
            },
            "healthcare": {
                "size": 1.5,
                "growth": 5.0,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 110
            },
            "energy": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 133
            },
            "agriculture": {
                "size": 5.7,
                "growth": 2.6,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 78
            },
            "automotive": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 132
            },
            "retail": {
                "size": 1.4,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 120
            },
            "realestate": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 133
            },
            "telecom": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 124
            },
            "tourism": {
                "size": 1,
                "growth": 5.0,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 122
            },
            "education": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 124
            }
        },
        "gdp_growth_pct": 2.1,
        "inflation_pct": 4.1,
        "unemployment_pct": 6.7,
        "trade_pct_gdp": 95.7,
        "internet_users_pct": 19.8,
        "renewable_energy_pct": 76.9
    },
    "478": {
        "name": "Mauritania",
        "nameEn": "Mauritania",
        "code": "MR",
        "flag": "🇲🇷",
        "lat": 18.2367,
        "lng": -15.9824,
        "gdp": 10.9,
        "pop": 5.2,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 7.2,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 138
            },
            "manufacturing": {
                "size": 1.3,
                "growth": 4.5,
                "potential": 71,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 146
            },
            "finance": {
                "size": 1,
                "growth": 5.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 142
            },
            "healthcare": {
                "size": 1,
                "growth": 6.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 136
            },
            "energy": {
                "size": 1,
                "growth": 5.4,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 134
            },
            "agriculture": {
                "size": 2.1,
                "growth": 4.2,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "automotive": {
                "size": 1,
                "growth": 5.4,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 133
            },
            "retail": {
                "size": 1,
                "growth": 6.0,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 141
            },
            "realestate": {
                "size": 1,
                "growth": 4.8,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 134
            },
            "telecom": {
                "size": 1,
                "growth": 5.4,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 125
            },
            "tourism": {
                "size": 1,
                "growth": 6.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 123
            },
            "education": {
                "size": 1,
                "growth": 6.0,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 125
            }
        },
        "gdp_growth_pct": 6.3,
        "inflation_pct": 2.5,
        "unemployment_pct": 10.3,
        "trade_pct_gdp": 93.6,
        "internet_users_pct": 37.4,
        "renewable_energy_pct": 19.6
    },
    "480": {
        "name": "Mauritius",
        "nameEn": "Mauritius",
        "code": "MU",
        "flag": "🇲🇺",
        "lat": -20.1605,
        "lng": 57.4977,
        "gdp": 14.9,
        "pop": 1.2,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 139
            },
            "manufacturing": {
                "size": 1.8,
                "growth": 3.5,
                "potential": 76,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 140
            },
            "finance": {
                "size": 1,
                "growth": 4.7,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 143
            },
            "healthcare": {
                "size": 1,
                "growth": 5.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 137
            },
            "energy": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 135
            },
            "agriculture": {
                "size": 1,
                "growth": 3.2,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 143
            },
            "automotive": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 134
            },
            "retail": {
                "size": 1,
                "growth": 5.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 142
            },
            "realestate": {
                "size": 1,
                "growth": 3.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 135
            },
            "telecom": {
                "size": 1,
                "growth": 4.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 126
            },
            "tourism": {
                "size": 1,
                "growth": 5.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 124
            },
            "education": {
                "size": 1,
                "growth": 5.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 126
            }
        },
        "gdp_growth_pct": 4.9,
        "inflation_pct": 3.6,
        "unemployment_pct": 5.5,
        "trade_pct_gdp": 145.4,
        "internet_users_pct": 79.5,
        "renewable_energy_pct": 8.6
    },
    "454": {
        "name": "Malawi",
        "nameEn": "Malawi",
        "code": "MW",
        "flag": "🇲🇼",
        "lat": -13.9899,
        "lng": 33.7703,
        "gdp": 11.3,
        "pop": 21.7,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.4,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            },
            "manufacturing": {
                "size": 1.4,
                "growth": 2.7,
                "potential": 56,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 144
            },
            "finance": {
                "size": 1,
                "growth": 3.9,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 144
            },
            "healthcare": {
                "size": 1,
                "growth": 4.8,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 138
            },
            "energy": {
                "size": 1,
                "growth": 3.6,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 136
            },
            "agriculture": {
                "size": 3.6,
                "growth": 2.4,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 97
            },
            "automotive": {
                "size": 1,
                "growth": 3.6,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 135
            },
            "retail": {
                "size": 1,
                "growth": 4.2,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 143
            },
            "realestate": {
                "size": 1,
                "growth": 3.0,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 136
            },
            "telecom": {
                "size": 1,
                "growth": 3.6,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 127
            },
            "tourism": {
                "size": 1,
                "growth": 4.8,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 125
            },
            "education": {
                "size": 1,
                "growth": 4.2,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 127
            }
        },
        "gdp_growth_pct": 1.7,
        "inflation_pct": 32.2,
        "unemployment_pct": 5.1,
        "trade_pct_gdp": 42.4,
        "internet_users_pct": 18.0,
        "renewable_energy_pct": 62.9
    },
    "458": {
        "name": "말레이시아",
        "nameEn": "Malaysia",
        "code": "MY",
        "flag": "🇲🇾",
        "lat": 3.12433,
        "lng": 101.684,
        "gdp": 422.2,
        "pop": 35.6,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 31.7,
                "growth": 6.2,
                "potential": 85,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 29
            },
            "manufacturing": {
                "size": 81.1,
                "growth": 3.5,
                "potential": 81,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 27
            },
            "finance": {
                "size": 29.6,
                "growth": 4.7,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            },
            "healthcare": {
                "size": 13.4,
                "growth": 5.6,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 46
            },
            "energy": {
                "size": 16.9,
                "growth": 4.4,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 37
            },
            "agriculture": {
                "size": 34.3,
                "growth": 3.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 28
            },
            "automotive": {
                "size": 16.5,
                "growth": 4.4,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 34
            },
            "retail": {
                "size": 25.3,
                "growth": 5.0,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 37
            },
            "realestate": {
                "size": 16.9,
                "growth": 3.8,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 37
            },
            "telecom": {
                "size": 10.1,
                "growth": 4.4,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 33
            },
            "tourism": {
                "size": 3.4,
                "growth": 5.6,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 42
            },
            "education": {
                "size": 8.9,
                "growth": 5.0,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 38
            }
        },
        "gdp_growth_pct": 5.1,
        "inflation_pct": 1.8,
        "unemployment_pct": 3.8,
        "trade_pct_gdp": 137.4,
        "internet_users_pct": 98.0,
        "renewable_energy_pct": 7.5
    },
    "516": {
        "name": "Namibia",
        "nameEn": "Namibia",
        "code": "NA",
        "flag": "🇳🇦",
        "lat": -22.5648,
        "lng": 17.0931,
        "gdp": 13.4,
        "pop": 3.0,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.2,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 141
            },
            "manufacturing": {
                "size": 1.6,
                "growth": 3.5,
                "potential": 70,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 142
            },
            "finance": {
                "size": 1,
                "growth": 4.7,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 145
            },
            "healthcare": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 139
            },
            "energy": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 137
            },
            "agriculture": {
                "size": 1,
                "growth": 3.2,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 144
            },
            "automotive": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 136
            },
            "retail": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 144
            },
            "realestate": {
                "size": 1,
                "growth": 3.8,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 137
            },
            "telecom": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 128
            },
            "tourism": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 126
            },
            "education": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 128
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 4.2,
        "unemployment_pct": 19.2,
        "trade_pct_gdp": 109.6,
        "internet_users_pct": 64.4,
        "renewable_energy_pct": 30
    },
    "562": {
        "name": "Niger",
        "nameEn": "Niger",
        "code": "NE",
        "flag": "🇳🇪",
        "lat": 13.514,
        "lng": 2.1073,
        "gdp": 19.9,
        "pop": 27.0,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 8.8,
                "potential": 68,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 142
            },
            "manufacturing": {
                "size": 2.4,
                "growth": 6.1,
                "potential": 63,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 130
            },
            "finance": {
                "size": 1.4,
                "growth": 7.3,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 131
            },
            "healthcare": {
                "size": 1,
                "growth": 8.2,
                "potential": 66,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            },
            "energy": {
                "size": 1,
                "growth": 7.0,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 138
            },
            "agriculture": {
                "size": 6.9,
                "growth": 5.8,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 67
            },
            "automotive": {
                "size": 1,
                "growth": 7.0,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 137
            },
            "retail": {
                "size": 1.2,
                "growth": 7.6,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 128
            },
            "realestate": {
                "size": 1,
                "growth": 6.4,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 138
            },
            "telecom": {
                "size": 1,
                "growth": 7.0,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 129
            },
            "tourism": {
                "size": 1,
                "growth": 8.2,
                "potential": 66,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 127
            },
            "education": {
                "size": 1,
                "growth": 7.6,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 129
            }
        },
        "gdp_growth_pct": 10.3,
        "inflation_pct": 9.1,
        "unemployment_pct": 0.4,
        "trade_pct_gdp": 50.0,
        "internet_users_pct": 23.2,
        "renewable_energy_pct": 79.6
    },
    "566": {
        "name": "나이지리아",
        "nameEn": "Nigeria",
        "code": "NG",
        "flag": "🇳🇬",
        "lat": 9.05804,
        "lng": 7.48906,
        "gdp": 252.3,
        "pop": 232.7,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 12.6,
                "growth": 6.3,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 53
            },
            "manufacturing": {
                "size": 30.3,
                "growth": 3.6,
                "potential": 74,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 53
            },
            "finance": {
                "size": 17.7,
                "growth": 4.8,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 54
            },
            "healthcare": {
                "size": 8.5,
                "growth": 5.7,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 53
            },
            "energy": {
                "size": 10.1,
                "growth": 4.5,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 53
            },
            "agriculture": {
                "size": 65.3,
                "growth": 3.3,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 10
            },
            "automotive": {
                "size": 7.6,
                "growth": 4.5,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 54
            },
            "retail": {
                "size": 15.1,
                "growth": 5.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 53
            },
            "realestate": {
                "size": 10.1,
                "growth": 3.9,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 53
            },
            "telecom": {
                "size": 5.0,
                "growth": 4.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 53
            },
            "tourism": {
                "size": 1.3,
                "growth": 5.7,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 74
            },
            "education": {
                "size": 1,
                "growth": 5.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 130
            }
        },
        "gdp_growth_pct": 4.1,
        "inflation_pct": 33.2,
        "unemployment_pct": 3.0,
        "internet_users_pct": 39.2,
        "renewable_energy_pct": 80.3
    },
    "558": {
        "name": "Nicaragua",
        "nameEn": "Nicaragua",
        "code": "NI",
        "flag": "🇳🇮",
        "lat": 12.1475,
        "lng": -86.2734,
        "gdp": 19.7,
        "pop": 6.9,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 143
            },
            "manufacturing": {
                "size": 2.4,
                "growth": 3.4,
                "potential": 70,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 131
            },
            "finance": {
                "size": 1.4,
                "growth": 4.6,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 132
            },
            "healthcare": {
                "size": 1.3,
                "growth": 5.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 114
            },
            "energy": {
                "size": 1,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 139
            },
            "agriculture": {
                "size": 2.8,
                "growth": 3.1,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 105
            },
            "automotive": {
                "size": 1,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 138
            },
            "retail": {
                "size": 1.2,
                "growth": 4.9,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 129
            },
            "realestate": {
                "size": 1,
                "growth": 3.7,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 139
            },
            "telecom": {
                "size": 1,
                "growth": 4.3,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 130
            },
            "tourism": {
                "size": 1,
                "growth": 5.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 128
            },
            "education": {
                "size": 1,
                "growth": 4.9,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 131
            }
        },
        "gdp_growth_pct": 3.6,
        "inflation_pct": 4.6,
        "unemployment_pct": 5.0,
        "trade_pct_gdp": 98.5,
        "internet_users_pct": 58.2,
        "renewable_energy_pct": 50.4
    },
    "528": {
        "name": "네덜란드",
        "nameEn": "Netherlands",
        "code": "NL",
        "flag": "🇳🇱",
        "lat": 52.3738,
        "lng": 4.89095,
        "gdp": 1214.9,
        "pop": 18.0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 60.7,
                "growth": 4.6,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "manufacturing": {
                "size": 160.4,
                "growth": 1.9,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 18
            },
            "finance": {
                "size": 102.1,
                "growth": 3.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 17
            },
            "healthcare": {
                "size": 97.2,
                "growth": 4.0,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 15
            },
            "energy": {
                "size": 53.5,
                "growth": 2.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "agriculture": {
                "size": 21.0,
                "growth": 1.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 37
            },
            "automotive": {
                "size": 47.4,
                "growth": 2.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "retail": {
                "size": 72.9,
                "growth": 3.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "realestate": {
                "size": 48.6,
                "growth": 2.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "telecom": {
                "size": 24.3,
                "growth": 2.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "tourism": {
                "size": 14.2,
                "growth": 4.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "education": {
                "size": 37.8,
                "growth": 3.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 17
            }
        },
        "gdp_growth_pct": 1.1,
        "inflation_pct": 3.3,
        "unemployment_pct": 3.7,
        "trade_pct_gdp": 153.8,
        "internet_users_pct": 97.0,
        "renewable_energy_pct": 12.2
    },
    "578": {
        "name": "노르웨이",
        "nameEn": "Norway",
        "code": "NO",
        "flag": "🇳🇴",
        "lat": 59.9138,
        "lng": 10.7387,
        "gdp": 483.6,
        "pop": 5.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 24.2,
                "growth": 5.0,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 35
            },
            "manufacturing": {
                "size": 63.8,
                "growth": 2.3,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 34
            },
            "finance": {
                "size": 40.6,
                "growth": 3.5,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "healthcare": {
                "size": 36.5,
                "growth": 4.4,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 25
            },
            "energy": {
                "size": 21.3,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "agriculture": {
                "size": 10.0,
                "growth": 2.0,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 56
            },
            "automotive": {
                "size": 18.9,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "retail": {
                "size": 29.0,
                "growth": 3.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 32
            },
            "realestate": {
                "size": 19.3,
                "growth": 2.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 31
            },
            "telecom": {
                "size": 9.7,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 34
            },
            "tourism": {
                "size": 3.1,
                "growth": 4.4,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "education": {
                "size": 15.8,
                "growth": 3.8,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            }
        },
        "gdp_growth_pct": 2.1,
        "inflation_pct": 3.1,
        "unemployment_pct": 4,
        "trade_pct_gdp": 81.4,
        "internet_users_pct": 99,
        "renewable_energy_pct": 61.4
    },
    "524": {
        "name": "Nepal",
        "nameEn": "Nepal",
        "code": "NP",
        "flag": "🇳🇵",
        "lat": 27.6939,
        "lng": 85.3157,
        "gdp": 42.9,
        "pop": 29.7,
        "region": "South Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.8,
                "growth": 6.2,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "manufacturing": {
                "size": 5.1,
                "growth": 3.5,
                "potential": 71,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 101
            },
            "finance": {
                "size": 3.0,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 101
            },
            "healthcare": {
                "size": 2.1,
                "growth": 5.6,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 99
            },
            "energy": {
                "size": 1.7,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 101
            },
            "agriculture": {
                "size": 16.9,
                "growth": 3.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 41
            },
            "automotive": {
                "size": 1.3,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 102
            },
            "retail": {
                "size": 3.3,
                "growth": 5.0,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            },
            "realestate": {
                "size": 1.7,
                "growth": 3.8,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 100
            },
            "telecom": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 131
            },
            "tourism": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 129
            },
            "education": {
                "size": 1.1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 92
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 4.7,
        "unemployment_pct": 10.5,
        "trade_pct_gdp": 40.5,
        "internet_users_pct": 55.8,
        "renewable_energy_pct": 73.7
    },
    "554": {
        "name": "뉴질랜드",
        "nameEn": "New Zealand",
        "code": "NZ",
        "flag": "🇳🇿",
        "lat": -41.2865,
        "lng": 174.776,
        "gdp": 260.2,
        "pop": 5.3,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 19.5,
                "growth": 4.7,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 41
            },
            "manufacturing": {
                "size": 50.0,
                "growth": 2.0,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 40
            },
            "finance": {
                "size": 18.2,
                "growth": 3.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 53
            },
            "healthcare": {
                "size": 20.9,
                "growth": 4.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 38
            },
            "energy": {
                "size": 10.4,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 52
            },
            "agriculture": {
                "size": 11.9,
                "growth": 1.7,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 48
            },
            "automotive": {
                "size": 10.1,
                "growth": 2.9,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 47
            },
            "retail": {
                "size": 15.6,
                "growth": 3.5,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 51
            },
            "realestate": {
                "size": 10.4,
                "growth": 2.3,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 51
            },
            "telecom": {
                "size": 6.2,
                "growth": 2.9,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 46
            },
            "tourism": {
                "size": 11.0,
                "growth": 4.1,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 26
            },
            "education": {
                "size": 8.2,
                "growth": 3.5,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 42
            }
        },
        "gdp_growth_pct": 1.3,
        "inflation_pct": 2.9,
        "unemployment_pct": 4.7,
        "trade_pct_gdp": 51.2,
        "internet_users_pct": 96.2,
        "renewable_energy_pct": 28.9
    },
    "512": {
        "name": "오만",
        "nameEn": "Oman",
        "code": "OM",
        "flag": "🇴🇲",
        "lat": 23.6105,
        "lng": 58.5874,
        "gdp": 107.1,
        "pop": 5.3,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 5.4,
                "growth": 4.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 71
            },
            "manufacturing": {
                "size": 12.9,
                "growth": 2.2,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 70
            },
            "finance": {
                "size": 7.5,
                "growth": 3.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 72
            },
            "healthcare": {
                "size": 3.0,
                "growth": 4.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 82
            },
            "energy": {
                "size": 4.3,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            },
            "agriculture": {
                "size": 2.8,
                "growth": 1.9,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 106
            },
            "automotive": {
                "size": 3.2,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "retail": {
                "size": 6.4,
                "growth": 3.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 70
            },
            "realestate": {
                "size": 4.3,
                "growth": 2.5,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            },
            "telecom": {
                "size": 2.1,
                "growth": 3.1,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 69
            },
            "tourism": {
                "size": 1,
                "growth": 4.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 130
            },
            "education": {
                "size": 2.8,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 66
            }
        },
        "gdp_growth_pct": 1.6,
        "inflation_pct": 0.6,
        "unemployment_pct": 3.2,
        "trade_pct_gdp": 114.9,
        "internet_users_pct": 95.3,
        "renewable_energy_pct": 0.1
    },
    "586": {
        "name": "파키스탄",
        "nameEn": "Pakistan",
        "code": "PK",
        "flag": "🇵🇰",
        "lat": 30.5167,
        "lng": 72.8,
        "gdp": 371.6,
        "pop": 251.3,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 18.6,
                "growth": 5.9,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 43
            },
            "manufacturing": {
                "size": 44.6,
                "growth": 3.2,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 44
            },
            "finance": {
                "size": 26.0,
                "growth": 4.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 44
            },
            "healthcare": {
                "size": 7.5,
                "growth": 5.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 59
            },
            "energy": {
                "size": 14.9,
                "growth": 4.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 43
            },
            "agriculture": {
                "size": 88.2,
                "growth": 2.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "automotive": {
                "size": 11.1,
                "growth": 4.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 46
            },
            "retail": {
                "size": 22.3,
                "growth": 4.7,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 42
            },
            "realestate": {
                "size": 14.9,
                "growth": 3.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 42
            },
            "telecom": {
                "size": 7.4,
                "growth": 4.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 42
            },
            "tourism": {
                "size": 1.9,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 61
            },
            "education": {
                "size": 4.3,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 57
            }
        },
        "gdp_growth_pct": 3.0,
        "inflation_pct": 12.6,
        "unemployment_pct": 5.5,
        "trade_pct_gdp": 27.6,
        "internet_users_pct": 27.4,
        "renewable_energy_pct": 41.6
    },
    "591": {
        "name": "파나마",
        "nameEn": "Panama",
        "code": "PA",
        "flag": "🇵🇦",
        "lat": 8.99427,
        "lng": -79.5188,
        "gdp": 86.5,
        "pop": 4.5,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.3,
                "growth": 5.3,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "manufacturing": {
                "size": 10.4,
                "growth": 2.6,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 79
            },
            "finance": {
                "size": 6.1,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 80
            },
            "healthcare": {
                "size": 5.8,
                "growth": 4.7,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 64
            },
            "energy": {
                "size": 3.5,
                "growth": 3.5,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 78
            },
            "agriculture": {
                "size": 2.3,
                "growth": 2.3,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 110
            },
            "automotive": {
                "size": 2.6,
                "growth": 3.5,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 82
            },
            "retail": {
                "size": 5.2,
                "growth": 4.1,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 77
            },
            "realestate": {
                "size": 3.5,
                "growth": 2.9,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 77
            },
            "telecom": {
                "size": 1.7,
                "growth": 3.5,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 79
            },
            "tourism": {
                "size": 1.8,
                "growth": 4.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 63
            },
            "education": {
                "size": 1.3,
                "growth": 4.1,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 86
            }
        },
        "gdp_growth_pct": 2.7,
        "inflation_pct": 0.7,
        "unemployment_pct": 8.5,
        "trade_pct_gdp": 83.7,
        "internet_users_pct": 68.5,
        "renewable_energy_pct": 28
    },
    "604": {
        "name": "페루",
        "nameEn": "Peru",
        "code": "PE",
        "flag": "🇵🇪",
        "lat": -12.0931,
        "lng": -77.0465,
        "gdp": 289.2,
        "pop": 34.2,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 14.5,
                "growth": 5.5,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "manufacturing": {
                "size": 34.7,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 49
            },
            "finance": {
                "size": 20.2,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "healthcare": {
                "size": 13.0,
                "growth": 4.9,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 47
            },
            "energy": {
                "size": 11.6,
                "growth": 3.7,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "agriculture": {
                "size": 21.2,
                "growth": 2.5,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 35
            },
            "automotive": {
                "size": 8.7,
                "growth": 3.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "retail": {
                "size": 17.4,
                "growth": 4.3,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "realestate": {
                "size": 11.6,
                "growth": 3.1,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "telecom": {
                "size": 5.8,
                "growth": 3.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 49
            },
            "tourism": {
                "size": 1.4,
                "growth": 4.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 72
            },
            "education": {
                "size": 7.3,
                "growth": 4.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 47
            }
        },
        "gdp_growth_pct": 3.3,
        "inflation_pct": 2.0,
        "unemployment_pct": 5.2,
        "trade_pct_gdp": 51.5,
        "internet_users_pct": 82.0,
        "renewable_energy_pct": 30.6
    },
    "608": {
        "name": "필리핀",
        "nameEn": "Philippines",
        "code": "PH",
        "flag": "🇵🇭",
        "lat": 14.5515,
        "lng": 121.035,
        "gdp": 461.6,
        "pop": 115.8,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 34.6,
                "growth": 7.0,
                "potential": 81,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 26
            },
            "manufacturing": {
                "size": 88.6,
                "growth": 4.3,
                "potential": 76,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 26
            },
            "finance": {
                "size": 32.3,
                "growth": 5.5,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 35
            },
            "healthcare": {
                "size": 18.8,
                "growth": 6.4,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 41
            },
            "energy": {
                "size": 18.5,
                "growth": 5.2,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 35
            },
            "agriculture": {
                "size": 41.9,
                "growth": 4.0,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 20
            },
            "automotive": {
                "size": 18.0,
                "growth": 5.2,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 31
            },
            "retail": {
                "size": 27.7,
                "growth": 5.8,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 35
            },
            "realestate": {
                "size": 18.5,
                "growth": 4.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 34
            },
            "telecom": {
                "size": 11.1,
                "growth": 5.2,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 29
            },
            "tourism": {
                "size": 2.8,
                "growth": 6.4,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 46
            },
            "education": {
                "size": 10.9,
                "growth": 5.8,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 32
            }
        },
        "gdp_growth_pct": 5.7,
        "inflation_pct": 3.2,
        "unemployment_pct": 2.2,
        "trade_pct_gdp": 65.9,
        "internet_users_pct": 83.8,
        "renewable_energy_pct": 28
    },
    "598": {
        "name": "Papua New Guinea",
        "nameEn": "Papua New Guinea",
        "code": "PG",
        "flag": "🇵🇬",
        "lat": -9.47357,
        "lng": 147.194,
        "gdp": 31.8,
        "pop": 10.6,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.4,
                "growth": 6.2,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 98
            },
            "manufacturing": {
                "size": 6.1,
                "growth": 3.5,
                "potential": 71,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 94
            },
            "finance": {
                "size": 2.2,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 111
            },
            "healthcare": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 141
            },
            "energy": {
                "size": 1.3,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 108
            },
            "agriculture": {
                "size": 5.4,
                "growth": 3.2,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 81
            },
            "automotive": {
                "size": 1.2,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 105
            },
            "retail": {
                "size": 1.9,
                "growth": 5.0,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 108
            },
            "realestate": {
                "size": 1.3,
                "growth": 3.8,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 107
            },
            "telecom": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 132
            },
            "tourism": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 131
            },
            "education": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 132
            }
        },
        "gdp_growth_pct": 3.8,
        "inflation_pct": 0.6,
        "unemployment_pct": 2.6,
        "internet_users_pct": 24.1,
        "renewable_energy_pct": 54.6
    },
    "616": {
        "name": "폴란드",
        "nameEn": "Poland",
        "code": "PL",
        "flag": "🇵🇱",
        "lat": 52.26,
        "lng": 21.02,
        "gdp": 917.8,
        "pop": 36.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 45.9,
                "growth": 5.4,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            },
            "manufacturing": {
                "size": 121.1,
                "growth": 2.7,
                "potential": 84,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 21
            },
            "finance": {
                "size": 77.1,
                "growth": 3.9,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "healthcare": {
                "size": 59.2,
                "growth": 4.8,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "energy": {
                "size": 40.4,
                "growth": 3.6,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "agriculture": {
                "size": 23.3,
                "growth": 2.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 33
            },
            "automotive": {
                "size": 35.8,
                "growth": 3.6,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "retail": {
                "size": 55.1,
                "growth": 4.2,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "realestate": {
                "size": 36.7,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "telecom": {
                "size": 18.4,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "tourism": {
                "size": 10.9,
                "growth": 4.8,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 28
            },
            "education": {
                "size": 23.8,
                "growth": 4.2,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 22
            }
        },
        "gdp_growth_pct": 3.0,
        "inflation_pct": 3.8,
        "unemployment_pct": 2.8,
        "trade_pct_gdp": 100.4,
        "internet_users_pct": 88.6,
        "renewable_energy_pct": 15.2
    },
    "620": {
        "name": "포르투갈",
        "nameEn": "Portugal",
        "code": "PT",
        "flag": "🇵🇹",
        "lat": 38.7072,
        "lng": -9.13552,
        "gdp": 313.3,
        "pop": 10.7,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 15.7,
                "growth": 5.1,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 46
            },
            "manufacturing": {
                "size": 41.4,
                "growth": 2.4,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 45
            },
            "finance": {
                "size": 26.3,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 43
            },
            "healthcare": {
                "size": 25.7,
                "growth": 4.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 33
            },
            "energy": {
                "size": 13.8,
                "growth": 3.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 44
            },
            "agriculture": {
                "size": 6.3,
                "growth": 2.1,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 71
            },
            "automotive": {
                "size": 12.2,
                "growth": 3.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 41
            },
            "retail": {
                "size": 18.8,
                "growth": 3.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "realestate": {
                "size": 12.5,
                "growth": 2.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "telecom": {
                "size": 6.3,
                "growth": 3.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 45
            },
            "tourism": {
                "size": 13.7,
                "growth": 4.5,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "education": {
                "size": 8.6,
                "growth": 3.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 39
            }
        },
        "gdp_growth_pct": 2.1,
        "inflation_pct": 2.4,
        "unemployment_pct": 6.5,
        "trade_pct_gdp": 89.7,
        "internet_users_pct": 88.5,
        "renewable_energy_pct": 32.3
    },
    "600": {
        "name": "Paraguay",
        "nameEn": "Paraguay",
        "code": "PY",
        "flag": "🇵🇾",
        "lat": -25.3005,
        "lng": -57.6362,
        "gdp": 44.5,
        "pop": 6.9,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 2.2,
                "growth": 5.9,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 101
            },
            "manufacturing": {
                "size": 5.3,
                "growth": 3.2,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 100
            },
            "finance": {
                "size": 3.1,
                "growth": 4.4,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 100
            },
            "healthcare": {
                "size": 3.0,
                "growth": 5.3,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 83
            },
            "energy": {
                "size": 1.8,
                "growth": 4.1,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 99
            },
            "agriculture": {
                "size": 4.8,
                "growth": 2.9,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 89
            },
            "automotive": {
                "size": 1.3,
                "growth": 4.1,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 103
            },
            "retail": {
                "size": 2.7,
                "growth": 4.7,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 98
            },
            "realestate": {
                "size": 1.8,
                "growth": 3.5,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 97
            },
            "telecom": {
                "size": 1,
                "growth": 4.1,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 133
            },
            "tourism": {
                "size": 1,
                "growth": 5.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 132
            },
            "education": {
                "size": 1,
                "growth": 4.7,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 133
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 3.8,
        "unemployment_pct": 5.7,
        "trade_pct_gdp": 76.8,
        "internet_users_pct": 81.6,
        "renewable_energy_pct": 58.8
    },
    "634": {
        "name": "카타르",
        "nameEn": "Qatar",
        "code": "QA",
        "flag": "🇶🇦",
        "lat": 25.2948,
        "lng": 51.5082,
        "gdp": 219.2,
        "pop": 2.9,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 11.0,
                "growth": 5.1,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            },
            "manufacturing": {
                "size": 26.3,
                "growth": 2.4,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 55
            },
            "finance": {
                "size": 15.3,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 56
            },
            "healthcare": {
                "size": 4.4,
                "growth": 4.5,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 73
            },
            "energy": {
                "size": 8.8,
                "growth": 3.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            },
            "agriculture": {
                "size": 1,
                "growth": 2.1,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 145
            },
            "automotive": {
                "size": 6.6,
                "growth": 3.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 56
            },
            "retail": {
                "size": 13.2,
                "growth": 3.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            },
            "realestate": {
                "size": 8.8,
                "growth": 2.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            },
            "telecom": {
                "size": 4.4,
                "growth": 3.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 55
            },
            "tourism": {
                "size": 14.3,
                "growth": 4.5,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "education": {
                "size": 4.3,
                "growth": 3.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 58
            }
        },
        "gdp_growth_pct": 2.4,
        "inflation_pct": 1.3,
        "unemployment_pct": 0.1,
        "trade_pct_gdp": 100.2,
        "internet_users_pct": 99.7,
        "renewable_energy_pct": 0
    },
    "642": {
        "name": "루마니아",
        "nameEn": "Romania",
        "code": "RO",
        "flag": "🇷🇴",
        "lat": 44.4479,
        "lng": 26.0979,
        "gdp": 382.6,
        "pop": 19.1,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 19.1,
                "growth": 4.6,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 42
            },
            "manufacturing": {
                "size": 50.5,
                "growth": 1.9,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 38
            },
            "finance": {
                "size": 32.1,
                "growth": 3.1,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 36
            },
            "healthcare": {
                "size": 17.5,
                "growth": 4.0,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 42
            },
            "energy": {
                "size": 16.8,
                "growth": 2.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 39
            },
            "agriculture": {
                "size": 10.8,
                "growth": 1.6,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "automotive": {
                "size": 14.9,
                "growth": 2.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 36
            },
            "retail": {
                "size": 23.0,
                "growth": 3.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 41
            },
            "realestate": {
                "size": 15.3,
                "growth": 2.2,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 41
            },
            "telecom": {
                "size": 7.7,
                "growth": 2.8,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 41
            },
            "tourism": {
                "size": 2.5,
                "growth": 4.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 51
            },
            "education": {
                "size": 7.5,
                "growth": 3.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 46
            }
        },
        "gdp_growth_pct": 0.9,
        "inflation_pct": 5.7,
        "unemployment_pct": 5.4,
        "trade_pct_gdp": 77.2,
        "internet_users_pct": 91.3,
        "renewable_energy_pct": 23.6
    },
    "643": {
        "name": "러시아",
        "nameEn": "Russian Federation",
        "code": "RU",
        "flag": "🇷🇺",
        "lat": 55.7558,
        "lng": 37.6176,
        "gdp": 2173.8,
        "pop": 143.5,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 108.7,
                "growth": 5.9,
                "potential": 90,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "manufacturing": {
                "size": 286.9,
                "growth": 3.2,
                "potential": 86,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 11
            },
            "finance": {
                "size": 182.6,
                "growth": 4.4,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "healthcare": {
                "size": 122.5,
                "growth": 5.3,
                "potential": 89,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "energy": {
                "size": 95.6,
                "growth": 4.1,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "agriculture": {
                "size": 59.6,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "automotive": {
                "size": 84.8,
                "growth": 4.1,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 9
            },
            "retail": {
                "size": 130.4,
                "growth": 4.7,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "realestate": {
                "size": 87.0,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "telecom": {
                "size": 43.5,
                "growth": 4.1,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            },
            "tourism": {
                "size": 14.1,
                "growth": 5.3,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "education": {
                "size": 54.3,
                "growth": 4.7,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 12
            }
        },
        "gdp_growth_pct": 4.3,
        "inflation_pct": 8.4,
        "unemployment_pct": 2.4,
        "trade_pct_gdp": 39.5,
        "internet_users_pct": 94.4,
        "renewable_energy_pct": 3.5
    },
    "646": {
        "name": "Rwanda",
        "nameEn": "Rwanda",
        "code": "RW",
        "flag": "🇷🇼",
        "lat": -1.95325,
        "lng": 30.0587,
        "gdp": 14.3,
        "pop": 14.3,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 8.3,
                "potential": 67,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 144
            },
            "manufacturing": {
                "size": 1.7,
                "growth": 5.6,
                "potential": 62,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 141
            },
            "finance": {
                "size": 1,
                "growth": 6.8,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 146
            },
            "healthcare": {
                "size": 1,
                "growth": 7.7,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 142
            },
            "energy": {
                "size": 1,
                "growth": 6.5,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            },
            "agriculture": {
                "size": 3.5,
                "growth": 5.3,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 100
            },
            "automotive": {
                "size": 1,
                "growth": 6.5,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 139
            },
            "retail": {
                "size": 1,
                "growth": 7.1,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "realestate": {
                "size": 1,
                "growth": 5.9,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            },
            "telecom": {
                "size": 1,
                "growth": 6.5,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 134
            },
            "tourism": {
                "size": 1,
                "growth": 7.7,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 133
            },
            "education": {
                "size": 1,
                "growth": 7.1,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 134
            }
        },
        "gdp_growth_pct": 8.9,
        "inflation_pct": 1.8,
        "unemployment_pct": 11.3,
        "trade_pct_gdp": 70.0,
        "internet_users_pct": 34.2,
        "renewable_energy_pct": 79.9
    },
    "682": {
        "name": "사우디아라비아",
        "nameEn": "Saudi Arabia",
        "code": "SA",
        "flag": "🇸🇦",
        "lat": 24.6748,
        "lng": 46.6977,
        "gdp": 1239.8,
        "pop": 35.3,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 62.0,
                "growth": 5.0,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "manufacturing": {
                "size": 148.8,
                "growth": 2.3,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 19
            },
            "finance": {
                "size": 86.8,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "healthcare": {
                "size": 56.4,
                "growth": 4.4,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 20
            },
            "energy": {
                "size": 49.6,
                "growth": 3.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "agriculture": {
                "size": 31.4,
                "growth": 2.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "automotive": {
                "size": 37.2,
                "growth": 3.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            },
            "retail": {
                "size": 74.4,
                "growth": 3.8,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "realestate": {
                "size": 49.6,
                "growth": 2.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "telecom": {
                "size": 24.8,
                "growth": 3.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 18
            },
            "tourism": {
                "size": 6.2,
                "growth": 4.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 34
            },
            "education": {
                "size": 38.0,
                "growth": 3.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 16
            }
        },
        "gdp_growth_pct": 2.0,
        "inflation_pct": 1.7,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 54.7,
        "internet_users_pct": 100,
        "renewable_energy_pct": 0.1
    },
    "729": {
        "name": "Sudan",
        "nameEn": "Sudan",
        "code": "SD",
        "flag": "🇸🇩",
        "lat": 15.5932,
        "lng": 32.5363,
        "gdp": 49.7,
        "pop": 50.4,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 2.5,
                "growth": 4.7,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 95
            },
            "manufacturing": {
                "size": 6.0,
                "growth": 2.0,
                "potential": 56,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 95
            },
            "finance": {
                "size": 3.5,
                "growth": 3.2,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 95
            },
            "healthcare": {
                "size": 1.1,
                "growth": 4.1,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 117
            },
            "energy": {
                "size": 2.0,
                "growth": 2.9,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 93
            },
            "agriculture": {
                "size": 11.0,
                "growth": 1.7,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 53
            },
            "automotive": {
                "size": 1.5,
                "growth": 2.9,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 97
            },
            "retail": {
                "size": 3.0,
                "growth": 3.5,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 94
            },
            "realestate": {
                "size": 2.0,
                "growth": 2.3,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 93
            },
            "telecom": {
                "size": 1,
                "growth": 2.9,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 135
            },
            "tourism": {
                "size": 1,
                "growth": 4.1,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 134
            },
            "education": {
                "size": 1,
                "growth": 3.5,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 135
            }
        },
        "gdp_growth_pct": -14.0,
        "inflation_pct": 138.8,
        "unemployment_pct": 7.5,
        "trade_pct_gdp": 2.0,
        "internet_users_pct": 26.4,
        "renewable_energy_pct": 61
    },
    "686": {
        "name": "Senegal",
        "nameEn": "Senegal",
        "code": "SN",
        "flag": "🇸🇳",
        "lat": 14.7247,
        "lng": -17.4734,
        "gdp": 32.8,
        "pop": 18.5,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.6,
                "growth": 7.1,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            },
            "manufacturing": {
                "size": 3.9,
                "growth": 4.4,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 110
            },
            "finance": {
                "size": 2.3,
                "growth": 5.6,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            },
            "healthcare": {
                "size": 1.1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 118
            },
            "energy": {
                "size": 1.3,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 109
            },
            "agriculture": {
                "size": 5.5,
                "growth": 4.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            },
            "automotive": {
                "size": 1,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 140
            },
            "retail": {
                "size": 2.0,
                "growth": 5.9,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 107
            },
            "realestate": {
                "size": 1.3,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 108
            },
            "telecom": {
                "size": 1,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 136
            },
            "tourism": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 135
            },
            "education": {
                "size": 1.2,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 88
            }
        },
        "gdp_growth_pct": 6.1,
        "inflation_pct": 0.8,
        "unemployment_pct": 2.8,
        "trade_pct_gdp": 68.1,
        "internet_users_pct": 60.6,
        "renewable_energy_pct": 35.4
    },
    "702": {
        "name": "싱가포르",
        "nameEn": "Singapore",
        "code": "SG",
        "flag": "🇸🇬",
        "lat": 1.28941,
        "lng": 103.85,
        "gdp": 547.4,
        "pop": 6.0,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 41.1,
                "growth": 6.0,
                "potential": 89,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "manufacturing": {
                "size": 105.1,
                "growth": 3.3,
                "potential": 85,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 22
            },
            "finance": {
                "size": 38.3,
                "growth": 4.5,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 29
            },
            "healthcare": {
                "size": 19.7,
                "growth": 5.4,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 39
            },
            "energy": {
                "size": 21.9,
                "growth": 4.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 28
            },
            "agriculture": {
                "size": 1,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 146
            },
            "automotive": {
                "size": 21.3,
                "growth": 4.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 25
            },
            "retail": {
                "size": 32.8,
                "growth": 4.8,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 28
            },
            "realestate": {
                "size": 21.9,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "telecom": {
                "size": 13.1,
                "growth": 4.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 23
            },
            "tourism": {
                "size": 20.4,
                "growth": 5.4,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 11
            },
            "education": {
                "size": 7.2,
                "growth": 4.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 48
            }
        },
        "gdp_growth_pct": 4.4,
        "inflation_pct": 2.4,
        "unemployment_pct": 2.7,
        "trade_pct_gdp": 322.4,
        "internet_users_pct": 94.4,
        "renewable_energy_pct": 1.1
    },
    "694": {
        "name": "Sierra Leone",
        "nameEn": "Sierra Leone",
        "code": "SL",
        "flag": "🇸🇱",
        "lat": 8.4821,
        "lng": -13.2134,
        "gdp": 7.0,
        "pop": 8.6,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.4,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "manufacturing": {
                "size": 1,
                "growth": 3.7,
                "potential": 57,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 149
            },
            "finance": {
                "size": 1,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "healthcare": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 143
            },
            "energy": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 141
            },
            "agriculture": {
                "size": 2.0,
                "growth": 3.4,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 116
            },
            "automotive": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 141
            },
            "retail": {
                "size": 1,
                "growth": 5.2,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 146
            },
            "realestate": {
                "size": 1,
                "growth": 4.0,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 141
            },
            "telecom": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 137
            },
            "tourism": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 136
            },
            "education": {
                "size": 1,
                "growth": 5.2,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 136
            }
        },
        "gdp_growth_pct": 4.3,
        "inflation_pct": 28.6,
        "unemployment_pct": 3.1,
        "trade_pct_gdp": 40.5,
        "internet_users_pct": 20.6,
        "renewable_energy_pct": 71.6
    },
    "222": {
        "name": "El Salvador",
        "nameEn": "El Salvador",
        "code": "SV",
        "flag": "🇸🇻",
        "lat": 13.7034,
        "lng": -89.2073,
        "gdp": 35.4,
        "pop": 6.3,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.8,
                "growth": 5.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 106
            },
            "manufacturing": {
                "size": 4.2,
                "growth": 2.5,
                "potential": 75,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 108
            },
            "finance": {
                "size": 2.5,
                "growth": 3.7,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 107
            },
            "healthcare": {
                "size": 2.6,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 87
            },
            "energy": {
                "size": 1.4,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 106
            },
            "agriculture": {
                "size": 1.6,
                "growth": 2.2,
                "potential": 73,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 122
            },
            "automotive": {
                "size": 1.1,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 109
            },
            "retail": {
                "size": 2.1,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 105
            },
            "realestate": {
                "size": 1.4,
                "growth": 2.8,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 105
            },
            "telecom": {
                "size": 1,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 138
            },
            "tourism": {
                "size": 1,
                "growth": 4.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 137
            },
            "education": {
                "size": 1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 137
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 0.9,
        "unemployment_pct": 3.3,
        "trade_pct_gdp": 84.7,
        "internet_users_pct": 67.7,
        "renewable_energy_pct": 21.9
    },
    "706": {
        "name": "Somalia, Fed. Rep.",
        "nameEn": "Somalia, Fed. Rep.",
        "code": "SO",
        "flag": "🇸🇴",
        "lat": 2.07515,
        "lng": 45.3254,
        "gdp": 12.0,
        "pop": 19.0,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.3,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 146
            },
            "manufacturing": {
                "size": 1.4,
                "growth": 3.6,
                "potential": 58,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 145
            },
            "finance": {
                "size": 1,
                "growth": 4.8,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 148
            },
            "healthcare": {
                "size": 1,
                "growth": 5.7,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 144
            },
            "energy": {
                "size": 1,
                "growth": 4.5,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 142
            },
            "agriculture": {
                "size": 1,
                "growth": 3.3,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "automotive": {
                "size": 1,
                "growth": 4.5,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 142
            },
            "retail": {
                "size": 1,
                "growth": 5.1,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "realestate": {
                "size": 1,
                "growth": 3.9,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 142
            },
            "telecom": {
                "size": 1,
                "growth": 4.5,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 139
            },
            "tourism": {
                "size": 1,
                "growth": 5.7,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 138
            },
            "education": {
                "size": 1,
                "growth": 5.1,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 138
            }
        },
        "gdp_growth_pct": 4.1,
        "unemployment_pct": 18.9,
        "trade_pct_gdp": 130.3,
        "internet_users_pct": 27.6,
        "renewable_energy_pct": 95.4
    },
    "688": {
        "name": "Serbia",
        "nameEn": "Serbia",
        "code": "RS",
        "flag": "🇷🇸",
        "lat": 44.8024,
        "lng": 20.4656,
        "gdp": 90.1,
        "pop": 6.6,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 4.5,
                "growth": 5.8,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 76
            },
            "manufacturing": {
                "size": 11.9,
                "growth": 3.1,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 75
            },
            "finance": {
                "size": 7.6,
                "growth": 4.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 70
            },
            "healthcare": {
                "size": 5.8,
                "growth": 5.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 65
            },
            "energy": {
                "size": 4.0,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 74
            },
            "agriculture": {
                "size": 2.9,
                "growth": 2.8,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 103
            },
            "automotive": {
                "size": 3.5,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 69
            },
            "retail": {
                "size": 5.4,
                "growth": 4.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 75
            },
            "realestate": {
                "size": 3.6,
                "growth": 3.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 75
            },
            "telecom": {
                "size": 1.8,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 76
            },
            "tourism": {
                "size": 1.8,
                "growth": 5.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 64
            },
            "education": {
                "size": 1.8,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 78
            }
        },
        "gdp_growth_pct": 3.9,
        "inflation_pct": 4.7,
        "unemployment_pct": 7.2,
        "trade_pct_gdp": 111.7,
        "internet_users_pct": 87.7,
        "renewable_energy_pct": 27.2
    },
    "703": {
        "name": "Slovak Republic",
        "nameEn": "Slovak Republic",
        "code": "SK",
        "flag": "🇸🇰",
        "lat": 48.1484,
        "lng": 17.1073,
        "gdp": 140.9,
        "pop": 5.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 7.0,
                "growth": 5.0,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 60
            },
            "manufacturing": {
                "size": 18.6,
                "growth": 2.3,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 59
            },
            "finance": {
                "size": 11.8,
                "growth": 3.5,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "healthcare": {
                "size": 8.3,
                "growth": 4.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 54
            },
            "energy": {
                "size": 6.2,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 59
            },
            "agriculture": {
                "size": 2.2,
                "growth": 2.0,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 113
            },
            "automotive": {
                "size": 5.5,
                "growth": 3.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 57
            },
            "retail": {
                "size": 8.5,
                "growth": 3.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 60
            },
            "realestate": {
                "size": 5.6,
                "growth": 2.6,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 60
            },
            "telecom": {
                "size": 2.8,
                "growth": 3.2,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 60
            },
            "tourism": {
                "size": 1.7,
                "growth": 4.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 68
            },
            "education": {
                "size": 3.9,
                "growth": 3.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 59
            }
        },
        "gdp_growth_pct": 1.9,
        "inflation_pct": 2.8,
        "unemployment_pct": 5.3,
        "trade_pct_gdp": 171.2,
        "internet_users_pct": 89.8,
        "renewable_energy_pct": 17.9
    },
    "705": {
        "name": "Slovenia",
        "nameEn": "Slovenia",
        "code": "SI",
        "flag": "🇸🇮",
        "lat": 46.0546,
        "lng": 14.5044,
        "gdp": 73.0,
        "pop": 2.1,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 3.7,
                "growth": 4.9,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "manufacturing": {
                "size": 9.6,
                "growth": 2.2,
                "potential": 79,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 84
            },
            "finance": {
                "size": 6.1,
                "growth": 3.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 81
            },
            "healthcare": {
                "size": 5.8,
                "growth": 4.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 66
            },
            "energy": {
                "size": 3.2,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 82
            },
            "agriculture": {
                "size": 1.1,
                "growth": 1.9,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 131
            },
            "automotive": {
                "size": 2.8,
                "growth": 3.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 80
            },
            "retail": {
                "size": 4.4,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "realestate": {
                "size": 2.9,
                "growth": 2.5,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "telecom": {
                "size": 1.5,
                "growth": 3.1,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "tourism": {
                "size": 1.8,
                "growth": 4.3,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 65
            },
            "education": {
                "size": 2.3,
                "growth": 3.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 70
            }
        },
        "gdp_growth_pct": 1.7,
        "inflation_pct": 2.0,
        "unemployment_pct": 3.7,
        "trade_pct_gdp": 155.7,
        "internet_users_pct": 90.8,
        "renewable_energy_pct": 23.4
    },
    "752": {
        "name": "스웨덴",
        "nameEn": "Sweden",
        "code": "SE",
        "flag": "🇸🇪",
        "lat": 59.3327,
        "lng": 18.0645,
        "gdp": 603.7,
        "pop": 10.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 30.9,
                "growth": 4.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 30
            },
            "manufacturing": {
                "size": 79.7,
                "growth": 1.8,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 29
            },
            "finance": {
                "size": 50.7,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            },
            "healthcare": {
                "size": 54.2,
                "growth": 3.9,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 21
            },
            "energy": {
                "size": 26.6,
                "growth": 2.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            },
            "agriculture": {
                "size": 8.6,
                "growth": 1.5,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 61
            },
            "automotive": {
                "size": 23.5,
                "growth": 2.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 24
            },
            "retail": {
                "size": 36.2,
                "growth": 3.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 25
            },
            "realestate": {
                "size": 24.1,
                "growth": 2.1,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 25
            },
            "telecom": {
                "size": 12.1,
                "growth": 2.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 27
            },
            "tourism": {
                "size": 15.7,
                "growth": 3.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 16
            },
            "education": {
                "size": 26.5,
                "growth": 3.3,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 19
            }
        },
        "gdp_growth_pct": 0.8,
        "inflation_pct": 2.8,
        "unemployment_pct": 8.4,
        "trade_pct_gdp": 105.9,
        "internet_users_pct": 95.5,
        "renewable_energy_pct": 57.9
    },
    "760": {
        "name": "Syrian Arab Republic",
        "nameEn": "Syrian Arab Republic",
        "code": "SY",
        "flag": "🇸🇾",
        "lat": 33.5146,
        "lng": 36.3119,
        "gdp": 23.6,
        "pop": 24.7,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 5.0,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 121
            },
            "manufacturing": {
                "size": 2.8,
                "growth": 2.3,
                "potential": 56,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 122
            },
            "finance": {
                "size": 1.7,
                "growth": 3.5,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 119
            },
            "healthcare": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "energy": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 143
            },
            "agriculture": {
                "size": 10.2,
                "growth": 2.0,
                "potential": 57,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 55
            },
            "automotive": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 143
            },
            "retail": {
                "size": 1.4,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 121
            },
            "realestate": {
                "size": 1,
                "growth": 2.6,
                "potential": 55,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 143
            },
            "telecom": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            },
            "tourism": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 139
            },
            "education": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 139
            }
        },
        "gdp_growth_pct": 0.7,
        "inflation_pct": 13.4,
        "unemployment_pct": 13.4,
        "trade_pct_gdp": 35.6,
        "internet_users_pct": 34.6,
        "renewable_energy_pct": 1.1
    },
    "148": {
        "name": "Chad",
        "nameEn": "Chad",
        "code": "TD",
        "flag": "🇹🇩",
        "lat": 12.1048,
        "lng": 15.0445,
        "gdp": 19.5,
        "pop": 20.3,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.4,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "manufacturing": {
                "size": 2.3,
                "growth": 3.7,
                "potential": 58,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 134
            },
            "finance": {
                "size": 1.4,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 133
            },
            "healthcare": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 146
            },
            "energy": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 144
            },
            "agriculture": {
                "size": 7.4,
                "growth": 3.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 65
            },
            "automotive": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 144
            },
            "retail": {
                "size": 1.2,
                "growth": 5.2,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 130
            },
            "realestate": {
                "size": 1,
                "growth": 4.0,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 144
            },
            "telecom": {
                "size": 1,
                "growth": 4.6,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 141
            },
            "tourism": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            },
            "education": {
                "size": 1,
                "growth": 5.2,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 140
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 8.9,
        "unemployment_pct": 1.1,
        "trade_pct_gdp": 47.9,
        "internet_users_pct": 13.2,
        "renewable_energy_pct": 70
    },
    "768": {
        "name": "Togo",
        "nameEn": "Togo",
        "code": "TG",
        "flag": "🇹🇬",
        "lat": 6.1228,
        "lng": 1.2255,
        "gdp": 10.7,
        "pop": 9.5,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 7.3,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 148
            },
            "manufacturing": {
                "size": 1.3,
                "growth": 4.6,
                "potential": 60,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 147
            },
            "finance": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 149
            },
            "healthcare": {
                "size": 1,
                "growth": 6.7,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "energy": {
                "size": 1,
                "growth": 5.5,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "agriculture": {
                "size": 2.3,
                "growth": 4.3,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 111
            },
            "automotive": {
                "size": 1,
                "growth": 5.5,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "retail": {
                "size": 1,
                "growth": 6.1,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 148
            },
            "realestate": {
                "size": 1,
                "growth": 4.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "telecom": {
                "size": 1,
                "growth": 5.5,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 142
            },
            "tourism": {
                "size": 1,
                "growth": 6.7,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 141
            },
            "education": {
                "size": 1,
                "growth": 6.1,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 141
            }
        },
        "gdp_growth_pct": 6.5,
        "inflation_pct": 2.9,
        "unemployment_pct": 1.9,
        "trade_pct_gdp": 61.6,
        "internet_users_pct": 37.0,
        "renewable_energy_pct": 75.1
    },
    "764": {
        "name": "태국",
        "nameEn": "Thailand",
        "code": "TH",
        "flag": "🇹🇭",
        "lat": 13.7308,
        "lng": 100.521,
        "gdp": 526.5,
        "pop": 71.7,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 39.5,
                "growth": 5.2,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 24
            },
            "manufacturing": {
                "size": 101.1,
                "growth": 2.5,
                "potential": 79,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 23
            },
            "finance": {
                "size": 36.9,
                "growth": 3.7,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 31
            },
            "healthcare": {
                "size": 19.1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 40
            },
            "energy": {
                "size": 21.1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 31
            },
            "agriculture": {
                "size": 45.9,
                "growth": 2.2,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 18
            },
            "automotive": {
                "size": 20.5,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 27
            },
            "retail": {
                "size": 31.6,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 31
            },
            "realestate": {
                "size": 21.1,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 30
            },
            "telecom": {
                "size": 12.6,
                "growth": 3.4,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 25
            },
            "tourism": {
                "size": 15.4,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "education": {
                "size": 8.0,
                "growth": 4.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 44
            }
        },
        "gdp_growth_pct": 2.5,
        "inflation_pct": 1.4,
        "unemployment_pct": 0.8,
        "trade_pct_gdp": 136.7,
        "internet_users_pct": 90.9,
        "renewable_energy_pct": 19
    },
    "762": {
        "name": "Tajikistan",
        "nameEn": "Tajikistan",
        "code": "TJ",
        "flag": "🇹🇯",
        "lat": 38.5878,
        "lng": 68.7864,
        "gdp": 14.2,
        "pop": 10.6,
        "region": "Europe & Central Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 8.1,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "manufacturing": {
                "size": 1.9,
                "growth": 5.4,
                "potential": 74,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 139
            },
            "finance": {
                "size": 1.2,
                "growth": 6.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 137
            },
            "healthcare": {
                "size": 1,
                "growth": 7.5,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 148
            },
            "energy": {
                "size": 1,
                "growth": 6.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 146
            },
            "agriculture": {
                "size": 3.2,
                "growth": 5.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 102
            },
            "automotive": {
                "size": 1,
                "growth": 6.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 146
            },
            "retail": {
                "size": 1,
                "growth": 6.9,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "realestate": {
                "size": 1,
                "growth": 5.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 146
            },
            "telecom": {
                "size": 1,
                "growth": 6.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 143
            },
            "tourism": {
                "size": 1,
                "growth": 7.5,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 142
            },
            "education": {
                "size": 1,
                "growth": 6.9,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 142
            }
        },
        "gdp_growth_pct": 8.4,
        "unemployment_pct": 7.0,
        "trade_pct_gdp": 65.6,
        "internet_users_pct": 56.8,
        "renewable_energy_pct": 34.9
    },
    "795": {
        "name": "Turkmenistan",
        "nameEn": "Turkmenistan",
        "code": "TM",
        "flag": "🇹🇲",
        "lat": 37.9509,
        "lng": 58.3794,
        "gdp": 51.4,
        "pop": 7.5,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 2.6,
                "growth": 6.7,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 93
            },
            "manufacturing": {
                "size": 6.8,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 88
            },
            "finance": {
                "size": 4.3,
                "growth": 5.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 87
            },
            "healthcare": {
                "size": 2.3,
                "growth": 6.1,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 94
            },
            "energy": {
                "size": 2.3,
                "growth": 4.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 87
            },
            "agriculture": {
                "size": 6.3,
                "growth": 3.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 72
            },
            "automotive": {
                "size": 2.0,
                "growth": 4.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 87
            },
            "retail": {
                "size": 3.1,
                "growth": 5.5,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 92
            },
            "realestate": {
                "size": 2.1,
                "growth": 4.3,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 91
            },
            "telecom": {
                "size": 1,
                "growth": 4.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 144
            },
            "tourism": {
                "size": 1.3,
                "growth": 6.1,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 75
            },
            "education": {
                "size": 1,
                "growth": 5.5,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 143
            }
        },
        "gdp_growth_pct": 6.3,
        "unemployment_pct": 4.0,
        "trade_pct_gdp": 28.7,
        "renewable_energy_pct": 0.1
    },
    "780": {
        "name": "Trinidad and Tobago",
        "nameEn": "Trinidad and Tobago",
        "code": "TT",
        "flag": "🇹🇹",
        "lat": 10.6596,
        "lng": -61.4789,
        "gdp": 25.6,
        "pop": 1.4,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.3,
                "growth": 5.2,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 115
            },
            "manufacturing": {
                "size": 3.1,
                "growth": 2.5,
                "potential": 78,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 115
            },
            "finance": {
                "size": 1.8,
                "growth": 3.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 115
            },
            "healthcare": {
                "size": 1.5,
                "growth": 4.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 111
            },
            "energy": {
                "size": 1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 147
            },
            "agriculture": {
                "size": 1,
                "growth": 2.2,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 148
            },
            "automotive": {
                "size": 1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 147
            },
            "retail": {
                "size": 1.5,
                "growth": 4.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 116
            },
            "realestate": {
                "size": 1,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 147
            },
            "telecom": {
                "size": 1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 145
            },
            "tourism": {
                "size": 1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 143
            },
            "education": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 144
            }
        },
        "gdp_growth_pct": 2.5,
        "inflation_pct": 0.5,
        "unemployment_pct": 3.3,
        "internet_users_pct": 84.7,
        "renewable_energy_pct": 0.5
    },
    "788": {
        "name": "Tunisia",
        "nameEn": "Tunisia",
        "code": "TN",
        "flag": "🇹🇳",
        "lat": 36.7899,
        "lng": 10.21,
        "gdp": 51.3,
        "pop": 12.3,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.6,
                "growth": 5.3,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 94
            },
            "manufacturing": {
                "size": 6.2,
                "growth": 2.6,
                "potential": 70,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 93
            },
            "finance": {
                "size": 3.6,
                "growth": 3.8,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 94
            },
            "healthcare": {
                "size": 3.3,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 79
            },
            "energy": {
                "size": 2.1,
                "growth": 3.5,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 92
            },
            "agriculture": {
                "size": 5.0,
                "growth": 2.3,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 86
            },
            "automotive": {
                "size": 1.5,
                "growth": 3.5,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 98
            },
            "retail": {
                "size": 3.1,
                "growth": 4.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 93
            },
            "realestate": {
                "size": 2.1,
                "growth": 2.9,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 92
            },
            "telecom": {
                "size": 1,
                "growth": 3.5,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 146
            },
            "tourism": {
                "size": 1,
                "growth": 4.7,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 144
            },
            "education": {
                "size": 2.1,
                "growth": 4.1,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 76
            }
        },
        "gdp_growth_pct": 1.6,
        "inflation_pct": 7.2,
        "unemployment_pct": 15.3,
        "trade_pct_gdp": 106.3,
        "internet_users_pct": 72.4,
        "renewable_energy_pct": 11.6
    },
    "792": {
        "name": "터키",
        "nameEn": "Turkiye",
        "code": "TR",
        "flag": "🇹🇷",
        "lat": 39.7153,
        "lng": 32.3606,
        "gdp": 1359.1,
        "pop": 85.5,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 68.0,
                "growth": 5.5,
                "potential": 84,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "manufacturing": {
                "size": 179.4,
                "growth": 2.8,
                "potential": 80,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 17
            },
            "finance": {
                "size": 114.2,
                "growth": 4.0,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 16
            },
            "healthcare": {
                "size": 46.5,
                "growth": 4.9,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 24
            },
            "energy": {
                "size": 59.8,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 16
            },
            "agriculture": {
                "size": 79.1,
                "growth": 2.5,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "automotive": {
                "size": 53.0,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "retail": {
                "size": 81.5,
                "growth": 4.3,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "realestate": {
                "size": 54.4,
                "growth": 3.1,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "telecom": {
                "size": 27.2,
                "growth": 3.7,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 17
            },
            "tourism": {
                "size": 17.9,
                "growth": 4.9,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 15
            },
            "education": {
                "size": 25.2,
                "growth": 4.3,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 21
            }
        },
        "gdp_growth_pct": 3.3,
        "inflation_pct": 58.5,
        "unemployment_pct": 8.8,
        "trade_pct_gdp": 54.6,
        "internet_users_pct": 87.3,
        "renewable_energy_pct": 12
    },
    "834": {
        "name": "탄자니아",
        "nameEn": "Tanzania",
        "code": "TZ",
        "flag": "🇹🇿",
        "lat": -6.17486,
        "lng": 35.7382,
        "gdp": 78.8,
        "pop": 68.6,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 3.9,
                "growth": 6.9,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 82
            },
            "manufacturing": {
                "size": 9.5,
                "growth": 4.2,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 85
            },
            "finance": {
                "size": 5.5,
                "growth": 5.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 84
            },
            "healthcare": {
                "size": 1.9,
                "growth": 6.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 104
            },
            "energy": {
                "size": 3.2,
                "growth": 5.1,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 83
            },
            "agriculture": {
                "size": 18.4,
                "growth": 3.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 38
            },
            "automotive": {
                "size": 2.4,
                "growth": 5.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 84
            },
            "retail": {
                "size": 4.7,
                "growth": 5.7,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 81
            },
            "realestate": {
                "size": 3.2,
                "growth": 4.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 80
            },
            "telecom": {
                "size": 1.6,
                "growth": 5.1,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 81
            },
            "tourism": {
                "size": 2.6,
                "growth": 6.3,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 49
            },
            "education": {
                "size": 1.5,
                "growth": 5.7,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 82
            }
        },
        "gdp_growth_pct": 5.5,
        "inflation_pct": 3.1,
        "unemployment_pct": 1.6,
        "trade_pct_gdp": 41.5,
        "internet_users_pct": 29.1,
        "renewable_energy_pct": 78.3
    },
    "800": {
        "name": "Uganda",
        "nameEn": "Uganda",
        "code": "UG",
        "flag": "🇺🇬",
        "lat": 0.314269,
        "lng": 32.5729,
        "gdp": 53.9,
        "pop": 50.0,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 2.7,
                "growth": 7.1,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 92
            },
            "manufacturing": {
                "size": 6.5,
                "growth": 4.4,
                "potential": 61,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 90
            },
            "finance": {
                "size": 3.8,
                "growth": 5.6,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 89
            },
            "healthcare": {
                "size": 1.8,
                "growth": 6.5,
                "potential": 64,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 105
            },
            "energy": {
                "size": 2.2,
                "growth": 5.3,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 89
            },
            "agriculture": {
                "size": 13.3,
                "growth": 4.1,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 46
            },
            "automotive": {
                "size": 1.6,
                "growth": 5.3,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 94
            },
            "retail": {
                "size": 3.2,
                "growth": 5.9,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 91
            },
            "realestate": {
                "size": 2.2,
                "growth": 4.7,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 88
            },
            "telecom": {
                "size": 1.1,
                "growth": 5.3,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 91
            },
            "tourism": {
                "size": 1,
                "growth": 6.5,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            },
            "education": {
                "size": 1,
                "growth": 5.9,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 145
            }
        },
        "gdp_growth_pct": 6.1,
        "inflation_pct": 3.3,
        "unemployment_pct": 2.7,
        "trade_pct_gdp": 42.7,
        "internet_users_pct": 8.9,
        "renewable_energy_pct": 90.9
    },
    "804": {
        "name": "우크라이나",
        "nameEn": "Ukraine",
        "code": "UA",
        "flag": "🇺🇦",
        "lat": 50.4536,
        "lng": 30.5038,
        "gdp": 190.7,
        "pop": 37.9,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 9.5,
                "growth": 5.4,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 56
            },
            "manufacturing": {
                "size": 25.2,
                "growth": 2.7,
                "potential": 78,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 56
            },
            "finance": {
                "size": 16.0,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 55
            },
            "healthcare": {
                "size": 12.5,
                "growth": 4.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "energy": {
                "size": 8.4,
                "growth": 3.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 56
            },
            "agriculture": {
                "size": 13.6,
                "growth": 2.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 45
            },
            "automotive": {
                "size": 7.4,
                "growth": 3.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 55
            },
            "retail": {
                "size": 11.4,
                "growth": 4.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 56
            },
            "realestate": {
                "size": 7.6,
                "growth": 3.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 56
            },
            "telecom": {
                "size": 3.8,
                "growth": 3.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 56
            },
            "tourism": {
                "size": 1.2,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 77
            },
            "education": {
                "size": 5.9,
                "growth": 4.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            }
        },
        "gdp_growth_pct": 2.9,
        "inflation_pct": 6.5,
        "unemployment_pct": 9.8,
        "trade_pct_gdp": 77.8,
        "internet_users_pct": 82.4,
        "renewable_energy_pct": 8.9
    },
    "858": {
        "name": "Uruguay",
        "nameEn": "Uruguay",
        "code": "UY",
        "flag": "🇺🇾",
        "lat": -34.8941,
        "lng": -56.0675,
        "gdp": 81.0,
        "pop": 3.4,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.0,
                "growth": 5.4,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 81
            },
            "manufacturing": {
                "size": 9.7,
                "growth": 2.7,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 83
            },
            "finance": {
                "size": 5.7,
                "growth": 3.9,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 83
            },
            "healthcare": {
                "size": 5.8,
                "growth": 4.8,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 67
            },
            "energy": {
                "size": 3.2,
                "growth": 3.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 84
            },
            "agriculture": {
                "size": 5.2,
                "growth": 2.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "automotive": {
                "size": 2.4,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 85
            },
            "retail": {
                "size": 4.9,
                "growth": 4.2,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 80
            },
            "realestate": {
                "size": 3.2,
                "growth": 3.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 81
            },
            "telecom": {
                "size": 1.6,
                "growth": 3.6,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 82
            },
            "tourism": {
                "size": 1.1,
                "growth": 4.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 82
            },
            "education": {
                "size": 2.3,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 71
            }
        },
        "gdp_growth_pct": 3.1,
        "inflation_pct": 4.8,
        "unemployment_pct": 8.2,
        "trade_pct_gdp": 52.5,
        "internet_users_pct": 92.0,
        "renewable_energy_pct": 57.8
    },
    "840": {
        "name": "미국",
        "nameEn": "United States",
        "code": "US",
        "flag": "🇺🇸",
        "lat": 38.8895,
        "lng": -77.032,
        "gdp": 28751.0,
        "pop": 340.1,
        "region": "North America",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 2783.9,
                "growth": 5.3,
                "potential": 93,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "manufacturing": {
                "size": 3105.1,
                "growth": 2.6,
                "potential": 88,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 2
            },
            "finance": {
                "size": 3018.9,
                "growth": 3.8,
                "potential": 90,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "healthcare": {
                "size": 6143.7,
                "growth": 4.7,
                "potential": 93,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "energy": {
                "size": 1150.0,
                "growth": 3.5,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "agriculture": {
                "size": 275.9,
                "growth": 2.3,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "automotive": {
                "size": 862.5,
                "growth": 3.5,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "retail": {
                "size": 2415.1,
                "growth": 4.1,
                "potential": 90,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "realestate": {
                "size": 1150.0,
                "growth": 2.9,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "telecom": {
                "size": 575.0,
                "growth": 3.5,
                "potential": 87,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "tourism": {
                "size": 143.8,
                "growth": 4.7,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "education": {
                "size": 935.0,
                "growth": 4.1,
                "potential": 89,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            }
        },
        "gdp_growth_pct": 2.8,
        "inflation_pct": 2.9,
        "unemployment_pct": 4.0,
        "trade_pct_gdp": 25.4,
        "internet_users_pct": 93.1,
        "renewable_energy_pct": 10.9
    },
    "860": {
        "name": "우즈베키스탄",
        "nameEn": "Uzbekistan",
        "code": "UZ",
        "flag": "🇺🇿",
        "lat": 41.3052,
        "lng": 69.269,
        "gdp": 115.0,
        "pop": 36.4,
        "region": "Europe & Central Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 5.8,
                "growth": 7.3,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 66
            },
            "manufacturing": {
                "size": 15.2,
                "growth": 4.6,
                "potential": 75,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 61
            },
            "finance": {
                "size": 9.7,
                "growth": 5.8,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 61
            },
            "healthcare": {
                "size": 6.2,
                "growth": 6.7,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 63
            },
            "energy": {
                "size": 5.1,
                "growth": 5.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 61
            },
            "agriculture": {
                "size": 21.1,
                "growth": 4.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 36
            },
            "automotive": {
                "size": 4.5,
                "growth": 5.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 61
            },
            "retail": {
                "size": 6.9,
                "growth": 6.1,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 66
            },
            "realestate": {
                "size": 4.6,
                "growth": 4.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 65
            },
            "telecom": {
                "size": 2.3,
                "growth": 5.5,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 67
            },
            "tourism": {
                "size": 1,
                "growth": 6.7,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 146
            },
            "education": {
                "size": 3.8,
                "growth": 6.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 60
            }
        },
        "gdp_growth_pct": 6.5,
        "inflation_pct": 9.6,
        "unemployment_pct": 4.4,
        "trade_pct_gdp": 60.7,
        "internet_users_pct": 89.0,
        "renewable_energy_pct": 1
    },
    "862": {
        "name": "Venezuela, RB",
        "nameEn": "Venezuela, RB",
        "code": "VE",
        "flag": "🇻🇪",
        "lat": 9.08165,
        "lng": -69.8371,
        "gdp": 119.8,
        "pop": 28.4,
        "region": "Latin America & Caribbean ",
        "income": "Not classified",
        "industries": {
            "tech": {
                "size": 6.0,
                "growth": 6.3,
                "potential": 65,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 65
            },
            "manufacturing": {
                "size": 14.4,
                "growth": 3.6,
                "potential": 61,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 66
            },
            "finance": {
                "size": 8.4,
                "growth": 4.8,
                "potential": 62,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 66
            },
            "healthcare": {
                "size": 3.6,
                "growth": 5.7,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 76
            },
            "energy": {
                "size": 4.8,
                "growth": 4.5,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 66
            },
            "agriculture": {
                "size": 3.6,
                "growth": 3.3,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 98
            },
            "automotive": {
                "size": 3.6,
                "growth": 4.5,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 68
            },
            "retail": {
                "size": 7.2,
                "growth": 5.1,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 65
            },
            "realestate": {
                "size": 4.8,
                "growth": 3.9,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 64
            },
            "telecom": {
                "size": 2.4,
                "growth": 4.5,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 64
            },
            "tourism": {
                "size": 2.4,
                "growth": 5.7,
                "potential": 63,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 53
            },
            "education": {
                "size": 1,
                "growth": 5.1,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 146
            }
        },
        "gdp_growth_pct": 5.3,
        "unemployment_pct": 5.3,
        "trade_pct_gdp": 26.1,
        "renewable_energy_pct": 33.7
    },
    "704": {
        "name": "베트남",
        "nameEn": "Viet Nam",
        "code": "VN",
        "flag": "🇻🇳",
        "lat": 21.0069,
        "lng": 105.825,
        "gdp": 476.4,
        "pop": 101.0,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 35.7,
                "growth": 7.5,
                "potential": 82,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 25
            },
            "manufacturing": {
                "size": 91.5,
                "growth": 4.8,
                "potential": 77,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 24
            },
            "finance": {
                "size": 33.3,
                "growth": 6.0,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 34
            },
            "healthcare": {
                "size": 17.4,
                "growth": 6.9,
                "potential": 80,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 43
            },
            "energy": {
                "size": 19.1,
                "growth": 5.7,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 32
            },
            "agriculture": {
                "size": 56.5,
                "growth": 4.5,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 12
            },
            "automotive": {
                "size": 18.6,
                "growth": 5.7,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 30
            },
            "retail": {
                "size": 28.6,
                "growth": 6.3,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 33
            },
            "realestate": {
                "size": 19.1,
                "growth": 5.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 32
            },
            "telecom": {
                "size": 11.4,
                "growth": 5.7,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 28
            },
            "tourism": {
                "size": 3.2,
                "growth": 6.9,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 44
            },
            "education": {
                "size": 8.3,
                "growth": 6.3,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 41
            }
        },
        "gdp_growth_pct": 7.1,
        "inflation_pct": 3.6,
        "unemployment_pct": 1.6,
        "trade_pct_gdp": 173.9,
        "internet_users_pct": 84.2,
        "renewable_energy_pct": 24.2
    },
    "887": {
        "name": "Yemen, Rep.",
        "nameEn": "Yemen, Rep.",
        "code": "YE",
        "flag": "🇾🇪",
        "lat": 15.352,
        "lng": 44.2075,
        "gdp": 21.6,
        "pop": 40.6,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 5.0,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 126
            },
            "manufacturing": {
                "size": 2.6,
                "growth": 2.3,
                "potential": 56,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 126
            },
            "finance": {
                "size": 1.5,
                "growth": 3.5,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 127
            },
            "healthcare": {
                "size": 1.7,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 107
            },
            "energy": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 148
            },
            "agriculture": {
                "size": 6.2,
                "growth": 2.0,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 74
            },
            "automotive": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 148
            },
            "retail": {
                "size": 1.3,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 125
            },
            "realestate": {
                "size": 1,
                "growth": 2.6,
                "potential": 55,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 148
            },
            "telecom": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "tourism": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            },
            "education": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 147
            }
        },
        "gdp_growth_pct": 0.8,
        "unemployment_pct": 17.0,
        "trade_pct_gdp": 56.1,
        "internet_users_pct": 13.8,
        "renewable_energy_pct": 3.7
    },
    "710": {
        "name": "남아프리카",
        "nameEn": "South Africa",
        "code": "ZA",
        "flag": "🇿🇦",
        "lat": -25.746,
        "lng": 28.1871,
        "gdp": 401.1,
        "pop": 64.0,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 20.1,
                "growth": 4.4,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 39
            },
            "manufacturing": {
                "size": 48.1,
                "growth": 1.7,
                "potential": 76,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 41
            },
            "finance": {
                "size": 28.1,
                "growth": 2.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 41
            },
            "healthcare": {
                "size": 28.6,
                "growth": 3.8,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 30
            },
            "energy": {
                "size": 16.0,
                "growth": 2.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 40
            },
            "agriculture": {
                "size": 11.3,
                "growth": 1.4,
                "potential": 74,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 51
            },
            "automotive": {
                "size": 12.0,
                "growth": 2.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 42
            },
            "retail": {
                "size": 24.1,
                "growth": 3.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 39
            },
            "realestate": {
                "size": 16.0,
                "growth": 2.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 39
            },
            "telecom": {
                "size": 8.0,
                "growth": 2.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 39
            },
            "tourism": {
                "size": 2.7,
                "growth": 3.8,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 48
            },
            "education": {
                "size": 14.5,
                "growth": 3.2,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 28
            }
        },
        "gdp_growth_pct": 0.5,
        "inflation_pct": 4.4,
        "unemployment_pct": 32.3,
        "trade_pct_gdp": 61.6,
        "internet_users_pct": 75.7,
        "renewable_energy_pct": 9.7
    },
    "894": {
        "name": "Zambia",
        "nameEn": "Zambia",
        "code": "ZM",
        "flag": "🇿🇲",
        "lat": -15.3982,
        "lng": 28.2937,
        "gdp": 25.3,
        "pop": 21.3,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.3,
                "growth": 6.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 116
            },
            "manufacturing": {
                "size": 3.0,
                "growth": 3.5,
                "potential": 70,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 119
            },
            "finance": {
                "size": 1.8,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 116
            },
            "healthcare": {
                "size": 1.2,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 116
            },
            "energy": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "agriculture": {
                "size": 1,
                "growth": 3.2,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "automotive": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "retail": {
                "size": 1.5,
                "growth": 5.0,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 117
            },
            "realestate": {
                "size": 1,
                "growth": 3.8,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "telecom": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 148
            },
            "tourism": {
                "size": 1,
                "growth": 5.6,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 148
            },
            "education": {
                "size": 1,
                "growth": 5.0,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 148
            }
        },
        "gdp_growth_pct": 3.8,
        "inflation_pct": 15.0,
        "unemployment_pct": 5.9,
        "trade_pct_gdp": 62.5,
        "internet_users_pct": 33,
        "renewable_energy_pct": 83
    },
    "716": {
        "name": "Zimbabwe",
        "nameEn": "Zimbabwe",
        "code": "ZW",
        "flag": "🇿🇼",
        "lat": -17.8312,
        "lng": 31.0672,
        "gdp": 41.5,
        "pop": 16.6,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.1,
                "growth": 5.4,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 102
            },
            "manufacturing": {
                "size": 5.0,
                "growth": 2.7,
                "potential": 69,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 103
            },
            "finance": {
                "size": 2.9,
                "growth": 3.9,
                "potential": 71,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 103
            },
            "healthcare": {
                "size": 1,
                "growth": 4.8,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "energy": {
                "size": 1.7,
                "growth": 3.6,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 102
            },
            "agriculture": {
                "size": 3.6,
                "growth": 2.4,
                "potential": 68,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 99
            },
            "automotive": {
                "size": 1.2,
                "growth": 3.6,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 106
            },
            "retail": {
                "size": 2.5,
                "growth": 4.2,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 101
            },
            "realestate": {
                "size": 1.7,
                "growth": 3.0,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 101
            },
            "telecom": {
                "size": 1,
                "growth": 3.6,
                "potential": 69,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "tourism": {
                "size": 1,
                "growth": 4.8,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            },
            "education": {
                "size": 1,
                "growth": 4.2,
                "potential": 70,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 149
            }
        },
        "gdp_growth_pct": 1.7,
        "inflation_pct": 104.7,
        "unemployment_pct": 9.4,
        "trade_pct_gdp": 41.5,
        "internet_users_pct": 38.4,
        "renewable_energy_pct": 82.4
    }
};

const TRADE_ROUTES = [
    {
        "from": "840",
        "to": "156",
        "volume": 94
    },
    {
        "from": "840",
        "to": "276",
        "volume": 23
    },
    {
        "from": "156",
        "to": "276",
        "volume": 23
    },
    {
        "from": "840",
        "to": "392",
        "volume": 20
    },
    {
        "from": "840",
        "to": "356",
        "volume": 20
    },
    {
        "from": "156",
        "to": "392",
        "volume": 20
    },
    {
        "from": "156",
        "to": "356",
        "volume": 20
    },
    {
        "from": "276",
        "to": "392",
        "volume": 20
    },
    {
        "from": "276",
        "to": "356",
        "volume": 20
    },
    {
        "from": "392",
        "to": "356",
        "volume": 20
    },
    {
        "from": "840",
        "to": "826",
        "volume": 18
    },
    {
        "from": "156",
        "to": "826",
        "volume": 18
    },
    {
        "from": "276",
        "to": "826",
        "volume": 18
    },
    {
        "from": "392",
        "to": "826",
        "volume": 18
    },
    {
        "from": "356",
        "to": "826",
        "volume": 18
    },
    {
        "from": "840",
        "to": "250",
        "volume": 16
    },
    {
        "from": "156",
        "to": "250",
        "volume": 16
    },
    {
        "from": "276",
        "to": "250",
        "volume": 16
    },
    {
        "from": "392",
        "to": "250",
        "volume": 16
    },
    {
        "from": "356",
        "to": "250",
        "volume": 16
    },
    {
        "from": "826",
        "to": "250",
        "volume": 16
    },
    {
        "from": "840",
        "to": "380",
        "volume": 12
    },
    {
        "from": "156",
        "to": "380",
        "volume": 12
    },
    {
        "from": "276",
        "to": "380",
        "volume": 12
    },
    {
        "from": "392",
        "to": "380",
        "volume": 12
    },
    {
        "from": "356",
        "to": "380",
        "volume": 12
    },
    {
        "from": "826",
        "to": "380",
        "volume": 12
    },
    {
        "from": "250",
        "to": "380",
        "volume": 12
    },
    {
        "from": "840",
        "to": "124",
        "volume": 11
    },
    {
        "from": "840",
        "to": "076",
        "volume": 11
    }
];

const TICKER_DATA = [
    {
        "label": "EUR/USD",
        "value": "1.16",
        "dir": "neutral"
    },
    {
        "label": "GBP/USD",
        "value": "1.34",
        "dir": "neutral"
    },
    {
        "label": "USD/JPY",
        "value": "158",
        "dir": "neutral"
    },
    {
        "label": "USD/KRW",
        "value": "1,477",
        "dir": "neutral"
    },
    {
        "label": "USD/CNY",
        "value": "6.92",
        "dir": "neutral"
    },
    {
        "label": "USD/INR",
        "value": "92.25",
        "dir": "neutral"
    },
    {
        "label": "USD/BRL",
        "value": "5.23",
        "dir": "neutral"
    },
    {
        "label": "USD/SGD",
        "value": "1.28",
        "dir": "neutral"
    },
    {
        "label": "USD/AED",
        "value": "3.67",
        "dir": "neutral"
    },
    {
        "label": "USD/SAR",
        "value": "3.75",
        "dir": "neutral"
    },
    {
        "label": "USD/VND",
        "value": "26,187",
        "dir": "neutral"
    },
    {
        "label": "USD/AUD",
        "value": "1.42",
        "dir": "neutral"
    }
];
