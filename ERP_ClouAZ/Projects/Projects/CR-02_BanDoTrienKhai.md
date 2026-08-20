# CR-02 — BẢN ĐỒ TRIỂN KHAI THEO 4 PHẦN

**Tài liệu nguồn (nguồn sự thật duy nhất):** `CR-02_ModuleTinhGiaVonDuAn_v2.md`
**Tài liệu khảo sát code:** `CR-02_DanhGia-Kha-Thi-Trien-Khai.md`
**Ngày lập:** 11/08/2026

> Tài liệu này **không chứa nội dung nghiệp vụ mới**. Đây là bản đồ để chia việc và theo dõi tiến độ. Mọi chi tiết yêu cầu và tiêu chí nghiệm thu đều nằm ở tài liệu nguồn — mục này chỉ trỏ tới.
>
> Khi có thay đổi nghiệp vụ: **sửa ở tài liệu nguồn trước**, rồi mới cập nhật bản đồ này.

***

## 0. TỔNG QUAN

| Phần | Tên | Số mục | Hạng mục [TIỀN] | Phụ thuộc | Có làm song song được không |
| --- | --- | :---: | :---: | --- | --- |
| **1** | Cấu hình hệ thống | 4 | 0 | Không phụ thuộc gì | ✅ Bắt đầu ngay |
| **2** | Tạo & Estimate báo giá theo Line sản phẩm và loại hình dịch vụ | 6 | 1 (CR-05) | Phần 1 | ⚠️ Chờ Phần 1 |
| **3** | Luồng trạng thái và phê duyệt báo giá | 6 | 1 (CR-11) | Phần 2 *(trừ CR-08, CR-18)* | ⚠️ Một phần |
| **4** | Giao diện | 3 | 0 | Phần 2 + Phần 3 *(trừ phần lớn CR-12, CR-14)* | ⚠️ Một phần |

**Tổng: 19 mục, 2 hạng mục đụng trực tiếp con số tiền.**

### Sơ đồ phụ thuộc

```
PHẦN 1 ─── CR-01 ── (độc lập)
       ├── CR-02 ──┐
       ├── CR-03 ──┤
       └── CR-03B ─┤
                   ▼
PHẦN 2 ─── CR-04 ──┬─> CR-09 ─┐
                   ├─> CR-10 ─┤   (CR-10 cần cả CR-03B)
                   ├─> CR-06  │
                   └─> CR-07 ─┤
                              ▼
                          CR-05 [TIỀN]
                              │
PHẦN 3                        ▼
                          CR-11 [TIỀN]
                              │
                              ├─> CR-13
                              ├─> CR-15 ─┐
                              └─> CR-17  │
       CR-08  ── (độc lập)               │
       CR-18  ── (độc lập)               │
                                         ▼
PHẦN 4      CR-12 ── (gần độc lập)   CR-16
            CR-14 ── (gần độc lập)
```

### Khuyến nghị chia đợt triển khai

| Đợt | Nội dung | Lý do |
| --- | --- | --- |
| **Đợt A** | Phần 1 đầy đủ + CR-08 + CR-18 + phần định dạng tiền của CR-12 | Không phụ thuộc gì, gỡ được sớm, giảm tải cho các đợt sau |
| **Đợt B** | CR-04 → CR-09 → CR-10 → CR-06 → CR-07 | Xây nền dữ liệu báo giá nhiều Line |
| **Đợt C** | **CR-05 [TIỀN]** — tách phase riêng | Đụng con số tiền, cần nghiệm thu chặt |
| **Đợt D** | **CR-11 [TIỀN]** — tách phase riêng | Đụng con số tiền + thêm 1 trạng thái vào luồng |
| **Đợt E** | CR-15 → CR-17 → CR-13 | Phân quyền và khoá dữ liệu, cần CR-11 xong |
| **Đợt F** | CR-14 + CR-16 + phần cột Line của CR-12 | Hoàn thiện giao diện và đầu ra |

***

## 1. PHẦN 1 — CẤU HÌNH HỆ THỐNG

**Mục tiêu:** thiết lập dữ liệu nền để mọi báo giá tạo sau đó có đủ danh mục và tham số.

### Phạm vi

| Mã | Nội dung | Ghi chú |
| --- | --- | --- |
| CR-01 | Chi phí gián tiếp tính chi tiết theo từng khoản mục | Chỉ bổ sung breakdown hiển thị, **tổng không đổi** |
| CR-02 | Danh mục 2 cấp: Line sản phẩm + Loại hình dịch vụ | Loại hình dịch vụ quản lý **riêng theo từng Line** |
| CR-03 | Contingency cấu hình theo từng loại hình dịch vụ | Kèm quy tắc gán mặc định khi go-live và migration báo giá dở dang |
| CR-03B | Tab cấu hình Vendor thuê ngoài | Danh sách vendor + % phí, chỉ toggle Active/Inactive |

### Dữ liệu chạm tới

- Danh mục dịch vụ: thêm **cấp cha**, thêm **% contingency**, đổi ràng buộc trùng tên thành "duy nhất trong phạm vi cấp cha" (và duy nhất toàn hệ thống cho cấp 1).
- **Bảng mới**: danh sách vendor (tên, % phí, trạng thái, ghi chú).
- Không đụng bảng báo giá.

### Không được quên

1. **Migration khi go-live** (CR-03 mục 5): tự động gán % contingency đang dùng cho **mọi** loại hình dịch vụ ACTIVE, để không có loại hình nào bị ẩn khỏi dropdown ngay sau khi lên bản mới.
2. **Migration báo giá đang dở dang** (CR-03 mục 6): ràng buộc bất biến — **không con số giá vốn nào được thay đổi** so với trước migration.
3. Tên **Line sản phẩm** phải duy nhất toàn hệ thống; tên **loại hình dịch vụ** duy nhất trong phạm vi 1 Line. Cả hai không phân biệt hoa thường.
4. Tắt Line cha → ẩn cả nhánh khỏi lựa chọn báo giá mới, **nhưng không ghi đè trạng thái của loại hình con** và **không ảnh hưởng báo giá cũ**.

### Danh sách AC

`AC-CR01-01 → 03` · `AC-CR02-01 → 07` · `AC-CR03-01 → 09` · `AC-CR03B-01 → 06`
**Tổng: 25 tiêu chí nghiệm thu.**

### Tiêu chí hoàn thành Phần 1

- [ ] Cấu hình được danh mục 2 cấp, kiểm tra trùng tên đúng ở cả 2 cấp.
- [ ] Cấu hình được % contingency theo từng loại hình dịch vụ và theo Line không có con.
- [ ] Cấu hình được danh sách vendor kèm % phí, chỉ toggle không xoá.
- [ ] Chạy migration trên bản sao dữ liệu thật: **đối chiếu 100% giá vốn của báo giá đang dở dang trước/sau, không lệch**.
- [ ] Chi phí gián tiếp hiển thị breakdown theo khoản mục, tổng khớp cách tính cũ.

***

## 2. PHẦN 2 — TẠO & ESTIMATE BÁO GIÁ THEO LINE SẢN PHẨM VÀ LOẠI HÌNH DỊCH VỤ

**Mục tiêu:** từ lúc Sales tạo báo giá đến khi Techlead duyệt xong và hệ thống tính ra giá vốn cuối cùng.

⚠️ **Đây là phần nặng nhất và rủi ro nhất của CR-02.**

### Phạm vi

| Mã | Nội dung | Ghi chú |
| --- | --- | --- |
| CR-04 | Chọn nhiều Line sản phẩm + nhiều loại hình dịch vụ | Định nghĩa khái niệm **"hạng mục tính giá"** — đọc kỹ trước tiên |
| **CR-05** | Công thức giá vốn theo hạng mục | **[TIỀN]** — tách phase riêng, nghiệm thu chặt |
| CR-06 | Ô mô tả nội dung công việc 5.000 ký tự | Bỏ hoàn toàn chức năng đính kèm file |
| CR-07 | Sales bắt buộc estimate, tính là 1 PIC | Chặn tạo báo giá nếu tài khoản chưa có hồ sơ nhân sự/lương |
| CR-09 | Import Task/Sub-task 2 cấp | Kèm template có droplist `Tên (Email Lark)` |
| CR-10 | Dự án có thuê ngoài | Cần CR-03B xong trước |

### Dữ liệu chạm tới

- **Bảng nối mới**: báo giá ↔ N hạng mục tính giá, kèm % contingency riêng. ⚠️ Khoá ngoại phải trỏ được tới danh mục **cả cấp 1 lẫn cấp 2**.
- **Bảng công việc**: thêm dòng cha (phân cấp), thứ tự sắp xếp, hạng mục tính giá của dòng, cờ thuê ngoài, ràng buộc Manday, giới hạn độ dài.
- **Bảng mới**: thông tin thuê ngoài theo từng dòng công việc.
- **Bảng báo giá**: thêm cột mô tả.
- **Bảng mới**: breakdown giá vốn theo từng hạng mục.
- Bổ sung chỉ mục còn thiếu cho bảng công việc.

### Không được quên

1. **Đọc khối "Hạng mục tính giá" ở đầu CR-04 trước khi làm bất cứ việc gì** — toàn bộ Phần 2 và Phần 3 xây trên khái niệm này.
2. **Quy tắc làm tròn ở CR-05 mục 4 ĐẢO NGƯỢC nguyên tắc hiện tại** của bộ máy tính toán: nay **cộng từ các giá trị đã làm tròn** ở cấp hạng mục. Đây là chủ ý, không phải lỗi hồi quy.
3. **Manday dòng thuê ngoài** tính vào Tổng Manday nhưng **không** tham gia phân bổ chi phí gián tiếp. Vendor không tính là "1 đầu người".
4. **Ma trận quyền sửa nội dung công việc theo bước** (CR-09 mục 8) — gate phải ở **cấp từng dòng**, không phải cấp toàn bảng, vì dòng nội bộ và dòng thuê ngoài có chủ thể sửa khác nhau.
5. Tên hiển thị `Line / Loại hình dịch vụ` nên sinh ở **một hàm dùng chung duy nhất**, tái sử dụng ở mọi nơi.
6. Danh sách hạng mục **khoá ngay sau khi tạo báo giá**, không cho thêm/bớt về sau.

### Danh sách AC

`AC-CR04-01 → 09` · `AC-CR05-01 → 10` · `AC-CR06-01 → 05` · `AC-CR07-01 → 09` · `AC-CR09-01 → 15` · `AC-CR10-01 → 12`
**Tổng: 60 tiêu chí nghiệm thu.**

### Tiêu chí hoàn thành Phần 2

- [ ] Tạo được báo giá nhiều Line, có **trộn** hạng mục cấp 2 và hạng mục là chính Line.
- [ ] Báo giá chứa 2 hạng mục **trùng tên loại hình ở 2 Line khác nhau** — người dùng phân biệt được ở mọi màn hình và trong file import.
- [ ] Giá vốn tính đúng theo từng hạng mục với % contingency riêng; **tổng theo Line = tổng báo giá**, không lệch.
- [ ] Import file thành công với droplist tên nhân sự; ánh xạ đúng người khi có trùng tên.
- [ ] Dòng thuê ngoài: chỉ Techlead sửa được, chỉ ở bước Estimate, sau đó khoá.
- [ ] Chặn được tài khoản Sales chưa có hồ sơ nhân sự ngay ở bước tạo báo giá.
- [ ] **Kiểm thử đối chiếu:** báo giá chỉ có 1 hạng mục và không thuê ngoài cho ra **đúng kết quả như công thức cũ**.

***

## 3. PHẦN 3 — LUỒNG TRẠNG THÁI VÀ PHÊ DUYỆT BÁO GIÁ

**Mục tiêu:** các bước của luồng, ai được làm gì ở mỗi bước, thông báo, và khoá dữ liệu khi kết thúc.

### Phạm vi

| Mã | Nội dung | Ghi chú |
| --- | --- | --- |
| CR-08 | Đổi tên bước "Review" → "Techlead Review" | Chỉ đổi nhãn hiển thị, **giá trị lưu trong dữ liệu giữ nguyên**. Làm được ngay |
| **CR-11** | Bước "Price Setting" + giá bán + PnL | **[TIỀN]** — thêm 1 trạng thái vào luồng 6 bước |
| CR-13 | Nội dung & đường dẫn thông báo | Bổ sung thông báo cho bước Price Setting |
| CR-15 | Phân quyền xem Giá bán & PnL | Quy tắc phân quyền gốc của toàn CR-02 |
| CR-17 | Khoá số liệu sau khi Done | Không mở rộng cấu trúc snapshot |
| CR-18 | Phạm vi hiển thị báo giá + chuyển owner | Làm được ngay, không chờ CR-11 |

### Dữ liệu chạm tới

- **Bảng báo giá**: thêm Tổng giá bán, PnL tổng, Rate ngày/giờ theo giá bán, **người phụ trách hiện hành (owner)**.
- Mở rộng danh sách **trạng thái hợp lệ** → thêm `Price Setting`.
- Mở rộng danh sách **loại sự kiện** → nhập/sửa giá bán, tính lại bởi Sales, chuyển owner.
- Mở rộng danh sách **loại thông báo** → yêu cầu nhập giá bán, tiếp nhận báo giá.
- Bổ sung **chỉ mục** cho các cột dùng lọc danh sách theo người xem.

### Không được quên

1. **Ma trận actor theo bước** (bảng thao tác ở CR-15 mục 6) — đây là bản tóm tắt chuẩn, dán lên tường khi code:

| Thao tác | Sales owner | CEO/CFO/CSO/CIO | Techlead | PIC |
| --- | :---: | :---: | :---: | :---: |
| Nhập/sửa Tổng giá bán | ✔ | ✘ | ✘ | ✘ |
| Sửa % Contingency @ Price Setting | ✔ | ✘ | ✘ | ✘ |
| Sửa % Contingency @ Waiting Approval | ✘ | ✔ | ✘ | ✘ |
| "Tính lại" @ Price Setting | ✔ | ✘ | ✘ | ✘ |
| "Tính lại" @ Waiting Approval | ✘ | ✔ (cả 4) | ✘ | ✘ |
| Chốt | ✘ | ✔ (cả 4, cơ chế OR) | ✘ | ✘ |
| Trả lại (Reject) | ✘ | **Chỉ CSO, CIO** | ✘ | ✘ |

2. **Hai thao tác tính lại khác nhau, không được lẫn:**
   - *Sửa contingency* → tính lại **bằng dữ liệu đầu vào đã khoá**.
   - *Nút "Tính lại"* → **nạp lại toàn bộ dữ liệu đầu vào hiện hành**.
3. **Thông báo khi vào Waiting Approval chỉ gửi CSO** — dù cả 4 lãnh đạo đều có quyền Chốt và Tính lại.
4. **Phân quyền phải chặn ở tầng server**, cả ở nội dung trả về lẫn ở việc lọc danh sách. Không được chỉ ẩn ở giao diện.
5. **Danh sách báo giá nay bị lọc theo người xem** — bộ đếm và phân trang phải phản ánh đúng số đã lọc.
6. Sales owner **cố định suốt vòng đời**, chỉ đổi qua chức năng chuyển owner có kiểm soát.

### Danh sách AC

`AC-CR08-01` · `AC-CR11-01 → 27` · `AC-CR13-01 → 04` · `AC-CR15-01 → 10` · `AC-CR17-01 → 05` · `AC-CR18-01 → 10`
**Tổng: 57 tiêu chí nghiệm thu.**

### Tiêu chí hoàn thành Phần 3

- [ ] Luồng chạy đủ 7 bước, Stepper và bộ lọc trạng thái khớp nhau.
- [ ] Sales owner nhập 1 Tổng giá bán → hệ thống phân bổ đúng, **tổng phân bổ khớp tuyệt đối** con số đã nhập.
- [ ] PnL hiển thị đủ 3 mức; cảnh báo lãi thấp chỉ áp cho PnL tổng.
- [ ] Ma trận actor đúng 100% — kiểm tra cả trường hợp gọi thẳng API.
- [ ] Sales khác không xem được báo giá không phải của mình (kiểm tra cả danh sách lẫn chi tiết lẫn nội dung API trả về).
- [ ] Techlead/PIC vào được danh sách và **chỉ thấy báo giá của mình**.
- [ ] Chuyển owner hoạt động, ghi log, gửi thông báo, người cũ mất quyền.
- [ ] Báo giá Done không thay đổi số liệu dù dữ liệu nguồn đổi.

***

## 4. PHẦN 4 — GIAO DIỆN

**Mục tiêu:** trình bày số liệu đúng chuẩn trên màn hình và trong file xuất ra.

### Phạm vi

| Mã | Nội dung | Ghi chú |
| --- | --- | --- |
| CR-12 | Chuẩn hoá định dạng số tiền VND | Phần định dạng làm được ngay; phần cột Line chờ CR-04 |
| CR-14 | Làm nổi bật Giá vốn / Giá bán / PnL | Thuần giao diện, làm được sớm |
| CR-16 | File export theo phân quyền actor | Chờ Phần 2 + Phần 3 |

### Dữ liệu chạm tới

**Không thêm bảng hay cột nào.** Phần 4 chỉ đọc dữ liệu do Phần 2 và Phần 3 tạo ra, rồi quyết định cách trình bày. Riêng CR-16 có bổ sung **ghi log mỗi lần export** (người export, thời điểm, báo giá, biến thể bản đã sinh) — dùng lại cơ chế nhật ký sẵn có, không cần cấu trúc mới.

### Không được quên

1. **Ba chỗ đang bỏ sót định dạng tiền** (đã khảo sát trong code): cột rate trên danh sách báo giá, nội dung file export, và thẻ thông báo. Phía giao diện đã có hàm định dạng sẵn; **phía máy chủ thì chưa có** — phải viết mới cho export và thông báo.
2. **CR-16 phá vỡ một invariant bảo mật đang có.** Hiện file export cố ý **không phân nhánh theo vai trò**, nên an toàn theo cấu trúc. Nay phải phân nhánh 4 biến thể → hạ xuống "an toàn theo logic". **Bắt buộc bù lại bằng kiểm thử mức byte cho cả 4 biến thể.**
3. **Bốn biến thể file**: A (lãnh đạo) / B (Sales owner) / C1 (Techlead — **có** breakdown thuê ngoài) / C2 (PIC — **không có**).
4. Việc lọc trường **phải làm khi sinh file ở máy chủ**, không phải ẩn cột ở trình duyệt.
5. Chỉ export được khi báo giá đã **Done**, áp dụng cho mọi vai trò.
6. Cột PIC trong file hiển thị **tên nhân sự**, không phải mã.

### Danh sách AC

`AC-CR12-01 → 05` · `AC-CR14-01 → 04` · `AC-CR16-01 → 13`
**Tổng: 22 tiêu chí nghiệm thu.**

### Tiêu chí hoàn thành Phần 4

- [ ] Rà toàn bộ màn hình: không còn chỗ nào hiển thị số tiền sai chuẩn.
- [ ] Ba chỉ số Giá vốn / Giá bán / PnL nổi bật rõ rệt ở mọi nơi.
- [ ] Sinh đủ 4 biến thể file, **kiểm thử mức byte đạt cho cả 4**.
- [ ] Cùng một vai trò thì bản Excel và bản PDF giống hệt nhau về nội dung và mức che dữ liệu.
- [ ] Danh sách báo giá: cột Line nhiều giá trị hiển thị đúng, bộ lọc "có chứa" hoạt động.

***

## 5. TỔNG HỢP TIÊU CHÍ NGHIỆM THU

| Phần | Số AC | Tỷ trọng |
| --- | :---: | :---: |
| Phần 1 — Cấu hình hệ thống | 25 | 15% |
| Phần 2 — Tạo & Estimate báo giá | 60 | 37% |
| Phần 3 — Luồng trạng thái và phê duyệt | 57 | 35% |
| Phần 4 — Giao diện | 22 | 13% |
| **Tổng** | **164** | **100%** |

*(Chưa tính các AC bổ sung ở mục G và các tiêu chí kiểm thử kỹ thuật ở mục I của tài liệu nguồn.)*

***

## 6. NHỮNG ĐIỂM RỦI RO CAO NHẤT

| # | Rủi ro | Thuộc phần | Cách giảm thiểu |
| --- | --- | --- | --- |
| 1 | **Migration làm lệch con số giá vốn** của báo giá đang chạy | 1 | Đối chiếu 100% trước/sau trên bản sao dữ liệu thật, trước khi lên bản chính thức |
| 2 | **Quy tắc làm tròn đảo ngược** so với hiện tại | 2 | Ghi rõ là chủ ý; cập nhật lại bộ kiểm thử cũ thay vì coi là lỗi |
| 3 | **File export hạ cấp mức bảo đảm an toàn** | 4 | Kiểm thử mức byte cho cả 4 biến thể; cập nhật danh sách rà soát bảo mật |
| 4 | **Phân quyền chỉ chặn ở giao diện** | 3 | Kiểm thử trên nội dung API trả về, không chỉ trên màn hình |
| 5 | **Lọc danh sách theo người xem gây chậm** khi dữ liệu lớn | 3 | Bổ sung chỉ mục ngay từ đầu; đo hiệu năng với hơn 1.000 báo giá |
| 6 | **Tên hiển thị `Line / Loại hình` ghép ở nhiều nơi khác nhau** | 2 | Sinh ở một hàm dùng chung duy nhất |

***

## 7. NỢ KỸ THUẬT NÊN DỌN KÈM

| Nợ | Nên gộp vào phần |
| --- | --- |
| Tài liệu nghiệp vụ gốc (BRD) đã lỗi thời so với code | Phần 1 |
| Quy tắc làm tròn không nhất quán giữa module nhân sự và module tài chính | Phần 2 (cùng lúc với CR-05) |
| Thẻ thông báo hiển thị sai múi giờ | Phần 3 (cùng lúc với CR-13) |
| Thiếu chỉ mục trên bảng công việc | Phần 2 |
| Hai chuẩn che dữ liệu khác nhau trong cùng module | Phần 3 (cùng lúc với CR-15) |

***

*Bản đồ triển khai CR-02 — lập ngày 11/08/2026. Cập nhật khi tài liệu nguồn thay đổi.*
