// ARSE STORE cloud backup (Google Apps Script)
// 1) Set KEY below to the same secret key shown in the app.
// 2) Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone.
var KEY = '__KEY__';
var FOLDER_ID = ''; // folder for the backups; if empty or not found, a folder named "ARSE STORE Backups" is used
var KEEP = 30; // how many daily backup files to keep

function folder_() {
  if (FOLDER_ID) { try { return DriveApp.getFolderById(FOLDER_ID); } catch (e) {} }
  var it = DriveApp.getFoldersByName('ARSE STORE Backups');
  return it.hasNext() ? it.next() : DriveApp.createFolder('ARSE STORE Backups');
}
function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function put_(folder, name, text) {
  var it = folder.getFilesByName(name);
  if (it.hasNext()) it.next().setContent(text);
  else folder.createFile(name, text, 'application/json');
}
function prune_(folder) {
  var files = [], it = folder.getFiles();
  while (it.hasNext()) {
    var f = it.next();
    if (/^arse-backup-\d{4}-\d{2}-\d{2}\.json$/.test(f.getName())) files.push(f);
  }
  files.sort(function (a, b) { return a.getName() < b.getName() ? 1 : -1; });
  for (var i = KEEP; i < files.length; i++) files[i].setTrashed(true);
}
function doPost(e) {
  try {
    var b = JSON.parse(e.postData.contents);
    if (b.key !== KEY) return out_({ ok: false, error: 'wrong key' });
    if (b.action === 'ping') return out_({ ok: true });
    if (b.action === 'backup') {
      if (!b.data) return out_({ ok: false, error: 'no data' });
      var f = folder_();
      var day = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
      var name = 'arse-backup-' + day + '.json';
      put_(f, name, b.data);
      put_(f, 'arse-backup-latest.json', b.data);
      prune_(f);
      return out_({ ok: true, file: name, ts: new Date().getTime() });
    }
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
  return out_({ ok: false, error: 'unknown action' });
}
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.key !== KEY) return out_({ ok: false, error: 'wrong key' });
  if (p.action === 'ping') return out_({ ok: true });
  if (p.action === 'latest') {
    var it = folder_().getFilesByName('arse-backup-latest.json');
    if (!it.hasNext()) return out_({ ok: false, error: 'no backup yet' });
    var f = it.next();
    return out_({ ok: true, ts: f.getLastUpdated().getTime(), data: f.getBlob().getDataAsString() });
  }
  return out_({ ok: false, error: 'unknown action' });
}
