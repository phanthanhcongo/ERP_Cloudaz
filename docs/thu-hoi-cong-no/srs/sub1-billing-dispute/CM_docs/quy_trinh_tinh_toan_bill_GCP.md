# Quy Trình Tính Toán Bill Chi Phí — GCP (Google Cloud Platform)

## 1. Nguồn dữ liệu đầu vào

| Thành phần | Mô tả |
|-----------|-------|
| Console | [Google Cloud Console](https://console.cloud.google.com/) → Billing → Documents/Invoices |
| Cost Table | Billing → Cost Table → Download CSV (chi tiết theo Project/SKU) |
| BigQuery Export | Cloud Billing Export → BigQuery (tự động, recommended cho reseller) |
| Quyền truy cập | `roles/billing.viewer` hoặc `roles/billing.admin` trên Billing Account |

## 2. Dữ liệu đầu vào chi tiết

| Chỉ số | Mô tả |
|--------|-------|
| Usage_total (USD) | Tổng lượng tiêu dùng thực tế trong tháng (đã bỏ Reseller Margin) |
| Usage_Gemini (USD) | Lượng dùng Gemini API (tách riêng) |
| Discount (%) | Chiết khấu riêng theo hợp đồng từng khách (không áp dụng cho Gemini) |
| Exchange Rate | Tỷ giá bán chuyển khoản ngân hàng (TCB/VPBank...) ngày cuối tháng |
| Credit (USD) | Credit khuyến mãi Google phân bổ |
| VAT GG rate | Thuế nhà thầu (5.263% cũ / 5.88% mới) |
| PDV rate | Phí dịch vụ (5.263% cũ / 5.88% mới, tùy phụ lục hợp đồng) |

## 3. Công thức tính toán

### Bước 1: Tách Gemini API
```
Usage_normal = Usage_total - Usage_Gemini
```
*Nếu Gemini < $0.07 thì gộp chung, không tách.*

### Bước 2: Chiết khấu
```
Discount (USD) = Usage_normal × Discount%
```

### Bước 3: Phải thu sau discount
```
Thu sau discount = Usage_normal - Discount + Usage_Gemini
```

### Bước 4: Thuế VAT nhà thầu (VAT GG)
```
VAT GG = Lượng dùng USD × VAT_rate
```
*Khách đặc biệt (VPBank): VAT GG = Thu sau discount × VAT_rate*

### Bước 5: Phí dịch vụ (PDV)
```
PDV = (Lượng dùng trước discount + VAT GG) × PDV_rate
```

### Bước 6: Thu khách sau Credit (USD)
```
Thu khach (USD) = Thu sau discount + VAT GG + PDV - Credit
```

### Bước 7: Quy đổi VND
```
Thu khach (VND) = Thu khach (USD) × Exchange_rate
```
*Làm tròn đến hàng đơn vị.*

### Bước 8: Thuế GTGT đầu ra
```
VAT 10% = Thu khach (VND) × 10%
```

### Bước 9: Tổng tiền thanh toán
```
Total (VND) = Thu khach (VND) + VAT 10%
```

## 4. Công thức tóm gọn

```
Total = ((Usage_total - Gemini) × (1 - Discount%) + Gemini + VAT_GG + PDV - Credit) × ER × 1.1
```

## 5. Output

- Bảng tính Excel chi tiết từng khách hàng
- Bảng đối soát chi phí (PDF/Excel)
- Dữ liệu đẩy sang module xuất hóa đơn

## 6. Ghi chú

1. **Gemini API < $0.07**: Gộp chung vào Usage_total, không tách riêng
2. **Tỷ giá**: Dùng tỷ giá bán chuyển khoản ngân hàng ngày cuối tháng
3. **Làm tròn**: Thu khách VND làm tròn đến hàng đơn vị
4. **Credit**: Sale/CEO chốt credit của khách hay của công ty trước khi áp dụng
5. **VAT GG / PDV**: Tăng từ 5.263% → 5.88%, tùy phụ lục hợp đồng từng khách
6. **VPBank (đặc biệt)**: VAT nhà thầu tính trên số *sau discount*

## 7. Cách code xử lý file import

### 7.1. Kiến trúc

Giống GMP/GWS — dùng chung endpoint `POST /api/gws-data` (`gwsData.service.js`). File lưu S3, record `gwsData` + `documents`. Khi generate cost table, dispatch tới `calculateGcp.js`.

### 7.2. Cấu trúc Excel đầu vào

File Excel từ Cost Table của GCP có **2 sheets**:

**Sheet 1 — `TH1. Project Number`** (dòng theo từng Project):

| Cột | Kiểu | Ý nghĩa |
|-----|------|---------|
| Project | string | Tên project |
| Project ID | string | ID trên GCP |
| **Project number** | number | **Key matching** — match với `contract.gcp_private[].gcp_project_number` |
| List cost | number | Chi phí gốc trước điều chỉnh |
| Negotiated savings | number | Tiết kiệm thương lượng (âm) |
| Discounts | number | Chiết khấu (âm) |
| Promotions & others | number | Credit / Promotion (âm) |
| **Subtotal** | number | **Giá trị dùng tính toán** = List cost + Negotiated savings + Discounts + Promotions |

Ví dụ thực tế từ T6.2026: `Neo - PROD` — Project number `98475675285`, Subtotal `33442.9`

**Sheet 2 — `TH2. Billing ID`** (dòng theo từng Billing Account):

| Cột | Kiểu | Ý nghĩa |
|-----|------|---------|
| Subaccount | string | Tên billing account |
| **Subaccount ID** | string | **Key matching** — match với `contract.gcp_private[].billing_id` |
| List cost | number | Chi phí gốc |
| Negotiated savings | number | |
| Discounts | number | |
| Promotions & others | number | |
| **Subtotal** | number | **Giá trị dùng tính toán** |

Ví dụ thực tế: `CloudAZ - Funtap 01` — Subaccount ID `01AEDA-88691D-0FBD5D`, Subtotal `89899.39`

### 7.3. Parse Excel

File: `app\calculations\calculateGcp.js` (411 dòng)

```javascript
// Đọc file từ S3
const workbook = xlsx.read(documentContent);

// Parse 2 sheets — KHÔNG skip dòng header
const excelPnData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
const excelBiData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);

// Validate
if (!validateExcelData(excelPnData, excelBiData)) {
  throw customException(..., GWS_DATA_FOR_GCP_ERROR);
}
```

**Khác GWS:**
- Không skip dòng header (GWS skip 9 dòng)
- Không pop() dòng cuối
- Parse 2 sheets thay vì 1

### 7.4. Validate Excel

```javascript
function validateExcelData(excelPnData, excelBiData) {
  // Cả 2 sheet không được empty

  // Sheet 0 (Project Number): phải có cột "Project number" (number) + "Subtotal" (number)
  // Sheet 1 (Billing ID): phải có cột "Subaccount ID" (string) + "Subtotal" (number)

  // validate từng dòng:
  // - Project number: every(isNumber)
  // - Subaccount ID: every(isString)
  // - Subtotal (cả 2 sheet): every(isNumber)
}
```

### 7.5. Logic matching

Code lấy danh sách `billing_id` và `gcp_project_number` từ `contract.gcp_private[]`:

```javascript
// Contract chứa:
// contract.gcp_private = [{
//   billing_id: "01AEDA-88691D-0FBD5D, 01AEDA-88691D-0FBD6D",
//   gcp_project_number: "98475675285, 496160243049"
// }]

// Bước 1: Tách chuỗi phẩy → array, loại duplicate
const billingIdGcps = gcpPrivate.billing_id.split(",").map(el => el.trim());
const projectNumberGcps = gcpPrivate.gcp_project_number.split(",").map(el => el.trim());
const billingIdsUniq = [...new Set(billingIds)];
const projectNumbersUniq = [...new Set(projectNumbers)];

// Bước 2: Lọc Excel — chỉ lấy dòng khớp key
const subtotalPn = excelPnData.reduce((result, item) => {
  if (projectNumbersUniq.includes(item["Project number"].toString())) {
    result += Number(Number(item["Subtotal"]).toFixed(2));
  }
  return result;
}, 0);

const subtotalBi = excelBiData.reduce((result, item) => {
  if (billingIdsUniq.includes(item["Subaccount ID"])) {
    result += Number(Number(item["Subtotal"]).toFixed(2));
  }
  return result;
}, 0);

// Bước 3: Tổng hợp
const subTotal = subtotalPn + subtotalBi;
```

### 7.6. Công thức tính giá trong code

```javascript
amount_modified = subTotal                                    // Từ Excel (Project + Billing)

vat             = latestContract.vat / 100                     // % từ hợp đồng
fct             = latestContract.fct / 100                     // % từ hợp đồng
discount        = latestContract.discount / 100                // % từ hợp đồng

// Nếu vat_gross = true: vat = (1 / (1 - vat)) * vat
// Nếu fct_gross = true: fct = (1 / (1 - fct)) * fct

discount_amount = amount_modified * discount
vat_amount      = amount_modified * vat
fct_amount      = (amount_modified + vat_amount) * fct

priceCalculated = amount_modified + vat_amount + fct_amount - discount_amount
priceCalculated *= 1.1                                         // +10% VAT đầu ra

// Nếu có tỷ giá:
priceVND   = Math.round(priceCalculated * exchangeRateUSD)
price_text = currency.numberToWord(priceVND)
```

> **Lưu ý**: Công thức trong code KHÔNG tách Gemini API, KHÔNG trừ Credit như doc nghiệp vụ mô tả. Credit và Gemini được xử lý thủ công trước khi nhập liệu (kế toán đã điều chỉnh Subtotal trong Excel).

### 7.7. Contract field mapping

| Field trong contract | Kiểu | Ý nghĩa |
|---------------------|------|---------|
| `gcp_private[].billing_id` | string | Danh sách Billing ID (phân cách phẩy) |
| `gcp_private[].gcp_project_number` | string | Danh sách Project number (phân cách phẩy) |
| `discount` | number | Chiết khấu % |
| `vat` | number | VAT nhà thầu % |
| `vat_gross` | boolean | VAT tính trên gross (nếu true) |
| `fct` | number | Phí dịch vụ % |
| `fct_gross` | boolean | FCT tính trên gross (nếu true) |
| `rate` | number | Tỷ giá riêng (nếu có, override tỷ giá chung) |

### 7.8. So sánh GCP vs GMP

| Tiêu chí | GCP | GMP |
|----------|-----|-----|
| File | `calculateGcp.js` | `calculateGmp.js` |
| Field contract | `gcp_private` | `gmp_private` |
| Key match Pn | `gcp_project_number` | `gmp_project_number` |
| Key match Bi | `billing_id` | `billing_id` |
| Cấu trúc Excel | 2 sheets giống hệt | 2 sheets giống hệt |
| Validate | Giống hệt | Giống hệt |
| Công thức | `amount + vat + fct - discount` × 1.1 | `amount + vat + fct - discount` × 1.1 |
| **Code gần như identical** | Chỉ khác field contract + error code | |

### 7.9. Sơ đồ luồng

```
Kế toán tải Cost Table CSV từ GCP Console (2 sheets)
         │
         ▼
Upload lên CM qua POST /api/gws-data
  → gwsData.service.js: S3 + gwsData record
         │
         ▼
Generate cost table → costTable.service.js
  → dispatch calculateGcp
         │
         ▼
calculateGcp.js:
  1. Load file Excel từ S3
  2. Parse 2 sheets (Project Number + Billing ID)
  3. Validate cột + kiểu dữ liệu
  4. Lấy contracts theo productId + legalEntityId
  5. Group contracts theo legal entity
  6. Với mỗi group:
     a. Lấy billing_ids + project_numbers từ gcp_private
     b. Filter Excel rows khớp key (includes)
     c. Tính subTotal = sum(Subtotal Pn) + sum(Subtotal Bi)
     d. Áp dụng discount / vat / fct từ hợp đồng
     e. priceCalculated = (amount + vat_amount + fct_amount - discount_amount) × 1.1
     f. Quy đổi VND nếu có tỷ giá
  7. Fill template XLSX → upload S3 → lưu costTable record
         │
         ▼
Kế toán xuất hóa đơn từ CM
```
