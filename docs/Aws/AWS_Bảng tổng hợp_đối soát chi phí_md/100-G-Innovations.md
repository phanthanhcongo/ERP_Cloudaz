# G-Innovations

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `G-Innovations`  
> **Vùng dữ liệu:** 703 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 5 | 1 | 386944229390 | 2019-08-01 | 63.03 | 23270 | `=D5*E5` |  |  |
| 6 | 2 | 386944229390 | 2019-09-01 | 131.6 | 23270 | `=D6*E6` |  |  |
| 7 |  | Tổng cộng |  | `=sum(D6,D5)` |  | `=sum(F6,F5)` |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D7*0.1` |  | `=F7*0.1` |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` |  | `=F7+F8` |  |  |
| 11 |  |  |  | Hà Nội, ngày 19 tháng 10 năm 2019 |  |  |  |  |
| 12 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |
| 13 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |
| 14 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |
| 24 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 27 | 1 | 386944229390 | 2019-10-01 | 131.72 | 23270 | `=D27*E27` |  |  |
| 28 |  | Tổng cộng |  | 131.72 |  | 3065124 |  |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D28*0.1` |  | `=F28*0.1` |  |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` |  | `=F28+F29` |  |  |
| 32 |  |  |  | Hà Nội, ngày 4 tháng 11 năm 2019 |  |  |  |  |
| 33 |  |  |  | Người lập  |  |  |  |  |
| 37 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 42 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 45 | 1 | 386944229390 | 2019-11-01 | 131.6 | 23270 | `=D45*E45` |  |  |
| 46 |  | Tổng cộng |  | 131.6 |  | 3062332 |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D46*0.1` |  | `=F46*0.1` |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=D46+D47` |  | `=F46+F47` |  |  |
| 50 |  |  |  | Hà Nội, ngày 4 tháng 12 năm 2019 |  |  |  |  |
| 51 |  |  |  | Người lập  |  |  |  |  |
| 55 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 59 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 62 | 1 | 386944229390 | 2019-12-01 | 131.72 | 23270 | `=D62*E62` |  |  |
| 63 |  | Tổng cộng |  | `=D62` |  | `=F62` |  |  |
| 64 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D63*0.1` |  | `=F63*0.1` |  |  |
| 65 |  | Tổng số tiền phải thanh toán |  | `=D63+D64` |  | `=F63+F64` |  |  |
| 66 | Tổng số tiền phải thanh toán sau khi trừ đi khoản AWS T8, T9 chuyển thừa và marketpalce tháng 11 |  |  |  |  | `=F65-1406951` |  |  |
| 68 |  |  |  | Hà Nội, ngày 4 tháng 01 năm 2020 |  |  |  |  |
| 69 |  |  |  | Người lập  |  |  |  |  |
| 73 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 75 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 78 | 1 | 386944229390 | 2020-01-01 | 131.72 | 23320 | `=D78*E78` |  |  |
| 79 |  | Tổng cộng |  | 131.72 |  | `=F78` |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D79*0.1` |  | `=F79*0.1` |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=D79+D80` |  | `=F79+F80` |  |  |
| 83 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |
| 84 |  |  |  | Người lập  |  |  |  |  |
| 88 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 92 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 95 | 1 | 386944229390 | 2020-02-01 | 131.48 | 23320 | `=D95*E95` |  |  |
| 96 |  | Tổng cộng |  | `=D95` |  | `=F95` |  |  |
| 97 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D96*0.1` |  | `=F96*0.1` |  |  |
| 98 |  | Tổng số tiền phải thanh toán |  | `=D96+D97` |  | `=F96+F97` |  |  |
| 100 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |
| 101 |  |  |  | Người lập  |  |  |  |  |
| 105 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 107 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 110 | 1 | 386944229390 | 2020-03-01 | 131.72 | 23700 | `=D110*E110` |  |  |
| 111 |  | Tổng cộng |  | `=D110` |  | `=F110` |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D111*0.1` |  | `=F111*0.1` |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=D111+D112` |  | `=F111+F112` |  |  |
| 115 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |
| 116 |  |  |  | Người lập  |  |  |  |  |
| 120 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 123 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 125 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 126 | 1 | 386944229390 | 2020-04-01 | 131.6 | 23600 | `=D126*E126` |  |  |
| 127 |  | Tổng cộng |  | `=D126` |  | `=F126` |  |  |
| 128 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D127*0.1` |  | `=F127*0.1` |  |  |
| 129 |  | Tổng số tiền phải thanh toán |  | `=D127+D128` |  | `=F127+F128` |  |  |
| 131 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |
| 132 |  |  |  | Người lập  |  |  |  |  |
| 136 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 139 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 141 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 142 | 1 | 386944229390 | 2020-05-01 | 131.72 | 23350 | `=D142*E142` |  |  |
| 143 |  | Tổng cộng |  | `=D142` |  | `=F142` |  |  |
| 144 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D143*0.1` |  | `=F143*0.1` |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=D143+D144` |  | `=F143+F144` |  |  |
| 147 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |
| 148 |  |  |  | Người lập  |  |  |  |  |
| 152 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 155 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 157 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 158 | 1 | 386944229390 | 2020-06-01 | 131.6 | 23290 | `=D158*E158` |  |  |
| 159 |  | Tổng cộng |  | `=D158` |  | `=F158` |  |  |
| 160 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D159*0.1` |  | `=F159*0.1` |  |  |
| 161 |  | Tổng số tiền phải thanh toán |  | `=D159+D160` |  | `=F159+F160` |  |  |
| 163 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |
| 164 |  |  |  | Người lập  |  |  |  |  |
| 168 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 171 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 173 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 174 | 1 | 386944229390 | 2020-07-01 | 131.72 | 23265 | `=D174*E174` |  |  |
| 175 |  | Tổng cộng |  | `=D174` |  | `=F174` |  |  |
| 176 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D175*0.1` |  | `=F175*0.1` |  |  |
| 177 |  | Tổng số tiền phải thanh toán |  | `=D175+D176` |  | `=F175+F176` |  |  |
| 179 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 180 |  |  |  | Người lập  |  |  |  |  |
| 184 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 187 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 189 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 190 | 1 | 386944229390 | 2020-08-01 | 131.72 | 23270 | `=D190*E190` |  |  |
| 191 |  | Tổng cộng |  | `=D190` |  | `=F190` |  |  |
| 192 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D191*0.1` |  | `=F191*0.1` |  |  |
| 193 |  | Tổng số tiền phải thanh toán |  | `=D191+D192` |  | `=F191+F192` |  |  |
| 195 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |  |  |
| 196 |  |  |  | Người lập  |  |  |  |  |
| 200 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 203 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 205 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 206 | 1 | 386944229390 | 2020-09-01 | 131.6 | 23280 | `=D206*E206` |  |  |
| 207 |  | Tổng cộng |  | `=D206` |  | `=F206` |  |  |
| 208 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D207*0.1` |  | `=F207*0.1` |  |  |
| 209 |  | Tổng số tiền phải thanh toán |  | `=D207+D208` |  | `=F207+F208` |  |  |
| 212 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 215 | 2 | 013110338811 | 2020-10-02 | 1333.14 | 23270 | `=D215*E215` |  |  |
| 216 |  | Tổng cộng |  | `=sum(D215)` |  | `=sum(F215)` |  |  |
| 217 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D216*0.1` |  | `=F216*0.1` |  |  |
| 218 |  | Tổng số tiền phải thanh toán |  | `=D216+D217` |  | `=F216+F217` |  |  |
| 221 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 224 | 1 | 013110338811 | 2020-11-01 | 1864 | 23235 | `=D224*E224` |  |  |
| 225 |  | Tổng cộng |  | `=sum(D224)` |  | `=sum(F224)` |  |  |
| 226 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D225*0.1` |  | `=F225*0.1` |  |  |
| 227 |  | Tổng số tiền phải thanh toán |  | `=D225+D226` |  | `=F225+F226` |  |  |
| 230 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 232 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 233 | 1 | 013110338811 | 2020-12-01 | 1697.88 | 23185 | `=D233*E233` |  |  |
| 234 |  | Tổng cộng |  | `=sum(D233)` |  | `=sum(F233)` |  |  |
| 235 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D234*0.1` | 23185 | 3936581 |  |  |
| 236 |  | Tổng số tiền phải thanh toán |  | `=D234+D235` | 23185 | `=F234+F235` |  |  |
| 239 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 241 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 242 | 1 | 013110338811 | 2021-01-01 | 1748.07 | 23145 | `=D242*E242` |  |  |
| 243 |  | Tổng cộng |  | `=sum(D242)` |  | `=sum(F242)` |  |  |
| 244 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D243*0.1` | 23145 | `=F243*0.1` |  |  |
| 245 |  | Tổng số tiền phải thanh toán |  | `=D243+D244` | 23145 | `=F243+F244` |  |  |
| 248 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 250 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 251 | 1 | 013110338811 | 2021-02-01 | 1883.17 | 23095 | `=D251*E251` |  |  |
| 252 |  | Tổng cộng |  | `=sum(D251)` |  | `=sum(F251)` |  |  |
| 253 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D252*0.1` | 23095 | `=F252*0.1` |  |  |
| 254 |  | Tổng số tiền phải thanh toán |  | `=D252+D253` | 23095 | `=F252+F253` |  |  |
| 257 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 259 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 260 | 1 | 013110338811 | 2021-03-01 | 2095.11 | 23165 | `=D260*E260` |  |  |
| 261 |  | Tổng cộng |  | `=sum(D260)` |  | `=sum(F260)` |  |  |
| 262 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D261*0.1` | 23165 | `=F261*0.1` |  |  |
| 263 |  | Tổng số tiền phải thanh toán |  | `=D261+D262` | 23165 | `=F261+F262` |  |  |
| 266 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 268 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 269 | 1 | 013110338811 | 2021-04-01 | 2147.86 | 23150 | `=D269*E269` |  |  |
| 270 |  | Tổng cộng |  | `=sum(D269)` |  | `=sum(F269)` |  |  |
| 271 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D270*0.1` | 23150 | `=F270*0.1` |  |  |
| 272 |  | Tổng số tiền phải thanh toán |  | `=D270+D271` | 23150 | `=F270+F271` |  |  |
| 275 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 277 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 278 | 1 | 013110338811 | 2021-05-01 | 2302.08 | 23145 | `=round(D278*E278,0)` |  |  |
| 279 |  | Tổng cộng |  | `=sum(D278)` |  | `=sum(F278)` |  |  |
| 280 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D279*0.1` | 23145 | `=F279*0.1` |  |  |
| 281 |  | Tổng số tiền phải thanh toán |  | `=D279+D280` | 23145 | `=F279+F280` |  |  |
| 284 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 286 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 287 | 1 | 013110338811 | 2021-06-01 | 2468.34 | 23130 | `=round(D287*E287,0)` |  |  |
| 288 |  | Tổng cộng |  | `=sum(D287)` |  | `=sum(F287)` |  |  |
| 289 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D288*0.1` | 23130 | `=round(D289*E289,0)` |  |  |
| 290 |  | Tổng số tiền phải thanh toán |  | `=D288+D289` | 23130 | `=F288+F289` |  |  |
| 294 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 296 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 297 | 1 | 013110338811 | 2021-07-01 | 2790.32 | 23050 | `=round(D297*E297,0)` |  |  |
| 298 |  | Tổng cộng |  | `=sum(D297)` |  | `=sum(F297)` |  |  |
| 299 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D298*0.1` | 23050 | `=round(D299*E299,0)` |  |  |
| 300 |  | Tổng số tiền phải thanh toán |  | `=D298+D299` | 23050 | `=F298+F299` |  |  |
| 303 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 305 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 306 | 1 | 013110338811 | 2021-08-01 | 3100.73 | 22880 | `=round(D306*E306,0)` |  |  |
| 307 |  | Tổng cộng |  | `=sum(D306)` |  | `=sum(F306)` |  | 78039172 |
| 308 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D307*0.1` | 22880 | `=round(D308*E308,0)` |  |  |
| 309 |  | Tổng số tiền phải thanh toán |  | `=D307+D308` | 22880 | `=F307+F308` |  | 78039172 |
| 314 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 316 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 317 | 1 | 013110338811 | 2021-09-01 | 2197.07 | 22840 | `=round(D317*E317,0)` |  |  |
| 318 |  | Tổng cộng |  | `=sum(D317)` |  | `=sum(F317)` |  |  |
| 319 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D318*0.1` | 22840 | `=round(D319*E319,0)` |  |  |
| 320 |  | Tổng số tiền phải thanh toán |  | `=D318+D319` | 22840 | `=F318+F319` |  |  |
| 324 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 326 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 327 | 1 | 013110338811 | 2021-10-01 | 2579 | 22850 | `=round(D327*E327,0)` |  |  |
| 328 |  | Tổng cộng |  | `=sum(D327)` |  | `=sum(F327)` |  |  |
| 329 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D328*0.1` | 22850 | `=round(D329*E329,0)` |  |  |
| 330 |  | Tổng số tiền phải thanh toán |  | `=D328+D329` | 22850 | `=F328+F329` |  |  |
| 333 | TỔNG HỢP CHI PHÍ G-INOVATION |  |  |  |  |  |  |  |
| 335 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 336 | 1 | 013110338811 | 2021-11-01 | 3147.98 | 22800 | `=round(D336*E336,0)` |  |  |
| 337 |  | Tổng cộng |  | `=sum(D336)` |  | `=sum(F336)` |  |  |
| 338 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D337*0.1` | 22800 | `=round(D338*E338,0)` |  |  |
| 339 |  | Tổng số tiền phải thanh toán |  | `=D337+D338` | 22800 | `=F337+F338` | 78951338 |  |
| 342 | TỔNG HỢP CHI PHÍ G-INOVATIONS |  |  |  |  |  |  |  |
| 344 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 345 | 1 | 013110338811 | 2021-12-01 | 3194.49 | 22920 | `=round(D345*E345,0)` |  |  |
| 346 |  | Tổng cộng |  | `=sum(D345)` |  | `=sum(F345)` |  |  |
| 347 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D346*0.1` | 22920 | `=round(D347*E347,0)` |  |  |
| 348 |  | Tổng số tiền phải thanh toán |  | `=D346+D347` | 22920 | `=F346+F347` | 80539482 |  |
| 351 | TỔNG HỢP CHI PHÍ G-INOVATIONS |  |  |  |  |  |  |  |
| 353 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 354 | 1 | 013110338811 | 2022-01-01 | 3178.87 | 22780 | `=round(D354*E354,0)` |  |  |
| 355 |  | Tổng cộng |  | `=sum(D354)` |  | `=sum(F354)` |  |  |
| 356 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D355*0.1` | 22780 | `=round(D356*E356,0)` |  |  |
| 357 |  | Tổng số tiền phải thanh toán |  | `=D355+D356` | 22780 | `=F355+F356` | 79656125 |  |
| 361 | TỔNG HỢP CHI PHÍ G-INOVATIONS |  |  |  |  |  |  |  |
| 363 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 364 | 1 | 013110338811 | 2022-02-01 | 2989.71 | 22950 | `=round(D364*E364,0)` |  |  |
| 365 |  | Tổng cộng |  | `=sum(D364)` |  | `=sum(F364)` |  |  |
| 366 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D365*0.1` | 22950 | `=round(D366*E366,0)` |  |  |
| 367 |  | Tổng số tiền phải thanh toán |  | `=D365+D366` | 22950 | `=F365+F366` | 75475229 |  |
| 370 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 372 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 373 | 1 | 013110338811 | 2022-03-01 | 3144.04 | 22980 | `=round(D373*E373,0)` |  |  |
| 374 |  | Tổng cộng |  | `=sum(D373)` |  | `=sum(F373)` |  |  |
| 375 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D374*0.1` | 22980 | `=round(D375*E375,0)` |  |  |
| 376 |  | Tổng số tiền phải thanh toán |  | `=D374+D375` | 22980 | `=F374+F375` | 79475043 |  |
| 379 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 381 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 382 | 1 | 013110338811 | 2022-04-01 | 3045.15 | 23095 | `=round(D382*E382,0)` |  |  |
| 383 |  | Tổng cộng |  | `=sum(D382)` |  | `=sum(F382)` |  |  |
| 384 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D383*0.1` | 23095 | `=round(D384*E384,0)` |  |  |
| 385 |  | Tổng số tiền phải thanh toán |  | `=D383+D384` | 23095 | `=F383+F384` | 77360513 |  |
| 388 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 390 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 391 | 1 | 013110338811 | 2022-05-01 | 3172.32 |  |  |  |  |
| 392 |  | Tổng cộng |  | `=sum(D391)` |  |  |  |  |
| 393 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D392*0.1` |  |  |  |  |
| 394 |  | Tổng số tiền phải thanh toán |  | `=round(D392+D393,2)` | 23330 | `=D394*E394` | 81411201.5 |  |
| 397 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 399 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 400 | 1 | 013110338811 | 2022-06-01 | 3109.85 |  |  |  |  |
| 401 |  | Tổng cộng |  | `=sum(D400)` |  |  |  |  |
| 402 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D401*0.1` |  |  |  |  |
| 403 |  | Tổng số tiền phải thanh toán |  | `=round(D401+D402,2)` | 23415 | `=D403*E403` |  |  |
| 406 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 408 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 409 | 1 | 013110338811 | 2022-07-01 | 3185.01 |  |  |  |  |
| 410 |  | Tổng cộng |  | `=sum(D409)` |  |  |  |  |
| 411 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D410*0.1` |  |  |  |  |
| 412 |  | Tổng số tiền phải thanh toán |  | `=round(D410+D411,2)` | 23480 | `=D412*E412` |  |  |
| 415 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 417 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 418 | 1 | 013110338811 | 2022-08-01 | 3221.86 |  |  |  |  |
| 419 |  | Tổng cộng |  | `=sum(D418)` |  |  |  |  |
| 420 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D419*0.1` |  |  |  |  |
| 421 |  | Tổng số tiền phải thanh toán |  | `=round(D419+D420,2)` | 23600 | `=D421*E421` |  |  |
| 424 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 426 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 427 | 1 | 013110338811 | 2022-09-01 | 3192.43 |  |  |  |  |
| 428 |  | Tổng cộng |  | `=sum(D427)` |  |  |  |  |
| 429 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D428*0.1` |  |  |  |  |
| 430 |  | Tổng số tiền phải thanh toán |  | `=round(D428+D429,2)` | 24010 | `=D430*E430` |  |  |
| 433 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 435 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 436 | 1 | 013110338811 | 2022-10-01 | 3287.26 |  |  |  |  |
| 437 |  | Tổng cộng |  | `=sum(D436)` |  |  |  |  |
| 438 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D437*0.1` |  |  |  |  |
| 439 |  | Tổng số tiền phải thanh toán |  | `=round(D437+D438,2)` | 24877 | `=D439*E439` |  |  |
| 442 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 444 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 445 | 1 | 013110338811 | 2022-11-01 | 3242.1142973318 |  |  |  |  |
| 446 |  | Tổng cộng |  | `=sum(D445)` |  |  |  |  |
| 447 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D446*0.1` |  |  |  |  |
| 448 |  | Tổng số tiền phải thanh toán |  | `=round(D446+D447,2)` | 24795 | `=D448*E448` |  |  |
| 451 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 453 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 454 | 1 | 013110338811 | 2022-12-01 | 3343.8831170178 |  |  |  |  |
| 455 |  | Tổng cộng |  | `=sum(D454)` |  |  |  |  |
| 456 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D455*0.1` |  |  |  |  |
| 457 |  | Tổng số tiền phải thanh toán |  | `=round(D455+D456,2)` | 23590 | `=D457*E457` |  |  |
| 460 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 462 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 463 | 1 | 013110338811 | 2023-01-01 | 3202.55 |  |  |  |  |
| 464 |  | Tổng cộng |  | `=sum(D463)` |  |  |  |  |
| 465 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D464*0.1` |  |  |  |  |
| 466 |  | Tổng số tiền phải thanh toán |  | `=round(D464+D465,2)` | 23755 | `=D466*E466` |  |  |
| 469 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 471 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 472 | 1 | 013110338811 | 2023-02-01 | 2951.7 |  |  |  |  |
| 473 |  | Tổng cộng |  | `=sum(D472)` |  |  |  |  |
| 474 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D473*0.1` |  |  |  |  |
| 475 |  | Tổng số tiền phải thanh toán |  | `=round(D473+D474,2)` | 23835 | `=D475*E475` |  |  |
| 478 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 480 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 481 | 1 | 013110338811 | 2023-03-01 | 3180.23 |  |  |  |  |
| 482 |  | Tổng cộng |  | `=sum(D481)` |  |  |  |  |
| 483 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D482*0.1` |  |  |  |  |
| 484 |  | Tổng số tiền phải thanh toán |  | `=round(D482+D483,2)` | 23600 | `=D484*E484` |  |  |
| 487 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 489 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 490 | 1 | 013110338811 | 2023-04-01 | 2794.97 |  |  |  |  |
| 491 |  | Tổng cộng |  | `=sum(D490)` |  |  |  |  |
| 492 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D491*0.1` |  |  |  |  |
| 493 |  | Tổng số tiền phải thanh toán |  | `=round(D491+D492,2)` | 23600 | `=D493*E493` |  |  |
| 496 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 498 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 499 | 1 | 013110338811 | 2023-05-01 | 2441.47 |  |  |  |  |
| 500 |  | Tổng cộng |  | `=sum(D499)` |  |  |  |  |
| 501 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D500*0.1` |  |  |  |  |
| 502 |  | Tổng số tiền phải thanh toán |  | `=round(D500+D501,2)` | 23656 | `=D502*E502` |  |  |
| 505 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 507 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 508 | 1 | 013110338811 | 2023-06-01 | 2422.07 |  |  |  |  |
| 509 |  | Tổng cộng |  | `=sum(D508)` |  |  |  |  |
| 510 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D509*0.1,2)` |  |  |  |  |
| 511 |  | Tổng số tiền phải thanh toán |  | `=round(D509+D510,2)` | 23840 | `=D511*E511` |  |  |
| 514 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 516 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 517 | 1 | 013110338811 | 2023-07-01 | 2576.33 |  |  |  |  |
| 518 |  | Tổng cộng |  | `=sum(D517)` |  |  |  |  |
| 519 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D518*0.1,2)` |  |  |  |  |
| 520 |  | Tổng số tiền phải thanh toán |  | `=round(D518+D519,2)` | 23895 | `=D520*E520` |  |  |
| 523 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 525 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 526 | 1 | 013110338811 | 2023-08-01 | 2636.16 |  |  |  |  |
| 527 |  | Tổng cộng |  | `=sum(D526)` |  |  |  |  |
| 528 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D527*0.1,2)` |  |  |  |  |
| 529 |  | Tổng số tiền phải thanh toán |  | `=round(D527+D528,2)` | 24210 | `=D529*E529` |  |  |
| 533 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 535 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 536 | 1 | 013110338811 | 2023-09-01 | 2297.94 |  |  |  |  |
| 537 |  | Tổng cộng |  | `=sum(D536)` |  |  |  |  |
| 538 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D537*0.1,2)` |  |  |  |  |
| 539 |  | Tổng số tiền phải thanh toán |  | `=round(D537+D538,2)` | 24560 | `=D539*E539` |  |  |
| 543 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 545 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 546 | 1 | 013110338811 | 2023-10-01 | 2018.72 |  |  |  |  |
| 547 |  | Tổng cộng |  | `=sum(D546)` |  |  |  |  |
| 548 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D547*0.1,2)` |  |  |  |  |
| 549 |  | Tổng số tiền phải thanh toán |  | `=round(D547+D548,2)` | 24520 | `=D549*E549` |  |  |
| 553 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 555 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 556 | 1 | 013110338811 | 2023-11-01 | 1870.54 |  |  |  |  |
| 557 |  | Tổng cộng |  | `=sum(D556)` |  |  |  |  |
| 558 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D557*0.1,2)` |  |  |  |  |
| 559 |  | Tổng số tiền phải thanh toán |  | `=round(D557+D558,2)` | 24430 | `=D559*E559` |  |  |
| 563 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 565 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 566 | 1 | 013110338811 | 2023-12-01 | 1973.95 |  |  |  |  |
| 567 |  | Tổng cộng |  | `=sum(D566)` |  |  |  |  |
| 568 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D567*0.1,2)` |  |  |  |  |
| 569 |  | Tổng số tiền phải thanh toán |  | `=round(D567+D568,2)` | 24560 | `=D569*E569` |  |  |
| 573 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 575 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 576 | 1 | 013110338811 | 2024-01-01 | 1982.67 |  |  |  |  |
| 577 |  | Tổng cộng |  | `=sum(D576)` |  |  |  |  |
| 578 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D577*0.1,2)` |  |  |  |  |
| 579 |  | Tổng số tiền phải thanh toán |  | `=round(D577+D578,2)` | 24675 | `=D579*E579` |  |  |
| 583 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 585 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 586 | 1 | 013110338811 | 2024-02-01 | 2104.43 |  |  |  |  |
| 587 |  | Tổng cộng |  | `=sum(D586)` |  |  |  |  |
| 588 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D587*0.1,2)` |  |  |  |  |
| 589 |  | Tổng số tiền phải thanh toán |  | `=round(D587+D588,2)` | 24835 | `=D589*E589` |  |  |
| 593 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 595 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 596 | 1 | 013110338811 | 2024-03-01 | 2236.17 |  |  |  |  |
| 597 |  | Tổng cộng |  | `=sum(D596)` |  |  |  |  |
| 598 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D597*0.1,2)` |  |  |  |  |
| 599 |  | Tổng số tiền phải thanh toán |  | `=round(D597+D598,2)` | 25105 | `=D599*E599` |  |  |
| 603 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 605 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 606 | 1 | 013110338811 | 2024-04-01 | 2032.25 |  |  |  |  |
| 607 |  | Tổng cộng |  | `=sum(D606)` |  |  |  |  |
| 608 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D607*0.1,2)` |  |  |  |  |
| 609 |  | Tổng số tiền phải thanh toán |  | `=round(D607+D608,2)` | 25455 | `=D609*E609` |  |  |
| 613 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 615 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 616 | 1 | 013110338811 | 2024-05-01 | 2127.77 |  |  |  |  |
| 617 |  | Tổng cộng |  | `=sum(D616)` |  |  |  |  |
| 618 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D617*0.1,2)` |  |  |  |  |
| 619 |  | Tổng số tiền phải thanh toán |  | `=round(D617+D618,2)` | 25453 | `=D619*E619` |  |  |
| 623 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 625 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 626 | 1 | 013110338811 | 2024-06-01 | 2048.73 |  |  |  |  |
| 627 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D626*(1+5.26%),2)` |  |  |  |  |
| 628 | Chiết khấu (5%) |  |  | `=round(D626*5%,2)` |  |  |  |  |
| 629 | Thành tiền |  |  | `=D627-D628` | 25020 | `=D629*E629` |  |  |
| 630 | Thuế GTGT (10%) |  |  |  |  | `=round(F629*10%,0)` |  |  |
| 631 | Tổng số tiền phải thanh toán |  |  |  |  | `=F629+F630` |  |  |
| 635 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 637 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 638 | 1 | 013110338811 | 2024-07-01 | 2094.15 |  |  |  |  |
| 639 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D638*(1+5.26%),2)` |  |  |  |  |
| 640 | Chiết khấu (5%) |  |  | `=round(D638*5%,2)` |  |  |  |  |
| 641 | Thành tiền |  |  | `=D639-D640` | 25020 | `=D641*E641` |  |  |
| 642 | Thuế GTGT |  |  |  |  | `=round(F641*10%,0)` |  |  |
| 643 | Tổng số tiền phải thanh toán |  |  |  |  | `=F641+F642` |  |  |
| 647 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 649 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 650 | 1 | 013110338811 | 2024-08-01 | 2088.3 |  |  |  |  |
| 651 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D650*(1+5.26%),2)` |  |  |  |  |
| 652 | Chiết khấu (5%) |  |  | `=round(D650*5%,2)` |  |  |  |  |
| 653 | Thành tiền |  |  | `=D651-D652` | 25020 | `=D653*E653` |  |  |
| 654 | Thuế GTGT |  |  |  |  | `=round(F653*10%,0)` |  |  |
| 655 | Tổng số tiền phải thanh toán |  |  |  |  | `=F653+F654` |  |  |
| 659 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 661 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 662 | 1 | 013110338811 | 2024-09-01 | 2057.04 |  |  |  |  |
| 663 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D662*(1+5.26%),2)` |  |  |  |  |
| 664 | Chiết khấu (5%) |  |  | `=round(D662*5%,2)` |  |  |  |  |
| 665 | Thành tiền |  |  | `=D663-D664` | 25020 | `=D665*E665` |  |  |
| 666 | Thuế GTGT |  |  |  |  | `=round(F665*10%,0)` |  |  |
| 667 | Tổng số tiền phải thanh toán |  |  |  |  | `=F665+F666` |  |  |
| 671 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 673 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 674 | 1 | 013110338811 | 2024-10-01 | 2095.74 |  |  |  |  |
| 675 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D674*(1+5.26%),2)` |  |  |  |  |
| 676 | Chiết khấu (5%) |  |  | `=round(D674*5%,2)` |  |  |  |  |
| 677 | Thành tiền |  |  | `=D675-D676` | 25480 | `=D677*E677` |  |  |
| 678 | Thuế GTGT |  |  |  |  | `=round(F677*10%,0)` |  |  |
| 679 | Tổng số tiền phải thanh toán |  |  |  |  | `=F677+F678` |  |  |
| 683 | TỔNG HỢP CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 685 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 686 | 1 | 013110338811 | 2024-11-01 | 2166.73 |  |  |  |  |
| 687 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D686*(1+5.26%),2)` |  |  |  |  |
| 688 | Chiết khấu (5%) |  |  | `=round(D686*5%,2)` |  |  |  |  |
| 689 | Thành tiền |  |  | `=D687-D688` | 25470 | `=D689*E689` |  |  |
| 690 | Thuế GTGT |  |  |  |  | `=round(F689*10%,0)` |  |  |
| 691 | Tổng số tiền phải thanh toán |  |  |  |  | `=F689+F690` |  |  |
| 695 | ĐỐI SOÁT CHI PHÍ G-INNOVATIONS |  |  |  |  |  |  |  |
| 697 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 698 | 1 | 013110338811 | 2024-12-01 | 2189.39 |  |  |  |  |
| 699 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D698*(1+5.26%),2)` |  |  |  |  |
| 700 | Chiết khấu (5%) |  |  | `=round(D698*5%,2)` |  |  |  |  |
| 701 | Thành tiền |  |  | `=D699-D700` | 25545 | `=D701*E701` |  |  |
| 702 | Thuế GTGT |  |  |  |  | `=round(F701*10%,0)` |  |  |
| 703 | Tổng số tiền phải thanh toán |  |  |  |  | `=F701+F702` |  |  |

> *Đã bỏ qua 266 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (362 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.1` | 45 | `D8` |
| D | `=sum(D{r})` | 44 | `D216` |
| D | `=D{r}+D{r}` | 32 | `D9` |
| D | `=round(D{r}+D{r},2)` | 25 | `D394` |
| D | `=round(D{r}*0.1,2)` | 12 | `D510` |
| D | `=D{r}` | 9 | `D63` |
| D | `=round(D{r}*(1+5.26%),2)` | 7 | `D627` |
| D | `=round(D{r}*5%,2)` | 7 | `D628` |
| D | `=D{r}-D{r}` | 7 | `D629` |
| D | `=sum(D{r},D{r})` | 1 | `D7` |
| F | `=D{r}*E{r}` | 53 | `F5` |
| F | `=F{r}+F{r}` | 39 | `F9` |
| F | `=round(D{r}*E{r},0)` | 23 | `F278` |
| F | `=F{r}*0.1` | 20 | `F8` |
| F | `=sum(F{r})` | 19 | `F216` |
| F | `=F{r}` | 10 | `F63` |
| F | `=round(F{r}*10%,0)` | 7 | `F630` |
| F | `=sum(F{r},F{r})` | 1 | `F7` |
| F | `=F{r}-1406951` | 1 | `F66` |
