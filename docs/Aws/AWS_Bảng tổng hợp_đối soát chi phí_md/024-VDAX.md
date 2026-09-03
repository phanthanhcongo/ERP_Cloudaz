# VDAX

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VDAX`  
> **Vùng dữ liệu:** 95 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 593793041390 | 2025-07-01 | 5507.21 |  |  |
| 5 | Phí dịch vụ (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D4*3%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4+D5-D6` | 26382 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 13 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 16 | 1 | 593793041390 | 2025-08-01 | 319.6 |  |  |
| 17 | Phí dịch vụ (10%) |  |  | `=round(D16*10%,2)` |  |  |
| 18 | Chiết khấu (3%) |  |  | `=round(D16*3%,2)` |  |  |
| 19 | Thành tiền |  |  | `=D16+D17-D18` | 26502 | `=round(D19*E19,0)` |
| 20 | Thuế GTGT (10%) |  |  |  |  | `=round(F19*10%,0)` |
| 21 | Tổng số tiền phải thanh toán |  |  |  |  | `=F19+F20` |
| 27 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 30 | 1 | 593793041390 | 2025-12-01 | 7333.41 |  |  |
| 31 | Phí dịch vụ (10%) |  |  | `=round(D30*10%,2)` |  |  |
| 32 | Chiết khấu (3%) |  |  | `=round(D30*3%,2)` |  |  |
| 33 | Thành tiền |  |  | `=D30+D31-D32` | 26377 | `=round(D33*E33,0)` |
| 34 | Thuế GTGT (10%) |  |  |  |  | `=round(F33*10%,0)` |
| 35 | Tổng số tiền phải thanh toán |  |  |  |  | `=F33+F34` |
| 40 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 43 | 1 | 593793041390 | 2026-01-01 | 4269.74 |  |  |
| 44 | Phí dịch vụ (10%) |  |  | `=round(D43*10%,2)` |  |  |
| 45 | Chiết khấu (3%) |  |  | `=round(D43*3%,2)` |  |  |
| 46 | Thành tiền |  |  | `=D43+D44-D45` | 26145 | `=round(D46*E46,0)` |
| 47 | Thuế GTGT (10%) |  |  |  |  | `=round(F46*10%,0)` |
| 48 | Tổng số tiền phải thanh toán |  |  |  |  | `=F46+F47` |
| 53 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 56 | 1 | 593793041390 | 2026-02-01 | 2433.59 |  |  |
| 57 | Phí dịch vụ (10%) |  |  | `=round(D56*10%,2)` |  |  |
| 58 | Chiết khấu (3%) |  |  | `=round(D56*3%,2)` |  |  |
| 59 | Thành tiền |  |  | `=D56+D57-D58` | 26240 | `=round(D59*E59,0)` |
| 60 | Thuế GTGT (10%) |  |  |  |  | `=round(F59*10%,0)` |
| 61 | Tổng số tiền phải thanh toán |  |  |  |  | `=F59+F60` |
| 67 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 70 | 1 | 593793041390 | 2026-03-01 | 1788.85 |  |  |
| 71 | Phí dịch vụ (10%) |  |  | `=round(D70*10%,2)` |  |  |
| 72 | Chiết khấu (3%) |  |  | `=round(D70*3%,2)` |  |  |
| 73 | Thành tiền |  |  | `=D70+D71-D72` | 26357 | `=round(D73*E73,0)` |
| 74 | Thuế GTGT (10%) |  |  |  |  | `=round(F73*10%,0)` |
| 75 | Tổng số tiền phải thanh toán |  |  |  |  | `=F73+F74` |
| 81 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 84 | 1 | 593793041390 | 2026-04-01 | 1196.74 |  |  |
| 85 | Phí dịch vụ (10%) |  |  | `=round(D84*10%,2)` |  |  |
| 86 | Chiết khấu (3%) |  |  | `=round(D84*3%,2)` |  |  |
| 87 | Thành tiền |  |  | `=D84+D85-D86` | 26368 | `=round(D87*E87,0)` |
| 88 | Thuế GTGT (10%) |  |  |  |  | `=round(F87*10%,0)` |
| 89 | Tổng số tiền phải thanh toán |  |  |  |  | `=F87+F88` |
| 95 | ĐỐI SOÁT CHI PHÍ AWS - VDAX |  |  |  |  |  |

> *Đã bỏ qua 38 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (42 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 7 | `D5` |
| D | `=round(D{r}*3%,2)` | 7 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 7 | `D7` |
| F | `=round(D{r}*E{r},0)` | 7 | `F7` |
| F | `=round(F{r}*10%,0)` | 7 | `F8` |
| F | `=F{r}+F{r}` | 7 | `F9` |
