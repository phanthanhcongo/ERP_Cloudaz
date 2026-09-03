# SAPO

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `SAPO`  
> **Vùng dữ liệu:** 815 dòng × 13 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | M | O |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 4 | 1 | 243695135596 | 2019-07-01 | 1471.45 | 23290 | `=D4*E4` |  |  |  |  |  |  |  |
| 5 | 2 | 426419927377 | 2019-07-01 | 1260.63 | 23290 | `=D5*E5` |  |  |  |  |  |  |  |
| 6 |  | 328016580126 | 2019-07-01 | 442.39 | 23290 | `=D6*E6` |  |  |  |  |  |  |  |
| 7 |  | Tổng cộng |  | `=D4+D5+D6` |  | `=F4+F5+F6` |  |  |  |  |  |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D7*0.1` |  | `=F7*0.1` |  |  |  |  |  |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` |  | `=F7+F8` |  |  |  |  |  |  |  |
| 13 |  |  |  | Hà Nội, ngày 03 tháng 08 năm 2019 |  |  |  |  |  |  |  |  |  |
| 14 |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 18 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |  |
| 22 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 25 | 1 | 243695135596 | 2019-08-01 | 1332.33 | 23260 | `=D25*E25` |  |  |  |  |  |  |  |
| 26 | 2 | 426419927377 | 2019-08-02 | 1281.34 | 23260 | `=D26*E26` |  |  |  |  |  |  |  |
| 27 |  | 328016580126 | 2019-08-03 | 670.23 | 23260 | `=D27*E27` |  |  |  |  |  |  |  |
| 28 |  | Tổng cộng |  | `=D25+D26+D27` |  | `=F25+F26+F27` |  |  |  |  |  |  |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D28*0.1` |  | `=F28*0.1` |  |  |  |  |  |  |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` |  | `=F28+F29` |  |  |  |  |  |  |  |
| 34 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |  |  |  |
| 35 |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 39 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |  |
| 43 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 46 | 1 | 243695135596 | 2019-09-01 | 1386.44 | 23270 | `=D46*E46` |  |  |  |  |  |  |  |
| 47 | 2 | 426419927377 | 2019-09-02 | 1188.87 | 23270 | `=D47*E47` |  |  |  |  |  |  |  |
| 48 | 3 | 328016580126 | 2019-09-03 | 726.59 | 23270 | `=D48*E48` |  |  |  |  |  |  |  |
| 49 |  | Tổng cộng |  | `=D46+D47+D48` |  | `=F46+F47+F48` |  |  |  |  |  |  |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D49*0.1` |  | `=F49*0.1` |  |  |  |  |  |  |  |
| 51 |  | Tổng số tiền phải thanh toán |  | `=D49+D50` |  | `=F49+F50` |  |  |  |  |  |  |  |
| 53 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |  |  |  |  |  |
| 55 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 66 | 1 | 243695135596 | 2019-10-01 | 1121.03 | 23270 | `=D66*E66` |  |  |  |  |  |  |  |
| 67 | 2 | 426419927377 | 2019-10-02 | 1163.19 | 23270 | `=D67*E67` |  |  |  |  |  |  |  |
| 68 | 3 | 328016580126 | 2019-10-03 | 765.38 | 23270 | `=D68*E68` |  |  |  |  |  |  |  |
| 69 |  | Tổng cộng |  | `=D66+D67+D68` |  | `=F66+F67+F68` |  |  |  |  |  |  |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D69*0.1` |  | `=F69*0.1` |  |  |  |  |  |  |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=D69+D70` |  | `=F69+F70` |  |  |  |  |  |  |  |
| 73 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |  |  |  |  |
| 74 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |
| 78 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 82 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 85 | 1 | 243695135596 | 2019-11-01 | 1243.03 | 23270 | `=D85*E85` |  |  |  |  |  |  |  |
| 86 | 2 | 426419927377 | 2019-11-02 | 1300.3 | 23270 | `=D86*E86` |  |  |  |  |  |  |  |
| 87 | 3 | 328016580126 | 2019-11-03 | 744.35 | 23270 | `=D87*E87` |  |  |  |  |  |  |  |
| 88 |  | Tổng cộng |  | `=D85+D86+D87` |  | `=F85+F86+F87` |  |  |  |  |  |  |  |
| 89 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D88*0.1` |  | `=F88*0.1` |  |  |  |  |  |  |  |
| 90 |  | Tổng số tiền phải thanh toán |  | `=D88+D89` |  | `=F88+F89` |  |  |  |  |  |  |  |
| 92 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |  |  |  |  |
| 93 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |
| 97 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 101 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 103 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 104 | 1 | 243695135596 | 2019-12-01 | 1225.72 | 23270 | `=D104*E104` |  |  |  |  |  |  |  |
| 105 | 2 | 426419927377 | 2019-12-02 | 1125.05 | 23270 | `=D105*E105` |  |  |  |  |  |  |  |
| 106 | 3 | 328016580126 | 2019-12-03 | 811.56 | 23270 | `=D106*E106` |  |  |  |  |  |  |  |
| 107 |  | Tổng cộng |  | `=D104+D105+D106` |  | `=F104+F105+F106` |  |  |  |  |  |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D107*0.1` |  | `=F107*0.1` |  |  |  |  |  |  |  |
| 109 |  | Tổng số tiền phải thanh toán |  | `=D107+D108` |  | `=F107+F108` |  |  |  |  |  |  |  |
| 111 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |  |  |  |  |  |
| 112 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |
| 116 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 119 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 121 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 122 | 1 | 243695135596 | 2020-01-01 | 1221.86 | 23320 | `=D122*E122` |  |  |  |  |  |  |  |
| 123 | 2 | 426419927377 | 2020-01-02 | 1041.09 | 23320 | `=D123*E123` |  |  |  |  |  |  |  |
| 124 | 3 | 328016580126 | 2020-01-03 | 808.2 | 23320 | `=D124*E124` |  |  |  |  |  |  |  |
| 125 |  | Tổng cộng |  | `=D122+D123+D124` |  | `=F122+F123+F124` |  |  |  |  |  |  |  |
| 126 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D125*0.1` |  | `=F125*0.1` |  |  |  |  |  |  |  |
| 127 |  | Tổng số tiền phải thanh toán |  | `=D125+D126` |  | `=F125+F126` |  |  |  |  |  |  |  |
| 129 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |  |  |  |  |  |
| 130 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |
| 134 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 138 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 140 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 141 | 1 | 243695135596 | 2020-02-01 | 1118.57 | 23320 | `=D141*E141` |  |  |  |  |  |  |  |
| 142 | 2 | 426419927377 | 2020-02-02 | 1090.53 | 23320 | `=D142*E142` |  |  |  |  |  |  |  |
| 143 | 3 | 328016580126 | 2020-02-03 | 755.81 | 23320 | `=D143*E143` |  |  |  |  |  |  |  |
| 144 |  | Tổng cộng |  | `=D141+D142+D143` |  | `=F141+F142+F143` |  |  |  |  |  |  |  |
| 145 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D144*0.1` |  | `=F144*0.1` |  |  |  |  |  |  |  |
| 146 |  | Tổng số tiền phải thanh toán |  | `=D144+D145` |  | `=F144+F145` |  |  |  |  |  |  |  |
| 148 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |  |  |  |  |
| 149 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |
| 153 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 156 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 158 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 159 | 1 | 243695135596 | 2020-03-01 | 1117.19 | 23700 | `=D159*E159` |  |  |  |  |  |  |  |
| 160 | 2 | 426419927377 | 2020-03-02 | 1126.27 | 23700 | `=D160*E160` |  |  |  |  |  |  |  |
| 161 | 3 | 328016580126 | 2020-03-03 | 756.82 | 23700 | `=D161*E161` |  |  |  |  |  |  |  |
| 162 |  | Tổng cộng |  | `=D159+D160+D161` |  | `=F159+F160+F161` |  |  |  |  |  |  |  |
| 163 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D162*0.1` |  | `=F162*0.1` |  |  |  |  |  |  |  |
| 164 |  | Tổng số tiền phải thanh toán |  | `=D162+D163` |  | `=F162+F163` |  |  |  |  |  |  |  |
| 166 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |  |  |  |  |
| 167 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |
| 171 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 174 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 176 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 177 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-04-01 | 422.45 | 5000 | `=E177` | `=F180-E180` |  |  |  |  |  |
| 178 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-04-02 | 905.93 |  | `=E178` |  |  |  |  |  |  |
| 179 | 3 | 328016580126 | Sapo express | 2020-04-03 | 581.75 |  | `=E179` |  |  |  |  |  |  |
| 180 |  | Tổng |  |  | `=sum(E177:E179)` | `=F177` | `=sum(G177:G179)` | `=H177` |  |  |  |  |  |
| 181 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |  |  |  |  |
| 182 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |  |  |  |
| 184 |  |  |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |  |
| 185 |  |  |  |  |  | Người lập  |  |  |  |  |  |  |  |
| 189 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 192 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 194 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 195 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-05-01 | 628.3 | 3089.87 | `=E195` | `=F198-G198` |  |  |  |  |  |
| 196 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-05-02 | 982.31 |  | `=E196` |  |  |  |  |  |  |
| 197 | 3 | 328016580126 | Sapo express | 2020-05-03 | 464.21 |  | `=E197` |  |  |  |  |  |  |
| 198 |  | Tổng |  |  | `=sum(E195:E197)` | `=F195` | `=sum(G195:G197)` | `=H195` |  |  |  |  |  |
| 199 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |  |  |  |  |
| 200 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |  |  |  |
| 202 |  |  |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |  |
| 203 |  |  |  |  |  | Người lập  |  |  |  |  |  |  |  |
| 207 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 211 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 213 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) (Sử dụng trong kỳ) | Credit đầu kỳ | Còn lại phải thanh toán | Tỷ giá  | Thành tiền |  |  |  |  |
| 214 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-06-01 | 988.3 | 1015.05 | `=E217-F214` | 23290 | `=G214*H214` |  |  |  |  |
| 215 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-06-02 | 973.77 |  |  |  |  |  |  |  |  |
| 216 | 3 | 328016580126 | Sapo express | 2020-06-03 | 568.59 |  |  |  |  |  |  |  |  |
| 217 |  | Tổng |  |  | `=sum(E214:E216)` | `=F214` | `=sum(G214:G216)` | 23290 | `=I214` |  |  |  |  |
| 218 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=G217*0.1` | 23290 | `=I217*0.1` |  |  |  |  |
| 219 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=sum(G217:G218)` | 23290 | `=sum(I217:I218)` |  |  |  |  |
| 221 |  |  |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |  |
| 222 |  |  |  |  |  | Người lập  |  |  |  |  |  |  |  |
| 226 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 230 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 232 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) (Sử dụng trong kỳ) | Credit đầu kỳ | Còn lại phải thanh toán | Tỷ giá  | Thành tiền |  |  |  |  |
| 233 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-06-01 | 988.3 | 338.35 | `=E233-F233` | 23290 | `=G233*H233` | `=G233*H233*110%` |  |  |  |
| 234 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-06-02 | 973.77 | 338.35 | `=E234-F234` | 23290 | `=G234*H234` | `=G234*H234*110%` |  |  |  |
| 235 | 3 | 328016580126 | Sapo express | 2020-06-03 | 568.59 | 338.35 | `=E235-F235` | 23290 | `=G235*H235` | `=G235*H235*110%` |  |  |  |
| 236 |  | Tổng |  |  | `=sum(E233:E235)` | `=sum(F233:F235)` | `=sum(G233:G235)` | 23290 | `=sum(I233:I235)` |  |  |  |  |
| 237 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=G236*0.1` | 23290 | `=I236*0.1` |  |  |  |  |
| 238 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=sum(G236:G237)` | 23290 | `=sum(I236:I237)` | `=J233+J234+J235` |  |  |  |
| 240 |  |  |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |  |
| 241 |  |  |  |  |  | Người lập  |  |  |  |  |  |  |  |
| 245 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 248 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 250 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) (Sử dụng trong kỳ) | Credit đầu kỳ | Còn lại phải thanh toán | Tỷ giá  | Thành tiền |  |  |  |  |
| 251 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-07-01 | 901.07 |  | `=E251-F251` | 23265 | `=G251*H251` |  |  |  |  |
| 252 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-07-02 | 1398.76 | 300 | `=E252-F252` | 23265 | `=G252*H252` |  |  |  |  |
| 253 | 3 | 328016580126 | Sapo express | 2020-07-03 | 506.09 |  | `=E253-F253` | 23265 | `=G253*H253` |  |  |  |  |
| 254 |  | Tổng |  |  | `=sum(E251:E253)` | `=F251` | `=sum(G251:G253)` | 23265 | `=sum(I251:I253)` |  |  |  |  |
| 255 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=G254*0.1` | 23265 | `=I254*0.1` |  |  |  |  |
| 256 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=sum(G254:G255)` | 23265 | `=sum(I254:I255)` |  |  |  |  |
| 258 |  |  |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |  |  |
| 259 |  |  |  |  |  | Người lập  |  |  |  |  |  |  |  |
| 263 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |
| 267 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 269 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) (Sử dụng trong kỳ) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang kỳ sau | Tỷ giá  | Thành tiền |  |  |  |  |
| 270 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-08-01 | 1133.97 |  |  | 23270 | `=E270*H270` |  |  |  |  |
| 271 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-08-02 | 1628.44 | 5000 | `=F271-E271` |  | 0 |  |  |  |  |
| 272 | 3 | 328016580126 | Sapo express | 2020-08-03 | 625.84 |  |  | 23270 | `=E272*H272` |  |  |  |  |
| 273 |  | Tổng |  |  | `=E270+E272` | `=F270` | `=sum(G270:G272)` | 23270 | `=E273*H273` |  |  |  |  |
| 274 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=E273*0.1` |  |  | 23270 | `=I273*0.1` |  |  |  |  |
| 275 |  | Tổng số tiền phải thanh toán |  |  | `=sum(E273:E274)` |  |  | 23270 | `=sum(I273:I274)` |  |  |  |  |
| 279 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 281 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) (Sử dụng trong kỳ) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang kỳ sau | Tỷ giá  | Thành tiền |  |  |  |  |
| 282 | 1 | 243695135596 | Khoi Minh Nguyen | 2020-09-01 | 1212.56 | 3371.56 | `=F282-E285` | 23280 | `=-G282*H282` | `=1.59*H285` |  |  |  |
| 283 | 2 | 426419927377 | Minh Khoi Nguyen | 2020-09-02 | 1556.07 |  |  |  |  | `=1.59*H286` |  |  |  |
| 284 | 3 | 328016580126 | Sapo express | 2020-09-03 | 607.28 |  |  |  |  | `=I287-sum(J282:J283)` |  |  |  |
| 285 |  | Tổng |  |  | `=sum(E282:E284)` | `=F282` | `=sum(G282:G284)` | 23280 | `=I282` |  |  |  |  |
| 286 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=-G285*0.1` | 23280 | `=I285*0.1` |  |  |  |  |
| 287 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=-G285+G286` | 23280 | `=sum(I285:I286)` |  |  |  |  |
| 291 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 293 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 294 | 1 | 243695135596 | 2020-10-01 | 1324.16 | 23270 | `=D294*E294` |  |  |  |  |  |  |  |
| 295 | 2 | 426419927377 | 2020-10-02 | 1557.21 | 23270 | `=D295*E295` |  |  |  |  |  |  |  |
| 296 | 3 | 328016580126 | 2020-10-03 | 620.3 | 23270 | `=D296*E296` |  |  |  |  |  |  |  |
| 297 |  | Tổng cộng |  | `=D294+D295+D296` |  | `=F294+F295+F296` |  |  |  |  |  |  |  |
| 298 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D297*0.1` |  | `=F297*0.1` |  |  |  |  |  |  |  |
| 299 |  | Tổng số tiền phải thanh toán |  | `=D297+D298` |  | `=F297+F298` |  |  |  |  |  |  |  |
| 303 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 305 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 306 | 1 | 494792007816 | 2021-11-01 | `=9793.97+690.99` | 22800 | `=round(D306*E306,0)` |  |  |  |  |  |  |  |
| 307 |  | Discount (3%) |  | `=D306*3%` |  |  |  |  |  |  |  |  |  |
| 308 |  | Tổng cộng |  | `=D306-D307` | 22800 | `=round(D308*E308,0)` |  |  |  |  |  |  |  |
| 309 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D308*6.5%` |  | `=F308*6.5%` |  |  |  |  |  |  |  |
| 310 |  | Tổng số tiền phải thanh toán |  | `=D308+D309` | 22800 | `=F308+F309` | 246957924.375 |  |  |  |  |  |  |
| 314 |  | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |
| 316 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 317 | 1 | 494792007816 | 2021-12-01 | 10208.51 | 22920 | `=round(D317*E317,0)` |  |  |  |  |  |  |  |
| 318 |  | Discount (3%) |  | `=D317*3%` |  |  |  |  |  |  |  |  |  |
| 319 |  | Tổng cộng |  | `=D317-D318` | 22920 | `=round(D319*E319,0)` |  |  |  |  |  |  |  |
| 320 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D319*6.5%` |  | `=F319*6.5%` |  |  |  |  |  |  |  |
| 321 |  | Tổng số tiền phải thanh toán |  | `=D319+D320` | 22920 | `=F319+F320` | 241712057.0699999928 |  |  |  |  |  |  |
| 324 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 326 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 327 | 1 | 494792007816 | 2022-01-01 | `=7961.94+623.7` | 22780 | `=round(D327*E327,0)` |  |  |  |  |  |  |  |
| 328 |  | Discount (3%) |  | `=D327*3%` |  |  |  |  |  |  |  |  |  |
| 329 |  | Tổng cộng |  | `=D327-D328` | 22780 | `=round(D329*E329,0)` |  |  |  |  |  |  |  |
| 330 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D329*6.5%` |  | `=F329*6.5%` |  |  |  |  |  |  |  |
| 331 |  | Tổng số tiền phải thanh toán |  | `=D329+D330` | 22780 | `=F329+F330` | 202044827.4449999928 |  |  |  |  |  |  |
| 334 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 336 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 337 | 1 | 494792007816 | 2022-02-01 | 9541.71 | 22950 | `=round(D337*E337,0)` |  |  |  |  |  |  |  |
| 338 |  | Discount (3%) |  | `=D337*3%` |  |  |  |  |  |  |  |  |  |
| 339 |  | Tổng cộng |  | `=D337-D338` | 22950 | `=round(D339*E339,0)` |  |  |  |  |  |  |  |
| 340 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D339*6.5%` |  | `=F339*6.5%` |  |  |  |  |  |  |  |
| 341 |  | Tổng số tiền phải thanh toán |  | `=D339+D340` | 22950 | `=F339+F340` | 226219607.5049999952 |  |  |  |  |  |  |
| 345 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 347 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 348 | 1 | 494792007816 | 2022-03-01 | 10251.28 | 22980 | `=round(D348*E348,0)` |  |  |  |  |  |  |  |
| 349 |  | Discount (3%) |  | `=D348*3%` |  |  |  |  |  |  |  |  |  |
| 350 |  | Tổng cộng |  | `=D348-D349` | 22980 | `=round(D350*E350,0)` |  |  |  |  |  |  |  |
| 351 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D350*6.5%` |  | `=F350*6.5%` |  |  |  |  |  |  |  |
| 352 |  | Tổng số tiền phải thanh toán |  | `=D350+D351` | 22980 | `=F350+F351` | 243360148.8300000131 |  |  |  |  |  |  |
| 355 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 357 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 358 | 1 | 494792007816 | 2022-04-01 | 10216.44 | 23095 | `=round(D358*E358,0)` |  |  |  |  |  |  |  |
| 359 |  | Discount (3%) |  | `=D358*3%` |  |  |  |  |  |  |  |  |  |
| 360 |  | Tổng cộng |  | `=D358-D359` | 23095 | `=round(D360*E360,0)` |  |  |  |  |  |  |  |
| 361 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D360*6.5%` |  | `=F360*6.5%` |  |  |  |  |  |  |  |
| 362 |  | Tổng số tiền phải thanh toán |  | `=D360+D361` | 23095 | `=F360+F361` | 243746785.3650000095 |  |  |  |  |  |  |
| 365 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 367 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 368 | 1 | 494792007816 | 2022-05-01 | 10760.43 |  |  |  |  |  |  |  |  |  |
| 369 |  | Discount (3%) |  | `=D368*3%` |  |  |  |  |  |  |  |  |  |
| 370 |  | Tổng cộng |  | `=D368-D369` |  |  |  |  |  |  |  |  |  |
| 371 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D370*6.5%` |  |  |  |  |  |  |  |  |  |
| 372 |  | Tổng số tiền phải thanh toán |  | `=round(D370+D371,2)` | 23330 | `=D372*E372` | 259337679.7999999821 |  |  |  |  |  |  |
| 375 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 377 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 378 | 1 | 494792007816 | 2022-06-01 | 10707.51 |  |  |  |  |  |  |  |  |  |
| 379 |  | Discount (3%) |  | `=D378*3%` |  |  |  |  |  |  |  |  |  |
| 380 |  | Tổng cộng |  | `=D378-D379` |  |  |  |  |  |  |  |  |  |
| 381 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D380*6.5%` |  |  |  |  |  |  |  |  |  |
| 382 |  | Tổng số tiền phải thanh toán |  | `=round(D380+D381,2)` | 23415 | `=D382*E382` | 259002446.849999994 |  |  |  |  |  |  |
| 384 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 386 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 387 | 1 | 494792007816 | 2022-07-01 | 11313.56 |  |  |  |  |  |  |  |  |  |
| 388 |  | Discount (3%) |  | `=D387*3%` |  |  |  |  |  |  |  |  |  |
| 389 |  | Tổng cộng |  | `=D387-D388` |  |  |  |  |  |  |  |  |  |
| 390 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D389*6.5%` |  |  |  |  |  |  |  |  |  |
| 391 |  | Tổng số tiền phải thanh toán |  | `=round(D389+D390,2)` | 23480 | `=D391*E391` |  |  |  |  |  |  |  |
| 395 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 397 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 398 | 1 | 494792007816 | 2022-08-01 | 11895.15 |  |  |  |  |  |  |  |  |  |
| 399 |  | Discount (3%) |  | `=D398*3%` |  |  |  |  |  |  |  |  |  |
| 400 |  | Tổng cộng |  | `=D398-D399` |  |  |  |  |  |  |  |  |  |
| 401 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D400*6.5%` |  |  |  |  |  |  |  |  |  |
| 402 |  | Tổng số tiền phải thanh toán |  | `=round(D400+D401,2)` | 23600 | `=D402*E402` |  |  |  |  |  |  |  |
| 403 |  |  |  |  | . |  |  |  |  |  |  |  |  |
| 405 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 407 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 408 | 1 | 494792007816 | 2022-09-01 | 13700.53 |  |  |  |  |  |  |  |  |  |
| 409 |  | Discount (3%) |  | `=D408*3%` |  |  |  |  |  |  |  |  |  |
| 410 |  | Tổng cộng |  | `=D408-D409` |  |  |  |  |  |  |  |  |  |
| 411 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D410*6.5%` |  |  |  |  |  |  |  |  |  |
| 412 |  | Tổng số tiền phải thanh toán |  | `=round(D410+D411,2)` | 24010 | `=D412*E412` |  |  |  |  |  |  |  |
| 415 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 417 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 418 | 1 | 494792007816 | 2022-10-01 | 7126.16 |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 2022-10-01 | 2664.05 |  |  |
| 419 |  | Discount (3%) |  | `=D418*3%` |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 2022-10-01 | 2248.38 |  |  |
| 420 |  | Tổng cộng |  | `=D418-D419` |  |  |  | 3 | sapo express (328016580126) | 2022-10-01 | 1712.99 |  |  |
| 421 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D420*6.5%` |  |  |  | 4 | SAPO Product 365 (555342002397) | 2022-10-01 | 500.74 |  |  |
| 422 |  | Tổng số tiền phải thanh toán |  | `=round(D420+D421,2)` | 24877 | `=D422*E422` |  | 5 | SapoJSC (494792007816) | 2022-10-01 | 0 |  |  |
| 423 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K418:K422)` |  |  |
| 426 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 428 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 429 | 1 | 494792007816 | 2022-11-01 | 8404.04 |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 2022-11-01 | 3983.74 |  |  |
| 430 |  | Discount (3%) |  | `=D429*3%` |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 2022-11-01 | 3028.51 |  |  |
| 431 |  | Tổng cộng |  | `=D429-D430` |  |  |  | 3 | sapo express (328016580126) | 2022-11-01 | 973.73 |  |  |
| 432 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D431*6.5%` |  |  |  | 4 | SAPO Product 365 (555342002397) | 2022-11-01 | 418.06 |  |  |
| 433 |  | Tổng số tiền phải thanh toán |  | `=round(D431+D432,2)` | 23840 | `=D433*E433` |  | 5 | SapoJSC (494792007816) | 2022-11-01 | 0 |  |  |
| 434 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K429:K433)` |  |  |
| 437 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 439 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 440 | 1 | 494792007816 | 2022-12-01 | 7739.41 |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 2022-12-01 | 4295.49 |  |  |
| 441 |  | Discount (4%) |  | `=D440*4%` |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2686.91 |  |  |
| 442 |  | Tổng cộng |  | `=D440-D441` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 735.97 |  |  |
| 443 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D442*5%` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 21.04 |  |  |
| 444 |  | Tổng số tiền phải thanh toán |  | `=round(D442+D443,2)` | 23610 | `=D444*E444` |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 0 |  |  |
| 445 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K440:K444)` |  |  |
| 448 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 450 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 451 | 1 | 494792007816 | 2023-01-01 | 8214.2 |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-01-01 | 5504.13 |  |  |
| 452 |  | Discount (4%) |  | `=D451*4%` |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 1961.34 |  |  |
| 453 |  | Tổng cộng |  | `=D451-D452` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 734.84 |  |  |
| 454 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D453*5%` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.89 |  |  |
| 455 |  | Tổng số tiền phải thanh toán |  | `=round(D453+D454,2)` | 23770 | `=D455*E455` |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 0 |  |  |
| 456 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K451:K455)` |  |  |
| 459 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 461 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 462 | 1 | 494792007816 | 2023-02-01 | 6492.2 |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-02-01 | 3493.55 |  |  |
| 463 |  | Discount (4%) |  | `=D462*4%` |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2224.14 |  |  |
| 464 |  | Tổng cộng |  | `=D462-D463` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 757.19 |  |  |
| 465 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D464*5%` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 17.32 |  |  |
| 466 |  | Tổng số tiền phải thanh toán |  | `=round(D464+D465,2)` | 23890 | `=D466*E466` |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 0 |  |  |
| 467 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K462:K466)` |  |  |
| 470 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 471 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 472 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-03-01 | 3262.78 |  |  |
| 473 | 1 | 494792007816 | 2023-03-01 | 6658.85 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2597.25 |  |  |
| 474 |  | Discount (4%) |  | `=D473*4%` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 782.66 |  |  |
| 475 |  | Tổng cộng |  | `=D473-D474` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 16.16 |  |  |
| 476 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D475*5%` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 0 |  |  |
| 477 |  | Tổng số tiền phải thanh toán |  | `=round(D475+D476,2)` | 23620 | `=D477*E477` |  |  | Tổng cộng |  | `=Sum(K472:K476)` |  |  |
| 480 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 481 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 482 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-04-01 | 3898.43 |  | 3898.46 |
| 483 | 1 | 494792007816 | 2023-04-01 | 6963.87 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 1823.33 |  | 1823.32 |
| 484 |  | Discount (4%) |  | `=round(D483*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 775.79 |  | 775.8 |
| 485 |  | Tổng cộng |  | `=D483-D484` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 450 |  | 450 |
| 486 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D485*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 16.32 |  | 16.32 |
| 487 |  | Tổng số tiền phải thanh toán |  | `=round(D485+D486,2)` | 23625 | `=D487*E487` |  |  | Tổng cộng |  | `=Sum(K482:K486)` |  |  |
| 490 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 491 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 492 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-05-01 | 4535.58 |  |  |
| 493 | 1 | 494792007816 | 2023-05-01 | 7763.52 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 1978.82 |  |  |
| 494 |  | Discount (4%) |  | `=round(D493*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 784.79 |  |  |
| 495 |  | Tổng cộng |  | `=D493-D494` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 14.33 |  |  |
| 496 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D495*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 497 |  | Tổng số tiền phải thanh toán |  | `=round(D495+D496,2)` | 23660 | `=D497*E497` |  |  | Tổng cộng |  | `=Sum(K492:K496)` |  |  |
| 500 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 501 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 502 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-06-01 | 3653.54 |  |  |
| 503 | 1 | 494792007816 | 2023-06-01 | 6966.88 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2070.42 |  |  |
| 504 |  | Discount (4%) |  | `=round(D503*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 779.94 |  |  |
| 505 |  | Tổng cộng |  | `=D503-D504` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.98 |  |  |
| 506 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D505*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 507 |  | Tổng số tiền phải thanh toán |  | `=round(D505+D506,2)` | 23780 | `=D507*E507` |  |  | Tổng cộng |  | `=Sum(K502:K506)` |  |  |
| 510 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 511 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 512 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-07-01 | 4111.35 |  |  |
| 513 | 1 | 494792007816 | 2023-07-01 | 7589.99 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2217.18 |  |  |
| 514 |  | Discount (4%) |  | `=round(D513*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 797.68 |  |  |
| 515 |  | Tổng cộng |  | `=D513-D514` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.78 |  |  |
| 516 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D515*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 517 |  | Tổng số tiền phải thanh toán |  | `=round(D515+D516,2)` | 23910 | `=D517*E517` |  |  | Tổng cộng |  | `=Sum(K512:K516)` |  |  |
| 521 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 522 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 523 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-08-01 | 4311.59 |  |  |
| 524 | 1 | 494792007816 | 2023-08-01 | 7826.26 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2246.3 |  |  |
| 525 |  | Discount (4%) |  | `=round(D524*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 803.8 |  |  |
| 526 |  | Tổng cộng |  | `=D524-D525` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 14.57 |  |  |
| 527 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D526*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 528 |  | Tổng số tiền phải thanh toán |  | `=round(D526+D527,2)` | 24260 | `=D528*E528` |  |  | Tổng cộng |  | `=Sum(K523:K527)` |  |  |
| 531 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 532 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 533 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-09-01 | 4740.91 |  |  |
| 534 | 1 | 494792007816 | 2023-09-01 | 8279.8 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2250.96 |  |  |
| 535 |  | Discount (4%) |  | `=round(D534*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 824.33 |  |  |
| 536 |  | Tổng cộng |  | `=D534-D535` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.6 |  |  |
| 537 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D536*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 538 |  | Tổng số tiền phải thanh toán |  | `=round(D536+D537,2)` | 24570 | `=D538*E538` |  |  | Tổng cộng |  | `=Sum(K533:K537)` |  |  |
| 541 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 542 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 543 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-10-01 | 5080.03 |  |  |
| 544 | 1 | 494792007816 | 2023-10-01 | 8793.43 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2466.65 |  |  |
| 545 |  | Discount (4%) |  | `=round(D544*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 783.78 |  |  |
| 546 |  | Tổng cộng |  | `=D544-D545` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.96 |  |  |
| 547 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D546*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450.01 |  |  |
| 548 |  | Tổng số tiền phải thanh toán |  | `=round(D546+D547,2)` | 24530 | `=D548*E548` |  |  | Tổng cộng |  | `=Sum(K543:K547)` |  |  |
| 551 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 552 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 553 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 2023-11-01 | 4203.27 |  |  |
| 554 | 1 | 494792007816 | 2023-11-01 | 7805.12 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2508.32 |  |  |
| 555 |  | Discount (4%) |  | `=round(D554*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 630.4 |  |  |
| 556 |  | Tổng cộng |  | `=D554-D555` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.13 |  |  |
| 557 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D556*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 558 |  | Tổng số tiền phải thanh toán |  | `=round(D556+D557,2)` | 24450 | `=D558*E558` |  |  | Tổng cộng |  | `=Sum(K553:K557)` |  |  |
| 561 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 562 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 563 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 5214.96 |  |  |
| 564 | 1 | 494792007816 | 2023-12-01 | 8891.83 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2530.99 |  |  |
| 565 |  | Discount (4%) |  | `=round(D564*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 682.97 |  |  |
| 566 |  | Tổng cộng |  | `=D564-D565` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.91 |  |  |
| 567 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D566*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 568 |  | Tổng số tiền phải thanh toán |  | `=round(D566+D567,2)` | 24560 | `=D568*E568` |  |  | Tổng cộng |  | `=Sum(K563:K567)` |  |  |
| 571 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 572 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 573 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 4634.79 |  |  |
| 574 | 1 | 494792007816 | 2024-01-01 | 9068.61 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 3327.43 |  |  |
| 575 |  | Discount (4%) |  | `=round(D574*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 642.85 |  |  |
| 576 |  | Tổng cộng |  | `=D574-D575` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.54 |  |  |
| 577 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D576*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 578 |  | Tổng số tiền phải thanh toán |  | `=round(D576+D577,2)` | 24550 | `=D578*E578` |  |  | Tổng cộng |  | `=Sum(K573:K577)` |  |  |
| 582 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 583 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 584 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 7346.42 |  |  |
| 585 | 1 | 494792007816 | 2024-02-01 | 10641.67 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2190.06 |  |  |
| 586 |  | Discount (4%) |  | `=round(D585*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 643.54 |  |  |
| 587 |  | Tổng cộng |  | `=D585-D586` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 11.65 |  |  |
| 588 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D587*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 589 |  | Tổng số tiền phải thanh toán |  | `=round(D587+D588,2)` | 24870 | `=D589*E589` |  |  | Tổng cộng |  | `=Sum(K584:K588)` |  |  |
| 592 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 593 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 594 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6614.53 |  |  |
| 595 | 1 | 494792007816 | 2024-03-01 | 10320.84 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2601.47 |  |  |
| 596 |  | Discount (4%) |  | `=round(D595*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 644.15 |  |  |
| 597 |  | Tổng cộng |  | `=D595-D596` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 10.69 |  |  |
| 598 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D597*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 599 |  | Tổng số tiền phải thanh toán |  | `=round(D597+D598,2)` | 25130 | `=D599*E599` |  |  | Tổng cộng |  | `=Sum(K594:K598)` |  |  |
| 603 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 604 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 605 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 12283 |  |  |
| 606 | 1 | 494792007816 | 2024-04-01 | 16645.94 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2904.28 |  |  |
| 607 |  | Discount (4%) |  | `=round(D606*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 996.26 |  |  |
| 608 |  | Tổng cộng |  | `=D606-D607` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.4 |  |  |
| 609 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D608*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 450 |  |  |
| 610 |  | Tổng số tiền phải thanh toán |  | `=round(D608+D609,2)` | 25457 | `=D610*E610` |  |  | Tổng cộng |  | `=Sum(K605:K609)` |  |  |
| 614 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 615 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 616 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 8764.39 |  |  |
| 617 | 1 | 494792007816 | 2024-05-01 | 13331.61 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 3249.3 |  |  |
| 618 |  | Discount (4%) |  | `=round(D617*4%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 804.3 |  |  |
| 619 |  | Tổng cộng |  | `=D617-D618` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.62 |  |  |
| 620 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D619*5%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 621 |  | Tổng số tiền phải thanh toán |  | `=round(D619+D620,2)` | 25453 | `=D621*E621` |  |  | Tổng cộng |  | `=Sum(K616:K620)` |  |  |
| 625 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 626 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 627 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6129.23 |  |  |
| 628 | 1 | 494792007816 | 2024-06-01 | 10203.37 |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2825.3 |  |  |
| 629 |  | Phí dịch vụ (5%) |  | `=round(D628*5%,2)` |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 736.41 |  |  |
| 630 |  | Tổng cộng |  | `=D628+D629` |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.43 |  |  |
| 631 |  | Chiết khấu (4%) |  | `=round(D630*4%,2)` |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 632 | Thành tiền |  |  | `=D630-D631` | 25400 | `=D632*E632` |  |  | Tổng cộng |  | `=Sum(K627:K631)` |  |  |
| 633 | Thuế GTGT |  |  |  |  | `=round(F632*10%,0)` |  |  |  |  |  |  |  |
| 634 | Tổng số tiền phải thanh toán |  |  |  |  | `=F632+F633` |  |  |  |  |  |  |  |
| 638 | TỔNG HỢP CHI PHÍ SAPO |  |  |  |  |  |  |  |  |  |  |  |  |
| 639 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 640 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 5347.53 |  |  |
| 641 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 3080.37 |  |  |
| 642 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 734.22 |  |  |
| 643 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.81 |  |  |
| 644 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 645 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K640:K644)` |  |  |
| 652 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 653 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6641.25 |  |  |
| 654 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2856.14 |  |  |
| 655 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 739.41 |  |  |
| 656 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.89 |  |  |
| 657 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 658 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K653:K657)` |  |  |
| 665 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 666 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6815.11 |  |  |
| 667 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 2853.68 |  |  |
| 668 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 716.9 |  |  |
| 669 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 11.87 |  |  |
| 670 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 671 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K666:K670)` |  |  |
| 678 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 679 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6739.52 |  |  |
| 680 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 3185.31 |  |  |
| 681 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 741.87 |  |  |
| 682 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.34 |  |  |
| 683 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 684 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K679:K683)` |  |  |
| 691 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 692 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6394.69 |  |  |
| 693 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 3116.74 |  |  |
| 694 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 778.29 |  |  |
| 695 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 13.43 |  |  |
| 696 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 697 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K692:K696)` |  |  |
| 704 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 705 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6776.63 |  |  |
| 706 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 3889.22 |  |  |
| 707 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 769.58 |  |  |
| 708 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 12.67 |  |  |
| 709 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 710 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K705:K709)` |  |  |
| 718 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 719 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 8158.46 |  |  |
| 720 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 4765.86 |  |  |
| 721 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 759.17 |  |  |
| 722 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 10.58 |  |  |
| 723 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 724 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K719:K723)` |  |  |
| 731 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 732 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 7540.55 |  |  |
| 733 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 5170.98 |  |  |
| 734 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 673.26 |  |  |
| 735 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 11.73 |  |  |
| 736 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 500 |  |  |
| 737 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K732:K736)` |  |  |
| 744 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 745 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 6682.38 |  |  |
| 746 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 5412.04 |  |  |
| 747 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 855.95 |  |  |
| 748 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 8.76 |  |  |
| 749 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 700 |  |  |
| 750 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K745:K749)` |  |  |
| 757 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 758 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 12071.27 |  |  |
| 759 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 4739.07 |  |  |
| 760 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 744.68 |  |  |
| 761 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 680.92 |  |  |
| 762 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 700 |  |  |
| 763 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K758:K762)` |  |  |
| 770 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 771 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 13464.29 |  |  |
| 772 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 4779.29 |  |  |
| 773 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 743.18 |  |  |
| 774 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 1197.92 |  |  |
| 775 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 700 |  |  |
| 776 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K771:K775)` |  |  |
| 783 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 784 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 12128.8 |  |  |
| 785 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 5388.61 |  |  |
| 786 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 734.37 |  |  |
| 787 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 853.56 |  |  |
| 788 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 700 |  |  |
| 789 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K784:K788)` |  |  |
| 795 |  |  |  |  |  |  |  |  |  |  |  | ĐỐI SOÁT CHI PHÍ SAPO |  |
| 796 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 797 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 10650.47 |  |  |
| 798 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 5653.61 |  |  |
| 799 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 738.64 |  |  |
| 800 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 1122.04 |  |  |
| 801 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 700 |  |  |
| 802 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K797:K801)` |  |  |
| 809 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  |
| 810 |  |  |  |  |  |  |  | 1 | Khoi Nguyen Minh (243695135596) | 1970-01-01 07:00:00 | 13677.84 |  |  |
| 811 |  |  |  |  |  |  |  | 2 | Minh Khoi Nguyen (426419927377) | 1970-01-01 07:00:00 | 6655.86 |  |  |
| 812 |  |  |  |  |  |  |  | 3 | sapo express (328016580126) | 1970-01-01 07:00:00 | 737.77 |  |  |
| 813 |  |  |  |  |  |  |  | 4 | SAPO Product 365 (555342002397) | 1970-01-01 07:00:00 | 1457.26 |  |  |
| 814 |  |  |  |  |  |  |  | 5 | SapoJSC (494792007816) | 1970-01-01 07:00:00 | 700 |  |  |
| 815 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=Sum(K810:K814)` |  |  |

> *Đã bỏ qua 288 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (542 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 32 | `D308` |
| D | `=round(D{r}+D{r},2)` | 25 | `D372` |
| D | `=D{r}+D{r}` | 17 | `D9` |
| D | `=round(D{r}*4%,2)` | 15 | `D484` |
| D | `=round(D{r}*5%,2)` | 15 | `D486` |
| D | `=D{r}*3%` | 13 | `D307` |
| D | `=D{r}*6.5%` | 13 | `D309` |
| D | `=D{r}+D{r}+D{r}` | 10 | `D7` |
| D | `=D{r}*0.1` | 10 | `D8` |
| D | `=D{r}*4%` | 4 | `D441` |
| D | `=D{r}*5%` | 4 | `D443` |
| D | `=9793.97+690.99` | 1 | `D306` |
| D | `=7961.94+623.7` | 1 | `D327` |
| E | `=sum(E{r}:E{r})` | 7 | `E180` |
| E | `=E{r}+E{r}` | 1 | `E273` |
| E | `=E{r}*0.1` | 1 | `E274` |
| F | `=D{r}*E{r}` | 56 | `F4` |
| F | `=F{r}+F{r}` | 17 | `F9` |
| F | `=round(D{r}*E{r},0)` | 12 | `F306` |
| F | `=F{r}+F{r}+F{r}` | 10 | `F7` |
| F | `=F{r}*0.1` | 10 | `F8` |
| F | `=F{r}` | 6 | `F180` |
| F | `=F{r}*6.5%` | 6 | `F309` |
| F | `=sum(F{r}:F{r})` | 1 | `F236` |
| F | `=round(F{r}*10%,0)` | 1 | `F633` |
| G | `=sum(G{r}:G{r})` | 10 | `G180` |
| G | `=E{r}-F{r}` | 7 | `G214` |
| G | `=E{r}` | 6 | `G177` |
| G | `=G{r}*0.1` | 3 | `G218` |
| G | `=F{r}-E{r}` | 2 | `G271` |
| G | `=-G{r}*0.1` | 1 | `G286` |
| G | `=-G{r}+G{r}` | 1 | `G287` |
| H | `=H{r}` | 2 | `H180` |
| H | `=F{r}-E{r}` | 1 | `H177` |
| H | `=F{r}-G{r}` | 1 | `H195` |
| I | `=G{r}*H{r}` | 7 | `I214` |
| I | `=sum(I{r}:I{r})` | 7 | `I219` |
| I | `=I{r}*0.1` | 5 | `I218` |
| I | `=E{r}*H{r}` | 3 | `I270` |
| I | `=I{r}` | 2 | `I217` |
| I | `=-G{r}*H{r}` | 1 | `I282` |
| J | `=J{r}` | 132 | `J441` |
| J | `=C{r}` | 21 | `J563` |
| J | `=G{r}*H{r}*110%` | 3 | `J233` |
| J | `=1.59*H{r}` | 2 | `J282` |
| J | `=J{r}+J{r}+J{r}` | 1 | `J238` |
| J | `=I{r}-sum(J{r}:J{r})` | 1 | `J284` |
| K | `=Sum(K{r}:K{r})` | 35 | `K423` |
