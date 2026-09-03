# VIEPLAY.ONLINE

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VIEPLAY.ONLINE`  
> **Vùng dữ liệu:** 116 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 4 | 1 | 122187031089 | 2021-05-01 | 432.2 | 23145 | `=round(D4*E4,0)` |  |  |  |  |
| 5 |  | Tổng cộng |  | `=sum(D4)` |  | `=sum(F4)` |  |  |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D5*0.1` |  | `=F5*0.1` |  |  |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` | 23145 | `=F5+F6` |  |  |  |  |
| 10 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  | `=F7+F16+F28` |  | `=F7+F16+F28+F39+F48` |
| 12 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 13 | 1 | 122187031089 | 2021-06-01 | 301.99 | 23130 | `=round(D13*E13,0)` |  |  |  |  |
| 14 |  | Tổng cộng |  | `=sum(D13)` |  | `=sum(F13)` |  |  |  |  |
| 15 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D14*0.1` |  | `=F14*0.1` |  |  |  |  |
| 16 |  | Tổng số tiền phải thanh toán |  | `=D14+D15` | 23130 | `=F14+F15` |  |  |  |  |
| 22 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 25 | 1 | 122187031089 | 2021-07-01 | 237.45 | 23050 | `=round(D25*E25,0)` |  |  |  |  |
| 26 |  | Tổng cộng |  | `=sum(D25)` |  | `=sum(F25)` |  |  |  |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D26*0.1` |  | `=F26*0.1` |  |  |  |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=D26+D27` | 23050 | `=F26+F27` |  |  |  |  |
| 33 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 36 | 1 | 122187031089 | 2021-08-01 | 296.73 | 22880 | `=round(D36*E36,0)` |  |  |  |  |
| 37 |  | Tổng cộng |  | `=sum(D36)` |  | `=sum(F36)` |  |  |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D37*0.1` |  | `=F37*0.1` |  |  |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=D37+D38` | 22880 | `=F37+F38` | 7468100.2000000002 |  |  |  |
| 42 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 45 | 1 | 122187031089 | 2021-09-01 | 286.25 | 22840 | `=round(D45*E45,0)` |  |  |  |  |
| 46 |  | Tổng cộng |  | `=sum(D45)` |  | `=sum(F45)` |  |  |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D46*0.1` |  | `=F46*0.1` |  |  |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=D46+D47` | 22840 | `=F46+F47` |  |  |  |  |
| 52 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 55 | 1 | 122187031089 | 2021-10-01 | 296.27 | 22850 | `=round(D55*E55,0)` |  |  |  |  |
| 56 |  | Tổng cộng |  | `=sum(D55)` |  | `=sum(F55)` |  |  |  |  |
| 57 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D56*0.1` |  | `=F56*0.1` |  |  |  |  |
| 58 |  | Tổng số tiền phải thanh toán |  | `=D56+D57` | 22850 | `=F56+F57` |  | AWS | `=F58+F68+F77+F86` |  |
| 59 |  |  |  |  |  |  |  | Gsuite | 422037 |  |
| 60 |  |  |  |  |  |  |  |  | `=I58+I59` |  |
| 62 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 65 | 1 | 122187031089 | 2021-11-01 | 287.29 | 22800 | `=round(D65*E65,0)` |  |  |  |  |
| 66 |  | Tổng cộng |  | `=sum(D65)` |  | `=sum(F65)` |  |  |  |  |
| 67 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D66*0.1` |  | `=F66*0.1` |  |  |  |  |
| 68 |  | Tổng số tiền phải thanh toán |  | `=D66+D67` | 22800 | `=F66+F67` | 7205233.2000000002 |  |  |  |
| 71 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 74 | 1 | 122187031089 | 2021-12-01 | 295.66 | 22920 | `=round(D74*E74,0)` |  |  |  |  |
| 75 |  | Tổng cộng |  | `=sum(D74)` |  | `=sum(F74)` |  |  |  |  |
| 76 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D75*0.1` |  | `=F75*0.1` |  |  |  |  |
| 77 |  | Tổng số tiền phải thanh toán |  | `=D75+D76` | 22920 | `=F75+F76` |  |  |  |  |
| 80 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 83 | 1 | 122187031089 | 2022-01-01 | 295.46 | 22780 | `=round(D83*E83,0)` |  |  |  |  |
| 84 |  | Tổng cộng |  | `=sum(D83)` |  | `=sum(F83)` |  |  |  |  |
| 85 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D84*0.1` |  | `=F84*0.1` |  |  |  |  |
| 86 |  | Tổng số tiền phải thanh toán |  | `=D84+D85` | 22780 | `=F84+F85` | 7403636.9000000004 |  |  |  |
| 89 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 91 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 92 | 1 | 122187031089 | 2022-02-01 | 236.79 | 22950 | `=round(D92*E92,0)` |  |  |  |  |
| 93 |  | Tổng cộng |  | `=sum(D92)` |  | `=sum(F92)` |  |  |  |  |
| 94 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D93*0.1` |  | `=F93*0.1` |  |  |  |  |
| 95 |  | Tổng số tiền phải thanh toán |  | `=D93+D94` | 22950 | `=F93+F94` | 5977764.0999999996 |  |  |  |
| 98 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 100 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 101 | 1 | 122187031089 | 2022-03-01 | 169.43 | 22980 | `=round(D101*E101,0)` |  |  |  |  |
| 102 |  | Tổng cộng |  | `=sum(D101)` |  | `=sum(F101)` |  |  |  |  |
| 103 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D102*0.1` |  | `=F102*0.1` |  |  |  |  |
| 104 |  | Tổng số tiền phải thanh toán |  | `=D102+D103` | 22980 | `=F102+F103` | 4282851.0999999996 |  |  |  |
| 107 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 110 | 1 | 122187031089 | 2022-04-01 | 165.15 | 23095 | `=round(D110*E110,0)` |  |  |  |  |
| 111 |  | Tổng cộng |  | `=sum(D110)` |  | `=sum(F110)` |  |  |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D111*0.1` |  | `=F111*0.1` |  |  |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=D111+D112` | 23095 | `=F111+F112` | 4195552.9000000004 |  |  |  |
| 116 | TỔNG HỢP CHI PHÍ VIEPLAY.ONLINE |  |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 41 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (88 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})` | 12 | `D5` |
| D | `=D{r}*0.1` | 12 | `D6` |
| D | `=D{r}+D{r}` | 12 | `D7` |
| F | `=round(D{r}*E{r},0)` | 12 | `F4` |
| F | `=sum(F{r})` | 12 | `F5` |
| F | `=F{r}*0.1` | 12 | `F6` |
| F | `=F{r}+F{r}` | 12 | `F7` |
| H | `=F{r}+F{r}+F{r}` | 1 | `H10` |
| I | `=F{r}+F{r}+F{r}+F{r}` | 1 | `I58` |
| I | `=I{r}+I{r}` | 1 | `I60` |
| J | `=F{r}+F{r}+F{r}+F{r}+F{r}` | 1 | `J10` |
