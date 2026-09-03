# Pinetree

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Pinetree`  
> **Vùng dữ liệu:** 249 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 785282001586 | 2024-01-01 | 129.32 |  |  |
| 5 | Phí dịch vụ tính trên Lượng dùng thực tế (5%) |  |  | `=round(D4*5%,2)` |  |  |
| 6 | Chiết khấu (5%) |  |  | `=round((D4+D5)*5%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D4+D5-D6` | 24578 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 785282001586 | 2024-04-01 | 1641.91 |  |  |
| 15 | Phí dịch vụ tính trên Lượng dùng thực tế (5%) |  |  | `=round(D14*5%,2)` |  |  |
| 16 | Chiết khấu (5%) |  |  | `=round((D14+D15)*5%,2)` |  |  |
| 17 | Tổng số tiền phải thanh toán |  |  | `=D14+D15-D16` | 25458 | `=D17*E17` |
| 21 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 24 | 1 | 785282001586 | 2024-05-01 | 2295.12 |  |  |
| 25 | Phí dịch vụ tính trên Lượng dùng thực tế (5%) |  |  | `=round(D24*5%,2)` |  |  |
| 26 | Chiết khấu (5%) |  |  | `=round((D24+D25)*5%,2)` |  |  |
| 27 | Tổng số tiền phải thanh toán |  |  | `=D24+D25-D26` | 25474 | `=D27*E27` |
| 31 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 34 | 1 | 785282001586 | 2024-07-01 | 664.57 |  |  |
| 35 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D34*5.26%,2)` |  |  |
| 36 | Chiết khấu (5%) |  |  | `=round((D34+D35)*5%,2)` |  |  |
| 37 | Thành tiền |  |  | `=D34+D35-D36` | 25405 | `=D37*E37` |
| 38 | Thuế GTGT |  |  |  |  | `=round(F37*10%,0)` |
| 39 | Tổng số tiền phải thanh toán |  |  |  |  | `=F37+F38` |
| 43 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 46 | 1 | 785282001586 | 2024-08-01 | 2907.05 |  |  |
| 47 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D46*5.26%,2)` |  |  |
| 48 | Chiết khấu (5%) |  |  | `=round((D46+D47)*5%,2)` |  |  |
| 49 | Thành tiền |  |  | `=D46+D47-D48` | 25080 | `=D49*E49` |
| 50 | Thuế GTGT |  |  |  |  | `=round(F49*10%,0)` |
| 51 | Tổng số tiền phải thanh toán |  |  |  |  | `=F49+F50` |
| 55 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 57 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 58 | 1 | 785282001586 | 2024-09-01 | 3442.72 |  |  |
| 59 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D58*5.26%,2)` |  |  |
| 60 | Chiết khấu (5%) |  |  | `=round((D58+D59)*5%,2)` |  |  |
| 61 | Thành tiền |  |  | `=D58+D59-D60` | 24733 | `=D61*E61` |
| 62 | Thuế GTGT |  |  |  |  | `=round(F61*10%,0)` |
| 63 | Tổng số tiền phải thanh toán |  |  |  |  | `=F61+F62` |
| 67 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 70 | 1 | 785282001586 | 2024-10-01 | 2785.22 |  |  |
| 71 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D70*5.26%,2)` |  |  |
| 72 | Chiết khấu (5%) |  |  | `=round((D70+D71)*5%,2)` |  |  |
| 73 | Thành tiền |  |  | `=D70+D71-D72` | 25445 | `=D73*E73` |
| 74 | Thuế GTGT |  |  |  |  | `=round(F73*10%,0)` |
| 75 | Tổng số tiền phải thanh toán |  |  |  |  | `=F73+F74` |
| 79 | TỔNG HỢP CHI PHÍ PINETREE |  |  |  |  |  |
| 81 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 82 | 1 | 785282001586 | 2024-11-01 | 1862.72 |  |  |
| 83 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D82*5.26%,2)` |  |  |
| 84 | Chiết khấu (5%) |  |  | `=round((D82+D83)*5%,2)` |  |  |
| 85 | Thành tiền |  |  | `=D82+D83-D84` | 25463 | `=D85*E85` |
| 86 | Thuế GTGT |  |  |  |  | `=round(F85*10%,0)` |
| 87 | Tổng số tiền phải thanh toán |  |  |  |  | `=F85+F86` |
| 91 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 93 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 94 | 1 | 785282001586 | 2024-12-01 | 1869.39 |  |  |
| 95 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D94*5.26%,2)` |  |  |
| 96 | Chiết khấu (5%) |  |  | `=round((D94+D95)*5%,2)` |  |  |
| 97 | Thành tiền |  |  | `=D94+D95-D96` | 25551 | `=D97*E97` |
| 98 | Thuế GTGT |  |  |  |  | `=round(F97*10%,0)` |
| 99 | Tổng số tiền phải thanh toán |  |  |  |  | `=F97+F98` |
| 103 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 105 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 106 | 1 | 785282001586 | 2025-01-01 | 1680.34 |  |  |
| 107 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D106*5.26%,2)` |  |  |
| 108 | Chiết khấu (5%) |  |  | `=round((D106+D107)*5%,2)` |  |  |
| 109 | Thành tiền |  |  | `=D106+D107-D108` | 25295 | `=D109*E109` |
| 110 | Thuế GTGT |  |  |  |  | `=round(F109*10%,0)` |
| 111 | Tổng số tiền phải thanh toán |  |  |  |  | `=F109+F110` |
| 115 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 118 | 1 | 785282001586 | 2025-02-01 | 1524.38 |  |  |
| 119 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D118*5.26%,2)` |  |  |
| 120 | Chiết khấu (5%) |  |  | `=round((D118+D119)*5%,2)` |  |  |
| 121 | Thành tiền |  |  | `=D118+D119-D120` | 25735 | `=D121*E121` |
| 122 | Thuế GTGT |  |  |  |  | `=round(F121*10%,0)` |
| 123 | Tổng số tiền phải thanh toán |  |  |  |  | `=F121+F122` |
| 127 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 130 | 1 | 785282001586 | 2025-03-01 | 1656.28 |  |  |
| 131 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D130*5.26%,2)` |  |  |
| 132 | Chiết khấu (5%) |  |  | `=round((D130+D131)*5%,2)` |  |  |
| 133 | Thành tiền |  |  | `=D130+D131-D132` | 25775 | `=D133*E133` |
| 134 | Thuế GTGT |  |  |  |  | `=round(F133*10%,0)` |
| 135 | Tổng số tiền phải thanh toán |  |  |  |  | `=F133+F134` |
| 139 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 141 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 142 | 1 | 785282001586 | 2025-04-01 | 1610.4 |  |  |
| 143 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D142*5.26%,2)` |  |  |
| 144 | Chiết khấu (5%) |  |  | `=round((D142+D143)*5%,2)` |  |  |
| 145 | Thành tiền |  |  | `=D142+D143-D144` | 26190 | `=D145*E145` |
| 146 | Thuế GTGT |  |  |  |  | `=round(F145*10%,0)` |
| 147 | Tổng số tiền phải thanh toán |  |  |  |  | `=F145+F146` |
| 151 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 153 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 154 | 1 | 785282001586 | 2025-05-01 | 1704.31 |  |  |
| 155 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D154*5.26%,2)` |  |  |
| 156 | Chiết khấu (5%) |  |  | `=round((D154+D155)*5%,2)` |  |  |
| 157 | Thành tiền |  |  | `=D154+D155-D156` | 26225 | `=D157*E157` |
| 158 | Thuế GTGT |  |  |  |  | `=round(F157*10%,0)` |
| 159 | Tổng số tiền phải thanh toán |  |  |  |  | `=F157+F158` |
| 163 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 165 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 166 | 1 | 785282001586 | 2025-06-01 | 1737.34 |  |  |
| 167 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D166*5.26%,2)` |  |  |
| 168 | Chiết khấu (5%) |  |  | `=round((D166+D167)*5%,2)` |  |  |
| 169 | Thành tiền |  |  | `=D166+D167-D168` | 26300 | `=D169*E169` |
| 170 | Thuế GTGT |  |  |  |  | `=round(F169*10%,0)` |
| 171 | Tổng số tiền phải thanh toán |  |  |  |  | `=F169+F170` |
| 175 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 177 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 178 | 1 | 785282001586 | 2025-07-01 | 1860.34 |  |  |
| 179 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D178*10%,2)` |  |  |
| 180 | Chiết khấu (5%) |  |  | `=round((D178+D179)*5%,2)` |  |  |
| 181 | Thành tiền |  |  | `=D178+D179-D180` | 26382 | `=D181*E181` |
| 182 | Thuế GTGT |  |  |  |  | `=round(F181*10%,0)` |
| 183 | Tổng số tiền phải thanh toán |  |  |  |  | `=F181+F182` |
| 187 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 189 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 190 | 1 | 785282001586 | 2025-08-01 | 2012.97 |  |  |
| 191 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D190*10%,2)` |  |  |
| 192 | Chiết khấu (5%) |  |  | `=round((D190+D191)*5%,2)` |  |  |
| 193 | Thành tiền |  |  | `=D190+D191-D192` | 26502 | `=D193*E193` |
| 194 | Thuế GTGT |  |  |  |  | `=round(F193*10%,0)` |
| 195 | Tổng số tiền phải thanh toán |  |  |  |  | `=F193+F194` |
| 200 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 202 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 203 | 1 | 785282001586 | 2025-09-01 | 1936.53 |  |  |
| 204 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D203*10%,2)` |  |  |
| 205 | Chiết khấu (5%) |  |  | `=round((D203+D204)*5%,2)` |  |  |
| 206 | Thành tiền |  |  | `=D203+D204-D205` | 26446 | `=D206*E206` |
| 207 | Thuế GTGT |  |  |  |  | `=round(F206*10%,0)` |
| 208 | Tổng số tiền phải thanh toán |  |  |  |  | `=F206+F207` |
| 214 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 216 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 217 | 1 | 785282001586 | 2025-10-01 | 926.82 |  |  |
| 218 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D217*10%,2)` |  |  |
| 219 | Chiết khấu (5%) |  |  | `=round((D217+D218)*5%,2)` |  |  |
| 220 | Thành tiền |  |  | `=D217+D218-D219` | 26347 | `=D220*E220` |
| 221 | Thuế GTGT |  |  |  |  | `=round(F220*10%,0)` |
| 222 | Tổng số tiền phải thanh toán |  |  |  |  | `=F220+F221` |
| 227 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 229 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 230 | 1 | 785282001586 | 2025-11-01 | 766.04 |  |  |
| 231 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D230*10%,2)` |  |  |
| 232 | Chiết khấu (5%) |  |  | `=round((D230+D231)*5%,2)` |  |  |
| 233 | Thành tiền |  |  | `=D230+D231-D232` | 26412 | `=D233*E233` |
| 234 | Thuế GTGT |  |  |  |  | `=round(F233*10%,0)` |
| 235 | Tổng số tiền phải thanh toán |  |  |  |  | `=F233+F234` |
| 241 | ĐỐI SOÁT CHI PHÍ PINETREE |  |  |  |  |  |
| 243 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 244 | 1 | 785282001586 | 2025-12-01 | 513.16 |  |  |
| 245 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D244*10%,2)` |  |  |
| 246 | Chiết khấu (5%) |  |  | `=round((D244+D245)*5%,2)` |  |  |
| 247 | Thành tiền |  |  | `=D244+D245-D246` | 26377 | `=D247*E247` |
| 248 |  |  |  |  |  | `=round(F247*10%,0)` |
| 249 |  |  |  |  |  | `=F247+F248` |

> *Đã bỏ qua 87 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (120 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round((D{r}+D{r})*5%,2)` | 21 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 21 | `D7` |
| D | `=round(D{r}*5.26%,2)` | 12 | `D35` |
| D | `=round(D{r}*10%,2)` | 6 | `D179` |
| D | `=round(D{r}*5%,2)` | 3 | `D5` |
| F | `=D{r}*E{r}` | 21 | `F7` |
| F | `=round(F{r}*10%,0)` | 18 | `F38` |
| F | `=F{r}+F{r}` | 18 | `F39` |
