# FILUM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `FILUM`  
> **Vùng dữ liệu:** 16 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ FILUM |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (416897829985) | 2023-06-01 | 205.19 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D4*(1+10%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 23762 | `=D7*E7` |
| 10 | TỔNG HỢP CHI PHÍ FILUM |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | AWS (416897829985) | 2023-07-01 | 200.77 |  |  |
| 14 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D13*(1+10%),2)` |  |  |
| 15 | Chiết khấu (2%) |  |  | `=round(D14*2%,2)` |  |  |
| 16 |  |  |  | `=D14-D15` | 23860 | `=D16*E16` |

> *Đã bỏ qua 4 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (8 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+10%),2)` | 2 | `D5` |
| D | `=round(D{r}*2%,2)` | 2 | `D6` |
| D | `=D{r}-D{r}` | 2 | `D7` |
| F | `=D{r}*E{r}` | 2 | `F7` |
