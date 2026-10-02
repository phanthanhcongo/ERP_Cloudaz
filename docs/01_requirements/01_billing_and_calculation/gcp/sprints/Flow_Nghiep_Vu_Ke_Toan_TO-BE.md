# FLOW NGHIỆP VỤ KẾ TOÁN — GCP (TO-BE)

> **Phạm vi**: Google Cloud Platform (GCP) — không áp cho GWS Flex, GMP
> **Ngày**: 2026-09-25
> **Nguồn**: [BRD_GCP_2026-09-23.md](../BRD_GCP_2026-09-23.md) v2.2 · [confirmGCP24_09.md](../confirmGCP24_09.md) · [CM_Change_Request_Gemini.md](../CM_Change_Request_Gemini.md)

---

## 2 màn hình

### Màn 1 — GCP Billing (xem & sửa số liệu)

Chọn tháng → truy vấn BigQuery → hiển thị Bảng 1 + Bảng 2 → sửa tự do → tạo bảng đối soát.

### Màn 2 — Bảng đối soát (đối chiếu & gửi khách)

Xem bảng đối soát đã tạo → đối chiếu → gửi mail khách → gen DNTT.

---

## Flow tổng quát

```
══════════════════════════════════════════════════
  MÀN 1 — GCP Billing
══════════════════════════════════════════════════

Kế toán mở ERP → chọn GCP Billing → chọn tháng (VD: T08/2026)
   │
   ├── Chưa có dữ liệu → bấm "Truy vấn"
   │      → ERP query BigQuery, insert kết quả vào database
   │      → Hiển thị Bảng 1 (theo Project) + Bảng 2 (theo Billing Account)
   │
   ├── Đã có dữ liệu → hiển thị luôn
   │
   ├── Muốn kéo lại (số Google cập nhật muộn) → bấm "Truy vấn lại"
   │      → ERP so sánh data mới với data cũ (đã sửa tay)
   │      → List ra các dòng thay đổi, yêu cầu kế toán duyệt
   │      → Kế toán chọn dòng nào ghi đè, dòng nào giữ
   │
   ▼
Kế toán xem & chỉnh sửa tự do trên ERP
   - Số liệu các cột đúng chưa
   - Credit Promotion: của khách hay của công ty, khách hưởng bao nhiêu
   - Gemini API: số tiền đúng chưa
   - Gán khách cho tài nguyên mới (nếu có)
   - Muốn sửa gì thì sửa, không ràng buộc
   │
   ▼
OK → bấm "Tạo bảng đối soát"
   → ERP gọi CM API: tạo GWS Data → tạo Bảng đối soát
   → Lưu bảng đối soát về local

══════════════════════════════════════════════════
  MÀN 2 — Bảng đối soát
══════════════════════════════════════════════════

Kế toán mở bảng đối soát, đối chiếu lại
   │
   ├── Chưa OK → quay lại Màn 1 sửa số liệu, tạo lại
   │
   ├── OK → gửi mail cho khách đính kèm bảng đối soát
   │         (chung luồng mail với DNTT sau này)
   │
   ▼
Khách chốt số → bấm "Gen DNTT"
   → ERP gọi CM API: gen DNTT
   → Tiếp flow thu hồi công nợ
```

---

## Nguyên tắc

- **Không khóa kỳ, không khóa bước** — kế toán tự do quay lại bất kỳ bước nào
- **Sửa tự do** — kế toán muốn chỉnh gì trên data thì chỉnh, không ràng buộc
- **Kéo lại data** — so sánh và duyệt thay đổi, không ghi đè mất chỉnh sửa tay

---

## Thay đổi so với hiện tại

| Hiện tại | Sắp tới |
|:---|:---|
| Vào Console xuất tay từng khách | ERP kéo BigQuery một lần, lưu DB |
| Mở Console dò Gemini, dò Credit | Hiển thị sẵn trong bảng ERP |
| Xuất Excel, sửa tay, up CM | ERP gọi CM API tự động |
| Tải bảng đối soát từ CM về sửa | ERP lưu local, kế toán xem ngay |
| Gửi mail tay qua email client | Gửi mail ngay trong ERP |
| Sửa tay số tiền trên DNTT | CM gen đúng, không sửa |
