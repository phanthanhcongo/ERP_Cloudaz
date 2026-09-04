# Đặc tả màn hình: Phiếu nhập kho

| Thông tin | Giá trị |
|-----------|---------|
| **Phiên bản** | v1.0 |
| **Trạng thái** | 📝 Bản nháp |
| **Ngày cập nhật** | 2026-09-04 |
| **Tác giả** | BA Công |
| **Module** | Kho vận |
| **Feature** | Nhập kho từ đơn mua hàng |
| **Yêu cầu BRD liên quan** | 5.2.1, 5.2.3 |

> ⚠️ **HƯỚNG DẪN DÙNG TEMPLATE**: File này là **ví dụ mẫu** để minh họa cách viết
> screen spec theo đúng convention. Tham khảo khi viết spec mới.

---

## 1. Mục tiêu & Phạm vi

- **Mục tiêu**: Cho phép thủ kho tạo phiếu nhập kho từ đơn mua hàng đã duyệt, ghi nhận số lượng thực nhập và cập nhật tồn kho.
- **Trong phạm vi**: Tạo, sửa, duyệt, hủy phiếu nhập kho (BRD 5.2.1); Kiểm tra chênh lệch số lượng đặt vs thực nhập (BRD 5.2.3).
- **Ngoài phạm vi**: Quản lý vị trí kho (feature riêng); Xuất kho; Kiểm kê.

---

## 2. Người dùng & Phân quyền

### Bảng phân quyền

> Cột của bảng này phải khớp **đúng danh sách hành động** liệt kê ở mục 5.5.
> Thêm/bớt cột theo màn thực tế.
> **Không hardcode mã B-xx** ở đây — mã được gán khi viết mục 5.5.

| Vai trò | Xem | Tạo | Sửa | Xóa | Gửi duyệt | Duyệt | Từ chối | Xuất Excel | Ghi chú |
|---------|-----|-----|-----|-----|-----------|-------|---------|-----------|---------|
| Thủ kho | Có | Có | Có | Có | Có | Không | Không | Có | Chỉ phiếu mình tạo |
| Quản lý kho | Có | Không | Không | Không | Không | Có | Có | Có | Xem tất cả phiếu trong kho quản lý |
| Kế toán | Có | Không | Không | Không | Không | Không | Không | Có | Chỉ xem, không thao tác |

### Phạm vi dữ liệu

- **Thủ kho**: Chỉ xem phiếu nhập thuộc kho mình phụ trách.
- **Quản lý kho**: Xem tất cả phiếu thuộc các kho trong phạm vi quản lý.
- **Kế toán**: Xem tất cả phiếu nhập toàn công ty.

---

## 3. Thuật ngữ & Nguồn tài liệu

### Thuật ngữ

| Thuật ngữ | Ý nghĩa | Ghi chú |
|-----------|---------|---------|
| Phiếu nhập kho (PNK) | Chứng từ ghi nhận hàng hóa nhập vào kho | Mã tự sinh: PNK-{YYYYMM}-{sequence} |
| Đơn mua hàng (ĐMH) | Đơn đặt hàng từ nhà cung cấp đã được duyệt | Nguồn dữ liệu cho phiếu nhập |
| Số lượng đặt | Số lượng ghi trên đơn mua hàng | Readonly trên phiếu nhập |
| Số lượng thực nhập | Số lượng hàng thực tế nhận vào kho | Thủ kho nhập |

### Nguồn tài liệu tham chiếu

- BRD Module Kho vận v2.1
- Figma: screenshot màn Phiếu nhập kho (đính kèm)

---

## 4. Điều kiện bắt đầu & Luồng thao tác

### Điểm vào màn (Entry points)

| Từ đâu | Cách vào | Tham số truyền vào | Ghi chú |
|--------|----------|--------------------|---------| 
| Menu chính > Kho vận > Phiếu nhập kho | Click menu | — | Mở danh sách phiếu |
| Danh sách phiếu nhập kho | Click nút "Tạo mới" | — | Mở form tạo mới |
| Danh sách phiếu nhập kho | Click dòng phiếu | Mã phiếu nhập | Mở form xem/sửa |
| Thông báo duyệt phiếu | Click link trong notification | Mã phiếu nhập | Mở form duyệt |

### Điều kiện vào màn

User đã đăng nhập, có quyền truy cập module Kho vận.

### Luồng chính (Happy path)

1. Thủ kho mở danh sách phiếu nhập kho
2. Bấm "Tạo mới" (B-01)
3. Chọn đơn mua hàng từ popup (P-01) → hệ thống tải danh sách sản phẩm từ ĐMH
4. Nhập số lượng thực nhập cho từng dòng sản phẩm
5. Nhập ghi chú (nếu có)
6. Bấm "Lưu nháp" (B-02) hoặc "Gửi duyệt" (B-03)
7. Quản lý kho nhận thông báo → mở phiếu → Duyệt (B-05) hoặc Từ chối (B-06)
8. Nếu duyệt: tồn kho được cập nhật tự động

### Luồng thay thế (Alternate flow)

- **Nhập chênh lệch**: Số lượng thực nhập < số lượng đặt → hệ thống cảnh báo, vẫn cho lưu kèm lý do.
- **Từ chối duyệt**: Quản lý kho bấm "Từ chối" → nhập lý do → phiếu về trạng thái Nháp, thủ kho nhận thông báo.

### Luồng lỗi (Exception flow)

- **Đơn mua hàng đã nhập đủ**: Popup chọn ĐMH không hiển thị đơn đã nhập đủ hàng. Toast: "Đơn mua hàng này đã nhập đủ số lượng."
- **Mất kết nối khi đang lưu**: Banner offline, disable nút Lưu/Gửi duyệt.

### Điểm ra khỏi màn (Exit)

| Tình huống | Điều hướng đến | Ghi chú |
|------------|----------------|---------| 
| Lưu nháp thành công | Ở lại màn, mode Sửa | Toast: "Đã lưu nháp" |
| Gửi duyệt thành công | Danh sách phiếu nhập kho | Toast: "Đã gửi duyệt thành công" |
| Bấm Hủy / Quay lại | Danh sách phiếu nhập kho | Cảnh báo: "Bạn có thay đổi chưa lưu. Thoát?" — Có/Không |

---

## 5. Đặc tả chi tiết giao diện

> **Quy ước mã**: `F-xx` trường · `C-xx` cột · `B-xx` nút · `P-xx` popup.
> Mã đánh số liên tục theo từng tiền tố. Không tái sử dụng mã đã xóa.

### 5.1 Header — Thông tin chung

| Mã | Thành phần | Loại | Nguồn DL | Mặc định | Định dạng / Đơn vị | ĐK hiển thị | Ghi chú |
|----|------------|------|----------|----------|--------------------|-------------|---------|
| F-01 | Mã phiếu nhập kho | Text (readonly) | Tự sinh | PNK-{YYYYMM}-{seq} | Tối đa 20 ký tự | Luôn hiển thị | Tự sinh khi tạo mới |
| F-02 | Ngày nhập kho | Date picker | User nhập | Hôm nay | dd/MM/yyyy | Luôn hiển thị | Không được chọn ngày tương lai |
| F-03 | Kho nhập | Dropdown | Danh sách kho user có quyền | Kho mặc định của user | — | Luôn hiển thị | |
| F-04 | Đơn mua hàng | Lookup (readonly) | Từ popup P-01 | — | Mã ĐMH | Luôn hiển thị | Bấm icon mở P-01 |
| F-05 | Nhà cung cấp | Text (readonly) | Tự động từ ĐMH | — | — | Hiển thị khi đã chọn ĐMH | |
| F-06 | Ghi chú | Textarea | User nhập | Trống | Tối đa 500 ký tự | Luôn hiển thị | |
| F-07 | Trạng thái | Badge (readonly) | Hệ thống | Nháp | — | Luôn hiển thị | Xem S9 |

---

### 5.2 Bảng chi tiết sản phẩm

| Mã | Cột | Nguồn DL | Công thức / Cách tính | Định dạng / Đơn vị | Sắp xếp | ĐK hiển thị | Ghi chú |
|----|-----|----------|----------------------|--------------------|---------|-------------|---------|
| C-01 | STT | Tự sinh | — | Số nguyên | Không | Luôn | |
| C-02 | Mã sản phẩm | Từ ĐMH | — | Text | Không | Luôn | |
| C-03 | Tên sản phẩm | Từ ĐMH | — | Text | Không | Luôn | Cắt ngắn 50 ký tự, tooltip đầy đủ |
| C-04 | ĐVT | Từ ĐMH | — | Text | Không | Luôn | |
| C-05 | Số lượng đặt | Từ ĐMH | — | Số, 2 thập phân | Không | Luôn | Readonly |
| C-06 | Số lượng đã nhập | Tính | Tổng SL nhập từ các phiếu trước | Số, 2 thập phân | Không | Luôn | Readonly |
| C-07 | Số lượng thực nhập | User nhập | — | Số, 2 thập phân | Không | Luôn | Editable, xem S5.8 |
| C-08 | Đơn giá | Từ ĐMH | — | VNĐ, phân tách `.` | Không | Luôn | Readonly |
| C-09 | Thành tiền | Tính | = C-07 × C-08 | VNĐ, phân tách `.` | Không | Luôn | Làm tròn nửa lên |

**Sắp xếp mặc định**: C-01 tăng dần
**Phân trang**: Không (hiển thị toàn bộ dòng từ ĐMH)

---

### 5.3 Không áp dụng — Bộ lọc

Màn form chi tiết, không có bộ lọc.

---

### 5.4 Popup chọn đơn mua hàng

**Mã popup**: P-01 — Chọn đơn mua hàng
**Khi nào mở**: Bấm icon lookup tại F-04
**Cách đóng**: Nút Đóng / Esc / click ra ngoài — không cảnh báo mất dữ liệu

| Mã | Cột | Nguồn DL | Định dạng | Ghi chú |
|----|-----|----------|-----------|---------|
| C-10 | Mã ĐMH | ERP nội bộ | Text | |
| C-11 | Ngày đặt | ERP nội bộ | dd/MM/yyyy | |
| C-12 | Nhà cung cấp | ERP nội bộ | Text | |
| C-13 | Tổng giá trị | ERP nội bộ | VNĐ | |
| C-14 | Trạng thái nhập | Tính | Đã nhập X/Y sản phẩm | |

**Lọc trong popup**: Tìm kiếm theo mã ĐMH hoặc tên NCC. Chỉ hiện ĐMH trạng thái "Đã duyệt" và chưa nhập đủ.

---

### 5.5 Nút bấm & Hành động

| Mã | Nút | Vị trí | Vai trò được dùng | ĐK hiển thị | ĐK enable | Hành vi khi bấm | Xác nhận trước? |
|----|-----|--------|-------------------|-------------|-----------|-----------------|-----------------|
| B-01 | Tạo mới | Toolbar | Thủ kho | Luôn hiển thị | Luôn | Mở form tạo mới | Không |
| B-02 | Lưu nháp | Footer form | Thủ kho | Mode Tạo mới, Sửa | Form hợp lệ | Lưu trạng thái Nháp | Không |
| B-03 | Gửi duyệt | Footer form | Thủ kho | Mode Tạo mới, Sửa | Form hợp lệ + có ≥ 1 dòng SP | Chuyển trạng thái → Chờ duyệt, gửi thông báo N-01 | Có — Popup confirm: "Gửi phiếu nhập kho cho quản lý duyệt?" |
| B-04 | Hủy | Footer form | Thủ kho | Mode Tạo mới, Sửa | Luôn | Quay về danh sách | Có — nếu có thay đổi chưa lưu |
| B-05 | Duyệt | Footer form | Quản lý kho | Mode Duyệt | Luôn | Chuyển → Đã duyệt, cập nhật tồn kho, gửi N-02 | Có — Popup confirm |
| B-06 | Từ chối | Footer form | Quản lý kho | Mode Duyệt | Luôn | Mở popup nhập lý do → chuyển → Nháp, gửi N-03 | Có — Popup nhập lý do |
| B-07 | Xuất Excel | Toolbar | Thủ kho, QL kho, Kế toán | Luôn hiển thị | Có dữ liệu | Xuất file chi tiết phiếu | Không |

> Mỗi hành động ở bảng này phải có một cột tương ứng trong bảng phân quyền mục 2.

---

### 5.6 Xuất dữ liệu

| Mã | Chức năng | Định dạng | Phạm vi dữ liệu | Cột xuất ra | Đặt tên file | Ghi chú |
|----|-----------|-----------|-----------------|-------------|--------------|---------|
| B-07 | Xuất Excel | .xlsx | Phiếu đang xem | C-01..C-09 | PNK_{mã phiếu}_{YYYYMMDD}.xlsx | |

Nhập file / Đính kèm: Không áp dụng — phiếu nhập kho không có chức năng nhập từ file.

---

### 5.7 Định dạng & Đơn vị chung

| Loại dữ liệu | Định dạng | Ghi chú |
|--------------|-----------|---------|
| Ngày | dd/MM/yyyy | |
| Số lượng | Phân tách hàng nghìn bằng `.`, 2 chữ số thập phân | Làm tròn nửa lên |
| Số tiền | Phân tách hàng nghìn bằng `.`, đơn vị VNĐ | Làm tròn nửa lên, không hiện thập phân |

---

### 5.8 Chế độ màn hình & hành vi theo mode

| Mode | Điều kiện vào | Trường editable | Trường readonly | Trường hidden | Nút hiển thị |
|------|---------------|-----------------|-----------------|---------------|--------------|
| Tạo mới | Bấm B-01 | F-02, F-03, F-04, F-06, C-07 | F-01 (tự sinh), F-05, F-07 | — | B-02, B-03, B-04 |
| Sửa | Click phiếu Nháp | F-02, F-06, C-07 | F-01, F-03, F-04, F-05, F-07 | — | B-02, B-03, B-04 |
| Xem | Click phiếu Đã duyệt/Đã hủy | — | Tất cả | — | B-07 |
| Duyệt | Click phiếu Chờ duyệt (QL kho) | — | Tất cả | — | B-05, B-06, B-07 |

---

## 6. Nguồn dữ liệu & Tích hợp

### 6.1 ERP nội bộ

- **Dữ liệu đầu vào**: Danh sách đơn mua hàng đã duyệt, chưa nhập đủ hàng; Danh sách sản phẩm trong đơn; Danh sách kho.
- **Điều kiện xử lý**: Chỉ lấy ĐMH trạng thái "Đã duyệt" và số lượng đã nhập < số lượng đặt.
- **Kết quả mong đợi**: Hiển thị danh sách ĐMH trong popup P-01; tải chi tiết sản phẩm khi chọn.

> ⚠️ **Lưu ý**: Không đặc tả endpoint, request/response, ERD, tên bảng/cột cho ERP nội bộ.

### 6.2 API hệ thống ngoài

Không áp dụng — Phiếu nhập kho không tích hợp hệ thống ngoài.

---

## 7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ

| Mã | Quy tắc | Áp dụng khi | Kết quả khi vi phạm | Liên quan | Ghi chú |
|----|---------|-------------|---------------------|-----------|---------|
| BR-01 | Số lượng thực nhập phải ≥ 0 | Realtime khi nhập C-07 | Highlight đỏ + thông báo: "Số lượng không được âm" | C-07, B-02, B-03 | |
| BR-02 | Phải có ít nhất 1 dòng sản phẩm | Khi bấm Gửi duyệt | Chặn submit + toast: "Vui lòng chọn đơn mua hàng" | B-03, F-04 | |
| BR-03 | Nếu SL thực nhập > SL đặt → cảnh báo | Khi lưu/gửi duyệt | Popup cảnh báo: "Số lượng thực nhập vượt quá đặt. Tiếp tục?" — Có/Không | C-05, C-07, B-02, B-03 | ⚠️ [ĐỀ XUẤT] |
| BR-04 | Ngày nhập kho không được là ngày tương lai | Realtime | Highlight đỏ + thông báo | F-02 | |
| BR-05 | Phiếu đã duyệt không được sửa/xóa | Khi mở phiếu | Ẩn nút sửa/xóa, readonly toàn bộ | B-02, B-03, B-04 | |

---

## 8. Dữ liệu nghiệp vụ cần ghi nhận

### 8.1 Dữ liệu ghi nhận

| Dữ liệu | Nguồn | Thời điểm ghi | Bắt buộc | Ghi chú |
|----------|-------|---------------|----------|---------|
| Mã phiếu nhập kho | Tự sinh | Khi tạo mới | Bắt buộc | |
| Thông tin header (F-01..F-07) | User nhập + hệ thống | Khi lưu | Bắt buộc | |
| Chi tiết sản phẩm (C-01..C-09) | ĐMH + user nhập | Khi lưu | Bắt buộc | |
| Lý do từ chối | Quản lý kho nhập | Khi từ chối | Bắt buộc | Qua popup B-06 |

### 8.2 Xử lý đặc biệt

- **Cách nhận diện bản ghi**: Mã phiếu nhập kho (F-01) — unique.
- **Xung đột**: Không cho phép 2 người cùng sửa 1 phiếu (xem 8.4).

### 8.3 Vết kiểm toán (Audit trail)

| Hành động | Có ghi log? | Thông tin lưu | Người dùng xem được trên màn? |
|-----------|-------------|---------------|-------------------------------|
| Tạo mới | Có | Người tạo, thời điểm | Không |
| Sửa | Có | Người sửa, thời điểm, trường thay đổi, giá trị cũ → mới | Có — Tab Lịch sử |
| Gửi duyệt | Có | Người gửi, thời điểm | Có |
| Duyệt / Từ chối | Có | Người duyệt, thời điểm, lý do (nếu từ chối) | Có |

**Trường theo dõi thay đổi**: F-02, F-03, F-06, C-07 (số lượng thực nhập).

### 8.4 Xung đột chỉnh sửa đồng thời

| Nội dung | Mô tả |
|----------|-------|
| **Hai người cùng mở và cùng lưu** | Người lưu sau nhận cảnh báo: "Phiếu đã được cập nhật bởi {tên}. Vui lòng tải lại." — Yêu cầu tải lại. |
| **Có khóa bản ghi khi đang sửa không** | Không — dùng optimistic locking. |

---

## 9. Trạng thái nghiệp vụ & Tác động

### 9.1 Chuyển trạng thái

| Trạng thái | Chuyển từ | Chuyển sang | Điều kiện chuyển | Ai được chuyển | Tác động |
|------------|-----------|-------------|-----------------|----------------|---------|
| Nháp | — | Chờ duyệt | Bấm B-03, form hợp lệ | Thủ kho | Gửi N-01 cho QL kho |
| Chờ duyệt | Nháp | Đã duyệt | Bấm B-05 | Quản lý kho | Cập nhật tồn kho + gửi N-02 |
| Chờ duyệt | Nháp | Nháp (trả về) | Bấm B-06 + nhập lý do | Quản lý kho | Gửi N-03 cho thủ kho |

### 9.2 Thông báo gửi ra ngoài màn

| Mã | Sự kiện kích hoạt | Kênh | Người nhận | Tiêu đề / Nội dung mẫu | Gửi lại khi thất bại? |
|----|-------------------|------|------------|------------------------|----------------------|
| N-01 | Gửi duyệt thành công | In-app | Quản lý kho phụ trách | "Phiếu nhập kho {mã} đang chờ bạn duyệt" | Không |
| N-02 | Duyệt thành công | In-app | Thủ kho tạo phiếu | "Phiếu nhập kho {mã} đã được duyệt" | Không |
| N-03 | Từ chối duyệt | In-app | Thủ kho tạo phiếu | "Phiếu nhập kho {mã} bị từ chối. Lý do: {lý do}" | Không |

---

## 10. Trạng thái giao diện & Xử lý lỗi

### 10.1 Trạng thái giao diện

| Tình huống | Hành vi UI | Ghi chú |
|------------|-----------|---------|
| Đang tải dữ liệu | Skeleton loading cho form + bảng | |
| Popup P-01 không có ĐMH phù hợp | Empty state: "Không có đơn mua hàng nào đủ điều kiện nhập kho" | |
| Submit thành công | Toast thành công + redirect danh sách | |
| Submit thất bại (validation) | Highlight trường lỗi + message dưới trường | |
| Submit thất bại (server) | Toast: "Có lỗi xảy ra, vui lòng thử lại" + cho retry | |
| Mất kết nối | Banner offline + disable B-02, B-03, B-05, B-06 | |

### 10.2 Thông báo & nhãn hiển thị

| Vị trí | Nội dung hiển thị | Ghi chú |
|--------|-------------------|---------|
| Placeholder F-06 | "Nhập ghi chú cho phiếu nhập kho..." | |
| Tooltip C-06 | "Tổng số lượng đã nhập từ các phiếu trước" | |

### 10.3 Ràng buộc phi chức năng

| Nội dung | Yêu cầu |
|----------|---------|
| **Thời gian tải màn mục tiêu** | ≤ 2 giây với phiếu có 50 dòng sản phẩm |
| **Khối lượng dữ liệu tối đa** | Phiếu tối đa 200 dòng sản phẩm |
| **Trình duyệt & thiết bị hỗ trợ** | Chrome/Edge bản mới; desktop only |
| **Đa ngôn ngữ** | Không áp dụng |

---

## 11. Tiêu chí nghiệm thu

> Độ phủ tối thiểu: mỗi BR-xx có ≥ 1 AC; mỗi vai trò ở mục 2 có ≥ 1 AC về quyền;
> mỗi luồng lỗi ở mục 4 có ≥ 1 AC.

| Mã | Điều kiện (Given) | Thao tác (When) | Kết quả mong đợi (Then) | Liên quan | Trạng thái |
|----|-------------------|-----------------|--------------------------|-----------|-----------|
| AC-01 | Thủ kho đã đăng nhập, mở danh sách phiếu | Bấm "Tạo mới" (B-01), chọn ĐMH từ P-01, nhập SL thực nhập, bấm "Lưu nháp" (B-02) | Phiếu lưu thành công, trạng thái Nháp, toast xác nhận | B-01, B-02, P-01 | ✅ Đã chốt |
| AC-02 | Phiếu ở trạng thái Nháp | Bấm "Gửi duyệt" (B-03) | Trạng thái → Chờ duyệt, QL kho nhận thông báo N-01 | B-03, N-01 | ✅ Đã chốt |
| AC-03 | Quản lý kho mở phiếu Chờ duyệt | Bấm "Duyệt" (B-05) | Trạng thái → Đã duyệt, tồn kho cập nhật, thủ kho nhận N-02 | B-05, N-02 | ✅ Đã chốt |
| AC-04 | Quản lý kho mở phiếu Chờ duyệt | Bấm "Từ chối" (B-06), nhập lý do | Trạng thái → Nháp, thủ kho nhận N-03 có lý do | B-06, N-03 | ✅ Đã chốt |
| AC-05 | Thủ kho nhập SL thực nhập = -5 | Rời khỏi ô nhập | Highlight đỏ + thông báo "Số lượng không được âm" | BR-01, C-07 | ✅ Đã chốt |
| AC-06 | Phiếu chưa chọn ĐMH (chưa có dòng SP) | Bấm "Gửi duyệt" (B-03) | Chặn submit + toast "Vui lòng chọn đơn mua hàng" | BR-02, B-03 | ✅ Đã chốt |
| AC-07 | SL thực nhập > SL đặt | Bấm Lưu/Gửi duyệt | Popup cảnh báo vượt quá, cho phép tiếp tục hoặc hủy | BR-03, C-05, C-07 | ⚠️ Phụ thuộc Q-01 |
| AC-08 | Kế toán đăng nhập, mở phiếu Đã duyệt | Kiểm tra giao diện | Chỉ thấy nút Xuất Excel (B-07), không thấy nút Sửa/Xóa/Duyệt | Phân quyền Kế toán | ✅ Đã chốt |
| AC-09 | Phiếu Đã duyệt | Kiểm tra dữ liệu | Tồn kho sản phẩm tăng đúng bằng SL thực nhập | B-05 | ✅ Đã chốt |
| AC-10 | Đơn mua hàng đã nhập đủ số lượng | Mở popup P-01 | ĐMH không xuất hiện trong danh sách | Luồng lỗi | ✅ Đã chốt |

---

## 12. Câu hỏi & Quyết định chưa chốt

| Mã | Câu hỏi | Phần bị ảnh hưởng | Trạng thái | Câu trả lời / Quyết định | Người quyết định | Ngày hỏi | Ngày trả lời |
|----|---------|-------------------|-----------|--------------------------|------------------|----------|-------------|
| Q-01 | Khi SL thực nhập vượt quá SL đặt, có cho phép lưu không? Nếu có, cần nhập lý do? | BR-03, AC-07, C-07 | 🟡 Đang chờ | — | — | 2026-09-04 | — |

---

## Phụ lục — Lịch sử phiên bản

| Phiên bản | Ngày | Người sửa | Nội dung thay đổi |
|-----------|------|-----------|-------------------|
| v1.0 | 2026-09-04 | BA Công | Bản đầu tiên |

---

> **Quy ước trạng thái trong tài liệu — hai trục độc lập, không dùng lẫn ký hiệu:**
>
> **Trục 1 — Độ tin cậy nội dung** (dùng inline ở mọi section):
> - ✅ Đã chốt — User/stakeholder xác nhận
> - ⚠️ [ĐỀ XUẤT] — BA suy luận hợp lý, cần review
> - 🔴 [CHƯA XÁC NHẬN] — Thiếu thông tin, không thể suy luận
>
> **Trục 2 — Vòng đời câu hỏi** (chỉ dùng trong bảng mục 12):
> - 🟡 Đang chờ — Đã hỏi, chưa có trả lời
> - 🔵 Đã trả lời — Có quyết định, chưa cập nhật hết vào tài liệu
> - ✅ Đã đóng — Đã trả lời và đã cập nhật vào các section liên quan
>
> **Quy ước mã**: `F-xx` trường · `C-xx` cột · `B-xx` nút · `P-xx` popup · `N-xx` thông báo ·
> `BR-xx` quy tắc · `AC-xx` nghiệm thu · `Q-xx` câu hỏi.
>
> **Quy ước boolean**: Các cột boolean (quyền, bắt buộc, retry, ghi log, xác nhận trước...)
> dùng text: `Có/Không`, `Bắt buộc/Tùy chọn`, `Cho phép/Không cho phép`.
> **Không dùng ✅/❌** cho giá trị boolean — ✅ chỉ dành cho Trục 1 (độ tin cậy nội dung).
