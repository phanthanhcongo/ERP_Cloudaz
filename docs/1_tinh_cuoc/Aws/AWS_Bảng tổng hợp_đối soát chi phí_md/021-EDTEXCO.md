# EDTEXCO

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `EDTEXCO`  
> **Vùng dữ liệu:** 331 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (411933431698) | 2023-05-01 | 215.27 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D4*(1+10%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 23662 | `=D7*E7` |
| 10 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | AWS (411933431698) | 2023-06-01 | 389.67 |  |  |
| 14 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D13*(1+10%),2)` |  |  |
| 15 | Chiết khấu (2%) |  |  | `=round(D14*2%,2)` |  |  |
| 16 | Tổng số tiền phải thanh toán |  |  | `=D14-D15` | 23762 | `=D16*E16` |
| 19 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 22 | 1 | AWS (411933431698) | 2023-07-01 | 421.2 |  |  |
| 23 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D22*(1+10%),2)` |  |  |
| 24 | Chiết khấu (2%) |  |  | `=round(D23*2%,2)` |  |  |
| 25 | Tổng số tiền phải thanh toán |  |  | `=D23-D24` | 23860 | `=D25*E25` |
| 28 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 30 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 31 | 1 | AWS (411933431698) | 2023-08-01 | 417.15 |  |  |
| 32 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D31*(1+10%),2)` |  |  |
| 33 | Chiết khấu (2%) |  |  | `=round(D32*2%,2)` |  |  |
| 34 | Tổng số tiền phải thanh toán |  |  | `=D32-D33` | 24260 | `=D34*E34` |
| 38 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 40 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 41 | 1 | AWS (411933431698) | 2023-09-01 | 418.59 |  |  |
| 42 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D41*(1+10%),2)` |  |  |
| 43 | Chiết khấu (2%) |  |  | `=round(D42*2%,2)` |  |  |
| 44 | Tổng số tiền phải thanh toán |  |  | `=D42-D43` | 24470 | `=D44*E44` |
| 48 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 51 | 1 | AWS (411933431698) | 2023-10-01 | 419.31 |  |  |
| 52 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D51*(1+10%),2)` |  |  |
| 53 | Chiết khấu (2%) |  |  | `=round(D52*2%,2)` |  |  |
| 54 | Tổng số tiền phải thanh toán |  |  | `=D52-D53` | 24729 | `=D54*E54` |
| 58 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 61 | 1 | AWS (411933431698) | 2023-11-01 | 405.05 |  |  |
| 62 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D61*(1+10%),2)` |  |  |
| 63 | Chiết khấu (2%) |  |  | `=round(D62*2%,2)` |  |  |
| 64 | Tổng số tiền phải thanh toán |  |  | `=D62-D63` | 24427 | `=D64*E64` |
| 68 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 70 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 71 | 1 | AWS (411933431698) | 2023-12-01 | 428.27 |  |  |
| 72 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D71*(1+10%),2)` |  |  |
| 73 | Chiết khấu (2%) |  |  | `=round(D72*2%,2)` |  |  |
| 74 | Tổng số tiền phải thanh toán |  |  | `=D72-D73` | 24450 | `=D74*E74` |
| 78 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 81 | 1 | AWS (411933431698) | 2024-01-01 | 410.01 |  |  |
| 82 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D81*(1+10%),2)` |  |  |
| 83 | Chiết khấu (2%) |  |  | `=round(D82*2%,2)` |  |  |
| 84 | Tổng số tiền phải thanh toán |  |  | `=D82-D83` | 24578 | `=D84*E84` |
| 88 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 90 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 91 | 1 | AWS (411933431698) | 2024-02-01 | 420.52 |  |  |
| 92 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D91*(1+10%),2)` |  |  |
| 93 | Chiết khấu (2%) |  |  | `=round(D92*2%,2)` |  |  |
| 94 | Tổng số tiền phải thanh toán |  |  | `=D92-D93` | 24802 | `=D94*E94` |
| 98 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 100 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 101 | 1 | AWS (411933431698) | 2024-03-01 | 431.5 |  |  |
| 102 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D101*(1+10%),2)` |  |  |
| 103 | Chiết khấu (2%) |  |  | `=round(D102*2%,2)` |  |  |
| 104 | Tổng số tiền phải thanh toán |  |  | `=D102-D103` | 24972 | `=D104*E104` |
| 108 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 110 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 111 | 1 | AWS (411933431698) | 2024-04-01 | 420.24 |  |  |
| 112 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D111*(1+10%),2)` |  |  |
| 113 | Chiết khấu (2%) |  |  | `=round(D112*2%,2)` |  |  |
| 114 | Tổng số tiền phải thanh toán |  |  | `=D112-D113` | 25458 | `=D114*E114` |
| 118 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 120 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 121 | 1 | AWS (411933431698) | 2024-05-01 | 538.31 |  |  |
| 122 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D121*(1+10%),2)` |  |  |
| 123 | Chiết khấu (2%) |  |  | `=round(D122*2%,2)` |  |  |
| 124 | Tổng số tiền phải thanh toán |  |  | `=D122-D123` | 25474 | `=D124*E124` |
| 128 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 130 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 131 | 1 | AWS (411933431698) | 2024-06-01 | 1445.38 |  |  |
| 132 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D131*(1+10%),2)` |  |  |
| 133 | Chiết khấu (2%) |  |  | `=round(D132*2%,2)` |  |  |
| 134 | Thành tiền |  |  | `=D132-D133` | 25473 | `=D134*E134` |
| 135 | Thuế GTGT (10%) |  |  |  |  | `=round(F134*10%,0)` |
| 136 | Tổng số tiền phải thanh toán |  |  |  |  | `=F134+F135` |
| 140 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 142 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 143 | 1 | AWS (411933431698) | 2024-07-01 | 742 |  |  |
| 144 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D143*(1+10%),2)` |  |  |
| 145 | Chiết khấu (2%) |  |  | `=round(D144*2%,2)` |  |  |
| 146 | Thành tiền |  |  | `=D144-D145` | 25405 | `=D146*E146` |
| 147 | Thuế GTGT (10%) |  |  |  |  | `=round(F146*10%,0)` |
| 148 | Tổng số tiền phải thanh toán |  |  |  |  | `=F146+F147` |
| 152 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 154 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 155 | 1 | AWS (411933431698) | 2024-08-01 | 641.05 |  |  |
| 156 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D155*(1+10%),2)` |  |  |
| 157 | Chiết khấu (2%) |  |  | `=round(D156*2%,2)` |  |  |
| 158 | Thành tiền |  |  | `=D156-D157` | 25080 | `=D158*E158` |
| 159 | Thuế GTGT (10%) |  |  |  |  | 1733179 |
| 160 | Tổng số tiền phải thanh toán |  |  |  |  | `=F158+F159` |
| 164 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 166 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 167 | 1 | AWS (411933431698) | 2024-09-01 | 662.59 |  |  |
| 168 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D167*(1+10%),2)` |  |  |
| 169 | Chiết khấu (2%) |  |  | `=round(D168*2%,2)` |  |  |
| 170 | Thành tiền |  |  | `=D168-D169` | 24733 | `=D170*E170` |
| 171 | Thuế GTGT (10%) |  |  |  |  | `=round(F170*10%,0)` |
| 172 | Tổng số tiền phải thanh toán |  |  |  |  | `=F170+F171` |
| 176 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 178 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 179 | 1 | AWS (411933431698) | 2024-10-01 | 745.77 |  |  |
| 180 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D179*(1+10%),2)` |  |  |
| 181 | Chiết khấu (2%) |  |  | `=round(D180*2%,2)` |  |  |
| 182 | Thành tiền |  |  | `=D180-D181` | 25445 | `=D182*E182` |
| 183 | Thuế GTGT (10%) |  |  |  |  | `=round(F182*10%,0)` |
| 184 | Tổng số tiền phải thanh toán |  |  |  |  | `=F182+F183` |
| 188 | TỔNG HỢP CHI PHÍ EDTEXCO |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 191 | 1 | AWS (411933431698) | 2024-11-01 | 749.29 |  |  |
| 192 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D191*(1+10%),2)` |  |  |
| 193 | Chiết khấu (2%) |  |  | `=round(D192*2%,2)` |  |  |
| 194 | Thành tiền |  |  | `=D192-D193` | 25463 | `=D194*E194` |
| 195 | Thuế GTGT (10%) |  |  |  |  | `=round(F194*10%,0)` |
| 196 | Tổng số tiền phải thanh toán |  |  |  |  | `=F194+F195` |
| 200 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 202 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 203 | 1 | AWS (411933431698) | 2024-12-01 | 841.63 |  |  |
| 204 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D203*(1+10%),2)` |  |  |
| 205 | Chiết khấu (2%) |  |  | `=round(D204*2%,2)` |  |  |
| 206 | Thành tiền |  |  | `=D204-D205` | 25551 | `=D206*E206` |
| 207 | Thuế GTGT (10%) |  |  |  |  | `=round(F206*10%,0)` |
| 208 | Tổng số tiền phải thanh toán |  |  |  |  | `=F206+F207` |
| 212 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 215 | 1 | AWS (411933431698) | 2025-01-01 | 857.04 |  |  |
| 216 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D215*(1+10%),2)` |  |  |
| 217 | Chiết khấu (2%) |  |  | `=round(D216*2%,2)` |  |  |
| 218 | Thành tiền |  |  | `=D216-D217` | 25295 | `=D218*E218` |
| 219 | Thuế GTGT (10%) |  |  |  |  | `=round(F218*10%,0)` |
| 220 | Tổng số tiền phải thanh toán |  |  |  |  | `=F218+F219` |
| 224 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 226 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 227 | 1 | AWS (411933431698) | 2025-02-01 | 811.03 |  |  |
| 228 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D227*(1+10%),2)` |  |  |
| 229 | Chiết khấu (2%) |  |  | `=round(D228*2%,2)` |  |  |
| 230 | Thành tiền |  |  | `=D228-D229` | 25735 | `=D230*E230` |
| 231 | Thuế GTGT (10%) |  |  |  |  | `=round(F230*10%,0)` |
| 232 | Tổng số tiền phải thanh toán |  |  |  |  | `=F230+F231` |
| 236 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 238 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 239 | 1 | AWS (411933431698) | 2025-03-01 | 1039.43 |  |  |
| 240 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D239*(1+10%),2)` |  |  |
| 241 | Chiết khấu (2%) |  |  | `=round(D240*2%,2)` |  |  |
| 242 | Thành tiền |  |  | `=D240-D241` | 25775 | `=D242*E242` |
| 243 | Thuế GTGT (10%) |  |  |  |  | `=round(F242*10%,0)` |
| 244 | Tổng số tiền phải thanh toán |  |  |  |  | `=F242+F243` |
| 248 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 250 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 251 | 1 | AWS (411933431698) | 2025-04-01 | 515.29 |  |  |
| 252 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D251*(1+10%),2)` |  |  |
| 253 | Chiết khấu (2%) |  |  | `=round(D252*2%,2)` |  |  |
| 254 | Thành tiền |  |  | `=D252-D253` | 26190 | `=D254*E254` |
| 255 | Thuế GTGT (10%) |  |  |  |  | `=round(F254*10%,0)` |
| 256 | Tổng số tiền phải thanh toán |  |  |  |  | `=F254+F255` |
| 260 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 262 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 263 | 1 | AWS (411933431698) | 2025-05-01 | 131.55 |  |  |
| 264 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D263*(1+10%),2)` |  |  |
| 265 | Chiết khấu (2%) |  |  | `=round(D264*2%,2)` |  |  |
| 266 | Thành tiền |  |  | `=D264-D265` | 26225 | `=D266*E266` |
| 267 | Thuế GTGT (10%) |  |  |  |  | `=round(F266*10%,0)` |
| 268 | Tổng số tiền phải thanh toán |  |  |  |  | `=F266+F267` |
| 272 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 274 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 275 | 1 | AWS (411933431698) | 2025-06-01 | 101.5 |  |  |
| 276 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D275*(1+10%),2)` |  |  |
| 277 | Chiết khấu (2%) |  |  | `=round(D276*2%,2)` |  |  |
| 278 | Thành tiền |  |  | `=D276-D277` | 26300 | `=D278*E278` |
| 279 | Thuế GTGT (10%) |  |  |  |  | `=round(F278*10%,0)` |
| 280 | Tổng số tiền phải thanh toán |  |  |  |  | `=F278+F279` |
| 284 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 286 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 287 | 1 | AWS (411933431698) | 2025-07-01 | 101.79 |  |  |
| 288 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D287*(1+10%),2)` |  |  |
| 289 | Chiết khấu (2%) |  |  | `=round(D288*2%,2)` |  |  |
| 290 | Thành tiền |  |  | `=D288-D289` | 26382 | `=D290*E290` |
| 291 | Thuế GTGT (10%) |  |  |  |  | `=round(F290*10%,0)` |
| 292 | Tổng số tiền phải thanh toán |  |  |  |  | `=F290+F291` |
| 296 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 298 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 299 | 1 | AWS (411933431698) | 2025-08-01 | 102.84 |  |  |
| 300 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D299*(1+10%),2)` |  |  |
| 301 | Chiết khấu (2%) |  |  | `=round(D300*2%,2)` |  |  |
| 302 | Thành tiền |  |  | `=D300-D301` | 26502 | `=D302*E302` |
| 303 | Thuế GTGT (10%) |  |  |  |  | `=round(F302*10%,0)` |
| 304 | Tổng số tiền phải thanh toán |  |  |  |  | `=F302+F303` |
| 309 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 311 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 312 | 1 | AWS (411933431698) | 2025-09-01 | 99.92 |  |  |
| 313 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D312*(1+10%),2)` |  |  |
| 314 | Chiết khấu (2%) |  |  | `=round(D313*2%,2)` |  |  |
| 315 | Thành tiền |  |  | `=D313-D314` | 26446 | `=D315*E315` |
| 316 | Thuế GTGT (10%) |  |  |  |  | `=round(F315*10%,0)` |
| 317 | Tổng số tiền phải thanh toán |  |  |  |  | `=F315+F316` |
| 323 | ĐỐI SOÁT CHI PHÍ EDTEXCO |  |  |  |  |  |
| 325 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 326 | 1 | AWS (411933431698) | 2025-10-01 | 103.29 |  |  |
| 327 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D326*(1+10%),2)` |  |  |
| 328 |  |  |  | `=round(D327*2%,2)` |  |  |
| 329 |  |  |  | `=D327-D328` | 26347 | `=D329*E329` |
| 330 |  |  |  |  |  | `=round(F329*10%,0)` |
| 331 |  |  |  |  |  | `=F329+F330` |

> *Đã bỏ qua 117 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (153 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+10%),2)` | 30 | `D5` |
| D | `=round(D{r}*2%,2)` | 30 | `D6` |
| D | `=D{r}-D{r}` | 30 | `D7` |
| F | `=D{r}*E{r}` | 30 | `F7` |
| F | `=F{r}+F{r}` | 17 | `F136` |
| F | `=round(F{r}*10%,0)` | 16 | `F135` |
