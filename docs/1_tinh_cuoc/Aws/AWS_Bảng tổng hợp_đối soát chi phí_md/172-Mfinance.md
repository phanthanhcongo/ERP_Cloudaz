# Mfinance

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Mfinance`  
> **Vùng dữ liệu:** 32 dòng × 11 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ Mfinance |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Có | Tháng 6/2019 | Tồn cuối kỳ tháng 06 (đến ngày 31/06/2019) | Credit tồn đầu kỳ tháng 7 | Sử dụng trong kỳ tháng 7 qua CloudAZ | Sử dụng trong kỳ tháng 7 bằng thẻ | Sử dụng trong kỳ tháng 7 bằng thẻ | Tồn cuối kỳ chuyển sang tháng sau | `=SUM(G4:I4)` |
| 4 | 1 | 80525281387 | 5000 | -801.71 | `=C4+D4` | `=C4+D4+I4` | -803.82 | 25 | -61.98 | `=E4+G4+H4+I4` | `=4136.32-I4` |
| 5 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  | 0 | 0 | 0 | 0 | 0 |  |
| 6 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |  | 0 |  |
| 9 |  |  |  |  | Hà Nội, ngày 03 tháng 08 năm 2019 |  |  |  |  |  |  |
| 10 |  |  |  |  | Người lập |  |  |  |  |  |  |
| 14 |  |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |
| 19 | STT | Tài khoản | Đầu tháng 8/2019 | Tháng 8/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |  |
| 20 | 1 | 80525281387 | `=J4` | -793.13 | `=C20+D20` |  |  |  |  |  |  |
| 21 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |  |  |  |  |  |
| 22 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |  |  |  |
| 23 |  | Tổng số tiền phải thanh toán |  | `=D21+D22` |  |  |  |  |  |  |  |
| 27 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |  |  |  |  |  |
| 28 |  |  |  | Người lập |  |  |  |  |  |  |  |
| 32 |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |  |  |

> *Đã bỏ qua 16 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (8 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=J{r}` | 1 | `C20` |
| D | `=D{r}+D{r}` | 1 | `D23` |
| E | `=C{r}+D{r}` | 2 | `E4` |
| F | `=C{r}+D{r}+I{r}` | 1 | `F4` |
| J | `=E{r}+G{r}+H{r}+I{r}` | 1 | `J4` |
| K | `=SUM(G{r}:I{r})` | 1 | `K3` |
| K | `=4136.32-I{r}` | 1 | `K4` |
