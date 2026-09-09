# Quy Trình Tính Bill GWS Flex - Hệ Thống CM Cũ

## Tổng Quan

Quy trình tính bill Google Workspace Flexible Plan trên hệ thống CM cũ gồm **2 bước chính** và **1 luồng phụ** (tính hoa hồng):

| Bước | Thao tác | Trang trên CM | File Backend xử lý |
|------|----------|---------------|---------------------|
| **Bước 1** | Upload dữ liệu usage Flex theo tháng | `/gws-data` | `gwsData` routes/controller/service |
| **Bước 2** | Gen ĐNTT (Đề Nghị Thanh Toán) | Cost Table → "Phương thức tính GWS Flex" | `cost_table_calculations/calculateGwsFlex.js` |
| **Phụ** | Tính Commission (Hoa hồng) | Automation | `services/automation.service.js` → `generateGwsFlexCommission` |

---

## Bước 1: Upload Dữ Liệu Usage Flex

### Giao diện
- URL: `http://35.213.167.210:4200/#/gws-data`
- Thao tác: User upload file Excel (báo cáo usage Flex từ Google) cho từng tháng.

### Backend xử lý
- **Route**: `POST /api/gws-data` → `gwsData.controller` → `gwsData.service`
- **Lưu trữ**: File Excel được upload lên **AWS S3**, tạo record trong collection `documents`.
- **MongoDB collection `gwsdata`** lưu metadata:
  - `productId` — ID sản phẩm (Google Workspace Resell)
  - `calculationId` — ID phương thức tính
  - `usageDate` — Tháng sử dụng (Date, đầu tháng)
  - `documentId` — Ref tới document trên S3

### Cấu trúc file Excel đầu vào
- Bỏ qua 9 dòng đầu (header báo cáo Google), đọc từ dòng 10 (`XLSX_RANGE = 9`).
- Các cột cần thiết:

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `Domain name` | String | Tên domain của khách hàng |
| `Subscription` | String | Tên gói GWS (Business Starter, Enterprise Plus...) |
| `Description` | String | Mô tả SKU |
| `Start date` | Number | Ngày bắt đầu sử dụng trong kỳ |
| `End date` | Number | Ngày kết thúc sử dụng trong kỳ |
| `Quantity` | Number | Số lượng license |
| `Amount` | Number | Số tiền (USD) — chỉ dùng cho kỳ trước 02/2024 |

### Validate dữ liệu
- Hệ thống kiểm tra cột `Domain name` phải là String, cột `Amount` phải là Number.
- Nếu dòng cuối không hợp lệ (dòng tổng cộng), tự động bỏ dòng cuối và kiểm tra lại.

### CRUD API
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/gws-data/all` | Lấy danh sách tất cả data flex đã upload |
| POST | `/api/gws-data` | Tạo mới (upload file) |
| PUT | `/api/gws-data/:id` | Cập nhật |
| DELETE | `/api/gws-data/:id` | Xóa |

---

## Bước 2: Gen ĐNTT (Đề Nghị Thanh Toán / Cost Table)

### 2.1 Giao diện thao tác
- Vào trang **Cost Table** trên CM.
- Chọn phương thức tính: **"Phương thức tính GWS Flex"** (`calculationName.GWS_FLEX` = `"calculateGwsFlex"`).
- Chọn khoảng thời gian (startDate → endDate), ví dụ: `2024-06-01` đến `2024-06-30`.
- Tuỳ chọn: lọc theo khách hàng cụ thể (nếu không chọn sẽ tính toàn bộ).

### 2.2 Backend Entrypoint
```
User bấm "Generate" trên giao diện
  → POST /api/cost-table/generate
    body: { calculationIds, productId, startDate, endDate, customers }
  → costTable.service.js (dòng 458)
    → dispatch: cost_table_calculations.calculation["calculateGwsFlex"]({...})
    → calculateGwsFlex.js
```

### 2.3 Luồng xử lý chi tiết — Từng bước

---

#### **Bước 2.1: Đọc dữ liệu từ Bước 1 đã upload**

Hệ thống duyệt từng tháng trong khoảng `[startDate, endDate]`:

1. Tìm record `gwsData` trong MongoDB theo `{ productId, calculationId, usageDate: tháng đó }`.
2. Từ `gwsData.documentId` → lấy file Excel đã upload ở Bước 1 từ S3.
3. Đọc Excel, bỏ 9 dòng đầu (`XLSX_RANGE = 9`), parse thành mảng JSON.
4. Bỏ dòng cuối nếu không hợp lệ (dòng tổng cộng của Google).

**Ví dụ data sau khi parse Excel** (mỗi dòng là 1 SKU usage record):
```json
[
  { "Domain name": "abc.com.vn", "Subscription": "Google Workspace Business Standard", "Description": "...", "Start date": 1, "End date": 30, "Quantity": 50, "Amount": 672 },
  { "Domain name": "abc.com.vn", "Subscription": "Google Vault", "Description": "...", "Start date": 1, "End date": 30, "Quantity": 10, "Amount": 40 },
  { "Domain name": "xyz.vn", "Subscription": "Google Workspace Enterprise Plus", "Description": "...", "Start date": 5, "End date": 30, "Quantity": 20, "Amount": 728 },
  { "Domain name": "other-company.com", "Subscription": "Google Workspace Business Starter", "Description": "...", "Start date": 1, "End date": 30, "Quantity": 100, "Amount": 672 }
]
```

> **Lưu ý**: File Excel chứa data của TẤT CẢ khách hàng Flex, không phải chỉ 1 khách. Hệ thống cần match domain để tách đúng khách.

---

#### **Bước 2.2: Lọc hợp đồng Flex từ MongoDB**

Query contract thoả mãn TẤT CẢ điều kiện sau:
- `productId` = ID sản phẩm "Google Workspace Resell"
- `status = 1` (đang active), `deleted = false`
- `legalEntityId` tồn tại, không null, không rỗng
- `gcp_private` chứa ít nhất 1 phần tử có `plan === "Flexible Plan"`
- Có legal document (Hợp đồng / Phụ lục / Biên bản chuyển nhượng) có `contract_start_date <= ngày đang tính`

Nếu user chọn khách hàng cụ thể: thêm filter `customerId: { $in: [danh sách] }`.

---

#### **Bước 2.3: Nhóm hợp đồng theo pháp nhân (Legal Entity)**

```
Tất cả contract thoả mãn
  → Nhóm theo legalEntityId
  → Mỗi nhóm (1 pháp nhân) sẽ gen ra 1 file ĐNTT riêng
```

Trong mỗi nhóm xác định:
- **`contractMain`**: Hợp đồng chính (main contract) — dùng lấy tỷ giá (`rate`), thông tin pháp nhân.
- **`latestContract`**: Hợp đồng mới nhất theo ngày tính — dùng lấy `discount`, legal info.

---

#### **Bước 2.4: Trích domain từ hợp đồng**

```
Mỗi contract trong nhóm
  → Duyệt gcp_private[]
    → Lấy trường gws_domain (chuỗi, phân cách bằng dấu phẩy)
    → Tách thành mảng, trim, lowercase
  → Gộp unique tất cả domain

Ví dụ:
  Contract A: gws_domain = "abc.com.vn, ABC.COM.VN"
  Contract B: gws_domain = "xyz.vn"
  → domainsUniq = ["abc.com.vn", "xyz.vn"]
```

---

#### **Bước 2.5: Match dữ liệu Excel với domain**

Lọc từng dòng trong Excel: chỉ giữ dòng nào có `Domain name` nằm trong `domainsUniq`.

**Ví dụ** (với `domainsUniq = ["abc.com.vn"]`):
- ✅ `{ "Domain name": "abc.com.vn", "Subscription": "Business Standard", ... }` → GIỮ
- ✅ `{ "Domain name": "abc.com.vn", "Subscription": "Google Vault", ... }` → GIỮ
- ❌ `{ "Domain name": "xyz.vn", ... }` → BỎ (khác pháp nhân)
- ❌ `{ "Domain name": "other-company.com", ... }` → BỎ (không có hợp đồng)

---

#### **Bước 2.6: Tính đơn giá (amount) cho từng dòng SKU**

##### Giai đoạn 1: Trước 01/02/2024
```
amount = Amount / 0.8
```
Giải thích: Google xuất file usage với giá reseller (= 80% list price). Hệ thống chia ngược lại để lấy full list price cho khách.

##### Giai đoạn 2: Từ 01/02/2024 trở đi (đang áp dụng)

Không dùng cột `Amount` từ Excel nữa, mà tính từ bảng giá cứng `SKU_PRICING`:

```
daysOfMonth = số ngày trong tháng (ví dụ tháng 6/2024 = 30 ngày)
usageDays   = End date - Start date + 1
amount      = (SKU_PRICING[subscription] / daysOfMonth) * usageDays * quantity
```

Bảng đơn giá SKU (hardcode trong `app/const/skuPricing.js`):

| SKU (Subscription) | Đơn giá USD/tháng |
|---------------------|-------------------|
| Google Workspace Business Starter | 8.40 |
| Google Workspace Business Standard | 16.80 |
| Google Workspace Business Plus | 26.40 |
| Google Workspace Enterprise Standard | 32.40 |
| Google Workspace Enterprise Plus | 42.00 |
| Google Vault | 5.00 |
| Google Workspace Frontline starter | 6.00 |
| Colab Pro | 9.99 |

**Ví dụ tính cho tháng 06/2024 (30 ngày)**:

| Dòng | Subscription | Start | End | usageDays | Qty | SKU Price | Tính toán | amount (USD) |
|------|-------------|-------|-----|-----------|-----|-----------|-----------|-------------|
| 1 | Business Standard | 1 | 30 | 30 | 50 | 16.80 | (16.80/30) × 30 × 50 | **840.00** |
| 2 | Google Vault | 1 | 30 | 30 | 10 | 5.00 | (5.00/30) × 30 × 10 | **50.00** |

> **Lưu ý**: `amount` được làm tròn 2 chữ số thập phân bằng `.toFixed(2)`.

---

#### **Bước 2.7: Tính tiền VND cho từng dòng SKU**

Hệ thống lấy 3 tham số:
- **FCT** = 5.88% (cố định, hardcode `fct = 0.0588`)
- **discount** = `latestContract.discount / 100` (ví dụ contract có discount = 5 → `discount = 0.05`). Nếu không có discount thì = 0.
- **exchangeRate** = `contractMain.rate` (tỷ giá riêng trong hợp đồng). Nếu contract không có rate thì lấy từ collection `rates` theo tháng tính.

**Công thức cho MỖI dòng SKU**:
```
discount_amount = round(amount × discount, 2)
fct_amount      = round(amount × 0.0588, 2)
amount_vnd      = floor(round(amount - discount_amount + fct_amount, 2) × exchangeRate)
```

> Giải thích:
> - `discount_amount`: Giảm giá theo % trên hợp đồng
> - `fct_amount`: Phí nhà thầu nước ngoài (Foreign Contractor Tax) 5.88%
> - Công thức: **(Đơn giá USD − Chiết khấu + FCT) × Tỷ giá → Làm tròn xuống (floor)**

**Ví dụ minh hoạ** (discount = 0%, exchangeRate = 24,500 VND/USD):

| Dòng | amount (USD) | discount_amount | fct_amount | Trước quy đổi | amount_vnd |
|------|-------------|-----------------|------------|---------------|------------|
| 1 (Business Standard) | 840.00 | 0 | 49.39 | 889.39 | floor(889.39 × 24500) = **21,790,055** |
| 2 (Google Vault) | 50.00 | 0 | 2.94 | 52.94 | floor(52.94 × 24500) = **1,297,030** |

**Ví dụ minh hoạ** (discount = 5%, exchangeRate = 24,500 VND/USD):

| Dòng | amount (USD) | discount_amount | fct_amount | Trước quy đổi | amount_vnd |
|------|-------------|-----------------|------------|---------------|------------|
| 1 (Business Standard) | 840.00 | 42.00 | 49.39 | 847.39 | floor(847.39 × 24500) = **20,761,055** |
| 2 (Google Vault) | 50.00 | 2.50 | 2.94 | 50.44 | floor(50.44 × 24500) = **1,235,780** |

---

#### **Bước 2.8: Tổng hợp và tính VAT**

```
totalBeforeVat = trunc(sum(amount_vnd))       ← Tổng trước thuế (cộng dồn, trunc mỗi lần cộng)
vatAmount      = floor(totalBeforeVat × 0.1)  ← Thuế VAT 10%
totalVnd       = trunc(totalBeforeVat + vatAmount)  ← Tổng tiền sau thuế
```

**Ví dụ** (tiếp theo, discount = 0%):
```
totalBeforeVat = trunc(21,790,055 + 1,297,030) = 23,087,085 VND
vatAmount      = floor(23,087,085 × 0.1)       = 2,308,708 VND
totalVnd       = trunc(23,087,085 + 2,308,708) = 25,395,793 VND
```

> **Lưu ý về cách làm tròn**:
> - `amount_vnd` của từng dòng: dùng `Math.floor()` (làm tròn xuống)
> - `totalBeforeVat`: dùng `Math.trunc()` cộng dồn (cắt phần thập phân)
> - `vatAmount`: dùng `Math.floor()`
> - `totalVnd`: dùng `Math.trunc()`
> - Điều này có thể gây **lệch 1-2 đồng** so với tính trên Excel thủ công.

---

#### **Bước 2.9: Xuất file ĐNTT (Excel)**

Hệ thống fill dữ liệu vào template Excel:

**Chọn template**:
- Hợp đồng CÓ discount (`latestContract.discount > 0`): dùng `templateContent.isDiscount`
- Hợp đồng KHÔNG discount: dùng `templateContent.isNoDiscount`

**Dữ liệu fill vào template** (`dataFilled`):

| Trường | Giá trị | Mô tả |
|--------|---------|-------|
| `projects[]` | Mảng các dòng SKU | Mỗi dòng gồm: subscription, description, start_date, end_date, quantity, amount, fct, discount, exchange_rate, domain, amount_vnd |
| `legal_name` | Tên pháp nhân | Lấy từ legal entity của hợp đồng chính |
| `month_start` | `"01-06-2024"` | Ngày đầu tháng tính (format DD-MM-YYYY) |
| `month_end` | `"30-06-2024"` | Ngày cuối tháng tính (format DD-MM-YYYY) |
| `exchange_rate` | 24500 | Tỷ giá USD/VND |
| `day` / `month` / `year` | Ngày hiện tại | Ngày gen ĐNTT (moment().date/month/year) |
| `vat_amount` | 2,308,708 | Tiền VAT 10% |
| `total_vnd` | 25,395,793 | Tổng tiền thanh toán sau VAT |

**Tên file output**:
```
[Google Workspace Resell][Phương thức tính GWS Flex][deal_name_1 deal_name_2][06-2024].xlsx
```

**Validate trước khi xuất**:
- Hợp đồng mới nhất phải có `legal[0]` với `contract_code` và `sign_date` không rỗng. Nếu thiếu → throw lỗi `NOT_FOUND_LEGAL`.

---

### 2.4 Tóm tắt toàn bộ pipeline tính toán Bước 2

```
Bước 1 đã upload Excel vào gwsData (S3 + MongoDB)
                    │
                    ▼
  ┌─── calculateGwsFlex({calculationId, productId, customers, startDate, endDate}) ───┐
  │                                                                                     │
  │  Duyệt từng tháng trong [startDate..endDate]:                                      │
  │    ├─ Đọc gwsData → lấy documentId → download Excel từ S3                         │
  │    ├─ Parse Excel (skip 9 dòng, bỏ dòng cuối nếu invalid)                         │
  │    ├─ Query contracts: plan="Flexible Plan" + legalEntityId + legal date check      │
  │    ├─ Nhóm contracts theo legalEntityId                                             │
  │    │                                                                                │
  │    └─ Mỗi nhóm pháp nhân:                                                          │
  │         ├─ Lấy contractMain, latestContract                                         │
  │         ├─ Trích domainsUniq từ gcp_private[].gws_domain                           │
  │         ├─ Lấy exchangeRate (contract.rate hoặc rate theo tháng)                   │
  │         ├─ Lấy discount, fct=0.0588                                                │
  │         │                                                                           │
  │         ├─ Duyệt Excel, match "Domain name" ∈ domainsUniq:                        │
  │         │     Nếu trước 02/2024: amount = Amount / 0.8                             │
  │         │     Nếu từ 02/2024:    amount = (SKU_PRICE/daysOfMonth)*usageDays*qty    │
  │         │                                                                           │
  │         ├─ generateDataFilled:                                                      │
  │         │     discount_amount = amount × discount                                   │
  │         │     fct_amount      = amount × 0.0588                                     │
  │         │     amount_vnd      = floor((amount - discount + fct) × exchangeRate)     │
  │         │     totalBeforeVat  = trunc(Σ amount_vnd)                                │
  │         │     vatAmount       = floor(totalBeforeVat × 0.1)                         │
  │         │     totalVnd        = trunc(totalBeforeVat + vatAmount)                   │
  │         │                                                                           │
  │         └─ Chọn template (có/không discount) → xuất file ĐNTT                     │
  │                                                                                     │
  └─────────────────────────────────────────────────────────────────────────────────────┘
```



---

## Luồng Phụ: Tính Commission (Hoa Hồng)

### File xử lý
- `app/services/automation.service.js` → hàm `generateGwsFlexCommission` (dòng 1201)
- Được gọi trong map `generateFunctions["Google Workspace Resell"]` cùng với `generateGwsCommission`.

### Đầu vào
- File MISA (cũng từ collection `dataFlex`, upload qua route `/api/data-flex`).
- Match bản ghi theo:
  - `Tên khách hàng` (so sánh tên pháp nhân, case insensitive) HOẶC `Mã khách hàng` === `taxNumber` của legalEntity
  - `Mã hàng` match pattern `MISA_PRODUCT_NAMES["Google Workspace Resell"]`
  - `Mã thống kê === "GW-Flexible"`
  - Phải có `Số hóa đơn`

### Dữ liệu lấy ra
```
revenue = sum("Doanh số bán")
cogs    = sum("Giá vốn")
paymentPeriod = format("Ngày chứng từ", "MM/YYYY")
payByDate     = addWeekDays("Ngày hóa đơn", contractMain.paymentPeriod)
```

### Xác định Deal Type
```
dealType = 2  nếu (contract_start_date cách payByDate >= 1 năm) HOẶC (có transfer_deal)
dealType = contract.deal_type  nếu không
```

### Commission Base Rate (2 giai đoạn)
- **Từ 01/03/2026**: Dùng `COMMISSION_BASE_RATE_NEW`
  - Resell New (dealType=1 và contract_start_date >= 01/03/2026): `COMMISSION_BASE_RATE_NEW["Resell New"]`
  - Còn lại: `COMMISSION_BASE_RATE_NEW["Resell Existing"]`
- **Trước 01/03/2026**: Dùng `COMMISSION_BASE_RATE["Google Workspace Resell"]`

### Các hệ số nhân
```
paymentTerm      = PAYMENT_TERM[gcp_private.payment_cycle]
contractDuration = CONTRACT_DURATION[gcp_private.plan]
overQuota        = OVER_QUOTA[contract.over_quota]
method           = METHOD[contract.pay_method]
```

### Withholding Tax
```
whTax = cogs * WH_TAX_RATE["Google Workspace Resell"]   (áp dụng từ 09/2025)
whTax = 0                                                (trước 09/2025)
```

---

## Sơ Đồ Tổng Quan Flow

```
┌──────────────────────────────────────────────────┐
│           BƯỚC 1: Upload Data Usage              │
│   Trang: /gws-data                               │
│   Upload Excel (Google Flex usage report)         │
│   → Lưu S3 + MongoDB (collection: gwsdata)       │
└──────────────────────┬───────────────────────────┘
                       │
          ┌────────────┼────────────┐
          ▼                         ▼
┌─────────────────────┐   ┌─────────────────────────┐
│  BƯỚC 2: Gen ĐNTT   │   │  LUỒNG PHỤ: Commission  │
│  Trang: Cost Table   │   │  Trang: Automation       │
│                      │   │                           │
│  calculateGwsFlex.js │   │  automation.service.js    │
│                      │   │  generateGwsFlexCommission│
│  • Match domain      │   │                           │
│  • SKU pricing       │   │  • Match tên KH / MST     │
│  • FCT 5.88%         │   │  • Mã thống kê=GW-Flexible│
│  • USD→VND * tỷ giá  │   │  • revenue + cogs từ MISA │
│  • VAT 10%           │   │  • base rate * hệ số      │
│  • Xuất file ĐNTT    │   │  • WH tax (từ 09/2025)    │
│    (Excel template)  │   │  • Lưu commission record  │
└─────────────────────┘   └─────────────────────────┘
```

---

## Tham Chiếu File Backend

| Thành phần | Đường dẫn file |
|------------|----------------|
| Hàm tính bill GWS Flex (mới) | `app/cost_table_calculations/calculateGwsFlex.js` |
| Hàm tính bill GWS Flex (cũ/legacy) | `app/calculations/calculateGwsFlex.js` |
| Đăng ký phương thức tính | `app/cost_table_calculations/index.js` |
| Tên phương thức tính | `app/const/calculationName.js` → `GWS_FLEX: "calculateGwsFlex"` |
| Cấu hình phương thức | `app/const/calculationConfig.js` → `"Phương thức tính GWS Flex"` |
| Bảng SKU Pricing | `app/const/skuPricing.js` |
| Hằng số plan | `app/calculations/const/gwsPlan.js` → `FLEXIBLE_PLAN: "Flexible Plan"` |
| Service gọi gen ĐNTT | `app/services/costTable.service.js` (dòng 458) |
| Hàm tính Commission Flex | `app/services/automation.service.js` → `generateGwsFlexCommission` (dòng 1201) |
| Model data upload | `app/model/dataFlex.model.js` (collection `dataFlex` — file MISA) |
| Model GWS data | `app/model/gwsData.model.js` (collection `gwsdata` — file usage) |
| Route CRUD data flex | `app/routes/dataFlex.route.js` → `/api/data-flex` |
| Route CRUD gws data | `app/routes/gwsData.route.js` → `/api/gws-data` |
