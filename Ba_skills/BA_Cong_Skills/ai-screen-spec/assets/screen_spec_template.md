= Đặc tả màn hình: {Tên màn hình}

| Thông tin | Giá trị |
|-----------|---------|
| **Phiên bản** | v1.0 |
| **Trạng thái** | Bản nháp / Đang review / ✅ Đã chốt |
| **Ngày cập nhật** | {YYYY-MM-DD} |
| **Tác giả** | {Tên BA} |
| **Module** | {Tên module} |
| **Feature** | {Tên feature / epic} |
| **Yêu cầu BRD liên quan** | {Mã yêu cầu, ví dụ: 5.1.2, 5.1.3 — hoặc "Không có BRD"} |

> **HƯỚNG DẪN DÙNG TEMPLATE**: Xóa **toàn bộ dòng mẫu** (chứa placeholder như `{Tên BA}`,
> `{Role 1}`, `{Term 1}`, `{field_a}`) trước khi xuất.
> Biến runtime trong mẫu mã/thông báo như `PNK-{YYYYMM}-{seq}`, `"Phiếu {mã}..."` được phép giữ.
> Trường thiếu thông tin → ghi `[CHƯA XÁC NHẬN]` kèm ghi chú ngắn, đồng thời
> tạo câu hỏi Q-xx trong Section 12.

---

## 1. Mục tiêu & Phạm vi

- **Mục tiêu**: {Mục đích chính của màn hình — giải quyết vấn đề gì cho ai}
- **Trong phạm vi**: {Những gì đặc tả này cover — ghi kèm mã yêu cầu BRD nếu có}
- **Ngoài phạm vi**: {Những gì KHÔNG nằm trong đặc tả này}

---

## 2. Người dùng & Phân quyền

### Bảng phân quyền

> Cột phải khớp các **hành động cần phân quyền riêng** (tạo, sửa, xóa, duyệt, xuất...).
> Hành động UI thuần (hủy/quay lại, lưu nháp khi đã có quyền sửa) không cần cột riêng.
> Thêm/bớt cột theo màn thực tế. **Không hardcode mã B-xx** ở đây.

| Vai trò | Xem | Tạo/Sửa | {Thêm cột theo hành động cần phân quyền} | Ghi chú |
|---------|-----|---------|---|---------|
| {Role 1} | Có | Có | {Có/Không} | {Ghi chú nếu có} |
| {Role 2} | Có | Không | {Có/Không} | {Ghi chú nếu có} |

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

### Điểm vào màn (Entry points)

| Từ đâu | Cách vào | Tham số truyền vào | Ghi chú |
|--------|----------|--------------------|---------|
| {Menu chính > Mục X} | Click menu | — | |
| {Màn danh sách Y} | Click dòng / nút "Xem chi tiết" | {Mã bản ghi} | |
| {Link trong thông báo / email} | Deep-link | {Tham số} | |

### Điều kiện vào màn

{Điều kiện tiên quyết — ví dụ: "User đã đăng nhập, đã chọn đơn hàng từ danh sách, đơn ở trạng thái Đã duyệt"}

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

### Điểm ra khỏi màn (Exit)

| Tình huống | Điều hướng đến | Ghi chú |
|------------|----------------|---------|
| Lưu thành công | {Màn nào / ở lại màn} | |
| Bấm Hủy / Quay lại | {Màn nào} | |
| Rời màn khi form đang sửa dở | {Cảnh báo mất dữ liệu: "..." — Có/Không} | |

---

## 5. Đặc tả chi tiết giao diện

> **Quy ước mã**: `F-xx` trường (nhập/hiển thị/lọc) · `C-xx` cột bảng · `B-xx` nút/hành động · `P-xx` popup.
> Mã đánh số liên tục trong toàn tài liệu, không đánh lại theo từng mục. Không tái sử dụng mã đã xóa.

### 5.1 {Khu vực 1 — ví dụ: Header / Thông tin chung}

{Mô tả ngắn khu vực này}

| Mã | Thành phần | Loại | Nguồn DL | Mặc định | Định dạng / Đơn vị | ĐK hiển thị | Ghi chú |
|----|------------|------|----------|----------|--------------------|-------------|---------|
| F-01 | {Trường 1} | Text | {API/DB/user nhập} | {Giá trị} | Tối đa 100 ký tự | Luôn hiển thị | |
| F-02 | {Trường 2} | Dropdown | {Danh sách từ...} | {Giá trị} | — | {Điều kiện} | |
| F-03 | {Trường 3} | Date picker | User nhập | Hôm nay | dd/MM/yyyy | — | |

---

### 5.2 {Khu vực 2 — ví dụ: Bảng danh sách}

{Mô tả ngắn khu vực này}

| Mã | Cột | Nguồn DL | Công thức / Cách tính | Định dạng / Đơn vị | Sắp xếp | ĐK hiển thị | Ghi chú |
|----|-----|----------|----------------------|--------------------|---------|-------------|---------|
| C-01 | {Cột 1} | {field từ API/DB} | — | Text | Cho phép | Luôn hiển thị | |
| C-02 | {Cột 2} | Tính toán | = {C-01} × {C-03} | Số, 2 chữ số thập phân, phân tách hàng nghìn | Cho phép | — | Làm tròn nửa lên |
| C-03 | {Cột 3} | {Nguồn} | — | VNĐ | Không | {ĐK} | |

**Sắp xếp mặc định**: {Cột nào, chiều nào — ví dụ: C-01 giảm dần}
**Phân trang**: {Có/Không — số dòng mặc định / các lựa chọn số dòng}
**Ghi nhớ trạng thái lọc & phân trang khi quay lại màn**: {Có / Không}
**Bộ lọc**: {Xem mục 5.3}
**Khi bảng rỗng**: {Xem mục 10.1}

#### Chọn nhiều dòng & thao tác hàng loạt *(bỏ mục này nếu không có)*

| Mã | Hành động hàng loạt | ĐK cho phép | Số dòng tối đa | Hành vi khi một phần thất bại | Xác nhận trước? |
|----|---------------------|-------------|----------------|-------------------------------|:---------------:|
| B-0x | {Ví dụ: Duyệt nhiều phiếu} | {Chỉ dòng ở trạng thái Chờ duyệt} | {Số} | {Xem mục 8.2 — thành công một phần} | Có — Popup confirm |

#### Sửa trực tiếp trên bảng (Inline edit) *(bỏ mục này nếu không có)*

| Mã cột | Cho phép sửa khi | Kiểu nhập | Validation | Thời điểm lưu |
|--------|------------------|-----------|------------|---------------|
| C-0x | {ĐK} | {Number / Dropdown} | {Rule} | {Khi rời ô / khi bấm Lưu} |

---

### 5.3 {Khu vực 3 — ví dụ: Bộ lọc / Tìm kiếm}

| Mã | Trường lọc | Loại | Nguồn DL | Mặc định | Logic lọc |
|----|------------|------|----------|----------|-----------|
| F-04 | {Lọc 1} | Dropdown | {Danh sách} | Tất cả | Filter exact match |
| F-05 | {Lọc 2} | Text input | User nhập | Trống | Search contains |
| F-06 | {Lọc 3} | Date range | User chọn | 30 ngày gần nhất | Filter between |

**Thời điểm áp dụng lọc**: {Ngay khi chọn / khi bấm nút Tìm kiếm}

---

### 5.4 {Khu vực 4 — ví dụ: Form nhập liệu / Popup / Modal}

**Mã popup**: P-01 — {Tên popup}
**Khi nào mở**: {Mô tả — bấm nút nào, từ đâu}
**Cách đóng**: {Nút Đóng / Esc / click ra ngoài — có cảnh báo mất dữ liệu không}

| Mã | Trường | Bắt buộc | Kiểu | Validation | Mặc định | Định dạng / Đơn vị | Ghi chú |
|----|--------|----------|------|------------|----------|--------------------|---------|
| F-07 | {Trường 1} | Bắt buộc | Text | Max 100 ký tự, không ký tự đặc biệt | — | — | |
| F-08 | {Trường 2} | Tùy chọn | Number | ≥ 0, max 999.999 | 0 | 2 chữ số thập phân | |
| F-09 | {Trường 3} | Bắt buộc | Dropdown | Phải chọn 1 giá trị | {Giá trị mặc định} | — | Nguồn: {API/danh sách} |

**Hành vi phím**: {Enter = submit / xuống dòng; Esc = đóng popup — ghi rõ nếu có quy định}

---

### 5.5 Nút bấm & Hành động

| Mã | Nút | Vị trí | Vai trò được dùng | ĐK hiển thị | ĐK enable | Hành vi khi bấm | Xác nhận trước? |
|----|-----|--------|-------------------|-------------|-----------|-----------------|----------------|
| B-01 | {Ví dụ: Lưu} | {Vị trí} | {Role 1} | {ĐK} | {ĐK} | {Mô tả hành vi} | Có — Popup confirm |
| B-02 | {Ví dụ: Hủy} | {Vị trí} | Tất cả | Luôn hiển thị | Luôn enable | {Mô tả} | Không |
| B-03 | {Nút 3} | {Vị trí} | {Role} | {ĐK} | {ĐK} | {Mô tả} | {Có/Không} |

> Hành động **cần phân quyền riêng** phải có cột tương ứng trong bảng phân quyền mục 2.
> Hành động UI thuần (hủy, lưu nháp khi đã có quyền sửa) không cần cột riêng.

---

### 5.6 Xuất / Nhập dữ liệu & Đính kèm *(ghi "Không áp dụng — {lý do}" nếu màn không có)*

#### Xuất dữ liệu

| Mã | Chức năng | Định dạng | Phạm vi dữ liệu | Cột xuất ra | Đặt tên file | Ghi chú |
|----|-----------|-----------|-----------------|-------------|--------------|---------|
| B-0x | {Xuất Excel} | .xlsx | {Trang hiện tại / Toàn bộ kết quả lọc} | {Danh sách mã cột} | {Quy tắc} | Giới hạn {N} dòng |
| B-0x | {In phiếu} | PDF / in trực tiếp | {Bản ghi đang xem} | — | — | |

#### Nhập / Đính kèm file

| Mã | Chức năng | Định dạng cho phép | Dung lượng tối đa | Số file tối đa | Xử lý dòng/file lỗi |
|----|-----------|--------------------|-------------------|----------------|---------------------|
| B-0x | {Nhập từ Excel} | .xlsx, .csv | {MB} | 1 | {Báo lỗi theo dòng, cho tải file lỗi} |
| F-0x | {Đính kèm chứng từ} | pdf, jpg, png | {MB}/file | {N} | {Thông báo} |

---

### 5.7 Định dạng & Đơn vị chung *(áp dụng toàn màn, trừ khi trường ghi khác)*

| Loại dữ liệu | Định dạng | Ghi chú |
|--------------|-----------|---------|
| Ngày | dd/MM/yyyy | |
| Ngày giờ | dd/MM/yyyy HH:mm | Múi giờ: {GMT+7} |
| Số lượng | Phân tách hàng nghìn bằng `.`, {n} chữ số thập phân | Quy tắc làm tròn: {…} |
| Số tiền | Phân tách hàng nghìn bằng `.`, đơn vị {VNĐ} | Quy tắc làm tròn: {…} |
| Tỷ lệ phần trăm | {n} chữ số thập phân, hậu tố `%` | |
| Văn bản dài | Cắt ngắn sau {n} ký tự, hiển thị đầy đủ khi rê chuột | |

---

### 5.8 Chế độ màn hình & hành vi theo mode *(ghi "Không áp dụng" nếu màn chỉ có 1 mode)*

> Mô tả hành vi của trường và nút theo từng chế độ màn hình.
> Dùng mã F-xx, C-xx, B-xx đã định nghĩa ở các mục trên.

| Mode | Điều kiện vào | Trường editable | Trường readonly | Trường hidden | Nút hiển thị |
|------|---------------|-----------------|-----------------|---------------|--------------|
| {Tạo mới} | {ĐK — ví dụ: Bấm nút "Tạo mới"} | {Danh sách mã F-xx} | {Danh sách mã} | {Danh sách mã} | {Danh sách mã B-xx} |
| {Sửa} | {ĐK — ví dụ: Click dòng, trạng thái Nháp} | {Danh sách mã} | {Danh sách mã} | {Danh sách mã} | {Danh sách mã} |
| {Xem} | {ĐK — ví dụ: Click dòng, trạng thái Đã duyệt} | — | Tất cả | — | {Danh sách mã} |
| {Duyệt} | {ĐK} | {Danh sách mã} | {Danh sách mã} | — | {Danh sách mã} |
| {Khóa kỳ} | {ĐK — ví dụ: Kỳ kế toán đã đóng} | — | Tất cả | — | — |

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
| **Môi trường** | Sandbox: `{URL}` · Production: `{URL}` · Ai cấp credential: {Bộ phận/đối tác} |
| **Endpoint** | `{METHOD} {URL}` |
| **Authentication** | {OAuth 2.0 / API key header / JWT — theo tài liệu nguồn} |
| **Rate limit** | {Nếu có trong tài liệu nguồn} |
| **Timeout** | {Nếu có quy định} |
| **Chống gọi trùng** | {Có khóa idempotency không? Bấm nút 2 lần / retry có tạo bản ghi trùng không?} |
| **Phân trang** | {Cơ chế page/size hoặc cursor, số bản ghi tối đa mỗi lần, cách lấy trang tiếp} |

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

| Field nhận | Dùng cho thông tin | Hiển thị ở (mã) | Cách tính / xử lý | Nếu thiếu / null | Cần ghi nhận? |
|------------|-------------------|-----------------|-------------------|------------------|---------------|
| {field_a} | {Thông tin nghiệp vụ gì} | {C-02} | {Trực tiếp / công thức / mapping} | {Hiển thị "—" / chặn lưu / dùng giá trị mặc định} | Có / Không |
| {field_b} | {Thông tin nghiệp vụ gì} | {F-05} | {Trực tiếp / công thức} | {Hành vi} | Có / Không |

#### Dữ liệu tạm & hành vi khi hệ thống ngoài không sẵn sàng

| Nội dung | Mô tả |
|----------|-------|
| **Có lưu tạm dữ liệu nhận về không** | {Có / Không} |
| **Hiệu lực dữ liệu tạm** | {Bao lâu} |
| **Khi API lỗi mà đã có dữ liệu cũ** | {Hiển thị dữ liệu cũ kèm cảnh báo thời điểm cập nhật / chặn thao tác} |
| **Thao tác nào bị chặn khi API chết** | {Danh sách mã B-xx} |

#### Xử lý lỗi API

**Lỗi theo HTTP status**

| Error code | Ý nghĩa | Hành vi UI | Retry? |
|------------|---------|-----------|--------|
| 400 | {Mô tả theo docs} | {Toast lỗi: "..."} | Không |
| 401 | {Mô tả} | {Redirect login / thông báo} | Không |
| 404 | {Mô tả} | {Empty state / thông báo} | Không |
| 429 | {Vượt rate limit} | {Thông báo + chờ} | Có — sau X giây |
| 500 | {Mô tả} | {Thông báo lỗi hệ thống + fallback} | Có — sau X giây, tối đa Y lần |
| Timeout | Không phản hồi trong {X}s | {Thông báo + cho phép retry thủ công} | Có |

**Lỗi nghiệp vụ trả trong body khi HTTP 200** *(nhiều API trả 200 kèm mã lỗi — bỏ bảng nếu không áp dụng)*

| Mã lỗi trong body | Ý nghĩa theo docs | Hành vi UI | Retry? |
|-------------------|-------------------|-----------|--------|
| {code_1} | {Mô tả} | {Thông báo: "..."} | Không |
| {code_2} | {Mô tả} | {Hành vi} | {Có/Không} |

> ⚠️ **Lưu ý**: Không ghi API key / token thật. Chỉ mô tả cơ chế xác thực.
> Field chứa dữ liệu cá nhân/nhạy cảm không được ghi log và cần che bớt khi hiển thị: {liệt kê field, cách che}.

---

## 7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ

| Mã | Quy tắc | Áp dụng khi | Kết quả khi vi phạm | Liên quan | Ghi chú |
|----|---------|-------------|---------------------|-----------|---------|
| BR-01 | {Mô tả rule — ví dụ: "Tổng số lượng nhập ≤ số lượng đặt"} | {Khi submit / realtime} | {Chặn submit + thông báo: "..."} | F-08, B-01 | |
| BR-02 | {Mô tả rule} | {Khi nào} | {Hành vi} | {Mã} | |
| BR-03 | {Mô tả rule} | {Khi nào} | {Hành vi} | {Mã} | ⚠️ [ĐỀ XUẤT] |

---

## 8. Dữ liệu nghiệp vụ cần ghi nhận

### 8.1 Dữ liệu ghi nhận

| Dữ liệu | Nguồn | Thời điểm ghi | Bắt buộc | Ghi chú |
|----------|-------|---------------|----------|---------|
| {Data 1} | {User nhập / API response / tự động tính} | {Khi submit / realtime} | Bắt buộc | |
| {Data 2} | {Nguồn} | {Thời điểm} | Tùy chọn | |

### 8.2 Xử lý đặc biệt *(nếu có)*

- **Cách nhận diện bản ghi**: {Mô tả — ví dụ: "Ghép mã đơn hàng + mã sản phẩm"}
- **Nguồn ưu tiên khi xung đột**: {Mô tả — ví dụ: "Ưu tiên dữ liệu từ API CM, ghi đè dữ liệu nhập tay"}
- **Xử lý trùng lặp**: {Mô tả}
- **Đồng bộ lại**: {Mô tả — khi nào cần sync lại, trigger gì}
- **Thành công một phần**: {Mô tả — ví dụ: "Nếu chỉ 3/5 dòng hợp lệ, lưu 3 dòng, báo lỗi 2 dòng"}

### 8.3 Vết kiểm toán (Audit trail) *(ghi "Không áp dụng — {lý do}" nếu không yêu cầu)*

| Hành động | Có ghi log? | Thông tin lưu | Người dùng xem được trên màn? |
|-----------|-------------|---------------|-------------------------------|
| {Tạo mới} | Có | Người thực hiện, thời điểm | Không |
| {Sửa} | Có | Người thực hiện, thời điểm, trường thay đổi, giá trị cũ → giá trị mới | Có — Tab Lịch sử |
| {Duyệt / Từ chối} | Có | Người duyệt, thời điểm, lý do | Có |
| {Xóa} | Có | Người thực hiện, thời điểm, lý do | {Có/Không} |

**Trường theo dõi thay đổi**: {Danh sách mã trường cần lưu giá trị cũ — hoặc "toàn bộ"}

### 8.4 Xung đột chỉnh sửa đồng thời *(ghi "Không áp dụng — {lý do}" nếu màn chỉ đọc)*

| Nội dung | Mô tả |
|----------|-------|
| **Hai người cùng mở và cùng lưu một bản ghi** | {Cảnh báo bản ghi đã thay đổi, yêu cầu tải lại / ghi đè / khóa bản ghi} |
| **Có khóa bản ghi khi đang sửa không** | {Có / Không — nếu có: khóa bao lâu, ai gỡ được} |
| **Thông báo hiển thị** | {Nội dung thông báo cho người bị từ chối lưu} |

---

## 9. Trạng thái nghiệp vụ & Tác động

### 9.1 Chuyển trạng thái

*(Ghi "Không áp dụng — {lý do}" nếu entity không có trạng thái)*

| Từ trạng thái | Hành động | Sang trạng thái | Điều kiện | Ai được chuyển | Tác động |
|---------------|-----------|-----------------|-----------|----------------|---------|
| {Nháp} | {Gửi duyệt (B-0x)} | {Chờ duyệt} | {ĐK — ví dụ: Form hợp lệ} | {Role} | {Gửi thông báo N-01} |
| {Chờ duyệt} | {Duyệt (B-0x)} | {Đã duyệt} | {ĐK} | {Role} | {Cập nhật tồn kho} |
| {Chờ duyệt} | {Từ chối (B-0x)} | {Nháp (trả về)} | {Nhập lý do} | {Role} | {Gửi thông báo N-02} |

### 9.2 Thông báo gửi ra ngoài màn *(ghi "Không áp dụng — {lý do}" nếu không có)*

| Mã | Sự kiện kích hoạt | Kênh | Người nhận | Tiêu đề / Nội dung mẫu | Gửi lại khi thất bại? |
|----|-------------------|------|------------|------------------------|:---------------------:|
| N-01 | {Gửi duyệt thành công} | {In-app / Email / Zalo} | {Vai trò hoặc người cụ thể} | {"Phiếu {mã} đang chờ bạn duyệt"} | {Có/Không} |
| N-02 | {Bị từ chối} | {Kênh} | {Người tạo phiếu} | {Nội dung, có kèm lý do từ chối} | {Có/Không} |

---

## 10. Trạng thái giao diện & Xử lý lỗi

### 10.1 Trạng thái giao diện

| Tình huống | Hành vi UI | Ghi chú |
|------------|-----------|---------|
| Đang tải dữ liệu | {Skeleton / spinner / shimmer} | |
| Không có dữ liệu | {Empty state — icon + message: "..."} | |
| Không có dữ liệu do bộ lọc | {Message: "..." + nút Xóa bộ lọc} | |
| Submit thành công | {Toast thành công / redirect đến màn X / đóng popup} | |
| Submit thất bại (lỗi validation) | {Highlight trường lỗi + message dưới trường} | |
| Submit thất bại (lỗi server) | {Toast lỗi: "..." + cho retry} | |
| Mất kết nối | {Banner offline / disable nút submit} | |
| Session hết hạn | {Redirect đến login} | |
| Không đủ quyền truy cập màn | {Thông báo / redirect} | |

### 10.2 Thông báo & nhãn hiển thị

| Vị trí | Nội dung hiển thị | Ghi chú |
|--------|-------------------|---------|
| {Tooltip trên F-0x} | {Nội dung} | |
| {Placeholder ô tìm kiếm F-0x} | {Nội dung} | |
| {Văn bản trợ giúp dưới trường} | {Nội dung} | |

### 10.3 Ràng buộc phi chức năng *(ghi "Không áp dụng — {lý do}" cho dòng không liên quan)*

| Nội dung | Yêu cầu |
|----------|---------|
| **Thời gian tải màn mục tiêu** | {≤ X giây với Y bản ghi} |
| **Khối lượng dữ liệu tối đa** | {Số bản ghi màn phải chịu được} |
| **Hành vi khi vượt ngưỡng** | {Bắt buộc lọc trước / cảnh báo / chặn xuất file} |
| **Trình duyệt & thiết bị hỗ trợ** | {Chrome/Edge bản mới; desktop — có dùng trên tablet/mobile không} |
| **Đa ngôn ngữ** | {Có / Không — nếu có: ngôn ngữ nào} |

---

## 11. Tiêu chí nghiệm thu

> Độ phủ tối thiểu: mỗi BR-xx có ≥ 1 AC; mỗi vai trò ở mục 2 có ≥ 1 AC về quyền;
> mỗi luồng lỗi ở mục 4 có ≥ 1 AC.

| Mã | Điều kiện (Given) | Thao tác (When) | Kết quả mong đợi (Then) | Liên quan | Trạng thái |
|----|-------------------|-----------------|--------------------------|-----------|-----------|
| AC-01 | {Precondition} | {Action} | {Expected result} | BR-01, F-08 | ✅ Đã chốt |
| AC-02 | {Precondition} | {Action} | {Expected result} | B-01 | ✅ Đã chốt |
| AC-03 | {Precondition} | {Action} | {Expected result} | BR-03 | ⚠️ Phụ thuộc Q-01 |
| AC-04 | {Precondition} | {Action} | {Expected result} | {Mã} | 🔴 Chưa xác nhận |

---

## 12. Câu hỏi & Quyết định chưa chốt

| Mã | Câu hỏi | Phần bị ảnh hưởng | Trạng thái | Câu trả lời / Quyết định | Người quyết định | Ngày hỏi | Ngày trả lời |
|----|---------|-------------------|-----------|--------------------------|------------------|----------|-------------|
| Q-01 | {Nội dung câu hỏi} | C-02, AC-03 | Đang chờ | — | — | {date} | — |
| Q-02 | {Nội dung câu hỏi} | BR-03, F-08 | Đã trả lời | {Nội dung quyết định} | {Tên} | {date} | {date} |
| Q-03 | {Nội dung câu hỏi} | B-04 | ✅ Đã đóng | {Nội dung quyết định} | {Tên} | {date} | {date} |

---

## Phụ lục — Lịch sử phiên bản

| Phiên bản | Ngày | Người sửa | Nội dung thay đổi |
|-----------|------|-----------|-------------------|
| v1.0 | {YYYY-MM-DD} | {Tên BA} | Bản đầu tiên |
| v1.1 | {YYYY-MM-DD} | {Tên BA} | {Chốt Q-01; cập nhật C-02 và AC-03} |

---

> **Quy ước trạng thái trong tài liệu — hai trục độc lập, không dùng lẫn ký hiệu:**
>
> **Trục 1 — Độ tin cậy nội dung** (đánh dấu cho nội dung suy luận hoặc chưa xác nhận):
> - ✅ [ĐÃ CHỐT] — User/stakeholder xác nhận
> - ⚠️ [ĐỀ XUẤT] — BA suy luận hợp lý, cần review
> - 🔴 [CHƯA XÁC NHẬN] — Thiếu thông tin, không thể suy luận
> - *Nội dung đã chốt không bắt buộc prefix ✅ [ĐÃ CHỐT] từng dòng. Chỉ bắt buộc ⚠️ và 🔴.*
>
> **Trục 2 — Vòng đời câu hỏi** (chỉ dùng trong bảng mục 12):
> - Đang chờ — Đã hỏi, chưa có trả lời
> - Đã trả lời — Có quyết định, chưa cập nhật hết vào tài liệu
> - ✅ Đã đóng — Đã trả lời và đã cập nhật vào các section liên quan
>
> **Quy ước mã**: `F-xx` trường · `C-xx` cột · `B-xx` nút · `P-xx` popup · `N-xx` thông báo ·
> `BR-xx` quy tắc · `AC-xx` nghiệm thu · `Q-xx` câu hỏi.
>
> **Quy ước boolean**: Các cột boolean (quyền, bắt buộc, retry, ghi log, xác nhận trước...)
> dùng text: `Có/Không`, `Bắt buộc/Tùy chọn`, `Cho phép/Không cho phép`.
> **Không dùng icon** cho giá trị boolean.
