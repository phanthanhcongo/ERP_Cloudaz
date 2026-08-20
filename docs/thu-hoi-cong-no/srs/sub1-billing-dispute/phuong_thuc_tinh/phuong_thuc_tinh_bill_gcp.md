# Phương Thức Tính Bill Dịch Vụ GCP (Google Cloud Platform)

GCP là dịch vụ phức tạp nhất, yêu cầu nhiều bước tính toán và xử lý ngoại lệ (Gemini API, Credit, Discount, Thuế nhà thầu, Phí dịch vụ).

---

## 1. Các Chỉ Số Đầu Vào (từ Console/Hãng)
*   **Lượng dùng USD (Usage USD)**: Lượng tiêu dùng thực tế của khách hàng trong tháng (lấy từ console hoặc file invoice hãng, đã bỏ tích *Reseller Margin*).
*   **Gemini API Usage**: Lượng dùng Gemini API (được tách riêng ra dòng riêng).
*   **Tỷ lệ Discount (%)**: Mức chiết khấu riêng theo hợp đồng của từng khách hàng (không áp dụng cho Gemini API).
*   **Tỷ giá (Exchange Rate)**: Tỷ giá bán chuyển khoản của ngân hàng (TCB hoặc VPBank...) vào ngày cuối tháng chi phí.

---

## 2. Công Thức Tính Toán Chi Tiết (USD)

### A. Lượng dùng thông thường (không gồm Gemini)
$$\text{Usage}_{\text{normal}} = \text{Usage}_{\text{total}} - \text{Usage}_{\text{Gemini}}$$
*(Nếu Gemini API quá nhỏ, < $0.07, kế toán tính gộp chung vào tổng, không tách).*

### B. Chiết khấu thông thường
$$\text{Discount (USD)} = \text{Usage}_{\text{normal}} \times \text{Tỷ lệ Discount}$$

### C. Phải thu sau discount
$$\text{Thu khách sau discount} = \text{Usage}_{\text{normal}} - \text{Discount (USD)} + \text{Usage}_{\text{Gemini}}$$

### D. Thuế VAT nhà thầu (VAT GG)
Tùy theo hợp đồng của từng khách hàng (nếu chịu thuế nhà thầu):
$$\text{Thuế VAT nhà thầu} = \text{Lượng dùng USD} \times \text{Tỷ lệ VAT GG}$$
*   **Tỷ lệ VAT GG**: Hiện tại tăng từ **5.263%** (cũ) lên **5.88%** (mới).
*   **Lưu ý**: Đối với một số khách đặc biệt (như VPBank), VAT nhà thầu được tính trên số *sau discount*: $\text{Thu khách sau discount} \times \text{Tỷ lệ VAT GG}$.

### E. Phí dịch vụ (PDV)
Áp dụng cho các khách hàng có phí dịch vụ đi kèm:
$$\text{Phí dịch vụ} = (\text{Lượng dùng trước discount} + \text{Thuế VAT nhà thầu}) \times \text{Tỷ lệ PDV}$$
*   **Tỷ lệ PDV**: Hiện tại tăng lên mức **5.88%** hoặc dùng tỷ lệ cũ **5.263%** tùy theo phụ lục hợp đồng từng khách.

### F. Thu khách sau trừ Credit (USD)
$$\text{Thu khách (USD)} = \text{Thu khách sau discount} + \text{Thuế VAT nhà thầu} + \text{Phí dịch vụ} - \text{Credit (nếu có)}$$
*   **Credit**: Lượng credit khuyến mãi của Google phân bổ cho khách hàng (Sale/CEO chốt của khách hay của công ty).

---

## 3. Công Thức Quy Đổi VND & Hóa Đơn Cuối Cùng

### A. Thu khách (VND)
$$\text{Thu khách (VND)} = \text{Thu khách (USD)} \times \text{Tỷ giá}$$
*(Số tiền quy đổi sang VND được làm tròn đến hàng đơn vị).*

### B. Thuế GTGT đầu ra (VAT 10%)
$$\text{Thuế GTGT (10%)} = \text{Thu khách (VND)} \times 10\%$$

### C. Tổng tiền thanh toán (VND)
$$\text{Tổng tiền (VND)} = \text{Thu khách (VND)} + \text{Thuế GTGT (10%)}$$
