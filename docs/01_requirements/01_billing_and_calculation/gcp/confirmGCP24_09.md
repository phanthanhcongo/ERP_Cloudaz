# Biên Bản Phân Tích Nghiệp Vụ & Xác Nhận Quy Trình GCP Billing (24/09/2026)

> **Thời gian:** 24/09/2026  
> **Chủ đề:** Thống nhất quy trình xuất file GCP Billing từ Console, Upload dữ liệu CRM, quy tắc xử lý Credit, Gemini API và Đề nghị thanh toán.  
> **Thành phần tham dự:**  
> - **[BA / Tech]**: Chuyên viên Phân tích nghiệp vụ / Kỹ thuật hệ thống.  
> - **[Kế toán / Ops]**: Chuyên viên Quản lý Billing & Thanh toán (Kế toán GCP / Chị Phương).  

---

## 📌 1. Tóm Tắt Các Điểm Chính (Key Takeaways)

| STT | Hạng mục | Thao tác / Quy định hiện tại | Đề xuất / Yêu cầu cải tiến trên CRM |
|:---:|:---|:---|:---|
| **1** | **Xuất file Billing từ GCP Console** | • Chọn đúng Billing Account Reseller & kỳ Billing (Tháng).<br>• **BỎ TÍCH:** `Reseller Margin`.<br>• **GIỮ TÍCH:** `Negotiated Savings` & `Credit`.<br>• Xóa các dòng tiêu đề thừa và cột `% so với tháng trước` trước khi up CRM. | Chuẩn hóa hướng dẫn thao tác xuất 2 sheet: *Project ID (Project Level)* & *Sub Account (Billing Account Level)*. |
| **2** | **Xử lý Credit / Promotion** | • Nếu Credit thuộc về **Công ty (CloudAZ)**: Xuất Excel xong phải điều chỉnh thủ công (trừ ở cột Credit và cộng bù vào thu/chi công ty).<br>• Nếu Credit thuộc về **Khách hàng**: Giữ nguyên số liệu. | CRM bổ sung tính năng tự động cảnh báo / xuất danh sách Billing Account có phát sinh Credit để người dùng rà soát. |
| **3** | **Xử lý Gemini API** | • Gemini API là dịch vụ ngoài của Google, **KHÔNG ĐƯỢC HÃNG CHIẾT KHẤU** (0% Discount).<br>• Dữ liệu xuất từ Console gộp chung Gemini API vào tổng chi phí GCP.<br>• **Hiện tại:** Phải mở Console từng khách hàng để lấy riêng số tiền Gemini API -> Trừ thủ công ra khỏi tổng bill trước khi áp discount GCP. | **Ưu tiên cao:** CRM cần tự động nhận diện và bóc tách chi phí Gemini API ra khỏi gói GCP Reseller được chiết khấu. |
| **4** | **Quy trình Đối soát & DNTT** | • Upload 2 sheet thô lên CRM.<br>• CRM gen **Bảng đối soát chi phí** -> Tải Excel về sửa thủ công (tách Gemini) -> Gửi khách.<br>• Khách chốt -> Bấm gen **Đề nghị thanh toán (DNTT)** -> Sửa thủ công tổng tiền -> Xuất PDF. | Tự động hóa công thức tính toán Bảng đối soát & DNTT trên CRM, loại bỏ việc sửa tay Excel/Word. |
| **5** | **Quản lý dữ liệu Upload CRM** | • Nếu upload nhầm file/kỳ billing, CRM vẫn lưu bản ghi gây sai lệch báo cáo tổng hợp.<br>• Khi cần xóa để up lại phải bấm **xóa thủ công từng bản ghi** (>120 dòng). | **Bổ sung tính năng Xóa hàng loạt (Bulk Delete)** dữ liệu Billing theo kỳ (có phân quyền quản trị). |

---

## 💬 2. Chi Tiết Đoạn Hội Thoại (Đã Trau Chuốt)

*(Đoạn hội thoại dưới đây được chuyển thể từ băng thu âm họp nghiệp vụ, đã loại bỏ từ đệm, câu trùng lặp và chuẩn hóa theo văn phong công sở/nghiệp vụ ERP).*

### Phần 1: Thao tác xuất báo cáo Billing từ Google Cloud Console

**[BA / Tech]:** Chị xem giúp em thao tác xuất file này đã chuẩn chưa nhé. Đầu tiên mình vào báo cáo Billing tháng 6, chọn đúng Billing Account. Lưu ý là không chọn ở ngoài mà phải chọn đúng Billing Account của GCP Reseller.

**[Kế toán / Ops]:** Đúng rồi, phải chọn đúng Billing Account đó.

**[BA / Tech]:** Mình chọn khoảng thời gian từng tháng một. Sau đó ở phần tùy chọn tích chọn (checkbox) thì xử lý thế nào chị? Có cần bỏ phần `Negotiated Savings` hay `Credit` không?

**[Kế toán / Ops]:** Không nhé! Em nhớ là **chỉ bỏ tích duy nhất mục `Reseller Margin`** thôi. Còn `Negotiated Savings` và `Credit` thì vẫn giữ nguyên tích chọn, đừng bỏ đi.

**[BA / Tech]:** Dạ vâng, chỉ bỏ tích `Reseller Margin`. Thế còn phần `Credit` thì quy tắc nghiệp vụ xử lý như thế nào ạ?

**[Kế toán / Ops]:** Cột `Credit` thì hệ thống Console sẽ xuất ra bình thường. Tuy nhiên, đối với các khoản Credit, bên chị sẽ phải kiểm tra thủ công xem khoản Credit đó là của Công ty mình (Google tài trợ cho CloudAZ) hay là Credit dành cho Khách hàng:
- Nếu khoản Credit đó xác định là **của Công ty mình**, sau khi xuất file Excel ra, chị sẽ phải điều chỉnh thủ công: trừ đi ở cột `Promotion / Credit` rồi cộng bù tương ứng vào phần thu chi của công ty.
- Nếu Credit đó là **của Khách hàng**, thì giữ nguyên không cần chỉnh sửa gì.

**[BA / Tech]:** Tức là sau khi tải file Excel từ Console về, mình vẫn phải rà soát và điều chỉnh thủ công phần Credit này nếu khoản đó thuộc về công ty đúng không chị?

**[Kế toán / Ops]:** Đúng rồi em.

---

### Phần 2: Cấu trúc file Excel dữ liệu Billing & Chi phí Gemini API

**[BA / Tech]:** File dữ liệu này thường có khoảng 600 - 620 dòng đúng không chị? Cấu trúc hiển thị gồm những thông tin gì?

**[Kế toán / Ops]:** Em kéo lên trên cùng xem nhé. File sẽ chứa danh sách các Project (`Project ID`, `Project Number`...), gồm 8 cột thông tin chính.

**[BA / Tech]:** Em thấy có các cột tên là `User Code`, `FC`... Những cột này có quan trọng trong việc tính bill không chị?

**[Kế toán / Ops]:** Thực ra các cột tên kiểu `User Code` hay `FC` chỉ là định danh cũ thôi, bản chất nội dung như nhau. Chị không cần quan tâm lắm đến các cột đó. Chị chỉ tập trung vào cột **`Promotion & Other Credits`** thôi.
Bởi vì khoản Credit nằm ở cột này. Nếu là Credit của công ty thì chị chỉnh sửa lại, còn nếu của khách hàng thì giữ nguyên.

**[BA / Tech]:** Thế còn chi phí **Gemini API** thì nó hiển thị ở cột nào trên file Excel này vậy chị?

**[Kế toán / Ops]:** Trên file export này nó **không nằm riêng ở cột nào cả** em ạ! Số tiền Gemini API đã được Google cộng gộp sẵn vào tổng chi phí dịch vụ (Service cost) rồi. Muốn xem chi tiết Gemini API của từng khách tiêu tốn bao nhiêu thì phải vào xem ở trang phân rã Service trên Console của từng Project khách hàng cơ.

---

### Phần 3: Quy trình hiện tại & Vấn đề bóc tách Gemini API

**[BA / Tech]:** Hôm trước chị có đề xuất sau này hệ thống hỗ trợ lấy bill tự động đúng không? Hiện tại chị Phương (CSO) có xem được báo cáo danh sách khách hàng có phát sinh Gemini API trong tháng không chị?

**[Kế toán / Ops]:** Báo cáo đó xem được em ạ. Nếu sau này hệ thống tự động lọc và xuất ra được danh sách khách hàng có dùng Gemini API thì tốt quá, chị đỡ phải vào từng khách để rà soát.

**[BA / Tech]:** Em xin tóm tắt lại quy trình hiện tại chị đang làm thủ công nhé:
1. Chị tải 2 bảng dữ liệu từ Console (một bảng theo `Project Number`, một bảng theo `Sub-Account / Billing ID`).
2. Chị đẩy 2 file/sheet này lên hệ thống CRM (dữ liệu thô giữ nguyên, đã bao gồm cả Gemini API).
3. Sau đó, trên CRM chị thực hiện xuất **Bảng đối soát chi phí** đúng không ạ?

**[Kế toán / Ops]:** Đúng rồi em. Quy trình chuẩn hiện tại là:
- **Bước 1:** Up 2 file dữ liệu thô lên CRM.
- **Bước 2:** Vào màn hình *Bảng tổng hợp chi phí*, bấm nút **Gen (Tạo) Bảng đối soát chi phí**.
- **Bước 3:** Tải file Excel Bảng đối soát về. Lúc này chị phải **sửa thủ công (bóc tách Gemini API)**.
- **Bước 4:** Gửi file Bảng đối soát đã chỉnh sửa qua Email cho khách hàng.
- **Bước 5:** Khi khách hàng xác nhận số liệu đồng ý xuất hóa đơn -> Mới vào CRM ở tab *Quản lý Đề nghị thanh toán*, bấm **Gen Đề nghị thanh toán (DNTT)**.

**[BA / Tech]:** Chị giải thích rõ hơn giúp em lý do vì sao phải bóc tách Gemini API thủ công được không ạ?

**[Kế toán / Ops]:** Vì bản chất quy tắc chiết khấu của Google như sau:
- Các dịch vụ **GCP Reseller** thông thường: Khách hàng được hưởng % chiết khấu (Discount) theo chính sách hợp đồng ký với CloudAZ.
- Dịch vụ **Gemini API**: Là dịch vụ mua thêm ngoài của Google, **KHÔNG ĐƯỢC HÃNG CHIẾT KHẤU (0% Discount)**.
- Khi dữ liệu đẩy lên CRM, tổng chi phí đang gộp chung GCP và Gemini API. Nếu CRM tự động áp % chiết khấu lên tổng tiền thì phần Gemini API cũng bị tính chiết khấu sai.
- Do đó, chị phải mở chi tiết Console từng khách hàng, kiểm tra số tiền Gemini API, sau đó tính toán lại:
  $$\text{Tổng tiền thanh toán} = (\text{Chi phí GCP} - \text{Discount GCP}) + \text{Chi phí Gemini API (100\% giá gốc)}$$
- Ngoại trừ trường hợp khách dùng Gemini API quá ít (dưới $0.05 - $0.1) thì có thể bỏ qua, còn lại hầu như phải bóc tách tay toàn bộ.

**[BA / Tech]:** Tỷ lệ khách hàng có sử dụng Gemini API có nhiều không chị?

**[Kế toán / Ops]:** Rất nhiều em ạ! Chiếm khoảng **40% đến 50% tổng số lượng khách hàng GCP**. Vì thế tháng nào chị cũng phải mở từng khách để bóc tách và sửa tay trên cả Bảng đối soát lẫn Đề nghị thanh toán, cực kỳ tốn thời gian.

---

### Phần 4: Thao tác Đề nghị thanh toán & Nhu cầu tính năng Xóa hàng loạt

**[BA / Tech]:** Khi chị bấm Gen Đề nghị thanh toán (DNTT) trên CRM thì số tiền trên DNTT cũng bị lệch do Gemini API đúng không chị?

**[Kế toán / Ops]:** Đúng rồi em. Vì DNTT được gen tự động từ dữ liệu CRM (chưa bóc tách Gemini API) nên tổng tiền bị sai. Chị lại phải vào file DNTT để sửa thủ công số tiền tổng (cả số tiền bằng số và bằng chữ) trước khi xuất PDF gửi khách.

**[BA / Tech]:** Đối với các dịch vụ khác như Flexible (G Suite / Google Workspace) thì thế nào ạ?

**[Kế toán / Ops]:** Flexible hay Workspace thì không có bước gửi Bảng đối soát chi phí, nên chị gen thẳng Đề nghị thanh toán luôn. Nếu khách GCP nào không dùng Gemini API thì dữ liệu đã chuẩn sẵn, chị chỉ việc kiểm tra số liệu trên CRM rồi xuất PDF gửi khách.

**[BA / Tech]:** Trường hợp nếu chị Upload nhầm file (ví dụ: dữ liệu của Tháng 6 nhưng chọn nhầm kỳ Tháng 9 trên CRM) thì hệ thống xử lý ra sao ạ?

**[Kế toán / Ops]:** Hệ thống CRM vẫn lưu bản ghi đó bình thường. Đến khi gen số liệu ra thì số tiền bị sai hoàn toàn do lệch kỳ billing.  
Hiện tại nếu lỡ up sai, chị muốn xóa dữ liệu cũ để up lại thì CRM chỉ cho phép **xóa thủ công từng dòng một**. Một tháng có tới hơn 120 - 130 bản ghi GCP, bấm xóa từng dòng rất lâu và mất thời gian.

**[BA / Tech]:** Vấn đề này em đã trao đổi với anh Phong. Anh Phong xác nhận sẽ bổ sung thêm tính năng **Xóa hàng loạt (Bulk Delete)** và phân quyền sử dụng cho bộ phận Kế toán.

**[Kế toán / Ops]:** Cảm ơn em, có tính năng xóa hàng loạt thì tốt quá!

---

### Phần 5: Thống nhất các bước xử lý file Excel trước khi Upload CRM

**[BA / Tech]:** Em kiểm tra lại file Excel thực tế tháng 6 chị gửi nhé. Tổng tiền khách hàng đang hiển thị là $29,850.70$.  
Tóm lại, khi xuất file từ Google Console về, quy trình chuẩn bị file gồm các bước:
1. **Bỏ tích:** `Reseller Margin`.
2. **Giữ tích:** `Negotiated Savings` và `Credit`.
3. Xóa các dòng tiêu đề thừa ở trên cùng file Excel.
4. Xóa cột `% so với tháng trước` (cột hiển thị tỷ lệ % tăng/giảm chi phí ở ngoài cùng bên phải).

**[Kế toán / Ops]:** Đúng rồi em. Cột `% so với tháng trước` đó chỉ để phục vụ kế toán theo dõi biến động chi phí thôi, khi chuẩn bị file dữ liệu đẩy lên CRM thì xóa cột đó đi hoặc copy bỏ cột đó là được.

**[BA / Tech]:** Dạ vâng, em đã làm rõ toàn bộ quy trình nghiệp vụ và các điểm cần cải tiến trên CRM. Em sẽ tổng hợp lại thành tài liệu yêu cầu (BRD/URD) để chuyển cho team dev triển khai phần tự động bóc tách Gemini API và các tính năng hỗ trợ chị nhé!

**[Kế toán / Ops]:** Ok em, cảm ơn em nhiều!
