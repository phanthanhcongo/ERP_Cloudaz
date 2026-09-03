# FARMERSMART

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `FARMERSMART`  
> **Vùng dữ liệu:** 28 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ FARMERSMART |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 752975486858 | 2023-03-01 | 13.73 |  |  |
| 5 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 6 | Tổng số tiền phải thanh toán |  |  | `=D4+D5` | 23632 | `=D6*E6` |
| 10 | TỔNG HỢP CHI PHÍ FARMERSMART |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 752975486858 | 2024-04-01 | 75.54 |  |  |
| 14 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D13*10%,2)` |  |  |
| 15 | Tổng số tiền phải thanh toán |  |  | `=D13+D14` | 25458 | `=D15*E15` |
| 19 | TỔNG HỢP CHI PHÍ FARMERSMART |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 22 | 1 | 752975486858 | 2024-05-01 | 82.37 |  |  |
| 23 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D22*10%,2)` |  |  |
| 24 | Tổng số tiền phải thanh toán |  |  | `=D22+D23` | 25474 | `=D24*E24` |
| 28 | TỔNG HỢP CHI PHÍ FARMERSMART |  |  |  |  |  |

> *Đã bỏ qua 12 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (9 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 3 | `D5` |
| D | `=D{r}+D{r}` | 3 | `D6` |
| F | `=D{r}*E{r}` | 3 | `F6` |
