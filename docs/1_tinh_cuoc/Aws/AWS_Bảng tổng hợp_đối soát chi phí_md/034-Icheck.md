# Icheck

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Icheck`  
> **Vùng dữ liệu:** 406 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 420719877891 | 2022-09-01 | 1.824736153 |  |  |
| 5 |  | Discount (0%) |  | `=D4*0%` |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.05` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 24010 | `=D8*E8` |
| 12 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | 420719877891 | 2022-10-01 | 5.02 |  |  |
| 16 |  | Discount (0%) |  | `=D15*0%` |  |  |
| 17 |  | Tổng cộng |  | `=D15-D16` |  |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D17*0.05` |  |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=round(D17+D18,2)` | 24877 | `=D19*E19` |
| 22 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 25 | 1 | 420719877891 | 2022-11-01 | 0.58 |  |  |
| 26 |  | Discount (0%) |  | `=D25*0%` |  |  |
| 27 |  | Tổng cộng |  | `=D25-D26` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D27*0.05` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=round(D27+D28,2)` | 24795 | `=D29*E29` |
| 32 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | 420719877891 | 2022-12-01 | 2.03 |  |  |
| 36 |  | Discount (0%) |  | `=D35*0%` |  |  |
| 37 |  | Tổng cộng |  | `=D35-D36` |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D37*0.05` |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=round(D37+D38,2)` | 23760 | `=D39*E39` |
| 42 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 420719877891 | 2023-01-01 | 5.7 |  |  |
| 46 |  | Discount (0%) |  | `=D45*0%` |  |  |
| 47 |  | Tổng cộng |  | `=D45-D46` |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D47*0.05` |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(D47+D48,2)` | 23622 | `=D49*E49` |
| 52 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | 420719877891 | 2023-02-01 | 3.43 |  |  |
| 56 |  | Discount (0%) |  | `=D55*0%` |  |  |
| 57 |  | Tổng cộng |  | `=D55-D56` |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D57*0.05` |  |  |
| 59 |  | Tổng số tiền phải thanh toán |  | `=round(D57+D58,2)` | 23955 | `=D59*E59` |
| 62 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 65 | 1 | 420719877891 | 2023-03-01 | 3.92 |  |  |
| 66 |  | Discount (0%) |  | `=D65*0%` |  |  |
| 67 |  | Tổng cộng |  | `=D65-D66` |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D67*0.05` |  |  |
| 69 |  | Tổng số tiền phải thanh toán |  | `=round(D67+D68,2)` | 23632 | `=D69*E69` |
| 72 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 74 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 75 | 1 | 420719877891 | 2023-04-01 | 2.99 |  |  |
| 76 |  | Discount (0%) |  | `=D75*0%` |  |  |
| 77 |  | Tổng cộng |  | `=D75-D76` |  |  |
| 78 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D77*0.05` |  |  |
| 79 |  | Tổng số tiền phải thanh toán |  | `=round(D77+D78,2)` | 23645 | `=D79*E79` |
| 83 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 85 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 86 | 1 | 420719877891 | 2023-05-01 | 3.58 |  |  |
| 87 |  | Discount (0%) |  | `=D86*0%` |  |  |
| 88 |  | Tổng cộng |  | `=D86-D87` |  |  |
| 89 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D88*0.05` |  |  |
| 90 |  | Tổng số tiền phải thanh toán |  | `=round(D88+D89,2)` | 23662 | `=D90*E90` |
| 94 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 97 | 1 | 420719877891 | 2023-06-01 | 3.18 |  |  |
| 98 |  | Discount (0%) |  | `=D97*0%` |  |  |
| 99 |  | Tổng cộng |  | `=D97-D98` |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D99*0.05` |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D99+D100,2)` | 23762 | `=D101*E101` |
| 104 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 107 | 1 | 420719877891 | 2023-07-01 | 6.43 |  |  |
| 108 |  | Discount (0%) |  | `=D107*0%` |  |  |
| 109 |  | Tổng cộng |  | `=D107-D108` |  |  |
| 110 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D109*0.05` |  |  |
| 111 |  | Tổng số tiền phải thanh toán |  | `=round(D109+D110,2)` | 23860 | `=D111*E111` |
| 114 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 116 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 117 | 1 | 420719877891 | 2023-08-01 | 14.62 |  |  |
| 118 |  | Discount (0%) |  | `=D117*0%` |  |  |
| 119 |  | Tổng cộng |  | `=D117-D118` |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D119*0.05` |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=round(D119+D120,2)` | 24260 | `=D121*E121` |
| 124 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 127 | 1 | 420719877891 | 2023-09-01 | 4.18 |  |  |
| 128 |  | Discount (0%) |  | `=D127*0%` |  |  |
| 129 |  | Tổng cộng |  | `=D127-D128` |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D129*0.05` |  |  |
| 131 |  | Tổng số tiền phải thanh toán |  | `=round(D129+D130,2)` | 24470 | `=D131*E131` |
| 135 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 137 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 138 | 1 | 420719877891 | 2023-10-01 | 10.81 |  |  |
| 139 |  | Discount (0%) |  | `=D138*0%` |  |  |
| 140 |  | Tổng cộng |  | `=D138-D139` |  |  |
| 141 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D140*0.05` |  |  |
| 142 |  | Tổng số tiền phải thanh toán |  | `=round(D140+D141,2)` | 24729 | `=D142*E142` |
| 146 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 148 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 149 | 1 | 420719877891 | 2023-11-01 | 21.35 |  |  |
| 150 |  | Discount (0%) |  | `=D149*0%` |  |  |
| 151 |  | Tổng cộng |  | `=D149-D150` |  |  |
| 152 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D151*0.05` |  |  |
| 153 |  | Tổng số tiền phải thanh toán |  | `=round(D151+D152,2)` | 24427 | `=D153*E153` |
| 157 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 160 | 1 | 420719877891 | 2023-12-01 | 11.94 |  |  |
| 161 |  | Discount (0%) |  | `=D160*0%` |  |  |
| 162 |  | Tổng cộng |  | `=D160-D161` |  |  |
| 163 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D162*0.05` |  |  |
| 164 |  | Tổng số tiền phải thanh toán |  | `=round(D162+D163,2)` | 24450 | `=D164*E164` |
| 168 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 170 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 171 | 1 | 420719877891 | 2024-01-01 | 2.69 |  |  |
| 172 |  | Discount (0%) |  | `=D171*0%` |  |  |
| 173 |  | Tổng cộng |  | `=D171-D172` |  |  |
| 174 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D173*0.05` |  |  |
| 175 |  | Tổng số tiền phải thanh toán |  | `=round(D173+D174,2)` | 24578 | `=D175*E175` |
| 179 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 181 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 182 | 1 | 420719877891 | 2024-02-01 | 2.22 |  |  |
| 183 |  | Discount (0%) |  | `=D182*0%` |  |  |
| 184 |  | Tổng cộng |  | `=D182-D183` |  |  |
| 185 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D184*0.05` |  |  |
| 186 |  | Tổng số tiền phải thanh toán |  | `=round(D184+D185,2)` | 24802 | `=D186*E186` |
| 190 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 192 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 193 | 1 | 420719877891 | 2024-03-01 | 1.97 |  |  |
| 194 |  | Discount (0%) |  | `=D193*0%` |  |  |
| 195 |  | Tổng cộng |  | `=D193-D194` |  |  |
| 196 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D195*0.05` |  |  |
| 197 |  | Tổng số tiền phải thanh toán |  | `=round(D195+D196,2)` | 24972 | `=D197*E197` |
| 201 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 203 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 204 | 1 | 420719877891 | 2024-04-01 | 4.03 |  |  |
| 205 |  | Discount (0%) |  | `=D204*0%` |  |  |
| 206 |  | Tổng cộng |  | `=D204-D205` |  |  |
| 207 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D206*0.05` |  |  |
| 208 |  | Tổng số tiền phải thanh toán |  | `=round(D206+D207,2)` | 25458 | `=D208*E208` |
| 212 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 215 | 1 | 420719877891 | 2024-05-01 | 8.07 |  |  |
| 216 |  | Discount (0%) |  | `=D215*0%` |  |  |
| 217 |  | Tổng cộng |  | `=D215-D216` |  |  |
| 218 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D217*0.05` |  |  |
| 219 |  | Tổng số tiền phải thanh toán |  | `=round(D217+D218,2)` | 25474 | `=D219*E219` |
| 223 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 225 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 226 | 1 | 420719877891 | 2024-06-01 | 6.04 |  |  |
| 227 |  | Tổng cộng |  | `=D226` |  |  |
| 228 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D227*10.8%,2)` |  |  |
| 229 | Thành tiền |  |  | `=D227+D228` | 25473 | `=D229*E229` |
| 230 | Thuế GTGT |  |  |  |  | `=round(F229*10%,2)` |
| 231 | Tổng số tiền phải thanh toán |  |  |  |  | 187455 |
| 235 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 237 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 238 | 1 | 420719877891 | 2024-07-01 | 3.63 |  |  |
| 239 |  | Tổng cộng |  | `=D238` |  |  |
| 240 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D239*10.8%,2)` |  |  |
| 241 | Thành tiền |  |  | `=D239+D240` | 25405 | `=D241*E241` |
| 242 | Thuế GTGT |  |  |  |  | `=round(F241*10%,0)` |
| 243 | Tổng số tiền phải thanh toán |  |  |  |  | `=F241+F242` |
| 247 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 249 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 250 | 1 | 420719877891 | 2024-08-01 | 20.73 |  |  |
| 251 |  | Tổng cộng |  | `=D250` |  |  |
| 252 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D251*10.8%,2)` |  |  |
| 253 | Thành tiền |  |  | `=D251+D252` | 25080 | `=D253*E253` |
| 254 | Thuế GTGT |  |  |  |  | `=round(F253*10%,0)` |
| 255 | Tổng số tiền phải thanh toán |  |  |  |  | `=F253+F254` |
| 259 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 262 | 1 | 420719877891 | 2024-09-01 | 45.11 |  |  |
| 263 |  | Tổng cộng |  | `=D262` |  |  |
| 264 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D263*10.8%,2)` |  |  |
| 265 | Thành tiền |  |  | `=D263+D264` | 24733 | `=D265*E265` |
| 266 | Thuế GTGT |  |  |  |  | `=round(F265*10%,0)` |
| 267 | Tổng số tiền phải thanh toán |  |  |  |  | `=F265+F266` |
| 271 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 273 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 274 | 1 | 420719877891 | 2024-10-01 | 31.51 |  |  |
| 275 |  | Tổng cộng |  | `=D274` |  |  |
| 276 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D275*10.8%,2)` |  |  |
| 277 | Thành tiền |  |  | `=D275+D276` | 25445 | `=D277*E277` |
| 278 | Thuế GTGT |  |  |  |  | `=round(F277*10%,1)` |
| 279 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F277+F278,1)` |
| 283 | TỔNG HỢP CHI PHÍ ICHECK |  |  |  |  |  |
| 285 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 286 | 1 | 420719877891 | 2024-11-01 | 33.64 |  |  |
| 287 |  | Tổng cộng |  | `=D286` |  |  |
| 288 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D287*10.8%,2)` |  |  |
| 289 | Thành tiền |  |  | `=D287+D288` | 25463 | `=D289*E289` |
| 290 | Thuế GTGT |  |  |  |  | `=round(F289*10%,1)` |
| 291 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F289+F290,1)` |
| 295 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 297 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 298 | 1 | 420719877891 | 2024-12-01 | 50.4 |  |  |
| 299 |  | Tổng cộng |  | `=D298` |  |  |
| 300 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D299*10.8%,2)` |  |  |
| 301 | Thành tiền |  |  | `=D299+D300` | 25551 | `=D301*E301` |
| 302 | Thuế GTGT |  |  |  |  | `=round(F301*10%,1)` |
| 303 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F301+F302,1)` |
| 307 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 309 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 310 | 1 | 420719877891 | 2025-01-01 | 29.05 |  |  |
| 311 |  | Tổng cộng |  | `=D310` |  |  |
| 312 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D311*10.8%,2)` |  |  |
| 313 | Thành tiền |  |  | `=D311+D312` | 25295 | `=D313*E313` |
| 314 | Thuế GTGT |  |  |  |  | `=round(F313*10%,1)` |
| 315 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F313+F314,1)` |
| 319 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 321 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 322 | 1 | 420719877891 | 2025-02-01 | 30.82 |  |  |
| 323 |  | Tổng cộng |  | `=D322` |  |  |
| 324 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D323*10.8%,2)` |  |  |
| 325 | Thành tiền |  |  | `=D323+D324` | 25735 | `=D325*E325` |
| 326 | Thuế GTGT |  |  |  |  | `=round(F325*10%,1)` |
| 327 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F325+F326,1)` |
| 331 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 333 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 334 | 1 | 420719877891 | 2025-03-01 | 57.05 |  |  |
| 335 |  | Tổng cộng |  | `=D334` |  |  |
| 336 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D335*10.8%,2)` |  |  |
| 337 | Thành tiền |  |  | `=D335+D336` | 25775 | `=D337*E337` |
| 338 | Thuế GTGT |  |  |  |  | `=round(F337*10%,1)` |
| 339 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F337+F338,1)` |
| 343 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 345 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 346 | 1 | 420719877891 | 2025-04-01 | 100.69 |  |  |
| 347 |  | Tổng cộng |  | `=D346` |  |  |
| 348 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D347*10.8%,2)` |  |  |
| 349 | Thành tiền |  |  | `=D347+D348` | 26190 | `=D349*E349` |
| 350 | Thuế GTGT |  |  |  |  | `=round(F349*10%,1)` |
| 351 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F349+F350,1)` |
| 355 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 357 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 358 | 1 | 420719877891 | 2025-05-01 | 104.17 |  |  |
| 359 |  | Tổng cộng |  | `=D358` |  |  |
| 360 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D359*10.8%,2)` |  |  |
| 361 | Thành tiền |  |  | `=D359+D360` | 26225 | `=D361*E361` |
| 362 | Thuế GTGT |  |  |  |  | `=round(F361*10%,1)` |
| 363 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F361+F362,1)` |
| 367 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 369 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 370 | 1 | 420719877891 | 2025-06-01 | 113.24 |  |  |
| 371 |  | Tổng cộng |  | `=D370` |  |  |
| 372 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D371*10.8%,2)` |  |  |
| 373 | Thành tiền |  |  | `=D371+D372` | 26300 | `=D373*E373` |
| 374 | Thuế GTGT |  |  |  |  | `=round(F373*10%,1)` |
| 375 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F373+F374,1)` |
| 379 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 381 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 382 | 1 | 420719877891 | 2025-07-01 | 21.45 |  |  |
| 383 |  | Tổng cộng |  | `=D382` |  |  |
| 384 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D383*10.8%,2)` |  |  |
| 385 | Thành tiền |  |  | `=D383+D384` | 26382 | `=D385*E385` |
| 386 | Thuế GTGT |  |  |  |  | `=round(F385*10%,1)` |
| 387 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F385+F386,1)` |
| 392 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |
| 394 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 395 | 1 | 420719877891 | 2025-08-01 | 5.95 |  |  |
| 396 |  | Tổng cộng |  | `=D395` |  |  |
| 397 | Phí dịch vụ tính trên Lượng dùng thực tế |  |  | `=round(D396*10.8%,2)` |  |  |
| 398 | Thành tiền |  |  | `=D396+D397` | 26502 | `=D398*E398` |
| 399 | Thuế GTGT |  |  |  |  | `=round(F398*10%,1)` |
| 400 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F398+F399,1)` |
| 406 | ĐỐI SOÁT CHI PHÍ ICHECK |  |  |  |  |  |

> *Đã bỏ qua 138 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (194 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0%` | 21 | `D5` |
| D | `=D{r}-D{r}` | 21 | `D6` |
| D | `=D{r}*0.05` | 21 | `D7` |
| D | `=round(D{r}+D{r},2)` | 21 | `D8` |
| D | `=D{r}` | 15 | `D227` |
| D | `=round(D{r}*10.8%,2)` | 15 | `D228` |
| D | `=D{r}+D{r}` | 15 | `D229` |
| F | `=D{r}*E{r}` | 36 | `F8` |
| F | `=round(F{r}*10%,1)` | 11 | `F278` |
| F | `=round(F{r}+F{r},1)` | 11 | `F279` |
| F | `=round(F{r}*10%,0)` | 3 | `F242` |
| F | `=F{r}+F{r}` | 3 | `F243` |
| F | `=round(F{r}*10%,2)` | 1 | `F230` |
