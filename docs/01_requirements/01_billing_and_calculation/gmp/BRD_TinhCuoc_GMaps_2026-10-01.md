# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD)

> **Dự án**: ERP Cloudaz — Phân hệ tính cước và đối soát Google Maps Platform (GMaps)
> **Khách hàng / Bên yêu cầu**: Phòng Kế toán — Cloudaz
> **Ngày tạo**: 2026-10-01
> **Phiên bản**: 1.0
> **Phạm vi**: Google Maps Platform (GMaps)

---

## Lịch sử tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
|---|---|---|---|
| 1.0 | 2026-10-01 | BA Team | Tổng hợp yêu cầu tính cước GMaps |

## 1. Vấn đề hiện tại

Cloudaz là đại lý cấp 2, quản lý cước GMaps cho khoảng 40 khách hàng mỗi tháng. Dữ liệu phân tán theo Billing Account, subaccount, view link và project. Một view link có thể chứa project của nhiều khách hàng; một khách hàng có thể có nhiều view link hoặc project. Kế toán phải truy cập nhiều Google Cloud Console, tải/copy dữ liệu, cộng thủ công và lập file Excel.

Quyền hiện tại chủ yếu là `View`, chưa bao gồm quyền bật Billing Export hoặc quyền truy cập dữ liệu tổng hợp ở cấp trên.

- Chưa có báo cáo tổng hợp toàn bộ Billing Account, subaccount và khách hàng.
- Phải cộng thủ công khi khách hàng có nhiều Billing Account hoặc project.
- Có rủi ro ánh xạ sai project nếu dùng view link hoặc Billing Account làm khóa.
- Chưa có luồng thống nhất từ dữ liệu nguồn đến đối soát và lập hóa đơn.
- Khó phát hiện project mới, dữ liệu thiếu và chênh lệch giữa bảng Project và Billing ID.
- Invoice GMaps thường về ngày 05–08, có thể đến ngày 09, nên phải có lịch chốt riêng.

### 1.1. Thực trạng và khó khăn khi tự động hóa qua BigQuery

BigQuery chỉ giải quyết việc tập trung và truy vấn dữ liệu. Các khó khăn cần xử lý trước khi triển khai:

| Nhóm khó khăn | Thực trạng | Ảnh hưởng đến tự động hóa |
|---|---|---|
| Nhóm | Thực trạng | Tác động |
|---|---|---|
| Quyền | `View` không đủ để bật Cloud Billing Export. | Phải nhờ Billing Account Administrator hoặc reseller cấp trên cấu hình. |
| Phạm vi tài khoản | Dữ liệu nằm ở nhiều Billing Account/subaccount; quyền từng tài khoản không tạo quyền xem tổng. | Cần quyền ở cấp trên hoặc danh sách tài khoản đầy đủ. |
| Export | BigQuery chỉ nhận dữ liệu sau khi Cloud Billing Export được bật và trỏ về dataset. | Nếu chưa bật, không có dữ liệu tự động để ERP truy vấn. |
| Dữ liệu lịch sử | Khả năng hồi tố phụ thuộc loại export và location; đổi dataset hoặc tắt export có thể tạo khoảng trống dữ liệu. | Phải giữ file/invoice cũ để bổ sung và đối soát. |
| Độ trễ | Chi phí thường về trong một ngày nhưng có thể chậm hơn 24 giờ; dữ liệu cuối tháng có thể sang invoice sau. | Cần thời gian chờ và cơ chế chạy lại kỳ. |
| Dataset | Location không đổi được sau khi tạo. | Phải chốt location trước khi bật export. |
| Bảng export | Service account của Google cần quyền ghi; không được sửa schema bảng gốc. | ERP chỉ đọc bảng gốc qua view nghiệp vụ. |
| Nhận diện dịch vụ | Cần xác định service/SKU của Google Maps Platform trên dataset thật. | Nhận diện sai sẽ tính thiếu hoặc trùng dữ liệu. |
| Mapping | BigQuery không biết project thuộc khách hàng nào nếu thiếu bảng mapping. | Bắt buộc quản lý `project.id`–khách hàng–hợp đồng. |
| Đối chiếu invoice | `usage date`, `export_time` và `invoice.month` có thể khác nhau. | Cần quy định trường dùng để chốt và đối chiếu. |
| Chi phí vận hành | BigQuery phát sinh phí lưu trữ và truy vấn; Detailed export có thể lớn hơn Standard export. | Cần phân vùng, lọc `export_time` và theo dõi chi phí. |
| Quy tắc tính cước | BigQuery không chứa discount hợp đồng, tỷ giá, pháp nhân hoặc ngoại lệ của Cloudaz. | ERP vẫn cần lớp tính cước và đối soát. |

### 1.2. Kết luận thực trạng

Rào cản chính là quyền trên Billing Account, nguồn dữ liệu tổng hợp và mapping project–khách hàng–hợp đồng. BigQuery chỉ khả thi khi Cloud Billing Export được bật, Cloudaz được cấp quyền đọc dataset và ERP xử lý được dữ liệu trễ, lịch sử và đối soát invoice. Trong giai đoạn chuyển đổi vẫn cần nhập Excel/CSV và đối soát song song.

### 1.3. Phân tích mô hình đại lý cấp 2

#### 1.3.1. Phạm vi quyền

| Cấp | Có thể thực hiện | Không mặc nhiên có |
|---|---|---|
| Cloudaz – đại lý cấp 2 | Xem báo cáo của Billing Account được cấp; tải CSV; lập báo cáo trong phạm vi được phân quyền. | Xem các Billing Account khác; xem tổng cấp reseller; bật export; truy cập dataset của reseller cấp trên. |
| Billing Account Administrator | Bật Cloud Billing Export; chọn project/dataset; cấp quyền đọc dữ liệu. | Không nhất thiết có quyền trên các Billing Account khác. |
| Reseller cấp trên | Cung cấp danh sách Billing Account; cấu hình hoặc hỗ trợ export cấp trên; cung cấp invoice/report tổng hợp. | Không thay thế trách nhiệm mapping và tính cước của Cloudaz nếu hợp đồng yêu cầu Cloudaz tự lập hóa đơn khách hàng. |

Kết luận: quyền `View` cho phép xem số liệu nhưng không tạo quyền tổng hợp. Cloudaz không thể tự động lấy toàn bộ dữ liệu chỉ bằng cách truy vấn BigQuery nếu chưa có export và quyền đọc tương ứng.

#### 1.3.2. BigQuery giải quyết và không giải quyết

| BigQuery giải quyết | BigQuery không giải quyết |
|---|---|
| Tập trung dữ liệu billing đã được export. | Xin quyền Billing Account hoặc quyền cấp reseller. |
| Truy vấn theo Project, Billing Account, Service, SKU và invoice month. | Tự xác định Project thuộc khách hàng nào. |
| Tự động cập nhật dữ liệu theo chu kỳ của Cloud Billing. | Tự quyết định discount, credit, tỷ giá và giá bán theo hợp đồng Cloudaz. |
| Tạo báo cáo tổng hợp, dashboard và file đối soát. | Đảm bảo số liệu đã chốt nếu dữ liệu nguồn còn trễ hoặc invoice có điều chỉnh. |
| Lưu lịch sử và truy vết dữ liệu đã nhận. | Hồi tố đầy đủ dữ liệu trước thời điểm bật export. |

#### 1.3.3. Các phương án triển khai

| Phương án | Cách thực hiện | Ưu điểm | Hạn chế |
|---|---|---|---|
| A. Export từng Billing Account | Admin bật Cloud Billing Export cho từng Billing Account vào dataset trung tâm; ERP hợp nhất các bảng export. | Chủ động, dễ kiểm soát phạm vi và mapping. | Nhiều cấu hình, phụ thuộc quyền từng Billing Account, dễ bỏ sót tài khoản mới. |
| B. Reseller cấp trên cung cấp dataset tổng hợp | Reseller bật export ở cấp có quyền và cấp `BigQuery Data Viewer` cho Cloudaz/ERP. | Có nguồn tổng hợp, giảm số cấu hình và phù hợp mô hình đại lý cấp 2. | Phụ thuộc hoàn toàn vào reseller; Cloudaz không tự xử lý khi một tài khoản bị thiếu quyền hoặc thiếu dữ liệu. |
| C. File định kỳ | Reseller xuất CSV/Excel; Cloudaz nạp vào BigQuery hoặc ERP. | Triển khai nhanh, không cần mở thêm quyền. | Chưa tự động hoàn toàn; phụ thuộc lịch gửi file, dễ sai format và khó truy vết dữ liệu gốc. |

#### 1.3.4. Phương án khuyến nghị

Ưu tiên **Phương án B** nếu reseller cấp trên có thể cung cấp dataset tổng hợp. Nếu không thể, triển khai **Phương án A** cho các Billing Account Cloudaz được cấp quyền. Dùng **Phương án C** làm phương án chuyển tiếp hoặc dự phòng trong thời gian chờ cấp quyền.

Điều kiện nghiệm thu tối thiểu trước khi bỏ quy trình Excel:

1. Có danh sách đầy đủ Billing Account và project thuộc phạm vi Cloudaz.
2. Có dữ liệu BigQuery của ít nhất một kỳ hoàn chỉnh.
3. Tổng theo Project khớp tổng theo Billing Account.
4. Tổng BigQuery khớp invoice/report trong ngưỡng đã duyệt.
5. Project chưa mapping và dữ liệu chưa cập nhật đều có cảnh báo.

## 2. Giải pháp đề xuất

Xây dựng luồng thu thập, chuẩn hóa, tính cước và đối soát GMaps qua BigQuery trung tâm. Giải pháp gồm bốn lớp:

1. **Lớp nguồn**: Cloud Billing Account của các subaccount GMaps.
2. **Lớp lưu trữ**: BigQuery dataset nhận Cloud Billing Export.
3. **Lớp nghiệp vụ**: view chuẩn hóa, mapping Project–Billing Account–Customer–Contract, công thức tính cước và đối soát.
4. **Lớp đầu ra**: báo cáo kế toán, bảng đối soát, dữ liệu xuất hóa đơn và dashboard.

Ưu tiên dùng Cloud Billing Export của từng Billing Account hoặc tài khoản cấp trên nếu có quyền tổng hợp. ERP đọc bảng export qua view chuẩn hóa, áp dụng mapping project–khách hàng–hợp đồng, tính cước và sinh báo cáo. Nếu Cloudaz chưa có quyền, Billing Account Administrator hoặc reseller cấp trên phải bật export và cấp quyền đọc dataset, hoặc cung cấp file dữ liệu định kỳ.

### 2.1. Luồng xử lý đề xuất

```text
Cloud Billing Account
        ↓ Cloud Billing Export
BigQuery bảng gốc
        ↓ View chuẩn hóa
Kiểm tra dữ liệu và mapping
        ↓
Tính cước theo hợp đồng
        ↓
Đối soát Project/Billing Account/Invoice
        ↓
Chốt số → Gửi khách → Xuất hóa đơn
```

### 2.2. Lộ trình triển khai

| Giai đoạn | Phạm vi | Kết quả |
|---|---|---|
| 1. Xác minh quyền | Xác định owner của từng Billing Account, quyền hiện tại và quyền cần xin. | Danh sách quyền và tài khoản đủ để triển khai. |
| 2. Thử nghiệm | Chọn 1–3 Billing Account đại diện; bật export; nạp một kỳ dữ liệu. | Xác nhận schema, độ trễ và số liệu. |
| 3. Chuẩn hóa | Tạo view, mapping project–khách hàng–hợp đồng và quy tắc tính. | Báo cáo chuẩn hóa cho ERP. |
| 4. Chạy song song | So sánh BigQuery với Excel, Console và invoice trong 2–3 kỳ. | Danh sách chênh lệch và quy tắc xử lý. |
| 5. Vận hành chính thức | Mở rộng toàn bộ tài khoản, bật cảnh báo và phân quyền ERP. | Tự động hóa quy trình; Excel chỉ còn là phương án dự phòng. |

## 3. Hệ thống và bên liên quan

| Hệ thống / Bên liên quan | Vai trò |
|---|---|
| Google Maps Platform (GMaps) | Nguồn phát sinh dịch vụ Maps, Routes, Places và các API liên quan |
| Google Cloud Billing Console | Nguồn báo cáo chi phí, Billing Account, Project, Service và SKU |
| Cloud Billing Export | Luồng tự động đưa dữ liệu chi phí GMaps vào BigQuery |
| Billing Account Administrator / Reseller cấp trên | Bên có quyền cấu hình export và cấp quyền dữ liệu |
| BigQuery | Kho dữ liệu billing trung tâm |
| ERP Cloudaz | Quản lý ánh xạ, hợp đồng, tính cước, đối soát và trạng thái hóa đơn |
| CM/Cost Management hiện tại | Hệ thống đang được dùng để nhập hoặc tổng hợp dữ liệu; cần tích hợp hoặc thay thế theo quyết định dự án |
| Excel/Google Sheets | Kênh đối chiếu thủ công trong giai đoạn chuyển đổi |
| Hệ thống hóa đơn điện tử | Nhận dữ liệu sau khi đối soát và khách hàng xác nhận |
| Phòng Kế toán | Chủ sở hữu quy trình tính cước, đối soát và chốt số |
| Admin / Sale | Cung cấp hoặc xác nhận thông tin khách hàng, project và hợp đồng |

## 4. Giả định và phụ thuộc

### 4.1. Giả định

- GMaps trong BRD này là **Google Maps Platform**.
- Dữ liệu chi phí GMaps được ghi nhận trong Cloud Billing Account của Google Cloud.
- Dịch vụ được nhận diện bằng các trường `service.description`, `sku.description`, project và Billing Account sau khi kiểm tra trên dataset thực tế.
- Discount, credit, tỷ giá và giá bán khách hàng áp dụng theo hợp đồng Cloudaz; chưa mặc định quy tắc “không discount/không credit”.
- ERP không sửa bảng export gốc.
- Mapping bắt buộc ở cấp `project.id`.
- Quy mô khoảng 40 khách hàng/tháng; invoice thường về ngày 05–08, có thể đến ngày 09.

### 4.2. Phụ thuộc

- Billing Account Administrator hoặc đại lý cấp trên phải cấu hình export cho các Billing Account cần tổng hợp.
- Project chứa BigQuery dataset phải có Billing hợp lệ và có quyền sử dụng BigQuery.
- Cần thống nhất location của dataset trước khi tạo vì location không thể thay đổi sau khi tạo.
- Cần có danh sách mapping project–customer–contract và quy trình cập nhật khi project mới phát sinh.
- Cần xác định CM tiếp tục là hệ thống tính cước hay ERP sẽ thay thế CM.
- Cần file invoice/report mẫu của ít nhất một kỳ GMaps để đối chiếu schema và quy tắc tính.

### 4.3. Ràng buộc kỹ thuật

- Để cấu hình Cloud Billing Export, cần quyền Billing Account Costs Manager hoặc Billing Account Administrator trên Billing Account đích và quyền BigQuery User trên project chứa dataset.
- Quyền `View` của đại lý cấp 2 không đủ để bật export hoặc xem các Billing Account ngoài phạm vi được cấp.
- Cloud Billing Export dùng service account do Google quản lý để ghi vào dataset. Không được gỡ quyền hoặc sửa bảng export gốc.
- Dataset location phải được chốt trước khi bật export; đổi dataset có thể tạo khoảng trống dữ liệu không được backfill.
- Dữ liệu được nạp tự động trong ngày nhưng không phải real-time.
- Khi đối chiếu invoice, dùng `invoice.month`; không dùng riêng ngày sử dụng hoặc `export_time`.

Nguồn: [Cloud Billing Export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup), [Cloud Billing data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage).

## 5. Yêu cầu nghiệp vụ

### 5.1. Quản lý nguồn dữ liệu và quyền truy cập

- **5.1.1** Hệ thống cho phép quản trị viên cấu hình nguồn dữ liệu GMaps từ Cloud Billing Export.
- **5.1.2** Hệ thống cho phép khai báo dataset BigQuery trung tâm làm nguồn dữ liệu billing cho ERP.
- **5.1.3** Hệ thống chỉ đọc bảng export gốc và sử dụng view chuẩn hóa cho các bước xử lý nghiệp vụ.
- **5.1.4** Hệ thống ghi nhận trạng thái kết nối, thời điểm nạp gần nhất và lỗi truy cập dữ liệu.
- **5.1.5** Hệ thống cảnh báo khi dữ liệu chưa được cập nhật quá số giờ cấu hình hoặc khi export bị dừng.
- **5.1.6** Hệ thống hỗ trợ nhập file CSV/Excel khi chưa có quyền BigQuery.

### 5.2. Thu thập và chuẩn hóa dữ liệu GMaps

- **5.2.1** Hệ thống tự động thu thập dữ liệu GMaps theo kỳ tính cước tháng.
- **5.2.2** Hệ thống lưu dữ liệu theo Billing Account, Project, Service, SKU, invoice month, cost, discount, promotion/credit và thời điểm export nếu nguồn có cung cấp.
- **5.2.3** Hệ thống nhận diện dịch vụ GMaps bằng Service, SKU và Project theo cấu hình đã xác nhận trên dataset thực tế.
- **5.2.4** Hệ thống hỗ trợ tổng hợp chi phí theo Project, Billing ID, khách hàng, hợp đồng, Service và SKU.
- **5.2.6** Hệ thống lưu lại dữ liệu nguồn và thông tin kỳ nạp để phục vụ truy vết, đối soát và xử lý lại.
- **5.2.7** Hệ thống phát hiện project mới chưa được ánh xạ vào khách hàng hoặc hợp đồng.
- **5.2.8** Hệ thống phát hiện một project được ánh xạ vào nhiều khách hàng hoặc một khách hàng có dữ liệu trùng lặp.

### 5.3. Ánh xạ khách hàng và hợp đồng

- **5.3.1** Hệ thống cho phép quản lý ánh xạ `project.id` vào `customer_id` và `contract_id` trong bảng `resource_mapping`.
- **5.3.2** Hệ thống cho phép một khách hàng có nhiều project và nhiều Billing Account.
- **5.3.3** Hệ thống không dùng view link làm khóa ánh xạ duy nhất khi view link chứa project của nhiều khách hàng.
- **5.3.4** Hệ thống lưu lịch sử thay đổi ánh xạ, người thay đổi, thời điểm thay đổi và lý do thay đổi.
- **5.3.5** Hệ thống cho phép kế toán hoặc admin xử lý project chưa xác định trước khi chốt kỳ.
- **5.3.6** Hệ thống không cho phép chốt cước khi còn project bắt buộc chưa được ánh xạ, trừ khi người có thẩm quyền ghi nhận ngoại lệ.

### 5.4. Tính cước GMaps

- **5.4.1** Hệ thống tính chi phí GMaps từ dữ liệu Cloud Billing theo Project, Billing Account, Service và SKU.
- **5.4.2** Hệ thống áp dụng discount, promotion/credit và tỷ giá theo hợp đồng, cấu hình khách hàng và dữ liệu Cloud Billing.
- **5.4.3** Hệ thống tách riêng Cost, Discounts, Promotions/credits và Subtotal theo cấu trúc dữ liệu nguồn.
- **5.4.4** Hệ thống nhận diện dịch vụ bằng cấu hình Service/SKU, không hardcode theo tên khách hàng hoặc view link.
- **5.4.5** Hệ thống cho phép cấu hình tỷ giá, đơn vị tiền tệ và kỳ áp dụng theo quy định chung của phân hệ tính cước.
- **5.4.6** Hệ thống hiển thị thành phần tính cước gồm giá trị nguồn, điều chỉnh, tỷ giá, giá trị tính cho khách hàng và tổng cuối kỳ.
- **5.4.7** Hệ thống hỗ trợ làm tròn theo quy tắc kế toán đã cấu hình và lưu chênh lệch làm tròn.
- **5.4.8** Hệ thống cho phép kế toán điều chỉnh thủ công số liệu trước khi chốt, bắt buộc nhập lý do và lưu nhật ký.

### 5.5. Đối soát và kiểm soát chất lượng

- **5.5.1** Hệ thống tự động đối soát tổng dữ liệu theo Project với tổng dữ liệu theo Billing ID.
- **5.5.2** Hệ thống đối chiếu số đã tính với invoice/report của hãng hoặc dữ liệu reseller cung cấp.
- **5.5.3** Hệ thống cho phép cấu hình ngưỡng sai lệch và chỉ cảnh báo khi chênh lệch vượt ngưỡng.
- **5.5.4** Hệ thống phân loại trạng thái đối soát: khớp, lệch trong ngưỡng, lệch vượt ngưỡng, thiếu dữ liệu và chưa đủ điều kiện đối soát.
- **5.5.5** Hệ thống hiển thị chi tiết các dòng gây lệch, không chỉ hiển thị tổng số chênh lệch.
- **5.5.6** Hệ thống cho phép kế toán nhập số liệu đối chiếu thủ công trong giai đoạn chạy song song.
- **5.5.7** Hệ thống lưu bằng chứng nguồn, file đối chiếu, người xác nhận và thời điểm chốt.
- **5.5.8** Hệ thống không cho phép chuyển sang trạng thái đã chốt nếu còn lỗi nghiêm trọng chưa được xử lý hoặc phê duyệt ngoại lệ.

### 5.6. Lịch xử lý và trạng thái kỳ cước

- **5.6.1** Hệ thống cho phép cấu hình lịch thu thập và lịch chốt riêng cho GMaps.
- **5.6.2** Hệ thống mặc định theo dõi invoice GMaps khoảng ngày 05–08 và cảnh báo nếu đến ngày 09 chưa có dữ liệu.
- **5.6.3** Hệ thống không dùng lịch chốt của GCP cho GMaps.
- **5.6.4** Hệ thống theo dõi trạng thái theo từng khách hàng: chưa lấy dữ liệu, đã lấy dữ liệu, đã ánh xạ, đã tính cước, đang đối soát, đã chốt, đã gửi khách và đã xuất hóa đơn.
- **5.6.5** Hệ thống hỗ trợ xử lý lại một kỳ khi dữ liệu nguồn được bổ sung, đồng thời lưu phiên bản kết quả và lý do xử lý lại.

### 5.7. Báo cáo và tích hợp kế toán

- **5.7.1** Hệ thống xuất báo cáo tổng hợp GMaps theo tháng cho toàn bộ khách hàng.
- **5.7.2** Hệ thống xuất báo cáo chi tiết theo khách hàng, project, Billing Account, service và SKU.
- **5.7.3** Hệ thống xuất bảng dữ liệu theo định dạng Excel/CSV theo mẫu kế toán.
- **5.7.4** Hệ thống cung cấp bảng tổng hợp để kế toán đối chiếu với invoice hãng và bảng nhập thủ công.
- **5.7.5** Hệ thống gửi bảng đối soát cho khách hàng theo quy trình chung của ERP sau khi số liệu đạt điều kiện chốt.
- **5.7.6** Hệ thống tạo dữ liệu đề nghị xuất hóa đơn sau khi bảng đối soát được xác nhận hoặc được phê duyệt theo cơ chế ngoại lệ.

### 5.8. Phân quyền và nhật ký

- **5.8.1** Hệ thống cho phép kế toán xem và xử lý toàn bộ dữ liệu GMaps trong phạm vi Cloudaz được cấp quyền.
- **5.8.2** Hệ thống cho phép admin quản lý nguồn dữ liệu, mapping, cấu hình lịch và cấu hình ngưỡng đối soát.
- **5.8.3** Hệ thống giới hạn quyền Sale theo khách hàng được phân công.
- **5.8.4** Hệ thống ghi audit log cho các thao tác ảnh hưởng đến số tiền, mapping, tỷ giá, chốt kỳ và phê duyệt ngoại lệ.
- **5.8.5** Hệ thống cấp quyền đọc BigQuery cho service account ERP ở mức cần thiết và không cấp quyền ghi vào bảng export gốc.

## 6. Ngoài phạm vi

- Tự động truy cập hoặc điều khiển giao diện Google Cloud Console bằng thao tác trình duyệt.
- Tự động lấy dữ liệu từ Google Marketing Platform như DV360, SA360 hoặc Campaign Manager 360.
- Các sản phẩm khác ngoài Google Maps Platform.
- Sửa trực tiếp bảng export gốc trong BigQuery.
- Tự động quyết định phần credit thuộc về khách hàng nếu chưa có quy tắc được phê duyệt.
- Các dịch vụ AWS, DigitalOcean và Google Workspace Commit, trừ khi được mở rộng phạm vi sau.

## 7. Câu hỏi còn mở — cần xác nhận

| Mã | Vấn đề cần xác nhận | Trạng thái |
|---|---|---|
| Q-01 | Cloudaz có quyền Billing Account Costs Manager hoặc Billing Account Administrator trên các Billing Account GMaps không? | Chờ xác nhận |
| Q-02 | Ai sẽ bật Cloud Billing Export: Cloudaz, Billing Account Administrator hay reseller cấp trên? | Chờ xác nhận |
| Q-03 | Danh sách Billing Account/subaccount và payer account cần tổng hợp là gì? | Chờ xác nhận |
| Q-04 | Dataset BigQuery do Cloudaz hay reseller sở hữu? Location nào được chọn? | Chờ xác nhận |
| Q-05 | Service/SKU nào được dùng để nhận diện Google Maps Platform trên dataset thật? | Chờ xác nhận |
| Q-06 | Discount, promotion/credit và tỷ giá GMaps áp dụng theo hợp đồng nào? | Chờ xác nhận |
| Q-07 | Giá chốt là giá gốc, customer cost sau repricing hay giá trị khác? | Chờ xác nhận |
| Q-08 | Mapping project–khách hàng–hợp đồng hiện nằm ở CM, ERP, order system hay Excel? | Chờ xác nhận |
| Q-09 | CM sẽ tích hợp với ERP hay được thay thế trong phạm vi GMaps? | Chờ xác nhận |
| Q-10 | Ngưỡng sai lệch và quy tắc làm tròn là bao nhiêu? | Chờ xác nhận |
| Q-11 | Chấp nhận báo cáo do ERP sinh hay bắt buộc screenshot Console? | Chờ xác nhận |
| Q-12 | Thời hạn khách phản hồi trước khi xuất hóa đơn là bao nhiêu ngày? | Chờ xác nhận |
| Q-13 | Cần dữ liệu lịch sử trước khi bật export không? Nếu có, nguồn bổ sung là gì? | Chờ xác nhận |
| Q-14 | Kỳ chốt căn cứ theo `invoice.month`, ngày sử dụng hay ngày nhận export? | Chờ xác nhận |
| Q-15 | Dữ liệu về muộn sau ngày chốt sẽ điều chỉnh kỳ cũ hay chuyển sang kỳ sau? | Chờ xác nhận |
| Q-16 | Ai duy trì quyền service account và xử lý cảnh báo khi export dừng? | Chờ xác nhận |

## 8. Chỉ số thành công đề xuất

| Chỉ số | Mục tiêu |
|---|---|
| Phạm vi khách hàng được tổng hợp tự động | 100% khách GMaps có mapping hợp lệ |
| Dữ liệu project chưa được ánh xạ | Có cảnh báo trước khi chốt kỳ |
| Đối soát Project và Billing ID | Tự động, không cần cộng tay |
| Thời gian lập báo cáo tháng | Giảm đáng kể so với quy trình Excel thủ công |
| Khả năng truy vết | Mỗi dòng chi phí truy ngược được về project, Billing Account, kỳ và nguồn dữ liệu |
| Sai lệch sau đối soát | Nằm trong ngưỡng được phê duyệt hoặc có lý do ngoại lệ |

## 9. Ghi chú thuật ngữ

Các tài liệu trong thư mục đã được thống nhất theo Google Maps Platform: `QuyTrinh_LayHoaDon_GMaps.md` và `GiaiPhap_KyThuat_LayDuLieu_GMaps.md`.

