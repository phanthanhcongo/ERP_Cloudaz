# Giải pháp kỹ thuật & Kiến trúc tính cước — GCP (Google Cloud Platform)

> **Ưu tiên triển khai**: 1/3 — chiếm phần lớn thời gian tính cước thủ công hiện tại (~1,5 ngày/tháng)  
> **Nghiệp vụ gốc**: [BRD Tính cước Google](../Google/BRD_TinhCuoc_Google_2026-09-03.md)  
> **Tài liệu liên quan trong thư mục**: [QuyTrinh_LayHoaDon_GCP.md](QuyTrinh_LayHoaDon_GCP.md) · [setup_bigquery_export.md](setup_bigquery_export.md)

---

## 1. Phụ thuộc chặn — Yêu cầu quyền truy cập & Verify Schema

Đội phát triển hệ thống ERP không cần thao tác trực tiếp trên Console. ERP được kết nối thông qua **Service Account** (Key JSON) hoặc **Workload Identity** với quyền IAM tối thiểu (`BigQuery Data Viewer`) trên Dataset BigQuery chứa thông tin xuất cước.

**Việc cần làm đầu tiên khi có dataset:** Verify schema thực tế trước khi viết SQL sản xuất:
- Tên chính xác của các giá trị `credits.type` trên dataset đang dùng (`RESELLER_MARGIN`, `PROMOTION`, `COMMITTED_USAGE_DISCOUNT`, v.v.).
- Trường `seller_name` xuất hiện ở cấp nào (tùy thuộc bật Standard usage cost hay Detailed usage cost).
- Xác nhận ngữ nghĩa các cột để đảm bảo tính toán khớp với hóa đơn hãng.

---

## 2. Hiện trạng (AS-IS)

Hãng Google phát hành **một invoice tổng** cho toàn bộ khách hàng (ví dụ: >600.000 USD gộp 70–80 khách hàng), không tách chi tiết theo từng khách. Với từng khách hàng, kế toán phải mở link billing riêng trên Console rồi thao tác thủ công:

1. Lọc đúng tháng (Console mặc định có thể lệch khoảng ngày theo múi giờ).
2. Chọn đúng hãng, `group by project`.
3. **Bỏ tích Reseller margin** để ra số thực dùng của khách.
4. **Bật/tắt tích promotion credit** để so số chênh lệch, dò xem khách có credit hay không.
5. Chuyển sang `group by service` — chỉ ở chế độ này mới nhìn thấy **Gemini API**.
6. Chụp màn hình lượng dùng làm bằng chứng gửi khách hàng.
7. Copy tay 2 bảng dữ liệu lên hệ thống CM: bảng theo **Billing ID** (~94 dòng) và bảng theo **Project** (~621 dòng), copy thủ công lần lượt qua hàng chục trang.

**Quy mô**: ~70–80 khách hàng/tháng.  
**Invoice hãng**: Về khoảng ngày 02 hàng tháng; Kế toán bắt đầu lấy số từ ngày 03.

---

## 3. Kiến trúc TO-BE & Ranh giới trách nhiệm (BigQuery vs ERP)

### Mô hình tích hợp
```
GCP Billing / Channel Services 
    ↓ (Tự động Billing Export)
Google BigQuery Dataset
    ↓ (ERP backend dùng BigQuery SDK / REST API gửi SQL query)
Nhận về JSON kết quả đã aggregation
    ↓ (ERP xử lý mapping, công thức hợp đồng, tỷ giá, thuế, đối soát)
Báo cáo cước & Hóa đơn khách hàng
```

### Ranh giới trách nhiệm

| Tầng hệ thống | Chịu trách nhiệm | KHÔNG được biết |
| :--- | :--- | :--- |
| **BigQuery** | Aggregation lượng dùng, bóc tách credit theo loại (`UNNEST`), xuất ra `(kỳ, billing_account, project, service, seller, loại credit)` | Khách hàng, hợp đồng, tỷ giá, thuế, làm tròn |
| **ERP** | Ánh xạ tài nguyên (`resource_mapping`) → khách → hợp đồng → pháp nhân, công thức hợp đồng, discount theo năm, tỷ giá, thuế FCT, làm tròn nghìn, phân loại credit, đối soát, audit log | — |

> ⚠️ **Nguyên tắc cốt lõi: BigQuery không được biết khái niệm "khách hàng" hay "hợp đồng".**  
> Không chôn logic hợp đồng vào SQL BigQuery vì hợp đồng/phụ lục thay đổi liên tục, kế toán phải sửa được tay có lưu vết (Audit log), và phân loại credit cần sự phê duyệt của Sales/CEO.

---

## 4. Bốn tầng xử lý dữ liệu

```
[1] Thu thập          Cloud Billing Export → BigQuery (Detailed usage cost data)
        ↓
[2] Tổng hợp          SQL trên BigQuery: GROUP BY + UNNEST(credits)
        ↓             → Bảng tổng hợp theo tháng (Materialized View / Scheduled Query)
[3] Ánh xạ            ERP: resource_mapping (project_id → customer_id → contract_id)
        ↓
[4] Tính & Đối soát   ERP: Công thức giá, chiết khấu, Gemini, thuế, tỷ giá → Bảng đối soát
```

---

## 5. Chi tiết bóc tách Credit, Gemini API & SQL Query mẫu

Ba rắc rối lớn nhất của kế toán — **Reseller margin**, **Promotion credit**, và **Gemini API** — đều nằm trong bảng export của GCP, trong đó credit nằm ở dạng mảng lồng `credits` (`ARRAY<STRUCT>`).

### Câu SQL tổng hợp bóc tách credit chuẩn:

```sql
SELECT
  billing_account_id,
  project.id                AS project_id,
  service.description       AS service_name,
  seller_name,
  SUM(cost)                 AS cost_goc,
  -- Bóc tách Reseller Margin
  SUM((SELECT COALESCE(SUM(c.amount), 0) 
       FROM UNNEST(credits) c 
       WHERE c.type = 'RESELLER_MARGIN')) AS reseller_margin,
  -- Bóc tách Promotion Credit
  SUM((SELECT COALESCE(SUM(c.amount), 0) 
       FROM UNNEST(credits) c 
       WHERE c.type = 'PROMOTION'))       AS promotion_credit
FROM `<your-project-id>.<your-dataset-id>.gcp_billing_export_v1_XXXX`
WHERE usage_start_time >= @tu_ngay
  AND usage_start_time <  @den_ngay
GROUP BY 1, 2, 3, 4
```

### Xử lý Gemini API
Gemini thuộc Marketplace nên **không được chiết khấu** (xem luật Marketplace tại GMP).
- **Công thức tính cước GCP có Gemini**:
  $$\text{Số tiền cuối} = (\text{Tổng chi phí} - \text{Chi phí Gemini}) \times \text{Công thức hợp đồng} + \text{Chi phí Gemini}$$
- Lọc tách dòng Gemini dựa vào `service.description` chứa keywords Gemini API.
- Bỏ qua bóc tách riêng nếu chi phí Gemini dưới ngưỡng cấu hình (ví dụ: < 0.07 USD).
- **Tính năng tự động hóa**: ERP xuất báo cáo tổng hợp lượng dùng Gemini của toàn bộ khách hàng theo tháng (yêu cầu số 1 của kế toán).

### Quy trình phân loại Credit / Promotion trong ERP
SQL BigQuery trả về số tiền credit phát sinh. Quyết định **credit thuộc về ai** được thực hiện trên ERP theo quy trình:
1. ERP xuất danh sách khách hàng phát sinh credit trong tháng.
2. Kế toán gửi Sales / Sale Admin / CEO xác nhận.
3. Phân loại 3 trạng thái:
   - *Toàn bộ thuộc khách hàng*: Trừ trực tiếp vào cước khách.
   - *Toàn bộ thuộc Cloudaz*: Ghi nhận doanh thu/nội bộ Cloudaz.
   - *Chia sẻ một phần*: Ví dụ hãng cấp 4.000 USD credit, cho khách 2.500 USD, Cloudaz giữ 1.500 USD.
4. Ghi nhận thời điểm và ID người phê duyệt vào Audit Log.

---

## 6. Tầng ánh xạ tài nguyên → Khách hàng (`resource_mapping`)

Mỗi dòng dữ liệu từ BigQuery có `billing_account_id` và `project.id`. Tầng ERP ánh xạ sang **Khách hàng → Hợp đồng → Pháp nhân xuất hóa đơn**.

### Bảng `resource_mapping` (ERP)
- `resource_type`: `billing_account` | `project`
- `resource_id`: Giá trị ID tương ứng
- `customer_id`: ID khách hàng trong ERP
- `contract_id`: ID hợp đồng tương ứng
- `effective_from` / `effective_to`: Khoảng thời gian hiệu lực

### Xử lý các tình huống thực tế:
- **1 khách có 2 billing account**: Tạo 2 dòng mapping cùng `customer_id`.
- **Đổi pháp nhân giữa các kỳ**: Đóng `effective_to` dòng cũ, tạo dòng mới với `contract_id`/pháp nhân mới. Dữ liệu usage từ BigQuery giữ nguyên.

### Quy trình xử lý ID / Project lạ (Chưa gán khách):
Khi phát hiện `project.id` xuất hiện trong BigQuery nhưng chưa có trong `resource_mapping`:
- Đưa vào hàng đợi **"Tài nguyên chờ gán"**.
- Bật cảnh báo cho kế toán / sale admin trên Dashboard.
- **Tuyệt đối không âm thầm bỏ qua** (nguyên nhân gây thất thoát tiền cước hiện tại).

---

## 7. Tầng đối chiếu & Đối soát (Reconciliation)

Bảng đối soát là **điều kiện nghiệm thu bắt buộc** cho GCP.

1. **Bảng `reconciliation` (ERP)** lưu song song:
   - Số tiền ERP tự động tính
   - Số tiền kế toán nhập tay (nếu có)
   - Chênh lệch & Ngưỡng chấp nhận (dưới ngưỡng = Tốt, vượt ngưỡng = Cảnh báo)
   - Trạng thái đối soát
2. **Màn hình đối soát**: Mặc định **chỉ hiện các dòng có chênh lệch vượt ngưỡng** để kế toán kiểm tra nhanh.
3. **Đối chiếu chéo 2 chiều (Internal Check)**:
   - Tổng cước tính theo `GROUP BY Project` phải khớp 100% với tổng cước tính theo `GROUP BY Billing Account`. ERP tự động chạy câu query kiểm tra 2 chiều này mỗi kỳ.
4. **Đối chiếu với Invoice tổng của hãng**: Cảnh báo tham khảo hàng tháng; bắt buộc khớp 100% khi lập báo cáo Revenue Assurance (RA).

---

## 8. Lịch chốt số & Tối ưu chi phí BigQuery

### Lịch chốt số
- Invoice GCP về khoảng **ngày 02**. Kế toán bắt đầu lấy số từ **ngày 03**.
- **Ràng buộc cứng**: 2 khách hàng ưu tiên (BitVN, Masan City) phải xuất số trước **ngày 07**.
- **Cơ chế kiểm tra ổn định dữ liệu (Data Stability Check)**: Chạy tổng tự động 2 lần liên tiếp (cách nhau N giờ). Chỉ chốt kỳ cước khi số liệu 2 lần chạy không có thay đổi (tránh trường hợp Google cập nhật số muộn).

### Tối ưu chi phí & Bảo mật BigQuery
- **Partitioning**: Bắt buộc query theo `usage_start_time`.
- **Clustering**: Cluster theo `billing_account_id` để tối ưu quét dữ liệu khi lọc.
- **Materialized View / Scheduled Query**: ERP chỉ đọc từ bảng tổng hợp tháng, **không bao giờ quét trực tiếp bảng thô (raw detailed export)**.
- **`maximum_bytes_billed`**: Cấu hình giới hạn dung lượng quét tối đa cho mọi câu query từ ERP để phòng ngừa SQL lỗi gây tốn chi phí.

---

## 9. Liên kết hướng dẫn kỹ thuật

- Hướng dẫn cấu hình xuất dữ liệu cước từ Console sang BigQuery: [setup_bigquery_export.md](setup_bigquery_export.md)
- Quy trình lấy hóa đơn thủ công trên Console (dùng khi cần đối chiếu): [QuyTrinh_LayHoaDon_GCP.md](QuyTrinh_LayHoaDon_GCP.md)
