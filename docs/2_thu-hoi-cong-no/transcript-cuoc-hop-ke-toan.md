# Bản Ghi Chi Tiết Cuộc Họp: Tích Hợp Hệ Thống Kế Toán Misa và ERP (Google Cloud Billing)

Dưới đây là bản ghi chi tiết cuộc hội thoại từ file âm thanh **25_08ketoan.m4a** xoay quanh việc thảo luận tích hợp hệ thống xuất hóa đơn Misa Invoice vào luồng ERP (Google Cloud Billing).

---

### **Các thành viên tham gia:**
1. **Kỹ thuật/Dev (Em)**: Đại diện kỹ thuật đề xuất và thực hiện tích hợp.
2. **Kế toán PO (Chị)**: Đại diện bộ phận Kế toán chịu trách nhiệm về luồng nghiệp vụ.
3. **Quản lý/Đồng nghiệp (Anh)**: Đại diện tham gia định hướng và làm rõ các yêu cầu về nghiệp vụ kỹ thuật.

---

### **Nội dung cuộc hội thoại:**

* **Kỹ thuật (Em):** Ờ hiện tại đang bản nháp trên đơn giáp, sao đơn giáp trên s trên đấy đây. Đây là một cái hóa đơn nháp này, đấy kiểu như trước trước khi ký thì nó sẽ có một cái hóa đơn nháp. Đây nó sẽ lên anh chị một cái hóa đơn này, chưa cấp số các thứ. Đây là hóa đơn nháp [1]. Khi nào mà khách thanh toán hoặc là cần sơ hóa đơn thì chị phát ấn ấn phát hành thôi, như thế [1]. Chị xem là chỉ ren thanh toán thôi đúng không? [1]
* **Kế toán (Chị):** Ừ [1].
* **Kỹ thuật (Em):** Còn sang bên này mới là xuất hóa đơn nháp đúng không? OK. Thì đại khái là có cách, có cách để thông. Hôm qua bình thường là mình dùng Misa mình gọi thẳng sang xuất hóa đơn nháp đúng không? Thì bọn em sẽ dùng ERP để gọi sang Misa để xuất hóa đơn nháp [1].
* **Kế toán (Chị):** Nhưng mà mục đích của bọn em là để làm gì? [2]
* **Kỹ thuật (Em):** Là chị dùng trên một ứng dụng thôi. Nghĩa là những cái cái luồng đấy chị không phải chạy sang nhiều ứng dụng ấy [2].
* **Kế toán (Chị):** Ý là muốn xuất kiểu ý là hết các làm hết các thao tác ở trên ERP á? [2]
* **Kỹ thuật (Em):** Đúng rồi. Ví dụ như là cái Google Workspace Commit được Commit đúng không? Thì toàn bộ thao tác của chị chỉ thực hiện trên ERP thôi là xong. Đỡ phải nhảy sang nhiều, nhảy sang Misa rồi nhảy sang ERP chẳng hạn. Đến mục đích là nó đi xuyên suốt một luồng trên một ứng dụng thôi [2].
* **Kế toán (Chị):** Thế thì giả sử như ờ nếu mà bên em triển khai được cái đấy thì bên em cứ thử tích hợp vào xem. Tại vì mục đích là muốn đưa hết các cái phần mềm vào chung một luồng ERP này đúng không? Thì bên em cứ đưa thử vào xem. Còn thực ra chị cũng chưa biết là nó thể hiện như thế nào cả, kiểu là mình cũng không rõ là nó thông xem như nào thì chị em chỉ kiểu muốn xem là chị có muốn thử không thôi [3]. Chị nghĩ là nếu đó là cái hướng công việc mà bên em muốn thì bên em cứ đưa vào thôi. Còn nếu sau này giả sử như đẩy cái xuất hóa đơn lên trên ERP mà nó phục vụ cho những cái công việc mà nó lấy dữ liệu dễ hơn ý thì cứ để lên thôi. Nếu lấy được dữ liệu thì cứ đưa lên [3].
* **Kỹ thuật (Em):** Ừ thì đây mình vẫn sẽ làm thôi nhưng mà hiện tại là phase này thì nó có tầm hai tuần thì chị có muốn làm luôn không? Chị có muốn làm không ấy, quan trọng là chị có muốn làm phase này... [4]
* **Kế toán (Chị):** Bên em triển khai được thì cứ triển khai. Còn tại vì cái này là do bọn em lấy dữ liệu thôi chứ còn cũng đâu có ảnh hưởng gì đến chỗ chị đâu nhở [4].
* **Kỹ thuật (Em):** À không tại vì nó liên quan đến kiểu công việc nhiều hay ít nên chị là PO thì bọn chị mong muốn là chị muốn em chốt xem là cái phần này có làm tính năng này không [4]. Có làm tính năng này không? [5]
* **Kế toán (Chị):** Tại sao? Ý là giả sử như đưa lên thì chị sẽ làm ở trên đấy luôn đúng không? [5]
* **Kỹ thuật (Em):** Không phải là làm luôn mà là chỉ là tích hợp vào luôn thôi. Chị vẫn có thể làm bên này mà đúng không? Chỉ là có làm không thôi. Bên em làm thì không liên quan gì bên chị đúng không? [5]
* **Kế toán (Chị):** Ừ thì em cứ đưa vào thôi. Nếu bởi vì chị thấy là cái commit thì nó cũng không khó, nó đơn giản cái quy trình thì nếu mà tích hợp được luôn thì em cứ tích hợp sang. Còn bởi vì những cái luồng khác kiểu như là tính chi phí thì nó phức tạp hơn thì nếu mà mình sẵn cái đoạn này rồi, cái nào đang dễ thì em đưa vào trước thì đưa vào cũng được, chị thấy cũng được. OK tích hợp đi [5]. Còn quan trọng là sau này dữ liệu hóa đơn cần phải đẩy để chạy công nợ thì tốt nhất là nên tích hợp chung, rồi nếu mà lấy được dữ liệu thì lấy luôn [5, 6].
* **Kỹ thuật (Em):** Dạ vâng [6].
* **Kế toán (Chị):** Tại vì dữ liệu đầu vào của công nợ có nhiều dịch vụ là cần hóa đơn trên Misa. Khi tích hợp lấy dữ liệu thì bên anh đỡ phải upload file PDF, bởi vì phần nhắc nợ cũng sẽ lấy dữ liệu từ trên Misa để đẩy lên [6]. Đợt này chị bảo con commit nó đơn giản thì em làm luôn cũng được. Sau chuyển sang các dịch vụ khác nó phức tạp hơn, lúc đấy bận hơn và không có thời gian thì đẩy trước đi. Em đẩy cùng với cả luồng này cũng được [6].
* **Quản lý (Anh):** Cái luồng hôm trước anh thấy có luồng là nhập thông tin về hóa đơn ấy. Thì nếu mà tích hợp được thì đỡ phải làm cái luồng thủ công đấy [7].
* **Kỹ thuật (Em):** Rồi, ok hơn. Tích hợp được anh ạ [7]. Thì đang mong muốn là mình có muốn tích hợp không? Nếu tích hợp thì em cần những thông tin em ghi lại [7].
* **Kế toán (Chị):** Ghi thông tin cái gì? [7]
* **Kỹ thuật (Em):** Kiểu như là mã số thuế duy nhất. Mỗi tài khoản Misa là của một công ty đúng không? [7]
* **Kế toán (Chị):** Ừ. Nghĩa là nhiều tài khoản đúng không? Công ty mình có nhiều công ty con thì mỗi một mã số thuế là sẽ là một phần mềm riêng, mỗi một công ty một phần mềm riêng [7, 8].
* **Kỹ thuật (Em):** Nhưng mà thế thì mỗi cái dịch vụ của chị là thao tác trên một tài khoản khác nhau à? [8]
* **Kế toán (Chị):** Không, nó đi theo pháp nhân chứ. Giả sử như Cloud AZ thì chị sẽ xuất hết trên một cái tài khoản đăng nhập bằng mã số thuế ấy [8].
* **Kỹ thuật (Em):** Nghĩa là mỗi pháp nhân đi theo kèm các dịch vụ của công ty đúng không? [8]
* **Kế toán (Chị):** Đúng rồi, nó đi theo công ty chứ không đi theo dịch vụ. Công ty đấy bán dịch vụ gì thì không quan trọng lắm, quan trọng là hóa đơn đấy thuộc công ty đấy thì phải xuất bằng cái tài khoản của công ty đó [8]. Mẫu hóa đơn thì là mẫu chung [9].
* **Kỹ thuật (Em):** Thế là mình có một mẫu xuất hóa đơn VAT chung đúng không? [9]
* **Kế toán (Chị):** Ừ [9].
* **Kỹ thuật (Em):** Về thuế suất, cách ghi tên dịch vụ... Ơ nhưng mà chị tưởng là bên em gọi từ Misa thôi chứ cũng đâu có thay đổi nội dung gì trong Misa đâu đúng không? [9]
* **Kỹ thuật (Em):** Em cần thông tin để làm tài liệu thôi [9].
* **Kế toán (Chị):** Tài liệu thôi chứ gì [9].
* **Kỹ thuật (Em):** Vâng tài liệu với cả về sau cấu hình các thứ thì đỡ phải hỏi lại. Pháp nhân thì theo công ty nhé [9].
* **Kế toán (Chị):** Pháp nhân theo công ty [10].
* **Kỹ thuật (Em):** Cùng công ty đấy thì chắc chắn chỉ có một mã số thuế duy nhất đấy thôi [10].
* **Kế toán (Chị):** Đúng rồi, một công ty chỉ có một mã số thuế duy nhất [10].
* **Kỹ thuật (Em):** Mẫu hóa đơn chung tất cả dịch vụ chỉ thay tên dịch vụ và... [10]
* **Kế toán (Chị):** Chỉ thay tên dịch vụ [10].
* **Kỹ thuật (Em):** Thuế suất, đơn giá... còn mẫu thì giống nhau đúng không? [10]
* **Kế toán (Chị):** Đúng rồi, chung mẫu chung ký hiệu. Thuế suất thì tùy dịch vụ nào sẽ có tương ứng thuế suất đấy [10].
* **Kỹ thuật (Em):** Dịch vụ thì có tương ứng thuế suất đấy đúng không? [10]
* **Kế toán (Chị):** Em ghi lại đi không quên [10].
* **Kỹ thuật (Em):** Vâng em có ghi âm lại [10]. Tên mặt hàng cũng theo dịch vụ không cố định [11].
* **Kế toán (Chị):** Tên mặt hàng cũng theo dịch vụ không cố định đúng rồi [11]. Với cả tùy theo hàng, tùy khách nữa [11]. Tùy khách theo hợp đồng. Giả sử như khách muốn viết chi tiết hoặc viết chung [11]. Có thể ghi số hợp đồng hoặc số phụ lục hoặc cả hợp đồng cả phụ lục [11].
* **Kỹ thuật (Em):** À dạ vâng. Còn thao tác ký số? [11]
* **Kế toán (Chị):** Thao tác ký số thì dùng USB token cắm vào máy tính [11].
* **Kỹ thuật (Em):** Ờ USB token, dạ vâng [11].
* **Quản lý (Anh):** Luồng duyệt này thì bên anh phải kiểm tra rồi phát hành chứ không tự động phát hành ngay [11].
* **Kỹ thuật (Em):** Rồi, nghĩa là bên anh muốn kiểm tra hóa đơn nháp trước rồi mới phát hành đúng không? [11]
* **Quản lý (Anh):** Đúng rồi [12]. Nếu mà ERP tự tạo hóa đơn nháp được thì cứ tạo đi, rồi bên anh sẽ kiểm tra test lại [12]. Còn gửi email thì không tự động [12].
* **Kỹ thuật (Em):** Gửi email thì phải check lại đúng không ạ? [12]
* **Quản lý (Anh):** Không tự động từ Misa [12]. Đại đa số khách hàng muốn tải file PDF về và gửi qua luồng mail đối soát [12].
* **Kế toán (Chị):** Nên phần gửi tự động từ Misa này không cần. Nhưng giả sử sau khi khách đối soát xong, phát hành hóa đơn và ký số đầy đủ thì có thể thêm nút trên ERP để tự động tải hóa đơn và gửi email đính kèm file PDF cho khách được không? [13]
* **Quản lý (Anh):** Được chứ [14]. Ý anh là không tự động gửi trực tiếp từ phần mềm Misa [14]. Lúc đó ERP sẽ có phương án tạo mail và đính kèm file PDF hóa đơn đã ký số đầy đủ để gửi cho khách [14].
* **Kỹ thuật (Em):** Tự động gửi từ ERP đúng không? [15]
* **Quản lý (Anh):** Đúng rồi, tự động từ ERP chứ không phải từ Misa [15]. Và cái luồng tự động này nếu có thể gom chung vào luồng đối soát từ đầu thì tốt nhất, còn nếu phải tạo luồng riêng thì thôi để tránh khách bị loạn khi check mail [15].
* **Quản lý (Anh):** Còn hóa đơn USD thì bên mình có xuất hóa đơn bằng tiền đô, có quy đổi tỷ giá không cố định nhé [15].
* **Kế toán (Chị):** Ừ, tỷ giá thay đổi tùy thời điểm [15].
* **Kỹ thuật (Em):** Phần hóa đơn USD này thì để làm thủ công vì số lượng khách ít [16]. Vậy hiện tại mình có nhiều tài khoản Misa tương ứng từng công ty đúng không? [16]
* **Kế toán (Chị):** Ừ [16]. Hiện tại chỉ có 2 công ty thôi [16].
* **Kỹ thuật (Em):** Hai công ty à, em cứ tưởng chục công ty [16].
* **Kế toán (Chị):** Đúng rồi, 2 công ty chính là Cloud AZ và Cloud Dino [16, 17]. 1 tháng chỉ xuất một hóa đơn duy nhất cho công ty kia nên khỏi tích hợp, chỉ tính 2 cái này thôi [16]. Dịch vụ Workspace thì đang nằm bên Cloud AZ [17]. Phần mềm xuất hóa đơn đang dùng là **Misa Invoice** [17].
* **Kỹ thuật (Em):** Có tài khoản vào Misa Invoice không chị? Tên đăng nhập và mật khẩu là gì? [17]
* **Kế toán (Chị):** Bên chị dùng chung một tài khoản cho tất cả mọi người, dùng chung tên đăng nhập và mật khẩu [18]. Không tạo tài khoản riêng vì cần hồ sơ kế toán mới [18].
* **Kỹ thuật (Em):** Vâng, bên em cần tài khoản này để vào cấu hình API lấy dữ liệu [18]. Chắc các chị không cần cắm token chữ ký số thì bọn em vẫn lấy được data đúng không? [18]
* **Kế toán (Chị):** Đúng rồi, không cần token chữ ký số khi lấy dữ liệu. Khi nào ký phát hành thì các chị mới tự cắm token [19].
* **Quản lý (Anh):** Tài khoản đăng nhập anh sẽ gửi trên blog sau nhé [19].
* **Kỹ thuật (Em):** Dạ vâng [19]. Còn vấn đề gì nữa không anh chị? [19]
* **Quản lý (Anh):** Hết rồi [19]. Nếu ok thì gửi thông tin tài khoản và link đăng nhập luôn đúng không? [19]
* **Kỹ thuật (Em):** Đúng rồi ạ [19]. Khoảng bao lâu thì mình xử lý xong anh nhỉ? [19]
* **Quản lý (Anh):** Để anh gửi luôn thông tin qua [19]. OK cảm ơn em [19].
* **Kỹ thuật (Em):** Vâng, em cảm ơn anh chị [19].

---
*Bản ghi được biên soạn và phân tích dựa trên file âm thanh nguồn.*
