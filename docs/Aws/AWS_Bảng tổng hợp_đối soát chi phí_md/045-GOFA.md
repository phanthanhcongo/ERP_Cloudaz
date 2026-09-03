# GOFA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `GOFA`  
> **Vùng dữ liệu:** 227 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 242201277753 | 2025-03-01 | 256.53 |  |  |
| 5 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4+D5-D6` | 25775 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 14 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 16 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 17 | 1 | 242201277753 | 2025-04-01 | 451.41 |  |  |
| 18 | Phí dịch vụ (5.26%) |  |  | `=round(D17*5.26%,2)` |  |  |
| 19 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |
| 20 | Tổng cộng |  |  | `=D17+D18-D19` |  |  |
| 21 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 22 | Thành tiền |  |  | `=D20-D21` | 26190 | `=round(D22*E22,0)` |
| 23 | Thuế GTGT (10%) |  |  |  |  | `=round(F22*10%,0)` |
| 24 | Tổng số tiền phải thanh toán |  |  |  |  | `=F22+F23` |
| 28 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 30 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 31 | 1 | 242201277753 | 2025-05-01 | 429.12 |  |  |
| 32 | Phí dịch vụ (5.26%) |  |  | `=round(D31*5.26%,2)` |  |  |
| 33 | Chiết khấu (2%) |  |  | `=round(D31*2%,2)` |  |  |
| 34 | Tổng cộng |  |  | `=D31+D32-D33` |  |  |
| 35 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 36 | Thành tiền |  |  | `=D34-D35` | 26225 | `=round(D36*E36,0)` |
| 37 | Thuế GTGT (10%) |  |  |  |  | `=round(F36*10%,0)` |
| 38 | Tổng số tiền phải thanh toán |  |  |  |  | `=F36+F37` |
| 42 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 242201277753 | 2025-06-01 | 386.02 |  |  |
| 46 | Phí dịch vụ (5.26%) |  |  | `=round(D45*5.26%,2)` |  |  |
| 47 | Chiết khấu (2%) |  |  | `=round(D45*2%,2)` |  |  |
| 48 | Tổng cộng |  |  | `=D45+D46-D47` |  |  |
| 49 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 50 | Thành tiền |  |  | 0 | 26300 | `=round(D50*E50,0)` |
| 51 | Thuế GTGT (10%) |  |  |  |  | `=round(F50*10%,0)` |
| 52 | Tổng số tiền phải thanh toán |  |  |  |  | `=F50+F51` |
| 56 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 58 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 59 | 1 | 242201277753 | 2025-07-01 | 414.95 |  |  |
| 60 | Phí dịch vụ (10%) |  |  | `=round(D59*10%,2)` |  |  |
| 61 | Chiết khấu (2%) |  |  | `=round(D59*2%,2)` |  |  |
| 62 | Tổng cộng |  |  | `=D59+D60-D61` |  |  |
| 63 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 64 | Thành tiền |  |  | `=D62-D63` | 26382 | `=round(D64*E64,0)` |
| 65 | Thuế GTGT (10%) |  |  |  |  | `=round(F64*10%,0)` |
| 66 | Tổng số tiền phải thanh toán |  |  |  |  | `=F64+F65` |
| 70 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 73 | 1 | 242201277753 | 2025-08-01 | 455.21 |  |  |
| 74 | Phí dịch vụ (10%) |  |  | `=round(D73*10%,2)` |  |  |
| 75 | Chiết khấu (2%) |  |  | `=round(D73*2%,2)` |  |  |
| 76 | Tổng cộng |  |  | `=D73+D74-D75` |  |  |
| 77 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 78 | Thành tiền |  |  | `=D76-D77` | 26502 | `=round(D78*E78,0)` |
| 79 | Thuế GTGT (10%) |  |  |  |  | `=round(F78*10%,0)` |
| 80 | Tổng số tiền phải thanh toán |  |  |  |  | `=F78+F79` |
| 85 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 88 | 1 | 242201277753 | 2025-09-01 | 440.12 |  |  |
| 89 | Phí dịch vụ (10%) |  |  | `=round(D88*10%,2)` |  |  |
| 90 | Chiết khấu (2%) |  |  | `=round(D88*2%,2)` |  |  |
| 91 | Tổng cộng |  |  | `=D88+D89-D90` |  |  |
| 92 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 93 | Thành tiền |  |  | `=D91-D92` | 26446 | `=round(D93*E93,0)` |
| 94 | Thuế GTGT (10%) |  |  |  |  | `=round(F93*10%,0)` |
| 95 | Tổng số tiền phải thanh toán |  |  |  |  | `=F93+F94` |
| 100 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 103 | 1 | 242201277753 | 2025-10-01 | 453.85 |  |  |
| 104 | Phí dịch vụ (10%) |  |  | `=round(D103*10%,2)` |  |  |
| 105 | Chiết khấu (2%) |  |  | `=round(D103*2%,2)` |  |  |
| 106 | Tổng cộng |  |  | `=D103+D104-D105` |  |  |
| 107 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 108 | Thành tiền |  |  | `=D106-D107` | 26347 | `=round(D108*E108,0)` |
| 109 | Thuế GTGT (10%) |  |  |  |  | `=round(F108*10%,0)` |
| 110 | Tổng số tiền phải thanh toán |  |  |  |  | `=F108+F109` |
| 116 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 119 | 1 | 242201277753 | 2025-11-01 | 564.09 |  |  |
| 120 | Phí dịch vụ (10%) |  |  | `=round(D119*10%,2)` |  |  |
| 121 | Chiết khấu (2%) |  |  | `=round(D119*2%,2)` |  |  |
| 122 | Tổng cộng |  |  | `=D119+D120-D121` |  |  |
| 123 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 124 | Thành tiền |  |  | `=D122-D123` | 26412 | `=round(D124*E124,0)` |
| 125 | Thuế GTGT (10%) |  |  |  |  | `=round(F124*10%,0)` |
| 126 | Tổng số tiền phải thanh toán |  |  |  |  | `=F124+F125` |
| 133 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 135 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 136 | 1 | 242201277753 | 2025-12-01 | 442.21 |  |  |
| 137 | Phí dịch vụ (10%) |  |  | `=round(D136*10%,2)` |  |  |
| 138 | Chiết khấu (2%) |  |  | `=round(D136*2%,2)` |  |  |
| 139 | Tổng cộng |  |  | `=D136+D137-D138` |  |  |
| 140 | Số tiền hỗ trợ giảm giá |  |  | 400 |  |  |
| 141 | Thành tiền |  |  | `=D139-D140` | 26377 | `=round(D141*E141,0)` |
| 142 | Thuế GTGT (10%) |  |  |  |  | `=round(F141*10%,0)` |
| 143 | Tổng số tiền phải thanh toán |  |  |  |  | `=F141+F142` |
| 149 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 152 | 1 | 242201277753 | 2026-01-01 | 2.6 |  |  |
| 153 | Phí dịch vụ (10%) |  |  | `=round(D152*10%,2)` |  |  |
| 154 | Chiết khấu (2%) |  |  | `=round(D152*2%,2)` |  |  |
| 155 | Thành tiền |  |  | `=D152+D153-D154` | 26145 | `=round(D155*E155,0)` |
| 156 | Thuế GTGT (10%) |  |  |  |  | `=round(F155*10%,0)` |
| 157 | Tổng số tiền phải thanh toán |  |  |  |  | `=F155+F156` |
| 163 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 165 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 166 | 1 | 242201277753 | 2026-03-01 | 0.17 |  |  |
| 167 | Phí dịch vụ (10%) |  |  | `=round(D166*10%,2)` |  |  |
| 168 | Chiết khấu (2%) |  |  | `=round(D166*2%,3)` |  |  |
| 169 | Thành tiền |  |  | `=D166+D167-D168` | 26357 | `=round(D169*E169,0)` |
| 170 | Thuế GTGT (10%) |  |  |  |  | `=round(F169*10%,0)` |
| 171 | Tổng số tiền phải thanh toán |  |  |  |  | `=F169+F170` |
| 177 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 179 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 180 | 1 | 242201277753 | 2026-04-01 | 0.17 |  |  |
| 181 | Phí dịch vụ (10%) |  |  | `=round(D180*10%,2)` |  |  |
| 182 | Chiết khấu (2%) |  |  | `=round(D180*2%,3)` |  |  |
| 183 | Thành tiền |  |  | `=D180+D181-D182` | 26368 | `=round(D183*E183,0)` |
| 184 | Thuế GTGT (10%) |  |  |  |  | `=round(F183*10%,0)` |
| 185 | Tổng số tiền phải thanh toán |  |  |  |  | `=F183+F184` |
| 191 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 193 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 194 | 1 | 242201277753 | 2026-05-01 | 0.17 |  |  |
| 195 | Phí dịch vụ (10%) |  |  | `=round(D194*10%,2)` |  |  |
| 196 | Chiết khấu (2%) |  |  | `=round(D194*2%,3)` |  |  |
| 197 | Thành tiền |  |  | `=D194+D195-D196` | 26395 | `=round(D197*E197,0)` |
| 198 | Thuế GTGT (10%) |  |  |  |  | `=round(F197*10%,0)` |
| 199 | Tổng số tiền phải thanh toán |  |  |  |  | `=F197+F198` |
| 205 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 207 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 208 | 1 | 242201277753 | 2026-06-01 | 0.17 |  |  |
| 209 | Phí dịch vụ (10%) |  |  | `=round(D208*10%,2)` |  |  |
| 210 | Chiết khấu (2%) |  |  | `=round(D208*2%,3)` |  |  |
| 211 | Thành tiền |  |  | `=D208+D209-D210` | 26466 | `=round(D211*E211,0)` |
| 212 | Thuế GTGT (10%) |  |  |  |  | `=round(F211*10%,0)` |
| 213 | Tổng số tiền phải thanh toán |  |  |  |  | `=F211+F212` |
| 219 | ĐỐI SOÁT CHI PHÍ AWS - GOFA |  |  |  |  |  |
| 221 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 222 | 1 | 242201277753 | 2026-07-01 | 0.17 |  |  |
| 223 | Phí dịch vụ (10%) |  |  | `=round(D222*10%,2)` |  |  |
| 224 | Chiết khấu (2%) |  |  | `=round(D222*2%,3)` |  |  |
| 225 | Thành tiền |  |  | `=D222+D223-D224` | 26475 | `=round(D225*E225,0)` |
| 226 | Thuế GTGT (10%) |  |  |  |  | `=round(F225*10%,0)` |
| 227 | Tổng số tiền phải thanh toán |  |  |  |  | `=F225+F226` |

> *Đã bỏ qua 81 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (104 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}-D{r}` | 16 | `D7` |
| D | `=round(D{r}*10%,2)` | 12 | `D60` |
| D | `=round(D{r}*2%,2)` | 11 | `D6` |
| D | `=D{r}-D{r}` | 8 | `D22` |
| D | `=round(D{r}*2%,3)` | 5 | `D168` |
| D | `=round(D{r}*5.26%,2)` | 4 | `D5` |
| F | `=round(D{r}*E{r},0)` | 16 | `F7` |
| F | `=round(F{r}*10%,0)` | 16 | `F8` |
| F | `=F{r}+F{r}` | 16 | `F9` |
