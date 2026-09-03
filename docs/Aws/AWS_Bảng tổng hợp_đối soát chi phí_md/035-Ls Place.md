# Ls Place

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Ls Place`  
> **Vùng dữ liệu:** 266 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 969340714622 | 2023-03-01 | 11.01 |  |  |
| 5 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=D4*10%` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=(D4+D5)*3%` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D4+D5-D6` | 23632 | 277676 |
| 10 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 969340714622 | 2023-04-01 | 41.27 |  |  |
| 14 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D13*10%,2)` |  |  |
| 15 | Chiết khấu (3%) |  |  | `=round((D13+D14)*3%,2)` |  |  |
| 16 | Tổng số tiền phải thanh toán |  |  | `=D13+D14-D15` | 23645 | `=D16*E16` |
| 20 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | 969340714622 | 2023-05-01 | 58.51 |  |  |
| 24 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D23*10%,2)` |  |  |
| 25 | Chiết khấu (3%) |  |  | `=round((D23+D24)*3%,2)` |  |  |
| 26 | Tổng số tiền phải thanh toán |  |  | `=D23+D24-D25` | 23662 | `=D26*E26` |
| 30 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 33 | 1 | 969340714622 | 2024-06-01 | 50.69 |  |  |
| 34 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D33*10%,2)` |  |  |
| 35 | Chiết khấu (3%) |  |  | `=round((D33+D34)*3%,2)` |  |  |
| 36 | Thành tiền |  |  | `=D33+D34-D35` | 25473 | `=D36*E36` |
| 37 | Thuế GTGT (10%) |  |  |  |  | `=F36*10%` |
| 38 | Tổng số tiền phải thanh toán |  |  |  |  | `=F36+F37` |
| 42 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 969340714622 | 2024-07-01 | 52.18 |  |  |
| 46 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D45*10%,2)` |  |  |
| 47 | Chiết khấu (3%) |  |  | `=round((D45+D46)*3%,2)` |  |  |
| 48 | Thành tiền |  |  | `=D45+D46-D47` | 25405 | `=D48*E48` |
| 49 | Thuế GTGT (10%) |  |  |  |  | `=F48*10%` |
| 50 | Tổng số tiền phải thanh toán |  |  |  |  | `=F48+F49` |
| 54 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 56 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 57 | 1 | 969340714622 | 2024-08-01 | 52.16 |  |  |
| 58 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D57*10%,2)` |  |  |
| 59 | Chiết khấu (3%) |  |  | `=round((D57+D58)*3%,2)` |  |  |
| 60 | Thành tiền |  |  | `=D57+D58-D59` | 25080 | `=D60*E60` |
| 61 | Thuế GTGT (10%) |  |  |  |  | `=F60*10%` |
| 62 | Tổng số tiền phải thanh toán |  |  |  |  | `=F60+F61` |
| 66 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 68 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 69 | 1 | 969340714622 | 2024-09-01 | 50.6 |  |  |
| 70 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D69*10%,2)` |  |  |
| 71 | Chiết khấu (3%) |  |  | `=round((D69+D70)*3%,2)` |  |  |
| 72 | Thành tiền |  |  | `=D69+D70-D71` | 24733 | `=D72*E72` |
| 73 | Thuế GTGT (10%) |  |  |  |  | `=round(F72*10%,1)` |
| 74 | Tổng số tiền phải thanh toán |  |  |  |  | 1468869 |
| 78 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 81 | 1 | 969340714622 | 2024-10-01 | 52.16 |  |  |
| 82 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D81*10%,2)` |  |  |
| 83 | Chiết khấu (3%) |  |  | `=round((D81+D82)*3%,2)` |  |  |
| 84 | Thành tiền |  |  | `=D81+D82-D83` | 25445 | `=D84*E84` |
| 85 | Thuế GTGT (10%) |  |  |  |  | `=round(F84*10%,1)` |
| 86 | Tổng số tiền phải thanh toán |  |  |  |  | `=F84+F85` |
| 90 | TỔNG HỢP CHI PHÍ L'S PLACE |  |  |  |  |  |
| 92 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 93 | 1 | 969340714622 | 2024-11-01 | 50.73 |  |  |
| 94 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D93*10%,2)` |  |  |
| 95 | Chiết khấu (3%) |  |  | `=round((D93+D94)*3%,2)` |  |  |
| 96 | Thành tiền |  |  | `=D93+D94-D95` | 25463 | `=D96*E96` |
| 97 | Thuế GTGT (10%) |  |  |  |  | `=round(F96*10%,1)` |
| 98 | Tổng số tiền phải thanh toán |  |  |  |  | `=F96+F97` |
| 102 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 105 | 1 | 969340714622 | 2024-12-01 | 52.26 |  |  |
| 106 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D105*10%,2)` |  |  |
| 107 | Chiết khấu (3%) |  |  | `=round((D105+D106)*3%,2)` |  |  |
| 108 | Thành tiền |  |  | `=D105+D106-D107` | 25551 | `=D108*E108` |
| 109 | Thuế GTGT (10%) |  |  |  |  | `=round(F108*10%,1)` |
| 110 | Tổng số tiền phải thanh toán |  |  |  |  | `=F108+F109` |
| 114 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 116 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 117 | 1 | 969340714622 | 2025-01-01 | 52.33 |  |  |
| 118 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D117*10%,2)` |  |  |
| 119 | Chiết khấu (3%) |  |  | `=round((D117+D118)*3%,2)` |  |  |
| 120 | Thành tiền |  |  | `=D117+D118-D119` | 25295 | `=D120*E120` |
| 121 | Thuế GTGT (10%) |  |  |  |  | `=round(F120*10%,1)` |
| 122 | Tổng số tiền phải thanh toán |  |  |  |  | `=F120+F121` |
| 126 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 128 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 129 | 1 | 969340714622 | 2025-02-01 | 47.64 |  |  |
| 130 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D129*10%,2)` |  |  |
| 131 | Chiết khấu (3%) |  |  | `=round((D129+D130)*3%,2)` |  |  |
| 132 | Thành tiền |  |  | `=D129+D130-D131` | 25735 | `=D132*E132` |
| 133 | Thuế GTGT (10%) |  |  |  |  | `=round(F132*10%,1)` |
| 134 | Tổng số tiền phải thanh toán |  |  |  |  | `=F132+F133` |
| 138 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 140 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 141 | 1 | 969340714622 | 2025-03-01 | 52.24 |  |  |
| 142 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D141*10%,2)` |  |  |
| 143 | Chiết khấu (3%) |  |  | `=round((D141+D142)*3%,2)` |  |  |
| 144 | Thành tiền |  |  | `=D141+D142-D143` | 25775 | `=D144*E144` |
| 145 | Thuế GTGT (10%) |  |  |  |  | `=round(F144*10%,1)` |
| 146 | Tổng số tiền phải thanh toán |  |  |  |  | `=F144+F145` |
| 150 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 152 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 153 | 1 | 969340714622 | 2025-04-01 | 50.77 |  |  |
| 154 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D153*10%,2)` |  |  |
| 155 | Chiết khấu (3%) |  |  | `=round((D153+D154)*3%,2)` |  |  |
| 156 | Thành tiền |  |  | `=D153+D154-D155` | 26190 | `=D156*E156` |
| 157 | Thuế GTGT (10%) |  |  |  |  | `=round(F156*10%,1)` |
| 158 | Tổng số tiền phải thanh toán |  |  |  |  | `=F156+F157` |
| 162 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 165 | 1 | 969340714622 | 2025-05-01 | 52.23 |  |  |
| 166 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D165*10%,2)` |  |  |
| 167 | Chiết khấu (3%) |  |  | `=round((D165+D166)*3%,2)` |  |  |
| 168 | Thành tiền |  |  | `=D165+D166-D167` | 26225 | `=D168*E168` |
| 169 | Thuế GTGT (10%) |  |  |  |  | `=round(F168*10%,1)` |
| 170 | Tổng số tiền phải thanh toán |  |  |  |  | `=F168+F169` |
| 174 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 176 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 177 | 1 | 969340714622 | 2025-05-01 | 52.23 |  |  |
| 178 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D177*10%,2)` |  |  |
| 179 | Chiết khấu (3%) |  |  | `=round((D177+D178)*3%,2)` |  |  |
| 180 | Thành tiền |  |  | `=D177+D178-D179` | 26225 | `=D180*E180` |
| 181 | Thuế GTGT (10%) |  |  |  |  | `=round(F180*10%,1)` |
| 182 | Tổng số tiền phải thanh toán |  |  |  |  | `=F180+F181` |
| 186 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 188 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 189 | 1 | 969340714622 | 2025-06-01 | 50.7 |  |  |
| 190 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D189*10%,2)` |  |  |
| 191 | Chiết khấu (3%) |  |  | `=round((D189+D190)*3%,2)` |  |  |
| 192 | Thành tiền |  |  | `=D189+D190-D191` | 26300 | `=D192*E192` |
| 193 | Thuế GTGT (10%) |  |  |  |  | `=round(F192*10%,1)` |
| 194 | Tổng số tiền phải thanh toán |  |  |  |  | `=F192+F193` |
| 198 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 201 | 1 | 969340714622 | 2025-07-01 | 52.18 |  |  |
| 202 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D201*10%,2)` |  |  |
| 203 | Chiết khấu (3%) |  |  | `=round((D201+D202)*3%,2)` |  |  |
| 204 | Thành tiền |  |  | `=D201+D202-D203` | 26382 | `=D204*E204` |
| 205 | Thuế GTGT (10%) |  |  |  |  | `=round(F204*10%,1)` |
| 206 | Tổng số tiền phải thanh toán |  |  |  |  | `=F204+F205` |
| 211 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 213 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 214 | 1 | 969340714622 | 2025-08-01 | 52.16 |  |  |
| 215 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D214*10%,2)` |  |  |
| 216 | Chiết khấu (3%) |  |  | `=round((D214+D215)*3%,2)` |  |  |
| 217 | Thành tiền |  |  | `=D214+D215-D216` | 26502 | `=D217*E217` |
| 218 | Thuế GTGT (10%) |  |  |  |  | `=round(F217*10%,1)` |
| 219 | Tổng số tiền phải thanh toán |  |  |  |  | `=F217+F218` |
| 225 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 227 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 228 | 1 | 969340714622 | 2025-09-01 | 50.47 |  |  |
| 229 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D228*10%,2)` |  |  |
| 230 | Chiết khấu (3%) |  |  | `=round((D228+D229)*3%,2)` |  |  |
| 231 | Thành tiền |  |  | `=D228+D229-D230` | 26446 | `=D231*E231` |
| 232 | Thuế GTGT (10%) |  |  |  |  | `=round(F231*10%,1)` |
| 233 | Tổng số tiền phải thanh toán |  |  |  |  | `=F231+F232` |
| 238 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 240 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 241 | 1 | 969340714622 | 2025-10-01 | 51.98 |  |  |
| 242 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D241*10%,2)` |  |  |
| 243 | Chiết khấu (3%) |  |  | `=round((D241+D242)*3%,2)` |  |  |
| 244 | Thành tiền |  |  | `=D241+D242-D243` | 26347 | `=D244*E244` |
| 245 | Thuế GTGT (10%) |  |  |  |  | `=round(F244*10%,1)` |
| 246 | Tổng số tiền phải thanh toán |  |  |  |  | `=F244+F245` |
| 252 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |
| 254 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 255 | 1 | 969340714622 | 2025-11-01 | 50.39 |  |  |
| 256 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D255*10%,2)` |  |  |
| 257 | Chiết khấu (3%) |  |  | `=round((D255+D256)*3%,2)` |  |  |
| 258 | Thành tiền |  |  | `=D255+D256-D257` | 26412 | `=D258*E258` |
| 259 | Thuế GTGT (10%) |  |  |  |  | `=round(F258*10%,0)` |
| 260 | Tổng số tiền phải thanh toán |  |  |  |  | `=F258+F259` |
| 266 | ĐỐI SOÁT CHI PHÍ L'S PLACE |  |  |  |  |  |

> *Đã bỏ qua 95 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (124 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}-D{r}` | 22 | `D7` |
| D | `=round(D{r}*10%,2)` | 21 | `D14` |
| D | `=round((D{r}+D{r})*3%,2)` | 21 | `D15` |
| D | `=D{r}*10%` | 1 | `D5` |
| D | `=(D{r}+D{r})*3%` | 1 | `D6` |
| F | `=D{r}*E{r}` | 21 | `F16` |
| F | `=F{r}+F{r}` | 18 | `F38` |
| F | `=round(F{r}*10%,1)` | 15 | `F73` |
| F | `=F{r}*10%` | 3 | `F37` |
| F | `=round(F{r}*10%,0)` | 1 | `F259` |
