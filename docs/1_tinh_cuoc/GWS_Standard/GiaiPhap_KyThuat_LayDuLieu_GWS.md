# Giải pháp kỹ thuật & Kiến trúc tính cước — GWS (Google Workspace)

> **Ưu tiên triển khai**: 3/3 — giá trị tự động hóa thấp nhất, nên triển khai sau khi GCP và GMP đã chạy ổn định  
> **Nghiệp vụ gốc**: [BRD Tính cước Google](../Google/BRD_TinhCuoc_Google_2026-09-03.md)  
> **Tài liệu liên quan trong thư mục**: [QuyTrinh_LayHoaDon_GWS.md](QuyTrinh_LayHoaDon_GWS.md) · Hướng dẫn BQ Channel Export: [../GCP/setup_bigquery_export.md](../GCP/setup_bigquery_export.md)

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

### 3.2. Kiểm tra `End date` (Khách dùng lẻ tháng)
Nếu ngày kết thúc (`End date`) của dòng cước không phải là ngày cuối cùng của tháng (khách hàng kích hoạt hoặc hủy giữa tháng), ERP phải **phát cảnh báo** để kế toán kiểm tra lại với file chi tiết từ hãng (xem có tính lẻ ngày / prorated hay không).

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
- **Cách cấu hình**: Xem hướng dẫn tại **Phần 3** trong [setup_bigquery_export.md](../GCP/setup_bigquery_export.md).

---

### Phương án 2: SFTP CSV Pull

**Mô hình**: Google upload CSV sang SFTP Server (`partnerupload.google.com`) → ERP chạy Cronjob kết nối SFTP client tải file `.csv` → Parse CSV → Insert DB.

- **Ưu điểm**: Không tốn chi phí BigQuery; File CSV chốt là bản ghi bất biến dễ lưu trữ đối soát pháp lý.
- **Rủi ro & Nhược điểm kỹ thuật**:
  - *Rủi ro tràn bộ nhớ (OOM)*: File cước GWS khi số lượng khách phình to sẽ rất nặng. **Bắt buộc đọc theo dạng Stream (Stream Parser)**, tuyệt đối không nạp toàn bộ file vào RAM (`fs.readFileSync`).
  - *Pipeline dễ vỡ (Schema Drift)*: Code parse CSV dễ lỗi nếu Google thay đổi vị trí cột hoặc format số/ngày.
  - *Quản lý SSH Key*: Phải quản lý và xoay vòng SSH Key kết nối SFTP với Google.

---

### Khuyến nghị kỹ thuật

Sử dụng **Phương án 1 (BigQuery Channel Services Export)** làm nguồn tính cước chính cho hệ thống ERP; giữ nguyên file CSV xuất thủ công làm bản lưu trữ đối soát bất biến khi có tranh chấp.
