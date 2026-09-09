# Giải Pháp Tự Động Hoá GWS Flex: ERP → CM

## Bối Cảnh

### Hiện trạng (Thủ công)
```
Kế toán tải file Excel usage Flex từ Google Admin Console
  → Vào CM trang /gws-data, upload file thủ công (Bước 1)
  → Vào CM trang Cost Table, chọn "GWS Flex", bấm Generate (Bước 2)
  → Tải file ĐNTT về, kiểm tra, gửi khách
```

### Mục tiêu tự động hoá
```
ERP tự lấy data từ BigQuery (không cần tải Excel thủ công)
  → ERP gọi API CM để tạo GWS Data (thay Bước 1)
  → ERP gọi API CM để gen ĐNTT (thay Bước 2)
  → ERP nhận file ĐNTT, lưu trữ, hiển thị cho kế toán review
```

### Vai trò hệ thống
- **ERP (hệ thống mới)**: Điều phối, lấy data BigQuery, gọi CM API
- **CM (hệ thống cũ, bên thứ ba)**: Xử lý tính toán, gen file ĐNTT, lưu trữ

---

## Kiến Trúc Tổng Quan

```
┌─────────────────────────────────────────────────────────────────┐
│                          ERP (Hệ thống mới)                     │
│                                                                  │
│  ┌──────────────┐    ┌──────────────────┐    ┌───────────────┐  │
│  │ BigQuery      │    │ GWS Flex         │    │ ĐNTT          │  │
│  │ Service       │───▶│ Automation       │───▶│ Management    │  │
│  │               │    │ Service          │    │               │  │
│  │ Query usage   │    │ Tạo Excel        │    │ Nhận file từ  │  │
│  │ data trực tiếp│    │ Upload lên CM    │    │ CM, hiển thị  │  │
│  └──────────────┘    │ Trigger gen ĐNTT │    │ cho kế toán   │  │
│                       └───────┬──────────┘    └───────────────┘  │
│                               │                                   │
└───────────────────────────────┼───────────────────────────────────┘
                                │ HTTP API calls
                                ▼
┌───────────────────────────────────────────────────────────────────┐
│                     CM Backend (Bên thứ ba)                       │
│                     http://35.213.167.210:3000                    │
│                                                                   │
│  POST /api/gws-data          POST /api/cost-table/generate       │
│  (Upload Excel + tạo record) (Tính toán + gen file ĐNTT)        │
│                                                                   │
│  Dữ liệu: MongoDB + S3                                          │
└───────────────────────────────────────────────────────────────────┘
```

---

## Chi Tiết Từng Bước Tự Động

### Phase 1: ERP lấy dữ liệu usage từ BigQuery

**Thay thế việc**: Kế toán tải file Excel từ Google Admin Console.

**BigQuery Table**: `billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`

**Query lấy data GWS Flex theo tháng**:
```sql
SELECT 
  -- Các cột tương đương file Excel mà CM cần
  sku.description AS subscription,
  -- domain_name tương đương "Domain name"
  -- usage.amount tương đương "Quantity"
  -- net_cost tương đương "Amount"
  usage_start_time,
  usage_end_time
FROM `billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`
WHERE 
  usage_start_time >= TIMESTAMP('2024-06-01')
  AND usage_start_time < TIMESTAMP('2024-07-01')
  AND sku.description != 'Tax'
ORDER BY usage_start_time
```

> **⚠️ Cần xác minh**: Cấu trúc chính xác các cột trong bảng BigQuery `reseller_billing_detailed_export_v1` — cần map sang đúng các cột mà CM mong đợi: `Domain name`, `Subscription`, `Description`, `Start date`, `End date`, `Quantity`, `Amount`.

**Output Phase 1**: Mảng JSON chứa dữ liệu usage flex theo tháng.

---

### Phase 2: ERP tạo file Excel và upload lên CM

**Thay thế việc**: User vào trang `/gws-data` và upload file thủ công.

#### Bước 2a: ERP tạo file Excel đúng format CM mong đợi

CM đọc Excel bắt đầu từ dòng 10 (`XLSX_RANGE = 9`) và yêu cầu các cột:

| Cột bắt buộc | Kiểu | Ghi chú |
|---|---|---|
| `Domain name` | String | Phải là string hợp lệ |
| `Subscription` | String | Tên SKU, phải khớp với `SKU_PRICING` |
| `Description` | String | Mô tả |
| `Start date` | Number | Ngày bắt đầu (số, ví dụ: 1) |
| `End date` | Number | Ngày kết thúc (số, ví dụ: 30) |
| `Quantity` | Number | Số license |
| `Amount` | Number | Số tiền USD (chỉ dùng trước 02/2024, nhưng phải có để validate) |

**Lưu ý quan trọng**:
- 9 dòng đầu phải có (header báo cáo Google) — CM skip 9 dòng.
- Dòng cuối cùng phải là dòng dữ liệu hợp lệ (không phải dòng tổng).
- Cột `Domain name` phải là String, cột `Amount` phải là Number — đây là điều kiện validate của CM.

#### Bước 2b: ERP gọi API CM để upload

```
POST http://35.213.167.210:3000/api/gws-data
Content-Type: multipart/form-data
Authorization: Bearer <CM_TOKEN>

Form fields:
  - productId: "<ObjectId của product Google Workspace Resell>"
  - calculationId: "<ObjectId của calculation GWS Flex>"
  - usageDate: "2024-06" (format YYYY-MM)
  - file: <file Excel vừa tạo>
```

**CM xử lý**:
1. Upload file Excel lên S3 (folder `GWS_DATA_FOLDER`)
2. Tạo record `documents` (lưu key S3)
3. Tạo record `gwsdata` (lưu `productId`, `calculationId`, `documentId`, `usageDate`, `uniqueId`)

**Response**: HTTP 200 nếu thành công.

---

### Phase 3: ERP gọi CM gen ĐNTT

**Thay thế việc**: User vào Cost Table, chọn tham số, bấm Generate.

```
POST http://35.213.167.210:3000/api/cost-table/generate
Content-Type: application/json
Authorization: Bearer <CM_TOKEN>

{
  "calculationIds": ["<ObjectId calculation GWS Flex>"],
  "productId": "<ObjectId product GWS Resell>",
  "startDate": "2024-06-01",
  "endDate": "2024-06-30",
  "customers": []              // Rỗng = tính cho tất cả khách
}
```

**CM xử lý**:
1. Đọc gwsData đã tạo ở Phase 2 → lấy file Excel từ S3
2. Lọc contract Flexible Plan, nhóm theo pháp nhân
3. Match domain, tính giá, FCT, discount, quy đổi VND, VAT
4. So sánh với cost table cũ, nếu data giống hệt → skip (không tạo trùng)
5. Gen file ĐNTT (Excel) → upload S3 → tạo record `costTable`

**Response**: HTTP 200 + danh sách cost table vừa gen (bao gồm ID, tên file, contractIds).

---

## Dữ Liệu Cần Chuẩn Bị (Tham Chiếu ID Từ CM)

ERP cần lưu trữ hoặc query từ CM các ObjectId sau:

| Dữ liệu | Cách lấy | Ghi chú |
|---|---|---|
| `productId` (Google Workspace Resell) | `GET /api/product` → tìm `name === "Google Workspace Resell"` | Cần lấy 1 lần, cache |
| `calculationId` (GWS Flex) | `GET /api/calculation` → tìm `functionName === "calculateGwsFlex"` | Cần lấy 1 lần, cache |
| CM Auth Token | `POST /api/authen/login` | Cần refresh theo session |

---

## Luồng Tự Động Hoá End-to-End

```
┌─ ERP Scheduler (Chạy đầu mỗi tháng, ví dụ ngày 5) ─────────────────────┐
│                                                                            │
│  1. Query BigQuery                                                         │
│     └─ Lấy data usage Flex tháng trước                                    │
│     └─ Filter: sku != "Tax", cost > 0                                     │
│                                                                            │
│  2. Tạo file Excel                                                         │
│     └─ Format đúng cấu trúc CM (9 dòng header, data từ dòng 10)          │
│     └─ Validate: Domain name = String, Amount = Number                    │
│                                                                            │
│  3. Gọi CM: POST /api/gws-data                                            │
│     └─ Upload file Excel + productId + calculationId + usageDate          │
│     └─ Kiểm tra response 200                                              │
│                                                                            │
│  4. Gọi CM: POST /api/cost-table/generate                                 │
│     └─ Gửi calculationIds + productId + startDate + endDate               │
│     └─ Nhận danh sách ĐNTT đã gen                                         │
│                                                                            │
│  5. Lấy file ĐNTT                                                          │
│     └─ GET /api/cost-table/all → lấy danh sách cost table mới             │
│     └─ Download file ĐNTT từ CM (qua documentId → S3)                    │
│     └─ Lưu vào ERP, đánh dấu "Chờ kế toán review"                       │
│                                                                            │
│  6. Thông báo                                                               │
│     └─ Gửi notification cho kế toán: "Đã gen ĐNTT GWS Flex tháng X"     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Xử Lý Lỗi & Edge Cases

| Tình huống | Xử lý |
|---|---|
| BigQuery không có data tháng đó | Log warning, skip tháng, thông báo kế toán kiểm tra |
| CM đã có gwsData tháng đó (trùng) | Gọi `PUT /api/gws-data/:id` để update thay vì create |
| CM gen ĐNTT trả về "GENERATED_EXIST" | Data giống cost table cũ, không cần gen lại → bỏ qua |
| CM gen ĐNTT trả về "GENERATED_EMPTY" | Không có contract Flex hợp lệ → log + thông báo kế toán |
| Contract thiếu legal/domain | CM throw lỗi `NOT_FOUND_LEGAL` → ERP log lại, báo kế toán bổ sung hợp đồng trên CM |
| SKU mới không có trong `SKU_PRICING` | CM tính `amount = NaN` → cần cập nhật `skuPricing.js` trên CM trước |
| Tỷ giá chưa nhập cho tháng đó | CM throw lỗi → kế toán cần nhập tỷ giá trên CM trước |

---

## Các Vấn Đề Cần Giải Quyết Trước Khi Triển Khai

### 1. Mapping cột BigQuery → Excel CM
Cần xác minh chính xác:
- Cột nào trong BigQuery tương ứng `Domain name` trong Excel?
- `Start date` / `End date` trong Excel là **số ngày** (1, 30) — BigQuery trả về **timestamp** → cần convert.
- `Quantity` / `Amount` cần lấy từ trường nào trong BigQuery?

### 2. Authentication CM
- CM dùng Bearer Token → ERP cần có account trên CM với quyền **Admin** hoặc quyền thuộc department **Accountance**.
- Cần cơ chế refresh token tự động.

### 3. Tạo API service account trên CM (Khuyến nghị)
CM hiện tại yêu cầu user login → không phù hợp cho automation. Khuyến nghị:
- Tạo 1 user "ERP Service Account" trên CM với quyền Accountance.
- Hoặc CM bổ sung cơ chế API Key / Service Token cho việc gọi tự động.

### 4. Cơ chế idempotent
- CM kiểm tra trùng gwsData bằng `uniqueId` (unique index).
- CM kiểm tra trùng cost table bằng cách so sánh `data` với cost table cũ nhất (`lodash.isEqual`).
- ERP cần sinh `uniqueId` nhất quán (ví dụ: `"6_2024_erp_auto"`) để tránh tạo trùng khi retry.

### 5. Lấy file ĐNTT output từ CM
CM gen file ĐNTT upload lên S3, lưu `documentId` trong collection `costTable`. ERP cần:
- Gọi `GET /api/cost-table/all` để lấy danh sách.
- Gọi `GET /api/download/:documentId` (nếu có endpoint) để tải file.
- Hoặc truy cập trực tiếp S3 nếu có shared credentials.

---

## Tóm Tắt API Calls Cần Thiết

| Thứ tự | Method | Endpoint CM | Mục đích | Tần suất |
|---|---|---|---|---|
| 0 | POST | `/api/authen/login` | Lấy Bearer Token | 1 lần/session |
| 1 | GET | `/api/product` | Lấy `productId` GWS Resell | 1 lần, cache |
| 2 | GET | `/api/calculation` | Lấy `calculationId` GWS Flex | 1 lần, cache |
| 3 | POST | `/api/gws-data` | Upload file Excel usage flex | 1 lần/tháng |
| 4 | POST | `/api/cost-table/generate` | Trigger gen ĐNTT | 1 lần/tháng |
| 5 | GET | `/api/cost-table/all` | Lấy danh sách ĐNTT đã gen | Sau bước 4 |
