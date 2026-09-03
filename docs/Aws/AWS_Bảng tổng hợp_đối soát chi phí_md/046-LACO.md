# LACO

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `LACO`  
> **Vùng dữ liệu:** 136 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 500306808975 | 2025-09-01 | 225.71 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 7 | Tổng cộng |  |  | `=D4+D6-D5` |  |  |
| 8 | Số tiền hỗ trợ POC tháng này |  |  | 2500 |  |  |
| 9 | Số tiền hỗ trợ còn lại |  |  | `=D8-D7` |  |  |
| 10 | Thành tiền thanh toán |  |  | 0 | 26446 | `=round(D10*E10,0)` |
| 11 | Thuế GTGT (10%) |  |  |  |  | `=round(F10*10%,0)` |
| 12 | Tổng số tiền phải trả |  |  |  |  | `=F10+F11` |
| 18 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 20 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 21 | 1 | 500306808975 | 2025-10-01 | 174.13 |  |  |
| 22 | Chiết khấu (2%) |  |  | `=round(D21*2%,2)` |  |  |
| 23 | Phí dịch vụ (10%) |  |  | `=round(D21*10%,2)` |  |  |
| 24 | Tổng cộng |  |  | `=D21+D23-D22` |  |  |
| 25 | Số tiền hỗ trợ POC tháng này |  |  | 2256.23 |  |  |
| 26 | Số tiền hỗ trợ còn lại |  |  | `=D25-D24` |  |  |
| 27 | Thành tiền thanh toán |  |  | 0 | 26347 | `=round(D27*E27,0)` |
| 28 | Thuế GTGT (10%) |  |  |  |  | `=round(F27*10%,0)` |
| 29 | Tổng số tiền phải trả |  |  |  |  | `=F27+F28` |
| 34 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 36 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 37 | 1 | 500306808975 | 2025-11-01 | 67.67 |  |  |
| 38 | Chiết khấu (2%) |  |  | `=round(D37*2%,2)` |  |  |
| 39 | Phí dịch vụ (10%) |  |  | `=round(D37*10%,2)` |  |  |
| 40 | Tổng cộng |  |  | `=D37+D39-D38` |  |  |
| 41 | Số tiền hỗ trợ POC tháng này |  |  | 2068.17 |  |  |
| 42 | Số tiền hỗ trợ còn lại |  |  | `=D41-D40` |  |  |
| 43 | Thành tiền thanh toán |  |  | 0 | 26412 | `=round(D43*E43,0)` |
| 44 | Thuế GTGT (10%) |  |  |  |  | `=round(F43*10%,0)` |
| 45 | Tổng số tiền phải trả |  |  |  |  | `=F43+F44` |
| 51 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 54 | 1 | 500306808975 | 2025-12-01 | 80.15 |  |  |
| 55 | Chiết khấu (2%) |  |  | `=round(D54*2%,2)` |  |  |
| 56 | Phí dịch vụ (10%) |  |  | `=round(D54*10%,2)` |  |  |
| 57 | Tổng cộng |  |  | `=D54+D56-D55` |  |  |
| 58 | Số tiền hỗ trợ POC tháng này |  |  | 1995.08 |  |  |
| 59 | Số tiền hỗ trợ còn lại |  |  | `=D58-D57` |  |  |
| 60 | Thành tiền thanh toán |  |  | 0 | 26377 | `=round(D60*E60,0)` |
| 61 | Thuế GTGT (10%) |  |  |  |  | `=round(F60*10%,0)` |
| 62 | Tổng số tiền phải trả |  |  |  |  | `=F60+F61` |
| 68 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 70 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 71 | 1 | 500306808975 | 2026-01-01 | 80.14 |  |  |
| 72 | Chiết khấu (2%) |  |  | `=round(D71*2%,2)` |  |  |
| 73 | Phí dịch vụ (10%) |  |  | `=round(D71*10%,2)` |  |  |
| 74 | Tổng cộng |  |  | `=D71+D73-D72` |  |  |
| 75 | Số tiền hỗ trợ POC tháng này |  |  | 1908.51 |  |  |
| 76 | Số tiền hỗ trợ còn lại |  |  | `=D75-D74` |  |  |
| 77 | Thành tiền thanh toán |  |  | 0 | 26145 | `=round(D77*E77,0)` |
| 78 | Thuế GTGT (10%) |  |  |  |  | `=round(F77*10%,0)` |
| 79 | Tổng số tiền phải trả |  |  |  |  | `=F77+F78` |
| 85 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 88 | 1 | 500306808975 | 2026-02-01 | 77.17 |  |  |
| 89 | Chiết khấu (2%) |  |  | `=round(D88*2%,2)` |  |  |
| 90 | Phí dịch vụ (10%) |  |  | `=round(D88*10%,2)` |  |  |
| 91 | Tổng cộng |  |  | `=D88+D90-D89` |  |  |
| 92 | Số tiền hỗ trợ POC tháng này |  |  | 1821.96 |  |  |
| 93 | Số tiền hỗ trợ còn lại |  |  | `=D92-D91` |  |  |
| 94 | Thành tiền thanh toán |  |  | 0 | 26240 | `=round(D94*E94,0)` |
| 95 | Thuế GTGT (10%) |  |  |  |  | `=round(F94*10%,0)` |
| 96 | Tổng số tiền phải trả |  |  |  |  | `=F94+F95` |
| 102 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 105 | 1 | 500306808975 | 2026-03-01 | 113.29 |  |  |
| 106 | Chiết khấu (2%) |  |  | `=round(D105*2%,2)` |  |  |
| 107 | Phí dịch vụ (10%) |  |  | `=round(D105*10%,2)` |  |  |
| 108 | Tổng cộng |  |  | `=D105+D107-D106` |  |  |
| 109 | Số tiền hỗ trợ POC tháng này |  |  | 1738.61 |  |  |
| 110 | Số tiền hỗ trợ còn lại |  |  | `=D109-D108` |  |  |
| 111 | Thành tiền thanh toán |  |  | 0 | 26357 | `=round(D111*E111,0)` |
| 112 | Thuế GTGT (10%) |  |  |  |  | `=round(F111*10%,0)` |
| 113 | Tổng số tiền phải trả |  |  |  |  | `=F111+F112` |
| 119 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |
| 121 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 122 | 1 | 500306808975 | 2026-04-01 | 152.15 |  |  |
| 123 | Chiết khấu (2%) |  |  | `=round(D122*2%,2)` |  |  |
| 124 | Phí dịch vụ (10%) |  |  | `=round(D122*10%,2)` |  |  |
| 125 | Tổng cộng |  |  | `=D122+D124-D123` |  |  |
| 126 | Số tiền hỗ trợ POC tháng này |  |  | 1616.26 |  |  |
| 127 | Số tiền hỗ trợ còn lại |  |  | `=D126-D125` |  |  |
| 128 | Thành tiền thanh toán |  |  | 0 | 26368 | `=round(D128*E128,0)` |
| 129 | Thuế GTGT (10%) |  |  |  |  | `=round(F128*10%,0)` |
| 130 | Tổng số tiền phải trả |  |  |  |  | `=F128+F129` |
| 136 | ĐỐI SOÁT CHI PHÍ AWS - LACO |  |  |  |  |  |

> *Đã bỏ qua 47 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (56 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 8 | `D5` |
| D | `=round(D{r}*10%,2)` | 8 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 8 | `D7` |
| D | `=D{r}-D{r}` | 8 | `D9` |
| F | `=round(D{r}*E{r},0)` | 8 | `F10` |
| F | `=round(F{r}*10%,0)` | 8 | `F11` |
| F | `=F{r}+F{r}` | 8 | `F12` |
