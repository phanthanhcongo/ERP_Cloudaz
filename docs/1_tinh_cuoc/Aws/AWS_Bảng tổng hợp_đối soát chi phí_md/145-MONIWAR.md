# MONIWAR

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MONIWAR`  
> **Vùng dữ liệu:** 44 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 4 | TỔNG HỢP CHI PHÍ MONIWAR |  |  |  |  |  |  |  |
| 6 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 7 | 1 | 875927945449 | 2021-12-01 | 7274.74 | 22920 | `=round(D7*E7,0)` |  |  |
| 8 |  | Discount (2%) |  | `=sum(D7)*2%` |  |  |  |  |
| 9 |  | Tổng cộng |  | `=sum(D7)-D8` | 22920 | `=round(D9*E9,0)` |  |  |
| 10 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D9*0.05` |  | `=F9*0.05` |  |  |
| 11 |  | Tổng số tiền phải thanh toán |  | `=D9+D10` | 22920 | `=F9+F10` | 171572415 |  |
| 15 | TỔNG HỢP CHI PHÍ MONIWAR |  |  |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 18 | 1 | 875927945449 | 2022-01-01 | 697.73 | 22780 | `=round(D18*E18,0)` |  |  |
| 19 |  | Discount (2%) |  | `=sum(D18)*2%` |  |  |  |  |
| 20 |  | Tổng cộng |  | `=sum(D18)-D19` | 22780 | `=round(D20*E20,0)` |  |  |
| 21 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D20*0.05` |  | `=F20*0.05` |  |  |
| 22 |  | Tổng số tiền phải thanh toán |  | `=D20+D21` | 22780 | `=F20+F21` | 16355224.1999999993 |  |
| 26 | TỔNG HỢP CHI PHÍ MONIWAR |  |  |  |  |  |  |  |
| 27 |  |  |  |  |  |  |  | Tháng 02/2022 khách hàng có $1134.52 credits và được trừ hết |
| 28 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 29 | 1 | 875927945449 | 2022-03-01 | 69.82 | 22980 | `=round(D29*E29,0)` |  |  |
| 30 |  | Discount (2%) |  | `=sum(D29)*2%` |  |  |  |  |
| 31 |  | Tổng cộng |  | `=sum(D29)-D30` | 22980 | `=round(D31*E31,0)` |  |  |
| 32 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D31*0.05` |  | `=F31*0.05` |  |  |
| 33 |  | Tổng số tiền phải thanh toán |  | `=D31+D32` | 22980 | `=F31+F32` | 1650992.7 |  |
| 37 | TỔNG HỢP CHI PHÍ MONIWAR |  |  |  |  |  |  |  |
| 39 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 40 | 1 | 875927945449 | 2022-04-01 | 136.2 | 23095 | `=round(D40*E40,0)` |  |  |
| 41 |  | Discount (2%) |  | `=sum(D40)*2%` |  |  |  |  |
| 42 |  | Tổng cộng |  | `=sum(D40)-D41` | 23095 | `=round(D42*E42,0)` |  |  |
| 43 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D42*0.05` |  | `=F42*0.05` |  |  |
| 44 |  |  |  | `=D42+D43` | 23095 | `=F42+F43` | 3236759.3999999999 |  |

> *Đã bỏ qua 15 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (32 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})*2%` | 4 | `D8` |
| D | `=sum(D{r})-D{r}` | 4 | `D9` |
| D | `=D{r}*0.05` | 4 | `D10` |
| D | `=D{r}+D{r}` | 4 | `D11` |
| F | `=round(D{r}*E{r},0)` | 8 | `F7` |
| F | `=F{r}*0.05` | 4 | `F10` |
| F | `=F{r}+F{r}` | 4 | `F11` |
