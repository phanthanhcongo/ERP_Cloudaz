# ZIMICO

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ZIMICO`  
> **Vùng dữ liệu:** 315 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 5 | 1 | 350074420033 | 2021-10-01 | 13.96 | 22850 | `=round(D5*E5,0)` |  |  |
| 6 |  | Discount 2% |  | `=D5*2%` |  |  |  |  |
| 7 |  | Tổng cộng |  | `=D5-D6` | 22850 | `=round(D7*E7,0)` |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.07` |  | `=F7*0.07` |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 22850 | `=F7+F8` | 334488.42 |  |
| 13 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 16 | 1 | 350074420033 | 2021-11-01 | 7.69 | 22800 | `=round(D16*E16,0)` |  |  |
| 17 |  | Discount 2% |  | `=D16*2%` |  |  |  |  |
| 18 |  | Tổng cộng |  | `=D16-D17` | 22800 | `=round(D18*E18,0)` |  |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D18*0.07` |  | `=F18*0.07` |  |  |
| 20 |  | Tổng số tiền phải thanh toán |  | `=D18+D19` | 22800 | `=F18+F19` | 183852.75 |  |
| 24 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 27 | 1 | 350074420033 | 2021-12-01 | 1.91 | 22920 | `=round(D27*E27,0)` |  |  |
| 28 |  | Discount 2% |  | `=D27*2%` |  |  |  |  |
| 29 |  | Tổng cộng |  | `=D27-D28` | 22920 | `=round(D29*E29,0)` |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D29*0.07` |  | `=F29*0.07` |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=D29+D30` | 22920 | `=F29+F30` |  |  |
| 34 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 36 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 37 | 1 | 350074420033 | 2022-01-01 | 0.45 | 22780 | `=round(D37*E37,0)` |  |  |
| 38 |  | Discount 2% |  | `=D37*2%` |  |  |  |  |
| 39 |  | Tổng cộng |  | `=D37-D38` | 22780 | `=round(D39*E39,0)` |  |  |
| 40 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D39*0.07` |  | `=F39*0.07` |  |  |
| 41 |  | Tổng số tiền phải thanh toán |  | `=D39+D40` | 22780 | `=F39+F40` |  |  |
| 45 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 47 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 48 | 1 | 350074420033 | 2022-02-01 | 0.4 | 22950 | `=round(D48*E48,0)` |  |  |
| 49 |  | Discount 2% |  | `=D48*2%` |  |  |  |  |
| 50 |  | Tổng cộng |  | `=D48-D49` | 22950 | `=round(D50*E50,0)` |  |  |
| 51 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D50*0.07` |  | `=F50*0.07` |  |  |
| 52 |  | Tổng số tiền phải thanh toán |  | `=D50+D51` | 22950 | `=F50+F51` | 9625.72 |  |
| 55 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 57 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 58 | 1 | 350074420033 | 2022-03-01 | 2.88 | 22980 | `=round(D58*E58,0)` |  |  |
| 59 |  | Discount 2% |  | `=D58*2%` |  |  |  |  |
| 60 |  | Tổng cộng |  | `=D58-D59` | 22980 | `=round(D60*E60,0)` |  |  |
| 61 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D60*0.07` |  | `=F60*0.07` |  |  |
| 62 |  | Tổng số tiền phải thanh toán |  | `=D60+D61` | 22980 | `=F60+F61` | 69399.13 |  |
| 65 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 68 | 1 | 350074420033 | 2022-04-01 | 9.73 | 23095 | `=round(D68*E68,0)` |  |  |
| 69 |  | Discount 2% |  | `=D68*2%` |  |  |  |  |
| 70 |  | Tổng cộng |  | `=D68-D69` | 23095 | `=round(D70*E70,0)` |  |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D70*0.07` |  | `=F70*0.07` |  | `=F72+F62+F52+F41+F31+F20` |
| 72 |  | Tổng số tiền phải thanh toán |  | `=D70+D71` | 23095 | `=F70+F71` |  |  |
| 75 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 78 | 1 | 350074420033 | 2022-05-01 | 10.05 |  |  |  |  |
| 79 |  | Discount 2% |  | `=D78*2%` |  |  |  |  |
| 80 |  | Tổng cộng |  | `=D78-D79` |  |  |  |  |
| 81 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D80*0.07` |  |  |  |  |
| 82 |  | Tổng số tiền phải thanh toán |  | `=round(D80+D81,2)` | 23330 | `=D82*E82` |  |  |
| 86 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 88 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 89 | 1 | 350074420033 | 2023-11-01 | 7.91 |  |  |  |  |
| 90 |  | Discount 2% |  | `=D89*2%` |  |  |  |  |
| 91 |  | Tổng cộng |  | `=D89-D90` |  |  |  |  |
| 92 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D91*0.07` |  |  |  |  |
| 93 |  | Tổng số tiền phải thanh toán |  | `=round(D91+D92,2)` | 24427 | `=D93*E93` |  |  |
| 97 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 100 | 1 | 350074420033 | 2023-12-01 | 53.74 |  |  |  |  |
| 101 |  | Discount 2% |  | `=D100*2%` |  |  |  |  |
| 102 |  | Tổng cộng |  | `=D100-D101` |  |  |  |  |
| 103 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D102*0.07` |  |  |  |  |
| 104 |  | Tổng số tiền phải thanh toán |  | `=round(D102+D103,2)` | 24450 | `=D104*E104` |  |  |
| 108 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 110 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 111 | 1 | 350074420033 | 2024-01-01 | 54.1 |  |  |  |  |
| 112 |  | Discount 2% |  | `=D111*2%` |  |  |  |  |
| 113 |  | Tổng cộng |  | `=D111-D112` |  |  |  |  |
| 114 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D113*0.07` |  |  |  |  |
| 115 |  | Tổng số tiền phải thanh toán |  | `=round(D113+D114,2)` | 24578 | `=D115*E115` |  |  |
| 119 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 121 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 122 | 1 | 350074420033 | 2024-02-01 | 51.18 |  |  |  |  |
| 123 |  | Discount 2% |  | `=D122*2%` |  |  |  |  |
| 124 |  | Tổng cộng |  | `=D122-D123` |  |  |  |  |
| 125 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D124*0.07` |  |  |  |  |
| 126 |  | Tổng số tiền phải thanh toán |  | `=round(D124+D125,2)` | 24802 | `=D126*E126` |  |  |
| 130 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 132 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 133 | 1 | 350074420033 | 2024-03-01 | 54.66 |  |  |  |  |
| 134 |  | Discount 2% |  | `=D133*2%` |  |  |  |  |
| 135 |  | Tổng cộng |  | `=D133-D134` |  |  |  |  |
| 136 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D135*0.07` |  |  |  |  |
| 137 |  | Tổng số tiền phải thanh toán |  | `=round(D135+D136,2)` | 24972 | `=D137*E137` |  |  |
| 141 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 143 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 144 | 1 | 350074420033 | 2024-04-01 | 54.01 |  |  |  |  |
| 145 |  | Discount 2% |  | `=D144*2%` |  |  |  |  |
| 146 |  | Tổng cộng |  | `=D144-D145` |  |  |  |  |
| 147 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D146*0.07` |  |  |  |  |
| 148 |  | Tổng số tiền phải thanh toán |  | `=round(D146+D147,2)` | 25458 | `=D148*E148` |  |  |
| 152 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 155 | 1 | 350074420033 | 2024-05-01 | 60.1 |  |  |  |  |
| 156 |  | Discount 2% |  | `=D155*2%` |  |  |  |  |
| 157 |  | Tổng cộng |  | `=D155-D156` |  |  |  |  |
| 158 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D157*0.07` |  |  |  |  |
| 159 |  | Tổng số tiền phải thanh toán |  | `=round(D157+D158,2)` | 25474 | `=D159*E159` |  |  |
| 163 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 165 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 166 | 1 | 350074420033 | 2024-06-01 | 59.39 |  |  |  |  |
| 167 |  | Phí dịch vụ |  | `=round(D166*10.8%,2)` |  |  |  |  |
| 168 |  | Chiết khấu |  | `=round((D166+D167)*2%,2)` |  |  |  |  |
| 169 | Thành tiền |  |  | `=D166+D167-D168` | 25473 | `=D169*E169` |  |  |
| 170 | Thuế GTGT |  |  |  |  | `=F169*10%` |  |  |
| 171 | Tổng số tiền phải thanh toán |  |  |  |  | `=F169+F170` |  |  |
| 175 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 177 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 178 | 1 | 350074420033 | 2024-07-01 | 61.92 |  |  |  |  |
| 179 |  | Phí dịch vụ |  | `=round(D178*10.8%,2)` |  |  |  |  |
| 180 |  | Chiết khấu |  | `=round((D178+D179)*2%,2)` |  |  |  |  |
| 181 | Thành tiền |  |  | `=D178+D179-D180` | 25405 | `=D181*E181` |  |  |
| 182 | Thuế GTGT |  |  |  |  | `=F181*10%` |  |  |
| 183 | Tổng số tiền phải thanh toán |  |  |  |  | `=F181+F182` |  |  |
| 187 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 189 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 190 | 1 | 350074420033 | 2024-08-01 | 62.38 |  |  |  |  |
| 191 |  | Phí dịch vụ |  | `=round(D190*10.8%,2)` |  |  |  |  |
| 192 |  | Chiết khấu |  | `=round((D190+D191)*2%,2)` |  |  |  |  |
| 193 | Thành tiền |  |  | `=D190+D191-D192` | 25080 | `=D193*E193` |  |  |
| 194 | Thuế GTGT |  |  |  |  | `=F193*10%` |  |  |
| 195 | Tổng số tiền phải thanh toán |  |  |  |  | `=F193+F194` |  |  |
| 199 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 201 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 202 | 1 | 350074420033 | 2024-09-01 | 60.27 |  |  |  |  |
| 203 |  | Phí dịch vụ |  | `=round(D202*10.8%,2)` |  |  |  |  |
| 204 |  | Chiết khấu |  | `=round((D202+D203)*2%,2)` |  |  |  |  |
| 205 | Thành tiền |  |  | `=D202+D203-D204` | 24733 | `=D205*E205` |  |  |
| 206 | Thuế GTGT |  |  |  |  | `=round(F205*10%,0)` |  |  |
| 207 | Tổng số tiền phải thanh toán |  |  |  |  | `=F205+F206` |  |  |
| 211 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 213 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 214 | 1 | 350074420033 | 2024-10-01 | 59.4 |  |  |  |  |
| 215 |  | Phí dịch vụ |  | `=round(D214*10.8%,2)` |  |  |  |  |
| 216 |  | Chiết khấu |  | `=round((D214+D215)*2%,2)` |  |  |  |  |
| 217 | Thành tiền |  |  | `=D214+D215-D216` | 25445 | `=D217*E217` |  |  |
| 218 | Thuế GTGT |  |  |  |  | `=round(F217*10%,0)` |  |  |
| 219 | Tổng số tiền phải thanh toán |  |  |  |  | `=F217+F218` |  |  |
| 223 | TỔNG HỢP CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 225 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 226 | 1 | 350074420033 | 2024-11-01 | 55.76 |  |  |  |  |
| 227 |  | Phí dịch vụ |  | `=round(D226*10.8%,2)` |  |  |  |  |
| 228 |  | Chiết khấu |  | `=round((D226+D227)*2%,2)` |  |  |  |  |
| 229 | Thành tiền |  |  | `=D226+D227-D228` | 25463 | `=D229*E229` |  |  |
| 230 | Thuế GTGT |  |  |  |  | `=round(F229*10%,0)` |  |  |
| 231 | Tổng số tiền phải thanh toán |  |  |  |  | `=F229+F230` |  |  |
| 235 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 237 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 238 | 1 | 350074420033 | 2024-12-01 | 56.55 |  |  |  |  |
| 239 |  | Phí dịch vụ |  | `=round(D238*10.8%,2)` |  |  |  |  |
| 240 |  | Chiết khấu |  | `=round((D238+D239)*2%,2)` |  |  |  |  |
| 241 | Thành tiền |  |  | `=D238+D239-D240` | 25551 | `=D241*E241` |  |  |
| 242 | Thuế GTGT |  |  |  |  | `=round(F241*10%,0)` |  |  |
| 243 | Tổng số tiền phải thanh toán |  |  |  |  | `=F241+F242` |  |  |
| 247 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 249 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 250 | 1 | 350074420033 | 2025-01-01 | 56.38 |  |  |  |  |
| 251 |  | Phí dịch vụ |  | `=round(D250*10.8%,2)` |  |  |  |  |
| 252 |  | Chiết khấu |  | `=round((D250+D251)*2%,2)` |  |  |  |  |
| 253 | Thành tiền |  |  | `=D250+D251-D252` | 25295 | `=D253*E253` |  |  |
| 254 | Thuế GTGT |  |  |  |  | `=round(F253*10%,0)` |  |  |
| 255 | Tổng số tiền phải thanh toán |  |  |  |  | `=F253+F254` |  |  |
| 259 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 262 | 1 | 350074420033 | 2025-02-01 | 55.72 |  |  |  |  |
| 263 |  | Phí dịch vụ |  | `=round(D262*10.8%,2)` |  |  |  |  |
| 264 |  | Chiết khấu |  | `=round((D262+D263)*2%,2)` |  |  |  |  |
| 265 | Thành tiền |  |  | `=D262+D263-D264` | 25735 | `=D265*E265` |  |  |
| 266 | Thuế GTGT |  |  |  |  | `=round(F265*10%,0)` |  |  |
| 267 | Tổng số tiền phải thanh toán |  |  |  |  | `=F265+F266` |  |  |
| 271 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 273 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 274 | 1 | 350074420033 | 2025-03-01 | 78.89 |  |  |  |  |
| 275 |  | Phí dịch vụ |  | `=round(D274*10.8%,2)` |  |  |  |  |
| 276 |  | Chiết khấu |  | `=round((D274+D275)*2%,2)` |  |  |  |  |
| 277 | Thành tiền |  |  | `=D274+D275-D276` | 25775 | `=D277*E277` |  |  |
| 278 | Thuế GTGT |  |  |  |  | `=round(F277*10%,0)` |  |  |
| 279 | Tổng số tiền phải thanh toán |  |  |  |  | `=F277+F278` |  |  |
| 283 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 285 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 286 | 1 | 350074420033 | 2025-04-01 | 61.87 |  |  |  |  |
| 287 |  | Phí dịch vụ |  | `=round(D286*10.8%,2)` |  |  |  |  |
| 288 |  | Chiết khấu |  | `=round((D286+D287)*2%,2)` |  |  |  |  |
| 289 | Thành tiền |  |  | `=D286+D287-D288` | 26190 | `=D289*E289` |  |  |
| 290 | Thuế GTGT |  |  |  |  | `=round(F289*10%,0)` |  |  |
| 291 | Tổng số tiền phải thanh toán |  |  |  |  | `=F289+F290` |  |  |
| 295 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 297 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 298 | 1 | 350074420033 | 2025-05-01 | 63.29 |  |  |  |  |
| 299 |  | Phí dịch vụ |  | `=round(D298*10.8%,2)` |  |  |  |  |
| 300 |  | Chiết khấu |  | `=round((D298+D299)*2%,2)` |  |  |  |  |
| 301 | Thành tiền |  |  | `=D298+D299-D300` | 26225 | `=D301*E301` |  |  |
| 302 | Thuế GTGT |  |  |  |  | `=round(F301*10%,0)` |  |  |
| 303 | Tổng số tiền phải thanh toán |  |  |  |  | `=F301+F302` |  |  |
| 307 | ĐỐI SOÁT CHI PHÍ ZIMICO |  |  |  |  |  |  |  |
| 309 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 310 | 1 | 350074420033 | 2025-06-01 | 61.87 |  |  |  |  |
| 311 |  | Phí dịch vụ |  | `=round(D310*10.8%,2)` |  |  |  |  |
| 312 |  | Chiết khấu |  | `=round((D310+D311)*2%,2)` |  |  |  |  |
| 313 | Thành tiền |  |  | `=D310+D311-D312` | 26300 | `=D313*E313` |  |  |
| 314 |  |  |  |  |  | `=round(F313*10%,0)` |  |  |
| 315 |  |  |  |  |  | `=F313+F314` |  |  |

> *Đã bỏ qua 106 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (175 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*2%` | 15 | `D6` |
| D | `=D{r}-D{r}` | 15 | `D7` |
| D | `=D{r}*0.07` | 15 | `D8` |
| D | `=round(D{r}*10.8%,2)` | 13 | `D167` |
| D | `=round((D{r}+D{r})*2%,2)` | 13 | `D168` |
| D | `=D{r}+D{r}-D{r}` | 13 | `D169` |
| D | `=round(D{r}+D{r},2)` | 8 | `D82` |
| D | `=D{r}+D{r}` | 7 | `D9` |
| F | `=D{r}*E{r}` | 21 | `F82` |
| F | `=F{r}+F{r}` | 20 | `F9` |
| F | `=round(D{r}*E{r},0)` | 14 | `F5` |
| F | `=round(F{r}*10%,0)` | 10 | `F206` |
| F | `=F{r}*0.07` | 7 | `F8` |
| F | `=F{r}*10%` | 3 | `F170` |
| H | `=F{r}+F{r}+F{r}+F{r}+F{r}+F{r}` | 1 | `H71` |
