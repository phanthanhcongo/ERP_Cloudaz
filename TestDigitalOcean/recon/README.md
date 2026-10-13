# recon/ — Sinh Bảng đối soát DigitalOcean

```
billing theo team ──► build.js (gom theo khách, pricing, VND, VAT, cảnh báo)
   (excelSource.js       │
    hoặc DB/API sau này) ├─► render.js  → Markdown / HTML (5 mẫu)
                         └─► export.js  → XLSX (Tổng hợp + 1 sheet / khách)
```

| File | Vai trò |
|---|---|
| `pricing.js` | Hàm thuần: `priceLine` (CHAIN / PARALLEL), `totalsVnd`, `applyPrepaid` |
| `excelSource.js` | Đọc sheet tháng của file Bill (bản `.md`) → billing, điều khoản, profile, số Excel để đối chiếu |
| `build.js` | Gom team theo khách (cùng tên HĐ hoặc cùng số HĐ VAT), tính, cảnh báo, so với Excel |
| `render.js` | 5 mẫu: `VERTICAL_CHAIN`, `VERTICAL_PARALLEL`, `HORIZONTAL_ROWS`, `HORIZONTAL_COLS`, `SERVICE_BREAKDOWN` |
| `export.js` | XLSX bằng `exceljs` |
| `cli.js` | Dòng lệnh |
| `recon.test.js` | Golden test kỳ 07.2026 |

## Chạy

```bash
npm test                                             # 13 test, gồm so toàn bộ kỳ 07.2026 với file Bill
npm run recon -- --period 2026-07                    # tóm tắt + cột lệch Excel
npm run recon -- --period 2026-07 --org ADFLEX --out md
npm run recon -- --period 2026-07 --out xlsx         # → out/recon_2026-07.xlsx
npm run recon -- --period 2026-07 --out html
npm run recon -- --period 2026-07 --fx TCB=26500 --prepaid ACTLIFE=11050723
```

API (trong `server.js`): `GET /api/recon/:period` (JSON), `/api/recon/:period/html`, `/api/recon/:period/xlsx`
— cùng query `org`, `rounding`, `fx`, `prepaid`.

## Quyết định & giả định

- **Cách tính** suy ra từ chính công thức cột U của Excel: dòng 3–24 khớp CHAIN, dòng 25+ khớp PARALLEL
  (đúng như phân tích). Dòng không có số → gán theo vị trí và có cảnh báo.
- **Làm tròn** (`--rounding`):
  - `BILL` (mặc định) — giống file Bill, tức số đã xuất hóa đơn → **47/47 bảng kỳ 07.2026 khớp 0đ**.
  - `RECON` — làm tròn từng bước như block đối soát; 18 bảng lệch 1đ hoặc ~290đ (0,01 USD). Chờ chốt Q7.
- **Mẫu bảng**: mặc định theo cách tính; MOG/INTERSPACE, ONADS, SECOMUS/UPPROMOTE ghi đè trong `LAYOUT_OVERRIDES`.
- **Ngân hàng tỷ giá, email, số ngày confirm, bộ hồ sơ** trích từ cột ghi chú AG–AL.

## Còn thiếu

- Mẫu 5 cần chi tiết nhóm dịch vụ → lấy `invoice_item` từ DB (`db/sync.js`) khi có token team; hiện in dòng nhắc.
- Nguồn billing từ DB/API thay cho file Bill (chỉ cần map `invoice.usage_charges` → `billingUsd`).
- Lưu `recon_sheet` vào DB, workflow trạng thái, tab UI.
