# LsTrade (BHO NETWORK)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `LsTrade (BHO NETWORK)`  
> **Vùng dữ liệu:** 17 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ BHO NETWORK |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (185492202248) | 2023-05-01 | 12.75 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D4*(1+5%),2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D5*3%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 23662 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ BHO NETWORK |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | AWS (185492202248) | 2023-08-01 | 548.81 |  |  |
| 15 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D14*(1+5%),2)` |  |  |
| 16 |  |  |  | `=round(D15*3%,2)` |  |  |
| 17 |  |  |  | `=D15-D16` | 24260 | `=D17*E17` |

> *Đã bỏ qua 5 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (8 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+5%),2)` | 2 | `D5` |
| D | `=round(D{r}*3%,2)` | 2 | `D6` |
| D | `=D{r}-D{r}` | 2 | `D7` |
| F | `=D{r}*E{r}` | 2 | `F7` |
