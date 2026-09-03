# GEEKUP

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `GEEKUP`  
> **Vùng dữ liệu:** 493 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá ngày (02/08) | Thành tiền |  |  |  |  |
| 4 | 1 | 183742521221 | 2019-07-01 | 705.13 | 23350 | `=D4*E4` |  |  |  |  |
| 5 |  | Tổng |  | `=D4` |  | `=F4` |  |  |  |  |
| 6 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D5*0.12` |  | `=F5*0.12` |  |  |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |  |  |  |  |
| 11 |  |  |  | Hà Nội, ngày 02 tháng 08 năm 2019 |  |  |  |  |  |  |
| 12 |  |  |  | Người lập |  |  |  |  |  |  |
| 16 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 19 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá ngày (02/08) | Thành tiền |  |  |  |  |
| 22 | 1 | 183742521221 | 2019-07-01 | 705.13 | 23350 | `=D22*E22` |  |  |  |  |
| 23 | 2 | 183742521221 | 2019-08-01 | 195 | 23350 | `=D23*E23` |  |  |  |  |
| 24 |  |  |  | 235 | 23350 | `=D24*E24` |  |  |  |  |
| 25 |  | Tổng |  | `=sum(D22:D24)` |  | `=sum(F22:F24)` |  |  |  |  |
| 26 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D25*0.12` |  | `=F25*0.12` |  |  |  |  |
| 27 |  | Tổng số tiền phải thanh toán |  | `=D25+D26` |  | `=F25+F26` |  |  |  |  |
| 31 |  |  |  | Hà Nội, ngày 07 tháng 08 năm 2019 |  |  |  |  |  |  |
| 32 |  |  |  | Người lập |  |  |  |  |  |  |
| 36 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 39 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Credit | Tháng 8/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 42 | 1 | 183742521221 | 5000 | -793.13 | `=C42+D42` |  |  |  | Tháng 8 | -793.13 |
| 43 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 |  |  |  |  |  |
| 44 |  | Tổng số tiền phải thanh toán |  |  | 0 |  |  |  |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  | `=D43+D44` |  |  |  |  |  |  |
| 49 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |
| 50 |  |  |  | Người lập |  |  |  |  |  |  |
| 54 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 57 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 59 | STT | Tài khoản | Credit | Tháng 9/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 60 | 1 | 183742521221 | 4206.87 | -833.33 | `=C60+D60` |  |  |  |  |  |
| 61 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 |  |  |  |  |  |
| 62 |  | Tổng số tiền phải thanh toán |  |  | 0 |  |  |  |  |  |
| 63 |  | Tổng số tiền phải thanh toán |  | `=D61+D62` |  |  |  |  |  |  |
| 65 |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |  |  |  |
| 67 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |  |
| 68 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |
| 69 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |
| 81 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 83 | STT | Tài khoản | Credit | Tháng 10/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 84 | 1 | 183742521221 | 3373.54 | -928.81 | `=C84+D84` |  |  |  |  |  |
| 85 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 |  |  |  |  |  |
| 86 |  | Tổng số tiền phải thanh toán |  |  | 0 |  |  |  |  |  |
| 87 |  | Tổng số tiền phải thanh toán |  | `=D85+D86` |  |  |  |  |  |  |
| 89 |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |  |  |
| 90 |  |  | Người lập  |  |  |  |  |  |  |  |
| 94 |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 98 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 100 | STT | Tài khoản | Credit | Tháng 11/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 101 | 1 | 183742521221 | 2444.73 | -1103.3 | `=C101+D101` |  |  |  |  |  |
| 102 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 |  |  |  |  |  |
| 103 |  | Tổng số tiền phải thanh toán |  |  | 0 |  |  |  |  |  |
| 104 |  | Tổng số tiền phải thanh toán |  | `=D102+D103` |  |  |  |  |  |  |
| 106 |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |  |  |
| 107 |  |  | Người lập  |  |  |  |  |  |  |  |
| 111 |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 116 |  |  | Tháng 8 | -793.13 |  |  |  |  |  |  |
| 117 |  |  | Tháng 9 | -833.33 |  |  |  |  |  |  |
| 118 |  |  | Tháng 10 | -928.81 |  |  |  |  |  |  |
| 119 |  |  | Tháng 11 | -1103.3 |  |  |  |  |  |  |
| 120 |  |  | Tổng cộng | `=sum(D116:D119)` |  |  |  |  |  |  |
| 124 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 127 | 1 | 183742521221 | 2019-08-01 | 793.13 | 23230 | `=D127*E127` | `=D127*E127*112%` |  |  |  |
| 128 | 2 | 183742521221 | 2019-09-01 | 833.33 | 23230 | `=D128*E128` | `=D128*E128*112%` |  |  |  |
| 129 | 3 | 183742521221 | 2019-10-01 | 928.81 | 23230 | `=D129*E129` | `=D129*E129*112%` |  |  |  |
| 130 | 4 | 183742521221 | 2019-11-01 | 1103.3 | 23230 | `=D130*E130` | `=D130*E130*112%` |  |  |  |
| 131 | 5 | 183742521221 | 2019-12-01 | 1747.43 | 23230 | `=D131*E131` | `=D131*E131*112%` |  |  |  |
| 132 |  | Tổng |  | `=sum(D127:D131)` |  | `=sum(F127:F131)` |  |  |  |  |
| 133 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D132*0.12` |  | `=F132*0.12` |  |  |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=D132+D133` |  | `=F132+F133` |  |  |  |  |
| 138 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |  |  |
| 139 |  |  |  | Người lập |  |  |  |  |  |  |
| 143 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 146 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 148 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 149 | 1 | 183742521221 | 2020-01-01 | 1851.39 | 23340 | `=D149*E149` |  |  |  |  |
| 150 |  | Tổng |  | `=sum(D149)` |  | `=sum(F149)` |  |  |  |  |
| 151 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D150*0.12` |  | `=F150*0.12` |  |  |  |  |
| 152 |  | Tổng số tiền phải thanh toán |  | `=D150+D151` |  | `=F150+F151` |  |  |  |  |
| 156 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |  |  |
| 157 |  |  |  | Người lập |  |  |  |  |  |  |
| 161 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 165 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 167 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 168 | 1 | 183742521221 | 2020-02-01 | 1628.86 | 23290 | `=D168*E168` |  |  |  |  |
| 169 |  | Tổng |  | `=sum(D168)` |  | `=sum(F168)` |  |  |  |  |
| 170 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D169*0.12` |  | `=F169*0.12` |  |  |  |  |
| 171 |  | Tổng số tiền phải thanh toán |  | `=D169+D170` |  | `=F169+F170` |  |  |  |  |
| 175 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |  |
| 176 |  |  |  | Người lập |  |  |  |  |  |  |
| 180 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 183 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 185 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 186 | 1 | 183742521221 | 2020-03-01 | 1770.07 | 23530 | `=D186*E186` |  |  |  |  |
| 187 |  | Tổng |  | `=sum(D186)` |  | `=sum(F186)` |  |  |  |  |
| 188 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D187*0.12` |  | `=F187*0.12` |  |  |  |  |
| 189 |  | Tổng số tiền phải thanh toán |  | `=D187+D188` |  | `=F187+F188` |  |  |  |  |
| 193 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |  |
| 194 |  |  |  | Người lập |  |  |  |  |  |  |
| 198 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 201 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 203 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 204 | 1 | 183742521221 | 2020-04-01 | 1701.97 | 23520 | `=D204*E204` |  |  |  |  |
| 205 | 2 | RI_183742521221 | 2020-04-02 | 543 | 23520 | `=D205*E205` |  |  |  |  |
| 206 |  | Tổng |  | `=sum(D204:D205)` |  | `=sum(F204:F205)` |  |  |  |  |
| 207 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D206*0.12` |  | `=F206*0.12` |  |  |  |  |
| 208 |  | Tổng số tiền phải thanh toán |  | `=D206+D207` |  | `=F206+F207` |  |  |  |  |
| 212 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |
| 213 |  |  |  | Người lập |  |  |  |  |  |  |
| 217 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 220 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 222 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 223 | 1 | 183742521221 | 2020-05-01 | 1598.73 | 23350 | `=D223*E223` |  |  |  |  |
| 224 |  | Tổng |  | `=sum(D223)` |  | `=sum(F223)` |  |  |  |  |
| 225 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D224*0.12` |  | `=F224*0.12` |  |  |  |  |
| 226 |  | Tổng số tiền phải thanh toán |  | `=D224+D225` |  | `=F224+F225` |  |  |  |  |
| 230 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |
| 231 |  |  |  | Người lập |  |  |  |  |  |  |
| 235 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 238 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 240 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 241 | 1 | 183742521221 | 2020-06-01 | 1813.87 | 23290 | `=D241*E241` |  |  |  |  |
| 242 |  | Tổng |  | `=sum(D241)` |  | `=sum(F241)` |  |  |  |  |
| 243 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D242*0.12` |  | `=F242*0.12` |  |  |  |  |
| 244 |  | Tổng số tiền phải thanh toán |  | `=D242+D243` |  | `=F242+F243` |  |  |  |  |
| 248 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |
| 249 |  |  |  | Người lập |  |  |  |  |  |  |
| 253 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 256 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 258 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 259 | 1 | 183742521221 | 2020-07-01 | 1913.5 | 23270 | `=D259*E259` |  |  |  |  |
| 260 |  | Tổng |  | `=sum(D259)` |  | `=sum(F259)` |  |  |  |  |
| 261 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D260*0.12` |  | `=F260*0.12` |  |  |  |  |
| 262 |  | Tổng số tiền phải thanh toán |  | `=D260+D261` |  | `=F260+F261` |  |  |  |  |
| 266 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |  |
| 267 |  |  |  | Người lập |  |  |  |  |  |  |
| 271 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 273 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 275 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 276 | 1 | 183742521221 | 2020-08-01 | 1953.33 | 23270 | `=D276*E276` |  |  |  |  |
| 277 |  | Tổng |  | `=sum(D276)` |  | `=sum(F276)` |  |  |  |  |
| 278 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D277*0.12` |  | `=F277*0.12` |  |  |  |  |
| 279 |  | Tổng số tiền phải thanh toán |  | `=D277+D278` |  | `=F277+F278` |  |  |  |  |
| 283 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 285 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 286 | 1 | 183742521221 | 2020-09-01 | 1873.18 | 23280 | `=D286*E286` |  |  |  |  |
| 287 |  | Tổng |  | `=sum(D286)` |  | `=sum(F286)` |  |  |  |  |
| 288 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D287*0.12` |  | `=F287*0.12` |  |  |  |  |
| 289 |  | Tổng số tiền phải thanh toán |  | `=D287+D288` |  | `=F287+F288` |  |  |  |  |
| 293 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 295 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 296 | 1 | 183742521221 | 2020-10-01 | 1744.03 | 23270 | `=D296*E296` |  |  |  |  |
| 297 |  | Tổng |  | `=sum(D296)` |  | `=sum(F296)` |  |  |  |  |
| 298 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D297*0.12` |  | `=F297*0.12` |  |  |  |  |
| 299 |  | Tổng số tiền phải thanh toán |  | `=D297+D298` |  | `=F297+F298` |  |  |  |  |
| 303 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 305 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 306 | 1 | 183742521221 | 2020-11-01 | 1870.71 | 23230 | `=D306*E306` |  |  |  |  |
| 307 |  | Tổng |  | `=sum(D306)` |  | `=sum(F306)` |  |  |  |  |
| 308 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D307*0.12` |  | `=F307*0.12` |  |  |  |  |
| 309 |  | Tổng số tiền phải thanh toán |  | `=D307+D308` |  | `=F307+F308` |  |  |  |  |
| 312 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 314 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 315 | 1 | 183742521221 | 2020-12-01 | 2032.2 | 23215 | `=D315*E315` |  |  |  |  |
| 316 |  | Tổng |  | `=sum(D315)` |  | `=sum(F315)` |  |  |  |  |
| 317 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D316*0.12` |  | `=F316*0.12` |  |  |  |  |
| 318 |  | Tổng số tiền phải thanh toán |  | `=D316+D317` |  | `=F316+F317` |  |  |  |  |
| 321 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 323 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 324 | 1 | 183742521221 | 2021-01-01 | 2006.36 | 23140 | `=D324*E324` |  |  |  |  |
| 325 |  | Tổng |  | `=sum(D324)` |  | `=sum(F324)` |  |  |  |  |
| 326 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D325*0.12` |  | `=F325*0.12` |  |  |  |  |
| 327 |  | Tổng số tiền phải thanh toán |  | `=D325+D326` |  | `=F325+F326` |  |  |  |  |
| 331 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 333 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 334 | 1 | 183742521221 | 2021-02-01 | 1905.53 | 23100 | `=D334*E334` |  |  |  |  |
| 335 |  | Tổng |  | `=sum(D334)` |  | `=sum(F334)` |  |  |  |  |
| 336 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D335*0.12` | 23100 | `=F335*0.12` |  |  |  |  |
| 337 |  | Tổng số tiền phải thanh toán |  | `=D335+D336` | 23100 | `=F335+F336` |  |  |  |  |
| 341 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 343 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 344 | 1 | 183742521221 | 2021-03-01 | 1983.98 | 23170 | `=D344*E344` |  |  |  |  |
| 345 |  | Tổng |  | `=sum(D344)` |  | `=sum(F344)` |  |  |  |  |
| 346 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D345*0.12` | 23170 | `=F345*0.12` |  |  |  |  |
| 347 |  | Tổng số tiền phải thanh toán |  | `=D345+D346` | 23170 | `=F345+F346` |  |  |  |  |
| 351 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 353 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 354 | 1 | 183742521221 | 2021-04-01 | 1967.48 | 23140 | `=round(D354*E354,0)` |  |  |  |  |
| 355 |  | Tổng |  | `=sum(D354)` |  | `=sum(F354)` |  |  |  |  |
| 356 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D355*0.12` | 23140 | `=F355*0.12` |  |  |  |  |
| 357 |  | Tổng số tiền phải thanh toán |  | `=D355+D356` | 23140 | `=F355+F356` |  |  |  |  |
| 361 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 363 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 364 | 1 | 183742521221 | 2021-05-01 | 2037.93 | 23145 | `=round(D364*E364,0)` |  |  |  |  |
| 365 |  | Tổng |  | `=sum(D364)` |  | `=sum(F364)` |  |  |  |  |
| 366 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D365*0.12` | 23145 | `=F365*0.12` |  |  |  |  |
| 367 |  | Tổng số tiền phải thanh toán |  | `=D365+D366` | 23145 | `=F365+F366` |  |  |  |  |
| 370 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 372 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 373 | 1 | 183742521221 | 2021-06-01 | 2049.35 | 23130 | `=round(D373*E373,0)` |  |  |  |  |
| 374 |  | Tổng |  | `=sum(D373)` |  | `=sum(F373)` |  |  |  |  |
| 375 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D374*0.12` | 23130 | 5688175 |  |  |  |  |
| 376 |  | Tổng số tiền phải thanh toán |  | `=D374+D375` | 23130 | `=F374+F375` |  |  |  |  |
| 380 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 382 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 383 | 1 | 183742521221 | 2021-07-01 | 2136.26 | 23050 | `=round(D383*E383,0)` |  |  |  |  |
| 384 |  | Discount (2%) |  | `=D383*2%` |  |  |  |  |  |  |
| 385 |  | Tổng |  | `=D383-D384` | 23050 | `=round(D385*E385,0)` |  |  |  |  |
| 386 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D385*0.08` | 23050 | `=F385*0.08` |  |  |  |  |
| 387 |  | Tổng số tiền phải thanh toán |  | `=D385+D386` | 23050 | `=F385+F386` |  |  |  |  |
| 391 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 393 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 394 | 1 | 183742521221 | 2021-08-01 | 2198.57 | 22880 | `=round(D394*E394,0)` |  |  |  |  |
| 395 |  | Discount (2%) |  | `=D394*2%` |  |  |  |  |  |  |
| 396 |  | Tổng |  | `=D394-D395` | 22880 | `=round(D396*E396,0)` |  |  |  |  |
| 397 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D396*0.08` | 22880 | `=F396*0.08` |  |  |  |  |
| 398 |  | Tổng số tiền phải thanh toán |  | `=D396+D397` | 22880 | `=F396+F397` |  | 53240993.2800000012 | 53240993.2800000012 |  |
| 402 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 404 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 405 | 1 | 183742521221 | 2021-09-01 | 2382.42 | 22840 | `=round(D405*E405,0)` |  |  |  |  |
| 406 |  | Discount (2%) |  | `=D405*2%` |  |  |  |  |  |  |
| 407 |  | Tổng |  | `=D405-D406` | 22840 | `=round(D407*E407,0)` |  |  |  |  |
| 408 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D407*0.08` | 22840 | `=F407*0.08` |  |  |  |  |
| 409 | Tổng số tiền phải thanh toán |  |  | `=D407+D408` | 22840 | `=F407+F408` | 57592277.6400000006 |  |  |  |
| 413 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 415 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 416 | 1 | 183742521221 | 2021-10-01 | 2431.9 | 22850 | `=round(D416*E416,0)` |  |  |  |  |
| 417 |  | Discount (2%) |  | `=D416*2%` |  |  |  |  |  |  |
| 418 |  | Tổng |  | `=D416-D417` | 22850 | `=round(D418*E418,0)` |  |  |  |  |
| 419 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D418*0.08` | 22850 | `=F418*0.08` |  |  |  |  |
| 420 | Tổng số tiền phải thanh toán |  |  | `=D418+D419` | 22850 | `=F418+F419` |  |  |  |  |
| 424 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 426 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 427 | 1 | 183742521221 | 2021-11-01 | 2436.97 | 22800 | `=round(D427*E427,0)` |  |  |  |  |
| 428 |  | Discount (2%) |  | `=D427*2%` |  |  |  |  |  |  |
| 429 |  | Tổng |  | `=D427-D428` | 22800 | `=round(D429*E429,0)` |  |  |  |  |
| 430 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D429*0.08` | 22800 | `=F429*0.08` |  |  |  |  |
| 431 | Tổng số tiền phải thanh toán |  |  | `=D429+D430` | 22800 | `=F429+F430` | 58807790.6400000006 |  |  |  |
| 435 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 437 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 438 | 1 | 183742521221 | 2021-12-01 | 2617.99 | 22920 | `=round(D438*E438,0)` |  |  |  |  |
| 439 |  | Discount (2%) |  | `=D438*2%` |  |  |  |  |  |  |
| 440 |  | Tổng |  | `=D438-D439` | 22920 | `=round(D440*E440,0)` |  |  |  |  |
| 441 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D440*0.08` | 22920 | `=F440*0.08` |  |  |  |  |
| 442 | Tổng số tiền phải thanh toán |  |  | `=D440+D441` | 22920 | `=F440+F441` | 63508583.5200000033 |  |  |  |
| 446 | TỔNG HỢP CHI PHÍ GEEKUP |  |  |  |  |  |  |  |  |  |
| 448 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 449 | 1 | 183742521221 | 2022-01-01 | 2700.56 | 22780 | `=round(D449*E449,0)` |  |  |  |  |
| 450 |  | Discount (2%) |  | `=D449*2%` |  |  |  |  |  |  |
| 451 |  | Tổng |  | `=D449-D450` | 22780 | `=round(D451*E451,0)` |  |  |  |  |
| 452 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D451*0.08` | 22780 | `=F451*0.08` |  |  |  |  |
| 453 |  |  |  | `=D451+D452` | 22780 | `=F451+F452` | 65111452.5600000024 |  |  |  |
| 463 |  |  |  |  |  |  | 61538209.9200000018 |  |  |  |
| 473 |  |  |  |  |  |  | 59497284.2400000021 |  |  |  |
| 483 |  |  |  |  |  |  | 47446048.0799999982 |  |  |  |
| 493 |  |  |  |  |  |  | 50951086.8999999985 |  |  |  |

> *Đã bỏ qua 235 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (223 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 32 | `D7` |
| D | `=D{r}*0.12` | 21 | `D6` |
| D | `=sum(D{r})` | 17 | `D150` |
| D | `=D{r}*2%` | 7 | `D384` |
| D | `=D{r}-D{r}` | 7 | `D385` |
| D | `=D{r}*0.08` | 7 | `D386` |
| D | `=sum(D{r}:D{r})` | 4 | `D25` |
| D | `=D{r}` | 1 | `D5` |
| E | `=C{r}+D{r}` | 4 | `E42` |
| F | `=F{r}+F{r}` | 28 | `F7` |
| F | `=D{r}*E{r}` | 25 | `F4` |
| F | `=F{r}*0.12` | 20 | `F6` |
| F | `=sum(F{r})` | 17 | `F150` |
| F | `=round(D{r}*E{r},0)` | 17 | `F354` |
| F | `=F{r}*0.08` | 7 | `F386` |
| F | `=sum(F{r}:F{r})` | 3 | `F25` |
| F | `=F{r}` | 1 | `F5` |
| G | `=D{r}*E{r}*112%` | 5 | `G127` |
