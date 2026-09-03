# DEEPEYES

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `DEEPEYES`  
> **Vùng dữ liệu:** 19 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ DEEPEYES |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 156186221691 | 2024-05-01 | 70.97 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D4*(1+7%),2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D5*3%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 25474 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ DEEPEYES |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 156186221691 | 2024-06-01 | 1.14 |  |  |
| 15 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D14*(1+7%),2)` |  |  |
| 16 | Chiết khấu (3%) |  |  | `=round(D15*3%,2)` |  |  |
| 17 | Thành tiền |  |  | `=D15-D16` | 25473 | `=D17*E17` |
| 18 |  |  |  |  |  | `=round(F17*10%,0)` |
| 19 |  |  |  |  |  | `=F17+F18` |

> *Đã bỏ qua 5 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (10 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+7%),2)` | 2 | `D5` |
| D | `=round(D{r}*3%,2)` | 2 | `D6` |
| D | `=D{r}-D{r}` | 2 | `D7` |
| F | `=D{r}*E{r}` | 2 | `F7` |
| F | `=round(F{r}*10%,0)` | 1 | `F18` |
| F | `=F{r}+F{r}` | 1 | `F19` |
