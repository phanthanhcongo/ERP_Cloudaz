# Tiến Việt

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Tiến Việt`  
> **Vùng dữ liệu:** 79 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - TIẾN VIỆT |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 548217738086 | 2025-12-01 | 10.18 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` | 26377 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 15 | ĐỐI SOÁT CHI PHÍ AWS - TIẾN VIỆT |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 18 | 1 | 548217738086 | 2026-01-01 | 93.33 |  |  |
| 19 | Chiết khấu (2%) |  |  | `=round(D18*2%,2)` |  |  |
| 20 | Phí dịch vụ (10%) |  |  | `=round(D18*10%,2)` |  |  |
| 21 | Thành tiền |  |  | `=D18-D19+D20` | 26145 | `=round(D21*E21,0)` |
| 22 | Thuế GTGT (10%) |  |  |  |  | `=round(F21*10%,0)` |
| 23 | Tổng số tiền phải thanh toán |  |  |  |  | `=F21+F22` |
| 29 | ĐỐI SOÁT CHI PHÍ AWS - TIẾN VIỆT |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 32 | 1 | 548217738086 | 2026-02-01 | 84.71 |  |  |
| 33 | Chiết khấu (2%) |  |  | `=round(D32*2%,2)` |  |  |
| 34 | Phí dịch vụ (10%) |  |  | `=round(D32*10%,2)` |  |  |
| 35 | Thành tiền |  |  | `=D32-D33+D34` | 26240 | `=round(D35*E35,0)` |
| 36 | Thuế GTGT (10%) |  |  |  |  | `=round(F35*10%,0)` |
| 37 | Tổng số tiền phải thanh toán |  |  |  |  | `=F35+F36` |
| 43 | ĐỐI SOÁT CHI PHÍ AWS - TIẾN VIỆT |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 46 | 1 | 548217738086 | 2026-03-01 | 93.44 |  |  |
| 47 | Chiết khấu (2%) |  |  | `=round(D46*2%,2)` |  |  |
| 48 | Phí dịch vụ (10%) |  |  | `=round(D46*10%,2)` |  |  |
| 49 | Thành tiền |  |  | `=D46-D47+D48` | 26357 | `=round(D49*E49,0)` |
| 50 | Thuế GTGT (10%) |  |  |  |  | `=round(F49*10%,0)` |
| 51 | Tổng số tiền phải thanh toán |  |  |  |  | `=F49+F50` |
| 57 | ĐỐI SOÁT CHI PHÍ AWS - TIẾN VIỆT |  |  |  |  |  |
| 59 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 60 | 1 | 548217738086 | 2026-04-01 | 90.97 |  |  |
| 61 | Chiết khấu (2%) |  |  | `=round(D60*2%,2)` |  |  |
| 62 | Phí dịch vụ (10%) |  |  | `=round(D60*10%,2)` |  |  |
| 63 | Thành tiền |  |  | `=D60-D61+D62` | 26368 | `=round(D63*E63,0)` |
| 64 | Thuế GTGT (10%) |  |  |  |  | `=round(F63*10%,0)` |
| 65 | Tổng số tiền phải thanh toán |  |  |  |  | `=F63+F64` |
| 71 | ĐỐI SOÁT CHI PHÍ AWS - TIẾN VIỆT |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | 548217738086 | 2026-05-01 | 93.72 |  |  |
| 75 | Chiết khấu (2%) |  |  | `=round(D74*2%,2)` |  |  |
| 76 |  |  |  | `=round(D74*10%,2)` |  |  |
| 77 |  |  |  | `=D74-D75+D76` | 26395 | `=round(D77*E77,0)` |
| 78 |  |  |  |  |  | `=round(F77*10%,0)` |
| 79 |  |  |  |  |  | `=F77+F78` |

> *Đã bỏ qua 31 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (36 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 6 | `D5` |
| D | `=round(D{r}*10%,2)` | 6 | `D6` |
| D | `=D{r}-D{r}+D{r}` | 6 | `D7` |
| F | `=round(D{r}*E{r},0)` | 6 | `F7` |
| F | `=round(F{r}*10%,0)` | 6 | `F8` |
| F | `=F{r}+F{r}` | 6 | `F9` |
