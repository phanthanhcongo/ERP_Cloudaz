# FUNTAP

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `FUNTAP`  
> **Vùng dữ liệu:** 602 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 4 | 1 | 371397073484 | 2020-08-01 | 120.23 | 23270 | `=D4*E4` |  |  |  |  |
| 5 |  | Tổng cộng |  | `=D4` |  | `=F4` |  |  |  |  |
| 6 |  | Tổng số tiền phải thanh toán |  | `=D5` |  | `=F5` |  |  |  |  |
| 8 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |  |  |  |  |
| 9 |  |  |  |                                Người lập |  |  |  |  |  |  |
| 13 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |  |
| 16 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 18 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 19 | 1 | 371397073484 | 2020-09-01 | 46993.1 | 23280 | `=D19*E19` |  |  |  |  |
| 20 |  | Tổng cộng |  | `=D19` |  | `=F19` |  |  |  |  |
| 21 |  | Tổng số tiền phải thanh toán |  | `=D20` |  | `=F20` |  |  |  |  |
| 24 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 27 | 1 | 371397073484 | 2020-12-01 | 29958.79 | 23185 | `=D27*E27` |  |  |  |  |
| 28 |  | Tổng cộng |  | `=D27` |  | `=F27` |  |  |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=D28` |  | `=F28` |  |  |  |  |
| 32 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 35 | 1 | 371397073484 | 2021-01-01 | 27431.28 | 23145 | `=D35*E35` |  |  |  |  |
| 36 |  | Tổng cộng |  | `=D35` |  | `=F35` |  |  |  |  |
| 37 |  | Tổng số tiền phải thanh toán |  | `=D36` |  | `=F36` |  |  |  |  |
| 40 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 43 | 1 | 371397073484 | 2021-02-01 | 24652.36 | 23095 | `=D43*E43` |  |  |  |  |
| 44 |  | Tổng cộng |  | `=D43` |  | `=F43` |  |  |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  | `=D44` |  | `=F44` |  |  |  |  |
| 48 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 51 | 1 | 371397073484 | 2021-03-01 | 26766.36 | 23165 | `=D51*E51` |  |  |  |  |
| 52 |  | Tổng cộng |  | `=D51` |  | `=F51` |  |  |  |  |
| 53 |  | Tổng số tiền phải thanh toán |  | `=D52` |  | `=F52` |  |  |  |  |
| 57 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 59 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | Giá vốn |  |  |
| 60 | 1 | 371397073484 | 2021-04-01 | 18561.44 | 23150 | `=round(D60*E60,0)` |  |  |  |  |
| 61 | Tổng cộng |  |  | `=D60` |  | `=F60` |  |  |  |  |
| 62 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D61*0.05` |  | `=F61*0.05` |  |  |  |  |
| 63 |  | Tổng số tiền phải thanh toán |  | `=D61+D62` | 23150 | `=F61+F62` |  | 429697335.9999999404 |  |  |
| 67 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 70 | 1 | 371397073484 | 2021-05-01 | 17105.22 | 23145 | `=round(D70*E70,0)` |  |  |  |  |
| 71 | Tổng cộng |  |  | `=D70` |  | `=F70` |  |  |  |  |
| 72 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D71*0.05` |  | `=F71*0.05` |  |  |  |  |
| 73 |  | Tổng số tiền phải thanh toán |  | `=D71+D72` | 23145 | `=F71+F72` |  | 395900316.9000000358 |  |  |
| 77 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 79 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 80 | 1 | 371397073484 | 2021-06-01 | `=72.93+16260.83` | 23130 | `=round(D80*E80,0)` |  |  |  |  |
| 81 | Tổng cộng |  |  | `=D80` |  | `=F80` |  |  |  |  |
| 82 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D81*0.05` |  | `=F81*0.05` |  |  |  |  |
| 83 |  | Tổng số tiền phải thanh toán |  | `=D81+D82` | 23130 | `=F81+F82` |  | 376112997.8999999762 |  |  |
| 88 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 90 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 91 | 1 | 371397073484 | 2021-07-01 | 17039.46 | 23050 | `=round(D91*E91,0)` |  |  |  |  |
| 92 | Tổng cộng |  |  | `=D91` |  | `=F91` |  |  |  |  |
| 93 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D92*0.05` |  | `=F92*0.05` |  |  |  |  |
| 94 |  | Tổng số tiền phải thanh toán |  | `=D92+D93` | 23050 | `=F92+F93` |  | 392759553 |  |  |
| 97 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 100 | 1 | 371397073484 | 2021-08-01 | 17184.96 | 22880 | `=round(D100*E100,0)` |  |  |  |  |
| 101 | Tổng cộng |  |  | `=D100` |  | `=F100` |  |  |  |  |
| 102 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D101*0.05` |  | `=F101*0.05` |  |  |  |  |
| 103 |  | Tổng số tiền phải thanh toán |  | `=D101+D102` | 22880 | `=F101+F102` |  | 393191884.7999999523 |  |  |
| 107 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 110 | 1 | 371397073484 | 2021-09-01 | 16635.27 | 22840 | `=round(D110*E110,0)` |  |  |  |  |
| 111 | Tổng cộng |  |  | `=D110` |  | `=F110` |  |  |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D111*0.05` |  | `=F111*0.05` |  |  |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=D111+D112` | 22840 | `=F111+F112` |  | 372350470.3999999762 |  |  |
| 116 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 119 | 1 | 371397073484 | 2021-10-01 | 16089.71 | 22850 | `=round(D119*E119,0)` |  |  |  |  |
| 120 | Tổng cộng |  |  | `=D119` |  | `=F119` |  |  |  |  |
| 121 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D120*0.05` |  | `=F120*0.05` |  |  |  |  |
| 122 |  | Tổng số tiền phải thanh toán |  | `=D120+D121` | 22850 | `=F120+F121` | 386032367.6999999881 | 360296972 |  |  |
| 125 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 127 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 128 | 1 | 371397073484 | 2021-11-01 | 15986.86 | 22800 | `=round(D128*E128,0)` |  |  |  |  |
| 129 | Tổng cộng |  |  | `=D128` |  | `=F128` |  |  |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D129*0.05` |  | `=F129*0.05` |  |  |  |  |
| 131 |  | Tổng số tiền phải thanh toán |  | `=D129+D130` | 22800 | `=F129+F130` | 382725428.3999999762 | 357210336 |  |  |
| 134 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 137 | 1 | 371397073484 | 2021-12-01 | 16590.95 | 23150 | `=round(D137*E137,0)` |  |  |  |  |
| 138 | Tổng cộng |  |  | `=D137` |  | `=F137` |  |  |  |  |
| 139 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D138*0.05` |  | `=F138*0.05` |  |  |  |  |
| 140 |  | Tổng số tiền phải thanh toán |  | `=D138+D139` | 23150 | `=F138+F139` |  | 376398628 | `=16259.12*22920` |  |
| 143 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 145 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 146 | 1 | 371397073484 | 2022-01-01 | 16791.74 | 22780 | `=round(D146*E146,0)` |  |  |  |  |
| 147 | Tổng cộng |  |  | `=D146` |  | `=F146` |  |  |  |  |
| 148 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D147*0.05` |  | `=F147*0.05` |  |  |  |  |
| 149 |  | Tổng số tiền phải thanh toán |  | `=D147+D148` | 22780 | `=F147+F148` | 401641628.8500000238 | 374865629.8000000119 |  |  |
| 152 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 155 | 1 | 371397073484 | 2022-02-01 | 14195.3 | 22814 | `=round(D155*E155,0)` |  |  |  |  |
| 156 | Tổng cộng |  |  | `=D155` |  | `=F155` |  |  |  |  |
| 157 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D156*0.05` |  | `=F156*0.05` |  |  |  |  |
| 158 |  | Tổng số tiền phải thanh toán |  | `=D156+D157` | 22814 | `=F156+F157` | 340044152.6999999881 | 317374451.4599999785 |  |  |
| 161 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 163 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 164 | 1 | 371397073484 | 2022-03-01 | 15384.8 | 23000 | `=round(D164*E164,0)` |  |  |  |  |
| 165 | Tổng cộng |  |  | `=D164` |  | `=F164` |  |  |  |  |
| 166 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D165*0.05` |  | `=F165*0.05` |  |  |  |  |
| 167 |  | Tổng số tiền phải thanh toán |  | `=D165+D166` | 23000 | `=F165+F166` | 371542920 | 346773300 |  |  |
| 170 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 171 |  |  |  |  |  |  |  |  |  | `=49867.3+1017.7` |
| 172 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 173 | 1 | 371397073484 | 2022-04-01 | `=H174-J171` | 23095 | `=round(D173*E173,0)` |  |  |  |  |
| 174 | Tổng cộng |  |  | `=D173` |  | `=F173` |  | 63920.95 |  |  |
| 175 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D174*0.05` |  | `=F174*0.05` |  |  |  |  |
| 176 |  | Tổng số tiền phải thanh toán |  | `=D174+D175` | 23095 | `=F174+F175` | 316118528.25 |  |  |  |
| 179 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 181 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 182 | 1 | 371397073484 | 2022-05-01 | 11636.73 |  |  |  |  |  |  |
| 183 | Tổng cộng |  |  | `=D182` |  |  |  |  |  |  |
| 184 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D183*0.05` |  |  |  |  |  |  |
| 185 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D183+D184,2)` | 23330 | `=D185*E185` |  |  |  |  |
| 186 |  |  | / |  |  |  |  |  |  |  |
| 188 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 191 | 1 | 371397073484 | 2022-06-01 | 11325.25 |  |  |  |  |  |  |
| 192 | Tổng cộng |  |  | `=D191` |  |  |  |  |  |  |
| 193 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D192*0.05` |  |  |  |  |  |  |
| 194 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D192+D193,2)` | 23405 | `=D194*E194` |  |  |  |  |
| 197 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 199 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 200 | 1 | 371397073484 | 2022-07-01 | 11707.94 |  |  |  |  |  |  |
| 201 | Tổng cộng |  |  | `=D200` |  |  |  |  |  |  |
| 202 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D201*0.05` |  |  |  |  |  |  |
| 203 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D201+D202,2)` | 23480 | `=D203*E203` |  |  |  |  |
| 206 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 208 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 209 | 1 | 371397073484 | 2022-08-01 | 10922.33 |  |  |  |  |  |  |
| 210 | Tổng cộng |  |  | `=D209` |  |  |  |  |  |  |
| 211 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D210*0.05` |  |  |  |  |  |  |
| 212 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D210+D211,2)` | 23590 | `=D212*E212` |  |  |  |  |
| 215 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 217 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 218 | 1 | 371397073484 | 2022-09-01 | 10471.21 |  |  |  |  |  |  |
| 219 | Tổng cộng |  |  | `=D218` |  |  |  |  |  |  |
| 220 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D219*0.05` |  |  |  |  |  |  |
| 221 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D219+D220,2)` | 24013 | `=D221*E221` |  |  |  |  |
| 224 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 226 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 227 | 1 | 371397073484 | 2022-10-01 | 10198.8 |  |  |  |  |  |  |
| 228 | Tổng cộng |  |  | `=D227` |  |  |  |  |  |  |
| 229 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D228*0.05` |  |  |  |  |  |  |
| 230 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D228+D229,2)` | 24879 | `=D230*E230` |  |  |  |  |
| 233 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 235 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 236 | 1 | 371397073484 | 2022-11-01 | 9453.3375905919 |  |  |  |  |  |  |
| 237 | Tổng cộng |  |  | `=D236` |  |  |  |  |  |  |
| 238 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D237*0.05,2)` |  |  |  |  |  |  |
| 239 |  | Tổng số tiền phải thanh toán |  | `=D237+D238` | 24800 | `=D239*E239` |  |  |  |  |
| 242 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 245 | 1 | 371397073484 | 2022-12-01 | 10177.8939636428 |  |  |  |  |  |  |
| 246 | Tổng cộng |  |  | `=D245` |  |  |  |  |  |  |
| 247 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D246*0.05,3)` |  |  |  |  |  |  |
| 248 |  | Tổng số tiền phải thanh toán |  | `=D246+D247` | 23600 | 252208244 |  |  |  |  |
| 251 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 253 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 254 | 1 | 371397073484 | 2023-01-01 | 9774.04 |  |  |  |  |  |  |
| 255 | Tổng cộng |  |  | `=D254` |  |  |  |  |  |  |
| 256 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D255*0.05,2)` |  |  |  |  |  |  |
| 257 |  | Tổng số tiền phải thanh toán |  | `=D255+D256` | 23755 | `=D257*E257` |  |  |  |  |
| 260 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 262 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 263 | 1 | 371397073484 | 2023-02-01 | 8153.15 |  |  |  |  |  |  |
| 264 | Tổng cộng |  |  | `=D263` |  |  |  |  |  |  |
| 265 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D264*0.05,2)` |  |  |  |  |  |  |
| 266 |  | Tổng số tiền phải thanh toán |  | `=D264+D265` | 23860 | `=D266*E266` |  |  |  |  |
| 269 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 271 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 272 | 1 | 371397073484 | 2023-03-01 | 8850.58 |  |  |  |  |  |  |
| 273 | Tổng cộng |  |  | `=D272` |  |  |  |  |  |  |
| 274 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D273*0.05,2)` |  |  |  |  |  |  |
| 275 |  | Tổng số tiền phải thanh toán |  | `=D273+D274` | 23595 | `=D275*E275` |  |  |  |  |
| 278 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 280 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 281 | 1 | 371397073484 | 2023-04-01 | 8303.59 |  |  |  |  |  |  |
| 282 | Tổng cộng |  |  | `=D281` |  |  |  |  |  |  |
| 283 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D282*0.05,2)` |  |  |  |  |  |  |
| 284 | Tổng số tiền phải thanh toán |  |  | `=D282+D283` | 23596 | `=D284*E284` |  |  |  |  |
| 287 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 289 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 290 | 1 | 371397073484 | 2023-05-01 | 7025.46 |  |  |  |  |  |  |
| 291 | Tổng cộng |  |  | `=D290` |  |  |  |  |  |  |
| 292 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D291*0.05,2)` |  |  |  |  |  |  |
| 293 | Tổng số tiền phải thanh toán |  |  | `=D291+D292` | 23640 | `=D293*E293` |  |  |  |  |
| 296 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 298 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 299 | 1 | 371397073484 | 2023-06-01 | 2667.93 |  |  |  |  |  |  |
| 300 | Tổng cộng |  |  | `=D299` |  |  |  |  |  |  |
| 301 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D300*0.05,2)` |  |  |  |  |  |  |
| 302 | Tổng số tiền phải thanh toán |  |  | `=D300+D301` | 23880 | `=D302*E302` |  |  |  |  |
| 305 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 307 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 308 | 1 | 371397073484 | 2023-07-01 | 7928.88 |  |  |  |  |  |  |
| 309 | Tổng cộng |  |  | `=D308` |  |  |  |  |  |  |
| 310 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D309*0.05,2)` |  |  |  |  |  |  |
| 311 | Tổng số tiền phải thanh toán |  |  | `=D309+D310` | 23880 | `=D311*E311` |  |  |  |  |
| 314 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 316 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 317 | 1 | 371397073484 | 2023-08-01 | 7303.41 |  |  |  |  |  |  |
| 318 | Tổng cộng |  |  | `=D317` |  |  |  |  |  |  |
| 319 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D318*0.05,2)` |  |  |  |  |  |  |
| 320 | Tổng số tiền phải thanh toán |  |  | `=D318+D319` | 24210 | `=D320*E320` |  |  |  |  |
| 323 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 325 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 326 | 1 | 371397073484 | 2023-09-01 | 2419.38 |  |  |  |  |  |  |
| 327 | Tổng cộng |  |  | `=D326` |  |  |  |  |  |  |
| 328 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D327*0.05,2)` |  |  |  |  |  |  |
| 329 | Tổng số tiền phải thanh toán |  |  | `=D327+D328` | 24535 | `=D329*E329` |  |  |  |  |
| 332 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 334 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 335 | 1 | 371397073484 | 2023-10-01 | 5569.09 |  |  |  |  |  |  |
| 336 | Tổng cộng |  |  | `=D335` |  |  |  |  |  |  |
| 337 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D336*0.05,2)` |  |  |  |  |  |  |
| 338 | Tổng số tiền phải thanh toán |  |  | `=D336+D337` | 24550 | `=D338*E338` |  |  |  |  |
| 342 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 344 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 345 | 1 | 371397073484 | 2023-11-01 | 7009.63 |  |  |  |  |  |  |
| 346 | Tổng cộng |  |  | `=D345` |  |  |  |  |  |  |
| 347 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D346*0.05,2)` |  |  |  |  |  |  |
| 348 | Tổng số tiền phải thanh toán |  |  | `=D346+D347` | 24415 | `=D348*E348` |  |  |  |  |
| 352 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 354 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 355 | 1 | 371397073484 | 2023-12-01 | 6693.01 |  |  |  |  |  |  |
| 356 | Tổng cộng |  |  | `=D355` |  |  |  |  |  |  |
| 357 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D356*0.05,2)` |  |  |  |  |  |  |
| 358 | Tổng số tiền phải thanh toán |  |  | `=D356+D357` | 24495 | `=D358*E358` |  |  |  |  |
| 361 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 363 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 364 | 1 | 371397073484 | 2024-01-01 | 6637.06 |  |  |  |  |  |  |
| 365 | Tổng cộng |  |  | `=D364` |  |  |  |  |  |  |
| 366 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D365*0.05,2)` |  |  |  |  |  |  |
| 367 | Tổng số tiền phải thanh toán |  |  | `=D365+D366` | 24675 | `=D367*E367` |  |  |  |  |
| 371 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 373 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 374 | 1 | 371397073484 | 2024-02-01 | 7069.65 |  |  |  |  |  |  |
| 375 | Tổng cộng |  |  | `=D374` |  |  |  |  |  |  |
| 376 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D375*0.05,2)` |  |  |  |  |  |  |
| 377 | Tổng số tiền phải thanh toán |  |  | `=D375+D376` | 24850 | `=D377*E377` |  |  |  |  |
| 381 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 383 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 384 | 1 | 371397073484 | 2024-03-01 | 6764.08 |  |  |  |  |  |  |
| 385 | Tổng cộng |  |  | `=D384` |  |  |  |  |  |  |
| 386 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D385*0.05,2)` |  |  |  |  |  |  |
| 387 | Tổng số tiền phải thanh toán |  |  | `=D385+D386` | 25115 | `=D387*E387` |  |  |  |  |
| 391 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 393 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 394 | 1 | 371397073484 | 2024-04-01 | 6639.87 |  |  |  |  |  |  |
| 395 | Tổng cộng |  |  | `=D394` |  |  |  |  |  |  |
| 396 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D395*0.05,2)` |  |  |  |  |  |  |
| 397 | Tổng số tiền phải thanh toán |  |  | `=D395+D396` | 25461 | `=D397*E397` |  |  |  |  |
| 401 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 403 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 404 | 1 | 371397073484 | 2024-05-01 | 6757.02 |  |  |  |  |  |  |
| 405 | Tổng cộng |  |  | `=D404` |  |  |  |  |  |  |
| 406 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D405*0.05,2)` |  |  |  |  |  |  |
| 407 | Tổng số tiền phải thanh toán |  |  | `=D405+D406` | 25453 | `=D407*E407` |  |  |  |  |
| 411 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 413 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 414 | 1 | 371397073484 | 2024-06-01 | 7167.13 |  |  |  |  |  |  |
| 415 | Tổng cộng |  |  | `=D414` |  |  |  |  |  |  |
| 416 | Phí dịch vụ 5.26% |  |  | `=round(D415*5.26%,2)` |  |  |  |  |  |  |
| 417 | Chiết khấu 3% |  |  | `=round((D415+D416)*3%,2)` |  |  |  |  |  |  |
| 418 | Thành tiền |  |  | `=D415+D416-D417` | 24995 | `=D418*E418` |  |  |  |  |
| 419 | Thuế GTGT 10% |  |  |  |  | `=round(F418*10%,0)` |  |  |  |  |
| 420 | Tổng số tiền phải thanh toán |  |  |  |  | `=F418+F419` |  |  |  |  |
| 424 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 426 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 427 | 1 | 371397073484 | 2024-07-01 | 7260.52 |  |  |  |  |  |  |
| 428 | Tổng cộng |  |  | `=D427` |  |  |  |  |  |  |
| 429 | Phí dịch vụ 5.26% |  |  | `=round(D428*5.26%,2)` |  |  |  |  |  |  |
| 430 | Chiết khấu 3% |  |  | `=round((D428+D429)*3%,2)` |  |  |  |  |  |  |
| 431 | Thành tiền |  |  | `=D428+D429-D430` | 24995 | `=D431*E431` |  |  |  |  |
| 432 | Thuế GTGT 10% |  |  |  |  | `=round(F431*10%,0)` |  |  |  |  |
| 433 | Tổng số tiền phải thanh toán |  |  |  |  | `=F431+F432` |  |  |  |  |
| 437 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 439 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 440 | 1 | 371397073484 | 2024-08-01 | 7231.45 |  |  |  |  |  |  |
| 441 | Tổng cộng |  |  | `=D440` |  |  |  |  |  |  |
| 442 | Phí dịch vụ 5.26% |  |  | `=round(D441*5.26%,2)` |  |  |  |  |  |  |
| 443 | Chiết khấu 3% |  |  | `=round((D441+D442)*3%,2)` |  |  |  |  |  |  |
| 444 | Thành tiền |  |  | `=D441+D442-D443` | 24855 | `=D444*E444` |  |  |  |  |
| 445 | Thuế GTGT 10% |  |  |  |  | `=round(F444*10%,0)` |  |  |  |  |
| 446 | Tổng số tiền phải thanh toán |  |  |  |  | `=F444+F445` |  |  |  |  |
| 450 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 452 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 453 | 1 | 371397073484 | 2024-09-01 | 7035.75 |  |  |  |  |  |  |
| 454 | Tổng cộng |  |  | `=D453` |  |  |  |  |  |  |
| 455 | Phí dịch vụ 5.26% |  |  | `=round(D454*5.26%,2)` |  |  |  |  |  |  |
| 456 | Chiết khấu 3% |  |  | `=round((D454+D455)*3%,2)` |  |  |  |  |  |  |
| 457 | Thành tiền |  |  | `=D454+D455-D456` | 25010 | `=D457*E457` |  |  |  |  |
| 458 | Thuế GTGT 10% |  |  |  |  | `=round(F457*10%,0)` |  |  |  |  |
| 459 | Tổng số tiền phải thanh toán |  |  |  |  | `=F457+F458` |  |  |  |  |
| 463 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 465 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 466 | 1 | 371397073484 | 2024-10-01 | 7418.73 |  |  |  |  |  |  |
| 467 | Tổng cộng |  |  | `=D466` |  |  |  |  |  |  |
| 468 | Phí dịch vụ 5.26% |  |  | `=round(D467*5.26%,2)` |  |  |  |  |  |  |
| 469 | Chiết khấu 3% |  |  | `=round((D467+D468)*3%,2)` |  |  |  |  |  |  |
| 470 | Thành tiền |  |  | `=D467+D468-D469` | 25491 | `=D470*E470` |  |  |  |  |
| 471 | Thuế GTGT 10% |  |  |  |  | `=round(F470*10%,0)` |  |  |  |  |
| 472 | Tổng số tiền phải thanh toán |  |  |  |  | `=F470+F471` |  |  |  |  |
| 476 | TỔNG HỢP CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 478 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 479 | 1 | 371397073484 | 2024-11-01 | 6425.7 |  |  |  |  |  |  |
| 480 | Tổng cộng |  |  | `=D479` |  |  |  |  |  |  |
| 481 | Phí dịch vụ 5.26% |  |  | `=round(D480*5.26%,2)` |  |  |  |  |  |  |
| 482 | Chiết khấu 3% |  |  | `=round((D480+D481)*3%,2)` |  |  |  |  |  |  |
| 483 | Thành tiền |  |  | `=D480+D481-D482` | 25470 | `=D483*E483` |  |  |  |  |
| 484 | Thuế GTGT 10% |  |  |  |  | `=round(F483*10%,0)` |  |  |  |  |
| 485 | Tổng số tiền phải thanh toán |  |  |  |  | `=F483+F484` |  |  |  |  |
| 489 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 491 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 492 | 1 | 371397073484 | 2024-12-01 | 6604.7 |  |  |  |  |  |  |
| 493 | Tổng cộng |  |  | `=D492` |  |  |  |  |  |  |
| 494 | Phí dịch vụ 5.26% |  |  | `=round(D493*5.26%,2)` |  |  |  |  |  |  |
| 495 | Chiết khấu 3% |  |  | `=round((D493+D494)*3%,2)` |  |  |  |  |  |  |
| 496 | Thành tiền |  |  | `=D493+D494-D495` | 25553 | `=D496*E496` |  |  |  |  |
| 497 | Thuế GTGT 10% |  |  |  |  | `=round(F496*10%,0)` |  |  |  |  |
| 498 | Tổng số tiền phải thanh toán |  |  |  |  | `=F496+F497` |  |  |  |  |
| 502 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 504 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 505 | 1 | 371397073484 | 2025-01-01 | 6665.27 |  |  |  |  |  |  |
| 506 | Tổng cộng |  |  | `=D505` |  |  |  |  |  |  |
| 507 | Phí dịch vụ 5.26% |  |  | `=round(D506*5.26%,2)` |  |  |  |  |  |  |
| 508 | Chiết khấu 3% |  |  | `=round((D506+D507)*3%,2)` |  |  |  |  |  |  |
| 509 | Thành tiền |  |  | `=D506+D507-D508` | 25400 | `=round(D509*E509,0)` |  |  |  |  |
| 510 | Thuế GTGT 10% |  |  |  |  | `=round(F509*10%,0)` |  |  |  |  |
| 511 | Tổng số tiền phải thanh toán |  |  |  |  | `=F509+F510` |  |  |  |  |
| 515 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 517 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 518 | 1 | 371397073484 | 2025-02-01 | 5905.17 |  |  |  |  |  |  |
| 519 | Tổng cộng |  |  | `=D518` |  |  |  |  |  |  |
| 520 | Phí dịch vụ 5.26% |  |  | `=round(D519*5.26%,2)` |  |  |  |  |  |  |
| 521 | Chiết khấu 3% |  |  | `=round((D519+D520)*3%,2)` |  |  |  |  |  |  |
| 522 | Thành tiền |  |  | `=D519+D520-D521` | 25740 | `=round(D522*E522,0)` |  |  |  |  |
| 523 | Thuế GTGT 10% |  |  |  |  | `=round(F522*10%,0)` |  |  |  |  |
| 524 | Tổng số tiền phải thanh toán |  |  |  |  | `=F522+F523` |  |  |  |  |
| 528 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 530 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 531 | 1 | 371397073484 | 2025-03-01 | 6329.92 |  |  |  |  |  |  |
| 532 | Tổng cộng |  |  | `=D531` |  |  |  |  |  |  |
| 533 | Phí dịch vụ 5.26% |  |  | `=round(D532*5.26%,2)` |  |  |  |  |  |  |
| 534 | Chiết khấu 3% |  |  | `=round((D532+D533)*3%,2)` |  |  |  |  |  |  |
| 535 | Thành tiền |  |  | `=D532+D533-D534` | 25970 | `=round(D535*E535,0)` |  |  |  |  |
| 536 | Thuế GTGT 10% |  |  |  |  | `=round(F535*10%,0)` |  |  |  |  |
| 537 | Tổng số tiền phải thanh toán |  |  |  |  | `=F535+F536` |  |  |  |  |
| 541 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 543 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 544 | 1 | 371397073484 | 2025-04-01 | 5956.54 |  |  |  |  |  |  |
| 545 | Tổng cộng |  |  | `=D544` |  |  |  |  |  |  |
| 546 | Phí dịch vụ 5.26% |  |  | `=round(D545*5.26%,2)` |  |  |  |  |  |  |
| 547 | Chiết khấu 3% |  |  | `=round((D545+D546)*3%,2)` |  |  |  |  |  |  |
| 548 | Thành tiền |  |  | `=D545+D546-D547` | 26150 | `=round(D548*E548,0)` |  |  |  |  |
| 549 | Thuế GTGT 10% |  |  |  |  | `=round(F548*10%,0)` |  |  |  |  |
| 550 | Tổng số tiền phải thanh toán |  |  |  |  | `=F548+F549` |  |  |  |  |
| 554 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 556 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 557 | 1 | 371397073484 | 2025-05-01 | 5561.2 |  |  |  |  |  |  |
| 558 | Tổng cộng |  |  | `=D557` |  |  |  |  |  |  |
| 559 | Phí dịch vụ 5.26% |  |  | `=round(D558*5.26%,2)` |  |  |  |  |  |  |
| 560 | Chiết khấu 3% |  |  | `=round((D558+D559)*3%,2)` |  |  |  |  |  |  |
| 561 | Thành tiền |  |  | `=D558+D559-D560` | 26244 | `=round(D561*E561,0)` |  |  |  |  |
| 562 | Thuế GTGT 10% |  |  |  |  | `=round(F561*10%,0)` |  |  |  |  |
| 563 | Tổng số tiền phải thanh toán |  |  |  |  | `=F561+F562` |  |  |  |  |
| 567 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 569 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 570 | 1 | 371397073484 | 2025-06-01 | 5219.47 |  |  |  |  |  |  |
| 571 | Tổng cộng |  |  | `=D570` |  |  |  |  |  |  |
| 572 | Phí dịch vụ 5.26% |  |  | `=round(D571*5.26%,2)` |  |  |  |  |  |  |
| 573 | Chiết khấu 3% |  |  | `=round((D571+D572)*3%,2)` |  |  |  |  |  |  |
| 574 | Thành tiền |  |  | `=D571+D572-D573` | 26330 | `=round(D574*E574,0)` |  |  |  |  |
| 575 | Thuế GTGT 10% |  |  |  |  | `=round(F574*10%,0)` |  |  |  |  |
| 576 | Tổng số tiền phải thanh toán |  |  |  |  | `=F574+F575` |  |  |  |  |
| 580 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 582 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 583 | 1 | 371397073484 | 2025-07-01 | 5221.61 |  |  |  |  |  |  |
| 584 | Tổng cộng |  |  | `=D583` |  |  |  |  |  |  |
| 585 | Phí dịch vụ 10% |  |  | `=round(D584*10%,2)` |  |  |  |  |  |  |
| 586 | Chiết khấu 3% |  |  | `=round((D584+D585)*3%,2)` |  |  |  |  |  |  |
| 587 | Thành tiền |  |  | `=D584+D585-D586` | 26400 | `=round(D587*E587,0)` |  |  |  |  |
| 588 | Thuế GTGT 10% |  |  |  |  | `=round(F587*10%,0)` |  |  |  |  |
| 589 | Tổng số tiền phải thanh toán |  |  |  |  | `=F587+F588` |  |  |  |  |
| 593 | ĐỐI SOÁT CHI PHÍ FUNTAP |  |  |  |  |  |  |  |  |  |
| 595 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 596 | 1 | 371397073484 | 2025-08-01 | 5208.07 |  |  |  |  |  |  |
| 597 | Tổng cộng |  |  | `=D596` |  |  |  |  |  |  |
| 598 | Phí dịch vụ 10% |  |  | `=round(D597*10%,2)` |  |  |  |  |  |  |
| 599 | Chiết khấu 3% |  |  | `=round((D597+D598)*3%,2)` |  |  |  |  |  |  |
| 600 |  |  |  | `=D597+D598-D599` | 26482 | `=round(D600*E600,0)` |  |  |  |  |
| 601 |  |  |  |  |  | `=round(F600*10%,0)` |  |  |  |  |
| 602 |  |  |  |  |  | `=F600+F601` |  |  |  |  |

> *Đã bỏ qua 204 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (329 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 65 | `D5` |
| D | `=D{r}+D{r}` | 32 | `D63` |
| D | `=D{r}*0.05` | 19 | `D62` |
| D | `=round(D{r}*0.05,2)` | 18 | `D238` |
| D | `=round((D{r}+D{r})*3%,2)` | 15 | `D417` |
| D | `=D{r}+D{r}-D{r}` | 15 | `D418` |
| D | `=round(D{r}*5.26%,2)` | 13 | `D416` |
| D | `=ROUND(D{r}+D{r},2)` | 6 | `D185` |
| D | `=round(D{r}*10%,2)` | 2 | `D585` |
| D | `=72.93+16260.83` | 1 | `D80` |
| D | `=H{r}-J{r}` | 1 | `D173` |
| D | `=round(D{r}*0.05,3)` | 1 | `D247` |
| F | `=D{r}*E{r}` | 37 | `F4` |
| F | `=F{r}+F{r}` | 28 | `F63` |
| F | `=F{r}` | 25 | `F5` |
| F | `=round(D{r}*E{r},0)` | 21 | `F60` |
| F | `=round(F{r}*10%,0)` | 15 | `F419` |
| F | `=F{r}*0.05` | 13 | `F62` |
| I | `=16259.12*22920` | 1 | `I140` |
| J | `=49867.3+1017.7` | 1 | `J171` |
