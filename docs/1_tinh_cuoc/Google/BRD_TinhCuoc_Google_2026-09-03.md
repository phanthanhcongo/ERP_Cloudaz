# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD)

> **Dự án**: ERP Cloudaz — Phân hệ Tính cước & Đối soát chi phí dịch vụ Google (GCP / GMap / Google Workspace)
> **Khách hàng / Bên yêu cầu**: Phòng Kế toán — Cloudaz (nhà phân phối/reseller dịch vụ Cloud)
> **Nguồn đầu vào**: 5 bản ghi phỏng vấn kế toán — `docs/1_tinh_cuoc/Google/transcripts/b1.md` → `b5.md`
> **Ngày tạo**: 2026-09-03
> **Phiên bản**: 1.1

> ⚠️ **Lưu ý về nguồn**: transcript được tạo tự động, chất lượng nhận dạng thấp (nhiều đoạn lặp/sai chính tả: "con sô/con xô" = Console, "đít cao" = discount, "cóc/cóp" = copy, "biu" = bill, "Resellmozine" = Reseller margin, "chức/chết" = check). Những chỗ suy luận đã được đánh dấu `[CẦN XÁC NHẬN]`.

---

## 📜 Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
| :--- | :--- | :--- | :--- |
| 1.0 | 2026-09-03 | BA Team | Khởi tạo BRD từ transcript phỏng vấn kế toán (b1–b5) |
| 1.1 | 2026-09-03 | BA Team | Rà soát đối chiếu lại transcript: sửa 2 điểm sai (phương thức Workspace Commit, phạm vi đối chiếu invoice hãng); bổ sung 8 nội dung còn thiếu (đối chiếu chéo 2 bảng, discount theo năm hợp đồng, xử lý project mới phát sinh, đặc thù GMap, ràng buộc định dạng export, vai trò kinh nghiệm kế toán, Q-14, D-05) |

---

## 1. Vấn đề Hiện tại

Cloudaz là đối tác bán lại (reseller) dịch vụ Google Cloud. Hàng tháng, **kế toán phải tính cước thủ công cho khoảng 70–80 khách GCP và ~40 khách GMap**, cộng thêm nhóm khách Google Workspace, rồi lập bảng đối soát, gửi khách xác nhận và xuất hóa đơn.

**Các điểm đau chính:**

**1.1. Hãng chỉ phát hành invoice tổng, không tách theo khách**
Google gửi **một invoice chung** cho toàn bộ khách (ví dụ một invoice hơn 600 nghìn USD gộp 70–80 khách). Với Google Workspace, invoice chỉ chia theo **domain**, không theo khách/pháp nhân. Kế toán buộc phải mở **link billing của từng khách** trên Console để lấy số riêng lẻ.

**1.2. Thao tác lấy số trên Console hoàn toàn thủ công và dễ sai**
Với mỗi khách, kế toán phải: lọc đúng tháng → chọn đúng hãng → group by project → **bỏ tích Reseller margin** để ra số của khách → bật/tắt promotion credit để dò xem có credit hay không → chuyển sang group by **service** để phát hiện Gemini API → chụp ảnh màn hình lượng dùng làm bằng chứng gửi khách. *"Lấy lâu nhất là lấy số thôi: lấy số tiền bill, check credit, check Gemini."*

**1.3. Gemini API phải tách tay 100%**
Gemini là dịch vụ thuộc Marketplace, **hãng không cho Cloudaz discount** nên Cloudaz cũng không discount cho khách. Từ đầu năm 2026, lượng dùng Gemini tăng mạnh nên buộc phải tách. Hệ thống CM **không đọc được lượng Gemini**, và trên Console chỉ hiện khi group by service (không hiện khi group by project) → kế toán phải tách tay 2 dòng cho từng khách, làm phát sinh một bảng tính riêng.

**1.4. Credit / Promotion không kiểm soát được**
Không có cách biết trước tháng nào khách được chạy credit. Kế toán phải bật/tắt tích promotion trên từng khách để so số chênh lệch, rồi **hỏi lại Sale / Sale admin / CEO** xem credit đó là hãng cho khách hay hãng cho Cloudaz — thậm chí có trường hợp chia đôi (hãng cấp 4.000 credit, chỉ cho khách 2.500, giữ lại 1.500).

**1.5. Copy dữ liệu lên CM bằng tay với khối lượng lớn**
Để đẩy dữ liệu lên hệ thống CM, kế toán phải copy 2 bảng từ Console: bảng theo **Billing ID** (~94 dòng, mỗi billing một dòng) và bảng theo **Project** (~621 dòng), copy lần lượt qua rất nhiều trang cho đến khi đủ số dòng.

**1.6. Hệ thống CM hiện tại còn hạn chế**
- Chỉ hỗ trợ **Google** (GCP, GMap, Workspace/Flex); không hỗ trợ AWS.
- Không hỗ trợ tách Gemini API.
- **Lỗi làm tròn**: kế toán đã phản ánh nhiều lần yêu cầu round đến hàng nghìn nhưng chưa được xử lý, dẫn tới lệch vài đồng phải sửa tay từng dòng.
- Không gen được bảng đối soát nếu **admin chưa cập nhật hợp đồng lên CM** (hợp đồng mới/thiếu → hệ thống báo thiếu).
- Kế toán **không nắm được quy tắc CM map dữ liệu** ("chị cũng không hiểu tại sao nó chạy ra... chị không rõ quy tắc của nó"), nên vẫn phải đối chiếu lại với bảng tính tay.

**1.7. Không có cơ chế thông báo khi hợp đồng / công thức tính thay đổi**
*"Ai là người thông báo? Chả có ai thông báo cả."* Khi khách ký phụ lục đổi công thức tính hoặc **đổi pháp nhân xuất hóa đơn** (rất thường xuyên: tháng này xuất cho công ty A, tháng sau ký hợp đồng mới xuất cho pháp nhân B), kế toán chỉ biết được nhờ tự ghi chú khi hồ sơ đi qua SSC/kế toán, hoặc khi khách phản hồi lại qua email.

**1.8. Nhiều trường hợp ngoại lệ phải xử lý tay**
- Một khách có **2 billing account** → phải cộng tay 2 số.
- Một khách có **nhiều project**; ngược lại một view link GMap có thể chứa tới **23 project của nhiều khách khác nhau**.
- Khách đặc biệt (Phan Tác `[CẦN XÁC NHẬN tên]`): 1 hợp đồng nhưng xuất hóa đơn cho **9 pháp nhân** → phải làm sheet riêng, gửi khách tự phân bổ chi phí, khớp số rồi mới xuất tách hóa đơn.
- Google Workspace: cùng một domain có cả dòng **Commit** (license trả trước 1 năm) và **User/Usage** (lượng dùng thực tế) → phải xóa tay dòng Commit, chỉ giữ dòng User.

**1.9. Thời gian xử lý kéo dài**
Thời gian lý tưởng để tính bill là **1 ngày làm việc** (gồm lấy số Console + xử lý trên CM). Hiện tại do phải tách Gemini và tính tay nhiều, thời gian tăng lên **~1,5 ngày**, khiến việc gửi mail đối soát cho khách bị đẩy sang sáng hôm sau thay vì cuối ngày như trước.

**1.10. Kiểm soát chất lượng phụ thuộc kinh nghiệm cá nhân**
Việc phát hiện số liệu bất thường hiện dựa vào kinh nghiệm của kế toán — *"mình đang quen, mình sẽ nhìn được là có cái gì nó bị lệch hoặc nó bị thiếu"*. Kế toán chỉ kiểm tra lại khi "thấy con nào bất thường". Đây là rủi ro vận hành: tri thức không được hệ thống hóa, không chuyển giao được cho người mới, và là lý do kế toán yêu cầu ERP phải có cơ chế đối chiếu số tự động trước khi chấp nhận bỏ bảng tính tay.

---

## 2. Giải pháp Đề xuất

Xây dựng **phân hệ Tính cước & Đối soát chi phí** trong ERP Cloudaz, tự động hóa toàn bộ chuỗi: *thu thập dữ liệu sử dụng → tính cước theo hợp đồng → đối soát → gửi khách → xuất hóa đơn → theo dõi công nợ*.

Định hướng chính (theo mong muốn kế toán nêu trong buổi phỏng vấn):

1. **Tự động thu thập dữ liệu lượng dùng** từ Google Cloud (Console/API/BigQuery Billing Export) theo từng Billing Account / Project / Service, thay cho thao tác mở link và copy tay.
2. **Tự động tách và gắn nhãn các thành phần đặc biệt**: Gemini API (không discount), Reseller margin, Promotion credit, dòng Commit vs User của Workspace.
3. **Báo cáo Credit tập trung**: mỗi tháng ERP xuất danh sách khách có phát sinh credit để kế toán gửi Sale/CEO xác định phần nào của khách, phần nào của Cloudaz — thay cho việc bật/tắt tích từng khách.
4. **Sinh bảng đối soát chi phí cuối cùng** cho toàn bộ khách hàng, kèm bằng chứng lượng dùng.
5. **Cơ chế đối chiếu song song (giai đoạn chuyển đổi)**: kế toán vẫn giữ bảng tính tay và upload lên ERP; ERP so sánh 2 nguồn số và **chỉ báo các dòng lệch** để kế toán kiểm tra — *"nếu có lệch thì check thôi"*. Đây là điều kiện để kế toán tin tưởng và tiến tới bỏ bước tính tay.
6. **Gửi mail đối soát và xuất hóa đơn theo trạng thái xác nhận của khách**, tích hợp với luồng nhắc nợ/công nợ đã có.
7. **CM có thể được hợp nhất thành một phần của ERP** — nhưng ràng buộc bắt buộc từ kế toán: *"nếu CM thay bằng ERP thì số phải chuẩn"*, vì số sai kéo theo sai hóa đơn xuất cho khách.

---

## 3. Hệ thống bị Ảnh hưởng

| Hệ thống / Nền tảng | Vai trò trong quy trình |
| :--- | :--- |
| **Google Cloud Console (Billing)** | Nguồn số gốc GCP: cost table, group by project/service, promotion credit, reseller margin |
| **Google Maps Platform Console (GMap / ONI)** | Nguồn số GMap; ONI là hãng xuất hóa đơn cho GMap |
| **Google Workspace Admin / Reseller Console** | Nguồn file CSV Flex/Commit theo domain |
| **CM (Cost Management)** — hệ thống nội bộ do đội Tech xây | Nơi lưu hợp đồng, phương thức tính (GCP Resale, Gmap Resale, Workspace Resale/Collect, Workspace Commit), nhập tỷ giá, gen bảng đối soát |
| **ERP Cloudaz** | Hệ thống đích: tính cước, đối soát, xuất hóa đơn, công nợ |
| **Hệ thống hóa đơn điện tử** | Xuất hóa đơn sau khi khách xác nhận `[CẦN XÁC NHẬN: MISA meInvoice — theo tài liệu docs/2_thu-hoi-cong-no]` |
| **Email / Google Drive / Sheets** | Kênh gửi bảng đối soát cho khách; nơi lưu file tính, bảng đối soát, hóa đơn theo từng khách |
| **Hệ thống hợp đồng / SSC** | Nguồn thay đổi hợp đồng, phụ lục, pháp nhân, công thức tính |

**Ngoài phạm vi đợt này**: AWS và DigitalOcean (đã có tài liệu phân tích riêng trong `docs/1_tinh_cuoc/Aws/` và `docs/1_tinh_cuoc/DigitalOcean/`; CM hiện cũng không hỗ trợ AWS). Google Workspace **Commit** được ghi nhận nhưng ưu tiên sau — *"Flex thì nó đơn giản hơn... chị nghĩ để sau cũng được"*.

---

## 4. Giả định / Phụ thuộc

**Phụ thuộc bắt buộc (blocking):**
- **D-01 — Quyền truy cập dữ liệu**: Hiện đội phát triển **không có quyền vào Console**. Quyền xem toàn bộ khách chỉ cấp cho: kế toán, admin, chị Phương, giám đốc kinh doanh; Sale chỉ xem được khách của mình. ERP cần được cấp service account / quyền IAM ở cấp Billing Account, hoặc bật Billing Export sang BigQuery. **Đây là điều kiện tiên quyết** — kế toán nói rõ: *"nếu bọn em vào lấy được số thì chị bỏ qua hết những cái xung quanh"*.
- **D-02 — Công thức tính trên CM**: Kế toán không nắm chi tiết công thức, cần làm việc với **đội Tech** để lấy đặc tả các phương thức tính hiện có.
- **D-03 — Quy tắc map dữ liệu của CM**: Cần đội Tech giải thích quy tắc gộp Billing ID → dòng đối soát, và lý do CM bỏ qua một số dòng dữ liệu.
- **D-04 — Dữ liệu hợp đồng trên CM**: Bảng đối soát chỉ gen được khi admin đã cập nhật hợp đồng lên CM.
- **D-05 — File mẫu chưa nhận**: Kế toán đã đồng ý gửi bộ file mẫu một kỳ tính cước (file tính GCP, file tính GMap, file upload lên CM, bảng đối soát chi phí gửi khách). **Chưa nhận được tại thời điểm lập BRD** — cần có để đặc tả chính xác cấu trúc dữ liệu và công thức.

**Giả định:**
- **A-01**: Hợp đồng, phụ lục, công thức tính, tỷ lệ discount, pháp nhân xuất hóa đơn được quản lý tập trung trong ERP (kế thừa/di trú từ CM).
- **A-02**: Tỷ giá được nhập/cập nhật theo tháng; có trường hợp áp tỷ giá riêng theo khách phải sửa tay.
- **A-03**: Nguyên tắc tính: giá bán cho khách là **giá gốc của hãng**; phần discount/margin thuộc về Cloudaz (ví dụ GCP hãng cho 10%). Số gửi khách là số **đã bỏ Reseller margin**.
- **A-04**: Gemini API **không được discount** cho toàn bộ khách hàng, không có ngoại lệ.
- **A-05**: Giai đoạn đầu ERP chạy **song song** với quy trình thủ công để đối chiếu, chưa thay thế ngay.
- **A-06**: Google Console chỉ hỗ trợ export **PDF và CSV**; nếu ERP lấy dữ liệu qua UI/export thì bị giới hạn ở 2 định dạng này. Phương án API/BigQuery (D-01) không bị ràng buộc này.

---

## 5. Yêu cầu Nghiệp vụ

### 5.1 Thu thập dữ liệu chi phí từ nhà cung cấp

- **5.1.1** Hệ thống tự động thu thập dữ liệu chi phí GCP theo **từng Billing Account** của khách, không yêu cầu kế toán mở thủ công từng link Console.
- **5.1.2** Hệ thống hỗ trợ lọc dữ liệu theo **kỳ tính cước (tháng)**, đảm bảo lấy đúng phạm vi ngày đầu tháng → cuối tháng (hiện Console mặc định có thể lệch khoảng ngày, buộc phải chọn tay).
- **5.1.3** Hệ thống lấy dữ liệu ở **cả 2 chiều tổng hợp**: theo **Project** và theo **Service** (bắt buộc, vì Gemini chỉ hiện khi group by service).
- **5.1.4** Hệ thống lấy được **bảng theo Billing ID** (mỗi billing một dòng) và **bảng theo Project** (một khách nhiều project → nhiều dòng), tương ứng 2 file dữ liệu hiện đang đẩy lên CM.
- **5.1.5** Hệ thống lấy được số **trước và sau khi trừ Reseller margin**: số của khách (đã bỏ margin) dùng để tính cước; số gồm margin dùng để đối chiếu với invoice tổng của hãng.
- **5.1.6** Hệ thống thu thập dữ liệu GMap theo **view link**, hỗ trợ trường hợp một view link chứa nhiều project của nhiều khách khác nhau (ghi nhận thực tế: 1 view link có 23 project).
- **5.1.7** Hệ thống thu thập file dữ liệu Google Workspace (Flex) theo **domain** từ Console (định dạng CSV) và tự chuyển đổi định dạng để xử lý.
- **5.1.8** Hệ thống lưu **ảnh chụp / báo cáo bằng chứng lượng dùng** của từng khách để đính kèm khi gửi đối soát *(hiện kế toán chụp màn hình tay từng khách)*. *[CẦN XÁC NHẬN: chấp nhận thay ảnh chụp bằng báo cáo PDF do ERP sinh hay bắt buộc giữ screenshot Console]*
- **5.1.9** Hệ thống cho phép cấu hình **lịch thu thập theo từng dịch vụ**, theo chu kỳ phát hành invoice của hãng: GCP ~ngày 02, GMap ~ngày 05–08 (có tháng đến ngày 09), Workspace ~ngày 01–02.
- **5.1.10** Hệ thống lấy số **sau invoice của hãng tối thiểu 1 ngày** (thực tế kế toán chờ đến ngày 03 dù ngày 02 đã có invoice), vì dữ liệu lấy quá sớm chưa chuẩn. *[CẦN XÁC NHẬN: có cấu hình được độ trễ này không]*
- **5.1.11** Hệ thống cảnh báo khi phát hiện **project mới chưa được gán cho khách hàng nào**, để kế toán tra soát nguồn gốc (mail / Drive / hệ thống order của admin) xem admin có order thêm project cho khách hiện hữu hay không, rồi gán về đúng khách. *(Hiện kế toán tự phát hiện bằng cách so sánh với kỳ trước rồi tra tay trên mail và Drive; nếu đúng là project mới của khách cũ thì tách thành 2 dòng nhưng vẫn gộp vào một khách.)*
- **5.1.12** Hệ thống ghi nhận dữ liệu GMap chỉ gồm **lượng dùng và phí dịch vụ**, không có chi tiết theo SKU như GCP (chi tiết chỉ áp dụng cho khách rất lớn, hiện không có khách nào thuộc nhóm này).

### 5.2 Xử lý Gemini API (dịch vụ không discount)

- **5.2.1** Hệ thống tự động nhận diện và **tách riêng chi phí Gemini API** của từng khách thành dòng độc lập.
- **5.2.2** Hệ thống áp công thức discount **chỉ trên phần chi phí không bao gồm Gemini**, sau đó cộng nguyên giá phần Gemini vào tổng cuối: `Số cuối = (Tổng − Gemini) × công thức + Gemini`.
- **5.2.3** Hệ thống bỏ qua việc tách riêng khi giá trị Gemini nhỏ hơn ngưỡng cấu hình (kế toán nêu khoảng **0,07 USD**), tính gộp vào chi phí chung. *[CẦN XÁC NHẬN — kế toán nói "thật ra không có mức đâu, chỉ là linh hoạt"; cần chốt ngưỡng cứng]*
- **5.2.4** Hệ thống xuất **báo cáo tổng hợp lượng dùng Gemini API của toàn bộ khách hàng theo tháng**, để kế toán không phải kiểm tra từng khách. *(Đây là yêu cầu tự động hóa số 1 mà kế toán nêu trực tiếp: "Chị muốn nhìn phát là biết được từng khách một có lượng dùng Gemini API như nào, mà không cần phải bấm vào Console.")*
- **5.2.5** Hệ thống ghi nhận Gemini **không áp dụng cho GMap và Workspace** (chỉ phát sinh trên GCP).

### 5.3 Xử lý Credit / Promotion

- **5.3.1** Hệ thống tự động phát hiện khách có phát sinh **promotion credit** trong kỳ, bằng cách so sánh chi phí trước và sau khi áp credit.
- **5.3.2** Hệ thống xuất **báo cáo danh sách khách có credit trong tháng** kèm số tiền credit, để kế toán gửi Sale / Sale admin / CEO xác nhận.
- **5.3.3** Hệ thống cho phép Sale/CEO **phân loại credit** theo 3 trạng thái: *toàn bộ của khách / toàn bộ của Cloudaz / chia một phần* (ví dụ hãng cấp 4.000 credit, cho khách 2.500, Cloudaz giữ 1.500).
- **5.3.4** Hệ thống áp phần credit thuộc về khách vào bảng đối soát của khách; phần thuộc Cloudaz chỉ ghi nhận nội bộ cho kế toán, không tính cho khách.
- **5.3.5** Hệ thống ghi nhận GMap **không có credit** nên bỏ qua bước này với dịch vụ GMap.
- **5.3.6** Hệ thống lưu vết người xác nhận và thời điểm xác nhận phân loại credit. *[CẦN XÁC NHẬN]*

### 5.4 Xử lý Google Workspace (Flex / Commit)

- **5.4.1** Hệ thống nhập dữ liệu Workspace theo **domain** và tự map domain → khách hàng / hợp đồng.
- **5.4.2** Hệ thống phân biệt 2 loại dòng theo mô tả: **User/Usage** (lượng dùng thực tế, tính theo tháng) và **Commit** (license bán trước 1 năm, trả trước).
- **5.4.3** Hệ thống **chỉ tính dòng User/Usage** vào bảng đối soát tháng và loại bỏ dòng Commit khi cùng một domain phát sinh cả hai loại. *(Hiện kế toán phải xóa tay.)*
- **5.4.4** Hệ thống kiểm tra **End date** của dòng dữ liệu; nếu không phải ngày cuối tháng (khách dùng giữa tháng) thì cảnh báo để kế toán đối chiếu lại với file CSV gốc.
- **5.4.5** Hệ thống ghi nhận Workspace/Flex có **độ tin cậy cao**, không bắt buộc đối soát tay — kế toán chỉ kiểm tra khi có dấu hiệu bất thường.

### 5.5 Tính cước theo hợp đồng

- **5.5.1** Hệ thống lưu trữ **hợp đồng và phụ lục** của từng khách, bao gồm: pháp nhân xuất hóa đơn, phương thức tính, tỷ lệ discount, hiệu lực theo tháng.
- **5.5.2** Hệ thống hỗ trợ các **phương thức tính** hiện có trên CM: GCP Resale, Gmap Resale, Google Workspace Resale, Workspace Collect, và **Google Workspace Commit**. Riêng Workspace Commit là hợp đồng **dài hạn, trả trước**, không tính theo chu kỳ thường quy như resale của GCP/GMap — có thể ghi nhận phân bổ dần theo kỳ `[CẦN XÁC NHẬN cách phân bổ]`. CM **không hỗ trợ AWS**.
- **5.5.3** Hệ thống cho phép nhập **tỷ giá theo kỳ** và áp tự động cho toàn bộ khách, đồng thời cho phép **ghi đè tỷ giá riêng** cho khách có thỏa thuận đặc biệt.
- **5.5.4** Hệ thống áp dụng **quy tắc làm tròn đến hàng nghìn VND** cho số tiền cuối cùng. *(Đây là lỗi tồn đọng của CM mà kế toán đã phản ánh nhiều lần và vẫn phải sửa tay.)*
- **5.5.5** Hệ thống tự động **cộng gộp nhiều Billing Account / nhiều project** của cùng một khách vào một dòng đối soát, thay cho việc cộng tay hiện nay.
- **5.5.6** Hệ thống hỗ trợ hợp đồng **xuất hóa đơn cho nhiều pháp nhân** (trường hợp 1 hợp đồng → 9 pháp nhân): cho phép khách/kế toán phân bổ chi phí theo từng pháp nhân, kiểm tra tổng phân bổ khớp với tổng chi phí trước khi xuất hóa đơn tách.
- **5.5.7** Hệ thống cảnh báo khi khách **thay đổi pháp nhân xuất hóa đơn** giữa các kỳ (ký hợp đồng mới, không phải ủy quyền), đảm bảo giữ nguyên số liệu sử dụng nhưng đổi thông tin xuất hóa đơn.
- **5.5.8** Hệ thống **thông báo cho kế toán** khi có thay đổi hợp đồng / phụ lục / công thức tính từ luồng ký kết (SSC), kèm tháng bắt đầu hiệu lực. *(Giải quyết trực tiếp pain point "chả có ai thông báo cả".)*
- **5.5.9** Hệ thống cảnh báo các khách **chưa có hợp đồng trên hệ thống** hoặc thiếu dữ liệu công thức, không thể tính cước, để kế toán yêu cầu admin bổ sung.
- **5.5.10** Hệ thống theo dõi **mức discount thay đổi theo năm hợp đồng** của khách. Ghi nhận từ phỏng vấn: khách bước sang **năm thứ 2 ("F2")** được hưởng mức discount khác (kế toán nêu khoảng **20%**) — hiện kế toán phải tự kiểm tra mới biết khách đã đổi mức. Hệ thống cần tự động áp đúng mức theo mốc thời gian hiệu lực và cảnh báo trước kỳ chuyển mức. *[CẦN XÁC NHẬN: bảng mức discount theo từng năm hợp đồng]*

### 5.6 Đối soát & Kiểm soát chất lượng số liệu

- **5.6.1** Hệ thống **sinh bảng đối soát chi phí cuối cùng** cho toàn bộ khách hàng và cho từng khách, kèm chi tiết theo project/service.
- **5.6.2** Hệ thống cho phép kế toán **upload bảng tính tay** của mình và **tự động so sánh** với số do ERP tính, hiển thị **danh sách các dòng lệch** kèm giá trị chênh lệch. *(Yêu cầu do kế toán nêu trực tiếp như điều kiện chấp nhận hệ thống.)*
- **5.6.3** Hệ thống đối chiếu **tổng chi phí gồm reseller margin với invoice tổng của hãng**. *Lưu ý phạm vi: hiện kế toán **không** cộng tổng số của khách để so với invoice hãng ở bước tính cước hàng tháng (vì có khách thiếu dữ liệu và có khách tính trên sheet riêng); việc khớp với invoice hãng chỉ **bắt buộc khi lập báo cáo RA**. ERP nên thực hiện đối chiếu này ở mức cảnh báo tham khảo cho bước tính cước, và bắt buộc cho báo cáo RA.* `[CẦN XÁC NHẬN quy trình báo cáo RA]`
- **5.6.4** Hệ thống cảnh báo các dòng **không map được về khách hàng / hợp đồng** thay vì bỏ qua âm thầm. *(Hiện CM bỏ qua một số dòng mà không giải thích được lý do, gây thiếu tiền.)*
- **5.6.5** Hệ thống cho phép kế toán **sửa tay số liệu** trên bảng đối soát trước khi chốt, kèm ghi nhận lý do và lưu vết chỉnh sửa.
- **5.6.6** Hệ thống xuất bảng đối soát ra **file Excel** cho toàn bộ khách hàng.
- **5.6.7** Hệ thống hiển thị **trạng thái tính cước theo từng khách** trong kỳ (chưa lấy số / đã tính / đã đối soát / đã gửi khách / khách đã xác nhận / đã xuất hóa đơn).
- **5.6.8** Hệ thống **đối chiếu chéo hai bảng dữ liệu nguồn** — bảng tổng hợp theo **Project** và bảng tổng hợp theo **Billing ID** — và cảnh báo khi tổng của hai bảng không khớp. *(Kế toán khẳng định đây là một bước kiểm soát bắt buộc: "Hai cái này phải khớp nhau nhé" — một bảng lấy data theo project, một bảng theo billing của từng khách.)*

### 5.7 Gửi khách hàng & Xác nhận

- **5.7.1** Hệ thống gửi email **bảng đối soát chi phí** kèm **bằng chứng lượng dùng** cho từng khách. *(Khách không có quyền vào Console nên bắt buộc phải gửi kèm bằng chứng để tự kiểm tra.)*
- **5.7.2** Hệ thống gửi đối soát **theo từng dịch vụ độc lập**: khách dùng nhiều dịch vụ (vừa GCP vừa GMap) sẽ nhận đối soát của dịch vụ nào có invoice trước, không chờ gộp.
- **5.7.3** Hệ thống ghi nhận **trạng thái xác nhận của khách** và cho phép xuất hóa đơn ngay khi khách xác nhận.
- **5.7.4** Hệ thống tự động cho phép xuất hóa đơn khi khách **không phản hồi quá thời hạn quy định**. *[CẦN XÁC NHẬN: số ngày cụ thể của thời hạn]*
- **5.7.5** Hệ thống hỗ trợ **đánh dấu khách ưu tiên** cần gửi số sớm hơn lịch chung (ghi nhận 2 khách phải hoàn thành trước **ngày 07 hàng tháng**: BitVN và Phạm/Masan City `[CẦN XÁC NHẬN tên khách]`).
- **5.7.6** Hệ thống lưu trữ theo từng khách: bảng tính, bảng đối soát, hóa đơn, bằng chứng lượng dùng của từng kỳ.

### 5.8 Xuất hóa đơn & Công nợ

- **5.8.1** Hệ thống tạo đề nghị xuất hóa đơn từ bảng đối soát đã được xác nhận, theo đúng pháp nhân của kỳ đó.
- **5.8.2** Hệ thống hỗ trợ **xuất hóa đơn tách theo nhiều pháp nhân** cho khách có phân bổ chi phí đa pháp nhân.
- **5.8.3** Hệ thống theo dõi **công nợ và tự động nhắc nợ** qua email. *(Kế toán đánh giá đây là hạng mục dễ đưa lên ERP nhất: "nếu để lên ERP thì bây giờ dễ nhất chắc chỉ có việc nhắc nợ thôi.")*

### 5.9 Phân quyền & Nhật ký

- **5.9.1** Hệ thống phân quyền theo vai trò, kế thừa mô hình hiện tại: **Kế toán** và **Admin** xem toàn bộ khách hàng; **Sale** chỉ xem khách thuộc quản lý của mình.
- **5.9.2** Hệ thống cho phép **CEO / Sale admin** truy cập màn hình xác nhận phân loại credit.
- **5.9.3** Hệ thống ghi **nhật ký (audit log)** cho các thao tác ảnh hưởng đến số tiền: sửa tay số liệu, đổi tỷ giá, phân loại credit, chốt bảng đối soát, xuất hóa đơn.

---

## 6. Câu hỏi còn Mở — Cần xác nhận với khách hàng

| Mã | Vấn đề cần xác nhận | Người trả lời | Trạng thái |
| :--- | :--- | :--- | :--- |
| Q-01 | ERP/đội phát triển có được cấp quyền truy cập Google Cloud Console hoặc Billing Export (BigQuery) để lấy số tự động không? **Đây là điều kiện tiên quyết của toàn bộ giải pháp.** | Đội Tech / chị Phương | Chờ xác nhận |
| Q-02 | Đặc tả chi tiết các công thức tính hiện có trên CM (GCP Resale, Gmap Resale, Workspace Resale, Collect) | Đội Tech | Chờ xác nhận |
| Q-03 | Quy tắc CM map dữ liệu Billing ID → dòng đối soát, và lý do CM loại bỏ một số dòng dữ liệu | Đội Tech | Chờ xác nhận |
| Q-04 | ERP sẽ **thay thế** CM hay **tích hợp** với CM? Nếu thay thế, cần kế hoạch di trú dữ liệu hợp đồng | CEO / Đội Tech | Chờ xác nhận |
| Q-05 | Ngưỡng giá trị Gemini bỏ qua không tách riêng — chốt con số cứng (kế toán nêu ~0,07 USD nhưng đang xử lý linh hoạt) | Kế toán | Chờ xác nhận |
| Q-06 | Google có báo cáo tổng lượng dùng Gemini cho toàn bộ khách hàng theo tháng không, hay phải lấy theo từng billing account? | Đội Tech / chị Phương | Chờ xác nhận |
| Q-07 | Bằng chứng lượng dùng gửi khách: có thể thay ảnh chụp Console bằng báo cáo PDF do ERP sinh không? | Kế toán / Khách hàng | Chờ xác nhận |
| Q-08 | Thời hạn chờ khách xác nhận trước khi tự động xuất hóa đơn là bao nhiêu ngày? | Kế toán | Chờ xác nhận |
| Q-09 | Xác nhận danh sách khách đặc biệt: khách đa pháp nhân (9 pháp nhân), khách ưu tiên trước ngày 07 (BitVN, Phạm/Masan City) — cần đúng tên và quy tắc xử lý | Kế toán / Sale | Chờ xác nhận |
| Q-10 | Phạm vi đợt này có bao gồm AWS, DigitalOcean và Google Workspace Commit không, hay chỉ GCP + GMap + Workspace Flex? | CEO / PM | Chờ xác nhận |
| Q-11 | Hệ thống hóa đơn điện tử tích hợp là MISA meInvoice (theo tài liệu công nợ hiện có) hay hệ thống khác? | Kế toán | Chờ xác nhận |
| Q-12 | Cơ chế thông báo thay đổi hợp đồng/phụ lục: ERP nhận từ hệ thống SSC qua tích hợp, hay admin nhập tay vào ERP? | SSC / Admin | Chờ xác nhận |
| Q-13 | Quy tắc xử lý khi một view link GMap chứa project của nhiều khách khác nhau — map bằng project ID hay bằng dữ liệu order từ admin? | Kế toán / Admin | Chờ xác nhận |
| Q-14 | Phỏng vấn bổ sung **anh Phong (tầng 3)** về cách lấy số hiện tại — kế toán đề nghị hỏi thêm để nắm đầy đủ nguồn dữ liệu | Anh Phong | Chưa phỏng vấn |
| Q-15 | Bảng mức discount theo năm hợp đồng (năm 1 / năm 2 "F2" / các năm sau) áp dụng cho những dịch vụ nào? | Kế toán / Sale | Chờ xác nhận |

---

## 7. Chỉ số Thành công (đề xuất)

| Chỉ số | Hiện tại | Mục tiêu |
| :--- | :--- | :--- |
| Thời gian tính cước toàn bộ khách hàng/tháng | ~1,5 ngày | ≤ 0,5 ngày |
| Số khách phải xử lý tay (Gemini, credit, nhiều billing) | Gần như toàn bộ | Chỉ các ngoại lệ được cảnh báo |
| Thời điểm gửi mail đối soát cho khách | Sáng hôm sau | Cuối ngày tính cước |
| Sai lệch do làm tròn phải sửa tay | Thường xuyên | 0 |
