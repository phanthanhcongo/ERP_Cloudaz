# MYHEALTH

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MYHEALTH`  
> **Vùng dữ liệu:** 56 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ MY HEALTH |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 4 | 1 | 953154821356 | 2021-03-01 | 873.59 | 23165 | `=D4*E4` |  |  |
| 5 |  | Tổng cộng |  | `=sum(D4)` |  | `=sum(F4)` |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D5*0.1` |  | `=F5*0.1` |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` | 23165 | `=F5+F6` |  |  |
| 10 | TỔNG HỢP CHI PHÍ MY HEALTH |  |  |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 13 | 1 | 953154821356 | 2021-04-01 | 854.22 | 23150 | `=D13*E13` |  |  |
| 14 |  | Tổng cộng |  | `=sum(D13)` |  | `=sum(F13)` |  |  |
| 15 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D14*0.1` |  | `=F14*0.1` |  |  |
| 16 |  | Tổng số tiền phải thanh toán |  | `=D14+D15` | 23150 | `=F14+F15` |  |  |
| 19 | TỔNG HỢP CHI PHÍ MY HEALTH |  |  |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 22 | 1 | 953154821356 | 2021-05-01 | 886.35 | 23145 | `=round(D22*E22,0)` |  |  |
| 23 |  | Tổng cộng |  | `=sum(D22)` |  | `=sum(F22)` |  |  |
| 24 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D23*0.1` |  | `=F23*0.1` |  |  |
| 25 |  | Tổng số tiền phải thanh toán |  | `=D23+D24` | 23145 | `=F23+F24` |  |  |
| 28 | TỔNG HỢP CHI PHÍ MY HEALTH |  |  |  |  |  |  |  |
| 30 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 31 | 1 | 953154821356 | 2021-06-01 | 851.83 | 23130 | `=round(D31*E31,0)` |  |  |
| 32 |  | Tổng cộng |  | `=sum(D31)` |  | `=sum(F31)` |  |  |
| 33 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D32*0.1` |  | `=F32*0.1` |  |  |
| 34 |  | Tổng số tiền phải thanh toán |  | `=D32+D33` | 23130 | `=F32+F33` |  |  |
| 39 | TỔNG HỢP CHI PHÍ MY HEALTH |  |  |  |  |  |  | `=F34+F46` |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 42 | 1 | 953154821356 | 2021-07-01 | 429.03 | 23050 | `=round(D42*E42,0)` |  | `=D42*23050*108%` |
| 43 | 2 | 953154821356 | 01/08/2021 - 09/08/2021 | 2.5 | 23050 | `=round(D43*E43,0)` |  |  |
| 44 |  | Tổng cộng |  | `=sum(D42:D43)` |  | `=sum(F42:F43)` |  |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D44*0.08` |  | `=F44*0.08` |  |  |
| 46 |  |  |  | `=D44+D45` | 23050 | `=F44+F45` |  |  |
| 56 |  |  |  |  |  |  | 84262.68 |  |

> *Đã bỏ qua 24 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (38 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 5 | `D7` |
| D | `=sum(D{r})` | 4 | `D5` |
| D | `=D{r}*0.1` | 4 | `D6` |
| D | `=sum(D{r}:D{r})` | 1 | `D44` |
| D | `=D{r}*0.08` | 1 | `D45` |
| F | `=F{r}+F{r}` | 5 | `F7` |
| F | `=sum(F{r})` | 4 | `F5` |
| F | `=F{r}*0.1` | 4 | `F6` |
| F | `=round(D{r}*E{r},0)` | 4 | `F22` |
| F | `=D{r}*E{r}` | 2 | `F4` |
| F | `=sum(F{r}:F{r})` | 1 | `F44` |
| F | `=F{r}*0.08` | 1 | `F45` |
| H | `=F{r}+F{r}` | 1 | `H39` |
| H | `=D{r}*23050*108%` | 1 | `H42` |
