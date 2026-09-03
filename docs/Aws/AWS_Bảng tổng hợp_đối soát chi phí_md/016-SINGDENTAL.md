# SINGDENTAL

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `SINGDENTAL`  
> **Vùng dữ liệu:** 123 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 361769555889 | 2025-07-01 | 407.02 |  |  |
| 5 |  | Chiết khấu (2%) |  | `=round(D4*2%,2)` |  |  |
| 6 |  | Phí dịch vụ (10%) |  | `=round(D4*10%,12)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` | 26382 | `=D7*E7` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 14 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 16 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 17 | 1 | 361769555889 | 2025-08-01 | 678.28 |  |  |
| 18 |  | Chiết khấu (2%) |  | `=round(D17*2%,2)` |  |  |
| 19 |  | Phí dịch vụ (10%) |  | `=round(D17*10%,12)` |  |  |
| 20 | Thành tiền |  |  | `=round(D17-D18+D19,2)` | 26502 | `=D20*E20` |
| 21 | Thuế GTGT (10%) |  |  |  |  | `=round(F20*10%,0)` |
| 22 | Tổng số tiền phải thanh toán |  |  |  |  | `=F20+F21` |
| 27 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 30 | 1 | 361769555889 | 2025-09-01 | 973.44 |  |  |
| 31 |  | Chiết khấu (2%) |  | `=round(D30*2%,2)` |  |  |
| 32 |  | Phí dịch vụ (10%) |  | `=round(D30*10%,12)` |  |  |
| 33 | Thành tiền |  |  | `=round(D30-D31+D32,2)` | 26446 | `=D33*E33` |
| 34 | Thuế GTGT (10%) |  |  |  |  | `=round(F33*10%,0)` |
| 35 | Tổng số tiền phải thanh toán |  |  |  |  | `=F33+F34` |
| 40 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 43 | 1 | 361769555889 | 2025-10-01 | 1054.24 |  |  |
| 44 |  | Chiết khấu (2%) |  | `=round(D43*2%,2)` |  |  |
| 45 |  | Phí dịch vụ (10%) |  | `=round(D43*10%,12)` |  |  |
| 46 | Thành tiền |  |  | `=round(D43-D44+D45,2)` | 26347 | `=D46*E46` |
| 47 | Thuế GTGT (10%) |  |  |  |  | `=round(F46*10%,0)` |
| 48 | Tổng số tiền phải thanh toán |  |  |  |  | `=F46+F47` |
| 53 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 56 | 1 | 361769555889 | 2025-11-01 | 1075.01 |  |  |
| 57 |  | Chiết khấu (2%) |  | `=round(D56*2%,2)` |  |  |
| 58 |  | Phí dịch vụ (10%) |  | `=round(D56*10%,12)` |  |  |
| 59 | Thành tiền |  |  | `=round(D56-D57+D58,2)` | 26412 | `=D59*E59` |
| 60 | Thuế GTGT (10%) |  |  |  |  | `=round(F59*10%,0)` |
| 61 | Tổng số tiền phải thanh toán |  |  |  |  | `=F59+F60` |
| 67 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 70 | 1 | 361769555889 | 2025-12-01 | 1096.66 |  |  |
| 71 |  | Chiết khấu (2%) |  | `=round(D70*2%,2)` |  |  |
| 72 |  | Phí dịch vụ (10%) |  | `=round(D70*10%,12)` |  |  |
| 73 | Thành tiền |  |  | `=round(D70-D71+D72,2)` | 26377 | `=D73*E73` |
| 74 | Thuế GTGT (10%) |  |  |  |  | `=round(F73*10%,0)` |
| 75 | Tổng số tiền phải thanh toán |  |  |  |  | `=F73+F74` |
| 81 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 84 | 1 | 361769555889 | 2026-01-01 | 1084.78 |  |  |
| 85 |  | Chiết khấu (2%) |  | `=round(D84*2%,2)` |  |  |
| 86 |  | Phí dịch vụ (10%) |  | `=round(D84*10%,12)` |  |  |
| 87 | Thành tiền |  |  | `=round(D84-D85+D86,2)` | 26145 | `=D87*E87` |
| 88 | Thuế GTGT (10%) |  |  |  |  | `=round(F87*10%,0)` |
| 89 | Tổng số tiền phải thanh toán |  |  |  |  | `=F87+F88` |
| 95 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 98 | 1 | 361769555889 | 2026-02-01 | 966.68 |  |  |
| 99 |  | Chiết khấu (2%) |  | `=round(D98*2%,2)` |  |  |
| 100 |  | Phí dịch vụ (10%) |  | `=round(D98*10%,12)` |  |  |
| 101 | Thành tiền |  |  | `=round(D98-D99+D100,2)` | 26240 | `=D101*E101` |
| 102 | Thuế GTGT (10%) |  |  |  |  | `=round(F101*10%,0)` |
| 103 | Tổng số tiền phải thanh toán |  |  |  |  | `=F101+F102` |
| 109 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |
| 111 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 112 | 1 | 361769555889 | 2026-03-01 | 1084.94 |  |  |
| 113 |  | Chiết khấu (2%) |  | `=round(D112*2%,2)` |  |  |
| 114 |  | Phí dịch vụ (10%) |  | `=round(D112*10%,12)` |  |  |
| 115 | Thành tiền |  |  | `=round(D112-D113+D114,2)` | 26357 | `=D115*E115` |
| 116 | Thuế GTGT (10%) |  |  |  |  | `=round(F115*10%,0)` |
| 117 | Tổng số tiền phải thanh toán |  |  |  |  | `=F115+F116` |
| 123 | ĐỐI SOÁT CHI PHÍ AWS - SINGDENTAL |  |  |  |  |  |

> *Đã bỏ qua 50 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (54 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 9 | `D5` |
| D | `=round(D{r}*10%,12)` | 9 | `D6` |
| D | `=round(D{r}-D{r}+D{r},2)` | 8 | `D20` |
| D | `=D{r}-D{r}+D{r}` | 1 | `D7` |
| F | `=D{r}*E{r}` | 9 | `F7` |
| F | `=round(F{r}*10%,0)` | 9 | `F8` |
| F | `=F{r}+F{r}` | 9 | `F9` |
