# Giải pháp kỹ thuật — Thu thập dữ liệu billing DigitalOcean

> **Nguồn**: tách từ `docs/GetBillingProcess/solution.md` (đã gỡ bỏ), phần nội dung DigitalOcean
> **Ngoài phạm vi đợt triển khai hiện tại** — đợt này tập trung GCP, GMap, GWS
> **Quy trình nghiệp vụ**: [PhanTich_QuyTrinh_Billing_DigitalOcean.md](PhanTich_QuyTrinh_Billing_DigitalOcean.md)
> **Kiến trúc chung**: [00-KienTruc-TongThe.md](../../GetBillingProcess/00-KienTruc-TongThe.md)

---

## Mô hình

```
ERP Backend chạy cronjob định kỳ
    → gọi DigitalOcean REST API lấy danh sách Invoices
    → tải file CSV cước chi tiết & file PDF hóa đơn qua endpoint của DO
    → parse CSV → lưu DB nội bộ
```

*Khác với Google và AWS: DO không cần hạ tầng data warehouse trung gian.*

---

## Ưu điểm

- **Đơn giản**: DO cung cấp REST API chính thức, tường minh, tải trực tiếp CSV và PDF theo UUID hóa đơn. Không cần cấu hình S3/BigQuery hay SFTP.
- **Độ tin cậy cao**: dữ liệu hóa đơn từ API là dữ liệu **đã chốt sổ chính thức** cuối tháng — chính xác để đối soát trực tiếp.

## Nhược điểm & thách thức

- **Xử lý file ở backend**: ERP phải tự tải, parse và ghi DB. Nếu khách dùng hàng nghìn Droplets/Volumes, file CSV lớn — **bắt buộc dùng stream parser** để tránh tràn RAM (OOM).

---

## Vị trí trong kiến trúc chung

DO là ngoại lệ duy nhất không đi qua tầng data warehouse. Tuy nhiên vẫn phải tuân thủ hai tầng chung của ERP:

- **Tầng ánh xạ**: tài nguyên DO → khách hàng → hợp đồng → pháp nhân
- **Tầng tính cước**: công thức hợp đồng, tỷ giá, thuế, làm tròn — đặt trong ERP, không đặt trong code parse

Xem [00-KienTruc-TongThe.md](../../GetBillingProcess/00-KienTruc-TongThe.md).
