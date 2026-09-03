# MASAN_OSAM(cũ)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MASAN_OSAM(cũ)`  
> **Vùng dữ liệu:** 22 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ OSAM_MASAN |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 5 | 1 | 708238579351 | 2020-02-01 | 8065.72 | 23320 | `=D5*E5` |
| 6 | 2 |  | 2020-03-01 | 22609.93 | 23320 | `=D6*E6` |
| 7 | 3 |  | 2020-04-01 | 22569.03 | 23520 | `=D7*E7` |
| 8 | 4 |  | 2020-05-01 | 23439.94 | 23350 | `=D8*E8` |
| 9 | 5 | RI_MIC | 2020-05-01 | 1698 | 23540 | `=D9*E9` |
| 10 |  | Tổng cộng |  | `=sum(D5:D9)` |  | `=sum(F5:F8)` |
| 11 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D10*0.1` |  | `=F10*0.1` |
| 12 |  | Tổng số tiền phải thanh toán cho CloudAZ |  | `=D10+D11` |  | `=F10+F11` |
| 17 |  |  |  | Hà Nội, ngày 10 tháng 06 năm 2020 |  |  |
| 18 |  |  |  | Người lập  |  |  |
| 22 |  |  |  | Phạm Cẩm Nhung |  |  |

> *Đã bỏ qua 9 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (11 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r}:D{r})` | 1 | `D10` |
| D | `=D{r}*0.1` | 1 | `D11` |
| D | `=D{r}+D{r}` | 1 | `D12` |
| F | `=D{r}*E{r}` | 5 | `F5` |
| F | `=sum(F{r}:F{r})` | 1 | `F10` |
| F | `=F{r}*0.1` | 1 | `F11` |
| F | `=F{r}+F{r}` | 1 | `F12` |
