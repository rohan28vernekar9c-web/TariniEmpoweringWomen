function doPost(e) {
  var body = JSON.parse(e.postData.contents);
  var apiKey = 'AIzaSyCi6v2joQGoXY12wzKk8B-klsmqlbHQ-Ug';

  var response = UrlFetchApp.fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + apiKey,
    {
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify(body),
      muteHttpExceptions: true
    }
  );

  return ContentService
    .createTextOutput(response.getContentText())
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
