# Đặc tả màn hình: Tra cứu thông tin doanh nghiệp

| Thông tin | Giá trị |
|-----------|---------|
| **Phiên bản** | v1.0 |
| **Trạng thái** | Bản nháp |
| **Ngày cập nhật** | 2026-09-05 |
| **Tác giả** | BA Công |
| **Module** | Mua hàng |
| **Feature** | Quản lý nhà cung cấp |
| **Yêu cầu BRD liên quan** | 3.2.1, 3.2.4 |

> **Ví dụ mẫu**: Minh họa cách viết screen spec cho **màn có tích hợp API hệ thống ngoài**
> (Section 6.2 được điền đầy đủ: endpoint, request/response, xử lý lỗi, dữ liệu tạm).

---

## 1. Mục tiêu & Phạm vi

- **Mục tiêu**: Cho phép nhân viên mua hàng tra cứu thông tin doanh nghiệp (tên, địa chỉ, người đại diện) theo mã số thuế từ API Tổng cục Thuế, phục vụ tạo/cập nhật hồ sơ nhà cung cấp.
- **Trong phạm vi**: Tra cứu thông tin doanh nghiệp theo MST (BRD 3.2.1); Lưu kết quả vào hồ sơ NCC (BRD 3.2.4).
- **Ngoài phạm vi**: Quản lý danh sách NCC (màn riêng); Kiểm tra công nợ NCC.

---

## 2. Người dùng & Phân quyền

### Bảng phân quyền

| Vai trò | Xem | Tra cứu | Lưu vào NCC | Ghi chú |
|---------|-----|---------|------------|---------|
| Nhân viên mua hàng | Có | Có | Có | |
| Trưởng phòng mua hàng | Có | Có | Có | |
| Kế toán | Có | Có | Không | Chỉ tra cứu, không sửa NCC |

### Phạm vi dữ liệu

Tất cả vai trò có quyền tra cứu đều truy cập cùng nguồn dữ liệu API Tổng cục Thuế — không phân biệt phạm vi.

---

## 3. Thuật ngữ & Nguồn tài liệu

### Thuật ngữ

| Thuật ngữ | Ý nghĩa | Ghi chú |
|-----------|---------|---------|
| MST | Mã số thuế doanh nghiệp | 10 hoặc 13 chữ số |
| NCC | Nhà cung cấp | Hồ sơ trong ERP |
| API TCT | API Tổng cục Thuế tra cứu thông tin DN | Bên thứ 3 cung cấp |

### Nguồn tài liệu tham chiếu

- BRD Module Mua hàng v2.0
- Tài liệu API Tổng cục Thuế v3.1 (do đối tác VietInfo cung cấp)

---

## 4. Điều kiện bắt đầu & Luồng thao tác

### Điểm vào màn (Entry points)

| Từ đâu | Cách vào | Tham số truyền vào | Ghi chú |
|--------|----------|--------------------|---------| 
| Màn tạo/sửa NCC | Bấm icon "Tra cứu MST" bên cạnh trường MST | MST đã nhập (nếu có) | Mở dạng popup P-01 |
| Menu chính > Mua hàng > Tra cứu DN | Click menu | — | Mở màn độc lập |

### Điều kiện vào màn

User đã đăng nhập, có quyền tra cứu thông tin doanh nghiệp.

### Luồng chính (Happy path)

1. User nhập mã số thuế (F-01)
2. Bấm "Tra cứu" (B-01)
3. Hệ thống gọi API TCT → hiển thị kết quả (tên DN, địa chỉ, người đại diện, trạng thái hoạt động)
4. User kiểm tra thông tin → bấm "Lưu vào NCC" (B-02) nếu muốn tạo/cập nhật hồ sơ NCC
5. Hệ thống lưu → toast thành công → quay về màn NCC

### Luồng thay thế (Alternate flow)

- **MST đã có trong hệ thống**: Hệ thống hiển thị thông tin hiện tại kèm cảnh báo "NCC này đã tồn tại. Cập nhật thông tin?" — Có/Không.
- **Mở từ màn NCC**: MST tự động điền, chỉ cần bấm Tra cứu.

### Luồng lỗi (Exception flow)

- **MST không tìm thấy**: Toast "Không tìm thấy doanh nghiệp với MST này".
- **API TCT không phản hồi**: Toast "Hệ thống tra cứu đang bận. Vui lòng thử lại." + nút Thử lại.
- **MST sai định dạng**: Thông báo validation dưới trường F-01.

### Điểm ra khỏi màn (Exit)

| Tình huống | Điều hướng đến | Ghi chú |
|------------|----------------|---------| 
| Lưu vào NCC thành công | Màn chi tiết NCC | Truyền mã NCC |
| Bấm Đóng / Quay lại | Màn trước đó | |

---

## 5. Đặc tả chi tiết giao diện

> **Quy ước mã**: `F-xx` trường · `C-xx` cột · `B-xx` nút · `P-xx` popup · `N-xx` thông báo.
> Mã đánh số liên tục theo từng tiền tố. Không tái sử dụng mã đã xóa.

### 5.1 Khu vực tra cứu

| Mã | Thành phần | Loại | Nguồn DL | Mặc định | Định dạng / Đơn vị | ĐK hiển thị | Ghi chú |
|----|------------|------|----------|----------|--------------------|-------------|---------|
| F-01 | Mã số thuế | Text input | User nhập | Trống (hoặc MST từ màn NCC) | 10 hoặc 13 chữ số, chỉ số | Luôn hiển thị | Focus khi mở màn |

---

### 5.2 Khu vực kết quả tra cứu

Hiển thị sau khi tra cứu thành công. Ẩn khi chưa tra cứu hoặc tra cứu lỗi.

| Mã | Thành phần | Loại | Nguồn DL | Mặc định | Định dạng / Đơn vị | ĐK hiển thị | Ghi chú |
|----|------------|------|----------|----------|--------------------|-------------|---------|
| F-02 | Tên doanh nghiệp | Text (readonly) | API TCT → `name` | — | Tối đa 200 ký tự | Sau tra cứu | |
| F-03 | Tên quốc tế | Text (readonly) | API TCT → `internationalName` | — | — | Sau tra cứu | Hiển thị "—" nếu null |
| F-04 | Địa chỉ | Text (readonly) | API TCT → `address` | — | — | Sau tra cứu | |
| F-05 | Người đại diện | Text (readonly) | API TCT → `representative` | — | — | Sau tra cứu | |
| F-06 | Ngày cấp MST | Date (readonly) | API TCT → `issuedDate` | — | dd/MM/yyyy | Sau tra cứu | |
| F-07 | Trạng thái hoạt động | Badge (readonly) | API TCT → `status` | — | Badge xanh/đỏ | Sau tra cứu | "Đang hoạt động" / "Ngừng hoạt động" |
| F-08 | Thời điểm tra cứu | Text (readonly) | Hệ thống | — | dd/MM/yyyy HH:mm | Sau tra cứu | Lần gọi API gần nhất |

---

### 5.3 Bộ lọc / Tìm kiếm

Không áp dụng — Màn tra cứu theo MST, không có bộ lọc danh sách.

---

### 5.4 Popup xác nhận cập nhật NCC

**Mã popup**: P-01 — Xác nhận cập nhật NCC đã tồn tại
**Khi nào mở**: Bấm B-02 khi MST đã có trong danh sách NCC
**Cách đóng**: Nút Hủy / Esc — không cảnh báo mất dữ liệu

| Nội dung | Giá trị |
|----------|---------|
| Tiêu đề | "Nhà cung cấp đã tồn tại" |
| Nội dung | "MST {mst} đã có trong hệ thống với tên \"{tên NCC cũ}\". Bạn muốn cập nhật thông tin từ Tổng cục Thuế?" |
| Nút Xác nhận | "Cập nhật" → ghi đè thông tin NCC |
| Nút Hủy | "Hủy" → đóng popup |

---

### 5.5 Nút bấm & Hành động

| Mã | Nút | Vị trí | Vai trò được dùng | ĐK hiển thị | ĐK enable | Hành vi khi bấm | Xác nhận trước? |
|----|-----|--------|-------------------|-------------|-----------|-----------------|-----------------|
| B-01 | Tra cứu | Bên phải F-01 | Tất cả | Luôn hiển thị | F-01 hợp lệ (10 hoặc 13 số) | Gọi API TCT, hiển thị kết quả | Không |
| B-02 | Lưu vào NCC | Dưới kết quả | NV mua hàng, TP mua hàng | Sau tra cứu thành công | Luôn enable | Lưu thông tin vào hồ sơ NCC | Có — nếu NCC đã tồn tại (P-01) |
| B-03 | Đóng | Footer | Tất cả | Luôn hiển thị | Luôn | Quay về màn trước | Không |

---

### 5.6 Xuất / Nhập dữ liệu

Không áp dụng — Màn tra cứu không có xuất/nhập file.

---

### 5.7 Định dạng & Đơn vị chung

| Loại dữ liệu | Định dạng | Ghi chú |
|--------------|-----------|---------|
| Ngày | dd/MM/yyyy | |
| Ngày giờ | dd/MM/yyyy HH:mm | Múi giờ: GMT+7 |

---

### 5.8 Chế độ màn hình

Không áp dụng — Màn chỉ có 1 mode (tra cứu + xem kết quả).

---

## 6. Nguồn dữ liệu & Tích hợp

### 6.1 ERP nội bộ

- **Dữ liệu đầu vào**: Danh sách NCC hiện có (để kiểm tra MST đã tồn tại).
- **Điều kiện xử lý**: Tìm NCC theo MST khi user bấm "Lưu vào NCC".
- **Kết quả mong đợi**: Nếu tìm thấy → hiển thị popup xác nhận cập nhật; Nếu không → tạo mới NCC.

> ⚠️ **Lưu ý**: Không đặc tả endpoint, request/response, ERD, tên bảng/cột cho ERP nội bộ.

---

### 6.2 API hệ thống ngoài — Tổng cục Thuế (qua VietInfo)

| Thông tin | Chi tiết |
|-----------|---------|
| **Mục đích** | Tra cứu thông tin đăng ký kinh doanh của doanh nghiệp theo MST |
| **Thời điểm gọi** | Khi user bấm nút "Tra cứu" (B-01) |
| **Môi trường** | Sandbox: `https://api-sandbox.vietinfo.vn/v3` · Production: `https://api.vietinfo.vn/v3` · Ai cấp credential: Phòng IT (hợp đồng với VietInfo) |
| **Endpoint** | `GET /company/lookup` |
| **Authentication** | API key header: `X-API-Key: {key}` — key lưu tại server, không gửi từ client |
| **Rate limit** | 100 requests/phút (theo hợp đồng gói Standard) |
| **Timeout** | 10 giây |
| **Chống gọi trùng** | Disable nút B-01 + hiển thị spinner trong khi chờ response. User bấm 2 lần → chỉ gọi 1 request. |
| **Phân trang** | Không áp dụng — trả về 1 bản ghi duy nhất |

#### Request

```json
// Header
{
  "X-API-Key": "{API key — lưu tại server, KHÔNG ghi key thật}",
  "Content-Type": "application/json"
}

// Query params
// taxCode={MST} — nguồn: lấy từ F-01
```

**Trường bắt buộc**: `taxCode`

#### Response (mẫu)

```json
{
  "code": "string — mã kết quả: '00' = thành công, khác = lỗi",
  "message": "string — mô tả kết quả",
  "data": {
    "taxCode": "string — MST doanh nghiệp",
    "name": "string — tên doanh nghiệp tiếng Việt",
    "internationalName": "string | null — tên quốc tế",
    "address": "string — địa chỉ đăng ký kinh doanh",
    "representative": "string — tên người đại diện pháp luật",
    "issuedDate": "string (dd/MM/yyyy) — ngày cấp MST",
    "status": "string — 'Đang hoạt động' | 'Ngừng hoạt động' | 'Tạm ngưng'"
  }
}
```

#### Cách sử dụng dữ liệu nhận về

| Field nhận | Dùng cho thông tin | Hiển thị ở (mã) | Cách tính / xử lý | Nếu thiếu / null | Cần ghi nhận? |
|------------|-------------------|-----------------|-------------------|------------------|---------------|
| data.name | Tên doanh nghiệp | F-02 | Trực tiếp | Hiển thị "—" | Có — khi lưu NCC |
| data.internationalName | Tên quốc tế | F-03 | Trực tiếp | Hiển thị "—" | Có |
| data.address | Địa chỉ | F-04 | Trực tiếp | Hiển thị "—" | Có |
| data.representative | Người đại diện | F-05 | Trực tiếp | Hiển thị "—" | Có |
| data.issuedDate | Ngày cấp MST | F-06 | Parse dd/MM/yyyy | Hiển thị "—" | Có |
| data.status | Trạng thái hoạt động | F-07 | Mapping: "Đang hoạt động" → Badge xanh, "Ngừng hoạt động"/"Tạm ngưng" → Badge đỏ | Hiển thị "Không xác định" | Có |

#### Dữ liệu tạm & hành vi khi hệ thống ngoài không sẵn sàng

| Nội dung | Mô tả |
|----------|-------|
| **Có lưu tạm dữ liệu nhận về không** | Có — lưu cache theo MST tại server |
| **Hiệu lực dữ liệu tạm** | 24 giờ kể từ lần gọi API gần nhất |
| **Khi API lỗi mà đã có dữ liệu cũ** | Hiển thị dữ liệu cũ kèm cảnh báo: "Dữ liệu cập nhật lần cuối lúc {thời điểm}. Hệ thống tra cứu đang bận." — F-08 hiển thị thời điểm cache |
| **Thao tác nào bị chặn khi API chết** | Không chặn — vẫn cho phép xem dữ liệu cũ và lưu vào NCC |

#### Xử lý lỗi API

**Lỗi theo HTTP status**

| Error code | Ý nghĩa | Hành vi UI | Retry? |
|------------|---------|-----------|--------|
| 400 | MST sai định dạng (bị bypass validation client) | Toast: "Mã số thuế không hợp lệ" | Không |
| 401 | API key hết hạn hoặc sai | Toast: "Lỗi xác thực hệ thống tra cứu. Vui lòng liên hệ IT." | Không |
| 404 | Không tìm thấy DN với MST này | Toast: "Không tìm thấy doanh nghiệp với MST {mst}" — ẩn khu vực kết quả | Không |
| 429 | Vượt rate limit 100 req/phút | Toast: "Hệ thống đang bận. Vui lòng thử lại sau 1 phút." | Có — tự động sau 60 giây |
| 500 | Lỗi server phía VietInfo | Toast: "Hệ thống tra cứu đang gặp sự cố. Vui lòng thử lại." + nút "Thử lại" | Có — thủ công (bấm nút), tối đa 3 lần |
| Timeout | Không phản hồi trong 10 giây | Toast: "Hệ thống tra cứu không phản hồi. Vui lòng thử lại." + nút "Thử lại" | Có — thủ công, tối đa 3 lần |

**Lỗi nghiệp vụ trả trong body khi HTTP 200**

| Mã lỗi trong body | Ý nghĩa theo docs | Hành vi UI | Retry? |
|-------------------|-------------------|-----------|--------|
| 01 | MST không tồn tại trong CSDL thuế | Toast: "Mã số thuế chưa được đăng ký." — ẩn kết quả | Không |
| 02 | MST đã bị hủy đăng ký | Toast: "Doanh nghiệp này đã hủy đăng ký kinh doanh." — hiển thị kết quả với badge đỏ | Không |
| 99 | Lỗi nội bộ phía TCT | Toast: "Hệ thống thuế đang bảo trì. Vui lòng thử lại sau." | Có — thủ công |

> ⚠️ **Lưu ý**: Không ghi API key thật. Key lưu tại biến môi trường server.
> Field chứa dữ liệu cá nhân/nhạy cảm: `representative` (người đại diện) — không ghi log chi tiết, chỉ ghi "đã tra cứu MST {mst}".

---

## 7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ

| Mã | Quy tắc | Áp dụng khi | Kết quả khi vi phạm | Liên quan | Ghi chú |
|----|---------|-------------|---------------------|-----------|---------|
| BR-01 | MST phải là 10 hoặc 13 chữ số | Realtime khi nhập F-01 | Thông báo dưới trường: "MST phải gồm 10 hoặc 13 chữ số" — disable B-01 | F-01, B-01 | |
| BR-02 | Chỉ cho nhập ký tự số vào F-01 | Realtime | Chặn ký tự không phải số | F-01 | |
| BR-03 | Không lưu NCC có trạng thái "Ngừng hoạt động" trừ khi xác nhận | Khi bấm B-02 | Popup cảnh báo: "Doanh nghiệp này đang ngừng hoạt động. Vẫn lưu?" — Có/Không | B-02, F-07 | ⚠️ [ĐỀ XUẤT] |
| BR-04 | Rate limit: tối đa 100 request/phút toàn hệ thống | Khi bấm B-01 | Toast thông báo, xem xử lý lỗi 429 ở S6.2 | B-01 | |

---

## 8. Dữ liệu nghiệp vụ cần ghi nhận

### 8.1 Dữ liệu ghi nhận

| Dữ liệu | Nguồn | Thời điểm ghi | Bắt buộc | Ghi chú |
|----------|-------|---------------|----------|---------|
| Thông tin DN (F-02..F-07) | API TCT | Khi bấm B-02 (Lưu vào NCC) | Bắt buộc | Ghi vào hồ sơ NCC |
| Lịch sử tra cứu | Hệ thống | Khi bấm B-01 | Bắt buộc | Ghi log: user, MST, thời điểm, kết quả (thành công/lỗi) |

### 8.2 Xử lý đặc biệt

- **Cách nhận diện bản ghi**: MST — unique trong danh sách NCC.
- **Nguồn ưu tiên khi xung đột**: Dữ liệu từ API TCT ghi đè dữ liệu nhập tay khi user xác nhận qua P-01.
- **Xử lý trùng lặp**: Nếu MST đã tồn tại → hiển thị P-01, user chọn cập nhật hoặc hủy.

### 8.3 Vết kiểm toán (Audit trail)

| Hành động | Có ghi log? | Thông tin lưu | Người dùng xem được trên màn? |
|-----------|-------------|---------------|-------------------------------|
| Tra cứu MST | Có | Người thực hiện, MST, thời điểm, kết quả | Không |
| Lưu/cập nhật NCC | Có | Người thực hiện, MST, thời điểm, NCC tạo mới hay cập nhật | Có — Tab Lịch sử trên màn NCC |

**Trường theo dõi thay đổi**: F-02 (tên DN), F-04 (địa chỉ), F-05 (người đại diện).

### 8.4 Xung đột chỉnh sửa đồng thời

Không áp dụng — Màn tra cứu không sửa dữ liệu trực tiếp. Xung đột khi lưu NCC được xử lý bằng optimistic locking ở màn NCC.

---

## 9. Trạng thái nghiệp vụ & Tác động

### 9.1 Chuyển trạng thái

Không áp dụng — Màn tra cứu không quản lý trạng thái entity.

### 9.2 Thông báo gửi ra ngoài màn

Không áp dụng.

---

## 10. Trạng thái giao diện & Xử lý lỗi

### 10.1 Trạng thái giao diện

| Tình huống | Hành vi UI | Ghi chú |
|------------|-----------|---------|
| Chưa tra cứu | Chỉ hiện F-01 + B-01. Khu vực kết quả ẩn. | |
| Đang gọi API | Spinner trên B-01 + text "Đang tra cứu..." — disable B-01 | |
| Tra cứu thành công | Hiện khu vực kết quả (F-02..F-08) + B-02 | |
| Tra cứu thất bại | Toast lỗi (theo S6.2). Khu vực kết quả ẩn. Nút "Thử lại" nếu retry-able. | |
| Hiển thị dữ liệu cache (API lỗi) | Kết quả hiện bình thường + banner vàng: "Dữ liệu cập nhật lúc {thời điểm}" | |
| Mất kết nối | Banner offline. Disable B-01, B-02. | |
| Session hết hạn | Redirect đến login | |

### 10.2 Thông báo & nhãn hiển thị

| Vị trí | Nội dung hiển thị | Ghi chú |
|--------|-------------------|---------|
| Placeholder F-01 | "Nhập mã số thuế (10 hoặc 13 số)..." | |
| Văn bản trợ giúp dưới F-01 | "Ví dụ: 0123456789 hoặc 0123456789001" | Hiển thị khi F-01 focus |
| Banner cache | "⚠️ Dữ liệu cập nhật lần cuối lúc {dd/MM/yyyy HH:mm}" | Chỉ hiện khi dùng cache |

### 10.3 Ràng buộc phi chức năng

| Nội dung | Yêu cầu |
|----------|---------|
| **Thời gian tra cứu mục tiêu** | ≤ 3 giây (phụ thuộc API TCT, timeout 10 giây) |
| **Trình duyệt & thiết bị hỗ trợ** | Chrome/Edge bản mới; desktop only |
| **Đa ngôn ngữ** | Không áp dụng |

---

## 11. Tiêu chí nghiệm thu

> Độ phủ tối thiểu: mỗi BR-xx có ≥ 1 AC; mỗi vai trò ở mục 2 có ≥ 1 AC về quyền;
> mỗi luồng lỗi ở mục 4 có ≥ 1 AC.

| Mã | Điều kiện (Given) | Thao tác (When) | Kết quả mong đợi (Then) | Liên quan | Trạng thái |
|----|-------------------|-----------------|--------------------------|-----------|-----------| 
| AC-01 | NV mua hàng đăng nhập | Nhập MST hợp lệ, bấm "Tra cứu" | Hiển thị thông tin DN đúng từ API TCT | B-01, F-02..F-08 | ✅ Đã chốt |
| AC-02 | Kết quả tra cứu hiển thị, NCC chưa tồn tại | Bấm "Lưu vào NCC" | Tạo NCC mới, toast thành công, redirect màn NCC | B-02 | ✅ Đã chốt |
| AC-03 | Kết quả tra cứu hiển thị, MST đã có NCC | Bấm "Lưu vào NCC" | Hiển thị popup P-01 xác nhận cập nhật | B-02, P-01 | ✅ Đã chốt |
| AC-04 | Kế toán đăng nhập, tra cứu thành công | Kiểm tra giao diện | Không thấy nút "Lưu vào NCC" (B-02) | Phân quyền Kế toán | ✅ Đã chốt |
| AC-05 | Nhập MST 8 chữ số (sai format) | Kiểm tra B-01 và thông báo | B-01 disable + thông báo "MST phải gồm 10 hoặc 13 chữ số" | BR-01, F-01 | ✅ Đã chốt |
| AC-06 | Nhập ký tự chữ vào F-01 | Kiểm tra hành vi | Chặn nhập, chỉ chấp nhận số | BR-02, F-01 | ✅ Đã chốt |
| AC-07 | MST không tồn tại trên hệ thống thuế | Bấm "Tra cứu" | Toast "Không tìm thấy...", ẩn khu vực kết quả | Luồng lỗi, API 404 | ✅ Đã chốt |
| AC-08 | API TCT timeout (mô phỏng) | Bấm "Tra cứu" | Toast lỗi + nút "Thử lại", cho retry tối đa 3 lần | API timeout | ✅ Đã chốt |
| AC-09 | API TCT lỗi nhưng có cache < 24h | Bấm "Tra cứu" | Hiển thị dữ liệu cache + banner cảnh báo thời điểm | Cache, F-08 | ✅ Đã chốt |
| AC-10 | DN tra cứu có trạng thái "Ngừng hoạt động" | Bấm "Lưu vào NCC" | Popup cảnh báo, cho phép tiếp tục hoặc hủy | BR-03, B-02 | ⚠️ Phụ thuộc Q-01 |

---

## 12. Câu hỏi & Quyết định chưa chốt

| Mã | Câu hỏi | Phần bị ảnh hưởng | Trạng thái | Câu trả lời / Quyết định | Người quyết định | Ngày hỏi | Ngày trả lời |
|----|---------|-------------------|-----------|--------------------------|------------------|----------|-------------|
| Q-01 | Khi DN có trạng thái "Ngừng hoạt động", có cho phép lưu vào NCC không? Nếu cho thì cần xác nhận hay cảnh báo? | BR-03, AC-10 | Đang chờ | — | — | 2026-09-05 | — |
| Q-02 | Thời gian hiệu lực cache API nên là 24h hay ngắn hơn (ví dụ 6h)? | S6.2 dữ liệu tạm | Đang chờ | — | — | 2026-09-05 | — |

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
