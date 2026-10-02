# Giải pháp kỹ thuật lấy dữ liệu Google Maps Platform

## 1. Phạm vi

Google Maps Platform (GMaps) sử dụng Google Cloud Billing Account để ghi nhận chi phí. Dữ liệu cần lấy gồm chi phí theo Billing Account, Project, Service, SKU, Cost, Discounts, Promotions/Credits, Subtotal và Invoice month.

## 2. Kiến trúc đề xuất

```text
Google Maps Platform
        ↓
Google Cloud Billing Account
        ↓
Cloud Billing Export
        ↓
BigQuery dataset
        ↓
View chuẩn hóa
        ↓
ERP Cloudaz
        ↓
Tính cước – Đối soát – Hóa đơn
```

Không cần xây dựng pipeline riêng cho Google Maps Platform. Dùng Cloud Billing Export của Google Cloud.

## 3. Phương án dữ liệu

### 3.1. Nguồn dữ liệu

- **Standard usage cost**: dùng cho tổng hợp chi phí.
- **Detailed usage cost**: dùng khi cần chi tiết resource, project hoặc SKU.
- **Pricing data**: dùng khi cần đối chiếu đơn giá.

Mỗi Billing Account cần được xác định rõ phạm vi project được thanh toán. Nếu Cloudaz có nhiều Billing Account, dữ liệu có thể nằm ở nhiều bảng export và cần hợp nhất bằng view hoặc query chuẩn hóa.

### 3.2. Dataset và bảng

- Dataset được tạo trong project riêng cho billing/FinOps.
- Location phải được chốt trước khi tạo và không thể thay đổi sau đó.
- Không sửa hoặc xóa bảng export gốc.
- Tạo view nghiệp vụ để chuẩn hóa schema và bảo vệ ERP khỏi thay đổi schema nguồn.
- Lọc theo `export_time` hoặc `invoice.month` để giảm chi phí truy vấn.

## 4. Quyền truy cập

### 4.1. Cấu hình export

- Cloud Billing: `Billing Account Costs Manager` hoặc `Billing Account Administrator`.
- Project chứa dataset: `BigQuery User` và quyền cần thiết để tạo/chọn dataset.

### 4.2. ERP đọc dữ liệu

Service account ERP cần:

- `BigQuery Data Viewer` trên dataset hoặc view.
- `BigQuery Job User` trên project truy vấn.

Không cấp quyền ghi cho ERP trên bảng export gốc.

### 4.3. Trường hợp đại lý cấp 2 chỉ có quyền View

Cloudaz không thể tự bật export nếu chỉ có quyền `View`. Cần một trong các phương án:

1. Billing Account Administrator bật export cho từng Billing Account và cấp quyền đọc dataset.
2. Reseller cấp trên cung cấp dataset tổng hợp hoặc quyền đọc dữ liệu cấp trên.
3. Reseller cung cấp file CSV/Excel định kỳ để Cloudaz nạp vào BigQuery trong giai đoạn chuyển tiếp.

## 5. Chuẩn hóa và mapping

ERP cần bảng `resource_mapping` với tối thiểu:

| Trường | Mục đích |
|---|---|
| `project_id` | Định danh project GMaps |
| `billing_account_id` | Định danh Billing Account |
| `customer_id` | Khách hàng Cloudaz |
| `contract_id` | Hợp đồng áp dụng |
| `effective_from` | Ngày bắt đầu mapping |
| `effective_to` | Ngày kết thúc mapping |

Không dùng view link làm khóa duy nhất vì một view link có thể chứa project của nhiều khách hàng.

## 6. Quy tắc tính cước

- Xác định dịch vụ bằng `service.description`, `sku.description` hoặc mã Service/SKU đã xác nhận.
- Tính theo Cost, Discounts, Promotions/Credits và Subtotal từ nguồn.
- Áp dụng discount, credit, tỷ giá và giá bán theo hợp đồng Cloudaz.
- Lưu riêng giá trị nguồn, giá trị điều chỉnh và giá trị cuối cùng.
- Ghi audit log cho mọi điều chỉnh thủ công.

## 7. Đối soát

ERP thực hiện các kiểm tra:

1. Tổng theo Project = tổng theo Billing Account.
2. Tổng ERP = tổng invoice/report trong ngưỡng cho phép.
3. Project mới phải được mapping trước khi chốt.
4. Dữ liệu thiếu hoặc cập nhật trễ phải chuyển sang trạng thái chờ xử lý.
5. Dữ liệu về sau khi chốt phải tạo phiên bản điều chỉnh và lưu lý do.

Khi đối chiếu hóa đơn, dùng `invoice.month`; không dùng riêng `usage_start_time`, `usage_end_time` hoặc `export_time`.

## 8. Giám sát

ERP cần theo dõi:

- Thời điểm nạp dữ liệu gần nhất.
- Billing Account chưa có dữ liệu.
- Project chưa mapping.
- Sai lệch giữa nguồn và ERP.
- Export bị dừng hoặc service account mất quyền.
- Chi phí truy vấn BigQuery tăng bất thường.

## 9. Nguồn tham khảo

- [Cloud Billing export to BigQuery](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- [Cloud Billing data export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery)
- [Cloud Billing data schema](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
