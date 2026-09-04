# THEGOODGUYS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `THEGOODGUYS`  
> **Vùng dữ liệu:** 44 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ MUSIC EDUCATION (CŨ) |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 386541820330 | 2023-05-01 | 4.89 |  |  |
| 5 | Phí dịch vụ 10% |  |  | `=round(D4*10%,2)` |  |  |
| 6 | Tổng số tiền phải thanh toán |  |  | `=D4+D5` | 23662 | `=D6*E6` |
| 10 | TỔNG HỢP CHI PHÍ MUSIC EDUCATION (CŨ) |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 386541820330 | 2023-06-01 | 191.35 |  |  |
| 14 | Phí dịch vụ 10% |  |  | `=round(D13*10%,2)` |  |  |
| 15 | Tổng số tiền phải thanh toán |  |  | `=D13+D14` | 23762 | `=D15*E15` |
| 18 | TỔNG HỢP CHI PHÍ THEGOODGUYS |  |  |  |  |  |
| 20 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 21 | 1 | 386541820330 | 2023-07-01 | 193.72 |  |  |
| 22 | Phí dịch vụ 10% |  |  | `=round(D21*10%,2)` |  |  |
| 23 | Tổng số tiền phải thanh toán |  |  | `=D21+D22` | 23860 | `=D23*E23` |
| 27 | TỔNG HỢP CHI PHÍ THEGOODGUYS |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 30 | 1 | 386541820330 | 2023-08-01 | 192.12 |  |  |
| 31 | Phí dịch vụ 10% |  |  | `=round(D30*10%,2)` |  |  |
| 32 | Tổng số tiền phải thanh toán |  |  | `=D30+D31` | 24260 | `=D32*E32` |
| 35 | TỔNG HỢP CHI PHÍ THEGOODGUYS |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | 386541820330 | 2023-09-01 | 188.28 |  |  |
| 39 | Phí dịch vụ 10% |  |  | `=round(D38*10%,2)` |  |  |
| 40 | Tổng số tiền phải thanh toán |  |  | `=D38+D39` | 24470 | `=D40*E40` |
| 44 | TỔNG HỢP CHI PHÍ THEGOODGUYS |  |  |  |  |  |

> *Đã bỏ qua 18 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (15 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 5 | `D5` |
| D | `=D{r}+D{r}` | 5 | `D6` |
| F | `=D{r}*E{r}` | 5 | `F6` |
