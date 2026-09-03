# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD)

> **Dự án**: ERP CloudAZ — Module Tính cước, Đối soát & Thu hồi Công nợ · Sản phẩm **Google Workspace Standard (GWS Standard)**
> **Khách hàng / Bên yêu cầu**: Phòng Kế toán doanh thu — CloudAZ (nhà phân phối/reseller dịch vụ Cloud). Các bên liên quan: HCNS, Sales AM, Phòng Mua, Pháp lý, Kế toán trưởng, Ban Quản lý.
> **Nguồn đầu vào**: Bộ tài liệu Sprint 1 tại `docs/2_thu-hoi-cong-no/03_sprint_1_gws_standard/` — `Sprint1_Backlog_GWS_Standard.md` (10 US / 58 AC), `Database_Schema.md`, `ERP_API.md`, `API.md`, `ERP_Platform_Integration.md`, `NFR_Sprint1.md`, `Template_Rendering_Spec.md`, `wireFrame/*`, `mailTemplate/*`, `README.md` (nhật ký quyết định).
> **Ngày tạo**: 2026-09-03
> **Phiên bản**: 1.0

---

## 📜 Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
| :--- | :--- | :--- | :--- |
| 1.0 | 2026-09-03 | BA Team | Khởi tạo BRD cho sản phẩm GWS Standard, tổng hợp từ bộ đặc tả Sprint 1 (10 User Story, 58 tiêu chí nghiệm thu) và 27 quyết định nghiệp vụ đã chốt ngày 2026-08-27 |

> ⚠️ **Lưu ý về phạm vi tài liệu**: BRD này mô tả **trọn vòng đời một khoản cước GWS Standard** kể từ khi dữ liệu cước rời hệ thống CM cho tới khi hồ sơ đóng (thu đủ tiền hoặc chuyển khởi kiện). **Bước tính cước (tính ra số tiền phải thu) hiện do hệ thống CM thực hiện bằng engine `calculateGwsStandard`; ERP không tính lại và không lưu log tính toán của CM** — xem `Database_Schema.md` §0. Việc đưa engine tính cước GWS Standard về ERP nằm **ngoài phạm vi** tài liệu này và được ghi thành câu hỏi mở Q-01.

---

## 1. Vấn đề Hiện tại

CloudAZ bán lại dịch vụ Google Workspace Standard theo hợp đồng cam kết. Mỗi kỳ cước, hệ thống CM tính ra số tiền phải thu và sinh file Đề nghị thanh toán (ĐNTT), nhưng **toàn bộ chặng sau đó — từ lúc có ĐNTT tới lúc tiền về tài khoản — đang chạy hoàn toàn thủ công và rời rạc**:

- **Không có một danh sách công nợ thống nhất.** Kế toán phải mở CM tra từng đề nghị thanh toán, tự đối chiếu số tiền và kỳ cước, tự tải từng file `.docx` về máy. Với vài trăm khách hàng mỗi kỳ, việc này chiếm nhiều ngày công và dễ sót.
- **Mốc hạn thanh toán (Ngày X) không được ghi nhận có hệ thống.** Ngày X phụ thuộc ngày khách thực nhận bản cứng ĐNTT có đóng dấu đỏ, mà thông tin giao nhận nằm ở HCNS dưới dạng sổ tay hoặc email rời. Không ai biết chắc một khoản nợ đã quá hạn bao nhiêu ngày.
- **Nhắc nợ phụ thuộc trí nhớ.** Không có lịch nhắc trước hạn, không có nhắc hằng ngày sau hạn. Khách hàng thường xuyên nói *"tôi không nhận được thông báo nào"* và CloudAZ không có bằng chứng phản bác — các email nhắc nợ (nếu có) nằm rải rác, trùng tiêu đề, không thành một cuộc hội thoại.
- **Lãi chậm thanh toán gần như không thu được.** Điều khoản phạt có trong hợp đồng nhưng không ai tính thủ công theo ngày cho hàng trăm khoản nợ, nên thực tế bị bỏ qua.
- **Quy trình dừng dịch vụ không có chốt kiểm soát.** Việc khóa Console Google là hành động ảnh hưởng trực tiếp tới vận hành của khách; hiện không có bước phê duyệt bắt buộc từ Sales AM, dẫn tới rủi ro khóa nhầm khách hàng trọng yếu — hoặc ngược lại, không ai dám khóa nên nợ kéo dài vô hạn.
- **Hồ sơ pháp lý bị động.** Đến khi cần lập công văn hoặc khởi kiện thì không truy được đã gửi thông báo gì, ngày nào, ai nhận — thiếu chuỗi bằng chứng liên tục nên cơ sở pháp lý yếu.
- **Ban Quản lý không có bức tranh tổng thể.** Không biết tổng nợ quá hạn toàn công ty, khách nào sắp chạm mốc khóa dịch vụ hay mốc khởi kiện, bộ phận nào đang tắc.

Hệ quả: dòng tiền về chậm, chi phí nhân sự kế toán cao, tranh chấp với khách không có chứng cứ, và không đo được hiệu quả thu hồi công nợ.

---

## 2. Giải pháp Đề xuất

Xây dựng trên nền tảng ERP CloudAZ một **module Thu hồi Công nợ liên phòng ban**, chạy trọn luồng ngang cho sản phẩm GWS Standard, gồm 5 khối:

1. **Khối nhập liệu** — ERP chủ động kéo danh sách ĐNTT của kỳ cước từ hệ thống CM (`GET /api/payment-request/all`), lọc theo tên dịch vụ, tải kèm file ĐNTT gốc và thông tin hợp đồng / khách hàng / Sales phụ trách. Mọi bản ghi vào ERP ở trạng thái **chờ Kế toán xác nhận**; chỉ bản ghi đã xác nhận mới được đưa vào luồng nghiệp vụ.
2. **Khối mốc thời gian** — Kế toán đóng dấu đỏ ĐNTT, HCNS gửi bưu điện và xác nhận ngày khách thực nhận. Từ ngày nhận thực tế cộng số ngày được nợ ghi trong hợp đồng, hệ thống tự sinh **Ngày X** — mốc gốc của mọi mốc X+4 / X+15 / X+30 phía sau.
3. **Khối nhắc nợ & lãi phạt** — Job nền soạn sẵn thư nhắc theo từng mốc (trước hạn, đúng hạn, quá hạn) với số liệu của đúng ngày hôm đó; **người có trách nhiệm duyệt rồi mới gửi**. Toàn bộ thư gửi khách của một khoản nợ nằm trong **một luồng thư (thread) duy nhất** đúng chuẩn RFC 5322 để làm bằng chứng. Lãi chậm trả cộng dồn tự động theo ngày lịch ngay khi qua 0h.
4. **Khối cưỡng chế** — Đến mốc X+4, hệ thống sinh yêu cầu dừng dịch vụ; **Sales AM bắt buộc phê duyệt** (từ chối phải nêu lý do và ngày khách cam kết trả) trước khi Phòng Mua thực thi khóa trên Google Admin Console. Khi khách trả đủ, yêu cầu mở khóa được sinh tự động.
5. **Khối pháp lý & báo cáo** — Đến mốc X+15, Pháp lý soạn công văn theo mẫu, xuất PDF, gửi qua bưu điện / email; đến mốc X+30 chuẩn bị hồ sơ đơn phương chấm dứt hợp đồng và khởi kiện. Executive Dashboard hiển thị KPI công nợ toàn công ty, cảnh báo theo mốc và Audit Trail xuyên suốt.

**Nguyên tắc thiết kế xuyên suốt:**

- **Máy soạn, người gửi.** Hệ thống không tự gửi bất kỳ email nào tới khách hàng. Mỗi thư đều có tên người duyệt và thời điểm duyệt.
- **Một khoản nợ = một luồng thư.** Khách mở hộp thư chỉ thấy một cuộc hội thoại chứa trọn quá trình, kể cả công văn pháp lý.
- **Không hardcode mốc nghiệp vụ.** X+4 / X+15 / X+30, bộ template và lãi mặc định nằm trong bảng cấu hình theo sản phẩm — Sprint sau thêm GWS Flex, AWS, GCP, GMP chỉ cần thêm một dòng dữ liệu.
- **Mọi thao tác đều để lại vết.** Mỗi chuyển trạng thái ghi một bản ghi nhật ký nghiệp vụ, truy được ai làm, lúc nào, vì sao.

---

## 3. Hệ thống bị Ảnh hưởng

| Hệ thống / Nền tảng | Vai trò trong giải pháp | Mức tác động |
| :--- | :--- | :--- |
| **Hệ thống CM** (Contract Management) | Nguồn dữ liệu cước: danh sách ĐNTT, file ĐNTT `.docx`, hợp đồng, pháp nhân, khách hàng, user. Là nơi **thực hiện tính cước** GWS Standard | Chỉ đọc — **không yêu cầu CM sửa đổi gì**; ERP chủ động gọi API |
| **ERP CloudAZ** (nền tảng) | Nơi triển khai module. Dùng lại xác thực, cây tổ chức (`users` / `members` / `departments`), cơ chế `roles`/`permissions`, bảng `notifications`, `background_jobs`, `activity_logs` | Bổ sung bảng nghiệp vụ mới, seed 4 role và bộ permission `debt:*`; bổ sung cột trưởng phòng cho bảng `departments` |
| **Gmail API** (`gmail/v1`) | Kênh gửi toàn bộ email tới khách hàng, qua service account có domain-wide delegation, mạo danh hòm thư dùng chung `congno@cloudaz.cc` | Tích hợp mới — **thay thế phương án SMTP** |
| **Lark** | Kênh thông báo nội bộ (thẻ Lark) cho các sự kiện cần hành động | Dùng lại `LarkNotifier` sẵn có |
| **Google Admin Console** | Nơi Phòng Mua thao tác khóa / mở dịch vụ của khách | **Thao tác thủ công ngoài ERP**; ERP chỉ ghi nhận kết quả và bằng chứng ảnh chụp màn hình |
| **Dịch vụ chuyển phát bưu điện** | Phát bản cứng ĐNTT có dấu đỏ và công văn pháp lý | Ngoài hệ thống; ERP lưu mã vận đơn, ngày phát và tên người ký nhận |
| **MISA meInvoice** | Hóa đơn VAT điện tử | **Ngoài phạm vi đợt này** — xem mục 4.3 |

---

## 4. Giả định / Phụ thuộc

### 4.1 Giả định

- **4.1.1** Hệ thống CM tính cước GWS Standard đúng và đủ; ERP tiếp nhận số tiền gốc (`totalPrinciple`) như một dữ kiện đầu vào, **không tính lại và không đối soát lại công thức của CM**.
- **4.1.2** CM **không có trường trạng thái** cho biết một ĐNTT đã hoàn thành hay chưa. ERP kéo về toàn bộ ĐNTT của kỳ cước rồi tự quản bằng trạng thái đồng bộ nội bộ (Chờ xác nhận → Đã xác nhận / Loại khỏi luồng).
- **4.1.3** CM **không expose endpoint tra cứu mã sản phẩm**. ERP lọc sản phẩm theo **tên dịch vụ** (`product.name = "GWS Standard"`), lấy từ danh sách cấu hình động.
- **4.1.4** CM **không lưu email liên hệ của khách hàng** → toàn bộ danh bạ người nhận thư do Kế toán nhập tay trên ERP. Thiếu người nhận chính (`TO`) thì hệ thống **chặn gửi thư**.
- **4.1.5** Số ngày được nợ (`payment_term_days`) là thuộc tính **cấp hợp đồng**, nhập tay một lần; đây là **nguồn duy nhất** để tính Ngày X.
- **4.1.6** Lãi chậm thanh toán tính theo **ngày lịch** (kể cả cuối tuần và ngày lễ), theo đúng điều khoản hợp đồng thương mại, múi giờ `Asia/Ho_Chi_Minh`.
- **4.1.7** Mỗi khách hàng dùng **một địa chỉ chung**, không tách theo pháp nhân; chỉ mã số thuế gắn đúng theo hợp đồng. Khách nhiều pháp nhân thì Pháp lý sửa tay trong bản nháp công văn.
- **4.1.8** Quy mô dự kiến năm đầu: khoảng 500 khách hàng × 12 kỳ cước ≈ 6.000 khoản nợ/năm — không cần phân vùng bảng hay kiến trúc cache phức tạp.

### 4.2 Phụ thuộc

- **4.2.1** **Tài khoản service account Google Workspace** có domain-wide delegation với scope `gmail.send`, và hòm thư dùng chung `congno@cloudaz.cc`. **Chặn triển khai** nếu chưa có.
- **4.2.2** **Bổ sung cột trưởng phòng** (`departments.manager_member_id`) và dữ liệu cây tổ chức đầy đủ trong ERP — dùng để CC Trưởng phòng Sales trong email cảnh báo khóa dịch vụ. Thiếu thì vẫn gửi được thư cho người nhận còn lại nhưng ghi cảnh báo.
- **4.2.3** Hệ thống CM giữ nguyên các endpoint hiện có và JWT có hiệu lực 4 giờ.
- **4.2.4** Phòng Mua có quyền thao tác trên Google Admin Console của từng khách hàng.
- **4.2.5** **Pháp lý bổ sung điều khoản xử lý dữ liệu cá nhân** vào hợp đồng khách hàng (theo Nghị định 13/2023/NĐ-CP) — không phải việc của đội phát triển, nhưng thiếu thì tính năng có rủi ro tuân thủ.
- **4.2.6** Việc thư có nằm đúng một luồng hay không **không kiểm chứng được bằng unit test** — bắt buộc có môi trường Gmail thật để nghiệm thu.

### 4.3 Ngoài phạm vi đợt này

| Hạng mục | Lý do | Ảnh hưởng |
| :--- | :--- | :--- |
| **Engine tính cước GWS Standard trên ERP** | Hiện do CM thực hiện; ERP chỉ tiếp nhận kết quả | ERP không có màn hình tính lại cước, không lưu log tính toán |
| **Ký phát hành hóa đơn VAT điện tử qua MISA** (USB Token, kéo PDF & số hóa đơn về ERP) | Chưa có đặc tả tích hợp và bảng dữ liệu | Hồ sơ công nợ **đóng ở bước Kế toán xác nhận đã thu đủ tiền**, không đóng bằng hóa đơn VAT |
| **Tạo hóa đơn nháp MISA để theo dõi nợ** | Cùng lý do trên | Theo dõi nợ dựa hoàn toàn vào dữ liệu ERP, không đối chiếu MISA |
| **Thanh toán một phần (partial payment)** | Chốt bắt buộc thu đủ 100% | Thiếu tiền thì khoản nợ giữ nguyên trạng thái quá hạn, lãi chạy tiếp |
| **Sinh văn bản đơn phương chấm dứt hợp đồng** | Là văn bản pháp lý do Phòng Pháp lý tự soạn ngoài ERP | ERP chỉ cảnh báo đúng lúc và ghi nhận kết quả |
| **Các sản phẩm GWS Flex, AWS, GCP, GMP** | Đợt này chỉ chạy GWS Standard | Thiết kế đã để sẵn bảng cấu hình theo sản phẩm để mở rộng |

---

## 5. Yêu cầu Nghiệp vụ

### 5.1 Đồng bộ & xác nhận dữ liệu cước từ hệ thống CM

- **5.1.1** Kế toán doanh thu có thể bấm **"Đồng bộ dữ liệu CM"** để hệ thống tự đăng nhập CM, kéo toàn bộ danh sách ĐNTT của kỳ cước đang chọn về ERP.
- **5.1.2** Hệ thống lọc danh sách ĐNTT theo **tên dịch vụ** đúng bằng danh mục cấu hình (đợt này: `"GWS Standard"`), không dùng mã sản phẩm. Danh mục tên dịch vụ là **cấu hình động**, thêm sản phẩm mới không cần sửa mã nguồn.
- **5.1.3** Hệ thống tự động tải kèm **file ĐNTT gốc** (`.docx`) từ CM và lưu thông tin file trên ERP; Kế toán chọn nhiều dòng và tải hàng loạt về máy, mỗi file giữ đúng tên gốc.
- **5.1.4** Hệ thống tự động lấy về **thông tin hợp đồng** (số hợp đồng, ngày ký, mã số thuế pháp nhân), **thông tin khách hàng** (tên, địa chỉ gợi ý) và **Sales phụ trách** để phục vụ đối chiếu và phân quyền.
- **5.1.5** Mọi bản ghi mới đồng bộ về đều ở trạng thái **"Chờ xác nhận"** và hiển thị ở tab riêng. Kế toán đối chiếu số tiền / kỳ cước / file ĐNTT rồi chọn **"Xác nhận đưa vào luồng"** hoặc **"Loại khỏi luồng"** (kèm lý do).
- **5.1.6** **Ràng buộc cứng**: chỉ khoản nợ **đã xác nhận** mới được đóng dấu, tính Ngày X, gửi email, tính lãi phạt hay sinh yêu cầu khóa dịch vụ. Mọi chức năng và job nền đều kiểm tra điều kiện này trước.
- **5.1.7** Đồng bộ lại nhiều lần **không ghi đè** trạng thái xác nhận và **không ghi đè** dữ liệu Kế toán đã nhập tay (lãi suất phạt, thông tin người đại diện…). Bản ghi khớp nhau theo mã ĐNTT bên CM.
- **5.1.8** Hệ thống hỗ trợ đồng bộ ở **hai thời điểm**: Kế toán bấm tay (đường chính) và job nền chạy trước giờ hành chính mỗi sáng (tùy chọn, tiết kiệm một thao tác).
- **5.1.9** Khi đồng bộ có bản ghi lỗi, hệ thống **không hủy toàn bộ**: bản nào thành công thì giữ, bản lỗi gom vào danh sách cảnh báo, hiển thị banner *"Đồng bộ hoàn tất với N lỗi"* kèm nút thử lại riêng phần lỗi, đồng thời thông báo cho Kế toán và Quản trị viên.

### 5.2 Cấu hình hạn nợ, lãi phạt & mốc nghiệp vụ theo sản phẩm

- **5.2.1** Kế toán có thể nhập **số ngày được nợ** ở cấp **hợp đồng**. Đây là nguồn duy nhất để tính Ngày X; khoản nợ không giữ bản sao.
- **5.2.2** Kế toán có thể nhập **tỉ lệ lãi phạt theo ngày** cho **từng khoản nợ**, dạng tỉ lệ thập phân (0,05%/ngày ⇒ `0.0005`).
- **5.2.3** Hệ thống **không giới hạn trần** lãi phạt — Kế toán nhập đúng theo điều khoản hợp đồng đã ký. Hệ thống chỉ chặn giá trị ≤ 0; vượt 1%/ngày thì **cảnh báo mềm và hỏi lại**, không chặn lưu.
- **5.2.4** Quản trị viên có thể cấu hình theo từng sản phẩm: mốc cảnh báo khóa dịch vụ (mặc định X+4), mốc chuyển Pháp lý (mặc định X+15), mốc khởi kiện (mặc định X+30), bộ template thư và lãi suất mặc định. **Cấm hardcode** các mốc này trong mã nguồn.
- **5.2.5** Grid Kế toán hiển thị **cảnh báo đỏ** với khoản nợ chưa đủ cấu hình (*"Thiếu cấu hình lãi & hạn nợ"*, *"Chưa cấu hình email liên hệ"*).

### 5.3 Danh bạ người liên hệ nhận thư của khách hàng

- **5.3.1** Kế toán có thể thêm / sửa / vô hiệu hóa danh sách **người liên hệ nhận thư** của từng khách hàng, gồm: họ tên, email (bắt buộc, kiểm tra định dạng), số điện thoại, chức vụ, **vai trò nhận thư** (`TO` / `CC`) và cờ liên hệ chính.
- **5.3.2** Mỗi khách hàng phải có **đúng một** liên hệ chính và **ít nhất một** liên hệ vai trò `TO` đang hoạt động.
- **5.3.3** **Ràng buộc cứng**: khi danh sách người nhận chính rỗng, hệ thống **từ chối gửi thư**, không ghi nhận là đã gửi và hiển thị cảnh báo đỏ trên grid.
- **5.3.4** Người nhận mỗi thư được dựng tự động: `TO` = các liên hệ vai trò `TO`; `CC` = các liên hệ vai trò `CC` **cộng** email Sales AM phụ trách khoản nợ.
- **5.3.5** Hệ thống **không xóa cứng** liên hệ — chỉ vô hiệu hóa, vì lịch sử gửi thư là bằng chứng pháp lý. Khách yêu cầu xóa dữ liệu thì **ẩn danh hóa** (giữ email, xóa tên và số điện thoại); thao tác này chỉ Quản trị viên làm được và có ghi nhật ký.
- **5.3.6** Trên danh sách, email và số điện thoại được **che một phần**; chỉ màn hình chi tiết khách hàng hiện đầy đủ và **mỗi lần xem đầy đủ đều ghi nhật ký kiểm toán**.

### 5.4 Đóng dấu đỏ, chuyển phát bản cứng & xác định Ngày X

- **5.4.1** Kế toán in bản cứng ĐNTT, trình ký đóng dấu đỏ, rồi bấm **"Đã đóng dấu"**. Hệ thống ghi nhật ký và thông báo cho HCNS sang nhận thư đi gửi.
- **5.4.2** HCNS có thể nhập **mã vận đơn** khi gửi chuyển phát, và xác nhận **ngày khách thực nhận** kèm **tên người ký nhận** (tên này được dùng trong nội dung thư gửi khách).
- **5.4.3** Ngay khi HCNS xác nhận phát thành công, hệ thống **tự động tính Ngày X** = ngày thực nhận + số ngày được nợ trong hợp đồng, chuyển khoản nợ sang trạng thái **"Trong hạn"** và ghi nhật ký.
- **5.4.4** **Ràng buộc cứng**: nút "Gửi email ĐNTT" chỉ mở khi bản cứng đã được xác nhận phát thành công. Hệ thống cảnh báo nếu quá 48 giờ chưa có cập nhật giao nhận.

### 5.5 Nhắc nợ tự động theo mốc & duyệt gửi thư

- **5.5.1** Từ ngày khách nhận bản cứng đến hết Ngày X-3, hệ thống soạn thư **xác nhận đã giao hồ sơ thanh toán**.
- **5.5.2** Vào các mốc **X-2**, **X-1** và **đúng Ngày X**, hệ thống soạn thư nhắc trước hạn tương ứng theo từng mốc.
- **5.5.3** Từ **X+1** trở đi, hệ thống soạn thư **nhắc quá hạn hằng ngày**, nêu rõ số tiền gốc, tiền lãi phát sinh và các mốc dừng dịch vụ / hủy hợp đồng sắp tới.
- **5.5.4** Vào mốc **X+4**, hệ thống soạn thư **cảnh báo sắp khóa dịch vụ**, gửi khách và CC Sales AM cùng Trưởng phòng Sales (email trưởng phòng lấy từ cây tổ chức ERP, không hardcode).
- **5.5.5** **Ràng buộc tần suất — tối đa 1 thư/ngày cho mỗi khoản nợ**, tính chung cho mọi loại thư nhắc nợ, áp dụng cả thư do job soạn lẫn thư Kế toán gửi tay. Khi nhiều mốc cùng khớp trong một ngày, hệ thống chọn thư **ưu tiên cao nhất**: cảnh báo khóa dịch vụ > nhắc quá hạn > nhắc đúng hạn > X-1 > X-2 > xác nhận đã giao hồ sơ.
- **5.5.6** **HỆ THỐNG KHÔNG TỰ GỬI THƯ CHO KHÁCH.** Mọi thư đi qua hai bước tách rời: (a) job nền **soạn nháp** đã render sẵn số liệu của đúng ngày hôm đó; (b) **người có trách nhiệm duyệt và bấm gửi**.
- **5.5.7** Kế toán có màn hình **"Hộp thư chờ gửi"** liệt kê nháp của ngày hôm nay theo giai đoạn, mỗi dòng hiển thị khách hàng, hợp đồng, loại thư, tổng nợ và nút xem trước; hỗ trợ **chọn nhiều dòng gửi hàng loạt** và nút "Gửi tất cả".
- **5.5.8** Người duyệt có thể **xem trước** đúng nội dung sẽ gửi và **sửa phần thân thư**; **không sửa được tiêu đề** vì tiêu đề quyết định thư có nằm đúng luồng hay không.
- **5.5.9** Khi bấm gửi, hệ thống ghi nhận **người duyệt và thời điểm duyệt**. Không bản ghi thư nào được rời trạng thái nháp mà thiếu tên người duyệt.
- **5.5.10** Người duyệt có thể **chủ động bỏ một thư nháp**, bắt buộc nhập lý do tối thiểu 10 ký tự; hệ thống ghi nhật ký. Ba lý do không gửi được phân biệt rạch ròi: **hết hạn** (job tự dọn), **bị chặn** (thiếu người nhận hoặc vi phạm hạn mức 1 thư/ngày), **bị bỏ** (người quyết định, có lý do, có tên).
- **5.5.11** Thư nháp không được gửi trong ngày sẽ **hết hạn vào đầu ngày hôm sau** và job soạn nháp mới với số liệu cập nhật — vì nháp cũ đã render sẵn tiền lãi tính đến ngày soạn.
- **5.5.12** Hệ thống nhắc việc duyệt thư qua **ba lớp**: badge đỏ trên tab hộp thư · banner đầu grid (màu cam buổi sáng, **chuyển đỏ sau 16:00**) · **email tổng hợp nhắc duyệt** gửi mỗi sáng.
- **5.5.13** Email nhắc duyệt gửi **theo từng làn**: Kế toán nhận số thư nhắc nợ chờ duyệt, Pháp lý nhận số công văn chờ gửi. Thư nêu rõ số thư hôm nay và danh sách thư hôm qua chưa duyệt đã hết hạn kèm hậu quả (*"N khách hàng đã không nhận được thư nhắc nợ hôm qua"*).
- **5.5.14** Email nhắc duyệt **CC Kế toán trưởng** khi số thư hết hạn hôm qua ≥ 5, hoặc khi bỏ sót từ ngày thứ hai liên tiếp. **Chỉ gửi khi có việc** — không có nháp chờ duyệt thì không gửi.
- **5.5.15** Mọi job gửi thư **bỏ qua** khoản nợ đã tất toán — khách đã trả tiền không nhận thêm bất kỳ thư nhắc nợ nào.
- **5.5.16** Nội dung thư render từ **biểu mẫu động** do Quản trị viên quản lý (tên khách hàng, số tiền gốc, tiền lãi, các mốc X+N…), sửa nội dung không cần triển khai lại mã nguồn.

### 5.6 Luồng thư duy nhất cho trọn kỳ thu tiền

- **5.6.1** **Bất biến**: mọi thư **gửi khách hàng** về một khoản nợ đều nằm trong **một luồng thư duy nhất**, theo đúng trình tự: xác nhận giao hồ sơ → đếm ngược trước hạn → nhắc quá hạn → cảnh báo khóa dịch vụ → **thư ngỏ kèm công văn pháp lý** → thông báo đã khóa → thông báo đã khôi phục → xác nhận đã thanh toán (thư đóng luồng).
- **5.6.2** Phạm vi một luồng thư = **một khách hàng × một kỳ cước × một hợp đồng**. **Không gộp luồng giữa các kỳ cước** — mỗi kỳ có Ngày X, số tiền và vòng đời riêng.
- **5.6.3** Email **nội bộ** (thông báo chuyển Pháp lý, thông báo khởi kiện, Sales AM từ chối khóa, kết quả khóa/mở dịch vụ, nhắc duyệt thư) **không bao giờ** nằm trong luồng thư của khách — người nhận khác hoàn toàn.
- **5.6.4** Tiêu đề luồng được **chốt một lần ở thư đầu tiên và khóa vĩnh viễn**; các thư sau dùng tiêu đề đã lưu, **không render lại từ biểu mẫu** (vì Quản trị viên có quyền sửa biểu mẫu bất cứ lúc nào, sửa xong là luồng vỡ mà không ai biết nguyên nhân).
- **5.6.5** Hệ thống có **ba chốt chặn** không cho lệch tiêu đề: popup xem trước hiện tiêu đề chỉ đọc · chức năng sửa nháp chỉ nhận phần thân thư · kiểm tra tiêu đề lần cuối ngay trước khi gửi.
- **5.6.6** **Mức độ khẩn cấp không nằm ở tiêu đề.** Bỏ tiền tố `[KHẨN]` / `[CẢNH BÁO]`, chuyển thành dòng đầu thân thư in đậm có màu, kèm cờ ưu tiên cao trong header thư.
- **5.6.7** **Chống gửi trùng ở tầng dữ liệu**: hai người cùng bấm gửi một danh sách, hoặc tiến trình gửi lại sau timeout, đều chỉ ra đúng **một** thư.
- **5.6.8** **Hai làn thư, một luồng**: làn *nhắc nợ* do job soạn và **Kế toán** duyệt; làn *pháp lý* do Pháp lý soạn và **chỉ Pháp lý** duyệt. Làn pháp lý **miễn hạn mức 1 thư/ngày**, **không hết hạn cuối ngày**, và **không cập nhật các chỉ số đếm** của làn nhắc nợ — nhưng vẫn nằm chung một luồng thư với khách.
- **5.6.9** Hệ thống lưu **địa chỉ gửi thực tế**, danh sách người nhận đầy đủ và mã định danh thư của từng thư đã gửi, làm **bằng chứng pháp lý tự đủ trong một dòng dữ liệu**.
- **5.6.10** **Nghiệm thu bắt buộc trên Gmail thật**: gửi đủ các loại thư cho một khoản nợ rồi mở hộp thư khách xem có đúng **một** cuộc hội thoại hay không. *(Không có unit test nào thay thế được bước này.)*

### 5.7 Tính lãi chậm thanh toán & Tất toán

- **5.7.1** Ngay khi sang ngày mới (**00:05**, không chờ giờ hành chính), hệ thống chuyển các khoản nợ đã qua Ngày X sang trạng thái **"Quá hạn"** và ghi nhật ký.
- **5.7.2** **Ranh giới Ngày X**: khoản nợ chỉ quá hạn khi **hôm nay > Ngày X**, không phải `>=`. Ngày X là **hạn chót** — khách có trọn ngày hôm đó để trả. Sang 00:05 của ngày X+1 mới tính quá hạn 1 ngày.
- **5.7.3** Với mọi khoản nợ quá hạn chưa tất toán, hệ thống **cộng dồn lãi hằng ngày** theo công thức: `lãi lũy kế = tỉ lệ lãi/ngày × số ngày quá hạn × tiền gốc`, ghi nhật ký lãi phạt theo từng ngày.
- **5.7.4** Việc tính lãi phải **chạy bù được và không sai số**: server dừng vài ngày rồi chạy lại vẫn ra đúng số dư; chạy lại trong cùng một ngày không tạo bản ghi trùng.
- **5.7.5** Kế toán có thể bấm **"Tất toán"** và nhập: ngày nhận tiền (không được lớn hơn hôm nay), số tiền thực thu, ảnh ủy nhiệm chi / minh chứng chuyển khoản (tùy chọn) và ghi chú.
- **5.7.6** **Bắt buộc thu đủ 100%**: nếu số tiền thực thu nhỏ hơn tổng gốc + lãi, hệ thống **không cho tất toán** và báo rõ số tiền còn thiếu. Popup hiển thị sẵn số phải thu và khóa nút Lưu kèm dòng cảnh báo *"Còn thiếu X VNĐ — chưa đủ điều kiện tất toán"*.
- **5.7.7** Sau khi tất toán thành công, hệ thống gửi khách **thư xác nhận đã nhận thanh toán** (CC Sales AM), nêu ngày nhận tiền, số tiền, phần gốc và phần lãi, và xác nhận **lãi ngừng phát sinh** kể từ ngày nhận tiền. Thư này **đóng luồng thư** của khoản nợ.
- **5.7.8** **Tất toán là điều kiện dừng tính lãi duy nhất.** Khoản nợ đã chuyển Pháp lý hoặc đang khởi kiện **vẫn tiếp tục tính lãi bình thường**; số tiền lãi in trên công văn chỉ là **ảnh chụp tại ngày ký**, không làm dừng việc tính lãi.
- **5.7.9** Chỉ Kế toán / Kế toán trưởng được tất toán. Khoản nợ đã tất toán rồi thì không tất toán lại.

### 5.8 Dashboard công nợ & nhật ký đôn đốc của Sales AM

- **5.8.1** Sales AM có dashboard hiển thị **danh sách khách quá hạn do chính mình phụ trách**, kèm các thẻ chỉ số tổng hợp.
- **5.8.2** **Ràng buộc phân quyền**: hệ thống ép điều kiện "khoản nợ thuộc Sales AM đang đăng nhập" **ở tầng truy vấn**, không tin bộ lọc gửi từ giao diện.
- **5.8.3** Sales AM có thể **ghi nhật ký đôn đốc** (hình thức liên hệ, nội dung trao đổi) cho từng khoản nợ và xem lại toàn bộ lịch sử đã ghi.

### 5.9 Quy trình cảnh báo & phê duyệt Dừng dịch vụ (mốc X+4)

- **5.9.1** Vào ngày đạt **mốc cảnh báo khóa dịch vụ** (mặc định X+4, đọc từ cấu hình sản phẩm), hệ thống **tự sinh yêu cầu duyệt khóa dịch vụ** và đẩy thông báo cho Sales AM phụ trách.
- **5.9.2** Sales AM có thể **Duyệt khóa** — chuyển yêu cầu sang Phòng Mua thực thi.
- **5.9.3** Sales AM có thể **Từ chối khóa**, nhưng vì đây là hành động **bảo lãnh cho khách nợ tiếp** nên bắt buộc: nhập **lý do tối thiểu 20 ký tự** và chọn **ngày khách cam kết trả** (phải sau ngày hôm nay, lưu vào trường riêng để lọc được danh sách *"khách đã hứa trả mà quá ngày vẫn chưa trả"*).
- **5.9.4** Lý do từ chối được **hiển thị công khai** trên grid Kế toán, màn hình Sales AM và Audit Trail của Ban Quản lý; đồng thời gửi email thông báo cho **Kế toán, Kế toán trưởng và Trưởng phòng Sales**.
- **5.9.5** **Ràng buộc cứng**: không có phê duyệt của Sales AM thì **không thể** chuyển yêu cầu sang Phòng Mua, bất kể vai trò người thao tác.
- **5.9.6** Yêu cầu đã bị Sales AM từ chối thì **không được tạo lại trong cùng kỳ cước** — tránh vòng lặp duyệt–từ chối vô hạn mỗi sáng. Muốn khóa lại phải do Kế toán / Kế toán trưởng yêu cầu thủ công, lấy lý do bảo lãnh làm căn cứ đối chất.
- **5.9.7** Job sinh yêu cầu chạy lại nhiều lần trong ngày **không tạo yêu cầu trùng**.

### 5.10 Thực thi Dừng & Khôi phục dịch vụ trên Console hãng

- **5.10.1** Phòng Mua có màn hình danh sách **yêu cầu khóa đã được Sales AM duyệt** và danh sách **yêu cầu mở khóa**.
- **5.10.2** Phòng Mua thao tác khóa/mở trên Google Admin Console rồi quay lại ERP **xác nhận kết quả**, có thể đính kèm **ảnh chụp màn hình làm bằng chứng**.
- **5.10.3** Sau khi thực thi, hệ thống gửi **hai thư**: thư **nội bộ** báo kết quả cho Kế toán, Sales AM, Pháp lý; và thư **cho khách hàng** thông báo đã khóa (hoặc đã khôi phục) dịch vụ, CC Sales AM. Thư gửi khách nằm **chung luồng thư** nhắc nợ và nêu rõ **lãi vẫn tiếp tục chạy** trong thời gian khóa.
- **5.10.4** Khi mở popup xác nhận mở khóa, hệ thống **hiển thị tóm tắt lịch sử thanh toán của khách hàng** (tính trên toàn bộ khoản nợ của khách): số lần bị khóa, lần khóa gần nhất, số kỳ trả trễ trên tổng số kỳ, số ngày trễ trung bình, số lần hứa trả rồi không trả, tổng nợ đang mở.
- **5.10.5** **Hệ thống không tự chặn mở khóa.** Quyết định có yêu cầu đặt cọc hay không thuộc về người thao tác và Kế toán trưởng; popup có ô ghi chú bắt buộc nhập lý do nếu mở khóa cho khách có lịch sử xấu. *(Luật cứng "khóa ≥ 2 lần thì bắt buộc đặt cọc" đã bị bỏ vì ngưỡng tùy tiện, không tính tới khoảng cách thời gian và giá trị hợp đồng.)*
- **5.10.6** Khi khách tất toán mà dịch vụ đang bị khóa, hệ thống **tự động sinh yêu cầu mở khóa** và đẩy sang Phòng Mua. *(Thiếu bước này thì khách đã trả tiền vẫn bị khóa vĩnh viễn.)*
- **5.10.7** Mỗi chuyển trạng thái khóa/mở dịch vụ phải có **đúng một tác nhân và một đường thực hiện** — không có đường vòng.

### 5.11 Quy trình Pháp lý & Chấm dứt hợp đồng (mốc X+15 / X+30)

- **5.11.1** Pháp lý có màn hình với các tab lọc **không chồng lấn**: tất cả khoản quá hạn · chạm mốc X+15 cần lập công văn · đã lập chờ gửi · chạm mốc X+30 chuẩn bị khởi kiện · đang khởi kiện.
- **5.11.2** Vào mốc **X+15**, hệ thống gửi email **nội bộ** thông báo chuyển Pháp lý (CC Kế toán trưởng, Sales AM, Ban Giám đốc).
- **5.11.3** Pháp lý có thể **soạn công văn theo biểu mẫu**, hệ thống tự điền tên khách hàng, số hợp đồng, tiền gốc, tiền lãi chốt tại ngày ký; Pháp lý duyệt rồi **lưu & xuất PDF** kèm số công văn, ngày phát hành, ngày chấm dứt dự kiến.
- **5.11.4** Hệ thống **chặn soạn công văn** khi hồ sơ khách hàng thiếu thông tin bắt buộc (tên/địa chỉ người đại diện, mã khách hàng, mã số thuế).
- **5.11.5** Pháp lý xác nhận đã gửi công văn theo **ba đường**: chỉ bưu điện · chỉ email · cả hai (khuyến nghị). Đường có bưu điện bắt buộc nhập **ngày gửi và mã vận đơn**.
- **5.11.6** Với đường **email**, hệ thống tạo **thư ngỏ kèm PDF công văn đã ký**, nằm **chung luồng thư** của khách, và **chỉ ghi nhận là đã gửi khi thư thực sự rời hệ thống** — vì thư còn trong hộp nháp nghĩa là khách chưa nhận được gì.
- **5.11.7** **Ràng buộc cứng**: chỉ được khởi kiện khi công văn **đã gửi**. Chưa gửi công văn thì không đủ căn cứ khởi kiện.
- **5.11.8** **Chỉ Pháp lý được duyệt và gửi thư làn pháp lý.** Quyền này áp ở **cả bốn thao tác** của hộp thư (xem danh sách, sửa thân thư, bỏ nháp, gửi) — thiếu một điểm là vòng qua được. Kế toán **không nhìn thấy** thư làn pháp lý trong hộp thư của mình và badge đếm cũng không tính chúng.
- **5.11.9** Vào mốc **X+30**, hệ thống gửi email nội bộ thông báo khởi kiện cho Ban Giám đốc và Pháp lý, **liệt kê rõ ba việc Pháp lý phải làm ngoài hệ thống**: soạn văn bản đơn phương chấm dứt hợp đồng, gửi bản cứng và giữ mã vận đơn làm bằng chứng, rồi quay lại ERP ghi nhận kết quả.
- **5.11.10** Pháp lý ghi nhận **"Hủy hợp đồng & Khởi kiện"** trên ERP; khoản nợ **giữ nguyên trạng thái quá hạn** và **lãi vẫn tiếp tục cộng dồn**.
- **5.11.11** Mốc đếm số ngày gia hạn trước khi kiện tính từ **ngày gửi công văn thực tế** (mốc sớm hơn giữa ngày bưu điện và ngày email đi), không tính từ ngày phát hành văn bản.

### 5.12 Executive Dashboard & Cảnh báo theo mốc

- **5.12.1** Kế toán trưởng / Ban Quản lý có dashboard với **5 thẻ KPI**: tổng nợ, nợ quá hạn, lãi phạt, số khách bị khóa dịch vụ, số khách bị khởi kiện.
- **5.12.2** Dashboard hiển thị **bảng xếp hạng top 10 khoản nợ lớn nhất** và **biểu đồ phân bổ** công nợ.
- **5.12.3** Dashboard hiển thị **banner cảnh báo theo mốc** đọc từ cấu hình sản phẩm: mốc cảnh báo khóa dịch vụ (đỏ) · mốc chuyển Pháp lý (cam) · mốc khởi kiện (đỏ). Bấm vào banner chuyển thẳng tới màn hình xử lý tương ứng.
- **5.12.4** Các banner cảnh báo **chỉ để đọc và điều hướng** — hệ thống không tự gửi thư hay tự thực thi hành động từ đây.
- **5.12.5** Ban Quản lý xem được **Audit Trail toàn hệ thống**: thời gian, người thực hiện, hành động, mô tả.

### 5.13 Phân quyền, Nhật ký kiểm toán & Thông báo

- **5.13.1** Mọi thao tác nghiệp vụ (đồng bộ, đóng dấu, gửi thư, duyệt khóa, tất toán, lập công văn…) **tự động ghi một bản ghi nhật ký nghiệp vụ**; xem được timeline đầy đủ của từng khoản nợ.
- **5.13.2** Hệ thống dùng lại cơ chế vai trò / quyền sẵn có của ERP, bổ sung **4 vai trò** (Kế toán, Kế toán trưởng, Phòng Mua, Pháp lý) và bộ quyền theo quy ước `debt:<hành động>`.
- **5.13.3** **Phân quyền phải kiểm chứng được**: người dùng chỉ có vai trò Phòng Mua gọi chức năng tất toán thì bị từ chối và **không có thay đổi nào trong dữ liệu**; người dùng vai trò Sales chỉ thấy khoản nợ của chính mình.
- **5.13.4** Thông báo cho **người dùng nội bộ** đi qua **ba kênh** dùng lại cơ chế sẵn có: in-app (chuông), Lark, và email (với các sự kiện đã có biểu mẫu).
- **5.13.5** **Bốn quy tắc thông báo bắt buộc**: không tự thông báo cho chính mình · gửi theo kiểu "bắn rồi quên", lỗi thông báo không làm hỏng nghiệp vụ · Lark chỉ là kênh phụ, hỏng thì bỏ qua · lấy email người nhận từ dữ liệu người dùng, không hardcode.
- **5.13.6** Giao diện hiển thị **đúng các nút thao tác hợp lệ** ở từng trạng thái, do máy chủ quyết định — giao diện **không cài lại máy trạng thái nghiệp vụ**.
- **5.13.7** **Mỗi giá trị trạng thái phải có đúng một tác nhân đưa vào và một tác nhân đưa ra.** Khi bổ sung trạng thái mới, phải rà lại điều này trước tiên. *(Bài học từ hai lỗi vòng tròn suýt lọt: nếu không ai lật trạng thái "trong hạn → quá hạn" thì toàn bộ chuỗi quá hạn im lặng không chạy — không crash, không log lỗi, chỉ là tiền không về.)*

---

## 6. Câu hỏi còn Mở — Cần xác nhận với khách hàng

> 📋 **Sổ câu hỏi tổng hợp**: các câu hỏi dưới đây đã được gom vào [`CauHoi_CanGiaiDap_2026-09-03.md`](../CauHoi_CanGiaiDap_2026-09-03.md) — khử trùng lặp với các BRD khác, gắn người trả lời và mức độ ưu tiên. **Khi có câu trả lời, cập nhật ở cả hai nơi.**

| Mã | Vấn đề cần xác nhận | Người trả lời | Trạng thái |
| :--- | :--- | :--- | :--- |
| Q-01 | **Engine tính cước GWS Standard có được đưa về ERP trong lộ trình không**, hay ERP giữ vai trò tiếp nhận kết quả từ CM lâu dài? Ảnh hưởng trực tiếp tới kiến trúc phân hệ Tính cước | CEO / PM / Đội Tech | Chờ xác nhận |
| Q-02 | Kế toán có cần **đối soát lại số tiền CM tính ra** trước khi đưa vào luồng công nợ không? Nếu có, cần bảng đối soát và nguồn số liệu độc lập để so | Kế toán | Chờ xác nhận |
| Q-03 | Job đồng bộ tự động mỗi sáng là **bắt buộc hay tùy chọn**? Đợt này đang xếp là tùy chọn, luồng bấm tay vẫn đủ | PO / Kế toán | Chờ xác nhận |
| Q-04 | Ngưỡng cảnh báo mềm cho lãi phạt đang tạm lấy **1%/ngày** — có đúng thực tế hợp đồng CloudAZ đang ký không? | Kế toán / Pháp lý | Chờ xác nhận |
| Q-05 | Chính sách **không hỗ trợ thanh toán một phần** có đúng thực tế vận hành không? Nếu có khách trả làm nhiều đợt thì xử lý ra sao | Kế toán trưởng | Chờ xác nhận |
| Q-06 | Thời hạn lưu dữ liệu liên hệ đề xuất **vòng đời hợp đồng + 5 năm** (khớp thời hiệu khởi kiện hợp đồng thương mại) — Pháp lý xác nhận? | Pháp lý | Chờ xác nhận |
| Q-07 | **Điều khoản xử lý dữ liệu cá nhân** trong hợp đồng khách hàng (Nghị định 13/2023/NĐ-CP) đã có chưa? Thiếu thì tính năng gửi thư có rủi ro tuân thủ | Pháp lý | Chờ xác nhận |
| Q-08 | Service account Gmail và hòm thư dùng chung `congno@cloudaz.cc` đã được cấp chưa? **Đây là điều kiện chặn triển khai** | IT / Admin | Chờ xác nhận |
| Q-09 | Cây tổ chức ERP đã đủ dữ liệu để truy ra **Trưởng phòng Sales** của từng Sales AM chưa? | HCNS / Admin | Chờ xác nhận |
| Q-10 | Đợt tiếp theo mở rộng sang sản phẩm nào trước: **GWS Flex, AWS, GCP hay GMP**? Ảnh hưởng thứ tự chuẩn bị cấu hình và biểu mẫu | PM / Kinh doanh | Chờ xác nhận |
| Q-11 | Hóa đơn VAT điện tử qua **MISA meInvoice** đưa vào đợt nào? Hiện hồ sơ công nợ đóng ở bước thu đủ tiền, chưa gắn hóa đơn | Kế toán trưởng / PM | Chờ xác nhận |
| Q-12 | Trường hợp khách hàng **nhiều pháp nhân** hiện xử lý bằng cách Pháp lý sửa tay trong bản nháp công văn — có chấp nhận lâu dài không? | Pháp lý / Kế toán | Chờ xác nhận |
| Q-13 | Có cần **báo cáo kiểm toán dữ liệu cước định kỳ hằng tháng** xuất tự động không, hay Audit Trail tra cứu trên màn hình là đủ? | Kế toán trưởng | Chờ xác nhận |

---

## 7. Yêu cầu Phi chức năng

| Nhóm | Yêu cầu |
| :--- | :--- |
| **Hiệu năng** | Danh sách công nợ (30 dòng) < 500ms · Dashboard KPI < 1s (chấp nhận cache 5 phút) · Đồng bộ ~500 bản ghi < 2 phút · Job tính lãi ~1.000 khoản nợ < 5 phút · Gửi thư ~10 thư/phút để tránh bị đánh dấu spam |
| **Độ tin cậy — gọi CM** | Thử lại 3 lần với backoff 2s/4s/8s, chỉ với lỗi tạm thời (timeout, 5xx, lỗi mạng). Lỗi logic (400/403/404) không thử lại. Timeout mỗi lần gọi 30 giây, tổng một lần đồng bộ không quá 5 phút. Cache JWT của CM, tự xin lại khi sắp hết hạn |
| **Độ tin cậy — gửi thư** | Phân loại lỗi thành **ba rổ**: vượt hạn mức → chờ rồi gửi lại, **không tính lượt thử** · lỗi tạm thời phía máy chủ → thử lại sau 5/15/60 phút · lỗi cấu hình/xác thực → hỏng ngay lần đầu, thử lại vô ích. **Lỗi cấu hình báo Quản trị viên, không báo Kế toán** — họ không làm gì được và sẽ ngừng đọc cảnh báo |
| **Tính đúng đắn của job nền** | Bắt buộc **idempotent** — chạy lại nhiều lần cùng ngày không sai số. Chạy bù đủ số ngày khi server dừng. Chỉ một tiến trình chạy mỗi job kể cả khi có nhiều máy chủ. Giờ chạy cấu hình được, **hot-reload không cần triển khai lại**. Múi giờ `Asia/Ho_Chi_Minh`. **Vẫn chạy vào cuối tuần và ngày lễ** — mốc X và lãi phạt tính theo ngày lịch |
| **Thứ tự job bắt buộc** | Tính lãi & lật trạng thái quá hạn (00:05) → kéo dữ liệu CM (07:45) → sinh yêu cầu khóa (08:25) → soạn nháp thư (08:30) → nhắc duyệt (08:35). Chạy sai thứ tự thì thư gửi đi mang số liệu cũ |
| **Bảo mật dữ liệu cá nhân** | Chỉ vai trò có quyền đọc mới xem được danh bạ; Sales chỉ thấy khách mình phụ trách (ép ở tầng truy vấn). Che một phần email/SĐT trên danh sách, xem đầy đủ thì ghi nhật ký. **Cấm ghi email/SĐT vào log ứng dụng.** Không xóa cứng — chỉ vô hiệu hóa hoặc ẩn danh hóa. Xuất Excel/PDF có chứa liên hệ thì ghi nhật ký ai xuất, lúc nào |
| **Giám sát** | Mỗi request gắn mã định danh riêng. Ghi log lời gọi sang CM (URL, mã trạng thái, thời gian phản hồi) nhưng **không log nội dung chứa dữ liệu khách hàng**. Cảnh báo Quản trị viên khi: đồng bộ CM lỗi · hơn 5 thư lỗi trong ngày · job không chạy đúng lịch hoặc quá 24 giờ không chạy |
| **Khả năng mở rộng** | Mốc nghiệp vụ, biểu mẫu và lãi mặc định nằm trong dữ liệu cấu hình theo sản phẩm — thêm sản phẩm mới **chỉ cần thêm một dòng dữ liệu**, không sửa mã nguồn |

---

## 8. Chỉ số Thành công (đề xuất)

| Chỉ số | Hiện trạng | Mục tiêu sau khi triển khai |
| :--- | :--- | :--- |
| Thời gian Kế toán xử lý một kỳ cước GWS Standard | Nhiều ngày công, thao tác từng khách | Giảm phần lớn nhờ đồng bộ và xuất hàng loạt |
| Tỉ lệ khoản nợ có Ngày X được ghi nhận chính xác | Không đo được | 100% khoản nợ đã xác nhận |
| Tỉ lệ khoản nợ quá hạn được nhắc đúng mốc | Phụ thuộc trí nhớ | 100% khoản nợ có thư nháp đúng mốc; tỉ lệ thư được duyệt gửi trong ngày ≥ 95% |
| Số ngày quá hạn trung bình | Không đo được | Có số liệu theo tháng, xu hướng giảm |
| Tỉ lệ thu được lãi chậm thanh toán | Gần như 0 | Lãi được tính và thể hiện trên 100% khoản quá hạn |
| Tranh chấp *"tôi không nhận được thông báo"* | Không có bằng chứng | Mọi khoản nợ có chuỗi thư liên tục trong một luồng, truy được người nhận và thời điểm |
| Sự cố khóa nhầm dịch vụ khách hàng | Có rủi ro, không có chốt kiểm soát | 0 — mọi lệnh khóa đều có phê duyệt của Sales AM ghi tên |

---

## 9. Tài liệu Tham chiếu

| Tài liệu | Nội dung | Đường dẫn |
| :--- | :--- | :--- |
| Backlog Sprint 1 | 10 User Story, 58 tiêu chí nghiệm thu — nguồn duy nhất cho dev/QA | `docs/2_thu-hoi-cong-no/03_sprint_1_gws_standard/Sprint1_Backlog_GWS_Standard.md` |
| Lược đồ dữ liệu | Cấu trúc bảng, ràng buộc, luật hai làn thư, nguồn dữ liệu sync/nhập tay | `.../Database_Schema.md` |
| Đặc tả API ERP | Danh sách endpoint, lịch chạy job, mã lỗi | `.../ERP_API.md` |
| API hệ thống CM | Endpoint bên ngoài ERP gọi sang | `.../API.md` |
| Tích hợp nền tảng ERP | Xác thực, phân quyền, ba kênh thông báo, hạ tầng gửi thư | `.../ERP_Platform_Integration.md` |
| Yêu cầu phi chức năng | Retry, hiệu năng, bảo mật dữ liệu cá nhân, job nền | `.../NFR_Sprint1.md` |
| Biểu mẫu thư & công văn | 16 mẫu email + 1 công văn pháp lý | `.../mailTemplate/` |
| Wireframe theo vai trò | Kế toán, Sales AM, Phòng Mua, Pháp lý, Ban Quản lý | `.../wireFrame/` |
| Nhật ký quyết định | 27 quyết định nghiệp vụ đã chốt và lý do | `.../README.md` |
