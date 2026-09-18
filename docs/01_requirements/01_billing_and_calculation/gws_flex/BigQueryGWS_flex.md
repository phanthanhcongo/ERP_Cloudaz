# BigQuery và quy trình GWS Flex

## 1. Mục tiêu

Tài liệu này ghi nhận logic đã xác minh giữa dữ liệu BigQuery, CM và ERP trong quy trình GWS Flex:

```text
BigQuery billing export
→ tạo file dữ liệu GWS đúng format
→ upload vào CM qua /api/gws-data
→ CM đọc dữ liệu và thông tin hợp đồng
→ gen DNTT qua /api/cost-table/generate
→ ERP đồng bộ payment-request và tạo/cập nhật khoản nợ
```

`POST /api/gws-data` chỉ import dữ liệu GWS vào CM. Logic hợp đồng, tính tiền và gen DNTT nằm ở bước `POST /api/cost-table/generate`.

## 2. Cấu hình BigQuery

### 2.1 Thông tin dataset/table

```text
Project: billing-data-cloudaz-resell
Dataset: CloudAZ_GWS_billing_ds
Table: reseller_billing_detailed_export_v1
Location: US
```

### 2.2 Credential

ERP hỗ trợ credential chính được upload qua Settings và lưu trong `system_settings` với key:

```text
bigquery_sa_key
```

Credential được mã hóa khi lưu. Thứ tự fallback khi khởi tạo BigQuery client:

1. Credential đã cấu hình trong ERP Settings.
2. Biến môi trường `GCP_SERVICE_ACCOUNT_JSON`.
3. File fallback `backend/credentials/bigquery-fallback.json` nếu có.
4. Google Application Default Credentials.

### 2.3 BigQuery query

Query sử dụng Standard SQL, location `US`, và lọc theo khoảng ngày:

```sql
WHERE DATE(usage_start_time) BETWEEN DATE(@start_date) AND DATE(@end_date)
  AND cost_type = 'regular'
  AND LOWER(sku.description) != 'tax'
```

Trường `description` lấy theo logic của ứng dụng TestBigQuery:

```sql
COALESCE(
  (SELECT value FROM UNNEST(system_labels)
   WHERE key = 'workspace.googleapis.com/usage_type'),
  cost_type
) AS description
```

Nhờ đó có thể hiển thị các giá trị như `Usage`, `Commitment` và `Commitment increase` khi dữ liệu nguồn có `usage_type` tương ứng.

## 3. API CM tạo GWS data

### 3.1 Đăng nhập lấy token

```http
POST http://35.213.167.210:3000/api/authen/login
```

Các API CM tiếp theo dùng:

```http
Authorization: Bearer <CM_TOKEN>
```

### 3.2 Lấy ID cấu hình

```http
GET http://35.213.167.210:3000/api/product
GET http://35.213.167.210:3000/api/calculation
```

Ứng dụng cần xác định:

- `productId`: sản phẩm `Google Workspace Resell`.
- `calculationId`: phương thức tính GWS Flex, thường có function name `calculateGwsFlex` và tên hiển thị `Phương thức tính GWS Flex`.

### 3.3 Upload/import GWS data

```http
POST http://35.213.167.210:3000/api/gws-data
Content-Type: multipart/form-data
Authorization: Bearer <CM_TOKEN>
```

Form-data:

```text
productId      = <ObjectId sản phẩm Google Workspace Resell>
calculationId  = <ObjectId phương thức tính GWS Flex>
usageDate      = 2024-06
file           = <file Excel dữ liệu GWS>
```

CM xử lý:

1. Upload file Excel lên S3.
2. Tạo record `documents` chứa S3 key.
3. Tạo record `gwsdata` chứa `productId`, `calculationId`, `documentId`, `usageDate` và `uniqueId`.

API này chưa xử lý match hợp đồng, chưa tính tiền và chưa tạo DNTT.

## 4. Format file GWS data

CM đọc dữ liệu bắt đầu từ dòng 10, tức bỏ 9 dòng đầu của file Excel (`XLSX_RANGE = 9`).

Các cột cần có:

| Cột | Kiểu | Mục đích |
|---|---|---|
| `Domain name` | String | Match với domain trong hợp đồng |
| `Subscription` | String | Xác định SKU và đơn giá |
| `Description` | String | Mô tả dòng cước, ví dụ `Usage` hoặc `Commitment` |
| `Start date` | Number | Ngày bắt đầu sử dụng |
| `End date` | Number | Ngày kết thúc sử dụng |
| `Quantity` | Number | Số license/user |
| `Amount` | Number | Số tiền USD; bắt buộc để validate, chủ yếu dùng trong logic cũ |

Ví dụ một dòng sau khi parse:

```json
{
  "Domain name": "abc.com.vn",
  "Subscription": "Google Workspace Business Standard",
  "Description": "Usage",
  "Start date": 1,
  "End date": 31,
  "Quantity": 50,
  "Amount": 840
}
```

Lưu ý:

- `Domain name` phải là String.
- `Amount` phải là Number.
- Không để dòng tổng cộng của Google ở cuối dữ liệu.
- File có thể chứa dữ liệu của nhiều khách hàng; CM sẽ tách theo domain hợp đồng.

## 5. Logic gen DNTT GWS Flex

### 5.1 API gen DNTT

```http
POST http://35.213.167.210:3000/api/cost-table/generate
Content-Type: application/json
Authorization: Bearer <CM_TOKEN>
```

Request:

```json
{
  "calculationIds": ["<CALCULATION_ID_GWS_FLEX>"],
  "productId": "<PRODUCT_ID_GOOGLE_WORKSPACE_RESELL>",
  "startDate": "2024-06-01",
  "endDate": "2024-06-30",
  "customers": []
}
```

`customers: []` nghĩa là tính cho toàn bộ khách hàng. Nếu có danh sách khách hàng thì chỉ tính các khách hàng được chọn.

### 5.2 Lọc hợp đồng Flex

CM tìm các contract thỏa mãn:

- `productId` là sản phẩm Google Workspace Resell.
- `status = 1`.
- `deleted = false`.
- Có `legalEntityId`.
- `gcp_private` có phần tử với `plan = Flexible Plan`.
- Có legal document và `contract_start_date <= ngày đang tính`.

Các contract được nhóm theo `legalEntityId`; mỗi pháp nhân có thể sinh một file DNTT riêng.

### 5.3 Match GWS data với hợp đồng

CM đọc `gws_domain` trong `gcp_private` của contract, tách theo dấu phẩy, trim và lowercase.

Sau đó chỉ giữ các dòng GWS data có:

```text
Domain name ∈ danh sách gws_domain của contract
```

Dòng không match domain hợp đồng sẽ bị loại khỏi quá trình tính.

### 5.4 Các field GWS data được sử dụng

| Field | Vai trò trong gen DNTT |
|---|---|
| `Domain name` | Xác định contract/customer/pháp nhân |
| `Subscription` | Tra bảng giá SKU |
| `Description` | Mô tả loại dòng cước; dùng để hiển thị/phân loại |
| `Start date` | Tính số ngày sử dụng |
| `End date` | Tính số ngày sử dụng |
| `Quantity` | Số lượng license để tính phí |
| `Amount` | Validate file và phục vụ logic giá cũ trước 02/2024 |

### 5.5 Tính amount USD

Từ 01/02/2024, CM không dùng trực tiếp `Amount` trong Excel để tính mà dùng bảng giá SKU:

```text
daysOfMonth = số ngày trong tháng
usageDays   = End date - Start date + 1
amount      = SKU price / daysOfMonth × usageDays × quantity
```

Một số đơn giá được tài liệu ghi nhận:

| Subscription | Đơn giá USD/tháng |
|---|---:|
| Google Workspace Business Starter | 8.40 |
| Google Workspace Business Standard | 16.80 |
| Google Workspace Business Plus | 26.40 |
| Google Workspace Enterprise Standard | 32.40 |
| Google Workspace Enterprise Plus | 42.00 |
| Google Vault | 5.00 |
| Google Workspace Frontline starter | 6.00 |
| Colab Pro | 9.99 |

Trước 01/02/2024, logic cũ được ghi nhận là:

```text
amount = Amount / 0.8
```

### 5.6 Tính tiền VND

Các tham số:

- `FCT = 5.88%`.
- `discount = latestContract.discount / 100`.
- `exchangeRate = contractMain.rate`; nếu thiếu thì lấy rate theo tháng.

Công thức từng dòng:

```text
discount_amount = round(amount × discount, 2)
fct_amount      = round(amount × 0.0588, 2)
amount_vnd      = floor(round(amount - discount_amount + fct_amount, 2) × exchangeRate)
```

### 5.7 Tổng hợp và VAT

```text
totalBeforeVat = trunc(sum(amount_vnd))
vatAmount      = floor(totalBeforeVat × 0.1)
totalVnd       = trunc(totalBeforeVat + vatAmount)
```

VAT được tính 10%.

### 5.8 Sinh file và record DNTT

Sau khi tính:

1. CM tạo file DNTT Excel.
2. Upload file lên S3.
3. Tạo record `costTable`.
4. Trả về danh sách DNTT mới tạo, gồm ID, file và contract liên quan.

## 6. ERP đồng bộ DNTT từ CM

ERP không tự gen lại DNTT từ BigQuery. ERP lấy DNTT đã được CM tạo bằng:

```http
POST /api/v1/fin/debts/sync-cm
```

Backend ERP gọi CM:

```http
GET /api/payment-request/all
```

Sau đó ERP:

1. Lấy toàn bộ payment request theo khoảng ngày.
2. Lọc local theo product đang active, ví dụ `GWS Flex`.
3. Lấy contract/customer/document liên quan.
4. Upsert vào bảng `debts` theo `paymentRequest._id` → `dntt_cm_id`.
5. Bản ghi mới có `sync_status = PENDING_REVIEW`.
6. Reload danh sách khoản nợ trên giao diện.

Các API CM ERP đang dùng:

```http
GET /api/payment-request/all
GET /api/payment-request/presigned?key=<document.key>
GET /api/contract/allNotPaging
GET /api/contract/:id
GET /api/customer/:id
GET /api/common/allDataSelect
```

## 7. Các route CM liên quan

Theo tài liệu legacy:

```text
app/routes/gwsData.route.js  → /api/gws-data
app/routes/dataFlex.route.js → /api/data-flex
```

Các API chính của quy trình:

| Thứ tự | Method | Endpoint | Mục đích |
|---:|---|---|---|
| 0 | POST | `/api/authen/login` | Lấy Bearer token |
| 1 | GET | `/api/product` | Lấy product ID |
| 2 | GET | `/api/calculation` | Lấy calculation ID GWS Flex |
| 3 | POST | `/api/gws-data` | Import file Excel GWS usage |
| 4 | POST | `/api/cost-table/generate` | Tính và gen DNTT |
| 5 | GET | `/api/cost-table/all` | Xem danh sách DNTT đã gen |

## 8. Kết luận

- BigQuery là nguồn dữ liệu billing usage.
- `POST /api/gws-data` chỉ lưu/import dữ liệu nguồn vào CM.
- Logic contract Flex, SKU pricing, discount, FCT, tỷ giá và VAT chạy khi gọi `POST /api/cost-table/generate`.
- ERP hiện đã hỗ trợ query BigQuery để kiểm tra/preview và đồng bộ payment request từ CM.
- ERP chưa có chức năng gọi `POST /api/gws-data` hoặc `POST /api/cost-table/generate` để tự động tạo DNTT ngược lên CM.

## 9. Yêu cầu đã chốt: Generate khoản nợ

### 9.1 API nghiệp vụ ERP

API cần thiết kế:

```http
POST /api/v1/fin/debts/generate
```

Request dự kiến:

```json
{
  "product": "GWS Flex",
  "start_date": "2026-09-01",
  "end_date": "2026-09-30",
  "customers": []
}
```

### 9.2 Giao diện

Khi người dùng bấm **Tạo khoản nợ**, ERP hiển thị popup yêu cầu:

- Chọn sản phẩm cần generate hóa đơn.
- Chọn khoảng ngày.

Nếu chọn **GWS Flex**, thực hiện flow generate đầy đủ. Nếu chọn **GWS Standard**, tạm hiển thị:

```text
GWS Standard hiện chưa được hỗ trợ.
```

Không gọi BigQuery hoặc CM trong trường hợp GWS Standard.

### 9.3 Nguyên tắc phân chia trách nhiệm

ERP không tính toán nghiệp vụ hóa đơn. ERP chỉ:

1. Query dữ liệu BigQuery.
2. Map dữ liệu về format file GWS Flex.
3. Tạo file Excel tạm.
4. Gọi API CM để import dữ liệu.
5. Truyền tham số để CM gen DNTT.
6. Lấy kết quả payment request từ CM.
7. Map kết quả vào khoản nợ ERP.

CM chịu trách nhiệm toàn bộ logic:

- Match domain với hợp đồng.
- Kiểm tra hợp đồng `Flexible Plan`.
- Tính SKU, số ngày sử dụng và số lượng.
- Discount, FCT, tỷ giá và VAT.
- Sinh file DNTT và payment request.

### 9.4 Format Excel ERP tạo

CM hiện bỏ qua 9 dòng đầu (`XLSX_RANGE = 9`). ERP tạo file theo format:

```text
Dòng 1–9: để trống
Dòng 10: header
Dòng 11 trở đi: dữ liệu
```

Header dòng 10:

```text
Domain name | Subscription | Description | Start date | End date | Quantity | Amount
```

ERP không cần tạo nội dung giả cho 9 dòng đầu. `Amount` vẫn phải là Number để CM validate file, dù logic hiện tại của CM chủ yếu tra giá từ `Subscription`.

### 9.5 Flow GWS Flex chính thức

```text
POST /api/v1/fin/debts/generate
→ Query BigQuery
→ Tạo Excel tạm: 9 dòng trống, header dòng 10
→ POST CM /api/gws-data
→ POST CM /api/cost-table/generate
→ CM xử lý hợp đồng và tính toán
→ CM tạo payment request/DNTT
→ ERP gọi sync CM
→ ERP chỉ lấy payment request có product GWS Flex
→ Tạo hoặc cập nhật khoản nợ ERP
```

ERP không được tự tính lại tiền từ dữ liệu BigQuery và không được lấy nhầm payment request của GWS Standard.

## 10. Tài liệu tham chiếu

- `TestBigQuery/server.js`
- `docs/04_references_and_legacy/legacy_cm/gws_flex/quy_trinh_gws_flex_cm_cu.md`
- `docs/04_references_and_legacy/legacy_cm/gws_flex/giai_phap_tu_dong_hoa_gws_flex.md`
- `docs/01_requirements/01_billing_and_calculation/gws_flex/`
