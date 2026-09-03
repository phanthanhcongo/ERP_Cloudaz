# Giải pháp kỹ thuật & Kiến trúc tính cước — GMP / GMap (Google Cloud Marketplace)

> **Ưu tiên triển khai**: 2/3 — dùng chung hạ tầng với GCP nên chi phí bổ sung thấp  
> **Nghiệp vụ gốc**: [BRD Tính cước Google](../Google/BRD_TinhCuoc_Google_2026-09-03.md)  
> **Tài liệu liên quan trong thư mục**: [QuyTrinh_LayHoaDon_GMP.md](QuyTrinh_LayHoaDon_GMP.md) · Setup BigQuery dùng chung: [../GCP/setup_bigquery_export.md](../GCP/setup_bigquery_export.md)

---

## 1. Đính chính khái niệm quan trọng

> 💡 **GMP trong nghiệp vụ Cloudaz là Google Cloud Marketplace (GMap)**, không phải *Google Marketing Platform* (DV360, SA360, Campaign Manager).

Do đó, toàn bộ thiết kế cũ về việc dựng luồng tích hợp riêng qua BigQuery Data Transfer Service cho GMP đã được bãi bỏ.

---

## 2. Kết luận kiến trúc: KHÔNG cần luồng tích hợp riêng

Google Cloud Marketplace là nơi các nhà cung cấp bên thứ ba (ISV - ví dụ: ONI, MongoDB, Datadog...) bán sản phẩm/dịch vụ và **được phát sinh cước trực tiếp trên chính Cloud Billing Account GCP của khách hàng**.

Do đó:
- Dữ liệu GMap **đã nằm sẵn trong Cloud Billing Export sang BigQuery** của GCP ([GiaiPhap_KyThuat_LayDuLieu_GCP.md](../GCP/GiaiPhap_KyThuat_LayDuLieu_GCP.md)).
- **Mô hình**: Dùng lại 100% luồng BigQuery của GCP, chỉ khác điều kiện lọc trong câu lệnh truy vấn SQL.
- Loại bỏ hoàn toàn chi phí xây dựng, vận hành và phân mảnh cấu hình của một pipeline mới.

---

## 3. Hiện trạng (AS-IS)

- Mỗi khách hàng thường có **1 view link** riêng để theo dõi Marketplace, nhưng cũng có trường hợp **1 view link chứa nhiều khách hàng** — thực tế ghi nhận: **1 view link chứa 23 project** của nhiều khách khác nhau.
- Ngược lại, có khách hàng sở hữu 2 view link hoặc 2 project → kế toán phải cộng thủ công.
- Cách lấy số tương tự GCP nhưng đơn giản hơn: không có credit, không có Gemini API để bóc tách.
- **ONI** là nhà bán (ISV) trên Marketplace, không phải Google.
- Kế toán vẫn lập file Excel tính GMap riêng để đối chiếu.

**Quy mô**: ~40 khách hàng/tháng.  
**Invoice hãng**: Về khoảng ngày 05–08 hàng tháng (có tháng đến ngày 09 muộn hơn GCP).

---

## 4. Cách phân biệt giao dịch Marketplace trong BigQuery

Để bóc tách sản phẩm Marketplace ra khỏi các dịch vụ hạ tầng thuần GCP, sử dụng các trường dữ liệu sau trong bảng export BigQuery:

| Trường dữ liệu | Ý nghĩa & Mục đích |
| :--- | :--- |
| `seller_name` | Nhận diện giao dịch bán bởi bên thứ ba (ISV ≠ `Google` hoặc `Google Cloud`) |
| `service.description` | Tên dịch vụ / sản phẩm cụ thể trên Marketplace |
| `sku.description` | Chi tiết SKU sản phẩm |

> ⚠️ **Cần verify trên dataset thật**: Tên chính xác và ngữ nghĩa của `seller_name` phụ thuộc vào loại export đang bật (Standard vs Detailed usage cost).

---

## 5. Quy tắc nghiệp vụ then chốt: KHÔNG chiết khấu & KHÔNG Promotion Credit

Giao dịch Marketplace **không được hưởng chiết khấu hợp đồng và không được dùng promotion credit của Google** → Phải tính nguyên giá gốc cho khách hàng.

Đây là **quy tắc gốc** giải thích các luật nghiệp vụ kế toán đang áp dụng thủ công:
1. Gemini API không được chiết khấu (vì Gemini thuộc hệ thống Marketplace).
2. GMap không áp dụng chiết khấu cho khách hàng.
3. GMap không có promotion credit.

### Thiết kế hệ thống trong ERP:
Cài đặt bằng **một cờ chung `is_marketplace`** (hoặc điều kiện `seller_name` ≠ Google) trong ERP thay vì hardcode từng dịch vụ riêng lẻ. Khi Marketplace phát sinh sản phẩm mới, hệ thống tự động nhận diện và tính nguyên giá — tránh lặp lại sự cố kế toán phải bóc tách tay khi dịch vụ tăng đột biến.

---

## 6. Tầng ánh xạ tài nguyên (`resource_mapping`)

Do 1 view link có thể chứa tới **23 project của nhiều khách hàng khác nhau**, nên ánh xạ ở cấp View Link hoặc cấp Billing Account sẽ gây sai lệch.

- **Bắt buộc ánh xạ ở cấp Project (`project.id`)** trong bảng `resource_mapping` của ERP.
- Mọi project thuộc Marketplace sẽ được map trực tiếp về `customer_id` và `contract_id` tương ứng trong ERP.

---

## 7. Lịch chốt số & Đối soát

- **Lịch chốt số**: Invoice Marketplace về khoảng **ngày 05–08 (có tháng ngày 09)**. Lịch chốt cước GMP trên ERP phải thiết lập mốc thời gian riêng, không dùng chung mốc ngày 03 của GCP.
- **Đối soát**: Áp dụng bảng đối soát `reconciliation` tương tự GCP. ERP so sánh số liệu tự động tính với số liệu kế toán nhập tay (nếu có), chỉ cảnh báo khi phát sinh chênh lệch vượt ngưỡng cấu hình.
