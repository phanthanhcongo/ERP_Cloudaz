# G -Group

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `G -Group`  
> **Vùng dữ liệu:** 361 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ G-Group |  |  |  |  |  |  |
| 3 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá ngày | Thành tiền |
| 4 | 1 | 826810492233 | G Group | 2019-07-01 | 3.35 | 23260 | `=E4*F4` |
| 5 | 2 | 111518853215 | HITVN | 2019-07-01 | 5276.34 | 23260 | `=E5*F5` |
| 6 |  | Tổng |  |  | `=E4+E5` |  | `=G4+G5` |
| 7 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=E6*0.1` |  | `=G6*0.1` |
| 8 |  | Tổng số tiền phải thanh toán |  |  | `=E6+E7` | `=F6+F7` | `=G6+G7` |
| 12 |  |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |
| 13 |  |  |  |  | Người lập |  |  |
| 16 |  |  |  |  |  | Nguyễn Thị Thu Phương |  |
| 26 | TỔNG HỢP CHI PHÍ G-GGROUP |  |  |  |  |  |  |
| 28 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 29 | 1 | AWS - 826810492233 | 2019-09-01 | 3.38 | 23270 | `=D29*E29` |  |
| 30 | 2 | AWS - 111518853215 | 2019-09-02 | 6494.14 | 23270 | `=D30*E30` |  |
| 31 | 3 | GCP - 450497623289 | 2019-09-03 | 28.07 | 23270 | `=D31*E31` |  |
| 32 | 4 | GCP - Ggroup | 2019-09-04 | 229.62 | 23270 | `=D32*E32` |  |
| 33 |  | Tổng cộng |  | `=D29+D30+D31` |  | `=F29+F30+F31+F32` |  |
| 34 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D33*0.1` |  | `=F33*0.1` |  |
| 35 |  | Tổng số tiền phải thanh toán |  | `=D33+D34` |  | 172913111 |  |
| 37 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |
| 39 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |
| 40 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |
| 41 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |
| 45 | TỔNG HỢP CHI PHÍ G-GGROUP |  |  |  |  |  |  |
| 47 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 48 | 1 | AWS - 826810492233 | 2021-06-01 | 184.53 | 23130 | `=D48*E48` |  |
| 49 | 2 | AWS - 111518853215 | 2021-06-02 | 4227.89 | 23130 | `=D49*E49` |  |
| 50 | 3 | AWS-386944229390 | 2021-06-03 | 131.6 | 23130 | `=D50*E50` |  |
| 51 | 4 |  |  |  |  | `=D51*E51` |  |
| 52 |  | Tổng cộng |  | `=D48+D49+D50` |  | `=F48+F49+F50+F51` |  |
| 53 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D52*0.1` |  | `=F52*0.1` |  |
| 54 |  | Tổng số tiền phải thanh toán |  | `=D52+D53` |  | 115613501 |  |
| 56 |  |  |  | Hà Nội, ngày 05 tháng 07 năm 2021 |  |  |  |
| 58 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |
| 59 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |
| 60 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |
| 65 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 68 | 1 | AWS-Ggroup (826810492233) | 2022-03-01 | 432.21 | 22980 | `=round(D68*E68,0)` |  |
| 69 | 2 | AWS-GInnovation (386944229390) | 2022-03-01 | 131.72 | 22980 | `=round(D69*E69,0)` |  |
| 70 |  | Tổng tạm tính |  | `=sum(D68:D69)` |  | `=sum(F68:F69)` |  |
| 71 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D70*0.1` |  | `=F70*0.1` |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=D70+D71` | 22980 | `=F70+F71` |  |
| 76 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 78 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 79 | 1 | AWS-Ggroup (826810492233) | 2022-04-01 | 529.03 | 23095 | `=round(D79*E79,0)` |  |
| 80 | 2 | AWS-GInnovation (386944229390) | 2022-04-01 | 131.6 | 23095 | `=round(D80*E80,0)` |  |
| 81 |  | Tổng tạm tính |  | `=sum(D79:D80)` |  | `=sum(F79:F80)` |  |
| 82 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D81*0.1` |  | `=F81*0.1` |  |
| 83 |  | Tổng số tiền phải thanh toán |  | `=D81+D82` | 23095 | `=F81+F82` |  |
| 84 |  |  |  |  |  | 16782975 |  |
| 89 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 91 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 92 | 1 | AWS-Ggroup (826810492233) | 2022-05-01 | 1049.08 |  |  |  |
| 93 | 2 | AWS-GInnovation (386944229390) | 2022-05-01 | 131.72 |  |  |  |
| 94 |  | Tổng tạm tính |  | `=sum(D92:D93)` |  |  |  |
| 95 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D94*0.1` |  |  |  |
| 96 |  | Tổng số tiền phải thanh toán |  | `=round(D94+D95,2)` | 23330 | `=D96*E96` |  |
| 98 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 100 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 101 | 1 | AWS-Ggroup (826810492233) | 2022-06-01 | 944.94 |  |  |  |
| 102 | 2 | AWS-GInnovation (386944229390) | 2022-06-01 | 131.6 |  |  |  |
| 103 |  | Tổng tạm tính |  | `=sum(D101:D102)` |  |  |  |
| 104 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D103*0.1` |  |  |  |
| 105 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D103+D104,2)` | 23415 | `=D105*E105` |  |
| 108 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 110 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 111 | 1 | AWS-G Group (826810492233) | 2022-07-01 | 764.38 |  |  |  |
| 112 | 2 | AWS-G Group (386944229390) | 2022-07-01 | 131.72 |  |  |  |
| 113 |  | Tổng tạm tính |  | `=sum(D111:D112)` |  |  |  |
| 114 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D113*0.1` |  |  |  |
| 115 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D113+D114,2)` | 23480 | `=D115*E115` |  |
| 118 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 120 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 121 | 1 | AWS-G Group (826810492233) | 2022-08-01 | 704.56 |  |  |  |
| 122 | 2 | AWS-G Group (386944229390) | 2022-08-01 | 131.72 |  |  |  |
| 123 |  | Tổng tạm tính |  | `=sum(D121:D122)` |  |  |  |
| 124 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D123*0.1` |  |  |  |
| 125 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D123+D124,2)` | 23600 | `=D125*E125` |  |
| 128 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 130 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 131 | 1 | AWS-G Group (826810492233) | 2022-09-01 | 684.86 |  |  |  |
| 132 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.6 |  |  |  |
| 133 |  | Tổng tạm tính |  | `=sum(D131:D132)` |  |  |  |
| 134 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D133*0.1` |  |  |  |
| 135 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D133+D134,2)` | 24010 | `=D135*E135` |  |
| 138 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 140 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 141 | 1 | AWS-G Group (826810492233) | 2022-10-01 | 706 |  |  |  |
| 142 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 143 |  | Tổng tạm tính |  | `=sum(D141:D142)` |  |  |  |
| 144 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D143*0.1` |  |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D143+D144,2)` | 24877 | `=D145*E145` |  |
| 148 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 150 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 151 | 1 | AWS-G Group (826810492233) | 2022-11-01 | 687.86 |  |  |  |
| 152 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.6 |  |  |  |
| 153 |  | Tổng tạm tính |  | `=sum(D151:D152)` |  |  |  |
| 154 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D153*0.1` |  |  |  |
| 155 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D153+D154,2)` | 24795 | `=D155*E155` |  |
| 158 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 160 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 161 | 1 | AWS-G Group (826810492233) | 2022-12-01 | 737.95 |  |  |  |
| 162 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 163 |  | Tổng tạm tính |  | `=sum(D161:D162)` |  |  |  |
| 164 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D163*0.1` |  |  |  |
| 165 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D163+D164,2)` | 23590 | `=D165*E165` |  |
| 168 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 170 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 171 | 1 | AWS-G Group (826810492233) | 2023-01-01 | 747.27 |  |  |  |
| 172 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 173 |  | Tổng tạm tính |  | `=sum(D171:D172)` |  |  |  |
| 174 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D173*0.1` |  |  |  |
| 175 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D173+D174,2)` | 23755 | `=D175*E175` |  |
| 178 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 180 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 181 | 1 | AWS-G Group (826810492233) | 2023-02-01 | 687.46 |  |  |  |
| 182 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.36 |  |  |  |
| 183 |  | Tổng tạm tính |  | `=sum(D181:D182)` |  |  |  |
| 184 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D183*0.1` |  |  |  |
| 185 |  | Tổng số tiền phải thanh toán |  | `=D183+D184` | 23740 | `=D185*E185` |  |
| 188 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 191 | 1 | AWS-G Group (826810492233) | 2023-03-01 | 757.95 |  |  |  |
| 192 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 193 |  | Tổng tạm tính |  | `=sum(D191:D192)` |  |  |  |
| 194 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=D193*0.1` |  |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  | `=D193+D194` | 23595 | `=D195*E195` |  |
| 198 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 201 | 1 | AWS-G Group (826810492233) | 2023-04-01 | 715.33 |  |  |  |
| 202 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.6 |  |  |  |
| 203 |  | Tổng tạm tính |  | `=sum(D201:D202)` |  |  |  |
| 204 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D203*0.1,2)` |  |  |  |
| 205 |  | Tổng số tiền phải thanh toán |  | `=D203+D204` | 23615 | `=D205*E205` |  |
| 209 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 211 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 212 | 1 | AWS-G Group (826810492233) | 2023-05-01 | 768.31 |  |  |  |
| 213 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 214 |  | Tổng tạm tính |  | `=sum(D212:D213)` |  |  |  |
| 215 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D214*0.1,2)` |  |  |  |
| 216 |  | Tổng số tiền phải thanh toán |  | `=D214+D215` | 23640 | `=D216*E216` |  |
| 219 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 221 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 222 | 1 | AWS-G Group (826810492233) | 2023-06-01 | 792.1 |  |  |  |
| 223 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.6 |  |  |  |
| 224 |  | Tổng tạm tính |  | `=sum(D222:D223)` |  |  |  |
| 225 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D224*0.1,2)` |  |  |  |
| 226 |  | Tổng số tiền phải thanh toán |  | `=D224+D225` | 23780 | `=D226*E226` |  |
| 230 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 232 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 233 | 1 | AWS-G Group (826810492233) | 2023-07-01 | 810.72 |  |  |  |
| 234 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 235 |  | Tổng tạm tính |  | `=sum(D233:D234)` |  |  |  |
| 236 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D235*0.1,2)` |  |  |  |
| 237 |  | Tổng số tiền phải thanh toán |  | `=D235+D236` | 23895 | `=D237*E237` |  |
| 241 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 243 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 244 | 1 | AWS-G Group (826810492233) | 2023-08-01 | 537.34 |  |  |  |
| 245 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 246 |  | Tổng tạm tính |  | `=sum(D244:D245)` |  |  |  |
| 247 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D246*0.1,2)` |  |  |  |
| 248 |  | Tổng số tiền phải thanh toán |  | `=D246+D247` | 24310 | `=D248*E248` |  |
| 252 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 254 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 255 | 1 | AWS-G Group (826810492233) | 2023-09-01 | 501.48 |  |  |  |
| 256 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.6 |  |  |  |
| 257 |  | Tổng tạm tính |  | `=sum(D255:D256)` |  |  |  |
| 258 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D257*0.1,2)` |  |  |  |
| 259 |  | Tổng số tiền phải thanh toán |  | `=D257+D258` | 24575 | `=D259*E259` |  |
| 263 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 265 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 266 | 1 | AWS-G Group (826810492233) | 2023-10-01 | 517.84 |  |  |  |
| 267 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 268 |  | Tổng tạm tính |  | `=sum(D266:D267)` |  |  |  |
| 269 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D268*0.1,2)` |  |  |  |
| 270 |  | Tổng số tiền phải thanh toán |  | `=D268+D269` | 24455 | `=D270*E270` |  |
| 274 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 276 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 277 | 1 | AWS-G Group (826810492233) | 2023-11-01 | 510.19 |  |  |  |
| 278 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.6 |  |  |  |
| 279 |  | Tổng cộng |  | `=sum(D277:D278)` |  |  |  |
| 280 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D279*0.1,2)` |  |  |  |
| 281 |  | Tổng số tiền phải thanh toán |  | `=D279+D280` | 24425 | `=D281*E281` |  |
| 285 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 287 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 288 | 1 | AWS-G Group (826810492233) | 2023-12-01 | 508.6 |  |  |  |
| 289 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 290 |  | Tổng cộng |  | `=sum(D288:D289)` |  |  |  |
| 291 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D290*0.1,2)` |  |  |  |
| 292 |  | Tổng số tiền phải thanh toán |  | `=D290+D291` | 24495 | `=D292*E292` |  |
| 296 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 298 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 299 | 1 | AWS-G Group (826810492233) | 2024-01-01 | 493.14 |  |  |  |
| 300 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 131.72 |  |  |  |
| 301 |  | Tổng cộng |  | `=sum(D299:D300)` |  |  |  |
| 302 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D301*0.1,2)` |  |  |  |
| 303 |  | Tổng số tiền phải thanh toán |  | `=D301+D302` | 24670 | `=D303*E303` |  |
| 307 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 309 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 310 | 1 | AWS-G Group (826810492233) | 2024-02-01 | 490.03 |  |  |  |
| 311 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 134.96 |  |  |  |
| 312 |  | Tổng cộng |  | `=sum(D310:D311)` |  |  |  |
| 313 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D312*0.1,2)` |  |  |  |
| 314 |  | Tổng số tiền phải thanh toán |  | `=D312+D313` | 24810 | `=D314*E314` |  |
| 318 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 320 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 321 | 1 | AWS-G Group (826810492233) | 2024-03-01 | 513.68 |  |  |  |
| 322 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 135.44 |  |  |  |
| 323 |  | Tổng cộng |  | `=sum(D321:D322)` |  |  |  |
| 324 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D323*0.1,2)` |  |  |  |
| 325 |  | Tổng số tiền phải thanh toán |  | `=D323+D324` | 25155 | `=D325*E325` |  |
| 329 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 331 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 332 | 1 | AWS-G Group (826810492233) | 2024-04-01 | 505.18 |  |  |  |
| 333 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 135.2 |  |  |  |
| 334 |  | Tổng cộng |  | `=sum(D332:D333)` |  |  |  |
| 335 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D334*0.1,2)` |  |  |  |
| 336 |  | Tổng số tiền phải thanh toán |  | `=D334+D335` | 25478 | `=D336*E336` |  |
| 340 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 342 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 343 | 1 | AWS-G Group (826810492233) | 2024-05-01 | 504.23 |  |  |  |
| 344 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 135.44 |  |  |  |
| 345 |  | Tổng cộng |  | `=sum(D343:D344)` |  |  |  |
| 346 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên CloudAZ đóng hộ) |  | `=round(D345*0.1,2)` |  |  |  |
| 347 |  | Tổng số tiền phải thanh toán |  | `=D345+D346` | 25454 | `=D347*E347` |  |
| 351 | TỔNG HỢP CHI PHÍ G Group |  |  |  |  |  |  |
| 353 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |  |
| 354 | 1 | AWS-G Group (826810492233) | 2024-06-01 | 466.2 |  |  |  |
| 355 | 2 | AWS-G Group (386944229390) | 1970-01-01 07:00:00 | 135.2 |  |  |  |
| 356 | Tổng cộng |  |  | `=sum(D354:D355)` |  |  |  |
| 357 |  |  |  | `=round(D356*(1+5.26%),2)` |  |  |  |
| 358 |  |  |  | `=round(D356*5%,2)` |  |  |  |
| 359 |  |  |  | `=D357-D358` | 25020 | `=D359*E359` |  |
| 360 |  |  |  |  |  | `=round(F359*10%,0)` |  |
| 361 |  |  |  |  |  | `=F359+F360` |  |

> *Đã bỏ qua 125 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (172 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 22 | `C132` |
| D | `=sum(D{r}:D{r})` | 28 | `D70` |
| D | `=D{r}+D{r}` | 20 | `D35` |
| D | `=D{r}*0.1` | 15 | `D34` |
| D | `=round(D{r}*0.1,2)` | 14 | `D204` |
| D | `=ROUND(D{r}+D{r},2)` | 8 | `D105` |
| D | `=D{r}+D{r}+D{r}` | 2 | `D33` |
| D | `=round(D{r}+D{r},2)` | 1 | `D96` |
| D | `=round(D{r}*(1+5.26%),2)` | 1 | `D357` |
| D | `=round(D{r}*5%,2)` | 1 | `D358` |
| D | `=D{r}-D{r}` | 1 | `D359` |
| E | `=E{r}+E{r}` | 2 | `E6` |
| E | `=E{r}*0.1` | 1 | `E7` |
| F | `=D{r}*E{r}` | 34 | `F29` |
| F | `=F{r}+F{r}` | 4 | `F8` |
| F | `=F{r}*0.1` | 4 | `F34` |
| F | `=round(D{r}*E{r},0)` | 4 | `F68` |
| F | `=F{r}+F{r}+F{r}+F{r}` | 2 | `F33` |
| F | `=sum(F{r}:F{r})` | 2 | `F70` |
| F | `=round(F{r}*10%,0)` | 1 | `F360` |
| G | `=E{r}*F{r}` | 2 | `G4` |
| G | `=G{r}+G{r}` | 2 | `G6` |
| G | `=G{r}*0.1` | 1 | `G7` |
