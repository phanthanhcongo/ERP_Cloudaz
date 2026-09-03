# Giải pháp kỹ thuật — GMap (Google Cloud Marketplace)

> **Ưu tiên triển khai: 2/3** — dùng chung hạ tầng với GCP nên chi phí bổ sung thấp
> **Kiến trúc chung**: [00-KienTruc-TongThe.md](00-KienTruc-TongThe.md)
> **Nghiệp vụ**: [BRD Tính cước Google](../1_tinh_cuoc/Google/BRD_TinhCuoc_Google_2026-09-03.md)

> **Đính chính**: bản tài liệu trước hiểu "GMP" là **Google Marketing Platform** (DV360, SA360, Campaign Manager) và thiết kế một luồng tích hợp riêng qua BigQuery Data Transfer Service. Theo xác nhận của khách hàng, **"GMap" trong nghiệp vụ Cloudaz là Google Cloud Marketplace** — hoàn toàn khác. Luồng riêng đó đã bị loại bỏ.

---

## 1. Kết luận: KHÔNG cần luồng tích hợp riêng

Google Cloud Marketplace là nơi các nhà cung cấp bên thứ ba (ISV) bán dịch vụ, và **được tính cước trên chính Cloud Billing account của GCP**. Do đó dữ liệu GMap **đã nằm sẵn trong Cloud Billing Export** của [01-GCP.md](01-GCP.md).

**Mô hình:** dùng lại nguyên luồng GCP, chỉ khác điều kiện lọc khi truy vấn.

Điều này loại bỏ hoàn toàn một luồng tích hợp cùng chi phí xây dựng và bảo trì của nó, đồng thời hết cảnh phân mảnh cấu hình (không phải thiết lập Data Transfer riêng cho từng tài khoản khách hàng).

---

## 2. Hiện trạng (AS-IS)

- Mỗi khách thường có **1 view link** riêng, nhưng **cũng có view link chứa nhiều khách** — ghi nhận thực tế: **1 view link có 23 project**, và có thể là 23 khách khác nhau
- Ngược lại, cũng có khách sở hữu 2 view link hoặc 2 project → phải cộng tay
- Cách lấy số **tương tự GCP**, nhưng đơn giản hơn: **không có credit, không có Gemini** để phải kiểm tra
- Dữ liệu chỉ gồm **lượng dùng và phí dịch vụ**, không có chi tiết theo SKU (chi tiết chỉ áp dụng cho khách rất lớn, hiện không có khách nào)
- **ONI** là ISV/nhà bán trên Marketplace — không phải Google
- **Có bảng đối soát**: kế toán vẫn lập file tính GMap riêng để đối chiếu

**Quy mô**: ~40 khách/tháng · **Invoice hãng**: ~ngày 05–08, có tháng đến ngày 09.

---

## 3. Cách phân biệt giao dịch Marketplace trong dữ liệu export

| Nhu cầu | Trường dữ liệu |
| :--- | :--- |
| Nhận diện giao dịch bán bởi bên thứ ba (ISV) thay vì Google | `seller_name` |
| Xác định dịch vụ / sản phẩm cụ thể | `service.description`, `sku.description` |
| Bóc tách chiết khấu và credit theo loại | `credits.type` |

> ⚠️ **Cần verify trên dataset thật trước khi code**: tên và ngữ nghĩa chính xác của `seller_name` phụ thuộc loại export đang bật (Standard usage cost / Detailed usage cost). Xem [mục 1 kiến trúc chung](00-KienTruc-TongThe.md).

---

## 4. Quy tắc nghiệp vụ then chốt

Giao dịch Marketplace **không hưởng chiết khấu và không hưởng promotion credit của Google** → tính nguyên giá cho khách.

Đây là **quy tắc gốc** giải thích cả ba luật mà kế toán đang áp dụng rời rạc bằng tay:

- Gemini API không được discount — *"Gemini là hệ thống của Marketplace nên mình không được discount"*
- GMap hiện không có khách nào được discount
- GMap không có promotion credit

**Yêu cầu thiết kế:** cài đặt bằng **một cờ chung** (`is_marketplace`, hoặc điều kiện bên bán ≠ Google) thay vì hardcode từng dịch vụ. Khi Marketplace phát sinh dịch vụ mới, hệ thống tự động xử lý đúng — tránh lặp lại tình huống đầu năm 2026, khi Gemini tăng đột biến và kế toán phải tách tay toàn bộ vì CM không nhận diện được.

Tương ứng yêu cầu **5.5.11** trong BRD.

*[CẦN XÁC NHẬN: Gemini API và GMap cùng thuộc Marketplace nhưng hiện đi 2 luồng lấy số khác nhau — cần làm rõ tiêu chí phân luồng.]*

---

## 5. Ưu điểm so với phương án cũ

- **Bỏ được hoàn toàn một luồng tích hợp** cùng chi phí xây dựng và bảo trì
- **Hết phân mảnh cấu hình**: không phải thiết lập Data Transfer riêng cho từng tài khoản
- **Số liệu nhất quán**: GCP và GMap dùng chung một nguồn, một schema, một đơn vị tiền tệ, một cách xử lý credit → đối chiếu chéo (BRD 5.6.8) trở nên đơn giản

---

## 6. Thách thức còn lại

- **Ánh xạ về khách hàng**: `billing_account_id` + `project.id` **chưa đủ** — một view link có thể chứa 23 project của nhiều khách, và có khách sở hữu 2 view link. Bắt buộc phải có bảng ánh xạ ở [mục 4 kiến trúc chung](00-KienTruc-TongThe.md), map ở **cấp project**. Tương ứng **Q-13** trong BRD.
- **Chu kỳ invoice khác GCP**: GMap ngày 05–08 (có tháng ngày 09) so với GCP ngày 02 → lịch chốt số phải cấu hình riêng theo dịch vụ, không dùng chung một mốc.
