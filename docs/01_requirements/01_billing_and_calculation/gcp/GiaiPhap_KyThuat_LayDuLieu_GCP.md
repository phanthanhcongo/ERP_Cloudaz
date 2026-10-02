# Giải pháp kỹ thuật & Kiến trúc tính cước — GCP (Google Cloud Platform)

> **Ưu tiên triển khai**: 1/3 — chiếm phần lớn thời gian tính cước thủ công hiện tại (~1,5 ngày/tháng)  
> **Cập nhật gần nhất**: 2026-09-25 (khớp BRD v2.2 — bổ sung Gemini per billing, shared billing rule, tích hợp CM)  
> **Nghiệp vụ gốc**: [BRD_GCP_2026-09-23.md](BRD_GCP_2026-09-23.md) (v2.2)  
> **Tài liệu liên quan**: [CM_Change_Request_Gemini.md](CM_Change_Request_Gemini.md) · [setup_bigquery_export.md](setup_bigquery_export.md)

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

1. **Bảng 1:** Vào **Billing Report** → **Group By: Project** → Chọn kỳ tháng → Bỏ tích `Reseller Margin` → Xuất (~621 dòng).
2. **Bảng 2:** Vào **Billing Report** → **Group By: Sub-Account / Billing ID** → Chọn kỳ tháng → Bỏ tích `Reseller Margin` → Xuất (~94 dòng).
3. Rà soát khoản **Promotion Credit**: nếu Credit thuộc về CloudAZ (Google tài trợ) thì xuất Excel xong phải trừ ở cột Credit và cộng bù vào thu/chi công ty; nếu thuộc Khách hàng thì giữ nguyên.
4. Chi phí **Gemini API** (Marketplace — không được chiết khấu 0% Discount): bị Google gộp chung vào tổng chi phí dịch vụ GCP Reseller (không nằm riêng ở cột nào).
   - **Khách KHÔNG có Gemini:** Dùng kết quả từ CM gen bảng đối soát / DNTT / GWS data luôn (không cần chỉnh sửa).
   - **Khách CÓ Gemini (~40-50%):** CM gen bảng đối soát chưa tách Gemini → Kế toán vào Console khách xem tổng bill + Gemini API riêng → Tách tiền → Tinh chỉnh kết quả trước gửi khách đối soát.
5. Upload 2 file/sheet dữ liệu thô này lên hệ thống CM.
6. Trên CM: Gen **Bảng đối soát chi phí** → Tải Excel về sửa thủ công (tách Gemini API nếu khách có) → Gửi mail khách. Khách chốt → Gen **Đề nghị thanh toán (DNTT)** → Sửa thủ công số tiền → Xuất PDF gửi khách.

**Quy mô**: ~70–80 khách hàng/tháng (~94 Billing Accounts, ~621 Projects).  
**Invoice hãng**: Về khoảng ngày 02 hàng tháng; Kế toán bắt đầu lấy số từ ngày 03.

---

## 3. Kiến trúc TO-BE & Ranh giới trách nhiệm (BigQuery vs ERP)

### Mô hình tích hợp
```
GCP Billing / Channel Services 
    ↓ (Tự động Billing Export)
Google BigQuery Dataset (Standard Export)
    ↓ (ERP backend — BigQuery SDK — gửi SQL query)
JSON kết quả đã aggregation (cost, credits, gemini)
    ↓
    ↓   Cloud Billing API (cloudbilling.billingAccounts.list)
    ↓       ↓ (lấy billing_account_id → displayName)
    ↓       ↓
ERP ghép dữ liệu: cost data + tên subaccount + gemini per billing
    ↓ (ERP xử lý: mapping, công thức, tỷ giá, thuế, đối soát)
    ↓
    ├─→ ERP gen Excel (2 sheet + cột Gemini API) → upload CM
    ├─→ CM gen Bảng đối soát + DNTT (đọc cột Gemini, áp đúng discount)
    └─→ ERP Dashboard: đối soát, cảnh báo, báo cáo Gemini
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
[1] Thu thập          Cloud Billing Export → BigQuery (Standard usage cost data for phase 1102)
        ↓
[2] Tổng hợp          Hai query dữ liệu trên BigQuery: theo project và billing account
        ↓             → Gemini tổng hợp trong query billing account; credit phân loại bằng UNNEST
[3] Lưu & ánh xạ      ERP: lưu snapshot theo invoice month; resource_mapping (project_id → customer_id → contract_id)
        ↓
[4] Tính & Đối soát   ERP: Công thức giá, chiết khấu, Gemini, thuế, tỷ giá → Bảng đối soát
```

---

## 5. Chi tiết bóc tách Credit, Gemini API & SQL Query mẫu

Ba rắc rối lớn nhất của kế toán — **Reseller margin**, **Promotion credit**, và **Gemini API** — đều nằm trong bảng export của GCP, trong đó credit nằm ở dạng mảng lồng `credits` (`ARRAY<STRUCT>`).

### Thông tin kết nối BigQuery đã xác nhận

| Hạng mục | Giá trị |
|---|---|
| **Project** | `billing-data-cloudaz-resell` |
| **Dataset (Standard)** | `CloudAZ_Billing_Standard_Dataset` |
| **Bảng Standard** | `gcp_billing_export_v1_01AF45_CC490F_EEF29A` |
| **Dataset (Detailed)** | `CloudAZ_Billing_Detailed_Dataset` |
| **Bảng Detailed** | `gcp_billing_export_resource_v1_01AF45_CC490F_EEF29A` |

> ⚠️ **Dùng bảng Standard** cho các query tổng hợp theo Project / Billing Account. Bảng Detailed (resource) chứa dữ liệu resource-level, GROUP BY project sẽ ra số **lệch** (cao hơn) so với Console.

### Điều kiện filter bắt buộc

Để kết quả query khớp 100% với Billing Report trên Console:

1. **`invoice.month = 'YYYYMM'`** — filter theo kỳ tháng invoice, KHÔNG dùng `usage_start_time` (Console group theo billing period, không phải usage time).
2. **`cost_type = 'regular'`** — loại bỏ dòng `tax` và `adjustment`. Console hiển thị Usage cost = chỉ `regular`. Nếu gộp cả `tax` thì số sẽ cao hơn (~10% VAT).
3. **Bỏ Reseller Margin** — trong credits, filter `c.type != 'RESELLER_MARGIN'`.

### SQL để lấy 2 bảng dữ liệu (Project Level + Billing Account Level)

**Bảng 1 — Project Level (8 cột, khớp Excel "DATA GCP NHẬP CMP"):** GROUP BY Project, Savings 8/9 bỏ Reseller Margin

```sql
SELECT
  project.name              AS project,
  project.id                AS project_id,
  project.number            AS project_number,
  SUM(cost_at_list)         AS list_cost,
  SUM(cost) - SUM(cost_at_list)
                            AS negotiated_savings,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('COMMITTED_USAGE_DISCOUNT', 'FEE_UTILIZATION_OFFSET')))
                            AS discounts,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('PROMOTION', 'DISCOUNT', 'SUSTAINED_USAGE_DISCOUNT')))
                            AS promotions_and_others,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type = 'PROMOTION'))
                            AS promotional_credits,
  SUM(cost) + SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type != 'RESELLER_MARGIN'))
                            AS subtotal
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A`
WHERE invoice.month = @thang    -- ví dụ '202606'
  AND cost_type = 'regular'
GROUP BY 1, 2, 3
ORDER BY list_cost DESC
```

> **Mapping cột Console → credit type (đã verify T06/2026):**
> | Cột Console / Excel | Nguồn dữ liệu |
> |---|---|
> | **List cost** | `SUM(cost_at_list)` — giá công khai (public on-demand price) |
> | **Negotiated savings** | `SUM(cost) - SUM(cost_at_list)` — chênh lệch giá đàm phán, KHÔNG phải credit |
> | **Discounts** (Console: Savings programs) | credits type `COMMITTED_USAGE_DISCOUNT` + `FEE_UTILIZATION_OFFSET` |
> | **Promotions & others** (Console: Other savings) | credits type `PROMOTION` + `DISCOUNT` (free tier) + `SUSTAINED_USAGE_DISCOUNT` — **gộp nhiều loại** |
> | **Promotional credits** *(tách riêng)* | credits type `PROMOTION` only — coupon/ưu đãi Google, cần Sales/CEO xác nhận phân bổ |
> | **Subtotal** | `SUM(cost)` + tổng credits trừ `RESELLER_MARGIN` |

**Bảng 2 — Billing Account Level (7 cột, khớp Excel "DATA GCP TH2. Billing ID"):** GROUP BY Subaccount

```sql
SELECT
  billing_account_id        AS subaccount_id,
  SUM(cost_at_list)            AS list_cost,
  SUM(cost) - SUM(cost_at_list) AS negotiated_savings,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('COMMITTED_USAGE_DISCOUNT', 'FEE_UTILIZATION_OFFSET')))
                            AS discounts,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('PROMOTION', 'DISCOUNT', 'SUSTAINED_USAGE_DISCOUNT')))
                            AS promotions_and_others,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type = 'PROMOTION'))
                            AS promotional_credits,
  SUM(cost) + SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type != 'RESELLER_MARGIN'))
                            AS subtotal
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A`
WHERE invoice.month = @thang    -- ví dụ '202606'
  AND cost_type = 'regular'
GROUP BY 1
HAVING SUM(cost_at_list) != 0 OR SUM(cost) != 0
ORDER BY list_cost DESC
```

> **Lưu ý về Subaccount name:**
> - Cột `Subaccount name` **không có** trong bảng Standard export của BigQuery.
> - Tên subaccount được lấy qua **Cloud Billing API** (`cloudbilling.billingAccounts.list`) và ghép ở tầng application (server-side) sau khi query BigQuery xong.
> - Service account cần quyền **Billing Account Viewer** (`roles/billing.viewer`) ở cấp **Organization** (`organizations/66691603437`) để thấy toàn bộ ~287 subaccounts.
> - Server cache danh sách tên 5 phút, query BigQuery và gọi API chạy song song (`Promise.all`) để tối ưu tốc độ.
> - `HAVING` loại bỏ các billing account có cost = 0 (không phát sinh chi phí trong kỳ).
> - Không còn dùng lookup table JOIN — đã thay hoàn toàn bằng Cloud Billing API.

> **⚠️ Verify:** Tổng cost của 2 bảng PHẢI khớp 100% (cả 2 queries lấy cùng dữ liệu, chỉ GROUP BY khác)

### Kiểm tra các loại credit thực tế trên dataset

Chạy câu này để verify tên `credits.type` thật trước khi tách savings ra nhiều cột:

```sql
SELECT DISTINCT c.type, c.name, COUNT(*) as cnt
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A`,
UNNEST(credits) c
WHERE invoice.month = @thang
GROUP BY 1, 2
ORDER BY 1
```

Kết quả sẽ cho biết chính xác type nào map vào cột nào trên Console:
- **Negotiated savings** → CUD-related types
- **Savings programs** → `DISCOUNT`, SUD
- **Other savings** → `PROMOTION`, `FREE_TIER`, v.v.

### Xử lý Gemini API *(xác nhận bởi KT doanh thu — Nguyễn Thị Hằng, 25/09/2026)*

Gemini thuộc Marketplace nên **không được chiết khấu** (xem luật Marketplace tại GMP).

**Quy tắc nghiệp vụ đã xác nhận:**
- Gemini API phát sinh theo **từng billing account**, không tách theo project.
- Cột `Gemini API` nằm ở **Sheet 2** (by Billing ID), ngay sau cột `Subtotal`.
- `Gemini API` = phần tiền Gemini **nằm trong** Subtotal → phần được discount = `Subtotal − Gemini API`.
- **Billing chung có Gemini**: dồn Gemini vào **1 khách** do Sales chỉ định, không tách. Khách còn lại match theo project (Sheet 1, không có cột Gemini → gemini = 0).

**Công thức tính cước GCP có Gemini:**
```
discount_amount = (subTotal − geminiTotal) × discount%
```
*(chi tiết code change: xem [CM_Change_Request_Gemini.md](CM_Change_Request_Gemini.md))*

**BigQuery — lọc tách Gemini:**
- Dùng `service.description LIKE '%Gemini%'` để tách dòng Gemini từ BigQuery.
- Không áp dụng ngưỡng tối thiểu: ghi nhận mọi khoản Gemini phát sinh, kể cả khoản dưới $0.01 như $0.004. Không dùng số đã làm tròn để lưu; nếu khoản nào vượt precision/range đã xác minh, từ chối toàn bộ kỳ và giữ snapshot cũ thay vì bỏ riêng khoản đó.
- **Tính năng tự động hóa**: ERP xuất báo cáo tổng hợp lượng dùng Gemini của toàn bộ khách hàng theo tháng (yêu cầu số 1 của kế toán).

### Query lấy danh sách Billing Account phát sinh Credit Promotion

```sql
SELECT
  billing_account_id,
  COUNT(DISTINCT c.name) AS so_loai_promotion,
  ROUND(SUM(c.amount), 2) AS tong_credit_promotion
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A`,
UNNEST(credits) c
WHERE invoice.month = @thang    -- ví dụ '202606'
  AND cost_type = 'regular'
  AND c.type = 'PROMOTION'
GROUP BY 1
HAVING SUM(c.amount) != 0
ORDER BY tong_credit_promotion ASC
```

> Kết quả: mỗi billing account có promotion credit, số loại promotion và tổng tiền. Dùng để kế toán rà soát credit thuộc về khách hay CloudAZ.

> **⚠️ Phân biệt `Promotions & others` vs `Promotional Credits`** *(verify Coderpush T08-2026)*:
> - Cột `Promotions & others` trong Excel export **gộp 3 loại**: `PROMOTION` + `DISCOUNT` (free tier) + `SUSTAINED_USAGE_DISCOUNT` (ví dụ: -$15.90).
> - **Promotional Credits** (toggle riêng trên Console) chỉ là `credits.type = 'PROMOTION'` (ví dụ: -$0.68).
> - Query trên đã filter đúng `type = 'PROMOTION'` → ra số Promotional Credits thật, không lẫn free tier / SUD.
> - Cột `promotional_credits` cũng đã được thêm vào Bảng 1 và Bảng 2 (mục 5 ở trên) để hiển thị song song với `promotions_and_others`.
> - Mặc định `promotions_and_others` **đã bao gồm** promotional credits (trừ sẵn trong Subtotal). Sau khi Sales/CEO xác nhận 3 nhánh: credit thuộc **khách 100%** → giữ nguyên cả 2 cột; credit thuộc **CloudAZ 100%** → **trừ ở `promotions_and_others` và cộng vào `subtotal`**; **chia một phần** → làm đúng theo phần của CloudAZ.
>
> **Công thức điều chỉnh** *(xác nhận KT doanh thu 2026-09-25)* — gọi `X` = phần credit thuộc CloudAZ, credit trong BigQuery mang giá trị **âm**:
>
> ```
> promotions_and_others_sau = promotions_and_others_gốc + X
> subtotal_sau              = subtotal_gốc              − X
> ```
>
> Ví dụ: billing có `promotions_and_others` = −$4,000 và `subtotal` = $10,000, credit $4,000 là của CloudAZ (`X` = −4,000) ⇒ cột promotion về **$0**, subtotal lên **$14,000**. Khách trả $14,000 — không được hưởng khoản credit không phải của mình. Chia đôi ($2,000/bên) ⇒ promotion = −$2,000, subtotal = $12,000.

### Query lấy danh sách Billing Account phát sinh Gemini API

```sql
SELECT
  billing_account_id,
  ROUND(SUM(cost), 2) AS tong_chi_phi_gemini
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A`
WHERE invoice.month = @thang    -- ví dụ '202606'
  AND cost_type = 'regular'
  AND service.description LIKE '%Gemini%'
GROUP BY 1
HAVING SUM(cost) != 0
ORDER BY tong_chi_phi_gemini DESC
```

> Kết quả: mỗi billing account có phát sinh chi phí Gemini API và tổng tiền. Dùng để kế toán tách riêng Gemini khi tính cước (Gemini không được chiết khấu).

### Quy trình phân loại Credit / Promotion trong ERP

**Promotion Credit phát sinh theo billing account** *(xác nhận 25/09/2026)* — không theo project. Khi billing chung (2+ khách), không biết credit thuộc khách nào → cần Sales/CEO xác nhận (cùng pattern với Gemini API).

SQL BigQuery trả về số tiền credit phát sinh. Quyết định **credit thuộc về ai** được thực hiện trên ERP theo quy trình rà soát:
1. ERP gắn cờ Billing Account phát sinh credit trong tháng (`has_promo_credit = TRUE`).
2. ERP kiểm tra billing đó có **nhiều khách** (chung billing) không:
   - **Billing riêng** (1 khách): credit gán thẳng → chuyển bước 3.
   - **Billing chung** (2+ khách): ERP đánh dấu cần **Sales/CEO xác nhận phân bổ** (khách nào hưởng, tỷ lệ bao nhiêu).
3. Kế toán xác định 2 nhánh phân bổ:
   - **Credit thuộc về Khách hàng**: Trừ trực tiếp vào cước khách hàng (được hưởng chiết khấu).
   - **Credit thuộc về CloudAZ** (Google tài trợ): Ghi nhận riêng, cộng bù vào thu chi công ty (không được hưởng chiết khấu).
4. Ghi nhận thời điểm, ID người xác nhận, và lý do phân bổ vào Audit Log.

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
- **Data Stability Check và khóa kỳ: không áp dụng.** Kế toán có thể truy vấn lại; từ phase 1102e, hệ thống hiển thị chênh lệch để kế toán duyệt trước khi thay dữ liệu.

### Tối ưu chi phí & Bảo mật BigQuery
- Phase 1102 đọc bảng GCP Standard Export đã chỉ định, lọc theo `invoice.month` và `cost_type = 'regular'`; không dùng `usage_start_time` thay cho kỳ invoice.
- Không bắt buộc Materialized View/Scheduled Query và không đặt `maximum_bytes_billed` cho phase này. Không giả định partition/cluster thay cho điều kiện lọc kỳ đã chốt.

---

## 9. Liên kết hướng dẫn kỹ thuật

- Hướng dẫn cấu hình xuất dữ liệu cước từ Console sang BigQuery: [setup_bigquery_export.md](setup_bigquery_export.md)
- Yêu cầu chỉnh sửa CM cho Gemini API: [CM_Change_Request_Gemini.md](CM_Change_Request_Gemini.md)
- Khảo sát & ánh xạ credit thực tế từ BigQuery: [BQ_Mapping_GCP_Empirical.md](BQ_Mapping_GCP_Empirical.md)
- BRD nghiệp vụ (v2.2): [BRD_GCP_2026-09-23.md](BRD_GCP_2026-09-23.md)
