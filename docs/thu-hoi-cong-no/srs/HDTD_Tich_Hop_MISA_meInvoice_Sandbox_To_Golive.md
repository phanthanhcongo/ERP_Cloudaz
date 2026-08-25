# Hướng dẫn Kỹ thuật Tích hợp MISA meInvoice (Từ Sandbox Dev/Test đến Go-Live Production)

> **Mục đích:** Tài liệu hướng dẫn chi tiết từng bước cho Lập trình viên Backend, DevOps và Kế toán Doanh thu trong việc thiết lập, phát triển, kiểm thử (Môi trường Sandbox) và chuyển đổi chính thức (Môi trường Go-Live Production) tích hợp giữa ERP CloudAZ và Phần mềm Hóa đơn điện tử MISA meInvoice (Đáp ứng User Story DC-01).

---

## 1. Tổng quan Kiến trúc Tích hợp MISA API

```
+-------------------+                      +-----------------------------------+
|                   |  1. POST /auth/token |                                   |
|                   | -------------------> |                                   |
|                   |  2. Push Invoice     |                                   |
|                   | -------------------> |    MISA meInvoice API             |
|   ERP CloudAZ     |                      |  - Sandbox: testapi.meinvoice.vn  |
|   (Backend)       |  3. Poll/Get Status  |  - Prod:    api.meinvoice.vn      |
|                   | -------------------> |                                   |
|                   |  4. Download PDF/XML |                                   |
|                   | <------------------- |                                   |
+-------------------+                      +-----------------------------------+
```

- **Môi trường Sandbox (Test):** `https://testapi.meinvoice.vn/api/v3`
- **Môi trường Production (Go-Live):** `https://api.meinvoice.vn/api/v3`
- **Định dạng dữ liệu:** RESTful API, Payload `JSON`, Authentication bằng JWT Token.

---

## 2. GIAI ĐOẠN 1: Thiết lập & Kiểm thử trên Môi trường Dev/Sandbox (Miễn phí)

### 2.1. Đăng ký Tài khoản Sandbox & Lấy Thông số Test
1. **Trang web quản trị Sandbox:** [https://test.meinvoice.vn](https://test.meinvoice.vn)
2. **Cổng thông tin Developer MISA:** Truy cập [https://developer.misa.vn](https://developer.misa.vn) hoặc gửi email đến `integration@misa.com.vn` yêu cầu cấp AppID chạy thử nghiệm.
3. **Thông số Test mặc định do MISA cung cấp:**
   - **AppID (Sandbox):** `d3b07384-d113-42a4-a316-demo-sandbox-key` *(Hoặc AppID riêng được MISA gửi qua email)*
   - **Mã số thuế Test:** `0101243150` *(MST demo hệ thống)*
   - **Username / Password Test:** Tài khoản test đăng nhập trang `test.meinvoice.vn`.

---

### 2.2. Cấu hình Môi trường trong ERP CloudAZ (`.env.development`)

Tạo file biến môi trường trong dự án ERP:

```env
# Cấu hình MISA meInvoice - Dev/Sandbox Environment
MISA_API_BASE_URL=https://testapi.meinvoice.vn/api/v3
MISA_APP_ID=d3b07384-d113-42a4-a316-demo-sandbox-key
MISA_TAX_CODE=0101243150
MISA_USERNAME=account_test@cloudaz.vn
MISA_PASSWORD=TestPassword123@
MISA_IS_SANDBOX=true
```

---

### 2.3. Quy trình Lập trình & Gọi các API Nghiệp vụ chính

#### Step 1: Gọi API Lấy Access Token (`POST /auth/token`)
- **Endpoint:** `POST https://testapi.meinvoice.vn/api/v3/auth/token`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "appid": "d3b07384-d113-42a4-a316-demo-sandbox-key",
    "taxcode": "0101243150",
    "username": "account_test@cloudaz.vn",
    "password": "TestPassword123@"
  }
  ```
- **Response thành công (200 OK):**
  ```json
  {
    "Success": true,
    "Data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "ErrorCode": null
  }
  ```
> 💡 **Lưu ý Lập trình:** Token có hiệu lực 15 ngày. Cần cache token vào Redis/Memory với TTL ~14 ngày. Khi nhận lỗi `TokenExpiredCode`, tự động thực hiện lấy token mới.

---

#### Step 2: Đẩy dữ liệu Bảng cước xuất Hóa đơn nháp sang MISA (`POST /itg/invoicepublished/save`)
ERP kết xuất bảng cước đã chốt (GCP, GWS, AWS, GMP...) và gửi dữ liệu hóa đơn nháp sang MISA:

- **Endpoint:** `POST https://testapi.meinvoice.vn/api/v3/itg/invoicepublished/save`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <ACCESS_TOKEN>`
  - `CompanyTaxCode: 0101243150`
- **Request Body:**
  ```json
  {
    "RefID": "ERP_INV_202608_GCP_1001",
    "InvDate": "2026-08-25",
    "BuyerLegalName": "Công ty TNHH Khách hàng Thử nghiệm",
    "BuyerTaxCode": "0312345678",
    "BuyerAddress": "Tầng 5, Tòa nhà ABC, Cầu Giấy, Hà Nội",
    "BuyerEmail": "billing@customer.com",
    "PaymentMethod": "CK",
    "Items": [
      {
        "ItemName": "Dịch vụ Google Cloud Platform (GCP) - Tháng 08/2026",
        "UnitName": "Gói",
        "Quantity": 1,
        "UnitPrice": 50000000,
        "Amount": 50000000,
        "VATRate": 10,
        "VATAmount": 5000000
      }
    ],
    "TotalAmount": 50000000,
    "TotalVATAmount": 5000000,
    "TotalAmountWithVAT": 55000000
  }
  ```

---

#### Step 3: Thao tác Ký số Thử nghiệm trên Trang Web Sandbox
1. Dev / Kế toán đăng nhập vào `https://test.meinvoice.vn`.
2. Vào danh sách **Hóa đơn chưa phát hành** (Hóa đơn nháp do ERP vừa đẩy sang).
3. Sử dụng Chữ ký số HSM Test hoặc Công cụ ký số `MISA_SignedService` (môi trường test) để bấm phát hành hóa đơn.

---

#### Step 4: Lấy Số Hóa đơn điện tử & Trạng thái về ERP (`POST /invoicepublished/invoice-status/refid`)
Sau khi hóa đơn đã ký phát hành trên MISA, ERP tiến hành đồng bộ số hóa đơn:

- **Endpoint:** `POST https://testapi.meinvoice.vn/api/v3/invoicepublished/invoice-status/refid`
- **Headers:**
  - `Authorization: Bearer <ACCESS_TOKEN>`
  - `CompanyTaxCode: 0101243150`
- **Request Body:** `["ERP_INV_202608_GCP_1001"]`
- **Response trả về:**
  ```json
  {
    "Success": true,
    "Data": [
      {
        "RefID": "ERP_INV_202608_GCP_1001",
        "TransactionID": "3W89AB12_",
        "InvoiceNo": "0000123",
        "InvoiceTemplate": "1/001",
        "InvoiceSeries": "C26MVT",
        "PublishStatus": 1,
        "PublishDate": "2026-08-25T10:15:00"
      }
    ]
  }
  ```
> 📌 **Cập nhật Database ERP:** Cập nhật cột `invoice_no` = `"0000123"`, `transaction_id` = `"3W89AB12_"`, `status` = `"PUBLISHED"`.

---

#### Step 5: Tải File Hóa đơn PDF / XML về ERP (`POST /itg/invoicepublished/downloadinvoice`)
ERP gọi API lấy file hóa đơn bản PDF để đính kèm vào Bộ chứng từ Đề nghị thanh toán (ĐNTT):

- **Endpoint:** `POST https://testapi.meinvoice.vn/api/v3/itg/invoicepublished/downloadinvoice?downloadDataType=PDF`
- **Headers:**
  - `Authorization: Bearer <ACCESS_TOKEN>`
  - `CompanyTaxCode: 0101243150`
- **Request Body:** `["3W89AB12_"]`
- **Response:** Dữ liệu chuỗi **Base64** của file PDF. ERP tiến hành decode base64 và lưu file PDF vào Folder quản lý hóa đơn của khách hàng theo tháng.

---

## 3. GIAI ĐOẠN 2: Chuẩn bị & Checklist trước khi Go-Live

Trước khi chuyển môi trường chạy thật, các bộ phận cần hoàn tất bảng công việc sau:

| STT | Hạng mục công việc | Bộ phận phụ trách | Trạng thái cần đạt |
|---|---|---|---|
| 1 | **Mua License API MISA** | Kế toán / Mua hàng | Hợp đồng phần mềm MISA meInvoice của công ty đã bật gói **Tích hợp phần mềm ngoài (API)**. |
| 2 | **Đăng ký AppID Production** | Trưởng nhóm IT / Dev | Gửi email tới `integration@misa.com.vn` (kèm Tên công ty, MST) để nhận **`AppID Production`** chính thức. |
| 3 | **Cấu hình Chữ ký số (USB Token / HSM)** | Kế toán thuế | Chữ ký số doanh nghiệp đã được kết nối và xác minh trên website [https://meinvoice.vn](https://meinvoice.vn). |
| 4 | **Khởi tạo Mẫu Hóa đơn & Ký hiệu** | Kế toán thuế | Mẫu hóa đơn VAT đã nộp thông báo phát hành với Cơ quan Thuế và khởi tạo trên MISA (VD: Mẫu `1/001`, Ký hiệu `C26MVT`). |
| 5 | **Kiểm thử Tải trọng & Timeout** | Lập trình viên Backend | Đảm bảo luồng retry khi nghẽn mạng MISA, timeout tối đa 10s, có log lỗi chi tiết. |

---

## 4. GIAI ĐOẠN 3: Triển khai Go-Live (Chuyển sang Production)

### 4.1. Cấu hình Môi trường Production (`.env.production`)

Thay thế toàn bộ thông số Test bằng thông số thật của doanh nghiệp:

```env
# Cấu hình MISA meInvoice - Production Environment
MISA_API_BASE_URL=https://api.meinvoice.vn/api/v3
MISA_APP_ID=<APP_ID_PRODUCTION_DO_MISA_CAP>
MISA_TAX_CODE=<MA_SO_THUE_CLOUDAZ_THAT>
MISA_USERNAME=<TAI_KHOAN_MISA_KETOAN_THAT>
MISA_PASSWORD=<MAT_KHAU_MISA_THAT>
MISA_IS_SANDBOX=false
```

---

### 4.2. Quy trình Vận hành Chạy thật (Production Flow)
1. **Smoke Test Xác thực:** Chạy script thử nghiệm gọi API `POST /auth/token` trên Server Production để đảm bảo Firewall/Network không chặn và AppID/Password chính xác.
2. **Lấy danh sách Mẫu Hóa đơn thật (`POST /itg/invoicepublished/gettemplates`):** ERP kiểm tra mã mẫu hóa đơn (`InvoiceTemplate`) và ký hiệu (`InvoiceSeries`) đang có hiệu lực trên MISA.
3. **Thực hiện Xuất Hóa đơn thật đầu tiên (Phát hành thử 01 đơn cước):**
   - ERP đẩy 01 bản cước thật lên MISA dưới dạng **Hóa đơn Nháp**.
   - Kế toán kiểm tra thông tin tiền cước, thuế GTGT trên `meinvoice.vn`.
   - Kế toán bấm **Ký số thật**.
   - ERP tự động lấy số hóa đơn điện tử thật về hệ thống và lưu trữ file PDF.

---

## 5. Bảng Tra cứu Lỗi Thường gặp (Troubleshooting Matrix)

| Mã lỗi / Symptom | Nguyên nhân | Hướng xử lý / Fix |
|---|---|---|
| `ErrorCode: TokenExpiredCode` | JWT Token hết hạn | Gọi API `/auth/token` lấy lại token mới và cập nhật Cache. |
| `ErrorCode: InvalidAppID` | AppID không hợp lệ hoặc sai môi trường | Kiểm tra không dùng nhầm AppID Sandbox trên URL Production hoặc ngược lại. |
| `ErrorCode: TaxCodeNotMatch` | Mã số thuế trong Header `CompanyTaxCode` không trùng với MST tài khoản | Đảm bảo Header `CompanyTaxCode` truyền đúng MST của doanh nghiệp. |
| `PublishStatus: 0` | Hóa đơn mới ở dạng nháp, chưa ký số | Kế toán cần vào giao diện `meinvoice.vn` để thực hiện Ký số. |
| `HTTP 403 Forbidden` | Tài khoản MISA chưa mua gói dịch vụ API | Liên hệ MISA kinh doanh kiểm tra xem hợp đồng đã kích hoạt tính năng tích hợp OpenAPI chưa. |
