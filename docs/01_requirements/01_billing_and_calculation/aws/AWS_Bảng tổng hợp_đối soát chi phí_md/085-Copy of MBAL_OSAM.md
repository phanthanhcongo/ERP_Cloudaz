# Copy of MBAL_OSAM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Copy of MBAL_OSAM`  
> **Vùng dữ liệu:** 980 dòng × 13 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | CÔNG TY TNHH QUỐC TẾ OSAM<br> <br>Địa chỉ: Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên,<br>Quận Cầu Giấy, Thành phố Hà Nội<br> <br>Điện thoại: 024 2216 4848<br> <br>W: osam.io |  |  |  |  |  |  |  |  |  |
| 7 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 10 | 1 | 571746298940 | 2021-11-01 | 1702.11 | 22800 | `=round(D10*E10,0)` |  |  |  |  |  |  |  |
| 11 |  | Discount (3,5%) |  | `=D10*3.5%` |  |  |  |  |  |  |  |  |  |
| 12 |  | Tổng cộng |  | `=D10-D11` | 22800 | `=round(D12*E12,0)` |  |  |  |  |  |  |  |
| 13 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D12*0.06` |  | `=F12*0.06` |  |  |  |  |  |  |  |
| 14 |  | Tổng số tiền phải thanh toán |  | `=D12+D13` | 22800 | `=F12+F13` |  |  |  |  |  |  |  |
| 18 |  |  |  | Hà Nội, ngày 06 tháng 12 năm 2021 |  |  |  |  |  |  |  |  |  |
| 19 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 24 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 29 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 32 | 1 | 571746298940 | 2021-12-01 | 2842.422 | 23070 | `=round(D32*E32,0)` |  |  |  |  |  |  |  |
| 33 |  | Discount (3,5%) |  | `=D32*3.5%` |  |  |  |  |  |  |  |  |  |
| 34 |  | Tổng cộng |  | `=D32-D33` | 23070 | `=round(D34*E34,0)` |  |  |  |  |  |  |  |
| 35 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D34*0.06` |  | `=F34*0.06` |  |  |  |  |  |  |  |
| 36 |  | Tổng số tiền phải thanh toán |  | `=D34+D35` | 23070 | `=F34+F35` |  |  |  |  |  |  |  |
| 40 |  |  |  | Hà Nội, ngày 24 tháng 12 năm 2021 |  |  |  |  |  |  |  |  |  |
| 41 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 46 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 50 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 53 | 1 | 571746298940 | 12/2021 (còn lại) | `=3962.95-D32` | 23070 | `=round(D53*E53,0)` |  |  |  |  |  |  |  |
| 54 |  | Discount (3,5%) |  | `=D53*3.5%` |  |  |  |  |  |  |  |  |  |
| 55 |  | Tổng cộng |  | `=D53-D54` | 23070 | `=round(D55*E55,0)` |  |  |  |  |  |  |  |
| 56 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D55*0.06` |  | `=F55*0.06` |  |  |  |  |  |  |  |
| 57 |  | Tổng số tiền phải thanh toán |  | `=D55+D56` | 23070 | `=F55+F56` | 26442559.6600000001 |  | `=F57+F36` |  |  |  |  |
| 61 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2022 |  |  |  |  |  |  |  |  |  |
| 62 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 67 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 70 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 73 | 1 | 571746298940 | 2022-01-01 | 4407.45 | 22780 | `=round(D73*E73,0)` |  |  |  |  |  |  |  |
| 74 |  | Discount (3,5%) |  | `=D73*3.5%` |  |  |  |  |  |  |  |  |  |
| 75 |  | Tổng cộng |  | `=D73-D74` | 22780 | `=round(D75*E75,0)` |  |  |  |  |  |  |  |
| 76 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D75*0.06` |  | `=F75*0.06` |  |  |  |  |  |  |  |
| 77 |  | Tổng số tiền phải thanh toán |  | `=D75+D76` | 22780 | `=F75+F76` | 102700910.0600000024 |  |  |  |  |  |  |
| 81 |  |  |  | Hà Nội, ngày 09 tháng 02 năm 2022 |  |  |  |  |  |  |  |  |  |
| 82 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 87 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 91 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  |
| 94 | 1 | 571746298940 | 2022-02-01 | 4256.36 | 22950 | `=round(D94*E94,0)` |  |  |  | 571746298940 | 2022-02-01 | 4256.36 | 22950 |
| 95 |  | Discount (3,5%) |  | `=D94*3.5%` |  |  |  |  |  | Discount (3,5%) |  | `=L94*3.5%` |  |
| 96 |  | Tổng cộng |  | `=D94-D95` | 22950 | `=round(D96*E96,0)` |  |  |  | Tổng cộng |  | `=L94-L95` | 22950 |
| 97 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D96*0.06` |  | `=F96*0.06` |  |  |  |  |  | `=L96*0.06` |  |
| 98 |  | Tổng số tiền phải thanh toán |  | `=D96+D97` | 22950 | `=F96+F97` | 99920413.4599999934 |  |  | Tổng số tiền phải thanh toán |  | `=L96+L97` | 22950 |
| 102 |  |  |  | Hà Nội, ngày 07 tháng 03 năm 2022 |  |  |  |  |  |  |  |  |  |
| 103 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 108 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 111 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 113 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 114 | 1 | 571746298940 | 2022-03-01 | 5357.25 | 22980 | `=round(D114*E114,0)` |  |  |  |  |  |  |  |
| 115 |  | Discount (3,5%) |  | `=D114*3.5%` |  |  |  |  |  |  |  |  |  |
| 116 |  | Tổng cộng |  | `=D114-D115` | 22980 | `=round(D116*E116,0)` |  |  |  |  |  |  |  |
| 117 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D116*0.06` |  | `=F116*0.06` |  |  |  |  |  |  |  |
| 118 |  | Tổng số tiền phải thanh toán |  | `=D116+D117` | 22980 | `=F116+F117` | 125928815.1400000006 |  |  |  |  |  |  |
| 120 |  |  |  | Hà Nội, ngày 06 tháng 04 năm 2022 |  |  |  |  |  |  |  |  |  |
| 121 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 126 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 129 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 132 | 1 | 571746298940 | 2022-04-01 | 6663.43 | 23095 | `=round(D132*E132,0)` |  |  |  |  |  |  |  |
| 133 |  | Discount (3,5%) |  | `=D132*3.5%` |  |  |  |  |  |  |  |  |  |
| 134 |  | Tổng cộng |  | `=D132-D133` | 23095 | `=round(D134*E134,0)` |  |  |  |  |  |  |  |
| 135 | Thuế nhà thầu (Bên OSAM đóng hộ) |  |  | `=D134*0.06` |  | `=F134*0.06` |  |  |  |  |  |  |  |
| 136 |  | Tổng số tiền phải thanh toán |  | `=D134+D135` | 23095 | `=F134+F135` |  |  |  |  |  |  |  |
| 138 |  |  |  | Hà Nội, ngày 06 tháng 05 năm 2022 |  |  |  |  |  |  |  |  |  |
| 139 |  |  |  |                                Người lập |  |  |  |  |  |  |  |  |  |
| 144 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 147 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 149 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 150 | 1 | 571746298940 | 2022-05-01 | 8782 |  |  |  |  |  |  |  |  |  |
| 151 |  | Discount (3,5%) |  | `=D150*3.5%` |  |  |  |  |  |  |  |  |  |
| 152 |  | Tổng cộng |  | `=D150-D151` |  |  |  |  |  |  |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D152*0.06` |  |  |  |  |  |  |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  | `=round(D152+D153,2)` | 23330 | `=D154*E154` |  |  |  |  |  |  |  |
| 156 |  |  |  | Hà Nội, ngày 10 tháng 06 năm 2022 |  |  |  |  |  |  |  |  |  |
| 157 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 162 |  |  |  |                                     Nguyễn Hải Anh |  |  |  |  |  |  |  |  |  |
| 165 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 167 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 168 | 1 | 571746298940 | 2022-06-01 | 12486.45 |  |  |  |  |  |  |  |  |  |
| 169 |  | Discount (3,5%) |  | `=D168*3.5%` |  |  |  |  |  |  |  |  |  |
| 170 |  | Tổng cộng |  | `=D168-D169` |  |  |  |  |  |  |  |  |  |
| 171 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D170*0.06` |  |  |  |  |  |  |  |  |  |
| 172 |  | Tổng số tiền phải thanh toán |  | `=round(D170+D171,2)` | 23415 | `=D172*E172` |  |  |  |  |  |  |  |
| 174 |  |  |  | Hà Nội, ngày 15 tháng 07 năm 2022 |  |  |  |  |  |  |  |  |  |
| 175 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 180 |  |  |  |                                     Nguyễn Hải Anh |  |  |  |  |  |  |  |  |  |
| 182 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 184 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 185 | 1 | 571746298940 | 2022-07-01 | 11357.9 |  |  |  |  |  |  |  |  |  |
| 186 |  | Discount (3,5%) |  | `=D185*3.5%` |  |  |  |  |  |  |  |  |  |
| 187 |  | Tổng cộng |  | `=D185-D186` |  |  |  |  |  |  |  |  |  |
| 188 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D187*0.06` |  |  |  |  |  |  |  |  |  |
| 189 |  | Tổng số tiền phải thanh toán |  | `=round(D187+D188,2)` | 23480 | `=D189*E189` |  |  |  |  |  |  |  |
| 191 |  |  |  | Hà Nội, ngày 08 tháng 08 năm 2022 |  |  |  |  |  |  |  |  |  |
| 192 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 197 |  |  |  |                                     Nguyễn Hải Anh |  |  |  |  |  |  |  |  |  |
| 198 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 201 | 1 | 571746298940 | 2022-08-01 | 21296.67 |  |  |  |  |  |  |  |  |  |
| 202 |  | Discount (3,5%) |  | `=D201*3.5%` |  |  |  |  |  |  |  |  |  |
| 203 |  | Tổng cộng |  | `=D201-D202` |  |  |  |  |  |  |  |  |  |
| 204 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D203*0.06` |  |  |  |  |  |  |  |  |  |
| 205 |  | Tổng số tiền phải thanh toán |  | `=round(D203+D204,2)` | 23600 | `=D205*E205` |  |  |  |  |  |  |  |
| 207 |  |  |  | Hà Nội, ngày 12 tháng 09 năm 2022 |  |  |  |  |  |  |  |  |  |
| 208 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 214 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 219 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 221 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 222 | Phí phần mềm | 571746298940 | 2022-09-01 | 24153.47 |  |  |  |  |  |  |  |  |  |
| 223 |  | Phí thanh toán |  | `=D222*6%` |  |  |  |  |  |  |  |  |  |
| 224 | Cộng |  |  | `=SUM(D222:D223)` |  |  |  |  |  |  |  |  |  |
| 225 | Discount (3,5%) |  |  | `=D224*0.035` |  |  |  |  |  |  |  |  |  |
| 226 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D224-D225,2)` | 24010 | `=D226*E226` |  |  |  |  |  |  |  |
| 228 |  |  |  | Hà Nội, ngày 07 tháng 10 năm 2022 |  |  |  |  |  |  |  |  |  |
| 229 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 235 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 238 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 240 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 241 | Phí phần mềm | 571746298940 | 2022-10-01 | 24202.47 |  |  |  |  |  |  |  |  |  |
| 242 |  | Phí thanh toán |  | `=D241*6%` |  |  |  |  |  |  |  |  |  |
| 243 | Cộng |  |  | `=SUM(D241:D242)` |  |  |  |  |  |  |  |  |  |
| 244 | Discount (3,5%) |  |  | `=D243*0.035` |  |  |  |  |  |  |  |  |  |
| 245 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D243-D244,2)` | 24877 | `=D245*E245` |  |  |  |  |  |  |  |
| 247 |  |  |  | Hà Nội, ngày 07 tháng 11 năm 2022 |  |  |  |  |  |  |  |  |  |
| 248 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 254 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 256 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 258 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 259 | Phí phần mềm | 571746298940 | 2022-11-01 | 19495.86 |  |  |  |  |  |  |  |  |  |
| 260 |  | Phí thanh toán |  | `=D259*6%` |  |  |  |  |  |  |  |  |  |
| 261 | Cộng |  |  | `=SUM(D259:D260)` |  |  |  |  |  |  |  |  |  |
| 262 | Discount (3,5%) |  |  | `=D261*0.035` |  |  |  |  |  |  |  |  |  |
| 263 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D261-D262,2)` | 24795 | `=D263*E263` |  |  |  |  |  |  |  |
| 265 |  |  |  | Hà Nội, ngày 06 tháng 12 năm 2022 |  |  |  |  |  |  |  |  |  |
| 266 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 272 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 275 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 277 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 278 | Phí phần mềm | 571746298940 | 2022-12-01 | 5802.08 |  |  |  |  |  |  |  |  |  |
| 279 |  | Phí thanh toán |  | `=D278*6%` |  |  |  |  |  |  |  |  |  |
| 280 | Cộng |  |  | `=SUM(D278:D279)` |  |  |  |  |  |  |  |  |  |
| 281 | Discount (3,5%) |  |  | `=D280*0.035` |  |  |  |  |  |  |  |  |  |
| 282 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D280-D281,2)` | 23760 | `=D282*E282` |  |  |  |  |  |  |  |
| 284 |  |  |  | Hà Nội, ngày 05 tháng 01 năm 2023 |  |  |  |  |  |  |  |  |  |
| 285 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 291 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 293 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 295 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 296 | Phí phần mềm | 571746298940 | 2023-01-01 | 18060.37 |  |  |  |  |  |  |  |  |  |
| 297 |  | Phí thanh toán |  | `=D296*6%` |  |  |  |  |  |  |  |  |  |
| 298 | Cộng |  |  | `=SUM(D296:D297)` |  |  |  |  |  |  |  |  |  |
| 299 | Discount |  |  | `=622.786` |  |  |  |  |  |  |  |  |  |
| 300 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D298-D299,2)` | 23622 | `=D300*E300` |  |  |  |  |  |  |  |
| 302 |  |  |  | Hà Nội, ngày 07 tháng 02 năm 2023 |  |  |  |  |  |  |  |  |  |
| 303 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 309 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 311 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 313 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 314 | Phí phần mềm | 571746298940 | 2023-02-01 | 17078.76 |  |  |  |  |  |  |  |  |  |
| 315 |  | Phí thanh toán |  | `=D314*6%` |  |  |  |  |  |  |  |  |  |
| 316 | Cộng |  |  | `=SUM(D314:D315)` |  |  |  |  |  |  |  |  |  |
| 317 | Discount |  |  | `=D316*3.5%` |  |  |  |  |  |  |  |  |  |
| 318 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D316-D317,2)` | 23955 | `=D318*E318` |  |  |  |  |  |  |  |
| 320 |  |  |  | Hà Nội, ngày 08 tháng 03 năm 2023 |  |  |  |  |  |  |  |  |  |
| 321 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 327 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 329 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 331 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 332 | Phí phần mềm | 571746298940 | 2023-03-01 | 19888.08 |  |  |  |  |  |  |  |  |  |
| 333 |  | 022611242021 |  | 40.03 |  |  |  |  |  |  |  |  |  |
| 334 |  | Phí thanh toán |  | `=round((D332+D333)*6%,2)` |  |  |  |  |  |  |  |  |  |
| 335 | Cộng |  |  | `=SUM(D332:D334)` |  |  |  |  |  |  |  |  |  |
| 336 | Discount |  |  | `=round(D335*3.5%,2)` |  |  |  |  |  |  |  |  |  |
| 337 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D335-D336,2)` | 23632 | `=D337*E337` |  |  |  |  |  |  |  |
| 339 |  |  |  | Hà Nội, ngày 11 tháng 04 năm 2023 |  |  |  |  |  |  |  |  |  |
| 340 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 347 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 350 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 352 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 353 | Phí phần mềm | 571746298940 | 2023-04-01 | 19433.93 |  |  |  |  |  |  |  |  |  |
| 354 |  | 022611242021 |  | 400.95 |  |  |  |  |  |  |  |  |  |
| 355 |  | Phí thanh toán |  | `=round((D353+D354)*6%,2)` |  |  |  |  |  |  |  |  |  |
| 356 | Cộng |  |  | `=SUM(D353:D355)` |  |  |  |  |  |  |  |  |  |
| 357 | Discount |  |  | `=round(D356*3.5%,2)` |  |  |  |  |  |  |  |  |  |
| 358 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D356-D357,2)` | 23645 | `=D358*E358` |  |  |  |  |  |  |  |
| 360 |  |  |  | Hà Nội, ngày 09 tháng 05 năm 2023 |  |  |  |  |  |  |  |  |  |
| 361 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 368 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 370 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 372 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 373 | Phí phần mềm | 571746298940 | 2023-05-01 | 9333.79 |  |  |  |  |  |  |  |  |  |
| 374 |  | 022611242021 |  | 8954.7 |  |  |  |  |  |  |  |  |  |
| 375 |  | Phí thanh toán |  | `=round((D373+D374)*6%,2)` |  |  |  |  |  |  |  |  |  |
| 376 | Cộng |  |  | `=SUM(D373:D375)` |  |  |  |  |  |  |  |  |  |
| 377 | Discount |  |  | `=round(D376*3.5%,2)` |  |  |  |  |  |  |  |  |  |
| 378 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D376-D377,2)` | 23662 | `=D378*E378` |  |  |  |  |  |  |  |
| 380 |  |  |  | Hà Nội, ngày 06 tháng 06 năm 2023 |  |  |  |  |  |  |  |  |  |
| 381 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 388 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 390 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 392 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 393 | Phí phần mềm | 022611242021 | 2023-06-01 | 22945.17 |  |  |  |  |  |  |  |  |  |
| 394 |  | Phí thanh toán |  | `=round(D393*6%,2)` |  |  |  |  |  |  |  |  |  |
| 395 | Cộng |  |  | `=SUM(D393:D394)` |  |  |  |  |  |  |  |  |  |
| 396 | Discount |  |  | `=round(D395*3.5%,2)` |  |  |  |  |  |  |  |  |  |
| 397 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D395-D396,2)` | 23762 | `=D397*E397` |  |  |  |  |  |  |  |
| 399 |  |  |  | Hà Nội, ngày 06 tháng 07 năm 2023 |  |  |  |  |  |  |  |  |  |
| 400 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 407 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 409 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 411 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 412 | Phí phần mềm | 022611242021 | 2023-07-01 | 26059.52 |  |  |  |  |  |  |  |  |  |
| 413 |  | Phí trước chiết khấu |  | `=round(D412*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 414 |  | Chiết khấu |  | `=round(D413*5%,2)` |  |  |  |  |  |  |  |  |  |
| 415 |  | Tổng số tiền phải thanh toán |  | `=D413-D414` | 23860 | `=D415*E415` |  |  |  |  |  |  |  |
| 417 |  |  |  | Hà Nội, ngày 23 tháng 08 năm 2023 |  |  |  |  |  |  |  |  |  |
| 418 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 425 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 427 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 429 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 430 | Phí phần mềm | 022611242021 | 2023-08-01 | 27768.31 |  |  |  |  |  |  |  |  |  |
| 431 |  | Phí trước chiết khấu |  | `=round(D430*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 432 |  | Chiết khấu |  | `=round(D431*5%,2)` |  |  |  |  |  |  |  |  |  |
| 433 |  | Tổng số tiền phải thanh toán |  | `=D431-D432` | 24260 | `=D433*E433` |  |  |  |  |  |  |  |
| 435 |  |  |  | Hà Nội, ngày 07 tháng 09 năm 2023 |  |  |  |  |  |  |  |  |  |
| 436 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 443 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 446 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 448 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 449 | Phí phần mềm | 022611242021 | 2023-09-01 | 25486.97 |  |  |  |  |  |  |  |  |  |
| 450 |  | Phí trước chiết khấu |  | `=round(D449*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 451 |  | Chiết khấu |  | `=round(D450*5%,2)` |  |  |  |  |  |  |  |  |  |
| 452 |  | Tổng số tiền phải thanh toán |  | `=D450-D451` | 24470 | `=D452*E452` |  |  |  |  |  |  |  |
| 454 |  |  |  | Hà Nội, ngày 05 tháng 10 năm 2023 |  |  |  |  |  |  |  |  |  |
| 455 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 462 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 465 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 467 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 468 | Phí phần mềm | 022611242021 | 2023-10-01 | 18378.17 |  |  |  |  |  |  |  |  |  |
| 469 |  | Phí trước chiết khấu |  | `=round(D468*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 470 |  | Chiết khấu |  | `=round(D469*5%,2)` |  |  |  |  |  |  |  |  |  |
| 471 |  | Tổng số tiền phải thanh toán |  | `=D469-D470` | 24729 | `=D471*E471` |  |  |  |  |  |  |  |
| 473 |  |  |  | Hà Nội, ngày 06 tháng 11 năm 2023 |  |  |  |  |  |  |  |  |  |
| 474 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 481 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 483 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 485 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 486 | Phí phần mềm | 022611242021 | 2023-11-01 | 7082.55 |  |  |  |  |  |  |  |  |  |
| 487 |  | Phí trước chiết khấu |  | `=round(D486*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 488 |  | Chiết khấu |  | `=round(D487*5%,2)` |  |  |  |  |  |  |  |  |  |
| 489 |  | Tổng số tiền phải thanh toán |  | `=D487-D488` | 24427 | `=D489*E489` |  |  |  |  |  |  |  |
| 491 |  |  |  | Hà Nội, ngày 08 tháng 12 năm 2023 |  |  |  |  |  |  |  |  |  |
| 492 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 499 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 501 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 503 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 504 | Phí phần mềm | 022611242021 | 2023-12-01 | 15519.85 |  |  |  |  |  |  |  |  |  |
| 505 |  | Phí trước chiết khấu |  | `=round(D504*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 506 |  | Chiết khấu |  | `=round(D505*5%,2)` |  |  |  |  |  |  |  |  |  |
| 507 |  | Tổng số tiền phải thanh toán |  | `=D505-D506` | 24450 | `=D507*E507` |  |  |  |  |  |  |  |
| 509 |  |  |  | Hà Nội, ngày 03 tháng 01 năm 2024 |  |  |  |  |  |  |  |  |  |
| 510 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 517 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 521 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 523 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 524 | Phí phần mềm | 022611242021 | 2024-01-01 | 16193.81 |  |  |  |  |  |  |  |  |  |
| 525 |  | Phí trước chiết khấu |  | `=round(D524*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 526 |  | Chiết khấu |  | `=round(D525*5%,2)` |  |  |  |  |  |  |  |  |  |
| 527 |  | Tổng số tiền phải thanh toán |  | `=D525-D526` | 24578 | `=D527*E527` |  |  |  |  |  |  |  |
| 529 |  |  |  | Hà Nội, ngày 05 tháng 02 năm 2024 |  |  |  |  |  |  |  |  |  |
| 530 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 537 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 539 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 541 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 542 | Phí phần mềm | 022611242021 | 2024-02-01 | 16338.9 |  |  |  |  |  |  |  |  |  |
| 543 |  | Phí trước chiết khấu |  | `=round(D542*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 544 |  | Chiết khấu |  | `=round(D543*5%,2)` |  |  |  |  |  |  |  |  |  |
| 545 |  | Tổng số tiền phải thanh toán |  | `=D543-D544` | 24802 | `=D545*E545` |  |  |  |  |  |  |  |
| 547 |  |  |  | Hà Nội, ngày 07 tháng 03 năm 2024 |  |  |  |  |  |  |  |  |  |
| 548 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 555 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 559 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 561 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 562 | Phí phần mềm | 022611242021 | 2024-03-01 | 19246.73 |  |  |  |  |  |  |  |  |  |
| 563 |  | Phí trước chiết khấu |  | `=round(D562*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 564 |  | Chiết khấu |  | `=round(D563*5%,2)` |  |  |  |  |  |  |  |  |  |
| 565 |  | Tổng số tiền phải thanh toán |  | `=D563-D564` | 24972 | `=D565*E565` |  |  |  |  |  |  |  |
| 567 |  |  |  | Hà Nội, ngày 08 tháng 04 năm 2024 |  |  |  |  |  |  |  |  |  |
| 568 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 575 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 578 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 580 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 581 | Phí phần mềm | 022611242021 | 2024-04-01 | 18869.62 |  |  |  |  |  |  |  |  |  |
| 582 |  | Phí trước chiết khấu |  | `=round(D581*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 583 |  | Chiết khấu |  | `=round(D582*5%,2)` |  |  |  |  |  |  |  |  |  |
| 584 |  | Tổng số tiền phải thanh toán |  | `=D582-D583` | 25458 | `=D584*E584` |  |  |  |  |  |  |  |
| 586 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2024 |  |  |  |  |  |  |  |  |  |
| 587 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 594 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 596 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 598 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 599 | Phí phần mềm | 022611242021 | 2024-05-01 | 19888.34 |  |  |  |  |  |  |  |  |  |
| 600 |  | Phí trước chiết khấu |  | `=round(D599*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 601 |  | Chiết khấu |  | `=round(D600*5%,2)` |  |  |  |  |  |  |  |  |  |
| 602 |  | Tổng số tiền phải thanh toán |  | `=D600-D601` | 25474 | `=D602*E602` |  |  |  |  |  |  |  |
| 604 |  |  |  | Hà Nội, ngày 06 tháng 06 năm 2024 |  |  |  |  |  |  |  |  |  |
| 605 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 612 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 615 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 617 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 618 | Phí phần mềm | 022611242021 | 2024-06-01 | 19445.35 |  |  |  |  |  |  |  |  |  |
| 619 |  | Phí trước chiết khấu |  | `=round(D618*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 620 |  | Chiết khấu |  | `=round(D619*5%,2)` |  |  |  |  |  |  |  |  |  |
| 621 | Thành tiền |  |  | `=D619-D620` | 25473 | `=D621*E621` |  |  |  |  |  |  |  |
| 622 | Thuế GTGT (10%) |  |  |  |  | `=round(F621*10%,0)` |  |  |  |  |  |  |  |
| 623 | Tổng số tiền phải thanh toán |  |  |  |  | `=F621+F622` |  |  |  |  |  |  |  |
| 626 |  |  |  | Hà Nội, ngày 16 tháng 09 năm 2024 |  |  |  |  |  |  |  |  |  |
| 627 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 634 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 637 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 639 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 640 | Phí phần mềm | 022611242021 | 2024-07-01 | 20714.43 |  |  |  |  |  |  |  |  |  |
| 641 |  | Phí trước chiết khấu |  | `=round(D640*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 642 |  | Chiết khấu |  | `=round(D641*5%,2)` |  |  |  |  |  |  |  |  |  |
| 643 | Thành tiền |  |  | `=D641-D642` | 25405 | `=D643*E643` |  |  |  |  |  |  |  |
| 644 | Thuế GTGT (10%) |  |  |  |  | `=round(F643*10%,0)` |  |  |  |  |  |  |  |
| 645 | Tổng số tiền phải thanh toán |  |  |  |  | `=F643+F644` |  |  |  |  |  |  |  |
| 649 |  |  |  | Hà Nội, ngày 16 tháng 09 năm 2024 |  |  |  |  |  |  |  |  |  |
| 650 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 657 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 660 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 662 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 663 | Phí phần mềm | 022611242021 | 2024-08-01 | 21802.72 |  |  |  |  |  |  |  |  |  |
| 664 |  | Phí trước chiết khấu |  | `=round(D663*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 665 |  | Chiết khấu |  | `=round(D664*5%,2)` |  |  |  |  |  |  |  |  |  |
| 666 | Thành tiền |  |  | `=D664-D665` | 25080 | `=D666*E666` |  |  |  |  |  |  |  |
| 667 | Thuế GTGT (10%) |  |  |  |  | 54679567 |  |  |  |  |  |  |  |
| 668 | Tổng số tiền phải thanh toán |  |  |  |  | `=F666+F667` |  |  |  |  |  |  |  |
| 672 |  |  |  | Hà Nội, ngày 16 tháng 09 năm 2024 |  |  |  |  |  |  |  |  |  |
| 673 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 680 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 683 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 685 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 686 | Phí phần mềm | 022611242021 | 2024-09-01 | 21398.31 |  |  |  |  |  |  |  |  |  |
| 687 |  | Phí trước chiết khấu |  | `=round(D686*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 688 |  | Chiết khấu |  | `=round(D687*5%,2)` |  |  |  |  |  |  |  |  |  |
| 689 | Thành tiền |  |  | `=D687-D688` | 24733 | `=D689*E689` |  |  |  |  |  |  |  |
| 690 | Thuế GTGT (10%) |  |  |  |  | `=round(F689*10%,0)` |  |  |  |  |  |  |  |
| 691 | Tổng số tiền phải thanh toán |  |  |  |  | `=F689+F690` |  |  |  |  |  |  |  |
| 695 |  |  |  | Hà Nội, ngày 08 tháng 10 năm 2024 |  |  |  |  |  |  |  |  |  |
| 696 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 703 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 706 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 708 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 709 | Phí phần mềm | 022611242021 | 2024-10-01 | 22128.94 |  |  |  |  |  |  |  |  |  |
| 710 |  | Phí trước chiết khấu |  | `=round(D709*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 711 |  | Chiết khấu |  | `=round(D710*5%,2)` |  |  |  |  |  |  |  |  |  |
| 712 | Thành tiền |  |  | `=D710-D711` | 25445 | `=D712*E712` |  |  |  |  |  |  |  |
| 713 | Thuế GTGT (10%) |  |  |  |  | `=round(F712*10%,0)` |  |  |  |  |  |  |  |
| 714 | Tổng số tiền phải thanh toán |  |  |  |  | `=F712+F713` |  |  |  |  |  |  |  |
| 718 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2024 |  |  |  |  |  |  |  |  |  |
| 719 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 726 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 729 | TỔNG HỢP CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 731 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 732 | Phí phần mềm | 022611242021 | 2024-11-01 | 19081.25 |  |  |  |  |  |  |  |  |  |
| 733 |  | Phí trước chiết khấu |  | `=round(D732*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 734 |  | Chiết khấu |  | `=round(D733*5%,2)` |  |  |  |  |  |  |  |  |  |
| 735 | Thành tiền |  |  | `=D733-D734` | 25463 | `=D735*E735` |  |  |  |  |  |  |  |
| 736 | Thuế GTGT (10%) |  |  |  |  | `=round(F735*10%,0)` |  |  |  |  |  |  |  |
| 737 | Tổng số tiền phải thanh toán |  |  |  |  | `=F735+F736` |  |  |  |  |  |  |  |
| 741 |  |  |  | Hà Nội, ngày 02 tháng 12 năm 2024 |  |  |  |  |  |  |  |  |  |
| 742 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 749 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 752 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 754 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 755 | Phí điện toán đám mây | 022611242021 | 2024-12-01 | 20703.12 |  |  |  |  |  |  |  |  |  |
| 756 |  | Phí trước chiết khấu |  | `=round(D755*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 757 |  | Chiết khấu |  | `=round(D756*5%,2)` |  |  |  |  |  |  |  |  |  |
| 758 | Thành tiền |  |  | `=D756-D757` | 25551 | `=D758*E758` |  |  |  |  |  |  |  |
| 759 | Thuế GTGT (10%) |  |  |  |  | `=round(F758*10%,0)` |  |  |  |  |  |  |  |
| 760 | Tổng số tiền phải thanh toán |  |  |  |  | `=F758+F759` |  |  |  |  |  |  |  |
| 764 |  |  |  | Hà Nội, ngày 03 tháng 01 năm 2025 |  |  |  |  |  |  |  |  |  |
| 765 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 772 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 776 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 778 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 779 | Phí điện toán đám mây | 022611242021 | 2025-01-01 | 21906.18 |  |  |  |  |  |  |  |  |  |
| 780 |  | Phí trước chiết khấu |  | `=round(D779*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 781 |  | Chiết khấu |  | `=round(D780*5%,2)` |  |  |  |  |  |  |  |  |  |
| 782 |  | Tổng cộng |  | `=D780-D781` |  |  |  |  |  |  |  |  |  |
| 783 |  | Credit |  | 5000 |  |  |  |  |  |  |  |  |  |
| 784 | Thành tiền |  |  | `=D782-D783` | 25295 | `=D784*E784` |  |  |  |  |  |  |  |
| 785 | Thuế GTGT (10%) |  |  |  |  | `=round(F784*10%,0)` |  |  |  |  |  |  |  |
| 786 | Tổng số tiền phải thanh toán |  |  |  |  | `=F784+F785` |  |  |  |  |  |  |  |
| 789 |  |  |  | Hà Nội, ngày 08 tháng 02 năm 2025 |  |  |  |  |  |  |  |  |  |
| 790 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 797 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 800 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 802 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 803 | Phí điện toán đám mây | 022611242021 | 2025-02-01 | 19942.31 |  |  |  |  |  |  |  |  |  |
| 804 |  | Phí trước chiết khấu |  | `=round(D803*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 805 |  | Chiết khấu |  | `=round(D804*5%,2)` |  |  |  |  |  |  |  |  |  |
| 806 | Thành tiền |  |  | `=D804-D805` | 25735 | `=D806*E806` |  |  |  |  |  |  |  |
| 807 | Thuế GTGT (10%) |  |  |  |  | `=round(F806*10%,0)` |  |  |  |  |  |  |  |
| 808 | Tổng số tiền phải thanh toán |  |  |  |  | `=F806+F807` |  |  |  |  |  |  |  |
| 811 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2025 |  |  |  |  |  |  |  |  |  |
| 812 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 819 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 821 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 823 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 824 | Phí điện toán đám mây | 022611242021 | 2025-03-01 | 22792.52 |  |  |  |  |  |  |  |  |  |
| 825 |  | Phí trước chiết khấu |  | `=round(D824*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 826 |  | Chiết khấu |  | `=round(D825*5%,2)` |  |  |  |  |  |  |  |  |  |
| 827 | Thành tiền |  |  | `=D825-D826` | 25775 | `=D827*E827` |  |  |  |  |  |  |  |
| 828 | Thuế GTGT (10%) |  |  |  |  | `=round(F827*10%,0)` |  |  |  |  |  |  |  |
| 829 | Tổng số tiền phải thanh toán |  |  |  |  | `=F827+F828` |  |  |  |  |  |  |  |
| 832 |  |  |  | Hà Nội, ngày 09 tháng 04 năm 2025 |  |  |  |  |  |  |  |  |  |
| 833 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 841 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 844 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 846 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 847 | Phí điện toán đám mây | 022611242021 | 2025-04-01 | 23124.72 |  |  |  |  |  |  |  |  |  |
| 848 |  | Phí trước chiết khấu |  | `=round(D847*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 849 |  | Chiết khấu |  | `=round(D848*5%,2)` |  |  |  |  |  |  |  |  |  |
| 850 | Thành tiền |  |  | `=D848-D849` | 26190 | `=D850*E850` |  |  |  |  |  |  |  |
| 851 | Thuế GTGT (10%) |  |  |  |  | `=round(F850*10%,0)` |  |  |  |  |  |  |  |
| 852 | Tổng số tiền phải thanh toán |  |  |  |  | `=F850+F851` |  |  |  |  |  |  |  |
| 855 |  |  |  | Hà Nội, ngày 06 tháng 05 năm 2025 |  |  |  |  |  |  |  |  |  |
| 856 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 864 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 868 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 870 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 871 | Phí điện toán đám mây | 022611242021 | 2025-05-01 | 24552.38 |  |  |  |  |  |  |  |  |  |
| 872 |  | Phí trước chiết khấu |  | `=round(D871*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 873 |  | Chiết khấu |  | `=round(D872*5%,2)` |  |  |  |  |  |  |  |  |  |
| 874 | Thành tiền |  |  | `=D872-D873` | 26225 | `=D874*E874` |  |  |  |  |  |  |  |
| 875 | Thuế GTGT (10%) |  |  |  |  | `=round(F874*10%,0)` |  |  |  |  |  |  |  |
| 876 | Tổng số tiền phải thanh toán |  |  |  |  | `=F874+F875` |  |  |  |  |  |  |  |
| 879 |  |  |  | Hà Nội, ngày 02 tháng 06 năm 2025 |  |  |  |  |  |  |  |  |  |
| 880 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 888 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 890 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 892 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 893 | Phí điện toán đám mây | 022611242021 | 2025-06-01 | 26175.15 |  |  |  |  |  |  |  |  |  |
| 894 |  | Phí trước chiết khấu |  | `=round(D893*(1+5.26%),2)` |  |  |  |  |  |  |  |  |  |
| 895 |  | Chiết khấu |  | `=round(D894*5%,2)` |  |  |  |  |  |  |  |  |  |
| 896 | Thành tiền |  |  | `=D894-D895` | 26300 | `=D896*E896` |  |  |  |  |  |  |  |
| 897 | Thuế GTGT (10%) |  |  |  |  | `=round(F896*10%,0)` |  |  |  |  |  |  |  |
| 898 | Tổng số tiền phải thanh toán |  |  |  |  | `=F896+F897` |  |  |  |  |  |  |  |
| 901 |  |  |  | Hà Nội, ngày 03 tháng 07 năm 2025 |  |  |  |  |  |  |  |  |  |
| 902 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 910 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 913 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 915 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền | Hoá đơn đã xuất | Chênh lệch |  |  |  |  |  |
| 916 | Phí điện toán đám mây | 022611242021 | 2025-07-01 | 25455.79 |  |  |  |  |  | Tháng 07/2025 | Tỷ lệ phí dịch vụ 10% (a) | Tỷ lệ phí dịch vụ 5.26% (b) | Chênh lệch (a-b) |
| 917 |  | Phí trước chiết khấu |  | `=round(D916*(1+5.26%),2)` |  |  |  |  |  | Billing AWS (USD) | 25455.79 | 25455.79 | `=K917-L917` |
| 918 |  | Chiết khấu |  | `=round(D917*5%,2)` |  |  |  |  |  | Phí trước chiết khấu | `=round(K917*(1+10%),2)` | `=round(L917*(1+5.26%),2)` | `=K918-L918` |
| 919 | Thành tiền |  |  | `=D917-D918` | 26382 | `=D919*E919` | 701795496.6000000238 | `=G919-F919` |  | Chiết khấu | `=round(K918*5%,2)` | `=round(L918*5%,2)` | `=K919-L919` |
| 920 | Thuế GTGT (10%) |  |  |  |  | `=round(F919*10%,0)` | 70179550 | `=G920-F920` |  | Tổng cộng | `=K918-K919` | `=L918-L919` | `=K920-L920` |
| 921 | Tổng số tiền phải thanh toán |  |  |  |  | `=F919+F920` | 771975046.6000000238 | `=G921-F921` |  | Tỷ giá  | 26382 | 26382 | `=K921-L921` |
| 922 |  |  |  |  |  |  |  |  |  | Thành tiền | `=K920*K921` | `=L920*L921` | `=K922-L922` |
| 923 |  |  |  |  |  |  |  |  |  | Thuế GTGT (10%) | `=round(K922*10%,0)` | `=round(L922*10%,0)` | `=K923-L923` |
| 924 |  |  |  | Hà Nội, ngày 29 tháng 09 năm 2025 |  |  |  | Đơn giá: 671,554,338 ₫ ; Thành tiền: 671,554,338 ₫ ; Tiền thuế: 67,155,434 ₫ ; Trị giá thanh toán: 738,709,772 ₫ |  | Tổng thanh toán | `=K922+K923` | `=L922+L923` | `=K924-L924` |
| 925 |  |  |  |                                         Người lập |  |  |  | Đơn giá: 701,795,497 ₫ ; Thành tiền: 701,795,497 ₫ ; Tiền thuế: 70,179,550 ₫ ; Trị giá thanh toán: 771,975,047 ₫ |  |  |  |  |  |
| 927 |  |  |  |  |  |  |  |  |  | Tháng 08/2025 | Tỷ lệ phí dịch vụ 10% (a) | Tỷ lệ phí dịch vụ 5.26% (b) | Chênh lệch (a-b) |
| 928 |  |  |  |  |  |  |  |  |  | Billing AWS (USD) | 24238.57 | 24238.57 | `=K928-L928` |
| 929 |  |  |  |  |  |  |  |  |  | Phí trước chiết khấu | `=round(K928*(1+10%),2)` | `=round(L928*(1+5.26%),2)` | `=K929-L929` |
| 930 |  |  |  |  |  |  |  |  |  | Chiết khấu | `=round(K929*5%,2)` | `=round(L929*5%,2)` | `=K930-L930` |
| 931 |  |  |  |  |  |  |  |  |  | Tổng cộng | `=K929-K930` | `=L929-L930` | `=K931-L931` |
| 932 |  |  |  |  |  |  |  |  |  | Tỷ giá  | 26502 | 26502 | `=K932-L932` |
| 933 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  | Thành tiền | `=K931*K932` | `=L931*L932` | `=K933-L933` |
| 934 |  |  |  |  |  |  |  |  |  | Thuế GTGT (10%) | `=round(K933*10%,0)` | `=round(L933*10%,0)` | `=K934-L934` |
| 935 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  | Tổng thanh toán | `=K933+K934` | `=L933+L934` | `=K935-L935` |
| 937 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 938 | Phí điện toán đám mây | 022611242021 | 2025-08-01 | 24238.57 |  |  |  |  |  |  |  |  |  |
| 939 |  | Phí trước chiết khấu |  | `=round(D938*(1+5.26%),2)` |  |  |  |  |  | Tháng 09/2025 | Tỷ lệ phí dịch vụ 10% (a) | Tỷ lệ phí dịch vụ 5.26% (b) | Chênh lệch (a-b) |
| 940 |  | Chiết khấu |  | `=round(D939*5%,2)` |  |  |  |  |  | Billing AWS (USD) | 24709.64 | 24709.64 | `=K940-L940` |
| 941 | Thành tiền |  |  | `=D939-D940` | 26502 | `=D941*E941` |  |  |  | Phí trước chiết khấu | `=round(K940*(1+10%),2)` | `=round(L940*(1+5.26%),2)` | `=K941-L941` |
| 942 | Thuế GTGT (10%) |  |  |  |  | `=round(F941*10%,0)` |  |  |  | Chiết khấu | `=round(K941*5%,2)` | `=round(L941*5%,2)` | `=K942-L942` |
| 943 | Tổng số tiền phải thanh toán |  |  |  |  | `=F941+F942` |  |  |  | Tổng cộng | `=K941-K942` | `=L941-L942` | `=K943-L943` |
| 944 |  |  |  |  |  |  |  |  |  | Tỷ giá  | 26446 | 26446 | `=K944-L944` |
| 945 |  |  |  |  |  |  |  |  |  | Thành tiền | `=K943*K944` | `=L943*L944` | `=K945-L945` |
| 946 |  |  |  | Hà Nội, ngày 31 tháng 10 năm 2025 |  |  |  |  |  | Thuế GTGT (10%) | `=round(K945*10%,0)` | `=round(L945*10%,0)` | `=K946-L946` |
| 947 |  |  |  |                                         Người lập |  |  |  |  |  | Tổng thanh toán | `=K945+K946` | `=L945+L946` | `=K947-L947` |
| 955 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |
| 960 | ĐỐI SOÁT CHI PHÍ MBAL |  |  |  |  |  |  |  |  |  |  |  |  |
| 962 |  | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |  |  |  |  |  |
| 963 | Phí điện toán đám mây | 022611242021 | 2025-09-01 | 24709.64 |  |  |  |  |  |  |  |  |  |
| 964 |  | Phí trước chiết khấu |  | `=round(D963*(1+10%),2)` |  |  |  |  |  |  |  |  |  |
| 965 |  | Chiết khấu |  | `=round(D964*5%,2)` |  |  |  |  |  |  |  |  |  |
| 966 | Thành tiền |  |  | `=D964-D965` | 26446 | `=D966*E966` |  |  |  |  |  |  |  |
| 967 | Thuế GTGT (10%) |  |  |  |  | `=round(F966*10%,0)` |  |  |  |  |  |  |  |
| 968 | Tổng số tiền phải thanh toán |  |  |  |  | `=F966+F967` |  |  |  |  |  |  |  |
| 971 |  |  |  | Hà Nội, ngày 28 tháng 10 năm 2025 |  |  |  |  |  |  |  |  |  |
| 972 |  |  |  |                                         Người lập |  |  |  |  |  |  |  |  |  |
| 980 |  |  |  |                                     Ninh Hồng Sơn |  |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 478 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (335 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 39 | `D12` |
| D | `=round(D{r}*5%,2)` | 27 | `D414` |
| D | `=round(D{r}*(1+5.26%),2)` | 26 | `D413` |
| D | `=D{r}*3.5%` | 12 | `D11` |
| D | `=D{r}*0.06` | 11 | `D13` |
| D | `=SUM(D{r}:D{r})` | 10 | `D224` |
| D | `=ROUND(D{r}-D{r},2)` | 10 | `D226` |
| D | `=D{r}+D{r}` | 7 | `D14` |
| D | `=D{r}*6%` | 6 | `D223` |
| D | `=round(D{r}+D{r},2)` | 4 | `D154` |
| D | `=D{r}*0.035` | 4 | `D225` |
| D | `=round(D{r}*3.5%,2)` | 4 | `D336` |
| D | `=round((D{r}+D{r})*6%,2)` | 3 | `D334` |
| D | `=3962.95-D{r}` | 1 | `D53` |
| D | `=622.786` | 1 | `D299` |
| D | `=round(D{r}*6%,2)` | 1 | `D394` |
| D | `=round(D{r}*(1+10%),2)` | 1 | `D964` |
| F | `=D{r}*E{r}` | 41 | `F154` |
| F | `=F{r}+F{r}` | 23 | `F14` |
| F | `=round(F{r}*10%,0)` | 15 | `F622` |
| F | `=round(D{r}*E{r},0)` | 14 | `F10` |
| F | `=F{r}*0.06` | 7 | `F13` |
| H | `=G{r}-F{r}` | 3 | `H919` |
| I | `=F{r}+F{r}` | 1 | `I57` |
| K | `=round(K{r}*(1+10%),2)` | 3 | `K918` |
| K | `=round(K{r}*5%,2)` | 3 | `K919` |
| K | `=K{r}-K{r}` | 3 | `K920` |
| K | `=K{r}*K{r}` | 3 | `K922` |
| K | `=round(K{r}*10%,0)` | 3 | `K923` |
| K | `=K{r}+K{r}` | 3 | `K924` |
| L | `=L{r}-L{r}` | 4 | `L96` |
| L | `=L{r}+L{r}` | 4 | `L98` |
| L | `=round(L{r}*(1+5.26%),2)` | 3 | `L918` |
| L | `=round(L{r}*5%,2)` | 3 | `L919` |
| L | `=L{r}*L{r}` | 3 | `L922` |
| L | `=round(L{r}*10%,0)` | 3 | `L923` |
| L | `=L{r}*3.5%` | 1 | `L95` |
| L | `=L{r}*0.06` | 1 | `L97` |
| M | `=K{r}-L{r}` | 24 | `M917` |
