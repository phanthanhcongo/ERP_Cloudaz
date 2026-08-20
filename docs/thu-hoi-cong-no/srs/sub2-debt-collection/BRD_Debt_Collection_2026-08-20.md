# TÀI LIỆU YÊU CẦU NGHIỆP VỤ

**Business Requirements Document (BRD)**

## Phân luồng 2: Thu hồi Công nợ (Debt Collection Flow)

| Thông tin | Giá trị |
|---|---|
| **Dự án** | ERP CloudAZ — Module Thu hồi Công nợ |
| **Khách hàng** | CloudAZ / Cloudino |
| **Ngày** | 2026-08-20 |
| **Phiên bản** | 1.0 |
| **Tác giả** | BA Team (AI-assisted) |

---

## Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
|---|---|---|---|
| 1.0 | 2026-08-20 | BA Team (AI-assisted) | Khởi tạo BRD từ phân tích quy trình thu hồi công nợ (thuHoiCongNo.md) và trao đổi nghiệp vụ (traodoi.md) |

---

## 1. Vấn đề Hiện tại

Quy trình thu hồi công nợ hiện tại hoàn toàn thủ công, phối hợp liên phòng ban rời rạc qua email, thiếu kiểm soát tập trung:

- **Xuất hóa đơn & ĐNTT thủ công**: Kế toán tự xuất hóa đơn, tự gửi ĐNTT. HCNS theo dõi phát thư bản cứng bằng ghi chép tay, cập nhật 2 lần/ngày.
- **Nhắc nợ thủ công**: Kế toán tự soạn email nhắc nợ từng khách, dễ spam (gửi nhiều email riêng cho từng dịch vụ). Lãi phạt chậm tính tay.
- **Dừng dịch vụ không có audit**: Không có quy trình phê duyệt tập trung, không ghi nhận yêu cầu/xác nhận/thời điểm thực thi.
- **Pháp lý không có template động**: Legal soạn công văn từ đầu mỗi lần, không có template tự động điền thông tin hợp đồng.
- **Thiếu cảnh báo**: Khách không được cảnh báo đủ sớm về rủi ro mất dữ liệu vĩnh viễn khi dừng GCP/GWS.
- **Thiếu audit trail**: Không lưu lịch sử gửi ĐNTT, nhắc nợ, lãi phạt, yêu cầu dừng — khó truy vết khi có tranh chấp.

---

## 2. Giải pháp Đề xuất

Xây dựng module **Thu hồi Công nợ** trong ERP CloudAZ tự động hóa toàn bộ quy trình từ khi bảng đối soát được chốt → xuất hóa đơn → gửi ĐNTT → nhắc nợ → tính lãi phạt → phối hợp dừng dịch vụ → xử lý pháp lý. Hệ thống sẽ:

- Tự động sinh hóa đơn VAT, tạo ĐNTT, gửi email + theo dõi chuyển phát bản cứng.
- Tự động gửi email nhắc nợ theo lịch trình (gộp hóa đơn các dịch vụ, 1 mail/khách/ngày).
- Tự động tính lãi chậm thanh toán, cộng dồn hàng ngày.
- Hỗ trợ quy trình phê duyệt dừng dịch vụ 3 bên: Kế toán → Sales AM → Phòng mua.
- Cung cấp template công văn pháp lý tự động điền thông tin hợp đồng.
- Lưu audit trail toàn bộ quy trình.

---

## 3. Hệ thống bị Ảnh hưởng

- Module Billing & Dispute (sub1) — đầu vào: bảng đối soát đã chốt, thông tin hợp đồng.
- Hệ thống xuất hóa đơn VAT — cần tích hợp API.
- Hệ thống email nội bộ.
- Hệ thống quản lý hợp đồng (SSCC) — thông tin hạn thanh toán, địa chỉ, email, template công văn.
- Google Cloud Console / GWS Admin Console — thực thi dừng dịch vụ (Phòng mua).
- Bưu điện / dịch vụ chuyển phát — gửi ĐNTT & công văn bản cứng.

---

## 4. Giả định / Phụ thuộc

- Đầu vào: bảng đối soát chi phí đã chốt từ module Billing & Dispute.
- Thời hạn thanh toán (Ngày X) cấu hình trong hợp đồng, khác nhau theo từng khách.
- Kế toán gửi ĐNTT sớm để khoảng cách Ngày 0 → Ngày X ≥ thời hạn HĐ.
- HCNS cập nhật trạng thái phát thư trước 10:00 và 14:00 hàng ngày.
- Lãi chậm thanh toán: tỷ lệ % theo hợp đồng từng khách.
- Dừng GCP/GWS: Google xóa dữ liệu và mất ưu đãi giá cũ vĩnh viễn.
- Khách bị dừng lần 2: yêu cầu đặt cọc.
- Legal có template riêng cho từng hợp đồng.
- Công văn gửi song song bản cứng + email.

---

## 5. Yêu cầu Nghiệp vụ

### Phần A — Xuất hóa đơn & Chuyển phát (Invoicing & Delivery)

#### 5.1 Xuất hóa đơn VAT

- **5.1.1** Hệ thống tự động sinh hóa đơn VAT cho từng khách hàng dựa trên bảng đối soát chi phí đã chốt (khách xác nhận hoặc quá hạn xác nhận).
- **5.1.2** Hệ thống hỗ trợ xuất hóa đơn riêng cho từng pháp nhân (khi khách chia nhiều pháp nhân).
- **5.1.3** Hệ thống hỗ trợ thay đổi pháp nhân: xuất hóa đơn theo pháp nhân mới, số liệu giữ nguyên.
- **5.1.4** Hệ thống cho phép kế toán kiểm tra, điều chỉnh hóa đơn trước khi phát hành.
- **5.1.5** Hệ thống hỗ trợ xuất hóa đơn điều chỉnh (tăng/giảm) khi sai sót sau phát hành.
- **5.1.6** Hệ thống lưu lịch sử hóa đơn đã xuất theo khách/tháng/dịch vụ.

#### 5.2 Tạo & Gửi Đề nghị thanh toán (ĐNTT)

- **5.2.1** Hệ thống tự động tạo ĐNTT từ hóa đơn đã phát hành: số tiền, hạn thanh toán (Ngày X), tài khoản NH, lãi chậm thanh toán.
- **5.2.2** Hệ thống xác định Ngày X dựa trên cấu hình thời hạn thanh toán trong hợp đồng từng khách.
- **5.2.3** Hệ thống gửi ĐNTT song song: email (bản mềm PDF) + yêu cầu chuyển phát bản cứng cho HCNS.
- **5.2.4** Hệ thống ghi nhận danh sách email nhận ĐNTT theo hợp đồng.
- **5.2.5** Hệ thống hỗ trợ gộp nhiều hóa đơn các dịch vụ khác nhau của cùng 1 khách vào 1 ĐNTT.

#### 5.3 Theo dõi chuyển phát bản cứng

- **5.3.1** HCNS cập nhật trạng thái phát thư: ngày gửi, đơn vị chuyển phát, ngày phát thành công, người nhận, trạng thái.
- **5.3.2** Hệ thống yêu cầu cập nhật 2 lần/ngày: trước 10:00 và 14:00.
- **5.3.3** Hệ thống gửi email thông báo cho Kế toán khi ĐNTT bản cứng phát thành công.
- **5.3.4** Hệ thống cảnh báo nếu quá 48h chưa có cập nhật trạng thái.

#### 5.4 Cảnh báo trước hạn

- **5.4.1** Hệ thống tự động gửi email cảnh báo vào Ngày X-2.
- **5.4.2** Email gửi đến KH, CC Sales AM. Tiêu đề: `[Alert!] CloudAZ // [Tên KH] // Đề nghị thanh toán chi phí dịch vụ...`
- **5.4.3** Hệ thống tự động kích hoạt luồng nhắc nợ khi quá Ngày X chưa thanh toán.

### Phần B — Nhắc nợ & Xử lý quá hạn (Debt Collection & Suspension)

#### 5.5 Nhắc nợ tự động

- **5.5.1** Hệ thống tự động gửi email nhắc nợ vào Ngày X+1 cho khách chưa thanh toán.
- **5.5.2** Hệ thống gộp tất cả hóa đơn các dịch vụ (GCP, GMP, GWS...) của 1 khách vào 1 email duy nhất.
- **5.5.3** Hệ thống đảm bảo tối đa 1 email nhắc nợ/khách/ngày (U5).
- **5.5.4** Nội dung email: thông báo quá hạn, số tiền, lãi chậm (tự động tính cộng dồn), thời gian dừng DV (X+4), thời gian chấm dứt HĐ (X+30).
- **5.5.5** Tần suất: 1 lần/ngày từ X+1 đến khi thanh toán hoặc dịch vụ bị dừng.
- **5.5.6** Hệ thống hỗ trợ nhắc nợ tự động cho cả GWS Committed (U6).
- **5.5.7** *[CẦN XÁC NHẬN]* Cấu hình duyệt email nhắc nợ: tự động gửi / tạo nháp cho Sales duyệt — hỗ trợ cấu hình theo nhóm khách (U14).

#### 5.6 Tính lãi chậm thanh toán

- **5.6.1** Hệ thống tự động tính lãi chậm dựa trên số ngày quá hạn và tỷ lệ % theo hợp đồng.
- **5.6.2** Hệ thống cộng dồn lãi phạt hàng ngày, hiển thị trên email nhắc nợ (U7).
- **5.6.3** Hệ thống cho phép cấu hình tỷ lệ lãi chậm riêng cho từng hợp đồng.
- **5.6.4** Hệ thống hiển thị chi tiết: nợ gốc, lãi phạt, tổng phải thu.

#### 5.7 Phối hợp Sales AM

- **5.7.1** Hệ thống hiển thị dashboard công nợ cho Sales AM: danh sách khách quá hạn thuộc quyền.
- **5.7.2** Sales AM chỉ xem được khách hàng của mình (U13).
- **5.7.3** Sales AM gọi điện/chat đôn đốc (không gửi email nhắc nợ để tránh spam — U14).
- **5.7.4** Sales AM giải thích rủi ro: dừng GCP/GWS → mất dữ liệu và ưu đãi giá cũ vĩnh viễn.

#### 5.8 Dừng dịch vụ (3 bên)

- **5.8.1** Ngày X+4: hệ thống gửi email cảnh báo dừng dịch vụ đến KH (U12).
- **5.8.2** Hệ thống tạo yêu cầu dừng DV gửi Sales AM xác nhận.
- **5.8.3** Sales AM xác nhận/từ chối trên hệ thống. Từ chối phải ghi lý do.
- **5.8.4** Sau khi Sales AM xác nhận, hệ thống gửi yêu cầu đến Phòng mua.
- **5.8.5** Phòng mua thực thi dừng DV trên Console hãng, cập nhật trạng thái.
- **5.8.6** Hệ thống gửi email kết quả cho Kế toán, Sales, Legal.
- **5.8.7** Hệ thống chặn dừng DV nếu chưa có xác nhận từ Sales AM (U11).
- **5.8.8** Hệ thống ghi lịch sử dừng DV: khách bị dừng lần 2 → yêu cầu đặt cọc.

#### 5.9 Quy trình pháp lý (Legal)

- **5.9.1** Hệ thống cung cấp template công văn nhắc nợ/chấm dứt HĐ tự động điền thông tin HĐ (U9).
- **5.9.2** Ngày X+15: hệ thống thông báo Legal soạn văn bản chấm dứt HĐ.
- **5.9.3** Legal soạn văn bản theo template riêng của từng hợp đồng.
- **5.9.4** Hệ thống hỗ trợ gửi công văn song song: bản cứng (bưu điện) + email (U10).
- **5.9.5** Ngày X+30: Legal thực hiện đơn phương chấm dứt HĐ, khởi kiện theo điều khoản HĐ.

#### 5.10 Audit Trail & Dashboard

- **5.10.1** Hệ thống lưu lịch sử toàn bộ quy trình: xuất HĐ, gửi ĐNTT, nhắc nợ, lãi phạt, yêu cầu dừng, xác nhận, thực thi, công văn.
- **5.10.2** Dashboard Kế toán trưởng: tổng nợ quá hạn, số khách, phân loại giai đoạn.
- **5.10.3** Dashboard Sales AM: khách quá hạn thuộc quyền, số tiền, số ngày quá hạn.
- **5.10.4** Hệ thống cảnh báo khi khách đến giai đoạn dừng DV hoặc chấm dứt HĐ.

---

## 6. Câu hỏi còn Mở — Cần xác nhận với khách hàng

| Mã | Vấn đề cần xác nhận | Trạng thái |
|---|---|---|
| **OQ-01** | Hệ thống xuất hóa đơn VAT hiện tại là gì? Có API tích hợp không? | ⏳ Chờ xác nhận |
| **OQ-02** | Quy trình xuất hóa đơn điều chỉnh — có cần tích hợp cơ quan thuế? | ⏳ Chờ xác nhận |
| **OQ-03** | Dịch vụ chuyển phát bản cứng (VNPost/Viettel Post...) có API tracking không? | ⏳ Chờ xác nhận |
| **OQ-04** | Lãi chậm thanh toán: tỷ lệ % theo HĐ hay quy định chung? Có giới hạn tối đa? | ⏳ Chờ xác nhận |
| **OQ-05** | Cấu hình duyệt email nhắc nợ: hỗ trợ cả 2 luồng (tự động + duyệt trước) hay chọn 1? | ⏳ Chờ xác nhận |
| **OQ-06** | Khách đặt cọc: số tiền bao nhiêu %? Quy định chung hay theo HĐ? | ⏳ Chờ xác nhận |
| **OQ-07** | Sau dừng DV, khách thanh toán đủ — khôi phục trong bao lâu? Quy trình? | ⏳ Chờ xác nhận |
| **OQ-08** | Có trường hợp khách đặc biệt được gia hạn (miễn dừng DV)? Ai quyết định? | ⏳ Chờ xác nhận |
| **OQ-09** | GWS Committed: quy trình nhắc nợ và dừng có giống Flex không? | ⏳ Chờ xác nhận |
| **OQ-10** | Template công văn pháp lý: mỗi HĐ template riêng hay 1 template chung? | ⏳ Chờ xác nhận |
