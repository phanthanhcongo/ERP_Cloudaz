# Cấu Trúc Dữ Liệu Import GCP & GMP

## 1. File Excel đầu vào

Hai file mẫu trong `docs/taiLieuExcel/`:
- `DATA GCP NHẬP CMP T06.2026.xlsx`
- `DATA GMP NHẬP CMP T06.2026.xlsx`

Cả 2 đều có cấu trúc **2 sheets** giống nhau.

---

## 2. Cấu trúc chung

### Sheet 1: `TH1. Project Number`

Dữ liệu theo từng **Project** (chi tiết), dùng để match với `gcp_project_number` / `gmp_project_number` trong contract.

**GCP columns:**
| Column | Type | Description |
|--------|------|-------------|
| Project | string | Tên project |
| Project ID | string | ID trên GCP |
| Project number | number | **Key matching** — match với `contract.gcp_private[].gcp_project_number` |
| List cost | number | Chi phí gốc trước điều chỉnh |
| Negotiated savings | number | Tiết kiệm từ thương lượng (âm) |
| Discounts | number | Chiết khấu (âm) |
| Promotions & others | number | Credit / Promotion (âm) |
| **Subtotal** | number | **List cost + Negotiated savings + Discounts + Promotions** = số cuối |

**GMP columns:** tương tự nhưng có thêm cột `Change` (%).

### Sheet 2: `TH2. Billing ID`

Dữ liệu theo từng **Billing Account** (tổng hợp), dùng để match với `billing_id` trong contract.

**GCP columns:**
| Column | Type | Description |
|--------|------|-------------|
| Subaccount | string | Tên subaccount / billing account |
| **Subaccount ID** | string | **Key matching** — match với `contract.gcp_private[].billing_id` |
| List cost | number | Chi phí gốc |
| Negotiated savings | number | |
| Discounts | number | |
| Promotions & others | number | |
| **Subtotal** | number | Số cuối |

**GMP columns:** tương tự, nhưng các cột Negotiated savings / Discounts / Promotions để trống.

---

## 3. Cách hệ thống xử lý import

### 3.1. Upload

1. Kế toán tải file Excel từ Console Google (Cost Table → Download CSV) cho từng tháng
2. Upload file lên CM qua màn hình import
3. File được lưu vào model `gwsDataModel` (collection `gwsdatas`) với các field: `productId`, `calculationId`, `usageDate`, `documentId` (ref tới file trên S3)

### 3.2. Khi generate bảng đối soát

Flow trong `calculateGcp.js` / `calculateGmp.js`:

```
1. Lấy file Excel từ S3 (documentId → s3.getFileStream)
2. xlsx.read() → đọc workbook
3. Sheet[0] → excelPnData (Project Number data)
4. Sheet[1] → excelBiData (Billing ID data)
5. Validate: kiểm tra cột "Project number" + "Subtotal" (Pn) và "Subaccount ID" + "Subtotal" (Bi)
6. Lấy contracts từ DB có productId tương ứng
7. Với mỗi contract:
   a. Lấy danh sách billing_id và project_number từ contract.gcp_private / gmp_private
   b. Lọc excelPnData: chỉ giữ dòng có Project number trong danh sách
   c. Lọc excelBiData: chỉ giữ dòng có Subaccount ID trong danh sách
   d. Tính tổng: subTotal = sum(Subtotal của Pn) + sum(Subtotal của Bi)
8. Áp dụng discount, vat, fct từ hợp đồng
9. Điền vào template XLSX và output
```

### 3.3. Logic matching chi tiết

**GCP** (`calculateGcp.js:252-286`):
```javascript
// Contract chứa:
contract.gcp_private = [{
  billing_id: "01AEDA-88691D-0FBD5D, 01AEDA-88691D-0FBD6D",  // comma-separated
  gcp_project_number: "98475675285, 496160243049"               // comma-separated
}]

// Bước 1: Tách chuỗi → array
billingIds = billing_id.split(",").map(el => el.trim())
projectNumbers = gcp_project_number.split(",").map(el => el.trim())

// Bước 2: Lọc Excel
subtotalPn = excelPnData.filter(item =>
  projectNumbers.includes(item["Project number"].toString())
).reduce((sum, item) => sum + item["Subtotal"], 0)

subtotalBi = excelBiData.filter(item =>
  billingIds.includes(item["Subaccount ID"])
).reduce((sum, item) => sum + item["Subtotal"], 0)

// Bước 3: Tổng hợp
subTotal = subtotalPn + subtotalBi
```

**GMP** (`calculateGmp.js:245-277`): giống hệt GCP, chỉ khác lấy từ `contract.gmp_private`.

---

## 4. Lưu ý

1. **Project number** là số, nhưng trong Excel có thể là string → cần `.toString()` khi so sánh
2. **Subaccount ID** là string, match exact
3. Một contract có thể có nhiều billing_id / project_number (cách nhau bằng dấu phẩy)
4. Một billing_id có thể thuộc nhiều project (quan hệ 1-n)
5. File Excel phải có đúng 2 sheet với tên sheet bất kỳ (code dùng `SheetNames[0]` và `SheetNames[1]`)
6. Dòng cuối cùng của sheet (GST 0%) bị pop() trong GWS Flex (`excelData.pop()`), nhưng GCP/GMP không pop
7. Các project có Subtotal = 0 hoặc âm vẫn được giữ lại (không bị lọc)

---

## 5. So sánh GCP vs GMP

| Tiêu chí | GCP | GMP |
|----------|-----|-----|
| Field trong contract | `gcp_private` | `gmp_private` |
| Key match Pn | `gcp_project_number` | `gmp_project_number` |
| Key match Bi | `billing_id` | `billing_id` |
| Cấu trúc Excel | 2 sheets giống nhau | 2 sheets giống nhau |
| Sheet 0 validate | `Project number` + `Subtotal` | `Project number` + `Subtotal` |
| Sheet 1 validate | `Subaccount ID` + `Subtotal` | `Subaccount ID` + `Subtotal` |
| Công thức tính | vat + fct + discount + *1.1 | vat + fct + discount + *1.1 |
| Khác biệt | Không | Không — code gần như identical |
