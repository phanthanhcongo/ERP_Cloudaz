# GOTADI

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `GOTADI`  
> **Vùng dữ liệu:** 775 dòng × 17 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 4 | 1 | 36557210730 | 2019-07-01 | 13193.19 |  |  | 23350 | `=D4*G4` |  |  |  | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |
| 5 | 2 | 479635178488 | 2019-07-01 | 6291.15 |  |  | 23350 | `=D5*G5` |  |  |  |  |  |  |  |  |  |
| 6 |  | Tổng |  | `=D4+D5` |  |  |  | `=H4+H5` |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá ngày  | Thành tiền |
| 7 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | 2448.2 |  |  |  | 54830489 |  |  |  | 1 | 36557210730 |  |  |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` |  |  | `=G6+G7` | `=H6+H7` |  |  |  | 2 | 479635178488 |  |  |  |  |
| 9 |  |  |  |  |  |  |  |  |  |  |  |  | Tổng |  |  |  |  |
| 10 |  |  |  |  |  |  |  |  |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |
| 11 |  |  |  |  |  |  |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  |  |  |  |
| 12 |  |  |  | Hà Nội, ngày 02 tháng 08 năm 2019 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Hà Nội, ngày 02 tháng 08 năm 2019 |  |  |
| 16 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Người lập |  |  |
| 17 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 24 | 1 | 36557210730 | 2019-08-01 | 7325.58 |  |  | 23320 | `=D24*G24` |  |  |  |  |  |  |  |  |  |
| 25 | 2 | 479635178488 | 2019-08-01 | 6483.23 |  |  | 23320 | `=D25*G25` |  |  |  |  |  |  |  |  |  |
| 26 |  | Tổng |  | `=D24+D25` |  |  |  | `=H24+H25` |  |  |  |  |  |  |  |  |  |
| 27 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D26*0.12` |  |  |  | `=H26*0.12` |  |  |  |  |  |  |  |  |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=D26+D27` |  |  | `=G26+G27` | `=H26+H27` |  |  |  |  |  |  |  |  |  |
| 32 |  |  |  | Hà Nội, ngày 02 tháng 08 năm 2019 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 45 | 1 | 36557210730 | 2019-08-01 | 7325.58 |  |  | 23320 | `=D45*G45` |  |  |  |  |  |  |  |  |  |
| 46 | 2 | 479635178488 | 2019-08-01 | 6483.23 |  |  | 23320 | `=D46*G46` |  |  |  |  |  |  |  |  |  |
| 47 |  | Tổng |  | `=D45+D46` |  |  |  | `=H45+H46` |  |  |  |  |  |  |  |  |  |
| 48 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D47*0.12` |  |  | 23320 | `=H47*0.12` |  |  |  |  |  |  |  |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=D47+D48` |  |  | `=G47+G48` | `=H47+H48` |  |  |  |  |  |  |  |  |  |
| 53 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  |  |  | Người lập |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 64 | STT | Tháng | Số ngày trả chậm | Lãi suất trả chậm |  |  | Số tiền trên hóa đơn | Số tiền trả chậm |  |  |  |  |  |  |  |  |  |
| 65 | 1 | 2019-08-01 | 6 | 0.0005 |  |  | 509789828 | `=G65*D65*C65` |  |  |  |  |  |  |  |  |  |
| 66 | 2 | 2019-09-01 | 6 | 0.0005 |  |  | 360664023 | `=G66*D66*C66` |  |  |  |  |  |  |  |  |  |
| 67 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=sum(H65:H66)` |  |  |  |  |  |  |  |  |  |
| 70 |  |  |  |  |  |  | Hà Nội, ngày 21 tháng 09 năm 2019 |  |  |  |  |  |  |  |  |  |  |
| 74 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 75 | Phone: (+84) 24 2124 4844                Email: hello@cloudaz.io                 Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 78 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 81 | 1 | 36557210730 | 2019-09-01 | 5532 |  |  | 23300 | `=D81*G81` |  |  |  |  |  |  |  |  |  |
| 82 | 2 | 479635178488 | 2019-09-02 | 5584.46 |  |  | 23300 | `=D82*G82` |  |  |  |  |  |  |  |  |  |
| 83 | 3 | Phạt trả chậm | 2019-09-03 |  |  |  |  | 2611362 |  |  |  |  |  |  |  |  |  |
| 84 |  | Tổng cộng |  | `=D81+D82` |  |  |  | `=H81+H82` |  |  |  |  |  |  |  |  |  |
| 85 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D84*0.12` |  |  |  | `=H84*0.12` |  |  |  |  |  |  |  |  |  |
| 86 |  | Tổng số tiền phải thanh toán |  | `=D84+D85` |  |  |  | `=H84+H85+H83` |  |  |  |  |  |  |  |  |  |
| 88 |  |  |  | Hà Nội, ngày 04 tháng 10 năm 2019 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 | CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 | Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên, quận Cầu Giấy, Hà Nội |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 92 | Phone: (+84) 24 2124 4844         Email: hello@cloudaz.io        Website: www.cloudaz.io |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 102 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 105 | 1 | 036557210730 | 2019-10-01 | 6092.54 |  |  | 23300 | `=D105*G105` |  |  |  |  |  |  |  |  |  |
| 106 | 2 | 479635178488 | 2019-10-02 | 5677.23 |  |  | 23300 | `=D106*G106` |  |  |  |  |  |  |  |  |  |
| 107 |  | Tổng |  | `=D105+D106` |  |  |  | `=H105+H106` |  |  |  |  |  |  |  |  |  |
| 108 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D107*0.12` |  |  | 23300 | `=H107*0.12` |  |  |  |  |  |  |  |  |  |
| 109 |  | Tổng số tiền phải thanh toán |  | `=D107+D108` |  |  | `=G107+G108` | `=H107+H108` |  |  |  |  |  |  |  |  |  |
| 112 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 113 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 117 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 125 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 127 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 128 | 1 | 036557210730 | 2019-11-01 | 6105.18 |  |  | 23300 | `=D128*G128` |  |  |  |  |  |  |  |  |  |
| 129 | 2 | 479635178488 | 2019-11-02 | 4568.51 |  |  | 23300 | `=D129*G129` |  |  |  |  |  |  |  |  |  |
| 130 |  | Tổng |  | `=D128+D129` |  |  |  | `=H128+H129` |  |  |  |  |  |  |  |  |  |
| 131 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D130*0.12` |  |  | 23300 | `=H130*0.12` |  |  |  |  |  |  |  |  |  |
| 132 |  | Tổng số tiền phải thanh toán |  | `=D130+D131` |  |  | `=G130+G131` | `=H130+H131` |  |  |  |  |  |  |  |  |  |
| 135 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 136 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 140 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 144 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 146 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 147 | 1 | 036557210730 | 2019-12-01 | 6234.9 |  |  | 23300 | `=D147*G147` |  |  |  |  |  |  |  |  |  |
| 148 | 2 | 479635178488 | 2019-12-02 | 4354.96 |  |  | 23300 | `=D148*G148` |  |  |  |  |  |  |  |  |  |
| 149 |  | Tổng |  | `=D147+D148` |  |  |  | `=H147+H148` |  |  |  |  |  |  |  |  |  |
| 150 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D149*0.12` |  |  | 23300 | `=H149*0.12` |  |  |  |  |  |  |  |  |  |
| 151 |  | Tổng số tiền phải thanh toán |  | `=D149+D150` |  |  | `=G149+G150` | `=H149+H150` |  |  |  |  |  |  |  |  |  |
| 154 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 155 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 159 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 162 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 165 | 1 | 036557210730 | 2020-01-01 | 7488.7 |  |  | 23340 | `=D165*G165` |  |  |  |  |  |  |  |  |  |
| 166 | 2 | 479635178488 | 2020-01-02 | 2273.58 |  |  | 23340 | `=D166*G166` |  |  |  |  |  |  |  |  |  |
| 167 |  | Tổng |  | `=D165+D166` |  |  |  | `=H165+H166` |  |  |  |  |  |  |  |  |  |
| 168 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D167*0.12` |  |  | 23340 | `=H167*0.12` |  |  |  |  |  |  |  |  |  |
| 169 |  | Tổng số tiền phải thanh toán |  | `=D167+D168` |  |  | `=G167+G168` | `=H167+H168` |  |  |  |  |  |  |  |  |  |
| 172 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 173 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 177 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 179 | TỔNG HỢP CHI PHÍ TRẢ CHẬM GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 181 | STT | Tháng | Số ngày trả chậm (từ 13/1/2020-5/2/2020) | Lãi suất trả chậm |  |  | Số tiền trên hóa đơn | Số tiền trả chậm |  |  |  |  |  |  |  |  |  |
| 182 | 1 | 2019-12-01 | 15 | 0.0005 |  |  | 276352987 | `=D182*C182*G182` |  |  |  |  |  |  |  |  |  |
| 183 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=sum(H182)` |  |  |  |  |  |  |  |  |  |
| 185 |  |  |  | Hà Nội, ngày 05 tháng 02 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 186 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 190 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 193 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 195 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 196 | 1 | 036557210730 | 2020-02-01 | 7754.52 |  |  | 23320 | `=D196*G196` |  |  |  |  |  |  |  |  |  |
| 197 | 2 | 479635178488 | 2020-02-02 | 438.47 |  |  | 23320 | `=D197*G197` |  |  |  |  |  |  |  |  |  |
| 198 |  | Tổng |  | `=D196+D197` |  |  |  | `=H196+H197` |  |  |  |  |  |  |  |  |  |
| 199 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D198*0.12` |  |  | 23320 | `=H198*0.12` |  |  |  |  |  |  |  |  |  |
| 200 |  | Tổng số tiền phải thanh toán |  | `=D198+D199` |  |  | 23320 | `=H198+H199` |  |  |  |  |  |  |  |  |  |
| 203 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 204 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 208 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 212 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 215 | 1 | 036557210730 | 2020-03-01 | 8337.12 |  |  | 23700 | `=D215*G215` |  |  |  |  |  |  |  |  |  |
| 216 |  | Tổng |  | `=D215` |  |  |  | `=H215` |  |  |  |  |  |  |  |  |  |
| 217 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D216*0.12` |  |  | 23700 | `=H216*0.12` |  |  |  |  |  |  |  |  |  |
| 218 |  | Tổng số tiền phải thanh toán |  | `=D216+D217` |  |  | 23700 | `=H216+H217` |  |  |  |  |  |  |  |  |  |
| 221 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 222 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 226 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 229 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 231 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 232 | 1 | 036557210730 | 2020-04-01 | 7108.1 |  |  | 23600 | `=D232*G232` |  |  |  |  |  |  |  |  |  |
| 233 |  | Tổng |  | `=D232` |  |  |  | `=H232` |  |  |  |  |  |  |  |  |  |
| 234 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D233*0.12` |  |  | 23600 | `=H233*0.12` |  |  |  |  |  |  |  |  |  |
| 235 |  | Tổng số tiền phải thanh toán |  | `=D233+D234` |  |  | 23600 | `=H233+H234` |  |  |  |  |  |  |  |  |  |
| 238 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 239 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 243 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 247 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 249 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 250 | 1 | 036557210730 | 2020-05-01 | 5827.44 |  |  | 23350 | `=D250*G250` |  |  |  |  |  |  |  |  |  |
| 251 |  | Tổng |  | `=D250` |  |  |  | `=H250` |  |  |  |  |  |  |  |  |  |
| 252 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D251*0.12` |  |  | 23350 | `=H251*0.12` |  |  |  |  |  |  |  |  |  |
| 253 |  | Tổng số tiền phải thanh toán |  | `=D251+D252` |  |  | 23350 | `=H251+H252` |  |  |  |  |  |  |  |  |  |
| 256 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 257 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 261 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 264 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 266 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá ngày  | Thành tiền |  |  |  |  |  |  |  |  |  |
| 267 | 1 | 036557210730 | 2020-06-01 | 5786.27 |  |  | 23290 | `=D267*G267` |  |  |  |  |  |  |  |  |  |
| 268 |  | Tổng |  | `=D267` |  |  |  | `=H267` |  |  |  |  |  |  |  |  |  |
| 269 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D268*0.12` |  |  | 23290 | `=H268*0.12` |  |  |  |  |  |  |  |  |  |
| 270 |  | Tổng số tiền phải thanh toán |  | `=D268+D269` |  |  | 23290 | `=H268+H269` |  |  |  |  |  |  |  |  |  |
| 273 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 274 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 278 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 281 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 283 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 284 | 1 | 036557210730 | 2020-07-01 | 5602.63 |  |  | 23265 | `=D284*G284` |  |  |  |  |  |  |  |  |  |
| 285 |  | Tổng |  | `=D284` |  |  |  | `=H284` |  |  |  |  |  |  |  |  |  |
| 286 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D285*0.12` |  |  | 23265 | `=H285*0.12` |  |  |  |  |  |  |  |  |  |
| 287 |  | Tổng số tiền phải thanh toán |  | `=D285+D286` |  |  | 23265 | `=H285+H286` |  |  |  |  |  |  |  |  |  |
| 290 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 291 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 295 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 298 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 300 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 301 | 1 | 036557210730 | 2020-08-01 | 4374.25 |  |  | 23270 | `=D301*G301` |  |  |  |  |  |  |  |  |  |
| 302 |  | Tổng |  | `=D301` |  |  |  | `=H301` |  |  |  |  |  |  |  |  |  |
| 303 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D302*0.1` |  |  | 23270 | `=H302*0.1` |  |  |  |  |  |  |  |  |  |
| 304 |  | Tổng số tiền phải thanh toán |  | `=D302+D303` |  |  | 23270 | `=H302+H303` |  |  |  |  |  |  |  |  |  |
| 308 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 310 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 311 | 1 | 036557210730 | 2020-09-01 | 3852.03 |  |  | 23280 | `=D311*G311` |  |  |  |  |  |  |  |  |  |
| 312 |  | Tổng |  | `=D311` |  |  |  | `=H311` |  |  |  |  |  |  |  |  |  |
| 313 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D312*0.1` |  |  | 23280 | `=H312*0.1` |  |  |  |  |  |  |  |  |  |
| 314 |  | Tổng số tiền phải thanh toán |  | `=D312+D313` |  |  | 23280 | `=H312+H313` |  |  |  |  |  |  |  |  |  |
| 317 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 319 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 320 | 1 | 036557210730 | 2020-10-01 | 5442.04 |  |  | 23270 | `=D320*G320` |  |  |  |  |  |  |  |  |  |
| 321 |  | Tổng |  | `=D320` |  |  |  | `=H320` |  |  |  |  |  |  |  |  |  |
| 322 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D321*0.1` |  |  | 23270 | `=H321*0.1` |  |  |  |  |  |  |  |  |  |
| 323 |  | Tổng số tiền phải thanh toán |  | `=D321+D322` |  |  | 23270 | `=H321+H322` |  |  |  |  |  |  |  |  |  |
| 326 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 328 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 329 | 1 | 036557210730 | 2020-11-01 | 4902.65 |  |  | 23235 | `=D329*G329` |  |  |  |  |  |  |  |  |  |
| 330 |  | Tổng |  | `=D329` |  |  |  | `=H329` |  |  |  |  |  |  |  |  |  |
| 331 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D330*0.1` |  |  | 23235 | `=H330*0.1` |  |  |  |  |  |  |  |  |  |
| 332 |  | Tổng số tiền phải thanh toán |  | `=D330+D331` |  |  | 23235 | `=H330+H331` |  |  |  |  |  |  |  |  |  |
| 335 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 337 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 338 | 1 | 036557210730 | 2020-12-01 | 5619.56 |  |  | 23185 | `=D338*G338` |  |  |  |  |  |  |  |  |  |
| 339 |  | Tổng |  | `=D338` |  |  |  | `=H338` |  |  |  |  |  |  |  |  |  |
| 340 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D339*0.1` |  |  | 23185 | 13029042 |  |  |  |  |  |  |  |  |  |
| 341 |  | Tổng số tiền phải thanh toán |  | `=D339+D340` |  |  | 23185 | `=H339+H340` |  |  |  |  |  |  |  |  |  |
| 345 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 347 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 348 | 1 | 036557210730 | 2021-01-01 | 5468.68 |  |  | 23145 | `=D348*G348` |  |  |  |  |  |  |  |  |  |
| 349 |  | Tổng |  | `=D348` |  |  |  | `=H348` |  |  |  |  |  |  |  |  |  |
| 350 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D349*0.1` |  |  | 23145 | `=H349*0.1` |  |  |  |  |  |  |  |  |  |
| 351 |  | Tổng số tiền phải thanh toán |  | `=D349+D350` |  |  | 23145 | `=H349+H350` |  |  |  |  |  |  |  |  |  |
| 354 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 356 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 357 | 1 | 036557210730 | 2021-02-01 | 4622.8 |  |  | 23095 | `=D357*G357` |  |  |  |  |  |  |  |  |  |
| 358 |  | Tổng |  | `=D357` |  |  |  | `=H357` |  |  |  |  |  |  |  |  |  |
| 359 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D358*0.1` |  |  | 23095 | `=H358*0.1` |  |  |  |  |  |  |  |  |  |
| 360 |  | Tổng số tiền phải thanh toán |  | `=D358+D359` |  |  | 23095 | `=H358+H359` |  |  |  |  |  |  |  |  |  |
| 364 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 366 | STT | Số tài khoản | Tên Tài khoản | Tháng |  |  | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |  |  |
| 367 | 1 | 036557210730 | Gotadi | 2021-03-01 |  |  | 4663.51 | 5000 | `=G367` | `=H368-G368` |  |  |  |  |  |  |  |
| 368 |  | Tổng |  |  |  |  | `=sum(G367)` | `=H367` | `=sum(I367)` | `=J367` |  |  |  |  |  |  |  |
| 369 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  |  |  |  | 0 |  |  |  |  |  |  |  |
| 370 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |  | 0 |  |  |  |  |  |  |  |
| 373 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 375 | STT | Số tài khoản | Tên Tài khoản | Tháng |  |  | Billing AWS (USD) (Sử dụng trong kỳ) | Credit đầu kỳ | Còn lại phải thanh toán | Tỷ giá  | Thành tiền |  |  |  |  |  |  |
| 376 | 1 | 036557210730 | Gotadi | 2021-04-01 |  |  | `=4533.67+143.73` | `=J367` | `=G377-H376` | 23150 | `=I376*J376` |  |  |  |  |  |  |
| 377 |  | Tổng |  |  |  |  | `=sum(G376)` | `=H376` | `=sum(I376)` | 23150 | `=K376` |  |  |  |  |  |  |
| 378 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  |  |  | `=I377*0.1` | 23150 | `=K377*0.1` |  |  |  |  |  |  |
| 379 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  | `=sum(I377:I378)` | 23150 | `=sum(K377:K378)` | 110541274 |  |  |  |  |  |
| 384 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 386 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 387 | 1 | 036557210730 | 2021-05-01 | `=2155.03+307.44+195.53` |  |  | 23145 | `=round(D387*G387,0)` |  |  |  |  |  |  |  |  |  |
| 388 |  | Tổng |  | `=D387` |  |  |  | `=H387` |  |  |  |  |  |  |  |  |  |
| 389 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D388*0.1` |  |  | 23145 | `=H388*0.1` |  |  |  |  |  |  |  |  |  |
| 390 |  | Tổng số tiền phải thanh toán |  | `=D388+D389` |  |  | 23145 | `=H388+H389` |  |  |  |  |  |  |  |  |  |
| 395 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 397 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 398 | 1 | 036557210730 | 2021-06-01 | 3497.95 |  |  | 23130 | `=round(D398*G398,0)` | `=711*23130*110%` |  |  |  |  |  |  |  |  |
| 399 |  | Tổng |  | `=D398` |  |  |  | `=H398` |  |  |  |  |  |  |  |  |  |
| 400 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D399*0.1` |  |  | 23130 | `=H399*0.1` |  |  |  |  |  |  |  |  |  |
| 401 |  | Tổng số tiền phải thanh toán |  | `=D399+D400` |  |  | 23130 | `=H399+H400` |  |  |  |  |  |  |  |  |  |
| 405 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 407 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 408 | 1 | 036557210730 | 2021-07-01 | 4500.59 |  |  | 23050 | `=round(D408*G408,0)` |  |  |  |  |  |  |  |  |  |
| 409 |  | Discount (3%) |  | `=D408*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 410 |  | Tổng |  | `=D408-D409` |  |  | 23050 | `=round(D410*G410,0)` |  |  |  |  |  |  |  |  |  |
| 411 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D410*0.08` |  |  | 23050 | `=H410*0.08` |  |  |  |  |  |  |  |  |  |
| 412 |  | Tổng số tiền phải thanh toán |  | `=D410+D411` |  |  | 23050 | `=H410+H411` |  |  |  |  |  |  |  |  |  |
| 416 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 418 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 419 | 1 | 036557210730 | 2021-08-01 | 4668.9 |  |  | 22880 | `=round(D419*G419,0)` |  |  |  |  |  |  |  |  |  |
| 420 |  | Discount (3%) |  | `=D419*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 421 |  | Tổng |  | `=D419-D420` |  |  | 22880 | `=round(D421*G421,0)` |  |  |  |  |  |  |  |  |  |
| 422 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D421*0.08` |  |  | 22880 | `=H421*0.08` |  |  |  |  |  |  |  |  |  |
| 423 |  | Tổng số tiền phải thanh toán |  | `=D421+D422` |  |  | 22880 | `=H421+H422` |  | 111909274.9200000018 | 111909274.9200000018 |  |  |  |  |  |  |
| 427 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 429 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 430 | 1 | 036557210730 | 2021-09-01 | 3878.93 |  |  | 22840 | `=round(D430*G430,0)` |  |  |  |  |  |  |  |  |  |
| 431 |  | Discount (3%) |  | `=D430*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 432 |  | Tổng |  | `=D430-D431` |  |  | 22840 | `=round(D432*G432,0)` |  |  |  |  |  |  |  |  |  |
| 433 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D432*0.08` |  |  | 22840 | `=H432*0.08` |  |  |  |  |  |  |  |  |  |
| 434 |  | Tổng số tiền phải thanh toán |  | `=D432+D433` |  |  | 22840 | `=H432+H433` |  |  |  |  |  |  |  |  |  |
| 438 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 440 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 441 | 1 | 036557210730 | 2021-10-01 | 3389.16 |  |  | 22850 | `=round(D441*G441,0)` |  |  |  |  |  |  |  |  |  |
| 442 |  | Discount (3%) |  | `=D441*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 443 |  | Tổng |  | `=D441-D442` |  |  | 22850 | `=round(D443*G443,0)` |  |  |  |  |  |  |  |  |  |
| 444 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D443*0.08` |  |  | 22850 | `=H443*0.08` |  |  |  |  |  |  |  |  |  |
| 445 |  | Tổng số tiền phải thanh toán |  | `=D443+D444` |  |  | 22850 | `=H443+H444` |  |  |  |  |  |  |  |  |  |
| 449 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 451 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 452 | 1 | 036557210730 | 2021-11-01 | 3242.6 |  |  | 22800 | `=round(D452*G452,0)` |  |  | `=H445+H456+H467` |  |  |  |  |  |  |
| 453 |  | Discount (3%) |  | `=D452*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 454 |  | Tổng |  | `=D452-D453` |  |  | 22800 | `=round(D454*G454,0)` |  |  |  |  |  |  |  |  |  |
| 455 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D454*0.08` |  |  | 22800 | `=H454*0.08` |  |  |  |  |  |  |  |  |  |
| 456 |  | Tổng số tiền phải thanh toán |  | `=D454+D455` |  |  | 22800 | `=H454+H455` | 77450409.3599999994 |  |  |  |  |  |  |  |  |
| 460 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 462 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 463 | 1 | 036557210730 | 2021-12-01 | 3036.56 |  |  | 22920 | `=round(D463*G463,0)` |  |  |  |  |  |  |  |  |  |
| 464 |  | Discount (3%) |  | `=D463*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 465 |  | Tổng |  | `=D463-D464` |  |  | 22920 | `=round(D465*G465,0)` |  |  |  |  |  |  |  |  |  |
| 466 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D465*0.08` |  |  | 22920 | `=H465*0.08` |  |  |  |  |  |  |  |  |  |
| 467 |  | Tổng số tiền phải thanh toán |  | `=D465+D466` |  |  | 22920 | `=H465+H466` | 72910818.3599999994 |  |  |  |  |  |  |  |  |
| 472 |  | TỔNG HỢP PHẠT TRẢ CHẬM |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 474 |  | Số hóa đơn | Tháng | Hạn thanh toán | Ngày bắt đầu tính lãi | Số ngày trả chậm | Lãi suất trả chậm | Số tiền trên hóa đơn | Số tiền trả chậm |  |  |  |  |  |  |  |  |
| 475 |  | 0001030 | 2021-10-01 | 2021-11-20 | 2022-01-17 | `=DATEDIF(D475,E475,"d")+1` | 0.0005 | 752081 | `=F475*G475*H475` |  |  |  |  |  |  |  |  |
| 476 |  | 0001047 | 2021-10-01 | 2021-11-20 | 2022-01-17 | `=DATEDIF(D476,E476,"d")+1` | 0.0005 | 81128560 | `=F476*G476*H476` |  |  |  |  |  |  |  |  |
| 477 |  | 0001196 | 2021-11-01 | 2021-12-20 | 2022-01-17 | `=DATEDIF(D477,E477,"d")+1` | 0.0005 | 1968780 | `=F477*G477*H477` |  |  |  |  |  |  |  |  |
| 478 |  | 0001237 | 2021-11-01 | 2021-12-20 | 2022-01-17 | `=DATEDIF(D478,E478,"d")+1` | 0.0005 | 77450409 | `=F478*G478*H478` |  |  |  |  |  |  |  |  |
| 479 |  |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=sum(I475:I478)` |  |  |  |  |  |  |  |  |
| 483 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 485 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 486 | 1 | 036557210730 | 2022-01-01 | `=2961.16+222.9` |  |  | 22780 | `=round(D486*G486,0)` |  |  |  |  |  |  |  |  |  |
| 487 |  | Discount (3%) |  | `=D486*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 488 |  | Tổng |  | `=D486-D487` |  |  | 22780 | `=round(D488*G488,0)` |  |  |  |  |  |  |  |  |  |
| 489 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D488*0.08` |  |  | 22780 | `=H488*0.08` |  |  |  |  |  |  |  |  |  |
| 490 |  | Tổng số tiền phải thanh toán |  | `=D488+D489` |  |  | 22780 | `=H488+H489` | 75985452 |  |  |  |  |  |  |  |  |
| 494 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 496 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 497 | 1 | 036557210730 | 2022-02-01 | `=2924.49+220.17` |  |  | 22950 | `=round(D497*G497,0)` |  |  |  |  |  |  |  |  |  |
| 498 |  | Discount (3%) |  | `=D497*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 499 |  | Tổng |  | `=D497-D498` |  |  | 22950 | `=round(D499*G499,0)` |  |  |  |  |  |  |  |  |  |
| 500 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D499*0.08` |  |  | 22950 | `=H499*0.08` |  |  |  |  |  |  |  |  |  |
| 501 |  | Tổng số tiền phải thanh toán |  | `=D499+D500` |  |  | 22950 | `=H499+H500` | 75605236.9200000018 |  |  |  |  |  |  |  |  |
| 505 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 507 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 508 | 1 | 036557210730 | 2022-03-01 | `=3312.54+249.34+117.51` |  |  | 22980 | `=round(D508*G508,0)` |  |  |  |  |  |  |  |  |  |
| 509 |  | Discount (3%) |  | `=D508*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 510 |  | Tổng |  | `=D508-D509` |  |  | 22980 | `=round(D510*G510,0)` |  |  |  |  |  |  |  |  |  |
| 511 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D510*0.08` |  |  | 22980 | `=H510*0.08` |  |  |  |  |  |  |  |  |  |
| 512 |  | Tổng số tiền phải thanh toán |  | `=D510+D511` |  |  | 22980 | `=H510+H511` | 88577075.8799999952 |  |  |  |  |  |  |  |  |
| 516 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 518 | STT | Tài khoản | Tháng | Billing AWS (USD) |  |  | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 519 | 1 | 036557210730 | 2022-04-01 | `=3305.37+248.76` |  |  | 23095 | `=round(D519*G519,0)` |  |  |  |  |  |  |  |  |  |
| 520 |  | Discount (3%) |  | `=D519*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 521 |  | Tổng |  | `=D519-D520` |  |  | 23095 | `=round(D521*G521,0)` |  |  |  |  |  |  |  |  |  |
| 522 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D521*0.08` |  |  | 23095 | `=H521*0.08` |  |  |  |  |  |  |  |  |  |
| 523 |  | Tổng số tiền phải thanh toán |  | `=D521+D522` |  |  | 23095 | `=H521+H522` | 85989765.2399999946 |  |  |  |  |  |  |  |  |
| 527 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 529 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 530 | 1 | 036557210730 | 2022-05-01 | 3953.33 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 531 |  | Discount (3%) |  | `=D530*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 532 |  | Tổng |  | `=D530-D531` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 533 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D532*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 534 |  | Tổng số tiền phải thanh toán |  | `=round(D532+D533,2)` | 23330 | `=D534*E534` |  |  |  |  |  |  |  |  |  |  |  |
| 537 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 539 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 540 | 1 | 036557210730 | 2022-06-01 | 3460.26 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 541 |  | Discount (3%) |  | `=D540*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 542 |  | Tổng |  | `=D540-D541` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 543 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D542*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 544 |  | Tổng số tiền phải thanh toán |  | `=round(D542+D543,2)` | 23415 | `=D544*E544` |  |  |  |  |  |  |  |  |  |  |  |
| 548 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 550 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 551 | 1 | 036557210730 | 2022-07-01 | 3818.93 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 552 |  | Discount (3%) |  | `=D551*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 553 |  | Tổng |  | `=D551-D552` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 554 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D553*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 555 |  | Tổng số tiền phải thanh toán |  | `=round(D553+D554,2)` | 23480 | `=D555*E555` |  |  |  |  |  |  |  |  |  |  |  |
| 559 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 561 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 562 | 1 | 036557210730 | 2022-08-01 | 4233.58 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 563 |  | Discount (3%) |  | `=D562*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 564 |  | Tổng |  | `=D562-D563` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 565 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D564*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 566 |  | Tổng số tiền phải thanh toán |  | `=round(D564+D565,2)` | 23600 | `=D566*E566` |  |  |  |  |  |  |  |  |  |  |  |
| 569 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 571 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 572 | 1 | 036557210730 | 2022-09-01 | 5006.91 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 573 |  | Discount (3%) |  | `=D572*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 574 |  | Tổng |  | `=D572-D573` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 575 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D574*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 576 |  | Tổng số tiền phải thanh toán |  | `=round(D574+D575,2)` | 24010 | `=D576*E576` |  |  |  |  |  |  |  |  |  |  |  |
| 579 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 581 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 582 | 1 | 036557210730 | 2022-10-01 | 5105.3140658957 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 583 |  | Discount (3%) |  | `=D582*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 584 |  | Tổng |  | `=D582-D583` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 585 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D584*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 586 |  | Tổng số tiền phải thanh toán |  | `=round(D584+D585,2)` | 24877 | `=D586*E586` |  |  |  |  |  |  |  |  |  |  |  |
| 590 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 592 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 593 | 1 | 036557210730 | 2022-11-01 | 4314.82 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 594 |  | Discount (3%) |  | `=D593*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 595 |  | Tổng |  | `=D593-D594` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 596 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D595*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 597 |  | Tổng số tiền phải thanh toán |  | `=round(D595+D596,2)` | 24795 | `=D597*E597` |  |  |  |  |  |  |  |  |  |  |  |
| 600 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 602 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 603 | 1 | 036557210730 | 2022-12-01 | 4328.5603414264 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 604 |  | Discount (3%) |  | `=D603*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 605 |  | Tổng |  | `=D603-D604` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 606 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D605*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 607 |  | Tổng số tiền phải thanh toán |  | `=round(D605+D606,2)` | 23610 | `=D607*E607` |  |  |  |  |  |  |  |  |  |  |  |
| 610 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 612 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 613 | 1 | 036557210730 | 2023-01-01 | 4310.84 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 614 |  | Discount (3%) |  | `=D613*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 615 |  | Tổng |  | `=D613-D614` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 616 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D615*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 617 |  | Tổng số tiền phải thanh toán |  | `=round(D615+D616,2)` | 23770 | `=D617*E617` |  |  |  |  |  |  |  |  |  |  |  |
| 620 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 622 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 623 | 1 | 036557210730 | 2023-02-01 | 3981.71 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 624 |  | Discount (3%) |  | `=D623*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 625 |  | Tổng |  | `=D623-D624` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 626 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D625*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 627 |  | Tổng số tiền phải thanh toán |  | `=round(D625+D626,2)` | 23850 | `=D627*E627` |  |  |  |  |  |  |  |  |  |  |  |
| 630 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 632 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 633 | 1 | 036557210730 | 2023-03-01 | 4196.19 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 634 |  | Discount (3%) |  | `=D633*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 635 |  | Tổng |  | `=D633-D634` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 636 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D635*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 637 |  | Tổng số tiền phải thanh toán |  | `=round(D635+D636,2)` | 23615 | `=D637*E637` |  |  |  |  |  |  |  |  |  |  |  |
| 640 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 642 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 643 | 1 | 036557210730 | 2023-04-01 | 4299.32 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 644 |  | Discount (3%) |  | `=D643*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 645 |  | Tổng |  | `=D643-D644` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 646 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D645*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 647 |  | Tổng số tiền phải thanh toán |  | `=round(D645+D646,2)` | 23630 | `=D647*E647` |  |  |  |  |  |  |  |  |  |  |  |
| 650 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 652 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 653 | 1 | 036557210730 | 2023-05-01 | 4319.95 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 654 |  | Discount (3%) |  | `=D653*3%` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 655 |  | Tổng |  | `=D653-D654` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 656 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=D655*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 657 |  | Tổng số tiền phải thanh toán |  | `=round(D655+D656,2)` | 23670 | `=D657*E657` |  |  |  |  |  |  |  |  |  |  |  |
| 661 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 663 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 664 | 1 | 036557210730 | 2023-06-01 | 1885.77 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 665 |  | Discount (3%) |  | `=round(D664*3%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 666 |  | Tổng |  | `=D664-D665` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 667 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D666*0.08,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 668 |  | Tổng số tiền phải thanh toán |  | `=round(D666+D667,2)` | 23850 | `=D668*E668` |  |  |  |  |  |  |  |  |  |  |  |
| 672 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 674 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 675 | 1 | 036557210730 | 2023-07-01 | 4314.36 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 676 |  | Discount (3%) |  | `=round(D675*3%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 677 |  | Tổng |  | `=D675-D676` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 678 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D677*0.08,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 679 |  | Tổng số tiền phải thanh toán |  | `=round(D677+D678,2)` | 24010 | `=D679*E679` |  |  |  |  |  |  |  |  |  |  |  |
| 682 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 684 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 685 | 1 | 036557210730 | 2023-08-01 | 4371.5 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 686 |  | Discount (3%) |  | `=round(D685*3%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 687 |  | Tổng |  | `=D685-D686` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 688 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D687*0.08,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 689 |  | Tổng số tiền phải thanh toán |  | `=round(D687+D688,2)` | 24260 | `=D689*E689` |  |  |  |  |  |  |  |  |  |  |  |
| 693 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 695 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 696 | 1 | 036557210730 | 2023-09-01 | 4663.73 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 697 |  | Discount (3%) |  | `=round(D696*3%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 698 |  | Tổng |  | `=D696-D697` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 699 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D698*0.08,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 700 |  | Tổng số tiền phải thanh toán |  | `=round(D698+D699,2)` | 24610 | `=D700*E700` |  |  |  |  |  |  |  |  |  |  |  |
| 703 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 705 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 706 | 1 | 036557210730 | 2023-10-01 | 4719.65 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 707 |  | Discount (2%) |  | `=round(D706*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 708 |  | Tổng |  | `=D706-D707` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 709 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D708*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 710 |  | Tổng số tiền phải thanh toán |  | `=D708+D709` | 24470 | `=D710*E710` |  |  |  |  |  |  |  |  |  |  |  |
| 713 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 715 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 716 | 1 | 036557210730 | 2023-11-01 | 4363.15 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 717 |  | Discount (2%) |  | `=round(D716*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 718 |  | Tổng |  | `=D716-D717` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 719 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D718*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 720 |  | Tổng số tiền phải thanh toán |  | `=D718+D719` | 24400 | `=D720*E720` |  |  |  |  |  |  |  |  |  |  |  |
| 724 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 726 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 727 | 1 | 036557210730 | 2023-12-01 | 4394.65 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 728 |  | Discount (2%) |  | `=round(D727*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 729 |  | Tổng |  | `=D727-D728` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 730 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D729*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 731 |  | Tổng số tiền phải thanh toán |  | `=D729+D730` | 24650 | `=D731*E731` |  |  |  |  |  |  |  |  |  |  |  |
| 735 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 737 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 738 | 1 | 036557210730 | 2024-01-01 | 4439.44 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 739 |  | Discount (2%) |  | `=round(D738*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 740 |  | Tổng |  | `=D738-D739` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 741 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D740*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 742 |  | Tổng số tiền phải thanh toán |  | `=D740+D741` | 24680 | `=D742*E742` |  |  |  |  |  |  |  |  |  |  |  |
| 746 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 748 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 749 | 1 | 036557210730 | 2024-02-01 | 4775.76 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 750 |  | Discount (2%) |  | `=round(D749*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 751 |  | Tổng |  | `=D749-D750` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 752 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D751*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 753 |  | Tổng số tiền phải thanh toán |  | `=D751+D752` | 24790 | `=D753*E753` |  |  |  |  |  |  |  |  |  |  |  |
| 757 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 759 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 760 | 1 | 036557210730 | 2024-03-01 | 5262.71 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 761 |  | Discount (2%) |  | `=round(D760*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 762 |  | Tổng |  | `=D760-D761` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 763 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D762*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 764 |  | Tổng số tiền phải thanh toán |  | `=D762+D763` | 25130 | `=D764*E764` |  |  |  |  |  |  |  |  |  |  |  |
| 768 | TỔNG HỢP CHI PHÍ GOTADI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 770 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |
| 771 | 1 | 036557210730 | 2024-04-01 | 3938.53 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 772 |  | Discount (2%) |  | `=round(D771*2%,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 773 |  | Tổng |  | `=D771-D772` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 774 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  | `=round(D773*0.05,2)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 775 |  | Tổng số tiền phải thanh toán |  | `=D773+D774` | 25484 | `=D775*E775` |  |  |  |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 307 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (413 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 49 | `D6` |
| D | `=D{r}-D{r}` | 34 | `D410` |
| D | `=D{r}*3%` | 23 | `D409` |
| D | `=D{r}*0.08` | 23 | `D411` |
| D | `=round(D{r}+D{r},2)` | 17 | `D534` |
| D | `=D{r}` | 14 | `D216` |
| D | `=D{r}*0.12` | 13 | `D27` |
| D | `=D{r}*0.1` | 9 | `D303` |
| D | `=round(D{r}*2%,2)` | 7 | `D707` |
| D | `=round(D{r}*0.05,2)` | 7 | `D709` |
| D | `=round(D{r}*3%,2)` | 4 | `D665` |
| D | `=round(D{r}*0.08,2)` | 4 | `D667` |
| D | `=2155.03+307.44+195.53` | 1 | `D387` |
| D | `=2961.16+222.9` | 1 | `D486` |
| D | `=2924.49+220.17` | 1 | `D497` |
| D | `=3312.54+249.34+117.51` | 1 | `D508` |
| D | `=3305.37+248.76` | 1 | `D519` |
| F | `=D{r}*E{r}` | 24 | `F534` |
| F | `=DATEDIF(D{r},E{r},"d")+1` | 4 | `F475` |
| G | `=G{r}+G{r}` | 7 | `G8` |
| G | `=sum(G{r})` | 2 | `G368` |
| G | `=4533.67+143.73` | 1 | `G376` |
| H | `=H{r}+H{r}` | 41 | `H6` |
| H | `=D{r}*G{r}` | 30 | `H4` |
| H | `=round(D{r}*G{r},0)` | 22 | `H387` |
| H | `=H{r}` | 16 | `H216` |
| H | `=H{r}*0.12` | 13 | `H27` |
| H | `=H{r}*0.08` | 10 | `H411` |
| H | `=H{r}*0.1` | 8 | `H303` |
| H | `=G{r}*D{r}*C{r}` | 2 | `H65` |
| H | `=sum(H{r}:H{r})` | 1 | `H67` |
| H | `=H{r}+H{r}+H{r}` | 1 | `H86` |
| H | `=D{r}*C{r}*G{r}` | 1 | `H182` |
| H | `=sum(H{r})` | 1 | `H183` |
| H | `=J{r}` | 1 | `H376` |
| I | `=F{r}*G{r}*H{r}` | 4 | `I475` |
| I | `=sum(I{r})` | 2 | `I368` |
| I | `=sum(I{r}:I{r})` | 2 | `I379` |
| I | `=G{r}` | 1 | `I367` |
| I | `=G{r}-H{r}` | 1 | `I376` |
| I | `=I{r}*0.1` | 1 | `I378` |
| I | `=711*23130*110%` | 1 | `I398` |
| J | `=H{r}-G{r}` | 1 | `J367` |
| J | `=J{r}` | 1 | `J368` |
| K | `=I{r}*J{r}` | 1 | `K376` |
| K | `=K{r}` | 1 | `K377` |
| K | `=K{r}*0.1` | 1 | `K378` |
| K | `=sum(K{r}:K{r})` | 1 | `K379` |
| K | `=H{r}+H{r}+H{r}` | 1 | `K452` |
