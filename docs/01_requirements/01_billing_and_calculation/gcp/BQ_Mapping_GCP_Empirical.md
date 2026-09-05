# KẾT QUẢ KHẢO SÁT & ÁNH XẠ DỮ LIỆU BIGQUERY — THỰC TẾ GCP BILLING

> **Dự án**: ERP CloudAZ — Phân hệ Tính cước · Sản phẩm Google Cloud Platform (GCP)  
> **Nguồn dữ liệu thực tế**: GCP Project `billing-data-cloudaz-resell`  
> **Dataset & Bảng khảo sát**: `CloudAZ_Billing_Detailed_Dataset.gcp_billing_export_resource_v1_01AF45_CC490F_EEF29A`  
> **File dữ liệu mẫu**: [`gcp/credit.json`](credit.json) (553 bản ghi) & [`gcp/data.json`](data.json)  
> **Ngày cập nhật**: 2026-09-05  

---

## 1. Tổng quan Nguồn dữ liệu & Bảng BigQuery Export

- **Project ID**: `billing-data-cloudaz-resell`
- **Dataset**: `CloudAZ_Billing_Detailed_Dataset`
- **Bảng Billing Export chi tiết**: `gcp_billing_export_resource_v1_01AF45_CC490F_EEF29A`
- **Đặc điểm Cấu trúc**: Cấu trúc mảng `credits` chuẩn (`REPEATED STRUCT`) chứa thông tin chi tiết về từng khoản giảm giá (`type`, `name`, `full_name`, `amount`).

---

## 2. Quy trình Kế toán AS-IS & Thao tác trên Web Console

### 2.1 Các thao tác lọc chuẩn trên Google Cloud Billing Console:
1. **Khung thời gian (Time Range)**: Chọn *Custom Range* từ ngày `01` đầu tháng đến ngày cuối tháng (VD: `01/08/2026` – `31/08/2026`).
2. **Nhóm theo dữ liệu (Group by)**:
   - **`Group by: Project`**: Lấy số liệu tổng hợp theo Project để tính tiền cho khách.
   - **`Group by: Service`**: Lấy số liệu phân loại theo dịch vụ để **tách riêng chi phí Gemini API** (Gemini không có discount).
3. **Bỏ tích Reseller Margin**:
   - Trên giao diện Console mới, nhãn này được hiển thị là **`Negotiated savings`** trong mục menu `Savings`.
   - Gạt TẮT công tắc `Negotiated savings` để loại bỏ phần chiết khấu của CloudAZ, đưa màn hình về đúng giá tính cho khách.
4. **Kiểm tra Promotion Credit**:
   - Gạt TẮT/BẬT thử công tắc **`Promotional credits`** để so sánh số chênh lệch trước và sau khi gạt. Nếu số tiền thay đổi $\rightarrow$ Khách có phát sinh Credit trong tháng.

### 2.2 Giải thích các chỉ số trên Console:
- **`Includes -$11.95 in savings`**: Báo hiệu trong con số tổng hiển thị đã bao gồm khoản tiết kiệm/giảm giá -$11.95 USD. Giá gốc chưa giảm = Tổng hiển thị + $11.95.
- **`Savings (1 of 2)`**: Thể hiện đang bật 1 nhóm tiết kiệm (ví dụ: `Spending-based discounts`) và đang tắt 1 nhóm (`Promotional credits` hoặc `Negotiated savings`).

---

## 3. Cơ chế Phân loại & Xử lý Credit trong ERP

### 3.1 Khả năng phân biệt qua dữ liệu BigQuery:
1. **`credits.type = 'RESELLER_MARGIN'`**:
   - **Chiết khấu đối tác**: Thuộc về 100% CloudAZ, không tính cho khách.
2. **`credits.type = 'PROMOTION'`**:
   - **Khoản khuyến mãi/Coupon**: Thể hiện các gói ưu đãi (VD: `SMB Credit`, `Mithra deal`, `2024 GFS Cloud Program`, `Reseller Free Trial`, `Partner Award Letter`).

### 3.2 Lý do bắt buộc có bước Xác nhận từ CEO / Sale Admin:
- Dữ liệu Google **chỉ ghi nhận tổng tiền Credit cấp vào Console** (VD: cấp $4,000 credit).
- Google **không lưu thỏa thuận thương mại nội bộ** giữa CloudAZ và Khách hàng (VD: CloudAZ cho khách hưởng $2,500, CloudAZ giữ lại $1,500).
- Do đó, khi ERP phát hiện `has_promo_credit = TRUE`, hệ thống sẽ gắn cờ và xuất báo cáo cho **CEO / Sale Admin chọn 1 trong 3 trạng thái phân bổ**:
  - 🟢 **Khách hưởng 100%**
  - 🔴 **CloudAZ hưởng 100%**
  - 🟡 **Chia một phần (Split Credit)** (nhập số tiền cụ thể phân bổ cho khách).

---

## 4. Truy vấn SQL Sản xuất (Production SQL)

### 4.1 SQL Lọc các dòng phát sinh Credit & Chi tiết
```sql
SELECT 
  invoice.month AS invoice_month,
  project.name AS project_name,
  service.description AS service_description,
  sku.description AS sku_description,
  cost AS gross_cost,
  ROUND((SELECT SUM(amount) FROM UNNEST(credits)), 6) AS row_credit_amount,
  (SELECT STRING_AGG(CONCAT(type, ': ', IFNULL(full_name, name)), ' | ') FROM UNNEST(credits)) AS credit_info,
  ROUND(cost + (SELECT SUM(amount) FROM UNNEST(credits)), 6) AS net_cost
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Detailed_Dataset.gcp_billing_export_resource_v1_01AF45_CC490F_EEF29A`
WHERE ARRAY_LENGTH(credits) > 0
ORDER BY row_credit_amount ASC;
```

### 4.2 SQL Lọc & Tính TỔNG SỐ TIỀN PROMOTION CREDIT PHÁT SINH
```sql
SELECT 
  invoice.month AS invoice_month,
  LOGICAL_OR((SELECT COUNT(1) FROM UNNEST(credits) WHERE type = 'PROMOTION') > 0) AS has_promo_credit,
  COUNTIF((SELECT COUNT(1) FROM UNNEST(credits) WHERE type = 'PROMOTION') > 0) AS promo_records_count,
  ROUND(SUM(IFNULL((SELECT SUM(amount) FROM UNNEST(credits) WHERE type = 'PROMOTION'), 0)), 2) AS total_promo_credit_amount
FROM `billing-data-cloudaz-resell.CloudAZ_Billing_Detailed_Dataset.gcp_billing_export_resource_v1_01AF45_CC490F_EEF29A`
GROUP BY invoice_month
ORDER BY invoice_month DESC;
```

---

## 5. Số liệu Thống kê Khảo sát Thực tế từ `credit.json` (553 bản ghi)

Dựa trên dữ liệu khảo sát thực tế từ file [`credit.json`](credit.json):

| Chỉ số Thống kê | Con số USD | Quy đổi Tiền Việt (Tỷ giá ~25,450 VNĐ/USD) |
| :--- | :--- | :--- |
| **Tổng số dòng phát sinh Credit** | **553 bản ghi** | - |
| **Tổng chi phí gốc (`gross_cost`)** | **$70,056.77 USD** | **~1,782,944,000 VNĐ** |
| 💰 **TỔNG CREDIT PHÁT SINH (`row_credit_amount`)** | **-$51,222.84 USD** | **~-$1,303,621,000 VNĐ** (~1.30 tỷ đồng) |
| 🎁 **Trong đó: PROMOTION CREDIT (529 dòng)** | **-$48,707.82 USD** | **~-$1,239,614,000 VNĐ** (~1.24 tỷ đồng) |
| 🏢 **Trong đó: RESELLER MARGIN (28 dòng)** | **-$2,763.87 USD** | **~-$70,340,000 VNĐ** (~70 triệu đồng) |
| **Tổng chi phí thực trả (`net_cost`)** | **$18,833.93 USD** | **~479,323,000 VNĐ** |
