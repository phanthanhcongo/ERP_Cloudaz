# Kangaroo

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Kangaroo`  
> **Vùng dữ liệu:** 92 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 164686773532 | 2022-08-01 | 87.72 |  |  |
| 5 |  | Discount (2%) |  | `=D4*2%` |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.05` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 23600 | `=D8*E8` |
| 11 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 164686773532 | 2022-09-01 | 3522.2 |  |  |
| 15 |  | Discount (2%) |  | `=D14*2%` |  |  |
| 16 |  | Tổng cộng |  | `=D14-D15` |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*0.05` |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=round(D16+D17,2)` | 24010 | `=D18*E18` |
| 21 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 24 | 1 | 164686773532 | 2022-10-01 | 3676.52 |  |  |
| 25 |  | Discount (2%) |  | `=D24*2%` |  |  |
| 26 |  | Tổng cộng |  | `=D24-D25` |  |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D26*0.05` |  |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=round(D26+D27,2)` | 24877 | `=D28*E28` |
| 31 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 34 | 1 | 164686773532 | 2022-11-01 | 3704.04 |  |  |
| 35 |  | Discount (2%) |  | `=D34*2%` |  |  |
| 36 |  | Tổng cộng |  | `=D34-D35` |  |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D36*0.05` |  |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=round(D36+D37,2)` | 24795 | `=D38*E38` |
| 41 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 43 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 44 | 1 | 164686773532 | 2022-12-01 | 3829.4791840642 |  |  |
| 45 |  | Discount (2%) |  | `=D44*2%` |  |  |
| 46 |  | Tổng cộng |  | `=D44-D45` |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D46*0.05` |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=round(D46+D47,2)` | 23760 | `=D48*E48` |
| 51 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 54 | 1 | 164686773532 | 2023-01-01 | 3833.88 |  |  |
| 55 |  | Discount (2%) |  | `=D54*2%` |  |  |
| 56 |  | Tổng cộng |  | `=D54-D55` |  |  |
| 57 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D56*0.05` |  |  |
| 58 |  | Tổng số tiền phải thanh toán |  | `=round(D56+D57,2)` | 23622 | `=D58*E58` |
| 61 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 63 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 64 | 1 | 164686773532 | 2023-02-01 | 3562.77 |  |  |
| 65 |  | Discount (2%) |  | `=D64*2%` |  |  |
| 66 |  | Tổng cộng |  | `=D64-D65` |  |  |
| 67 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D66*0.05` |  |  |
| 68 |  | Tổng số tiền phải thanh toán |  | `=round(D66+D67,2)` | 23955 | `=D68*E68` |
| 71 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | 164686773532 | 2023-03-01 | 4029.71 |  |  |
| 75 |  | Discount (2%) |  | `=D74*2%` |  |  |
| 76 |  | Tổng cộng |  | `=D74-D75` |  |  |
| 77 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D76*0.05` |  |  |
| 78 |  | Tổng số tiền phải thanh toán |  | `=round(D76+D77,2)` | 23632 | `=D78*E78` |
| 81 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 84 | 1 | 164686773532 | 2023-04-01 | 4055.96 |  |  |
| 85 |  | Discount (2%) |  | `=D84*2%` |  |  |
| 86 |  | Tổng cộng |  | `=D84-D85` |  |  |
| 87 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D86*0.05` |  |  |
| 88 |  | Tổng số tiền phải thanh toán |  | `=round(D86+D87,2)` | 23645 | `=D88*E88` |
| 92 | TỔNG HỢP CHI PHÍ KANGAROO |  |  |  |  |  |

> *Đã bỏ qua 28 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (45 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*2%` | 9 | `D5` |
| D | `=D{r}-D{r}` | 9 | `D6` |
| D | `=D{r}*0.05` | 9 | `D7` |
| D | `=round(D{r}+D{r},2)` | 9 | `D8` |
| F | `=D{r}*E{r}` | 9 | `F8` |
