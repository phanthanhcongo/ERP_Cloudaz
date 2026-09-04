# G&amp;G BLOCKCHAIN

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `G&amp;G BLOCKCHAIN`  
> **Vùng dữ liệu:** 59 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ G&G BLOCKCHAIN CAMP |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 144348234070 | 2019-11-01 | 54.85 | 23270 | `=D4*E4` |
| 5 |  | Tổng cộng |  | `=D4` |  | `=F4` |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D5*0.1` |  | `=F5*0.1` |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |
| 9 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |
| 10 |  |  |  |                                Người lập |  |  |
| 14 |  |  |  |                          Phạm Cẩm Nhung |  |  |
| 18 | TỔNG HỢP CHI PHÍ G&G BLOCKCHAIN CAMP |  |  |  |  |  |
| 20 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 21 | 1 | 144348234070 | 2019-12-01 | 550.93 | 23270 | `=D21*E21` |
| 22 |  | Tổng cộng |  | `=D21` |  | `=F21` |
| 23 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D22*0.1` |  | `=F22*0.1` |
| 24 |  | Tổng số tiền phải thanh toán |  | `=D22+D23` |  | `=F22+F23` |
| 26 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |
| 27 |  |  |  |                                Người lập |  |  |
| 31 |  |  |  |                          Phạm Cẩm Nhung |  |  |
| 34 | TỔNG HỢP CHI PHÍ G&G BLOCKCHAIN CAMP |  |  |  |  |  |
| 36 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 37 | 1 | 144348234070 | 2020-01-01 | 566.22 | 23320 | `=D37*E37` |
| 38 |  | Tổng cộng |  | `=D37` |  | `=F37` |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D38*0.1` |  | `=F38*0.1` |
| 40 |  | Tổng số tiền phải thanh toán |  | `=D38+D39` |  | `=F38+F39` |
| 42 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |
| 43 |  |  |  |                                Người lập |  |  |
| 47 |  |  |  |                          Phạm Cẩm Nhung |  |  |
| 51 | TỔNG HỢP CHI PHÍ G&G BLOCKCHAIN CAMP |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 54 | 1 | 144348234070 | 2020-02-01 | 437.04 | 23320 | `=D54*E54` |
| 55 |  | Tổng cộng |  | `=D54` |  | `=F54` |
| 56 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D55*0.1` |  | `=F55*0.1` |
| 57 |  | Tổng số tiền phải thanh toán |  | `=D55+D56` |  | `=F55+F56` |
| 59 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |

> *Đã bỏ qua 25 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (28 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 4 | `D5` |
| D | `=D{r}*0.1` | 4 | `D6` |
| D | `=D{r}+D{r}` | 4 | `D7` |
| F | `=D{r}*E{r}` | 4 | `F4` |
| F | `=F{r}` | 4 | `F5` |
| F | `=F{r}*0.1` | 4 | `F6` |
| F | `=F{r}+F{r}` | 4 | `F7` |
