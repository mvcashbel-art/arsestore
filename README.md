# ARSE STORE

Sales, utang, stock, store-map and records for ARSE STORE (hardware). Works offline as a phone app (PWA).

## What is inside
- **Sell**: tap items, checkout cash or utang, scan barcodes, make a quotation.
- **Utang**: customer credit ledger, reminders, copy statement.
- **Stock**: counts, low-stock warnings, supplier restock list, item supplier and barcode. Items with no barcode can get their own (Make a barcode) and you can print shelf/bin labels (Stock → Barcode labels).
- **Map**: 2D layout of the store (tap a shelf to see what is on it), or the **3D scan** view: load a GLB scan of the store (Polycam / Scaniverse on iPhone), pin items on it, and search an item to fly to its pin.
- **Stock → Receive delivery**: add what a supplier delivered (updates stock and cost, keeps a delivery record).
- **Records**: Insights (is the store doing well?), monthly report (copy / share / print as PDF), summary, sales history with receipts, stock log, expenses, daily closing, saved quotes. Import / Export (CSV) is here too.
- **Staff mode** (Settings): staff can sell but cannot see costs, profit, records or settings. The 4-digit PIN is a simple lock, not strong security.

## Files
`index.html`, `manifest.json`, `sw.js`, icons, `vendor/model-viewer.min.js` (3D viewer, Apache-2.0, Google), `item-template.csv` (fill it in and import it from Records → Import / Export), and `cloud-backup/` (Google Drive backup script and setup steps).

## Notes
- All data stays on the phone. Use Settings → Backup regularly, or set up Settings → Cloud backup (Google Drive) for automatic copies (see `cloud-backup/SETUP.md`).
- The 3D scan file is stored on the phone only (not in backups); pins are in backups. Keep the scan under about 30 MB. Draco-compressed GLB files need internet to load.
- Barcode camera scanning needs HTTPS (GitHub Pages is fine) and camera permission. Typing a code or using a Bluetooth/USB scanner in the Sell search box also works.
- After you change any file, bump `VERSION` in `sw.js` so phones pick up the update.
