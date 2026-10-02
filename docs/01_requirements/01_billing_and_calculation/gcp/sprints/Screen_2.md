# ĐẶC TẢ MÀN 2 — BẢNG ĐỐI SOÁT (Đối chiếu & gửi khách)

> **Phạm vi**: Google Cloud Platform (GCP) — không áp cho GWS Flex, GMP
> **Ngày**: 2026-09-26
> **Nguồn**: [Flow_Nghiep_Vu_Ke_Toan_TO-BE.md](Flow_Nghiep_Vu_Ke_Toan_TO-BE.md) · [BRD_GCP_2026-09-23.md](../BRD_GCP_2026-09-23.md) v2.5
> **Màn trước**: [Screen_1.md](Screen_1.md) — GCP Billing · **Màn sau**: Flow DNTT / công nợ hiện có

---

## 1. Tổng quan

### 1.1 Mục đích

Sau khi Màn 1 đã gọi CM tạo bảng đối soát và lưu về ERP, màn này để kế toán mở ra đối chiếu lại, gửi cho khách, theo dõi phản hồi (thủ công), và khi cần thì gen DNTT toàn kỳ từ file Excel/GWS DATA hai bảng đã gửi CM. DNTT đi vào flow hiện có ở trạng thái chờ xác nhận; kế toán tự xóa bản ghi/liên kết pending ở ERP nếu không cần, không xóa DNTT gốc trên CM. Thay thế việc tải file về rồi soạn mail tay từng khách, và việc sửa tay số tiền bằng số / bằng chữ trên DNTT.

### 1.2 Người dùng

Kế toán doanh thu. Một người dùng tại một thời điểm cho mỗi kỳ.

### 1.3 Vị trí trong luồng nghiệp vụ

```
[MÀN 1] Tạo bảng đối soát (CM) → lưu về ERP
   ↓
[MÀN 2] Danh sách → Preview / Tải → Gửi mail (qua xác nhận) → Theo dõi trạng thái → Gen DNTT
   ↓
Flow DNTT hiện có: DNTT vào mục "chờ xác nhận" (pending confirm) → kế toán xác nhận, xuất PDF, gửi khách như cũ
   ↓
Công nợ / nhắc nợ (vòng đời riêng)
```

### 1.4 Nguyên tắc thiết kế

| Nguyên tắc | Ý nghĩa |
|:---|:---|
| **Không auto** | Mọi lần gửi mail — 1 khách hay gom nhiều khách — đều phải qua bước xác nhận, không có "gửi ngay 1 click" |
| **Không khóa bước** | Khách báo lệch → quay lại Màn 1 sửa, tạo lại, gửi lại bất kỳ lúc nào |
| **Trạng thái thủ công** | Kế toán tự đánh dấu; hệ thống KHÔNG tự đọc mail phản hồi để cập nhật |
| **Không lẫn file** | Mỗi contract nhận đúng bảng đối soát của mình |
| **Luôn tra được** | Mọi lần gửi mail / đổi trạng thái / xóa / gen DNTT đều lưu vết |
| **Không gộp nhắc nợ** | Đối soát chạy theo kỳ tháng, kết thúc khi ra DNTT; nhắc nợ chạy liên tục theo tuổi nợ — hai vòng đời khác nhau |

---

## 2. Bố cục màn hình

```
┌────────────────────────────────────────────────────────────────────┐
│  [A] THANH KỲ & TÓM TẮT NHANH                                       │
│  Kỳ: T08/2026   Bảng đối soát tạo gần nhất: 03/09/2026 08:15        │
│  Tổng contract: 94 · Đã gửi: 40 · Đã chốt: 12 · Báo lệch: 3 · Tồn: 39 │
│  Tổng thành tiền kỳ: $XXX,XXX.XX          [← Quay lại Màn 1]        │
├────────────────────────────────────────────────────────────────────┤
│  [B] THANH CÔNG CỤ                                                  │
│  [Tìm kiếm...] [Lọc trạng thái ▾] [Sắp xếp ▾]   Đang chọn: 4 dòng   │
│      [Tải hàng loạt] [Gửi mail đã chọn] [Đổi trạng thái ▾]          │
│      [Gen DNTT kỳ này] [Xóa dòng đã chọn]                           │
├────────────────────────────────────────────────────────────────────┤
│  [C] BẢNG DANH SÁCH  (mỗi dòng = 1 contract)                        │
│  ☐│ Khách hàng │ Billing/Project │ Subtotal │ Gemini API │          │
│    Promotion Credit │ Thành tiền │ Trạng thái │ Ngày gửi cuối │      │
│    [Xem] [Tải] [Gửi] [⋯]                                            │
├────────────────────────────────────────────────────────────────────┤
│  [D] DÒNG TỔNG — tổng thành tiền TOÀN KỲ (không phải tổng trang)     │
├────────────────────────────────────────────────────────────────────┤
│  [E] PHÂN TRANG   ‹ 1 2 3 ... ›   50 dòng/trang ▾   94 dòng         │
└────────────────────────────────────────────────────────────────────┘
```

Các hộp thoại phụ: **Preview bảng đối soát** (4.2) · **Soạn & xác nhận gửi mail** (4.3) · **Đổi trạng thái / ghi chú báo lệch** (4.4) · **Xác nhận xóa** (4.5) · **Tiến trình & kết quả gen DNTT** (4.6).

---

## 3. Đặc tả tích hợp

> Mô tả **hợp đồng dữ liệu với hệ thống ngoài**. Việc lưu trữ database do đội triển khai tự thiết kế (xem mục 7).

### 3.1 CM — lấy danh sách & file bảng đối soát (đã có sẵn)

> Nguồn: `CloudAZ-CM-Backend/API.md` mục 15 (Payment Request), 22 (Cost Table). **Xác thực chung:** JWT Bearer — header `Authorization: Bearer <token>`.

| Bước | Endpoint | Ghi chú |
|:---|:---|:---|
| Danh sách bảng đối soát | `GET /api/cost-table/all?page&size` | Trả từng bảng đối soát theo hợp đồng/khách kèm thông tin document (`fileKey` trên S3) |
| Tải file | `POST /api/download` body `{ "fileKey": "..." }` | CM stream file `.xlsx` từ S3 về ERP |

> Cost Table **không có** endpoint `/presigned` hay `/download-all` riêng — phải đi qua `POST /api/download`.

### 3.2 CM — Gen DNTT (Payment Request)

| Mục | Giá trị |
|:---|:---|
| Endpoint | `POST /api/payment-request/generate` |
| Kiểu gửi | JSON |
| Body | Cùng bộ tham số với `cost-table/generate`: `calculationIds[]` · `productId` · `startDate` · `endDate` · tập contract/khách đầy đủ từ file Excel/GWS DATA hai bảng của kỳ |
| Tập dữ liệu | Gen toàn bộ dữ liệu của file hai bảng đã gửi CM; không lọc theo trạng thái `Khách đã chốt`. Nếu CM bắt buộc `customers[]` thì truyền đầy đủ tập từ file, không truyền tập confirmed-only |
| Endpoint phụ | `GET /api/payment-request/presigned` · `GET /api/payment-request/download-all` |
| Kết quả | CM tạo DNTT và đồng bộ vào **mục "chờ xác nhận" (pending confirm)** của flow DNTT hiện có — **giống GWS Flex / Standard**. Màn 2 KHÔNG xác nhận, KHÔNG xuất PDF |

**Ràng buộc tham số (kế thừa Màn 1 §3.3.2):** phải dùng đúng cặp `productId` + `calculationId` của sản phẩm GCP; `startDate`/`endDate` phải phủ đúng `usageDate` (kỳ `YYYYMM` → chuyển sang khoảng ngày). Bước lỗi thì không chạy bước sau; dữ liệu ERP giữ nguyên, cho thử lại.

### 3.3 Hệ thống mail nội bộ ERP

| Mục | Giá trị |
|:---|:---|
| Cơ chế | Gửi qua module mail hiện có của ERP; mỗi contract một mail riêng, đính kèm đúng file bảng đối soát của contract đó (tải từ CM theo `fileKey`) |
| Người nhận (To/CC) | Lấy từ **liên hệ trên hợp đồng**; fallback **danh bạ khách hàng**; cho kế toán **sửa tay** trước khi gửi |
| Template | **Một mẫu mặc định**, sửa được từng lần gửi; chưa tách theo nhóm khách |
| Thread hội thoại | Mail bảng đối soát lưu **chung một luồng** với DNTT + nhắc nợ của **cùng khách + cùng kỳ** — khóa gộp thread = `(khách, kỳ)` |
| Nhịp gửi gom | **Không giới hạn cứng** số khách/lô; hệ thống gửi tuần tự có **giãn nhịp nhẹ** để tránh bị chặn spam |

---

## 4. Đặc tả chức năng

### 4.1 Danh sách bảng đối soát theo contract (US-2.1)

**Vùng [A] [C] [D] [E].**

| Nội dung | Đặc tả |
|:---|:---|
| Danh sách | Bảng đối soát của kỳ đang làm; mỗi dòng là một contract; cùng khách có nhiều contract thì hiển thị nhiều dòng |
| Cột tối thiểu | Khách hàng (tên + mã hợp đồng) · Billing/Project · Subtotal · Gemini API · Promotion Credit · **Thành tiền** · Trạng thái · Ngày gửi gần nhất |
| Dòng tổng [D] | Tổng **Thành tiền toàn kỳ** — ghi nhãn rõ, không phải tổng trang; tính lại khi xóa dòng |
| Phân trang [E] | Mặc định 50/trang; chọn 20 / 50 / 100 / 200; hiện trang hiện tại, tổng trang, tổng dòng |
| Tìm kiếm | Theo tên khách / mã hợp đồng / billing ID; khớp một phần, không phân biệt hoa thường |
| Lọc | Theo trạng thái: Chưa gửi / Đã gửi / Khách đã chốt / Khách báo lệch |
| Sắp xếp | Theo Thành tiền, Ngày gửi, Tên khách; tăng/giảm dần |
| Tóm tắt nhanh [A] | Tổng số khách / đã gửi / đã chốt / báo lệch / còn tồn + thời điểm bảng đối soát tạo gần nhất từ Màn 1 |
| Quay lại Màn 1 | Nút quay lại để sửa số liệu và tạo lại bảng đối soát |

### 4.2 Xem & tải bảng đối soát (US-2.2)

| Nội dung | Đặc tả |
|:---|:---|
| Preview | Click một dòng contract → mở **preview ngay trên ERP** đúng nội dung file CM đã gen, gồm phần **tách Gemini API**. Không cần tải mới xem được |
| Tải đơn | Nút "Tải về" cho từng khách |
| Tải hàng loạt | Tick nhiều contract → tải về một lần dạng **file .zip** |
| Không đổi trạng thái | Preview / tải được **nhiều lần, không giới hạn**, không đổi trạng thái khách |
| Nhãn phiên bản | Hiển thị rõ file đang xem thuộc **lần tạo nào** (thời điểm tạo) — tránh nhầm bản cũ sau khi tạo lại |
| Quay lại Màn 1 | Thấy sai → có nút quay lại Màn 1 để sửa và tạo lại |

Công thức nền (kế thừa Màn 1): bảng đối soát có Gemini đã tách, `discount_amount = (Subtotal − Gemini) × discount%`.

### 4.3 Gửi mail cho khách (US-2.3)

**Luồng áp cho CẢ gửi đơn LẪN gửi gom — không có gửi tự động:**

```
Chọn contract (1 hoặc nhiều)
   → Hộp SOẠN MAIL (chọn/sửa template · xem/sửa To, CC · xem file đính kèm đúng của contract)
   → Bảng XÁC NHẬN (liệt kê từng contract + người nhận + file đính kèm — hiện cả khi chỉ 1 contract)
   → Bấm "Xác nhận gửi"  ← chỉ tại đây mail mới thật sự đi
   → Gửi tuần tự (giãn nhịp nhẹ)
   → KẾT QUẢ theo từng contract (thành công / thất bại)
```

| Nội dung | Đặc tả |
|:---|:---|
| Gửi đơn | Bấm nút gửi trên dòng contract → vẫn qua hộp soạn mail + bảng xác nhận |
| Gửi gom | Tick nhiều contract → "Gửi mail đã chọn" → hệ thống gửi lần lượt, mỗi contract **một mail riêng, đúng file của contract** |
| Số contract/lô | Không giới hạn cứng; gửi tuần tự có giãn nhịp nhẹ tránh bị chặn spam |
| Thiếu email | Contract thiếu email người nhận → **cảnh báo trước, loại khỏi lô**, không đưa vào; contract khác vẫn gửi |
| Cảnh báo gửi trùng | Cùng khách + contract + kỳ + file/version + nội dung trong ngày Việt Nam → hiển thị danh sách cảnh báo; kế toán được bỏ chọn hoặc tiếp tục, không block |
| Sau gửi | Chỉ gửi thành công mới chuyển trạng thái dòng → **"Đã gửi"**; lỗi giữ nguyên trạng thái |
| Kết quả per-contract | Thành công / thất bại **theo từng contract**; lỗi hiển thị rõ, không tự retry và không retry riêng trong cùng thao tác |
| Gửi lại | Không có retry tự động; khi cần kế toán chủ động bắt đầu lại một lần gửi mới từ đầu |
| Thread | Mail vào chung thread `(khách, kỳ)` với DNTT + nhắc nợ; mỗi contract vẫn giữ file riêng |
| Lưu vết | Lưu toàn bộ lần gửi/kết quả kỹ thuật; lịch sử nghiệp vụ chỉ hiển thị lần thành công. Lưu To/CC, thời điểm, contract, file/version, kết quả |

### 4.4 Xác nhận trạng thái thủ công (US-2.4)

| Nội dung | Đặc tả |
|:---|:---|
| Nguồn trạng thái | **Kế toán tự đánh dấu**; hệ thống KHÔNG tự đọc mail phản hồi |
| Đổi sang | **Khách đã chốt** / **Khách báo lệch** (chỉ phục vụ theo dõi; không phải điều kiện gen DNTT) |
| Ghi chú báo lệch | "Khách báo lệch" → cho nhập **ghi chú ngắn (không bắt buộc, ≤ 500 ký tự)** + hiện link quay lại Màn 1 |
| Đổi hàng loạt | Tick nhiều contract → đổi trạng thái một lượt |
| Free transition | Đổi qua lại tự do, không khóa chiều nào (đã chốt vẫn quay về báo lệch được) |
| Điều kiện gen | Có file Excel/GWS DATA hai bảng hợp lệ của kỳ và đủ quyền; không phụ thuộc trạng thái từng dòng |
| Lưu vết | Mỗi lần đổi: thời điểm, người đổi, trạng thái cũ → mới, ghi chú |

### 4.5 Chọn nhiều dòng & xóa (US-2.5)

| Nội dung | Đặc tả |
|:---|:---|
| Ô tick | Cột đầu mỗi dòng; ô tick ở dòng tiêu đề chọn/bỏ chọn toàn bộ dòng đang hiển thị |
| Chọn xuyên trang | Sang trang khác tick tiếp, dòng đã chọn ở trang trước vẫn giữ |
| Thanh thao tác | Hiện số dòng đang chọn + nút "Xóa các dòng đã chọn" |
| Xác nhận | Hộp xác nhận ghi rõ **số dòng** và **tổng tiền** sẽ bị xóa |
| Cảnh báo trạng thái | Dòng "Đã gửi"/"Khách đã chốt" → cảnh báo rõ trong hộp, **vẫn cho xóa** nếu xác nhận |
| Phạm vi | Chỉ xóa danh sách đối soát trên ERP — **không đụng dữ liệu đã tạo trên CM** |
| Tác động | Dòng tổng và tóm tắt nhanh tự tính lại |
| Hoàn tác | Nút "Hoàn tác" ngay sau khi xóa; hoặc quay Màn 1 tạo lại thì dòng đã xóa xuất hiện lại |
| Lưu vết | Thời điểm, người xóa, những khách nào |

### 4.6 Gen DNTT (US-2.6)

| Nội dung | Đặc tả |
|:---|:---|
| Điều kiện | Có file Excel/GWS DATA hai bảng hợp lệ của kỳ và đủ quyền; trạng thái từng dòng không phải điều kiện chặn |
| Gọi CM | Bấm Gen DNTT kỳ này → gọi `POST /api/payment-request/generate` cho toàn bộ dữ liệu file + kỳ |
| Gen hàng loạt | Một thao tác cho toàn kỳ; CM trả **kết quả batch thành công và danh sách record không có contract** để ERP báo riêng |
| Tiến trình & lỗi | Hiển thị tiến trình rõ; CM trả lỗi → báo rõ nguyên nhân, cho thử lại, **dữ liệu ERP giữ nguyên** |
| Đi tiếp | Gen xong → DNTT **đồng bộ vào mục "chờ xác nhận" (pending confirm)** của flow DNTT hiện có, **giống GWS Flex / Standard**. Kế toán xuất PDF, xác nhận thủ công, gửi khách **như quy trình cũ** — màn này không làm thay |
| Badge | Hiển thị cờ/kết quả DNTT theo contract nếu CM trả được mapping; record thiếu contract hiển thị lỗi riêng |
| Gen lại | Gen lại bằng file/version mới được; bản DNTT cũ không tự hủy. Bản ghi/liên kết pending mới ở ERP có thể được kế toán xóa nếu không cần; DNTT gốc trên CM không bị xóa |
| Lưu vết | Mỗi lần gen: thời điểm, người bấm, file/version, kết quả batch và danh sách record thiếu contract |

> **Không cần hộp xác nhận riêng trên Màn 2** vì DNTT không tự chốt — nó nằm chờ ở mục pending confirm; bước xác nhận là bước downstream trong flow DNTT hiện có.

---

## 5. State-Transition Table (INV-GCP-DS)

Trạng thái đối soát của mỗi contract/kỳ: `Chưa gửi` · `Đã gửi` · `Khách đã chốt` · `Khách báo lệch`.
Cờ phụ độc lập: `đã gen DNTT` (dẫn xuất từ việc có ≥1 DNTT của kỳ; không chặn đổi trạng thái đối soát).

| Từ \ Sang | Chưa gửi | Đã gửi | Khách đã chốt | Khách báo lệch |
|:---|:---:|:---:|:---:|:---:|
| **Chưa gửi** | — | Gửi mail OK (sau xác nhận) | Tay | Tay |
| **Đã gửi** | ✗ (chỉ qua tạo lại ở Màn 1) | Gửi lại (giữ) | Tay | Tay |
| **Khách đã chốt** | ✗ | Gửi lại → về "Đã gửi" | — | Tay |
| **Khách báo lệch** | ✗ | Gửi lại → về "Đã gửi" | Tay | — |

**Guard bắt buộc (illegal → response):**

- **INV-GCP-DNTT-1:** Gen DNTT phải dùng file Excel/GWS DATA hai bảng hiện hành của kỳ và đúng quyền; trạng thái đối soát của từng dòng không phải điều kiện chặn. Thiếu file/version, sai kỳ hoặc không đủ quyền → từ chối, giữ nguyên dữ liệu ERP.
- **INV-GCP-DS-2:** Gửi mail cho khách thiếu email → loại khỏi lô, không đổi trạng thái, không gọi mail API cho khách đó.
- **INV-GCP-DS-3:** Không mail nào được gửi trước khi kế toán bấm nút xác nhận cuối; hủy hộp xác nhận = no-op, không side-effect.

**Đã gen DNTT rồi phát sinh chỉnh sửa:** ERP **không tự hủy** DNTT cũ; kế toán tự xóa bản không cần trong flow DNTT hiện có; khi có file/version mới, gen lại tạo **bản DNTT mới**.

---

## 6. Validation Matrix (form Soạn mail + Ghi chú)

| Trường | Bắt buộc? | Giới hạn / độ dài | Unique | Thông báo lỗi | Client/Server |
|:---|:---|:---|:---|:---|:---|
| To (người nhận) | Có (≥1) | Email hợp lệ, ≤ 20 địa chỉ | — | "Cần ít nhất 1 email hợp lệ" | both |
| CC | Không | Email hợp lệ, ≤ 20 địa chỉ | — | "Email CC không hợp lệ" | both |
| Tiêu đề mail | Có | ≤ 255 ký tự | — | "Nhập tiêu đề" | both |
| Nội dung mail | Có | ≤ 20.000 ký tự | — | "Nhập nội dung" | both |
| File đính kèm | Có (tự gắn) | .xlsx đúng của contract, ≤ 5MB | 1 file/contract | "Thiếu/sai file contract X" | server |
| Ghi chú báo lệch | Không | ≤ 500 ký tự | — | "Ghi chú tối đa 500 ký tự" | both |

---

## 7. Quy tắc nghiệp vụ (BR)

| Mã | Quy tắc | Ví dụ |
|:---|:---|:---|
| **BR-01** | Trạng thái đối soát chỉ đổi thủ công; hệ thống không tự đọc mail | Khách reply "OK" → kế toán tự bấm "Đã chốt" |
| **BR-02** | Gen DNTT theo toàn bộ file Excel/GWS DATA hai bảng của kỳ; không chặn theo trạng thái đối soát (INV-GCP-DNTT-1) | File có cả "Đã gửi" và "Khách báo lệch" vẫn được đưa vào batch; kế toán tự xóa DNTT không cần ở pending confirm |
| **BR-03** | Mỗi contract nhận đúng file của mình, không lẫn (1 mail/contract) | Lô 40 contract → 40 mail, 40 file khác nhau |
| **BR-04** | Khách thiếu email → loại khỏi lô, không chặn khách khác (INV-GCP-DS-2) | 40 chọn, 2 thiếu email → gửi 38 |
| **BR-05** | Lỗi gửi báo theo từng contract; không tự retry, kế toán có thể chọn lại trong batch mới | 38 gửi, 3 lỗi → báo 3 lỗi; batch sau có thể chọn tùy ý |
| **BR-06** | Xóa chỉ ảnh hưởng danh sách ERP, không đụng CM; hoàn tác được | Xóa khách nội bộ → tạo lại Màn 1 thì quay lại |
| **BR-07** | Mail bảng đối soát vào chung thread `(khách, kỳ)` với DNTT + nhắc nợ | Tra 1 khách/kỳ thấy đủ lịch sử, mỗi contract giữ file riêng |
| **BR-08** | Không khóa bước: gửi lại / đổi trạng thái / gen lại nhiều lần | Báo lệch → sửa Màn 1 → gửi lại → chốt → gen lại |
| **BR-09** | Mọi thao tác gửi / đổi trạng thái / xóa / gen lưu vết đầy đủ | Ai, lúc nào, cũ → mới |
| **BR-10** | Không có gửi tự động; mọi lần gửi (đơn hoặc gom) bắt buộc qua hộp Soạn mail → bảng Xác nhận, gửi thật chỉ sau nút xác nhận cuối (INV-GCP-DS-3) | Gửi 1 khách vẫn hiện bảng xác nhận |
| **BR-11** | Gen DNTT không tự chốt: DNTT vào mục "chờ xác nhận" của flow DNTT hiện có (giống GWS Flex/Standard); xác nhận là bước downstream | Gen toàn bộ file 8 contract → kết quả tương ứng nằm chờ xác nhận; kế toán có thể xóa bản ghi/liên kết pending ở ERP, không xóa CM |
| **BR-12** | Đã gen DNTT rồi khách báo lệch → ERP không tự hủy; kế toán tự hủy ở flow DNTT; gen lại tạo bản mới | — |

---

## 8. Acceptance Criteria (Given/When/Then — 2 lớp)

**US-2.1 — Danh sách**
1. **AC-01 [EC-0 happy]:** Kế toán mở màn kỳ T08 → thấy danh sách mỗi dòng 1 contract với đủ 8 cột và dòng tổng toàn kỳ *(kỹ thuật: render list + footer SUM(thành_tiền) toàn kỳ, không theo trang)*. ← US-2.1
2. **AC-02 [EC-Boundary]:** Có 94 khách, chọn 20/trang → 5 trang; đổi 200/trang → 1 trang *(kỹ thuật: pageSize ∈ {20,50,100,200}, default 50)*. ← US-2.1
3. **AC-03 [EC-0]:** Gõ "coder" → chỉ còn khách khớp tên/mã HĐ/billing ID, không phân biệt hoa thường *(kỹ thuật: ILIKE %kw%)*. ← US-2.1
4. **AC-04 [EC-0]:** Lọc "Chưa gửi" → chỉ hiện dòng chưa gửi; tóm tắt [A] đúng tổng/đã gửi/đã chốt/báo lệch/tồn *(kỹ thuật: filter + count theo status)*. ← US-2.1
5. **AC-05 [EC-Consistency]:** Tổng số khách và tổng thành tiền khớp dữ liệu đã đẩy CM ở Màn 1 *(kỹ thuật: reconcile count + SUM với snapshot Màn 1)*. ← US-2.1 DoD

**US-2.2 — Xem & tải**
6. **AC-06 [EC-0]:** Click dòng → preview ngay trên ERP đúng nội dung file CM, có phần tách Gemini API *(kỹ thuật: render từ file CM theo fileKey)*. ← US-2.2
7. **AC-07 [EC-0]:** Tick 5 contract → "Tải hàng loạt" → 1 file .zip chứa đúng 5 file *(kỹ thuật: zip theo fileKey từng contract)*. ← US-2.2
8. **AC-08 [EC-Idempotent]:** Preview/tải 3 lần liên tiếp → trạng thái khách không đổi *(kỹ thuật: read-only, không mutate status)*. ← US-2.2
9. **AC-09 [EC-Stale]:** Sau khi tạo lại ở Màn 1, preview hiện nhãn "lần tạo <timestamp>" khớp bản mới nhất *(kỹ thuật: hiển thị createdAt của cost-table)*. ← US-2.2

**US-2.3 — Gửi mail**
10. **AC-10 [EC-0]:** Bấm gửi trên 1 contract → hộp soạn mail → **bảng xác nhận (dù chỉ 1 contract)** → bấm Xác nhận → gửi → trạng thái "Đã gửi" + thời điểm *(kỹ thuật: không mail API nào chạy trước nút xác nhận cuối; single & batch dùng chung bước confirm)*. ← US-2.3; BR-10
11. **AC-11 [EC-0]:** Tick 10 contract → "Gửi mail đã chọn" → bảng xác nhận liệt kê từng contract + người nhận + file → xác nhận → 10 mail riêng, mỗi contract đúng file mình *(kỹ thuật: loop send, 1 attachment/contract)*. ← US-2.3; BR-03
12. **AC-12 [EC-Partial-failure]:** Gửi lô 10, 3 lỗi → báo ngay kết quả 7 OK / 3 lỗi; không tự retry; batch mới được chọn lại tùy ý *(kỹ thuật: per-contract result, no auto-retry)*. ← US-2.3; BR-05
13. **AC-13 [EC-Missing-data]:** Khách thiếu email trong lô → cảnh báo trước, loại khỏi lô, khách khác vẫn gửi *(kỹ thuật: pre-validate To, exclude, không đổi status khách bị loại)*. ← US-2.3; BR-04
14. **AC-14 [EC-Duplicate]:** Gửi lại cho contract đã "Đã gửi" → hiển thị cảnh báo không chặn, cho kế toán tiếp tục hoặc bỏ chọn; lưu thêm 1 vết kỹ thuật *(kỹ thuật: warning-only + append audit)*. ← US-2.3
15. **AC-15 [EC-Traceability]:** Sau gửi, tra thread `(khách, kỳ)` thấy mail bảng đối soát cùng chỗ DNTT/nhắc nợ; vết ghi ai/lúc nào/nhận/đính kèm *(kỹ thuật: threadKey=(customer,period), audit row)*. ← US-2.3; BR-07
16. **AC-16 [EC-Guard]:** Đóng/hủy hộp xác nhận giữa chừng → không mail nào được gửi, trạng thái không đổi *(kỹ thuật: hủy = no-op)*. ← BR-10; INV-GCP-DS-3

**US-2.4 — Trạng thái**
17. **AC-17 [EC-0]:** Bấm "Khách đã chốt" trên 1 dòng → trạng thái đổi và lưu audit; thao tác Gen DNTT vẫn là thao tác cấp kỳ/file, không phụ thuộc việc dòng này đã chốt. ← US-2.4
18. **AC-18 [EC-0]:** Đánh dấu "Khách báo lệch" → cho nhập ghi chú ngắn (≤500) + hiện link quay Màn 1 *(kỹ thuật: note optional, deep-link Màn 1)*. ← US-2.4
19. **AC-19 [EC-0]:** Tick 6 khách → đổi "Đã chốt" một lượt → cả 6 đổi *(kỹ thuật: batch update)*. ← US-2.4
20. **AC-20 [EC-Free-transition]:** Khách "Đã chốt" → đổi lại "Báo lệch" → cho phép, không khóa chiều *(kỹ thuật: any↔any manual)*. ← US-2.4; BR-08
21. **AC-21 [EC-Traceability]:** Mỗi lần đổi lưu vết cũ→mới + người + thời điểm + ghi chú, tra lại được *(kỹ thuật: audit row)*. ← US-2.4

**US-2.5 — Xóa**
22. **AC-22 [EC-Cross-page]:** Tick 3 dòng trang 1, sang trang 2 tick 2 dòng → thanh thao tác báo "5 dòng"; lựa chọn giữ nguyên *(kỹ thuật: selection state xuyên trang)*. ← US-2.5
23. **AC-23 [EC-0]:** Bấm xóa 5 dòng → hộp xác nhận ghi rõ "5 dòng, tổng $X" → xác nhận → 5 dòng biến mất, dòng tổng + tóm tắt tính lại *(kỹ thuật: soft-delete, recompute totals)*. ← US-2.5
24. **AC-24 [EC-Guard-warn]:** Xóa khách "Đã gửi"/"Đã chốt" → hộp cảnh báo rõ nhưng vẫn cho xóa khi xác nhận *(kỹ thuật: warn, not block)*. ← US-2.5
25. **AC-25 [EC-Undo]:** Ngay sau xóa bấm "Hoàn tác" → 5 dòng quay lại đúng trạng thái cũ *(kỹ thuật: restore soft-deleted)*. ← US-2.5
26. **AC-26 [EC-Isolation]:** Xóa trên ERP → dữ liệu CM không đổi; tạo lại Màn 1 → dòng đã xóa xuất hiện lại *(kỹ thuật: không gọi CM delete)*. ← US-2.5; BR-06

**US-2.6 — Gen DNTT**
27. **AC-27 [EC-0]:** Kế toán bấm "Gen DNTT kỳ này" → CM gen toàn bộ dữ liệu trong file Excel/GWS DATA hai bảng của kỳ → DNTT vào mục chờ xác nhận + kết quả được liên kết theo contract nếu CM trả mapping *(kỹ thuật: POST /payment-request/generate; pending confirm)*. ← US-2.6; BR-11
28. **AC-28 [EC-Authz/Guard]:** Dòng có trạng thái bất kỳ vẫn được đưa vào batch nếu có trong file kỳ; chỉ thiếu file/version, sai kỳ hoặc thiếu quyền mới bị từ chối *(kỹ thuật: server enforce source-file/version and permission, không enforce status)*. ← US-2.6; INV-GCP-DNTT-1; BR-02
29. **AC-29 [EC-Partial-failure]:** File kỳ có 8 contract với trạng thái hỗn hợp → gen một lần → CM trả thành công và danh sách record không có contract; ERP tiếp tục record hợp lệ, chỉ báo lỗi record thiếu contract *(kỹ thuật: batch result + missing-contract list, no partial corruption)*. ← US-2.6
30. **AC-30 [EC-Duplicate]:** Có file/version mới sau sửa số → gen DNTT lần 2 được, tạo bản mới, không khóa; bản cũ không tự hủy. ← US-2.6; BR-12
31. **AC-31 [EC-Consistency]:** Chạy thật: file hai bảng của kỳ → gen toàn bộ → DNTT xuất hiện đúng trong flow DNTT hiện có (mục chờ xác nhận), số tiền đúng ngay (không sửa tay số bằng số/bằng chữ) *(kỹ thuật: E2E, verify DNTT amount)*. ← US-2.6 DoD

---

## 9. Requirement IDs (REQ)

| REQ | Nội dung (MoSCoW) | AC |
|:---|:---|:---|
| REQ-S2-01 (M) | Danh sách đối soát theo contract + tổng + tóm tắt | AC-01,04,05 |
| REQ-S2-02 (M) | Phân trang / tìm kiếm / lọc / sắp xếp | AC-02,03 |
| REQ-S2-03 (M) | Preview + tải (đơn/hàng loạt) không đổi trạng thái | AC-06,07,08,09 |
| REQ-S2-04 (M) | Gửi mail đơn/gom qua xác nhận, đúng file, kết quả per-contract | AC-10,11,12,13,16 |
| REQ-S2-05 (M) | Gửi lại + thread + lưu vết | AC-14,15 |
| REQ-S2-06 (M) | Trạng thái thủ công + hàng loạt + free transition + vết | AC-17..21 |
| REQ-S2-07 (M) | Chọn xuyên trang + xóa + hoàn tác + cách ly CM | AC-22..26 |
| REQ-S2-08 (M) | Gen DNTT toàn kỳ + kiểm tra file/quyền + pending confirm + gen lại + vết | AC-27..31 |

---

## 10. Cảnh báo & xử lý lỗi

### 10.1 Cảnh báo nghiệp vụ (không chặn)

| Cảnh báo | Điều kiện | Nội dung |
|:---|:---|:---|
| Khách thiếu email | Có khách trong lô không có email người nhận | Nêu số khách, loại khỏi lô, cho bổ sung |
| Xóa dòng đã gửi/đã chốt | Trong lô xóa có khách "Đã gửi"/"Đã chốt" | Cảnh báo rõ trong hộp xác nhận, vẫn cho xóa |
| Gen khi trạng thái hỗn hợp | File kỳ có dòng Chưa gửi/Đã gửi/Khách đã chốt/Khách báo lệch | Vẫn gen toàn bộ file; chỉ chặn nếu thiếu file/version, sai kỳ hoặc thiếu quyền |

### 10.2 Lỗi kỹ thuật

| Lỗi | Xử lý |
|:---|:---|
| CM lỗi khi tải file bảng đối soát | Báo lỗi, cho thử lại; các thao tác khác không bị chặn |
| Mail gửi lỗi một số contract | Kết quả per-contract; không tự retry; kế toán tự bắt đầu lại lần gửi mới nếu cần |
| CM lỗi khi gen DNTT | Báo kết quả batch và danh sách record thiếu contract; ERP tiếp tục record hợp lệ, dữ liệu ERP giữ nguyên |
| CM đã tạo DNTT nhưng ERP chưa link được | Giữ kết quả CM, hiển thị `Đồng bộ lỗi`, cho retry lấy/link kết quả; không gen lại DNTT |
| Mất kết nối CM | Báo lỗi kết nối, giữ nguyên dữ liệu, cho thử lại |

---

## 11. Lưu trữ & phi chức năng

### 11.1 Yêu cầu lưu trữ

| Cần lưu | Yêu cầu |
|:---|:---|
| Danh sách bảng đối soát theo contract/kỳ | Kèm `contract_id`, `customer_id`, `fileKey`, thời điểm tạo, lần tạo nào |
| Trạng thái đối soát từng khách | Chưa gửi / Đã gửi / Khách đã chốt / Khách báo lệch + ghi chú báo lệch |
| Liên kết DNTT | Cờ "đã gen DNTT" + link tới DNTT của contract/kỳ |
| Dòng đã xóa | Đủ để hoàn tác |
| Lưu vết thao tác | Gửi mail, đổi trạng thái, xóa, gen DNTT: thời điểm, người thao tác, giá trị cũ → mới |

Dữ liệu phải **bền vững** — tắt trình duyệt mở lại vẫn còn nguyên.

### 11.2 Phi chức năng

| Mục | Yêu cầu |
|:---|:---|
| Khối lượng | ~94 contract/kỳ; danh sách + lọc/sắp xếp mượt *(kỹ thuật: list <1s)* |
| Đồng thời | Một kế toán tại một thời điểm cho mỗi kỳ |
| Phân quyền | Chỉ kế toán doanh thu truy cập; quyền: `gcp:recon:view` / `send-mail` / `status` / `delete` / `gen-dntt` |
| Ngôn ngữ | Giao diện tiếng Việt; tên cột Excel giữ nguyên tiếng Anh theo chuẩn CM |
| Nhịp gửi mail | Gửi tuần tự có giãn nhịp nhẹ; không giới hạn cứng số khách/lô |

---

## 12. Điều kiện nghiệm thu

| # | Tiêu chí |
|:---:|:---|
| 1 | Kế toán chạy trọn một kỳ thật từ nhận bảng đối soát đến gen DNTT mà **không mở CM để thao tác tay** |
| 2 | Mỗi khách nhận đúng bảng đối soát của mình; không có trường hợp gửi nhầm file |
| 3 | Mọi lần gửi mail đều đi qua bước xác nhận — không có gửi tự động |
| 4 | Gửi lô nhiều contract → kết quả per-contract; lỗi báo ngay, batch mới được chọn gửi lại |
| 5 | Trạng thái đổi thủ công, đổi qua lại tự do; lịch sử đổi tra lại được |
| 6 | Chọn nhiều dòng xuyên trang → xóa một lần → đúng số dòng biến mất, tổng tính lại đúng; hoàn tác được |
| 7 | Xóa trên ERP không đụng CM; quay Màn 1 tạo lại thì dòng đã xóa quay lại |
| 8 | File Excel/GWS DATA hai bảng của kỳ → gen DNTT toàn bộ → DNTT xuất hiện đúng ở mục "chờ xác nhận" của flow DNTT hiện có, số tiền đúng ngay |
| 9 | Gen lại bằng file/version mới được nhiều lần; DNTT cũ không tự hủy, kế toán tự xóa bản ghi/liên kết pending ở ERP nếu không cần; CM không bị xóa |
| 10 | Toàn bộ thao tác gửi mail và đổi trạng thái đều tra lại được lịch sử |

---

## 13. Truy vết User Story

| US | Nội dung | Mục đặc tả | AC |
|:---|:---|:---|:---|
| US-2.1 | Danh sách bảng đối soát theo contract | 4.1 | AC-01..05 |
| US-2.2 | Xem & tải bảng đối soát | 3.1, 4.2 | AC-06..09 |
| US-2.3 | Gửi mail cho khách | 3.3, 4.3 | AC-10..16 |
| US-2.4 | Xác nhận trạng thái thủ công | 4.4, §5 | AC-17..21 |
| US-2.5 | Chọn nhiều dòng & xóa | 4.5 | AC-22..26 |
| US-2.6 | Gen DNTT | 3.2, 4.6 | AC-27..31 |

---

## 14. Quyết định đã chốt (từ "Cần xác nhận")

| # | Câu hỏi | Quyết định |
|:---:|:---|:---|
| 1 | Template mail | Một mẫu mặc định, sửa được từng lần; chưa tách theo nhóm khách |
| 2 | Nguồn người nhận | Liên hệ trên hợp đồng → fallback danh bạ khách → cho sửa tay |
| 3 | Giới hạn gửi gom | Không giới hạn cứng; gửi tuần tự có giãn nhịp nhẹ tránh spam |
| 4 | Đã gen DNTT rồi báo lệch | ERP không tự hủy; kế toán tự hủy ở flow DNTT; gen lại tạo bản mới |
| 5 | Gửi lại khi "Đã chốt" | Đưa trạng thái về "Đã gửi". Ghi chú báo lệch không bắt buộc, ≤500 ký tự |
| — | Gen DNTT | Bấm là chạy cho toàn bộ file hai bảng của kỳ (không hộp xác nhận riêng); DNTT vào mục "chờ xác nhận" như GWS Flex/Standard, kế toán tự xóa bản ghi/liên kết pending ở ERP nếu không cần |
