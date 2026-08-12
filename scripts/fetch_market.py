"""
무료 시장 데이터 수집 - Yahoo Finance 비공식 API 활용
주요 글로벌 인덱스, 환율, 원자재 가격 (인증 불필요)
"""
import requests, json, os, time
from datetime import datetime

OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "raw_data")
os.makedirs(OUT_DIR, exist_ok=True)

# Yahoo Finance quote API (비공식, 무료)
YF_BASE = "https://query1.finance.yahoo.com/v7/finance/quote"

MARKET_SYMBOLS = {
    # Major Indices
    "^GSPC": {"name": "S&P 500", "type": "index"},
    "^IXIC": {"name": "NASDAQ", "type": "index"},
    "^DJI": {"name": "Dow Jones", "type": "index"},
    "^KS11": {"name": "KOSPI", "type": "index"},
    "^N225": {"name": "Nikkei 225", "type": "index"},
    "^GDAXI": {"name": "DAX", "type": "index"},
    "^FTSE": {"name": "FTSE 100", "type": "index"},
    "^FCHI": {"name": "CAC 40", "type": "index"},
    "000001.SS": {"name": "Shanghai Composite", "type": "index"},
    "^BSESN": {"name": "BSE Sensex", "type": "index"},
    "^BVSP": {"name": "Bovespa", "type": "index"},
    "^STI": {"name": "Straits Times", "type": "index"},
    "^AXJO": {"name": "ASX 200", "type": "index"},
    "^TASI": {"name": "Tadawul", "type": "index"},
    # Currencies (vs USD)
    "EURUSD=X": {"name": "EUR/USD", "type": "currency"},
    "GBPUSD=X": {"name": "GBP/USD", "type": "currency"},
    "JPY=X": {"name": "USD/JPY", "type": "currency"},
    "KRW=X": {"name": "USD/KRW", "type": "currency"},
    "CNY=X": {"name": "USD/CNY", "type": "currency"},
    "INR=X": {"name": "USD/INR", "type": "currency"},
    "BRL=X": {"name": "USD/BRL", "type": "currency"},
    "SGD=X": {"name": "USD/SGD", "type": "currency"},
    # Commodities
    "CL=F": {"name": "Crude Oil WTI", "type": "commodity"},
    "GC=F": {"name": "Gold", "type": "commodity"},
    "SI=F": {"name": "Silver", "type": "commodity"},
    "BTC-USD": {"name": "Bitcoin", "type": "crypto"},
    "ETH-USD": {"name": "Ethereum", "type": "crypto"},
}

def fetch_yahoo_quotes(symbols):
    """Yahoo Finance에서 실시간 시세 가져오기"""
    results = {}
    # 한 번에 최대 10개씩 요청
    symbol_list = list(symbols.keys())
    for i in range(0, len(symbol_list), 10):
        batch = symbol_list[i:i+10]
        sym_str = ",".join(batch)
        headers = {"User-Agent": "Mozilla/5.0"}
        url = f"{YF_BASE}?symbols={sym_str}"
        try:
            r = requests.get(url, headers=headers, timeout=15)
            if r.status_code == 200:
                data = r.json()
                for quote in data.get("quoteResponse", {}).get("result", []):
                    sym = quote.get("symbol", "")
                    if sym in symbols:
                        info = symbols[sym].copy()
                        info["price"] = quote.get("regularMarketPrice", 0)
                        info["change_pct"] = round(quote.get("regularMarketChangePercent", 0), 2)
                        info["prev_close"] = quote.get("regularMarketPreviousClose", 0)
                        info["market_cap"] = quote.get("marketCap", 0)
                        info["currency"] = quote.get("currency", "USD")
                        results[sym] = info
            else:
                print(f"  Yahoo Finance HTTP {r.status_code} for batch starting {batch[0]}")
        except Exception as e:
            print(f"  Error: {e}")
        time.sleep(1)
    return results

def fetch_fallback_indices():
    """Yahoo Finance가 안 될 경우 대체 데이터 소스 사용"""
    # ExchangeRate API (무료, 인증 불필요) - 환율만
    results = {}
    try:
        r = requests.get("https://open.er-api.com/v6/latest/USD", timeout=10)
        if r.status_code == 200:
            rates = r.json().get("rates", {})
            currency_map = {
                "EUR": "EUR/USD", "GBP": "GBP/USD", "JPY": "USD/JPY",
                "KRW": "USD/KRW", "CNY": "USD/CNY", "INR": "USD/INR",
                "BRL": "USD/BRL", "SGD": "USD/SGD", "AED": "USD/AED",
                "SAR": "USD/SAR", "VND": "USD/VND", "AUD": "USD/AUD",
            }
            for code, name in currency_map.items():
                if code in rates:
                    if code in ["EUR", "GBP"]:
                        price = round(1 / rates[code], 4)
                    else:
                        price = round(rates[code], 2)
                    results[name] = {"name": name, "type": "currency", "price": price, "change_pct": 0}
            print(f"  → Fallback: {len(results)} exchange rates loaded")
    except Exception as e:
        print(f"  Fallback error: {e}")
    return results

def main():
    print("=" * 60)
    print("Market Data Fetcher - 글로벌 시장 실시간 데이터")
    print("=" * 60)

    print(f"\n[1/2] Fetching {len(MARKET_SYMBOLS)} market quotes from Yahoo Finance...")
    market_data = fetch_yahoo_quotes(MARKET_SYMBOLS)
    print(f"  → {len(market_data)} quotes loaded")

    # Yahoo Finance 실패 시 환율이라도 가져오기
    if len(market_data) < 5:
        print("\n[1b] Yahoo Finance limited, using fallback for exchange rates...")
        fallback = fetch_fallback_indices()
        market_data.update(fallback)

    # 2) 환율 전용 API (항상 가져오기 - 더 정확)
    print("\n[2/2] Fetching exchange rates from open.er-api.com...")
    try:
        r = requests.get("https://open.er-api.com/v6/latest/USD", timeout=10)
        if r.status_code == 200:
            rates = r.json().get("rates", {})
            with open(os.path.join(OUT_DIR, "exchange_rates.json"), "w") as f:
                json.dump({"base": "USD", "rates": rates, "date": datetime.now().isoformat()}, f, indent=2)
            print(f"  → {len(rates)} exchange rates saved")
    except Exception as e:
        print(f"  Exchange rate error: {e}")

    # 저장
    output = {
        "updated": datetime.now().isoformat(),
        "quotes": market_data,
    }
    with open(os.path.join(OUT_DIR, "market_data.json"), "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Done! {len(market_data)} market quotes saved")

if __name__ == "__main__":
    main()
