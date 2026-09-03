# ENTIZ TECH

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ENTIZ TECH`  
> **Vùng dữ liệu:** 64 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - ENTIZ |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 701109631542 | 2025-11-01 | 183.88 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (10%) |  |  | `=round((D4)*10%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4+D6-D5` | 26412 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 15 | ĐỐI SOÁT CHI PHÍ AWS - ENTIZ |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 18 | 1 | 701109631542 | 2025-12-01 | 212.97 |  |  |
| 19 | Chiết khấu (2%) |  |  | `=round(D18*2%,2)` |  |  |
| 20 | Phí dịch vụ (10%) |  |  | `=round((D18)*10%,2)` |  |  |
| 21 | Thành tiền |  |  | `=D18+D20-D19` | 26377 | `=round(D21*E21,0)` |
| 22 | Thuế GTGT (10%) |  |  |  |  | `=round(F21*10%,0)` |
| 23 | Tổng số tiền phải thanh toán |  |  |  |  | `=F21+F22` |
| 29 | ĐỐI SOÁT CHI PHÍ AWS - ENTIZ |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 32 | 1 | 701109631542 | 2026-03-01 | 214.69 |  |  |
| 33 | Chiết khấu (2%) |  |  | `=round(D32*2%,2)` |  |  |
| 34 | Phí dịch vụ (10%) |  |  | `=round((D32)*10%,2)` |  |  |
| 35 | Thành tiền |  |  | `=D32+D34-D33` | 26357 | `=round(D35*E35,0)` |
| 36 | Thuế GTGT (10%) |  |  |  |  | `=round(F35*10%,0)` |
| 37 | Tổng số tiền phải thanh toán |  |  |  |  | `=F35+F36` |
| 43 | ĐỐI SOÁT CHI PHÍ AWS - ENTIZ |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 46 | 1 | 701109631542 | 2026-04-01 | 207.24 |  |  |
| 47 | Chiết khấu (2%) |  |  | `=round(D46*2%,2)` |  |  |
| 48 | Phí dịch vụ (10%) |  |  | `=round((D46)*10%,2)` |  |  |
| 49 | Thành tiền |  |  | `=D46+D48-D47` | 26368 | `=round(D49*E49,0)` |
| 50 | Thuế GTGT (10%) |  |  |  |  | `=round(F49*10%,0)` |
| 51 | Tổng số tiền phải thanh toán |  |  |  |  | `=F49+F50` |
| 56 | ĐỐI SOÁT CHI PHÍ AWS - ENTIZ |  |  |  |  |  |
| 58 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 59 | 1 | 701109631542 | 2026-05-01 | 218.42 |  |  |
| 60 | Chiết khấu (2%) |  |  | `=round(D59*2%,2)` |  |  |
| 61 | Phí dịch vụ (10%) |  |  | `=round((D59)*10%,2)` |  |  |
| 62 | Thành tiền |  |  | `=D59+D61-D60` | 26395 | `=round(D62*E62,0)` |
| 63 | Thuế GTGT (10%) |  |  |  |  | `=round(F62*10%,0)` |
| 64 | Tổng số tiền phải thanh toán |  |  |  |  | `=F62+F63` |

> *Đã bỏ qua 24 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (30 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 5 | `D5` |
| D | `=round((D{r})*10%,2)` | 5 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 5 | `D7` |
| F | `=round(D{r}*E{r},0)` | 5 | `F7` |
| F | `=round(F{r}*10%,0)` | 5 | `F8` |
| F | `=F{r}+F{r}` | 5 | `F9` |
