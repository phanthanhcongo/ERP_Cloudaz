# NEXTA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `NEXTA`  
> **Vùng dữ liệu:** 120 dòng × 13 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |
| 4 | 1 |  |  |  |  |  | `=E4` | `=F5-E5` |  |  |  |  |  |
| 5 |  | Tổng |  |  | `=sum(E4)` | `=F4` | `=sum(G4)` | `=H4` |  |  |  |  |  |
| 6 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  |  |  | 0 |  |  |  |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | 0 |  |  |  |  |  |
| 12 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | `=D15-195.7` |  |  |  |  |  |
| 15 | 1 | 348583852978 | 2021-06-01 | 699.55 | 23130 | `=round(D15*E15,0)` |  | `=195.7*23130*110%` |  |  |  |  |  |
| 16 |  | Tổng cộng |  | `=D15` | 23130 | `=round(D16*E16,0)` |  |  |  |  |  |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D16*0.1` |  | `=F16*0.1` |  |  |  |  |  |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=D16+D17` | 23130 | `=F16+F17` |  |  |  |  |  |  |  |
| 23 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 26 | 1 | 348583852978 | 2021-07-01 | 1209.37 | 23050 | `=round(D26*E26,0)` |  |  |  |  |  |  |  |
| 27 |  | Discount (1,5%) |  | `=D26*1.5%` |  |  |  |  |  |  |  |  |  |
| 28 |  | Tổng cộng |  | `=D26-D27` | 23050 | `=round(D28*E28,0)` |  |  |  |  |  |  |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D28*0.1` |  | `=F28*0.1` |  |  |  |  |  |  |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` | 23050 | `=F28+F29` |  |  |  |  |  |  |  |
| 35 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 38 | 1 | 348583852978 | 2021-08-01 | 1060.31 | 22880 | `=round(D38*E38,0)` |  |  |  |  |  |  |  |
| 39 |  | Discount (1,5%) |  | `=D38*1.5%` |  |  |  |  |  |  |  |  |  |
| 40 |  | Tổng cộng |  | `=D38-D39` | 22880 | `=round(D40*E40,0)` |  |  |  |  |  |  |  |
| 41 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D40*0.1` |  | `=F40*0.1` |  |  |  |  |  |  |  |
| 42 |  | Tổng số tiền phải thanh toán |  | `=D40+D41` | 22880 | `=F40+F41` | 26285593.3999999985 |  |  |  |  |  |  |
| 46 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |
| 48 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 49 | 1 | 348583852978 | 2021-09-01 | 887.73 | 22840 | `=round(D49*E49,0)` |  | 1 | 348583852978 | 2021-09-01 | 887.73 | 22855 | `=round(K49*L49,0)` |
| 50 |  | Discount (1,5%) |  | `=D49*1.5%` |  |  |  |  | Discount (1,5%) |  | `=K49*1.5%` |  |  |
| 51 |  | Tổng cộng |  | `=D49-D50` | 22840 | `=round(D51*E51,0)` |  |  | Tổng cộng |  | `=K49-K50` | 22855 | `=round(K51*L51,0)` |
| 52 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D51*0.1` |  | `=F51*0.1` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K51*0.1` |  | `=M51*0.1` |
| 53 |  | Tổng số tiền phải thanh toán |  | `=D51+D52` | 22840 | `=F51+F52` |  |  | Tổng số tiền phải thanh toán |  | `=K51+K52` | 22855 | `=M51+M52` |
| 54 |  |  |  |  |  |  |  | Bù trừ do chênh lệch tỷ giá tháng trước |  |  |  |  | 331942 |
| 55 |  |  |  |  |  |  |  | Tổng số tiền còn lại phải thanh toán |  |  |  |  | `=M53-M54` |
| 58 |  |  |  |  |  |  |  |  |  |  | `=M55-1090870` |  |  |
| 59 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 62 | 1 | 348583852978 | 2021-10-01 | 918.77 | 22850 | `=round(D62*E62,0)` |  |  |  |  |  |  |  |
| 63 |  | Discount (1,5%) |  | `=D62*1.5%` |  |  |  |  |  |  |  |  |  |
| 64 |  | Tổng cộng |  | `=D62-D63` | 22850 | `=round(D64*E64,0)` |  |  |  |  |  |  |  |
| 65 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D64*0.1` |  | `=F64*0.1` |  |  |  |  |  |  |  |
| 66 |  | Tổng số tiền phải thanh toán |  | `=D64+D65` | 22850 | `=F64+F65` | 22746884.6000000015 |  |  |  |  |  |  |
| 70 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |
| 73 | 1 | 348583852978 | 2021-11-01 | 892.77 | 22800 | `=round(D73*E73,0)` |  |  |  |  |  |  |  |
| 74 |  | Discount (1,5%) |  | `=D73*1.5%` |  |  |  |  |  |  |  |  |  |
| 75 |  | Tổng cộng |  | `=D73-D74` | 22800 | `=round(D75*E75,0)` |  |  |  |  |  |  |  |
| 76 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D75*0.1` |  | `=F75*0.1` |  |  |  |  |  |  |  |
| 77 |  | Tổng số tiền phải thanh toán |  | `=D75+D76` | 22800 | `=F75+F76` | 22054811.8999999985 |  |  |  |  |  |  |
| 81 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá tại MSB ngày 10/01/2022 | Thành tiền |  |  |  |  |  |  |  |
| 84 | 1 | 348583852978 | 2021-12-01 | 940.59 | 22850 | `=round(D84*E84,0)` |  |  |  |  |  |  |  |
| 85 |  | Discount (1,5%) |  | `=D84*1.5%` |  |  |  |  |  |  |  |  |  |
| 86 |  | Tổng cộng |  | `=D84-D85` | 22850 | `=round(D86*E86,0)` |  |  |  |  |  |  |  |
| 87 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D86*0.1` |  | `=F86*0.1` |  |  |  |  |  |  |  |
| 88 |  | Tổng số tiền phải thanh toán |  | `=D86+D87` | 22850 | `=F86+F87` | 23287103.3999999985 |  |  |  |  |  |  |
| 92 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá tại MSB ngày 16/02/2022 | Thành tiền |  |  |  |  |  |  |  |
| 95 | 1 | 348583852978 | 2022-01-01 | 931.09 | 22880 | `=round(D95*E95,0)` |  |  |  |  |  |  |  |
| 96 |  | Discount (1,5%) |  | `=D95*1.5%` |  |  |  |  |  |  |  |  |  |
| 97 |  | Tổng cộng |  | `=D95-D96` | 22880 | `=round(D97*E97,0)` |  |  |  |  |  |  |  |
| 98 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D97*0.1` |  | `=F97*0.1` |  |  |  |  |  |  |  |
| 99 |  | Tổng số tiền phải thanh toán |  | `=D97+D98` | 22880 | `=F97+F98` | 23082167.8999999985 |  |  |  |  |  |  |
| 103 | TỔNG HỢP CHI PHÍ NEXTA |  |  |  |  |  |  |  |  |  |  |  |  |
| 110 |  |  |  |  |  |  | 12343503.6999999993 |  |  |  |  |  |  |
| 120 |  |  |  |  |  |  | 1806487.1000000001 |  |  |  |  |  |  |

> *Đã bỏ qua 53 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (81 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.1` | 8 | `D17` |
| D | `=D{r}+D{r}` | 8 | `D18` |
| D | `=D{r}*1.5%` | 7 | `D27` |
| D | `=D{r}-D{r}` | 7 | `D28` |
| D | `=D{r}` | 1 | `D16` |
| E | `=sum(E{r})` | 1 | `E5` |
| F | `=round(D{r}*E{r},0)` | 16 | `F15` |
| F | `=F{r}*0.1` | 8 | `F17` |
| F | `=F{r}+F{r}` | 8 | `F18` |
| F | `=F{r}` | 1 | `F5` |
| G | `=E{r}` | 1 | `G4` |
| G | `=sum(G{r})` | 1 | `G5` |
| H | `=F{r}-E{r}` | 1 | `H4` |
| H | `=H{r}` | 1 | `H5` |
| H | `=D{r}-195.7` | 1 | `H14` |
| H | `=195.7*23130*110%` | 1 | `H15` |
| K | `=K{r}*1.5%` | 1 | `K50` |
| K | `=K{r}-K{r}` | 1 | `K51` |
| K | `=K{r}*0.1` | 1 | `K52` |
| K | `=K{r}+K{r}` | 1 | `K53` |
| K | `=M{r}-1090870` | 1 | `K58` |
| M | `=round(K{r}*L{r},0)` | 2 | `M49` |
| M | `=M{r}*0.1` | 1 | `M52` |
| M | `=M{r}+M{r}` | 1 | `M53` |
| M | `=M{r}-M{r}` | 1 | `M55` |
