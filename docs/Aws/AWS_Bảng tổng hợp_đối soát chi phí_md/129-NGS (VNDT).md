# NGS (VNDT)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `NGS (VNDT)`  
> **Vùng dữ liệu:** 196 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ VNDT |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 136048564258 | 2021-10-01 | 103.31 | 22850 | `=round(D5*E5,0)` |  |
| 6 |  | Discount 3% |  | `=D5*3%` |  |  |  |
| 7 |  | Tổng cộng |  | `=D5-D6` | 22850 | `=round(D7*E7,0)` |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.1` |  | `=F7*0.1` |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 22850 | `=F7+F8` | 2518795.3999999999 |
| 13 | TỔNG HỢP CHI PHÍ VNDT |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 16 | 1 | 136048564258 | 2021-11-01 | 967.94 | 22800 | `=round(D16*E16,0)` |  |
| 17 |  | Discount 3% |  | `=D16*3%` |  |  |  |
| 18 |  | Tổng cộng |  | `=D16-D17` | 22800 | `=round(D18*E18,0)` |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D18*0.1` |  | `=F18*0.1` |  |
| 20 |  | Tổng số tiền phải thanh toán |  | `=D18+D19` | 22800 | `=F18+F19` | 23548143.3000000007 |
| 24 | TỔNG HỢP CHI PHÍ VNDT |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 27 | 1 | 136048564258 | 2021-12-01 | 3492.28 | 22920 | `=round(D27*E27,0)` |  |
| 28 |  | Discount 3% |  | `=D27*3%` |  |  |  |
| 29 |  | Tổng cộng |  | `=D27-D28` | 22920 | `=round(D29*E29,0)` |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D29*0.1` |  | `=F29*0.1` |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=D29+D30` | 22920 | `=F29+F30` | 85405942.599999994 |
| 35 | TỔNG HỢP CHI PHÍ VNDT |  |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 38 | 1 | 136048564258 | 2022-01-01 | 1781.81 | 22780 | `=round(D38*E38,0)` |  |
| 39 |  | Discount 3% |  | `=D38*3%` |  |  |  |
| 40 |  | Tổng cộng |  | `=D38-D39` | 22780 | `=round(D40*E40,0)` |  |
| 41 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D40*0.1` |  | `=F40*0.1` |  |
| 42 |  | Tổng số tiền phải thanh toán |  | `=D40+D41` | 22780 | `=F40+F41` | 43309137.299999997 |
| 45 | TỔNG HỢP CHI PHÍ VNDT |  |  |  |  |  |  |
| 47 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 48 | 1 | 136048564258 | 2022-02-01 | 1273.48 | 22950 | `=round(D48*E48,0)` |  |
| 49 |  | Discount 3% |  | `=D48*3%` |  |  |  |
| 50 |  | Tổng cộng |  | `=D48-D49` | 22950 | `=round(D50*E50,0)` |  |
| 51 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D50*0.1` |  | `=F50*0.1` |  |
| 52 |  | Tổng số tiền phải thanh toán |  | `=D50+D51` | 22950 | `=F50+F51` | 31184532.5 |
| 55 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 57 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 58 | 1 | 136048564258 | 2022-03-01 | 1518.7 | 22980 | `=round(D58*E58,0)` |  |
| 59 |  | Discount 3% |  | `=D58*3%` |  |  |  |
| 60 |  | Tổng cộng |  | `=D58-D59` | 22980 | `=round(D60*E60,0)` |  |
| 61 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D60*0.1` |  | `=F60*0.1` |  |
| 62 |  | Tổng số tiền phải thanh toán |  | `=D60+D61` | 22980 | `=F60+F61` | 37238007.3999999985 |
| 65 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 68 | 1 | 136048564258 | 2022-04-01 | 1553.42 |  |  |  |
| 69 |  | Discount 3% |  | `=D68*3%` |  |  |  |
| 70 |  | Tổng cộng |  | `=D68-D69` |  |  |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D70*0.05` |  |  |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=round(D70+D71,2)` | 23095 | `=D72*E72` | 36539985 |
| 75 | TỔNG HỢP CHI PHÍ VND NGS |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 78 | 1 | 136048564258 | 2022-05-01 | 1643.09 |  |  |  |
| 79 |  | Discount 3% |  | `=D78*3%` |  |  |  |
| 80 |  | Tổng cộng |  | `=D78-D79` |  |  |  |
| 81 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D80*0.05` |  |  |  |
| 82 |  | Tổng số tiền phải thanh toán |  | `=round(D80+D81,2)` | 23330 | `=D82*E82` | 39042521.700000003 |
| 85 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 88 | 1 | 136048564258 | 2022-06-01 | 2719.5 |  |  |  |
| 89 |  | Discount 3% |  | `=D88*3%` |  |  |  |
| 90 |  | Tổng cộng |  | `=D88-D89` |  |  |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D90*0.05` |  |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=round(D90+D91,2)` | 23415 | `=D92*E92` |  |
| 95 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 98 | 1 | 136048564258 | 2022-07-01 | 2667.05 |  |  |  |
| 99 |  | Discount 3% |  | `=D98*3%` |  |  |  |
| 100 |  | Tổng cộng |  | `=D98-D99` |  |  |  |
| 101 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D100*0.05` |  |  |  |
| 102 |  | Tổng số tiền phải thanh toán |  | `=round(D100+D101,2)` | 23480 | `=D102*E102` |  |
| 106 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 109 | 1 | 136048564258 | 2022-08-01 | 2726.88 |  |  |  |
| 110 |  | Discount 3% |  | `=D109*3%` |  |  |  |
| 111 |  | Tổng cộng |  | `=D109-D110` |  |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D111*0.05` |  |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=round(D111+D112,2)` | 23600 | `=D113*E113` |  |
| 116 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 119 | 1 | 136048564258 | 2022-09-01 | 3083.28 |  |  |  |
| 120 |  | Discount 3% |  | `=D119*3%` |  |  |  |
| 121 |  | Tổng cộng |  | `=D119-D120` |  |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D121*0.05` |  |  |  |
| 123 |  | Tổng số tiền phải thanh toán |  | `=round(D121+D122,2)` | 24010 | `=D123*E123` |  |
| 126 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 128 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 129 | 1 | 136048564258 | 2022-10-01 | 3447.39 |  |  |  |
| 130 |  | Discount 3% |  | `=D129*3%` |  |  |  |
| 131 |  | Tổng cộng |  | `=D129-D130` |  |  |  |
| 132 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D131*0.05` |  |  |  |
| 133 |  | Tổng số tiền phải thanh toán |  | `=round(D131+D132,2)` | 24877 | `=D133*E133` |  |
| 136 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 138 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 139 | 1 | 136048564258 | 2022-11-01 | 3244.13 |  |  |  |
| 140 |  | Discount 3% |  | `=D139*3%` |  |  |  |
| 141 |  | Tổng cộng |  | `=D139-D140` |  |  |  |
| 142 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D141*0.05` |  |  |  |
| 143 |  | Tổng số tiền phải thanh toán |  | `=round(D141+D142,2)` | 24795 | `=D143*E143` |  |
| 146 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 148 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 149 | 1 | 136048564258 | 2022-12-01 | 3499.1 |  |  |  |
| 150 |  | Discount 3% |  | `=D149*3%` |  |  |  |
| 151 |  | Tổng cộng |  | `=D149-D150` |  |  |  |
| 152 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D151*0.05` |  |  |  |
| 153 |  | Tổng số tiền phải thanh toán |  | 3563.84 | 23760 | `=D153*E153` |  |
| 156 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 158 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 159 | 1 | 136048564258 | 2023-01-01 | 3309.46 |  |  |  |
| 160 |  | Discount 3% |  | `=D159*3%` |  |  |  |
| 161 |  | Tổng cộng |  | `=D159-D160` |  |  |  |
| 162 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D161*0.05` |  |  |  |
| 163 |  | Tổng số tiền phải thanh toán |  | `=round(D161+D162,2)` | 23622 | `=D163*E163` |  |
| 166 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 168 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 169 | 1 | 136048564258 | 2023-02-01 | 2118.22 |  |  |  |
| 170 |  | Discount 3% |  | `=D169*3%` |  |  |  |
| 171 |  | Tổng cộng |  | `=D169-D170` |  |  |  |
| 172 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D171*0.05` |  |  |  |
| 173 |  | Tổng số tiền phải thanh toán |  | `=round(D171+D172,2)` | 23955 | `=D173*E173` |  |
| 176 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 178 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 179 | 1 | 136048564258 | 2023-03-01 | 995 |  |  |  |
| 180 |  | Discount 3% |  | `=D179*3%` |  |  |  |
| 181 |  | Tổng cộng |  | `=D179-D180` |  |  |  |
| 182 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D181*0.05` |  |  |  |
| 183 |  | Tổng số tiền phải thanh toán |  | `=round(D181+D182,2)` | 23632 | `=D183*E183` |  |
| 186 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |
| 188 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 189 | 1 | 136048564258 | 2023-04-01 | 699.07 |  |  |  |
| 190 |  | Discount 3% |  | `=D189*3%` |  |  |  |
| 191 |  | Tổng cộng |  | `=D189-D190` |  |  |  |
| 192 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D191*0.05` |  |  |  |
| 193 |  | Tổng số tiền phải thanh toán |  | `=round(D191+D192,2)` | 23645 | `=D193*E193` |  |
| 196 | TỔNG HỢP CHI PHÍ NGS |  |  |  |  |  |  |

> *Đã bỏ qua 62 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (112 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*3%` | 19 | `D6` |
| D | `=D{r}-D{r}` | 19 | `D7` |
| D | `=D{r}*0.05` | 13 | `D71` |
| D | `=round(D{r}+D{r},2)` | 12 | `D72` |
| D | `=D{r}*0.1` | 6 | `D8` |
| D | `=D{r}+D{r}` | 6 | `D9` |
| F | `=D{r}*E{r}` | 13 | `F72` |
| F | `=round(D{r}*E{r},0)` | 12 | `F5` |
| F | `=F{r}*0.1` | 6 | `F8` |
| F | `=F{r}+F{r}` | 6 | `F9` |
