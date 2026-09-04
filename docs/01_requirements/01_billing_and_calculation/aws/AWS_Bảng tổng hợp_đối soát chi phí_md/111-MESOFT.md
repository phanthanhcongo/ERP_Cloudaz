# MESOFT

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MESOFT`  
> **Vùng dữ liệu:** 43 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ MESOFT |  |  |  |  |  |
| 2 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 3 | 1 | 851024919824 | 2024-04-01 | 3042.63 |  |  |
| 4 | Phí dịch vụ tính trên Lượng dùng thực tế (7%) |  |  | `=round(D3*7%,2)` |  |  |
| 5 | Tổng số tiền phải thanh toán |  |  | `=D3+D4` | 25458 | `=D5*E5` |
| 9 | TỔNG HỢP CHI PHÍ MESOFT |  |  |  |  |  |
| 10 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 11 | 1 | 851024919824 | 2024-05-01 | 3135.07 |  |  |
| 12 | Phí dịch vụ tính trên Lượng dùng thực tế (7%) |  |  | `=round(D11*7%,2)` |  |  |
| 13 | Tổng số tiền phải thanh toán |  |  | `=D11+D12` | 25474 | `=D13*E13` |
| 17 | TỔNG HỢP CHI PHÍ MESOFT |  |  |  |  |  |
| 18 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 19 | 1 | 851024919824 | 2024-06-01 | 3042.46 |  |  |
| 20 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D19*5.26%,2)` |  |  |
| 21 | Thành tiền |  |  | `=D19+D20` | 25473 | `=D21*E21` |
| 22 | Thuế GTGT (10%) |  |  |  |  | `=round(F21*10%,0)` |
| 23 | Tổng số tiền phải thanh toán |  |  |  |  | `=F21+F22` |
| 27 | TỔNG HỢP CHI PHÍ MESOFT |  |  |  |  |  |
| 28 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 29 | 1 | 851024919824 | 2024-07-01 | 3193.1 |  |  |
| 30 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D29*5.26%,2)` |  |  |
| 31 | Thành tiền |  |  | `=D29+D30` | 25405 | `=D31*E31` |
| 32 | Thuế GTGT (10%) |  |  |  |  | `=round(F31*10%,0)` |
| 33 | Tổng số tiền phải thanh toán |  |  |  |  | `=F31+F32` |
| 37 | TỔNG HỢP CHI PHÍ MESOFT |  |  |  |  |  |
| 38 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 39 | 1 | 851024919824 | 2024-08-01 | 416.6 |  |  |
| 40 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D39*5.26%,2)` |  |  |
| 41 |  |  |  | `=D39+D40` | 25080 | `=D41*E41` |
| 42 |  |  |  |  |  | `=round(F41*10%,0)` |
| 43 |  |  |  |  |  | `=F41+F42` |

> *Đã bỏ qua 12 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (21 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 5 | `D5` |
| D | `=round(D{r}*5.26%,2)` | 3 | `D20` |
| D | `=round(D{r}*7%,2)` | 2 | `D4` |
| F | `=D{r}*E{r}` | 5 | `F5` |
| F | `=round(F{r}*10%,0)` | 3 | `F22` |
| F | `=F{r}+F{r}` | 3 | `F23` |
