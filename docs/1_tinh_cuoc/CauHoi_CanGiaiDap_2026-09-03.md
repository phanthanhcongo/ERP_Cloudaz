# SỔ CÂU HỎI CẦN GIẢI ĐÁP — Phân hệ Tính cước & Công nợ

> **Ngày lập**: 2026-09-03 · **Người lập**: BA Team
> **Phạm vi**: toàn bộ tài liệu trong `docs/1_tinh_cuoc/` và BRD GWS Standard
> **Nguồn tổng hợp**: [BRD Tính cước Google](Google/BRD_TinhCuoc_Google_2026-09-03.md) · [BRD Tính cước GWS Flex](GWS_Flex/BRD_TinhCuoc_GWS_Flex_2026-09-03.md) · [BRD GWS Standard](Gws_standard/BRD_GWS_Standard_2026-09-03.md) · rà soát tài liệu chính thống Google ngày 2026-09-03

---

## Cách dùng tài liệu này

Đây là **nơi duy nhất** theo dõi các câu hỏi còn treo. Các BRD chỉ ghi câu hỏi thuộc phạm vi của mình; file này gom lại, **khử trùng lặp**, gắn người chịu trách nhiệm và mức độ ưu tiên.

- Mỗi câu hỏi có mã **`CH-xx`** cố định, **không đánh số lại** khi thêm câu mới.
- Cột **Nguồn** trỏ về nơi câu hỏi phát sinh, để tra ngược ngữ cảnh đầy đủ.
- Khi có câu trả lời: điền vào cột **Trả lời**, đổi trạng thái, **và cập nhật BRD gốc** — nếu chỉ sửa ở đây thì BRD sẽ lệch.

**Ký hiệu mức độ:**

| Ký hiệu | Nghĩa |
|---|---|
| 🔴 | Chặn triển khai — không trả lời thì không code được |
| 🟠 | Lỗ hổng nghiệp vụ — có việc hiện không ai làm |
| 🟡 | Ảnh hưởng thiết kế / phạm vi tài liệu |
| ⚪ | Chi tiết vận hành, có thể chốt sau |

---

## 📌 Bốn việc gấp nhất

| # | Việc | Vì sao gấp |
|---|---|---|
| 1 | **CH-01** — Bật Channel Services Export sang BigQuery | Dataset multi-region chỉ được Google hồi tố dữ liệu **từ đầu tháng trước**. Chậm một tháng là mất một tháng dữ liệu, **không có cách vá** |
| 2 | **CH-05** — Chốt ai tính cước dòng Commit | Hiện dòng Commit bị lọc khỏi luồng Flex và **không rơi vào quy trình nào** — có tiền không ai tính |
| 3 | **CH-03** — ERP thay thế hay tích hợp với CM | Treo từ BRD Google, ảnh hưởng lộ trình của mọi tài liệu |
| 4 | **CH-04** — Dùng repricing của Google hay ERP tự tính giá bán | Quyết định kiến trúc phần tính cước; sửa muộn là làm lại |

---

## Nhóm 1 — 🔴 Chặn triển khai

| Mã | Câu hỏi | Người trả lời | Nguồn | Trả lời | Trạng thái |
|---|---|---|---|---|---|
| **CH-01** | **Đã có quyền `Google Cloud Reseller administrator` + `Google Workspace Reseller Admin/Billing` để bật Channel Services Export chưa? Ai thực hiện, khi nào?** Kèm: tạo project, bật BigQuery Data Transfer Service API, tạo dataset **multi-region**, cấp `BigQuery Data Editor` cho service account của Google | IT / Partner Admin | GWS Flex Q-01 · Google Q-01 | | ⏳ Chờ |
| **CH-02** | Service account Gmail có domain-wide delegation và hòm thư dùng chung `congno@cloudaz.cc` đã được cấp chưa? | IT / Admin | GWS Standard Q-08 | | ⏳ Chờ |
| **CH-03** | **ERP sẽ *thay thế* CM hay *tích hợp* với CM?** Nếu thay thế thì cần kế hoạch di trú dữ liệu hợp đồng | CEO / PM / Đội Tech | Google Q-04 | | ⏳ Chờ |
| **CH-04** | **Dùng `CustomerRepricingConfig` của Google để Google tính sẵn giá bán cho khách, hay ERP tự tính theo công thức hợp đồng?** Dùng Google thì `customer_cost` có sẵn trong dữ liệu xuất ra; tự tính thì phải đưa toàn bộ công thức hợp đồng vào ERP | Kế toán trưởng + Đội Tech | GWS Flex Q-07 | | ⏳ Chờ |

---

## Nhóm 2 — 🟠 Lỗ hổng nghiệp vụ hiện không ai sở hữu

| Mã | Câu hỏi | Người trả lời | Nguồn | Trả lời | Trạng thái |
|---|---|---|---|---|---|
| **CH-05** | **Ai tính cước cho dòng Commit (license trả trước 1 năm)?** BRD GWS Flex §5.2.2 lọc bỏ hoàn toàn dòng này; BRD GWS Standard lại chỉ nói về thu hồi công nợ, không nói về tính cước. Ba câu con: **(a)** ghi nhận doanh thu **một lần khi bán** hay **phân bổ dần 12 kỳ**? **(b)** nếu phân bổ dần thì lấy số từ BigQuery export hay từ hợp đồng? **(c)** có cần một BRD riêng cho tính cước GWS Standard/Commit không? | Kế toán trưởng / PM | Phát hiện khi rà soát · Google 5.5.2 `[CẦN XÁC NHẬN cách phân bổ]` | | ⏳ Chờ |
| **CH-06** | Khách có **cả GWS Flex và GWS Standard trên cùng một domain** thì bảng tổng hợp gửi khách tách **hai dòng hay hai bảng riêng**? | Kế toán | GWS Flex Q-11 | | ⏳ Chờ |
| **CH-07** | Chính sách **bắt buộc thu đủ 100%, không hỗ trợ thanh toán một phần** có đúng thực tế vận hành không? Nếu có khách trả làm nhiều đợt thì xử lý ra sao? | Kế toán trưởng | GWS Standard Q-05 | | ⏳ Chờ |

---

## Nhóm 3 — 🟡 Phạm vi & cấu trúc tài liệu

| Mã | Câu hỏi | Người trả lời | Nguồn | Trả lời | Trạng thái |
|---|---|---|---|---|---|
| **CH-08** | **Thư mục `Gws_standard` đang lệch nội dung**: nằm trong `1_tinh_cuoc` (tính cước) nhưng BRD bên trong là về thu hồi công nợ. Chọn cách nào? · **(a)** chuyển sang `docs/2_thu-hoi-cong-no/` · **(b)** giữ nguyên và viết thêm BRD tính cước GWS Standard *(giải quyết luôn CH-05)* · **(c)** đổi tên file cho rõ là BRD công nợ | PO / BA | Phát hiện khi rà soát | | ⏳ Chờ |
| **CH-09** | **AWS và DigitalOcean có thật sự ngoài phạm vi không?** BRD Google ghi *"ngoài phạm vi đợt này"* và *"CM không hỗ trợ AWS"*, nhưng hai thư mục này có lượng tài liệu **lớn hơn hẳn Google**: 172 bảng đối soát AWS, 56 bảng DO, invoice thật, `PhanTich_QuyTrinh_Billing_*`, `setup_aws_data_exports.md`, `Traodoi.md` | CEO / PM | Google Q-10 · phát hiện khi rà soát | | ⏳ Chờ |
| **CH-10** | **GCP và GMP có cần BRD riêng không?** Hiện hai thư mục này chỉ có `GiaiPhap_KyThuat` + `QuyTrinh_LayHoaDon`, phần nghiệp vụ nằm chung trong BRD Google. GWS_Flex đã có BRD riêng → cấu trúc đang không đồng nhất | PO / BA | Phát hiện khi rà soát | | ⏳ Chờ |
| **CH-11** | **Còn nguồn đầu vào nào chưa được đưa vào không?** `Traodoi.md` có ở `Aws/` và `DigitalOcean/` nhưng không có cho Google/GWS; transcript phỏng vấn chỉ có 5 file cho Google. Nếu có ghi chú trao đổi về GWS thì nhiều mục `[CẦN XÁC NHẬN]` sẽ tự đóng | PM / BA | Phát hiện khi rà soát | | ⏳ Chờ |
| **CH-12** | Đợt tiếp theo **mở rộng sang sản phẩm nào trước**: GWS Flex, AWS, GCP hay GMP? Ảnh hưởng thứ tự chuẩn bị cấu hình và biểu mẫu | PM / Kinh doanh | GWS Standard Q-10 | | ⏳ Chờ |
| **CH-13** | **File mẫu một kỳ tính cước** (file tính GCP, file tính GMap, file upload lên CM, bảng đối soát gửi khách) — kế toán đã đồng ý gửi nhưng **chưa nhận được** | Kế toán | Google D-05 | | ⏳ Chờ |

---

## Nhóm 4 — Quy tắc tính cước & đối soát

| Mã | Câu hỏi | Người trả lời | Nguồn | Trả lời | Trạng thái |
|---|---|---|---|---|---|
| **CH-14** | **Ngưỡng lệch cho phép** khi đối soát tổng chi phí với invoice của hãng là bao nhiêu? *(GWS không có bước đối soát tay nên đây là chốt kiểm soát duy nhất)* | Kế toán trưởng | GWS Flex Q-05 | | ⏳ Chờ |
| **CH-15** | **Ngưỡng biến động bất thường** so với kỳ trước — tăng/giảm bao nhiêu phần trăm thì cảnh báo? | Kế toán | GWS Flex Q-06 | | ⏳ Chờ |
| **CH-16** | **Bảng mức discount theo năm hợp đồng** (năm 1 / năm 2 "F2" / các năm sau) áp dụng cho những dịch vụ nào? **GWS Flex có bị ảnh hưởng không?** | Kế toán / Sale | Google Q-15 · GWS Flex Q-10 | | ⏳ Chờ |
| **CH-17** | **Ngưỡng giá trị Gemini** bỏ qua không tách riêng — chốt con số cứng *(kế toán nêu ~0,07 USD nhưng đang xử lý linh hoạt)* | Kế toán | Google Q-05 | | ⏳ Chờ |
| **CH-18** | **Đặc tả chi tiết các công thức tính hiện có trên CM** (GCP Resale, Gmap Resale, Workspace Resale, Workspace Collect, Workspace Commit) | Đội Tech | Google Q-02 · D-02 | | ⏳ Chờ |
| **CH-19** | **Quy tắc CM map dữ liệu Billing ID → dòng đối soát**, và lý do CM **loại bỏ một số dòng** dữ liệu | Đội Tech | Google Q-03 · D-03 | | ⏳ Chờ |
| **CH-20** | **Quy trình báo cáo RA** — khi nào bắt buộc khớp tổng với invoice hãng, khác gì với bước tính cước hằng tháng | Kế toán trưởng | Google 5.6.3 | | ⏳ Chờ |
| **CH-21** | Ngưỡng **cảnh báo mềm cho lãi phạt** đang tạm lấy **1%/ngày** — có đúng thực tế hợp đồng CloudAZ đang ký không? | Kế toán / Pháp lý | GWS Standard Q-04 | | ⏳ Chờ |
| **CH-22** | Kế toán có cần **đối soát lại số tiền CM tính ra** trước khi đưa vào luồng công nợ không? Nếu có thì cần bảng đối soát và nguồn số liệu độc lập để so | Kế toán | GWS Standard Q-02 | | ⏳ Chờ |

---

## Nhóm 5 — Dữ liệu & tích hợp

| Mã | Câu hỏi | Người trả lời | Nguồn | Trả lời | Trạng thái |
|---|---|---|---|---|---|
| **CH-23** | **Ai chịu trách nhiệm set `correlationId`** cho toàn bộ customer trên Cloud Channel API, và mã dùng là **mã khách hàng của ERP hay của CM**? *(Phụ thuộc CH-03)* | Admin / Đội Tech | GWS Flex Q-08 | | ⏳ Chờ |
| **CH-24** | **Kênh SFTP `partnerupload.google.com` cổng `19321` có thật sự được cấp cho tài khoản partner của CloudAZ không?** Rà soát 2026-09-03 **không tìm thấy tài liệu chính thống nào** của Google Workspace / Channel Services xác nhận kênh này — tham chiếu tìm được thuộc tài liệu sản phẩm khác (RCS for Business) | **Partner Manager của Google** | GWS Flex Q-02 · R-02 | | ⏳ Chờ |
| **CH-25** | Google có **báo cáo tổng lượng dùng Gemini** cho toàn bộ khách theo tháng không, hay phải lấy theo từng billing account? | Đội Tech / chị Phương | Google Q-06 | | ⏳ Chờ |
| **CH-26** | **Cơ chế thông báo thay đổi hợp đồng/phụ lục**: ERP nhận từ hệ thống SSC qua tích hợp, hay admin nhập tay vào ERP? | SSC / Admin | Google Q-12 | | ⏳ Chờ |
| **CH-27** | Quy tắc xử lý khi **một view link GMap chứa project của nhiều khách khác nhau** — map bằng project ID hay bằng dữ liệu order từ admin? | Kế toán / Admin | Google Q-13 | | ⏳ Chờ |
| **CH-28** | **Cây tổ chức ERP đã đủ dữ liệu** để truy ra Trưởng phòng Sales của từng Sales AM chưa? *(cần bổ sung cột `departments.manager_member_id`)* | HCNS / Admin | GWS Standard Q-09 · D-02 | | ⏳ Chờ |
| **CH-29** | Job đồng bộ CM tự động mỗi sáng (07:45) là **bắt buộc hay tùy chọn**? Hiện đang xếp là tùy chọn, luồng bấm tay vẫn đủ | PO / Kế toán | GWS Standard Q-03 | | ⏳ Chờ |
| **CH-30** | **Thời gian chạy song song** ERP với CM là bao lâu trước khi bỏ hẳn luồng cũ? | PO / Kế toán | GWS Flex Q-09 | | ⏳ Chờ |

---

## Nhóm 6 — Vận hành, tuân thủ & khách hàng

| Mã | Câu hỏi | Người trả lời | Nguồn | Trả lời | Trạng thái |
|---|---|---|---|---|---|
| **CH-31** | **Bằng chứng lượng dùng gửi khách**: có thể thay ảnh chụp Console bằng báo cáo PDF do ERP sinh không? | Kế toán / Khách hàng | Google Q-07 | | ⏳ Chờ |
| **CH-32** | **Thời hạn chờ khách xác nhận** trước khi tự động xuất hóa đơn là bao nhiêu ngày? | Kế toán | Google Q-08 | | ⏳ Chờ |
| **CH-33** | Xác nhận **danh sách khách đặc biệt**: khách đa pháp nhân (9 pháp nhân), khách ưu tiên phải xong trước ngày 07 (BitVN, Phạm/Masan City) — cần đúng tên và quy tắc xử lý | Kế toán / Sale | Google Q-09 | | ⏳ Chờ |
| **CH-34** | Hệ thống hóa đơn điện tử tích hợp là **MISA meInvoice** hay hệ thống khác? **Đưa vào đợt nào?** Hiện hồ sơ công nợ đóng ở bước thu đủ tiền, chưa gắn hóa đơn VAT | Kế toán trưởng / PM | Google Q-11 · GWS Standard Q-11 | | ⏳ Chờ |
| **CH-35** | **Điều khoản xử lý dữ liệu cá nhân** trong hợp đồng khách hàng (Nghị định 13/2023/NĐ-CP) đã có chưa? Thiếu thì tính năng gửi thư có rủi ro tuân thủ | Pháp lý | GWS Standard Q-07 | | ⏳ Chờ |
| **CH-36** | **Thời hạn lưu dữ liệu liên hệ** đề xuất *vòng đời hợp đồng + 5 năm* (khớp thời hiệu khởi kiện hợp đồng thương mại) — Pháp lý xác nhận? | Pháp lý | GWS Standard Q-06 | | ⏳ Chờ |
| **CH-37** | Trường hợp khách hàng **nhiều pháp nhân** hiện xử lý bằng cách Pháp lý sửa tay bản nháp công văn — có chấp nhận lâu dài không? | Pháp lý / Kế toán | GWS Standard Q-12 | | ⏳ Chờ |
| **CH-38** | Có cần **báo cáo kiểm toán dữ liệu cước định kỳ hằng tháng** xuất tự động không, hay Audit Trail tra cứu trên màn hình là đủ? | Kế toán trưởng | GWS Standard Q-13 | | ⏳ Chờ |
| **CH-39** | **Phỏng vấn bổ sung anh Phong (tầng 3)** về cách lấy số hiện tại — kế toán đề nghị hỏi thêm để nắm đầy đủ nguồn dữ liệu | Anh Phong | Google Q-14 | | ⏳ Chưa phỏng vấn |

---

## Nhóm 7 — ⚪ Tự đóng sau khi có dữ liệu thật

Ba câu này **không cần hỏi ai** — chỉ cần bật export xong rồi chạy truy vấn.

| Mã | Câu hỏi | Cách trả lời | Trạng thái |
|---|---|---|---|
| **CH-40** | Nhãn `workspace.googleapis.com/usage_type` nhận những giá trị nào trong dữ liệu thật của CloudAZ? *(Google chưa công bố tập giá trị)* | Chạy truy vấn khảo sát tại [BRD GWS Flex §6.4](GWS_Flex/BRD_TinhCuoc_GWS_Flex_2026-09-03.md) | 🔒 Chờ CH-01 |
| **CH-41** | `usage_start_time` / `usage_end_time` với gói Workspace tính theo chỗ ngồi có phản ánh đúng ngày kích hoạt/hủy của khách không? | Đối chiếu truy vấn §6.6 với vài khách đã biết là dùng lẻ tháng; đối chiếu chéo `commitmentInterval` từ Reseller API | 🔒 Chờ CH-01 |
| **CH-42** | Luật lọc dòng Commit tác động tới **bao nhiêu dòng và bao nhiêu tiền** mỗi kỳ? | Đếm sau kỳ chạy đầu tiên (yêu cầu §5.2.5) | 🔒 Chờ CH-01 |

---

## Phát hiện trong quá trình rà soát *(không phải câu hỏi — đã xử lý)*

| # | Phát hiện | Trạng thái |
|---|---|---|
| 1 | **`setup_bigquery_export.md` hướng dẫn sai vị trí dataset** — ghi *"nên chọn multi-region `US` hoặc `asia-southeast1`"*, nhưng `asia-southeast1` là **regional**. Làm theo là mất dữ liệu hồi tố của tháng trước, không vá được | ✅ Đã sửa 2026-09-03 |
| 2 | **`CloudChannelReportsService` (`runReportJob`) đã bị Google deprecated**, thay bằng BigQuery Export — củng cố quyết định chọn Phương án 1 | ✅ Đã ghi vào tài liệu |
| 3 | **Thông số SFTP không xác minh được** trên tài liệu chính thống Google | ✅ Đã gắn cảnh báo · ⏳ chờ CH-24 |
| 4 | **Admin Console chỉ lưu 12 tháng hóa đơn** → ERP phải chủ động lưu bản sao, không coi Console là kho lưu trữ đối soát | ✅ Đã ghi vào tài liệu |
| 5 | **Dòng Commit không có quy trình tính cước nào sở hữu** | ⏳ Chờ CH-05 |

---

## Nhật ký cập nhật

| Ngày | Người | Thay đổi |
|---|---|---|
| 2026-09-03 | BA Team | Khởi tạo sổ câu hỏi. Gom 42 câu từ 3 BRD + rà soát tài liệu chính thống Google, khử trùng lặp, gắn người trả lời và mức độ ưu tiên |
