# WeWe

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `WeWe`  
> **Vùng dữ liệu:** 445 dòng × 9 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I |
|---:|---|---|---|---|---|---|---|---|---|
| 5 | TỔNG HỢP CHI PHÍ WeWe |  |  |  |  |  |  |  |  |
| 7 | STT | Tài khoản | Tháng | Billing AWS (USD) | Credits | Thanh toán qua TK WeWe | Thanh toán trên console của CloudAZ | Tỷ giá | Thành tiền |
| 8 | 1 | WeWe | 2019-08-01 | 397.18 | 221.26 | 156.54 | 19.38 | 23300 | `=G8*H8` |
| 9 |  | Tổng tạm tính |  |  |  |  | `=G8` |  | `=I8` |
| 10 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  | `=G8*10%` |  | `=I9*0.1` |
| 11 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  | `=I9+I10` |
| 15 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |
| 16 |  |  |  | Người lập |  |  |  |  |  |
| 20 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |
| 25 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 28 | 1 | 066176453774 | 2019-09-01 | 487.28 | 23300 | `=D28*E28` |  |  |  |
| 29 |  | Tổng cộng |  | `=D28` |  | `=F28` |  |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D29*0.1` |  | `=F29*0.1` |  |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=D29+D30` |  | `=F29+F30` |  |  |  |
| 33 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |  |
| 35 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |
| 36 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |
| 37 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |
| 49 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 52 | 1 | 066176453774 | 2019-10-01 | 433.61 | 23300 | `=D52*E52` |  |  |  |
| 53 |  | Tổng cộng |  | `=D52` |  | `=F52` |  |  |  |
| 54 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D53*0.1` |  | `=F53*0.1` |  |  |  |
| 55 |  | Tổng số tiền phải thanh toán |  | `=D53+D54` |  | `=F53+F54` |  |  |  |
| 57 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |
| 58 |  |  |  |                                Người lập |  |  |  |  |  |
| 62 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 67 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 70 | 1 | 066176453774 | 2019-11-01 | 458.03 | 23300 | `=D70*E70` |  |  |  |
| 71 |  | Tổng cộng |  | `=D70` |  | `=F70` |  |  |  |
| 72 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D71*0.1` |  | `=F71*0.1` |  |  |  |
| 73 |  | Tổng số tiền phải thanh toán |  | `=D71+D72` |  | `=F71+F72` |  |  |  |
| 75 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |
| 76 |  |  |  |                                Người lập |  |  |  |  |  |
| 80 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 84 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 87 | 1 | 066176453774 | 2019-12-01 | 499.21 | 23300 | `=D87*E87` |  |  |  |
| 88 |  | Tổng cộng |  | `=D87` |  | `=F87` |  |  |  |
| 89 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D88*0.1` |  | `=F88*0.1` |  |  |  |
| 90 |  | Tổng số tiền phải thanh toán |  | `=D88+D89` |  | `=F88+F89` |  |  |  |
| 92 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |  |
| 93 |  |  |  |                                Người lập |  |  |  |  |  |
| 97 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 100 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 103 | 1 | 066176453774 | 2020-01-01 | 573.36 | 23340 | `=D103*E103` |  |  |  |
| 104 |  | Tổng cộng |  | `=D103` |  | `=F103` |  |  |  |
| 105 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D104*0.1` |  | `=F104*0.1` |  |  |  |
| 106 |  | Tổng số tiền phải thanh toán |  | `=D104+D105` |  | `=F104+F105` |  |  |  |
| 108 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |  |
| 109 |  |  |  |                                Người lập |  |  |  |  |  |
| 113 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 117 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 120 | 1 | 066176453774 | 2020-02-01 | 673.36 | 23320 | `=D120*E120` |  |  |  |
| 121 |  | Tổng cộng |  | `=D120` |  | `=F120` |  |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D121*0.1` |  | `=F121*0.1` |  |  |  |
| 123 |  | Tổng số tiền phải thanh toán |  | `=D121+D122` |  | `=F121+F122` |  |  |  |
| 125 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |
| 126 |  |  |  |                                Người lập |  |  |  |  |  |
| 130 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 133 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 135 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 136 | 1 | 066176453774 | 2020-03-01 | 790.86 | 23700 | `=D136*E136` |  |  |  |
| 137 |  | Tổng cộng |  | `=D136` |  | `=F136` |  |  |  |
| 138 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D137*0.1` |  | `=F137*0.1` |  |  |  |
| 139 |  | Tổng số tiền phải thanh toán |  | `=D137+D138` |  | `=F137+F138` |  |  |  |
| 141 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |
| 142 |  |  |  |                                Người lập |  |  |  |  |  |
| 146 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 149 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 152 | 1 | 066176453774 | 2020-04-01 | 1253.68 | 23600 | `=D152*E152` |  |  |  |
| 153 |  | Tổng cộng |  | `=D152` |  | `=F152` |  |  |  |
| 154 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D153*0.1` |  | `=F153*0.1` |  |  |  |
| 155 |  | Tổng số tiền phải thanh toán |  | `=D153+D154` |  | `=F153+F154` |  |  |  |
| 157 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |
| 158 |  |  |  |                                Người lập |  |  |  |  |  |
| 162 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 165 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 167 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 168 | 1 | 066176453774 | 2020-05-01 | 392.31 | 23350 | `=D168*E168` |  |  |  |
| 169 |  | Tổng cộng |  | `=D168` |  | `=F168` |  |  |  |
| 170 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D169*0.1` |  | `=F169*0.1` |  |  |  |
| 171 |  | Tổng số tiền phải thanh toán |  | `=D169+D170` |  | `=F169+F170` |  |  |  |
| 173 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |
| 174 |  |  |  |                                Người lập |  |  |  |  |  |
| 178 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 181 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 183 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 184 | 1 | 066176453774 | 2020-07-01 | 238.94 | 23265 | `=D184*E184` |  |  |  |
| 185 |  | Tổng cộng |  | `=D184` |  | `=F184` |  |  |  |
| 186 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D185*0.1` |  | `=F185*0.1` |  |  |  |
| 187 |  | Tổng số tiền phải thanh toán |  | `=D185+D186` |  | `=F185+F186` |  |  |  |
| 188 | Số tiền đã thanh toán trả trước |  |  |  |  | 25630000 |  |  |  |
| 189 | Số tiền còn lại |  |  |  |  | `=F188-F187` |  |  |  |
| 191 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |
| 192 |  |  |  |                                Người lập |  |  |  |  |  |
| 196 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |  |
| 198 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 201 | 1 | 066176453774 | 2020-08-01 | 345.06 | 23270 | `=D201*E201` |  |  |  |
| 202 |  | Tổng cộng |  | `=D201` |  | `=F201` |  |  |  |
| 203 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D202*0.1` |  | `=F202*0.1` |  |  |  |
| 204 |  | Tổng số tiền phải thanh toán |  | `=D202+D203` |  | `=F202+F203` |  |  |  |
| 205 | Số tiền tồn của tháng trước |  |  |  |  | `=F189` |  |  |  |
| 206 | Số tiền còn lại |  |  |  |  | `=F205-F204` |  |  |  |
| 209 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 211 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 212 | 1 | 066176453774 | 2020-09-01 | 372.42 | 23280 | `=D212*E212` |  |  |  |
| 213 |  | Tổng cộng |  | `=D212` |  | `=F212` |  |  |  |
| 214 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D213*0.1` |  | `=F213*0.1` |  |  |  |
| 215 |  | Tổng số tiền phải thanh toán |  | `=D213+D214` |  | `=F213+F214` |  |  |  |
| 216 | Số tiền tồn của tháng trước |  |  |  |  | `=F206` |  |  |  |
| 217 | Số tiền còn lại |  |  |  |  | `=F216-F215` |  |  |  |
| 221 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 224 | 1 | 066176453774 | 2020-10-01 | 280.05 | 23270 | `=D224*E224` |  |  |  |
| 225 |  | Tổng cộng |  | `=D224` |  | `=F224` |  |  |  |
| 226 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D225*0.1` |  | `=F225*0.1` |  |  |  |
| 227 |  | Tổng số tiền phải thanh toán |  | `=D225+D226` |  | `=F225+F226` |  |  |  |
| 228 | Số tiền tồn của tháng trước |  |  |  |  | `=F217` |  |  |  |
| 229 | Số tiền phải thanh toán |  |  |  |  | `=F227-F228` |  |  |  |
| 233 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 235 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 236 | 1 | 066176453774 | 2020-11-01 | 253.29 | 23235 | `=D236*E236` |  |  |  |
| 237 |  | Tổng cộng |  | `=D236` |  | `=F236` |  |  |  |
| 238 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D237*0.1` |  | `=F237*0.1` |  |  |  |
| 239 |  | Tổng số tiền phải thanh toán |  | `=D237+D238` |  | `=F237+F238` |  |  |  |
| 242 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 245 | 1 | 066176453774 | 2020-12-01 | 262.83 | 23185 | `=D245*E245` |  |  |  |
| 246 |  | Tổng cộng |  | `=D245` |  | `=F245` |  |  |  |
| 247 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D246*0.1` |  | `=F246*0.1` |  |  |  |
| 248 |  | Tổng số tiền phải thanh toán |  | `=D246+D247` |  | `=F246+F247` |  |  |  |
| 252 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 254 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 255 | 1 | 066176453774 | 2021-01-01 | 319.26 | 23145 | `=D255*E255` |  |  |  |
| 256 |  | Tổng cộng |  | `=D255` |  | `=F255` |  |  |  |
| 257 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D256*0.1` |  | `=F256*0.1` |  |  |  |
| 258 |  | Tổng số tiền phải thanh toán |  | `=D256+D257` | 23145 | `=F256+F257` |  |  |  |
| 261 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 263 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 264 | 1 | 066176453774 | 2021-02-01 | 293.56 | 23095 | `=D264*E264` |  |  |  |
| 265 |  | Tổng cộng |  | `=D264` |  | `=F264` |  |  |  |
| 266 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D265*0.1` |  | `=F265*0.1` |  |  |  |
| 267 |  | Tổng số tiền phải thanh toán |  | `=D265+D266` | 23095 | `=F265+F266` |  |  |  |
| 270 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 272 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 273 | 1 | 066176453774 | 2021-03-01 | 294.82 | 23165 | `=D273*E273` |  |  |  |
| 274 |  | Tổng cộng |  | `=D273` |  | `=F273` |  |  |  |
| 275 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D274*0.1` |  | `=F274*0.1` |  |  |  |
| 276 |  | Tổng số tiền phải thanh toán |  | `=D274+D275` | 23165 | `=F274+F275` |  |  |  |
| 279 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 282 | 1 | 066176453774 | 2021-04-01 | 282.82 | 23150 | `=D282*E282` |  |  |  |
| 283 |  | Tổng cộng |  | `=D282` |  | `=F282` |  |  |  |
| 284 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D283*0.1` |  | `=F283*0.1` |  |  |  |
| 285 |  | Tổng số tiền phải thanh toán |  | `=D283+D284` | 23150 | `=F283+F284` |  |  |  |
| 288 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 290 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 291 | 1 | 066176453774 | 2021-05-01 | `=111.07+151.09+6.16` | 23145 | `=round(D291*E291,0)` |  |  |  |
| 292 |  | Tổng cộng |  | `=D291` |  | `=F291` |  |  |  |
| 293 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D292*0.1` |  | `=F292*0.1` |  |  |  |
| 294 |  | Tổng số tiền phải thanh toán |  | `=D292+D293` | 23145 | `=F292+F293` |  |  |  |
| 297 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 299 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 300 | 1 | 066176453774 | 2021-06-01 | 384.55 | 23130 | `=round(D300*E300,0)` |  |  |  |
| 301 |  | Tổng cộng |  | `=D300` |  | `=F300` |  |  |  |
| 302 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D301*0.1` |  | `=F301*0.1` |  |  |  |
| 303 |  | Tổng số tiền phải thanh toán |  | `=D301+D302` | 23130 | `=F301+F302` |  |  |  |
| 307 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 309 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 310 | 1 | 066176453774 | 2021-07-01 | 359.49 | 23050 | `=round(D310*E310,0)` |  |  |  |
| 311 |  | Tổng cộng |  | `=D310` |  | `=F310` |  |  |  |
| 312 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D311*0.1` |  | `=F311*0.1` |  |  |  |
| 313 |  | Tổng số tiền phải thanh toán |  | `=D311+D312` | 23050 | `=F311+F312` |  |  |  |
| 317 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 319 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 320 | 1 | 066176453774 | 2021-08-01 | 454.97 | 22880 | `=round(D320*E320,0)` |  | 11450685.4000000004 |  |
| 321 |  | Tổng cộng |  | `=D320` |  | `=F320` |  |  |  |
| 322 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D321*0.1` |  | `=F321*0.1` |  |  |  |
| 323 |  | Tổng số tiền phải thanh toán |  | `=D321+D322` | 22880 | `=F321+F322` |  | 11450685.4000000004 |  |
| 327 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 329 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 330 | 1 | 066176453774 | 2021-09-01 | 570.84 | 22840 | `=round(D330*E330,0)` |  |  |  |
| 331 |  | Tổng cộng |  | `=D330` |  | `=F330` |  |  |  |
| 332 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D331*0.1` |  | `=F331*0.1` |  |  |  |
| 333 |  | Tổng số tiền phải thanh toán |  | `=D331+D332` | 22840 | `=F331+F332` |  |  |  |
| 337 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 339 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 340 | 1 | 066176453774 | 2021-10-01 | 869.58 | 22850 | `=round(D340*E340,0)` |  |  |  |
| 341 |  | Tổng cộng |  | `=D340` |  | `=F340` |  |  |  |
| 342 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D341*0.1` |  | `=F341*0.1` |  |  |  |
| 343 |  | Tổng số tiền phải thanh toán |  | `=D341+D342` | 22850 | `=F341+F342` |  |  |  |
| 346 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 348 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 349 | 1 | 066176453774 | 2021-11-01 | 434.19 | 22800 | `=round(D349*E349,0)` |  |  |  |
| 350 |  | Tổng cộng |  | `=D349` |  | `=F349` |  |  |  |
| 351 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D350*0.1` |  | `=F350*0.1` |  |  |  |
| 352 |  | Tổng số tiền phải thanh toán |  | `=D350+D351` | 22800 | `=F350+F351` | 10889485.1999999993 |  |  |
| 355 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 357 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 358 | 1 | 066176453774 | 2021-12-01 | 437.77 | 22920 | `=round(D358*E358,0)` |  |  |  |
| 359 |  | Tổng cộng |  | `=D358` |  | `=F358` |  |  |  |
| 360 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D359*0.1` |  | `=F359*0.1` |  |  |  |
| 361 |  | Tổng số tiền phải thanh toán |  | `=D359+D360` | 22920 | `=F359+F360` | 11037056.8000000007 |  |  |
| 365 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 367 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 368 | 1 | 066176453774 | 2022-01-01 | 1275.53 | 22780 | `=round(D368*E368,0)` |  |  |  |
| 369 |  | Tổng cộng |  | `=D368` |  | `=F368` |  |  |  |
| 370 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D369*0.1` |  | `=F369*0.1` |  |  |  |
| 371 |  | Tổng số tiền phải thanh toán |  | `=D369+D370` | 22780 | `=F369+F370` | 31962230.3000000007 |  |  |
| 375 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 377 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 378 | 1 | 066176453774 | 2022-02-01 | 783.25 | 22950 | `=round(D378*E378,0)` |  |  |  |
| 379 |  | Tổng cộng |  | `=D378` |  | `=F378` |  |  |  |
| 380 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D379*0.1` |  | `=F379*0.1` |  |  |  |
| 381 |  | Tổng số tiền phải thanh toán |  | `=D379+D380` | 22950 | `=F379+F380` | 19773146.8000000007 |  |  |
| 384 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 386 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 387 | 1 | 066176453774 | 2022-03-01 | 627.91 | 22980 | `=round(D387*E387,0)` |  |  |  |
| 388 |  | Tổng cộng |  | `=D387` |  | `=F387` |  |  |  |
| 389 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D388*0.1` |  | `=F388*0.1` |  |  |  |
| 390 |  | Tổng số tiền phải thanh toán |  | `=D388+D389` | 22980 | `=F388+F389` | 15872309.1999999993 |  |  |
| 393 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 395 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 396 | 1 | 066176453774 | 2022-04-01 | 961.17 | 23095 | `=round(D396*E396,0)` |  |  |  |
| 397 |  | Tổng cộng |  | `=D396` |  | `=F396` |  |  |  |
| 398 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D397*0.1` |  | `=F397*0.1` |  |  |  |
| 399 |  | Tổng số tiền phải thanh toán |  | `=D397+D398` | 23095 | `=F397+F398` | 24418043.1000000015 |  |  |
| 402 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 404 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 405 | 1 | 066176453774 | 2022-05-01 | 741.49 |  |  |  |  |  |
| 406 |  | Tổng cộng |  | `=D405` |  |  |  |  |  |
| 407 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D406*0.1` |  |  |  |  |  |
| 408 |  | Tổng số tiền phải thanh toán |  | `=round(D406+D407,2)` | 23330 | `=E408*D408` | 19028881 |  |  |
| 411 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 413 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 414 | 1 | 066176453774 | 2022-06-01 | 736.26 |  |  |  |  |  |
| 415 |  | Tổng cộng |  | `=D414` |  |  |  |  |  |
| 416 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D415*0.1` |  |  |  |  |  |
| 417 |  | Tổng số tiền phải thanh toán |  | `=round(D415+D416,2)` | 23415 | `=E417*D417` | 18963574 |  |  |
| 420 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 422 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 423 | 1 | 066176453774 | 2022-07-01 | 776.52 |  |  |  |  |  |
| 424 |  | Tổng cộng |  | `=D423` |  |  |  |  |  |
| 425 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D424*0.1` |  |  |  |  |  |
| 426 |  | Tổng số tiền phải thanh toán |  | `=round(D424+D425,2)` | 23480 | `=E426*D426` |  |  |  |
| 430 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 432 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 433 | 1 | 066176453774 | 2022-08-01 | 1282.68 |  |  |  |  |  |
| 434 |  | Tổng cộng |  | `=D433` |  |  |  |  |  |
| 435 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D434*0.1` |  |  |  |  |  |
| 436 |  | Tổng số tiền phải thanh toán |  | `=round(D434+D435,2)` | 23600 | `=E436*D436` |  |  |  |
| 439 | TỔNG HỢP CHI PHÍ WEWE |  |  |  |  |  |  |  |  |
| 441 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 442 | 1 | 066176453774 | 2022-09-01 | 534.79 |  |  |  |  |  |
| 443 |  | Tổng cộng |  | `=D442` |  |  |  |  |  |
| 444 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D443*0.1` |  |  |  |  |  |
| 445 |  | Tổng số tiền phải thanh toán |  | `=round(D443+D444,2)` | 24010 | `=E445*D445` |  |  |  |

> *Đã bỏ qua 181 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (251 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 36 | `D29` |
| D | `=D{r}*0.1` | 36 | `D30` |
| D | `=D{r}+D{r}` | 31 | `D31` |
| D | `=round(D{r}+D{r},2)` | 5 | `D408` |
| D | `=111.07+151.09+6.16` | 1 | `D291` |
| F | `=F{r}` | 34 | `F29` |
| F | `=F{r}*0.1` | 31 | `F30` |
| F | `=F{r}+F{r}` | 31 | `F31` |
| F | `=D{r}*E{r}` | 19 | `F28` |
| F | `=round(D{r}*E{r},0)` | 12 | `F291` |
| F | `=E{r}*D{r}` | 5 | `F408` |
| F | `=F{r}-F{r}` | 4 | `F189` |
| G | `=G{r}` | 1 | `G9` |
| G | `=G{r}*10%` | 1 | `G10` |
| I | `=G{r}*H{r}` | 1 | `I8` |
| I | `=I{r}` | 1 | `I9` |
| I | `=I{r}*0.1` | 1 | `I10` |
| I | `=I{r}+I{r}` | 1 | `I11` |
