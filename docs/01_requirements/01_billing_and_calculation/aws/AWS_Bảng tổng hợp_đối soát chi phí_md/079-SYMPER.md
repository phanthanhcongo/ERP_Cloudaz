# SYMPER

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `SYMPER`  
> **Vùng dữ liệu:** 8 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ SYMPER |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (334899223231) | 2023-02-01 | 1946.7 |  |  |
| 5 | Discount |  |  | `=D4*2%` |  |  |
| 6 | Tổng cộng |  |  | `=D4-D5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*8%` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 23955 | `=D8*E8` |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (5 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*2%` | 1 | `D5` |
| D | `=D{r}-D{r}` | 1 | `D6` |
| D | `=D{r}*8%` | 1 | `D7` |
| D | `=round(D{r}+D{r},2)` | 1 | `D8` |
| F | `=D{r}*E{r}` | 1 | `F8` |
