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
*   **Trên Google Workspace:** Bạn còn phải có quyền **Google Workspace Reseller Admin** hoặc **Billing**. Thiếu quyền này thì vào được màn hình cấu hình nhưng **không chọn được nguồn dữ liệu Google Workspace** khi bật export.
*   **Trên Google Cloud Project chứa BigQuery Dataset:**
    *   Bạn cần vai trò **BigQuery User** (`roles/bigquery.user`) trên dự án để có thể chỉ định dự án nhận dữ liệu, hoặc **BigQuery Data Owner** nếu dataset đã tồn tại.
    *   Phải kích hoạt API **BigQuery Data Transfer Service API** trên dự án.
    *   Phải cấp quyền **BigQuery Data Editor** (`roles/bigquery.dataEditor`) cho tài khoản dịch vụ hệ thống của Google:
        `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com` (như hướng dẫn chi tiết tại Bước 3.1).
*   **Cho hệ thống ERP đọc dữ liệu:** tạo một service account riêng của ERP với quyền **BigQuery Data Viewer** (`roles/bigquery.dataViewer`) + **BigQuery Job User** (`roles/bigquery.jobUser`) trên dataset. **Không cấp quyền ghi** — ERP chỉ đọc.

> 🔴 **Quyết định phải chốt trước khi tạo dataset cho GWS: vị trí (Location).**
> Dataset **multi-region** (`US` hoặc `EU`) được Google hồi tố dữ liệu **từ đầu tháng trước**.
> Dataset **regional** (kể cả `asia-southeast1`) **chỉ có dữ liệu từ ngày bật export trở đi**.
> Chọn sai là mất trắng dữ liệu kỳ cước đang chạy và **không có cách vá** — Google không backfill.
> Ngoài ra, export của **offline order chỉ hỗ trợ multi-region**. Xem chi tiết ở Phần 1 và Phần 4.

---

## Phần 1: Chuẩn bị Project và Dataset chứa dữ liệu (Điểm tập kết)
Trước khi bật tính năng Export từ bất kỳ dịch vụ nào, bạn cần tạo một "bể chứa" (Dataset) trên BigQuery để hứng dữ liệu.

1. Đăng nhập vào [Google Cloud Console](https://console.cloud.google.com/) bằng tài khoản quản trị (Billing Admin / Project Owner).
2. Tạo một Project mới (hoặc dùng project hiện có), ví dụ: `cloudaz-billing-warehouse`.
3. Bật **BigQuery API** cho project này.
4. Điều hướng tới menu **BigQuery**.
5. Ở bảng điều khiển Explorer (bên trái), nhấp vào dấu 3 chấm cạnh tên Project của bạn -> Chọn **Create dataset** (Tạo tập dữ liệu).
6. Điền `Dataset ID` (ví dụ: `gcp_billing_export`), chọn `Location`, rồi bấm **CREATE DATASET**.
   > *Mẹo: Nên tạo 2 Dataset riêng biệt (ví dụ `gcp_billing_export` và `gws_channel_export`) để dữ liệu 2 dịch vụ không bị lẫn lộn.*

   **Chọn Location theo bảng sau — đây là lựa chọn không sửa được về sau:**

   | Dataset | Location | Lý do |
   |---|---|---|
   | `gws_channel_export` (Channel Services) | 🔴 **Bắt buộc multi-region `US` hoặc `EU`** | Chỉ multi-region mới được hồi tố dữ liệu từ đầu tháng trước. Chọn regional (`asia-southeast1`…) thì chỉ có dữ liệu từ ngày bật, mất kỳ đang chạy |
   | `gcp_billing_export` (Cloud Billing) | Multi-region `US` / `EU`, hoặc regional tùy nhu cầu | Cloud Billing export **không đổ dữ liệu quá khứ** ở mọi vị trí, nên vị trí không ảnh hưởng phạm vi dữ liệu |

   > *Không đổi được Location sau khi tạo dataset. Muốn đổi phải tạo dataset mới và bật lại export — mà bật lại thì thủng dữ liệu khoảng thời gian ở giữa (xem Phần 4).*

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
2. Vào trang **Billing** (Thanh toán) của Partner Sales Console, chọn mục **Billing export** (Xuất dữ liệu thanh toán).
   > *Nếu giao diện của bạn khác, thử biểu tượng Bánh răng (Settings) ở góc trên bên phải, hoặc tìm kiếm mục **Channel Services Data Export**.*
3. Nhập Dataset ID theo định dạng `PROJECT_ID:DATASET_NAME` (ví dụ: `cloudaz-billing-warehouse:gws_channel_export`).
4. **Chọn nguồn dữ liệu (data sources):** tick **Google Workspace** (và **Google Cloud** nếu muốn gộp chung). ⚠️ Nếu không thấy tùy chọn Google Workspace, tài khoản của bạn đang thiếu quyền **Workspace Reseller Admin / Billing** — xem Phần 0 mục 2.
5. Nhấn **Update** và xác nhận các hộp thoại cấp quyền.
   > *Hệ thống Google sẽ tự động tạo ra một bảng có tên `reseller_billing_detailed_export_v1` trong Dataset đó và cập nhật số liệu của tất cả khách hàng GWS hàng ngày.*
   > *Bảng **chưa xuất hiện ngay** — chỉ được tạo sau lần export đầu tiên chạy. Đừng vội tạo tay bảng này.*

---

## Phần 4: Lưu ý vận hành sau khi bật (bắt buộc đọc)

Phần này áp cho **Channel Services Export (GWS)**. Sai một trong các điểm dưới đây thì export **dừng âm thầm** — không báo lỗi, chỉ là dữ liệu ngừng về.

### 4.1 Bốn thao tác cấm tuyệt đối trên dataset/bảng export

| Thao tác | Hậu quả |
|---|---|
| Sửa cấu trúc bảng `reseller_billing_detailed_export_v1` (thêm/xóa/đổi cột) | Export **fail** |
| Gỡ quyền của `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com` | Google không ghi được → **mất dữ liệu** |
| Bật **row-level access control** hoặc **column-level access control** trên bảng | Export **fail** |
| Tắt export rồi bật lại | **Không có backfill** — thủng vĩnh viễn dữ liệu khoảng thời gian đã tắt |

> **Hệ quả thiết kế:** ERP **không đọc trực tiếp bảng gốc**. Tạo `VIEW` chuẩn hóa trên bảng gốc và cho ERP đọc view. Bảng gốc coi như chỉ-đọc, không ai được đụng vào.

### 4.2 Đặc tính của bảng export

| Hạng mục | Giá trị |
|---|---|
| Tên bảng | `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1` |
| Partition key | **`export_time`** |
| Cluster key | **`payer_billing_account_id`** |
| Tần suất nạp | **Incremental hằng ngày** |
| Thời điểm xuất hiện | Sau lần export đầu tiên chạy |

> 💰 **Tối ưu chi phí truy vấn — bắt buộc:** mọi truy vấn phải có điều kiện lọc trên **`export_time`**. Truy vấn không lọc partition sẽ quét toàn bảng, và chi phí tăng dần theo từng tháng dữ liệu tích lũy.

### 4.3 Giám sát

Export chết thì không có thông báo nào từ Google. Phải tự giám sát:

```sql
-- Mốc dữ liệu mới nhất đã về. Chạy định kỳ, cảnh báo nếu quá 36 giờ không đổi.
SELECT MAX(export_time) AS lan_nap_gan_nhat
FROM `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`
```

Đề xuất: job `gws_export_health` chạy mỗi 6 giờ, cảnh báo Quản trị viên khi `MAX(export_time)` cách hiện tại quá **36 giờ**.

### 4.4 Ghi chú về API báo cáo

**Không dùng `CloudChannelReportsService` (`runReportJob` / `fetchReportResults`) cho việc lấy số cước.** API này **đã bị Google deprecated**, và tài liệu chính thống chỉ định thay thế bằng đúng BigQuery Export đang hướng dẫn ở đây. BigQuery Export là đường duy nhất còn được hỗ trợ lâu dài.

### 4.5 Tài liệu chính thống

| Nội dung | Đường dẫn |
|---|---|
| Cấu hình export, quyền, vị trí dataset, giới hạn, lược đồ bảng | https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery |
| Truy vấn mẫu, cách đọc `system_labels`, đối soát invoice | https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries |
| Xử lý sự cố export | https://docs.cloud.google.com/channel/docs/troubleshoot/troubleshoot-exports |
| Ghi chú deprecated của `CloudChannelReportsService` | https://docs.cloud.google.com/channel/docs/reference/rpc/google.cloud.channel.v1 |

> Cách ERP dùng dữ liệu này (view chuẩn hóa, luật lọc dòng Commit, cảnh báo lẻ tháng, đối soát invoice): xem [BRD Tính cước GWS Flex](../GWS_Flex/BRD_TinhCuoc_GWS_Flex_2026-09-03.md) mục 6.
