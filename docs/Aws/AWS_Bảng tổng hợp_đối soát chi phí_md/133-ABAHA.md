# ABAHA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ABAHA`  
> **Vùng dữ liệu:** 99 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 5 | 1 | 345908113281 | 2022-05-01 | 425.8 |  |  |
| 6 |  | Discount (2%) |  | `=D5*0.02` |  |  |
| 7 |  | Tổng cộng |  | `=D5-D6` |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D7*0.05` |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=round(D7+D8,2)` | 23330 | `=D9*E9` |
| 12 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | 345908113281 | 2022-06-01 | 430.67 |  |  |
| 16 |  | Discount (2%) |  | `=D15*0.02` |  |  |
| 17 |  | Tổng cộng |  | `=D15-D16` |  |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D17*0.05` |  |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=round(D17+D18,2)` | 23415 | `=D19*E19` |
| 22 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 25 | 1 | 345908113281 | 2022-07-01 | 458.51 |  |  |
| 26 |  | Discount (2%) |  | `=D25*0.02` |  |  |
| 27 |  | Tổng cộng |  | `=D25-D26` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D27*0.05` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=round(D27+D28,2)` | 23480 | `=D29*E29` |
| 32 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | 345908113281 | 2022-08-01 | 450.9 |  |  |
| 36 |  | Discount (2%) |  | `=D35*0.02` |  |  |
| 37 |  | Tổng cộng |  | `=D35-D36` |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D37*0.05` |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=round(D37+D38,2)` | 23600 | `=D39*E39` |
| 42 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 345908113281 | 2022-09-01 | 475.7167612129 |  |  |
| 46 |  | Discount (2%) |  | `=D45*0.02` |  |  |
| 47 |  | Tổng cộng |  | `=D45-D46` |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D47*0.05` |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(D47+D48,2)` | 24010 | `=D49*E49` |
| 52 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | 345908113281 | 2022-10-01 | 539.57 |  |  |
| 56 |  | Discount (2%) |  | `=D55*0.02` |  |  |
| 57 |  | Tổng cộng |  | `=D55-D56` |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D57*0.05` |  |  |
| 59 |  | Tổng số tiền phải thanh toán |  | `=round(D57+D58,2)` | 24877 | `=D59*E59` |
| 62 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 65 | 1 | 345908113281 | 2022-11-01 | 843.9128623246 |  |  |
| 66 |  | Discount (2%) |  | `=D65*0.02` |  |  |
| 67 |  | Tổng cộng |  | `=D65-D66` |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | 41.36 |  |  |
| 69 |  | Tổng số tiền phải thanh toán |  | `=round(D67+D68,2)` | 24795 | `=D69*E69` |
| 72 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 74 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 75 | 1 | 345908113281 | 2022-12-01 | 1302.3361220441 |  |  |
| 76 |  | Discount (2%) |  | `=D75*0.02` |  |  |
| 77 |  | Tổng cộng |  | `=D75-D76` |  |  |
| 78 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D77*0.05` |  |  |
| 79 |  | Tổng số tiền phải thanh toán |  | `=round(D77+D78,2)` | 23760 | `=D79*E79` |
| 82 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 85 | 1 | 345908113281 | 2023-01-01 | 1228.66 |  |  |
| 86 |  | Discount (2%) |  | `=D85*0.02` |  |  |
| 87 |  | Tổng cộng |  | `=D85-D86` |  |  |
| 88 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D87*0.05` |  |  |
| 89 |  | Tổng số tiền phải thanh toán |  | `=round(D87+D88,2)` | 23622 | `=D89*E89` |
| 92 | TỔNG HỢP CHI PHÍ ABAHA |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 95 | 1 | 345908113281 | 2023-02-01 | 1106.27 |  |  |
| 96 |  | Discount (2%) |  | `=D95*0.02` |  |  |
| 97 |  | Tổng cộng |  | `=D95-D96` |  |  |
| 98 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D97*0.05` |  |  |
| 99 |  |  |  | `=round(D97+D98,2)` | 23955 | `=D99*E99` |

> *Đã bỏ qua 29 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (49 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.02` | 10 | `D6` |
| D | `=D{r}-D{r}` | 10 | `D7` |
| D | `=round(D{r}+D{r},2)` | 10 | `D9` |
| D | `=D{r}*0.05` | 9 | `D8` |
| F | `=D{r}*E{r}` | 10 | `F9` |
