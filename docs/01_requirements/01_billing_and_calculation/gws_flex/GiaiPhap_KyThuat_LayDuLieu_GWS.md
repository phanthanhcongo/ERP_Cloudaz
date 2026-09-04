# Giải pháp kỹ thuật & Kiến trúc tính cước — GWS (Google Workspace)

> **Ưu tiên triển khai**: 3/3 — giá trị tự động hóa thấp nhất, nên triển khai sau khi GCP và GMP đã chạy ổn định  
> **Nghiệp vụ gốc**: [BRD Tính cước Google](../Google/BRD_TinhCuoc_Google_2026-09-03.md)  
> **Tài liệu liên quan trong thư mục**: [QuyTrinh_LayHoaDon_GWS.md](QuyTrinh_LayHoaDon_GWS.md) · **[BRD Tính cước GWS Flex](BRD_TinhCuoc_GWS_Flex_2026-09-03.md)** (yêu cầu nghiệp vụ + giải pháp chi tiết) · Hướng dẫn BQ Channel Export: [../GCP/setup_bigquery_export.md](../GCP/setup_bigquery_export.md)
> **Cập nhật 2026-09-03**: bổ sung căn cứ triển khai hai luật nghiệp vụ §3, xác minh Phương án 1 trên tài liệu chính thống Google, và **đính chính rủi ro của Phương án 2** (mục 4.2).

---

## 1. Hiện trạng (AS-IS) — Quy trình CSV thủ công

Luồng thực tế đang vận hành hiện tại:

```
Google Console → Tải file CSV thủ công (Monthly Detail Report) → Chuyển sang Excel
               → Upload nguyên file lên CM → CM gen bảng tổng hợp chi phí
```

- Console Google Workspace xuất file cước dưới dạng **Monthly Detail Report (`.csv`)**.
- Dữ liệu invoice của hãng chia theo **`domain`**, không chia theo khách hàng hay pháp nhân.
- Hóa đơn hãng về sớm: Khoảng **ngày 01–02 hàng tháng**.

---

## 2. Đặc điểm nghiệp vụ & Ưu tiên triển khai

1. **Ánh xạ theo `domain`**: GWS map trực tiếp theo tên miền (`domain`), không phức tạp như việc mapping hàng trăm `project_id` của GCP hay View Link của GMP.
2. **GWS KHÔNG CÓ bước đối soát thủ công**: Kế toán không lập bảng Excel tính tay riêng để so số với CM — chỉ tin tưởng số do hệ thống gen ra:
   > *"Cái này chị không đối soát nhé... cái này là lấy thôi."*
3. **Giá trị tự động hóa**: Vì luồng cước GWS đơn giản và kế toán đã tin tưởng số liệu CM, thời gian tổn hao chính (~1,5 ngày/tháng) nằm ở GCP và GMP. Do đó GWS có độ ưu tiên 3/3.

---

## 3. Logic nghiệp vụ bắt buộc phải có trong ERP

Dù tự động hóa theo phương án nào, hai luật nghiệp vụ sau bắt buộc phải được cài đặt trong code xử lý của ERP:

### 3.1. Phân biệt dòng Commit và dòng User/Usage
Cùng một `domain` có thể phát sinh cả hai loại dòng tiền trong dữ liệu export:

| Loại dòng | Bản chất nghiệp vụ | Cách xử lý trong ERP |
| :--- | :--- | :--- |
| **User / Usage** | Lượng dùng thực tế hàng tháng | **Giữ lại & Tính vào cước tháng** |
| **Commit** | License cam kết bán trước 1 năm (trả trước) | **Lọc bỏ hoàn toàn**, không tính vào cước phát sinh tháng |

*Hiện tại kế toán đang phải phát hiện và xóa tay các dòng Commit này.*

**Căn cứ phân loại — không được suy từ tên SKU.** Ba nguồn khả dĩ, xếp theo độ tin cậy:

| # | Căn cứ | Nguồn | Đánh giá |
|---|---|---|---|
| **1** ✅ | **`plan.planName`** của subscription: `FLEXIBLE` ⇒ **giữ** · `ANNUAL` / `ANNUAL_MONTHLY_PAY` / `ANNUAL_YEARLY_PAY` ⇒ **lọc bỏ** | **Reseller API** `admin/reseller/v1`, nối qua nhãn `workspace.googleapis.com/subscription_id` trong bảng export | Enum **có tài liệu chính thức**, ổn định. **Dùng làm luật chính** |
| **2** ⚠️ | Nhãn `workspace.googleapis.com/usage_type` trong `system_labels` | Bảng export BigQuery | Google **chưa công bố tập giá trị** của nhãn này → phải khảo sát trên dữ liệu thật trước khi tin. Chỉ dùng làm **lớp kiểm tra chéo** |
| **3** ❌ | Suy từ `sku.description` | Bảng export BigQuery | Dễ vỡ khi Google đổi tên SKU. **Không dùng làm luật** |

> **Dòng không tra được `plan.planName` thì không tự lọc và cũng không tự tính** — đưa vào khu vực *"Chờ phân loại"* để kế toán quyết. Đoán sai theo hướng nào cũng ra hóa đơn sai: bỏ nhầm thì thiếu tiền, giữ nhầm thì tính trùng license khách đã trả trước.
>
> Reseller API **không trả số tiền** — vai trò duy nhất của nó ở đây là cung cấp `plan.planName`. Mọi con số tiền đều đến từ BigQuery export.

### 3.2. Kiểm tra `End date` (Khách dùng lẻ tháng)
Nếu ngày kết thúc (`End date`) của dòng cước không phải là ngày cuối cùng của tháng (khách hàng kích hoạt hoặc hủy giữa tháng), ERP phải **phát cảnh báo** để kế toán kiểm tra lại với file chi tiết từ hãng (xem có tính lẻ ngày / prorated hay không).

**Dữ liệu để cài đặt luật này đã có sẵn trong bảng export**, không cần mở file hãng:

| Cột | Dùng để |
|---|---|
| `usage_start_time` | Cảnh báo nếu **không phải ngày đầu tháng** |
| `usage_end_time` | Cảnh báo nếu **không phải ngày cuối tháng** |
| `plan.commitmentInterval.startTime` / `.endTime` *(Reseller API)* | Đối chiếu chéo với hai cột trên |

> ⚠️ **Cần hiệu chỉnh sau kỳ chạy đầu tiên.** Tài liệu Google mô tả `usage_start_time` / `usage_end_time` là *"khung giờ sử dụng"* — với GCP đây là cửa sổ theo giờ. Với gói Workspace tính theo chỗ ngồi, khung này nhiều khả năng theo ngày hoặc theo chu kỳ subscription, nhưng **chưa có tài liệu khẳng định**. Sau kỳ đầu, đối chiếu kết quả với vài khách đã biết là dùng lẻ tháng rồi mới chốt điều kiện.

Truy vấn mẫu và cách xử lý: xem [BRD Tính cước GWS Flex](BRD_TinhCuoc_GWS_Flex_2026-09-03.md) mục 6.6.

---

## 4. Phương án tự động hóa (TO-BE)

### Phương án 1: Channel Services Billing Export → BigQuery *(Khuyến nghị)*

**Mô hình**: Bật xuất cước tự động từ Partner Sales Console sang BigQuery Dataset (`reseller_billing_detailed_export_v1`).

```
Partner Sales Console 
    ↓ (Channel Services Export)
BigQuery Dataset (gws_channel_export)
    ↓ (ERP Backend query SQL)
Báo cáo cước & Hóa đơn khách hàng
```

- **Ưu điểm**: Đồng nhất 100% kiến trúc với GCP và GMP — cùng một Data Warehouse, cùng cơ chế query API, không sợ vỡ code parse file CSV.
- **Cách cấu hình**: Xem hướng dẫn tại **Phần 3** và các lưu ý vận hành tại **Phần 4** trong [setup_bigquery_export.md](../GCP/setup_bigquery_export.md).

#### ✅ Đã xác minh trên tài liệu chính thống — đây không chỉ là phương án tốt hơn, mà là đường duy nhất còn được hỗ trợ

**`CloudChannelReportsService` (`runReportJob` / `fetchReportResults`) đã bị Google deprecated**, và tài liệu chính thống chỉ định thay thế bằng đúng **Export Channel Services data to BigQuery**. Nghĩa là không còn đường API nào khác để lấy số cước reseller bằng máy.

#### 🔴 Ba ràng buộc phải biết trước khi bật

| # | Ràng buộc | Hậu quả nếu sai |
|---|---|---|
| 1 | Dataset phải là **multi-region** (`US` hoặc `EU`) | Multi-region được hồi tố dữ liệu **từ đầu tháng trước**; **regional chỉ có dữ liệu từ ngày bật**. Chọn sai là mất kỳ cước đang chạy, **không có cách vá** |
| 2 | **Không sửa bảng export**, không gỡ service account `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com`, không bật row/column-level access control | Export **dừng âm thầm**, không báo lỗi |
| 3 | **Không tắt export.** Google **không backfill** | Tắt rồi bật lại là thủng vĩnh viễn dữ liệu khoảng ở giữa |

> **Hệ quả với lộ trình:** dù GWS xếp ưu tiên 3/3, **riêng việc bật export nên làm ngay cùng lúc với GCP**. Chậm một tháng là mất một tháng dữ liệu hồi tố.

#### Các cột then chốt của bảng `reseller_billing_detailed_export_v1`

| Cột | Dùng để |
|---|---|
| `invoice.month` (`YYYYMM`) | Kỳ cước — khớp trực tiếp `billing_cycle` của module công nợ |
| `system_labels` → `workspace.googleapis.com/domain_name` | **Map theo `domain`** — đúng đặc điểm nghiệp vụ GWS ở mục 2 |
| `system_labels` → `workspace.googleapis.com/subscription_id` | Nối sang Reseller API để lấy `plan.planName` (luật §3.1) |
| **`customer_correlation_id`** | **Mã khách hàng của CloudAZ** gắn sẵn trên hồ sơ customer phía Google (qua `correlationId` của Cloud Channel API). Bền hơn map theo domain: khách đổi tên miền hoặc có nhiều domain thì map theo domain vỡ, map theo mã này thì không |
| `cost` / `customer_cost` | Giá CloudAZ trả Google / giá của khách sau khi áp `CustomerRepricingConfig` |
| `credits.type = 'RESELLER_MARGIN'` | Biên reseller — phục vụ quy tắc "số gửi khách là số đã bỏ margin" |
| `cost_type` (`regular` / `tax` / `adjustment` / `rounding error`) | Tách thuế và điều chỉnh khi đối soát với invoice hãng |
| `usage_start_time` / `usage_end_time` | Luật cảnh báo lẻ tháng (§3.2) |
| `export_time` | **Partition key** — mọi truy vấn bắt buộc lọc theo cột này để không quét toàn bảng |

View chuẩn hóa, luật lọc, truy vấn đối soát: xem [BRD Tính cước GWS Flex](BRD_TinhCuoc_GWS_Flex_2026-09-03.md) mục 6.

---

### Phương án 2: SFTP CSV Pull ⚠️ *(chưa xác minh được — không đưa vào thiết kế)*

> 🔴 **Đính chính 2026-09-03.** Rà soát tài liệu chính thống của Google **không tìm thấy nguồn nào của Google Workspace hay Channel Services** xác nhận `partnerupload.google.com` cổng `19321` thư mục `invoices` là kênh giao hóa đơn cho reseller Workspace. Tham chiếu duy nhất tìm được cho bộ thông số này nằm trong tài liệu của **RCS for Business** — một sản phẩm khác hoàn toàn.
>
> **Chưa xác nhận được với Partner Manager của CloudAZ thì không đưa phương án này vào thiết kế.** Phần mô tả bên dưới giữ nguyên để tham khảo, không phải để triển khai.
>
> **Kênh thủ công chính thống** (có tài liệu) là Admin Console → **Billing** → **Payment accounts** → **View invoices**, tải PDF/CSV. Lưu ý: **Console chỉ giữ lịch sử hóa đơn tối đa 12 tháng**, cũ hơn phải liên hệ hỗ trợ của Google — nên **ERP phải chủ động lưu bản sao ngay khi tải về**, không được coi Console là kho lưu trữ đối soát.

**Mô hình**: Google upload CSV sang SFTP Server (`partnerupload.google.com`) → ERP chạy Cronjob kết nối SFTP client tải file `.csv` → Parse CSV → Insert DB.

- **Ưu điểm**: Không tốn chi phí BigQuery; File CSV chốt là bản ghi bất biến dễ lưu trữ đối soát pháp lý.
- **Rủi ro & Nhược điểm kỹ thuật**:
  - *Rủi ro tràn bộ nhớ (OOM)*: File cước GWS khi số lượng khách phình to sẽ rất nặng. **Bắt buộc đọc theo dạng Stream (Stream Parser)**, tuyệt đối không nạp toàn bộ file vào RAM (`fs.readFileSync`).
  - *Pipeline dễ vỡ (Schema Drift)*: Code parse CSV dễ lỗi nếu Google thay đổi vị trí cột hoặc format số/ngày.
  - *Quản lý SSH Key*: Phải quản lý và xoay vòng SSH Key kết nối SFTP với Google.

---

### Khuyến nghị kỹ thuật

Sử dụng **Phương án 1 (BigQuery Channel Services Export)** làm nguồn tính cước chính cho hệ thống ERP — vừa đồng nhất kiến trúc với GCP/GMP, vừa là đường duy nhất Google còn hỗ trợ sau khi Reports Service bị deprecated.

Giữ nguyên **hóa đơn PDF/CSV của hãng làm bản lưu trữ đối soát bất biến** khi có tranh chấp — nhưng tải bằng đường Admin Console / Payments Center và **ERP phải lưu bản sao ngay**, vì Console chỉ giữ 12 tháng. **Không phụ thuộc vào SFTP** cho tới khi Partner Manager xác nhận (xem đính chính ở Phương án 2).

**Ba việc cần làm, theo thứ tự:**

1. **Bật export ngay** (cùng đợt với GCP), dataset **multi-region** — vì dữ liệu hồi tố chỉ có từ đầu tháng trước.
2. Sau khi có dữ liệu thật: **khảo sát tập giá trị của nhãn `usage_type`** và **hiệu chỉnh luật lẻ tháng** trên `usage_start_time` / `usage_end_time`.
3. **Set `correlationId`** = mã khách hàng ERP cho toàn bộ customer trên Cloud Channel API, để mọi dòng dữ liệu về đều tự map đúng khách.

---

## 5. Tài liệu chính thống Google *(tra cứu 2026-09-03)*

| Nội dung | Đường dẫn |
|---|---|
| Cấu hình export, quyền, vị trí dataset, giới hạn, lược đồ bảng | https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery |
| Truy vấn mẫu, cách đọc `system_labels`, đối soát invoice | https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries |
| `plan.planName`, seat, `commitmentInterval` — Reseller API | https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions |
| `correlationId` trên hồ sơ customer — Cloud Channel API | https://docs.cloud.google.com/channel/docs/reference/rest/v1alpha1/accounts.customers |
| Các loại gói Workspace cho reseller | https://docs.cloud.google.com/channel/docs/concepts/workspace/products-skus |
| Ghi chú deprecated của `CloudChannelReportsService` | https://docs.cloud.google.com/channel/docs/reference/rpc/google.cloud.channel.v1 |
| Xử lý sự cố export | https://docs.cloud.google.com/channel/docs/troubleshoot/troubleshoot-exports |
| Tải hóa đơn tháng, giới hạn lưu trữ 12 tháng | https://support.google.com/a/answer/6271108?hl=en |
