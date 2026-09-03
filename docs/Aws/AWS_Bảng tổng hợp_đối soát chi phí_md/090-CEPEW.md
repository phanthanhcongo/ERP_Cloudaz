# CEPEW

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `CEPEW`  
> **Vùng dữ liệu:** 221 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (334899223231) | 2023-04-01 | 0.98 |  |  |
| 5 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D4*10%,2)` |  |  |
| 6 |  | Tổng số tiền phải thanh toán |  | `=round(D4+D5,2)` | 23645 | `=D6*E6` |
| 9 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 11 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 12 | 1 | AWS (334899223231) | 2023-10-01 | 1.53 |  |  |
| 13 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D12*10%,2)` |  |  |
| 14 |  | Tổng số tiền phải thanh toán |  | `=round(D12+D13,2)` | 24729 | `=D14*E14` |
| 18 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 20 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 21 | 1 | AWS (334899223231) | 2023-11-01 | 2.14 |  |  |
| 22 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D21*10%,2)` |  |  |
| 23 |  | Tổng số tiền phải thanh toán |  | `=round(D21+D22,2)` | 24427 | `=D23*E23` |
| 26 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 28 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 29 | 1 | AWS (334899223231) | 2023-12-01 | 4.12 |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D29*10%,2)` |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=round(D29+D30,2)` | 24450 | `=D31*E31` |
| 35 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | AWS (334899223231) | 2024-01-01 | 2.22 |  |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D38*10%,2)` |  |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=round(D38+D39,2)` | 24578 | `=D40*E40` |
| 44 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 47 | 1 | AWS (334899223231) | 2024-02-01 | 5.75 |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D47*10%,2)` |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(D47+D48,2)` | 24802 | `=D49*E49` |
| 53 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 56 | 1 | AWS (334899223231) | 2024-03-01 | 6.4 |  |  |
| 57 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D56*10%,2)` |  |  |
| 58 |  | Tổng số tiền phải thanh toán |  | `=round(D56+D57,2)` | 24972 | `=D58*E58` |
| 62 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 65 | 1 | AWS (334899223231) | 2024-04-01 | 6.46 |  |  |
| 66 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D65*10%,2)` |  |  |
| 67 |  | Tổng số tiền phải thanh toán |  | `=round(D65+D66,2)` | 25458 | `=D67*E67` |
| 71 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | AWS (334899223231) | 2024-06-01 | 6.16 |  |  |
| 75 | Phí dịch vụ |  |  | `=round(D74*10%,2)` |  |  |
| 76 | Thành tiền |  |  | `=D74+D75` | 25473 | `=D76*E76` |
| 77 | Thuế GTGT |  |  |  |  | `=round(F76*10%,0)` |
| 78 | Tổng số tiền phải thanh toán |  |  |  |  | `=F76+F77` |
| 82 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 85 | 1 | AWS (334899223231) | 2024-07-01 | 6.15 |  |  |
| 86 | Phí dịch vụ |  |  | `=round(D85*10%,2)` |  |  |
| 87 | Thành tiền |  |  | `=D85+D86` | 25405 | `=D87*E87` |
| 88 | Thuế GTGT |  |  |  |  | `=round(F87*10%,0)` |
| 89 | Tổng số tiền phải thanh toán |  |  |  |  | `=F87+F88` |
| 93 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 95 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 96 | 1 | AWS (728030424348) | 2024-08-01 | 6.24 |  |  |
| 97 | Phí dịch vụ |  |  | `=round(D96*10%,2)` |  |  |
| 98 | Thành tiền |  |  | `=D96+D97` | 25080 | `=D98*E98` |
| 99 | Thuế GTGT |  |  |  |  | `=round(F98*10%,0)` |
| 100 | Tổng số tiền phải thanh toán |  |  |  |  | `=F98+F99` |
| 104 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 107 | 1 | AWS (728030424348) | 2024-09-01 | 6.06 |  |  |
| 108 | Phí dịch vụ |  |  | `=round(D107*10%,2)` |  |  |
| 109 | Thành tiền |  |  | `=D107+D108` | 24733 | `=D109*E109` |
| 110 | Thuế GTGT |  |  |  |  | `=round(F109*10%,0)` |
| 111 | Tổng số tiền phải thanh toán |  |  |  |  | `=F109+F110` |
| 115 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 118 | 1 | AWS (728030424348) | 2024-10-01 | 6.09 |  |  |
| 119 | Phí dịch vụ |  |  | `=round(D118*10%,2)` |  |  |
| 120 | Thành tiền |  |  | `=D118+D119` | 25445 | `=D120*E120` |
| 121 | Thuế GTGT |  |  |  |  | `=round(F120*10%,0)` |
| 122 | Tổng số tiền phải thanh toán |  |  |  |  | `=F120+F121` |
| 126 | TỔNG HỢP CHI PHÍ CEPEW |  |  |  |  |  |
| 128 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 129 | 1 | AWS (728030424348) | 2024-11-01 | 5.98 |  |  |
| 130 | Phí dịch vụ |  |  | `=round(D129*10%,2)` |  |  |
| 131 | Thành tiền |  |  | `=D129+D130` | 25463 | `=D131*E131` |
| 132 | Thuế GTGT |  |  |  |  | `=round(F131*10%,0)` |
| 133 | Tổng số tiền phải thanh toán |  |  |  |  | `=F131+F132` |
| 137 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 139 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 140 | 1 | AWS (728030424348) | 2024-12-01 | 5.83 |  |  |
| 141 | Phí dịch vụ |  |  | `=round(D140*10%,2)` |  |  |
| 142 | Thành tiền |  |  | `=D140+D141` | 25551 | `=D142*E142` |
| 143 | Thuế GTGT |  |  |  |  | `=round(F142*10%,0)` |
| 144 | Tổng số tiền phải thanh toán |  |  |  |  | `=F142+F143` |
| 148 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 150 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 151 | 1 | AWS (728030424348) | 2025-01-01 | 5.79 |  |  |
| 152 | Phí dịch vụ |  |  | `=round(D151*10%,2)` |  |  |
| 153 | Thành tiền |  |  | `=D151+D152` | 25295 | `=D153*E153` |
| 154 | Thuế GTGT |  |  |  |  | `=round(F153*10%,0)` |
| 155 | Tổng số tiền phải thanh toán |  |  |  |  | `=F153+F154` |
| 159 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 161 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 162 | 1 | AWS (728030424348) | 2025-02-01 | 5.44 |  |  |
| 163 | Phí dịch vụ |  |  | `=round(D162*10%,2)` |  |  |
| 164 | Thành tiền |  |  | `=D162+D163` | 25735 | `=D164*E164` |
| 165 | Thuế GTGT |  |  |  |  | `=round(F164*10%,0)` |
| 166 | Tổng số tiền phải thanh toán |  |  |  |  | `=F164+F165` |
| 170 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 173 | 1 | AWS (728030424348) | 2025-03-01 | 6.05 |  |  |
| 174 | Phí dịch vụ |  |  | `=round(D173*10%,2)` |  |  |
| 175 | Thành tiền |  |  | `=D173+D174` | 25775 | `=D175*E175` |
| 176 | Thuế GTGT |  |  |  |  | `=round(F175*10%,0)` |
| 177 | Tổng số tiền phải thanh toán |  |  |  |  | `=F175+F176` |
| 181 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 183 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 184 | 1 | AWS (728030424348) | 2025-04-01 | 6.96 |  |  |
| 185 | Phí dịch vụ |  |  | `=round(D184*10%,2)` |  |  |
| 186 | Thành tiền |  |  | `=D184+D185` | 26190 | `=D186*E186` |
| 187 | Thuế GTGT |  |  |  |  | `=round(F186*10%,0)` |
| 188 | Tổng số tiền phải thanh toán |  |  |  |  | `=F186+F187` |
| 192 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 194 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 195 | 1 | AWS (728030424348) | 2025-05-01 | 5.43 |  |  |
| 196 | Phí dịch vụ |  |  | `=round(D195*10%,2)` |  |  |
| 197 | Thành tiền |  |  | `=D195+D196` | 26225 | `=D197*E197` |
| 198 | Thuế GTGT |  |  |  |  | `=round(F197*10%,0)` |
| 199 | Tổng số tiền phải thanh toán |  |  |  |  | `=F197+F198` |
| 203 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 205 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 206 | 1 | AWS (728030424348) | 2025-06-01 | 5.14 |  |  |
| 207 | Phí dịch vụ |  |  | `=round(D206*10%,2)` |  |  |
| 208 | Thành tiền |  |  | `=D206+D207` | 26300 | `=D208*E208` |
| 209 | Thuế GTGT |  |  |  |  | `=round(F208*10%,0)` |
| 210 | Tổng số tiền phải thanh toán |  |  |  |  | `=F208+F209` |
| 214 | ĐỐI SOÁT CHI PHÍ CEPEW |  |  |  |  |  |
| 216 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 217 | 1 | AWS (728030424348) | 2025-07-01 | 2.57 |  |  |
| 218 | Phí dịch vụ |  |  | `=round(D217*10%,2)` |  |  |
| 219 | Thành tiền |  |  | `=D217+D218` | 26382 | `=D219*E219` |
| 220 | Thuế GTGT |  |  |  |  | `=round(F219*10%,0)` |
| 221 | Tổng số tiền phải thanh toán |  |  |  |  | `=F219+F220` |

> *Đã bỏ qua 83 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (94 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 22 | `D5` |
| D | `=D{r}+D{r}` | 14 | `D76` |
| D | `=round(D{r}+D{r},2)` | 8 | `D6` |
| F | `=D{r}*E{r}` | 22 | `F6` |
| F | `=round(F{r}*10%,0)` | 14 | `F77` |
| F | `=F{r}+F{r}` | 14 | `F78` |
