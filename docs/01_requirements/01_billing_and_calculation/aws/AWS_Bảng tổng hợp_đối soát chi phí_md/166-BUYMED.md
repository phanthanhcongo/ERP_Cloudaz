# BUYMED

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `BUYMED`  
> **Vùng dữ liệu:** 15 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ BUYMED |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 220692671811 | 2020-08-01 | 12711.31 | 23270 | `=D4*E4` |
| 5 |  | Tổng cộng |  | `=D4` |  | `=F4` |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D5*0.1` |  | `=F5*0.1` |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |
| 10 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |
| 11 |  |  |  |                                Người lập |  |  |
| 15 |  |  |  |                          Phạm Cẩm Nhung |  |  |

> *Đã bỏ qua 6 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (7 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 1 | `D5` |
| D | `=D{r}*0.1` | 1 | `D6` |
| D | `=D{r}+D{r}` | 1 | `D7` |
| F | `=D{r}*E{r}` | 1 | `F4` |
| F | `=F{r}` | 1 | `F5` |
| F | `=F{r}*0.1` | 1 | `F6` |
| F | `=F{r}+F{r}` | 1 | `F7` |
