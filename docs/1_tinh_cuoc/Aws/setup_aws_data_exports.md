# Hướng dẫn cấu hình Export dữ liệu Billing AWS sang S3 (CUR 2.0 & Billing Conductor)

Tài liệu này hướng dẫn chi tiết từng bước (Step-by-step) để cấu hình tự động xuất dữ liệu hóa đơn/cước phí chi tiết của AWS (dành cho Doanh nghiệp & Reseller) về Amazon S3 dưới dạng **Cost and Usage Report (CUR) 2.0**.

---

## Phần 1: Tạo S3 Bucket và cấu hình Permission (Bể chứa dữ liệu)

Trước tiên, bạn cần chuẩn bị một S3 Bucket đóng vai trò là "điểm tập kết" cho các file báo cáo từ AWS Billing đổ về.

### Bước 1.1: Tạo S3 Bucket
1.  Đăng nhập vào [AWS S3 Console](https://s3.console.aws.amazon.com/).
2.  Nhấp **Create bucket**.
3.  Nhập tên bucket (ví dụ: `cloudaz-aws-billing-warehouse`).
4.  Chọn **AWS Region** (Khuyến nghị chọn `us-east-1` hoặc region gần với hạ tầng ERP của bạn).
5.  Để các tùy chọn khác ở mặc định và nhấp **Create bucket**.

### Bước 1.2: Cấu hình S3 Bucket Policy
Để dịch vụ AWS Data Exports có quyền ghi file báo cáo vào bucket của bạn, bạn cần gán Bucket Policy:
1.  Mở bucket `cloudaz-aws-billing-warehouse` vừa tạo.
2.  Chọn tab **Permissions** > Tìm đến mục **Bucket policy** > Nhấp **Edit**.
3.  Copy đoạn JSON policy sau và paste vào (thay thế `{your-bucket-name}` thành `cloudaz-aws-billing-warehouse` và `{payer-account-id}` thành AWS Account ID của tài khoản Master/Payer của bạn):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "EnableAWSDataExportsToWriteToS3",
            "Effect": "Allow",
            "Principal": {
                "Service": [
                    "bcm-data-exports.amazonaws.com"
                ]
            },
            "Action": [
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::{your-bucket-name}/*",
            "Condition": {
                "ArnLike": {
                    "aws:SourceArn": "arn:aws:bcm-data-exports:us-east-1:{payer-account-id}:export/*"
                },
                "StringEquals": {
                    "aws:SourceAccount": "{payer-account-id}"
                }
            }
        }
    ]
}
```
4.  Nhấp **Save changes**.

---

## Phần 2: Cấu hình Standard CUR 2.0 Export (Dành cho tài khoản tổng/Master)

Đây là bước thiết lập để AWS xuất dữ liệu cước phí gốc (AWS List Price) của toàn bộ Organization sang S3.

1.  Đăng nhập vào [AWS Billing and Cost Management Console](https://console.aws.amazon.com/costmanagement/home) bằng tài khoản Management Account.
2.  Tại menu bên trái, chọn **Data Exports**.
3.  Nhấp **Create export**.
4.  Điền thông tin cấu hình:
    *   **Export name:** Ví dụ: `aws_billing_standard_cur_v2`.
    *   **Export type:** Chọn **Standard data export**.
    *   **Data table content:** Chọn **CUR 2.0** (Dữ liệu cước phí thế hệ mới có cấu trúc cột cố định, tránh lỗi break schema như CUR 1.0).
5.  Cấu hình dữ liệu chi tiết:
    *   **Resource IDs:** Tích chọn *Include resource IDs* (để lấy chi tiết ID tài nguyên sử dụng, giúp phân tách chi tiết cước).
    *   **Split cost allocation data:** Có thể bật nếu muốn phân tách cước phí chi tiết của Container (EKS/ECS) về từng Namespace/Pod.
6.  Cấu hình Delivery (Tần suất & Định dạng):
    *   **Time granularity:** Chọn **Daily** (Hàng ngày) hoặc Hourly (Hàng giờ).
    *   **Format:** Chọn **Parquet** (Tối ưu để query bằng Athena) hoặc **Gzip/CSV** (Dễ đọc trực tiếp bằng script code).
    *   **File versioning:** Chọn *Overwrite existing file* (Ghi đè file cũ để tiết kiệm dung lượng) hoặc *Create new file* (Tạo file mới mỗi lần xuất).
7.  Chọn đích đến **S3 Bucket**:
    *   Nhập S3 bucket URI vừa tạo ở Phần 1: `s3://cloudaz-aws-billing-warehouse`.
    *   **S3 path prefix:** Điền thư mục con (ví dụ: `standard-cur/`).
8.  Nhấp **Create** để hoàn tất. AWS sẽ bắt đầu đổ dữ liệu vào S3 trong vòng 24 giờ.

---

## Phần 3: Phương án Triển khai Hướng 2 (Khuyên dùng cho Reseller)
### Centralized S3 Data Lake + ERP Billing Calculator Engine

Giải pháp này tập trung toàn bộ dữ liệu cước thô từ AWS về S3, sau đó sử dụng **Amazon Athena** để ERP truy vấn và tự áp dụng công thức tính toán động (chiết khấu, thuế nhà thầu FCT, xử lý credit/commitment) lưu trong Cơ sở dữ liệu của ERP.

```
                  ┌──────────────────────────────────────────────┐
                  │            AWS ORGANIZATIONS (ROOT)          │
                  └──────────────────────┬───────────────────────┘
                                         │ (Standard CUR 2.0 Export)
                                         ▼
                              ┌─────────────────────┐
                              │  S3 BILLING BUCKET  │
                              └──────────┬──────────┘
                                         │
                                         ▼
                              ┌─────────────────────┐
                              │    AWS GLUE /       │
                              │    ATHENA ENGINE    │
                              └──────────┬──────────┘
                                         │ (SQL Query via SDK)
                                         ▼
   ┌────────────────────────────────────────────────────────────────────────┐
   │                            ERP CLOUDAZ SYSTEM                          │
   │                                                                        │
   │   ┌────────────────┐      ┌─────────────────┐      ┌───────────────┐   │
   │   │  ERP DB: Maps  │ ───> │ ERP Calculation │ <─── │ ERP DB: Rules │   │
   │   │ (Account ─> CL)│      │     Engine      │      │  & Contracts  │   │
   │   └────────────────┘      └────────┬────────┘      └───────────────┘   │
   │                                    │                                   │
   │                                    ▼                                   │
   │                             [Hóa đơn đối soát]                         │
   └────────────────────────────────────────────────────────────────────────┘
```

---

### Bước 1: Thu thập Dữ liệu Cước Thô tự động (Ingestion)
1. Cấu hình **Standard CUR 2.0 Export** từ tài khoản Management Account của AWS Organization về S3 bucket như hướng dẫn ở **Phần 1** & **Phần 2**.
2. Thiết lập tần suất xuất dữ liệu hàng ngày (Daily) dưới định dạng **Parquet** (khuyên dùng để truy vấn nhanh và tiết kiệm dung lượng quét).

---

### Bước 2: Thiết lập Schema và Query Engine (Amazon Athena)
Để ERP có thể truy vấn dữ liệu từ S3 bằng SQL, ta thiết lập Amazon Athena:
1.  **Cấu hình AWS Glue Crawler:** Tạo một Crawler trên AWS Glue trỏ tới đường dẫn S3 chứa file CUR 2.0. Crawler này sẽ chạy tự động hàng ngày hoặc hàng tuần để tự động quét cấu trúc và cập nhật danh mục bảng (Metadata Catalog) trên Athena.
2.  *Hoặc* **Tạo bảng thủ công (DDL):** Bạn có thể chạy trực tiếp câu lệnh `CREATE EXTERNAL TABLE` trên console Athena trỏ tới thư mục S3 chứa file Parquet (AWS cung cấp sẵn file DDL trong thư mục export khi xuất báo cáo thành công).

---

### Bước 3: Thiết lập Cơ sở dữ liệu ERP (ERP Metadata Mapping)
Để ERP có thể tính toán cước động, Database của ERP cần lưu trữ các bảng ánh xạ và quy tắc:
1.  **Bảng Ánh xạ tài khoản (`aws_accounts_map`):**
    *   `aws_account_id` (PK): ID tài khoản con AWS (12 chữ số).
    *   `customer_id`: ID khách hàng tương ứng trong ERP.
    *   `contract_id`: ID hợp đồng hiện tại đang áp dụng.
2.  **Bảng Cấu hình Hợp đồng (`customer_contracts`):**
    *   `contract_id` (PK)
    *   `discount_rate`: Tỉ lệ chiết khấu riêng cho khách hàng (ví dụ: `0.05` tức là 5%).
    *   `fct_tax_rate`: Tỉ lệ thuế nhà thầu FCT phải cộng thêm (ví dụ: `0.05` cho 5%).
    *   `vat_rate`: Tỉ lệ thuế VAT (ví dụ: `0.08` hoặc `0.10`).
    *   `exclude_discount_services`: Danh sách dịch vụ không áp dụng chiết khấu (ví dụ: `['Amazon Registrar', 'AWS Marketplace']`).
    *   `allow_credit_sharing`: Cho phép khách hàng hưởng credit promotion từ hãng hay không (`true`/`false`).

---

### Bước 4: Quy trình Tính toán cước định kỳ tại ERP (Billing Calculator Workflow)
Hàng tháng (ví dụ từ ngày 3 đến ngày 5, khi AWS đã chốt bill chính thức của tháng trước):

1.  **Truy xuất cước thô từ Athena:**
    ERP Backend gọi API Athena để chạy câu lệnh SQL gom cước của tháng trước theo từng Account:
    ```sql
    SELECT 
        line_item_usage_account_id,
        line_item_product_code,
        line_item_line_item_type,
        SUM(line_item_unblended_cost) as total_unblended_cost,
        SUM(CAST(discount AS double)) as total_aws_discount -- Nếu có discount từ chương trình hãng
    FROM "aws_billing_db"."cur_table"
    WHERE 
        year = '2026' AND month = '08'
    GROUP BY 
        line_item_usage_account_id, 
        line_item_product_code, 
        line_item_line_item_type;
    ```

2.  **Xử lý Logic tại Backend ERP:**
    Backend duyệt qua kết quả truy vấn và áp dụng logic kinh doanh:
    *   **Lọc loại trừ:** Kiểm tra `line_item_product_code`. Nếu nằm trong danh sách `exclude_discount_services` (ví dụ: cước mua domain từ Registrar hoặc ứng dụng bên thứ 3 từ Marketplace), cước này sẽ không được nhân chiết khấu của hợp đồng.
    *   **Xử lý Credit/Promotion:** Kiểm tra dòng có `line_item_line_item_type = 'Credit'`. Nếu hợp đồng của khách không cho phép hưởng credit (`allow_credit_sharing = false`), ERP sẽ tự động bỏ qua dòng credit này, tính cước của khách theo giá gốc trước khi trừ credit.
    *   **Áp dụng Chiết khấu & Thuế:**
        *   Cước chịu chiết khấu:
            $$Cost_{discounted} = Cost_{raw} \times (1 - discount\_rate)$$
        *   Cộng cước không chiết khấu (nếu có).
        *   Cộng thuế nhà thầu (FCT):
            $$Cost_{with\_fct} = Cost_{discounted} \times (1 + fct\_tax\_rate)$$
        *   Cộng thuế VAT:
            $$Invoice_{total} = Cost_{with\_fct} \times (1 + vat\_rate)$$

3.  **Lưu kết quả & Phát hành đối soát:**
    *   Lưu trữ kết quả tính toán chi tiết (Itemized Bill) vào DB của ERP để làm dữ liệu lịch sử.
    *   Tạo bản nháp đề nghị thanh toán (Draft Invoice) và gửi thông báo cho Kế toán doanh thu xem xét phê duyệt trên Dashboard của ERP.
