# OSAM (tổng hợp)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `OSAM (tổng hợp)`  
> **Vùng dữ liệu:** 125 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ OSAM |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 241660615801 | 2020-01-01 | 255.11 | 23320 | `=D5*E5` |  |
| 6 | 2 |  | 2020-02-01 | `=540.04+0.1` | 23320 | `=D6*E6` |  |
| 7 | 3 |  | 2020-03-01 | `=424.22+0.02` | 23700 | `=D7*E7` |  |
| 8 | 4 |  | 2020-04-01 | 456.21 | 23600 | `=D8*E8` |  |
| 9 | 5 |  | 2020-05-01 | 573.23 | 23350 | `=D9*E9` |  |
| 10 |  | Tổng cộng |  | `=sum(D5:D9)` |  | `=sum(F5:F9)` |  |
| 11 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D10*0.1` |  | `=F10*0.1` |  |
| 12 |  | Tổng số tiền phải thanh toán cho CloudAZ |  | `=D10+D11` |  | `=F10+F11` |  |
| 17 |  |  |  | Hà Nội, ngày 10 tháng 06 năm 2020 |  |  |  |
| 18 |  |  |  | Người lập  |  |  |  |
| 22 |  |  |  | Phạm Cẩm Nhung |  |  |  |
| 26 | TỔNG HỢP CHI PHÍ OSAM_VINFAST |  |  |  |  |  |  |
| 28 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 29 | 1 | 726886460554 | 2022-01-01 | 2308.5 | 22780 | `=round(D29*E29,0)` |  |
| 30 |  | Discount (2%) |  | `=D29*2%` |  |  |  |
| 31 |  | Tổng cộng |  | `=D29-D30` | 22780 | `=round(D31*E31,0)` |  |
| 32 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D31*0.08` |  | `=F31*0.08` |  |
| 33 |  | Tổng số tiền phải thanh toán |  | `=D31+D32` | 22780 | `=F31+F32` | 55658747.1599999964 |
| 39 | TỔNG HỢP CHI PHÍ OSAM_PHARMACITY  |  |  |  |  |  |  |
| 42 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 43 | 1 | 920817877953 | 2022-01-01 | 1389.69 | 22780 | `=round(D43*E43,0)` |  |
| 44 |  | Tổng |  | `=D43` | 22780 | `=round(D44*E44,0)` |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D44*0.07` | 22780 | `=F44*0.07` |  |
| 46 | Tổng số tiền phải thanh toán |  |  | `=D44+D45` | 22780 | `=sum(F44:F45)` | 33873137.6599999964 |
| 53 | TỔNG HỢP CHI PHÍ OSAM_MCREDIT |  |  |  |  |  |  |
| 56 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 57 | 1 | 769776124207 | 2022-01-01 | `=44493.43+8812.92+2440.02` | 22780 | `=round(D57*E57,0)` |  |
| 58 |  | Tổng |  | `=D57` | 22780 | `=round(D58*E58,0)` |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D58*0.07` | 22780 | `=F58*0.07` |  |
| 60 | Tổng số tiền phải thanh toán |  |  | `=D58+D59` | 22780 | `=sum(F58:F59)` | 1358795470.6300001144 |
| 63 | TỔNG HỢP CHI PHÍ OSAM_MASAN |  |  |  |  |  |  |
| 66 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 67 | 1 | 708238579351 | 2022-01-01 | `=32151.54+7.43` | 22780 | `=round(D67*E67,0)` |  |
| 68 |  | Tổng |  | `=D67` | 22780 | `=round(D68*E68,0)` |  |
| 69 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D68*0.01` | 22780 | `=F68*0.01` |  |
| 70 | Tổng số tiền phải thanh toán |  |  | `=D68+D69` | 22780 | `=sum(F68:F69)` | 739907150.3700000048 |
| 73 | TỔNG HỢP CHI PHÍ OSAM_MBAL |  |  |  |  |  |  |
| 76 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 77 | 1 | 571746298940 | 2022-01-01 | 4407.45 | 22780 | `=round(D77*E77,0)` |  |
| 78 |  | Tổng |  | `=D77` | 22780 | `=round(D78*E78,0)` |  |
| 79 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D78*0.07` | 22780 | `=F78*0.07` |  |
| 80 | Tổng số tiền phải thanh toán |  |  | `=D78+D79` | 22780 | `=sum(F78:F79)` | 107429830.7699999958 |
| 85 | TỔNG HỢP CHI PHÍ OSAM_MASAN |  |  |  |  |  |  |
| 88 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 89 | 1 | 708238579351 | 2022-02-01 | `=6.72+29310.25` | 22950 | `=round(D89*E89,0)` |  |
| 90 |  | Tổng |  | `=D89` | 22950 | `=round(D90*E90,0)` |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D90*0.01` | 22950 | `=F90*0.01` |  |
| 92 | Tổng số tiền phải thanh toán |  |  | `=D90+D91` | 22950 | `=sum(F90:F91)` |  |
| 96 | TỔNG HỢP CHI PHÍ OSAM_MCREDIT |  |  |  |  |  |  |
| 99 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 100 | 1 | 769776124207 | 2022-02-01 | `=2622.41+43696.02+8356.32` | 22950 | `=round(D100*E100,0)` |  |
| 101 |  | Tổng |  | `=D100` | 22950 | `=round(D101*E101,0)` |  |
| 102 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D101*0.07` | 22950 | `=F101*0.07` |  |
| 103 | Tổng số tiền phải thanh toán |  |  | `=D101+D102` | 22950 | `=sum(F101:F102)` |  |
| 107 | TỔNG HỢP CHI PHÍ OSAM_PHARMACITY  |  |  |  |  |  |  |
| 110 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |
| 111 | 1 | 920817877953 | 2022-02-01 | 1293.21 | 22950 | `=round(D111*E111,0)` |  |
| 112 |  | Tổng |  | `=D111` | 22950 | `=round(D112*E112,0)` |  |
| 113 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D112*0.07` | 22950 | `=F112*0.07` |  |
| 114 | Tổng số tiền phải thanh toán |  |  | `=D112+D113` | 22950 | `=sum(F112:F113)` |  |
| 118 | TỔNG HỢP CHI PHÍ OSAM_VINFAST |  |  |  |  |  |  |
| 120 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 121 | 1 | 726886460554 | 2022-02-01 | 2067.39 | 22950 | `=round(D121*E121,0)` |  |
| 122 |  | Discount (2%) |  | `=D121*2%` |  |  |  |
| 123 |  | Tổng cộng |  | `=D121-D122` | 22950 | `=round(D123*E123,0)` |  |
| 124 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D123*0.08` |  | `=F123*0.08` |  |
| 125 |  | Tổng số tiền phải thanh toán |  | `=D123+D124` | 22950 | `=F123+F124` |  |

> *Đã bỏ qua 56 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (82 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 10 | `D12` |
| D | `=D{r}` | 7 | `D44` |
| D | `=D{r}*0.07` | 5 | `D45` |
| D | `=D{r}*2%` | 2 | `D30` |
| D | `=D{r}-D{r}` | 2 | `D31` |
| D | `=D{r}*0.08` | 2 | `D32` |
| D | `=D{r}*0.01` | 2 | `D69` |
| D | `=540.04+0.1` | 1 | `D6` |
| D | `=424.22+0.02` | 1 | `D7` |
| D | `=sum(D{r}:D{r})` | 1 | `D10` |
| D | `=D{r}*0.1` | 1 | `D11` |
| D | `=44493.43+8812.92+2440.02` | 1 | `D57` |
| D | `=32151.54+7.43` | 1 | `D67` |
| D | `=6.72+29310.25` | 1 | `D89` |
| D | `=2622.41+43696.02+8356.32` | 1 | `D100` |
| F | `=round(D{r}*E{r},0)` | 18 | `F29` |
| F | `=sum(F{r}:F{r})` | 8 | `F10` |
| F | `=D{r}*E{r}` | 5 | `F5` |
| F | `=F{r}*0.07` | 5 | `F45` |
| F | `=F{r}+F{r}` | 3 | `F12` |
| F | `=F{r}*0.08` | 2 | `F32` |
| F | `=F{r}*0.01` | 2 | `F69` |
| F | `=F{r}*0.1` | 1 | `F11` |
