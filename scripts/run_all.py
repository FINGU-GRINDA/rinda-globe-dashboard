#!/usr/bin/env python3
"""
run_all.py - 전체 데이터 파이프라인 실행
1) World Bank API → 거시경제 데이터
2) 시장 데이터 → 주가/환율/원자재
3) data.js 자동 생성
"""
import subprocess, sys, os, time

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

def run_script(name, path):
    print(f"\n{'='*60}")
    print(f"▶ Running: {name}")
    print(f"{'='*60}")
    result = subprocess.run(
        [sys.executable, path],
        cwd=SCRIPT_DIR,
        capture_output=False
    )
    if result.returncode != 0:
        print(f"⚠️  {name} exited with code {result.returncode}")
    return result.returncode

def main():
    start = time.time()
    print("🌍 GLOBAL INDUSTRY INTELLIGENCE - Data Pipeline")
    print(f"   Started at: {time.strftime('%Y-%m-%d %H:%M:%S')}")

    # Step 1: World Bank data
    run_script("World Bank Data Fetcher", os.path.join(SCRIPT_DIR, "fetch_worldbank.py"))

    # Step 2: Market data
    run_script("Market Data Fetcher", os.path.join(SCRIPT_DIR, "fetch_market.py"))

    # Step 3: Generate data.js
    run_script("Data Generator (data.js)", os.path.join(SCRIPT_DIR, "generate_data.py"))

    elapsed = time.time() - start
    print(f"\n{'='*60}")
    print(f"✅ Pipeline complete in {elapsed:.1f} seconds")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
