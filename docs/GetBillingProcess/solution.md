# Phân tích kỹ thuật: Giải pháp tích hợp lấy dữ liệu Billing tự động

Tài liệu này phân tích chi tiết khía cạnh kỹ thuật (Kiến trúc hệ thống, Bảo mật, Luồng dữ liệu, Khả năng mở rộng) của các giải pháp tự động hóa móc dữ liệu hóa đơn/cước phí từ hệ sinh thái Google (GCP, GWS, GMP) vào hệ thống ERP_Cloudaz nội bộ.

## 1. Giải pháp Data Warehouse (Khuyên dùng cốt lõi)
**Mô hình:**
*   **Google Cloud:** GCP Billing / Channel Services -> Tự động Export sang BigQuery -> ERP Backend dùng SDK gọi BigQuery API -> Xử lý dữ liệu.
*   **AWS:** AWS Data Exports (CUR 2.0 / Pro Forma CUR) -> Tự động Export sang Amazon S3 -> ERP Backend dùng SDK gọi Amazon Athena (SQL query) -> Xử lý dữ liệu.

### Áp dụng cho:
*   **GCP** (Cloud Billing Export to BigQuery)
*   **GWS Reseller** (Channel Services Billing Data Export)
*   **AWS** (AWS Data Exports / CUR 2.0 to Amazon S3 & Athena)

### Phân tích kỹ thuật khi triển khai:

#### Ưu điểm (Pros):
*   **Hiệu năng & Khối lượng tính toán (Performance & Computation):** ERP không phải tải các file CSV khổng lồ (hàng trăm MB hoặc GB) về RAM server để xử lý. Việc `GROUP BY`, `SUM`, tính toán chiết khấu được đẩy hết cho serverless engine của BigQuery xử lý siêu tốc. ERP chỉ nhận về cục JSON kết quả cuối cùng cực kỳ nhẹ.
*   **Tính toàn vẹn Dữ liệu (Data Integrity):** Dữ liệu có cấu trúc (Structured Data) theo Schema chuẩn của Google, định nghĩa kiểu dữ liệu rõ ràng (FLOAT, STRING, TIMESTAMP). Tránh hoàn toàn lỗi parse chuỗi, lỗi format ngày tháng, hay lỗi phân cách dấu phẩy thường gặp khi đọc file CSV.
*   **Bảo mật & Phân quyền (Security):** Sử dụng **Service Account** (Key JSON) hoặc Workload Identity. Hoàn toàn bảo mật, không cần quản lý tài khoản/password, dễ dàng giới hạn quyền chặt chẽ bằng Cloud IAM (chỉ cho phép ERP có quyền `BigQuery Data Viewer` đọc data).
*   **Khả năng mở rộng (Scalability):** Code backend tích hợp có thể tái sử dụng. Khi hệ thống có thêm hàng trăm khách hàng hay thay đổi báo cáo, câu lệnh SQL trên ERP rất dễ tùy biến mà không làm nghẽn hệ thống.

#### Nhược điểm & Thách thức kỹ thuật (Cons):
*   **Độ trễ luồng dữ liệu (Data Latency):** Export vào BigQuery không phải là realtime ngay lập tức. Google đổ data theo batch nhiều lần trong ngày (độ trễ từ vài giờ). Khi code logic đối soát cuối tháng, ERP phải thiết kế tính năng chỉ chốt dữ liệu sau ngày mùng 3-5 của tháng tiếp theo (thời gian để Google chốt sổ và đổ bill cuối cùng).
*   **Thách thức với Nested SQL:** Dữ liệu trong BigQuery chứa các cột lồng nhau (Nested data / RECORD, ví dụ như cột `labels` hay `project.labels`). Dev cần có kiến thức viết SQL xử lý mảng (dùng hàm `UNNEST()`). Nếu viết truy vấn không tối ưu (Full table scan), hệ thống có thể bị phát sinh phí query khá lớn.

---

## 2. Giải pháp Data Pipeline truyền thống (SFTP CSV Pull)
**Mô hình:** Google Upload CSV -> SFTP Server (`partnerupload.google.com`) -> ERP chạy Cronjob (Nodejs/Python script) -> SFTP Client tải file `.csv` định kỳ -> ERP Parse nội dung CSV -> Xử lý & Insert vào Database nội bộ.

### Áp dụng cho:
*   **GWS Flex Reseller** (Lấy file Monthly Detail Report.csv)

### Phân tích kỹ thuật khi triển khai:

#### Ưu điểm (Pros):
*   **Tối ưu Chi phí:** Hoàn toàn miễn phí, không phát sinh chi phí lưu trữ hay truy vấn data warehouse.
*   **Đóng gói & Đối soát (Auditability):** File CSV chốt hàng tháng là một bản ghi bất biến (immutable). Rất dễ đưa luồng backup nguyên bản file này vào AWS S3 hoặc ổ đĩa tĩnh để đối soát thủ công hoặc giải quyết tranh chấp pháp lý sau này nếu cần.

#### Nhược điểm & Thách thức kỹ thuật (Cons):
*   **Độ mỏng manh của mã nguồn (Brittle Pipeline):** Code đọc CSV rất dễ bị crash (vỡ luồng) nếu Google đột ngột thêm/bớt một cột (schema drift), hoặc nếu có một dòng dữ liệu chứa ký tự xuống dòng bất thường. Dev phải viết cơ chế xử lý ngoại lệ (Try-Catch, Error handling) rất cẩn thận.
*   **Quản lý bộ nhớ RAM (Memory Management):** Tránh tuyệt đối dùng các hàm đọc toàn bộ file vào RAM (như `fs.readFileSync` của Nodejs) vì khi tập khách hàng GWS phình to, file CSV vài chục MB có thể làm sập tiến trình ERP (OOM - Out of Memory). Bắt buộc phải code đọc dữ liệu dạng luồng (`Streams`).
*   **Bảo mật kết nối:** Phải sinh và quản lý Private/Public Key SSH cho SFTP (phức tạp hơn API Token). Cơ chế xác thực này khá "cổ điển" và khó tự động xoay vòng khóa (rotate keys) định kỳ.
*   **Tính cập nhật (Freshness):** Dữ liệu file CSV này chỉ được sinh 1 lần duy nhất vào đầu tháng. ERP sẽ không thể làm các tính năng realtime như "Dự báo cước (Cost Forecasting)" hay "Cảnh báo khách hàng sắp vượt ngân sách".

---

## 3. Giải pháp Tích hợp dữ liệu Dịch vụ Marketing (GMP)
**Mô hình:** BigQuery Data Transfer Service (Kéo data từ API tài khoản quảng cáo) -> BigQuery Dataset -> ERP gọi BigQuery API.

### Áp dụng cho:
*   **GMP** (DV360, SA360, Campaign Manager...)

### Phân tích kỹ thuật khi triển khai:

#### Ưu điểm (Pros):
*   Gom được dữ liệu Marketing vốn phân mảnh về chung một hệ sinh thái Database với Cloud/Workspace.
*   Tự động hóa hoàn toàn quy trình kéo dữ liệu từ API của nền tảng GMP thông qua cơ chế lên lịch tự động (Scheduled transfer) của Google mà dev không cần phải duy trì server để chạy script kéo data mỗi ngày.

#### Nhược điểm & Thách thức kỹ thuật (Cons):
*   **Kiến trúc Cấu hình Phân mảnh (Fragmentation):** Việc cấu hình rất rườm rà ở phía Console. Thay vì chỉ bật "1 công tắc" tổng cho cả hệ thống như GCP hay GWS, đối với GMP bạn phải thiết lập Data Transfer riêng lẻ cho từng tài khoản/sản phẩm khách hàng.
*   **Bất đồng bộ Khái niệm (Conceptual Mismatch):** Dữ liệu GMP lấy qua cổng tự động chủ yếu là báo cáo **Chi phí tiêu hao quảng cáo (Ad Spend)**, không hoàn toàn đồng nhất 1-1 với **Hóa đơn tài chính (Invoice)**. Kỹ sư xây dựng ERP phải tự viết logic cộng dồn, map tỷ giá hối đoái, tính thuế hoặc phụ phí nền tảng (Markup fee) rất phức tạp để ra được con số trùng khớp với hóa đơn PDF cuối tháng.

---

## 4. Giải pháp tích hợp qua REST API Pull (DigitalOcean)
**Mô hình:** ERP Backend định kỳ chạy Cronjob -> Gọi DigitalOcean API lấy danh sách Invoices -> Tải file CSV cước chi tiết & file PDF hóa đơn qua Endpoint của DO -> Parse dữ liệu CSV và lưu DB nội bộ.

### Áp dụng cho:
*   **DigitalOcean** (Tải cước chi tiết theo từng tài nguyên qua API).

### Phân tích kỹ thuật khi triển khai:

#### Ưu điểm (Pros):
*   **Đơn giản & Nhanh chóng (Simplicity):** DO cung cấp API REST chính thức và rất tường minh để tải trực tiếp file CSV và PDF dựa trên UUID hóa đơn. Không cần cấu hình hạ tầng trung gian phức tạp như S3/BigQuery hay SFTP.
*   **Độ tin cậy cao:** Dữ liệu hóa đơn từ API của DO là dữ liệu đã chốt sổ chính thức cuối tháng, cực kỳ chính xác để đối soát trực tiếp.

#### Nhược điểm & Thách thức kỹ thuật (Cons):
*   **Xử lý file ở Backend:** ERP phải trực tiếp thực hiện việc tải file CSV, parse dữ liệu bằng code backend và ghi vào DB. Nếu file CSV của DO quá lớn (trường hợp khách hàng dùng hàng ngàn Droplets/Volumes), backend cần sử dụng luồng (Stream parser) để tránh tràn bộ nhớ RAM.

---

## 💡 Đề xuất Kiến trúc cho hệ thống ERP_Cloudaz

Để hệ thống ERP hoạt động ổn định nhất, ít cần bảo trì (low-maintenance) và dễ mở rộng khi lượng khách hàng tăng vọt, **đội ngũ kỹ thuật CloudAZ nên định hướng xây dựng kiến trúc Data Warehouse (hướng Lakehouse) tập trung dữ liệu thô**. Quy trình cụ thể như sau:

1.  **Tầng Thu thập (Ingestion):**
    *   **Google (GCP, GWS, GMP) & AWS:** Sử dụng tính năng export tự động của hãng để đổ cước thô về **Google BigQuery** (với Google) và **Amazon S3** (với AWS). *KHÔNG viết code kéo API.*
    *   **DigitalOcean:** Sử dụng Cronjob trên ERP gọi REST API của DigitalOcean để tải trực tiếp các file hóa đơn chi tiết (CSV) và file PDF.
2.  **Tầng Xử lý (Processing):**
    *   **Phía Google & AWS:** Viết SQL (chạy trực tiếp trên BigQuery và Amazon Athena) để xử lý dữ liệu cước thô (join dữ liệu, tính thuế FCT, chiết khấu theo hợp đồng, xử lý credit/commitment).
    *   **Phía DigitalOcean:** Code backend của ERP thực hiện parse dữ liệu từ file CSV của DO, ánh xạ tài nguyên về từng khách hàng, áp dụng chiết khấu và thuế tương ứng trong DB của ERP.
3.  **Tầng Trình bày (Presentation / ERP Backend):** API của ERP (NodeJS/Python) chỉ đóng vai trò là tầng truy xuất siêu nhẹ (truy vấn kết quả đã xử lý sẵn từ BigQuery, Athena hoặc bảng DB nội bộ đã được parse từ DO) để xuất file Excel đối soát hoặc hiển thị lên Dashboard của kế toán.

*Lợi ích:* Đảm bảo tính nhất quán của hệ thống. Toàn bộ logic nghiệp vụ về giá (chiết khấu hợp đồng, thuế FCT, promotion) được quản lý tập trung tại cơ sở dữ liệu ERP, giúp kế toán và sales dễ dàng cập nhật mà không làm ảnh hưởng đến luồng thu thập dữ liệu thô.
