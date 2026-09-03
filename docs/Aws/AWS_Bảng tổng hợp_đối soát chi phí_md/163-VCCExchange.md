# VCCExchange

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VCCExchange`  
> **Vùng dữ liệu:** 312 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 4 | 1 | VCC | 2019-07-01 | 574.17 | 23350 | `=D4*E4` |  |  |  |  |
| 5 |  | Tổng |  | `=D4` |  | `=F4` |  |  |  |  |
| 6 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D5*0.1` |  | `=F5*0.1` |  |  |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |  |  |  |  |
| 11 |  |  |  | Hà Nội, ngày 03 tháng 08 năm 2019 |  |  |  |  |  |  |
| 12 |  |  |  | Người lập |  |  |  |  |  |  |
| 16 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 20 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 23 | 1 | VCC | 2019-08-01 | 2612.56 | 23320 | `=D23*E23` |  |  |  |  |
| 24 |  | Tổng |  | `=D23` |  | `=F23` |  |  |  |  |
| 25 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D24*0.1` |  | `=F24*0.1` |  |  |  |  |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` |  | `=F24+F25` |  |  |  |  |
| 30 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |
| 31 |  |  |  | Người lập |  |  |  |  |  |  |
| 35 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 39 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 42 | 1 | VCC | 2019-08-01 | 822 | 23300 | `=D42*E42` |  |  |  |  |
| 43 |  | Tổng |  | `=D42` |  | `=F42` |  |  |  |  |
| 44 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D43*0.1` |  | `=F43*0.1` |  |  |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  | `=D43+D44` |  | `=F43+F44` |  |  |  |  |
| 49 |  |  |  | Hà Nội, ngày 18 tháng 09 năm 2019 |  |  |  |  |  |  |
| 50 |  |  |  | Người lập |  |  |  |  |  |  |
| 54 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 59 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 62 | 1 | 841670956230 | 2019-09-01 | 2432.13 | 23300 | `=D62*E62` |  |  |  |  |
| 63 |  | Tổng cộng |  | `=D62` |  | `=F62` |  |  |  |  |
| 64 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D63*0.1` |  | `=F63*0.1` |  |  |  |  |
| 65 |  | Tổng số tiền phải thanh toán |  | `=D63+D64` |  | `=F63+F64` |  |  |  |  |
| 67 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |  |  |
| 69 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |  |
| 70 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |
| 71 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |
| 80 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 83 | 1 | 841670956230 | 2019-10-01 | 2428.79 | 23300 | `=D83*E83` |  |  |  |  |
| 84 |  | Tổng cộng |  | `=D83` |  | `=F83` |  |  |  |  |
| 85 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D84*0.1` |  | `=F84*0.1` |  |  |  |  |
| 86 |  | Tổng số tiền phải thanh toán |  | `=D84+D85` |  | `=F84+F85` |  |  |  |  |
| 88 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |  |
| 89 |  |  |  | Người lập  |  |  |  |  |  |  |
| 93 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 98 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 100 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 101 | 1 | 841670956230 | 2019-11-01 | 2373.48 | 23300 | `=D101*E101` |  |  |  |  |
| 102 |  | Tổng cộng |  | `=D101` |  | `=F101` |  |  |  |  |
| 103 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D102*0.1` |  | `=F102*0.1` |  |  |  |  |
| 104 |  | Tổng số tiền phải thanh toán |  | `=D102+D103` |  | `=F102+F103` |  |  |  |  |
| 106 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |  |
| 107 |  |  |  | Người lập  |  |  |  |  |  |  |
| 111 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 115 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 118 | 1 | 841670956230 | 2019-12-01 | 3287.41 | 23300 | `=D118*E118` |  |  |  |  |
| 119 |  | Tổng cộng |  | `=D118` |  | `=F118` |  |  |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D119*0.1` |  | `=F119*0.1` |  |  |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=D119+D120` |  | `=F119+F120` |  |  |  |  |
| 123 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |  |  |
| 124 |  |  |  | Người lập  |  |  |  |  |  |  |
| 128 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 131 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 133 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 134 | 1 | 841670956230 | 2020-01-01 | 3597.87 | 23320 | `=D134*E134` |  |  |  |  |
| 135 |  | Tổng cộng |  | `=D134` |  | `=F134` |  |  |  |  |
| 136 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D135*0.1` |  | `=F135*0.1` |  |  |  |  |
| 137 |  | Tổng số tiền phải thanh toán |  | `=D135+D136` |  | `=F135+F136` |  |  |  |  |
| 139 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |  |  |
| 140 |  |  |  | Người lập  |  |  |  |  |  |  |
| 144 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 148 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 150 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 151 | 1 | 841670956230 | 2020-02-01 | 3335.93 | 23320 | `=D151*E151` |  |  |  |  |
| 152 |  | Tổng cộng |  | `=D151` |  | `=F151` |  |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D152*0.1` |  | `=F152*0.1` |  |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  | `=D152+D153` |  | `=F152+F153` |  |  |  |  |
| 156 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |  |
| 157 |  |  |  | Người lập  |  |  |  |  |  |  |
| 161 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 164 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 166 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 167 | 1 | 841670956230 | 2020-03-01 | 3311.29 | 23700 | `=D167*E167` |  |  |  |  |
| 168 |  | Tổng cộng |  | `=D167` |  | `=F167` |  |  |  |  |
| 169 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D168*0.1` |  | `=F168*0.1` |  |  |  |  |
| 170 |  | Tổng số tiền phải thanh toán |  | `=D168+D169` |  | `=F168+F169` |  |  |  |  |
| 172 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |  |
| 173 |  |  |  | Người lập  |  |  |  |  |  |  |
| 177 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 180 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 182 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 183 | 1 | 841670956230 | 2020-04-01 | 2248.13 | 23600 | `=D183*E183` |  |  |  |  |
| 184 |  | Tổng cộng |  | `=D183` |  | `=F183` |  |  |  |  |
| 185 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D184*0.1` |  | `=F184*0.1` |  |  |  |  |
| 186 |  | Tổng số tiền phải thanh toán |  | `=D184+D185` |  | `=F184+F185` |  |  |  |  |
| 188 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |
| 189 |  |  |  | Người lập  |  |  |  |  |  |  |
| 193 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 196 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 198 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 199 | 1 | 841670956230 | 2020-05-01 | 1559.22 | 23350 | `=D199*E199` |  |  |  |  |
| 200 |  | Tổng cộng |  | `=D199` |  | `=F199` |  |  |  |  |
| 201 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D200*0.1` |  | `=F200*0.1` |  |  |  |  |
| 202 |  | Tổng số tiền phải thanh toán |  | `=D200+D201` |  | `=F200+F201` |  |  |  |  |
| 204 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |
| 205 |  |  |  | Người lập  |  |  |  |  |  |  |
| 209 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 212 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 214 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |
| 215 | 1 | 841670956230 |  | 2020-06-01 | 1895.95 | 5000 | `=E215` | `=F216-E216` |  |  |
| 216 |  | Tổng |  |  | `=sum(E215)` | `=F215` | `=sum(G215)` | `=H215` |  |  |
| 217 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |  |
| 218 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |
| 220 |  |  |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |
| 221 |  |  |  |  |  | Người lập  |  |  |  |  |
| 225 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 228 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 230 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |
| 231 | 1 | 841670956230 | VCCE | 2020-07-01 | 2058.08 | 3104.05 | `=E231` | `=F232-E232` |  |  |
| 232 |  | Tổng |  |  | `=sum(E231)` | `=F231` | `=sum(G231)` | `=H231` |  |  |
| 233 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |  |
| 234 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |
| 236 |  |  |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 237 |  |  |  |  |  | Người lập  |  |  |  |  |
| 241 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 244 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 246 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Còn lại phải thanh toán | Tỷ giá | Thành tiền |
| 247 | 1 | 841670956230 | VCCE | 2020-08-01 | 2366.55 | `=H232` | `=E247` | `=G247-F247` | 23270 | `=H247*I247` |
| 248 |  | Tổng |  |  | `=sum(E247)` | `=F247` | `=sum(G247)` | `=H247` |  | `=J247` |
| 249 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | `=H248*0.1` |  | 3072989 |
| 250 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=sum(H248:H249)` |  | `=sum(J248:J249)` |
| 252 |  |  |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |  |  |
| 253 |  |  |  |  |  | Người lập  |  |  |  |  |
| 257 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 259 | TỔNG HỢP CHI PHÍ VCCExchange |  |  |  |  |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 262 | 1 | 841670956230 | 2020-09-01 | 2450.18 | 23280 | `=D262*E262` |  |  |  |  |
| 263 |  | Tổng cộng |  | `=D262` |  | `=F262` |  |  |  |  |
| 264 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D263*0.1` |  | `=F263*0.1` |  |  |  |  |
| 265 |  | Tổng số tiền phải thanh toán |  | `=D263+D264` |  | `=F263+F264` |  |  |  |  |
| 269 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 271 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 272 | 1 | 841670956230 | 2020-10-01 | 3005.92 | 23270 | `=D272*E272` |  |  |  |  |
| 273 |  | Tổng cộng |  | `=D272` |  | `=F272` |  |  |  |  |
| 274 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D273*0.1` |  | `=F273*0.1` |  |  |  |  |
| 275 |  | Tổng số tiền phải thanh toán |  | `=D273+D274` |  | `=F273+F274` |  |  |  |  |
| 278 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 280 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 281 | 1 | 841670956230 | 2020-11-01 | 3142.31 | 23235 | `=D281*E281` |  |  |  |  |
| 282 |  | Tổng cộng |  | `=D281` |  | `=F281` |  |  |  |  |
| 283 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D282*0.1` |  | `=F282*0.1` |  |  |  |  |
| 284 |  | Tổng số tiền phải thanh toán |  | `=D282+D283` |  | `=F282+F283` |  |  |  |  |
| 287 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 289 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |
| 290 | 1 | 841670956230 |  | 2020-12-01 | 3621.18 | 10000 | `=E290` | `=F291-E291` |  |  |
| 291 |  | Tổng |  |  | `=sum(E290)` | `=F290` | `=sum(G290)` | `=H290` |  |  |
| 292 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |  |
| 293 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |
| 297 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 299 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |
| 300 | 1 | 841670956230 |  | 2021-01-01 | 4262.96 | `=H291` | `=E300` | `=F301-E301` |  |  |
| 301 |  | Tổng |  |  | `=sum(E300)` | `=F300` | `=sum(G300)` | `=H300` |  |  |
| 302 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |  |
| 303 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |
| 306 | TỔNG HỢP CHI PHÍ VCCE |  |  |  |  |  |  |  |  |  |
| 308 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Còn lại phải thanh toán | Tỷ giá | Thành tiền |
| 309 | 1 | 841670956230 |  | 2021-02-01 | 3783.38 | `=H300` | `=E309` | `=F310-E310` | 23095 | `=-H309*I309` |
| 310 |  | Tổng |  |  | `=sum(E309)` | `=F309` | `=sum(G309)` | `=H309` |  | `=J309` |
| 311 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | `=-H310*0.1` | 23095 | `=J310*0.1` |
| 312 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=-H310+H311` | 23095 | `=J310+J311` |

> *Đã bỏ qua 140 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (155 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 15 | `D5` |
| D | `=D{r}*0.1` | 15 | `D6` |
| D | `=D{r}+D{r}` | 15 | `D7` |
| E | `=sum(E{r})` | 6 | `E216` |
| F | `=F{r}` | 21 | `F5` |
| F | `=D{r}*E{r}` | 15 | `F4` |
| F | `=F{r}*0.1` | 15 | `F6` |
| F | `=F{r}+F{r}` | 15 | `F7` |
| F | `=H{r}` | 3 | `F247` |
| G | `=E{r}` | 6 | `G215` |
| G | `=sum(G{r})` | 6 | `G216` |
| H | `=H{r}` | 6 | `H216` |
| H | `=F{r}-E{r}` | 5 | `H215` |
| H | `=G{r}-F{r}` | 1 | `H247` |
| H | `=H{r}*0.1` | 1 | `H249` |
| H | `=sum(H{r}:H{r})` | 1 | `H250` |
| H | `=-H{r}*0.1` | 1 | `H311` |
| H | `=-H{r}+H{r}` | 1 | `H312` |
| J | `=J{r}` | 2 | `J248` |
| J | `=H{r}*I{r}` | 1 | `J247` |
| J | `=sum(J{r}:J{r})` | 1 | `J250` |
| J | `=-H{r}*I{r}` | 1 | `J309` |
| J | `=J{r}*0.1` | 1 | `J311` |
| J | `=J{r}+J{r}` | 1 | `J312` |
