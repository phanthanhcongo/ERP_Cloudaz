# Đặc tả màn hình: Danh sách đơn hàng

| Thông tin | Giá trị |
|-----------|---------|
| **Phiên bản** | v1.0 |
| **Trạng thái** | Bản nháp |
| **Ngày cập nhật** | 2026-09-05 |
| **Tác giả** | BA Công |
| **Module** | Bán hàng |
| **Feature** | Quản lý đơn hàng |
| **Yêu cầu BRD liên quan** | 4.1.1 |

> **Ví dụ mẫu**: Minh họa cách viết screen spec cho **màn danh sách thuần**
> (chỉ xem, lọc, xuất — không có form nhập liệu).

---

## 1. Mục tiêu & Phạm vi

- **Mục tiêu**: Cho phép nhân viên bán hàng và quản lý xem, tìm kiếm, lọc danh sách đơn hàng và xuất báo cáo.
- **Trong phạm vi**: Hiển thị danh sách đơn hàng, bộ lọc, xuất Excel (BRD 4.1.1).
- **Ngoài phạm vi**: Tạo/sửa đơn hàng (xem ScreenSpec_chi-tiet-don-hang.md); Quản lý khách hàng.

---

## 2. Người dùng & Phân quyền

### Bảng phân quyền

| Vai trò | Xem | Xuất Excel | Ghi chú |
|---------|-----|-----------|---------|
| Nhân viên bán hàng | Có | Có | Chỉ đơn mình tạo |
| Trưởng phòng kinh doanh | Có | Có | Xem đơn của cả phòng |
| Giám đốc | Có | Có | Xem toàn bộ |

### Phạm vi dữ liệu

- **Nhân viên bán hàng**: Chỉ xem đơn hàng do mình tạo.
- **Trưởng phòng**: Xem đơn hàng của tất cả nhân viên trong phòng.
- **Giám đốc**: Xem toàn bộ đơn hàng công ty.

---

## 3. Thuật ngữ & Nguồn tài liệu

### Thuật ngữ

| Thuật ngữ | Ý nghĩa | Ghi chú |
|-----------|---------|---------|
| Đơn hàng (ĐH) | Đơn đặt hàng từ khách hàng | Mã tự sinh: DH-{YYYYMM}-{seq} |
| Giá trị đơn | Tổng tiền hàng trước thuế | |

### Nguồn tài liệu tham chiếu

- BRD Module Bán hàng v1.5

---

## 4. Điều kiện bắt đầu & Luồng thao tác

### Điểm vào màn (Entry points)

| Từ đâu | Cách vào | Tham số truyền vào | Ghi chú |
|--------|----------|--------------------|---------| 
| Menu chính > Bán hàng > Đơn hàng | Click menu | — | |
| Dashboard | Click widget "Đơn hàng hôm nay" | Lọc mặc định: ngày hôm nay | |

### Điều kiện vào màn

User đã đăng nhập, có quyền truy cập module Bán hàng.

### Luồng chính (Happy path)

1. User mở danh sách đơn hàng
2. Hệ thống hiển thị bảng với bộ lọc mặc định (30 ngày gần nhất)
3. User lọc/tìm kiếm theo tiêu chí
4. User xem thông tin trên bảng hoặc click dòng để mở chi tiết
5. User xuất Excel nếu cần

### Luồng thay thế (Alternate flow)

- **Mở từ dashboard**: Bộ lọc tự động set ngày = hôm nay, user có thể thay đổi.

### Luồng lỗi (Exception flow)

- **Không có dữ liệu phù hợp bộ lọc**: Empty state với nút "Xóa bộ lọc".

### Điểm ra khỏi màn (Exit)

| Tình huống | Điều hướng đến | Ghi chú |
|------------|----------------|---------| 
| Click dòng đơn hàng | Màn chi tiết đơn hàng | Truyền mã ĐH |
| Click menu khác | Màn tương ứng | |

---

## 5. Đặc tả chi tiết giao diện

> **Quy ước mã**: `F-xx` trường · `C-xx` cột · `B-xx` nút · `P-xx` popup · `N-xx` thông báo.
> Mã đánh số liên tục theo từng tiền tố. Không tái sử dụng mã đã xóa.

### 5.1 Bộ lọc / Tìm kiếm

| Mã | Trường lọc | Loại | Nguồn DL | Mặc định | Logic lọc |
|----|------------|------|----------|----------|-----------|
| F-01 | Từ khóa | Text input | User nhập | Trống | Search contains trên mã ĐH, tên KH |
| F-02 | Trạng thái | Multi-select dropdown | Danh sách cố định | Tất cả | Filter exact match |
| F-03 | Khoảng ngày tạo | Date range | User chọn | 30 ngày gần nhất | Filter between |
| F-04 | Nhân viên phụ trách | Dropdown | Danh sách NV trong phạm vi quyền | Tất cả | Filter exact match |

**Thời điểm áp dụng lọc**: Ngay khi chọn/nhập (debounce 300ms cho text).

---

### 5.2 Bảng danh sách đơn hàng

| Mã | Cột | Nguồn DL | Công thức / Cách tính | Định dạng / Đơn vị | Sắp xếp | ĐK hiển thị | Ghi chú |
|----|-----|----------|----------------------|--------------------|---------|-------------|---------|
| C-01 | Mã đơn hàng | ERP nội bộ | — | Text | Cho phép | Luôn | Link click mở chi tiết |
| C-02 | Ngày tạo | ERP nội bộ | — | dd/MM/yyyy | Cho phép | Luôn | |
| C-03 | Khách hàng | ERP nội bộ | — | Text | Cho phép | Luôn | Cắt ngắn 40 ký tự, tooltip đầy đủ |
| C-04 | NV phụ trách | ERP nội bộ | — | Text | Cho phép | Luôn | |
| C-05 | Số lượng SP | Tính | Đếm số dòng sản phẩm trong ĐH | Số nguyên | Cho phép | Luôn | |
| C-06 | Giá trị đơn | Tính | Tổng thành tiền các dòng | VNĐ, phân tách `.` | Cho phép | Luôn | |
| C-07 | Trạng thái | ERP nội bộ | — | Badge màu | Không | Luôn | Xem S9 |

**Sắp xếp mặc định**: C-02 giảm dần (đơn mới nhất lên trước)
**Phân trang**: Có — mặc định 20 dòng, chọn 20/50/100
**Ghi nhớ trạng thái lọc & phân trang khi quay lại màn**: Có — trong session
**Khi bảng rỗng**: Xem S10.1

---

### 5.3 Form nhập liệu

Không áp dụng — Màn danh sách không có form. Xem ScreenSpec_chi-tiet-don-hang.md.

---

### 5.4 Popup / Modal

Không áp dụng — Màn danh sách không có popup.

---

### 5.5 Nút bấm & Hành động

| Mã | Nút | Vị trí | Vai trò được dùng | ĐK hiển thị | ĐK enable | Hành vi khi bấm | Xác nhận trước? |
|----|-----|--------|-------------------|-------------|-----------|-----------------|-----------------|
| B-01 | Xuất Excel | Toolbar | Tất cả | Luôn hiển thị | Có dữ liệu trong bảng | Xuất file theo bộ lọc hiện tại | Không |

---

### 5.6 Xuất dữ liệu

| Mã | Chức năng | Định dạng | Phạm vi dữ liệu | Cột xuất ra | Đặt tên file | Ghi chú |
|----|-----------|-----------|-----------------|-------------|--------------|---------|
| B-01 | Xuất Excel | .xlsx | Toàn bộ kết quả lọc (không chỉ trang hiện tại) | C-01..C-07 | DanhSachDonHang_{YYYYMMDD}.xlsx | Giới hạn 10.000 dòng |

Nhập file / Đính kèm: Không áp dụng — màn chỉ hiển thị, không có chức năng nhập.

---

### 5.7 Định dạng & Đơn vị chung

| Loại dữ liệu | Định dạng | Ghi chú |
|--------------|-----------|---------|
| Ngày | dd/MM/yyyy | |
| Số tiền | Phân tách hàng nghìn bằng `.`, đơn vị VNĐ | Không hiện thập phân |
| Số lượng | Số nguyên | |

---

### 5.8 Chế độ màn hình

Không áp dụng — Màn danh sách chỉ có 1 mode (xem + lọc).

---

## 6. Nguồn dữ liệu & Tích hợp

### 6.1 ERP nội bộ

- **Dữ liệu đầu vào**: Danh sách đơn hàng theo phạm vi quyền của user.
- **Điều kiện xử lý**: Lọc theo phạm vi dữ liệu (xem S2) + bộ lọc user chọn.
- **Kết quả mong đợi**: Trả về danh sách đơn hàng kèm thông tin tóm tắt.

> ⚠️ **Lưu ý**: Không đặc tả endpoint, request/response, ERD, tên bảng/cột cho ERP nội bộ.

### 6.2 API hệ thống ngoài

Không áp dụng — Danh sách đơn hàng không tích hợp hệ thống ngoài.

---

## 7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ

| Mã | Quy tắc | Áp dụng khi | Kết quả khi vi phạm | Liên quan | Ghi chú |
|----|---------|-------------|---------------------|-----------|---------|
| BR-01 | Giới hạn xuất Excel tối đa 10.000 dòng | Bấm B-01 khi kết quả lọc > 10.000 | Toast: "Dữ liệu quá lớn. Vui lòng thu hẹp bộ lọc." — chặn xuất | B-01, F-01..F-04 | |
| BR-02 | Khoảng ngày lọc tối đa 365 ngày | Realtime khi chọn F-03 | Thông báo dưới trường: "Khoảng thời gian tối đa 1 năm" — reset về 30 ngày | F-03 | |

---

## 8. Dữ liệu nghiệp vụ cần ghi nhận

### 8.1 Dữ liệu ghi nhận

Không áp dụng — Màn danh sách chỉ hiển thị, không ghi nhận dữ liệu mới.

### 8.2 Xử lý đặc biệt

Không áp dụng.

### 8.3 Vết kiểm toán (Audit trail)

Không áp dụng — Màn chỉ đọc, không có thao tác cần audit.

### 8.4 Xung đột chỉnh sửa đồng thời

Không áp dụng — Màn chỉ đọc.

---

## 9. Trạng thái nghiệp vụ & Tác động

### 9.1 Chuyển trạng thái

Không áp dụng — Màn danh sách không thực hiện chuyển trạng thái.
Xem ScreenSpec_chi-tiet-don-hang.md.

### 9.2 Thông báo gửi ra ngoài màn

Không áp dụng.

---

## 10. Trạng thái giao diện & Xử lý lỗi

### 10.1 Trạng thái giao diện

| Tình huống | Hành vi UI | Ghi chú |
|------------|-----------|---------|
| Đang tải dữ liệu | Skeleton loading cho bảng | |
| Không có dữ liệu (bảng rỗng lần đầu) | Empty state: "Chưa có đơn hàng nào" | |
| Không có dữ liệu do bộ lọc | "Không tìm thấy đơn hàng phù hợp" + nút "Xóa bộ lọc" | |
| Mất kết nối | Banner offline, dữ liệu cũ vẫn hiển thị, disable B-01 | |
| Session hết hạn | Redirect đến login | |
| Không đủ quyền truy cập module | Thông báo "Bạn không có quyền truy cập" + redirect trang chủ | |

### 10.2 Thông báo & nhãn hiển thị

| Vị trí | Nội dung hiển thị | Ghi chú |
|--------|-------------------|---------|
| Placeholder F-01 | "Tìm theo mã ĐH, tên khách hàng..." | |
| Footer bảng | "Hiển thị {X}/{Y} đơn hàng" | |

### 10.3 Ràng buộc phi chức năng

| Nội dung | Yêu cầu |
|----------|---------|
| **Thời gian tải màn mục tiêu** | ≤ 2 giây với 1.000 đơn hàng |
| **Khối lượng dữ liệu tối đa** | 50.000 đơn hàng (phân trang) |
| **Hành vi khi vượt ngưỡng** | Bắt buộc lọc trước khi xuất Excel (BR-01) |
| **Trình duyệt & thiết bị hỗ trợ** | Chrome/Edge bản mới; desktop only |
| **Đa ngôn ngữ** | Không áp dụng |

---

## 11. Tiêu chí nghiệm thu

> Độ phủ tối thiểu: mỗi BR-xx có ≥ 1 AC; mỗi vai trò ở mục 2 có ≥ 1 AC về quyền;
> mỗi luồng lỗi ở mục 4 có ≥ 1 AC.

| Mã | Điều kiện (Given) | Thao tác (When) | Kết quả mong đợi (Then) | Liên quan | Trạng thái |
|----|-------------------|-----------------|--------------------------|-----------|-----------| 
| AC-01 | NV bán hàng đăng nhập | Mở danh sách đơn hàng | Chỉ thấy đơn do mình tạo, bộ lọc mặc định 30 ngày | Phân quyền NV | ✅ Đã chốt |
| AC-02 | Trưởng phòng đăng nhập | Mở danh sách đơn hàng | Thấy đơn của tất cả NV trong phòng | Phân quyền TP | ✅ Đã chốt |
| AC-03 | Giám đốc đăng nhập | Mở danh sách đơn hàng | Thấy toàn bộ đơn hàng công ty | Phân quyền GĐ | ✅ Đã chốt |
| AC-04 | Có đơn hàng trong hệ thống | Lọc theo trạng thái "Đã duyệt" | Chỉ hiện đơn trạng thái Đã duyệt | F-02 | ✅ Đã chốt |
| AC-05 | Bộ lọc không có kết quả | Kiểm tra giao diện | Hiển thị "Không tìm thấy..." + nút "Xóa bộ lọc" | Luồng lỗi | ✅ Đã chốt |
| AC-06 | Kết quả lọc > 10.000 dòng | Bấm "Xuất Excel" (B-01) | Chặn xuất + toast cảnh báo | BR-01, B-01 | ✅ Đã chốt |
| AC-07 | Chọn khoảng ngày > 365 ngày | Kiểm tra bộ lọc F-03 | Thông báo lỗi, reset về 30 ngày | BR-02, F-03 | ✅ Đã chốt |

---

## 12. Câu hỏi & Quyết định chưa chốt

Không có câu hỏi mở — tất cả nội dung đã được chốt.

---

## Phụ lục — Lịch sử phiên bản

| Phiên bản | Ngày | Người sửa | Nội dung thay đổi |
|-----------|------|-----------|-------------------|
| v1.0 | 2026-09-05 | BA Công | Bản đầu tiên |

---

> **Quy ước trạng thái trong tài liệu — hai trục độc lập, không dùng lẫn ký hiệu:**
>
> **Trục 1 — Độ tin cậy nội dung**:
> - ✅ [ĐÃ CHỐT] — User/stakeholder xác nhận
> - ⚠️ [ĐỀ XUẤT] — BA suy luận hợp lý, cần review
> - 🔴 [CHƯA XÁC NHẬN] — Thiếu thông tin, không thể suy luận
> - *Nội dung đã chốt không bắt buộc prefix ✅ [ĐÃ CHỐT] từng dòng.*
>
> **Trục 2 — Vòng đời câu hỏi** (chỉ dùng trong bảng mục 12):
> - Đang chờ · Đã trả lời · ✅ Đã đóng
>
> **Quy ước mã**: `F-xx` trường · `C-xx` cột · `B-xx` nút · `P-xx` popup · `N-xx` thông báo ·
> `BR-xx` quy tắc · `AC-xx` nghiệm thu · `Q-xx` câu hỏi.
>
> **Quy ước boolean**: Dùng text `Có/Không`, `Bắt buộc/Tùy chọn`. **Không dùng icon**.
