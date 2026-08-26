TÀI LIỆU MÔ TẢ NGHIỆP VỤ
ERP CloudAZ — Module Tính Cước, Đối Soát & Thu Hồi Công Nợ
Module: Thu hồi công nợ
Epic: Epic 1: Billing & Debt Collection
Feature: BD-09 (Quản lý danh sách đến hạn & ĐNTT GWS Committed)
Người soạn thảo: BA (Antigravity)
Phiên bản: v1.0 - 2026-08-25

---
## 1. Màn Hình Danh Sách Cước & ĐNTT (Góc nhìn Kế toán)
Màn hình trung tâm quản lý toàn bộ vòng đời công nợ của khách hàng, tích hợp dữ liệu chốt cước gốc từ hệ thống CM và luồng xử lý thu hồi nợ (nhắc nợ, phát bản cứng, phạt lãi, khóa dịch vụ) của ERP.

### 1.1. Khu vực Bộ lọc & Thống kê nhanh (Filter & Global Actions)
Khu vực này giúp Kế toán lọc nhanh các khoản nợ theo trạng thái khẩn cấp hoặc theo thời gian/sản phẩm.

**Danh sách block hiển thị**
| Block | Mô tả |
|---|---|
| Tabs Trạng thái | Các tab lọc nhanh: `[Tất cả]`, `[Đang chờ phát thư]`, `[Trong hạn]`, `[Đang quá hạn]`, `[Chờ duyệt khóa DV]`. Lọc dựa trên sự kết hợp của `ngay_x`, `debt_status`, `suspend_status`. |
| Bộ lọc nâng cao | Các ô tìm kiếm: Từ ngày, Đến ngày, Sản phẩm, Khách hàng/Hợp đồng. |

**CTA / Hành động**
- `[ 🔍 Tìm Kiếm ]`: Lọc danh sách theo các tiêu chí đã nhập (Reload grid).
- `[ 🔄 Đồng bộ dữ liệu CM ]`: Trigger API lấy dữ liệu ĐNTT mới nhất từ hệ thống CM, cập nhật vào bảng `DEBTS` (match qua `dntt_cm_id`).
- `[ ⬇️ Tải xuống tất cả ]`: Tải hàng loạt file ĐNTT (.docx/.pdf) gốc từ hệ thống CM cho các dòng được check.

**Form / Input**
- `Từ ngày` / `Đến ngày`: Optional, chọn khoảng thời gian xuất hóa đơn/ĐNTT.
- `Sản phẩm`: Dropdown chọn gói dịch vụ (VD: GWS Committed).
- `Hợp đồng`: Searchable dropdown/Autocomplete tìm mã HĐ.

---
### 1.2. Bảng Dữ Liệu Công Nợ (Data Grid)
Hiển thị danh sách khách hàng nợ tiền, kết hợp dữ liệu tĩnh (từ CM) và dữ liệu động (từ ERP).

**Danh sách block hiển thị (Các cột dữ liệu)**
| Block (Cột) | Mô tả & Nguồn dữ liệu |
|---|---|
| Khách hàng / HĐ | Tên khách hàng, Mã hợp đồng (`customer_id`, `contract_id` từ CM). |
| Sản phẩm | Tên gói dịch vụ từ CM. |
| Tiền phải thu | Tổng = Nợ gốc (`total_principal` từ CM) + Lãi phạt (`total_penalty` từ `DEBT_PENALTY_LOGS` của ERP). |
| File ĐNTT | Link tải file ĐNTT lấy qua API của CM. |
| Trạng thái Mail | Trạng thái gửi mail nhắc nợ (`email_status` trong bảng `DEBT_COLLECTIONS`: UNSENT, SENT, LOCKED). Hiển thị thêm số lần đã gửi (`email_sent_count`). |
| Trạng thái Bản cứng | `hardcopy_status` trong bảng `DEBT_DELIVERIES`: Chờ in -> Đã đóng dấu -> Đã giao BĐ -> Đã phát (Hiển thị kèm `tracking_code`). |
| Mốc Ngày X | `ngay_x` = `delivered_at` + số ngày ân hạn hợp đồng. Hiển thị đếm ngược (VD: Còn 2 ngày, Quá 5 ngày). |
| Alert Luồng xử lý | Trạng thái tổng hợp trực quan: 🟢 Bình thường -> 🟠 Chờ Sales duyệt (X+4) -> 🔴 Chuyển Pháp lý (X+15) -> ⚫ Đã khóa -> 💲 Đã tất toán. |
| Khóa DV | `suspend_status`: NONE -> WAITING_SALES -> WAITING_PROCUREMENT -> SUSPENDED -> WAITING_UNSUSPEND -> UNSUSPENDED. |

**CTA / Hành động trên từng dòng**
- `[ Gửi Mail Nhắc nợ ]`: Trigger hàm gửi email. Điều kiện: `hardcopy_status` (Bảng `DEBT_DELIVERIES`) phải là Đã phát thành công (Bản cứng đã đến tay khách).
- `[ Duyệt Đóng dấu ]`: Kế toán xác nhận đã in và đóng dấu đỏ bản cứng, cập nhật `hardcopy_status = STAMPED`, đẩy sang mâm HCNS.
- `[ Xem Lịch sử (Expand Row) ]`: Bấm vào một dòng để xổ xuống danh sách Timeline các sự kiện đã diễn ra (Lấy từ bảng `DEBT_AUDIT_LOGS`).
- `[ Xác nhận Tất toán ]`: Kế toán xác nhận tiền đã vào tài khoản, cập nhật `debt_status = PAID` và ghi nhận `paid_at`.

**Quy định / Rule (Nghiệp vụ)**
- **Rule tính lãi phạt:** Tiền phạt tính tự động bởi hệ thống cronjob mỗi ngày lúc 00:00. Tiền lãi phạt chậm trả = `% lãi trả chậm quy định theo hợp đồng × số ngày trả chậm × nợ gốc phải trả kỳ đó`. Ngừng cộng dồn ngay khi Kế toán nhập `paid_at`.
- **Rule cấu hình công nợ lần đầu (Cảnh báo đỏ):** Ở lần đầu tiên đồng bộ dữ liệu cước của một hợp đồng/khách hàng về ERP, hệ thống yêu cầu Kế toán phải nhập thủ công `% lãi suất phạt` (`penalty_rate`) và `Số ngày được nợ sau khi nhận bản cứng` (`payment_term_days`). Nếu chưa nhập, dòng cước tương ứng trên giao diện sẽ được **cảnh báo đỏ** (yêu cầu bổ sung thông tin) và hệ thống sẽ tạm dừng việc tính Ngày X cũng như không chạy tính lãi phạt cho đến khi hai trường này được hoàn thiện.
- **Rule gửi Email:** Chỉ được gửi tối đa 1 lần/ngày. Nút gửi sẽ bị khóa mờ (disabled) nếu trong ngày (từ 00:00) đã có log gửi mail thành công trong `DEBT_AUDIT_LOGS`.
- **Rule Khóa DV & Mở Khóa:** 
  - *Luồng Khóa:* Tại mốc X+4, nút "Yêu cầu khóa DV" sáng lên. Kế toán bấm gửi yêu cầu -> Trạng thái đổi thành `WAITING_SALES` (Chờ Sales AM duyệt). Nếu Sales AM duyệt -> `WAITING_PROCUREMENT`. Kế toán KHÔNG có quyền tự khóa dịch vụ.
  - *Luồng Mở:* Khi khách hàng đang ở trạng thái `SUSPENDED` mà Kế toán bấm Xác nhận tất toán (`paid_at`), trạng thái sẽ tự động nảy sang `WAITING_UNSUSPEND` (Chờ Mở khóa). Phòng Mua sẽ nhận được Notification để vào Google Admin mở khóa lại, sau đó xác nhận hoàn tất để chuyển thành `UNSUSPENDED`.
- **Rule Bản cứng:** Nút gửi email nhắc nợ điện tử bị **khóa tịt** cho đến khi HCNS điền `delivered_at` (Khách nhận bản cứng thành công).

**Ghi chú**
- Tính năng Expandable Row (xổ lịch sử) phải show được chi tiết ai làm gì, lúc nào (Lấy `action_by`, `action_type`, `description` từ `DEBT_AUDIT_LOGS`). Ví dụ: *Sales A đã từ chối khóa dịch vụ vì khách hàng hứa trả vào ngày mai.*

**Phân quyền**
- **Kế toán doanh thu:** Xem toàn bộ, bấm đồng bộ CM, duyệt đóng dấu, duyệt gửi email nhắc nợ, duyệt tất toán (`paid_at`).
- **HCNS:** Chỉ xem và cập nhật `tracking_code`, `delivered_at` cho các dòng có trạng thái `STAMPED`.
- **Sales AM:** Chỉ xem khách hàng của mình, bấm duyệt/từ chối yêu cầu khóa dịch vụ (`suspend_status`).

---
## 2. Quy Ước Trình Bày & UI/UX
- **Hiển thị Alert:** Sử dụng màu sắc (Badge) mạnh để Kế toán dễ nhìn thấy khách hàng nào đang ở giai đoạn nguy hiểm (Đỏ: Cần khóa DV, Pháp lý; Cam: Nhắc nợ khẩn; Xanh: Bình thường).
- **Sticky Header & Cột Trái:** Bảng dữ liệu có thể trượt ngang (scroll horizontal) do có nhiều cột, cần ghim (freeze) cột Khách hàng/Hợp đồng để dễ tra cứu.

---
## 3. Rủi Ro / Giả Định / Phụ Thuộc
- **Phụ thuộc:** Tính năng đồng bộ ĐNTT phụ thuộc 100% vào API của hệ thống CM. Nếu CM sập, Kế toán không thể lấy nợ gốc và file ĐNTT.
- **Giả định:** Khách hàng GWS Committed sẽ luôn có quy trình gửi bản cứng.
- **Rủi ro:** Kế toán quên bấm `[Xác nhận Tất toán]` khiến hệ thống tự động tính lãi lố và khóa dịch vụ nhầm của khách hàng đã trả tiền.

---
## 4. Phê Duyệt
- BA: [Antigravity]
- Business Owner: [Anh Thành]
- Tech Lead: [Kỹ thuật ERP CloudAZ]
