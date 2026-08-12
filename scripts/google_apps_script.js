// =====================================================
// 📋 Google Apps Script - 글로벌 분석 리드마그넷 시트 연동
// =====================================================
//
// 🔧 설정 방법:
// 1. Google Sheets → 확장 프로그램 → Apps Script 클릭
// 2. 기존 코드를 모두 지우고, 아래 코드를 붙여넣기
// 3. 💾 저장 (Ctrl+S)
// 4. 배포 → 새 배포 → 유형: "웹 앱" 선택
//    - 실행 계정: "나"
//    - 액세스: "모든 사용자"
// 5. 배포 → URL 복사 → app.js의 SHEET_WEBHOOK_URL에 붙여넣기
// =====================================================

var MAX_FIELD_LENGTH = 500;

function truncate(val) {
  if (!val) return '';
  return String(val).substring(0, MAX_FIELD_LENGTH);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // --- Security Checks ---
    // 1. Honeypot: bots tend to fill all fields
    if (data._hp !== undefined && data._hp !== '') {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'rejected' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Timestamp validation: reject stale requests (>5 min)
    if (data._ts) {
      var age = Date.now() - Number(data._ts);
      if (age < 0 || age > 300000) {
        return ContentService
          .createTextOutput(JSON.stringify({ status: 'rejected', reason: 'stale' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // 3. Required field check
    if (!data.companyName || !String(data.companyName).trim()) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'rejected', reason: 'missing_company' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // --- Append to Sheet ---
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      truncate(data.timestamp),
      truncate(data.companyName),
      truncate(data.companyUrl),
      truncate(data.industry),
      truncate(data.revenue),
      truncate(data.employees),
      truncate(data.experience),
      truncate(data.priorities),
      truncate(data.regions),
      truncate(data.companyDesc),
      truncate(data.products_services),
      truncate(data.business_model),
      truncate(data.key_strengths),
      truncate(data.recent_news),
      truncate(data.target_markets),
      truncate(data.tech_stack),
      truncate(data.export_experience)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Sheet webhook is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
