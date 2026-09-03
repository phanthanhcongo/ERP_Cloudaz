# Thành Công (MAGESTORE)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Thành Công (MAGESTORE)`  
> **Vùng dữ liệu:** 452 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ MAGESTORE |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 4 | 1 | 468236286011 | 2022-02-01 | 4456.05 | 22950 | `=round(D4*E4,0)` |  |
| 5 |  | Discount (2%) |  | `=D4*2%` |  |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` | 22950 | `=round(D6*E6,0)` |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.05` |  | `=F6*0.05` |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` | 22950 | `=F6+F7` | 105232072 |
| 11 | TỔNG HỢP CHI PHÍ MAGESTORE |  |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 14 | 1 | 468236286011 | 2022-03-01 | 5256.97 | 22980 | `=round(D14*E14,0)` |  |
| 15 |  | Discount (2%) |  | `=D14*2%` |  |  |  |
| 16 |  | Tổng cộng |  | `=D14-D15` | 22980 | `=round(D16*E16,0)` |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*0.05` |  | `=F16*0.05` |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=D16+D17` | 22980 | `=F16+F17` | 124308520.349999994 |
| 21 | TỔNG HỢP CHI PHÍ MAGESTORE |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 24 | 1 | 468236286011 | 2022-04-01 | 5108.53 | 23095 | `=round(D24*E24,0)` |  |
| 25 |  | Discount (2%) |  | `=D24*2%` |  |  |  |
| 26 |  | Tổng cộng |  | `=D24-D25` | 23095 | `=round(D26*E26,0)` |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D26*0.05` |  | `=F26*0.05` |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=D26+D27` | 23095 | `=F26+F27` | 121402963.5 |
| 31 | TỔNG HỢP CHI PHÍ MAGESTORE |  |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 34 | 1 | 468236286011 | 2022-05-01 | 5635.43 |  |  |  |
| 35 |  | Discount (2%) |  | `=D34*2%` |  |  |  |
| 36 |  | Tổng cộng |  | `=D34-D35` |  |  |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D36*0.05` |  |  |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=round(D36+D37,2)` | 23330 | `=D38*E38` | 135287403.7999999821 |
| 42 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 45 | 1 | 468236286011 | 2022-06-01 | 5631.77 |  |  |  |
| 46 |  | Discount (2%) |  | `=D45*2%` |  |  |  |
| 47 |  | Tổng cộng |  | `=D45-D46` |  |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D47*0.05` |  |  |  |
| 49 | Tổng số tiền phải thanh toán |  |  | `=round(D47+D48,2)` | 23415 | `=D49*E49` |  |
| 52 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 55 | 1 | 468236286011 | 2022-07-01 | 3477.87 |  |  |  |
| 56 |  | Discount (2%) |  | `=D55*2%` |  |  |  |
| 57 |  | Tổng cộng |  | `=D55-D56` |  |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D57*0.05` |  |  |  |
| 59 | Tổng số tiền phải thanh toán |  |  | `=round(D57+D58,2)` | 23480 | 84028540 |  |
| 62 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 65 | 1 | 468236286011 | 2022-08-01 | 2489.2 |  |  |  |
| 66 |  | Discount (2%) |  | `=D65*2%` |  |  |  |
| 67 |  | Tổng cộng |  | `=D65-D66` |  |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D67*0.05` |  |  |  |
| 69 | Tổng số tiền phải thanh toán |  |  | `=round(D67+D68,2)` | 23600 | `=D69*E69` |  |
| 72 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 74 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 75 | 1 | 468236286011 | 2022-09-01 | 2585.72 |  |  |  |
| 76 |  | Discount (2%) |  | `=D75*2%` |  |  |  |
| 77 |  | Tổng cộng |  | `=D75-D76` |  |  |  |
| 78 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D77*0.05` |  |  |  |
| 79 | Tổng số tiền phải thanh toán |  |  | `=round(D77+D78,2)` | 24010 | `=D79*E79` |  |
| 82 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 85 | 1 | 468236286011 | 2022-10-01 | 2719.72 |  |  |  |
| 86 |  | Discount (2%) |  | `=D85*2%` |  |  |  |
| 87 |  | Tổng cộng |  | `=D85-D86` |  |  |  |
| 88 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D87*0.05` |  |  |  |
| 89 | Tổng số tiền phải thanh toán |  |  | `=round(D87+D88,2)` | 24877 | `=D89*E89` |  |
| 92 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 95 | 1 | 468236286011 | 2022-11-01 | 2538.84 |  |  |  |
| 96 |  | Discount (2%) |  | `=D95*2%` |  |  |  |
| 97 |  | Tổng cộng |  | `=D95-D96` |  |  |  |
| 98 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D97*0.05` |  |  |  |
| 99 | Tổng số tiền phải thanh toán |  |  | `=round(D97+D98,2)` | 24795 | `=D99*E99` |  |
| 102 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 105 | 1 | 468236286011 | 2022-12-01 | 2427.88 |  |  |  |
| 106 |  | Discount (2%) |  | `=D105*2%` |  |  |  |
| 107 |  | Tổng cộng |  | `=D105-D106` |  |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D107*0.05` |  |  |  |
| 109 | Tổng số tiền phải thanh toán |  |  | `=round(D107+D108,2)` | 23760 | `=D109*E109` |  |
| 112 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 115 | 1 | 468236286011 | 2023-01-01 | 2626.02 |  |  |  |
| 116 |  | Discount (2%) |  | `=D115*2%` |  |  |  |
| 117 |  | Tổng cộng |  | `=D115-D116` |  |  |  |
| 118 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D117*0.05` |  |  |  |
| 119 | Tổng số tiền phải thanh toán |  |  | `=round(D117+D118,2)` | 23622 | `=D119*E119` |  |
| 122 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 124 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 125 | 1 | 468236286011 | 2023-02-01 | 2308.59 |  |  |  |
| 126 |  | Discount (2%) |  | `=D125*2%` |  |  |  |
| 127 |  | Tổng cộng |  | `=D125-D126` |  |  |  |
| 128 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D127*0.05` |  |  |  |
| 129 | Tổng số tiền phải thanh toán |  |  | `=round(D127+D128,2)` | 23955 | `=D129*E129` |  |
| 132 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 134 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 135 | 1 | 468236286011 | 2023-03-01 | 2765.94 |  |  |  |
| 136 |  | Discount (2%) |  | `=D135*2%` |  |  |  |
| 137 |  | Tổng cộng |  | `=D135-D136` |  |  |  |
| 138 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D137*0.05` |  |  |  |
| 139 | Tổng số tiền phải thanh toán |  |  | `=round(D137+D138,2)` | 23632 | `=D139*E139` |  |
| 142 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 144 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 145 | 1 | 468236286011 | 2023-04-01 | 2474.99 |  |  |  |
| 146 |  | Discount (2%) |  | `=D145*2%` |  |  |  |
| 147 |  | Tổng cộng |  | `=D145-D146` |  |  |  |
| 148 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D147*0.05` |  |  |  |
| 149 | Tổng số tiền phải thanh toán |  |  | `=round(D147+D148,2)` | 23645 | `=D149*E149` |  |
| 152 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 155 | 1 | 468236286011 | 2023-05-01 | 2639.26 |  |  |  |
| 156 |  | Discount (2%) |  | `=D155*2%` |  |  |  |
| 157 |  | Tổng cộng |  | `=D155-D156` |  |  |  |
| 158 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D157*0.05` |  |  |  |
| 159 | Tổng số tiền phải thanh toán |  |  | `=round(D157+D158,2)` | 23662 | `=D159*E159` |  |
| 162 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 165 | 1 | 468236286011 | 2023-07-01 | 2492.66 |  |  |  |
| 166 |  | Discount (2%) |  | `=D165*2%` |  |  |  |
| 167 |  | Tổng cộng |  | `=D165-D166` |  |  |  |
| 168 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D167*0.05` |  |  |  |
| 169 | Tổng số tiền phải thanh toán |  |  | `=round(D167+D168,2)` | 23860 | `=D169*E169` |  |
| 172 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 174 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 175 | 1 | 468236286011 | 2023-08-01 | 2585.49 |  |  |  |
| 176 |  | Discount (2%) |  | `=D175*2%` |  |  |  |
| 177 |  | Tổng cộng |  | `=D175-D176` |  |  |  |
| 178 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D177*0.05` |  |  |  |
| 179 | Tổng số tiền phải thanh toán |  |  | `=round(D177+D178,2)` | 24260 | `=D179*E179` |  |
| 182 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 184 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 185 | 1 | 468236286011 | 2023-09-01 | 2491.96 |  |  |  |
| 186 |  | Discount (2%) |  | `=D185*2%` |  |  |  |
| 187 |  | Tổng cộng |  | `=D185-D186` |  |  |  |
| 188 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D187*0.05` |  |  |  |
| 189 | Tổng số tiền phải thanh toán |  |  | `=round(D187+D188,2)` | 24470 | `=D189*E189` |  |
| 192 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 194 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 195 | 1 | 468236286011 | 2023-10-01 | 2729.24 |  |  |  |
| 196 |  | Discount (2%) |  | `=D195*2%` |  |  |  |
| 197 |  | Tổng cộng |  | `=D195-D196` |  |  |  |
| 198 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D197*0.05` |  |  |  |
| 199 | Tổng số tiền phải thanh toán |  |  | `=round(D197+D198,2)` | 24729 | `=D199*E199` |  |
| 202 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 204 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 205 | 1 | 468236286011 | 2023-11-01 | 2872.79 |  |  |  |
| 206 |  | Discount (2%) |  | `=D205*2%` |  |  |  |
| 207 |  | Tổng cộng |  | `=D205-D206` |  |  |  |
| 208 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D207*0.05` |  |  |  |
| 209 | Tổng số tiền phải thanh toán |  |  | `=round(D207+D208,2)` | 24427 | `=D209*E209` |  |
| 212 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 215 | 1 | 468236286011 | 2023-12-01 | 1466.65 |  |  |  |
| 216 |  | Discount (2%) |  | `=D215*2%` |  |  |  |
| 217 |  | Tổng cộng |  | `=D215-D216` |  |  |  |
| 218 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D217*0.05` |  |  |  |
| 219 | Tổng số tiền phải thanh toán |  |  | `=round(D217+D218,2)` | 24450 | `=D219*E219` |  |
| 223 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 225 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 226 | 1 | 468236286011 | 2024-01-01 | 2134.57 |  |  |  |
| 227 |  | Discount (2%) |  | `=D226*2%` |  |  |  |
| 228 |  | Tổng cộng |  | `=D226-D227` |  |  |  |
| 229 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D228*0.05` |  |  |  |
| 230 | Tổng số tiền phải thanh toán |  |  | `=round(D228+D229,2)` | 24578 | `=D230*E230` |  |
| 234 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 236 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 237 | 1 | 468236286011 | 2024-02-01 | 2113.88 |  |  |  |
| 238 |  | Discount (2%) |  | `=D237*2%` |  |  |  |
| 239 |  | Tổng cộng |  | `=D237-D238` |  |  |  |
| 240 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D239*0.05` |  |  |  |
| 241 | Tổng số tiền phải thanh toán |  |  | `=round(D239+D240,2)` | 24802 | `=D241*E241` |  |
| 245 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 247 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 248 | 1 | 468236286011 | 2024-03-01 | 2427.88 |  |  |  |
| 249 |  | Discount (2%) |  | `=D248*2%` |  |  |  |
| 250 |  | Tổng cộng |  | `=D248-D249` |  |  |  |
| 251 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D250*0.05` |  |  |  |
| 252 | Tổng số tiền phải thanh toán |  |  | `=round(D250+D251,2)` | 24972 | `=D252*E252` |  |
| 255 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 257 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 258 | 1 | 468236286011 | 2024-04-01 | 2242.92 |  |  |  |
| 259 |  | Discount (2%) |  | `=D258*2%` |  |  |  |
| 260 |  | Tổng cộng |  | `=D258-D259` |  |  |  |
| 261 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D260*0.05` |  |  |  |
| 262 | Tổng số tiền phải thanh toán |  |  | `=round(D260+D261,2)` | 25458 | `=D262*E262` |  |
| 266 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 268 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 269 | 1 | 468236286011 | 2024-05-01 | 2295.82 |  |  |  |
| 270 |  | Discount (2%) |  | `=D269*2%` |  |  |  |
| 271 |  | Tổng cộng |  | `=D269-D270` |  |  |  |
| 272 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D271*0.05` |  |  |  |
| 273 | Tổng số tiền phải thanh toán |  |  | `=round(D271+D272,2)` | 25474 | `=D273*E273` |  |
| 277 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 279 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 280 | 1 | 468236286011 | 2024-06-01 | 2126.74 |  |  |  |
| 281 |  | Phí dịch vụ (5.26%) |  | `=round(D280*5.26%,2)` |  |  |  |
| 282 |  | Chiết khấu (2%) |  | `=round((D280+D281)*2%,2)` |  |  |  |
| 283 | Thành tiền |  |  | `=D280+D281-D282` | 25473 | `=D283*E283` |  |
| 284 | Thuế GTGT (10%) |  |  |  |  | `=round(F283*10%,0)` |  |
| 285 | Tổng số tiền phải thanh toán |  |  |  |  | `=F283+F284` |  |
| 289 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 291 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 292 | 1 | 468236286011 | 2024-07-01 | 1977.76 |  |  |  |
| 293 |  | Phí dịch vụ (5.26%) |  | `=round(D292*5.26%,2)` |  |  |  |
| 294 |  | Chiết khấu (2%) |  | `=round((D292+D293)*2%,2)` |  |  |  |
| 295 | Thành tiền |  |  | `=D292+D293-D294` | 25405 | `=D295*E295` |  |
| 296 | Thuế GTGT (10%) |  |  |  |  | `=round(F295*10%,0)` |  |
| 297 | Tổng số tiền phải thanh toán |  |  |  |  | `=F295+F296` |  |
| 301 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 303 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 304 | 1 | 468236286011 | 2024-08-01 | 1644.6 |  |  |  |
| 305 |  | Phí dịch vụ (5.26%) |  | `=round(D304*5.26%,2)` |  |  |  |
| 306 |  | Chiết khấu (2%) |  | `=round((D304+D305)*2%,2)` |  |  |  |
| 307 | Thành tiền |  |  | `=D304+D305-D306` | 25080 | `=D307*E307` |  |
| 308 | Thuế GTGT (10%) |  |  |  |  | `=round(F307*10%,0)` |  |
| 309 | Tổng số tiền phải thanh toán |  |  |  |  | `=F307+F308` |  |
| 313 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 315 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 316 | 1 | 468236286011 | 2024-09-01 | 1699.28 |  |  |  |
| 317 | Phí dịch vụ (5.26%) |  |  | `=round(D316*5.26%,2)` |  |  |  |
| 318 | Chiết khấu (2%) |  |  | `=round((D316+D317)*2%,2)` |  |  |  |
| 319 | Thành tiền |  |  | `=D316+D317-D318` | 24733 | `=D319*E319` |  |
| 320 | Thuế GTGT (10%) |  |  |  |  | `=round(F319*10%,0)` |  |
| 321 | Tổng số tiền phải thanh toán |  |  |  |  | `=F319+F320` |  |
| 325 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 327 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 328 | 1 | 468236286011 | 2024-10-01 | 1787.04 |  |  |  |
| 329 | Phí dịch vụ (5.26%) |  |  | `=round(D328*5.26%,2)` |  |  |  |
| 330 | Chiết khấu (2%) |  |  | `=round((D328+D329)*2%,2)` |  |  |  |
| 331 | Thành tiền |  |  | `=D328+D329-D330` | 25445 | `=D331*E331` |  |
| 332 | Thuế GTGT (10%) |  |  |  |  | `=round(F331*10%,0)` |  |
| 333 | Tổng số tiền phải thanh toán |  |  |  |  | `=F331+F332` |  |
| 336 | TỔNG HỢP CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 338 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 339 | 1 | 468236286011 | 2024-11-01 | 1793.23 |  |  |  |
| 340 | Phí dịch vụ (5.26%) |  |  | `=round(D339*5.26%,2)` |  |  |  |
| 341 | Chiết khấu (2%) |  |  | `=round((D339+D340)*2%,2)` |  |  |  |
| 342 | Thành tiền |  |  | `=D339+D340-D341` | 25463 | `=D342*E342` |  |
| 343 | Thuế GTGT (10%) |  |  |  |  | `=round(F342*10%,0)` |  |
| 344 | Tổng số tiền phải thanh toán |  |  |  |  | `=F342+F343` |  |
| 348 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 350 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 351 | 1 | 468236286011 | 2024-12-01 | 1505.65 |  |  |  |
| 352 | Phí dịch vụ (5.26%) |  |  | `=round(D351*5.26%,2)` |  |  |  |
| 353 | Chiết khấu (2%) |  |  | `=round((D351+D352)*2%,2)` |  |  |  |
| 354 | Thành tiền |  |  | `=D351+D352-D353` | 25551 | `=D354*E354` |  |
| 355 | Thuế GTGT (10%) |  |  |  |  | `=round(F354*10%,0)` |  |
| 356 | Tổng số tiền phải thanh toán |  |  |  |  | `=F354+F355` |  |
| 360 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 362 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 363 | 1 | 468236286011 | 2025-01-01 | 1773.17 |  |  |  |
| 364 | Phí dịch vụ (5.26%) |  |  | `=round(D363*5.26%,2)` |  |  |  |
| 365 | Chiết khấu (2%) |  |  | `=round((D363+D364)*2%,2)` |  |  |  |
| 366 | Thành tiền |  |  | `=D363+D364-D365` | 25295 | `=D366*E366` |  |
| 367 | Thuế GTGT (10%) |  |  |  |  | `=round(F366*10%,0)` |  |
| 368 | Tổng số tiền phải thanh toán |  |  |  |  | `=F366+F367` |  |
| 372 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 374 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 375 | 1 | 468236286011 | 2025-02-01 | 1761.44 |  |  |  |
| 376 | Phí dịch vụ (5.26%) |  |  | `=round(D375*5.26%,2)` |  |  |  |
| 377 | Chiết khấu (2%) |  |  | `=round((D375+D376)*2%,2)` |  |  |  |
| 378 | Thành tiền |  |  | `=D375+D376-D377` | 25735 | `=D378*E378` |  |
| 379 | Thuế GTGT (10%) |  |  |  |  | `=round(F378*10%,0)` |  |
| 380 | Tổng số tiền phải thanh toán |  |  |  |  | `=F378+F379` |  |
| 384 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 386 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 387 | 1 | 468236286011 | 2025-03-01 | 1835.49 |  |  |  |
| 388 | Phí dịch vụ (5.26%) |  |  | `=round(D387*5.26%,2)` |  |  |  |
| 389 | Chiết khấu (2%) |  |  | `=round((D387+D388)*2%,2)` |  |  |  |
| 390 | Thành tiền |  |  | `=D387+D388-D389` | 25775 | `=D390*E390` |  |
| 391 | Thuế GTGT (10%) |  |  |  |  | `=round(F390*10%,0)` |  |
| 392 | Tổng số tiền phải thanh toán |  |  |  |  | `=F390+F391` |  |
| 396 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 398 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 399 | 1 | 468236286011 | 2025-04-01 | 1883.86 |  |  |  |
| 400 | Phí dịch vụ (5.26%) |  |  | `=round(D399*5.26%,2)` |  |  |  |
| 401 | Chiết khấu (2%) |  |  | `=round((D399+D400)*2%,2)` |  |  |  |
| 402 | Thành tiền |  |  | `=D399+D400-D401` | 26190 | `=D402*E402` |  |
| 403 | Thuế GTGT (10%) |  |  |  |  | `=round(F402*10%,0)` |  |
| 404 | Tổng số tiền phải thanh toán |  |  |  |  | `=F402+F403` |  |
| 408 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 410 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 411 | 1 | 468236286011 | 2025-05-01 | 1851.18 |  |  |  |
| 412 | Phí dịch vụ (5.26%) |  |  | `=round(D411*5.26%,2)` |  |  |  |
| 413 | Chiết khấu (2%) |  |  | `=round((D411+D412)*2%,2)` |  |  |  |
| 414 | Thành tiền |  |  | `=D411+D412-D413` | 26225 | `=D414*E414` |  |
| 415 | Thuế GTGT (10%) |  |  |  |  | `=round(F414*10%,0)` |  |
| 416 | Tổng số tiền phải thanh toán |  |  |  |  | `=F414+F415` |  |
| 420 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 422 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 423 | 1 | 468236286011 | 2025-06-01 | 1824.43 |  |  |  |
| 424 | Phí dịch vụ (5.26%) |  |  | `=round(D423*5.26%,2)` |  |  |  |
| 425 | Chiết khấu (2%) |  |  | `=round((D423+D424)*2%,2)` |  |  |  |
| 426 | Thành tiền |  |  | `=D423+D424-D425` | 26300 | `=D426*E426` |  |
| 427 | Thuế GTGT (10%) |  |  |  |  | `=round(F426*10%,0)` |  |
| 428 | Tổng số tiền phải thanh toán |  |  |  |  | `=F426+F427` |  |
| 432 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 434 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 435 | 1 | 468236286011 | 2025-07-01 | 1658.8 |  |  |  |
| 436 | Phí dịch vụ (10%) |  |  | `=round(D435*10%,2)` |  |  |  |
| 437 | Chiết khấu (2%) |  |  | `=round((D435+D436)*2%,2)` |  |  |  |
| 438 | Thành tiền |  |  | `=D435+D436-D437` | 26382 | `=D438*E438` |  |
| 439 | Thuế GTGT (10%) |  |  |  |  | `=round(F438*10%,0)` |  |
| 440 | Tổng số tiền phải thanh toán |  |  |  |  | `=F438+F439` |  |
| 444 | ĐỐI SOÁT CHI PHÍ THANHCONGINTERJSC |  |  |  |  |  |  |
| 446 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 447 | 1 | 468236286011 | 2025-08-01 | 1698.79 |  |  |  |
| 448 | Phí dịch vụ (10%) |  |  | `=round(D447*10%,2)` |  |  |  |
| 449 | Chiết khấu (2%) |  |  | `=round((D447+D448)*2%,2)` |  |  |  |
| 450 | Thành tiền |  |  | `=D447+D448-D449` | 26502 | `=D450*E450` |  |
| 451 | Thuế GTGT (10%) |  |  |  |  | `=round(F450*10%,0)` |  |
| 452 |  |  |  |  |  | `=F450+F451` |  |

> *Đã bỏ qua 143 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (233 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*2%` | 27 | `D5` |
| D | `=D{r}-D{r}` | 27 | `D6` |
| D | `=D{r}*0.05` | 27 | `D7` |
| D | `=round(D{r}+D{r},2)` | 24 | `D38` |
| D | `=round((D{r}+D{r})*2%,2)` | 15 | `D282` |
| D | `=D{r}+D{r}-D{r}` | 15 | `D283` |
| D | `=round(D{r}*5.26%,2)` | 13 | `D281` |
| D | `=D{r}+D{r}` | 3 | `D8` |
| D | `=round(D{r}*10%,2)` | 2 | `D436` |
| F | `=D{r}*E{r}` | 38 | `F38` |
| F | `=F{r}+F{r}` | 18 | `F8` |
| F | `=round(F{r}*10%,0)` | 15 | `F284` |
| F | `=round(D{r}*E{r},0)` | 6 | `F4` |
| F | `=F{r}*0.05` | 3 | `F7` |
