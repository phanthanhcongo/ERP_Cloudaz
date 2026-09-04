# TỨC THỜI

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TỨC THỜI`  
> **Vùng dữ liệu:** 104 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 967561843261 | 2021-06-01 | 5896.41 | 23130 | `=round(D5*E5,0)` |  |
| 6 |  | Tổng cộng |  | `=sum(D5)` |  | `=sum(F5)` |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.1` |  | `=round(F6*10%,0)` |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` | 23130 | `=F6+F7` |  |
| 12 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 15 | 1 | 967561843261 | 2021-07-01 | 12848.49 | 23050 | `=round(D15*E15,0)` |  |
| 16 |  | Discount (1.5%) |  | `=D15*1.5%` |  |  |  |
| 17 |  | Tổng cộng |  | `=D15-D16` | 23050 | `=round(D17*E17,0)` |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D17*0.08` |  | `=F17*0.08` |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=D17+D18` | 23050 | `=F17+F18` |  |
| 22 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 25 | 1 | 967561843261 | 2021-08-01 | 12174.77 | 22880 | `=round(D25*E25,0)` |  |
| 26 |  | Discount (1.5%) |  | `=D25*1.5%` |  |  |  |
| 27 |  | Tổng cộng |  | `=D25-D26` | 22880 | `=round(D27*E27,0)` |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D27*0.08` |  | `=F27*0.08` |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=D27+D28` | 22880 | `=F27+F28` | 296330785.5600000024 |
| 33 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 36 | 1 | 967561843261 | 2021-09-01 | 12911.55 | 22840 | `=round(D36*E36,0)` |  |
| 37 |  | Tổng cộng |  | `=D36` | 22840 | `=F36` |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D37*5.26%` |  | `=F37*5.26%` |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=D37+D38` | 22840 | `=F37+F38` |  |
| 42 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 45 | 1 | 967561843261 | 2021-10-01 | `=16402.52+7282` | 22850 | `=round(D45*E45,0)` |  |
| 46 |  | Tổng cộng |  | `=D45` | 22850 | `=F45` |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D46*5.26%` |  | `=F46*5.26%` |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=D46+D47` | 22850 | `=F46+F47` |  |
| 51 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 54 | 1 | 967561843261 | 2021-11-01 | `=15941.1+7185` | 22800 | `=round(D54*E54,0)` |  |
| 55 |  | Tổng cộng |  | `=D54` | 22800 | `=F54` |  |
| 56 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D55*5.26%` |  | `=F55*5.26%` |  |
| 57 |  | Tổng số tiền phải thanh toán |  | `=D55+D56` | 22800 | `=F55+F56` | 555009749.2079999447 |
| 60 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 62 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 63 | 1 | 967561843261 | 2021-12-01 | `=16611.01+7441` | 22920 | `=round(D63*E63,0)` |  |
| 64 |  | Tổng cộng |  | `=D63` | 22920 | `=F63` |  |
| 65 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D64*5.26%` |  | `=F64*5.26%` |  |
| 66 |  | Tổng số tiền phải thanh toán |  | `=D64+D65` | 22920 | `=F64+F65` |  |
| 70 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 73 | 1 | 967561843261 | 2022-01-01 | 24162.23 | 22780 | `=round(D73*E73,0)` |  |
| 74 |  | Tổng cộng |  | `=D73` | 22780 | `=F73` |  |
| 75 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D74*5.26%` |  | `=F74*5.26%` |  |
| 76 |  | Tổng số tiền phải thanh toán |  | `=D74+D75` | 22780 | `=F74+F75` | 579367459.5074000359 |
| 80 | TỔNG HỢP CHI PHÍ TỨC THỜI |  |  |  |  |  |  |
| 86 |  |  |  |  |  |  | 475908810.728399992 |
| 95 |  |  |  |  |  |  | 557686340.4867999554 |
| 104 |  |  |  |  |  |  | 411208481.2702000141 |

> *Đã bỏ qua 50 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (61 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 8 | `D8` |
| D | `=D{r}` | 5 | `D37` |
| D | `=D{r}*5.26%` | 5 | `D38` |
| D | `=D{r}*1.5%` | 2 | `D16` |
| D | `=D{r}-D{r}` | 2 | `D17` |
| D | `=D{r}*0.08` | 2 | `D18` |
| D | `=sum(D{r})` | 1 | `D6` |
| D | `=D{r}*0.1` | 1 | `D7` |
| D | `=16402.52+7282` | 1 | `D45` |
| D | `=15941.1+7185` | 1 | `D54` |
| D | `=16611.01+7441` | 1 | `D63` |
| F | `=round(D{r}*E{r},0)` | 10 | `F5` |
| F | `=F{r}+F{r}` | 8 | `F8` |
| F | `=F{r}` | 5 | `F37` |
| F | `=F{r}*5.26%` | 5 | `F38` |
| F | `=F{r}*0.08` | 2 | `F18` |
| F | `=sum(F{r})` | 1 | `F6` |
| F | `=round(F{r}*10%,0)` | 1 | `F7` |
