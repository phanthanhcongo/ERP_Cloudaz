# Quy Trình Tính Toán Bill Chi Phí — GMP (Google Marketing Platform)

## 1. Nguồn dữ liệu đầu vào

| Thành phần | Mô tả |
|-----------|-------|
| Portal | [Google Marketing Platform](https://marketingplatform.google.com/) → Administration → Organizations → Billing Accounts |
| Hóa đơn gốc | Do hãng **ONI** xuất (căn cứ giá vốn) |
| Quyền truy cập | Billing admin trên GMP Organization |

## 2. Đặc thù nghiệp vụ

- **Không có Credit Promotion**
- **Không có Gemini API** (không cần tách dòng)
- **Một billing link chứa nhiều khách hàng/project** (lên tới 23 project chung link)
- Kế toán vào link chung → tích chọn project → lọc dữ liệu thô cho từng khách

## 3. Dữ liệu đầu vào

| Chỉ số | Mô tả |
|--------|-------|
| Usage (USD) | Lượng dùng thực tế từng khách (đã lọc từ link chung) |
| Discount (%) | Chiết khấu theo hợp đồng từng khách |
| PDV rate | Phí dịch vụ charge |
| Exchange Rate | Tỷ giá cuối tháng |

## 4. Công thức tính toán

### Bước 1: Thu sau discount
```
Thu sau discount = Usage_USD × (1 - Discount%)
```

### Bước 2: Phí dịch vụ (PDV)
```
PDV = Usage_USD × PDV_rate
```

### Bước 3: Tổng thu khách (USD)
```
Thu khach (USD) = Thu sau discount + PDV
```

### Bước 4: Quy đổi VND
```
Thu khach (VND) = Thu khach (USD) × Exchange_rate
```
*Làm tròn đến hàng đơn vị.*

### Bước 5: Thuế GTGT đầu ra
```
VAT 10% = Thu khach (VND) × 10%
```

### Bước 6: Tổng tiền thanh toán
```
Total (VND) = Thu khach (VND) + VAT 10%
```

## 5. Công thức tóm gọn

```
Total = (Usage × (1 - Discount%) + Usage × PDV_rate) × ER × 1.1
```

## 6. Output

- Bảng tính Excel từng khách (đã lọc từ link chung)
- Bảng đối soát chi phí
- Dữ liệu xuất hóa đơn

## 7. Ghi chú

1. **ONI**: Hóa đơn gốc do ONI xuất cho công ty làm căn cứ giá vốn
2. **Lọc project**: Kế toán phải vào link chung → tích chọn từng project → lọc dữ liệu riêng
3. **Tỷ giá**: Dùng tỷ giá bán chuyển khoản ngân hàng ngày cuối tháng
4. **Làm tròn**: Thu khách VND làm tròn đến hàng đơn vị

## 8. Cách code xử lý file import

### 8.1. Kiến trúc

Giống GWS — dùng chung endpoint `POST /api/gws-data` (`gwsData.service.js`). File lưu S3, record `gwsData` + `documents`. Khi generate cost table, dispatch tới `calculateGmp.js`.

### 8.2. Cấu trúc Excel đầu vào

File Excel có **2 sheets** (khác GWS chỉ 1 sheet):

| Sheet | Tên gọi trong code | Nội dung | Key matching |
|-------|-------------------|----------|-------------|
| Sheet 0 | `excelPnData` | Dữ liệu theo Project | `Project number` → `contract.gmp_private[].gmp_project_number` |
| Sheet 1 | `excelBiData` | Dữ liệu theo Billing Account | `Subaccount ID` → `contract.gmp_private[].billing_id` |

**Cột trong Sheet 0 (Project Number):**
| Cột | Kiểu | Mô tả |
|-----|------|-------|
| Project | string | Tên project |
| Project number | number | **Key matching** |
| List cost | number | Chi phí gốc |
| Negotiated savings | number | Tiết kiệm (âm) |
| Discounts | number | Chiết khấu (âm) |
| Promotions & others | number | Credit/Promotion (âm) |
| Subtotal | number | **Giá trị dùng tính toán** |
| Change | number (GMP only) | % thay đổi |

**Cột trong Sheet 1 (Billing ID):**
| Cột | Kiểu | Mô tả |
|-----|------|-------|
| Subaccount | string | Tên billing account |
| Subaccount ID | string | **Key matching** |
| List cost | number | Chi phí gốc |
| Subtotal | number | **Giá trị dùng tính toán** |

### 8.3. Parse Excel

File: `app\calculations\calculateGmp.js`

```javascript
// Đọc file từ S3
const workbook = xlsx.read(documentContent);

// Parse 2 sheets — KHÔNG skip dòng header (dòng 1 là column names)
const excelPnData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
const excelBiData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);

// Validate
if (!validateExcelData(excelPnData, excelBiData)) {
  throw customException(..., GWS_DATA_FOR_GMP_ERROR);
}
```

**Khác GWS:**
- Không skip 9 dòng header invoice (GMP Excel không có header invoice block)
- Không pop() dòng cuối (GWS Flex xóa dòng GST/VAT)
- Parse 2 sheets thay vì 1

### 8.4. Validate Excel

```javascript
function validateExcelData(excelPnData, excelBiData) {
  // Sheet 1: phải có cột "Subaccount ID" + "Subtotal"
  //   Subaccount ID phải là string, Subtotal phải là number
  // Sheet 0: phải có cột "Project number" + "Subtotal"
  //   Project number phải là number, Subtotal phải là number
  // Cả 2 sheet không được empty
}
```

### 8.5. Logic matching

Code lấy danh sách `billing_id` và `gmp_project_number` từ `contract.gmp_private[]`, mỗi field có thể chứa nhiều giá trị phân cách bằng dấu phẩy:

```javascript
// Tách chuỗi thành array
const billingIdGmps = gmpPrivate.billing_id.split(",").map(el => el.trim());
const projectNumberGmps = gmpPrivate.gmp_project_number.split(",").map(el => el.trim());

// Gộp từ nhiều contract trong cùng legal entity
const billingIdsUniq = [...new Set(billingIds)];
const projectNumbersUniq = [...new Set(projectNumbers)];

// Lọc Excel — chỉ lấy dòng khớp
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

// Tổng hợp
const subTotal = subtotalPn + subtotalBi;
```

### 8.6. Công thức tính giá trong code

```javascript
amount_modified = subTotal                                   // Từ Excel

discount        = contract.latestContract.discount / 100      // % từ hợp đồng
vat             = contract.latestContract.vat / 100           // % từ hợp đồng
fct             = contract.latestContract.fct / 100           // % từ hợp đồng

// Nếu vat_gross = true: vat = (1 / (1 - vat)) * vat
// Nếu fct_gross = true: fct = (1 / (1 - fct)) * fct

discount_amount = amount_modified * discount
vat_amount      = amount_modified * vat
fct_amount      = (amount_modified + vat_amount) * fct

priceCalculated = amount_modified + vat_amount + fct_amount - discount_amount

// Nếu có tỷ giá:
priceVND   = round(priceCalculated * exchangeRateUSD)
price_text = numberToWord(priceVND)                          // Đọc số bằng chữ
```

### 8.7. Contract field mapping

| Field trong contract | Kiểu | Ý nghĩa |
|---------------------|------|---------|
| `gmp_private[].billing_id` | string | Danh sách Billing ID (phân cách phẩy) |
| `gmp_private[].gmp_project_number` | string | Danh sách Project number (phân cách phẩy) |
| `discount` | number | Chiết khấu % |
| `vat` | number | VAT % |
| `vat_gross` | boolean | VAT tính trên gross (nếu true) |
| `fct` | number | Phí dịch vụ % |
| `fct_gross` | boolean | FCT tính trên gross (nếu true) |
| `rate` | number | Tỷ giá riêng (nếu có, override tỷ giá chung) |

### 8.8. So sánh GMP vs GWS Flex

| Tiêu chí | GMP | GWS Flex |
|----------|-----|----------|
| File xử lý | `calculateGmp.js` | `calculateGwsFlex.js` |
| Số sheet Excel | 2 (Project Number + Billing ID) | 1 (CSV flat) |
| Skip header | Không skip | Skip 9 dòng |
| Pop dòng cuối | Không | Có (xóa GST 0%) |
| Key matching | `gmp_project_number` + `billing_id` | `gws_domain` |
| Nguồn key | `contract.gmp_private[]` | `contract.gcp_private[].gws_domain` |
| Công thức | `subTotal + vat + fct - discount` | `SKU_PRICING * proration * qty + fct - discount` |
| Template fill | `common.sendData()` | `common.sendData()` |
| Exchange rate | `contractMain.rate` || `exchangeRate` | `exchangeRate?.value` |

### 8.9. Sơ đồ luồng

```
Kế toán tải Excel từ GMP Console (2 sheets)
         │
         ▼
Upload lên CM qua POST /api/gws-data
  → gwsData.service.js: S3 + gwsData record
         │
         ▼
Generate cost table → costTable.service.js
  → dispatch calculateGmp
         │
         ▼
calculateGmp.js:
  1. Load file Excel từ S3
  2. Parse 2 sheets (Project Number + Billing ID)
  3. Validate cột + kiểu dữ liệu
  4. Lấy contracts theo productId + legalEntityId
  5. Group contracts theo legal entity
  6. Với mỗi group:
     a. Lấy billing_ids + project_numbers từ gmp_private
     b. Filter Excel rows khớp key
     c. Tính subTotal = sumPn + sumBi
     d. Áp dụng discount / vat / fct từ hợp đồng
     e. Tính priceCalculated = amount + vat_amount + fct_amount - discount_amount
     f. Quy đổi VND nếu có tỷ giá
  7. Fill template XLSX → upload S3 → lưu costTable record
         │
         ▼
Kế toán xuất hóa đơn từ CM
```
