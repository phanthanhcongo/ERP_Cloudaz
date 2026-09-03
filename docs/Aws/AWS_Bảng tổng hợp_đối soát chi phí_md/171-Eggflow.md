# Eggflow

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Eggflow`  
> **Vùng dữ liệu:** 32 dòng × 11 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ Eggflow |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Có | Tháng 6/2019 | Tháng 7/2019 | Credit tồn cuối kỳ tháng 06 (tính đến 30/06/2019 | Sử dụng trong kỳ tháng 7 qua CloudAZ | Sử dụng trong kỳ tháng 7 bằng thẻ | Sử dụng trong kỳ tháng 7 bằng credits | Tồn cuối kỳ chuyển sang tháng sau | `=SUM(G4:I4)` |
| 4 | 1 | 446696183657 | 5000 | -801.71 | -61.98 | 1213.09 | -370.08 | 7.56 | -31.99 | `=sum(F4:I4)` | `=F4-31.99 ` |
| 5 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 | 0 | 0 | 0 |  | 0 |  |
| 6 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |  | 0 |  |
| 10 |  |  |  |  |  | Hà Nội, ngày 03 tháng 08 năm 2019 |  |  |  |  |  |
| 11 |  |  |  |  |  | Người lập |  |  |  |  |  |
| 15 |  |  |  |  |  | Nguyễn Thị Thu Phương |  |  |  |  |  |
| 19 |  |  |  |  |  | STT | Tài khoản | Đầu tháng 8/2019 | Tháng 8/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |
| 20 |  |  |  |  |  | 1 | 446696183657 | `=J4` | -793.13 | `=H20+I20` |  |
| 21 |  |  |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  |  |
| 22 |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  |  |  |  |
| 23 |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=I21+I22` |  |  |
| 27 |  |  |  |  |  |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2019 |  |  |
| 28 |  |  |  |  |  |  |  |  | Người lập |  |  |
| 32 |  |  |  |  |  |  |  |  | Nguyễn Thị Thu Phương |  |  |

> *Đã bỏ qua 16 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (6 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| H | `=J{r}` | 1 | `H20` |
| I | `=I{r}+I{r}` | 1 | `I23` |
| J | `=sum(F{r}:I{r})` | 1 | `J4` |
| J | `=H{r}+I{r}` | 1 | `J20` |
| K | `=SUM(G{r}:I{r})` | 1 | `K3` |
| K | `=F{r}-31.99 ` | 1 | `K4` |
