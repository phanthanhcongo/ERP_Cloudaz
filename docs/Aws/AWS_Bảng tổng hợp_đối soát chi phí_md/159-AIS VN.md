# AIS VN

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `AIS VN`  
> **Vùng dữ liệu:** 265 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 7 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 9 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 10 | 1 | 480367881879 | 2020-01-01 | 196.15 | 23320 | `=D10*E10` |  | `=F13+F29+F46` |
| 11 |  | Tổng cộng |  | `=D10` |  | `=F10` |  | `=32659225-H10` |
| 12 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D11*0.1` |  | `=F11*0.1` |  |  |
| 13 |  | Tổng số tiền phải thanh toán |  | `=D11+D12` |  | `=F11+F12` |  |  |
| 15 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |
| 16 |  |  |  | Người lập  |  |  |  |  |
| 20 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 23 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 26 | 1 | 480367881879 | 2020-02-01 | 280.6 | 23320 | `=D26*E26` |  |  |
| 27 |  | Tổng cộng |  | `=D26` |  | `=F26` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D27*0.1` |  | `=F27*0.1` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=D27+D28` |  | `=F27+F28` |  |  |
| 31 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |
| 32 |  |  |  | Người lập  |  |  |  |  |
| 36 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 40 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 43 | 1 | 480367881879 | 2020-03-01 | 474.27 | 23700 | `=D43*E43` |  |  |
| 44 |  | Tổng cộng |  | `=D43` |  | `=F43` |  |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D44*0.1` |  | `=F44*0.1` |  |  |
| 46 |  | Tổng số tiền phải thanh toán |  | `=D44+D45` |  | `=F44+F45` |  |  |
| 48 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |
| 49 |  |  |  | Người lập  |  |  |  |  |
| 53 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 56 | Khách đã thanh toán lần 1 |  |  |  |  | 9225216 |  |  |
| 57 | Khách đã thanh toán lần 2 |  |  |  |  | 32659225 |  |  |
| 58 | Chi phí AWS thực tế sử sụng trong tháng 1, 2, 3 năm 2020 |  |  |  |  | `=F13+F29+F46` |  |  |
| 59 | Số tiền cần trả lại khách hàng AIS VN (THE CLOUDVIET) |  |  |  |  | `=F56+F57-F58` |  |  |
| 63 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 66 | 1 | 480367881879 | 2020-04-01 | 559.9 | 23600 | `=D66*E66` |  |  |
| 67 |  | Tổng cộng |  | `=D66` |  | `=F66` |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D67*0.1` |  | `=F67*0.1` |  |  |
| 69 |  | Tổng số tiền phải thanh toán |  | `=D67+D68` |  | `=F67+F68` |  |  |
| 71 | Số tiền còn lại:  | `=F59-F69` |  |  |  |  |  |  |
| 73 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |
| 74 |  |  |  | Người lập  |  |  |  |  |
| 78 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 81 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 84 | 1 | 480367881879 | 2020-05-01 | 505.14 | 23350 | `=D84*E84` |  |  |
| 85 |  | Tổng cộng |  | `=D84` |  | `=F84` |  |  |
| 86 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D85*0.1` |  | `=F85*0.1` |  |  |
| 87 |  | Tổng số tiền phải thanh toán (tạm tính) |  | `=D85+D86` |  | `=F85+F86` |  |  |
| 88 | Tồn đầu kỳ |  |  |  |  | `=B71` |  |  |
| 89 | Tổng số tiền phải thanh toán |  |  |  |  | `=F87-F88` |  |  |
| 92 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |
| 93 |  |  |  | Người lập  |  |  |  |  |
| 97 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 100 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 103 | 1 | 480367881879 | 2020-06-01 | 339.56 | 23290 | `=D103*E103` |  |  |
| 104 |  | Tổng cộng |  | `=D103` |  | `=F103` |  |  |
| 105 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D104*0.1` |  | `=F104*0.1` |  |  |
| 106 | Tổng số tiền phải thanh toán |  |  | `=sum(D104:D105)` |  | `=sum(F104:F105)` |  |  |
| 109 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |
| 110 |  |  |  | Người lập  |  |  |  |  |
| 114 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 117 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 120 | 1 | 480367881879 | 2020-07-01 | 265.06 | 23265 | `=D120*E120` |  |  |
| 121 |  | Tổng cộng |  | `=D120` |  | `=F120` |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D121*0.1` |  | `=F121*0.1` |  |  |
| 123 | Tổng số tiền phải thanh toán |  |  | `=sum(D121:D122)` |  | `=sum(F121:F122)` |  |  |
| 126 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 127 |  |  |  | Người lập  |  |  |  |  |
| 131 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 136 | STT | Tháng | Số hóa đơn | Ký hiệu hóa đơn | Nội dung | Số tiền |  |  |
| 137 | 1 | 2019-12-01 | 0000144 | CL/19E | Phần mềm điện toán đám mây AWS tháng 12/2019 | 9225216 |  |  |
| 138 | 2 | 2020-01-01 | 0000172 | CL/19E | Phần mềm điện toán đám mây AWS tháng 1/2020 | 32659225 |  |  |
| 139 | 3 | 2020-05-01 | 0000053 | CL/20E | Phần mềm điện toán đám mây AWS tháng 5/2020 | 10218894 |  |  |
| 140 | 4 | 2020-06-01 | 0000109 | CL/20E | Phần mềm điện toán đám mây AWS tháng 6/2020 | 8699188 |  |  |
| 141 | 5 | 2020-07-01 | 0000149 | CL/20E | Phần mềm điện toán đám mây AWS tháng 7/2020 | 6783283 |  |  |
| 142 | Tổng cộng |  |  |  |  | `=sum(F137:F141)` |  |  |
| 145 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 147 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 148 | 1 | 480367881879 | 2020-08-01 | 276.97 | 23270 | `=D148*E148` |  |  |
| 149 |  | Tổng cộng |  | `=D148` |  | `=F148` |  |  |
| 150 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D149*0.1` |  | `=F149*0.1` |  |  |
| 151 | Tổng số tiền phải thanh toán |  |  | `=sum(D149:D150)` |  | `=sum(F149:F150)` |  |  |
| 155 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 157 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 158 | 1 | 480367881879 | 2020-09-01 | 297.19 | 23280 | `=D158*E158` |  |  |
| 159 |  | Tổng cộng |  | `=D158` |  | `=F158` |  |  |
| 160 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D159*0.1` |  | `=F159*0.1` |  |  |
| 161 | Tổng số tiền phải thanh toán |  |  | `=sum(D159:D160)` |  | `=sum(F159:F160)` |  |  |
| 165 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 167 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 168 | 1 | 480367881879 | 2020-10-01 | 409.43 | 23270 | `=D168*E168` |  |  |
| 169 |  | Tổng cộng |  | `=D168` |  | `=F168` |  |  |
| 170 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D169*0.1` |  | `=F169*0.1` |  |  |
| 171 | Tổng số tiền phải thanh toán |  |  | `=sum(D169:D170)` |  | `=sum(F169:F170)` |  |  |
| 174 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 176 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 177 | 1 | 480367881879 | 2020-11-01 | 493.29 | 23235 | `=D177*E177` |  |  |
| 178 |  | Tổng cộng |  | `=D177` |  | `=F177` |  |  |
| 179 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D178*0.1` |  | `=F178*0.1` |  |  |
| 180 | Tổng số tiền phải thanh toán |  |  | `=sum(D178:D179)` |  | `=sum(F178:F179)` |  |  |
| 184 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 186 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 187 | 1 | 480367881879 | 2020-12-01 | 246.16 | 23185 | `=D187*E187` |  |  |
| 188 |  | Tổng cộng |  | `=D187` |  | `=F187` |  |  |
| 189 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D188*0.1` | 23185 | 570815 |  |  |
| 190 | Tổng số tiền phải thanh toán |  |  | `=sum(D188:D189)` | 23185 | `=sum(F188:F189)` |  |  |
| 194 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 196 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 197 | 1 | 480367881879 | 2021-01-01 | 152.46 | 23145 | `=D197*E197` |  |  |
| 198 |  | Tổng cộng |  | `=D197` |  | `=F197` |  |  |
| 199 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D198*0.1` | 23145 | `=F198*0.1` |  |  |
| 200 | Tổng số tiền phải thanh toán |  |  | `=sum(D198:D199)` | 23145 | `=sum(F198:F199)` |  |  |
| 203 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 205 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 206 | 1 | 480367881879 | 2021-02-01 | 142.88 | 23095 | `=D206*E206` |  |  |
| 207 |  | Tổng cộng |  | `=D206` |  | `=F206` |  |  |
| 208 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D207*0.1` | 23095 | `=F207*0.1` |  |  |
| 209 | Tổng số tiền phải thanh toán |  |  | `=sum(D207:D208)` | 23095 | `=sum(F207:F208)` |  |  |
| 212 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 214 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 215 | 1 | 480367881879 | 2021-03-01 | 160.24 | 23165 | `=D215*E215` |  |  |
| 216 |  | Tổng cộng |  | `=D215` |  | `=F215` |  |  |
| 217 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D216*0.1` | 23165 | `=F216*0.1` |  |  |
| 218 | Tổng số tiền phải thanh toán |  |  | `=sum(D216:D217)` | 23165 | `=sum(F216:F217)` |  |  |
| 222 | TỔNG HỢP CHI PHÍ AIS VN |  |  |  |  |  |  |  |
| 224 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 225 | 1 | 480367881879 | 2021-04-01 | 155.36 | 23150 | `=D225*E225` |  |  |
| 226 |  | Tổng cộng |  | `=D225` |  | `=F225` |  |  |
| 227 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D226*0.1` | 23150 | `=F226*0.1` |  |  |
| 228 |  |  |  | `=sum(D226:D227)` | 23150 | `=sum(F226:F227)` |  |  |
| 265 |  |  |  |  |  |  | 4330002.96 |  |

> *Đã bỏ qua 133 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (119 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| B | `=F{r}-F{r}` | 1 | `B71` |
| D | `=D{r}` | 16 | `D11` |
| D | `=D{r}*0.1` | 16 | `D12` |
| D | `=sum(D{r}:D{r})` | 11 | `D106` |
| D | `=D{r}+D{r}` | 5 | `D13` |
| F | `=D{r}*E{r}` | 16 | `F10` |
| F | `=F{r}` | 16 | `F11` |
| F | `=F{r}*0.1` | 15 | `F12` |
| F | `=sum(F{r}:F{r})` | 12 | `F106` |
| F | `=F{r}+F{r}` | 5 | `F13` |
| F | `=F{r}+F{r}+F{r}` | 1 | `F58` |
| F | `=F{r}+F{r}-F{r}` | 1 | `F59` |
| F | `=B{r}` | 1 | `F88` |
| F | `=F{r}-F{r}` | 1 | `F89` |
| H | `=F{r}+F{r}+F{r}` | 1 | `H10` |
| H | `=32659225-H{r}` | 1 | `H11` |
