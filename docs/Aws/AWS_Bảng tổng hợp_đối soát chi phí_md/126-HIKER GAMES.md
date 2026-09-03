# HIKER GAMES

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `HIKER GAMES`  
> **Vùng dữ liệu:** 259 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 4 | 1 | 037405116316 | 2021-04-01 | 2197.36 | 23150 | `=D4*E4` |  |  |
| 5 |  | Discount 3% |  | `=D4*3%` |  |  |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` | 23150 | `=round(D6*E6,0)` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.1` |  | `=F6*0.1` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` | 23150 | `=F6+F7` |  | `=D8/D4` |
| 11 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 14 | 1 | 037405116316 | 2021-05-01 | `=2497.98+48.68` | 23145 | `=D14*E14` |  |  |
| 15 |  | Discount 3% |  | `=D14*3%` |  |  |  |  |
| 16 |  | Tổng cộng |  | `=D14-D15` | 23145 | `=round(D16*E16,0)` |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*0.1` |  | `=F16*0.1` |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=D16+D17` | 23145 | `=F16+F17` |  |  |
| 22 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 25 | 1 | 037405116316 | 2021-06-01 | 2320.81 | 23130 | `=D25*E25` |  |  |
| 26 |  | Discount 3% |  | `=D25*3%` |  |  |  |  |
| 27 |  | Tổng cộng |  | `=D25-D26` | 23130 | `=round(D27*E27,0)` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D27*0.1` |  | `=F27*0.1` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=D27+D28` | 23130 | `=F27+F28` |  |  |
| 33 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 36 | 1 | 037405116316 | 2021-07-01 | 2452.88 | 23050 | `=D36*E36` |  |  |
| 37 |  | Discount 3% |  | `=D36*3%` |  |  |  |  |
| 38 |  | Tổng cộng |  | `=D36-D37` | 23050 | `=round(D38*E38,0)` |  |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D38*0.1` |  | `=F38*0.1` |  |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=D38+D39` | 23050 | `=F38+F39` |  |  |
| 44 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 47 | 1 | 037405116316 | 2021-08-01 | 2575.24 | 22880 | `=D47*E47` |  |  |
| 48 |  | Discount 3% |  | `=D47*3%` |  |  |  |  |
| 49 |  | Tổng cộng |  | `=D47-D48` | 22880 | `=round(D49*E49,0)` |  |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D49*0.1` |  | `=F49*0.1` |  |  |
| 51 |  | Tổng số tiền phải thanh toán |  | `=D49+D50` | 22880 | `=F49+F50` | 62869230.6000000015 |  |
| 54 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 56 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 57 | 1 | 037405116316 | 2021-09-01 | 2478.69 | 22840 | `=D57*E57` |  |  |
| 58 |  | Discount 3% |  | `=D57*3%` |  |  |  |  |
| 59 |  | Tổng cộng |  | `=D57-D58` | 22840 | `=round(D59*E59,0)` |  |  |
| 60 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D59*0.1` |  | `=F59*0.1` |  |  |
| 61 |  | Tổng số tiền phải thanh toán |  | `=D59+D60` | 22840 | `=F59+F60` |  |  |
| 65 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 68 | 1 | 037405116316 | 2021-10-01 | 2651.36 | 22850 | `=D68*E68` |  |  |
| 69 |  | Discount 3% |  | `=D68*3%` |  |  |  |  |
| 70 |  | Tổng cộng |  | `=D68-D69` | 22850 | `=round(D70*E70,0)` |  |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D70*0.1` |  | `=F70*0.1` |  |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=D70+D71` | 22850 | `=F70+F71` |  |  |
| 75 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 78 | 1 | 037405116316 | 2021-11-01 | 3082.56 | 22800 | `=D78*E78` |  |  |
| 79 |  | Discount 3% |  | `=D78*3%` |  |  |  |  |
| 80 |  | Tổng cộng |  | `=D78-D79` | 22800 | `=round(D80*E80,0)` |  |  |
| 81 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D80*0.1` |  | `=F80*0.1` |  |  |
| 82 |  | Tổng số tiền phải thanh toán |  | `=D80+D81` | 22800 | `=F80+F81` | 74991286.700000003 |  |
| 85 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 88 | 1 | 037405116316 | 2021-12-01 | 2366.96 | 22920 | `=D88*E88` |  |  |
| 89 |  | Discount 3% |  | `=D88*3%` |  |  |  |  |
| 90 |  | Tổng cộng |  | `=D88-D89` | 22920 | `=round(D90*E90,0)` |  |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D90*0.1` |  | `=F90*0.1` |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=D90+D91` | 22920 | `=F90+F91` | 57885522.200000003 |  |
| 96 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 99 | 1 | 037405116316 | 2022-01-01 | `=1971.16+148.35` | 22780 | `=D99*E99` |  |  |
| 100 |  | Discount 3% |  | `=D99*3%` |  |  |  |  |
| 101 |  | Tổng cộng |  | `=D99-D100` | 22780 | `=round(D101*E101,0)` |  |  |
| 102 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D101*0.1` |  | `=F101*0.1` |  |  |
| 103 |  | Tổng số tiền phải thanh toán |  | `=D101+D102` | 22780 | `=F101+F102` | 51517361.5 |  |
| 107 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 110 | 1 | 037405116316 | 2022-02-01 | `=1515.67+114.08` | 22950 | `=D110*E110` |  |  |
| 111 |  | Discount 3% |  | `=D110*3%` |  |  |  |  |
| 112 |  | Tổng cộng |  | `=D110-D111` | 22950 | `=round(D112*E112,0)` |  |  |
| 113 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D112*0.1` |  | `=F112*0.1` |  |  |
| 114 |  | Tổng số tiền phải thanh toán |  | `=D112+D113` | 22950 | `=F112+F113` | 39908748 |  |
| 117 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 120 | 1 | 037405116316 | 2022-03-01 | 1685.17 | 22980 | `=D120*E120` |  |  |
| 121 |  | Discount 3% |  | `=D120*3%` |  |  |  |  |
| 122 |  | Tổng cộng |  | `=D120-D121` | 22980 | `=round(D122*E122,0)` |  |  |
| 123 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D122*0.1` |  | `=F122*0.1` |  |  |
| 124 |  | Tổng số tiền phải thanh toán |  | `=D122+D123` | 22980 | `=F122+F123` | 41319795 |  |
| 127 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 130 | 1 | 037405116316 | 2022-04-01 | 1585.29 | 23095 | `=D130*E130` |  |  |
| 131 |  | Discount 3% |  | `=D130*3%` |  |  |  |  |
| 132 |  | Tổng cộng |  | `=D130-D131` | 23095 | `=round(D132*E132,0)` |  |  |
| 133 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D132*0.1` |  | `=F132*0.1` |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=D132+D133` | 23095 | `=F132+F133` | 39065294.3999999985 |  |
| 137 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 139 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 140 | 1 | 037405116316 | 2022-05-01 | 1603.13 |  |  |  |  |
| 141 |  | Discount 3% |  | `=D140*3%` |  |  |  |  |
| 142 |  | Tổng cộng |  | `=D140-D141` |  |  |  |  |
| 143 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D142*0.1` |  |  |  |  |
| 144 |  | Tổng số tiền phải thanh toán |  | `=round(D142+D143,2)` | 23330 | `=D144*E144` |  |  |
| 147 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 149 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 150 | 1 | 037405116316 | 2022-06-01 | 1539.98 |  |  |  |  |
| 151 |  | Discount 3% |  | `=D150*3%` |  |  |  |  |
| 152 |  | Tổng cộng |  | `=D150-D151` |  |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D152*0.1` |  |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  | `=round(D152+D153,2)` | 23415 | `=D154*E154` |  |  |
| 157 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 160 | 1 | 037405116316 | 2022-07-01 | 1679.41 |  |  |  |  |
| 161 |  | Discount 3% |  | `=D160*3%` |  |  |  |  |
| 162 |  | Tổng cộng |  | `=D160-D161` |  |  |  |  |
| 163 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D162*0.1` |  |  |  |  |
| 164 |  | Tổng số tiền phải thanh toán |  | `=round(D162+D163,2)` | 23480 | `=D164*E164` |  |  |
| 168 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 170 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 171 | 1 | 037405116316 | 2022-08-01 | 1718.2 |  |  |  |  |
| 172 |  | Discount 3% |  | `=D171*3%` |  |  |  |  |
| 173 |  | Tổng cộng |  | `=D171-D172` |  |  |  |  |
| 174 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D173*0.1` |  |  |  |  |
| 175 |  | Tổng số tiền phải thanh toán |  | `=round(D173+D174,2)` | 23600 | `=D175*E175` |  |  |
| 178 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 180 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 181 | 1 | 037405116316 | 2022-09-01 | 1722.4517600056 |  |  |  |  |
| 182 |  | Discount 3% |  | `=D181*3%` |  |  |  |  |
| 183 |  | Tổng cộng |  | `=D181-D182` |  |  |  |  |
| 184 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D183*0.1` |  |  |  |  |
| 185 |  | Tổng số tiền phải thanh toán |  | `=round(D183+D184,2)` | 24010 | `=D185*E185` |  |  |
| 188 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 191 | 1 | 037405116316 | 2022-10-01 | 1797.32 |  |  |  |  |
| 192 |  | Discount 3% |  | `=D191*3%` |  |  |  |  |
| 193 |  | Tổng cộng |  | `=D191-D192` |  |  |  |  |
| 194 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D193*0.1` |  |  |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  | `=round(D193+D194,2)` | 24877 | `=D195*E195` |  |  |
| 199 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 201 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 202 | 1 | 037405116316 | 2022-11-01 | 1702.03 |  |  |  |  |
| 203 |  | Discount 3% |  | `=D202*3%` |  |  |  |  |
| 204 |  | Tổng cộng |  | `=D202-D203` |  |  |  |  |
| 205 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D204*0.1` |  |  |  |  |
| 206 |  | Tổng số tiền phải thanh toán |  | `=round(D204+D205,2)` | 24795 | `=D206*E206` |  |  |
| 209 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 211 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 212 | 1 | 037405116316 | 2022-12-01 | 1646.3129566874 |  |  |  |  |
| 213 |  | Discount 3% |  | `=round(D212*3%,2)` |  |  |  |  |
| 214 |  | Tổng cộng |  | `=D212-D213` |  |  |  |  |
| 215 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D214*0.1` |  |  |  |  |
| 216 |  | Tổng số tiền phải thanh toán |  | `=round(D214+D215,2)` | 23596 | `=D216*E216` |  |  |
| 219 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 221 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 222 | 1 | 037405116316 | 2023-01-01 | 1717.8 |  |  |  |  |
| 223 |  | Discount 3% |  | `=round(D222*3%,2)` |  |  |  |  |
| 224 |  | Tổng cộng |  | `=D222-D223` |  |  |  |  |
| 225 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D224*0.1` |  |  |  |  |
| 226 |  | Tổng số tiền phải thanh toán |  | `=round(D224+D225,2)` | 23711 | `=D226*E226` |  |  |
| 229 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 231 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 232 | 1 | 037405116316 | 2023-02-01 | 1528.58 |  |  |  |  |
| 233 |  | Discount 3% |  | `=round(D232*3%,2)` |  |  |  |  |
| 234 |  | Tổng cộng |  | `=D232-D233` |  |  |  |  |
| 235 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D234*0.1` |  |  |  |  |
| 236 |  | Tổng số tiền phải thanh toán |  | `=round(D234+D235,2)` | 23850 | `=D236*E236` |  |  |
| 239 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 241 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 242 | 1 | 037405116316 | 2023-03-01 | 1652.72 |  |  |  |  |
| 243 |  | Discount 3% |  | `=round(D242*3%,2)` |  |  |  |  |
| 244 |  | Tổng cộng |  | `=D242-D243` |  |  |  |  |
| 245 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D244*0.1` |  |  |  |  |
| 246 |  | Tổng số tiền phải thanh toán |  | `=round(D244+D245,2)` | 23609 | `=D246*E246` |  |  |
| 249 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |
| 251 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 252 | 1 | 037405116316 | 2023-04-01 | 1718.24 |  |  |  |  |
| 253 |  | Discount 3% |  | `=round(D252*3%,2)` |  |  |  |  |
| 254 |  | Tổng cộng |  | `=D252-D253` |  |  |  |  |
| 255 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D254*0.1` |  |  |  |  |
| 256 |  | Tổng số tiền phải thanh toán |  | `=round(D254+D255,2)` | 23630 | `=D256*E256` |  |  |
| 259 | TỔNG HỢP CHI PHÍ HIKER GAMES |  |  |  |  |  |  |  |

> *Đã bỏ qua 83 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (168 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 25 | `D6` |
| D | `=D{r}*0.1` | 25 | `D7` |
| D | `=D{r}*3%` | 20 | `D5` |
| D | `=D{r}+D{r}` | 13 | `D8` |
| D | `=round(D{r}+D{r},2)` | 12 | `D144` |
| D | `=round(D{r}*3%,2)` | 5 | `D213` |
| D | `=2497.98+48.68` | 1 | `D14` |
| D | `=1971.16+148.35` | 1 | `D99` |
| D | `=1515.67+114.08` | 1 | `D110` |
| F | `=D{r}*E{r}` | 25 | `F4` |
| F | `=round(D{r}*E{r},0)` | 13 | `F6` |
| F | `=F{r}*0.1` | 13 | `F7` |
| F | `=F{r}+F{r}` | 13 | `F8` |
| H | `=D{r}/D{r}` | 1 | `H8` |
