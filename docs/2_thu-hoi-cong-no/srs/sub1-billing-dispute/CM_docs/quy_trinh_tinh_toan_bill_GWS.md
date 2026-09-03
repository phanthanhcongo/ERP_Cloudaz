# Quy Trình Tính Toán Bill Chi Phí — GWS (Google Workspace)

## 1. Nguồn dữ liệu đầu vào

| Thành phần | Mô tả |
|-----------|-------|
| Admin Console | [Google Admin Console](https://admin.google.com) → Billing → Payment accounts |
| Partner Sales Console | [Partner Sales Console](https://partner.cloud.google.com/) → Billing → Monthly Detail Report (CSV) |
| SFTP | `partnerupload.google.com` port `19321`, thư mục `invoices` |
| BigQuery Export | Channel Services billing data export (tự động, recommended) |
| Quyền truy cập | Super Admin hoặc Billing Admin |

## 2. Cấu trúc file CSV từ Google

File CSV hàng tháng có cấu trúc:

| Cột | Ý nghĩa |
|-----|---------|
| Domain name | Tên miền khách hàng |
| Subscription | Tên gói (VD: Google Workspace Business Starter) |
| Description | Loại giao dịch (Commitment / Usage / New commitment / Commitment increase / Commitment renewal) |
| Order name | Mã đơn hàng (VD: 8222370361-02) |
| Start date | Ngày bắt đầu kỳ |
| End date | Ngày kết thúc kỳ |
| Quantity | Số lượng license |
| PO number | Số PO (nếu có) |
| Amount | Thành tiền (USD) |
| Customer ID | Mã định danh khách hàng của Google (VD: C03wkq2rq) |
| SKU ID | Mã SKU (VD: 1010020027, 1010020028) |

### 2.1. Danh sách SKU ID phổ biến

| SKU ID | Gói sản phẩm |
|--------|-------------|
| 1010020027 | Google Workspace Business Starter |
| 1010020028 | Google Workspace Business Standard |
| 1010020025 | Google Workspace Business Plus |
| 1010020029 | Google Workspace Enterprise Starter |
| 1010020026 | Google Workspace Enterprise Standard |
| 1010020020 | Google Workspace Enterprise Plus |
| 1010020030 | Google Workspace Frontline Starter |
| 1010430003 | Google Workspace Additional Storage (1 TB) |
| 1010430002 | Google Workspace Additional Storage (100 GB) |
| 1010340005 | Google Workspace Business Starter – Archived User |
| 1010380003 | AppSheet Enterprise Plus |
| 1010500001 | Colab Pro |
| 1010680001 | Gemini Enterprise – Business Edition |
| Google-Vault | Google Vault |
| Google-Apps-For-Business | G Suite Basic (legacy) |

## 3. Phân loại Description (Loại giao dịch)

File CSV từ Google chứa các loại Description sau:

| Description | Ý nghĩa | Cách xử lý |
|-------------|---------|-------------|
| Commitment | Phí cam kết hàng tháng (license-based) | **Lọc bỏ** nếu khách thuộc diện Committed thanh toán riêng |
| Usage | Phí sử dụng thực tế (Flex/usage-based) | **Giữ lại** để tính billing |
| New commitment | Cam kết mới giữa kỳ (do thay đổi plan/gói) | **Giữ lại** nếu khách Flex; **lọc bỏ** nếu Committed |
| Commitment increase | Tăng license trong kỳ của gói committed | **Lọc bỏ** nếu Committed; **giữ lại** nếu Flex |
| Commitment renewal | Gia hạn cam kết trong kỳ | **Lọc bỏ** nếu Committed |

> Lưu ý: Cùng 1 domain có thể có nhiều dòng với các Description khác nhau khi thay đổi gói giữa kỳ (VD: Commitment → Usage → New commitment).

## 4. Phân loại hợp đồng

GWS chia làm 2 loại hợp đồng, mỗi loại có cách xử lý riêng:

### 4.1. GWS Flex (Usage-based)

Tính theo lượng dùng thực tế hàng tháng.

#### Dữ liệu đầu vào

| Chỉ số | Mô tả |
|--------|-------|
| Usage (USD) | Lượng dùng thực tế từ file CSV tổng từ Workspace Console |

#### Quy trình xử lý thủ công

```
1. Tải CSV tổng từ Workspace Console
2. Chuyển CSV → Excel (.xls/.xlsx)
3. Xác định domain nào là Flex, domain nào là Committed
4. Với domain Committed: xóa toàn bộ dòng (Commitment, New commitment, Commitment increase, Usage nếu là chuyển đổi giữa kỳ)
5. Với domain Flex: giữ lại dòng Usage, New commitment, Commitment increase (nếu có)
6. Upload file đã lọc lên CM
```

> **Xử lý domain chuyển đổi giữa kỳ**: Khi domain đổi gói hoặc thay đổi số lượng giữa tháng, Google xuất chuỗi: Commitment (cũ) → Usage (0 USD) → New commitment (mới). Chỉ lấy các dòng có Amount > 0.

Sau khi upload:
- CM tự động ánh xạ domain → mã khách hàng
- CM sinh bảng đối soát chi phí
- Kế toán xuất hóa đơn (không cần đối soát lại nếu tin tưởng CM)

#### Công thức

```
Thu khach = Usage_USD (trực tiếp từ CSV, không qua tính toán phức tạp)
Thu khach (VND) = Thu khach (USD) × Exchange_rate (làm tròn đơn vị)
VAT 10% = Thu khach (VND) × 10%
Total (VND) = Thu khach (VND) + VAT 10%
```

### 4.2. GWS Committed (License-based)

Trả trước theo năm/kỳ hạn.

#### Đặc thù

- Khách ký committed (thường 3 năm)
- Công ty trả Google hàng tháng theo committed
- Khách trả công ty theo năm/quý/6 tháng tùy hợp đồng
- **Không tính vào billing phát sinh hàng tháng** (đã lọc bỏ khỏi file Flex)

## 5. Cách tính tiền theo tỷ lệ ngày (Proration)

Khi domain thay đổi số lượng license hoặc đổi gói giữa tháng, Google tính theo tỷ lệ ngày:

```
Amount = Unit_price × Quantity × (Số_ngày_dùng / Tổng_số_ngày_trong_tháng)
```

Ví dụ từ file thực tế (apanano.com, T6.2026):
- Business Starter: 140 licenses, 1-22/6 (22 ngày) = 301.84 USD
- Chuyển sang New commitment: 140 licenses, 23-30/6 (8 ngày) = 146.35 USD
- Tổng 1 tháng = 301.84 + 146.35 ≈ 448.19 USD (tương đương 140 × 3.20 USD ≈ 448 USD full month)

## 6. Các sản phẩm đặc biệt (ngoài GWS)

File CSV cũng bao gồm các sản phẩm không phải GWS:

| Sản phẩm | Xử lý |
|----------|-------|
| Google Vault | Giữ lại như Usage, tính vào billing tháng |
| AppSheet Enterprise Plus | Giữ lại như Commitment, tính vào billing tháng |
| Additional Storage (1 TB / 100 GB) | Giữ lại, tính phí cố định 28 USD/tháng (1 TB) hoặc 10.5 USD/tháng (100 GB) |
| Colab Pro | Giữ lại như Usage |
| Gemini Enterprise | Giữ lại như Usage |
| G Suite Basic (legacy) | Giữ lại, xử lý như Business Starter |

## 7. Output

- File Excel đã lọc (bỏ Commit) → upload CM
- Bảng đối soát chi phí tự động từ CM
- Xuất hóa đơn trực tiếp

## 8. Ghi chú

1. **Xóa dòng Commit**: Domain vừa Flex vừa Committed xuất hiện 2 dòng trong CSV, kế toán xóa dòng Commit bằng tay
2. **Commit thanh toán riêng**: Không tính vào billing tháng, theo hợp đồng riêng
3. **Tin tưởng CM**: GWS thường xuất hóa đơn trực tiếp từ CM không cần đối soát lại
4. **Tỷ giá**: Dùng tỷ giá bán chuyển khoản ngân hàng ngày cuối tháng
5. **Làm tròn**: Thu khách VND làm tròn đến hàng đơn vị
6. **Kiểm tra tổng**: Tổng Amount các dòng sau khi lọc phải khớp với Invoice amount trên file CSV (VD: 178,069.30 USD cho T6.2026)
7. **VAT từ Google**: Google xuất hóa đơn có VAT riêng (dòng VAT 10%), không nhân với tỷ giá riêng — chỉ áp dụng VAT khi xuất hóa đơn cho khách hàng VN
8. **Customer ID**: Mỗi domain có 1 Customer ID duy nhất (VD: C03wkq2rq), dùng để ánh xạ domain → khách hàng trong CM
9. **File 2 sheet**: File CSV thường có 2 sheet — sheet 1 là dữ liệu gốc, sheet 2 ("tính thu") là dữ liệu đã tính thuế, dùng để đối chiếu

## 9. Cách code xử lý file import

### 9.1. Kiến trúc tổng quan

Backend Node.js (Express) + MongoDB. File Excel được upload lên S3, sau đó calculation engine đọc từ S3 để xử lý.

### 9.2. Upload file

| File | Vai trò |
|------|---------|
| `app\routes\gwsData.route.js` | API endpoint `POST /api/gws-data` |
| `app\controllers\gwsData.controller.js` | Delegates tới service |
| `app\services\gwsData.service.js` | Validate file Excel, upload S3, tạo DB records |
| `app\model\gwsData.model.js` | Collection `gwsData`: `productId`, `calculationId`, `documentId`, `usageDate`, `uniqueId` |
| `app\model\document.model.js` | Collection `documents`: `name`, `extension`, `key` (S3 path) |

**Luồng upload (gwsData.service.js):**
1. Validate request body + Excel file
2. Lấy `productId`, `calculationId`, `usageDate` từ body
3. Upload file lên S3 (folder `GWS_DATA_FOLDER/`)
4. Tạo record `documents` (name, extension, S3 key)
5. Tạo record `gwsData` (productId + calculationId + documentId + usageDate)
6. Sinh `uniqueId` = `MM_YYYY_<snowflake>`

### 9.3. Parse Excel

File: `app\calculations\calculateGwsFlex.js`

```javascript
// Đọc file từ S3
const workbook = xlsx.read(fileContent, { type: 'buffer' });
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Parse từ dòng 10 (bỏ qua 9 dòng header invoice)
const jsonData = xlsx.utils.sheet_to_json(sheet, { range: 9 });

// Xóa dòng cuối (GST 0% / VAT)
jsonData.splice(-1, 1);

// Validate
function validateExcelData(data) {
  for (const row of data) {
    if (typeof row['Domain name'] !== 'string') throw new Error('...');
    if (typeof row['Amount'] !== 'number') throw new Error('...');
  }
}
```

**Cấu trúc Excel đầu vào:**
- Dòng 1-8: Header invoice (Bill to, Invoice number, Date...)
- Dòng 9: Trống
- Dòng 10: Column headers (Domain name, Subscription, Description...)
- Dòng 11+: Data rows
- Dòng cuối: VAT / GST row (bị xóa bởi code)

**Các cột được code sử dụng:**
| Cột | Dùng để |
|-----|---------|
| `Domain name` | Ghép với contract field `gcp_private.gws_domain` |
| `Subscription` | Tra cứu giá trong `SKU_PRICING` map |
| `Quantity` | Số lượng license |
| `Start date` / `End date` | Tính proration (số ngày dùng) |
| `Amount` | Dùng trong công thức cũ (trước T2.2024) |

> **Lưu ý**: Code KHÔNG tự động lọc dòng Description. File upload lên CM phải do kế toán lọc thủ công trước (xóa dòng Commitment của khách Committed). Code parse toàn bộ dòng có trong file.

### 9.4. Calculation engine

File: `app\calculations\calculateGwsFlex.js`

**Registry:** `app\calculations\index.js` map `calculateGwsFlex` → implementation.

```javascript
async function calculateGwsFlex({ calculationId, productId, customers, startDate, endDate }) {
  // 1. Fetch calculation config + product info từ DB
  // 2. Enumerate các tháng trong khoảng startDate → endDate
  // 3. Lấy Excel template từ S3 (để fill output)
  // 4. Với mỗi tháng: load file GWS Excel từ S3, parse
  // 5. Fetch contracts có plan: "Flexible Plan"
  // 6. Group contracts theo legalEntityId, lấy tỷ giá
  // 7. Với mỗi legal entity: tính toán
}
```

**Luồng xử lý chi tiết:**

```
1. Lấy danh sách contracts với plan = "Flexible Plan"
2. Với mỗi contract, lấy domain từ contract.gcp_private[].gws_domain
3. Với mỗi dòng trong Excel:
   - Tìm domain trong danh sách domain của contract
   - Nếu khớp → tính tiền
```

### 9.5. Công thức tính giá trong code

**Trước T2.2024 (dòng 303):**
```
amount_modified = Amount * 100 / 80
```

**Từ T2.2024 trở đi (dòng 319):**
```
unitPrice     = SKU_PRICING[subscription]   // Tra bảng giá
dailyPrice    = unitPrice / daysInMonth      // Giá 1 ngày
amount        = dailyPrice * usageDays * quantity
discount      = amount * discount_rate
fct           = amount * fct_rate
priceBeforeVAT = amount + fct - discount
priceVND      = floor(priceBeforeVAT * exchangeRateUSD)
priceCalculated = floor(priceVND * 1.1)       // +10% VAT
```

### 9.6. Bảng giá SKU_PRICING trong code

File: `app\const\skuPricing.js`

| Subscription (key) | Price (USD/tháng) |
|--------------------|-------------------|
| Google Workspace Business Starter | 8.4 |
| Google Workspace Business Standard | 16.8 |
| Google Workspace Business Plus | 26.4 |
| Google Workspace Enterprise Standard | 32.4 |
| Google Workspace Enterprise Plus | 42 |
| Google Vault | 5 |
| Google Workspace Frontline Starter | 6 |
| Colab Pro | 9.99 |

> **Lưu ý**: Giá này là giá vốn Google (COGS), không phải giá bán cho khách hàng.

### 9.7. Xử lý Committed riêng

File: `app\calculations\calculateGwsStandard.js`

Khác với Flex (dùng file import), Committed tính dựa trên hợp đồng:
- Đọc contract terms (số license, giá USD, kỳ hạn)
- Không cần file Excel import
- Output là bảng cost riêng

### 9.8. Module liên quan

| File | Chức năng |
|------|-----------|
| `app\services\automation.service.js` (dòng 1201-1456) | `generateGwsFlexCommission()` — đọc Data Flex (MISA), ghép với GWS data để tính hoa hồng |
| `app\services\automation.service.js` (dòng 1457-1796) | `generateGwsCommission()` — query BigQuery `gws_billboard.billboard` để tính COGS theo SKU/domain/ngày |
| `app\const\googleWorkspace_Office365ReselConfigForSale.js` | Schema cấu hình hợp đồng GWS Resell (domain, license, USD, VND, plan: Flexible/Annual, SKU) |
| `app\calculations\const\gwsPlan.js` | Const `FLEXIBLE_PLAN = "Flexible Plan"` |
| `app\const\calculationName.js` | Const `GWS_STANDARD`, `GWS_FLEX` |

### 9.9. Sơ đồ luồng

```
Kế toán tải CSV từ Partner Sales Console
         │
         ▼
Lọc thủ công (xóa dòng Commitment của Committed)
         │
         ▼
Upload lên CM (giao diện: create-update.component.ts)
         │
         ▼
API POST /api/gws-data
  → gwsData.service.js: validate, upload S3, tạo gwsData record
         │
         ▼
Calculation engine chạy (calculateGwsFlex.js)
  → Đọc file từ S3
  → Parse Excel (bỏ 9 dòng đầu, bỏ dòng VAT cuối)
  → Ghép domain với contract (gcp_private.gws_domain)
  → Tính giá theo SKU_PRICING + proration + tỷ giá
  → Fill template Excel output
  → Lưu cost table
         │
         ▼
Kế toán xuất hóa đơn từ CM
```
