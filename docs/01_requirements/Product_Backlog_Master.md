# Product Backlog Master — Billing & Debt Collection

| Thông tin | Giá trị |
|---|---|
| **Dự án** | ERP CloudAZ — Module Tính Cước, Đối Soát & Thu hồi Công nợ |
| **Phiên bản** | Master Consolidated |
| **Nguồn** | BRD_Billing_Dispute v3.0, BRD_Debt_Collection v1.0 |
| **Tổng số Epics** | **2 Epics** (Module Tính Cước & Module Thu Hồi Công Nợ) |
| **Tổng số Features** | **12 Features** (GCP, GMP, GWS Flex, GWS Committed, AWS, DO, Disputing, Reminders, Suspension...) |
| **Tổng số User Stories** | **30 User Stories** (20 Billing & 10 Debt Collection) |
| **Tổng số DoD Items** | **361 Tiêu chí nghiệm thu (Checklist)** |

---

## EPIC 1: MODULE TÍNH CƯỚC & ĐỐI SOÁT CHI PHÍ (BILLING & DISPUTE)

### FEATURE 01: Quản lý & Tính cước Google Cloud (GCP) — BD-01 đến BD-04
- **BD-01**: Tự động kết nối, lấy & lưu trữ dữ liệu cước GCP theo mã thanh toán & dự án (~70-80 khách, ~94 billing account, ~600+ project).
- **BD-02**: Tự động phát hiện, tách chi phí Gemini API & quản lý luồng xét duyệt credit GCP (3 trạng thái).
- **BD-03**: Tự động tính cước GCP theo công thức hợp đồng (`(Total - Gemini) * (1 - Discount) + Gemini + VAT + PDV - Credit`).
- **BD-04**: Cấu hình ánh xạ các điều khoản hợp đồng GCP (`resource_mapping`).

### FEATURE 02: Quản lý & Tính cước Google Marketing (GMP) — BD-05 đến BD-06
- **BD-05**: Tự động lấy dữ liệu & tính cước GMP từ trang quản trị chung (không áp dụng Credit & Gemini API).
- **BD-06**: Cấu hình ánh xạ hợp đồng GMP (xử lý View Link chứa tới 23 project).

### FEATURE 03: Quản lý & Tính cước Google Workspace Flexible (GWS Flex) — BD-07 đến BD-08
- **BD-07**: Tự động xử lý dữ liệu cước, loại bỏ dòng Committed & tính cước GWS Flex theo đơn giá phân bổ ngày (`dailyPrice`).
- **BD-08**: Cấu hình ánh xạ hợp đồng GWS Flex theo domain name.

### FEATURE 04: Quản lý & Tính cước Google Workspace Committed (GWS Committed) — BD-09
- **BD-09**: Quản lý danh sách đến hạn, tra cứu hợp đồng & tự động sinh ĐNTT hàng loạt cho GWS Committed.

### FEATURE 05 & 06: Mở rộng AWS & DigitalOcean — BD-10 & BD-11
- **BD-10**: Kết nối tự động hệ thống cước AWS (S3 / Athena Data Exports).
- **BD-11**: Kết nối tự động API DigitalOcean lấy dữ liệu invoice.

### FEATURE 07: Quy đổi tỷ giá, Bảng đối soát & Xử lý lệch cước — BD-12 đến BD-20
- **BD-12**: Quy đổi tỷ giá Techcombank, tính thuế GTGT/FCT (gross) & làm tròn đồng.
- **BD-13**: Tự động sinh & gộp bảng đối soát cước dạng XLSX/PDF.
- **BD-14**: Điều chỉnh số liệu cước & so khớp tự động với file tính tay (highlight dòng lệch).
- **BD-15**: Gửi thông báo cước, theo dõi chốt cước & tự động chuyển trạng thái xuất HĐ.
- **BD-16**: Xử lý phản hồi lệch cước, phát hành HĐ điều chỉnh VAT hoặc bù trừ kỳ sau.
- **BD-17**: Quản lý cấu hình chính sách hợp đồng, phụ lục cước & nhiều pháp nhân.
- **BD-18**: Quản lý lịch trình cước (GWS 1-3, GCP 1-6, GMP 6-10), cảnh báo tiến độ hãng.
- **BD-19**: Lưu trữ tập trung S3, tra cứu & sao lưu dữ liệu cước lịch sử.
- **BD-20**: Audit Trail thao tác cước, phân quyền & báo cáo kiểm toán.

---

## EPIC 2: MODULE THU HỒI CÔNG NỢ (DEBT COLLECTION)

### FEATURE 08: Quản lý Hóa đơn quá hạn & Lịch nhắc nợ — DC-01 đến DC-03
- **DC-01**: Tự động quét hóa đơn sắp đến hạn (X-2 ngày) và quá hạn (X+1 đến X+30 ngày).
- **DC-02**: Gộp tất cả hóa đơn quá hạn của cùng 1 khách vào 1 mail nhắc nợ duy nhất/ngày.
- **DC-03**: Phân loại mức độ nợ (Nợ trong hạn, Nợ quá hạn 1-3 ngày, 4-15 ngày, 16-30 ngày, Nợ xấu >30 ngày).

### FEATURE 09: Tự động tính Lãi chậm thanh toán — DC-04
- **DC-04**: Tự động tính lãi phạt cộng dồn theo ngày dựa trên tỷ lệ hợp đồng và hiển thị trong email nhắc nợ.

### FEATURE 10: Quy trình Tạm dừng & Khôi phục Dịch vụ — DC-05 đến DC-07
- **DC-05**: Cảnh báo mốc Ngày X+4 và quản lý luồng phê duyệt dừng dịch vụ GCP/GWS giữa Sales AM và Kế toán.
- **DC-06**: Chuyển yêu cầu tạm dừng cho Phòng mua/Kỹ thuật ngắt project GCP hoặc khóa domain GWS.
- **DC-07**: Quy trình mở lại dịch vụ khi khách thanh toán đủ nợ & lãi phạt.

### FEATURE 11: Phối hợp Pháp lý & Đơn phương chấm dứt HĐ — DC-08 đến DC-09
- **DC-08**: Tự động sinh công văn dọa chấm dứt HĐ (Ngày X+15) gửi cho Pháp lý duyệt và phát hành.
- **DC-09**: Quy trình đơn phương chấm dứt HĐ và chuyển hồ sơ khởi kiện (Ngày X+30).

### FEATURE 12: Báo cáo Tuổi nợ & Nhật ký đôn đốc — DC-10
- **DC-10**: Báo cáo tổng hợp tuổi nợ (Aging report) và Nhật ký đôn đốc liên phòng ban (Audit Trail).
