# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD)

> **Dự án**: ERP CloudAZ — Phân hệ Tính cước & Đối soát chi phí Google Cloud (GCP)  
> **Khách hàng**: CloudAZ (Nội bộ — Phòng Kế toán, Sales, Ban Giám đốc)  
> **Ngày tạo**: 2026-09-21  
> **Phiên bản**: 1.0  
> **Feature scope**: FEATURE 01 — BD-01 đến BD-04  

---

## Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
| :--- | :--- | :--- | :--- |
| 1.0 | 2026-09-21 | BA Team (Claude) | Khởi tạo BRD từ tài liệu kỹ thuật GCP + Product Backlog Master |

---

## 1. Vấn đề Hiện tại

CloudAZ là đối tác (Reseller) của Google, quản lý khoảng **70–80 khách hàng** sử dụng dịch vụ Google Cloud Platform (GCP), tương ứng **~94 billing account** và **~600+ project**.

Hàng tháng, Google phát hành **một invoice tổng** (ví dụ: >600.000 USD) gộp toàn bộ khách hàng, không tách chi tiết theo từng khách. Kế toán phải thực hiện thủ công các bước sau cho **từng khách hàng**:

1. Mở link billing riêng trên Google Cloud Console, lọc đúng tháng (Console mặc định lệch múi giờ).
2. Chọn đúng hãng, `group by project` để lấy số liệu theo project.
3. **Bỏ tích Reseller margin** (hiện gọi là "Negotiated savings") để ra số thực dùng của khách.
4. **Bật/tắt Promotion credit** để so chênh lệch, dò xem khách có credit hay không.
5. Chuyển sang `group by service` — chỉ ở chế độ này mới nhìn thấy **Gemini API** (Marketplace, không được chiết khấu).
6. Chụp màn hình lượng dùng làm bằng chứng gửi khách hàng.
7. Copy thủ công 2 bảng dữ liệu lên hệ thống CM: bảng theo **Billing ID** (~94 dòng) và bảng theo **Project** (~621 dòng), copy qua hàng chục trang.

**Thời gian tiêu tốn**: ~1,5 ngày/tháng chỉ riêng việc lấy số GCP.  
**Rủi ro**: Sai sót khi copy tay, bỏ sót project/billing account mới phát sinh (gây thất thoát tiền cước), không phát hiện credit kịp thời, không kiểm soát được chi phí Gemini API.

---

## 2. Giải pháp Đề xuất

Xây dựng module **Tự động Tính cước GCP** trong hệ thống ERP CloudAZ, tích hợp trực tiếp với **Google BigQuery** để tự động:

- Kết nối, truy vấn và lưu trữ dữ liệu cước GCP hàng tháng.
- Bóc tách Reseller Margin, Promotion Credit, và chi phí Gemini API.
- Ánh xạ tài nguyên (billing account, project) sang khách hàng → hợp đồng → pháp nhân.
- Tính cước theo công thức hợp đồng riêng từng khách.
- Đối soát chéo 2 chiều và cảnh báo chênh lệch.

### Mô hình tích hợp

```
GCP Billing / Channel Services
    ↓ (Tự động Billing Export)
Google BigQuery Dataset
    ↓ (ERP backend — BigQuery SDK / REST API — gửi SQL query)
JSON kết quả đã aggregation
    ↓ (ERP xử lý: mapping, công thức, tỷ giá, thuế, đối soát)
Báo cáo cước & Hóa đơn khách hàng
```

### Nguyên tắc cốt lõi

| Tầng | Chịu trách nhiệm | KHÔNG được biết |
| :--- | :--- | :--- |
| **BigQuery** | Aggregation lượng dùng, bóc tách credit (`UNNEST`), xuất theo `(kỳ, billing_account, project, service, seller, loại credit)` | Khách hàng, hợp đồng, tỷ giá, thuế, làm tròn |
| **ERP** | Ánh xạ tài nguyên → khách → hợp đồng → pháp nhân, công thức, discount, tỷ giá, thuế FCT, làm tròn, phân loại credit, đối soát, audit log | — |

---

## 3. Hệ thống bị Ảnh hưởng

- **ERP CloudAZ** — Module Tính cước (backend Go + frontend Svelte): bổ sung tính năng GCP
- **Google BigQuery** — Dataset billing export (`gcp_billing_export`): nguồn dữ liệu cước
- **Google Cloud Console** — Cấu hình Billing Export, IAM permissions
- **CM (Contract Management)** — Hệ thống quản lý hợp đồng: nguồn dữ liệu ánh xạ khách hàng
- **S3 / Object Storage** — Lưu trữ file cước lịch sử, bằng chứng đối soát

---

## 4. Giả định / Phụ thuộc

- **[PHỤ THUỘC]** Billing Export sang BigQuery đã được bật (Detailed usage cost data) — cần Billing Account Admin cấu hình theo [setup_bigquery_export.md](setup_bigquery_export.md).
- **[PHỤ THUỘC]** Service Account của ERP đã được cấp quyền `BigQuery Data Viewer` + `BigQuery Job User` trên dataset. **Không cấp quyền ghi** — ERP chỉ đọc.
- **[PHỤ THUỘC]** Dữ liệu hợp đồng khách hàng có sẵn trong CM hoặc ERP để ánh xạ `billing_account_id` / `project_id` → `customer_id` → `contract_id`.
- **[GIẢ ĐỊNH]** Invoice GCP về khoảng ngày 02 hàng tháng, kế toán bắt đầu lấy số từ ngày 03.
- **[GIẢ ĐỊNH]** 2 khách hàng ưu tiên (BitVN, Masan City) phải xuất số trước ngày 07 hàng tháng.
- **[GIẢ ĐỊNH]** Tỷ giá USD/VND lấy từ nguồn Techcombank (đã có tính năng trong ERP, BD-12).
- **[GIẢ ĐỊNH]** Bảng BigQuery được partition theo `usage_start_time`, cluster theo `billing_account_id` — đúng với schema khảo sát thực tế.

---

## 5. Yêu cầu Nghiệp vụ

### 5.1 Kết nối & Thu thập dữ liệu cước GCP (BD-01)

- **5.1.1** Hệ thống tự động kết nối Google BigQuery thông qua Service Account (Key JSON hoặc Workload Identity) với quyền IAM tối thiểu `BigQuery Data Viewer`.
- **5.1.2** Hệ thống truy vấn dữ liệu cước từ bảng Detailed Usage Cost Export, lọc theo `usage_start_time` (bắt buộc — tối ưu chi phí partition scan).
- **5.1.3** Hệ thống tổng hợp (aggregation) dữ liệu theo các chiều: `billing_account_id`, `project.id`, `service.description`, `seller_name`, `invoice.month`.
- **5.1.4** Hệ thống bóc tách mảng `credits` (kiểu `ARRAY<STRUCT>`) bằng `UNNEST`, phân loại theo `credits.type` (`RESELLER_MARGIN`, `PROMOTION`, `COMMITTED_USAGE_DISCOUNT`, v.v.).
- **5.1.5** Hệ thống lưu trữ kết quả tổng hợp theo kỳ cước (tháng) vào database ERP — không lưu dữ liệu thô (raw) từ BigQuery.
- **5.1.6** Hệ thống cấu hình giới hạn `maximum_bytes_billed` cho mọi truy vấn BigQuery, phòng ngừa SQL lỗi gây tốn chi phí.
- **5.1.7** Hệ thống chỉ đọc từ **Materialized View / Scheduled Query** (bảng tổng hợp tháng), không bao giờ quét trực tiếp bảng thô. *[CẦN XÁC NHẬN — Materialized View do team nào tạo & duy trì?]*
- **5.1.8** Hệ thống thực hiện **Data Stability Check**: chạy truy vấn tổng 2 lần liên tiếp (cách nhau N giờ cấu hình được), chỉ cho phép chốt kỳ cước khi số liệu 2 lần chạy không thay đổi.

### 5.2 Phát hiện & Xử lý Gemini API và Credit (BD-02)

- **5.2.1** Hệ thống tự động tách riêng chi phí **Gemini API** dựa trên `service.description` chứa keywords Gemini (Gemini thuộc Marketplace — không được chiết khấu theo hợp đồng).
- **5.2.2** Kế toán có thể cấu hình **ngưỡng bỏ qua** chi phí Gemini (ví dụ: < 0.07 USD thì không tách riêng).
- **5.2.3** Hệ thống tự động phân loại credit theo `credits.type`:
  - `RESELLER_MARGIN`: 100% thuộc CloudAZ — không tính cho khách.
  - `PROMOTION`: Cần xét duyệt — đưa vào luồng phê duyệt.
- **5.2.4** Khi phát hiện khách hàng phát sinh Promotion Credit trong tháng, hệ thống gắn cờ `has_promo_credit = TRUE` và xuất danh sách cho CEO / Sale Admin xét duyệt.
- **5.2.5** CEO / Sale Admin có thể chọn 1 trong 3 trạng thái phân bổ credit cho từng khách:
  - **Khách hưởng 100%**: Trừ trực tiếp vào cước khách.
  - **CloudAZ hưởng 100%**: Ghi nhận doanh thu nội bộ.
  - **Chia sẻ (Split Credit)**: Nhập số tiền cụ thể phân bổ cho khách (ví dụ: hãng cấp $4.000, cho khách $2.500, CloudAZ giữ $1.500).
- **5.2.6** Hệ thống ghi nhận thời điểm phê duyệt, ID người phê duyệt vào **Audit Log**.
- **5.2.7** Hệ thống xuất báo cáo tổng hợp lượng dùng Gemini API của **toàn bộ khách hàng** theo tháng (yêu cầu ưu tiên của kế toán).

### 5.3 Tính cước GCP theo công thức hợp đồng (BD-03)

- **5.3.1** Hệ thống tính cước GCP cho từng khách hàng theo công thức:

  ```
  Số tiền cuối = (Tổng chi phí − Chi phí Gemini) × (1 − Discount%) + Chi phí Gemini + VAT + PDV − Credit đã duyệt
  ```

- **5.3.2** Hệ thống áp dụng **Discount (chiết khấu)** theo điều khoản hợp đồng — tỷ lệ có thể khác nhau theo năm hợp đồng (năm 1, năm 2...). *[CẦN XÁC NHẬN — Bảng discount theo năm cụ thể cho từng loại HĐ?]*
- **5.3.3** Hệ thống quy đổi tỷ giá USD → VND theo tỷ giá Techcombank (tham chiếu BD-12).
- **5.3.4** Hệ thống tính thuế GTGT (VAT) và thuế nhà thầu nước ngoài (FCT) theo quy định. *[CẦN XÁC NHẬN — Cách tính gross-up FCT cụ thể?]*
- **5.3.5** Hệ thống làm tròn số tiền VND theo nghìn đồng. *[CẦN XÁC NHẬN — Làm tròn lên, xuống, hay theo quy tắc 4/5?]*
- **5.3.6** Hệ thống tính **PDV (phí dịch vụ)** theo điều khoản hợp đồng. *[CẦN XÁC NHẬN — PDV tính cố định hay theo % tổng cước?]*
- **5.3.7** Hệ thống hỗ trợ khách hàng có **nhiều hợp đồng / nhiều pháp nhân** — tách tính cước riêng theo từng hợp đồng hiệu lực. *[CẦN XÁC NHẬN — Gộp hay tách invoice khi 1 KH có nhiều pháp nhân?]*

### 5.4 Cấu hình ánh xạ tài nguyên & hợp đồng (BD-04)

- **5.4.1** Kế toán / Admin có thể quản lý bảng **resource_mapping** với các trường:
  - `resource_type`: `billing_account` hoặc `project`
  - `resource_id`: ID tài nguyên GCP
  - `customer_id`: ID khách hàng trong ERP
  - `contract_id`: ID hợp đồng tương ứng
  - `effective_from` / `effective_to`: Khoảng thời gian hiệu lực
- **5.4.2** Hệ thống hỗ trợ trường hợp **1 khách hàng có nhiều billing account**: tạo nhiều dòng mapping cùng `customer_id`.
- **5.4.3** Hệ thống hỗ trợ **đổi pháp nhân giữa các kỳ**: đóng `effective_to` dòng cũ, tạo dòng mới với `contract_id` / pháp nhân mới — dữ liệu usage từ BigQuery giữ nguyên.
- **5.4.4** Khi phát hiện `project_id` hoặc `billing_account_id` xuất hiện trong BigQuery nhưng chưa có trong `resource_mapping`, hệ thống đưa vào hàng đợi **"Tài nguyên chờ gán"** và bật cảnh báo cho kế toán / sale admin trên Dashboard. **Tuyệt đối không được âm thầm bỏ qua** (đây là nguyên nhân gây thất thoát tiền cước hiện tại).
- **5.4.5** Kế toán có thể CRUD (tạo, xem, sửa, xóa) mapping trên giao diện ERP. *[CẦN XÁC NHẬN — Có cần chức năng import/export CSV cho mapping không?]*

### 5.5 Đối soát cước GCP (liên kết BD-14)

- **5.5.1** Hệ thống tự động chạy **đối chiếu chéo 2 chiều** mỗi kỳ: tổng cước tính theo `GROUP BY Project` phải khớp 100% với tổng cước theo `GROUP BY Billing Account`.
- **5.5.2** Hệ thống lưu bảng `reconciliation` song song: số tiền ERP tự động tính, số tiền kế toán nhập tay (nếu có), chênh lệch, và ngưỡng chấp nhận.
- **5.5.3** Màn hình đối soát mặc định **chỉ hiện các dòng có chênh lệch vượt ngưỡng** để kế toán kiểm tra nhanh.
- **5.5.4** Hệ thống đối chiếu tham khảo với **Invoice tổng của hãng Google** hàng tháng — bắt buộc khớp 100% khi lập báo cáo Revenue Assurance (RA).

### 5.6 Vận hành & Giám sát (liên kết BD-18)

- **5.6.1** Hệ thống tuân thủ lịch chốt số: invoice GCP về ngày 02, lấy số từ ngày 03, **BitVN & Masan City trước ngày 07**.
- **5.6.2** Hệ thống giám sát health của BigQuery export: chạy job kiểm tra `MAX(export_time)` định kỳ, cảnh báo quản trị viên khi dữ liệu quá 36 giờ không cập nhật.

---

## 6. Câu hỏi còn Mở — Cần xác nhận với khách hàng

| Mã | Vấn đề cần xác nhận | Trạng thái |
| :--- | :--- | :--- |
| Q-01 | Materialized View trên BigQuery do team nào tạo & duy trì? (ERP team hay Infra team?) | Chờ xác nhận |
| Q-02 | Bảng Discount theo năm hợp đồng cụ thể (năm 1 = X%, năm 2 = Y%...) — có bao nhiêu biến thể? | Chờ xác nhận |
| Q-03 | Cách tính gross-up thuế FCT (thuế nhà thầu nước ngoài) cụ thể cho GCP? | Chờ xác nhận |
| Q-04 | Quy tắc làm tròn VND: làm tròn lên, xuống, hay theo quy tắc ngân hàng (4/5)? | Chờ xác nhận |
| Q-05 | PDV (phí dịch vụ) tính cố định (VND) hay theo phần trăm (%) tổng cước? | Chờ xác nhận |
| Q-06 | Khi 1 khách hàng có nhiều pháp nhân: gộp hay tách invoice riêng? | Chờ xác nhận |
| Q-07 | Có cần chức năng import/export CSV cho bảng resource_mapping không? | Chờ xác nhận |
| Q-08 | SLA (thời hạn) cho CEO/Sale Admin duyệt phân bổ Promotion Credit? (3 ngày? 5 ngày?) | Chờ xác nhận |
| Q-09 | Ví dụ tính toán end-to-end với số thực (1 khách hàng cụ thể) để verify công thức? | Chờ tài liệu |
| Q-10 | Keywords chính xác để lọc Gemini API từ `service.description`? (Cần verify trên dataset thực) | Chờ tài liệu |
| Q-11 | Trường `seller_name` trong BigQuery — xuất hiện ở cấp Standard hay Detailed usage cost? | Chờ verify schema |
| Q-12 | Giá trị chính xác của `credits.type` trên dataset thực ngoài `RESELLER_MARGIN` và `PROMOTION`? (VD: `COMMITTED_USAGE_DISCOUNT`?) | Chờ verify schema |

---

## Phụ lục A — Dữ liệu thực tế đã khảo sát

**Nguồn**: Dataset `billing-data-cloudaz-resell.CloudAZ_Billing_Detailed_Dataset` — khảo sát ngày 2026-09-05.

| Chỉ số | Giá trị USD |
| :--- | :--- |
| Tổng dòng phát sinh credit | 553 bản ghi |
| Tổng chi phí gốc (gross_cost) | $70,056.77 |
| Tổng credit phát sinh | -$51,222.84 |
| — Trong đó PROMOTION (529 dòng) | -$48,707.82 |
| — Trong đó RESELLER_MARGIN (28 dòng) | -$2,763.87 |
| Tổng chi phí thực trả (net_cost) | $18,833.93 |

**Các loại Promotion Credit thực tế ghi nhận**: SMB Credit, Mithra deal, 2024 GFS Cloud Program, Reseller Free Trial, Partner Award Letter.

---

## Phụ lục B — Tài liệu tham chiếu

| Tài liệu | Đường dẫn |
| :--- | :--- |
| Giải pháp kỹ thuật & Kiến trúc GCP | [GiaiPhap_KyThuat_LayDuLieu_GCP.md](GiaiPhap_KyThuat_LayDuLieu_GCP.md) |
| Khảo sát BigQuery thực tế | [BQ_Mapping_GCP_Empirical.md](BQ_Mapping_GCP_Empirical.md) |
| Quy trình lấy hóa đơn thủ công | [QuyTrinh_LayHoaDon_GCP.md](QuyTrinh_LayHoaDon_GCP.md) |
| Cấu hình BigQuery Export | [setup_bigquery_export.md](setup_bigquery_export.md) |
| Dữ liệu mẫu credit | [credit.json](credit.json) |
| Dữ liệu mẫu schema BigQuery | [data.json](data.json) |
| Product Backlog Master | [Product_Backlog_Master.md](../../../Product_Backlog_Master.md) |

---

## Phụ lục C — SQL tham khảo (Production)

### C.1 — Tổng hợp cước & bóc tách credit

```sql
SELECT
  billing_account_id,
  project.id                AS project_id,
  service.description       AS service_name,
  seller_name,
  SUM(cost)                 AS cost_goc,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type = 'RESELLER_MARGIN')) AS reseller_margin,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type = 'PROMOTION'))       AS promotion_credit
FROM `<project>.<dataset>.gcp_billing_export_v1_XXXX`
WHERE usage_start_time >= @tu_ngay
  AND usage_start_time <  @den_ngay
GROUP BY 1, 2, 3, 4
```

### C.2 — Tổng Promotion Credit theo tháng

```sql
SELECT
  invoice.month AS invoice_month,
  LOGICAL_OR((SELECT COUNT(1) FROM UNNEST(credits) WHERE type = 'PROMOTION') > 0) AS has_promo_credit,
  COUNTIF((SELECT COUNT(1) FROM UNNEST(credits) WHERE type = 'PROMOTION') > 0) AS promo_records_count,
  ROUND(SUM(IFNULL((SELECT SUM(amount) FROM UNNEST(credits) WHERE type = 'PROMOTION'), 0)), 2) AS total_promo_credit_amount
FROM `<project>.<dataset>.gcp_billing_export_v1_XXXX`
GROUP BY invoice_month
ORDER BY invoice_month DESC
```
