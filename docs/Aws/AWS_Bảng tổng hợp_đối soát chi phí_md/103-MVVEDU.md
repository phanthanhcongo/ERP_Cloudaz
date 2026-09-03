# MVVEDU

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MVVEDU`  
> **Vùng dữ liệu:** 294 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 3 | TỔNG HỢP CHI PHÍ MVVEdu |  |  |  |  |  |  |  |
| 5 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 6 | 1 | 851990482340 | 2022-01-01 | 115.04 | 22780 | `=round(D6*E6,0)` |  |  |
| 7 |  | Discount (2%) |  | `=sum(D6)*2%` |  |  |  |  |
| 8 |  | Tổng cộng |  | `=sum(D6)-D7` | 22780 | `=round(D8*E8,0)` |  |  |
| 9 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D8*0.05` |  | `=F8*0.05` |  |  |
| 10 |  | Tổng số tiền phải thanh toán |  | `=D8+D9` | 22780 | `=F8+F9` | 2696608.9500000002 |  |
| 13 | TỔNG HỢP CHI PHÍ MVVEdu |  |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | Tháng 2/2022 khách có credits và được trừ hết |
| 16 | 1 | 851990482340 | 2022-04-01 | 323.92 | 23095 | `=round(D16*E16,0)` |  | Tháng 3/2022 khách có credits và được trừ hết |
| 17 |  | Discount (2%) |  | `=sum(D16)*2%` |  |  |  |  |
| 18 |  | Tổng cộng |  | `=sum(D16)-D17` | 23095 | `=round(D18*E18,0)` |  |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D18*0.05` |  | `=F18*0.05` |  |  |
| 20 |  | Tổng số tiền phải thanh toán |  | `=D18+D19` | 23095 | `=F18+F19` | 7697879.7000000002 |  |
| 23 | TỔNG HỢP CHI PHÍ MVVEdu |  |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 26 | 1 | 851990482340 | 2022-05-01 | 216.28 |  |  |  |  |
| 27 |  | Discount (2%) |  | `=sum(D26)*2%` |  |  |  |  |
| 28 |  | Tổng cộng |  | `=sum(D26)-D27` |  |  |  |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D28*0.05` |  |  |  |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=round(D28+D29,2)` | 23330 | `=D30*E30` | 5192091.5 |  |
| 33 | TỔNG HỢP CHI PHÍ MVVEdu |  |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 36 | 1 | 851990482340 | 2022-06-01 | 594.56 |  |  |  |  |
| 37 |  | Discount (2%) |  | `=sum(D36)*2%` |  |  |  |  |
| 38 |  | Tổng cộng |  | `=sum(D36)-D37` |  |  |  |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D38*0.05` |  |  |  |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=round(D38+D39,2)` | 23415 | `=D40*E40` | 14325296.9999999981 |  |
| 42 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 45 | 1 | 851990482340 | 2022-07-01 | 610.16 |  |  |  |  |
| 46 |  | Discount (2%) |  | `=sum(D45)*2%` |  |  |  |  |
| 47 |  | Tổng cộng |  | `=sum(D45)-D46` |  |  |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D47*0.05` |  |  |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(D47+D48,2)` | 23480 | `=D49*E49` |  |  |
| 53 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 56 | 1 | 851990482340 | 2022-08-01 | 603.61 |  |  |  |  |
| 57 |  | Discount (2%) |  | `=sum(D56)*2%` |  |  |  |  |
| 58 |  | Tổng cộng |  | `=sum(D56)-D57` |  |  |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D58*0.05` |  |  |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=round(D58+D59,2)` | 23600 | `=D60*E60` |  |  |
| 63 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 66 | 1 | 851990482340 | 2022-09-01 | 583.86 |  |  |  |  |
| 67 |  | Discount (2%) |  | `=sum(D66)*2%` |  |  |  |  |
| 68 |  | Tổng cộng |  | `=sum(D66)-D67` |  |  |  |  |
| 69 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D68*0.05` |  |  |  |  |
| 70 |  | Tổng số tiền phải thanh toán |  | `=round(D68+D69,2)` | 24010 | `=D70*E70` |  |  |
| 73 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 75 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 76 | 1 | 851990482340 | 2022-10-01 | 174.85 |  |  |  |  |
| 77 |  | Discount (2%) |  | `=sum(D76)*2%` |  |  |  |  |
| 78 |  | Tổng cộng |  | `=sum(D76)-D77` |  |  |  |  |
| 79 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D78*0.05` |  |  |  |  |
| 80 |  | Tổng số tiền phải thanh toán |  | `=round(D78+D79,2)` | 24877 | `=D80*E80` |  |  |
| 84 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 87 | 1 | 851990482340 | 2022-11-01 | 171.58 |  |  |  |  |
| 88 |  | Discount (2%) |  | `=sum(D87)*2%` |  |  |  |  |
| 89 |  | Tổng cộng |  | `=sum(D87)-D88` |  |  |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D89*0.05` |  |  |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=round(D89+D90,2)` | 24795 | `=D91*E91` |  |  |
| 94 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 97 | 1 | 851990482340 | 2022-12-01 | 175.7812023096 |  |  |  |  |
| 98 |  | Discount (2%) |  | `=sum(D97)*2%` |  |  |  |  |
| 99 |  | Tổng cộng |  | `=sum(D97)-D98` |  |  |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D99*0.05` |  |  |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D99+D100,2)` | 23760 | `=D101*E101` |  |  |
| 104 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 107 | 1 | 851990482340 | 2023-01-01 | 175.54 |  |  |  |  |
| 108 |  | Discount (2%) |  | `=sum(D107)*2%` |  |  |  |  |
| 109 |  | Tổng cộng |  | `=sum(D107)-D108` |  |  |  |  |
| 110 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D109*0.05` |  |  |  |  |
| 111 |  | Tổng số tiền phải thanh toán |  | `=round(D109+D110,2)` | 23622 | `=D111*E111` |  |  |
| 114 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 116 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 117 | 1 | 851990482340 | 2023-02-01 | 167.4 |  |  |  |  |
| 118 |  | Discount (2%) |  | `=sum(D117)*2%` |  |  |  |  |
| 119 |  | Tổng cộng |  | `=sum(D117)-D118` |  |  |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D119*0.05` |  |  |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=round(D119+D120,2)` | 23955 | `=D121*E121` |  |  |
| 124 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 127 | 1 | 851990482340 | 2023-03-01 | 175.46 |  |  |  |  |
| 128 |  | Discount (2%) |  | `=sum(D127)*2%` |  |  |  |  |
| 129 |  | Tổng cộng |  | `=sum(D127)-D128` |  |  |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D129*0.05` |  |  |  |  |
| 131 |  | Tổng số tiền phải thanh toán |  | `=round(D129+D130,2)` | 23632 | `=D131*E131` |  |  |
| 134 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 137 | 1 | 851990482340 | 2023-04-01 | 172.77 |  |  |  |  |
| 138 |  | Discount (2%) |  | `=sum(D137)*2%` |  |  |  |  |
| 139 |  | Tổng cộng |  | `=sum(D137)-D138` |  |  |  |  |
| 140 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D139*0.05` |  |  |  |  |
| 141 |  | Tổng số tiền phải thanh toán |  | `=round(D139+D140,2)` | 23645 | `=D141*E141` |  |  |
| 144 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 146 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 147 | 1 | 851990482340 | 2023-05-01 | 170.04 |  |  |  |  |
| 148 |  | Discount (2%) |  | `=sum(D147)*2%` |  |  |  |  |
| 149 |  | Tổng cộng |  | `=sum(D147)-D148` |  |  |  |  |
| 150 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D149*0.05` |  |  |  |  |
| 151 |  | Tổng số tiền phải thanh toán |  | `=round(D149+D150,2)` | 23662 | `=D151*E151` |  |  |
| 155 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 157 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 158 | 1 | 851990482340 | 2023-06-01 | 175.44 |  |  |  |  |
| 159 |  | Discount (2%) |  | `=round(sum(D158)*2%,2)` |  |  |  |  |
| 160 |  | Tổng cộng |  | `=sum(D158)-D159` |  |  |  |  |
| 161 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D160*0.05,2)` |  |  |  |  |
| 162 |  | Tổng số tiền phải thanh toán |  | `=round(D160+D161,2)` | 23762 | `=D162*E162` |  |  |
| 166 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 168 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 169 | 1 | 851990482340 | 2023-07-01 | 172.8 |  |  |  |  |
| 170 |  | Discount (2%) |  | `=round(sum(D169)*2%,2)` |  |  |  |  |
| 171 |  | Tổng cộng |  | `=sum(D169)-D170` |  |  |  |  |
| 172 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D171*0.05,2)` |  |  |  |  |
| 173 |  | Tổng số tiền phải thanh toán |  | `=round(D171+D172,2)` | 23860 | `=D173*E173` |  |  |
| 176 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 178 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 179 | 1 | 851990482340 | 2023-08-01 | 175.71 |  |  |  |  |
| 180 |  | Discount (2%) |  | `=round(sum(D179)*2%,2)` |  |  |  |  |
| 181 |  | Tổng cộng |  | `=sum(D179)-D180` |  |  |  |  |
| 182 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D181*0.05,2)` |  |  |  |  |
| 183 |  | Tổng số tiền phải thanh toán |  | `=round(D181+D182,2)` | 24260 | `=D183*E183` |  |  |
| 187 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 189 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 190 | 1 | 851990482340 | 2023-09-01 | 170.13 |  |  |  |  |
| 191 |  | Discount (2%) |  | `=round(sum(D190)*2%,2)` |  |  |  |  |
| 192 |  | Tổng cộng |  | `=sum(D190)-D191` |  |  |  |  |
| 193 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D192*0.05,2)` |  |  |  |  |
| 194 |  | Tổng số tiền phải thanh toán |  | `=round(D192+D193,2)` | 24470 | `=D194*E194` |  |  |
| 197 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 199 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 200 | 1 | 851990482340 | 2023-10-01 | 172.77 |  |  |  |  |
| 201 |  | Discount (2%) |  | `=round(sum(D200)*2%,2)` |  |  |  |  |
| 202 |  | Tổng cộng |  | `=sum(D200)-D201` |  |  |  |  |
| 203 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D202*0.05,2)` |  |  |  |  |
| 204 |  | Tổng số tiền phải thanh toán |  | `=round(D202+D203,2)` | 24729 | `=D204*E204` |  |  |
| 207 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 209 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 210 | 1 | 851990482340 | 2023-11-01 | 175.4 |  |  |  |  |
| 211 |  | Discount (2%) |  | `=round(sum(D210)*2%,2)` |  |  |  |  |
| 212 |  | Tổng cộng |  | `=sum(D210)-D211` |  |  |  |  |
| 213 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D212*0.05,2)` |  |  |  |  |
| 214 |  | Tổng số tiền phải thanh toán |  | `=round(D212+D213,2)` | 24427 | `=D214*E214` |  |  |
| 218 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 220 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 221 | 1 | 851990482340 | 2023-12-01 | 172.94 |  |  |  |  |
| 222 |  | Discount (2%) |  | `=round(sum(D221)*2%,2)` |  |  |  |  |
| 223 |  | Tổng cộng |  | `=sum(D221)-D222` |  |  |  |  |
| 224 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D223*0.05,2)` |  |  |  |  |
| 225 |  | Tổng số tiền phải thanh toán |  | `=round(D223+D224,2)` | 24450 | `=D225*E225` |  |  |
| 229 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 231 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 232 | 1 | 851990482340 | 2024-01-01 | 169.87499999 |  |  |  |  |
| 233 |  | Discount (2%) |  | `=round(sum(D232)*2%,2)` |  |  |  |  |
| 234 |  | Tổng cộng |  | `=sum(D232)-D233` |  |  |  |  |
| 235 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D234*0.05,2)` |  |  |  |  |
| 236 |  | Tổng số tiền phải thanh toán |  | `=round(D234+D235,2)` | 24578 | `=D236*E236` |  |  |
| 240 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 242 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 243 | 1 | 851990482340 | 2024-02-01 | 176.06 |  |  |  |  |
| 244 |  | Discount (2%) |  | `=round(sum(D243)*2%,2)` |  |  |  |  |
| 245 |  | Tổng cộng |  | `=sum(D243)-D244` |  |  |  |  |
| 246 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D245*0.05,2)` |  |  |  |  |
| 247 |  | Tổng số tiền phải thanh toán |  | `=round(D245+D246,2)` | 24802 | `=D247*E247` |  |  |
| 251 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 253 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 254 | 1 | 851990482340 | 2024-03-01 | 173.33 |  |  |  |  |
| 255 |  | Discount (2%) |  | `=round(D254*2%,2)` |  |  |  |  |
| 256 |  | Tổng cộng |  | `=sum(D254)-D255` |  |  |  |  |
| 257 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D256*0.05,2)` |  |  |  |  |
| 258 |  | Tổng số tiền phải thanh toán |  | `=round(D256+D257,2)` | 24972 | `=D258*E258` |  |  |
| 262 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 264 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 265 | 1 | 851990482340 | 2024-04-01 | 193.49 |  |  |  |  |
| 266 |  | Discount (2%) |  | `=round(D265*2%,2)` |  |  |  |  |
| 267 |  | Tổng cộng |  | `=sum(D265)-D266` |  |  |  |  |
| 268 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D267*0.05,2)` |  |  |  |  |
| 269 |  | Tổng số tiền phải thanh toán |  | `=round(D267+D268,2)` | 25458 | `=D269*E269` |  |  |
| 274 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 276 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 277 | 1 | 851990482340 | 2024-05-01 | 210.79 |  |  |  |  |
| 278 |  | Discount (2%) |  | `=round(D277*2%,2)` |  |  |  |  |
| 279 |  | Tổng cộng |  | `=sum(D277)-D278` |  |  |  |  |
| 280 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D279*0.05,2)` |  |  |  |  |
| 281 |  | Tổng số tiền phải thanh toán |  | `=round(D279+D280,2)` | 25474 | `=D281*E281` |  |  |
| 285 | TỔNG HỢP CHI PHÍ MVV Edu |  |  |  |  |  |  |  |
| 287 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 288 | 1 | 851990482340 | 2024-06-01 | 202.55 |  |  |  |  |
| 289 |  | Phí dịch vụ (5%) |  | `=round(D288*5%,2)` |  |  |  |  |
| 290 |  | Tổng cộng |  | `=D288+D289` |  |  |  |  |
| 291 |  | Chiết khấu (2%) |  | `=round(D290*2%,2)` |  |  |  |  |
| 292 | Thành tiền |  |  | `=D290-D291` | 25473 | `=D292*E292` |  |  |
| 293 |  |  |  |  |  | `=round(F292*10%,0)` |  |  |
| 294 |  |  |  |  |  | `=F292+F293` |  |  |

> *Đã bỏ qua 96 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (148 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})-D{r}` | 27 | `D8` |
| D | `=round(D{r}+D{r},2)` | 25 | `D30` |
| D | `=sum(D{r})*2%` | 15 | `D7` |
| D | `=D{r}*0.05` | 15 | `D9` |
| D | `=round(D{r}*0.05,2)` | 12 | `D161` |
| D | `=round(sum(D{r})*2%,2)` | 9 | `D159` |
| D | `=round(D{r}*2%,2)` | 4 | `D255` |
| D | `=D{r}+D{r}` | 3 | `D10` |
| D | `=round(D{r}*5%,2)` | 1 | `D289` |
| D | `=D{r}-D{r}` | 1 | `D292` |
| F | `=D{r}*E{r}` | 26 | `F30` |
| F | `=round(D{r}*E{r},0)` | 4 | `F6` |
| F | `=F{r}+F{r}` | 3 | `F10` |
| F | `=F{r}*0.05` | 2 | `F9` |
| F | `=round(F{r}*10%,0)` | 1 | `F293` |
