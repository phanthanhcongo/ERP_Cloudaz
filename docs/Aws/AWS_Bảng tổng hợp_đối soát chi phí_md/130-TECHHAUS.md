# TECHHAUS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TECHHAUS`  
> **Vùng dữ liệu:** 163 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 3 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 5 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 6 | 1 | 086625524429 | 2022-01-01 | 363.97 | 22780 | `=round(D6*E6,0)` |  |
| 7 |  | Discount (2%) |  | `=sum(D6)*2%` |  |  |  |
| 8 |  | Tổng cộng |  | `=sum(D6)-D7` | 22780 | `=round(D8*E8,0)` |  |
| 9 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D8*0.08` |  | `=F8*0.08` |  |
| 10 |  | Tổng số tiền phải thanh toán |  | `=D8+D9` | 22780 | `=F8+F9` | 8775444.9600000009 |
| 14 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 16 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 17 | 1 | 086625524429 | 2022-02-01 | 444.99 | 22950 | `=round(D17*E17,0)` |  |
| 18 |  | Discount (2%) |  | `=sum(D17)*2%` |  |  |  |
| 19 |  | Tổng cộng |  | `=sum(D17)-D18` | 22950 | `=round(D19*E19,0)` |  |
| 20 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D19*0.08` |  | `=F19*0.08` |  |
| 21 |  | Tổng số tiền phải thanh toán |  | `=D19+D20` | 22950 | `=F19+F20` | 10808931.5999999996 |
| 24 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 27 | 1 | 086625524429 | 2022-03-01 | 514.02 | 22980 | `=round(D27*E27,0)` |  |
| 28 |  | Discount (2%) |  | `=sum(D27)*2%` |  |  |  |
| 29 |  | Tổng cộng |  | `=sum(D27)-D28` | 22980 | `=round(D29*E29,0)` |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D29*0.08` |  | `=F29*0.08` |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=D29+D30` | 22980 | `=F29+F30` | 12502010.8800000008 |
| 35 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 38 | 1 | 086625524429 | 2022-04-01 | 497.84 | 23095 | `=round(D38*E38,0)` |  |
| 39 |  | Discount (2%) |  | `=sum(D38)*2%` |  |  |  |
| 40 |  | Tổng cộng |  | `=sum(D38)-D39` | 23095 | `=round(D40*E40,0)` |  |
| 41 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D40*0.08` |  | `=F40*0.08` |  |
| 42 |  | Tổng số tiền phải thanh toán |  | `=D40+D41` | 23095 | `=F40+F41` | 12169076.0399999991 |
| 45 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 47 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 48 | 1 | 086625524429 | 2022-05-01 | 522.83 |  |  |  |
| 49 |  | Discount (2%) |  | `=sum(D48)*2%` |  |  |  |
| 50 |  | Tổng cộng |  | `=sum(D48)-D49` |  |  |  |
| 51 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D50*0.08` |  |  |  |
| 52 |  | Tổng số tiền phải thanh toán |  | `=round(D50+D51,2)` | 23330 | `=D52*E52` | 12909888.8000000007 |
| 55 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 57 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 58 | 1 | 086625524429 | 2022-06-01 | 532.71 |  |  |  |
| 59 |  | Discount (2%) |  | `=sum(D58)*2%` |  |  |  |
| 60 |  | Tổng cộng |  | `=sum(D58)-D59` |  |  |  |
| 61 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D60*0.08` |  |  |  |
| 62 |  | Tổng số tiền phải thanh toán |  | `=round(D60+D61,2)` | 23415 | `=D62*E62` | 13201845.3000000007 |
| 65 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 68 | 1 | 086625524429 | 2022-07-01 | 529.34 |  |  |  |
| 69 |  | Discount (2%) |  | `=sum(D68)*2%` |  |  |  |
| 70 |  | Tổng cộng |  | `=sum(D68)-D69` |  |  |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D70*0.08` |  |  |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=round(D70+D71,2)` | 23480 | `=D72*E72` |  |
| 76 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 78 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 79 | 1 | 086625524429 | 2022-08-01 | 715.95 |  |  |  |
| 80 |  | Discount (2%) |  | `=sum(D79)*2%` |  |  |  |
| 81 |  | Tổng cộng |  | `=sum(D79)-D80` |  |  |  |
| 82 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D81*0.08` |  |  |  |
| 83 |  | Tổng số tiền phải thanh toán |  | `=round(D81+D82,2)` | 23600 | `=D83*E83` |  |
| 86 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 88 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 89 | 1 | 086625524429 | 2022-09-01 | 1072.01 |  |  |  |
| 90 |  | Discount (2%) |  | `=sum(D89)*2%` |  |  |  |
| 91 |  | Tổng cộng |  | `=sum(D89)-D90` |  |  |  |
| 92 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D91*0.08` |  |  |  |
| 93 |  | Tổng số tiền phải thanh toán |  | `=round(D91+D92,2)` | 24010 | `=D93*E93` |  |
| 96 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 99 | 1 | 086625524429 | 2022-10-01 | 728.39 |  |  |  |
| 100 |  | Discount (2%) |  | `=sum(D99)*2%` |  |  |  |
| 101 |  | Tổng cộng |  | `=sum(D99)-D100` |  |  |  |
| 102 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D101*0.08` |  |  |  |
| 103 |  | Tổng số tiền phải thanh toán |  | `=round(D101+D102,2)` | 24877 | `=D103*E103` |  |
| 106 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 109 | 1 | 086625524429 | 2022-11-01 | 480.99 |  |  |  |
| 110 |  | Discount (2%) |  | `=sum(D109)*2%` |  |  |  |
| 111 |  | Tổng cộng |  | `=sum(D109)-D110` |  |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D111*0.08` |  |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=round(D111+D112,2)` | 24795 | `=D113*E113` |  |
| 116 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 119 | 1 | 086625524429 | 2022-12-01 | 382.195813729 |  |  |  |
| 120 |  | Discount (2%) |  | `=sum(D119)*2%` |  |  |  |
| 121 |  | Tổng cộng |  | `=sum(D119)-D120` |  |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D121*0.08` |  |  |  |
| 123 |  | Tổng số tiền phải thanh toán |  | `=round(D121+D122,2)` | 23760 | `=D123*E123` |  |
| 126 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 128 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 129 | 1 | 086625524429 | 2023-01-01 | 309.07 |  |  |  |
| 130 |  | Discount (2%) |  | `=sum(D129)*2%` |  |  |  |
| 131 |  | Tổng cộng |  | `=sum(D129)-D130` |  |  |  |
| 132 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D131*0.08` |  |  |  |
| 133 |  | Tổng số tiền phải thanh toán |  | `=round(D131+D132,2)` | 23622 | `=D133*E133` |  |
| 136 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 138 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 139 | 1 | 086625524429 | 2023-02-01 | 236.45 |  |  |  |
| 140 |  | Discount (2%) |  | `=sum(D139)*2%` |  |  |  |
| 141 |  | Tổng cộng |  | `=sum(D139)-D140` |  |  |  |
| 142 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D141*0.08` |  |  |  |
| 143 |  | Tổng số tiền phải thanh toán |  | `=round(D141+D142,2)` | 23955 | `=D143*E143` |  |
| 146 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 148 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 149 | 1 | 086625524429 | 2023-03-01 | 255.28 |  |  |  |
| 150 |  | Discount (2%) |  | `=sum(D149)*2%` |  |  |  |
| 151 |  | Tổng cộng |  | `=sum(D149)-D150` |  |  |  |
| 152 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D151*0.08` |  |  |  |
| 153 |  | Tổng số tiền phải thanh toán |  | `=round(D151+D152,2)` | 23632 | `=D153*E153` |  |
| 156 | TỔNG HỢP CHI PHÍ TECHHAUS |  |  |  |  |  |  |
| 158 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 159 | 1 | 086625524429 | 2023-04-01 | 246.67 |  |  |  |
| 160 |  | Discount (2%) |  | `=sum(D159)*2%` |  |  |  |
| 161 |  | Tổng cộng |  | `=sum(D159)-D160` |  |  |  |
| 162 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D161*0.08` |  |  |  |
| 163 |  |  |  | `=round(D161+D162,2)` | 23645 | `=D163*E163` |  |

> *Đã bỏ qua 51 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (92 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})*2%` | 16 | `D7` |
| D | `=sum(D{r})-D{r}` | 16 | `D8` |
| D | `=D{r}*0.08` | 16 | `D9` |
| D | `=round(D{r}+D{r},2)` | 12 | `D52` |
| D | `=D{r}+D{r}` | 4 | `D10` |
| F | `=D{r}*E{r}` | 12 | `F52` |
| F | `=round(D{r}*E{r},0)` | 8 | `F6` |
| F | `=F{r}*0.08` | 4 | `F9` |
| F | `=F{r}+F{r}` | 4 | `F10` |
