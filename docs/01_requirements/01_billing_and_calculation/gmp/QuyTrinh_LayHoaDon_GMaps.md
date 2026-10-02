# Quy trình lấy dữ liệu và hóa đơn Google Maps Platform

## 1. Phạm vi

Quy trình áp dụng cho Google Maps Platform (GMaps) được tính cước trên Google Cloud Billing Account.

## 2. Quyền cần có

- **Xem báo cáo**: quyền xem Billing Account được cấp.
- **Bật Cloud Billing Export**: `Billing Account Costs Manager` hoặc `Billing Account Administrator` trên Billing Account đích.
- **Ghi dữ liệu vào BigQuery**: `BigQuery User` trên project chứa dataset và quyền tạo/quản lý dataset theo chính sách của Cloudaz.
- **Đọc dữ liệu trong ERP**: service account ERP có `BigQuery Data Viewer` và `BigQuery Job User`.

Quyền `View` của đại lý cấp 2 không đủ để bật export hoặc xem các Billing Account ngoài phạm vi được cấp.

## 3. Lấy báo cáo trên Google Cloud Console

1. Đăng nhập [Google Cloud Console](https://console.cloud.google.com/).
2. Chọn **Billing**.
3. Chọn đúng Billing Account GMaps, ví dụ `Oni-ProjectCAZ-(Hoiango)-GMaps-SubAccount`.
4. Chọn **Reports** hoặc **Cost table**.
5. Chọn kỳ billing theo **Billing period/Invoice month**.
6. Lọc theo **Project**, **Service** hoặc **SKU** khi cần.
7. Kiểm tra các trường Cost, Discounts, Promotions/Credits và Subtotal.
8. Tải CSV khi cần đối chiếu hoặc nhập thủ công.

## 4. Cấu hình tự động qua BigQuery

1. Tạo hoặc chọn project lưu dữ liệu billing.
2. Tạo BigQuery dataset và chốt location trước khi bật export.
3. Vào **Billing → Billing export → BigQuery export**.
4. Chọn **Standard usage cost** hoặc **Detailed usage cost**.
5. Chọn project và dataset đích.
6. Lưu cấu hình và chờ dữ liệu xuất hiện.
7. Cấp quyền `BigQuery Data Viewer` cho service account ERP.
8. ERP đọc bảng export qua view chuẩn hóa, không sửa bảng gốc.

Cloud Billing Export đưa dữ liệu chi phí của các project được thanh toán bởi Billing Account vào BigQuery. Nếu có nhiều Billing Account, cần cấu hình từng tài khoản hoặc nhờ reseller cấp trên cung cấp nguồn tổng hợp.

## 5. Đối soát và chốt số

- Dùng `invoice.month` để đối chiếu theo kỳ hóa đơn.
- Đối chiếu tổng theo Project với tổng theo Billing Account.
- Kiểm tra Cost, Discounts, Promotions/Credits và Subtotal.
- Kiểm tra project mới hoặc project chưa được mapping khách hàng.
- Chỉ chốt khi dữ liệu đầy đủ và chênh lệch nằm trong ngưỡng cho phép.
- Invoice GMaps thường về khoảng ngày 05–08, có thể đến ngày 09; không dùng lịch chốt của GCP nếu hai dịch vụ có lịch khác nhau.

## 6. Lưu ý

- Dữ liệu Cloud Billing có thể cập nhật chậm hơn 24 giờ.
- Dataset location không đổi được sau khi tạo.
- Không sửa schema hoặc xóa bảng export gốc.
- Không gỡ service account do Google quản lý khỏi dataset.
- Dữ liệu trước thời điểm bật export có thể không được hồi tố; giữ file CSV/invoice để bổ sung khi cần.
