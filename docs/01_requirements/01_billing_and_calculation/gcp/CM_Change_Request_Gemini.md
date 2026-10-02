# YÊU CẦU CHỈNH SỬA CM — Tách Gemini API khỏi Discount GCP

> **Từ**: ERP Team  
> **Gửi**: CM Backend Team  
> **Ngày**: 2026-09-25  
> **Mức độ**: Quan trọng — ảnh hưởng tính đúng cước ~40-50% khách hàng GCP  
> **File test kèm theo**: `DATA GCP NHẬP CMP T06.2026 - TEST GEMINI.xlsx`  
> **File mẫu Bảng đối soát đã sửa tay**: `Google Cloud Platform Resell...GCP resell-2167553481071616.xlsx`

---

## 1. Vấn đề

**Gemini API** là dịch vụ thuộc Google Marketplace — **không được hưởng chiết khấu** (discount) theo hợp đồng reseller.

Hiện tại CM tính discount trên **toàn bộ tổng cước**, bao gồm cả Gemini → **tính sai**. Kế toán phải tải file về **sửa tay** mỗi tháng (~40-50% khách có phát sinh Gemini).

**Ví dụ cụ thể (khách Coderpush, T08-2026, discount 6%):**

| | CM tính hiện tại (SAI) | Đúng phải là |
|:---|---:|---:|
| Tổng cước GCP | $1,769.91 | $1,769.91 |
| Trong đó Gemini API | *(không tách)* | $496.02 |
| Phần được discount | $1,769.91 | $1,273.89 (= 1,769.91 − 496.02) |
| **Discount (6%)** | **$106.19** | **$76.43** |
| Chênh lệch | | **$29.76/tháng chỉ riêng khách này** |

→ ERP sẽ gen file Excel mới có thêm cột `Gemini API` trong Sheet 2. CM cần đọc cột này và áp đúng công thức.

---

## 2. Cần sửa gì — Tóm tắt

| # | Việc cần làm | Ảnh hưởng |
|:---|:---|:---|
| 1 | Đọc cột `Gemini API` mới từ Sheet 2 Excel (cột optional, nằm sau `Subtotal`) | 2 file `calculateGcp.js` |
| 2 | Sửa công thức discount: `(tổng − gemini) × discount%` thay vì `tổng × discount%` | 2 file `calculateGcp.js` |
| 3 | Bảng đối soát: thêm dòng "Gemini API" trong phần chi tiết billing | Template Bảng đối soát |
| 4 | DNTT: **không sửa template** — chỉ tổng tiền phải đúng (đã xử lý bởi #2) | — |

**Không thay đổi**: API endpoints, upload flow, authentication, MongoDB schema, DNTT template, hàm validate.

**Backward compatible**: File Excel cũ (không có cột Gemini) → gemini = 0 → discount áp toàn bộ như cũ.

---

## 3. Giải thích cột `Gemini API` trong file Excel

Cột `Gemini API` nằm ở **Sheet 2** (`TH2. Billing ID`), ngay sau cột `Subtotal`:

```
| Subaccount | Subaccount ID        | ... | Subtotal  | Gemini API |
|------------|----------------------|-----|-----------|------------|
| CODERPUSH  | 014793-4347C1-568E28 | ... | 3,301.00  | 496.02     |
| Gapo       | 012D2B-0EA070-8F5C39 | ... | 30,979.56 | 830.75     |
| Yody       | 0140A6-7BDA67-C2DA97 | ... | 4,521.01  |            |  ← không có Gemini
```

**Ý nghĩa**:
- `Subtotal` = tổng cước **tất cả dịch vụ** của billing đó (bao gồm cả Gemini nếu có)
- `Gemini API` = phần tiền Gemini **nằm trong** Subtotal, cần tách ra để không áp discount
- Phần được discount = `Subtotal − Gemini API`
- Nếu cột trống hoặc không có → gemini = 0 → discount áp toàn bộ Subtotal (giống logic cũ)

---

## 4. Công thức — Trước vs Sau

### 4.1 Bảng đối soát (`app/cost_table_calculations/calculateGcp.js`)

**Hàm `generateDataFilled()` (dòng ~396-449):**

```
HIỆN TẠI:
  discount_amount = subTotal × discount%

SỬA THÀNH:
  gemini          = tổng cột "Gemini API" của các billing match contract (hoặc 0)
  discount_amount = (subTotal − gemini) × discount%
```

Các bước còn lại **giữ nguyên** — `total_after_discount`, `vat`, `fct`, `gtgt` không đổi logic vì chúng dùng `discount_amount` đã tính đúng.

### 4.2 DNTT (`app/calculations/calculateGcp.js`)

**Dòng ~306:**

```
HIỆN TẠI:
  discount_amount = amount_modified × discount

SỬA THÀNH:
  discount_amount = (amount_modified − geminiTotal) × discount
```

`priceCalculated` (dòng ~310) tự động đúng vì nó dùng `discount_amount`.

---

## 5. Đọc cột Gemini — Vị trí code

Cả 2 file đều đọc Sheet 2 Excel tại block `excelBiData.reduce(...)`. Cần thêm đọc `item["Gemini API"]` ở đây:

| File | Dòng | Hiện tại | Cần thêm |
|:---|:---|:---|:---|
| `cost_table_calculations/calculateGcp.js` | ~295-306 | Đọc `Subtotal`, push vào `data.projects` | Đọc thêm `Gemini API`, cộng dồn vào `data.geminiTotal`, push dòng riêng "Gemini API" vào `data.projects` |
| `calculations/calculateGcp.js` | ~281-286 | Đọc `Subtotal` | Đọc thêm `Gemini API`, cộng dồn vào biến `geminiTotal` |

**Backward compatible**: `item["Gemini API"]` trả về `undefined` nếu cột không tồn tại → fallback `|| 0` → không ảnh hưởng file cũ.

---

## 6. Template Bảng đối soát

**Thay đổi**:
- Thêm dòng `"Gemini API"` trong phần chi tiết billing (dòng data, không phải cột mới)
- Dòng này nằm trong danh sách `projects` (đã push ở bước 5), hiển thị: STT, tên = "Gemini API", tháng, billing USD, tỷ giá, thành tiền
- Giữ nguyên 6 cột, giữ nguyên variant `isDiscount` / `isNoDiscount`
- File mẫu Bảng đối soát đã sửa tay đúng gửi kèm để tham khảo layout

---

## 7. Test Cases

### TC-01: Billing CÓ Gemini — Bảng đối soát

| Bước | Giá trị | Ghi chú |
|:---|---:|:---|
| Subtotal (từ Excel) | $3,301.00 | Tổng cước billing CODERPUSH, bao gồm Gemini |
| Gemini API (từ Excel) | $496.02 | Phần Gemini trong Subtotal |
| Phần được discount | $2,804.98 | = $3,301.00 − $496.02 |
| Discount (6%) | **$168.30** | = $2,804.98 × 6% |
| ~~CM cũ tính sai~~ | ~~$198.06~~ | ~~= $3,301.00 × 6%~~ |

### TC-02: Billing KHÔNG có Gemini (backward compatible)

| Bước | Giá trị | Ghi chú |
|:---|---:|:---|
| Subtotal | $3,301.00 | |
| Gemini API | $0.00 | Cột trống → fallback 0 |
| Phần được discount | $3,301.00 | = $3,301.00 − $0 |
| Discount (6%) | **$198.06** | Giống logic cũ ✅ |

### TC-03: Nhiều billing, chỉ một số có Gemini

| Billing | Subtotal | Gemini API |
|:---|---:|---:|
| A | $500 | $100 |
| B | $300 | *(trống)* |
| C | $200 | $50 |
| **Tổng** | **$1,000** | **$150** |

→ Discount (8%) = ($1,000 − $150) × 8% = $850 × 8% = **$68.00**  
→ ~~CM cũ~~: $1,000 × 8% = ~~$80.00~~

### TC-04: File Excel cũ (không có cột Gemini API)

Upload file Excel cũ (chỉ có Subtotal, không có cột Gemini API) → kết quả phải **giống hệt** output hiện tại, không bị lỗi.

---

## 8. File test kèm theo

| File | Mô tả |
|:---|:---|
| `DATA GCP NHẬP CMP T06.2026 - TEST GEMINI.xlsx` | File Excel T06-2026 đã thêm cột `Gemini API` ở Sheet 2. 14/96 billing có Gemini, 82 billing trống — dùng để test cả 2 trường hợp |
| `DATA GCP NHẬP CMP T06.2026.xlsx` | File Excel gốc (không có cột Gemini) — dùng test backward compatible (TC-04) |
| File mẫu Bảng đối soát Coderpush | Bảng đối soát đã sửa tay đúng — tham khảo layout output mong muốn |

---

## 9. Vị trí code tham chiếu

| File | Dòng | Nội dung |
|:---|:---|:---|
| `app/cost_table_calculations/calculateGcp.js` | ~295-306 | Block reduce `excelBiData` — thêm đọc Gemini |
| `app/cost_table_calculations/calculateGcp.js` | ~396-449 | `generateDataFilled()` — sửa `discount_amount` |
| `app/cost_table_calculations/calculateGcp.js` | ~330-332 | Chọn template variant |
| `app/calculations/calculateGcp.js` | ~281-286 | Block reduce `excelBiData` — thêm đọc Gemini |
| `app/calculations/calculateGcp.js` | ~306 | `discount_amount` — sửa công thức |
| `app/calculations/calculateGcp.js` | ~310 | `priceCalculated` — tự đúng sau khi sửa discount |
