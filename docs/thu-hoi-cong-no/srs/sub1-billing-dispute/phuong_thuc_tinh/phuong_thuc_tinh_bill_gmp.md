# Phương Thức Tính Bill Dịch Vụ GMP (Google Marketing Platform)

GMP (trong hội thoại gọi là GMAP/GIMAP) đơn giản hơn GCP do không có các yếu tố biến động lớn.

---

## 1. Quy Tắc Nghiệp Vụ Đặc Thù
*   **Không có Credit Promotion**.
*   **Không có Gemini API** (không cần tách riêng dòng).
*   **Gom link dự án**: Một billing link của GMP có thể chứa nhiều khách hàng/project khác nhau (lên tới 23 project/khách hàng chung link). Kế toán phải vào link chung đó, tích chọn project và lọc dữ liệu thô ra cho từng khách.
*   **Hóa đơn gốc**: Do hãng **ONI** xuất cho bên mình làm căn cứ giá vốn.

---

## 2. Công Thức Tính Toán (USD)

### A. Thu khách sau discount
$$\text{Thu khách sau discount} = \text{Lượng dùng USD} \times (1 - \text{Tỷ lệ Discount})$$
*(Tỷ lệ Discount áp dụng tùy theo thỏa thuận hợp đồng của từng khách hàng).*

### B. Phí dịch vụ (PDV) / Phí charge
$$\text{Phí dịch vụ} = \text{Lượng dùng USD} \times \text{Tỷ lệ Phí dịch vụ}$$

### C. Tổng tiền thu khách (USD)
$$\text{Thu khách (USD)} = \text{Thu khách sau discount} + \text{Phí dịch vụ}$$

---

## 3. Công Thức Quy Đổi VND & Hóa Đơn Cuối Cùng
Quy trình và công thức quy đổi tương tự như đối với dịch vụ GCP:
1.  **Thu khách (VND)**:
    $$\text{Thu khách (VND)} = \text{Thu khách (USD)} \times \text{Tỷ giá cuối tháng}$$
    *(Làm tròn đến hàng đơn vị)*
2.  **Thuế GTGT đầu ra (VAT 10%)**:
    $$\text{Thuế GTGT (10%)} = \text{Thu khách (VND)} \times 10\%$$
3.  **Tổng tiền thanh toán (VND)**:
    $$\text{Tổng tiền (VND)} = \text{Thu khách (VND)} + \text{Thuế GTGT (10%)}$$
