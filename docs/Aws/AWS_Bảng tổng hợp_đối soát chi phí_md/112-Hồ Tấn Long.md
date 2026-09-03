# Hồ Tấn Long

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Hồ Tấn Long`  
> **Vùng dữ liệu:** 93 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 594871124101 | 2023-10-01 | 60.63 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D4*(1+10%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 24729 | `=D7*E7` |
| 10 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 594871124101 | 2023-11-01 | 57.65 |  |  |
| 14 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D13*(1+10%),2)` |  |  |
| 15 | Chiết khấu (2%) |  |  | `=round(D14*2%,2)` |  |  |
| 16 | Tổng số tiền phải thanh toán |  |  | `=D14-D15` | 24427 | `=D16*E16` |
| 20 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | 594871124101 | 2023-12-01 | 68.58 |  |  |
| 24 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D23*(1+10%),2)` |  |  |
| 25 | Chiết khấu (2%) |  |  | `=round(D24*2%,2)` |  |  |
| 26 | Tổng số tiền phải thanh toán |  |  | `=D24-D25` | 24450 | `=D26*E26` |
| 30 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 33 | 1 | 594871124101 | 2024-01-01 | 67.24 |  |  |
| 34 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D33*(1+10%),2)` |  |  |
| 35 | Chiết khấu (2%) |  |  | `=round(D34*2%,2)` |  |  |
| 36 | Tổng số tiền phải thanh toán |  |  | `=D34-D35` | 24578 | `=D36*E36` |
| 40 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 43 | 1 | 594871124101 | 2024-02-01 | 66.38 |  |  |
| 44 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D43*(1+10%),2)` |  |  |
| 45 | Chiết khấu (2%) |  |  | `=round(D44*2%,2)` |  |  |
| 46 | Tổng số tiền phải thanh toán |  |  | `=D44-D45` | 24802 | `=D46*E46` |
| 50 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 52 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 53 | 1 | 594871124101 | 2024-03-01 | 70.51 |  |  |
| 54 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D53*(1+10%),2)` |  |  |
| 55 | Chiết khấu (2%) |  |  | `=round(D54*2%,2)` |  |  |
| 56 | Tổng số tiền phải thanh toán |  |  | `=D54-D55` | 24972 | `=D56*E56` |
| 60 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 62 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 63 | 1 | 594871124101 | 2024-04-01 | 68.6 |  |  |
| 64 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D63*(1+10%),2)` |  |  |
| 65 | Chiết khấu (2%) |  |  | `=round(D64*2%,2)` |  |  |
| 66 | Tổng số tiền phải thanh toán |  |  | `=D64-D65` | 25458 | `=D66*E66` |
| 71 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | 594871124101 | 2024-05-01 | 70.51 |  |  |
| 75 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D74*(1+10%),2)` |  |  |
| 76 | Chiết khấu (2%) |  |  | `=round(D75*2%,2)` |  |  |
| 77 | Tổng số tiền phải thanh toán |  |  | `=D75-D76` | 25474 | `=D77*E77` |
| 81 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 84 | 1 | 594871124101 | 2024-06-01 | 68.45 |  |  |
| 85 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D84*(1+10%),2)` |  |  |
| 86 | Chiết khấu (2%) |  |  | `=round(D85*2%,2)` |  |  |
| 87 | Thành tiền |  |  | `=D85-D86` | 25473 | `=D87*E87` |
| 88 | Thuế GTGT (10%) |  |  |  |  | `=round(F87*10%,0)` |
| 89 | Tổng số tiền phải thanh toán |  |  |  |  | `=F87+F88` |
| 93 | TỔNG HỢP CHI PHÍ AWS |  |  |  |  |  |

> *Đã bỏ qua 36 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (38 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+10%),2)` | 9 | `D5` |
| D | `=round(D{r}*2%,2)` | 9 | `D6` |
| D | `=D{r}-D{r}` | 9 | `D7` |
| F | `=D{r}*E{r}` | 9 | `F7` |
| F | `=round(F{r}*10%,0)` | 1 | `F88` |
| F | `=F{r}+F{r}` | 1 | `F89` |
