# ARSE STORE

Sales, utang, stock, store-map and records for ARSE STORE (hardware). Works offline as a phone app (PWA).

## What is inside
- **Sell**: tap items, checkout cash or utang, scan barcodes, make a quotation.
- **Utang**: customer credit ledger, reminders, copy statement.
- **Stock**: counts, low-stock warnings, supplier restock list, item supplier and barcode.
- **Map**: 2D layout of the store; tap a shelf to see what is on it.
- **Records**: Insights (is the store doing well?), summary, sales history with receipts, stock log, expenses, daily closing, saved quotes. Import / Export (CSV) is here too.
- **Staff mode** (Settings): staff can sell but cannot see costs, profit, records or settings. The 4-digit PIN is a simple lock, not strong security.

## Files
`index.html`, `manifest.json`, `sw.js`, icons, and `item-template.csv` (fill it in and import it from Records → Import / Export).

## Notes
- All data stays on the phone. Use Settings → Backup regularly.
- Barcode camera scanning needs HTTPS (GitHub Pages is fine) and camera permission. Typing a code or using a Bluetooth/USB scanner in the Sell search box also works.
- After you change any file, bump `VERSION` in `sw.js` so phones pick up the update.
