# VIECCO(VIỆC CÓ)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VIECCO(VIỆC CÓ)`  
> **Vùng dữ liệu:** 200 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ VIỆC CÓ |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 4 | 1 | 324719396532 | 2021-05-01 | 26.98 | 23145 | `=D4*E4` |  |
| 5 | 2 | 376732578899 | 2021-05-01 | 0 | 23145 | `=D5*E5` |  |
| 6 | 3 | 786504493571 | 2021-05-01 | 7.57 | 23145 | `=D6*E6` |  |
| 7 |  | Tổng cộng |  | `=sum(D4:D6)` |  | `=sum(F4:F6)` |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.1` |  | `=F7*0.1` |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 23145 | `=F7+F8` |  |
| 13 | TỔNG HỢP CHI PHÍ VIỆC CÓ (Credit của khách) |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 16 | 1 | 324719396532 | 2021-09-01 |  | 22840 | `=D16*E16` |  |
| 17 | 2 | 376732578899 | 2021-09-01 |  | 22840 | `=D17*E17` |  |
| 18 | 3 | 786504493571 | 2021-09-01 |  | 22840 | `=D18*E18` |  |
| 19 |  | Tổng cộng |  | `=sum(D16:D18)` |  | `=sum(F16:F18)` |  |
| 20 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D19*0.1` |  | `=F19*0.1` |  |
| 21 |  | Tổng số tiền phải thanh toán |  | `=D19+D20` | 22840 | `=F19+F20` |  |
| 25 | TỔNG HỢP CHI PHÍ VIỆC CÓ |  |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 28 | 1 | 324719396532 | 2022-02-01 | 198.12 | 22950 | `=D28*E28` |  |
| 29 | 2 | 376732578899 | 2022-02-01 | 0 | 22950 | `=D29*E29` |  |
| 30 | 3 | 786504493571 | 2022-02-01 | 0 | 22950 | `=D30*E30` |  |
| 31 |  | Tổng cộng |  | `=sum(D28:D30)` |  | `=sum(F28:F30)` |  |
| 32 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D31*0.1` |  | `=F31*0.1` |  |
| 33 |  | Tổng số tiền phải thanh toán |  | `=D31+D32` | 22950 | `=F31+F32` | 5001539.4000000004 |
| 36 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 3.2022 |  |  |  |  |  |  |
| 38 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 39 | 1 | 324719396532 | 2022-03-01 | 222.65 |  |  |  |
| 40 | 2 | 376732578899 | 2022-03-01 | 0 |  |  |  |
| 41 | 3 | 786504493571 | 2022-03-01 | 0 |  |  |  |
| 42 |  | Tổng cộng |  | `=sum(D39:D41)` |  |  |  |
| 43 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D42*0.1` |  |  |  |
| 44 |  | Tổng số tiền phải thanh toán |  | `=D42+D43` | 22980 | `=D44*E44` | 5628146.7000000002 |
| 45 |  |  |  | . |  |  |  |
| 47 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 4.2022 |  |  |  |  |  |  |
| 49 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 50 | 1 | 324719396532 | 2022-04-01 | `=1655.39+107.25` |  |  |  |
| 51 | 2 | 376732578899 | 2022-04-01 | `=3.37+0.47` |  |  |  |
| 52 | 3 | 786504493571 | 2022-04-01 | `=789.73+59.45` |  |  |  |
| 53 |  | Tổng cộng |  | `=D50+D51+D52` |  |  |  |
| 54 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D53*0.1` |  |  |  |
| 55 |  | Tổng số tiền phải thanh toán |  | `=round(D53+D54,2)` | 23095 | `=D55*E55` | 66449626.8500000015 |
| 59 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 5.2022 |  |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 62 | 1 | 324719396532 | 2022-05-01 | `=2492.33+169.89` |  |  |  |
| 63 | 2 | 376732578899 | 2022-05-01 | `=3.38+0.46` |  |  |  |
| 64 | 3 | 786504493571 | 2022-05-01 | `=749.56+56.43` |  |  |  |
| 65 |  | Tổng cộng |  | `=D62+D63+D64` |  |  |  |
| 66 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D65*0.1` |  |  |  |
| 67 |  | Tổng số tiền phải thanh toán |  | `=round(D65+D66,2)` | 23330 | `=D67*E67` |  |
| 71 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 6.2022 |  |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 74 | 1 | 766335821253 | 2022-06-01 | `=3262.87+245.83` |  |  |  |
| 75 |  | Tổng cộng |  | `=D74` |  |  |  |
| 76 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D75*0.1` |  |  |  |
| 77 |  | Tổng số tiền phải thanh toán |  | `=round(D75+D76,2)` | 23415 | `=D77*E77` |  |
| 80 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 9.2022 |  |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 83 | 1 | 766335821253 | 2022-09-01 | 9.34 |  |  |  |
| 84 |  | Tổng cộng |  | `=D83` |  |  |  |
| 85 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D84*0.1` |  |  |  |
| 86 |  | Tổng số tiền phải thanh toán |  | `=round(D84+D85,2)` | 24010 | `=D86*E86` |  |
| 89 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 10.2022 |  |  |  |  |  |  |
| 91 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 92 | 1 | 766335821253 | 2022-10-01 | 262.03 |  |  |  |
| 93 |  | Tổng cộng |  | `=D92` |  |  |  |
| 94 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D93*0.1` |  |  |  |
| 95 |  | Tổng số tiền phải thanh toán |  | `=round(D93+D94,2)` | 24877 | `=D95*E95` |  |
| 98 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 11.2022 |  |  |  |  |  |  |
| 100 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 101 | 1 | 766335821253 | 2022-11-01 | 122.65 |  |  |  |
| 102 |  | Tổng cộng |  | `=D101` |  |  |  |
| 103 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D102*0.1` |  |  |  |
| 104 |  | Tổng số tiền phải thanh toán |  | `=round(D102+D103,2)` | 24795 | `=D104*E104` |  |
| 107 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 08.2023 |  |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 110 | 1 | 766335821253 | 2023-08-01 | 3261.58 |  |  |  |
| 111 |  | Tổng cộng |  | `=D110` |  |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D111*0.1` |  |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=round(D111+D112,2)` | 24315 | `=D113*E113` |  |
| 116 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 09.2023 |  |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 119 | 1 | 766335821253 | 2023-09-01 | 2582.93 |  |  |  |
| 120 |  | Tổng cộng |  | `=D119` |  |  |  |
| 121 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D120*0.1` |  |  |  |
| 122 |  | Tổng số tiền phải thanh toán |  | `=round(D120+D121,2)` | 24574 | `=D122*E122` |  |
| 125 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 10.2023 |  |  |  |  |  |  |
| 127 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 128 | 1 | 766335821253 | 2023-10-01 | 2399.81 |  |  |  |
| 129 |  | Tổng cộng |  | `=D128` |  |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D129*0.1` |  |  |  |
| 131 |  | Tổng số tiền phải thanh toán |  | `=round(D129+D130,2)` | 24519 | `=D131*E131` |  |
| 134 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 11.2023 |  |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 137 | 1 | 766335821253 | 2023-11-01 | 2328.68 |  |  |  |
| 138 |  | Tổng cộng |  | `=D137` |  |  |  |
| 139 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D138*0.1` |  |  |  |
| 140 |  | Tổng số tiền phải thanh toán |  | `=round(D138+D139,2)` | 24399 | `=D140*E140` |  |
| 144 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 12.2023 |  |  |  |  |  |  |
| 146 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 147 | 1 | 766335821253 | 2023-12-01 | 2371.77 |  |  |  |
| 148 |  | Tổng cộng |  | `=D147` |  |  |  |
| 149 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D148*0.1` |  |  |  |
| 150 |  | Tổng số tiền phải thanh toán |  | `=round(D148+D149,2)` | 24634 | `=D150*E150` |  |
| 154 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 01.2024 |  |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 157 | 1 | 766335821253 | 2024-01-01 | 2349.49 |  |  |  |
| 158 |  | Tổng cộng |  | `=D157` |  |  |  |
| 159 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D158*0.1` |  |  |  |
| 160 |  | Tổng số tiền phải thanh toán |  | `=round(D158+D159,2)` | 24681 | `=D160*E160` |  |
| 164 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 02.2024 |  |  |  |  |  |  |
| 166 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 167 | 1 | 766335821253 | 2024-02-01 | 2215.64 |  |  |  |
| 168 |  | Tổng cộng |  | `=D167` |  |  |  |
| 169 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D168*0.1` |  |  |  |
| 170 |  | Tổng số tiền phải thanh toán |  | `=round(D168+D169,2)` | 24799 | `=D170*E170` |  |
| 174 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 03.2024 |  |  |  |  |  |  |
| 176 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 177 | 1 | 766335821253 | 2024-03-01 | 2145.02 |  |  |  |
| 178 |  | Tổng cộng |  | `=D177` |  |  |  |
| 179 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D178*0.1` |  |  |  |
| 180 |  | Tổng số tiền phải thanh toán |  | `=round(D178+D179,2)` | 25146 | `=D180*E180` |  |
| 184 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 04.2024 |  |  |  |  |  |  |
| 186 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 187 | 1 | 766335821253 | 2024-04-01 | 6.13 |  |  |  |
| 188 |  | Tổng cộng |  | `=D187` |  |  |  |
| 189 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D188*0.1` |  |  |  |
| 190 |  | Tổng số tiền phải thanh toán |  | `=round(D188+D189,2)` | 25458 | `=D190*E190` |  |
| 194 | TỔNG HỢP CHI PHÍ VIỆC CÓ THÁNG 05.2024 |  |  |  |  |  |  |
| 196 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 197 | 1 | 766335821253 | 2024-05-01 | 6.24 |  |  |  |
| 198 |  | Tổng cộng |  | `=D197` |  |  |  |
| 199 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D198*0.1` |  |  |  |
| 200 |  |  |  | `=round(D198+D199,2)` | 25454 | `=D200*E200` |  |

> *Đã bỏ qua 67 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (102 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.1` | 20 | `D8` |
| D | `=round(D{r}+D{r},2)` | 16 | `D55` |
| D | `=D{r}` | 14 | `D75` |
| D | `=sum(D{r}:D{r})` | 4 | `D7` |
| D | `=D{r}+D{r}` | 4 | `D9` |
| D | `=D{r}+D{r}+D{r}` | 2 | `D53` |
| D | `=1655.39+107.25` | 1 | `D50` |
| D | `=3.37+0.47` | 1 | `D51` |
| D | `=789.73+59.45` | 1 | `D52` |
| D | `=2492.33+169.89` | 1 | `D62` |
| D | `=3.38+0.46` | 1 | `D63` |
| D | `=749.56+56.43` | 1 | `D64` |
| D | `=3262.87+245.83` | 1 | `D74` |
| F | `=D{r}*E{r}` | 26 | `F4` |
| F | `=sum(F{r}:F{r})` | 3 | `F7` |
| F | `=F{r}*0.1` | 3 | `F8` |
| F | `=F{r}+F{r}` | 3 | `F9` |
