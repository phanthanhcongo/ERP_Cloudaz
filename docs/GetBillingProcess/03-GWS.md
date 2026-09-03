# Giải pháp kỹ thuật — GWS (Google Workspace)

> **Ưu tiên triển khai: 3/3** — giá trị tự động hóa thấp nhất, **không nên làm trước**
> **Kiến trúc chung**: [00-KienTruc-TongThe.md](00-KienTruc-TongThe.md)
> **Nghiệp vụ**: [BRD Tính cước Google](../1_tinh_cuoc/Google/BRD_TinhCuoc_Google_2026-09-03.md)

> **Đính chính**: bản tài liệu trước mô tả GWS lấy dữ liệu qua **SFTP** như thể đó là hiện trạng — không đúng. Quy trình thật là tải CSV thủ công từ Console. SFTP là **phương án đề xuất**, không phải mô tả hiện trạng.

---

## 1. Hiện trạng (AS-IS) — KHÔNG phải SFTP

**Luồng thật đang chạy:**

```
Console → tải file CSV thủ công → chuyển sang Excel/Google Sheets
        → upload nguyên file lên CM → CM gen bảng tổng hợp chi phí
```

Console chỉ xuất được **PDF hoặc CSV**. File dữ liệu cước của GWS Flex Reseller là **Monthly Detail Report (`.csv`)**.

**Invoice hãng**: chia theo **`domain`**, không chia theo khách hay pháp nhân. Có một file tổng hàng tháng. Invoice về ~ngày 01–02.

---

## 2. Hai đặc điểm nghiệp vụ quyết định độ ưu tiên

**2.1. GWS map theo `domain`**, không map theo billing account/project như GCP. Đây là lý do luồng này chính xác và đơn giản hơn hẳn — *"domain thì nó dễ map hơn"*.

**2.2. GWS KHÔNG có bước đối soát.** Kế toán không lập bảng tính tay riêng, không so số với CM — chỉ lấy kết quả CM gen ra:

> *"Mình có phải tính Excel xong đối soát với cái này?"* → **"Không, không, cái này chị không đối soát nhé... cái này là lấy thôi."*

**Chỉ GCP và GMap mới có bảng đối soát.** Kế toán chỉ kiểm tra lại GWS khi thấy dấu hiệu bất thường.

> 🎯 **Hệ quả**: GWS là luồng đơn giản nhất và đã được kế toán tin tưởng — **giá trị tự động hóa thấp nhất trong ba dịch vụ**. Thời gian thực sự bị mất (~1,5 ngày/tháng) nằm ở GCP và GMap, nơi phải tách Gemini, dò credit, và đối soát tay.

---

## 3. Logic nghiệp vụ bắt buộc phải có

Dù tự động hóa theo phương án nào, hai luật sau vẫn phải cài đặt:

**3.1. Phân biệt dòng Commit và dòng User/Usage** (BRD 5.4.2–5.4.3)

| Loại dòng | Bản chất |
| :--- | :--- |
| **User / Usage** | Lượng dùng thực tế, tính theo tháng |
| **Commit** | License bán trước 1 năm, **trả trước** |

Cùng một `domain` có thể phát sinh **cả hai loại**. **Chỉ tính dòng User/Usage vào cước tháng**, loại bỏ dòng Commit — hiện kế toán phải xóa tay.

**3.2. Kiểm tra `End date`** (BRD 5.4.4): nếu không phải ngày cuối tháng (khách dùng giữa tháng) thì cảnh báo để đối chiếu lại với file CSV gốc.

---

## 4. Phương án tự động hóa (TO-BE) — hai lựa chọn

### 4.1. Channel Services Billing Data Export → BigQuery *(khuyến nghị)*

**Ưu điểm:** đồng nhất kiến trúc với GCP và GMap — cùng một nguồn, một schema, một cách xử lý. Né hẳn hai rủi ro của phương án CSV nêu bên dưới.

### 4.2. SFTP CSV Pull

**Mô hình:** Google upload CSV → SFTP Server (`partnerupload.google.com`) → ERP chạy cronjob → SFTP client tải file `.csv` định kỳ → parse → insert vào DB nội bộ.

**Ưu điểm:**
- **Chi phí bằng 0**: không phát sinh phí lưu trữ hay truy vấn data warehouse
- **Đối soát pháp lý**: file CSV chốt hàng tháng là bản ghi **bất biến** — dễ backup nguyên bản để giải quyết tranh chấp về sau

**Nhược điểm:**
- **Pipeline mong manh**: code đọc CSV dễ vỡ nếu Google thêm/bớt cột (schema drift), hoặc gặp dòng chứa ký tự xuống dòng bất thường. Phải xử lý ngoại lệ rất cẩn thận
- **Rủi ro tràn RAM**: tuyệt đối không dùng hàm đọc toàn bộ file vào bộ nhớ (như `fs.readFileSync`). Khi tập khách phình to, file vài chục MB có thể làm sập tiến trình ERP (OOM). **Bắt buộc đọc dạng Stream**
- **Bảo mật phức tạp hơn**: phải sinh và quản lý cặp khóa SSH, khó tự động xoay vòng khóa định kỳ so với API token
- **Không hỗ trợ realtime**: file chỉ sinh 1 lần đầu tháng → không làm được dự báo cước hay cảnh báo vượt ngân sách

### Khuyến nghị

Chọn **4.1 làm nguồn tính cước**; giữ **CSV làm bản lưu trữ đối soát bất biến**, không dùng để tính cước. Quyết định cuối cùng nên chờ sau khi GCP và GMap đã chạy ổn định.
