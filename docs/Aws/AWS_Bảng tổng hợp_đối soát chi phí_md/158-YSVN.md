# YSVN

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `YSVN`  
> **Vùng dữ liệu:** 41 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ YSVN |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 495274757247 | 2021-06-01 | 211.05 | 23130 | `=round(D5*E5,3)` |  |
| 6 |  | Tổng cộng |  | `=D5` |  | `=F5` |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*10%` |  | `=round(F6*10%,0)` |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` | 23130 | `=F6+F7` |  |
| 11 | TỔNG HỢP CHI PHÍ YSVN |  |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 14 | 1 | 495274757247 | 2021-07-01 | 265.23 | 23050 | `=round(D14*E14,0)` |  |
| 15 |  | Discount (1.5%) |  | `=D14*1.5%` |  |  |  |
| 16 |  | Tổng cộng |  | `=D14-D15` | 23050 | `=round(D16*E16,0)` |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*10%` |  | `=round(F16*10%,0)` |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=D16+D17` | 23050 | `=F16+F17` |  |
| 21 | TỔNG HỢP CHI PHÍ YSVN |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 24 | 1 | 495274757247 | 2021-08-01 | 275.17 | 22880 | `=round(D24*E24,0)` |  |
| 25 |  | Discount (1.5%) |  | `=D24*1.5%` |  |  |  |
| 26 |  | Tổng cộng |  | `=D24-D25` | 22880 | `=round(D26*E26,0)` |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D26*10%` |  | `=round(F26*10%,0)` |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=D26+D27` | 22880 | `=F26+F27` | 6821596 |
| 31 | TỔNG HỢP CHI PHÍ YSVN |  |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 34 | 1 | 495274757247 | 2021-09-01 | 210.65 | 22840 | `=round(D34*E34,0)` |  |
| 35 |  | Discount (1.5%) |  | `=D34*1.5%` |  |  |  |
| 36 |  | Tổng cộng |  | `=D34-D35` | 22840 | `=round(D36*E36,0)` |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D36*10%` |  | `=round(F36*10%,0)` |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=D36+D37` | 22840 | `=F36+F37` | 5212985 |
| 41 | TỔNG HỢP CHI PHÍ YSVN |  |  |  |  |  |  |

> *Đã bỏ qua 13 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (31 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*10%` | 4 | `D7` |
| D | `=D{r}+D{r}` | 4 | `D8` |
| D | `=D{r}*1.5%` | 3 | `D15` |
| D | `=D{r}-D{r}` | 3 | `D16` |
| D | `=D{r}` | 1 | `D6` |
| F | `=round(D{r}*E{r},0)` | 6 | `F14` |
| F | `=round(F{r}*10%,0)` | 4 | `F7` |
| F | `=F{r}+F{r}` | 4 | `F8` |
| F | `=round(D{r}*E{r},3)` | 1 | `F5` |
| F | `=F{r}` | 1 | `F6` |
