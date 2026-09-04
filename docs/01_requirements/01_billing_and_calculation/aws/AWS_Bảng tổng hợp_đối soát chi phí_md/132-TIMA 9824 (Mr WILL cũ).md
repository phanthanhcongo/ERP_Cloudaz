# TIMA 9824 (Mr WILL cũ)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TIMA 9824 (Mr WILL cũ)`  
> **Vùng dữ liệu:** 30 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ Mr WILL |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 851024919824 | 2023-02-01 | 234.37 |  |  |
| 5 |  | Discount (2%) |  | `=D4*2%` |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D6*10%` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 23955 | `=D8*E8` |
| 11 | TỔNG HỢP CHI PHÍ Mr WILL |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 851024919824 | 2023-03-01 | 4530.42 |  |  |
| 15 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D14*0.1,2)` |  |  |
| 16 | Chiết khấu (2%) |  |  | `=round((D14+D15)*0.02,2)` |  |  |
| 17 | Tổng số tiền phải thanh toán |  |  | `=D14+D15-D16` | 23632 | `=D17*E17` |
| 20 | TỔNG HỢP CHI PHÍ Mr WILL |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | 851024919824 | 2023-04-01 | 4911.86 |  |  |
| 24 | Phí dịch vụ tính trên Lượng dùng thực tế (10%) |  |  | `=round(D23*0.1,2)` |  |  |
| 25 | Chiết khấu (2%) |  |  | `=round((D23+D24)*0.02,2)` |  |  |
| 26 | Tổng số tiền phải thanh toán |  |  | `=D23+D24-D25` | 23645 | `=D26*E26` |
| 30 | TỔNG HỢP CHI PHÍ Mr WILL |  |  |  |  |  |

> *Đã bỏ qua 10 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (13 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*0.1,2)` | 2 | `D15` |
| D | `=round((D{r}+D{r})*0.02,2)` | 2 | `D16` |
| D | `=D{r}+D{r}-D{r}` | 2 | `D17` |
| D | `=D{r}*2%` | 1 | `D5` |
| D | `=D{r}-D{r}` | 1 | `D6` |
| D | `=D{r}*10%` | 1 | `D7` |
| D | `=round(D{r}+D{r},2)` | 1 | `D8` |
| F | `=D{r}*E{r}` | 3 | `F8` |
