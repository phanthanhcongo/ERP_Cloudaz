# Openway

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Openway`  
> **Vùng dữ liệu:** 303 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 |   |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 701328727037 | 2023-03-01 | 5041.09 |  |  |
| 5 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=D4*10%` |  |  |
| 6 | Tổng số tiền phải thanh toán |  |  | `=D4+D5` | 23632 | 131044166.3999999911 |
| 9 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 11 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 12 | 1 | 701328727037 | 2023-04-01 | 5589.77 |  |  |
| 13 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D12*10%,2)` |  |  |
| 14 | Tổng số tiền phải thanh toán |  |  | `=D12+D13` | 23645 | `=D14*E14` |
| 18 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 20 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 21 | 1 | 701328727037 | 2023-05-01 | 5805.74 |  |  |
| 22 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D21*10%,2)` |  |  |
| 23 | Tổng số tiền phải thanh toán |  |  | `=D21+D22` | 23662 | `=D23*E23` |
| 27 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 30 | 1 | 701328727037 | 2023-06-01 | 6056.9 |  |  |
| 31 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D30*10%,2)` |  |  |
| 32 | Tổng số tiền phải thanh toán |  |  | `=D30+D31` | 23762 | `=D32*E32` |
| 35 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | 701328727037 | 2023-07-01 | 5768.19 |  |  |
| 39 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D38*10%,2)` |  |  |
| 40 | Tổng số tiền phải thanh toán |  |  | `=D38+D39` | 23860 | `=D40*E40` |
| 43 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 46 | 1 | 701328727037 | 2023-08-01 | 4064.8 |  |  |
| 47 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D46*10%,2)` |  |  |
| 48 | Tổng số tiền phải thanh toán |  |  | `=D46+D47` | 24260 | `=D48*E48` |
| 51 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 54 | 1 | 701328727037 | 2023-09-01 | 3265.47 |  |  |
| 55 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D54*10%,2)` |  |  |
| 56 | Tổng số tiền phải thanh toán |  |  | `=D54+D55` | 24470 | `=D56*E56` |
| 60 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 62 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 63 | 1 | 701328727037 | 2023-10-01 | 3418.94 |  |  |
| 64 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D63*10%,2)` |  |  |
| 65 | Tổng số tiền phải thanh toán |  |  | `=D63+D64` | 24729 | `=D65*E65` |
| 69 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 71 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 72 | 1 | 701328727037 | 2023-11-01 | 3398.73 |  |  |
| 73 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D72*10%,2)` |  |  |
| 74 | Tổng số tiền phải thanh toán |  |  | `=D72+D73` | 24427 | `=D74*E74` |
| 78 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 81 | 1 | 701328727037 | 2023-12-01 | 1266.19 |  |  |
| 82 | 2 | 903248259611 | 2023-12-01 | 2512.54 |  |  |
| 83 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round((D81+D82)*10%,2)` |  |  |
| 84 | Tổng số tiền phải thanh toán |  |  | `=D81+D83+D82` | 24450 | `=D84*E84` |
| 88 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 90 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 91 | 1 | 903248259611 | 2024-01-01 | 3809.42 |  |  |
| 92 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D91*10%,2)` |  |  |
| 93 | Tổng số tiền phải thanh toán |  |  | `=D92+D91` | 24578 | `=D93*E93` |
| 97 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 100 | 1 | 903248259611 | 2024-02-01 | 6150.35 |  |  |
| 101 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D100*10%,2)` |  |  |
| 102 | Tổng số tiền phải thanh toán |  |  | `=D101+D100` | 24802 | `=D102*E102` |
| 106 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 109 | 1 | 903248259611 | 2024-03-01 | 4252.25 |  |  |
| 110 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D109*10%,2)` |  |  |
| 111 | Tổng số tiền phải thanh toán |  |  | `=D110+D109` | 24972 | `=D111*E111` |
| 115 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 118 | 1 | 903248259611 | 2024-04-01 | 5017.52 |  |  |
| 119 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D118*10%,2)` |  |  |
| 120 | Tổng số tiền phải thanh toán |  |  | `=D119+D118` | 25458 | `=D120*E120` |
| 124 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 127 | 1 | 903248259611 | 2024-05-01 | 306.6 |  |  |
| 128 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D127*10%,2)` |  |  |
| 129 | Tổng số tiền phải thanh toán |  |  | `=D128+D127` | 25474 | `=D129*E129` |
| 133 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 135 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 136 | 1 | 903248259611 | 2024-06-01 | 3519.14 |  |  |
| 137 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D136*10%,2)` |  |  |
| 138 | Thành tiền |  |  | `=D136+D137` | 25473 | `=D138*E138` |
| 139 | Thuế GTGT |  |  |  |  | `=round(F138*10%,0)` |
| 140 | Tổng số tiền phải thanh toán |  |  |  |  | `=F138+F139` |
| 144 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 146 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 147 | 1 | 903248259611 | 2024-07-01 | 3809.4 |  |  |
| 148 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D147*10%,2)` |  |  |
| 149 | Thành tiền |  |  | `=D147+D148` | 25405 | `=D149*E149` |
| 150 | Thuế GTGT |  |  |  |  | `=round(F149*10%,0)` |
| 151 | Tổng số tiền phải thanh toán |  |  |  |  | `=F149+F150` |
| 155 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 157 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 158 | 1 | 903248259611 | 2024-08-01 | 3901.26 |  |  |
| 159 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D158*10%,2)` |  |  |
| 160 | Thành tiền |  |  | `=D158+D159` | 25080 | `=D160*E160` |
| 161 | Thuế GTGT |  |  |  |  | `=round(F160*10%,0)` |
| 162 | Tổng số tiền phải thanh toán |  |  |  |  | `=F160+F161` |
| 166 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 168 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 169 | 1 | 903248259611 | 2024-09-01 | 2468.45 |  |  |
| 170 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D169*10%,2)` |  |  |
| 171 | Thành tiền |  |  | `=D169+D170` | 24733 | `=D171*E171` |
| 172 | Thuế GTGT |  |  |  |  | 6715752 |
| 173 | Tổng số tiền phải thanh toán |  |  |  |  | `=F171+F172` |
| 177 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 179 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 180 | 1 | 903248259611 | 2024-10-01 | 4974.66 |  |  |
| 181 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D180*10%,2)` |  |  |
| 182 | Thành tiền |  |  | `=D180+D181` | 25445 | `=D182*E182` |
| 183 | Thuế GTGT |  |  |  |  | `=round(F182*10%,0)` |
| 184 | Tổng số tiền phải thanh toán |  |  |  |  | `=F182+F183` |
| 188 | TỔNG HỢP CHI PHÍ OPENWAY |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 191 | 1 | 903248259611 | 2024-11-01 | 4739.3 |  |  |
| 192 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D191*10%,2)` |  |  |
| 193 | Thành tiền |  |  | `=D191+D192` | 25463 | `=D193*E193` |
| 194 | Thuế GTGT |  |  |  |  | `=round(F193*10%,0)` |
| 195 | Tổng số tiền phải thanh toán |  |  |  |  | `=F193+F194` |
| 199 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 201 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 202 | 1 | 903248259611 | 2024-12-01 | 4236.06 |  |  |
| 203 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D202*10%,2)` |  |  |
| 204 | Thành tiền |  |  | `=D202+D203` | 25551 | `=D204*E204` |
| 205 | Thuế GTGT |  |  |  |  | `=round(F204*10%,0)` |
| 206 | Tổng số tiền phải thanh toán |  |  |  |  | `=F204+F205` |
| 210 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 212 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 213 | 1 | 903248259611 | 2025-01-01 | 4104.67 |  |  |
| 214 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D213*10%,2)` |  |  |
| 215 | Thành tiền |  |  | `=D213+D214` | 25295 | `=D215*E215` |
| 216 | Thuế GTGT |  |  |  |  | `=round(F215*10%,0)` |
| 217 | Tổng số tiền phải thanh toán |  |  |  |  | `=F215+F216` |
| 221 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 224 | 1 | 903248259611 | 2025-02-01 | 6461.42 |  |  |
| 225 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D224*10%,2)` |  |  |
| 226 | Thành tiền |  |  | `=D224+D225` | 25735 | `=D226*E226` |
| 227 | Thuế GTGT |  |  |  |  | `=round(F226*10%,0)` |
| 228 | Tổng số tiền phải thanh toán |  |  |  |  | `=F226+F227` |
| 232 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 234 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 235 | 1 | 903248259611 | 2025-03-01 | 4418.29 |  |  |
| 236 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D235*10%,2)` |  |  |
| 237 | Thành tiền |  |  | `=D235+D236` | 25775 | `=D237*E237` |
| 238 | Thuế GTGT |  |  |  |  | `=round(F237*10%,0)` |
| 239 | Tổng số tiền phải thanh toán |  |  |  |  | `=F237+F238` |
| 243 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 245 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 246 | 1 | 903248259611 | 2025-04-01 | 603.82 |  |  |
| 247 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D246*10%,2)` |  |  |
| 248 | Thành tiền |  |  | `=D246+D247` | 26190 | `=D248*E248` |
| 249 | Thuế GTGT |  |  |  |  | `=round(F248*10%,0)` |
| 250 | Tổng số tiền phải thanh toán |  |  |  |  | `=F248+F249` |
| 254 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 256 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 257 | 1 | 903248259611 | 2025-05-01 | 4205.89 |  |  |
| 258 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D257*10%,2)` |  |  |
| 259 | Tổng cộng |  |  | `=D257+D258` |  |  |
| 260 | Hỗ trợ chi phí |  |  | 4000 |  |  |
| 261 | Thành tiền |  |  | `=D259-D260` | 26225 | `=D261*E261` |
| 262 | Thuế GTGT |  |  |  |  | `=round(F261*10%,0)` |
| 263 | Tổng số tiền phải thanh toán |  |  |  |  | `=F261+F262` |
| 267 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 269 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 270 | 1 | 903248259611 | 2025-06-01 | 4100.41 |  |  |
| 271 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D270*10%,2)` |  |  |
| 272 | Thành tiền |  |  | `=D270+D271` | 26300 | `=D272*E272` |
| 273 | Thuế GTGT |  |  |  |  | `=round(F272*10%,0)` |
| 274 | Tổng số tiền phải thanh toán |  |  |  |  | `=F272+F273` |
| 279 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 282 | 1 | 903248259611 | 2025-07-01 | 5074.96 |  |  |
| 283 | Phí dịch vụ tính trên Lượng dùng thực tế (15%) |  |  | `=round(D282*15%,2)` |  |  |
| 284 | Thành tiền |  |  | `=D282+D283` | 26382 | `=D284*E284` |
| 285 | Thuế GTGT |  |  |  |  | `=round(F284*10%,0)` |
| 286 | Tổng số tiền phải thanh toán |  |  |  |  | `=F284+F285` |
| 291 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |
| 293 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 294 | 1 | 903248259611 | 2025-08-01 | 5043.23 |  |  |
| 295 | Phí dịch vụ tính trên Lượng dùng thực tế (15%) |  |  | `=round(D294*15%,2)` |  |  |
| 296 | Thành tiền |  |  | `=D294+D295` | 26502 | `=D296*E296` |
| 297 | Thuế GTGT |  |  |  |  | `=round(F296*10%,0)` |
| 298 | Tổng số tiền phải thanh toán |  |  |  |  | `=F296+F297` |
| 303 | ĐỐI SOÁT CHI PHÍ OPENWAY |  |  |  |  |  |

> *Đã bỏ qua 119 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (119 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 29 | `D6` |
| D | `=round(D{r}*10%,2)` | 26 | `D13` |
| D | `=round(D{r}*15%,2)` | 2 | `D283` |
| D | `=D{r}*10%` | 1 | `D5` |
| D | `=round((D{r}+D{r})*10%,2)` | 1 | `D83` |
| D | `=D{r}+D{r}+D{r}` | 1 | `D84` |
| D | `=D{r}-D{r}` | 1 | `D261` |
| F | `=D{r}*E{r}` | 29 | `F14` |
| F | `=F{r}+F{r}` | 15 | `F140` |
| F | `=round(F{r}*10%,0)` | 14 | `F139` |
