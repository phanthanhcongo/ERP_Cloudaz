# Giải pháp kỹ thuật — Thu thập dữ liệu billing AWS

> **Nguồn**: tách từ `docs/GetBillingProcess/solution.md` (đã gỡ bỏ), phần nội dung AWS
> **Ngoài phạm vi đợt triển khai hiện tại** — đợt này tập trung GCP, GMap, GWS
> **Quy trình nghiệp vụ**: [PhanTich_QuyTrinh_Billing_AWS.md](PhanTich_QuyTrinh_Billing_AWS.md)
> **Kiến trúc chung**: [00-KienTruc-TongThe.md](../../GetBillingProcess/00-KienTruc-TongThe.md)

---

## Mô hình

```
AWS Data Exports (CUR 2.0 / Pro Forma CUR)
    → tự động export sang Amazon S3
    → ERP Backend dùng SDK gọi Amazon Athena (SQL query)
    → xử lý dữ liệu
```

*Đây là phiên bản AWS của kiến trúc Data Warehouse — tương đương Cloud Billing Export → BigQuery bên Google.*

---

## Ưu điểm

- **Hiệu năng**: ERP không phải tải file CSV hàng trăm MB về RAM. Việc `GROUP BY`, `SUM`, tính chiết khấu được đẩy cho Athena xử lý; ERP chỉ nhận JSON kết quả cuối rất nhẹ.
- **Toàn vẹn dữ liệu**: dữ liệu có schema chuẩn, kiểu rõ ràng — tránh lỗi parse chuỗi, lỗi format ngày tháng, lỗi dấu phân cách của CSV.
- **Bảo mật**: dùng IAM role/policy giới hạn quyền chặt chẽ, không cần quản lý tài khoản/mật khẩu.
- **Mở rộng**: code tích hợp tái sử dụng được; thêm khách hay đổi báo cáo chỉ là sửa SQL.

## Nhược điểm & thách thức

- **Độ trễ**: export không realtime, dữ liệu đổ theo batch. Phải thiết kế chốt số sau khi AWS chốt sổ cuối kỳ.
- **Chi phí query**: cần kiểm soát bằng partition, bảng tổng hợp sẵn và chốt chặn giới hạn quét — xem [mục 7 kiến trúc chung](../../GetBillingProcess/00-KienTruc-TongThe.md).

---

## Lưu ý quan trọng

**Hệ thống CM hiện tại không hỗ trợ AWS** — chỉ hỗ trợ Google (GCP, GMap, Workspace). Kế toán đang tính bill AWS bằng quy trình riêng, xem tài liệu nghiệp vụ đi kèm trong thư mục này.
