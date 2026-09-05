# KẾT QUẢ KHẢO SÁT & ÁNH XẠ DỮ LIỆU BIGQUERY — THỰC TẾ GWS FLEX

> **Dự án**: ERP CloudAZ — Phân hệ Tính cước · Sản phẩm Google Workspace Flex (GWS Flex)  
> **Nguồn dữ liệu thực tế**: GCP Project `billing-data-cloudaz-resell`  
> **Dataset khảo sát**: `CloudAZ_GWS_billing_ds` (Bảng `reseller_billing_detailed_export_v1` & `gws_detail_billing`)  
> **Ngày thực hiện**: 2026-09-05  

---

## 1. Tổng quan Nguồn dữ liệu Thực tế trong BigQuery

Qua khảo sát trực tiếp môi trường BigQuery Studio của CloudAZ trên project `billing-data-cloudaz-resell`:

- **Project ID**: `billing-data-cloudaz-resell`
- **Datasets**:
  - `CloudAZ_GWS_billing_ds`: Dataset chính chứa dữ liệu cước GWS Reseller.
  - `CloudAZ_Billing_GWS`, `gws_billboard`: Các dataset phụ / staging liên quan.
- **Bảng dữ liệu gốc (Raw Export)**: `reseller_billing_detailed_export_v1`
- **Bảng/View đã làm phẳng (Flattened)**: `gws_detail_billing`

---

## 2. Kết quả Khảo sát Schema & Điểm đặc thù Kỹ thuật

### 2.1 Bảng `reseller_billing_detailed_export_v1` (Raw Channel Services Export)

1. **Cấu trúc trường `invoice`**:
   - `invoice` chỉ là `STRUCT<month STRING>`. Chỉ chứa trường `invoice.month` (định dạng dạng chuỗi `'YYYYMM'`, ví dụ `'202606'`).
   - **Lưu ý**: Không tồn tại trường `invoice.id`.

2. **Cách lưu trữ Domain Name và Order Info (`system_labels`)**:
   - Dữ liệu GWS **không lưu domain_name ở cột độc lập** hay ở mảng `labels` thông thường.
   - Toàn bộ nhãn hệ thống của Google Workspace nằm trong mảng **`system_labels`** với tiền tố `workspace.googleapis.com/`:

| Tên Hóa đơn / Nghiệp vụ | Tên Key trong `system_labels` | Ví dụ dữ liệu thực tế thu thập |
| :--- | :--- | :--- |
| **Domain Name** | `workspace.googleapis.com/domain_name` | `starglobal3d.com`, `gcloud.id.vn`, `weldcom.vn`, `bravebitsglobal.com`, `myhosting.io`, `vnstar.vn` |
| **Order ID** | `workspace.googleapis.com/order_id` | `11829112913-02`, `5043165718-06`, `8418637044-02` |
| **Subscription ID** | `workspace.googleapis.com/subscription_id` | `11829112913`, `5043165718`, `8418637044` |
| **Usage Type** | `workspace.googleapis.com/usage_type` | `FLEXIBLE_SEATS_ITEM`, `COMMITMENT_SEATS_CHANGE_ITEM` |

3. **Cấu trúc `customer_name` & `customer_id`**:
   - `customer_name` lưu dạng URI: `accounts/{account_id}/customers/{customer_id}` (ví dụ: `accounts/C01473oln/customers/S8useBTIfPq4uc`).
   - Cần dùng regex `REGEXP_EXTRACT(customer_name, r'customers/(.+)')` để bóc tách lấy `customer_id` (`S8useBTIfPq4uc`).

4. **Đặc điểm dòng Thuế (`Tax`)**:
   - Các dòng cước thuế (`sku.description = 'Tax'` hoặc `cost_type = 'tax'`) sẽ có `system_labels` là `null` hoặc không chứa `domain_name`.
   - **Bắt buộc** lọc `WHERE LOWER(sku.description) != 'tax'` khi xuất bảng cước chi tiết theo khách hàng.

---

### 2.2 Bảng `gws_detail_billing` (Flattened View)

Bảng này đã được ETL làm phẳng các cột:
- `invoice_month`: Kiểu dữ liệu `INTEGER` (ví dụ `202606`, không dùng nháy đơn).
- `customer_name`, `project_name`, `sku_description`, `sku_id`, `usage_amount`, `cost`: Là các cột đơn, không lồng ghép `UNNEST()`.

---

## 3. Cấu hình IAM & Phân quyền BigQuery Bắt buộc

Khi tài khoản nhân viên / Service Account thực thi câu lệnh SQL trên project `billing-data-cloudaz-resell`, cần đảm bảo được cấp đủ 2 vai trò IAM sau:

1. **`BigQuery User` (`roles/bigquery.user`)** *(hoặc `BigQuery Job User` `roles/bigquery.jobUser`)* trên Project `billing-data-cloudaz-resell`:
   - Cung cấp quyền `bigquery.jobs.create` để tạo và thực thi Query Job.
2. **`BigQuery Data Viewer` (`roles/bigquery.dataViewer`)** trên Dataset `CloudAZ_GWS_billing_ds`:
   - Cung cấp quyền đọc schema và nội dung dữ liệu bảng.

---

## 4. Truy vấn SQL Mẫu Chuẩn hóa (Production-Ready)

### 4.1 SQL cho Bảng Raw `reseller_billing_detailed_export_v1`

```sql
SELECT 
  -- 1. Domain Name (Tên miền khách hàng GWS)
  (SELECT value FROM UNNEST(system_labels) WHERE key = 'workspace.googleapis.com/domain_name') AS domain_name,

  -- 2. Subscription (Tên gói dịch vụ GWS)
  sku.description AS subscription,

  -- 3. Description (Loại hình chi phí: FLEXIBLE_SEATS_ITEM, COMMITMENT_SEATS_CHANGE_ITEM...)
  COALESCE(
    (SELECT value FROM UNNEST(system_labels) WHERE key = 'workspace.googleapis.com/usage_type'),
    cost_type
  ) AS description,

  -- 4. Order Name (Mã đơn hàng)
  (SELECT value FROM UNNEST(system_labels) WHERE key = 'workspace.googleapis.com/order_id') AS order_name,

  -- 5. Start Date & End Date
  DATE(usage_start_time) AS start_date,
  DATE(usage_end_time) AS end_date,

  -- 6. Quantity (Số lượng sử dụng / License)
  usage.amount AS quantity,

  -- 7. PO Number (Mã PO nếu có trong labels)
  (SELECT value FROM UNNEST(labels) WHERE key = 'po_number') AS po_number,

  -- 8. Amount (Thành tiền)
  ROUND(cost, 2) AS amount,

  -- 9. Customer ID (ID khách hàng Google)
  REGEXP_EXTRACT(customer_name, r'customers/(.+)') AS customer_id,

  -- 10. SKU ID
  sku.id AS sku_id,

  -- Thông tin kỳ cước & loại tiền
  invoice.month AS invoice_month,
  currency

FROM `billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`
WHERE invoice.month = '202606'  -- Thay đổi kỳ cước cần xuất (Định dạng YYYYMM)
  AND LOWER(sku.description) != 'tax' -- Loại bỏ các dòng thuế
ORDER BY domain_name, start_date ASC;
```

---

### 4.2 SQL cho Bảng Flattened `gws_detail_billing`

```sql
SELECT 
  COALESCE(customer_name, project_name) AS domain_name,
  sku_description AS subscription,
  cost_type AS description,
  entitlement_name AS order_name,
  DATE(usage_start_time) AS start_date,
  DATE(usage_end_time) AS end_date,
  usage_amount AS quantity,
  ROUND(cost, 2) AS amount,
  sku_id,
  invoice_month,
  currency
FROM `billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.gws_detail_billing`
WHERE invoice_month = 202606  -- Kiểu INTEGER
  AND LOWER(sku_description) != 'tax'
ORDER BY domain_name, start_date ASC;
```

---

## 5. Ánh xạ Trường dữ liệu (Data Mapping Matrix)

Bảng ánh xạ hoàn chỉnh từ **Hóa đơn mẫu (Monthly Invoice)** sang **Trường BigQuery**:

| STT | Trường trên Hóa đơn mẫu | Tên Cột / Cú pháp bóc tách trong BigQuery Export | Ví dụ dữ liệu thực tế |
| :--- | :--- | :--- | :--- |
| 1 | **Domain name** | `system_labels['workspace.googleapis.com/domain_name']` | `starglobal3d.com` |
| 2 | **Subscription** | `sku.description` | `Google Workspace Business Plus` |
| 3 | **Description** | `system_labels['workspace.googleapis.com/usage_type']` / `cost_type` | `FLEXIBLE_SEATS_ITEM` |
| 4 | **Order name** | `system_labels['workspace.googleapis.com/order_id']` | `5043165718-06` |
| 5 | **Start date** | `DATE(usage_start_time)` | `2026-06-01` |
| 6 | **End date** | `DATE(usage_end_time)` | `2026-06-30` |
| 7 | **Quantity** | `usage.amount` | `129` |
| 8 | **PO number** | `labels['po_number']` | (để trống nếu không có) |
| 9 | **Amount** | `ROUND(cost, 2)` | `181.11` |
| 10 | **Customer ID** | `REGEXP_EXTRACT(customer_name, r'customers/(.+)')` | `S8useBTIfPq4uc` |
| 11 | **SKU ID** | `sku.id` | `1010020027` |
| 12 | **Invoice Month** | `invoice.month` | `202606` |
| 13 | **Currency** | `currency` | `USD` |
