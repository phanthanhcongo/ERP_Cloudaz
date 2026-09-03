# Đất xanhIHOUZZ

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Đất xanhIHOUZZ`  
> **Vùng dữ liệu:** 1017 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 4 | 1 | 76218049049 | 2019-08-01 | 737.98 | 23320 | `=D4*E4` |  |  |
| 5 |  | Tổng |  | `=D4` |  | `=F4` |  |  |
| 6 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D5*0.12` |  | `=F5*0.12` |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |  |  |
| 11 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |
| 12 |  |  |  | Người lập |  |  |  |  |
| 16 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |
| 20 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 23 | 1 | DX | 2019-08-01 | 2612.56 | 23320 | `=D23*E23` |  |  |
| 24 |  | Tổng |  | `=D23` |  | `=F23` |  |  |
| 25 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D24*0.1` |  | `=F24*0.1` |  |  |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` |  | `=F24+F25` |  |  |
| 30 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |
| 31 |  |  |  | Người lập |  |  |  |  |
| 35 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |
| 39 | TỔNG HỢP CHI PHÍ Đất xanh |  |  |  |  |  |  |  |
| 41 | STT | Tháng | Số ngày trả chậm (từ 18/09 - 26/09) | Lãi suất trả chậm | Số tiền trên hóa đơn | Số tiền trả chậm |  |  |
| 42 | 1 | 2019-09-01 | 8 | 0.0005 | 19,274,857 ₫ | `=D42*C42*19274857` |  |  |
| 43 |  | Tổng số tiền phải thanh toán |  |  |  | `=sum(F42)` |  |  |
| 46 |  |  |  |  | Hà Nội, ngày 21 tháng 09 năm 2019 |  |  |  |
| 48 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |
| 49 | Phone: (+84) 24 2124 4844                Email: hello@cloudaz.io                 Website: www.cloudaz.io |  |  |  |  |  |  |  |
| 53 | TỔNG HỢP CHI PHÍ Đất xanh  |  |  |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 56 | 1 | 076218049049 | 2019-09-01 | 877.53 | 23300 | `=D56*E56` |  |  |
| 57 | 2 | Phạt trả chậm  | 2019-09-02 |  |  | 77099 |  |  |
| 58 |  | Tổng cộng |  | `=D56` |  | `=F56` |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D58*0.12` |  | `=F58*0.12` |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=D58+D59` |  | `=F58+F59+F57` |  |  |
| 62 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |
| 64 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |
| 65 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |
| 66 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |
| 76 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 78 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 79 | 1 | 076218049049 | 2019-10-01 | 759.6 | 23300 | `=D79*E79` |  |  |
| 80 |  | Tổng |  | `=D79` |  | `=F79` |  |  |
| 81 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D80*0.12` |  | `=F80*0.12` |  |  |
| 82 |  | Tổng số tiền phải thanh toán |  | `=D80+D81` |  | `=F80+F81` |  |  |
| 86 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |
| 87 |  |  |  | Người lập  |  |  |  |  |
| 91 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 96 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 99 | 1 | 076218049049 | 2019-11-01 | 1840.51 | 23300 | `=D99*E99` |  |  |
| 100 |  | Tổng |  | `=D99` |  | `=F99` |  |  |
| 101 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D100*0.12` |  | `=F100*0.12` |  |  |
| 102 |  | Tổng số tiền phải thanh toán |  | `=D100+D101` |  | `=F100+F101` |  |  |
| 106 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |
| 107 |  |  |  | Người lập  |  |  |  |  |
| 111 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 115 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 118 | 1 | 076218049049 | 2019-12-01 | 1200.57 | 23300 | `=D118*E118` |  |  |
| 119 |  | Tổng |  | `=D118` |  | `=F118` |  |  |
| 120 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D119*0.12` |  | `=F119*0.12` |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=D119+D120` |  | `=F119+F120` |  |  |
| 125 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |
| 126 |  |  |  | Người lập  |  |  |  |  |
| 130 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 133 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 135 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 136 | 1 | 076218049049 | 2020-01-01 | 3694.61 | 23340 | `=D136*E136` |  |  |
| 137 |  | Tổng |  | `=D136` |  | `=F136` |  |  |
| 138 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D137*0.12` |  | `=F137*0.12` |  |  |
| 139 |  | Tổng số tiền phải thanh toán |  | `=D137+D138` |  | `=F137+F138` |  |  |
| 143 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |
| 144 |  |  |  | Người lập  |  |  |  |  |
| 148 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 152 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 155 | 1 | 076218049049 | 2020-02-01 | 3339.73 | 23320 | `=D155*E155` |  |  |
| 156 |  | Tổng |  | `=D155` |  | `=F155` |  |  |
| 157 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D156*0.12` |  | `=F156*0.12` |  |  |
| 158 |  | Tổng số tiền phải thanh toán |  | `=D156+D157` |  | `=F156+F157` |  |  |
| 162 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |
| 163 |  |  |  | Người lập  |  |  |  |  |
| 167 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 170 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 173 | 1 | 076218049049 | 2020-03-01 | 2508.18 | 23700 | `=D173*E173` |  |  |
| 174 |  | Tổng |  | `=D173` |  | `=F173` |  |  |
| 175 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D174*0.12` |  | `=F174*0.12` |  |  |
| 176 |  | Tổng số tiền phải thanh toán |  | `=D174+D175` |  | `=F174+F175` |  |  |
| 180 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |
| 181 |  |  |  | Người lập  |  |  |  |  |
| 185 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 188 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 191 | 1 | 076218049049 | 2020-04-01 | 3170.97 | 23600 | `=D191*E191` |  |  |
| 192 |  | Tổng |  | `=D191` |  | `=F191` |  |  |
| 193 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D192*0.12` |  | `=F192*0.12` |  |  |
| 194 |  | Tổng số tiền phải thanh toán |  | `=D192+D193` |  | `=F192+F193` |  |  |
| 198 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |
| 199 |  |  |  | Người lập  |  |  |  |  |
| 203 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 206 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 208 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 209 | 1 | 076218049049 | 2020-05-01 | 2922.6 | 23350 | `=D209*E209` |  |  |
| 210 |  | Tổng |  | `=D209` |  | `=F209` |  |  |
| 211 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D210*0.12` |  | `=F210*0.12` |  |  |
| 212 |  | Tổng số tiền phải thanh toán |  | `=D210+D211` |  | `=F210+F211` |  |  |
| 216 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |
| 217 |  |  |  | Người lập  |  |  |  |  |
| 221 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 224 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 226 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 227 | 1 | 076218049049 | 2020-06-01 | 2773.78 | 23290 | `=D227*E227` |  |  |
| 228 |  | Tổng |  | `=D227` |  | `=F227` |  |  |
| 229 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D228*0.12` |  | `=F228*0.12` |  |  |
| 230 |  | Tổng số tiền phải thanh toán |  | `=D228+D229` |  | `=F228+F229` |  |  |
| 234 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |
| 235 |  |  |  | Người lập  |  |  |  |  |
| 239 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 242 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 245 | 1 | 076218049049 | 2020-07-01 | 2823.11 | 23265 | `=D245*E245` |  |  |
| 246 |  | Tổng |  | `=D245` |  | `=F245` |  |  |
| 247 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D246*0.12` |  | `=F246*0.12` |  |  |
| 248 |  | Tổng số tiền phải thanh toán |  | `=D246+D247` |  | `=F246+F247` |  |  |
| 252 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 253 |  |  |  | Người lập  |  |  |  |  |
| 257 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 259 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 262 | 1 | 076218049049 | 2020-08-01 | 2725 | 23270 | `=D262*E262` |  |  |
| 263 |  | Tổng |  | `=D262` |  | `=F262` |  |  |
| 264 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D263*0.12` |  | `=F263*0.12` |  |  |
| 265 |  | Tổng số tiền phải thanh toán |  | `=D263+D264` |  | `=F263+F264` |  |  |
| 269 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 271 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 272 | 1 | 076218049049 | 2020-09-01 | 2674.17 | 23280 | `=D272*E272` |  |  |
| 273 |  | Tổng |  | `=D272` |  | `=F272` |  |  |
| 274 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D273*0.12` |  | `=F273*0.12` |  |  |
| 275 |  | Tổng số tiền phải thanh toán |  | `=D273+D274` |  | `=F273+F274` |  |  |
| 279 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 282 | 1 | 076218049049 | 2020-10-01 | 2767.55 | 23270 | `=D282*E282` |  |  |
| 283 |  | Tổng |  | `=D282` |  | `=F282` |  |  |
| 284 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D283*0.12` |  | `=F283*0.12` |  |  |
| 285 |  | Tổng số tiền phải thanh toán |  | `=D283+D284` |  | `=F283+F284` |  |  |
| 289 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 291 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 292 | 1 | 076218049049 | 2020-11-01 | 2668.53 | 23225 | `=D292*E292` |  |  |
| 293 |  | Tổng |  | `=D292` |  | `=F292` |  |  |
| 294 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D293*0.12` |  | `=F293*0.12` |  |  |
| 295 |  | Tổng số tiền phải thanh toán |  | `=D293+D294` |  | `=F293+F294` |  |  |
| 298 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 300 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 301 | 1 | 076218049049 | 2020-12-01 | 2740.64 | 23185 | `=D301*E301` |  |  |
| 302 |  | Tổng |  | `=D301` |  | `=F301` |  |  |
| 303 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D302*0.12` | 23185 | 7625083 |  |  |
| 304 |  | Tổng số tiền phải thanh toán |  | `=D302+D303` | 23185 | `=F302+F303` |  |  |
| 307 | TỔNG HỢP CHI PHÍ ĐẤT XANH |  |  |  |  |  |  |  |
| 309 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 310 | 1 | 076218049049 | 2021-01-01 | 2760 | 23145 | `=D310*E310` |  |  |
| 311 |  | Tổng |  | `=D310` |  | `=F310` |  |  |
| 312 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D311*0.12` | 23145 | `=F311*0.12` |  |  |
| 313 |  | Tổng số tiền phải thanh toán |  | `=D311+D312` | 23145 | `=F311+F312` |  |  |
| 316 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 318 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 319 | 1 | 076218049049 | 2021-02-01 | 2609.99 | 23095 | `=D319*E319` |  |  |
| 320 |  | Tổng |  | `=D319` |  | `=F319` |  |  |
| 321 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D320*0.12` | 23095 | `=F320*0.12` |  |  |
| 322 |  | Tổng số tiền phải thanh toán |  | `=D320+D321` | 23095 | `=F320+F321` |  |  |
| 325 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 327 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 328 | 1 | 076218049049 | 2021-03-01 | 2912.73 | 23165 | `=D328*E328` |  |  |
| 329 |  | Tổng |  | `=D328` |  | `=F328` |  |  |
| 330 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D329*0.12` | 23165 | `=F329*0.12` |  |  |
| 331 |  | Tổng số tiền phải thanh toán |  | `=D329+D330` | 23165 | `=F329+F330` |  |  |
| 335 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 337 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 338 | 1 | 076218049049 | 2021-04-01 | 3139.22 | 23150 | `=D338*E338` |  |  |
| 339 |  | Tổng |  | `=D338` |  | `=F338` |  |  |
| 340 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D339*0.12` | 23150 | `=F339*0.12` |  |  |
| 341 |  | Tổng số tiền phải thanh toán |  | `=D339+D340` | 23150 | `=F339+F340` |  |  |
| 345 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 347 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 348 | 1 | 076218049049 | 2021-05-01 | `=255.22+1794.33` | 23145 | `=round(D348*E348,0)` |  |  |
| 349 |  | Tổng |  | `=D348` |  | `=F348` |  |  |
| 350 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D349*0.12` | 23145 | `=F349*0.12` |  |  |
| 351 |  | Tổng số tiền phải thanh toán |  | `=D349+D350` | 23145 | `=F349+F350` |  |  |
| 354 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 356 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 357 | 1 | 076218049049 | 2021-06-01 | 3805.9 | 23130 | `=round(D357*E357,0)` |  |  |
| 358 |  | Tổng |  | `=D357` |  | `=F357` |  |  |
| 359 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D358*0.12` | 23130 | `=F358*0.12` |  |  |
| 360 |  | Tổng số tiền phải thanh toán |  | `=D358+D359` | 23130 | `=F358+F359` |  |  |
| 365 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 367 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 368 | 1 | 076218049049 | 2021-07-01 | 3927.27 | 23050 | `=round(D368*E368,0)` |  |  |
| 369 |  | Tổng |  | `=D368` |  | `=F368` |  |  |
| 370 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D369*0.08` | 23050 | `=F369*0.08` |  |  |
| 371 |  | Tổng số tiền phải thanh toán |  | `=D369+D370` | 23050 | `=F369+F370` |  |  |
| 375 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 377 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 378 | 1 | 076218049049 | 2021-08-01 | 5050.45 | 22880 | `=round(D378*E378,0)` |  |  |
| 379 |  | Tổng |  | `=D378` |  | `=F378` |  | 124798639.6800000072 |
| 380 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D379*0.08` | 22880 | `=F379*0.08` |  |  |
| 381 |  | Tổng số tiền phải thanh toán |  | `=D379+D380` | 22880 | `=F379+F380` |  | 124798639.6800000072 |
| 385 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 387 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 388 | 1 | 076218049049 | 2021-09-01 | 5220.94 | 22840 | `=round(D388*E388,0)` |  |  |
| 389 |  | Tổng |  | `=D388` |  | `=F388` |  |  |
| 390 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D389*0.08` | 22840 | `=F389*0.08` |  |  |
| 391 | Tổng số tiền phải thanh toán |  |  | `=D389+D390` | 22840 | `=F389+F390` |  |  |
| 395 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 397 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 398 | 1 | 076218049049 | 2021-10-01 | `=5697.42+1.07` | 22850 | `=round(D398*E398,0)` |  |  |
| 399 |  | Tổng |  | `=D398` |  | `=F398` |  |  |
| 400 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D399*0.08` | 22850 | `=F399*0.08` |  |  |
| 401 | Tổng số tiền phải thanh toán |  |  | `=D399+D400` | 22850 | `=F399+F400` |  |  |
| 405 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 407 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 408 | 1 | 076218049049 | 2021-11-01 | 5950.49 | 22800 | `=round(D408*E408,0)` |  |  |
| 409 |  | Tổng |  | `=D408` |  | `=F408` |  |  |
| 410 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D409*0.08` | 22800 | `=F409*0.08` |  |  |
| 411 | Tổng số tiền phải thanh toán |  |  | `=D409+D410` | 22800 | `=F409+F410` | 146524865.7599999905 |  |
| 415 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 417 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 418 | 1 | 076218049049 | 2021-12-01 | 6554.17 | 22920 | `=round(D418*E418,0)` |  |  |
| 419 |  | Tổng |  | `=D418` |  | `=F418` |  |  |
| 420 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D419*0.08` | 22920 | `=F419*0.08` |  |  |
| 421 | Tổng số tiền phải thanh toán |  |  | `=D419+D420` | 22920 | `=F419+F420` |  |  |
| 424 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 426 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 427 | 1 | 076218049049 | 2022-01-01 | 7167.98 | 22780 | `=round(D427*E427,0)` |  |  |
| 428 |  | Tổng |  | `=D427` |  | `=F427` |  |  |
| 429 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D428*0.08` | 22780 | `=F428*0.08` |  |  |
| 430 | Tổng số tiền phải thanh toán |  |  | `=D428+D429` | 22780 | `=F428+F429` | 176349510.7199999988 |  |
| 433 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 435 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 436 | 1 | 076218049049 | 2022-02-01 | 6804.71 | 22950 | `=round(D436*E436,0)` |  |  |
| 437 |  | Tổng |  | `=D436` |  | `=F436` |  |  |
| 438 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D437*0.08` | 22950 | `=F437*0.08` |  |  |
| 439 | Tổng số tiền phải thanh toán |  |  | `=D437+D438` | 22950 | `=F437+F438` | 168661542.599999994 |  |
| 442 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 444 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 445 | 1 | 076218049049 | 2022-03-01 | 7469.33 | 22980 | `=round(D445*E445,0)` |  |  |
| 446 |  | Tổng |  | `=D445` |  | `=F445` |  |  |
| 447 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D446*0.08` | 22980 | `=F446*0.08` |  |  |
| 448 | Tổng số tiền phải thanh toán |  |  | `=D446+D447` | 22980 | `=F446+F447` | 185376819.2400000095 |  |
| 451 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 453 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 454 | 1 | 076218049049 | 2022-04-01 | 7085.8 | 23095 | `=round(D454*E454,0)` |  |  |
| 455 |  | Tổng |  | `=D454` |  | `=F454` |  |  |
| 456 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D455*0.08` | 23095 | `=F455*0.08` |  |  |
| 457 | Tổng số tiền phải thanh toán |  |  | `=D455+D456` | 23095 | `=F455+F456` | 176738275.0800000131 |  |
| 460 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 462 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 463 | 1 | 076218049049 | 2022-05-01 | 7381.91 |  |  |  |  |
| 464 |  | Tổng |  | `=D463` |  |  |  |  |
| 465 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D464*0.08` |  |  |  |  |
| 466 | Tổng số tiền phải thanh toán |  |  | `=round(D464+D465,2)` | 23330 | `=D466*E466` | 185997491.8000000119 |  |
| 469 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 471 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 472 | 1 | 076218049049 | 2022-06-01 | 7331.54 |  |  |  |  |
| 473 |  | Tổng |  | `=D472` |  |  |  |  |
| 474 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D473*0.08` |  |  |  |  |
| 475 | Tổng số tiền phải thanh toán |  |  | `=round(D473+D474,2)` | 23415 | `=D475*E475` | 185401374.900000006 |  |
| 478 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 480 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 481 | 1 | 076218049049 | 2022-07-01 | 7473.17 |  |  |  |  |
| 482 |  | Tổng |  | `=D481` |  |  |  |  |
| 483 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D482*0.08` |  |  |  |  |
| 484 | Tổng số tiền phải thanh toán |  |  | `=round(D482+D483,2)` | 23480 | `=D484*E484` |  |  |
| 488 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 490 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 491 | 1 | 076218049049 | 2022-08-01 | 7463.9 |  |  |  |  |
| 492 |  | Tổng |  | `=D491` |  |  |  |  |
| 493 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D492*0.08` |  |  |  |  |
| 494 | Tổng số tiền phải thanh toán |  |  | `=round(D492+D493,2)` | 23600 | `=D494*E494` |  |  |
| 497 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 499 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 500 | 1 | 076218049049 | 2022-09-01 | 7273.01 |  |  |  |  |
| 501 |  | Tổng |  | `=D500` |  |  |  |  |
| 502 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D501*0.08` |  |  |  |  |
| 503 | Tổng số tiền phải thanh toán |  |  | `=round(D501+D502,2)` | 24010 | `=D503*E503` |  |  |
| 506 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 508 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 509 | 1 | 076218049049 | 2022-10-01 | 7417.18 |  |  |  |  |
| 510 |  | Tổng |  | `=D509` |  |  |  |  |
| 511 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D510*0.08` |  |  |  |  |
| 512 | Tổng số tiền phải thanh toán |  |  | `=round(D510+D511,2)` | 24877 | `=D512*E512` |  |  |
| 515 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 517 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 518 | 1 | 076218049049 | 2022-11-01 | 4021.3041371175 |  |  |  |  |
| 519 |  | Tổng |  | `=D518` |  |  |  |  |
| 520 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D519*0.08,2)` |  |  |  |  |
| 521 | Tổng số tiền phải thanh toán |  |  | `=round(D519+D520,2)` | 24795 | `=D521*E521` |  |  |
| 524 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 526 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 527 | 1 | 076218049049 | 2022-12-01 | 3775.50317391 |  |  |  |  |
| 528 |  | Tổng |  | `=D527` |  |  |  |  |
| 529 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D528*0.08,2)` |  |  |  |  |
| 530 | Tổng số tiền phải thanh toán |  |  | `=round(D528+D529,2)` | 23605 | `=D530*E530` |  |  |
| 533 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 535 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 536 | 1 | 076218049049 | 2023-01-01 | 3527.48 |  |  |  |  |
| 537 |  | Tổng |  | `=D536` |  |  |  |  |
| 538 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D537*0.08,2)` |  |  |  |  |
| 539 | Tổng số tiền phải thanh toán |  |  | `=round(D537+D538,2)` | 23738 | `=D539*E539` |  |  |
| 542 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 544 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 545 | 1 | 076218049049 | 2023-02-01 | 3216.41 |  |  |  |  |
| 546 |  | Tổng |  | `=D545` |  |  |  |  |
| 547 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D546*0.08,2)` |  |  |  |  |
| 548 | Tổng số tiền phải thanh toán |  |  | `=round(D546+D547,2)` | 23850 | `=D548*E548` |  |  |
| 551 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 553 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 554 | 1 | 076218049049 | 2023-03-01 | 3673.73 |  |  |  |  |
| 555 |  | Tổng |  | `=D554` |  |  |  |  |
| 556 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D555*0.08,2)` |  |  |  |  |
| 557 | Tổng số tiền phải thanh toán |  |  | `=round(D555+D556,2)` | 23609 | `=D557*E557` |  |  |
| 560 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 562 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 563 | 1 | 076218049049 | 2023-04-01 | 3560.1 |  |  |  |  |
| 564 |  | Tổng |  | `=D563` |  |  |  |  |
| 565 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D564*0.08,2)` |  |  |  |  |
| 566 | Tổng số tiền phải thanh toán |  |  | `=round(D564+D565,2)` | 23630 | `=D566*E566` |  |  |
| 569 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 571 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 572 | 1 | 076218049049 | 2023-05-01 | 1099.9 |  |  |  |  |
| 573 |  | Tổng |  | `=D572` |  |  |  |  |
| 574 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D573*0.08,2)` |  |  |  |  |
| 575 | Tổng số tiền phải thanh toán |  |  | `=round(D573+D574,2)` | 23663 | `=D575*E575` |  |  |
| 579 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 581 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 582 | 1 | 076218049049 | 2023-06-01 | 3377.09 |  |  |  |  |
| 583 |  | Tổng |  | `=D582` |  |  |  |  |
| 584 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D583*0.08,2)` |  |  |  |  |
| 585 | Tổng số tiền phải thanh toán |  |  | `=round(D583+D584,2)` | 23826 | `=D585*E585` |  |  |
| 588 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 590 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 591 | 1 | 076218049049 | 2023-07-01 | 1972.69 |  |  |  |  |
| 592 |  | Tổng |  | `=D591` |  |  |  |  |
| 593 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D592*0.08,2)` |  |  |  |  |
| 594 | Tổng số tiền phải thanh toán |  |  | `=round(D592+D593,2)` | 23894 | `=D594*E594` |  |  |
| 597 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 599 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 600 | 1 | 076218049049 | 2023-08-01 | 1541.49 |  |  |  |  |
| 601 |  | Tổng |  | `=D600` |  |  |  |  |
| 602 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D601*0.08,2)` |  |  |  |  |
| 603 | Tổng số tiền phải thanh toán |  |  | `=round(D601+D602,2)` | 24216 | `=D603*E603` |  |  |
| 606 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 608 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 609 | 1 | 076218049049 | 2023-09-01 | 1481.31 |  |  |  |  |
| 610 |  | Tổng |  | `=D609` |  |  |  |  |
| 611 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D610*0.08,2)` |  |  |  |  |
| 612 | Tổng số tiền phải thanh toán |  |  | `=round(D610+D611,2)` | 24529 | `=D612*E612` |  |  |
| 616 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 618 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 619 | 1 | 076218049049 | 2023-10-01 | 1524.21 |  |  |  |  |
| 620 |  | Tổng |  | `=D619` |  |  |  |  |
| 621 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D620*0.08,2)` |  |  |  |  |
| 622 | Tổng số tiền phải thanh toán |  |  | `=round(D620+D621,2)` | 24489 | `=D622*E622` |  |  |
| 626 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 628 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 629 | 1 | 076218049049 | 2023-11-01 | 1463.76 |  |  |  |  |
| 630 |  | Tổng |  | `=D629` |  |  |  |  |
| 631 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D630*0.08,2)` |  |  |  |  |
| 632 | Tổng số tiền phải thanh toán |  |  | `=round(D630+D631,2)` | 24434 | `=D632*E632` |  |  |
| 635 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 637 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 638 | 1 | 076218049049 | 2023-12-01 | 1482.64 |  |  |  |  |
| 639 |  | Tổng |  | `=D638` |  |  |  |  |
| 640 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D639*0.08,2)` |  |  |  |  |
| 641 | Tổng số tiền phải thanh toán |  |  | `=round(D639+D640,2)` | 24549 | `=D641*E641` |  |  |
| 645 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 647 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 648 | 1 | 076218049049 | 2024-01-01 | 1464.15 |  |  |  |  |
| 649 |  | Tổng |  | `=D648` |  |  |  |  |
| 650 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D649*0.08,2)` |  |  |  |  |
| 651 | Tổng số tiền phải thanh toán |  |  | `=round(D649+D650,2)` | 24536 | `=D651*E651` |  |  |
| 655 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 657 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 658 | 1 | 076218049049 | 2024-02-01 | 1465.17 |  |  |  |  |
| 659 |  | Tổng |  | `=D658` |  |  |  |  |
| 660 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D659*0.08,2)` |  |  |  |  |
| 661 | Tổng số tiền phải thanh toán |  |  | `=round(D659+D660,2)` | 24856 | `=D661*E661` |  |  |
| 665 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 667 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 668 | 1 | 076218049049 | 2024-03-01 | 1401.91 |  |  |  |  |
| 669 |  | Tổng |  | `=D668` |  |  |  |  |
| 670 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D669*0.08,2)` |  |  |  |  |
| 671 | Tổng số tiền phải thanh toán |  |  | `=round(D669+D670,2)` | 25165 | `=D671*E671` |  |  |
| 675 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 677 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 678 | 1 | 076218049049 | 2024-04-01 | 1328.87 |  |  |  |  |
| 679 |  | Tổng |  | `=D678` |  |  |  |  |
| 680 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D679*0.08,2)` |  |  |  |  |
| 681 | Tổng số tiền phải thanh toán |  |  | `=round(D679+D680,2)` | 25461 | `=D681*E681` |  |  |
| 685 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 687 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 688 | 1 | 076218049049 | 2024-05-01 | 2103.06 |  |  |  |  |
| 689 |  | Tổng |  | `=D688` |  |  |  |  |
| 690 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Round(D689*0.08,2)` |  |  |  |  |
| 691 | Tổng số tiền phải thanh toán |  |  | `=round(D689+D690,2)` | 25453 | `=D691*E691` |  |  |
| 695 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 697 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 698 | 1 | 076218049049 | 2024-06-01 | 1507.98 |  |  |  |  |
| 699 |  | Tổng |  | `=D698` |  |  |  |  |
| 700 | Phí dịch vụ |  |  | `=Round(D699*0.08,2)` |  |  |  |  |
| 701 | Thành tiền |  |  | `=D699+D700` | 25477 | `=D701*E701` |  |  |
| 702 | Thuế GTGT |  |  |  |  | `=round(F701*10%,0)` |  |  |
| 703 | Tổng số tiền phải thanh toán |  |  |  |  | `=F701+F702` |  |  |
| 707 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 709 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 710 | 1 | 076218049049 | 2024-07-01 | 1370.87 |  |  |  |  |
| 711 |  | Tổng cộng |  | `=D710` |  |  |  |  |
| 712 | Phí dịch vụ |  |  | `=Round(D711*0.08,2)` |  |  |  |  |
| 713 | Thành tiền |  |  | `=D711+D712` | 25286 | `=D713*E713` |  |  |
| 714 | Thuế GTGT |  |  |  |  | `=round(F713*10%,0)` |  |  |
| 715 | Tổng số tiền phải thanh toán |  |  |  |  | `=F713+F714` |  |  |
| 719 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 721 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 722 | 1 | 076218049049 | 2024-08-01 | 1367.86 |  |  |  |  |
| 723 |  | Tổng cộng |  | `=D722` |  |  |  |  |
| 724 | Phí dịch vụ |  |  | `=Round(D723*0.08,2)` |  |  |  |  |
| 725 | Thành tiền |  |  | `=D723+D724` | 24711 | `=D725*E725` |  |  |
| 726 | Thuế GTGT |  |  |  |  | `=round(F725*10%,0)` |  |  |
| 727 | Tổng số tiền phải thanh toán |  |  |  |  | `=F725+F726` |  |  |
| 731 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 733 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 734 | 1 | 076218049049 | 2024-09-01 | 1321.38 |  |  |  |  |
| 735 |  | Tổng cộng |  | `=D734` |  |  |  |  |
| 736 | Phí dịch vụ |  |  | `=Round(D735*0.08,2)` |  |  |  |  |
| 737 | Thành tiền |  |  | `=D735+D736` | 25020 | `=D737*E737` |  |  |
| 738 | Thuế GTGT |  |  |  |  | `=round(F737*10%,0)` |  |  |
| 739 | Tổng số tiền phải thanh toán |  |  |  |  | `=F737+F738` |  |  |
| 743 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 745 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 746 | 1 | 076218049049 | 2024-10-01 | 1365.97 |  |  |  |  |
| 747 |  | Tổng cộng |  | `=D746` |  |  |  |  |
| 748 | Phí dịch vụ |  |  | `=Round(D747*0.08,2)` |  |  |  |  |
| 749 | Thành tiền |  |  | `=D747+D748` | 25480 | `=D749*E749` |  |  |
| 750 | Thuế GTGT |  |  |  |  | `=round(F749*10%,0)` |  |  |
| 751 | Tổng số tiền phải thanh toán |  |  |  |  | `=F749+F750` |  |  |
| 755 | TỔNG HỢP CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 757 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 758 | 1 | 076218049049 | 2024-11-01 | 1337.34 |  |  |  |  |
| 759 |  | Tổng cộng |  | `=D758` |  |  |  |  |
| 760 | Phí dịch vụ |  |  | `=Round(D759*0.08,2)` |  |  |  |  |
| 761 | Thành tiền |  |  | `=D759+D760` | 25460 | `=D761*E761` |  |  |
| 762 | Thuế GTGT |  |  |  |  | `=round(F761*10%,1)` |  |  |
| 763 | Tổng số tiền phải thanh toán |  |  |  |  | `=F761+F762` |  |  |
| 767 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 769 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 770 | 1 | 076218049049 | 2024-12-01 | 1372.25 |  |  |  |  |
| 771 |  | Tổng cộng |  | `=D770` |  |  |  |  |
| 772 | Phí dịch vụ |  |  | `=Round(D771*0.08,2)` |  |  |  |  |
| 773 | Thành tiền |  |  | `=D771+D772` | 25550 | `=round(D773*E773,0)` |  |  |
| 774 | Thuế GTGT |  |  |  |  | `=round(F773*10%,1)` |  |  |
| 775 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F773+F774,2)` |  |  |
| 779 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 781 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 782 | 1 | 076218049049 | 2025-01-01 | 1379.25 |  |  |  |  |
| 783 |  | Tổng cộng |  | `=D782` |  |  |  |  |
| 784 | Phí dịch vụ |  |  | `=Round(D783*0.08,2)` |  |  |  |  |
| 785 | Thành tiền |  |  | `=D783+D784` | 25376 | `=round(D785*E785,0)` |  |  |
| 786 | Thuế GTGT |  |  |  |  | `=round(F785*10%,1)` |  |  |
| 787 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F785+F786,2)` |  |  |
| 791 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 793 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 794 | 1 | 076218049049 | 2025-02-01 | 1249.04 |  |  |  |  |
| 795 |  | Tổng cộng |  | `=D794` |  |  |  |  |
| 796 | Phí dịch vụ |  |  | `=Round(D795*0.08,2)` |  |  |  |  |
| 797 | Thành tiền |  |  | `=D795+D796` | 25650 | `=round(D797*E797,0)` |  |  |
| 798 | Thuế GTGT |  |  |  |  | `=round(F797*10%,1)` |  |  |
| 799 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F797+F798,2)` |  |  |
| 803 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 805 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 806 | 1 | 076218049049 | 2025-03-01 | 1547.11 |  |  |  |  |
| 807 |  | Tổng cộng |  | `=D806` |  |  |  |  |
| 808 | Phí dịch vụ |  |  | `=Round(D807*0.08,2)` |  |  |  |  |
| 809 | Thành tiền |  |  | `=D807+D808` | 25911 | `=round(D809*E809,0)` |  |  |
| 810 | Thuế GTGT |  |  |  |  | `=round(F809*10%,1)` |  |  |
| 811 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F809+F810,2)` |  |  |
| 815 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 817 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 818 | 1 | 076218049049 | 2025-04-01 | 1498.19 |  |  |  |  |
| 819 |  | Tổng cộng |  | `=D818` |  |  |  |  |
| 820 | Phí dịch vụ |  |  | `=Round(D819*0.08,2)` |  |  |  |  |
| 821 | Thành tiền |  |  | `=D819+D820` | 26151 | `=round(D821*E821,0)` |  |  |
| 822 | Thuế GTGT |  |  |  |  | `=round(F821*10%,1)` |  |  |
| 823 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F821+F822,2)` |  |  |
| 827 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 829 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 830 | 1 | 076218049049 | 2025-05-01 | 1551.79 |  |  |  |  |
| 831 |  | Tổng cộng |  | `=D830` |  |  |  |  |
| 832 | Phí dịch vụ |  |  | `=Round(D831*0.08,2)` |  |  |  |  |
| 833 | Thành tiền |  |  | `=D831+D832` | 26244 | `=round(D833*E833,0)` |  |  |
| 834 | Thuế GTGT |  |  |  |  | `=round(F833*10%,1)` |  |  |
| 835 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F833+F834,2)` |  |  |
| 839 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 841 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 842 | 1 | 076218049049 | 2025-06-01 | 1512.21 |  |  |  |  |
| 843 |  | Tổng cộng |  | `=D842` |  |  |  |  |
| 844 | Phí dịch vụ |  |  | `=Round(D843*0.08,2)` |  |  |  |  |
| 845 | Thành tiền |  |  | `=D843+D844` | 26330 | `=round(D845*E845,0)` |  |  |
| 846 | Thuế GTGT |  |  |  |  | `=round(F845*10%,1)` |  |  |
| 847 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F845+F846,2)` |  |  |
| 851 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 853 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 854 | 1 | 076218049049 | 2025-07-01 | 1780.46 |  |  |  |  |
| 855 |  | Tổng cộng |  | `=D854` |  |  |  |  |
| 856 | Phí dịch vụ |  |  | `=Round(D855*10%,2)` |  |  |  |  |
| 857 | Thành tiền |  |  | `=D855+D856` | 26365 | `=round(D857*E857,0)` |  |  |
| 858 | Thuế GTGT |  |  |  |  | `=round(F857*10%,1)` |  |  |
| 859 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F857+F858,2)` |  |  |
| 863 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 865 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 866 | 1 | 076218049049 | 2025-08-01 | 1609.17 |  |  |  |  |
| 867 |  | Tổng cộng |  | `=D866` |  |  |  |  |
| 868 | Phí dịch vụ |  |  | `=Round(D867*10%,2)` |  |  |  |  |
| 869 | Thành tiền |  |  | `=D867+D868` | 26510 | `=round(D869*E869,0)` |  |  |
| 870 | Thuế GTGT |  |  |  |  | `=round(F869*10%,1)` |  |  |
| 871 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F869+F870,2)` |  |  |
| 876 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 878 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 879 | 1 | 076218049049 | 2025-09-01 | 1108.23 |  |  |  |  |
| 880 |  | Tổng cộng |  | `=D879` |  |  |  |  |
| 881 | Phí dịch vụ |  |  | `=Round(D880*10%,2)` |  |  |  |  |
| 882 | Thành tiền |  |  | `=D880+D881` | 26389 | `=round(D882*E882,0)` |  |  |
| 883 | Thuế GTGT |  |  |  |  | `=round(F882*10%,1)` |  |  |
| 884 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F882+F883,2)` |  |  |
| 889 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 891 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 892 | 1 | 076218049049 | 2025-10-01 | 1139.87 |  |  |  |  |
| 893 |  | Tổng cộng |  | `=D892` |  |  |  |  |
| 894 | Phí dịch vụ |  |  | `=Round(D893*10%,2)` |  |  |  |  |
| 895 | Thành tiền |  |  | `=D893+D894` | 26355 | `=round(D895*E895,0)` |  |  |
| 896 | Thuế GTGT |  |  |  |  | `=round(F895*10%,1)` |  |  |
| 897 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F895+F896,2)` |  |  |
| 902 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 904 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 905 | 1 | 076218049049 | 2025-11-01 | 1104.17 |  |  |  |  |
| 906 |  | Tổng cộng |  | `=D905` |  |  |  |  |
| 907 | Phí dịch vụ |  |  | `=Round(D906*10%,2)` |  |  |  |  |
| 908 | Thành tiền |  |  | `=D906+D907` | 26410 | `=round(D908*E908,0)` |  |  |
| 909 | Thuế GTGT |  |  |  |  | `=round(F908*10%,1)` |  |  |
| 910 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F908+F909,2)` |  |  |
| 916 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 918 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 919 | 1 | 076218049049 | 2025-12-01 | 1140.1 |  |  |  |  |
| 920 |  | Tổng cộng |  | `=D919` |  |  |  |  |
| 921 | Phí dịch vụ |  |  | `=Round(D920*10%,2)` |  |  |  |  |
| 922 | Thành tiền |  |  | `=D920+D921` | 26380 | `=round(D922*E922,0)` |  |  |
| 923 | Thuế GTGT |  |  |  |  | `=round(F922*10%,1)` |  |  |
| 924 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F922+F923,2)` |  |  |
| 929 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 931 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 932 | 1 | 076218049049 | 2026-01-01 | 1140.64 |  |  |  |  |
| 933 |  | Tổng cộng |  | `=D932` |  |  |  |  |
| 934 | Phí dịch vụ |  |  | `=Round(D933*10%,2)` |  |  |  |  |
| 935 | Thành tiền |  |  | `=D933+D934` | 26143 | `=round(D935*E935,0)` |  |  |
| 936 | Thuế GTGT |  |  |  |  | `=round(F935*10%,1)` |  |  |
| 937 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F935+F936,2)` |  |  |
| 942 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 944 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 945 | 1 | 076218049049 | 2026-02-01 | 1027.78 |  |  |  |  |
| 946 |  | Tổng cộng |  | `=D945` |  |  |  |  |
| 947 | Phí dịch vụ |  |  | `=Round(D946*10%,2)` |  |  |  |  |
| 948 | Thành tiền |  |  | `=D946+D947` | 26298 | `=round(D948*E948,0)` |  |  |
| 949 | Thuế GTGT |  |  |  |  | `=round(F948*10%,1)` |  |  |
| 950 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F948+F949,2)` |  |  |
| 956 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 958 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 959 | 1 | 076218049049 | 2026-03-01 | 1150.23 |  |  |  |  |
| 960 |  | Tổng cộng |  | `=D959` |  |  |  |  |
| 961 | Phí dịch vụ |  |  | `=Round(D960*10%,2)` |  |  |  |  |
| 962 | Thành tiền |  |  | `=D960+D961` | 26357 | `=round(D962*E962,0)` |  |  |
| 963 | Thuế GTGT |  |  |  |  | `=round(F962*10%,1)` |  |  |
| 964 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F962+F963,2)` |  |  |
| 969 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 971 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 972 | 1 | 076218049049 | 2026-04-01 | 883.27 |  |  |  |  |
| 973 |  | Tổng cộng |  | `=D972` |  |  |  |  |
| 974 | Phí dịch vụ |  |  | `=Round(D973*10%,2)` |  |  |  |  |
| 975 | Thành tiền |  |  | `=D973+D974` | 26368 | `=round(D975*E975,0)` |  |  |
| 976 | Thuế GTGT |  |  |  |  | `=round(F975*10%,1)` |  |  |
| 977 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F975+F976,2)` |  |  |
| 983 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 985 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 986 | 1 | 076218049049 | 2026-05-01 | 81.75 |  |  |  |  |
| 987 |  | Tổng cộng |  | `=D986` |  |  |  |  |
| 988 | Phí dịch vụ |  |  | `=Round(D987*10%,2)` |  |  |  |  |
| 989 | Thành tiền |  |  | `=D987+D988` | 26410 | `=round(D989*E989,0)` |  |  |
| 990 | Thuế GTGT |  |  |  |  | `=round(F989*10%,1)` |  |  |
| 991 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F989+F990,2)` |  |  |
| 996 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 998 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 999 | 1 | 076218049049 | 2026-06-01 | 58.58 |  |  |  |  |
| 1000 |  | Tổng cộng |  | `=D999` |  |  |  |  |
| 1001 | Phí dịch vụ |  |  | `=Round(D1000*10%,2)` |  |  |  |  |
| 1002 | Thành tiền |  |  | `=D1000+D1001` | 26462 | `=round(D1002*E1002,0)` |  |  |
| 1003 | Thuế GTGT |  |  |  |  | `=round(F1002*10%,1)` |  |  |
| 1004 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F1002+F1003,2)` |  |  |
| 1009 | ĐỐI SOÁT CHI PHÍ IHOUZZ |  |  |  |  |  |  |  |
| 1011 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 1012 | 1 | 076218049049 | 2026-07-01 | 72.28 |  |  |  |  |
| 1013 |  | Tổng cộng |  | `=D1012` |  |  |  |  |
| 1014 | Phí dịch vụ |  |  | `=Round(D1013*10%,2)` |  |  |  |  |
| 1015 | Thành tiền |  |  | `=D1013+D1014` | 26251 | `=round(D1015*E1015,0)` |  |  |
| 1016 | Thuế GTGT |  |  |  |  | `=round(F1015*10%,1)` |  |  |
| 1017 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F1015+F1016,2)` |  |  |

> *Đã bỏ qua 407 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (497 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 85 | `D5` |
| D | `=D{r}+D{r}` | 60 | `D7` |
| D | `=Round(D{r}*0.08,2)` | 32 | `D520` |
| D | `=round(D{r}+D{r},2)` | 25 | `D466` |
| D | `=D{r}*0.12` | 23 | `D6` |
| D | `=D{r}*0.08` | 16 | `D370` |
| D | `=Round(D{r}*10%,2)` | 13 | `D856` |
| D | `=D{r}*0.1` | 1 | `D25` |
| D | `=255.22+1794.33` | 1 | `D348` |
| D | `=5697.42+1.07` | 1 | `D398` |
| F | `=D{r}*E{r}` | 53 | `F4` |
| F | `=F{r}+F{r}` | 39 | `F7` |
| F | `=F{r}` | 34 | `F5` |
| F | `=round(D{r}*E{r},0)` | 32 | `F348` |
| F | `=F{r}*0.12` | 22 | `F6` |
| F | `=round(F{r}*10%,1)` | 21 | `F762` |
| F | `=round(F{r}+F{r},2)` | 20 | `F775` |
| F | `=F{r}*0.08` | 10 | `F370` |
| F | `=round(F{r}*10%,0)` | 5 | `F702` |
| F | `=F{r}*0.1` | 1 | `F25` |
| F | `=D{r}*C{r}*19274857` | 1 | `F42` |
| F | `=sum(F{r})` | 1 | `F43` |
| F | `=F{r}+F{r}+F{r}` | 1 | `F60` |
