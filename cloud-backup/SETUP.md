# Cloud backup to Google Drive (one-time setup)

The app keeps your data on the phone. This script lets the app also save a copy in your Google Drive, so you can recover if the phone is lost or reset. It keeps the newest 30 daily backups plus `arse-backup-latest.json`.

The easiest way: in the app go to **Settings → Cloud backup (Google Drive)** and follow the steps there. The app copies the script for you with your key already filled in.

## By hand
1. Open https://script.google.com and tap **New project**. Delete the sample code and paste `Code.gs`.
2. Change `KEY` to a long secret of your own (the same one you type in the app). Optional: put your backup folder's ID in `FOLDER_ID` (the long text at the end of the folder link). If you leave it empty, a folder named "ARSE STORE Backups" is made in My Drive.
3. **Deploy → New deployment → Web app**. Execute as: **Me**. Who has access: **Anyone**. Deploy and allow access.
4. Copy the **Web app link** and paste it in the app with your key. Tap **Save and test**.

## Keep it private
Anyone who has both the link and the key can read your backups. Do not post them. To change the key, edit `KEY` in the script, **Deploy → Manage deployments → Edit → New version**, and update the key in the app.
