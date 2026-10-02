# ĐẶC TẢ MÀN 1 — GCP BILLING (Xem & sửa số liệu)

> **Phạm vi**: Google Cloud Platform (GCP) — không áp cho GWS Flex, GMP
> **Ngày**: 2026-09-25
> **Nguồn**: [Flow_Nghiep_Vu_Ke_Toan_TO-BE.md](Flow_Nghiep_Vu_Ke_Toan_TO-BE.md) · [BRD_GCP_2026-09-23.md](../BRD_GCP_2026-09-23.md) v2.2 · [GiaiPhap_KyThuat_LayDuLieu_GCP.md](../GiaiPhap_KyThuat_LayDuLieu_GCP.md) · [CM_Change_Request_Gemini.md](../CM_Change_Request_Gemini.md)
> **Màn tiếp theo**: [Screen_2.md](Screen_2.md) — Bảng đối soát

---

## 1. Tổng quan

### 1.1 Mục đích

Thay thế toàn bộ thao tác kế toán đang làm tay trên Google Cloud Console: kéo số liệu GCP của một kỳ về ERP, cho kế toán xem — sửa — xác nhận phân bổ credit, rồi đẩy sang CM tạo bảng đối soát.

### 1.2 Người dùng

Kế toán doanh thu. Một người dùng tại một thời điểm cho mỗi kỳ.

### 1.3 Vị trí trong luồng nghiệp vụ

```
Google phát hành invoice (≈ ngày 02)
   ↓
[MÀN 1] Truy vấn → Xem → Sửa → Phân bổ credit → Tạo bảng đối soát
   ↓
[MÀN 2] Đối chiếu → Gửi khách → Gen DNTT
   ↓
Flow DNTT / công nợ hiện có
```

### 1.4 Nguyên tắc thiết kế

| Nguyên tắc | Ý nghĩa |
|:---|:---|
| **Sửa tự do** | Kế toán sửa được mọi ô số liệu, hệ thống không chặn |
| **Không khóa bước** | Quay lại sửa và tạo lại bảng đối soát bất kỳ lúc nào |
| **Cảnh báo, không chặn** | Lệch số, tổng credit không khớp… chỉ cảnh báo |
| **Không mất chỉnh sửa tay** | Truy vấn lại phải qua bước duyệt thay đổi |
| **Luôn tra được gốc** | Giá trị gốc từ BigQuery luôn xem lại được |

---

## 2. Bố cục màn hình

```
┌────────────────────────────────────────────────────────────────────┐
│  [A] THANH KỲ & HÀNH ĐỘNG                                          │
│  Kỳ: [T08/2026 ▾]   [Truy vấn / Truy vấn lại]                      │
│  Cập nhật lần cuối: 03/09/2026 08:15   •  Nguồn: BigQuery          │
│                    [Xem trước Excel]  [Tạo bảng đối soát]          │
├────────────────────────────────────────────────────────────────────┤
│  [B] CẢNH BÁO                                                      │
│  ⚠ Tổng Subtotal Bảng 1 và Bảng 2 lệch $5,899 (2.0%)              │
│  ⚠ 3 dòng chưa gán khách hàng                                      │
├────────────────────────────────────────────────────────────────────┤
│  [C] TAB:  ( Bảng 1 — theo Project )  ( Bảng 2 — theo Billing )    │
├────────────────────────────────────────────────────────────────────┤
│  [D] THANH CÔNG CỤ BẢNG                                            │
│  [Tìm kiếm...]  [Lọc ▾]  [Sắp xếp ▾]        Đang chọn: 4 dòng      │
│                                              [Xóa dòng đã chọn]    │
├────────────────────────────────────────────────────────────────────┤
│  [E] BẢNG DỮ LIỆU  (ô sửa trực tiếp, ô đã sửa đổi màu nền)         │
│  ☐ │ Project │ ... │ Promotional credits │ Subtotal │ Khách hàng   │
├────────────────────────────────────────────────────────────────────┤
│  [F] DÒNG TỔNG — tổng toàn kỳ (không phải tổng trang)              │
├────────────────────────────────────────────────────────────────────┤
│  [G] PHÂN TRANG   ‹ 1 2 3 ... ›   50 dòng/trang ▾   621 dòng       │
└────────────────────────────────────────────────────────────────────┘
```

Các hộp thoại phụ: **Phân bổ Credit Promotion** (mục 4.5), **Duyệt thay đổi sau truy vấn lại** (mục 4.6), **Xem trước Excel** (mục 4.7).

---

## 3. Đặc tả tích hợp

> Phần này mô tả **hợp đồng dữ liệu với hệ thống ngoài**. Việc lưu trữ xuống database do đội triển khai tự thiết kế (xem mục 7).

### 3.1 BigQuery — nguồn số liệu chính

**Bảng nguồn (Standard Export):**

```
billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A
```

**Điều kiện lọc bắt buộc — áp cho mọi truy vấn:**

| Điều kiện | Giá trị | Lý do |
|:---|:---|:---|
| `invoice.month` | Kỳ kế toán chọn, dạng `YYYYMM` (VD `202608`) | Chốt đúng kỳ invoice Google phát hành |
| `cost_type` | `'regular'` | Loại bỏ dòng thuế |

**Trường BigQuery sử dụng:**

| Trường | Kiểu | Dùng để |
|:---|:---|:---|
| `invoice.month` | STRING | Lọc kỳ |
| `cost_type` | STRING | Lọc bỏ thuế |
| `project.name` | STRING | Tên project (Bảng 1) |
| `project.id` | STRING | Project ID (Bảng 1) |
| `project.number` | STRING | Project Number (Bảng 1) |
| `billing_account_id` | STRING | Subaccount ID (Bảng 2) |
| `cost` | FLOAT64 | Chi phí sau đàm phán |
| `cost_at_list` | FLOAT64 | Chi phí theo giá công khai |
| `credits` | `ARRAY<STRUCT>` | Mảng credit lồng — xem bên dưới |
| `service.description` | STRING | Nhận diện dòng Gemini |
| `currency` | STRING | Đơn vị tiền (USD) |

**Cấu trúc phần tử `credits`:**

| Trường con | Kiểu | Dùng để |
|:---|:---|:---|
| `credits.type` | STRING | Phân loại credit — quyết định thuộc cột nào |
| `credits.name` | STRING | Tên chương trình credit (hiển thị cho kế toán) |
| `credits.amount` | FLOAT64 | Số tiền credit (giá trị âm) |

**Phân loại `credits.type`:**

| `credits.type` | Vào cột | Ghi chú |
|:---|:---|:---|
| `RESELLER_MARGIN` | *(loại bỏ hoàn toàn)* | Lợi nhuận đại lý — không đưa vào Subtotal |
| `COMMITTED_USAGE_DISCOUNT` | Discounts | |
| `FEE_UTILIZATION_OFFSET` | Discounts | |
| `PROMOTION` | Promotions & others **và** Promotional credits | Nằm ở **cả hai** cột |
| `DISCOUNT` | Promotions & others | Free tier |
| `SUSTAINED_USAGE_DISCOUNT` | Promotions & others | |

#### 3.1.1 Bảng 1 — theo Project

`GROUP BY project.name, project.id, project.number`

| Cột hiển thị | Công thức |
|:---|:---|
| Project | `project.name` |
| Project ID | `project.id` |
| Project Number | `project.number` |
| List cost | `SUM(cost_at_list)` |
| Negotiated savings | `SUM(cost) − SUM(cost_at_list)` |
| Discounts | `SUM` credit có `type IN ('COMMITTED_USAGE_DISCOUNT','FEE_UTILIZATION_OFFSET')` |
| Promotions & others | `SUM` credit có `type IN ('PROMOTION','DISCOUNT','SUSTAINED_USAGE_DISCOUNT')` |
| Promotional credits | `SUM` credit có `type = 'PROMOTION'` |
| Subtotal | `SUM(cost) + SUM` credit có `type != 'RESELLER_MARGIN'` |

Khối lượng tham chiếu: ~621 dòng/kỳ.

#### 3.1.2 Bảng 2 — theo Billing Account

`GROUP BY billing_account_id`

Các cột số giống Bảng 1; thay 3 cột project bằng `Subaccount` (từ Cloud Billing API, mục 3.2) và `Subaccount ID` (`billing_account_id`). Thêm cột `Gemini API` (mục 3.1.3).

Khối lượng tham chiếu: ~94 dòng/kỳ.

#### 3.1.3 Chi phí Gemini API theo billing account

| Mục | Giá trị |
|:---|:---|
| Điều kiện nhận diện | `service.description LIKE '%Gemini%'` |
| Gộp theo | `billing_account_id` |
| Giá trị | `SUM(cost)` của các dòng Gemini |
| Ngưỡng bỏ qua | **Không có** — lấy hết mọi khoản Gemini dù nhỏ *(user chốt 2026-09-25, thay cho đề xuất $0.05 trước đó)* |
| Quan hệ với Subtotal | Gemini **nằm trong** Subtotal, tách ra để không áp chiết khấu |

Billing không có Gemini → giá trị 0.

#### 3.1.4 Yêu cầu chung khi gọi BigQuery

- Một lần bấm "Truy vấn" chạy đúng **2 query dữ liệu**: Bảng 1 theo project và Bảng 2 theo billing account; Gemini được tổng hợp ngay trong query Bảng 2, không chạy query dữ liệu riêng.
- Chạy song song được thì chạy song song để rút thời gian chờ.
- Lỗi phải phân biệt rõ: mất kết nối · thiếu quyền truy cập bảng · kỳ chưa có dữ liệu · truy vấn quá thời gian.

### 3.2 Cloud Billing API — tên subaccount

BigQuery chỉ trả `billing_account_id`, không có tên hiển thị.

| Mục | Giá trị |
|:---|:---|
| API | `cloudbilling.billingAccounts.list` |
| Trường lấy về | `name` (dạng `billingAccounts/01AF45-CC490F-EEF29A`), `displayName` |
| Cách ghép | Bóc `billing_account_id` từ `name` → map sang `displayName` |
| Thời điểm ghép | Ở tầng ứng dụng (server-side), sau khi query BigQuery xong |
| Cache | 5 phút |
| Không tìm thấy tên | Hiển thị `billing_account_id` thay cho tên, không báo lỗi chặn |

Không dùng bảng lookup JOIN — đã thay hoàn toàn bằng API này.

### 3.3 CM — tạo GWS Data & Bảng đối soát

ERP gửi sang CM một **file Excel 2 sheet**.

> ⚠️ CM đọc sheet theo **thứ tự (index)**, không theo tên: `SheetNames[0]` = sheet Project, `SheetNames[1]` = sheet Billing. Vì vậy **thứ tự sheet mới là ràng buộc bắt buộc**; tên sheet giữ theo chuẩn cũ để người đọc dễ nhận biết.
> *(`CloudAZ-CM-Backend/app/cost_table_calculations/calculateGcp.js:91-96`)*

**Sheet thứ 1 — `TH1. Project Number`**

| Thứ tự | Tên cột | Kiểu |
|:---:|:---|:---|
| 1 | `Project` | Text |
| 2 | `Project ID` | Text |
| 3 | `Project number` | **Số** — xem cảnh báo bên dưới |
| 4 | `List cost` | Số |
| 5 | `Negotiated savings` | Số |
| 6 | `Discounts` | Số |
| 7 | `Promotions & others` | Số |
| 8 | `Subtotal` | Số |

**Sheet thứ 2 — `TH2. Billing ID`**

| Thứ tự | Tên cột | Kiểu |
|:---:|:---|:---|
| 1 | `Subaccount` | Text |
| 2 | `Subaccount ID` | **Text** |
| 3 | `List cost` | Số |
| 4 | `Negotiated savings` | Số |
| 5 | `Discounts` | Số |
| 6 | `Promotions & others` | Số |
| 7 | `Subtotal` | Số |
| 8 | `Gemini API` | Số — **cột mới**, ngay sau `Subtotal` |

**Kiểm tra CM chạy khi đọc file — file không đạt sẽ bị từ chối cả kỳ:**

| Sheet | Cột bắt buộc có | Kiểu bắt buộc |
|:---|:---|:---|
| Thứ 1 (Project) | `Project number` | **Số** — mọi dòng |
| Thứ 1 (Project) | `Subtotal` | Số — mọi dòng |
| Thứ 2 (Billing) | `Subaccount ID` | **Chuỗi** — mọi dòng |
| Thứ 2 (Billing) | `Subtotal` | Số — mọi dòng |

> ⚠️ **Bẫy dễ mắc:** `Project number` phải ghi kiểu **số**, còn `Subaccount ID` phải ghi kiểu **chuỗi**. Kiểm tra chạy trên **mọi dòng** — chỉ cần một dòng sai kiểu hoặc để trống là CM từ chối toàn bộ file kỳ đó.
> *(`calculateGcp.js:345-394` — `validateExcelData`)*

**Quy ước file:**

- File phải **sạch**: không dòng tiêu đề thừa, không cột "% so với tháng trước".
- Cột `Promotional credits` **không đưa vào file** — chỉ dùng trên ERP để kế toán phân bổ credit; kết quả phân bổ đã phản ánh vào `Promotions & others` (QT-04).
- Cột `Gemini API` trống hoặc thiếu → CM hiểu là 0 (backward compatible với file cũ).

**Cách CM dùng dữ liệu:**

```
gemini          = tổng cột "Gemini API" của các billing khớp hợp đồng (hoặc 0)
discount_amount = (Subtotal − gemini) × discount%
```

CM khớp hợp đồng qua `contract.gcp_private[]` (chứa `billing_id` và `gcp_project_number`).

#### 3.3.1 Lấy `productId` và `calculationId`

Hai giá trị này **không hard-code**. ERP tra tại thời điểm chạy, theo đúng cách luồng **GWS Flex** đã chạy production.

**Cách làm (mẫu từ GWS Flex):**

| Bước | Việc |
|:---:|:---|
| 1 | Gọi `GET /api/common/allDataSelect` — trả về nhiều nhóm dropdown, trong đó có `products[]` và `calculations[]`, mỗi phần tử dạng `{ "label": "<tên hiển thị>", "value": "<id>" }` |
| 2 | Duyệt `products[]`, tìm phần tử có `label` = tên sản phẩm GCP → lấy `value` làm `productId` |
| 3 | Duyệt `calculations[]`, tìm phần tử có `label` = **`"Phương thức tính GCP"`** → lấy `value` làm `calculationId` |
| 4 | Thiếu một trong hai → dừng, báo lỗi cấu hình, **không** gọi tiếp |

**Đối chiếu GWS Flex đang chạy:**

| | GWS Flex (đã chạy) | GCP (màn này) |
|:---|:---|:---|
| Nhãn sản phẩm | `"Google Workspace Resell"` | **Cần xác nhận** — sản phẩm tạo tay trên CM, không có seed |
| Nhãn phương thức tính | `"Phương thức tính GWS Flex"` | `"Phương thức tính GCP"` |

*(Mẫu ERP: `backend/internal/modules/fin/service/debt_generate_service.go:80-99` · client: `cmclient/endpoints.go:86-92`, `cmclient/client.go:334-356`)*

**Vì sao phải tra động:**

- `product` trên CM **chỉ có `_id` và `name`** — không có mã sản phẩm cố định (`code`/`type`), nên chỉ khớp được theo **tên hiển thị**.
- `product` **không có seed**, phải tạo tay trên CM → `_id` khác nhau giữa các môi trường (dev/SIT/prod).
- Nhãn phương thức tính thì **có seed cố định** trong `CloudAZ-CM-Backend/app/const/calculationConfig.js`, nên ổn định.

**Điều kiện tiên quyết trên CM:** phải tồn tại bản ghi `template` nối **product GCP** với **calculation GCP** (và có file template Excel của bảng đối soát). Thiếu template thì `GET /api/calculation/getSelectionOfProduct/{productId}` trả rỗng và bước gen bảng đối soát không chạy được.

> **Cách tra thủ công để lấy tên sản phẩm GCP:** gọi `GET /api/product/selection` (không cần quyền đặc biệt) → trả `[{value, label}]` → tìm dòng ứng với GCP.

#### 3.3.2 Endpoint CM (đã có sẵn, không cần CM làm mới)

> Nguồn: `CloudAZ-CM-Backend/API.md` mục 18 (GWS Data), 22 (Cost Table), 15 (Payment Request).
> **Xác thực chung:** JWT Bearer Token — header `Authorization: Bearer <token>`.

**Bước 1 — Tạo GWS Data (upload file Excel)**

| Mục | Giá trị |
|:---|:---|
| Endpoint | `POST /api/gws-data` |
| Kiểu gửi | `multipart/form-data` |
| File | Trường `file` — định dạng Excel, **giới hạn 5MB** |
| Body | `productId` · `calculationId` · `usageDate` (dạng `YYYY-MM`) |
| Xử lý phía CM | Upload file lên S3 → tạo bản ghi `document` → tạo bản ghi `gwsData` (gắn `uniqueId` theo tháng/năm) |
| Kết quả | HTTP 200, body rỗng |

**Bước 2 — Gen Bảng đối soát**

| Mục | Giá trị |
|:---|:---|
| Endpoint | `POST /api/cost-table/generate` |
| Kiểu gửi | JSON |
| Body | `calculationIds[]` (bắt buộc) · `productId` (bắt buộc) · `startDate` (bắt buộc) · `endDate` (bắt buộc) · `customers[]` |
| Xử lý phía CM | Chạy hàm tính theo `calculation.functionName` → với GCP là `calculateGcp` → render template `.xlsx` → lưu S3 |
| Kết quả | Bảng đối soát theo từng hợp đồng/khách |

**Lấy file bảng đối soát về ERP**

| Bước | Endpoint | Ghi chú |
|:---:|:---|:---|
| a | `GET /api/cost-table/all` | Lấy danh sách bảng đối soát kèm thông tin document (`fileKey` trên S3). Query: `page`, `size` |
| b | `POST /api/download` | Body `{ "fileKey": "..." }` → CM stream file từ S3 về |

> Cost Table **không có** endpoint `/presigned` hay `/download-all` riêng (khác Payment Request) — phải đi qua `POST /api/download`.

**Gen DNTT (dùng ở [Màn 2](Screen_2.md))**

| Mục | Giá trị |
|:---|:---|
| Endpoint | `POST /api/payment-request/generate` |
| Body | Cùng bộ tham số với `cost-table/generate` |
| Endpoint phụ | `GET /api/payment-request/presigned` · `GET /api/payment-request/download-all` |

#### 3.3.3 Ràng buộc & điểm cần làm rõ

| # | Nội dung | Ảnh hưởng |
|:---:|:---|:---|
| 1 | `POST /api/gws-data` bắt buộc có `productId` và `calculationId` | Tra động theo mục 3.3.1, không hard-code |
| 2 | `POST /api/cost-table/generate` **không nhận tham chiếu GWS Data** vừa tạo. CM tra ngược bằng `findOne({ productId, calculationId, usageDate })` | Bước 1 và bước 2 phải dùng **cùng** `productId` + `calculationId`, và `startDate`/`endDate` phải phủ đúng `usageDate` đã upload. Thiếu GWS Data của tháng nào → CM báo lỗi `NOT_FOUND_GWS_DATA_FOR_GCP` |
| 3 | **Upload trả về trước khi CM xử lý xong file.** Gọi generate ngay lập tức sẽ bị báo nhầm là "file GWS không hợp lệ" | Phải **chờ rồi thử lại**. GWS Flex đang dùng: chờ 3 giây trước lần 1, 2 giây trước mỗi lần sau, tối đa 3 lần *(`debt_generate_service.go:130-153`)* |
| 4 | Giới hạn file **5MB** (`express-fileupload`) | Bảng 1 ~621 dòng + Bảng 2 ~94 dòng nằm trong ngưỡng, nhưng cần kiểm khi số dòng tăng |
| 5 | `usageDate` dạng `YYYY-MM`, còn `startDate`/`endDate` là khoảng ngày | ERP phải chuyển kỳ `YYYYMM` của BigQuery sang cả hai dạng. CM lưu `usageDate` thành **đầu tháng UTC** và tra cứu đúng mốc đó |
| 6 | Tham số `customers[]` giới hạn gen cho một số khách | Để trống = gen toàn bộ. Dùng khi cần gen lại riêng vài khách |
| 7 | CM chỉ khớp hợp đồng có `status = 1`, `deleted = false` và **có `legalEntityId`** | Hợp đồng thiếu pháp nhân sẽ bị bỏ qua, không hiện trong bảng đối soát |
| 8 | `API.md` ghi `functionName` của GCP là `calculateGcp`, nhưng code thật là **`calculateGCP`** | Không ảnh hưởng ERP (ERP khớp theo `label`), nhưng đừng dựa vào `API.md` ở điểm này |

**Thứ tự chạy:** bước 1 lỗi thì **không** chạy bước 2.

---

## 4. Đặc tả chức năng

### 4.1 Chọn kỳ & truy vấn

**Vùng [A].**

| Thành phần | Hành vi |
|:---|:---|
| Ô chọn kỳ | Dạng tháng, VD `T08/2026`. Mặc định tháng gần nhất đã có invoice |
| Nút **Truy vấn** | Hiện khi kỳ **chưa có** dữ liệu trên ERP |
| Nút **Truy vấn lại** | Hiện khi kỳ **đã có** dữ liệu → đi vào luồng duyệt thay đổi (mục 4.6) |
| Dòng trạng thái | Thời điểm kéo dữ liệu gần nhất |

**Luồng "Truy vấn":**

1. Kế toán chọn kỳ, bấm **Truy vấn**.
2. Hệ thống gọi BigQuery chạy 2 query dữ liệu (mục 3.1; Gemini nằm trong query billing account) + Cloud Billing API lấy tên subaccount (mục 3.2).
3. Trong lúc chạy: hiện trạng thái đang xử lý, khóa nút để tránh bấm 2 lần.
4. Xong: lưu toàn bộ vào database (mục 7), hiển thị Bảng 1 và Bảng 2.
5. Lỗi: báo rõ nguyên nhân, **không ghi đè** dữ liệu cũ đang có.

**Kết quả trống:** kỳ chưa có số liệu trên BigQuery → hiện thông báo "Kỳ này chưa có dữ liệu", không tạo bản ghi rỗng.

### 4.2 Hiển thị Bảng 1 & Bảng 2

**Vùng [C] [E] [F].** Hai bảng nằm trên hai tab; chuyển tab không mất chỉnh sửa chưa lưu.

**Cột hiển thị:** theo đúng mục 3.1.1 và 3.1.2, thêm cột **`Khách hàng`** (kết quả gán ở mục 4.4) ở cuối mỗi bảng.

**Quy ước hiển thị số:**

| Mục | Quy ước |
|:---|:---|
| Định dạng | Phân cách hàng nghìn, 2 chữ số thập phân |
| Đơn vị | USD, theo `currency` của BigQuery |
| Số âm | Hiển thị rõ dấu âm (credit luôn âm) |
| Giá trị 0 | Hiển thị `0.00`, không để trống |

**Dòng tổng [F]:** tổng **toàn kỳ**, không phải tổng trang hiện tại — ghi nhãn rõ. Tính lại ngay khi kế toán sửa số, xóa dòng hoặc phân bổ credit.

**Phân biệt hai cột credit — bắt buộc hiển thị tách bạch:**

| Cột | Gồm những gì | Ý nghĩa |
|:---|:---|:---|
| `Promotions & others` | `PROMOTION` + `DISCOUNT` + `SUSTAINED_USAGE_DISCOUNT` | Cột Google gộp sẵn — đây là cột đưa vào file gửi CM |
| `Promotional credits` | Chỉ `PROMOTION` | Số credit khuyến mãi thật — dùng để phân bổ |

> Hai cột **không bằng nhau**. Ví dụ thật — Coderpush T08/2026: `Promotions & others` = −$15.90 nhưng `Promotional credits` thật chỉ = −$0.68. Giao diện phải làm rõ để kế toán không nhầm.

**Cột `Gemini API` (chỉ Bảng 2):** nằm ngay sau `Subtotal`. Là phần tiền **nằm trong** Subtotal.

### 4.3 Phân trang, tìm kiếm, lọc, sắp xếp

**Vùng [D] [G].**

| Chức năng | Đặc tả |
|:---|:---|
| Phân trang | Mặc định 50 dòng/trang; chọn 20 / 50 / 100 / 200. Hiện trang hiện tại, tổng số trang, tổng số dòng |
| Tìm kiếm | Bảng 1: theo Project, Project ID, Project Number. Bảng 2: theo Subaccount, Subaccount ID. Khớp một phần, không phân biệt hoa thường |
| Sắp xếp | Theo mọi cột số (List cost, Subtotal, Gemini API, Promotional credits…), tăng/giảm dần |
| Lọc nhanh | ① Có `Promotional credits` ≠ 0 ② Có `Gemini API` ≠ 0 ③ Chưa gán khách hàng ④ Ô đã sửa tay |

**Ràng buộc:** phân trang / tìm kiếm / lọc / sắp xếp **không được làm mất** chỉnh sửa chưa lưu và không làm mất các dòng đang tick chọn.

### 4.4 Chỉnh sửa số liệu & gán khách hàng

**Vùng [E].**

| Nội dung | Đặc tả |
|:---|:---|
| Ô sửa được | **Mọi ô số liệu** trên cả 2 bảng: List cost, Negotiated savings, Discounts, Promotions & others, Promotional credits, Subtotal, Gemini API |
| Gán khách | Mỗi dòng gán được **khách hàng + hợp đồng**; hoặc đánh dấu **"Tài nguyên nội bộ — không tính cước khách"** |
| Ràng buộc | **Không có.** Hệ thống không bắt số liệu phải khớp công thức gốc |
| Đánh dấu ô đã sửa | Đổi màu nền; rê chuột xem được giá trị gốc từ BigQuery |
| Khôi phục | Nút khôi phục giá trị gốc cho **từng ô** và cho **toàn bảng** |
| Lưu | Lưu bền vững; thoát ra vào lại vẫn còn |
| Tác động | Dòng tổng và cảnh báo tính lại ngay |

Số **sau khi sửa** là số dùng để sinh file Excel gửi CM — không phải số gốc BigQuery.

### 4.5 Phân bổ Credit Promotion

**Hộp thoại mở từ ô `Promotional credits` của Bảng 2.**

**Bối cảnh:** Promotion Credit phát sinh theo **billing account**, không theo project. Google chỉ ghi nhận tổng tiền credit đã cấp — thỏa thuận CloudAZ cho khách hưởng bao nhiêu chỉ CEO/Sales biết, máy không đoán được.

**Giao diện:**

```
Billing: CODERPUSH (014793-4347C1-568E28)
Chương trình: SMB Credit
Promotion Credit từ BigQuery: $4,000.00

   ┌─────────────────────────┬─────────────────────────┐
   │  Của công ty (CloudAZ)  │  Của khách              │
   │  [      2,000.00      ] │  [      2,000.00      ] │
   └─────────────────────────┴─────────────────────────┘
   Tổng: $4,000.00  ✓ khớp

   [Hủy]                                    [Lưu phân bổ]
```

**Hiển thị kèm:** tên chương trình credit lấy từ `credits.name` (SMB Credit, Mithra deal, GFS Cloud Program, Reseller Free Trial, Partner Award Letter…).

**Ba trường hợp phân bổ:**

| Cách điền | Trạng thái | `Promotions & others` | `Subtotal` |
|:---|:---|:---|:---|
| Của khách = toàn bộ, công ty = 0 | Khách hưởng 100% | **Giữ nguyên** — cột này vốn đã gồm credit | Giữ nguyên |
| Của công ty = toàn bộ, khách = 0 | CloudAZ hưởng 100% | **Trừ** toàn bộ credit ra | **Cộng** toàn bộ credit vào |
| Cả 2 ô có số | Chia một phần | **Trừ** đúng phần của CloudAZ | **Cộng** đúng phần của CloudAZ |

**Quy tắc mặc định:** cột `Promotions & others` **đã bao gồm sẵn** promotional credit, và `Subtotal` đã được trừ credit đó. Nếu credit là của khách → giữ nguyên cả hai cột. Nếu là của CloudAZ → **trừ ở cột `Promotions & others` và cộng vào cột `Subtotal`** *(xác nhận KT doanh thu 2026-09-25)*.

**Công thức** — gọi `X` = phần credit thuộc CloudAZ (ô "Của công ty"), credit trong BigQuery mang giá trị **âm**:

```
promotions_and_others_sau = promotions_and_others_gốc + X
subtotal_sau              = subtotal_gốc              − X
```

**Ví dụ** — billing có `Promotions & others` = −$4,000, `Subtotal` = $10,000, credit $4,000 là của CloudAZ (`X` = −4,000):

| | Gốc | Sau phân bổ |
|:---|---:|---:|
| Promotions & others | −4,000.00 | **0.00** |
| Subtotal | 10,000.00 | **14,000.00** |

Khách trả $14,000 thay vì $10,000 — khách không được hưởng khoản credit không phải của mình. Chia đôi ($2,000 mỗi bên) thì `Promotions & others` = −2,000 và `Subtotal` = 12,000.

**Kiểm tra:** tổng 2 ô khác số credit gốc → **cảnh báo, vẫn cho lưu**.

**Billing dùng chung nhiều khách:** hiển thị nhắc **"Billing này có nhiều khách — cần Sales/CEO xác nhận trước khi phân bổ"**.

**Lưu vết:** thời điểm, người nhập, số tiền mỗi bên.

### 4.6 Truy vấn lại & duyệt thay đổi

**Hộp thoại mở khi bấm "Truy vấn lại".**

**Bối cảnh:** Google đôi khi cập nhật số liệu sau ngày phát hành invoice. Ghi đè thẳng sẽ xóa mất mọi chỉnh sửa tay và phân bổ credit.

**Luồng:**

1. Bấm **Truy vấn lại** → hệ thống kéo số mới từ BigQuery, **chưa ghi đè**.
2. So sánh số mới với số đang lưu, hiện danh sách thay đổi.
3. Kế toán tick chọn dòng muốn nhận.
4. Bấm **Áp dụng** → chỉ ghi đè dòng đã tick. Dòng không tick giữ nguyên.

**Bảng thay đổi — mỗi dòng gồm:**

| Cột | Nội dung |
|:---|:---|
| ☐ | Ô tick chọn |
| Đối tượng | Project hoặc Billing account |
| Cột | Cột nào thay đổi |
| Đang lưu | Giá trị hiện tại trên ERP |
| Giá trị mới | Giá trị mới từ BigQuery |
| Dấu hiệu | Gắn nhãn **"Đã sửa tay"** nếu giá trị đang lưu do kế toán chỉnh |
| Loại | `Thay đổi` / `Mới` / `Không còn` |

**Quy tắc:**

| Tình huống | Xử lý |
|:---|:---|
| Dòng **Mới** (project/billing chưa từng có) | Mặc định **tick sẵn** |
| Dòng **Thay đổi** có nhãn "Đã sửa tay" | Mặc định **không tick** |
| Dòng **Thay đổi** thường | Mặc định **tick sẵn** |
| Dòng **Không còn** trên BigQuery | Hiện để kế toán biết, mặc định không tick |
| Không có thay đổi nào | Báo "Dữ liệu không đổi", đóng hộp thoại |
| Hủy giữa chừng | Không thay đổi gì trong database |

Có nút **chọn tất cả / bỏ chọn tất cả**.

### 4.7 Chọn nhiều dòng & xóa

**Vùng [D] [E].**

| Nội dung | Đặc tả |
|:---|:---|
| Ô tick | Cột đầu mỗi dòng; ô tick ở dòng tiêu đề chọn/bỏ chọn toàn bộ dòng đang hiển thị |
| Chọn xuyên trang | Sang trang khác tick tiếp, dòng đã chọn ở trang trước vẫn giữ |
| Thanh thao tác | Hiện số dòng đang chọn + nút **Xóa các dòng đã chọn** |
| Xác nhận | Hộp xác nhận ghi rõ **số dòng** và **tổng tiền** sẽ bị xóa |
| Phạm vi | Chỉ xóa dữ liệu kỳ trên ERP — **không đụng BigQuery** |
| Tác động | Dòng đã xóa không xuất hiện trong file Excel gửi CM |
| Hoàn tác | Nút **Hoàn tác** ngay sau khi xóa; hoặc truy vấn lại thì dòng đã xóa quay lại dưới nhãn "Mới" |
| Lưu vết | Thời điểm, người xóa, những dòng nào |

### 4.8 Xem trước & tải Excel

**Hộp thoại mở từ nút "Xem trước Excel" ở vùng [A].**

| Nội dung | Đặc tả |
|:---|:---|
| Nội dung preview | Đúng cấu trúc file sẽ gửi CM — 2 sheet theo mục 3.3 |
| Số liệu | Số **sau khi kế toán đã sửa, đã phân bổ credit, đã xóa dòng** |
| Tải về | Nút tải file `.xlsx` giống hệt file sẽ gửi CM |
| Tác động | **Không** tạo GWS Data, **không** gửi gì sang CM |
| Số lần | Không giới hạn |

### 4.9 Tạo bảng đối soát

**Nút ở vùng [A].**

**Luồng:**

1. Bấm **Tạo bảng đối soát**.
2. Tra `productId` / `calculationId` của GCP trên CM (mục 3.3.1). Không tìm thấy → dừng, báo lỗi cấu hình.
3. Sinh file Excel 2 sheet từ dữ liệu hiện tại, đúng thứ tự sheet và kiểu cột (mục 3.3).
4. Gọi CM **tạo GWS Data** (mục 3.3.2 bước 1).
5. **Chờ CM xử lý xong file**, rồi gọi CM **tạo Bảng đối soát** (mục 3.3.2 bước 2). Lỗi thì chờ và thử lại — tối đa 3 lần (mục 3.3.3 ý 3).
6. Lấy file bảng đối soát về ERP (`GET /api/cost-table/all` → `POST /api/download`).
7. Điều hướng sang **[Màn 2](Screen_2.md)**.

**Yêu cầu:**

| Nội dung | Đặc tả |
|:---|:---|
| Hiển thị tiến trình | Từng bước, nêu rõ đang ở bước nào |
| Lỗi | Báo rõ bước nào lỗi và nguyên nhân; dữ liệu trên ERP giữ nguyên; cho thử lại |
| Bước 1 lỗi | **Không** chạy bước 2 |
| Tạo lại | Không giới hạn số lần — kế toán quay lại sửa rồi tạo lại, CM tạo bản mới |
| Không khóa | Không khóa kỳ sau khi tạo |
| Lưu vết | Thời điểm, người bấm, kết quả |

---

## 5. Quy tắc nghiệp vụ

| Mã | Quy tắc |
|:---|:---|
| **QT-01** | Mọi truy vấn BigQuery bắt buộc lọc `invoice.month` + `cost_type = 'regular'` |
| **QT-02** | Credit `RESELLER_MARGIN` không bao giờ được tính vào Subtotal |
| **QT-03** | `Promotions & others` ≠ `Promotional credits` — phải hiển thị thành 2 cột riêng |
| **QT-04** | `Promotions & others` đã bao gồm sẵn promotional credit. Credit của khách → giữ nguyên cả 2 cột. Credit của CloudAZ → **trừ ở `Promotions & others`, cộng vào `Subtotal`** (phần chia đôi thì làm theo đúng tỷ lệ) |
| **QT-05** | Promotion Credit phát sinh theo **billing account**, không theo project |
| **QT-06** | Billing dùng chung có Promotion Credit → cần Sales/CEO xác nhận phân bổ |
| **QT-07** | Gemini API phát sinh theo **billing account**; nằm **trong** Subtotal; không được áp chiết khấu |
| **QT-08** | Billing dùng chung có Gemini → dồn toàn bộ vào **1 khách** do Sales chỉ định, không chia nhỏ |
| **QT-09** | **Không bỏ qua khoản Gemini nào** — lấy hết dù nhỏ đến đâu *(user chốt 2026-09-25; thay đề xuất ngưỡng trong BRD v2.1)* |
| **QT-10** | Công thức CM áp: `discount_amount = (Subtotal − Gemini) × discount%` |
| **QT-11** | Cột `Promotional credits` chỉ tồn tại trên ERP, **không** đưa vào file Excel gửi CM |
| **QT-12** | Mọi kiểm tra trên màn này là **cảnh báo**, không chặn thao tác của kế toán |
| **QT-13** | Truy vấn lại không được tự ghi đè — phải qua bước kế toán duyệt từng dòng |
| **QT-14** | Không khóa kỳ, không khóa bước — kế toán quay lại sửa bất kỳ lúc nào |

---

## 6. Cảnh báo & xử lý lỗi

### 6.1 Cảnh báo nghiệp vụ (vùng [B] — không chặn)

| Cảnh báo | Điều kiện | Nội dung |
|:---|:---|:---|
| Lệch tổng 2 bảng | Tổng `Subtotal` Bảng 1 ≠ Bảng 2 quá ngưỡng cấu hình | Nêu số tiền lệch và tỷ lệ %, cho mở xem chi tiết |
| Chưa gán khách | Có dòng chưa gán khách hàng | Nêu số dòng, bấm vào lọc ra đúng các dòng đó |
| Credit chưa phân bổ | Có billing phát sinh `Promotional credits` ≠ 0 mà chưa phân bổ | Nêu số billing, bấm vào lọc ra |
| Tổng phân bổ lệch | Tổng 2 ô phân bổ ≠ credit gốc | Nêu rõ tại dòng đó |
| Billing chung có credit/Gemini | Billing có ≥2 khách | Nhắc cần Sales/CEO xác nhận |

### 6.2 Lỗi kỹ thuật

| Lỗi | Xử lý |
|:---|:---|
| Mất kết nối BigQuery | Báo lỗi kết nối, giữ nguyên dữ liệu cũ, cho thử lại |
| Thiếu quyền truy cập bảng | Báo rõ là lỗi phân quyền, hướng dẫn liên hệ quản trị |
| Truy vấn quá thời gian | Báo hết thời gian chờ, cho thử lại |
| Kỳ chưa có dữ liệu | Thông báo "Kỳ này chưa có dữ liệu", không tạo bản ghi rỗng |
| Cloud Billing API lỗi | Vẫn hiển thị dữ liệu, dùng `billing_account_id` thay tên, ghi chú rõ |
| Không tra được `productId` / `calculationId` GCP | Báo **lỗi cấu hình phía CM**, nêu rõ thiếu sản phẩm hay thiếu phương thức tính; không gọi tiếp |
| CM lỗi ở bước tạo GWS Data | Báo lỗi, **không** chạy bước tạo bảng đối soát, cho thử lại |
| CM báo file Excel không hợp lệ | Thường do sai kiểu dữ liệu (`Project number` phải là số, `Subaccount ID` phải là chuỗi) hoặc có dòng để trống — báo rõ để kế toán sửa dòng lỗi |
| CM báo thiếu GWS Data của tháng | `startDate`/`endDate` không phủ đúng `usageDate` đã upload — kiểm tra lại việc chuyển đổi kỳ |
| CM lỗi ở bước tạo bảng đối soát | Đã thử lại đủ 3 lần vẫn lỗi → báo lỗi, giữ GWS Data đã tạo, cho thử lại riêng bước này |

---

## 7. Lưu trữ & phi chức năng

### 7.1 Yêu cầu lưu trữ

> Chỉ nêu **cần lưu gì**. Thiết kế bảng, quan hệ, đánh chỉ mục do đội triển khai tự quyết sao cho hợp lý.

| Cần lưu | Yêu cầu |
|:---|:---|
| Dữ liệu Bảng 1, Bảng 2, Gemini theo billing | Lưu **toàn bộ** kết quả truy vấn BigQuery theo từng kỳ |
| Giá trị gốc từ BigQuery | Giữ lại để kế toán xem lại và khôi phục sau khi đã sửa tay |
| Giá trị sau chỉnh sửa | Là số dùng để sinh file Excel gửi CM |
| Gán khách hàng / hợp đồng | Theo từng dòng project hoặc billing account |
| Phân bổ Promotion Credit | Số của CloudAZ và số của khách, theo từng billing account |
| Dòng đã xóa | Đủ để hoàn tác |
| Lưu vết thao tác | Sửa số, phân bổ credit, xóa dòng, tạo bảng đối soát: thời điểm, người thao tác, giá trị cũ → mới |
| Cấu hình | Ngưỡng cảnh báo lệch |

Dữ liệu phải **bền vững** — tắt trình duyệt mở lại vẫn còn nguyên.

### 7.2 Phi chức năng

| Mục | Yêu cầu |
|:---|:---|
| Khối lượng | Bảng 1 ~621 dòng, Bảng 2 ~94 dòng mỗi kỳ; thao tác phải mượt, không giật |
| Đồng thời | Một kế toán tại một thời điểm cho mỗi kỳ |
| Phân quyền | Chỉ kế toán doanh thu truy cập; quyền phân bổ credit — **cần xác nhận** (mục 9) |
| Ngôn ngữ | Giao diện tiếng Việt; tên cột Excel giữ nguyên tiếng Anh theo chuẩn CM |

---

## 8. Điều kiện nghiệm thu

| # | Tiêu chí |
|:---:|:---|
| 1 | Kế toán chạy trọn một kỳ thật mà **không mở Google Cloud Console lần nào** |
| 2 | Số liệu trên ERP đối chiếu khớp từng dòng với file kế toán tự xuất từ Console cùng kỳ |
| 3 | Cột `Promotional credits` và `Gemini API` hiển thị đúng trên dữ liệu thật |
| 4 | Sửa số → thoát → vào lại → số đã sửa còn nguyên |
| 5 | Sửa tay rồi truy vấn lại → bỏ tick thì số sửa tay không bị ghi đè |
| 6 | Xử lý được đủ 3 trường hợp phân bổ credit trên một kỳ thật |
| 7 | Chọn nhiều dòng xuyên trang → xóa một lần → đúng số dòng biến mất, tổng tính lại đúng |
| 8 | File Excel tải về mở được, đúng 2 sheet, đúng tên cột, số khớp bảng trên ERP |
| 9 | Chạy hết luồng thật: ERP → CM tạo GWS Data → Bảng đối soát → lưu về ERP |
| 10 | Bảng đối soát CM gen ra có Gemini tách đúng, công thức `(Subtotal − Gemini) × discount%` áp chuẩn |
| 11 | Không bước nào bị khóa — quay lại sửa và tạo lại bảng đối soát bất kỳ lúc nào |

---

## 9. Cần xác nhận

| # | Câu hỏi | Ảnh hưởng tới |
|:---:|:---|:---|
| 1 | Ngưỡng chênh lệch Bảng 1 vs Bảng 2 bao nhiêu thì cảnh báo? (T06/2026 lệch $5.899 ~ 2%) | Cảnh báo mục 6.1 |
| ~~2~~ | ~~Ngưỡng bỏ qua Gemini chốt $0.05 hay $0.1?~~ → **ĐÃ CHỐT 2026-09-25: không bỏ qua, lấy hết** | QT-09 |
| 3 | Ai được quyền phân bổ Credit — kế toán tự quyết hay bắt buộc CEO/Sales duyệt? | Phân quyền mục 4.5, 7.2 |
| 4 | Có khách nào đang dùng chung billing mà có Gemini không? Hiện gán cho ai? | QT-08 |
| 5 | **Tên sản phẩm GCP trên CM là gì?** (GWS Flex dùng `"Google Workspace Resell"`). Cách tra: `GET /api/product/selection` | Mục 3.3.1 — cần để khớp ra `productId` |
| 6 | Trên CM đã có bản ghi `template` nối product GCP ↔ calculation GCP chưa? Đã có file template Excel bảng đối soát GCP chưa? | Mục 3.3.1 — thiếu thì không gen được bảng đối soát |
| 7 | ERP lấy JWT của CM bằng cách nào (tài khoản dịch vụ riêng hay mượn phiên kế toán)? | Xác thực mục 3.3.2 |

---

## 10. Truy vết User Story

| US | Nội dung | Mục đặc tả |
|:---|:---|:---|
| US-1.1 | Chọn kỳ & truy vấn dữ liệu | 3.1, 3.2, 4.1 |
| US-1.2 | Hiển thị Bảng 1 + Bảng 2 | 3.1.1, 3.1.2, 3.1.3, 4.2 |
| US-1.3 | Phân trang & tìm kiếm | 4.3 |
| US-1.4 | Chỉnh sửa số liệu | 4.4 |
| US-1.5 | Phân bổ Credit Promotion | 4.5 |
| US-1.6 | Truy vấn lại & duyệt thay đổi | 4.6 |
| US-1.7 | Chọn nhiều dòng & xóa | 4.7 |
| US-1.8 | Preview & tải Excel mẫu | 4.8 |
| US-1.9 | Tạo bảng đối soát | 3.3, 4.9 |
