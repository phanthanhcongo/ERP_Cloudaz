# AMELA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `AMELA`  
> **Vùng dữ liệu:** 109 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 3 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 5 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 6 | 1 | 512587009617 | 2021-11-01 | 2169.32 | 22800 | `=round(D6*E6,0)` |  |  |
| 7 |  | Tổng cộng |  | `=D6` | 22800 | `=F6` |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.05` |  | `=F7*0.05` |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 22800 | `=F7+F8` | 51933520.799999997 |  |
| 12 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 15 | 1 | 512587009617 | 2021-12-01 | `=2987.74+110.69` | 22920 | `=round(D15*E15,0)` |  |  |
| 16 |  | Tổng cộng |  | `=D15` | 22920 | `=F15` |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D16*0.05` |  | `=F16*0.05` |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=D16+D17` | 22920 | `=F16+F17` | 71902951.049999997 |  |
| 21 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 24 | 1 | 512587009617 | 2022-01-01 | `=2285.26+104.19+6.48` | 22780 | `=round(D24*E24,0)` |  |  |
| 25 |  | Tổng cộng |  | `=D24` | 22780 | `=F24` |  |  |
| 26 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D25*0.05` |  | `=F25*0.05` |  |  |
| 27 |  | Tổng số tiền phải thanh toán |  | `=D25+D26` | 22780 | `=F25+F26` | 57308249.25 |  |
| 30 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 33 | 1 | 512587009617 | 2022-02-01 | `=2349.69+95.63+5.93` | 22950 | `=round(D33*E33,0)` |  |  |
| 34 |  | Tổng cộng |  | `=D33` | 22950 | `=F33` |  |  |
| 35 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D34*0.05` |  | `=F34*0.05` |  |  |
| 36 |  | Tổng số tiền phải thanh toán |  | `=D34+D35` | 22950 | `=F34+F35` | 59068997.3999999985 |  |
| 39 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 42 | 1 | 512587009617 | 2022-03-01 | 2965.8 | 22980 | `=round(D42*E42,0)` |  |  |
| 43 |  | Tổng cộng |  | `=D42` | 22980 | `=F42` |  |  |
| 44 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D43*0.05` |  | `=F43*0.05` |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  | `=D43+D44` | 22980 | `=F43+F44` | 71561788.200000003 |  |
| 48 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 51 | 1 | 512587009617 | 2022-04-01 | 3073.21 | 23095 | `=round(D51*E51,0)` |  |  |
| 52 |  | Tổng cộng |  | `=D51` | 23095 | `=F51` |  |  |
| 53 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D52*0.05` |  | `=F52*0.05` |  |  |
| 54 |  | Tổng số tiền phải thanh toán |  | `=D52+D53` | 23095 | `=F52+F53` | 74524574.25 |  |
| 58 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 61 | 1 | 512587009617 | 2022-05-01 | 4023.88 |  |  |  |  |
| 62 |  | Tổng cộng |  | `=D61` |  |  |  |  |
| 63 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D62*0.05` |  |  |  |  |
| 64 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D62+D63,2)` | 23330 | `=D64*E64` |  | 98570883 |
| 67 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 70 | 1 | 512587009617 | 2022-06-01 | `=3589.87+101.39` |  |  |  |  |
| 71 |  | Tổng cộng |  | `=D70` |  |  |  |  |
| 72 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D71*0.05` |  |  |  |  |
| 73 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D71+D72,2)` | 23415 | `=D73*E73` |  | 90752325.299999997 |
| 75 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 78 | 1 | 512587009617 | 2022-07-01 | 3589.53 |  |  |  |  |
| 79 |  | Tổng cộng |  | `=D78` |  |  |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D79*0.05` |  |  |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D79+D80,2)` | 23480 | `=D81*E81` |  | 88496355 |
| 85 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 88 | 1 | 512587009617 | 2022-08-01 | 3620.73 |  |  |  |  |
| 89 |  | Tổng cộng |  | `=D88` |  |  |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D89*0.05` |  |  |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D89+D90,2)` | 23600 | `=D91*E91` |  |  |
| 94 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 97 | 1 | 512587009617 | 2022-09-01 | 3922.7 |  |  |  |  |
| 98 |  | Tổng cộng |  | `=D97` |  |  |  |  |
| 99 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D98*0.05` |  |  |  |  |
| 100 |  | Tổng số tiền phải thanh toán |  | `=ROUND(D98+D99,2)` | 24010 | `=D100*E100` |  |  |
| 103 | TỔNG HỢP CHI PHÍ AMELA |  |  |  |  |  |  |  |
| 105 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 106 | 1 | 512587009617 | 2022-10-01 | 3536.28 |  |  |  |  |
| 107 |  | Tổng cộng |  | `=D106` |  |  |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D107*0.05` |  |  |  |  |
| 109 |  |  |  | `=ROUND(D107+D108,2)` | 24877 | `=D109*E109` |  |  |

> *Đã bỏ qua 37 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (70 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 12 | `D7` |
| D | `=D{r}*0.05` | 12 | `D8` |
| D | `=D{r}+D{r}` | 6 | `D9` |
| D | `=ROUND(D{r}+D{r},2)` | 6 | `D64` |
| D | `=2987.74+110.69` | 1 | `D15` |
| D | `=2285.26+104.19+6.48` | 1 | `D24` |
| D | `=2349.69+95.63+5.93` | 1 | `D33` |
| D | `=3589.87+101.39` | 1 | `D70` |
| F | `=round(D{r}*E{r},0)` | 6 | `F6` |
| F | `=F{r}` | 6 | `F7` |
| F | `=F{r}*0.05` | 6 | `F8` |
| F | `=F{r}+F{r}` | 6 | `F9` |
| F | `=D{r}*E{r}` | 6 | `F64` |
