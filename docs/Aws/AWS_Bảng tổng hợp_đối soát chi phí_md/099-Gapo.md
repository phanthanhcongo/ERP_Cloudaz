# Gapo

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Gapo`  
> **Vùng dữ liệu:** 909 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ Gapo |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 4 | 1 | 202453187726 | 2019-08-01 | 4666.67 | 23260 | `=D4*E4` |  |  |
| 5 |  | Tổng |  | `=D4` |  | `=F4` |  |  |
| 6 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D5*0.1` |  | `=F5*0.1` |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |  |  |
| 11 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |
| 12 |  |  |  | Người lập |  |  |  |  |
| 16 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |
| 20 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 23 | 1 | VCC | 2019-08-01 | 2612.56 | 23320 | `=D23*E23` |  |  |
| 24 |  | Tổng |  | `=D23` |  | `=F23` |  |  |
| 25 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D24*0.1` |  | `=F24*0.1` |  |  |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` |  | `=F24+F25` |  |  |
| 30 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |
| 31 |  |  |  | Người lập |  |  |  |  |
| 35 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |
| 39 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 42 | 1 | AWS - 202453187726  | 2019-09-01 | 6413.28 | 23270 | `=D42*E42` |  |  |
| 43 | 2 | GCP - 496160243049 | 2019-09-02 | 15477.43 | 23270 | `=D43*E43` |  |  |
| 44 |  | Tổng cộng |  | `=D42+D43` |  | `=F42+F43` |  |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D44*0.1` |  | `=F44*0.1` |  |  |
| 46 |  | Tổng số tiền phải thanh toán |  | `=D44+D45` |  | `=F44+F45` |  |  |
| 48 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |
| 50 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |
| 51 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |
| 52 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |
| 63 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 66 | 1 | AWS - 202453187726  | 2019-10-01 | 8557.25 | 23270 | `=D66*E66` |  |  |
| 67 | 2 | GCP - 496160243049 | 2019-10-02 | 16878.35 | 23270 | `=D67*E67` |  |  |
| 68 |  | Tổng cộng |  | `=D66+D67` |  | `=F66+F67` |  |  |
| 69 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D68*0.1` |  | `=F68*0.1` |  |  |
| 70 |  | Tổng số tiền phải thanh toán |  | `=D68+D69` |  | `=F68+F69` |  |  |
| 72 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |
| 73 |  |  |  | Người lập  |  |  |  |  |
| 77 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 82 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 85 | 1 | AWS - 202453187726  | 2019-11-01 | 9945.16 | 23270 | `=D85*E85` |  |  |
| 86 | 2 | GCP - 496160243049 | 2019-11-02 | 12247.36 | 23270 | `=D86*E86` |  |  |
| 87 |  | Tổng cộng |  | `=D85+D86` |  | `=F85+F86` |  |  |
| 88 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D87*0.1` |  | `=F87*0.1` |  |  |
| 89 |  | Tổng số tiền phải thanh toán |  | `=D87+D88` |  | `=F87+F88` |  |  |
| 91 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |
| 92 |  |  |  | Người lập  |  |  |  |  |
| 96 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 100 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 103 | 1 | AWS - 202453187726  | 2019-12-01 | 8318.12 | 23270 | `=D103*E103` |  |  |
| 104 | 2 | GCP - 496160243049 | 2019-12-02 | 11303.86 | 23270 | `=D104*E104` |  |  |
| 105 |  | Tổng cộng |  | `=D103+D104` |  | `=F103+F104` |  |  |
| 106 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D105*0.1` |  | `=F105*0.1` |  |  |
| 107 |  | Tổng số tiền phải thanh toán |  | `=D105+D106` |  | `=F105+F106` |  |  |
| 109 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |
| 110 |  |  |  | Người lập  |  |  |  |  |
| 114 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 117 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 120 | 1 | AWS - 202453187726  | 2020-01-01 | 7758.05 | 23320 | `=D120*E120` |  |  |
| 121 | 2 | GCP - 496160243049 | 2020-01-02 | 12084.41 | 23320 | `=D121*E121` |  |  |
| 122 |  | Tổng cộng |  | `=D120+D121` |  | `=F120+F121` |  |  |
| 123 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D122*0.1` |  | `=F122*0.1` |  |  |
| 124 |  | Tổng số tiền phải thanh toán |  | `=D122+D123` |  | `=F122+F123` |  |  |
| 126 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |
| 127 |  |  |  | Người lập  |  |  |  |  |
| 131 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 135 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 137 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 138 | 1 | AWS - 202453187726  | 2020-02-01 | 8758.88 | 23320 | `=D138*E138` |  |  |
| 139 | 2 | GCP - 496160243049 | 2020-02-02 | 11687.26 | 23320 | `=D139*E139` |  |  |
| 140 |  | Tổng cộng |  | `=D138+D139` |  | `=F138+F139` |  |  |
| 141 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D140*0.1` |  | `=F140*0.1` |  |  |
| 142 |  | Tổng số tiền phải thanh toán |  | `=D140+D141` |  | `=F140+F141` |  |  |
| 144 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |
| 145 |  |  |  | Người lập  |  |  |  |  |
| 149 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 152 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 155 | 1 | AWS - 202453187726  | 2020-03-01 | 12231.62 | 23700 | `=D155*E155` |  |  |
| 156 | 2 | GCP - 496160243049 | 2020-03-02 | 11443.15 | 23700 | `=D156*E156` |  |  |
| 157 |  | Tổng cộng |  | `=D155+D156` |  | `=F155+F156` |  |  |
| 158 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D157*0.1` |  | `=F157*0.1` |  |  |
| 159 |  | Tổng số tiền phải thanh toán |  | `=D157+D158` |  | `=F157+F158` |  |  |
| 161 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |
| 162 |  |  |  | Người lập  |  |  |  |  |
| 166 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 169 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 171 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 172 | 1 | AWS - 202453187726  | 2020-04-01 | 12498.52 | 23600 | `=D172*E172` |  |  |
| 173 | 2 | GCP - 496160243049 | 2020-04-02 | 11108.88 | 23600 | `=D173*E173` |  |  |
| 174 |  | Tổng cộng |  | `=D172+D173` |  | `=F172+F173` |  |  |
| 175 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D174*0.1` |  | `=F174*0.1` |  |  |
| 176 |  | Tổng số tiền phải thanh toán |  | `=D174+D175` |  | `=F174+F175` |  |  |
| 178 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |
| 179 |  |  |  | Người lập  |  |  |  |  |
| 183 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 186 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 188 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 189 | 1 | AWS - 202453187726  | 2020-05-01 | 8935.8 | 23350 | `=D189*E189` |  |  |
| 190 | 2 | GCP - 496160243049 | 2020-05-02 | 12932.85 | 23350 | `=D190*E190` |  |  |
| 191 |  | Tổng cộng |  | `=D189+D190` |  | `=F189+F190` |  |  |
| 192 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D191*0.1` |  | `=F191*0.1` |  |  |
| 193 |  | Tổng số tiền phải thanh toán |  | `=D191+D192` |  | `=F191+F192` |  |  |
| 195 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |
| 196 |  |  |  | Người lập  |  |  |  |  |
| 200 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 204 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 206 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 207 | 1 | AWS - 202453187726  | 2020-06-01 | 5674.19 | 23290 | `=D207*E207` |  |  |
| 208 | 2 | GCP - 496160243049 | 2020-06-02 | 12970.94 | 23290 | `=D208*E208` |  | 5424.45 |
| 209 |  | Tổng cộng |  | `=D207+D208` |  | `=F207+F208` |  |  |
| 210 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D209*0.1` |  | `=F209*0.1` |  |  |
| 211 |  | Tổng số tiền phải thanh toán |  | `=D209+D210` |  | `=F209+F210` |  |  |
| 213 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |
| 214 |  |  |  | Người lập  |  |  |  |  |
| 218 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 221 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 224 | 1 | AWS - 202453187726  | 2020-07-01 | 5424.45 | 23265 | `=D224*E224` |  |  |
| 225 | 2 | GCP - 496160243049 | 2020-07-02 | 15407.4 | 23265 | `=D225*E225` |  |  |
| 226 |  | Tổng cộng |  | `=D224+D225` |  | `=F224+F225` |  |  |
| 227 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D226*0.1` |  | `=F226*0.1` |  |  |
| 228 |  | Tổng số tiền phải thanh toán |  | `=D226+D227` |  | `=F226+F227` |  |  |
| 230 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 231 |  |  |  | Người lập  |  |  |  |  |
| 235 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 238 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 240 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 241 | 1 | AWS - 202453187726  | 2020-08-01 | 7804.38 | 23270 | `=D241*E241` |  |  |
| 242 | 2 | GCP - 496160243049 | 2020-08-01 | 15862.54 | 23270 | `=D242*E242` |  |  |
| 243 |  | Tổng cộng |  | `=D241+D242` |  | `=F241+F242` |  |  |
| 244 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D243*0.1` |  | `=F243*0.1` |  |  |
| 245 |  | Tổng số tiền phải thanh toán |  | `=D243+D244` |  | `=F243+F244` |  |  |
| 247 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |  |  |
| 248 |  |  |  | Người lập  |  |  |  |  |
| 252 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 255 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 257 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 258 | 1 | AWS - 202453187726  | 2020-09-01 | 4176.99 | 23280 | `=D258*E258` |  |  |
| 259 | 2 | GCP - 496160243049 | 2020-09-01 | 13941.44 | 23280 | `=D259*E259` |  |  |
| 260 |  | Tổng cộng |  | `=D258+D259` |  | `=F258+F259` |  |  |
| 261 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D260*0.1` |  | `=F260*0.1` |  |  |
| 262 |  | Tổng số tiền phải thanh toán |  | `=D260+D261` |  | `=F260+F261` |  |  |
| 266 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 268 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 269 | 1 | AWS - 202453187726  | 2020-10-01 | 4156.85 | 23270 | `=D269*E269` |  |  |
| 270 | 2 | GCP - 496160243049 | 2020-10-02 | 15397.53 | 23270 | `=D270*E270` |  |  |
| 271 |  | Tổng cộng |  | `=D269+D270` |  | `=F269+F270` |  |  |
| 272 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D271*0.1` |  | `=F271*0.1` |  |  |
| 273 |  | Tổng số tiền phải thanh toán |  | `=D271+D272` |  | `=F271+F272` |  |  |
| 277 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 279 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 280 | 1 | AWS - 202453187726  | 2020-11-01 | 2398.64 | 23235 | `=D280*E280` |  |  |
| 281 | 2 | GCP - 496160243049 | 2020-11-01 | 16654.04 | 23235 | `=D281*E281` |  |  |
| 282 |  | Tổng cộng |  | `=D280+D281` |  | `=F280+F281` |  |  |
| 283 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D282*0.1` |  | `=F282*0.1` |  |  |
| 284 |  | Tổng số tiền phải thanh toán |  | `=D282+D283` |  | `=F282+F283` |  |  |
| 288 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 290 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 291 | 1 | AWS - 202453187726  | 2020-12-01 | 2600.63 | 23185 | `=D291*E291` |  |  |
| 292 | 2 | GCP - 496160243049 | 2020-12-01 | 19142.41 | 23185 | `=D292*E292` |  |  |
| 293 |  | Tổng cộng |  | `=D291+D292` |  | `=F291+F292` |  |  |
| 294 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D293*0.1` |  | `=F293*0.1` |  |  |
| 295 |  | Tổng số tiền phải thanh toán |  | `=D293+D294` |  | `=F293+F294` |  |  |
| 299 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 301 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 302 | 1 | AWS - 202453187726  | 2021-01-01 | 2616.63 | 23145 | `=D302*E302` |  |  |
| 303 | 2 | GCP - 496160243049 | 2021-01-01 | 16085.6 | 23145 | `=D303*E303` |  |  |
| 304 |  | Tổng cộng |  | `=D302+D303` |  | `=F302+F303` |  |  |
| 305 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D304*0.1` |  | `=F304*0.1` |  |  |
| 306 |  | Tổng số tiền phải thanh toán |  | `=D304+D305` |  | `=F304+F305` |  |  |
| 309 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 311 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 312 | 1 | AWS - 202453187726  | 2021-02-01 | 3204.27 | 23095 | `=D312*E312` |  |  |
| 313 | 2 | GCP - 496160243049 | 2021-02-01 | 11801.71 | 23095 | `=D313*E313` |  |  |
| 314 |  | GCP - 496160243049 | 2021-02-01 | `=F314/E314` | 23095 | 112281734 |  |  |
| 315 |  | Tổng cộng |  | `=sum(D312:D314)` |  | `=sum(F312:F314)` |  |  |
| 316 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D315*0.1` |  | `=F315*0.1` |  |  |
| 317 |  | Tổng số tiền phải thanh toán |  | `=D315+D316` | 23095 | `=F315+F316` |  |  |
| 320 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 322 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 323 | 1 | AWS - 202453187726  | 2021-03-01 | 3719.77 | 23165 | `=D323*E323` |  |  |
| 324 | 2 | GCP - 496160243049 | 2021-03-01 | 18589.6 | 23165 | `=D324*E324` |  |  |
| 325 |  | Tổng cộng |  | `=sum(D323:D324)` |  | `=sum(F323:F324)` |  |  |
| 326 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D325*0.1` |  | `=F325*0.1` |  |  |
| 327 |  | Tổng số tiền phải thanh toán |  | `=D325+D326` | 23165 | `=F325+F326` |  |  |
| 331 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 333 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 334 | 1 | AWS - 202453187726  | 2021-04-01 | 3684.54 | 23150 | `=D334*E334` |  |  |
| 335 | 2 | GCP - 496160243049 | 2021-04-01 | 19002.71 | 23150 | `=D335*E335` |  |  |
| 336 |  | Tổng cộng |  | `=sum(D334:D335)` |  | `=sum(F334:F335)` |  |  |
| 337 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D336*0.1` |  | `=F336*0.1` |  |  |
| 338 |  | Tổng số tiền phải thanh toán |  | `=D336+D337` | 23150 | `=F336+F337` | 577730822 |  |
| 342 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 344 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 345 | 1 | AWS - 202453187726  | 2021-05-01 | 1744.99 | 23145 | `=round(D345*E345,0)` | `=D345*E345*110%` | 44408752 |
| 346 | 2 | GCP - 496160243049 | 2021-05-01 | 20410.19 | 23145 | `=round(D346*E346,0)` | `=F349-G345` |  |
| 347 |  | Tổng cộng |  | `=sum(D345:D346)` |  | `=sum(F345:F346)` |  |  |
| 348 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D347*0.1` |  | `=F347*0.1` |  |  |
| 349 |  | Tổng số tiền phải thanh toán |  | `=D347+D348` | 23145 | `=F347+F348` |  |  |
| 352 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 354 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 355 | 1 | AWS - 202453187726  | 2021-06-01 | 1765.45 | 23130 | `=round(D355*E355,0)` |  |  |
| 356 |  | Tổng cộng |  | `=sum(D355)` |  | `=sum(F355)` |  |  |
| 357 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D356*0.1` |  | `=F356*0.1` |  |  |
| 358 |  | Tổng số tiền phải thanh toán |  | `=D356+D357` | 23130 | `=F356+F357` |  |  |
| 362 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 364 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 365 | 1 | GCP - 496160243049 | 01/06/2021 - 23/06/2021 | 16187.01 | 23130 | `=round(D365*E365,0)` |  |  |
| 366 | 2 | GCP - 496160243049 | 23/06/2021 - 30/06/2021 | 5713.27 | 23130 | `=round(D366*E366,0)` |  |  |
| 367 |  | Discount (3%) (cho khoảng thời gian từ 23 - 30/06/2021) |  | `=D366*3%` |  |  |  | 21900.28 |
| 368 |  | Tổng cộng |  | `=D365+(D366-D367)` | 23130 | `=round(D368*E368,0)` |  |  |
| 369 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D368*0.1` |  | `=F368*0.1` |  |  |
| 370 |  | Tổng số tiền phải thanh toán |  | `=D368+D369` | 23130 | `=F368+F369` |  |  |
| 374 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 376 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 377 | 1 | GCP - 496160243049 | 2021-07-01 | 20743.33 | 23050 | `=round(D377*E377,0)` |  |  |
| 378 |  | Discount (3%) |  | `=$D$377*3%` |  |  |  |  |
| 379 |  | Tổng cộng |  | `=D377-D378` | 23050 | `=round(D379*E379,0)` |  |  |
| 380 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D379*0.1` |  | `=F379*0.1` |  |  |
| 381 |  | Tổng số tiền phải thanh toán |  | `=D379+D380` | 23050 | `=F379+F380` | 510168718.3999999762 |  |
| 384 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 386 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 387 | 1 | AWS - 202453187726  | 2021-07-01 | 1671.89 | 23050 | `=round(D387*E387,0)` |  |  |
| 388 |  | Tổng cộng |  | `=sum(D387)` |  | `=sum(F387)` |  |  |
| 389 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D388*0.1` |  | `=F388*0.1` |  |  |
| 390 |  | Tổng số tiền phải thanh toán |  | `=D388+D389` | 23050 | `=F388+F389` |  |  |
| 393 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 395 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 396 | 1 | GCP - 496160243049 | 2021-08-01 | `=22006.84+3080.29` | 22880 | `=round(D396*E396,0)` |  |  |
| 397 |  | Discount (3%) |  | `=D396*3%` |  |  |  |  |
| 398 |  | Tổng cộng |  | `=D396-D397` | 22880 | `=round(D398*E398,0)` |  |  |
| 399 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D398*0.1` |  | `=F398*0.1` |  |  |
| 400 |  | Tổng số tiền phải thanh toán |  | `=D398+D399` | 22880 | `=F398+F399` | 612451100.7999999523 |  |
| 404 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 406 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 407 | 1 | AWS - 202453187726  | 2021-08-01 | 1758.64 | 22880 | `=round(D407*E407,0)` | 44261451.299999997 |  |
| 408 |  | Tổng cộng |  | `=sum(D407)` |  | `=sum(F407)` |  |  |
| 409 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D408*0.1` |  | `=F408*0.1` |  |  |
| 410 |  | Tổng số tiền phải thanh toán |  | `=D408+D409` | 22880 | `=F408+F409` |  | 44261451.299999997 |
| 417 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 419 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 420 | 1 | GCP - 496160243049 | 2021-09-01 | 20782.22 | 22840 | `=round(D420*E420,0)` |  |  |
| 421 |  | Discount (3%) |  | `=D420*3%` |  |  |  |  |
| 422 |  | Tổng cộng |  | `=D420-D421` | 22840 | `=round(D422*E422,0)` |  |  |
| 423 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D422*0.1` |  | `=F422*0.1` |  |  |
| 424 |  | Tổng số tiền phải thanh toán |  | `=D422+D423` | 22840 | `=F422+F423` |  |  |
| 428 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 429 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 431 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 432 | 1 | AWS - 202453187726  | 2021-09-01 | 1713.28 | 22840 | `=round(D432*E432,0)` |  |  |
| 433 |  | Tổng cộng |  | `=sum(D432)` |  | `=sum(F432)` |  |  |
| 434 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D433*0.1` |  | `=F433*0.1` |  |  |
| 435 |  | Tổng số tiền phải thanh toán |  | `=D433+D434` | 22840 | `=F433+F434` |  |  |
| 438 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 440 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 441 | 1 | AWS - 202453187726  | 2021-10-01 | 1861.17 | 22850 | `=round(D441*E441,0)` |  |  |
| 442 |  | Tổng cộng |  | `=sum(D441)` |  | `=sum(F441)` |  |  |
| 443 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D442*0.1` |  | `=F442*0.1` |  |  |
| 444 |  | Tổng số tiền phải thanh toán |  | `=D442+D443` | 22850 | `=F442+F443` |  |  |
| 447 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 449 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 450 | 1 | GCP - 496160243049 | 2021-10-01 | 22989.46 | 22850 | `=round(D450*E450,0)` |  |  |
| 451 |  | Discount (3%) |  | `=D450*3%` |  |  |  |  |
| 452 |  | Tổng cộng |  | `=D450-D451` | 22850 | `=round(D452*E452,0)` |  |  |
| 453 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D452*0.1` |  | `=F452*0.1` |  |  |
| 454 |  | Tổng số tiền phải thanh toán |  | `=D452+D453` | 22850 | `=F452+F453` |  |  |
| 457 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 459 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 460 | 1 | GCP - 496160243049 | 2021-11-01 | 24109.27 | 22800 | `=round(D460*E460,0)` |  |  |
| 461 |  | Discount (3%) |  | `=D460*3%` |  |  |  |  |
| 462 |  | Tổng cộng |  | `=D460-D461` | 22800 | `=round(D462*E462,0)` |  |  |
| 463 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D462*0.1` |  | `=F462*0.1` |  |  |
| 464 |  | Tổng số tiền phải thanh toán |  | `=D462+D463` | 22800 | `=F462+F463` | 586520676.5 |  |
| 467 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 469 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 470 | 1 | AWS - 202453187726  | 2021-11-01 | 1979.16 | 22800 | `=round(D470*E470,0)` |  |  |
| 471 |  | Tổng cộng |  | `=sum(D470)` |  | `=sum(F470)` |  |  |
| 472 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D471*0.1` |  | `=F471*0.1` |  |  |
| 473 |  | Tổng số tiền phải thanh toán |  | `=D471+D472` | 22800 | `=F471+F472` | 49637332.799999997 |  |
| 477 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 479 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 480 | 1 | GCP - 496160243049 | 2021-12-01 | 26191.12 | 22920 | `=round(D480*E480,0)` |  |  |
| 481 |  | Discount (3%) |  | `=D480*3%` |  |  |  |  |
| 482 |  | Tổng cộng |  | `=D480-D481` | 22920 | `=round(D482*E482,0)` |  |  |
| 483 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D482*0.1` |  | `=F482*0.1` |  |  |
| 484 | Tổng số tiền phải thanh toán |  |  | `=D482+D483` | 22920 | `=F482+F483` | 640520601.6000000238 |  |
| 487 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 489 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 490 | 1 | AWS - 202453187726  | 2021-12-01 | 2022.35 | 22920 | `=round(D490*E490,0)` |  |  |
| 491 |  | Tổng cộng |  | `=sum(D490)` |  | `=sum(F490)` |  |  |
| 492 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D491*0.1` |  | `=F491*0.1` |  |  |
| 493 |  | Tổng số tiền phải thanh toán |  | `=D491+D492` | 22920 | `=F491+F492` | 50987488.200000003 |  |
| 497 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 499 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 500 | 1 | AWS - 202453187726  | 2022-01-01 | 2101.71 | 22780 | `=round(D500*E500,0)` |  |  |
| 501 |  | Tổng cộng |  | `=sum(D500)` |  | `=sum(F500)` |  |  |
| 502 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D501*0.1` |  | `=F501*0.1` |  |  |
| 503 |  | Tổng số tiền phải thanh toán |  | `=D501+D502` | 22780 | `=F501+F502` | 52664649.3999999985 |  |
| 507 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 509 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 510 | 1 | GCP - 496160243049 | 2022-01-01 | 28580.47 | 22780 | `=round(D510*E510,0)` |  |  |
| 511 |  | Discount (3%) |  | `=D510*3%` |  |  |  |  |
| 512 |  | Tổng cộng |  | `=D510-D511` | 22780 | `=round(D512*E512,0)` |  |  |
| 513 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D512*0.1` |  | `=round(F512*0.1,0)` |  |  |
| 514 | Tổng số tiền phải thanh toán |  |  | `=D512+D513` | 22780 | `=F512+F513` | 694684334 |  |
| 518 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 520 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 521 | 1 | GCP - 496160243049 | 2022-02-01 | 23560.05 | 22950 | `=round(D521*E521,0)` |  |  |
| 522 |  | Discount (3%) |  | `=D521*3%` |  |  |  |  |
| 523 |  | Tổng cộng |  | `=D521-D522` | 22950 | `=round(D523*E523,0)` |  |  |
| 524 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D523*0.1` |  | `=round(F523*0.1,0)` |  |  |
| 525 | Tổng số tiền phải thanh toán |  |  | `=D523+D524` | 22950 | `=F523+F524` | 576930258 |  |
| 528 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 530 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 531 | 1 | AWS - 202453187726  | 2022-02-01 | 2150.62 | 22950 | `=round(D531*E531,0)` |  |  |
| 532 |  | Tổng cộng |  | `=sum(D531)` |  | `=sum(F531)` |  |  |
| 533 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D532*0.1` |  | `=F532*0.1` |  |  |
| 534 |  | Tổng số tiền phải thanh toán |  | `=D532+D533` | 22950 | `=F532+F533` | 54292401.8999999985 |  |
| 537 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 539 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 540 | 1 | GCP - 496160243049 | 2022-03-01 | 24167.41 | 22980 | `=round(D540*E540,0)` |  |  |
| 541 |  | Discount (3%) |  | `=D540*3%` |  |  |  |  |
| 542 |  | Tổng cộng |  | `=D540-D541` | 22980 | `=round(D542*E542,0)` |  |  |
| 543 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D542*0.1` |  | `=round(F542*0.1,0)` |  |  |
| 544 | Tổng số tiền phải thanh toán |  |  | `=D542+D543` | 22980 | `=F542+F543` | 592576676 |  |
| 547 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 549 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 550 | 1 | AWS - 202453187726  | 2022-03-01 | 2356.66 | 22980 | `=round(D550*E550,0)` |  |  |
| 551 |  | Tổng cộng |  | `=sum(D550)` |  | `=sum(F550)` |  |  |
| 552 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D551*0.1` |  | `=F551*0.1` |  |  |
| 553 |  | Tổng số tiền phải thanh toán |  | `=D551+D552` | 22980 | `=F551+F552` | 59571651.700000003 |  |
| 556 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 558 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 559 | 1 | AWS - 202453187726  | 2022-04-01 | 2447.93 | 23095 | `=round(D559*E559,0)` |  |  |
| 560 |  | Tổng cộng |  | `=sum(D559)` |  | `=sum(F559)` |  |  |
| 561 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D560*0.1` |  | `=F560*0.1` |  |  |
| 562 |  | Tổng số tiền phải thanh toán |  | `=D560+D561` | 23095 | `=F560+F561` | 62188437.299999997 |  |
| 565 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 567 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 568 | 1 | GCP - 496160243049 | 2022-04-01 | 23531.74 | 23095 | `=round(D568*E568,0)` |  |  |
| 569 |  | Discount (3%) |  | `=D568*3%` |  |  |  |  |
| 570 |  | Tổng cộng |  | `=D568-D569` | 23095 | `=round(D570*E570,0)` |  |  |
| 571 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D570*0.1` |  | `=round(F570*0.1,0)` |  |  |
| 572 | Tổng số tiền phải thanh toán |  |  | `=D570+D571` | 23095 | `=F570+F571` | 579877726 |  |
| 576 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 578 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 579 | 1 | GCP - 496160243049 | 2022-05-01 | 25672.9 | 23330 | `=round(D579*E579,0)` |  |  |
| 580 |  | Discount (3%) |  | `=D579*3%` |  |  |  |  |
| 581 |  | Tổng cộng |  | `=D579-D580` | 23330 | `=round(D581*E581,0)` |  |  |
| 582 | Phí dịch vụ |  |  | `=D581*0.1` |  | `=round(F581*0.1,0)` |  |  |
| 583 | Tổng số tiền phải thanh toán |  |  | `=D581+D582` | 23330 | `=F581+F582` | 639078323 |  |
| 587 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 589 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 590 | 1 | AWS - 202453187726  | 2022-05-01 | 2443.12 |  |  |  |  |
| 591 |  | Tổng cộng |  | `=sum(D590)` |  |  |  |  |
| 592 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D591*0.1` |  |  |  |  |
| 593 |  | Tổng số tiền phải thanh toán |  | `=round(D591+D592,2)` | 23330 | `=D593*E593` | 62697741.8999999985 |  |
| 596 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 598 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 599 | 1 | AWS - 202453187726  | 2022-06-01 | 3563.43 |  |  |  |  |
| 600 |  | Tổng cộng |  | `=sum(D599)` |  |  |  |  |
| 601 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D600*0.1` |  |  |  |  |
| 602 |  | Tổng số tiền phải thanh toán |  | `=round(D600+D601,2)` | 23415 | `=D602*E602` |  |  |
| 606 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 608 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 609 | 1 | AWS - 202453187726  | 2022-07-01 | 4582.37 |  |  |  |  |
| 610 |  | Tổng cộng |  | `=sum(D609)` |  |  |  |  |
| 611 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D610*0.1` |  |  |  |  |
| 612 |  | Tổng số tiền phải thanh toán |  | `=round(D610+D611,2)` | 23480 | `=D612*E612` |  |  |
| 616 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 618 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 619 | 1 | AWS - 202453187726  | 2022-08-01 | 3180.28 |  |  |  |  |
| 620 |  | Tổng cộng |  | `=sum(D619)` |  |  |  |  |
| 621 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D620*0.1` |  |  |  |  |
| 622 |  | Tổng số tiền phải thanh toán |  | `=round(D620+D621,2)` | 23600 | `=D622*E622` |  |  |
| 625 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 627 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 628 | 1 | AWS - 202453187726  | 2022-09-01 | 5113.31 |  |  |  |  |
| 629 |  | Tổng cộng |  | `=sum(D628)` |  |  |  |  |
| 630 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D629*0.1` |  |  |  |  |
| 631 |  | Tổng số tiền phải thanh toán |  | `=round(D629+D630,2)` | 24010 | `=D631*E631` |  |  |
| 635 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 637 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 638 | 1 | AWS - 202453187726  | 2022-10-01 | 1559.45 |  |  |  |  |
| 639 |  | Tổng cộng |  | `=sum(D638)` |  |  |  |  |
| 640 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D639*0.1` |  |  |  |  |
| 641 |  | Tổng số tiền phải thanh toán |  | `=round(D639+D640,2)` | 24877 | `=D641*E641` |  |  |
| 645 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 647 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 648 | 1 | AWS - 202453187726  | 2022-11-01 | 1438.95 |  |  |  |  |
| 649 |  | Tổng cộng |  | `=sum(D648)` |  |  |  |  |
| 650 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D649*0.1` |  |  |  |  |
| 651 |  | Tổng số tiền phải thanh toán |  | `=round(D649+D650,2)` | 24795 | `=D651*E651` |  |  |
| 654 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 656 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 657 | 1 | AWS - 202453187726  | 2022-12-01 | 1349.79 |  |  |  |  |
| 658 |  | Tổng cộng |  | `=sum(D657)` |  |  |  |  |
| 659 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D658*0.1` |  |  |  |  |
| 660 |  | Tổng số tiền phải thanh toán |  | `=round(D658+D659,2)` | 23760 | `=D660*E660` |  |  |
| 663 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 665 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 666 | 1 | AWS - 202453187726  | 2023-01-01 | 1533.72 |  |  |  |  |
| 667 |  | Tổng cộng |  | `=sum(D666)` |  |  |  |  |
| 668 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D667*0.1` |  |  |  |  |
| 669 |  | Tổng số tiền phải thanh toán |  | `=round(D667+D668,2)` | 23622 | `=D669*E669` |  |  |
| 672 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 674 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 675 | 1 | AWS - 202453187726  | 2023-02-01 | 1514.81 |  |  |  |  |
| 676 |  | Tổng cộng |  | `=sum(D675)` |  |  |  |  |
| 677 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D676*0.1` |  |  |  |  |
| 678 |  | Tổng số tiền phải thanh toán |  | `=round(D676+D677,2)` | 23955 | `=D678*E678` |  |  |
| 681 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 683 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 684 | 1 | AWS - 202453187726  | 2023-03-01 | 1038.5 |  |  |  |  |
| 685 |  | Tổng cộng |  | `=sum(D684)` |  |  |  |  |
| 686 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D685*0.1` |  |  |  |  |
| 687 |  | Tổng số tiền phải thanh toán |  | `=round(D685+D686,2)` | 23632 | `=D687*E687` |  |  |
| 690 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 692 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 693 | 1 | AWS - 202453187726  | 2023-04-01 | 1035.22 |  |  |  |  |
| 694 |  | Tổng cộng |  | `=sum(D693)` |  |  |  |  |
| 695 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D694*0.1` |  |  |  |  |
| 696 |  | Tổng số tiền phải thanh toán |  | `=round(D694+D695,2)` | 23645 | `=D696*E696` |  |  |
| 699 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 701 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 702 | 1 | AWS - 202453187726  | 2023-05-01 | 1122.05 |  |  |  |  |
| 703 |  | Tổng cộng |  | `=sum(D702)` |  |  |  |  |
| 704 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D703*0.1` |  |  |  |  |
| 705 |  | Tổng số tiền phải thanh toán |  | `=round(D703+D704,2)` | 23662 | `=D705*E705` |  |  |
| 708 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 710 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 711 | 1 | AWS - 202453187726  | 2023-06-01 | 1151.85 |  |  |  |  |
| 712 |  | Tổng cộng |  | `=sum(D711)` |  |  |  |  |
| 713 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D712*0.1` |  |  |  |  |
| 714 |  | Tổng số tiền phải thanh toán |  | `=round(D712+D713,2)` | 23762 | `=D714*E714` |  |  |
| 717 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 719 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 720 | 1 | AWS - 202453187726  | 2023-07-01 | 1168.23 |  |  |  |  |
| 721 |  | Tổng cộng |  | `=sum(D720)` |  |  |  |  |
| 722 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D721*0.1` |  |  |  |  |
| 723 |  | Tổng số tiền phải thanh toán |  | `=round(D721+D722,2)` | 23860 | `=D723*E723` |  |  |
| 726 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 728 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 729 | 1 | AWS - 202453187726  | 2023-08-01 | 1239.78 |  |  |  |  |
| 730 |  | Tổng cộng |  | `=sum(D729)` |  |  |  |  |
| 731 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D730*0.1` |  |  |  |  |
| 732 |  | Tổng số tiền phải thanh toán |  | `=round(D730+D731,2)` | 24260 | `=D732*E732` |  |  |
| 735 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 737 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 738 | 1 | AWS - 202453187726  | 2023-09-01 | 646.93 |  |  |  |  |
| 739 |  | Tổng cộng |  | `=sum(D738)` |  |  |  |  |
| 740 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D739*0.1` |  |  |  |  |
| 741 |  | Tổng số tiền phải thanh toán |  | `=round(D739+D740,2)` | 24470 | `=D741*E741` |  |  |
| 744 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 746 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 747 | 1 | AWS - 202453187726  | 2023-10-01 | 739.09 |  |  |  |  |
| 748 |  | Tổng cộng |  | `=sum(D747)` |  |  |  |  |
| 749 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D748*0.1` |  |  |  |  |
| 750 |  | Tổng số tiền phải thanh toán |  | `=round(D748+D749,2)` | 24729 | `=D750*E750` |  |  |
| 753 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 755 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 756 | 1 | AWS - 202453187726  | 2023-11-01 | 547.86 |  |  |  |  |
| 757 |  | Tổng cộng |  | `=sum(D756)` |  |  |  |  |
| 758 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D757*0.1` |  |  |  |  |
| 759 |  | Tổng số tiền phải thanh toán |  | `=round(D757+D758,2)` | 24427 | `=D759*E759` |  |  |
| 763 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 765 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 766 | 1 | AWS - 202453187726  | 2023-12-01 | 842.96 |  |  |  |  |
| 767 |  | Tổng cộng |  | `=sum(D766)` |  |  |  |  |
| 768 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D767*0.1` |  |  |  |  |
| 769 |  | Tổng số tiền phải thanh toán |  | `=round(D767+D768,2)` | 24450 | `=D769*E769` |  |  |
| 773 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 775 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 776 | 1 | AWS - 202453187726  | 2024-01-01 | 710.84 |  |  |  |  |
| 777 |  | Tổng cộng |  | `=sum(D776)` |  |  |  |  |
| 778 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D777*0.1` |  |  |  |  |
| 779 |  | Tổng số tiền phải thanh toán |  | `=round(D777+D778,2)` | 24578 | `=D779*E779` |  |  |
| 783 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 785 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 786 | 1 | AWS - 202453187726  | 2024-02-01 | 609.65 |  |  |  |  |
| 787 |  | Tổng cộng |  | `=sum(D786)` |  |  |  |  |
| 788 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D787*0.1` |  |  |  |  |
| 789 |  | Tổng số tiền phải thanh toán |  | `=round(D787+D788,2)` | 24802 | `=D789*E789` |  |  |
| 793 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 795 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 796 | 1 | AWS - 202453187726  | 2024-03-01 | 679.94 |  |  |  |  |
| 797 |  | Tổng cộng |  | `=sum(D796)` |  |  |  |  |
| 798 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D797*0.1` |  |  |  |  |
| 799 |  | Tổng số tiền phải thanh toán |  | `=round(D797+D798,2)` | 24972 | `=D799*E799` |  |  |
| 802 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 804 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 805 | 1 | AWS - 202453187726  | 2024-04-01 | 760.42 |  |  |  |  |
| 806 |  | Tổng cộng |  | `=sum(D805)` |  |  |  |  |
| 807 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D806*0.1` |  |  |  |  |
| 808 |  | Tổng số tiền phải thanh toán |  | `=round(D806+D807,2)` | 25458 | `=D808*E808` |  |  |
| 812 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 814 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 815 | 1 | AWS - 202453187726  | 2024-05-01 | 726.87 |  |  |  |  |
| 816 |  | Tổng cộng |  | `=sum(D815)` |  |  |  |  |
| 817 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D816*0.1` |  |  |  |  |
| 818 |  | Tổng số tiền phải thanh toán |  | `=round(D816+D817,2)` | 25474 | `=D818*E818` |  |  |
| 822 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 824 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 825 | 1 | AWS - 202453187726  | 2024-06-01 | 1030.07 |  |  |  |  |
| 826 | Tổng cộng |  |  | `=sum(D825)` |  |  |  |  |
| 827 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D826*(1+5.26%),2)` |  |  |  |  |
| 828 | Chiết khấu (5%) |  |  | `=round(D826*5%,2)` |  |  |  |  |
| 829 | Thành tiền |  |  | `=D827-D828` | 25473 | `=D829*E829` |  |  |
| 830 | Thuế GTGT (10%) |  |  |  |  | `=round(F829*10%,0)` |  |  |
| 831 | Tổng số tiền phải thanh toán |  |  |  |  | `=F829+F830` |  |  |
| 835 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 837 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 838 | 1 | AWS - 202453187726  | 2024-07-01 | 1026.43 |  |  |  |  |
| 839 | Tổng cộng |  |  | `=sum(D838)` |  |  |  |  |
| 840 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D839*(1+5.26%),2)` |  |  |  |  |
| 841 | Chiết khấu (5%) |  |  | `=round(D839*5%,2)` |  |  |  |  |
| 842 | Thành tiền |  |  | `=D840-D841` | 25405 | `=D842*E842` |  |  |
| 843 | Thuế GTGT (10%) |  |  |  |  | `=round(F842*10%,0)` |  |  |
| 844 | Tổng số tiền phải thanh toán |  |  |  |  | `=F842+F843` |  |  |
| 848 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 850 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 851 | 1 | AWS - 202453187726  | 2024-08-01 | 955.05 |  |  |  |  |
| 852 | Tổng cộng |  |  | `=sum(D851)` |  |  |  |  |
| 853 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D852*(1+5.26%),2)` |  |  |  |  |
| 854 | Chiết khấu (5%) |  |  | `=round(D852*5%,2)` |  |  |  |  |
| 855 | Thành tiền |  |  | `=D853-D854` | 25080 | `=D855*E855` |  |  |
| 856 | Thuế GTGT (10%) |  |  |  |  | `=round(F855*10%,0)` |  |  |
| 857 | Tổng số tiền phải thanh toán |  |  |  |  | `=F855+F856` |  |  |
| 861 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 863 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 864 | 1 | AWS - 202453187726  | 2024-09-01 | 757.95 |  |  |  |  |
| 865 | Tổng cộng |  |  | `=sum(D864)` |  |  |  |  |
| 866 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D865*(1+5.26%),2)` |  |  |  |  |
| 867 | Chiết khấu (5%) |  |  | `=round(D865*5%,2)` |  |  |  |  |
| 868 | Thành tiền |  |  | `=D866-D867` | 24733 | `=D868*E868` |  |  |
| 869 | Thuế GTGT (10%) |  |  |  |  | `=round(F868*10%,0)` |  |  |
| 870 | Tổng số tiền phải thanh toán |  |  |  |  | `=F868+F869` |  |  |
| 874 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 876 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 877 | 1 | AWS - 202453187726  | 2024-10-01 | 873.78 |  |  |  |  |
| 878 | Tổng cộng |  |  | `=sum(D877)` |  |  |  |  |
| 879 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D878*(1+5.26%),2)` |  |  |  |  |
| 880 | Chiết khấu (5%) |  |  | `=round(D878*5%,2)` |  |  |  |  |
| 881 | Thành tiền |  |  | `=D879-D880` | 25445 | `=D881*E881` |  |  |
| 882 | Thuế GTGT (10%) |  |  |  |  | `=round(F881*10%,0)` |  |  |
| 883 | Tổng số tiền phải thanh toán |  |  |  |  | `=F881+F882` |  |  |
| 887 | TỔNG HỢP CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 889 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 890 | 1 | AWS - 202453187726  | 2024-11-01 | 2543.59 |  |  |  |  |
| 891 | Tổng cộng |  |  | `=sum(D890)` |  |  |  |  |
| 892 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D891*(1+5.26%),2)` |  |  |  |  |
| 893 | Chiết khấu (5%) |  |  | `=round(D891*5%,2)` |  |  |  |  |
| 894 | Thành tiền |  |  | `=D892-D893` | 25463 | `=D894*E894` |  |  |
| 895 | Thuế GTGT (10%) |  |  |  |  | `=round(F894*10%,0)` |  |  |
| 896 | Tổng số tiền phải thanh toán |  |  |  |  | `=F894+F895` |  |  |
| 900 | ĐỐI SOÁT CHI PHÍ GAPO |  |  |  |  |  |  |  |
| 902 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |  |
| 903 | 1 | AWS - 202453187726  | 2024-12-01 | 112.25 |  |  |  |  |
| 904 | Tổng cộng |  |  | `=sum(D903)` |  |  |  |  |
| 905 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D904*(1+5.26%),2)` |  |  |  |  |
| 906 | Chiết khấu (5%) |  |  | `=round(D904*5%,2)` |  |  |  |  |
| 907 | Thành tiền |  |  | `=D905-D906` | 25551 | `=D907*E907` |  |  |
| 908 | Thuế GTGT (10%) |  |  |  |  | `=round(F907*10%,0)` |  |  |
| 909 | Tổng số tiền phải thanh toán |  |  |  |  | `=F907+F908` |  |  |

> *Đã bỏ qua 341 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (509 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.1` | 71 | `D6` |
| D | `=D{r}+D{r}` | 63 | `D7` |
| D | `=sum(D{r})` | 43 | `D356` |
| D | `=round(D{r}+D{r},2)` | 25 | `D593` |
| D | `=D{r}-D{r}` | 18 | `D379` |
| D | `=D{r}*3%` | 11 | `D367` |
| D | `=round(D{r}*(1+5.26%),2)` | 7 | `D827` |
| D | `=round(D{r}*5%,2)` | 7 | `D828` |
| D | `=sum(D{r}:D{r})` | 4 | `D315` |
| D | `=D{r}` | 2 | `D5` |
| D | `=F{r}/E{r}` | 1 | `D314` |
| D | `=D{r}+(D{r}-D{r})` | 1 | `D368` |
| D | `=$D${r}*3%` | 1 | `D378` |
| D | `=22006.84+3080.29` | 1 | `D396` |
| F | `=D{r}*E{r}` | 74 | `F4` |
| F | `=F{r}+F{r}` | 70 | `F7` |
| F | `=F{r}*0.1` | 41 | `F6` |
| F | `=round(D{r}*E{r},0)` | 38 | `F345` |
| F | `=sum(F{r})` | 11 | `F356` |
| F | `=round(F{r}*10%,0)` | 7 | `F830` |
| F | `=round(F{r}*0.1,0)` | 5 | `F513` |
| F | `=sum(F{r}:F{r})` | 4 | `F315` |
| F | `=F{r}` | 2 | `F5` |
| G | `=D{r}*E{r}*110%` | 1 | `G345` |
| G | `=F{r}-G{r}` | 1 | `G346` |
