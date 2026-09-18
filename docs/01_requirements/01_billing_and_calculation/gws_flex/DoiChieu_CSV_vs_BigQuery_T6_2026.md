# KẾT QUẢ ĐỐI CHIẾU CSV HÓA ĐƠN vs BIGQUERY EXPORT — GWS THÁNG 6/2026

> **Ngày thực hiện**: 2026-09-09  
> **Hóa đơn đối chiếu**: 5610176163 (kỳ 06/2026, Invoice amount: 178,069.30 USD)  
> **Nguồn CSV**: File `5610176163 GWS T6.2026.xlsx` — Sheet "5610176163 CSV" (kế toán tải từ Partner Sales Console)  
> **Nguồn BigQuery**: `billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`  
> **Bộ lọc BigQuery**: `invoice.month = '202606'`, `cost_type = 'regular'`

---

## 1. Mục đích

Xác định chính xác **cột nào trong BigQuery** tương ứng với **cột `Amount` trên CSV** mà kế toán tải từ Partner Sales Console để dùng trực tiếp — nhằm đảm bảo ERP query BigQuery ra đúng số kế toán đang dùng.

---

## 2. Phương pháp

1. Chọn 5 domain mẫu từ CSV (đa dạng: Commitment, Usage, nhiều SKU, nhiều order trên cùng domain).
2. Query BigQuery cùng `invoice.month = '202606'`, `cost_type = 'regular'`, lọc theo domain + order_id.
3. So sánh trực tiếp 3 cột: `cost`, `customer_cost`, và CSV `Amount`.

---

## 3. Kết quả Spot-check

### 3.1 Domain đơn giản (Commitment — 1 dòng/domain)

| Domain | Order | Qty | CSV Amount | BQ `cost` | BQ `customer_cost` | Khớp? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2btalent.com | 8222370361-02 | 110 | **415.80** | 415.80 | 415.80 | ✅ Cả 3 giống nhau |
| 9pay.vn | 5223392026-20 | 245 | **1,200.50** | 1,200.50 | 1,200.50 | ✅ Cả 3 giống nhau |
| abic.com.vn | 7909650816-07 | 90 | **837.90** | 837.90 | 837.90 | ✅ Cả 3 giống nhau |
| abic.com.vn | 7909744708-07 | 954 | **2,337.30** | 2,337.30 | 2,337.30 | ✅ Cả 3 giống nhau |

**Nhận xét**: Với dòng Commitment, BigQuery có **2 row mỗi order** (1 row chứa giá trị, 1 row qty=0 cost=0 — dòng metadata). Cần SUM hoặc lấy row có qty > 0.

### 3.2 Domain Usage/Flex (tính theo ngày)

| Domain | Order | CSV (1 dòng) | BQ (nhiều dòng) |
| :--- | :--- | :--- | :--- |
| 5starsproxy.vn | 10905033293-09 | Qty=2, Amount=**5.88** | **60+ dòng**, mỗi ngày có 2 dòng (dương + âm adjustment), SUM(cost) = **5.88** |

**Nhận xét**: Gói Usage/Flex trên BigQuery lưu **chi tiết từng ngày** với các cặp dòng +/- (tăng/giảm seat hằng ngày). CSV đã **gộp net** thành 1 dòng duy nhất theo order cho cả tháng.

### 3.3 Domain phức tạp (đổi gói giữa tháng)

| Domain | Tình huống | CSV | BQ |
| :--- | :--- | :--- | :--- |
| apanano.com | Commitment → Usage → New commitment (3 order_id khác nhau trên cùng SKU) | 3 dòng riêng biệt, Amount riêng từng order | Nhiều dòng mỗi order, SUM group by order khớp với CSV |

---

## 4. Phát hiện Chính

### 4.1 `cost` = `customer_cost` = CSV Amount

> **CloudAZ hiện chưa cấu hình `CustomerRepricingConfig`** (hoặc markup = 0%).  
> Do đó `cost` và `customer_cost` có giá trị **giống hệt nhau** trên toàn bộ dữ liệu hiện tại.

Điều này giải thích tại sao kế toán nói "tải CSV về dùng luôn, không có phần credit hay reseller margin" — vì trên thực tế hiện tại **không có margin** được cấu hình.

### 4.2 CSV đã gộp net, BigQuery lưu chi tiết

| Đặc điểm | CSV (Partner Sales Console) | BigQuery Export |
| :--- | :--- | :--- |
| **Granularity** | 1 dòng / domain / order / tháng | Nhiều dòng / domain / order (theo ngày với Flex, 2 row với Commitment) |
| **Amount** | Số net cuối cùng | Từng dòng nhỏ, cần `SUM()` |
| **Tax** | Không hiển thị | Có dòng riêng `cost_type = 'tax'` |
| **Credits** | Đã trừ sẵn (ẩn) | Có mảng `credits[]` với `type`, `amount` |
| **Reseller margin** | Đã trừ sẵn (ẩn) — nhưng hiện = 0 | Nằm trong `credits` type `RESELLER_MARGIN` — hiện = 0 |
| **Adjustment** | Gộp vào | Dòng riêng `cost_type = 'adjustment'` |

### 4.3 Dòng metadata (qty=0, cost=0)

Mỗi order Commitment trên BigQuery có **1 dòng phụ** với `usage.amount = 0` và `cost = 0`. Dòng này không ảnh hưởng tổng nhưng cần lưu ý khi đếm row count hoặc lấy quantity.

### 4.4 Credits và Margin hiện tại

Truy vấn thực tế cho thấy:
- `reseller_margin` = 0 trên toàn bộ dữ liệu tháng 6
- `promotion_credit` = 0
- `total_credits` = 0

→ Xác nhận CloudAZ **chưa bật repricing** và **không có promotion** nào đang active.

---

## 5. Khuyến nghị cho ERP

### 5.1 Query chuẩn để tái tạo đúng dạng CSV

```sql
SELECT
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/domain_name')       AS domain_name,
  sku.description                                              AS subscription,
  COALESCE(
    (SELECT value FROM UNNEST(system_labels)
       WHERE key = 'workspace.googleapis.com/usage_type'),
    cost_type
  )                                                            AS description,
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/order_id')          AS order_name,
  MIN(DATE(usage_start_time))                                  AS start_date,
  MAX(DATE(usage_end_time))                                    AS end_date,
  -- Quantity: lấy max thay vì sum vì BigQuery có nhiều dòng +/- hằng ngày
  MAX(usage.amount)                                            AS quantity,
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/purchase_order_id') AS po_number,
  ROUND(SUM(customer_cost), 2)                                 AS amount,
  billing_account_id                                           AS customer_id,
  sku.id                                                       AS sku_id

FROM `billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`
WHERE invoice.month = @billing_month   -- VD: '202606'
  AND cost_type = 'regular'
  AND LOWER(sku.description) != 'tax'
GROUP BY domain_name, subscription, description, order_name, po_number, customer_id, sku_id
ORDER BY domain_name, start_date ASC
```

### 5.2 Query chỉ lấy dòng Usage (Flex) — bỏ Commitment

Giữ nguyên toàn bộ query §5.1, chỉ bổ sung một điều kiện lọc vào mệnh đề `WHERE`:

```sql
  AND (SELECT value FROM UNNEST(system_labels)
       WHERE key = 'workspace.googleapis.com/usage_type') = 'FLEXIBLE_SEATS_ITEM'
```

> ⚠️ **Lưu ý**: Google **chưa công bố chính thức** tập giá trị của `usage_type` (xem BRD §R-05). Giá trị `FLEXIBLE_SEATS_ITEM` được phát hiện qua khảo sát thực nghiệm. Theo BRD §5.2.3, luật lọc chính thức trong ERP phải dựa trên `plan.planName` từ Reseller API (`FLEXIBLE` vs `ANNUAL`), không phải `usage_type`. Query trên chỉ dùng cho mục đích **kiểm tra nhanh / ad-hoc**, không dùng làm luật nghiệp vụ production.

### 5.3 Nên dùng `customer_cost` thay vì `cost`

Dù hiện tại 2 cột giống nhau, **nên dùng `customer_cost`** ngay từ đầu vì:
- Khi CloudAZ cấu hình `CustomerRepricingConfig` sau này, `customer_cost` sẽ tự tách ra đúng giá bán cho khách
- `cost` sẽ thể hiện giá CloudAZ trả Google (thấp hơn)
- Không cần sửa code khi bật repricing

### 5.4 Cần SUM() GROUP BY khi so sánh với CSV

Do BigQuery lưu chi tiết theo ngày (Flex) hoặc có dòng metadata (Commitment), bắt buộc phải `GROUP BY domain_name, order_name` và `SUM(cost)` / `SUM(customer_cost)` mới khớp 1:1 với dòng CSV.

### 5.5 Quantity cần xử lý đặc biệt

- **Commitment**: `MAX(usage.amount)` cho kết quả đúng (bỏ qua dòng qty=0)
- **Usage/Flex**: Qty thay đổi hằng ngày (có +/-). `MAX(usage.amount)` cho seat cao nhất trong tháng. CSV cũng hiển thị seat cuối kỳ, không phải tổng.

> ⚠️ **Cần kiểm tra thêm**: Logic lấy Quantity cho Flex chưa chắc là MAX. Có thể là seat cuối kỳ (last day) hoặc seat cao nhất. So sánh thêm vài domain Flex phức tạp để xác định chính xác.

---

## 6. Hạn chế & Việc cần làm tiếp

| # | Hạng mục | Trạng thái |
| :--- | :--- | :--- |
| 1 | Kiểm tra tổng `SUM(amount)` toàn bộ domain vs Invoice amount 178,069.30 | ⏳ Chưa chạy |
| 2 | Xác minh logic Quantity cho dòng Usage/Flex (MAX hay last-day?) | ⏳ Cần thêm spot-check |
| 3 | Kiểm tra khi CloudAZ bật repricing thì `customer_cost` có tách ra không | ⏳ Phụ thuộc cấu hình |
| 4 | So sánh thêm tháng 3 (data.json) để xác nhận pattern nhất quán | ⏳ Chưa chạy |
| 5 | Xác minh cột Description: CSV ghi "Commitment"/"Usage" nhưng BQ ghi `COMMITMENT_SEATS_CHANGE_ITEM`/`FLEXIBLE_SEATS_ITEM` — cần bảng mapping | ⏳ Chưa tạo |

---

## 7. Tham chiếu

- Hóa đơn mẫu: [5610176163_GWS_T6_2026.md](5610176163_GWS_T6_2026.md)
- Dữ liệu BigQuery mẫu tháng 3: [data.json](data.json)
- BRD tính cước GWS Flex: [BRD_TinhCuoc_GWS_Flex_2026-09-03.md](BRD_TinhCuoc_GWS_Flex_2026-09-03.md)
- Mapping schema BigQuery: [BQ_Mapping_GWS_Flex_Empirical.md](BQ_Mapping_GWS_Flex_Empirical.md)
