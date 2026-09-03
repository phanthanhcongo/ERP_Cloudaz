# CUBE SYSTEM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `CUBE SYSTEM`  
> **Vùng dữ liệu:** 359 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 5 | 1 | 702097669998 | 2022-05-01 | 32.25 |  |  |
| 6 |  | Discount (2%) |  | `=E5*0.02` |  |  |
| 7 |  | Tổng cộng |  | `=E5-E6` |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E7*0.05` |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=round(E7+E8,2)` | 23330 | `=E9*F9` |
| 12 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | 702097669998 | 2022-06-01 | 605.72 |  |  |
| 16 |  | Discount (2%) |  | `=E15*0.02` |  |  |
| 17 |  | Tổng cộng |  | `=E15-E16` |  |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E17*0.05` |  |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=round(E17+E18,2)` | 23415 | `=E19*F19` |
| 22 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 25 | 1 | 702097669998 | 2022-07-01 | 663.35 |  |  |
| 26 |  | Discount (2%) |  | `=E25*0.02` |  |  |
| 27 |  | Tổng cộng |  | `=E25-E26` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E27*0.05` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=round(E27+E28,2)` | 23480 | `=E29*F29` |
| 32 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | 702097669998 | 2022-08-01 | 678.84 |  |  |
| 36 |  | Discount (2%) |  | `=E35*0.02` |  |  |
| 37 |  | Tổng cộng |  | `=E35-E36` |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E37*0.05` |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=round(E37+E38,2)` | 23600 | `=E39*F39` |
| 42 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 702097669998 | 2022-09-01 | 624.358 |  |  |
| 46 |  | Discount (2%) |  | 12.48 |  |  |
| 47 |  | Tổng cộng |  | `=E45-E46` |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E47*0.05` |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(E47+E48,2)` | 24010 | `=E49*F49` |
| 53 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 56 | 1 | 702097669998 | 2022-10-01 | 727.64 |  |  |
| 57 |  | Discount (2%) |  | `=E56*2%` |  |  |
| 58 |  | Tổng cộng |  | `=E56-E57` |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E58*0.05` |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=round(E58+E59,2)` | 24877 | `=E60*F60` |
| 64 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 66 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 67 | 1 | 702097669998 | 2022-11-01 | 763.63 |  |  |
| 68 |  | Discount (2%) |  | `=E67*2%` |  |  |
| 69 |  | Tổng cộng |  | `=E67-E68` |  |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E69*0.05` |  |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=round(E69+E70,2)` | 24795 | `=E71*F71` |
| 74 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 77 | 1 | 702097669998 | 2022-12-01 | 852.1304392072 |  |  |
| 78 |  | Discount (2%) |  | `=E77*2%` |  |  |
| 79 |  | Tổng cộng |  | `=E77-E78` |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E79*0.05` |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=round(E79+E80,2)` | 23760 | `=E81*F81` |
| 84 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 87 | 1 | 702097669998 | 2023-01-01 | 929.17 |  |  |
| 88 |  | Discount (2%) |  | `=E87*2%` |  |  |
| 89 |  | Tổng cộng |  | `=E87-E88` |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E89*0.05` |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=round(E89+E90,2)` | 23622 | `=E91*F91` |
| 95 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 98 | 1 | 702097669998 | 2023-02-01 | 799.97 |  |  |
| 99 |  | Discount (2%) |  | `=E98*2%` |  |  |
| 100 |  | Tổng cộng |  | `=E98-E99` |  |  |
| 101 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E100*0.05` |  |  |
| 102 |  | Khấu trừ chi phí chênh lệch mua RI |  | 2.23 |  |  |
| 103 |  | Tổng số tiền phải thanh toán |  | `=round(E100+E101-E102,2)` | 23955 | `=E103*F103` |
| 106 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 109 | 1 | 702097669998 | 2023-03-01 | 1012.06 |  |  |
| 110 |  | Discount (2%) |  | `=E109*2%` |  |  |
| 111 |  | Tổng cộng |  | `=E109-E110` |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E111*0.05` |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=round(E111+E112,2)` | 23632 | `=E113*F113` |
| 116 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 119 | 1 | 702097669998 | 2023-04-01 | 434.52 |  |  |
| 120 |  | Discount (2%) |  | `=E119*2%` |  |  |
| 121 |  | Tổng cộng |  | `=E119-E120` |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E121*0.05` |  |  |
| 123 |  | Tổng số tiền phải thanh toán |  | `=round(E121+E122,2)` | 23645 | `=E123*F123` |
| 127 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 130 | 1 | 702097669998 | 2023-06-01 | 13 |  |  |
| 131 |  | Discount (2%) |  | 0 |  |  |
| 132 |  | Tổng cộng |  | `=E130-E131` |  |  |
| 133 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E132*0.05,2)` |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=round(E132+E133,2)` | 23762 | `=E134*F134` |
| 139 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 141 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 142 | 1 | 702097669998 | 2023-09-01 | 80.32 |  |  |
| 143 |  | Discount (2%) |  | `=E142*2%` |  |  |
| 144 |  | Tổng cộng |  | `=E142-E143` |  |  |
| 145 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E144*0.05` |  |  |
| 146 |  | Tổng số tiền phải thanh toán |  | `=round(E144+E145,2)` | 24470 | `=E146*F146` |
| 150 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 152 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 153 | 1 | 702097669998 | 2023-10-01 | 590.33 |  |  |
| 154 |  | Discount (2%) |  | `=E153*2%` |  |  |
| 155 |  | Tổng cộng |  | `=E153-E154` |  |  |
| 156 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E155*0.05` |  |  |
| 157 |  | Tổng số tiền phải thanh toán |  | `=round(E155+E156,2)` | 24729 | `=E157*F157` |
| 161 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 163 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 164 | 1 | 702097669998 | 2023-11-01 | 613.97 |  |  |
| 165 |  | Discount (2%) |  | `=E164*2%` |  |  |
| 166 |  | Tổng cộng |  | `=E164-E165` |  |  |
| 167 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E166*0.05` |  |  |
| 168 |  | Tổng số tiền phải thanh toán |  | `=round(E166+E167,2)` | 24427 | `=E168*F168` |
| 172 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 174 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 175 | 1 | 702097669998 | 2023-12-01 | 799.64 |  |  |
| 176 |  | Discount (2%) |  | `=E175*2%` |  |  |
| 177 |  | Tổng cộng |  | `=E175-E176` |  |  |
| 178 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E177*0.05` |  |  |
| 179 |  | Tổng số tiền phải thanh toán |  | `=round(E177+E178,2)` | 24450 | `=E179*F179` |
| 184 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 186 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 187 | 1 | 702097669998 | 2024-01-01 | 896.44 |  |  |
| 188 |  | Discount (2%) |  | `=E187*2%` |  |  |
| 189 |  | Tổng cộng |  | `=E187-E188` |  |  |
| 190 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E189*0.05` |  |  |
| 191 |  | Tổng số tiền phải thanh toán |  | `=round(E189+E190,2)` | 24578 | `=E191*F191` |
| 195 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 197 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 198 | 1 | 702097669998 | 2024-02-01 | 1164.3 |  |  |
| 199 |  | Discount (2%) |  | `=E198*2%` |  |  |
| 200 |  | Tổng cộng |  | `=E198-E199` |  |  |
| 201 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E200*0.05` |  |  |
| 202 |  | Tổng số tiền phải thanh toán |  | `=round(E200+E201,2)` | 24802 | `=E202*F202` |
| 205 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 207 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 208 | 1 | 702097669998 | 2024-03-01 | 1272.07 |  |  |
| 209 |  | Discount (2%) |  | `=round(E208*2%,2)` |  |  |
| 210 |  | Tổng cộng |  | `=E208-E209` |  |  |
| 211 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E210*0.05,2)` |  |  |
| 212 |  | Tổng số tiền phải thanh toán |  | `=round(E210+E211,2)` | 24972 | `=E212*F212` |
| 216 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 218 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 219 | 1 | 702097669998 | 2024-04-01 | 978.12 |  |  |
| 220 |  | Discount (2%) |  | `=round(E219*2%,2)` |  |  |
| 221 |  | Tổng cộng |  | `=E219-E220` |  |  |
| 222 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E221*0.05,2)` |  |  |
| 223 |  | Tổng số tiền phải thanh toán |  | `=round(E221+E222,2)` | 25458 | `=E223*F223` |
| 227 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 229 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 230 | 1 | 702097669998 | 2024-05-01 | 1175.13 |  |  |
| 231 |  | Discount (2%) |  | `=round(E230*2%,2)` |  |  |
| 232 |  | Tổng cộng |  | `=E230-E231` |  |  |
| 233 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E232*0.05,2)` |  |  |
| 234 |  | Tổng số tiền phải thanh toán |  | `=round(E232+E233,2)` | 25474 | `=E234*F234` |
| 238 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 240 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 241 | 1 | 702097669998 | 2024-06-01 | 1238.56 |  |  |
| 242 |  | Phí dịch vụ (10.54%) |  | `=round(E241*10.54%,2)` |  |  |
| 243 |  | Tổng cộng |  | `=E241+E242` |  |  |
| 244 |  | Chiết khấu (2%) |  | `=round(E243*2%,2)` |  |  |
| 245 |  | Thành tiền |  | `=E243-E244` | 25473 | `=E245*F245` |
| 246 |  | Thuế GTGT (10%) |  |  |  | `=round(G245*10%,2)` |
| 247 |  | Tổng số tiền phải thanh toán |  |  |  | `=G245+G246` |
| 252 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 254 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 255 | 1 | 702097669998 | 2024-07-01 | 1300.38 |  |  |
| 256 |  | Phí dịch vụ (10.54%) |  | `=round(E255*10.54%,2)` |  |  |
| 257 |  | Tổng cộng |  | `=E255+E256` |  |  |
| 258 |  | Chiết khấu (2%) |  | `=round(E257*2%,2)` |  |  |
| 259 |  | Thành tiền |  | `=E257-E258` | 25405 | `=E259*F259` |
| 260 |  | Thuế GTGT (10%) |  |  |  | `=round(G259*10%,0)` |
| 261 |  | Tổng số tiền phải thanh toán |  |  |  | `=G259+G260` |
| 265 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 267 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 268 | 1 | 702097669998 | 2024-08-01 | 1230.36 |  |  |
| 269 |  | Phí dịch vụ (10.54%) |  | `=round(E268*10.54%,2)` |  |  |
| 270 |  | Tổng cộng |  | `=E268+E269` |  |  |
| 271 |  | Chiết khấu (2%) |  | `=round(E270*2%,2)` |  |  |
| 272 |  | Thành tiền |  | `=E270-E271` | 25080 | `=E272*F272` |
| 273 |  | Thuế GTGT (10%) |  |  |  | `=round(G272*10%,0)` |
| 274 |  | Tổng số tiền phải thanh toán |  |  |  | `=G272+G273` |
| 279 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 282 | 1 | 702097669998 | 2024-09-01 | 1224.99 |  |  |
| 283 |  | Phí dịch vụ (10.54%) |  | `=round(E282*10.54%,2)` |  |  |
| 284 |  | Tổng cộng |  | `=E282+E283` |  |  |
| 285 |  | Chiết khấu (2%) |  | `=round(E284*2%,2)` |  |  |
| 286 |  | Thành tiền |  | `=E284-E285` | 24733 | `=E286*F286` |
| 287 |  | Thuế GTGT (10%) |  |  |  | `=round(G286*10%,0)` |
| 288 |  | Tổng số tiền phải thanh toán |  |  |  | `=G286+G287` |
| 292 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 294 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 295 | 1 | 702097669998 | 2024-10-01 | 1312.05 |  |  |
| 296 |  | Phí dịch vụ (10.54%) |  | `=round(E295*10.54%,2)` |  |  |
| 297 |  | Tổng cộng |  | `=E295+E296` |  |  |
| 298 |  | Chiết khấu (2%) |  | `=round(E297*2%,2)` |  |  |
| 299 |  | Thành tiền |  | `=E297-E298` | 25445 | `=E299*F299` |
| 300 |  | Thuế GTGT (10%) |  |  |  | `=round(G299*10%,0)` |
| 301 |  | Tổng số tiền phải thanh toán |  |  |  | `=G299+G300` |
| 305 | TỔNG HỢP CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 307 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 308 | 1 | 702097669998 | 2024-11-01 | 1337.95 |  |  |
| 309 |  | Phí dịch vụ (10.54%) |  | `=round(E308*10.54%,2)` |  |  |
| 310 |  | Tổng cộng |  | `=E308+E309` |  |  |
| 311 |  | Chiết khấu (2%) |  | `=round(E310*2%,2)` |  |  |
| 312 |  | Thành tiền |  | `=E310-E311` | 25463 | `=E312*F312` |
| 313 |  | Thuế GTGT (10%) |  |  |  | `=round(G312*10%,0)` |
| 314 |  | Tổng số tiền phải thanh toán |  |  |  | `=G312+G313` |
| 319 | ĐỐI SOÁT CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 321 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 322 | 1 | 702097669998 | 2024-12-01 | 1402.79 |  |  |
| 323 |  | Phí dịch vụ (10.54%) |  | `=round(E322*10.54%,2)` |  |  |
| 324 |  | Tổng cộng |  | `=E322+E323` |  |  |
| 325 |  | Chiết khấu (2%) |  | `=round(E324*2%,2)` |  |  |
| 326 |  | Thành tiền |  | `=E324-E325` | 25551 | `=E326*F326` |
| 327 |  | Thuế GTGT (10%) |  |  |  | `=round(G326*10%,0)` |
| 328 |  | Tổng số tiền phải thanh toán |  |  |  | `=G326+G327` |
| 332 | ĐỐI SOÁT CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 334 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 335 | 1 | 702097669998 | 2025-01-01 | 1313.71 |  |  |
| 336 |  | Phí dịch vụ (10.54%) |  | `=round(E335*10.54%,2)` |  |  |
| 337 |  | Tổng cộng |  | `=E335+E336` |  |  |
| 338 |  | Chiết khấu (2%) |  | `=round(E337*2%,2)` |  |  |
| 339 |  | Thành tiền |  | `=E337-E338` | 25295 | `=E339*F339` |
| 340 |  | Thuế GTGT (10%) |  |  |  | `=round(G339*10%,0)` |
| 341 |  | Tổng số tiền phải thanh toán |  |  |  | `=G339+G340` |
| 345 | ĐỐI SOÁT CHI PHÍ CUBE SYSTEM |  |  |  |  |  |
| 347 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 348 | 1 | 702097669998 | 2025-02-01 | 1219.47 |  |  |
| 349 |  | Phí dịch vụ (10.54%) |  | `=round(E348*10.54%,2)` |  |  |
| 350 |  | Tổng cộng |  | `=E348+E349` |  |  |
| 351 |  | Chiết khấu (2%) |  | `=round(E350*2%,2)` |  |  |
| 352 |  | Thành tiền |  | `=E350-E351` | 25735 | `=E352*F352` |
| 353 |  | Thuế GTGT (10%) |  |  |  | `=round(G352*10%,0)` |
| 354 |  | Tổng số tiền phải thanh toán |  |  |  | `=G352+G353` |
| 359 | ĐỐI SOÁT CHI PHÍ CUBE SYSTEM |  |  |  |  |  |

> *Đã bỏ qua 122 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (171 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| E | `=E{r}-E{r}` | 31 | `E7` |
| E | `=round(E{r}+E{r},2)` | 21 | `E9` |
| E | `=E{r}*0.05` | 18 | `E8` |
| E | `=E{r}*2%` | 13 | `E57` |
| E | `=round(E{r}*2%,2)` | 12 | `E209` |
| E | `=round(E{r}*10.54%,2)` | 9 | `E242` |
| E | `=E{r}+E{r}` | 9 | `E243` |
| E | `=E{r}*0.02` | 4 | `E6` |
| E | `=round(E{r}*0.05,2)` | 4 | `E133` |
| E | `=round(E{r}+E{r}-E{r},2)` | 1 | `E103` |
| G | `=E{r}*F{r}` | 31 | `G9` |
| G | `=G{r}+G{r}` | 9 | `G247` |
| G | `=round(G{r}*10%,0)` | 8 | `G260` |
| G | `=round(G{r}*10%,2)` | 1 | `G246` |
