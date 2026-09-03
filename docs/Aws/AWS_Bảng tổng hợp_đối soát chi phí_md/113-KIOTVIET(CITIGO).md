# KIOTVIET(CITIGO)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `KIOTVIET(CITIGO)`  
> **Vùng dữ liệu:** 288 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 4 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 6 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 7 | 1 | 412690959771 | 2021-12-01 | 17849.17 | 22920 | `=round(D7*E7,0)` |  |
| 8 |  | Discount (4%) |  | `=sum(D7)*4%` |  |  |  |
| 9 |  | Tổng cộng |  | `=sum(D7)-D8` | 22920 | `=round(D9*E9,0)` |  |
| 10 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D9*0.05` |  | `=F9*0.05` |  |
| 11 |  | Tổng số tiền phải thanh toán |  | `=D9+D10` | 22920 | `=F9+F10` | 412375799.8500000238 |
| 15 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 18 | 1 | 412690959771 | 2022-01-01 | `=9396.29+621.55` | 22780 | `=round(D18*E18,0)` |  |
| 19 |  | Discount (4%) |  | `=sum(D18)*4%` |  |  |  |
| 20 |  | Tổng cộng |  | `=sum(D18)-D19` | 22780 | `=round(D20*E20,0)` |  |
| 21 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D20*0.05` |  | `=F20*0.05` |  |
| 22 |  | Tổng số tiền phải thanh toán |  | `=D20+D21` | 22780 | `=F20+F21` | 230032045.9499999881 |
| 25 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 28 | 1 | 412690959771 | 2022-02-01 | 13341.24 | 22950 | `=round(D28*E28,0)` |  |
| 29 |  | Discount (4%) |  | `=sum(D28)*4%` |  |  |  |
| 30 |  | Tổng cộng |  | `=sum(D28)-D29` | 22950 | `=round(D30*E30,0)` |  |
| 31 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D30*0.05` |  | `=F30*0.05` |  |
| 32 |  | Tổng số tiền phải thanh toán |  | `=D30+D31` | 22950 | `=F30+F31` | 308630910 |
| 37 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 39 | STT | Invoice number | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 40 | 1 | 968733133 | 2022-03-01 | 5104 | 22980 | `=round(D40*E40,0)` |  |
| 41 | 2 | 968733217 | 2022-03-01 | 1472 | 22980 | `=round(D41*E41,0)` |  |
| 42 | 3 | 968733457 | 2022-03-01 | 2630 | 22980 | `=round(D42*E42,0)` |  |
| 43 | 4 | 968734077 | 2022-03-01 | 3964 | 22980 | `=round(D43*E43,0)` |  |
| 44 | 5 | 968734097 | 2022-03-01 | 1106 | 22980 | `=round(D44*E44,0)` |  |
| 45 | 6 | 968734593 | 2022-03-01 | 3966 | 22980 | `=round(D45*E45,0)` |  |
| 46 | 7 | 968734609 | 2022-03-01 | 1436 | 22980 | `=round(D46*E46,0)` |  |
| 47 | 8 | 989894881 | 2022-03-01 | 315 | 22980 | `=round(D47*E47,0)` |  |
| 48 | 9 | 989894885 | 2022-03-01 | 2580 | 22980 | `=round(D48*E48,0)` |  |
| 49 | 10 | 989895249 | 2022-03-01 | 4128 | 22980 | `=round(D49*E49,0)` |  |
| 50 | 11 | 989895253 | 2022-03-01 | 3780 | 22980 | `=round(D50*E50,0)` |  |
| 51 | 12 | 992014589 | 2022-03-01 | 11133.29 | 22980 | `=round(D51*E51,0)` |  |
| 52 |  | Discount (4%) |  | `=sum(D40:D51)*4%` |  |  |  |
| 53 |  | Tổng cộng |  | `=sum(D40:D51)-D52` | 22980 | `=round(D53*E53,0)` |  |
| 54 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D53*0.05` |  | `=F53*0.05` |  |
| 55 |  | Tổng số tiền phải thanh toán |  | `=D53+D54` | 22980 | `=F53+F54` | 963946755.4500000477 |
| 58 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 61 | 1 | 412690959771 | 2022-04-01 | 9302.97 | 23095 | `=round(D61*E61,0)` |  |
| 62 |  | Discount (4%) |  | `=sum(D61)*4%` |  |  |  |
| 63 |  | Tổng cộng |  | `=sum(D61)-D62` | 23095 | `=round(D63*E63,0)` |  |
| 64 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D63*0.05` |  | `=F63*0.05` |  |
| 65 |  | Tổng số tiền phải thanh toán |  | `=D63+D64` | 23095 | `=F63+F64` | 216570908.400000006 |
| 69 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 71 | STT | Invoice number | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 72 | 1 | 1036370801 | 2022-05-01 | 2371.16 |  |  |  |
| 73 | 2 | 1036371061 | 2022-05-01 | 38 |  |  |  |
| 74 | 3 | 1036371089 | 2022-05-01 | 90 |  |  |  |
| 75 | 4 | 1056789349 | 2022-05-01 | 10524.65 |  |  |  |
| 76 |  | Discount (4%) |  | `=sum(D72:D75)*4%` |  |  |  |
| 77 |  | Tổng cộng |  | `=sum(D72:D75)-D76` |  |  |  |
| 78 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D77*0.05` |  |  |  |
| 79 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D77+D78,2)` | 23330 | `=D79*E79` | 306276240 |
| 82 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 85 | 1 | 412690959771 | 2022-06-01 | 10966.45 |  |  |  |
| 86 |  | Discount (4%) |  | `=sum(D85)*4%` |  |  |  |
| 87 |  | Tổng cộng |  | `=sum(D85)-D86` |  |  |  |
| 88 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D87*0.05` |  |  |  |
| 89 |  | Tổng số tiền phải thanh toán |  | `=round(D87+D88,2)` | 23415 | `=D89*E89` |  |
| 91 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 93 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 94 | 1 | 412690959771 | 2022-07-01 | 13406.58 |  |  |  |
| 95 |  | Discount (4%) |  | `=sum(D94)*4%` |  |  |  |
| 96 |  | Tổng cộng |  | `=sum(D94)-D95` |  |  |  |
| 97 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D96*0.05` |  |  |  |
| 98 |  | Tổng số tiền phải thanh toán |  | `=round(D96+D97,2)` | 23480 | `=D98*E98` |  |
| 102 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 105 | 1 | 412690959771 | 2022-08-01 | 17426.26 |  |  |  |
| 106 |  | Discount (4%) |  | `=sum(D105)*4%` |  |  |  |
| 107 |  | Tổng cộng |  | `=sum(D105)-D106` |  |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D107*0.05` |  |  |  |
| 109 |  | Tổng số tiền phải thanh toán |  | `=round(D107+D108,2)` | 23600 | `=D109*E109` |  |
| 112 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 115 | 1 | 412690959771 | 2022-09-01 | 22431.62 |  |  |  |
| 116 |  | Discount (4%) |  | `=sum(D115)*4%` |  |  |  |
| 117 |  | Tổng cộng |  | `=sum(D115)-D116` |  |  |  |
| 118 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D117*0.05` |  |  |  |
| 119 |  | Tổng số tiền phải thanh toán |  | `=round(D117+D118,2)` | 24010 | `=D119*E119` |  |
| 122 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 124 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 125 | 1 | 412690959771 | 2022-10-01 | 18879.39 |  |  |  |
| 126 |  | Discount (4%) |  | `=sum(D125)*4%` |  |  |  |
| 127 |  | Tổng cộng |  | `=sum(D125)-D126` |  |  |  |
| 128 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D127*0.05` |  |  |  |
| 129 |  | Tổng số tiền phải thanh toán |  | `=round(D127+D128,2)` | 24877 | `=D129*E129` |  |
| 132 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 134 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 135 | 1 | 412690959771 | 2022-11-01 | 15873.64 |  |  |  |
| 136 |  | Discount (4%) |  | `=sum(D135)*4%` |  |  |  |
| 137 |  | Tổng cộng |  | `=sum(D135)-D136` |  |  |  |
| 138 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D137*0.05` |  |  |  |
| 139 |  | Tổng số tiền phải thanh toán |  | `=round(D137+D138,2)` | 24795 | `=D139*E139` |  |
| 142 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 144 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 145 | 1 | 412690959771 | 2022-12-01 | 24432.06 |  |  |  |
| 146 |  | Discount (4%) |  | `=sum(D145)*4%` |  |  |  |
| 147 |  | Tổng cộng |  | `=sum(D145)-D146` |  |  |  |
| 148 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D147*0.05` |  |  |  |
| 149 |  | Tổng số tiền phải thanh toán |  | `=round(D147+D148,2)` | 23760 | `=D149*E149` |  |
| 152 | TỔNG HỢP CHI PHÍ CITIGO |  |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 155 | 1 | 412690959771 | 2023-01-01 | 19462.36 |  |  |  |
| 156 |  | Discount (4%) |  | `=sum(D155)*4%` |  |  |  |
| 157 |  | Tổng cộng |  | `=sum(D155)-D156` |  |  |  |
| 158 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D157*0.05` |  |  |  |
| 159 |  | Tổng số tiền phải thanh toán |  | `=round(D157+D158,2)` | 23622 | `=D159*E159` |  |
| 162 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 165 | 1 | 412690959771 | 2023-02-01 | 16966.07 |  |  |  |
| 166 |  | Discount (4%) |  | `=sum(D165)*4%` |  |  |  |
| 167 |  | Tổng cộng |  | `=sum(D165)-D166` |  |  |  |
| 168 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D167*0.05` |  |  |  |
| 169 |  | Tổng số tiền phải thanh toán |  | `=round(D167+D168,2)` | 23955 | `=D169*E169` |  |
| 172 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 174 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 175 | 1 | 412690959771 | 2023-03-01 | 21611.82 |  |  |  |
| 176 |  | Discount (4%) |  | `=sum(D175)*4%` |  |  |  |
| 177 |  | Tổng cộng |  | `=sum(D175)-D176` |  |  |  |
| 178 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D177*0.05` |  |  |  |
| 179 |  | Tổng số tiền phải thanh toán |  | `=round(D177+D178,2)` | 23632 | `=D179*E179` |  |
| 182 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 184 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 185 | 1 | 412690959771 | 2023-04-01 | 18742.75 |  |  |  |
| 186 |  | Discount (4%) |  | `=sum(D185)*4%` |  |  |  |
| 187 |  | Tổng cộng |  | `=sum(D185)-D186` |  |  |  |
| 188 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D187*0.05` |  |  |  |
| 189 |  | Tổng số tiền phải thanh toán |  | `=round(D187+D188,2)` | 23645 | `=D189*E189` |  |
| 192 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 194 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 195 | 1 | 412690959771 | 2023-05-01 | 8461.8 |  |  |  |
| 196 |  | Discount (4%) |  | `=sum(D195)*4%` |  |  |  |
| 197 |  | Tổng cộng |  | `=sum(D195)-D196` |  |  |  |
| 198 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D197*0.05` |  |  |  |
| 199 |  | Tổng số tiền phải thanh toán |  | `=round(D197+D198,2)` | 23662 | `=D199*E199` |  |
| 202 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 204 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 205 | 1 | 412690959771 | 2023-06-01 | 10783.66 |  |  |  |
| 206 |  | Discount (4%) |  | `=sum(D205)*4%` |  |  |  |
| 207 |  | Tổng cộng |  | `=sum(D205)-D206` |  |  |  |
| 208 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D207*0.05` |  |  |  |
| 209 |  | Tổng số tiền phải thanh toán |  | `=round(D207+D208,2)` | 23762 | `=D209*E209` |  |
| 212 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 215 | 1 | 412690959771 | 2023-07-01 | 10230.58 |  |  |  |
| 216 |  | Discount (4%) |  | `=sum(D215)*4%` |  |  |  |
| 217 |  | Tổng cộng |  | `=sum(D215)-D216` |  |  |  |
| 218 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D217*0.05` |  |  |  |
| 219 |  | Tổng số tiền phải thanh toán |  | `=round(D217+D218,2)` | 23860 | `=D219*E219` |  |
| 222 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 224 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 225 | 1 | 412690959771 | 2023-08-01 | 10594.62 |  |  |  |
| 226 |  | Discount (4%) |  | `=sum(D225)*4%` |  |  |  |
| 227 |  | Tổng cộng |  | `=sum(D225)-D226` |  |  |  |
| 228 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D227*0.05` |  |  |  |
| 229 |  | Tổng số tiền phải thanh toán |  | `=round(D227+D228,2)` | 24260 | `=D229*E229` |  |
| 233 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 235 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 236 | 1 | 412690959771 | 2023-09-01 | 12336.86 |  |  |  |
| 237 | 2 | 412690959771 | Upfront reservation fee | 3964 |  |  |  |
| 238 |  | Discount (4%) |  | `=round(sum(D236+D237)*4%,2)` |  |  |  |
| 239 |  | Tổng cộng |  | `=sum(D236+D237)-D238` |  |  |  |
| 240 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D239*0.05,2)` |  |  |  |
| 241 |  | Tổng số tiền phải thanh toán |  | `=round(D239+D240,2)` | 24470 | `=D241*E241` |  |
| 243 |  |  |  |  |  | 304298153.1999999881 |  |
| 244 |  |  |  |  |  | 97775023.700000003 |  |
| 245 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 247 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 248 | 1 | 412690959771 | 2023-10-01 | 11566.81 |  |  |  |
| 249 |  | Discount (4%) |  | `=sum(D248)*4%` |  |  |  |
| 250 |  | Tổng cộng |  | `=sum(D248)-D249` |  |  |  |
| 251 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D250*0.05` |  |  |  |
| 252 |  | Tổng số tiền phải thanh toán |  | `=round(D250+D251,2)` | 24729 | `=D252*E252` |  |
| 255 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 257 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 258 | 1 | 412690959771 | 2023-11-01 | 11053.78 |  |  |  |
| 259 |  | Discount (4%) |  | `=sum(D258)*4%` |  |  |  |
| 260 |  | Tổng cộng |  | `=sum(D258)-D259` |  |  |  |
| 261 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D260*0.05` |  |  |  |
| 262 |  | Tổng số tiền phải thanh toán |  | `=round(D260+D261,2)` | 24427 | `=D262*E262` |  |
| 266 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 268 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 269 | 1 | 412690959771 | 2023-12-01 | 9217.97 |  |  |  |
| 270 |  | Discount (4%) |  | `=sum(D269)*4%` |  |  |  |
| 271 |  | Tổng cộng |  | `=sum(D269)-D270` |  |  |  |
| 272 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D271*0.05` |  |  |  |
| 273 |  | Tổng số tiền phải thanh toán |  | `=round(D271+D272,2)` | 24450 | `=D273*E273` |  |
| 277 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |
| 279 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 280 | 1 | 412690959771 | 2024-01-01 | 9016.49 |  |  |  |
| 281 |  | Discount (4%) |  | `=sum(D280)*4%` |  |  |  |
| 282 |  | Tổng cộng |  | `=sum(D280)-D281` |  |  |  |
| 283 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D282*0.05` |  |  |  |
| 284 |  | Tổng số tiền phải thanh toán |  | `=round(D282+D283,2)` | 24578 | `=D284*E284` |  |
| 288 | TỔNG HỢP CHI PHÍ KIOTVIET |  |  |  |  |  |  |

> *Đã bỏ qua 88 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (157 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.05` | 25 | `D10` |
| D | `=sum(D{r})*4%` | 23 | `D8` |
| D | `=sum(D{r})-D{r}` | 23 | `D9` |
| D | `=round(D{r}+D{r},2)` | 20 | `D89` |
| D | `=D{r}+D{r}` | 5 | `D11` |
| D | `=sum(D{r}:D{r})*4%` | 2 | `D52` |
| D | `=sum(D{r}:D{r})-D{r}` | 2 | `D53` |
| D | `=9396.29+621.55` | 1 | `D18` |
| D | `=ROUND(D{r}+D{r},2)` | 1 | `D79` |
| D | `=round(sum(D{r}+D{r})*4%,2)` | 1 | `D238` |
| D | `=sum(D{r}+D{r})-D{r}` | 1 | `D239` |
| D | `=round(D{r}*0.05,2)` | 1 | `D240` |
| F | `=round(D{r}*E{r},0)` | 21 | `F7` |
| F | `=D{r}*E{r}` | 21 | `F79` |
| F | `=F{r}*0.05` | 5 | `F10` |
| F | `=F{r}+F{r}` | 5 | `F11` |
