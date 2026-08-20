# Hướng dẫn cấu hình Export dữ liệu Billing sang BigQuery

Tài liệu này hướng dẫn chi tiết từng bước (Step-by-step) để cấu hình tự động đẩy dữ liệu hóa đơn/cước phí của GCP và GWS (dành cho Partner) về Google BigQuery.

---

## Phần 0: Yêu cầu về Tài khoản và Quyền hạn (Required Accounts & Permissions)

Để thiết lập cấu hình xuất dữ liệu billing thành công, tài khoản thực hiện của bạn cần đáp ứng các điều kiện phân quyền sau:

### 1. Đối với GCP Cloud Billing Export (Xuất cước GCP)
*   **Trên Cloud Billing Account (Tài khoản thanh toán tổng):** Bạn bắt buộc phải có vai trò **Billing Account Administrator** (`roles/billing.admin`). *Lưu ý: Quyền quản trị ở cấp Project hoặc Organization mà không có quyền trên Billing Account thì sẽ không thấy tùy chọn cấu hình Billing Export.*
*   **Trên Google Cloud Project chứa BigQuery Dataset:**
    *   Bạn cần có vai trò **BigQuery Admin** (`roles/bigquery.admin`) hoặc **BigQuery Data Owner** (`roles/bigquery.dataOwner`) để tạo dataset và thiết lập bảng.
    *   Bạn cần có vai trò **Project Editor** (`roles/editor`) hoặc quyền `resourcemanager.projects.update` để liên kết dự án nhận cước với Billing Account.

### 2. Đối với GWS Channel Services Export (Xuất cước GWS Reseller)
*   **Trên Partner Sales Console (Trang quản lý đại lý của Google):** Bạn cần có vai trò **Google Cloud Reseller administrator** (Quản trị viên đại lý Google Cloud) để thiết lập đích xuất dữ liệu.
*   **Trên Google Cloud Project chứa BigQuery Dataset:**
    *   Bạn cần vai trò **BigQuery User** (`roles/bigquery.user`) trên dự án để có thể chỉ định dự án nhận dữ liệu, hoặc **BigQuery Data Owner** nếu dataset đã tồn tại.
    *   Phải kích hoạt API **BigQuery Data Transfer Service API** trên dự án.
    *   Phải cấp quyền **BigQuery Data Editor** (`roles/bigquery.dataEditor`) cho tài khoản dịch vụ hệ thống của Google:
        `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com` (như hướng dẫn chi tiết tại Bước 3.1).

---

## Phần 1: Chuẩn bị Project và Dataset chứa dữ liệu (Điểm tập kết)
Trước khi bật tính năng Export từ bất kỳ dịch vụ nào, bạn cần tạo một "bể chứa" (Dataset) trên BigQuery để hứng dữ liệu.

1. Đăng nhập vào [Google Cloud Console](https://console.cloud.google.com/) bằng tài khoản quản trị (Billing Admin / Project Owner).
2. Tạo một Project mới (hoặc dùng project hiện có), ví dụ: `cloudaz-billing-warehouse`.
3. Bật **BigQuery API** cho project này.
4. Điều hướng tới menu **BigQuery**.
5. Ở bảng điều khiển Explorer (bên trái), nhấp vào dấu 3 chấm cạnh tên Project của bạn -> Chọn **Create dataset** (Tạo tập dữ liệu).
6. Điền `Dataset ID` (ví dụ: `gcp_billing_export`), chọn `Location` (nên chọn multi-region `US` hoặc `asia-southeast1`), rồi bấm **CREATE DATASET**.
   > *Mẹo: Nên tạo 2 Dataset riêng biệt (ví dụ `gcp_billing_export` và `gws_channel_export`) để dữ liệu 2 dịch vụ không bị lẫn lộn.*

---

## Phần 2: Cấu hình Export cho GCP (Cloud Billing)
Đây là bước cấu hình để hệ thống tính cước của Cloud tự động xả data vào Dataset vừa tạo.

1. Từ menu chính của Google Cloud Console, chọn **Billing** (Thanh toán).
2. Chắc chắn rằng bạn đang chọn **Billing Account** (Tài khoản thanh toán tổng) của tổ chức.
3. Ở thanh menu bên trái, chọn **Billing export** (Xuất thanh toán).
4. Chọn tab **BigQuery export**.
5. Bạn sẽ thấy 3 luồng dữ liệu có thể bật (Standard, Detailed, Pricing). Khuyến nghị bật **Detailed usage cost data** (Dữ liệu chi phí chi tiết). Nhấp vào **EDIT SETTINGS** (Chỉnh sửa cài đặt) tại ô đó.
6. Chọn Project `cloudaz-billing-warehouse` và Dataset `gcp_billing_export` bạn đã tạo ở Phần 1.
7. Nhấn **SAVE**. 
   > *Lưu ý: Phải mất vài giờ thì dữ liệu mới bắt đầu chạy về BigQuery. Các dữ liệu lịch sử trong quá khứ sẽ KHÔNG được đổ về, chỉ đổ dữ liệu từ thời điểm bật tính năng trở đi.*

---

## Phần 3: Cấu hình Export cho GWS (Channel Services cho Reseller)
Việc xuất dữ liệu của GWS yêu cầu cấu hình phức tạp hơn một chút vì hệ thống Partner Console cần quyền "chui" vào Project GCP của bạn để ghi dữ liệu.

### Bước 3.1: Cấp quyền ghi cho Bot của Google Channel Services
1. Vẫn trong Google Cloud Console, hãy đảm bảo bạn đang ở Project `cloudaz-billing-warehouse`.
2. Điều hướng tới **IAM & Admin** > **IAM**.
3. Nhấp vào nút **GRANT ACCESS** (Cấp quyền truy cập).
4. Ở ô *New principals* (Thành viên mới), copy và paste chính xác địa chỉ email hệ thống sau của Google:
   `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com`
5. Ở ô *Select a role* (Chọn vai trò), chọn **BigQuery Data Editor** (Người chỉnh sửa dữ liệu BigQuery).
6. Nhấn **SAVE**.

### Bước 3.2: Bật Export trên Partner Sales Console
1. Mở tab mới, đăng nhập vào [Partner Sales Console](https://partner.cloud.google.com/) bằng tài khoản Reseller Admin.
2. Nhấp vào biểu tượng Bánh răng (Settings / Cài đặt) ở góc trên bên phải để vào phần cài đặt. (Hoặc tìm kiếm mục cấu hình Billing Export).
3. Tìm đến phần **Channel Services Data Export** (Xuất dữ liệu dịch vụ kênh).
4. Hệ thống sẽ yêu cầu nhập Dataset ID. Bạn nhập theo định dạng: `tên-project-id:tên-dataset` (ví dụ: `cloudaz-billing-warehouse:gws_channel_export`).
5. Lưu cấu hình. 
   > *Hệ thống Google sẽ tự động tạo ra một bảng có tên `reseller_billing_detailed_export_v1` trong Dataset đó và cập nhật số liệu của tất cả khách hàng GWS hàng ngày.*
