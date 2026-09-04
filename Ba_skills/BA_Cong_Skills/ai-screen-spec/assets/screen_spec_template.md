# Đặc tả màn hình: {Tên màn hình}

| Thông tin | Giá trị |
|-----------|---------|
| **Phiên bản** | v1.0 |
| **Trạng thái** | 📝 Bản nháp / 🔍 Đang review / ✅ Đã chốt |
| **Ngày cập nhật** | {YYYY-MM-DD} |
| **Tác giả** | {Tên BA} |
| **Module** | {Tên module} |
| **Feature** | {Tên feature / epic} |

---

## 1. Mục tiêu & Phạm vi

- **Mục tiêu**: {Mục đích chính của màn hình — giải quyết vấn đề gì cho ai}
- **Trong phạm vi**: {Những gì đặc tả này cover}
- **Ngoài phạm vi**: {Những gì KHÔNG nằm trong đặc tả này}

---

## 2. Người dùng & Phân quyền

### Bảng phân quyền

| Vai trò | Xem | Tạo | Sửa | Xóa | Duyệt | Ghi chú |
|---------|:---:|:---:|:---:|:---:|:------:|---------|
| {Role 1} | ✅ | ✅ | ✅ | ❌ | ❌ | {Ghi chú nếu có} |
| {Role 2} | ✅ | ❌ | ❌ | ❌ | ✅ | {Ghi chú nếu có} |

### Phạm vi dữ liệu

{Mô tả giới hạn dữ liệu mỗi role nhìn thấy — ví dụ: "Kế toán chi nhánh chỉ xem dữ liệu thuộc chi nhánh mình quản lý"}

> 🔴 [CHƯA XÁC NHẬN] {Ghi ở đây nếu chưa rõ phân quyền — xóa dòng này nếu đã chốt}

---

## 3. Thuật ngữ & Nguồn tài liệu

### Thuật ngữ

| Thuật ngữ | Ý nghĩa | Ghi chú |
|-----------|---------|---------|
| {Term 1} | {Giải thích} | |
| {Term 2} | {Giải thích} | |

### Nguồn tài liệu tham chiếu

- {BRD / Tài liệu API / Figma / ...}

---

## 4. Điều kiện bắt đầu & Luồng thao tác

### Điều kiện vào màn

{Mô tả điều kiện tiên quyết để vào được màn hình này — ví dụ: "User đã đăng nhập, đã chọn đơn hàng từ danh sách"}

### Luồng chính (Happy path)

1. {Bước 1}
2. {Bước 2}
3. {Bước 3}
4. ...

### Luồng thay thế (Alternate flow)

- **{Tên luồng A}**: {Mô tả — khi nào xảy ra, các bước khác biệt}
- **{Tên luồng B}**: {Mô tả}

### Luồng lỗi (Exception flow)

- **{Tình huống lỗi 1}**: {Hành vi hệ thống}
- **{Tình huống lỗi 2}**: {Hành vi hệ thống}

---

## 5. Đặc tả chi tiết giao diện

### 5.1 {Khu vực 1 — ví dụ: Header / Thông tin chung}

{Mô tả ngắn khu vực này}

| Thành phần | Loại | Nguồn DL | Mặc định | Định dạng | ĐK hiển thị | Ghi chú |
|------------|------|----------|----------|-----------|-------------|---------|
| {Trường 1} | Text | {API/DB/user nhập} | {Giá trị} | — | Luôn hiển thị | |
| {Trường 2} | Dropdown | {Danh sách từ...} | {Giá trị} | — | {Điều kiện} | |
| {Trường 3} | Date picker | User nhập | Hôm nay | dd/MM/yyyy | — | |

---

### 5.2 {Khu vực 2 — ví dụ: Bảng danh sách}

{Mô tả ngắn khu vực này}

| Cột | Nguồn DL | Công thức / Cách tính | Sắp xếp | ĐK hiển thị | Ghi chú |
|-----|----------|----------------------|---------|-------------|---------|
| {Cột 1} | {field từ API/DB} | — | Mặc định ASC | Luôn hiển thị | |
| {Cột 2} | Tính toán | = {Cột A} × {Cột B} | — | — | Làm tròn 2 số thập phân |
| {Cột 3} | {Nguồn} | — | — | {ĐK} | |

**Phân trang**: {Có/Không — số dòng mỗi trang}
**Bộ lọc**: {Các trường lọc + logic lọc}

---

### 5.3 {Khu vực 3 — ví dụ: Bộ lọc / Tìm kiếm}

| Trường lọc | Loại | Nguồn DL | Mặc định | Logic lọc |
|------------|------|----------|----------|-----------|
| {Lọc 1} | Dropdown | {Danh sách} | Tất cả | Filter exact match |
| {Lọc 2} | Text input | User nhập | Trống | Search contains |
| {Lọc 3} | Date range | User chọn | 30 ngày gần nhất | Filter between |

---

### 5.4 {Khu vực 4 — ví dụ: Form nhập liệu / Popup / Modal}

{Mô tả: khi nào popup/form này mở ra}

| Trường | Bắt buộc | Kiểu | Validation | Mặc định | Ghi chú |
|--------|:--------:|------|------------|----------|---------|
| {Trường 1} | ✅ | Text | Max 100 ký tự, không ký tự đặc biệt | — | |
| {Trường 2} | ❌ | Number | ≥ 0, max 999.999 | 0 | |
| {Trường 3} | ✅ | Dropdown | Phải chọn 1 giá trị | {Giá trị mặc định} | Nguồn: {API/danh sách} |

---

### 5.5 Nút bấm & Hành động

| Nút | Vị trí | ĐK hiển thị | ĐK enable | Hành vi khi bấm | Xác nhận trước? |
|-----|--------|-------------|-----------|-----------------|:---------------:|
| {Nút 1 — ví dụ: Lưu} | {Vị trí} | {ĐK} | {ĐK} | {Mô tả hành vi} | ✅ Popup confirm |
| {Nút 2 — ví dụ: Hủy} | {Vị trí} | Luôn hiển thị | Luôn enable | {Mô tả} | ❌ |
| {Nút 3} | {Vị trí} | {ĐK} | {ĐK} | {Mô tả} | {Có/Không} |

---

## 6. Nguồn dữ liệu & Tích hợp

### 6.1 ERP nội bộ

- **Dữ liệu đầu vào**: {Mô tả bằng ngôn ngữ nghiệp vụ — ví dụ: "Danh sách đơn hàng đã duyệt trong tháng"}
- **Điều kiện xử lý**: {Mô tả nghiệp vụ — ví dụ: "Chỉ lấy đơn có trạng thái 'Đã xác nhận'"}
- **Kết quả mong đợi**: {Mô tả — ví dụ: "Hiển thị danh sách với tổng giá trị"}

> ⚠️ **Lưu ý**: Không đặc tả endpoint, request/response, ERD, tên bảng/cột cho ERP nội bộ. Chỉ mô tả yêu cầu nghiệp vụ.

---

### 6.2 API hệ thống ngoài — {Tên hệ thống, ví dụ: CM, MISA, ...}

*(Lặp lại section này cho mỗi hệ thống ngoài cần tích hợp. Bỏ section nếu không có tích hợp.)*

| Thông tin | Chi tiết |
|-----------|---------|
| **Mục đích** | {Tại sao gọi API này} |
| **Thời điểm gọi** | {Khi mở màn / bấm nút X / tự động mỗi Y phút} |
| **Endpoint** | `{METHOD} {URL}` |
| **Authentication** | {OAuth 2.0 / API key header / JWT — theo tài liệu nguồn} |
| **Rate limit** | {Nếu có trong tài liệu nguồn} |
| **Timeout** | {Nếu có quy định} |

#### Request

```json
// Header
{
  "Authorization": "{Cơ chế xác thực — KHÔNG ghi key/token thật}",
  "Content-Type": "application/json"
}

// Body (nếu POST/PUT)
{
  "{field_1}": "{kiểu dữ liệu} — nguồn: {lấy từ đâu}",
  "{field_2}": "{kiểu dữ liệu} — nguồn: {lấy từ đâu}"
}

// Query params (nếu GET)
// {param_1}={giá trị} — nguồn: {lấy từ đâu}
```

**Trường bắt buộc**: {Liệt kê field bắt buộc trong request}

#### Response (mẫu)

```json
{
  "{field_a}": "{kiểu dữ liệu} — ý nghĩa: {mô tả}",
  "{field_b}": "{kiểu dữ liệu} — ý nghĩa: {mô tả}",
  "{field_c}": [
    {
      "{sub_field}": "{kiểu dữ liệu} — ý nghĩa: {mô tả}"
    }
  ]
}
```

#### Cách sử dụng dữ liệu nhận về

| Field nhận | Dùng cho thông tin | Hiển thị ở | Cách tính / xử lý | Cần ghi nhận? |
|------------|-------------------|------------|-------------------|:-------------:|
| {field_a} | {Thông tin nghiệp vụ gì} | {Section 5.x — cột/trường nào} | {Trực tiếp / công thức / mapping} | ✅ / ❌ |
| {field_b} | {Thông tin nghiệp vụ gì} | {Section 5.x — cột/trường nào} | {Trực tiếp / công thức} | ✅ / ❌ |

#### Xử lý lỗi API

| Error code | Ý nghĩa | Hành vi UI | Retry? |
|------------|---------|-----------|:------:|
| 400 | {Mô tả theo docs} | {Toast lỗi: "..."} | ❌ |
| 401 | {Mô tả} | {Redirect login / thông báo} | ❌ |
| 404 | {Mô tả} | {Empty state / thông báo} | ❌ |
| 500 | {Mô tả} | {Thông báo lỗi hệ thống + fallback} | ✅ {Sau X giây, tối đa Y lần} |
| Timeout | Không phản hồi trong {X}s | {Thông báo + cho phép retry thủ công} | ✅ |

> ⚠️ **Lưu ý**: Không ghi API key / token thật. Chỉ mô tả cơ chế xác thực.

---

## 7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ

| Mã | Quy tắc | Áp dụng khi | Kết quả khi vi phạm | Ghi chú |
|----|---------|-------------|---------------------|---------|
| BR-01 | {Mô tả rule — ví dụ: "Tổng số lượng nhập ≤ số lượng đặt"} | {Khi submit / realtime} | {Chặn submit + thông báo: "..."} | |
| BR-02 | {Mô tả rule} | {Khi nào} | {Hành vi} | |
| BR-03 | {Mô tả rule} | {Khi nào} | {Hành vi} | ⚠️ [ĐỀ XUẤT] |

---

## 8. Dữ liệu nghiệp vụ cần ghi nhận

| Dữ liệu | Nguồn | Thời điểm ghi | Bắt buộc | Ghi chú |
|----------|-------|---------------|:--------:|---------|
| {Data 1} | {User nhập / API response / tự động tính} | {Khi submit / realtime} | ✅ | |
| {Data 2} | {Nguồn} | {Thời điểm} | ❌ | |

### Xử lý đặc biệt *(nếu có)*

- **Cách nhận diện bản ghi**: {Mô tả — ví dụ: "Ghép mã đơn hàng + mã sản phẩm"}
- **Nguồn ưu tiên khi xung đột**: {Mô tả — ví dụ: "Ưu tiên dữ liệu từ API CM, ghi đè dữ liệu nhập tay"}
- **Xử lý trùng lặp**: {Mô tả}
- **Đồng bộ lại**: {Mô tả — khi nào cần sync lại, trigger gì}
- **Thành công một phần**: {Mô tả — ví dụ: "Nếu chỉ 3/5 dòng hợp lệ, lưu 3 dòng, báo lỗi 2 dòng"}

---

## 9. Trạng thái nghiệp vụ & Tác động

*(Ghi "Không áp dụng — {lý do}" nếu entity không có trạng thái)*

| Trạng thái | Chuyển từ | Chuyển sang | Điều kiện chuyển | Ai được chuyển | Tác động |
|------------|-----------|-------------|-----------------|----------------|---------|
| {Status 1 — ví dụ: Nháp} | — | {Status 2} | {ĐK — ví dụ: Bấm "Gửi duyệt"} | {Role} | {Gửi notification cho manager} |
| {Status 2 — ví dụ: Chờ duyệt} | {Status 1} | {Status 3} hoặc {Status 4} | {ĐK} | {Role} | {Cập nhật tồn kho nếu duyệt} |

---

## 10. Trạng thái giao diện & Xử lý lỗi

| Tình huống | Hành vi UI | Ghi chú |
|------------|-----------|---------|
| Đang tải dữ liệu | {Skeleton / spinner / shimmer} | |
| Không có dữ liệu | {Empty state — icon + message: "..."} | |
| Submit thành công | {Toast thành công / redirect đến màn X / đóng popup} | |
| Submit thất bại (lỗi validation) | {Highlight trường lỗi + message dưới trường} | |
| Submit thất bại (lỗi server) | {Toast lỗi: "..." + cho retry} | |
| Mất kết nối | {Banner offline / disable nút submit} | |
| Session hết hạn | {Redirect đến login} | |

---

## 11. Tiêu chí nghiệm thu

| Mã | Điều kiện (Given) | Thao tác (When) | Kết quả mong đợi (Then) | Trạng thái |
|----|-------------------|-----------------|--------------------------|-----------|
| AC-01 | {Precondition} | {Action} | {Expected result} | ✅ Đã chốt |
| AC-02 | {Precondition} | {Action} | {Expected result} | ✅ Đã chốt |
| AC-03 | {Precondition} | {Action} | {Expected result} | ⚠️ Chờ Q-01 |
| AC-04 | {Precondition} | {Action} | {Expected result} | 🔴 Chưa xác nhận |

---

## 12. Câu hỏi & Quyết định chưa chốt

| Mã | Câu hỏi | Phần bị ảnh hưởng | Trạng thái | Ngày hỏi | Ngày trả lời |
|----|---------|-------------------|-----------|----------|-------------|
| Q-01 | {Nội dung câu hỏi} | S5.2, AC-03 | 🟡 Chờ xác nhận | {date} | — |
| Q-02 | {Nội dung câu hỏi} | S7 BR-03 | 🔴 Chờ tài liệu | {date} | — |

---

> **Quy ước trạng thái trong tài liệu:**
> - ✅ Đã chốt — User/stakeholder xác nhận
> - ⚠️ [ĐỀ XUẤT] — BA suy luận hợp lý, cần review
> - 🔴 [CHƯA XÁC NHẬN] — Thiếu thông tin, không thể suy luận
