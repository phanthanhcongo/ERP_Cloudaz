# FINTECH AI (ONSTOCKS)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `FINTECH AI (ONSTOCKS)`  
> **Vùng dữ liệu:** 256 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (851725573450) | 2024-04-01 | 1283.8 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 25458 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | AWS (851725573450) | 2024-05-01 | 2095 |  |  |
| 15 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D14*(1+5.26%),2)` |  |  |
| 16 | Chiết khấu (2%) |  |  | `=round(D15*2%,2)` |  |  |
| 17 | Tổng số tiền phải thanh toán |  |  | `=D15-D16` | 25474 | `=D17*E17` |
| 20 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | AWS (851725573450) | 2024-06-01 | 1820.12 |  |  |
| 24 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D23*(1+5.26%),2)` |  |  |
| 25 | Chiết khấu (2%) |  |  | `=round(D24*2%,2)` |  |  |
| 26 | Thành tiền |  |  | `=D24-D25` | 25473 | `=D26*E26` |
| 27 | Thuế GTGT (10%) |  |  |  |  | `=round(F26*10%,0)` |
| 28 | Tổng số tiền phải thanh toán |  |  |  |  | `=F26+F27` |
| 32 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | AWS (851725573450) | 2024-07-01 | 2694.84 |  |  |
| 36 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D35*(1+5.26%),2)` |  |  |
| 37 | Chiết khấu (2%) |  |  | `=round(D36*2%,2)` |  |  |
| 38 | Thành tiền |  |  | `=D36-D37` | 25405 | `=D38*E38` |
| 39 | Thuế GTGT (10%) |  |  |  |  | `=round(F38*10%,0)` |
| 40 | Tổng số tiền phải thanh toán |  |  |  |  | `=F38+F39` |
| 44 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 47 | 1 | AWS (851725573450) | 2024-08-01 | 3830.37 |  |  |
| 48 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D47*(1+5.26%),2)` |  |  |
| 49 | Chiết khấu (2%) |  |  | `=round(D48*2%,2)` |  |  |
| 50 | Thành tiền |  |  | `=D48-D49` | 25080 | `=D50*E50` |
| 51 | Thuế GTGT (10%) |  |  |  |  | `=round(F50*10%,0)` |
| 52 | Tổng số tiền phải thanh toán |  |  |  |  | `=F50+F51` |
| 56 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 58 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 59 | 1 | AWS (851725573450) | 2024-09-01 | 2444.15 |  |  |
| 60 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D59*(1+5.26%),2)` |  |  |
| 61 | Chiết khấu (3%) |  |  | `=round(D60*3%,2)` |  |  |
| 62 | Thành tiền |  |  | `=D60-D61` | 24733 | `=D62*E62` |
| 63 | Thuế GTGT (10%) |  |  |  |  | `=round(F62*10%,0)` |
| 64 | Tổng số tiền phải thanh toán |  |  |  |  | `=F62+F63` |
| 68 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 70 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 71 | 1 | AWS (851725573450) | 2024-10-01 | 3401.09 |  |  |
| 72 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D71*(1+5.26%),2)` |  |  |
| 73 | Chiết khấu (3%) |  |  | `=round(D72*3%,2)` |  |  |
| 74 | Thành tiền |  |  | `=D72-D73` | 25445 | `=D74*E74` |
| 75 | Thuế GTGT (10%) |  |  |  |  | `=round(F74*10%,0)` |
| 76 | Tổng số tiền phải thanh toán |  |  |  |  | `=F74+F75` |
| 80 | TỔNG HỢP CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 83 | 1 | AWS (851725573450) | 2024-11-01 | 4082.87 |  |  |
| 84 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D83*(1+5.26%),2)` |  |  |
| 85 | Chiết khấu (3%) |  |  | `=round(D84*3%,2)` |  |  |
| 86 | Tổng cộng |  |  | `=D84-D85` |  |  |
| 87 | Giảm giá theo cam kết hỗ trợ |  |  | 527.41 |  |  |
| 88 | Thành tiền |  |  | `=D86-D87` | 25463 | `=D88*E88` |
| 89 | Thuế GTGT (10%) |  |  |  |  | `=round(F88*10%,0)` |
| 90 | Tổng số tiền phải thanh toán |  |  |  |  | `=F88+F89` |
| 94 | ĐỐI SOÁT CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 97 | 1 | AWS (851725573450) | 2024-12-01 | 4132.11 |  |  |
| 98 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D97*(1+5.26%),2)` |  |  |
| 99 | Chiết khấu (3%) |  |  | `=round(D98*3%,2)` |  |  |
| 100 | Thành tiền |  |  | `=D98-D99` | 25551 | `=D100*E100` |
| 101 | Thuế GTGT (10%) |  |  |  |  | `=round(F100*10%,0)` |
| 102 | Tổng số tiền phải thanh toán |  |  |  |  | `=F100+F101` |
| 106 | ĐỐI SOÁT CHI PHÍ ONSTOCKS |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 109 | 1 | AWS (851725573450) | 2025-01-01 | 3473.01 |  |  |
| 110 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D109*(1+5.26%),2)` |  |  |
| 111 | Chiết khấu (3%) |  |  | `=round(D110*3%,2)` |  |  |
| 112 | Thành tiền |  |  | `=D110-D111` | 25295 | `=D112*E112` |
| 113 | Thuế GTGT (10%) |  |  |  |  | `=round(F112*10%,0)` |
| 114 | Tổng số tiền phải thanh toán |  |  |  |  | `=F112+F113` |
| 118 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 120 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 121 | 1 | AWS (851725573450) | 2025-02-01 | 6825.54 |  |  |
| 122 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D121*(1+5.26%),2)` |  |  |
| 123 | Chiết khấu (3%) |  |  | `=round(D122*3%,2)` |  |  |
| 124 | Thành tiền |  |  | `=D122-D123` | 25735 | `=D124*E124` |
| 125 | Thuế GTGT (10%) |  |  |  |  | `=round(F124*10%,0)` |
| 126 | Tổng số tiền phải thanh toán |  |  |  |  | `=F124+F125` |
| 130 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 132 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 133 | 1 | AWS (851725573450) | 2025-03-01 | 6475.17 |  |  |
| 134 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D133*(1+5.26%),2)` |  |  |
| 135 | Chiết khấu (3%) |  |  | `=round(D134*3%,2)` |  |  |
| 136 | Thành tiền |  |  | `=D134-D135` | 25775 | `=D136*E136` |
| 137 | Thuế GTGT (10%) |  |  |  |  | `=round(F136*10%,0)` |
| 138 | Tổng số tiền phải thanh toán |  |  |  |  | `=F136+F137` |
| 142 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 144 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 145 | 1 | AWS (851725573450) | 2025-04-01 | 4654.22 |  |  |
| 146 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D145*(1+5.26%),2)` |  |  |
| 147 | Chiết khấu (3%) |  |  | `=round(D146*3%,2)` |  |  |
| 148 | Thành tiền |  |  | `=D146-D147` | 26190 | `=D148*E148` |
| 149 | Thuế GTGT (10%) |  |  |  |  | `=round(F148*10%,0)` |
| 150 | Tổng số tiền phải thanh toán |  |  |  |  | `=F148+F149` |
| 154 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 157 | 1 | AWS (851725573450) | 2025-05-01 | 5142.104 |  |  |
| 158 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D157*(1+5.26%),2)` |  |  |
| 159 | Chiết khấu (3%) |  |  | `=round(D158*3%,2)` |  |  |
| 160 | Thành tiền |  |  | `=D158-D159` | 26225 | `=D160*E160` |
| 161 | Thuế GTGT (10%) |  |  |  |  | `=round(F160*10%,0)` |
| 162 | Tổng số tiền phải thanh toán |  |  |  |  | `=F160+F161` |
| 166 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 168 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 169 | 1 | AWS (851725573450) | 2025-06-01 | 6227.2 |  |  |
| 170 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D169*(1+5.26%),2)` |  |  |
| 171 | Chiết khấu (3%) |  |  | `=round(D170*3%,2)` |  |  |
| 172 | Thành tiền |  |  | `=D170-D171` | 26300 | `=D172*E172` |
| 173 | Thuế GTGT (10%) |  |  |  |  | `=round(F172*10%,0)` |
| 174 | Tổng số tiền phải thanh toán |  |  |  |  | `=F172+F173` |
| 178 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 180 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 181 | 1 | AWS (851725573450) | 2025-07-01 | 13142.31 |  |  |
| 182 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D181*(1+10%),2)` |  |  |
| 183 | Chiết khấu (3%) |  |  | `=round(D182*3%,2)` |  |  |
| 184 | Thành tiền |  |  | `=D182-D183` | 26382 | `=D184*E184` |
| 185 | Thuế GTGT (10%) |  |  |  |  | `=round(F184*10%,0)` |
| 186 | Tổng số tiền phải thanh toán |  |  |  |  | `=F184+F185` |
| 190 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 192 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 193 | 1 | AWS (851725573450) | 2025-08-01 | 8434.36 |  |  |
| 194 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D193*(1+10%),2)` |  |  |
| 195 | Chiết khấu (3%) |  |  | `=round(D194*3%,2)` |  |  |
| 196 | Thành tiền |  |  | `=D194-D195` | 26502 | `=D196*E196` |
| 197 | Thuế GTGT (10%) |  |  |  |  | `=round(F196*10%,0)` |
| 198 | Tổng số tiền phải thanh toán |  |  |  |  | `=F196+F197` |
| 202 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 204 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 205 | 1 | AWS (851725573450) | 2025-09-01 | 7134.02 |  |  |
| 206 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D205*(1+10%),2)` |  |  |
| 207 | Chiết khấu (3%) |  |  | `=round(D206*3%,2)` |  |  |
| 208 | Thành tiền |  |  | `=D206-D207` | 26446 | `=D208*E208` |
| 209 | Thuế GTGT (10%) |  |  |  |  | `=round(F208*10%,0)` |
| 210 | Tổng số tiền phải thanh toán |  |  |  |  | `=F208+F209` |
| 215 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 217 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 218 | 1 | AWS (851725573450) | 2025-10-01 | 7039.37 |  |  |
| 219 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D218*(1+10%),2)` |  |  |
| 220 | Chiết khấu (3%) |  |  | `=round(D219*3%,2)` |  |  |
| 221 | Thành tiền |  |  | `=D219-D220` | 26347 | `=D221*E221` |
| 222 | Thuế GTGT (10%) |  |  |  |  | `=round(F221*10%,0)` |
| 223 | Tổng số tiền phải thanh toán |  |  |  |  | `=F221+F222` |
| 228 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 230 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 231 | 1 | AWS (851725573450) | 2025-11-01 | 3050.64 |  |  |
| 232 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D231*(1+10%),2)` |  |  |
| 233 | Chiết khấu (3%) |  |  | `=round(D232*3%,2)` |  |  |
| 234 | Thành tiền |  |  | `=D232-D233` | 26412 | `=D234*E234` |
| 235 | Thuế GTGT (10%) |  |  |  |  | `=round(F234*10%,0)` |
| 236 | Tổng số tiền phải thanh toán |  |  |  |  | `=F234+F235` |
| 242 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |
| 244 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 245 | 1 | AWS (851725573450) | 2025-12-01 | 720.51 |  |  |
| 246 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D245*(1+10%),2)` |  |  |
| 247 | Chiết khấu (3%) |  |  | `=round(D246*3%,2)` |  |  |
| 248 | Thành tiền |  |  | `=D246-D247` | 26377 | `=D248*E248` |
| 249 | Thuế GTGT (10%) |  |  |  |  | `=round(F248*10%,0)` |
| 250 | Tổng số tiền phải thanh toán |  |  |  |  | `=F248+F249` |
| 256 | ĐỐI SOÁT CHI PHÍ FINTECH AI |  |  |  |  |  |

> *Đã bỏ qua 89 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (123 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 22 | `D7` |
| D | `=round(D{r}*3%,2)` | 16 | `D61` |
| D | `=round(D{r}*(1+5.26%),2)` | 15 | `D5` |
| D | `=round(D{r}*(1+10%),2)` | 6 | `D182` |
| D | `=round(D{r}*2%,2)` | 5 | `D6` |
| F | `=D{r}*E{r}` | 21 | `F7` |
| F | `=round(F{r}*10%,0)` | 19 | `F27` |
| F | `=F{r}+F{r}` | 19 | `F28` |
