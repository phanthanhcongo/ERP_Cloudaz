# YOPAZ

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `YOPAZ`  
> **Vùng dữ liệu:** 77 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - YOPAZ |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 050752640707 | 2025-02-01 | 1.49 |  |  |
| 5 | Phí dịch vụ 5.26%  |  |  | `=round(D4*5.26%,2)` |  |  |
| 6 | Tổng cộng tháng này |  |  | `=D4+D5` |  |  |
| 7 | Số tiền hỗ trợ tháng này |  |  | 1.57 |  |  |
| 8 | Số tiền hỗ trợ chuyển tháng sau |  |  | `=1000-1.57` |  |  |
| 9 | Thành tiền |  |  | `=D6-D7` | 25735 | `=round(D9*E9,0)` |
| 10 | Thuế GTGT (10%) |  |  |  |  | `=round(F9*10%,0)` |
| 11 | Tổng số tiền phải thanh toán |  |  |  |  | `=F9+F10` |
| 15 | ĐỐI SOÁT CHI PHÍ AWS - YOPAZ |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 18 | 1 | 050752640707 | 2025-03-01 | 137.71 |  |  |
| 19 | Phí dịch vụ 5.26%  |  |  | `=round(D18*5.26%,2)` |  |  |
| 20 | Tổng cộng tháng này |  |  | `=D18+D19` |  |  |
| 21 | Số tiền hỗ trợ tháng này |  |  | `=D8` |  |  |
| 22 | Số tiền hỗ trợ chuyển tháng sau |  |  | `=D21-D20` |  |  |
| 23 | Thành tiền |  |  | `=if(D21-D20>0,0,D21-D20)` | 25775 | `=round(D23*E23,0)` |
| 24 | Thuế GTGT (10%) |  |  |  |  | `=round(F23*10%,0)` |
| 25 | Tổng số tiền phải thanh toán |  |  |  |  | `=F23+F24` |
| 29 | ĐỐI SOÁT CHI PHÍ AWS - YOPAZ |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 32 | 1 | 050752640707 | 2025-04-01 | 323.75 |  |  |
| 33 | Phí dịch vụ 5.26%  |  |  | `=round(D32*5.26%,2)` |  |  |
| 34 | Tổng cộng tháng này |  |  | `=D32+D33` |  |  |
| 35 | Số tiền hỗ trợ tháng này |  |  | `=D22` |  |  |
| 36 | Số tiền hỗ trợ chuyển tháng sau |  |  | `=D35-D34` |  |  |
| 37 | Thành tiền |  |  | `=if(D35-D34>0,0,D35-D34)` | 26190 | `=round(D37*E37,0)` |
| 38 | Thuế GTGT (10%) |  |  |  |  | `=round(F37*10%,0)` |
| 39 | Tổng số tiền phải thanh toán |  |  |  |  | `=F37+F38` |
| 43 | ĐỐI SOÁT CHI PHÍ AWS - YOPAZ |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 46 | 1 | 050752640707 | 2025-05-01 | 435.07 |  |  |
| 47 | Phí dịch vụ 5.26%  |  |  | `=round(D46*5.26%,2)` |  |  |
| 48 | Tổng cộng tháng này |  |  | `=D46+D47` |  |  |
| 49 | Số tiền hỗ trợ tháng này |  |  | `=D36` |  |  |
| 50 | Số tiền hỗ trợ chuyển tháng sau |  |  | `=D49-D48` |  |  |
| 51 | Thành tiền |  |  | `=if(D49-D48>0,0,D49-D48)` | 26225 | `=round(D51*E51,0)` |
| 52 | Thuế GTGT (10%) |  |  |  |  | `=round(F51*10%,0)` |
| 53 | Tổng số tiền phải thanh toán |  |  |  |  | `=F51+F52` |
| 57 | ĐỐI SOÁT CHI PHÍ AWS - YOPAZ |  |  |  |  |  |
| 59 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 60 | 1 | 050752640707 | 2025-06-01 | 609.18 |  |  |
| 61 | Phí dịch vụ 5.26%  |  |  | `=round(D60*5.26%,2)` |  |  |
| 62 | Tổng cộng tháng này |  |  | `=D60+D61` |  |  |
| 63 | Số tiền hỗ trợ tháng này |  |  | `=D50` |  |  |
| 64 | Thành tiền |  |  | `=D62-D63` | 26300 | `=round(D64*E64,0)` |
| 65 | Thuế GTGT (10%) |  |  |  |  | `=round(F64*10%,0)` |
| 66 | Tổng số tiền phải thanh toán |  |  |  |  | `=F64+F65` |
| 70 | ĐỐI SOÁT CHI PHÍ AWS - YOPAZ |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 73 | 1 | 050752640707 | 2025-07-01 | 138.7 |  |  |
| 74 | Phí dịch vụ 10%  |  |  | `=round(D73*10%,2)` |  |  |
| 75 | Thành tiền |  |  | `=D73+D74` | 26382 | `=round(D75*E75,0)` |
| 76 | Thuế GTGT (10%) |  |  |  |  | `=round(F75*10%,0)` |
| 77 | Tổng số tiền phải thanh toán |  |  |  |  | `=F75+F76` |

> *Đã bỏ qua 21 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (43 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 6 | `D6` |
| D | `=round(D{r}*5.26%,2)` | 5 | `D5` |
| D | `=D{r}-D{r}` | 5 | `D9` |
| D | `=D{r}` | 4 | `D21` |
| D | `=if(D{r}-D{r}>0,0,D{r}-D{r})` | 3 | `D23` |
| D | `=1000-1.57` | 1 | `D8` |
| D | `=round(D{r}*10%,2)` | 1 | `D74` |
| F | `=round(D{r}*E{r},0)` | 6 | `F9` |
| F | `=round(F{r}*10%,0)` | 6 | `F10` |
| F | `=F{r}+F{r}` | 6 | `F11` |
