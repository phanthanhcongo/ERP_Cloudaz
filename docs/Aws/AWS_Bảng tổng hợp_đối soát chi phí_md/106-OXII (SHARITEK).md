# OXII (SHARITEK)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `OXII (SHARITEK)`  
> **Vùng dữ liệu:** 193 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (359181977812) | 2023-05-01 | 12.05 |  |  |
| 5 | 2 | AWS (723356865915) | 1970-01-01 07:00:00 | 0 |  |  |
| 6 |  | Tổng cộng |  | `=D4+D5` |  |  |
| 7 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D6*(1+5.26%),2)` |  |  |
| 8 | Chiết khấu (3%) |  |  | `=round(D7*3%,2)` |  |  |
| 9 | Tổng số tiền phải thanh toán |  |  | `=D7-D8` | 23662 | `=D9*E9` |
| 12 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | AWS (359181977812) | 2023-06-01 | 60.55 |  |  |
| 16 | 2 | AWS (723356865915) | 1970-01-01 07:00:00 | 11.42 |  |  |
| 17 |  | Tổng cộng |  | `=D15+D16` |  |  |
| 18 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D17*(1+5.26%),2)` |  |  |
| 19 | Chiết khấu (3%) |  |  | `=round(D18*3%,2)` |  |  |
| 20 | Tổng số tiền phải thanh toán |  |  | `=D18-D19` | 23762 | `=D20*E20` |
| 23 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 26 | 1 | AWS (359181977812) | 2023-07-01 | 94.92 |  |  |
| 27 | 2 | AWS (723356865915) | 1970-01-01 07:00:00 | 20.03 |  |  |
| 28 |  | Tổng cộng |  | `=D26+D27` |  |  |
| 29 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D28*(1+5.26%),2)` |  |  |
| 30 | Chiết khấu (3%) |  |  | `=round(D29*3%,2)` |  |  |
| 31 | Tổng số tiền phải thanh toán |  |  | `=D29-D30` | 23860 | `=D31*E31` |
| 35 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | AWS (359181977812) | 2023-08-01 | 183.41 |  |  |
| 39 | 2 | AWS (723356865915) | 1970-01-01 07:00:00 | 9.34 |  |  |
| 40 | 3 | AWS Credit  | 1970-01-01 07:00:00 | 192.75 |  |  |
| 41 |  | Tổng cộng |  | `=D38+D39-D40` |  |  |
| 42 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D41*(1+5.26%),2)` |  |  |
| 43 | Chiết khấu (3%) |  |  | `=round(D42*3%,2)` |  |  |
| 44 | Tổng số tiền phải thanh toán |  |  | `=D42-D43` | 24260 | `=D44*E44` |
| 47 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 49 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 50 | 1 | AWS (359181977812) | 2023-09-01 | 108.98 |  |  |
| 51 | 2 | AWS (723356865915) | 1970-01-01 07:00:00 | 0 |  |  |
| 52 | 3 | AWS Credit  | 1970-01-01 07:00:00 | 108.98 |  |  |
| 53 |  | Tổng cộng |  | `=D50+D51-D52` |  |  |
| 54 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D53*(1+5.26%),2)` |  |  |
| 55 | Chiết khấu (3%) |  |  | `=round(D54*3%,2)` |  |  |
| 56 | Tổng số tiền phải thanh toán |  |  | `=D54-D55` | 24470 | `=D56*E56` |
| 59 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 62 | 1 | AWS (359181977812) | 2023-10-01 | 68.5 |  |  |
| 63 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 1447.4 |  |  |
| 64 | 3 | AWS Credit  | 1970-01-01 07:00:00 | 448.27 |  |  |
| 65 |  | Tổng cộng |  | `=D62+D63-D64` |  |  |
| 66 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D65*(1+5.26%),2)` |  |  |
| 67 | Chiết khấu (3%) |  |  | `=round(D66*3%,2)` |  |  |
| 68 | Tổng số tiền phải thanh toán |  |  | `=D66-D67` | 24729 | `=D68*E68` |
| 71 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | AWS (723356865915) | 2023-10-01 | 1515.9 |  |  |
| 75 | 3 | AWS Credit  | 1970-01-01 07:00:00 | 448.27 |  |  |
| 76 |  | Tổng cộng |  | `=D74-D75` |  |  |
| 77 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D76*(1+5.26%),2)` |  |  |
| 78 | Chiết khấu (3%) |  |  | `=round(D77*3%,2)` |  |  |
| 79 | Tổng số tiền phải thanh toán |  |  | `=D77-D78` | 24729 | `=D79*E79` |
| 82 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 85 | 1 | AWS (359181977812) | 2023-11-01 | 70.56 |  |  |
| 86 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 1635.15 |  |  |
| 87 |  | Tổng cộng |  | `=D85+D86` |  |  |
| 88 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D87*(1+5.26%),2)` |  |  |
| 89 | Chiết khấu (3%) |  |  | `=round(D88*3%,2)` |  |  |
| 90 | Tổng số tiền phải thanh toán |  |  | `=D88-D89` | 24427 | `=D90*E90` |
| 93 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 95 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 96 | 1 | AWS (359181977812) | 2023-12-01 | 87.69 |  |  |
| 97 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 1649.24 |  |  |
| 98 |  | Tổng cộng |  | `=D96+D97` |  |  |
| 99 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D98*(1+5.26%),2)` |  |  |
| 100 | Chiết khấu (3%) |  |  | `=round(D99*3%,2)` |  |  |
| 101 | Tổng số tiền phải thanh toán |  |  | `=D99-D100` | 24450 | `=D101*E101` |
| 105 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 107 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 108 | 1 | AWS (359181977812) | 2024-01-01 | 80.31 |  |  |
| 109 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 664.77 |  |  |
| 110 |  | Tổng cộng |  | `=D108+D109` |  |  |
| 111 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D110*(1+5.26%),2)` |  |  |
| 112 | Chiết khấu (3%) |  |  | `=round(D111*3%,2)` |  |  |
| 113 | Tổng số tiền phải thanh toán |  |  | `=D111-D112` | 24578 | `=D113*E113` |
| 117 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 120 | 1 | AWS (359181977812) | 2024-02-01 | 245.51 |  |  |
| 121 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 1718.81 |  |  |
| 122 |  | Tổng cộng |  | `=D120+D121` |  |  |
| 123 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D122*(1+5.26%),2)` |  |  |
| 124 | Chiết khấu (3%) |  |  | `=round(D123*3%,2)` |  |  |
| 125 | Tổng số tiền phải thanh toán |  |  | `=D123-D124` | 24802 | `=D125*E125` |
| 129 | TỔNG HỢP CHI PHÍ SHARITEK |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 132 | 1 | AWS (359181977812) | 2024-03-01 | 443.53 |  |  |
| 133 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 1862.22 |  |  |
| 134 |  | Tổng cộng |  | `=D132+D133` |  |  |
| 135 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D134*(1+5.26%),2)` |  |  |
| 136 | Chiết khấu (3%) |  |  | `=round(D135*3%,2)` |  |  |
| 137 | Tổng số tiền phải thanh toán |  |  | `=D135-D136` | 24972 | `=D137*E137` |
| 141 | TỔNG HỢP CHI PHÍ OXII |  |  |  |  |  |
| 143 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 144 | 1 | AWS (359181977812) | 2024-04-01 | 226.41 |  |  |
| 145 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 1866.45 |  |  |
| 146 | 3 | AWS (101550867603) | 1970-01-01 07:00:00 | 7006.29 |  |  |
| 147 |  | Tổng cộng |  | `=D144+D145+D146` |  |  |
| 148 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D147*(1+5.26%),2)` |  |  |
| 149 | Chiết khấu (3%) |  |  | `=round(D148*3%,2)` |  |  |
| 150 | Tổng số tiền phải thanh toán |  |  | `=D148-D149` | 25458 | `=D150*E150` |
| 154 | TỔNG HỢP CHI PHÍ OXII |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 157 | 1 | AWS (359181977812) | 2024-05-01 | 105.56 |  |  |
| 158 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 2083.03 |  |  |
| 159 | 3 | AWS (101550867603) | 1970-01-01 07:00:00 | 10844.55 |  |  |
| 160 |  | Tổng cộng |  | `=D157+D158+D159` |  |  |
| 161 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D160*(1+5.26%),2)` |  |  |
| 162 | Chiết khấu (3%) |  |  | `=round(D161*3%,2)` |  |  |
| 163 | Tổng số tiền phải thanh toán |  |  | `=D161-D162` | 25474 | `=D163*E163` |
| 167 | TỔNG HỢP CHI PHÍ OXII |  |  |  |  |  |
| 169 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 170 | 1 | AWS (359181977812) | 2024-06-01 | 110.85 |  |  |
| 171 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 2211.27 |  |  |
| 172 | 3 | AWS (101550867603) | 1970-01-01 07:00:00 | 10505.63 |  |  |
| 173 | 4 | AWS (975050092632) | 1970-01-01 07:00:00 | 4.37 |  |  |
| 174 |  | Tổng cộng |  | `=D170+D171+D172+D173` |  |  |
| 175 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D174*(1+5.26%),2)` |  |  |
| 176 | Chiết khấu (3%) |  |  | `=round(D175*3%,2)` |  |  |
| 177 | Tổng số tiền thanh toán đã bao gồm 10% thuế GTGT |  |  | `=D175-D176` | 25473 | `=D177*E177` |
| 181 | TỔNG HỢP CHI PHÍ OXII |  |  |  |  |  |
| 183 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 184 | 1 | AWS (359181977812) | 2024-07-01 | 108.07 |  |  |
| 185 | 2 | AWS (093620664616) | 1970-01-01 07:00:00 | 2413.6 |  |  |
| 186 | 3 | AWS (101550867603) | 1970-01-01 07:00:00 | 11357.96 |  |  |
| 187 | 4 | AWS (975050092632) | 1970-01-01 07:00:00 | 1.01 |  |  |
| 188 |  | Tổng cộng |  | `=D184+D185+D186+D187` |  |  |
| 189 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D188*(1+5.26%),2)` |  |  |
| 190 |  |  |  | `=round(D189*3%,2)` |  |  |
| 191 |  |  |  | `=D189-D190` | 25405 | `=D191*E191` |
| 192 |  |  |  |  |  | `=round(F191*10%,0)` |
| 193 |  |  |  |  |  | `=F191+F192` |

> *Đã bỏ qua 54 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (107 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 25 | `C5` |
| D | `=D{r}-D{r}` | 17 | `D9` |
| D | `=round(D{r}*(1+5.26%),2)` | 16 | `D7` |
| D | `=round(D{r}*3%,2)` | 16 | `D8` |
| D | `=D{r}+D{r}` | 8 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 3 | `D41` |
| D | `=D{r}+D{r}+D{r}` | 2 | `D147` |
| D | `=D{r}+D{r}+D{r}+D{r}` | 2 | `D174` |
| F | `=D{r}*E{r}` | 16 | `F9` |
| F | `=round(F{r}*10%,0)` | 1 | `F192` |
| F | `=F{r}+F{r}` | 1 | `F193` |
