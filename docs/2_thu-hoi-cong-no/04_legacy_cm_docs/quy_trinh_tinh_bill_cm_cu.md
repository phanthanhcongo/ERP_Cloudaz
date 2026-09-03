# TÀI LIỆU THAM CHIẾU QUY TRÌNH TÍNH BILL HỆ THỐNG CM CŨ

Tài liệu này tổng hợp quy trình tính toán bill của hệ thống CM cũ đối với 3 dịch vụ: GCP, GMP và Google Workspace (GWS).

---

## 1. Quy trình tính bill GCP (CM cũ)
- **Đầu vào**: 2 sheet Excel (Sheet 0: Group by Project, Sheet 1: Group by Subaccount ID).
- **Thao tác tay**: Kế toán lọc bỏ Reseller Margin, check Gemini API (Group by Service), check Promotion Credit (bật/tắt tích) trước khi copy số vào Excel.
- **Tính toán trên CM**:
  ```
  priceCalculated = (amount_modified + vat_amount + fct_amount - discount_amount) * 1.1
  ```
- **Hạn chế**: CM không tự tách Gemini API, lệch rounding 1-2 đồng, không tự nhận diện credit.

---

## 2. Quy trình tính bill GMP (CM cũ)
- **Đầu vào**: View Link chứa nhiều project (thực tế 1 link có tới 23 project của nhiều khách khác nhau).
- **Thao tác tay**: Kế toán lọc từng project thuộc về khách hàng nào để copy số.
- **Quy tắc**: Không áp dụng discount hợp đồng, không có Gemini API, không có promotion credit.

---

## 3. Quy trình tính bill Google Workspace GWS (CM cũ)
- **Đầu vào**: File CSV `Monthly Detail Report` xuất từ Google Workspace Console.
- **Thao tác tay**: Chuyển CSV sang Excel, xóa 9 dòng header, xóa dòng VAT cuối, lọc bỏ các dòng GWS Committed (trả trước 1 năm).
- **Tính toán**:
  - *Trước tháng 02/2024*: `amount = Excel.Amount * 100/80`.
  - *Từ tháng 02/2024*: Áp dụng SKU pricing đơn giá phân bổ số ngày (`unitPrice / daysInMonth * usageDays * quantity`).
