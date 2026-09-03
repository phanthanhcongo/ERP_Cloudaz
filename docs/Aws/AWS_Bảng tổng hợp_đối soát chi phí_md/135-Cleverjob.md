# Cleverjob

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Cleverjob`  
> **Vùng dữ liệu:** 59 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ CLEVER JOB |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 335658105034 | 2022-10-01 | 250.57 |  |  |
| 5 |  | Discount 3% |  | `=D4*3%` |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.1` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 24877 | `=D8*E8` |
| 12 | TỔNG HỢP CHI PHÍ CLEVER JOB |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | 335658105034 | 2022-11-01 | 1488.31 |  |  |
| 16 |  | Discount 3% |  | `=D15*3%` |  |  |
| 17 |  | Tổng cộng |  | `=D15-D16` |  |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D17*0.1` |  |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=round(D17+D18,2)` | 24795 | `=D19*E19` |
| 22 | TỔNG HỢP CHI PHÍ CLEVER JOB |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 25 | 1 | 335658105034 | 2022-12-01 | 1929.9 |  |  |
| 26 |  | Discount 3% |  | `=D25*3%` |  |  |
| 27 |  | Tổng cộng |  | `=D25-D26` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D27*0.1` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=round(D27+D28,2)` | 23760 | `=D29*E29` |
| 32 | TỔNG HỢP CHI PHÍ CLEVER JOB |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | 335658105034 | 2023-01-01 | 2003.58 |  |  |
| 36 |  | Discount 3% |  | `=D35*3%` |  |  |
| 37 |  | Tổng cộng |  | `=D35-D36` |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D37*0.1` |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=round(D37+D38,2)` | 23622 | `=D39*E39` |
| 42 | TỔNG HỢP CHI PHÍ CLEVER JOB |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 335658105034 | 2023-02-01 | 910.31 |  |  |
| 46 |  | Discount 3% |  | `=D45*3%` |  |  |
| 47 |  | Tổng cộng |  | `=D45-D46` |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D47*0.1` |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(D47+D48,2)` | 23955 | `=D49*E49` |
| 52 | TỔNG HỢP CHI PHÍ CLEVER JOB |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | 335658105034 | 2023-03-01 | 77.4 |  |  |
| 56 |  | Discount 3% |  | `=D55*3%` |  |  |
| 57 |  | Tổng cộng |  | `=D55-D56` |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D57*0.1,2)` |  |  |
| 59 |  |  |  | `=round(D57+D58,2)` | 23632 | `=D59*E59` |

> *Đã bỏ qua 17 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (30 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*3%` | 6 | `D5` |
| D | `=D{r}-D{r}` | 6 | `D6` |
| D | `=round(D{r}+D{r},2)` | 6 | `D8` |
| D | `=D{r}*0.1` | 5 | `D7` |
| D | `=round(D{r}*0.1,2)` | 1 | `D58` |
| F | `=D{r}*E{r}` | 6 | `F8` |
