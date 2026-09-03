# IDOcean

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `IDOcean`  
> **Vùng dữ liệu:** 937 dòng × 15 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Đã thanh toán | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 5 | 1 | 317652353002 | 2019-05-01 | 3025000 | 10.68 | 23320 | `=E5*F5` | `=G5*1.12` |  |  |  |  |  |  |  |
| 6 |  |  | 6/2019 <br>(Cộng thêm $100 credit) | `=100*23300` | 7.71 | 23300 | `=E6*F6` | `=G6*1.12` |  |  |  |  |  |  |  |
| 7 |  |  | 2019-07-01 |  | 11.84 | 23300 | `=E7*F7` | `=G7*1.12` |  |  |  |  |  |  |  |
| 8 |  |  | 2019-08-01 |  | 44.03 | 23260 | `=E8*F8` | `=G8*1.12` |  |  |  |  |  |  |  |
| 9 |  | Tổng tạm tính |  |  | `=sum(E5:E8)` |  | `=sum(G5:G8)` | `=sum(H5:H8)` |  |  |  |  |  |  |  |
| 10 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=E9*0.12` |  | `=G9*0.12` |  |  |  |  |  |  |  |  |
| 11 | Tổng số tiền phải thanh toán |  |  |  | `=E9+E10` |  | `=G9+G10` | `=D5-G11` |  |  |  |  |  |  |  |
| 12 | Tổng số tiền còn lại  |  |  |  | `=sum(D5:D6)-G11` |  |  |  |  |  |  |  |  |  |  |
| 14 |  |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |  |  |  |  |
| 15 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |  |
| 16 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |  |  |
| 25 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 28 | 1 | 317652353002 | 2019-09-01 | `=E12` | 49.35 | 23300 | `=E28*F28` | `=G11+G30-D5` |  |  |  |  |  |  |  |
| 29 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E28*12%` | 23300 | `=E29*F29` |  |  |  |  |  |  |  |  |
| 30 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E28:E29)` |  | `=sum(G28:G29)` |  |  |  |  |  |  |  |  |
| 31 | Tổng số tiền còn lại  |  |  |  | `=sum(D28)-G30` |  |  | `=(D6-E31)/23300` |  |  |  |  |  |  |  |
| 33 |  |  |  |  | Hà Nội, ngày 08 tháng 10 năm 2019 |  |  |  |  |  |  |  |  |  |  |
| 35 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 46 | 1 | 317652353002 | 2019-10-01 | 2131007 | 77.73 | 23300 | `=E46*F46` |  |  |  |  |  |  |  |  |
| 47 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E46*12%` | 23300 | `=E47*F47` |  |  |  |  |  |  |  |  |
| 48 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E46:E47)` |  | `=sum(G46:G47)` |  |  |  |  |  |  |  |  |
| 49 | Tổng số tiền còn lại  |  |  |  | `=sum(D46)-G48` |  |  |  |  |  |  |  |  |  |  |
| 51 |  |  |  |  | Hà Nội, ngày 4 tháng 11 năm 2019 |  |  |  |  |  |  |  |  |  |  |
| 56 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 63 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền | `=D67+E49-E70` |  |  |  |  |  |  |  |
| 66 |  |  | 2019-10-01 | 2131007 | 77.73 | 23300 | `=E66*F66` |  |  |  |  |  |  |  |  |
| 67 | 1 | 317652353002 | 2019-11-01 | 6000000 | 108.14 | 23300 | `=E67*F67` |  |  |  |  |  |  |  |  |
| 68 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E66:E67)*12%` | 23300 | `=E68*F68` |  |  |  |  |  |  |  |  |
| 69 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E67:E68)` |  | `=sum(G66:G68)` | `=G69-G66-G47` |  |  |  |  |  |  |  |
| 70 | Tổng số tiền còn lại  |  |  |  | `=sum(D66:D67)-G69` |  |  |  |  |  |  |  |  |  |  |
| 72 |  |  |  |  | Hà Nội, ngày 4 tháng 12 năm 2019 |  |  |  |  |  |  |  |  |  |  |
| 77 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 80 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 83 | 1 | 317652353002 | 2019-12-01 | 3280543 | 117.8 | 23300 | `=E83*F83` |  |  |  |  |  |  |  |  |
| 84 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E83*12%` | 23300 | `=E84*F84` |  |  |  |  |  |  |  |  |
| 85 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E83:E84)` |  | `=sum(G83:G84)` |  |  |  |  |  |  |  |  |
| 86 | Tổng số tiền còn lại  |  |  |  | `=sum(D83)-G85` |  |  |  |  |  |  |  |  |  |  |
| 88 |  |  |  |  | Hà Nội, ngày 4 tháng 1 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 93 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 96 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 99 | 1 | 317652353002 | 2020-01-01 | 206434 | 138.45 | 23320 | `=E99*F99` |  |  |  |  |  |  |  |  |
| 100 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E99*12%` | 23320 | `=E100*F100` |  |  |  |  |  |  |  |  |
| 101 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E99:E100)` |  | `=sum(G99:G100)` |  |  |  |  |  |  |  |  |
| 102 | Tổng số tiền còn lại  |  |  |  | `=sum(D99)-G101` |  |  | `=6000000+E102` |  |  |  |  |  |  |  |
| 103 |  |  |  |  |  |  |  | `=2383908+206434` |  |  |  |  |  |  |  |
| 104 |  |  |  |  | Hà Nội, ngày 4 tháng 2 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 109 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 112 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 115 |  | 317652353002 | 2020-02-01 | `=6000000+E102` | 108.91 | 23320 | `=E115*F115` |  |  |  |  |  |  |  |  |
| 116 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E115)*12%` | 23320 | `=E116*F116` |  |  |  |  |  |  |  |  |
| 117 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E116)` |  | `=sum(G115:G116)` |  |  |  |  |  |  |  |  |
| 118 | Tổng số tiền còn lại  |  |  |  | `=sum(D115)-G117` |  |  |  |  |  |  |  |  |  |  |
| 120 |  |  |  |  | Hà Nội, ngày 4 tháng 3 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 121 |  |  |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 125 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 129 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 132 |  | 317652353002 | 2020-03-01 | `=4200000+E118` | 121.04 | 23660 | `=E132*F132` |  |  |  |  |  |  |  |  |
| 133 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E132)*12%` | 23660 | `=E133*F133` |  |  |  |  |  |  |  |  |
| 134 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E133)` |  | `=sum(G132:G133)` |  | `=4200000-G134` |  |  |  |  |  |  |
| 135 | Tổng số tiền còn lại  |  |  |  | `=D132-G134` |  |  |  |  |  |  |  |  |  |  |
| 137 |  |  |  |  | Hà Nội, ngày 4 tháng 4 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 138 |  |  |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 142 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 146 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 148 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 149 |  | 317652353002 | 2020-04-01 | `=E135` | 113.37 | 23600 | `=E149*F149` |  |  |  |  |  |  |  |  |
| 150 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E149)*12%` | 23600 | `=E150*F150` |  |  |  |  |  |  |  |  |
| 151 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E150)` |  | `=sum(G149:G150)` |  |  |  |  |  |  |  |  |
| 152 | Tổng số tiền còn lại  |  |  |  | `=sum(D149)-G151` |  |  |  |  |  |  |  |  |  |  |
| 154 |  |  |  |  | Hà Nội, ngày 4 tháng 5 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 155 |  |  |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 159 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 162 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 165 | 1 | 317652353002 | 2020-05-01 | -2258272 | 162.12 | 23350 | `=E165*F165` |  |  |  |  |  |  |  |  |
| 166 | 2 |  | Nạp thêm | 8000000 |  |  |  |  |  |  |  |  |  |  |  |
| 167 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E165)*12%` | 23350 | `=E167*F167` |  |  |  |  |  |  |  |  |
| 168 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E167)` |  | `=sum(G165:G167)` |  |  |  |  |  |  |  |  |
| 169 | Tổng số tiền còn lại  |  |  |  | `=sum(D165:D166)-G168` |  |  |  |  |  |  |  |  |  |  |
| 171 |  |  |  |  | Hà Nội, ngày 4 tháng 6 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 172 |  |  |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 176 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 179 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 181 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 182 | 1 | 317652353002 | 2020-06-01 | 1501966 | 174.57 | 23290 | `=E182*F182` |  |  |  |  |  |  |  |  |
| 183 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E182*12%` | 23290 | `=E183*F183` |  |  |  |  |  |  |  |  |
| 184 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E183)` |  | `=sum(G182:G183)` |  |  |  |  |  |  |  |  |
| 185 | Tổng số tiền còn lại  |  |  |  | `=sum(D182)-G184` |  |  |  |  |  |  |  |  |  |  |
| 187 |  |  |  |  | Hà Nội, ngày 4 tháng 7 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 188 |  |  |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 192 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 195 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 197 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 198 | 1 | 317652353002 | 2020-07-01 | `=E185` | 180.35 | 23265 | `=E198*F198` |  |  |  |  |  |  |  |  |
| 199 | 2 |  | Nạp thêm | 8000000 |  |  |  |  |  |  |  |  |  |  |  |
| 200 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E198)*12%` | 23265 | `=E200*F200` |  |  |  |  |  |  |  |  |
| 201 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E200)` |  | `=sum(G198:G200)` |  |  |  |  |  |  |  |  |
| 202 | Tổng số tiền còn lại  |  |  |  | `=sum(D198:D199)-G201` |  |  |  |  |  |  |  |  |  |  |
| 204 |  |  |  |  | Hà Nội, ngày 4 tháng 8 năm 2020 |  |  |  |  |  |  |  |  |  |  |
| 205 |  |  |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |
| 209 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |
| 212 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 215 | 1 | 317652353002 | 2020-08-01 | `=E202` | 180.39 | 23270 | `=E215*F215` |  |  |  |  |  |  |  |  |
| 216 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E215*12%` | 23270 | `=E216*F216` |  |  |  |  |  |  |  |  |
| 217 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E216)` |  | `=sum(G215:G216)` |  |  |  |  |  |  |  |  |
| 218 | Tổng số tiền còn lại  |  |  |  | `=sum(D215)-G217` |  |  |  |  |  |  |  |  |  |  |
| 222 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 224 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 225 | 1 | 317652353002 | 2020-09-01 | `=E218` | 174.59 | 23280 | `=E225*F225` |  |  |  |  |  |  |  |  |
| 226 | 2 |  | Nạp thêm | 8000000 |  |  |  |  |  |  |  |  |  |  |  |
| 227 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E225)*12%` | 23280 | `=E227*F227` |  |  |  |  |  |  |  |  |
| 228 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E227)` |  | `=sum(G225:G227)` |  |  |  |  |  |  |  |  |
| 229 | Tổng số tiền còn lại  |  |  |  | `=sum(D225:D226)-G228` |  |  |  |  |  |  |  |  |  |  |
| 233 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 235 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 236 | 1 | 317652353002 | 2020-10-01 | `=E229` | 179.87 | 23270 | `=E236*F236` |  |  |  |  |  |  |  |  |
| 237 | 2 |  | Nạp thêm | 8000000 |  |  |  |  |  |  |  |  |  |  |  |
| 238 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E236)*12%` | 23270 | `=E238*F238` |  |  |  |  |  |  |  |  |
| 239 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E238)` |  | `=sum(G236:G238)` |  |  |  |  |  |  |  |  |
| 240 | Tổng số tiền còn lại  |  |  |  | `=sum(D236:D237)-G239` |  |  |  |  |  |  |  |  |  |  |
| 244 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 246 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 247 | 1 | 317652353002 | 2020-11-01 | `=E240` | 174.11 | 23235 | `=E247*F247` |  |  |  |  |  |  |  |  |
| 248 | 2 |  | Nạp thêm | 6000000 |  |  |  |  |  |  |  |  |  |  |  |
| 249 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E247)*12%` | 23235 | `=E249*F249` |  |  |  |  |  |  |  |  |
| 250 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E247:E249)` |  | `=sum(G247:G249)` |  |  |  |  |  |  |  |  |
| 251 | Tổng số tiền còn lại  |  |  |  | `=sum(D247:D248)-G250` |  |  |  |  |  |  |  |  |  |  |
| 255 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 257 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 258 | 1 | 317652353002 | 2020-12-01 | `=E251` | 157.27 | 23185 | `=E258*F258` |  |  |  |  |  |  |  |  |
| 259 | 2 |  | Nạp thêm | 6000000 |  |  |  |  |  |  |  |  |  |  |  |
| 260 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E258)*12%` | 23185 | `=E260*F260` |  |  |  |  |  |  |  |  |
| 261 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E258:E260)` |  | `=sum(G258:G260)` |  |  |  |  |  |  |  |  |
| 262 | Tổng số tiền còn lại  |  |  |  | `=sum(D258:D259)-G261` |  |  |  |  |  |  |  |  |  |  |
| 266 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 268 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 269 | 1 | 317652353002 | 2021-01-01 | `=E262` | 143.64 | 23145 | `=E269*F269` |  |  |  |  |  |  |  |  |
| 270 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E269)*12%` | 23145 | `=E270*F270` |  |  |  |  |  |  |  |  |
| 271 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E269:E270)` | 23145 | `=sum(G269:G270)` |  |  |  |  |  |  |  |  |
| 272 | Tổng số tiền còn lại  |  |  |  | `=sum(D269)-G271` |  |  |  |  |  |  |  |  |  |  |
| 275 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 277 | STT | Tài khoản | Tháng | Số dư đầu kỳ | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 278 | 1 | 317652353002 | 2021-02-01 | `=E272` | 135.88 | 23095 | `=E278*F278` |  |  |  |  |  |  |  |  |
| 279 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=sum(E278)*12%` | 23095 | `=E279*F279` |  | `=G280+G271+307192` |  |  |  |  |  |  |
| 280 | Tổng số tiền phải thanh toán |  |  |  | `=sum(E278:E279)` | 23095 | `=sum(G278:G279)` |  |  |  |  |  |  |  |  |
| 281 | Tổng số tiền còn lại  |  |  |  | `=D278-G280` |  |  |  |  |  |  |  |  |  |  |
| 285 | TỔNG HỢP CHI PHÍ TÀI KHOẢN AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 287 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 288 | 1 | 317652353002 | 2021-03-01 | 148.18 | 23165 | `=D288*E288` |  |  |  |  |  |  |  |  |  |
| 289 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D288)*12%` | 23165 | `=F288*12%` |  |  |  |  |  |  |  |  |  |
| 290 | Tổng số tiền phải thanh toán |  |  | `=sum(D288:D289)` | 23165 | 3844501 |  |  |  |  |  |  |  |  |  |
| 295 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 297 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 298 | 1 | 317652353002 | 2021-04-01 | 143.03 | 23150 | `=round(D298*E298,0)` |  |  |  |  |  |  |  |  |  |
| 299 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D298)*12%` | 23150 | `=F298*12%` |  |  |  |  |  |  |  |  |  |
| 300 | Tổng số tiền phải thanh toán |  |  | `=sum(D298:D299)` | 23150 | `=F298+F299` |  |  |  |  |  |  |  |  |  |
| 303 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 305 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 306 | 1 | 317652353002 | 2021-05-01 | 144.47 | 23145 | `=round(D306*E306,0)` |  |  |  |  |  |  |  |  |  |
| 307 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D306)*12%` | 23145 | `=F306*12%` |  |  |  |  |  |  |  |  |  |
| 308 | Tổng số tiền phải thanh toán |  |  | `=sum(D306:D307)` | 23145 | `=F306+F307` |  |  |  |  |  |  |  |  |  |
| 311 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 313 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 314 | 1 | 317652353002 | 2021-06-01 | 140.49 | 23130 | `=round(D314*E314,0)` |  |  |  |  |  |  |  |  |  |
| 315 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D314)*12%` | 23130 | `=F314*12%` |  |  |  |  |  |  |  |  |  |
| 316 | Tổng số tiền phải thanh toán |  |  | `=sum(D314:D315)` | 23130 | `=F314+F315` |  |  |  |  |  |  |  |  |  |
| 320 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 322 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 323 | 1 | 317652353002 | 2021-07-01 | 144.48 | 23050 | `=round(D323*E323,0)` |  |  |  |  |  |  |  |  |  |
| 324 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D323)*12%` | 23050 | `=F323*12%` |  |  |  |  |  |  |  |  |  |
| 325 | Tổng số tiền phải thanh toán |  |  | `=sum(D323:D324)` | 23050 | `=F323+F324` |  |  |  |  |  |  |  |  |  |
| 329 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 331 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 332 | 1 | 317652353002 | 2021-08-01 | 144.47 | 22880 | `=round(D332*E332,0)` |  |  |  |  | 3702130.8799999999 |  |  |  |  |
| 333 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D332)*12%` | 22880 | `=F332*12%` |  |  |  |  |  |  |  |  |  |
| 334 | Tổng số tiền phải thanh toán |  |  | `=sum(D332:D333)` | 22880 | `=F332+F333` |  |  |  |  |  |  |  |  |  |
| 338 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 340 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 341 | 1 | 317652353002 | 2021-09-01 | 140.49 | 22840 | `=round(D341*E341,0)` |  |  |  |  |  |  |  |  |  |
| 342 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D341)*12%` | 22840 | `=F341*12%` |  |  |  |  |  |  |  |  |  |
| 343 | Tổng số tiền phải thanh toán |  |  | `=sum(D341:D342)` | 22840 | `=F341+F342` |  |  |  |  |  |  |  |  |  |
| 346 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 348 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 349 | 1 | 317652353002 | 2021-10-01 | 145.54 | 22850 | `=round(D349*E349,0)` |  |  |  |  |  |  |  |  |  |
| 350 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D349)*12%` | 22850 | `=F349*12%` |  |  |  |  |  |  |  |  |  |
| 351 | Tổng số tiền phải thanh toán |  |  | `=sum(D349:D350)` | 22850 | `=F349+F350` |  |  |  |  |  |  |  |  |  |
| 354 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 356 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 357 | 1 | 317652353002 | 2021-11-01 | 141.86 | 22800 | `=round(D357*E357,0)` |  |  |  |  |  |  |  |  |  |
| 358 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D357)*12%` | 22800 | `=F357*12%` |  |  |  |  |  |  |  |  |  |
| 359 | Tổng số tiền phải thanh toán |  |  | `=sum(D357:D358)` | 22800 | `=F357+F358` | 3622536.96 |  |  |  |  |  |  |  |  |
| 363 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 365 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 366 | 1 | 317652353002 | 2021-12-01 | 146.25 | 22920 | `=round(D366*E366,0)` |  |  |  |  |  |  |  |  |  |
| 367 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D366)*12%` | 22920 | `=F366*12%` |  |  |  |  |  |  |  |  |  |
| 368 | Tổng số tiền phải thanh toán |  |  | `=sum(D366:D367)` | 22920 | `=F366+F367` | 3754296 |  |  |  |  |  |  |  |  |
| 372 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 374 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 375 | 1 | 317652353002 | 2022-01-01 | 146.25 | 22780 | `=round(D375*E375,0)` |  |  |  |  |  |  |  |  |  |
| 376 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D375)*12%` | 22780 | `=F375*12%` |  |  |  |  |  |  |  |  |  |
| 377 | Tổng số tiền phải thanh toán |  |  | `=sum(D375:D376)` | 22780 | `=F375+F376` | 3731364 |  |  |  |  |  |  |  |  |
| 380 | TỔNG HỢP CHI PHÍ TÀI KHOẢN IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 382 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 383 | 1 | 317652353002 | 2022-02-01 | 134.3 | 22950 | `=round(D383*E383,0)` |  |  |  |  |  |  |  |  |  |
| 384 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D383)*12%` | 22950 | `=F383*12%` |  |  |  |  |  |  |  |  |  |
| 385 | Tổng số tiền phải thanh toán |  |  | `=sum(D383:D384)` | 22950 | `=F383+F384` | 3452047.2000000002 |  |  |  |  |  |  |  |  |
| 388 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 390 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 391 | 1 | 317652353002 | 2022-03-01 | 146.25 | 22980 | `=round(D391*E391,0)` |  |  |  |  |  |  |  |  |  |
| 392 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D391)*12%` | 22980 | `=F391*12%` |  |  |  |  |  |  |  |  |  |
| 393 | Tổng số tiền phải thanh toán |  |  | `=sum(D391:D392)` | 22980 | `=F391+F392` | 3764124 |  |  |  |  |  |  |  |  |
| 396 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 398 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 399 | 1 | 317652353002 | 2022-04-01 | 142.27 | 23095 | `=round(D399*E399,0)` |  |  |  |  |  |  |  |  |  |
| 400 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D399)*12%` | 23095 | `=F399*12%` |  |  |  |  |  |  |  |  |  |
| 401 | Tổng số tiền phải thanh toán |  |  | `=sum(D399:D400)` | 23095 | `=F399+F400` | 3680013.1200000001 |  |  |  |  |  |  |  |  |
| 404 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AWS IDOCEAN UPDATE |  |  |  |  |  |
| 406 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 407 | 1 | 317652353002 | 2022-05-01 | 285.98 |  |  |  |  |  | 1 | 317652353002 (Lightsail) | 2022-05-01 | 146.07 |  |  |
| 408 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D407)*12%` |  |  |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(M407)*12%` |  |  |
| 409 | Tổng số tiền phải thanh toán |  |  | `=round(D407+D408,2)` | 23330 | `=D409*E409` | 7472599 |  |  | Tổng số tiền phải thanh toán |  |  | `=round(M407+M408,2)` | 23330 | `=M409*N409` |
| 412 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AWS IDOCEAN UPDATE |  |  |  |  |  |
| 414 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 415 | 1 | 317652353002 | 2022-06-01 | 1146.55 |  |  |  |  |  | 1 | 317652353002 (Lightsail) | 2022-06-01 | 142.31 |  |  |
| 416 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D415)*12%` |  |  |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(M415)*12%` |  |  |
| 417 | Tổng số tiền phải thanh toán |  |  | `=round(D415+D416,2)` | 23415 | `=D417*E417` |  |  |  | Tổng số tiền phải thanh toán |  |  | `=round(M415+M416,2)` | 23415 | `=M417*N417` |
| 420 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 422 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 423 | 1 | 317652353002 | 2022-07-01 | 146.29 |  |  |  |  |  |  |  |  |  |  |  |
| 424 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D423)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 425 | Tổng số tiền phải thanh toán |  |  | `=round(D423+D424,2)` | 23480 | `=D425*E425` |  |  |  |  |  |  |  |  |  |
| 429 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 431 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 432 | 1 | 317652353002 | 2022-08-01 | 138.98 |  |  |  |  |  |  |  |  |  |  |  |
| 433 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D432)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 434 | Tổng số tiền phải thanh toán |  |  | `=round(D432+D433,2)` | 23600 | `=D434*E434` |  |  |  |  |  |  |  |  |  |
| 437 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 439 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 440 | 1 | 317652353002 | 2022-09-01 | 134.78 |  |  |  |  |  |  |  |  |  |  |  |
| 441 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D440)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 442 | Tổng số tiền phải thanh toán |  |  | `=round(D440+D441,2)` | 24010 | `=D442*E442` |  |  |  |  |  |  |  |  |  |
| 445 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 447 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 448 | 1 | 317652353002 | 2022-10-01 | 138.82 |  |  |  |  |  |  |  |  |  |  |  |
| 449 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D448)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 450 | Tổng số tiền phải thanh toán |  |  | `=round(D448+D449,2)` | 24877 | `=D450*E450` |  |  |  |  |  |  |  |  |  |
| 453 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 455 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 456 | 1 | 317652353002 | 2022-11-01 | 134.73 |  |  |  |  |  |  |  |  |  |  |  |
| 457 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D456)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 458 | Tổng số tiền phải thanh toán |  |  | `=round(D456+D457,2)` | 24795 | `=D458*E458` |  |  |  |  |  |  |  |  |  |
| 461 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 463 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 464 | 1 | 317652353002 | 2022-12-01 | 138.73 |  |  |  |  |  |  |  |  |  |  |  |
| 465 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D464)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 466 | Tổng số tiền phải thanh toán |  |  | `=round(D464+D465,2)` | 23610 | `=D466*E466` |  |  |  |  |  |  |  |  |  |
| 469 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 471 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 472 | 1 | 317652353002 | 2023-01-01 | 138.68 |  |  |  |  |  |  |  |  |  |  |  |
| 473 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D472)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 474 | Tổng số tiền phải thanh toán |  |  | `=round(D472+D473,2)` | 23770 | `=D474*E474` |  |  |  |  |  |  |  |  |  |
| 477 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 479 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 480 | 1 | 317652353002 | 2023-02-01 | 110.82 |  |  |  |  |  |  |  |  |  |  |  |
| 481 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D480)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 482 | Tổng số tiền phải thanh toán |  |  | `=round(D480+D481,2)` | 23740 | `=D482*E482` |  |  |  |  |  |  |  |  |  |
| 485 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 487 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 488 | 1 | 317652353002 | 2023-03-01 | 113.57 |  |  |  |  |  |  |  |  |  |  |  |
| 489 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D488)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 490 | Tổng số tiền phải thanh toán |  |  | `=round(D488+D489,2)` | 23630 | `=D490*E490` |  |  |  |  |  |  |  |  |  |
| 493 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 495 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 496 | 1 | 317652353002 | 2023-04-01 | 95.3 |  |  |  |  |  |  |  |  |  |  |  |
| 497 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D496)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 498 | Tổng số tiền phải thanh toán |  |  | `=round(D496+D497,2)` | 23620 | `=D498*E498` |  |  |  |  |  |  |  |  |  |
| 501 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 503 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 504 | 1 | 317652353002 | 2023-05-01 | 89.07 |  |  |  |  |  |  |  |  |  |  |  |
| 505 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=sum(D504)*12%` |  |  |  |  |  |  |  |  |  |  |  |
| 506 | Tổng số tiền phải thanh toán |  |  | `=round(D504+D505,2)` | 23660 | `=D506*E506` |  |  |  |  |  |  |  |  |  |
| 509 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 511 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 512 | 1 | 317652353002 | 2023-06-01 | 87.63 |  |  |  |  |  |  |  |  |  |  |  |
| 513 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D512)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 514 | Tổng số tiền phải thanh toán |  |  | `=round(D512+D513,2)` | 23850 | `=D514*E514` |  |  |  |  |  |  |  |  |  |
| 517 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 519 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 520 | 1 | 317652353002 | 2023-07-01 | 90.2 |  |  |  |  |  |  |  |  |  |  |  |
| 521 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D520)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 522 | Tổng số tiền phải thanh toán |  |  | `=round(D520+D521,2)` | 23950 | `=D522*E522` |  |  |  |  |  |  |  |  |  |
| 526 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 528 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 529 | 1 | 317652353002 | 2023-08-01 | 90.24 |  |  |  |  |  |  |  |  |  |  |  |
| 530 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D529)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 531 | Tổng số tiền phải thanh toán |  |  | `=round(D529+D530,2)` | 24260 | `=D531*E531` |  |  |  |  |  |  |  |  |  |
| 534 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 536 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 537 | 1 | 317652353002 | 2023-09-01 | 77.31 |  |  |  |  |  |  |  |  |  |  |  |
| 538 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D537)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 539 | Tổng số tiền phải thanh toán |  |  | `=round(D537+D538,2)` | 24605 | `=D539*E539` |  |  |  |  |  |  |  |  |  |
| 542 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 544 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 545 | 1 | 317652353002 | 2023-10-01 | 70.93 |  |  |  |  |  |  |  |  |  |  |  |
| 546 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D545)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 547 | Tổng số tiền phải thanh toán |  |  | `=round(D545+D546,2)` | 24540 | `=D547*E547` |  |  |  |  |  |  |  |  |  |
| 551 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 553 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 554 | 1 | 317652353002 | 2023-11-01 | 69.26 |  |  |  |  |  |  |  |  |  |  |  |
| 555 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D554)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 556 | Tổng số tiền phải thanh toán |  |  | `=round(D554+D555,2)` | 24430 | `=D556*E556` |  |  |  |  |  |  |  |  |  |
| 560 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 562 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 563 | 1 | 317652353002 | 2023-12-01 | 71.14 |  |  |  |  |  |  |  |  |  |  |  |
| 564 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D563)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 565 | Tổng số tiền phải thanh toán |  |  | `=round(D563+D564,2)` | 24525 | `=D565*E565` |  |  |  |  |  |  |  |  |  |
| 568 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 570 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 571 | 1 | 317652353002 | 2024-01-01 | 71.14 |  |  |  |  |  |  |  |  |  |  |  |
| 572 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D571)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 573 | Tổng số tiền phải thanh toán |  |  | `=round(D571+D572,2)` | 24700 | `=D573*E573` |  |  |  |  |  |  |  |  |  |
| 577 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 579 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 580 | 1 | 317652353002 | 2024-02-01 | 67.66 |  |  |  |  |  |  |  |  |  |  |  |
| 581 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D580)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 582 | Tổng số tiền phải thanh toán |  |  | `=round(D580+D581,2)` | 24770 | `=D582*E582` |  |  |  |  |  |  |  |  |  |
| 586 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 588 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 589 | 1 | 317652353002 | 2024-03-01 | 71.26 |  |  |  |  |  |  |  |  |  |  |  |
| 590 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D589)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 591 | Tổng số tiền phải thanh toán |  |  | `=round(D589+D590,2)` | 25170 | `=D591*E591` |  |  |  |  |  |  |  |  |  |
| 595 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 597 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 598 | 1 | 317652353002 | 2024-04-01 | 69.94 |  |  |  |  |  |  |  |  |  |  |  |
| 599 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D598)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 600 | Tổng số tiền phải thanh toán |  |  | `=round(D598+D599,2)` | 25484 | `=D600*E600` |  |  |  |  |  |  |  |  |  |
| 604 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 606 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 607 | 1 | 317652353002 | 2024-05-01 | 79.73 |  |  |  |  |  |  |  |  |  |  |  |
| 608 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  | `=round(sum(D607)*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 609 | Tổng số tiền phải thanh toán |  |  | `=round(D607+D608,2)` | 25462 | `=D609*E609` |  |  |  |  |  |  |  |  |  |
| 613 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 615 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 616 | 1 | 317652353002 | 2024-06-01 | 77.77 |  |  |  |  |  |  |  |  |  |  |  |
| 617 |  | Phí dịch vụ  |  | `=round(D616*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 618 |  | Chiết khấu |  | `=round((D617+D616)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 619 | Thành tiền |  |  | `=D616+D617-D618` | 25464 | `=D619*E619` |  |  |  |  |  |  |  |  |  |
| 620 | Thuế GTGT |  |  |  |  | `=round(F619*10%,0)` |  |  |  |  |  |  |  |  |  |
| 621 | Tổng số tiền phải thanh toán |  |  |  |  | `=F619+F620` |  |  |  |  |  |  |  |  |  |
| 625 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 627 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 628 | 1 | 317652353002 | 2024-07-01 | 79.8 |  |  |  |  |  |  |  |  |  |  |  |
| 629 |  | Phí dịch vụ  |  | `=round(D628*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 630 |  | Chiết khấu |  | `=round((D629+D628)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 631 | Thành tiền |  |  | `=D628+D629-D630` | 25080 | `=D631*E631` |  |  |  |  |  |  |  |  |  |
| 632 | Thuế GTGT |  |  |  |  | `=round(F631*10%,0)` |  |  |  |  |  |  |  |  |  |
| 633 | Tổng số tiền phải thanh toán |  |  |  |  | `=F631+F632` |  |  |  |  |  |  |  |  |  |
| 637 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 639 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 640 | 1 | 317652353002 | 2024-08-01 | 79.72 |  |  |  |  |  |  |  |  |  |  |  |
| 641 |  | Phí dịch vụ  |  | `=round(D640*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 642 |  | Chiết khấu |  | `=round((D641+D640)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 643 | Thành tiền |  |  | `=D640+D641-D642` | 24720 | `=D643*E643` |  |  |  |  |  |  |  |  |  |
| 644 | Thuế GTGT |  |  |  |  | `=round(F643*10%,0)` |  |  |  |  |  |  |  |  |  |
| 645 | Tổng số tiền phải thanh toán |  |  |  |  | `=F643+F644` |  |  |  |  |  |  |  |  |  |
| 649 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 651 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 652 | 1 | 317652353002 | 2024-09-01 | 77.62 |  |  |  |  |  |  |  |  |  |  |  |
| 653 |  | Phí dịch vụ  |  | `=round(D652*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 654 |  | Chiết khấu |  | `=round((D653+D652)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 655 | Thành tiền |  |  | `=D652+D653-D654` | 25020 | `=D655*E655` |  |  |  |  |  |  |  |  |  |
| 656 | Thuế GTGT |  |  |  |  | `=round(F655*10%,0)` |  |  |  |  |  |  |  |  |  |
| 657 | Tổng số tiền phải thanh toán |  |  |  |  | `=F655+F656` |  |  |  |  |  |  |  |  |  |
| 661 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 663 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 664 | 1 | 317652353002 | 2024-10-01 | 79.6 |  |  |  |  |  |  |  |  |  |  |  |
| 665 |  | Phí dịch vụ  |  | `=round(D664*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 666 |  | Chiết khấu |  | `=round((D665+D664)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 667 | Thành tiền |  |  | `=D664+D665-D666` | 25502 | `=D667*E667` |  |  |  |  |  |  |  |  |  |
| 668 | Thuế GTGT |  |  |  |  | `=round(F667*10%,0)` |  |  |  |  |  |  |  |  |  |
| 669 | Tổng số tiền phải thanh toán |  |  |  |  | `=F667+F668` |  |  |  |  |  |  |  |  |  |
| 673 | TỔNG HỢP CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 675 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 676 | 1 | 317652353002 | 2024-11-01 | 77.57 |  |  |  |  |  |  |  |  |  |  |  |
| 677 |  | Phí dịch vụ  |  | `=round(D676*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 678 |  | Chiết khấu |  | `=round((D677+D676)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 679 | Thành tiền |  |  | `=D676+D677-D678` | 25471 | `=D679*E679` |  |  |  |  |  |  |  |  |  |
| 680 | Thuế GTGT |  |  |  |  | `=round(F679*10%,0)` |  |  |  |  |  |  |  |  |  |
| 681 | Tổng số tiền phải thanh toán |  |  |  |  | `=F679+F680` |  |  |  |  |  |  |  |  |  |
| 685 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 687 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 688 | 1 | 317652353002 | 2024-12-01 | 79.6 |  |  |  |  |  |  |  |  |  |  |  |
| 689 |  | Phí dịch vụ  |  | `=round(D688*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 690 |  | Chiết khấu |  | `=round((D689+D688)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 691 | Thành tiền |  |  | `=D688+D689-D690` | 25560 | `=D691*E691` |  |  |  |  |  |  |  |  |  |
| 692 | Thuế GTGT |  |  |  |  | `=round(F691*10%,0)` |  |  |  |  |  |  |  |  |  |
| 693 | Tổng số tiền phải thanh toán |  |  |  |  | `=F691+F692` |  |  |  |  |  |  |  |  |  |
| 697 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 699 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 700 | 1 | 317652353002 | 2025-01-01 | 79.6 |  |  |  |  |  |  |  |  |  |  |  |
| 701 |  | Phí dịch vụ  |  | `=round(D700*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 702 |  | Chiết khấu |  | `=round((D701+D700)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 703 | Thành tiền |  |  | `=D700+D701-D702` | 25740 | `=D703*E703` |  |  |  |  |  |  |  |  |  |
| 704 | Thuế GTGT |  |  |  |  | `=round(F703*10%,0)` |  |  |  |  |  |  |  |  |  |
| 705 | Tổng số tiền phải thanh toán |  |  |  |  | `=F703+F704` |  |  |  |  |  |  |  |  |  |
| 709 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 711 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 712 | 1 | 317652353002 | 2025-02-01 | 73.46 |  |  |  |  |  |  |  |  |  |  |  |
| 713 |  | Phí dịch vụ  |  | `=round(D712*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 714 |  | Chiết khấu |  | `=round((D713+D712)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 715 | Thành tiền |  |  | `=D712+D713-D714` | 25670 | `=D715*E715` |  |  |  |  |  |  |  |  |  |
| 716 | Thuế GTGT |  |  |  |  | `=round(F715*10%,0)` |  |  |  |  |  |  |  |  |  |
| 717 | Tổng số tiền phải thanh toán |  |  |  |  | `=F715+F716` |  |  |  |  |  |  |  |  |  |
| 721 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 723 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 724 | 1 | 317652353002 | 2025-03-01 | 79.07 |  |  |  |  |  |  |  |  |  |  |  |
| 725 |  | Phí dịch vụ  |  | `=round(D724*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 726 |  | Chiết khấu |  | `=round((D725+D724)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 727 | Thành tiền |  |  | `=D724+D725-D726` | 26000 | `=D727*E727` |  |  |  |  |  |  |  |  |  |
| 728 | Thuế GTGT |  |  |  |  | `=round(F727*10%,0)` |  |  |  |  |  |  |  |  |  |
| 729 | Tổng số tiền phải thanh toán |  |  |  |  | `=F727+F728` |  |  |  |  |  |  |  |  |  |
| 733 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 735 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 736 | 1 | 317652353002 | 2025-04-01 | 77.57 |  |  |  |  |  |  |  |  |  |  |  |
| 737 |  | Phí dịch vụ  |  | `=round(D736*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 738 |  | Chiết khấu |  | `=round((D737+D736)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 739 | Thành tiền |  |  | `=D736+D737-D738` | 26140 | `=D739*E739` |  |  |  |  |  |  |  |  |  |
| 740 | Thuế GTGT |  |  |  |  | `=round(F739*10%,0)` |  |  |  |  |  |  |  |  |  |
| 741 | Tổng số tiền phải thanh toán |  |  |  |  | `=F739+F740` |  |  |  |  |  |  |  |  |  |
| 745 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 747 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 748 | 1 | 317652353002 | 2025-05-01 | 79.76 |  |  |  |  |  |  |  |  |  |  |  |
| 749 |  | Phí dịch vụ  |  | `=round(D748*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 750 |  | Chiết khấu |  | `=round((D749+D748)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 751 | Thành tiền |  |  | `=D748+D749-D750` | 26223 | `=D751*E751` |  |  |  |  |  |  |  |  |  |
| 752 | Thuế GTGT |  |  |  |  | `=round(F751*10%,0)` |  |  |  |  |  |  |  |  |  |
| 753 | Tổng số tiền phải thanh toán |  |  |  |  | `=F751+F752` |  |  |  |  |  |  |  |  |  |
| 757 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 759 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 760 | 1 | 317652353002 | 2025-06-01 | 77.84 |  |  |  |  |  |  |  |  |  |  |  |
| 761 |  | Phí dịch vụ  |  | `=round(D760*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 762 |  | Chiết khấu |  | `=round((D761+D760)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 763 | Thành tiền |  |  | `=D760+D761-D762` | 26310 | `=D763*E763` |  |  |  |  |  |  |  |  |  |
| 764 | Thuế GTGT |  |  |  |  | `=round(F763*10%,0)` |  |  |  |  |  |  |  |  |  |
| 765 | Tổng số tiền phải thanh toán |  |  |  |  | `=F763+F764` |  |  |  |  |  |  |  |  |  |
| 769 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 771 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 772 | 1 | 317652353002 | 2025-07-01 | 79.85 |  |  |  |  |  |  |  |  |  |  |  |
| 773 |  | Phí dịch vụ  |  | `=round(D772*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 774 |  | Chiết khấu |  | `=round((D773+D772)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 775 | Thành tiền |  |  | `=D772+D773-D774` | 26450 | `=D775*E775` |  |  |  |  |  |  |  |  |  |
| 776 | Thuế GTGT |  |  |  |  | `=round(F775*10%,0)` |  |  |  |  |  |  |  |  |  |
| 777 | Tổng số tiền phải thanh toán |  |  |  |  | `=F775+F776` |  |  |  |  |  |  |  |  |  |
| 781 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 783 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 784 | 1 | 317652353002 | 2025-08-01 | 81.85 |  |  |  |  |  |  |  |  |  |  |  |
| 785 |  | Phí dịch vụ  |  | `=round(D784*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 786 |  | Chiết khấu |  | `=round((D785+D784)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 787 | Thành tiền |  |  | `=D784+D785-D786` | 26476 | `=D787*E787` |  |  |  |  |  |  |  |  |  |
| 788 | Thuế GTGT |  |  |  |  | `=round(F787*10%,0)` |  |  |  |  |  |  |  |  |  |
| 789 | Tổng số tiền phải thanh toán |  |  |  |  | `=F787+F788` |  |  |  |  |  |  |  |  |  |
| 794 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 796 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 797 | 1 | 317652353002 | 2025-09-01 | 90.41 |  |  |  |  |  |  |  |  |  |  |  |
| 798 |  | Phí dịch vụ  |  | `=round(D797*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 799 |  | Chiết khấu |  | `=round((D798+D797)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 800 | Thành tiền |  |  | `=D797+D798-D799` | 26384 | `=D800*E800` |  |  |  |  |  |  |  |  |  |
| 801 | Thuế GTGT |  |  |  |  | `=round(F800*10%,0)` |  |  |  |  |  |  |  |  |  |
| 802 | Tổng số tiền phải thanh toán |  |  |  |  | `=F800+F801` |  |  |  |  |  |  |  |  |  |
| 807 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 809 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 810 | 1 | 317652353002 | 2025-10-01 | 92.83 |  |  |  |  |  |  |  |  |  |  |  |
| 811 |  | Phí dịch vụ  |  | `=round(D810*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 812 |  | Chiết khấu |  | `=round((D811+D810)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 813 | Thành tiền |  |  | `=D810+D811-D812` | 26376 | `=D813*E813` |  |  |  |  |  |  |  |  |  |
| 814 | Thuế GTGT |  |  |  |  | `=round(F813*10%,0)` |  |  |  |  |  |  |  |  |  |
| 815 | Tổng số tiền phải thanh toán |  |  |  |  | `=F813+F814` |  |  |  |  |  |  |  |  |  |
| 820 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 822 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 823 | 1 | 317652353002 | 2025-11-01 | 90.41 |  |  |  |  |  |  |  |  |  |  |  |
| 824 |  | Phí dịch vụ  |  | `=round(D823*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 825 |  | Chiết khấu |  | `=round((D824+D823)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 826 | Thành tiền |  |  | `=D823+D824-D825` | 26401 | `=D826*E826` |  |  |  |  |  |  |  |  |  |
| 827 | Thuế GTGT |  |  |  |  | `=round(F826*10%,0)` |  |  |  |  |  |  |  |  |  |
| 828 | Tổng số tiền phải thanh toán |  |  |  |  | `=F826+F827` |  |  |  |  |  |  |  |  |  |
| 834 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 836 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 837 | 1 | 317652353002 | 2025-12-01 | 92.83 |  |  |  |  |  |  |  |  |  |  |  |
| 838 |  | Phí dịch vụ  |  | `=round(D837*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 839 |  | Chiết khấu |  | `=round((D838+D837)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 840 | Thành tiền |  |  | `=D837+D838-D839` | 26385 | `=D840*E840` |  |  |  |  |  |  |  |  |  |
| 841 | Thuế GTGT |  |  |  |  | `=round(F840*10%,0)` |  |  |  |  |  |  |  |  |  |
| 842 | Tổng số tiền phải thanh toán |  |  |  |  | `=F840+F841` |  |  |  |  |  |  |  |  |  |
| 848 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 850 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 851 | 1 | 317652353002 | 2026-01-01 | 92.83 |  |  |  |  |  |  |  |  |  |  |  |
| 852 |  | Phí dịch vụ  |  | `=round(D851*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 853 |  | Chiết khấu |  | `=round((D852+D851)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 854 | Thành tiền |  |  | `=D851+D852-D853` | 26180 | `=D854*E854` |  |  |  |  |  |  |  |  |  |
| 855 | Thuế GTGT |  |  |  |  | `=round(F854*10%,0)` |  |  |  |  |  |  |  |  |  |
| 856 | Tổng số tiền phải thanh toán |  |  |  |  | `=F854+F855` |  |  |  |  |  |  |  |  |  |
| 862 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 864 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 865 | 1 | 317652353002 | 2026-02-01 | 85.57 |  |  |  |  |  |  |  |  |  |  |  |
| 866 |  | Phí dịch vụ  |  | `=round(D865*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 867 |  | Chiết khấu |  | `=round((D866+D865)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 868 | Thành tiền |  |  | `=D865+D866-D867` | 26315 | `=D868*E868` |  |  |  |  |  |  |  |  |  |
| 869 | Thuế GTGT |  |  |  |  | `=round(F868*10%,0)` |  |  |  |  |  |  |  |  |  |
| 870 | Tổng số tiền phải thanh toán |  |  |  |  | `=F868+F869` |  |  |  |  |  |  |  |  |  |
| 876 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 878 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 879 | 1 | 317652353002 | 2026-03-01 | 92.83 |  |  |  |  |  |  |  |  |  |  |  |
| 880 |  | Phí dịch vụ  |  | `=round(D879*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 881 |  | Chiết khấu |  | `=round((D880+D879)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 882 | Thành tiền |  |  | `=D879+D880-D881` | 26357 | `=round(D882*E882,0)` |  |  |  |  |  |  |  |  |  |
| 883 | Thuế GTGT |  |  |  |  | `=round(F882*10%,0)` |  |  |  |  |  |  |  |  |  |
| 884 | Tổng số tiền phải thanh toán |  |  |  |  | `=F882+F883` |  |  |  |  |  |  |  |  |  |
| 889 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 891 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 892 | 1 | 317652353002 | 2026-04-01 | 89.81 |  |  |  |  |  |  |  |  |  |  |  |
| 893 |  | Phí dịch vụ  |  | `=round(D892*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 894 |  | Chiết khấu |  | `=round((D893+D892)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 895 | Thành tiền |  |  | `=D892+D893-D894` | 26379 | `=round(D895*E895,0)` |  |  |  |  |  |  |  |  |  |
| 896 | Thuế GTGT |  |  |  |  | `=round(F895*10%,0)` |  |  |  |  |  |  |  |  |  |
| 897 | Tổng số tiền phải thanh toán |  |  |  |  | `=F895+F896` |  |  |  |  |  |  |  |  |  |
| 903 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 905 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 906 | 1 | 317652353002 | 2026-05-01 | 92.83 |  |  |  |  |  |  |  |  |  |  |  |
| 907 |  | Phí dịch vụ  |  | `=round(D906*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 908 |  | Chiết khấu |  | `=round((D907+D906)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 909 | Thành tiền |  |  | `=D906+D907-D908` | 26410 | `=round(D909*E909,0)` |  |  |  |  |  |  |  |  |  |
| 910 | Thuế GTGT |  |  |  |  | `=round(F909*10%,0)` |  |  |  |  |  |  |  |  |  |
| 911 | Tổng số tiền phải thanh toán |  |  |  |  | `=F909+F910` |  |  |  |  |  |  |  |  |  |
| 916 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 918 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 919 | 1 | 317652353002 | 2026-06-01 | 90.41 |  |  |  |  |  |  |  |  |  |  |  |
| 920 |  | Phí dịch vụ  |  | `=round(D919*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 921 |  | Chiết khấu |  | `=round((D920+D919)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 922 | Thành tiền |  |  | `=D919+D920-D921` | 26474 | `=round(D922*E922,0)` |  |  |  |  |  |  |  |  |  |
| 923 | Thuế GTGT |  |  |  |  | `=round(F922*10%,0)` |  |  |  |  |  |  |  |  |  |
| 924 | Tổng số tiền phải thanh toán |  |  |  |  | `=F922+F923` |  |  |  |  |  |  |  |  |  |
| 929 | ĐỐI SOÁT CHI PHÍ AWS IDOCEAN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 931 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 932 | 1 | 317652353002 | 2026-07-01 | 92.76 |  |  |  |  |  |  |  |  |  |  |  |
| 933 |  | Phí dịch vụ  |  | `=round(D932*12%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 934 |  | Chiết khấu |  | `=round((D933+D932)*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |
| 935 | Thành tiền |  |  | `=D932+D933-D934` | 26400 | `=round(D935*E935,0)` |  |  |  |  |  |  |  |  |  |
| 936 | Thuế GTGT |  |  |  |  | `=round(F935*10%,0)` |  |  |  |  |  |  |  |  |  |
| 937 | Tổng số tiền phải thanh toán |  |  |  |  | `=F935+F936` |  |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 373 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (453 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})*12%` | 27 | `D289` |
| D | `=round(D{r}*12%,2)` | 26 | `D617` |
| D | `=round((D{r}+D{r})*2%,2)` | 26 | `D618` |
| D | `=D{r}+D{r}-D{r}` | 26 | `D619` |
| D | `=round(D{r}+D{r},2)` | 25 | `D409` |
| D | `=sum(D{r}:D{r})` | 14 | `D290` |
| D | `=round(sum(D{r})*12%,2)` | 12 | `D513` |
| D | `=E{r}` | 10 | `D28` |
| D | `=100*23300` | 1 | `D6` |
| D | `=6000000+E{r}` | 1 | `D115` |
| D | `=4200000+E{r}` | 1 | `D132` |
| E | `=sum(E{r})*12%` | 11 | `E116` |
| E | `=sum(E{r}:E{r})` | 10 | `E9` |
| E | `=sum(D{r})-G{r}` | 9 | `E31` |
| E | `=sum(E{r})` | 9 | `E117` |
| E | `=sum(D{r}:D{r})-G{r}` | 8 | `E12` |
| E | `=E{r}*12%` | 6 | `E29` |
| E | `=D{r}-G{r}` | 2 | `E135` |
| E | `=E{r}*0.12` | 1 | `E10` |
| E | `=E{r}+E{r}` | 1 | `E11` |
| E | `=sum(E{r}:E{r})*12%` | 1 | `E68` |
| F | `=D{r}*E{r}` | 47 | `F288` |
| F | `=F{r}+F{r}` | 39 | `F300` |
| F | `=round(F{r}*10%,0)` | 26 | `F620` |
| F | `=round(D{r}*E{r},0)` | 18 | `F298` |
| F | `=F{r}*12%` | 14 | `F289` |
| G | `=E{r}*F{r}` | 41 | `G5` |
| G | `=sum(G{r}:G{r})` | 19 | `G9` |
| G | `=G{r}*0.12` | 1 | `G10` |
| G | `=G{r}+G{r}` | 1 | `G11` |
| H | `=G{r}*1.12` | 4 | `H5` |
| H | `=sum(H{r}:H{r})` | 1 | `H9` |
| H | `=D{r}-G{r}` | 1 | `H11` |
| H | `=G{r}+G{r}-D{r}` | 1 | `H28` |
| H | `=(D{r}-E{r})/23300` | 1 | `H31` |
| H | `=D{r}+E{r}-E{r}` | 1 | `H65` |
| H | `=G{r}-G{r}-G{r}` | 1 | `H69` |
| H | `=6000000+E{r}` | 1 | `H102` |
| H | `=2383908+206434` | 1 | `H103` |
| I | `=4200000-G{r}` | 1 | `I134` |
| I | `=G{r}+G{r}+307192` | 1 | `I279` |
| M | `=sum(M{r})*12%` | 2 | `M408` |
| M | `=round(M{r}+M{r},2)` | 2 | `M409` |
| O | `=M{r}*N{r}` | 2 | `O409` |
