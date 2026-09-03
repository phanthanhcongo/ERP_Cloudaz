# YODY

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `YODY`  
> **Vùng dữ liệu:** 507 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 3 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 5 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 6 | 1 | 944815839351 | 2022-01-01 | `=9052.1+681.33` | 22780 | `=round(D6*E6,0)` |  |  |
| 7 |  | Tổng cộng |  | `=D6` | 22780 | `=F6` |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.05` |  | `=F7*0.05` |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 22780 | `=F7+F8` | 232813911.75 |  |
| 12 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  | `=G9+G18` |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 15 | 1 | 944815839351 | 2022-01-01 | `=128+1497.96+512.46` | 22780 | `=round(D15*E15,0)` |  |  |
| 16 |  | Tổng cộng |  | `=D15` | 22780 | `=F15` |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*0.05` |  | `=F16*0.05` |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=D16+D17` | 22780 | `=F16+F17` | 51148868.3999999985 |  |
| 21 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 24 | 1 | 944815839351 | 2022-02-01 | `=11825.57+890.15+33.3` | 22950 | `=round(D24*E24,0)` |  |  |
| 25 |  | Tổng cộng |  | `=D24` | 22950 | `=F24` |  |  |
| 26 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D25*0.05` |  | `=F25*0.05` |  |  |
| 27 |  | Tổng số tiền phải thanh toán |  | `=D25+D26` | 22950 | `=F25+F26` | 307219509.4499999881 |  |
| 30 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 33 | 1 | 944815839351 | 2022-03-01 | `=19821.1+1486.52+74.3` | 22980 | `=round(D33*E33,0)` |  |  |
| 34 |  | Tổng cộng |  | `=D33` | 22980 | `=F33` |  |  |
| 35 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D34*0.05` |  | `=F34*0.05` |  |  |
| 36 |  | Tổng số tiền phải thanh toán |  | `=D34+D35` | 22980 | `=F34+F35` | 515924348.1000000238 |  |
| 39 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 42 | 1 | 944815839351 | 2022-04-01 | `=18652.49+1403.95+72` |  | `=round(D42*E42,0)` |  |  |
| 43 |  | Discount (2%) |  | `=D42*2%` |  |  |  |  |
| 44 |  | Tổng cộng |  | `=D42-D43` |  | `=round(D44*E44,0)` |  |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D44*0.05` |  | `=F44*0.05` |  |  |
| 46 |  | Tổng số tiền phải thanh toán |  | `=D44+D45` | 23095 | `=D46*E46` | 478347444.75 |  |
| 50 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 52 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 53 | 1 | 944815839351 | 2022-05-01 | 24801.82 |  |  |  |  |
| 54 |  | Discount (2%) |  | `=D53*2%` |  |  |  |  |
| 55 |  | Tổng cộng |  | `=D53-D54` |  |  |  |  |
| 56 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D55*0.05` |  |  |  |  |
| 57 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D55+D56,2)` | 23330 | `=D57*E57` | 595406563.1000000238 |  |
| 60 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 62 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 63 | 1 | 944815839351 | 2022-06-01 | 30749.85 |  |  |  |  |
| 64 |  | Discount (2%) |  | `=D63*2%` |  |  |  |  |
| 65 |  | Tổng cộng |  | `=D63-D64` |  |  |  |  |
| 66 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D65*0.05` |  |  |  |  |
| 67 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D65+D66,2)` | 23415 | `=D67*E67` | 740888064 |  |
| 69 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 71 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 72 | 1 | 944815839351 | 2022-07-01 | 25672.28 |  |  |  |  |
| 73 |  | Discount (2%) |  | `=D72*2%` |  |  |  |  |
| 74 |  | Tổng cộng |  | `=D72-D73` |  |  |  |  |
| 75 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D74*0.05` |  |  |  |  |
| 76 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D74+D75,2)` | 23480 | `=D76*E76` |  |  |
| 80 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 83 | 1 | 944815839351 | 2022-08-01 | 24956.45 |  |  |  |  |
| 84 |  | Discount (2%) |  | `=D83*2%` |  |  |  |  |
| 85 |  | Tổng cộng |  | `=D83-D84` |  |  |  |  |
| 86 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D85*0.05` |  |  |  |  |
| 87 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D85+D86,2)` | 23600 | `=D87*E87` |  |  |
| 90 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 92 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 93 | 1 | 944815839351 | 2022-09-01 | 20465.29 |  |  |  |  |
| 94 |  | Discount (2%) |  | `=D93*2%` |  |  |  |  |
| 95 |  | Tổng cộng |  | `=D93-D94` |  |  |  |  |
| 96 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D95*0.05` |  |  |  |  |
| 97 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D95+D96,2)` | 24010 | `=D97*E97` |  |  |
| 100 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 103 | 1 | 944815839351 | 2022-10-01 | 20951.93 |  |  |  |  |
| 104 |  | Discount (2%) |  | `=D103*2%` |  |  |  |  |
| 105 |  | Tổng cộng |  | `=D103-D104` |  |  |  |  |
| 106 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D105*0.05` |  |  |  |  |
| 107 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D105+D106,2)` | 24877 | `=D107*E107` |  |  |
| 110 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 112 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 113 | 1 | 944815839351 | 2022-11-01 | 23618.68 |  |  |  |  |
| 114 |  | Discount (2%) |  | `=D113*2%` |  |  |  |  |
| 115 |  | Tổng cộng |  | `=D113-D114` |  |  |  |  |
| 116 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D115*0.05` |  |  |  |  |
| 117 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D115+D116,2)` | 24795 | `=D117*E117` |  |  |
| 120 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 122 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 123 | 1 | 944815839351 | 2022-12-01 | 25727.43 |  |  |  |  |
| 124 |  | Discount (2%) |  | `=D123*2%` |  |  |  |  |
| 125 |  | Tổng cộng |  | `=D123-D124` |  |  |  |  |
| 126 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D125*0.05` |  |  |  |  |
| 127 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D125+D126,2)` | 23760 | `=D127*E127` |  |  |
| 130 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 132 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 133 | 1 | 944815839351 | 2023-01-01 | 19113.43 |  |  |  |  |
| 134 |  | Discount (2%) |  | `=D133*2%` |  |  |  |  |
| 135 |  | Tổng cộng |  | `=D133-D134` |  |  |  |  |
| 136 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D135*0.05` |  |  |  |  |
| 137 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D135+D136,2)` | 23622 | `=D137*E137` |  |  |
| 140 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 142 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 143 | 1 | 944815839351 | 2023-02-01 | 17343.45 |  |  |  |  |
| 144 |  | Discount (2%) |  | `=D143*2%` |  |  |  |  |
| 145 |  | Tổng cộng |  | `=D143-D144` |  |  |  |  |
| 146 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D145*0.05` |  |  |  |  |
| 147 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D145+D146,2)` | 23955 | `=D147*E147` |  |  |
| 150 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 152 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 153 | 1 | 944815839351 | 2023-03-01 | 16257.26 |  |  |  |  |
| 154 |  | Discount (2%) |  | `=D153*2%` |  |  |  |  |
| 155 |  | Tổng cộng |  | `=D153-D154` |  |  |  |  |
| 156 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D155*0.05` |  |  |  |  |
| 157 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D155+D156,2)` | 23632 | `=D157*E157` |  |  |
| 160 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 162 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 163 | 1 | 944815839351 | 2023-04-01 | 16862.8 |  |  |  |  |
| 164 |  | Discount (2%) |  | `=D163*2%` |  |  |  |  |
| 165 |  | Tổng cộng |  | `=D163-D164` |  |  |  |  |
| 166 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D165*0.05` |  |  |  |  |
| 167 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D165+D166,2)` | 23645 | `=D167*E167` |  |  |
| 170 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 173 | 1 | 944815839351 | 2023-05-01 | 18571.54 |  |  |  |  |
| 174 |  | Discount (2%) |  | `=D173*2%` |  |  |  |  |
| 175 |  | Tổng cộng |  | `=D173-D174` |  |  |  |  |
| 176 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D175*0.05` |  |  |  |  |
| 177 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D175+D176,2)` | 23662 | `=D177*E177` |  |  |
| 180 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 182 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 183 | 1 | 944815839351 | 2023-06-01 | 18236.66 |  |  |  |  |
| 184 |  | Discount (2%) |  | `=D183*2%` |  |  |  |  |
| 185 |  | Tổng cộng |  | `=D183-D184` |  |  |  |  |
| 186 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D185*0.05` |  |  |  |  |
| 187 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D185+D186,2)` | 23762 | `=D187*E187` |  |  |
| 190 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 192 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 193 | 1 | 944815839351 | 2023-07-01 | 20055.22 |  |  |  |  |
| 194 |  | Discount (2%) |  | `=D193*2%` |  |  |  |  |
| 195 |  | Tổng cộng |  | `=D193-D194` |  |  |  |  |
| 196 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D195*0.05` |  |  |  |  |
| 197 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D195+D196,2)` | 23860 | `=D197*E197` |  |  |
| 200 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 202 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 203 | 1 | 944815839351 | 2023-08-01 | 22314.55 |  |  |  |  |
| 204 |  | Discount (2%) |  | `=D203*2%` |  |  |  |  |
| 205 |  | Tổng cộng |  | `=D203-D204` |  |  |  |  |
| 206 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D205*0.05` |  |  |  |  |
| 207 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D205+D206,2)` | 24260 | `=D207*E207` |  |  |
| 211 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 213 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 214 | 1 | 944815839351 | 2023-09-01 | 22511.81 |  |  |  |  |
| 215 |  | Discount (2%) |  | `=D214*2%` |  |  |  |  |
| 216 |  | Tổng cộng |  | `=D214-D215` |  |  |  |  |
| 217 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D216*0.05` |  |  |  |  |
| 218 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D216+D217,2)` | 24470 | `=D218*E218` |  |  |
| 221 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 224 | 1 | 944815839351 | 2023-10-01 | 25367.54 |  |  |  |  |
| 225 |  | Discount (2%) |  | `=D224*2%` |  |  |  |  |
| 226 |  | Tổng cộng |  | `=D224-D225` |  |  |  |  |
| 227 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D226*0.05` |  |  |  |  |
| 228 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D226+D227,2)` | 24729 | `=D228*E228` |  |  |
| 231 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 233 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 234 | 1 | 944815839351 | 2023-11-01 | 25949.67 |  |  |  |  |
| 235 |  | Discount (2%) |  | `=D234*2%` |  |  |  |  |
| 236 |  | Tổng cộng |  | `=D234-D235` |  |  |  |  |
| 237 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D236*0.05` |  |  |  |  |
| 238 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D236+D237,2)` | 24427 | `=D238*E238` |  |  |
| 242 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 245 | 1 | 944815839351 | 2023-12-01 | 25143.37 |  |  |  |  |
| 246 |  | Discount (2%) |  | `=D245*2%` |  |  |  |  |
| 247 |  | Tổng cộng |  | `=D245-D246` |  |  |  |  |
| 248 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D247*0.05` |  |  |  |  |
| 249 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D247+D248,2)` | 24450 | `=D249*E249` |  |  |
| 253 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 255 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 256 | 1 | 944815839351 | 2024-01-01 | 27307.44 |  |  |  |  |
| 257 |  | Discount (2%) |  | `=D256*2%` |  |  |  |  |
| 258 |  | Tổng cộng |  | `=D256-D257` |  |  |  |  |
| 259 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D258*0.05` |  |  |  |  |
| 260 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D258+D259,2)` | 24578 | `=D260*E260` |  |  |
| 264 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 266 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 267 | 1 | 944815839351 | 2024-02-01 | 24567.47 |  |  |  |  |
| 268 |  | Discount (2%) |  | `=D267*2%` |  |  |  |  |
| 269 |  | Tổng cộng |  | `=D267-D268` |  |  |  |  |
| 270 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D269*0.05` |  |  |  |  |
| 271 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D269+D270,2)` | 24802 | `=D271*E271` |  |  |
| 275 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 277 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 278 | 1 | 944815839351 | 2024-03-01 | 24917.66 |  |  |  |  |
| 279 |  | Discount (5%) |  | `=round(D278*5%,2)` |  |  |  |  |
| 280 |  | Tổng cộng |  | `=D278-D279` |  |  |  |  |
| 281 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D280*0.05,2)` |  |  |  |  |
| 282 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D280+D281,2)` | 24972 | `=D282*E282` |  |  |
| 286 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 288 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 289 | 1 | 944815839351 | 2024-04-01 | 21284.21 |  |  |  |  |
| 290 |  | Discount (5%) |  | `=round(D289*5%,2)` |  |  |  |  |
| 291 |  | Tổng cộng |  | `=D289-D290` |  |  |  |  |
| 292 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D291*0.05,2)` |  |  |  |  |
| 293 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D291+D292,2)` | 25458 | `=D293*E293` |  |  |
| 298 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 300 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 301 | 1 | 944815839351 | 2024-05-01 | 21641.56 |  |  |  |  |
| 302 |  | Discount (5%) |  | `=round(D301*5%,2)` |  |  |  |  |
| 303 |  | Tổng cộng |  | `=D301-D302` |  |  |  |  |
| 304 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D303*0.05,2)` |  |  |  |  |
| 305 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D303+D304,2)` | 25474 | `=D305*E305` |  |  |
| 308 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 310 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 311 | 1 | 944815839351 | 2024-06-01 | 22906.06 |  |  |  |  |
| 312 |  | Credit POC |  | 5000 |  |  |  |  |
| 313 |  | Phí dịch vụ (5%) |  | `=round((D311-D312)*5%,2)` |  |  |  |  |
| 314 |  | Tổng cộng |  | `=D311-D312+D313` |  |  |  |  |
| 315 |  | Chiết khấu (5%) |  | `=round(D314*5%,2)` |  |  |  |  |
| 316 | Thành tiền |  |  | `=D314-D315` | 25473 | `=D316*E316` |  |  |
| 317 | Thuế GTGT (10%) |  |  |  |  | `=round(F316*10%,0)` |  |  |
| 318 | Tổng số tiền phải thanh toán |  |  |  |  | `=F316+F317` |  |  |
| 322 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 324 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 325 | 1 | 944815839351 | 2024-07-01 | 27885.38 |  |  |  |  |
| 326 |  | Credit |  | 3700 |  |  |  |  |
| 327 |  | Phí dịch vụ (5%) |  | `=round((D325-D326)*5%,2)` |  |  |  |  |
| 328 |  | Tổng cộng |  | `=D325-D326+D327` |  |  |  |  |
| 329 |  | Chiết khấu (5%) |  | `=round(D328*5%,2)` |  |  |  |  |
| 330 | Thành tiền |  |  | `=D328-D329` | 25405 | `=D330*E330` |  |  |
| 331 | Thuế GTGT (10%) |  |  |  |  | `=round(F330*10%,0)` |  |  |
| 332 | Tổng số tiền phải thanh toán |  |  |  |  | `=F330+F331` |  |  |
| 336 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 338 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 339 | 1 | 944815839351 | 2024-08-01 | 26741.91 |  |  |  |  |
| 340 |  | Credit |  | 0 |  |  |  |  |
| 341 |  | Phí dịch vụ (5%) |  | `=round((D339-D340)*5%,2)` |  |  |  |  |
| 342 |  | Tổng cộng |  | `=D339-D340+D341` |  |  |  |  |
| 343 |  | Chiết khấu (5%) |  | `=round(D342*5%,2)` |  |  |  |  |
| 344 | Thành tiền |  |  | `=D342-D343` | 25080 | `=D344*E344` |  |  |
| 345 | Thuế GTGT (10%) |  |  |  |  | `=round(F344*10%,1)` |  |  |
| 346 | Tổng số tiền phải thanh toán |  |  |  |  | 735911556 |  |  |
| 350 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 352 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 353 | 1 | 944815839351 | 2024-09-01 | 24230.61 |  |  |  |  |
| 354 |  | Credit |  | 0 |  |  |  |  |
| 355 |  | Phí dịch vụ (5%) |  | `=round((D353-D354)*5%,2)` |  |  |  |  |
| 356 |  | Tổng cộng |  | `=D353-D354+D355` |  |  |  |  |
| 357 |  | Chiết khấu (5%) |  | `=round(D356*5%,2)` |  |  |  |  |
| 358 | Thành tiền |  |  | `=D356-D357` | 24733 | `=D358*E358` |  |  |
| 359 | Thuế GTGT (10%) |  |  |  |  | `=round(F358*10%,1)` |  |  |
| 360 | Tổng số tiền phải thanh toán |  |  |  |  | `=F358+F359` |  |  |
| 364 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 366 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 367 | 1 | 944815839351 | 2024-10-01 | 24695.64 |  |  |  |  |
| 368 |  | Credit |  | 0 |  |  |  |  |
| 369 |  | Phí dịch vụ (5%) |  | `=round((D367-D368)*5%,2)` |  |  |  |  |
| 370 |  | Tổng cộng |  | `=D367-D368+D369` |  |  |  |  |
| 371 |  | Chiết khấu (5%) |  | `=round(D370*5%,2)` |  |  |  |  |
| 372 | Thành tiền |  |  | `=D370-D371` | 25445 | `=D372*E372` |  |  |
| 373 | Thuế GTGT (10%) |  |  |  |  | `=round(F372*10%,1)` |  |  |
| 374 | Tổng số tiền phải thanh toán |  |  |  |  | `=F372+F373` |  |  |
| 378 | TỔNG HỢP CHI PHÍ YODY |  |  |  |  |  |  |  |
| 380 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 381 | 1 | 944815839351 | 2024-11-01 | 22411.61 |  |  |  |  |
| 382 |  | Credit |  | 0 |  |  |  |  |
| 383 |  | Phí dịch vụ (5%) |  | `=round((D381-D382)*5%,2)` |  |  |  |  |
| 384 |  | Tổng cộng |  | `=D381-D382+D383` |  |  |  |  |
| 385 |  | Chiết khấu (5%) |  | `=round(D384*5%,2)` |  |  |  |  |
| 386 | Thành tiền |  |  | `=D384-D385` | 25463 | `=D386*E386` |  |  |
| 387 | Thuế GTGT (10%) |  |  |  |  | `=round(F386*10%,1)` |  |  |
| 388 | Tổng số tiền phải thanh toán |  |  |  |  | `=F386+F387` |  |  |
| 392 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 394 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 395 | 1 | 944815839351 | 2024-12-01 | 26459.69 |  |  |  |  |
| 396 |  | Credit |  | 0 |  |  |  |  |
| 397 |  | Phí dịch vụ (5%) |  | `=round((D395-D396)*5%,2)` |  |  |  |  |
| 398 |  | Tổng cộng |  | `=D395-D396+D397` |  |  |  |  |
| 399 |  | Chiết khấu (5%) |  | `=round(D398*5%,2)` |  |  |  |  |
| 400 | Thành tiền |  |  | `=D398-D399` | 25551 | `=D400*E400` |  |  |
| 401 | Thuế GTGT (10%) |  |  |  |  | `=round(F400*10%,1)` |  |  |
| 402 | Tổng số tiền phải thanh toán |  |  |  |  | `=F400+F401` |  |  |
| 406 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 408 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 409 | 1 | 944815839351 | 2025-01-01 | 21223.95 |  |  |  |  |
| 410 |  | Credit |  | 0 |  |  |  |  |
| 411 |  | Phí dịch vụ (5%) |  | `=round((D409-D410)*5%,2)` |  |  |  |  |
| 412 |  | Tổng cộng |  | `=D409-D410+D411` |  |  |  |  |
| 413 |  | Chiết khấu (5%) |  | `=round(D412*5%,2)` |  |  |  |  |
| 414 | Thành tiền |  |  | `=D412-D413` | 25295 | `=D414*E414` |  |  |
| 415 | Thuế GTGT (10%) |  |  |  |  | `=round(F414*10%,1)` |  |  |
| 416 | Tổng số tiền phải thanh toán |  |  |  |  | `=F414+F415` |  |  |
| 420 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 422 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 423 | 1 | 944815839351 | 2025-02-01 | 17018.61 |  |  |  |  |
| 424 |  | Phí dịch vụ (5%) |  | `=round((D423)*5%,2)` |  |  |  |  |
| 425 |  | Tổng cộng |  | `=D423+D424` |  |  |  |  |
| 426 |  | Chiết khấu (5%) |  | `=round(D425*5%,2)` |  |  |  |  |
| 427 | Thành tiền |  |  | `=D425-D426` | 25735 | `=round(D427*E427,0)` |  |  |
| 428 | Thuế GTGT (10%) |  |  |  |  | `=round(F427*10%,0)` |  |  |
| 429 | Tổng số tiền phải thanh toán |  |  |  |  | `=F427+F428` |  |  |
| 433 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 435 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 436 | 1 | 944815839351 | 2025-03-01 | 18363.36 |  |  |  |  |
| 437 |  | Phí dịch vụ (5%) |  | `=round((D436)*5%,2)` |  |  |  |  |
| 438 |  | Tổng cộng |  | `=D436+D437` |  |  |  |  |
| 439 |  | Chiết khấu (5%) |  | `=round(D438*5%,2)` |  |  |  |  |
| 440 | Thành tiền |  |  | `=D438-D439` | 25775 | `=round(D440*E440,0)` |  |  |
| 441 | Thuế GTGT (10%) |  |  |  |  | `=round(F440*10%,0)` |  |  |
| 442 | Tổng số tiền phải thanh toán |  |  |  |  | `=F440+F441` |  |  |
| 446 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 448 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 449 | 1 | 944815839351 | 2025-04-01 | 18765.04 |  |  |  |  |
| 450 |  | Phí dịch vụ (5%) |  | `=round((D449)*5%,2)` |  |  |  |  |
| 451 |  | Tổng cộng |  | `=D449+D450` |  |  |  |  |
| 452 |  | Chiết khấu (5%) |  | `=round(D451*5%,2)` |  |  |  |  |
| 453 | Thành tiền |  |  | `=D451-D452` | 26190 | `=round(D453*E453,0)` |  |  |
| 454 | Thuế GTGT (10%) |  |  |  |  | `=round(F453*10%,0)` |  |  |
| 455 | Tổng số tiền phải thanh toán |  |  |  |  | `=F453+F454` |  |  |
| 459 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 461 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 462 | 1 | 944815839351 | 2025-05-01 | 16175.1 |  |  |  |  |
| 463 |  | Phí dịch vụ (5%) |  | `=round((D462)*5%,2)` |  |  |  |  |
| 464 |  | Tổng cộng |  | `=D462+D463` |  |  |  |  |
| 465 |  | Chiết khấu (5%) |  | `=round(D464*5%,2)` |  |  |  |  |
| 466 | Thành tiền |  |  | `=D464-D465` | 26225 | `=round(D466*E466,0)` |  |  |
| 467 | Thuế GTGT (10%) |  |  |  |  | `=round(F466*10%,0)` |  |  |
| 468 | Tổng số tiền phải thanh toán |  |  |  |  | `=F466+F467` |  |  |
| 472 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 474 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 475 | 1 | 944815839351 | 2025-06-01 | 11640.69 |  |  |  |  |
| 476 |  | Phí dịch vụ (5%) |  | `=round((D475)*5%,2)` |  |  |  |  |
| 477 |  | Tổng cộng |  | `=D475+D476` |  |  |  |  |
| 478 |  | Chiết khấu (5%) |  | `=round(D477*5%,2)` |  |  |  |  |
| 479 | Thành tiền |  |  | `=D477-D478` | 26300 | `=round(D479*E479,0)` |  |  |
| 480 | Thuế GTGT (10%) |  |  |  |  | `=round(F479*10%,0)` |  |  |
| 481 | Tổng số tiền phải thanh toán |  |  |  |  | `=F479+F480` |  |  |
| 485 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 487 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 488 | 1 | 944815839351 | 2025-07-01 | 17626.25 |  |  |  |  |
| 489 |  | Phí dịch vụ (10%) |  | `=round((D488)*10%,2)` |  |  |  |  |
| 490 |  | Tổng cộng |  | `=D488+D489` |  |  |  |  |
| 491 |  | Chiết khấu (5%) |  | `=round(D490*5%,2)` |  |  |  |  |
| 492 | Thành tiền |  |  | `=D490-D491` | 26382 | `=round(D492*E492,0)` |  |  |
| 493 | Thuế GTGT (10%) |  |  |  |  | `=round(F492*10%,0)` |  |  |
| 494 | Tổng số tiền phải thanh toán |  |  |  |  | `=F492+F493` |  |  |
| 498 | ĐỐI SOÁT CHI PHÍ YODY |  |  |  |  |  |  |  |
| 500 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 501 | 1 | 944815839351 | 2025-08-01 | 17582.06 |  |  |  |  |
| 502 |  | Phí dịch vụ (10%) |  | `=round((D501)*10%,2)` |  |  |  |  |
| 503 |  | Tổng cộng |  | `=D501+D502` |  |  |  |  |
| 504 |  | Chiết khấu (5%) |  | `=round(D503*5%,2)` |  |  |  |  |
| 505 | Thành tiền |  |  | `=D503-D504` | 26502 | `=round(D505*E505,0)` |  |  |
| 506 | Thuế GTGT (10%) |  |  |  |  | `=round(F505*10%,0)` |  |  |
| 507 | Tổng số tiền phải thanh toán |  |  |  |  | `=F505+F506` |  |  |

> *Đã bỏ qua 158 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (271 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 41 | `D44` |
| D | `=D{r}*0.05` | 27 | `D8` |
| D | `=ROUND(D{r}+D{r},2)` | 25 | `D57` |
| D | `=D{r}*2%` | 23 | `D43` |
| D | `=round(D{r}*5%,2)` | 18 | `D279` |
| D | `=D{r}+D{r}` | 12 | `D9` |
| D | `=round((D{r}-D{r})*5%,2)` | 8 | `D313` |
| D | `=D{r}-D{r}+D{r}` | 8 | `D314` |
| D | `=round((D{r})*5%,2)` | 5 | `D424` |
| D | `=D{r}` | 4 | `D7` |
| D | `=round(D{r}*0.05,2)` | 3 | `D281` |
| D | `=round((D{r})*10%,2)` | 2 | `D489` |
| D | `=9052.1+681.33` | 1 | `D6` |
| D | `=128+1497.96+512.46` | 1 | `D15` |
| D | `=11825.57+890.15+33.3` | 1 | `D24` |
| D | `=19821.1+1486.52+74.3` | 1 | `D33` |
| D | `=18652.49+1403.95+72` | 1 | `D42` |
| F | `=D{r}*E{r}` | 34 | `F46` |
| F | `=F{r}+F{r}` | 18 | `F9` |
| F | `=round(D{r}*E{r},0)` | 13 | `F6` |
| F | `=round(F{r}*10%,0)` | 9 | `F317` |
| F | `=round(F{r}*10%,1)` | 6 | `F345` |
| F | `=F{r}*0.05` | 5 | `F8` |
| F | `=F{r}` | 4 | `F7` |
| H | `=G{r}+G{r}` | 1 | `H12` |
