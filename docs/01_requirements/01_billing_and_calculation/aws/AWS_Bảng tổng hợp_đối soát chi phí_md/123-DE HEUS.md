# DE HEUS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `DE HEUS`  
> **Vùng dữ liệu:** 90 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (194271255889) | 2023-01-01 | 537.26 |  |  |
| 5 | Discount |  |  | `=D4*2%` |  |  |
| 6 | Tổng cộng |  |  | `=D4-D5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*5.26%` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 23622 | `=D8*E8` |
| 11 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | AWS (194271255889) | 2023-02-01 | 692.73 |  |  |
| 15 | Discount |  |  | `=D14*2%` |  |  |
| 16 | Tổng cộng |  |  | `=D14-D15` |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*5.26%` |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=round(D16+D17,2)` | 23955 | `=D18*E18` |
| 21 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 24 | 1 | AWS (194271255889) | 2023-03-01 | 757.99 |  |  |
| 25 | Discount |  |  | `=D24*2%` |  |  |
| 26 | Tổng cộng |  |  | `=D24-D25` |  |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D26*5.26%` |  |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=round(D26+D27,2)` | 23632 | `=D28*E28` |
| 31 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 34 | 1 | AWS (194271255889) | 2023-04-01 | 737.09 |  |  |
| 35 | Discount |  |  | `=D34*2%` |  |  |
| 36 | Tổng cộng |  |  | `=D34-D35` |  |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D36*5.26%` |  |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=round(D36+D37,2)` | 23645 | `=D38*E38` |
| 41 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 43 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 44 | 1 | AWS (194271255889) | 2023-05-01 | 725.23 |  |  |
| 45 | Discount |  |  | `=D44*2%` |  |  |
| 46 | Tổng cộng |  |  | `=D44-D45` |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D46*5.26%` |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=round(D46+D47,2)` | 23762 | `=D48*E48` |
| 52 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | AWS (194271255889) | 2023-07-01 | 747.54 |  |  |
| 56 | Discount |  |  | `=D55*2%` |  |  |
| 57 | Tổng cộng |  |  | `=D55-D56` |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D57*5.26%` |  |  |
| 59 |  | Tổng số tiền phải thanh toán |  | `=round(D57+D58,2)` | 23860 | `=D59*E59` |
| 62 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 65 | 1 | AWS (194271255889) | 2023-08-01 | 747.2 |  |  |
| 66 | Discount |  |  | `=D65*2%` |  |  |
| 67 | Tổng cộng |  |  | `=D65-D66` |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D67*5.26%` |  |  |
| 69 |  | Tổng số tiền phải thanh toán |  | `=round(D67+D68,2)` | 24260 | `=D69*E69` |
| 73 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 75 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 76 | 1 | AWS (194271255889) | 2023-09-01 | 725.88 |  |  |
| 77 | Discount |  |  | `=D76*2%` |  |  |
| 78 | Tổng cộng |  |  | `=D76-D77` |  |  |
| 79 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D78*5.26%` |  |  |
| 80 |  | Tổng số tiền phải thanh toán |  | `=round(D78+D79,2)` | 24470 | `=D80*E80` |
| 83 | TỔNG HỢP CHI PHÍ DE HEUS |  |  |  |  |  |
| 85 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 86 | 1 | AWS (194271255889) | 2023-10-01 | 747.29 |  |  |
| 87 | Discount |  |  | `=D86*2%` |  |  |
| 88 | Tổng cộng |  |  | `=D86-D87` |  |  |
| 89 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D88*5.26%` |  |  |
| 90 |  |  |  | `=round(D88+D89,2)` | 24729 | `=D90*E90` |

> *Đã bỏ qua 27 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (45 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*2%` | 9 | `D5` |
| D | `=D{r}-D{r}` | 9 | `D6` |
| D | `=D{r}*5.26%` | 9 | `D7` |
| D | `=round(D{r}+D{r},2)` | 9 | `D8` |
| F | `=D{r}*E{r}` | 9 | `F8` |
