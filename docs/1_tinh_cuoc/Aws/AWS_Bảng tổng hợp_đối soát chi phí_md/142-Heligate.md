# Heligate

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Heligate`  
> **Vùng dữ liệu:** 25 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ HELIGATE |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 164686773532 | 2022-11-01 | 9.36 |  |  |
| 5 |  | Discount (4%) |  | `=round(D4*4%,2)` |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D4*0.05,2)` |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=round(D4-D5+D6,2)` | 24795 | `=D7*E7` |
| 10 | TỔNG HỢP CHI PHÍ HELIGATE |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 164686773532 | 2022-12-01 | 30.5265394214 |  |  |
| 14 |  | Discount (4%) |  | `=round(D13*4%,2)` |  |  |
| 15 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round((D13-D14)*0.05,2)` |  |  |
| 16 |  | Tổng số tiền phải thanh toán |  | `=round(D13-D14+D15,2)` | 23760 | `=D16*E16` |
| 19 | TỔNG HỢP CHI PHÍ HELIGATE |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 22 | 1 | 164686773532 | 2023-01-01 | 16.27 |  |  |
| 23 |  | Discount (4%) |  | `=round(D22*4%,2)` |  |  |
| 24 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round((D22-D23)*0.05,2)` |  |  |
| 25 |  |  |  | `=round(D22-D23+D24,2)` | 23622 | `=D25*E25` |

> *Đã bỏ qua 7 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (12 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*4%,2)` | 3 | `D5` |
| D | `=round(D{r}-D{r}+D{r},2)` | 3 | `D7` |
| D | `=round((D{r}-D{r})*0.05,2)` | 2 | `D15` |
| D | `=round(D{r}*0.05,2)` | 1 | `D6` |
| F | `=D{r}*E{r}` | 3 | `F7` |
