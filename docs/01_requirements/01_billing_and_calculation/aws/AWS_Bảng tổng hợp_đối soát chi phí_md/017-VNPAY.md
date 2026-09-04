# VNPAY

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VNPAY`  
> **Vùng dữ liệu:** 1014 dòng × 12 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá ngày | Thành tiền |  |  |  |  | Tháng | Credit |
| 4 | 1 | 29375558497 | 2019-07-01 | 283.68 | 23350 | `=D4*E4` |  | Chênh lệch | `=F7-D7*23280` |  | 2020-05-01 | 2604.26 |
| 5 |  | Tổng |  | `=D4` |  | `=F4` |  |  |  |  | 2020-06-01 | 3870.36 |
| 6 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D5*0.12` |  | `=F5*0.12` |  |  |  |  | 2020-07-01 | 5998.81 |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` | `=E5+E6` | `=F5+F6` |  |  |  |  | Tổng | `=sum(L4:L6)` |
| 11 |  |  |  | Hà Nội, ngày 02 tháng 08 năm 2019 |  |  |  |  |  |  |  |  |
| 12 |  |  |  | Người lập |  |  |  |  |  |  |  |  |
| 16 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |
| 19 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá ngày | Thành tiền |  |  |  |  |  |  |
| 22 | 1 | 29375558497 | 2019-08-01 | 403.1 | 23260 | `=D22*E22` |  |  |  |  |  |  |
| 23 | 2 | Số tiền đã thanh toán tháng 7 | 2019-07-01 |  |  | `=-I4` |  |  |  |  |  |  |
| 24 |  | Tổng tạm tính |  | `=D22` |  | `=F22` |  |  |  |  |  |  |
| 25 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D24*0.12` |  | `=F24*0.12` |  |  |  |  |  |  |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` | `=E24+E25` | `=F24+F25+F23` |  |  |  |  |  |  |
| 28 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |  |  |
| 29 |  |  |  | Người lập |  |  |  |  |  |  |  |  |
| 33 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |
| 36 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 38 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 39 | 1 | 29375558497 | 2019-09-01 | 390.21 | 23270 | `=D39*E39` |  |  |  |  |  |  |
| 40 |  | Tổng cộng |  | `=D39` |  | `=F39` |  |  |  |  |  |  |
| 41 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D40*0.12` |  | `=F40*0.12` |  |  |  |  |  |  |
| 42 |  | Tổng số tiền phải thanh toán |  | `=D40+D41` |  | `=F40+F41` |  |  |  |  |  |  |
| 44 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |  |  |  |  |
| 45 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 49 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |
| 50 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |  |  |  |
| 51 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |  |  |
| 52 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |  |  |
| 62 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 65 | 1 | 029375558497 | 2019-10-01 | 494.95 | 23270 | `=D65*E65` |  |  |  |  |  |  |
| 66 |  | Tổng cộng |  | `=D65` |  | `=F65` |  |  |  |  |  |  |
| 67 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D66*0.12` |  | `=F66*0.12` |  |  |  |  |  |  |
| 68 |  | Tổng số tiền phải thanh toán |  | `=D66+D67` |  | `=F66+F67` |  |  |  |  |  |  |
| 70 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |  |  |  |
| 71 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 75 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 79 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 81 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 82 | 1 | 029375558497 | 2019-11-01 | 888.79 | 23240 | `=D82*E82` |  |  |  |  |  |  |
| 83 |  | Tổng cộng |  | `=D82` |  | `=F82` |  |  |  |  |  |  |
| 84 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D83*0.12` |  | `=F83*0.12` |  |  |  |  |  |  |
| 85 |  | Tổng số tiền phải thanh toán |  | `=D83+D84` |  | `=F83+F84` |  |  |  |  |  |  |
| 87 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |  |  |  |
| 88 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 92 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 96 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 99 | 1 | 029375558497 | 2019-12-01 | 956.37 | 23230 | `=D99*E99` |  |  |  |  |  |  |
| 100 |  | Tổng cộng |  | `=D99` |  | `=F99` |  |  |  |  |  |  |
| 101 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D100*0.12` |  | `=F100*0.12` |  |  |  |  |  |  |
| 102 |  | Tổng số tiền phải thanh toán |  | `=D100+D101` |  | `=F100+F101` |  |  |  |  |  |  |
| 104 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |  |  |  |  |
| 105 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 109 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 112 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 115 | 1 | 029375558497 | 2020-01-01 | 4302.72 | 23340 | `=D115*E115` |  |  |  |  |  |  |
| 116 |  | Tổng cộng |  | `=D115` |  | `=F115` |  |  |  |  |  |  |
| 117 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D116*0.12` |  | `=F116*0.12` |  |  |  |  |  |  |
| 118 |  | Tổng số tiền phải thanh toán |  | `=D116+D117` |  | `=F116+F117` |  |  |  |  |  |  |
| 120 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |  |  |  |  |
| 121 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 125 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 129 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/3/2020 vào 16h17' | Thành tiền |  |  |  |  |  |  |
| 132 | 1 | 029375558497 | 2020-02-01 | 5129.22 | 23285 | `=D132*E132` |  |  |  |  |  |  |
| 133 |  | Tổng cộng |  | `=D132` |  | `=F132` |  |  |  |  |  |  |
| 134 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D133*0.12` |  | `=F133*0.12` |  |  |  |  |  |  |
| 135 |  | Tổng số tiền phải thanh toán |  | `=D133+D134` |  | `=F133+F134` |  |  |  |  |  |  |
| 137 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |  |  |  |
| 138 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 142 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 145 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 147 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/4/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 148 | 1 | 029375558497 | 2020-03-01 | 5943.12 | 23530 | `=D148*E148` |  |  |  |  |  |  |
| 149 |  | Tổng cộng |  | `=D148` |  | `=F148` |  |  |  |  |  |  |
| 150 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D149*0.12` |  | `=F149*0.12` |  |  |  |  |  |  |
| 151 |  | Tổng số tiền phải thanh toán |  | `=D149+D150` |  | `=F149+F150` |  |  |  |  |  |  |
| 153 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |  |  |  |
| 154 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 158 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 161 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 163 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/5/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 164 | 1 | 029375558497 | 2020-04-01 | 5901.38 | 23520 | `=D164*E164` |  |  |  |  |  |  |
| 165 |  | Tổng cộng |  | `=D164` |  | `=F164` |  |  |  |  |  |  |
| 166 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D165*0.12` |  | `=F165*0.12` |  |  |  |  |  |  |
| 167 |  | Tổng số tiền phải thanh toán |  | `=D165+D166` |  | `=F165+F166` |  |  |  |  |  |  |
| 169 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |  |  |
| 170 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 174 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 177 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 179 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/6/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 180 | 1 | 029375558497 | 2020-05-01 | 6118.89 | 23350 | `=D180*E180` |  |  |  |  |  |  |
| 181 |  | Tổng cộng |  | `=D180` |  | `=F180` |  |  |  |  |  |  |
| 182 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D181*0.12` |  | `=F181*0.12` |  |  |  |  |  |  |
| 183 |  | Tổng số tiền phải thanh toán |  | `=D181+D182` |  | `=F181+F182` |  |  |  |  |  |  |
| 185 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |  |  |
| 186 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 190 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 193 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 195 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/7/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 196 | 1 | 029375558497 | 2020-06-01 | 6351.34 | 23290 | `=D196*E196` |  |  |  |  |  |  |
| 197 |  | Tổng cộng |  | `=D196` |  | `=F196` |  |  |  |  |  |  |
| 198 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D197*0.12` |  | `=F197*0.12` |  |  |  |  |  |  |
| 199 |  | Tổng số tiền phải thanh toán |  | `=D197+D198` |  | `=F197+F198` |  |  |  |  |  |  |
| 201 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |  |  |
| 202 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 206 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 209 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 211 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/8/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 212 | 1 | 029375558497 | 2020-07-01 | 7084.91 | 23270 | `=D212*E212` |  |  |  |  |  |  |
| 213 |  | Tổng cộng |  | `=D212` |  | `=F212` |  |  |  |  |  |  |
| 214 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D213*0.12` |  | `=F213*0.12` |  |  |  |  |  |  |
| 215 |  | Tổng số tiền phải thanh toán |  | `=D213+D214` |  | `=F213+F214` |  |  |  |  |  |  |
| 217 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |  |  |  |
| 218 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 222 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 226 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 228 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/9/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 229 | 1 | 029375558497 | 2020-08-01 | 6799.12 | 23270 | `=D229*E229` |  |  |  |  |  |  |
| 230 |  | Tổng cộng |  | `=D229` |  | `=F229` |  |  |  |  |  |  |
| 231 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D230*0.12` |  | `=F230*0.12` |  |  |  |  |  |  |
| 232 |  | Tổng số tiền phải thanh toán |  | `=D230+D231` |  | `=F230+F231` |  |  |  |  |  |  |
| 234 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |  |  |  |  |  |  |
| 235 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |
| 239 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |
| 242 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 5/10/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 245 | 1 | 029375558497 | 2020-09-01 | 6613.05 | 23280 | `=D245*E245` |  |  |  |  |  |  |
| 246 |  | Tổng cộng |  | `=D245` |  | `=F245` |  |  |  |  |  |  |
| 247 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D246*0.12` |  | `=F246*0.12` |  |  |  |  |  |  |
| 248 |  | Tổng số tiền phải thanh toán |  | `=D246+D247` |  | `=F246+F247` |  |  |  |  |  |  |
| 252 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 254 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 4/11/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 255 | 1 | 029375558497 | 2020-10-01 | 7318.37 | 23270 | `=D255*E255` |  |  |  |  |  |  |
| 256 |  | Tổng cộng |  | `=D255` |  | `=F255` |  |  |  |  |  |  |
| 257 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D256*0.12` |  | `=F256*0.12` |  |  |  |  |  |  |
| 258 |  | Tổng số tiền phải thanh toán |  | `=D256+D257` |  | `=F256+F257` |  |  |  |  |  |  |
| 261 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 263 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/11/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 264 | 1 | 029375558497 | 2020-11-01 | 6837.25 | 23230 | `=D264*E264` |  |  |  |  |  |  |
| 265 |  | Tổng cộng |  | `=D264` |  | `=F264` |  |  |  |  |  |  |
| 266 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D265*0.12` |  | `=F265*0.12` |  |  |  |  |  |  |
| 267 |  | Tổng số tiền phải thanh toán |  | `=D265+D266` |  | `=F265+F266` |  |  |  |  |  |  |
| 270 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 272 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/12/2020 sau 16h | Thành tiền |  |  |  |  |  |  |
| 273 | 1 | 029375558497 | 2020-12-01 | 7545.59 | 23215 | `=D273*E273` |  |  |  |  |  |  |
| 274 |  | Tổng cộng |  | `=D273` |  | `=F273` |  |  |  |  |  |  |
| 275 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D274*0.12` |  | `=F274*0.12` |  |  |  |  |  |  |
| 276 |  | Tổng số tiền phải thanh toán |  | `=D274+D275` |  | `=F274+F275` |  |  |  |  |  |  |
| 279 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/01/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 282 | 1 | 029375558497 | 2021-01-01 | 8346.72 | 23140 | `=D282*E282` |  |  |  |  |  |  |
| 283 |  | Tổng cộng |  | `=D282` |  | `=F282` |  |  |  |  |  |  |
| 284 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D283*0.12` |  | `=F283*0.12` |  |  |  |  |  |  |
| 285 |  | Tổng số tiền phải thanh toán |  | `=D283+D284` |  | `=F283+F284` |  |  |  |  |  |  |
| 288 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 290 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 28/02/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 291 | 1 | 029375558497 | 2021-02-01 | 7684.55 | 23100 | `=D291*E291` |  |  |  |  |  |  |
| 292 |  | Tổng cộng |  | `=D291` |  | `=F291` |  |  |  |  |  |  |
| 293 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D292*0.12` |  | `=F292*0.12` |  |  |  |  |  |  |
| 294 |  | Tổng số tiền phải thanh toán |  | `=D292+D293` | 23100 | `=F292+F293` |  |  |  |  |  |  |
| 297 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 299 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/03/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 300 | 1 | 029375558497 | 2021-03-01 | 9276.06 | 23170 | `=D300*E300` |  |  |  |  |  |  |
| 301 |  | Tổng cộng |  | `=D300` |  | `=F300` |  |  |  |  |  |  |
| 302 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D301*0.12` |  | `=F301*0.12` |  |  |  |  |  |  |
| 303 |  | Tổng số tiền phải thanh toán |  | `=D301+D302` | 23170 | `=F301+F302` |  |  |  |  |  |  |
| 306 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 308 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/04/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 309 | 1 | 029375558497 | 2021-04-01 | 9840.75 | 23140 | `=D309*E309` |  |  |  |  |  |  |
| 310 |  | Tổng cộng |  | `=D309` |  | `=F309` |  |  |  |  |  |  |
| 311 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D310*0.12` |  | `=F310*0.12` |  |  |  |  |  |  |
| 312 |  | Tổng số tiền phải thanh toán |  | `=D310+D311` | 23140 | `=F310+F311` |  |  |  |  |  |  |
| 315 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 317 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/05/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 318 | 1 | 029375558497 | 2021-05-01 | 9541.94 | 23145 | `=round(D318*E318,0)` |  |  |  |  |  |  |
| 319 |  | Tổng cộng |  | `=D318` |  | `=F318` |  |  |  |  |  |  |
| 320 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D319*0.12` |  | `=F319*0.12` |  |  |  |  |  |  |
| 321 |  | Tổng số tiền phải thanh toán |  | `=D319+D320` | 23145 | `=F319+F320` |  |  |  |  |  |  |
| 325 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 327 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/06/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 328 | 1 | 029375558497 | 2021-06-01 | 11722.96 | 23120 | `=round(D328*E328,0)` |  |  |  |  |  |  |
| 329 |  | Discount (3%) |  | `=D328*3%` |  |  |  |  |  |  |  |  |
| 330 |  | Tổng cộng |  | `=D328-D329` |  | `=F328` |  |  |  |  |  |  |
| 331 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D330*0.12` |  | `=F330*0.12` |  |  |  |  |  |  |
| 332 |  | Tổng số tiền phải thanh toán |  | `=D330+D331` | 23120 | `=F330+F331` |  |  |  |  |  |  |
| 337 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 339 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/07/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 340 | 1 | 029375558497 | 2021-07-01 | 12694.86 | 23050 | `=round(D340*E340,0)` |  |  |  |  |  |  |
| 341 |  | Discount (3%) |  | `=D340*3%` |  |  |  |  |  |  |  |  |
| 342 |  | Tổng cộng |  | `=D340-D341` | 23050 | `=round(D342*E342,0)` |  |  |  |  |  |  |
| 343 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D342*0.09` | 23050 | 25545423 |  | 25545422 |  |  |  |  |
| 344 |  | Tổng số tiền phải thanh toán |  | `=D342+D343` | 23050 | `=F342+F343` |  |  |  |  |  |  |
| 349 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 351 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/08/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 352 | 1 | 029375558497 | 2021-08-01 | 12726.55 | 22870 | `=round(D352*E352,0)` |  |  |  |  |  |  |
| 353 |  | Discount (3%) |  | `=D352*3%` |  |  |  |  |  |  |  |  |
| 354 |  | Tổng cộng |  | `=D352-D353` | 22870 | `=round(D354*E354,0)` |  |  |  |  |  |  |
| 355 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D354*0.09` | 22870 | `=F354*0.09` |  |  |  |  |  |  |
| 356 |  | Tổng số tiền phải thanh toán |  | `=D354+D355` | 22870 | `=F354+F355` |  | 307733719.1700000167 |  | 307733719.1700000167 |  |  |
| 360 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 362 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/09/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 363 | 1 | 029375558497 | 2021-09-01 | 13238.82 | 22860 | `=round(D363*E363,0)` |  |  |  |  |  |  |
| 364 |  | Discount (3%) |  | `=D363*3%` |  |  |  |  |  |  |  |  |
| 365 |  | Tổng cộng |  | `=D363-D364` | 22860 | `=round(D365*E365,0)` |  |  |  |  |  |  |
| 366 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D365*0.09` | 22860 | `=F365*0.09` |  |  |  |  |  |  |
| 367 |  | Tổng số tiền phải thanh toán |  | `=D365+D366` | 22860 | `=F365+F366` |  |  |  |  |  |  |
| 370 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 372 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/10/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 373 | 1 | 029375558497 | 2021-10-01 | 15854.59 | 22850 | `=round(D373*E373,0)` |  |  |  |  |  |  |
| 374 |  | Discount (3%) |  | `=D373*3%` |  |  |  |  |  |  |  |  |
| 375 |  | Tổng cộng |  | `=D373-D374` | 22850 | `=round(D375*E375,0)` |  |  |  |  |  |  |
| 376 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D375*0.09` | 22850 | `=F375*0.09` |  |  |  |  |  |  |
| 377 |  | Tổng số tiền phải thanh toán |  | `=D375+D376` | 22850 | `=F375+F376` |  |  |  |  |  |  |
| 380 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 382 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/11/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 383 | 1 | 029375558497 | 2021-11-01 | 15796.91 | 22800 | `=round(D383*E383,0)` |  |  |  |  |  |  |
| 384 |  | Discount (3%) |  | `=D383*3%` |  |  |  |  |  |  |  |  |
| 385 |  | Tổng cộng |  | `=D383-D384` | 22800 | `=round(D385*E385,0)` |  |  |  |  |  |  |
| 386 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D385*0.09` | 22800 | `=F385*0.09` |  |  |  |  |  |  |
| 387 |  | Tổng số tiền phải thanh toán |  | `=D385+D386` | 22800 | `=F385+F386` | 380807263.5799999833 |  |  |  |  |  |
| 391 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 393 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/12/2021 sau 16h | Thành tiền |  |  |  |  |  |  |
| 394 | 1 | 029375558497 | 2021-12-01 | 15596.62 | 22920 | `=round(D394*E394,0)` |  |  |  |  |  |  |
| 395 |  | Discount (3%) |  | `=D394*3%` |  |  |  |  |  |  |  |  |
| 396 |  | Tổng cộng |  | `=D394-D395` | 22920 | `=round(D396*E396,0)` |  |  |  |  |  |  |
| 397 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D396*0.09` | 22920 | `=F396*0.09` |  |  |  |  |  |  |
| 398 |  | Tổng số tiền phải thanh toán |  | `=D396+D397` | 22920 | `=F396+F397` | 377957820.4599999785 |  |  |  |  |  |
| 402 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 404 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/01/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 405 | 1 | 029375558497 | 2022-01-01 | 17639.37 | 22780 | `=round(D405*E405,0)` |  |  |  |  |  |  |
| 406 |  | Discount (3%) |  | `=D405*3%` |  |  |  |  |  |  |  |  |
| 407 |  | Tổng cộng |  | `=D405-D406` | 22780 | `=round(D407*E407,0)` |  |  |  |  |  |  |
| 408 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D407*0.09` | 22780 | `=F407*0.09` |  |  |  |  |  |  |
| 409 |  | Tổng số tiền phải thanh toán |  | `=D407+D408` | 22780 | `=F407+F408` | 424849412.2699999809 |  |  |  |  |  |
| 413 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 415 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 28/02/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 416 | 1 | 029375558497 | 2022-02-01 | 14603.8 | 22950 | `=round(D416*E416,0)` |  |  |  |  |  |  |
| 417 |  | Discount (3%) |  | `=D416*3%` |  |  |  |  |  |  |  |  |
| 418 |  | Tổng cộng |  | `=D416-D417` | 22950 | `=round(D418*E418,0)` |  |  |  |  |  |  |
| 419 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D418*0.09` | 22950 | `=F418*0.09` |  |  |  |  |  |  |
| 420 |  | Tổng số tiền phải thanh toán |  | `=D418+D419` | 22950 | `=F418+F419` | 354361718.4599999785 |  |  |  |  |  |
| 423 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 425 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/03/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 426 | 1 | 029375558497 | 2022-03-01 | 15772.39 | 22980 | `=round(D426*E426,0)` |  |  |  |  |  |  |
| 427 |  | Discount (3%) |  | `=D426*3%` |  |  |  |  |  |  |  |  |
| 428 |  | Tổng cộng |  | `=D426-D427` | 22980 | `=round(D428*E428,0)` |  |  |  |  |  |  |
| 429 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D428*0.09` | 22980 | `=F428*0.09` |  |  |  |  |  |  |
| 430 |  | Tổng số tiền phải thanh toán |  | `=D428+D429` | 22980 | `=F428+F429` | 383217880.3299999833 |  |  |  |  |  |
| 433 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 435 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/04/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 436 | 1 | 029375558497 | 2022-04-01 | 18749.74 | 23095 | `=round(D436*E436,0)` |  |  |  |  |  |  |
| 437 |  | Discount (3%) |  | `=D436*3%` |  |  |  |  |  |  |  |  |
| 438 |  | Tổng cộng |  | `=D436-D437` | 23095 | `=round(D438*E438,0)` |  |  |  |  |  |  |
| 439 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D438*0.09` | 23095 | `=F438*0.09` |  |  |  |  |  |  |
| 440 |  | Tổng số tiền phải thanh toán |  | `=D438+D439` | 23095 | `=F438+F439` | 457837591.9200000167 |  |  |  |  |  |
| 444 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 446 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/05/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 447 | 1 | 029375558497 | 2022-05-01 | 19629.56 |  |  |  |  |  |  |  |  |
| 448 |  | Discount (3%) |  | `=D447*3%` |  |  |  |  |  |  |  |  |
| 449 |  | Tổng cộng |  | `=D447-D448` |  |  |  |  |  |  |  |  |
| 450 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D449*0.09` |  |  |  |  |  |  |  |  |
| 451 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D449+D450,2)` | 23330 | `=D451*E451` | 484198518.9000000358 |  |  |  |  |  |
| 454 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 456 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/06/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 457 | 1 | 029375558497 | 2022-06-01 | 19540.07 |  |  |  |  |  |  |  |  |
| 458 |  | Discount (3%) |  | `=D457*3%` |  |  |  |  |  |  |  |  |
| 459 |  | Tổng cộng |  | `=D457-D458` |  |  |  |  |  |  |  |  |
| 460 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D459*0.09` |  |  |  |  |  |  |  |  |
| 461 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D459+D460,2)` | 23415 | `=D461*E461` |  |  |  |  |  |  |
| 464 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 466 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/07/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 467 | 1 | 029375558497 | 2022-07-01 | 18224.33 |  |  |  |  |  |  |  |  |
| 468 |  | Discount (3%) |  | `=D467*3%` |  |  |  |  |  |  |  |  |
| 469 |  | Tổng cộng |  | `=D467-D468` |  |  |  |  |  |  |  |  |
| 470 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D469*0.09` |  |  |  |  |  |  |  |  |
| 471 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D469+D470,2)` | 23480 | `=D471*E471` |  |  |  |  |  |  |
| 475 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 477 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/08/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 478 | 1 | 029375558497 | 2022-08-01 | 17570.58 |  |  |  |  |  |  |  |  |
| 479 |  | Discount (3%) |  | `=D478*3%` |  |  |  |  |  |  |  |  |
| 480 |  | Tổng cộng |  | `=D478-D479` |  |  |  |  |  |  |  |  |
| 481 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D480*0.09` |  |  |  |  |  |  |  |  |
| 482 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D480+D481,2)` | 23600 | `=D482*E482` |  |  |  |  |  |  |
| 485 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 487 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/09/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 488 | 1 | 029375558497 | 2022-09-01 | 17662.24 |  |  |  |  |  |  |  |  |
| 489 |  | Discount (3%) |  | `=D488*3%` |  |  |  |  |  |  |  |  |
| 490 |  | Tổng cộng |  | `=D488-D489` |  |  |  |  |  |  |  |  |
| 491 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D490*0.09` |  |  |  |  |  |  |  |  |
| 492 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D490+D491,2)` | 24010 | `=D492*E492` |  |  |  |  |  |  |
| 495 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 497 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 31/10/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 498 | 1 | 029375558497 | 2022-10-01 | 20825.62 |  |  |  |  |  |  |  |  |
| 499 |  | Discount (3%) |  | `=D498*3%` |  |  |  |  |  |  |  |  |
| 500 |  | Tổng cộng |  | `=D498-D499` |  |  |  |  |  |  |  |  |
| 501 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D500*0.09` |  |  |  |  |  |  |  |  |
| 502 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D500+D501,2)` | 24879 | `=D502*E502` |  |  |  |  |  |  |
| 506 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 508 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 30/11/2022 sau 16h | Thành tiền |  |  |  |  |  |  |
| 509 | 1 | 029375558497 | 2022-11-01 | 18745.87 |  |  |  |  |  |  |  |  |
| 510 |  | Discount (3%) |  | `=D509*3%` |  |  |  |  |  |  |  |  |
| 511 |  | Tổng cộng |  | `=D509-D510` |  |  |  |  |  |  |  |  |
| 512 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D511*0.09,2)` |  |  |  |  |  |  |  |  |
| 513 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D511+D512,2)` | 24800 | `=D513*E513` |  |  |  |  |  |  |
| 516 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 518 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 11/01/2023 | Thành tiền |  |  |  |  |  |  |
| 519 | 1 | 029375558497 | 2022-12-01 | 20826.4086257581 |  |  |  |  |  |  |  |  |
| 520 |  | Discount (3%) |  | `=D519*3%` |  |  |  |  |  |  |  |  |
| 521 |  | Tổng cộng |  | `=D519-D520` |  |  |  |  |  |  |  |  |
| 522 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D521*0.09,2)` |  |  |  |  |  |  |  |  |
| 523 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D521+D522,2)` | 23610 | `=D523*E523` |  |  |  |  |  |  |
| 526 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 528 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 08/02/2023 | Thành tiền |  | Tỷ giá VCB ngày 31/01/2023 sau 16h |  |  |  |  |
| 529 | 1 | 029375558497 | 2023-01-01 | 21327.93 |  |  |  |  |  |  |  |  |
| 530 |  | Discount (3%) |  | `=D529*3%` |  |  |  |  |  |  |  |  |
| 531 |  | Tổng cộng |  | `=D529-D530` |  |  |  |  |  |  |  |  |
| 532 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D531*0.09,2)` |  |  |  |  |  |  |  |  |
| 533 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D531+D532,2)` | 23770 | `=D533*E533` |  |  |  |  |  |  |
| 536 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 538 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 10/03/2023 | Thành tiền |  | Tỷ giá VCB ngày 31/01/2023 sau 16h |  |  |  |  |
| 539 | 1 | 029375558497 | 2023-02-01 | 16650.97 |  |  |  |  |  |  |  |  |
| 540 |  | Discount (3%) |  | `=D539*3%` |  |  |  |  |  |  |  |  |
| 541 |  | Tổng cộng |  | `=D539-D540` |  |  |  |  |  |  |  |  |
| 542 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D541*0.09,2)` |  |  |  |  |  |  |  |  |
| 543 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D541+D542,2)` | 23860 | `=D543*E543` |  |  |  |  |  |  |
| 546 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 548 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 07/04/2023 | Thành tiền |  | Tỷ giá VCB ngày 31/03/2023 sau 16h |  |  |  |  |
| 549 | 1 | 029375558497 | 2023-03-01 | 18367.28 |  |  |  |  |  |  |  |  |
| 550 |  | Discount (3%) |  | `=D549*3%` |  |  |  |  |  |  |  |  |
| 551 |  | Tổng cộng |  | `=D549-D550` |  |  |  |  |  |  |  |  |
| 552 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D551*0.09,2)` |  |  |  |  |  |  |  |  |
| 553 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D551+D552,2)` | 23620 | `=D553*E553` |  |  |  |  |  |  |
| 556 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 558 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 08/05/2023 | Thành tiền |  |  |  |  |  |  |
| 559 | 1 | 029375558497 | 2023-04-01 | 17424.59 |  |  |  |  |  |  |  |  |
| 560 |  | Discount (3%) |  | `=D559*3%` |  |  |  |  |  |  |  |  |
| 561 |  | Tổng cộng |  | `=D559-D560` |  |  |  |  |  |  |  |  |
| 562 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D561*0.09,2)` |  |  |  |  |  |  |  |  |
| 563 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D561+D562,2)` | 23630 | `=D563*E563` |  |  |  |  |  |  |
| 566 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 568 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 09/06/2023 | Thành tiền |  |  |  |  |  |  |
| 569 | 1 | 029375558497 | 2023-05-01 | 17419.36 |  |  |  |  |  |  |  |  |
| 570 |  | Discount (3%) |  | `=D569*3%` |  |  |  |  |  |  |  |  |
| 571 |  | Tổng cộng |  | `=D569-D570` |  |  |  |  |  |  |  |  |
| 572 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D571*0.09,2)` |  |  |  |  |  |  |  |  |
| 573 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D571+D572,2)` | 23650 | `=D573*E573` |  |  |  |  |  |  |
| 576 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 578 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 10/07/2023 | Thành tiền |  |  |  |  |  |  |
| 579 | 1 | 029375558497 | 2023-06-01 | 16132.25 |  |  |  |  |  |  |  |  |
| 580 |  | Discount (3%) |  | `=round(D579*3%,2)` |  |  |  |  |  |  |  |  |
| 581 |  | Tổng cộng |  | `=D579-D580` |  |  |  |  |  |  |  |  |
| 582 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D581*0.09,2)` |  |  |  |  |  |  |  |  |
| 583 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D581+D582,2)` | 23780 | `=D583*E583` |  |  |  |  |  |  |
| 586 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 588 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 09/08/2023 | Thành tiền |  |  |  |  |  |  |
| 589 | 1 | 029375558497 | 2023-07-01 | 18757.56 |  |  |  |  |  |  |  |  |
| 590 |  | Discount (3%) |  | `=round(D589*3%,2)` |  |  |  |  |  |  |  |  |
| 591 |  | Tổng cộng |  | `=D589-D590` |  |  |  |  |  |  |  |  |
| 592 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D591*0.09,2)` |  |  |  |  |  |  |  |  |
| 593 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D591+D592,2)` | 23910 | `=D593*E593` |  |  |  |  |  |  |
| 597 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 599 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 08/09/2023 | Thành tiền |  |  |  |  |  |  |
| 600 | 1 | 029375558497 | 2023-08-01 | 21009.44 |  |  |  |  |  |  |  |  |
| 601 |  | Discount (3%) |  | `=round(D600*3%,2)` |  |  |  |  |  |  |  |  |
| 602 |  | Tổng cộng |  | `=D600-D601` |  |  |  |  |  |  |  |  |
| 603 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D602*0.09,2)` |  |  |  |  |  |  |  |  |
| 604 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D602+D603,2)` | 24240 | `=D604*E604` |  |  |  |  |  |  |
| 607 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 609 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 09/10/2023 | Thành tiền |  |  |  |  |  |  |
| 610 | 1 | 029375558497 | 2023-09-01 | 20759.63 |  |  |  |  |  |  |  |  |
| 611 |  | Discount (3%) |  | `=round(D610*3%,2)` |  |  |  |  |  |  |  |  |
| 612 |  | Tổng cộng |  | `=D610-D611` |  |  |  |  |  |  |  |  |
| 613 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D612*0.09,2)` |  |  |  |  |  |  |  |  |
| 614 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D612+D613,2)` | 24545 | `=D614*E614` |  |  |  |  |  |  |
| 617 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 619 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 09/11/2023 | Thành tiền |  |  |  |  |  |  |
| 620 | 1 | 029375558497 | 2023-10-01 | 22725.01 |  |  |  |  |  |  |  |  |
| 621 |  | Discount (3%) |  | `=round(D620*3%,2)` |  |  |  |  |  |  |  |  |
| 622 |  | Tổng cộng |  | `=D620-D621` |  |  |  |  |  |  |  |  |
| 623 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D622*0.09,2)` |  |  |  |  |  |  |  |  |
| 624 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D622+D623,2)` | 24555 | `=D624*E624` |  |  |  |  |  |  |
| 628 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 630 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 07/12/2023 | Thành tiền |  |  |  |  |  |  |
| 631 | 1 | 029375558497 | 2023-11-01 | 21725.91 |  |  |  |  |  |  |  |  |
| 632 |  | Discount (3%) |  | `=round(D631*3%,2)` |  |  |  |  |  |  |  |  |
| 633 |  | Tổng cộng |  | `=D631-D632` |  |  |  |  |  |  |  |  |
| 634 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D633*0.09,2)` |  |  |  |  |  |  |  |  |
| 635 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D633+D634,2)` | 24430 | `=D635*E635` |  |  |  |  |  |  |
| 638 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 640 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 05/01/2024 | Thành tiền |  |  |  |  |  |  |
| 641 | 1 | 029375558497 | 2023-12-01 | 22734.12 |  |  |  |  |  |  |  |  |
| 642 |  | Discount (3%) |  | `=round(D641*3%,2)` |  |  |  |  |  |  |  |  |
| 643 |  | Tổng cộng |  | `=D641-D642` |  |  |  |  |  |  |  |  |
| 644 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D643*0.09,2)` |  |  |  |  |  |  |  |  |
| 645 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D643+D644,2)` | 24510 | `=D645*E645` |  |  |  |  |  |  |
| 649 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 651 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 16/02/2024 | Thành tiền |  |  |  |  |  |  |
| 652 | 1 | 029375558497 | 2024-01-01 | 24737.32 |  |  |  |  |  |  |  |  |
| 653 |  | Discount (3%) |  | `=round(D652*3%,2)` |  |  |  |  |  |  |  |  |
| 654 |  | Tổng cộng |  | `=D652-D653` |  |  |  |  |  |  |  |  |
| 655 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D654*0.09,2)` |  |  |  |  |  |  |  |  |
| 656 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D654+D655,2)` | 24680 | `=D656*E656` |  |  |  |  |  |  |
| 659 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 661 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 08/03/2024 | Thành tiền |  |  |  |  |  |  |
| 662 | 1 | 029375558497 | 2024-02-01 | 21155.42 |  |  |  |  |  |  |  |  |
| 663 |  | Discount (3%) |  | `=round(D662*3%,2)` |  |  |  |  |  |  |  |  |
| 664 |  | Tổng cộng |  | `=D662-D663` |  |  |  |  |  |  |  |  |
| 665 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D664*0.09,2)` |  |  |  |  |  |  |  |  |
| 666 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D664+D665,2)` | 24840 | `=D666*E666` |  |  |  |  |  |  |
| 670 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 672 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 05/04/2024 | Thành tiền |  |  |  |  |  |  |
| 673 | 1 | 029375558497 | 2024-03-01 | 23551.39 |  |  |  |  |  |  |  |  |
| 674 |  | Discount (3%) |  | `=round(D673*3%,2)` |  |  |  |  |  |  |  |  |
| 675 |  | Tổng cộng |  | `=D673-D674` |  |  |  |  |  |  |  |  |
| 676 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D675*0.09,2)` |  |  |  |  |  |  |  |  |
| 677 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D675+D676,2)` | 25120 | `=D677*E677` |  |  |  |  |  |  |
| 681 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 683 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 09/05/2024 | Thành tiền |  |  |  |  |  |  |
| 684 | 1 | 029375558497 | 2024-04-01 | 24447.35 |  |  |  |  |  |  |  |  |
| 685 |  | Discount (3%) |  | `=round(D684*3%,2)` |  |  |  |  |  |  |  |  |
| 686 |  | Tổng cộng |  | `=D684-D685` |  |  |  |  |  |  |  |  |
| 687 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D686*0.09,2)` |  |  |  |  |  |  |  |  |
| 688 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D686+D687,2)` | 25478 | `=D688*E688` |  |  |  |  |  |  |
| 692 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 694 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 10/06/2024 | Thành tiền |  |  |  |  |  |  |
| 695 | 1 | 029375558497 | 2024-05-01 | 23431.78 |  |  |  |  |  |  |  |  |
| 696 |  | Discount (3%) |  | `=round(D695*3%,2)` |  |  |  |  |  |  |  |  |
| 697 |  | Tổng cộng |  | `=D695-D696` |  |  |  |  |  |  |  |  |
| 698 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D697*0.09,2)` |  |  |  |  |  |  |  |  |
| 699 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D697+D698,2)` | 25454 | `=D699*E699` |  |  |  |  |  |  |
| 703 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 705 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 25/09/2024 | Thành tiền |  |  |  |  |  |  |
| 706 | 1 | 029375558497 | 2024-06-01 | 19958.12 |  |  |  |  |  |  |  |  |
| 707 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D706*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 708 | Chiết khấu (5%) |  |  | `=round(D706*5%,2)` |  |  |  |  |  |  |  |  |
| 709 | Thành tiền |  |  | `=D707-D708` | 24750 | `=D709*E709` |  |  |  |  |  |  |
| 710 | Thuế GTGT (10%) |  |  |  |  | `=round(F709*10%,0)` |  |  |  |  |  |  |
| 711 | Tổng số tiền phải thanh toán |  |  |  |  | `=F709+F710` |  |  |  |  |  |  |
| 715 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 717 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 25/09/2024 | Thành tiền |  |  |  |  |  |  |
| 718 | 1 | 029375558497 | 2024-07-01 | 14158.18 |  |  |  |  |  |  |  |  |
| 719 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D718*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 720 | Chiết khấu (5%) |  |  | `=round(D718*5%,2)` |  |  |  |  |  |  |  |  |
| 721 | Thành tiền |  |  | `=D719-D720` | 24750 | `=D721*E721` |  |  |  |  |  |  |
| 722 | Thuế GTGT (10%) |  |  |  |  | `=round(F721*10%,0)` |  |  |  |  |  |  |
| 723 | Tổng số tiền phải thanh toán |  |  |  |  | `=F721+F722` |  |  |  |  |  |  |
| 727 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 729 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 25/09/2024 | Thành tiền |  |  |  |  |  |  |
| 730 | 1 | 029375558497 | 2024-08-01 | 11534.63 |  |  |  |  |  |  |  |  |
| 731 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D730*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 732 | Chiết khấu (5%) |  |  | `=round(D730*5%,2)` |  |  |  |  |  |  |  |  |
| 733 | Thành tiền |  |  | `=D731-D732` | 24750 | `=D733*E733` |  |  |  |  |  |  |
| 734 | Thuế GTGT (10%) |  |  |  |  | `=round(F733*10%,0)` |  |  |  |  |  |  |
| 735 | Tổng số tiền phải thanh toán |  |  |  |  | `=F733+F734` |  |  |  |  |  |  |
| 739 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 741 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 16/10/2024 | Thành tiền |  |  |  |  |  |  |
| 742 | 1 | 029375558497 | 2024-09-01 | 8762.23 |  |  |  |  |  |  |  |  |
| 743 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D742*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 744 | Chiết khấu (5%) |  |  | `=round(D742*5%,2)` |  |  |  |  |  |  |  |  |
| 745 | Thành tiền |  |  | `=D743-D744` | 25140 | `=D745*E745` |  |  |  |  |  |  |
| 746 | Thuế GTGT (10%) |  |  |  |  | `=round(F745*10%,0)` |  |  |  |  |  |  |
| 747 | Tổng số tiền phải thanh toán |  |  |  |  | `=F745+F746` |  |  |  |  |  |  |
| 751 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 753 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 12/11/2024 | Thành tiền |  |  |  |  |  |  |
| 754 | 1 | 029375558497 | 2024-10-01 | 10012.47 |  |  |  |  |  |  |  |  |
| 755 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D754*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 756 | Chiết khấu (5%) |  |  | `=round(D754*5%,2)` |  |  |  |  |  |  |  |  |
| 757 | Thành tiền |  |  | `=D755-D756` | 25480 | `=D757*E757` |  |  |  |  |  |  |
| 758 | Thuế GTGT (10%) |  |  |  |  | `=round(F757*10%,1)` |  |  |  |  |  |  |
| 759 | Tổng số tiền phải thanh toán |  |  |  |  | `=255781235+25578124` |  |  |  |  |  |  |
| 763 | TỔNG HỢP CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 765 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 11/12/2024 | Thành tiền |  |  |  |  |  |  |
| 766 | 1 | 029375558497 | 2024-11-01 | 10065.81 |  |  |  |  |  |  |  |  |
| 767 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D766*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 768 | Chiết khấu (5%) |  |  | `=round(D766*5%,2)` |  |  |  |  |  |  |  |  |
| 769 | Thành tiền |  |  | `=D767-D768` | 25465 | `=D769*E769` |  |  |  |  |  |  |
| 770 | Thuế GTGT (10%) |  |  |  |  | `=round(F769*10%,1)` |  |  |  |  |  |  |
| 771 | Tổng số tiền phải thanh toán |  |  |  |  | `=F769+F770` |  |  |  |  |  |  |
| 775 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 777 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 06/01/2025 | Thành tiền |  |  |  |  |  |  |
| 778 | 1 | 029375558497 | 2024-12-01 | 8345.65 |  |  |  |  |  |  |  |  |
| 779 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D778*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 780 | Chiết khấu (5%) |  |  | `=round(D778*5%,2)` |  |  |  |  |  |  |  |  |
| 781 | Thành tiền |  |  | `=D779-D780` | 25553 | `=D781*E781` |  |  |  |  |  |  |
| 782 | Thuế GTGT (10%) |  |  |  |  | `=round(F781*10%,1)` |  |  |  |  |  |  |
| 783 | Tổng số tiền phải thanh toán |  |  |  |  | `=F781+F782` |  |  |  |  |  |  |
| 787 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 789 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 07/02/2025 | Thành tiền |  |  |  |  |  |  |
| 790 | 1 | 029375558497 | 2025-01-01 | 8214.47 |  |  |  |  |  |  |  |  |
| 791 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D790*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 792 | Chiết khấu (5%) |  |  | `=round(D790*5%,2)` |  |  |  |  |  |  |  |  |
| 793 | Thành tiền |  |  | `=D791-D792` | 25510 | `=round(D793*E793,0)` |  |  |  |  |  |  |
| 794 | Thuế GTGT (10%) |  |  |  |  | `=round(F793*10%,0)` |  |  |  |  |  |  |
| 795 | Tổng số tiền phải thanh toán |  |  |  |  | `=F793+F794` |  |  |  |  |  |  |
| 799 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 801 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 10/03/2025 | Thành tiền |  |  |  |  |  |  |
| 802 | 1 | 029375558497 | 2025-02-01 | 6856.1 |  |  |  |  |  |  |  |  |
| 803 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D802*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 804 | Chiết khấu (5%) |  |  | `=round(D802*5%,2)` |  |  |  |  |  |  |  |  |
| 805 | Thành tiền |  |  | `=D803-D804` | 25690 | `=round(D805*E805,0)` |  |  |  |  |  |  |
| 806 | Thuế GTGT (10%) |  |  |  |  | `=round(F805*10%,0)` |  |  |  |  |  |  |
| 807 | Tổng số tiền phải thanh toán |  |  |  |  | `=F805+F806` |  |  |  |  |  |  |
| 811 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 813 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 08/04/2025 | Thành tiền |  |  |  |  |  |  |
| 814 | 1 | 029375558497 | 2025-03-01 | 7775.93 |  |  |  |  |  |  |  |  |
| 815 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D814*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 816 | Chiết khấu (5%) |  |  | `=round(D814*5%,2)` |  |  |  |  |  |  |  |  |
| 817 | Thành tiền |  |  | `=D815-D816` | 26140 | `=round(D817*E817,0)` |  |  |  |  |  |  |
| 818 | Thuế GTGT (10%) |  |  |  |  | `=round(F817*10%,0)` |  |  |  |  |  |  |
| 819 | Tổng số tiền phải thanh toán |  |  |  |  | `=F817+F818` |  |  |  |  |  |  |
| 823 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 825 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 12/05/2025 | Thành tiền |  |  |  |  |  |  |
| 826 | 1 | 029375558497 | 2025-04-01 | 7009.87 |  |  |  |  |  |  |  |  |
| 827 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D826*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 828 | Chiết khấu (5%) |  |  | `=round(D826*5%,2)` |  |  |  |  |  |  |  |  |
| 829 | Thành tiền |  |  | `=D827-D828` | 26150 | `=round(D829*E829,0)` |  |  |  |  |  |  |
| 830 | Thuế GTGT (10%) |  |  |  |  | `=round(F829*10%,0)` |  |  |  |  |  |  |
| 831 | Tổng số tiền phải thanh toán |  |  |  |  | `=F829+F830` |  |  |  |  |  |  |
| 835 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 837 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 10/06/2025 | Thành tiền |  |  |  |  |  |  |
| 838 | 1 | 029375558497 | 2025-05-01 | 7193.64 |  |  |  |  |  |  |  |  |
| 839 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D838*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 840 | Chiết khấu (5%) |  |  | `=round(D838*5%,2)` |  |  |  |  |  |  |  |  |
| 841 | Thành tiền |  |  | `=D839-D840` | 26220 | `=round(D841*E841,0)` |  |  |  |  |  |  |
| 842 | Thuế GTGT (10%) |  |  |  |  | `=round(F841*10%,0)` |  |  |  |  |  |  |
| 843 | Tổng số tiền phải thanh toán |  |  |  |  | `=F841+F842` |  |  |  |  |  |  |
| 847 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 849 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 07/07/2025 | Thành tiền |  |  |  |  |  |  |
| 850 | 1 | 029375558497 | 2025-06-01 | 6790.3 |  |  |  |  |  |  |  |  |
| 851 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D850*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 852 | Chiết khấu (5%) |  |  | `=round(D850*5%,2)` |  |  |  |  |  |  |  |  |
| 853 | Thành tiền |  |  | `=D851-D852` | 26330 | `=round(D853*E853,0)` |  |  |  |  |  |  |
| 854 | Thuế GTGT (10%) |  |  |  |  | `=round(F853*10%,0)` |  |  |  |  |  |  |
| 855 | Tổng số tiền phải thanh toán |  |  |  |  | `=F853+F854` |  |  |  |  |  |  |
| 859 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 861 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 04/08/2025 | Thành tiền |  |  |  |  |  |  |
| 862 | 1 | 029375558497 | 2025-07-01 | 6325.26 |  |  |  |  |  |  |  |  |
| 863 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D862*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 864 | Chiết khấu (5%) |  |  | `=round(D862*5%,2)` |  |  |  |  |  |  |  |  |
| 865 | Thành tiền |  |  | `=D863-D864` | 26370 | `=round(D865*E865,0)` |  |  |  |  |  |  |
| 866 | Thuế GTGT (10%) |  |  |  |  | `=round(F865*10%,0)` |  |  |  |  |  |  |
| 867 | Tổng số tiền phải thanh toán |  |  |  |  | `=F865+F866` |  |  |  |  |  |  |
| 871 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 873 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 05/09/2025 | Thành tiền |  |  |  |  |  |  |
| 874 | 1 | 029375558497 | 2025-08-01 | 6223.97 |  |  |  |  |  |  |  |  |
| 875 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D874*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 876 | Chiết khấu (5%) |  |  | `=round(D874*5%,2)` |  |  |  |  |  |  |  |  |
| 877 | Thành tiền |  |  | `=D875-D876` | 26510 | `=round(D877*E877,0)` |  |  |  |  |  |  |
| 878 | Thuế GTGT (10%) |  |  |  |  | `=round(F877*10%,0)` |  |  |  |  |  |  |
| 879 | Tổng số tiền phải thanh toán |  |  |  |  | `=F877+F878` |  |  |  |  |  |  |
| 884 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 886 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 03/10/2025 | Thành tiền |  |  |  |  |  |  |
| 887 | 1 | 029375558497 | 2025-09-01 | 5502.86 |  |  |  |  |  |  |  |  |
| 888 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D887*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 889 | Chiết khấu (5%) |  |  | `=round(D887*5%,2)` |  |  |  |  |  |  |  |  |
| 890 | Thành tiền |  |  | `=D888-D889` | 26420 | `=round(D890*E890,0)` |  |  |  |  |  |  |
| 891 | Thuế GTGT (10%) |  |  |  |  | `=round(F890*10%,0)` |  |  |  |  |  |  |
| 892 | Tổng số tiền phải thanh toán |  |  |  |  | `=F890+F891` |  |  |  |  |  |  |
| 897 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 899 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 07/11/2025 | Thành tiền |  |  |  |  |  |  |
| 900 | 1 | 029375558497 | 2025-10-01 | 5797.34 |  |  |  |  |  |  |  |  |
| 901 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D900*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 902 | Chiết khấu (5%) |  |  | `=round(D900*5%,2)` |  |  |  |  |  |  |  |  |
| 903 | Thành tiền |  |  | `=D901-D902` | 26358 | `=round(D903*E903,0)` |  |  |  |  |  |  |
| 904 | Thuế GTGT (10%) |  |  |  |  | `=round(F903*10%,0)` |  |  |  |  |  |  |
| 905 | Tổng số tiền phải thanh toán |  |  |  |  | `=F903+F904` |  |  |  |  |  |  |
| 910 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 912 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 04/12/2025 | Thành tiền |  |  |  |  |  |  |
| 913 | 1 | 029375558497 | 2025-11-01 | 5639.46 |  |  |  |  |  |  |  |  |
| 914 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D913*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 915 | Chiết khấu (5%) |  |  | `=round(D913*5%,2)` |  |  |  |  |  |  |  |  |
| 916 | Thành tiền |  |  | `=D914-D915` | 26409 | `=round(D916*E916,0)` |  |  |  |  |  |  |
| 917 | Thuế GTGT (10%) |  |  |  |  | `=round(F916*10%,0)` |  |  |  |  |  |  |
| 918 | Tổng số tiền phải thanh toán |  |  |  |  | `=F916+F917` |  |  |  |  |  |  |
| 924 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 926 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 06/01/2026 | Thành tiền |  |  |  |  |  |  |
| 927 | 1 | 029375558497 | 2025-12-01 | 5810.19 |  |  |  |  |  |  |  |  |
| 928 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D927*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 929 | Chiết khấu (5%) |  |  | `=round(D927*5%,2)` |  |  |  |  |  |  |  |  |
| 930 | Thành tiền |  |  | `=D928-D929` | 26378 | `=round(D930*E930,0)` |  |  |  |  |  |  |
| 931 | Thuế GTGT (10%) |  |  |  |  | `=round(F930*10%,0)` |  |  |  |  |  |  |
| 932 | Tổng số tiền phải thanh toán |  |  |  |  | `=F930+F931` |  |  |  |  |  |  |
| 937 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 939 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 05/02/2026 | Thành tiền |  |  |  |  |  |  |
| 940 | 1 | 029375558497 | 2026-01-01 | 5809.22 |  |  |  |  |  |  |  |  |
| 941 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D940*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 942 | Chiết khấu (5%) |  |  | `=round(D940*5%,2)` |  |  |  |  |  |  |  |  |
| 943 | Thành tiền |  |  | `=D941-D942` | 26150 | `=round(D943*E943,0)` |  |  |  |  |  |  |
| 944 | Thuế GTGT (10%) |  |  |  |  | `=round(F943*10%,0)` |  |  |  |  |  |  |
| 945 | Tổng số tiền phải thanh toán |  |  |  |  | `=F943+F944` |  |  |  |  |  |  |
| 950 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 952 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 03/03/2026 | Thành tiền |  |  |  |  |  |  |
| 953 | 1 | 029375558497 | 2026-02-01 | 5259.05 |  |  |  |  |  |  |  |  |
| 954 | Giá trước chiết khấu (gồm 10% phí dịch vụ) |  |  | `=round(D953*(1+10%),2)` |  |  |  |  |  |  |  |  |
| 955 | Chiết khấu (5%) |  |  | `=round(D953*5%,2)` |  |  |  |  |  |  |  |  |
| 956 | Thành tiền |  |  | `=D954-D955` | 26298 | `=round(D956*E956,0)` |  |  |  |  |  |  |
| 957 | Thuế GTGT (10%) |  |  |  |  | `=round(F956*10%,0)` |  |  |  |  |  |  |
| 958 | Tổng số tiền phải thanh toán |  |  |  |  | `=F956+F957` |  |  |  |  |  |  |
| 964 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 966 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 05/05/2026 | Thành tiền |  |  |  |  |  |  |
| 967 | 1 | 029375558497 | 2026-04-01 | 5801.78 |  |  |  |  |  |  |  |  |
| 968 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D967*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 969 | Chiết khấu (5%) |  |  | `=round(D967*5%,2)` |  |  |  |  |  |  |  |  |
| 970 | Thành tiền |  |  | `=D968-D969` | 26366 | `=round(D970*E970,0)` |  |  |  |  |  |  |
| 971 | Thuế GTGT (10%) |  |  |  |  | `=round(F970*10%,0)` |  |  |  |  |  |  |
| 972 | Tổng số tiền phải thanh toán |  |  |  |  | `=F970+F971` |  |  |  |  |  |  |
| 978 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 980 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 10/06/2026 | Thành tiền |  |  |  |  |  |  |
| 981 | 1 | 029375558497 | 2026-05-01 | 4486.12 |  |  |  |  |  |  |  |  |
| 982 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D981*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 983 | Chiết khấu (5%) |  |  | `=round(D981*5%,2)` |  |  |  |  |  |  |  |  |
| 984 | Thành tiền |  |  | `=D982-D983` | 26410 | `=round(D984*E984,0)` |  |  |  |  |  |  |
| 985 | Thuế GTGT (10%) |  |  |  |  | `=round(F984*10%,0)` |  |  |  |  |  |  |
| 986 | Tổng số tiền phải thanh toán |  |  |  |  | `=F984+F985` |  |  |  |  |  |  |
| 992 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 994 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 03/07/2026 | Thành tiền |  |  |  |  |  |  |
| 995 | 1 | 029375558497 | 2026-06-01 | 3653.72 |  |  |  |  |  |  |  |  |
| 996 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D995*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 997 | Chiết khấu (5%) |  |  | `=round(D995*5%,2)` |  |  |  |  |  |  |  |  |
| 998 | Thành tiền |  |  | `=D996-D997` | 26463 | `=round(D998*E998,0)` |  |  |  |  |  |  |
| 999 | Thuế GTGT (10%) |  |  |  |  | `=round(F998*10%,0)` |  |  |  |  |  |  |
| 1000 | Tổng số tiền phải thanh toán |  |  |  |  | `=F998+F999` |  |  |  |  |  |  |
| 1006 | ĐỐI SOÁT CHI PHÍ VNPAY |  |  |  |  |  |  |  |  |  |  |  |
| 1008 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá VCB ngày 13/08/2026 | Thành tiền |  |  |  |  |  |  |
| 1009 | 1 | 029375558497 | 2026-07-01 | 3061.11 |  |  |  |  |  |  |  |  |
| 1010 | Giá trước chiết khấu (gồm 5.88% phí dịch vụ) |  |  | `=round(D1009*(1+5.88%),2)` |  |  |  |  |  |  |  |  |
| 1011 | Chiết khấu (5%) |  |  | `=round(D1009*5%,2)` |  |  |  |  |  |  |  |  |
| 1012 | Thành tiền |  |  | `=D1010-D1011` | 26250 | `=round(D1012*E1012,0)` |  |  |  |  |  |  |
| 1013 | Thuế GTGT (10%) |  |  |  |  | `=round(F1012*10%,0)` |  |  |  |  |  |  |
| 1014 | Tổng số tiền phải thanh toán |  |  |  |  | `=F1012+F1013` |  |  |  |  |  |  |

> *Đã bỏ qua 378 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (528 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 61 | `D330` |
| D | `=D{r}+D{r}` | 34 | `D7` |
| D | `=ROUND(D{r}+D{r},2)` | 25 | `D451` |
| D | `=round(D{r}*5%,2)` | 25 | `D708` |
| D | `=D{r}*0.12` | 24 | `D6` |
| D | `=D{r}*3%` | 24 | `D329` |
| D | `=D{r}` | 23 | `D5` |
| D | `=round(D{r}*0.09,2)` | 19 | `D512` |
| D | `=D{r}*0.09` | 16 | `D343` |
| D | `=round(D{r}*(1+5.26%),2)` | 16 | `D707` |
| D | `=round(D{r}*3%,2)` | 12 | `D580` |
| D | `=round(D{r}*(1+10%),2)` | 8 | `D863` |
| D | `=round(D{r}*(1+5.88%),2)` | 1 | `D1010` |
| E | `=E{r}+E{r}` | 2 | `E7` |
| F | `=F{r}+F{r}` | 57 | `F7` |
| F | `=D{r}*E{r}` | 54 | `F4` |
| F | `=round(D{r}*E{r},0)` | 40 | `F318` |
| F | `=F{r}` | 24 | `F5` |
| F | `=F{r}*0.12` | 24 | `F6` |
| F | `=round(F{r}*10%,0)` | 22 | `F710` |
| F | `=F{r}*0.09` | 9 | `F355` |
| F | `=round(F{r}*10%,1)` | 3 | `F758` |
| F | `=-I{r}` | 1 | `F23` |
| F | `=F{r}+F{r}+F{r}` | 1 | `F26` |
| F | `=255781235+25578124` | 1 | `F759` |
| I | `=F{r}-D{r}*23280` | 1 | `I4` |
| L | `=sum(L{r}:L{r})` | 1 | `L7` |
