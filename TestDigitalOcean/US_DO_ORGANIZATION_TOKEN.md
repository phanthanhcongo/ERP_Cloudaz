# USER STORY (US): TÍCH HỢP & ĐỐI SOÁT CƯỚC DIGITALOCEAN QUA ORGANIZATION API TOKEN

---

## 📌 THÔNG TIN TỔNG QUAN
- **Mã User Story:** `US-DO-ORG-01`
- **Tiêu đề:** Hỗ trợ thu thập & đối soát cước DigitalOcean bằng Organization Personal Access Token (PAT)
- **Module:** Quản lý đối tác Cloud / DigitalOcean Billing & Reconciliation
- **Epic:** Tự động hóa đối soát & xuất hóa đơn DigitalOcean (DO Automation)
- **Độ ưu tiên:** High (Cao)
- **Đối tượng sử dụng (Actor):** Kế toán doanh thu, Chuyên viên Billing, Quản trị viên hệ thống CloudAZ

---

## 1. BỐI CẢNH & VẤN ĐỀ THỰC TẾ (Business Context & Problem Statement)

### 1.1. Hiện trạng:
- Hiện nay, hệ thống lấy dữ liệu cước DigitalOcean dựa trên Personal Access Token (PAT) ở cấp độ **Team** (`do_team_uuid`).
- Cơ chế cũ yêu cầu tài khoản Master của CloudAZ (`do.billing@cloudaz.io`) phải được mời tham gia vào Team của khách hàng với vai trò `Owner` hoặc `Biller`.

### 1.2. Vấn đề phát sinh (Pain Points):
1. **Khách hàng không cấp quyền cấp Team:** Một số khách hàng lớn / bảo mật cao (như *ANVITEQ*, *ATS JSC*,...) không phân quyền cho tài khoản CloudAZ vào nội bộ Team, mà chỉ cấp 1 Personal Access Token ở cấp độ Tổ chức (Organization).
2. **Khách hàng giới hạn Scope Token:** Khi tạo PAT trên DigitalOcean, khách hàng thường chỉ tích chọn quyền tối thiểu `billing:read` (không chọn `account:read`). Khi đó:
   - Các API kiểm tra tài khoản `/v2/account` hoặc `/v2/teams` trả về lỗi **`403 Forbidden`**.
   - Tuy nhiên, API đọc hóa đơn `/v2/customers/my/invoices` và `/v2/customers/my/balance` vẫn hoạt động bình thường.
3. **Trùng lặp hiển thị:** Khi cả team DO và Org Account cùng tồn tại, danh sách team bị lặp lại nhiều dòng gây rối loạn đối soát.

### 1.3. Mục tiêu (Objective):
- Mở rộng luồng tích hợp DigitalOcean: Cho phép nạp trực tiếp Token cấp Organization của khách hàng.
- Hệ thống vẫn đọc đầy đủ cước, kỳ hóa đơn và đối soát bình thường ngay cả khi token bị thiếu quyền `account:read`.

---

## 2. NỘI DUNG USER STORY (User Story Statement)

> **Là một** Kế toán / Quản trị viên đối soát cước CloudAZ,  
> **Tôi muốn** có thể thêm và sử dụng Personal Access Token ở cấp độ Organization của khách hàng vào hệ thống,  
> **Để** hệ thống tự động tải lịch sử hóa đơn, đối soát cước hàng tháng và theo dõi doanh thu cho các khách hàng không thể phân quyền ở cấp Team.

---

## 3. TIÊU CHÍ CHẤP NHẬN (Acceptance Criteria - AC)

### AC1: Giao diện & Form nạp Org Token
- [x] Có nút **`+ Thêm Org từ Token`** trên trang Quản lý Team (`teams.html`).
- [x] Modal popup gồm các trường:
  - `Tên gợi nhớ` (tùy chọn).
  - `DigitalOcean Personal Access Token` (bắt buộc, validate tiền tố `dop_v1_...`).
- [x] Cung cấp nút test nhanh dữ liệu (gọi trực tiếp xem danh sách hóa đơn trước khi lưu).

### AC2: Cơ chế xác thực thông minh (Smart Token Verification)
- [x] Khi gửi token lên backend:
  - Hệ thống thử gọi `GET /v2/account`.
  - **Trường hợp Token có đủ quyền:** Tự động lấy tên Team/Org và Email tài khoản.
  - **Trường hợp Token bị chặn 403 Forbidden (chỉ có quyền `billing:read`):**
    - Hệ thống không bị crash, tiếp tục gọi `GET /v2/customers/my/invoices`.
    - Nếu lấy được danh sách hóa đơn: Token được coi là **Hợp lệ**.
    - Hệ thống tự động bóc tách tên công ty từ chi tiết hóa đơn: `invoiceSummary.user_company` hoặc `invoiceSummary.user_name`.
  - **Trường hợp Token không hợp lệ / thu hồi (401) hoặc thiếu cả 2 quyền (403 cả billing):** Trả về thông báo lỗi rõ ràng yêu cầu khách hàng cấp quyền `billing:read`.

### AC3: Lưu trữ & Định danh trong Cơ sở dữ liệu
- [x] Token luôn được mã hóa chuẩn **AES-256-GCM** trước khi lưu vào database.
- [x] Không lưu token thô ra log hay response API (chỉ trả về `token_last4`).
- [x] Bản ghi được đánh dấu định danh:
  - `do_team_uuid`: gán tiền tố `ORG_<derived_uuid>`.
  - `is_org`: gán cờ `true`.
  - Phân loại vai trò hiển thị: `Org Account`.

### AC4: Tự động loại bỏ bản ghi trùng lặp (Deduplication)
- [x] Trên trang danh sách Team (`/api/teams`):
  - Nếu khách hàng đã được cấu hình bằng Org Account (có token billing), hệ thống sẽ tự động ẩn bản ghi DO team chưa cấu hình có tên trùng lặp.
  - Đảm bảo mỗi khách hàng chỉ hiển thị duy nhất 1 dòng chuẩn với token đang hoạt động.

### AC5: Bảo vệ luồng Token mặc định của hệ thống
- [x] Hàm lấy token chung của hệ thống (`getAnyToken()`) loại trừ các token Org (`do_team_uuid NOT LIKE 'ORG_%'`).
- [x] Việc thêm một Org token bị hạn chế quyền `account:read` không làm ảnh hưởng đến các trang khác hoặc làm lỗi trang `/teams.html`.

### AC6: Thu thập & Đối soát cước (Billing Data Extraction)
- [x] Trang chi tiết / Overview (`/api/teams/:uuid/overview`) cho phép xem:
  - Danh sách toàn bộ các kỳ hóa đơn (mã hóa đơn, kỳ hóa đơn, số tiền, trạng thái `PAID` / `OPEN`).
  - Invoice preview số dư cước đang chạy trong kỳ hiện tại.
  - Tổng lũy kế tiền cước.
- [x] Dữ liệu hóa đơn từ Org Token được tích hợp đầy đủ vào luồng chạy Reconciliation và Dashboard cước DigitalOcean.
