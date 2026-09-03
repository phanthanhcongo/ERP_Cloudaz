# LADIPAGE

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `LADIPAGE`  
> **Vùng dữ liệu:** 402 dòng × 9 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I |
|---:|---|---|---|---|---|---|---|---|---|
| 7 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 9 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 10 | 1 | 516546176233 | 2020-02-01 | 3717.89 | 23320 | `=D10*E10` |  |  |  |
| 11 |  | Discount 4% |  | `=D10*4%` |  |  |  |  |  |
| 12 | Tổng cộng sau giảm giá |  |  | `=D10-D11` | 23320 | `=D12*E12` |  |  |  |
| 13 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D12*0.1` |  | `=F12*0.1` |  |  |  |
| 14 |  | Tổng số tiền phải thanh toán |  | `=sum(D12:D13)` |  | `=sum(F12:F13)` |  |  |  |
| 16 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |
| 17 |  |  |  | Người lập  |  |  |  |  |  |
| 21 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 24 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 27 | 1 | 516546176233 | 2020-03-01 | 9361.95 | 23700 | `=D27*E27` |  |  |  |
| 28 |  | Discount 4% |  | `=D27*4%` |  |  |  |  |  |
| 29 | Tổng cộng sau giảm giá |  |  | `=D27-D28` | 23700 | `=D29*E29` |  |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D29*0.1` |  | `=F29*0.1` |  |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=sum(D29:D30)` |  | `=sum(F29:F30)` |  |  |  |
| 33 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |
| 34 |  |  |  | Người lập  |  |  |  |  |  |
| 38 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 41 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 43 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 44 | 1 | 516546176233 | 2020-04-01 | 4287.76 | 23600 | `=D44*E44` |  |  |  |
| 45 |  | Discount 4% |  | `=D44*4%` |  |  |  |  |  |
| 46 | Tổng cộng sau giảm giá |  |  | `=D44-D45` | 23600 | `=D46*E46` |  |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D46*0.1` |  | `=F46*0.1` |  |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=sum(D46:D47)` |  | `=sum(F46:F47)` |  |  |  |
| 50 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |
| 51 |  |  |  | Người lập  |  |  |  |  |  |
| 55 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 58 | TỔNG HỢP CHI PHÍ LADIPAGE |  |  |  |  |  |  |  |  |
| 60 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |
| 61 | 1 | 516546176233 |  | 2020-04-01 | 9287.76 | 10000 | `=E61` | `=F62-E62` |  |
| 62 |  | Tổng |  |  | `=sum(E61)` | `=F61` | `=sum(G61)` | `=H61` |  |
| 63 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  | 0 |  |
| 64 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |
| 66 |  |  |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |
| 67 |  |  |  |  |  | Người lập  |  |  |  |
| 71 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |
| 74 |                 TỔNG HỢP CHI PHÍ LADIPAGE |  |  |  |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 77 | 1 | 516546176233 | Credits tồn đầu kỳ | 712.24 |  |  |  |  |  |
| 78 |  |  | 2020-05-01 | 7633.64 | 23350 | `=D78*E78` |  |  |  |
| 79 |  |  | Còn lại phải thanh toán | `=D78-D77` | 23350 | `=D79*E79` |  |  |  |
| 80 | Discount 4% |  |  | `=D79*4%` |  |  |  |  |  |
| 81 | Tổng cộng sau giảm giá |  |  | `=D79-D80` | 23350 | `=D81*E81` |  |  |  |
| 82 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D81*0.1` |  | `=F81*0.1` |  |  |  |
| 83 |  | Tổng số tiền phải thanh toán |  | `=sum(D81:D82)` |  | `=sum(F81:F82)` |  |  |  |
| 86 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |
| 87 |  |  |  | Người lập  |  |  |  |  |  |
| 91 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 93 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 95 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 96 | 1 | 516546176233 | 2020-06-01 | 8487.62 | 23290 | `=D96*E96` |  |  |  |
| 97 |  | Discount 4% |  | `=D96*4%` |  |  |  |  |  |
| 98 | Tổng cộng sau giảm giá |  |  | `=D96-D97` | 23290 | `=D98*E98` |  |  |  |
| 99 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D98*0.1` |  | `=F98*0.1` |  |  |  |
| 100 |  | Tổng số tiền phải thanh toán |  | `=sum(D98:D99)` |  | `=sum(F98:F99)` |  |  |  |
| 102 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |
| 103 |  |  |  | Người lập  |  |  |  |  |  |
| 107 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 110 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 112 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 113 | 1 | 516546176233 | 2020-07-01 | 9925.35 | 23265 | `=D113*E113` |  |  |  |
| 114 |  | Discount 4% |  | `=D113*4%` |  |  |  |  |  |
| 115 | Tổng cộng sau giảm giá |  |  | `=D113-D114` | 23265 | `=D115*E115` |  |  |  |
| 116 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D115*0.1` |  | `=F115*0.1` |  |  |  |
| 117 |  | Tổng số tiền phải thanh toán |  | `=sum(D115:D116)` |  | `=sum(F115:F116)` |  |  |  |
| 119 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |
| 120 |  |  |  | Người lập  |  |  |  |  |  |
| 124 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 127 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 130 | 1 | 516546176233 | 2020-08-01 | 14851.2 | 23270 | `=D130*E130` |  |  |  |
| 131 |  | Discount 4% |  | `=D130*4%` |  |  |  |  |  |
| 132 | Tổng cộng sau giảm giá |  |  | `=D130-D131` | 23270 | `=D132*E132` |  |  |  |
| 133 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D132*0.1` |  | `=F132*0.1` |  |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=sum(D132:D133)` |  | `=sum(F132:F133)` |  |  |  |
| 138 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 140 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 141 | 1 | 516546176233 | 2020-09-01 | 14011.44 | 23280 | `=D141*E141` |  |  |  |
| 142 |  | Discount 4% |  | `=D141*4%` |  |  |  |  |  |
| 143 | Tổng cộng sau giảm giá |  |  | `=D141-D142` | 23280 | `=D143*E143` |  |  |  |
| 144 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D143*0.1` |  | `=F143*0.1` |  |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=sum(D143:D144)` |  | `=sum(F143:F144)` |  |  |  |
| 149 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 152 | 1 | 516546176233 | 2020-10-01 | 10355.7 | 23270 | `=D152*E152` |  |  |  |
| 153 |  | Discount 4% |  | `=D152*4%` |  |  |  |  |  |
| 154 | Tổng cộng sau giảm giá |  |  | `=D152-D153` | 23270 | `=D154*E154` |  |  |  |
| 155 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D154*0.1` |  | `=F154*0.1` |  |  |  |
| 156 |  | Tổng số tiền phải thanh toán |  | `=sum(D154:D155)` |  | `=sum(F154:F155)` |  |  |  |
| 159 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 161 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 162 | 1 | 516546176233 | 2020-11-01 | 13491.1 | 23235 | `=D162*E162` |  |  |  |
| 163 |  | Discount 4% |  | 539.644 |  |  |  |  |  |
| 164 | Tổng cộng sau giảm giá |  |  | `=D162-D163` | 23235 | `=D164*E164` |  | `=round(D163,0)` | `=D162-D163` |
| 165 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D164*0.1` |  | `=F164*0.1` |  |  |  |
| 166 |  | Tổng số tiền phải thanh toán |  | `=sum(D164:D165)` |  | `=sum(F164:F165)` |  |  |  |
| 170 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 173 | 1 | 516546176233 | 2020-12-01 | 14325.32 | 23185 | `=D173*E173` |  |  |  |
| 174 |  | Discount 4% |  | `=D173*4%` |  |  |  |  |  |
| 175 | Tổng cộng sau giảm giá |  |  | `=D173-D174` | 23185 | `=D175*E175` |  |  |  |
| 176 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D175*0.1` |  | `=F175*0.1` |  |  |  |
| 177 |  | Tổng số tiền phải thanh toán |  | `=sum(D175:D176)` |  | `=sum(F175:F176)` |  |  |  |
| 180 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 182 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 183 | 1 | 516546176233 | 2021-01-01 | 14366.83 | 23145 | `=D183*E183` |  |  |  |
| 184 |  | Discount 4% |  | `=D183*4%` |  |  |  |  |  |
| 185 | Tổng cộng sau giảm giá |  |  | `=D183-D184` | 23145 | `=D185*E185` |  |  |  |
| 186 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D185*0.1` |  | `=F185*0.1` |  |  |  |
| 187 |  | Tổng số tiền phải thanh toán |  | `=sum(D185:D186)` |  | `=sum(F185:F186)` |  |  |  |
| 190 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 192 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 193 | 1 | 516546176233 | 2021-02-01 | 11945.44 | 23095 | `=D193*E193` |  |  |  |
| 194 |  | Discount 4% |  | `=D193*4%` |  |  |  |  |  |
| 195 | Tổng cộng sau giảm giá |  |  | `=D193-D194` | 23095 | `=D195*E195` |  |  |  |
| 196 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D195*0.1` |  | `=F195*0.1` |  |  |  |
| 197 |  | Tổng số tiền phải thanh toán |  | `=sum(D195:D196)` |  | `=sum(F195:F196)` |  |  |  |
| 200 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 202 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 203 | 1 | 516546176233 | 2021-03-01 | 14767.87 | 23165 | `=D203*E203` |  |  |  |
| 204 |  | Discount 4% |  | `=D203*4%` |  |  |  |  |  |
| 205 | Tổng cộng sau giảm giá |  |  | `=D203-D204` | 23165 | `=D205*E205` |  |  |  |
| 206 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D205*0.1` |  | `=F205*0.1` |  |  |  |
| 207 |  | Tổng số tiền phải thanh toán |  | `=sum(D205:D206)` |  | `=sum(F205:F206)` |  |  |  |
| 210 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 212 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 213 | 1 | 516546176233 | 2021-04-01 | 14361.61 | 23150 | `=D213*E213` |  |  |  |
| 214 |  | Discount 4% |  | `=D213*4%` |  |  |  |  |  |
| 215 | Tổng cộng sau giảm giá |  |  | `=D213-D214` | 23150 | `=D215*E215` |  |  |  |
| 216 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D215*0.1` |  | `=F215*0.1` |  |  |  |
| 217 |  | Tổng số tiền phải thanh toán |  | `=sum(D215:D216)` | 23150 | `=sum(F215:F216)` |  |  |  |
| 221 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 224 | 1 | 516546176233 | 2021-05-01 | 14704.95 | 23145 | `=round(D224*E224,0)` |  |  |  |
| 225 |  | Discount 4% |  | `=D224*4%` |  |  |  |  |  |
| 226 | Tổng cộng sau giảm giá |  |  | `=D224-D225` | 23145 | `=round(D226*E226,0)` |  |  |  |
| 227 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D226*0.1` |  | `=F226*0.1` |  |  |  |
| 228 |  | Tổng số tiền phải thanh toán |  | `=sum(D226:D227)` | 23145 | `=sum(F226:F227)` |  |  |  |
| 231 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 233 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 234 | 1 | 516546176233 | 2021-06-01 | 14399.77 | 23130 | `=round(D234*E234,0)` |  |  |  |
| 235 |  | Discount 4% |  | `=D234*4%` |  |  |  |  |  |
| 236 | Tổng cộng sau giảm giá |  |  | `=D234-D235` | 23130 | `=round(D236*E236,0)` |  |  |  |
| 237 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D236*0.1` |  | `=F236*0.1` |  |  |  |
| 238 |  | Tổng số tiền phải thanh toán |  | `=sum(D236:D237)` | 23130 | `=sum(F236:F237)` |  |  |  |
| 242 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 245 | 1 | 516546176233 | 2021-07-01 | 15291.67 | 23050 | `=round(D245*E245,0)` |  |  |  |
| 246 |  | Discount 4% |  | `=D245*4%` |  |  |  |  |  |
| 247 | Tổng cộng sau giảm giá |  |  | `=D245-D246` | 23050 | `=round(D247*E247,0)` |  |  |  |
| 248 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D247*0.1` |  | `=F247*0.1` |  |  |  |
| 249 |  | Tổng số tiền phải thanh toán |  | `=sum(D247:D248)` | 23050 | `=sum(F247:F248)` |  |  |  |
| 253 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 255 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 256 | 1 | 516546176233 | 2021-08-01 |  | 22880 | `=round(D256*E256,0)` |  |  |  |
| 257 |  | Discount 4% |  | `=D256*4%` |  |  |  |  |  |
| 258 | Tổng cộng sau giảm giá |  |  | `=D256-D257` | 22880 | `=round(D258*E258,0)` |  |  |  |
| 259 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D258*0.1` |  | `=F258*0.1` |  |  |  |
| 260 |  | Tổng số tiền phải thanh toán |  | `=sum(D258:D259)` | 22880 | `=sum(F258:F259)` |  |  |  |
| 264 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 266 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 267 | 1 | 516546176233 | 2022-02-01 | 11373.51 | 22950 | `=round(D267*E267,0)` |  |  |  |
| 268 |  | Discount 4% |  | `=D267*4%` |  |  |  |  |  |
| 269 | Tổng cộng sau giảm giá |  |  | `=D267-D268` | 22950 | `=round(D269*E269,0)` |  |  |  |
| 270 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D269*0.1` |  | `=F269*0.1` |  |  |  |
| 271 |  | Tổng số tiền phải thanh toán |  | `=sum(D269:D270)` | 22950 | `=sum(F269:F270)` | 275639289.1999999881 |  |  |
| 274 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 276 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 277 | 1 | 516546176233 | 2022-03-01 | 18390.29 | 22980 | `=round(D277*E277,0)` |  |  |  |
| 278 |  | Discount 4% |  | `=D277*4%` |  |  |  |  |  |
| 279 | Tổng cộng sau giảm giá |  |  | `=D277-D278` | 22980 | `=round(D279*E279,0)` |  |  |  |
| 280 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D279*0.1` |  | `=F279*0.1` |  |  |  |
| 281 |  | Tổng số tiền phải thanh toán |  | `=sum(D279:D280)` | 22980 | `=sum(F279:F280)` | 446274961 |  |  |
| 284 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 286 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 287 | 1 | 516546176233 | 2022-04-01 | 17271.17 | 23095 | `=round(D287*E287,0)` |  |  |  |
| 288 |  | Discount 4% |  | `=D287*4%` |  |  |  |  |  |
| 289 | Tổng cộng sau giảm giá |  |  | `=D287-D288` | 23095 | `=round(D289*E289,0)` |  |  |  |
| 290 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D289*0.05` |  | `=F289*0.05` |  |  |  |
| 291 |  | Tổng số tiền phải thanh toán |  | `=sum(D289:D290)` | 23095 | `=sum(F289:F290)` | 402068692.1999999881 |  |  |
| 294 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 296 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 297 | 1 | 516546176233 | 2022-05-01 | 18053.15 |  |  |  |  |  |
| 298 |  | Discount 4% |  | `=D297*4%` |  |  |  |  |  |
| 299 | Tổng cộng sau giảm giá |  |  | `=D297-D298` |  |  |  |  |  |
| 300 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D299*0.05` |  |  |  |  |  |
| 301 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D299:D300),2)` | 23330 | `=D301*E301` | 424549541.4000000358 |  |  |
| 304 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 306 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 307 | 1 | 516546176233 | 2022-06-01 | 18251.66 |  |  |  |  |  |
| 308 |  | Discount 4% |  | `=D307*4%` |  |  |  |  |  |
| 309 | Tổng cộng sau giảm giá |  |  | `=D307-D308` |  |  |  |  |  |
| 310 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D309*0.05` |  |  |  |  |  |
| 311 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D309:D310),2)` | 23415 | `=D311*E311` |  |  |  |
| 314 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 316 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 317 | 1 | 516546176233 | 2022-07-01 | 18363.65 |  |  |  |  |  |
| 318 |  | Discount 4% |  | `=D317*4%` |  |  |  |  |  |
| 319 | Tổng cộng sau giảm giá |  |  | `=D317-D318` |  |  |  |  |  |
| 320 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D319*0.05` |  |  |  |  |  |
| 321 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D319:D320),2)` | 23480 | `=D321*E321` |  |  |  |
| 324 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 326 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 327 | 1 | 516546176233 | 2022-08-01 | 19506.56 |  |  |  |  |  |
| 328 |  | Discount 4% |  | `=D327*4%` |  |  |  |  |  |
| 329 | Tổng cộng sau giảm giá |  |  | `=D327-D328` |  |  |  |  |  |
| 330 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D329*0.05` |  |  |  |  |  |
| 331 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D329:D330),2)` | 23600 | `=D331*E331` |  |  |  |
| 334 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 336 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 337 | 1 | 516546176233 | 2022-09-01 | 20209.69 |  |  |  |  |  |
| 338 |  | Discount 4% |  | `=D337*4%` |  |  |  |  |  |
| 339 | Tổng cộng sau giảm giá |  |  | `=D337-D338` |  |  |  |  |  |
| 340 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D339*0.05` |  |  |  |  |  |
| 341 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D339:D340),2)` | 24010 | `=D341*E341` |  |  |  |
| 344 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 346 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 347 | 1 | 516546176233 | 2022-10-01 | 21685.19 |  |  |  |  |  |
| 348 |  | Discount 4% |  | `=D347*4%` |  |  |  |  |  |
| 349 | Tổng cộng sau giảm giá |  |  | `=D347-D348` |  |  |  |  |  |
| 350 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D349*0.05` |  |  |  |  |  |
| 351 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D349:D350),2)` | 24877 | `=D351*E351` |  |  |  |
| 355 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 357 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 358 | 1 | 516546176233 | 2022-11-01 | 21493.78 |  |  |  |  |  |
| 359 |  | Discount 4% |  | `=D358*4%` |  |  |  |  |  |
| 360 | Tổng cộng sau giảm giá |  |  | `=D358-D359` |  |  |  |  |  |
| 361 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D360*0.05` |  |  |  |  |  |
| 362 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D360:D361),2)` | 24795 | `=D362*E362` |  |  |  |
| 365 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 367 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 368 | 1 | 516546176233 | 2022-12-01 | 23813.03 |  |  |  |  |  |
| 369 |  | Discount 4% |  | `=D368*4%` |  |  |  |  |  |
| 370 | Tổng cộng sau giảm giá |  |  | `=D368-D369` |  |  |  |  |  |
| 371 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D370*0.05` |  |  |  |  |  |
| 372 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D370:D371),2)` | 23590 | `=D372*E372` |  |  |  |
| 375 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 377 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 378 | 1 | 516546176233 | 2023-01-01 | 29765.3 |  |  |  |  |  |
| 379 |  | Discount 4% |  | `=D378*4%` |  |  |  |  |  |
| 380 | Tổng cộng sau giảm giá |  |  | `=D378-D379` |  |  |  |  |  |
| 381 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D380*0.05` |  |  |  |  |  |
| 382 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D380:D381),2)` | 23755 | `=D382*E382` |  |  |  |
| 385 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 387 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 388 | 1 | 516546176233 | 2023-02-01 | 24226.7 |  |  |  |  |  |
| 389 |  | Discount 4% |  | `=D388*4%` |  |  |  |  |  |
| 390 | Tổng cộng sau giảm giá |  |  | `=D388-D389` |  |  |  |  |  |
| 391 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D390*0.05` |  |  |  |  |  |
| 392 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D390:D391),2)` | 23808 | `=D392*E392` |  |  |  |
| 395 | TỔNG HỢP CHI PHÍ LADIPAGE VN |  |  |  |  |  |  |  |  |
| 397 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 398 | 1 | 516546176233 | 2023-03-01 | 28282.43 |  |  |  |  |  |
| 399 |  | Discount 4% |  | `=D398*4%` |  |  |  |  |  |
| 400 | Tổng cộng sau giảm giá |  |  | `=D398-D399` |  |  |  |  |  |
| 401 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D400*0.05` |  |  |  |  |  |
| 402 |  | Tổng số tiền phải thanh toán |  | `=round(sum(D400:D401),2)` | 23590 | `=D402*E402` |  |  |  |

> *Đã bỏ qua 142 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (240 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 34 | `D12` |
| D | `=D{r}*4%` | 32 | `D11` |
| D | `=sum(D{r}:D{r})` | 22 | `D14` |
| D | `=D{r}*0.1` | 21 | `D13` |
| D | `=D{r}*0.05` | 12 | `D290` |
| D | `=round(sum(D{r}:D{r}),2)` | 11 | `D301` |
| E | `=sum(E{r})` | 1 | `E62` |
| F | `=D{r}*E{r}` | 42 | `F10` |
| F | `=sum(F{r}:F{r})` | 22 | `F14` |
| F | `=F{r}*0.1` | 21 | `F13` |
| F | `=round(D{r}*E{r},0)` | 14 | `F224` |
| F | `=F{r}` | 1 | `F62` |
| F | `=F{r}*0.05` | 1 | `F290` |
| G | `=E{r}` | 1 | `G61` |
| G | `=sum(G{r})` | 1 | `G62` |
| H | `=F{r}-E{r}` | 1 | `H61` |
| H | `=H{r}` | 1 | `H62` |
| H | `=round(D{r},0)` | 1 | `H164` |
| I | `=D{r}-D{r}` | 1 | `I164` |
