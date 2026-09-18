# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD) & GIẢI PHÁP KỸ THUẬT

> **Dự án**: ERP CloudAZ — Phân hệ Tính cước · Sản phẩm **Google Workspace Flex (GWS Flex)**
> **Khách hàng / Bên yêu cầu**: Phòng Kế toán doanh thu — CloudAZ (reseller Google Cloud & Google Workspace)
> **Nguồn đầu vào**:
> · [QuyTrinh_LayHoaDon_GWS.md](QuyTrinh_LayHoaDon_GWS.md) — quy trình AS-IS
> · [GiaiPhap_KyThuat_LayDuLieu_GWS.md](GiaiPhap_KyThuat_LayDuLieu_GWS.md) — hai luật nghiệp vụ bắt buộc & hai phương án TO-BE
> · [BRD Tính cước Google](../Google/BRD_TinhCuoc_Google_2026-09-03.md) mục 5.1.7, 5.4, 5.5, 5.6 — nghiệp vụ gốc từ phỏng vấn kế toán
> · [setup_bigquery_export.md](../GCP/setup_bigquery_export.md) Phần 3 — hướng dẫn cấu hình đã có
> · Tài liệu chính thống Google (Channel Services, Cloud Channel API, Reseller API) — tra cứu 2026-09-03, danh sách ở mục 10
> **Ngày tạo**: 2026-09-03
> **Phiên bản**: 1.4 *(cập nhật 2026-09-09 — phạm vi §2.1, màn hình sinh ĐNTT §5.8, truy vấn chuẩn §6.12.1, câu hỏi chặn §8.1)*

---

## 📜 Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
| :--- | :--- | :--- | :--- |
| 1.0 | 2026-09-03 | BA Team | Khởi tạo BRD tính cước GWS Flex kèm giải pháp kỹ thuật chi tiết. Xác minh phương án TO-BE trên tài liệu chính thống Google; đính chính rủi ro của phương án SFTP |
| 1.1 | 2026-09-09 | BA Team | **Đổi phạm vi theo quyết định của PO** (mục 2.1): CM **được giữ lại** làm nơi tính cước và sinh ĐNTT — ERP không thay CM; phạm vi tính cước thu hẹp còn **dòng Usage**. Cập nhật mục 2, 3, 5.2, 5.5, 5.6.1, 6.11, 9. Bổ sung mục 2.2 — số liệu đối chiếu trên hóa đơn thật kỳ 06/2026, mục 6.12 — hợp đồng dữ liệu ERP → CM, và câu hỏi Q-12…Q-15 |
| 1.2 | 2026-09-09 | BA Team | Bổ sung **mục 5.8 — màn hình sinh ĐNTT**: nút Sinh ĐNTT cạnh nút Đồng bộ dữ liệu từ CM, chọn khoảng thời gian và phương thức tính (Flex đi luồng §2.1, Standard giữ nguyên logic CM). Khoảng ngày **quy về trọn kỳ tháng**. Thêm Q-16…Q-18 |
| 1.3 | 2026-09-09 | BA Team | Bổ sung **mục 8.1** — sáu câu hỏi Q-19…Q-24 về luồng lấy dữ liệu và sinh ĐNTT: căn cứ lọc dòng Usage khi chưa có Reseller API · dòng điều chỉnh đang bị bỏ · dữ liệu đổi sau khi đã sinh ĐNTT · tên miền chưa có khách trong CM · đơn vị của một ĐNTT · xử lý khi CM nhận thiếu. Bốn câu đánh dấu chặn |
| 1.4 | 2026-09-09 | BA Team | Bổ sung **mục 6.12.1 — truy vấn chuẩn lấy dòng Usage GWS Flex**, truy vấn DUY NHẤT nằm trên luồng sinh ĐNTT, kèm bảng năm chỗ chờ quyết định và số liệu đối chiếu kỳ 06/2026. Đánh dấu các truy vấn ở §6.4, §6.6, §6.7 là khảo sát / cảnh báo / đối soát |

---

## 1. Vấn đề Hiện tại

Luồng tính cước Google Workspace Flex hiện chạy hoàn toàn thủ công:

```
Partner Sales Console → Tải Monthly Detail Report (.csv) → Chuyển sang Excel
                      → Upload nguyên file lên CM → CM gen bảng tổng hợp chi phí
```

**1.1 — Lấy số bằng tay mỗi tháng.** Kế toán đăng nhập Partner Sales Console (hoặc Google Payments Center), lọc kỳ, tải CSV, chuyển định dạng, rồi upload lên CM. Hóa đơn hãng về sớm (ngày 01–02) nhưng thao tác này vẫn phải chờ người làm.

**1.2 — Phải xóa tay dòng Commit.** Cùng một `domain` có thể phát sinh hai loại dòng tiền: **User/Usage** (lượng dùng thực tế trong tháng) và **Commit** (license cam kết bán trước một năm, trả trước). Bảng cước tháng **chỉ được tính dòng User/Usage**; hiện kế toán phải tự phát hiện và xóa tay dòng Commit trước khi upload. Xóa sót thì khách bị tính trùng tiền license đã trả trước.

**1.3 — Không phát hiện được khách dùng lẻ tháng.** Khi khách kích hoạt hoặc hủy giữa tháng, `End date` của dòng cước không rơi vào ngày cuối tháng và số tiền có thể được tính lẻ ngày (prorated). Hiện không có cơ chế cảnh báo — kế toán chỉ phát hiện nếu tình cờ nhìn thấy.

**1.4 — Dữ liệu hãng chia theo `domain`, không theo khách.** Invoice của Google chia theo tên miền, không theo khách hàng hay pháp nhân xuất hóa đơn. Việc quy về khách hàng phụ thuộc bảng ánh xạ nằm ngoài hệ thống.

**1.5 — Pipeline dễ vỡ vì phụ thuộc định dạng file.** Toàn bộ luồng đứng trên một file CSV do người tải về. Google đổi thứ tự cột, đổi định dạng số/ngày, hoặc người tải nhầm kỳ là cả bảng cước sai mà không có cách phát hiện tự động.

**1.6 — Không có kho lưu trữ đối soát dài hạn.** Admin Console chỉ giữ lịch sử hóa đơn **tối đa 12 tháng**; muốn lấy hóa đơn cũ hơn phải liên hệ hỗ trợ của Google. Trong khi hồ sơ công nợ và thời hiệu khởi kiện hợp đồng thương mại cần lưu lâu hơn nhiều.

**1.7 — Mức độ ưu tiên nghiệp vụ thấp nhưng rủi ro tồn tại.** Kế toán **không lập bảng đối soát tay** cho GWS mà tin kết quả CM gen ra (*"Cái này chị không đối soát nhé... cái này là lấy thôi"*). Điều này khiến GWS được xếp ưu tiên 3/3 — nhưng cũng có nghĩa **không có chốt kiểm soát nào** nếu số đầu vào sai: sai là sai thẳng vào hóa đơn khách.

---

## 2. Giải pháp Đề xuất

Thay nguồn dữ liệu từ *file CSV người tải tay* sang **luồng dữ liệu tự động do Google đẩy vào kho dữ liệu của CloudAZ**, rồi để ERP đọc, lọc theo luật nghiệp vụ và **đẩy sang CM qua API** để CM tính cước và sinh đề nghị thanh toán như hiện nay.

```
Partner Sales Console
      │  Channel Services billing data export (Google đẩy, hằng ngày)
      ▼
BigQuery  ·  reseller_billing_detailed_export_v1
      │
      ├── Cloud Channel API  ──► customers + correlationId + entitlements
      ├── Reseller API       ──► subscription_id → plan.planName (Flex / Commit)
      ▼
ERP — Lớp lấy số & áp luật nghiệp vụ
      · Lọc lấy DÒNG USAGE (luật §5.2)
      · Cảnh báo lẻ tháng / prorated (luật §5.3)
      · Dựng JSON theo 11 cột của bảng đã chốt (§6.12)
      ▼
CM  ─ API tạo dữ liệu GWS ──► API sinh ĐNTT
      ▼
ERP đồng bộ kết quả về (số ĐNTT, số tiền, trạng thái)
      ▼
Gửi khách → Xuất hóa đơn → Module Thu hồi Công nợ
```

### 2.1 Quyết định phạm vi — CM được giữ lại *(2026-09-09, PO chốt)*

> **DECISION-01.** CM **không bị thay thế**. CM tiếp tục là nơi tính cước, quy khách hàng và sinh đề nghị thanh toán cho GWS Flex. ERP đảm nhận phần *lấy số và áp luật lọc*, rồi bàn giao sang CM bằng API.
>
> Quyết định này **thay thế** lộ trình cũ ở mục 9 (đợt 6 "bỏ luồng CM, ERP thành nguồn duy nhất") và dòng "Bị thay thế dần" ở mục 3. Phần đó đã được cập nhật, không giữ song song hai phiên bản.

**Luồng bốn bước ERP phải cài đặt:**

| Bước | Việc | Bên làm |
| :--- | :--- | :--- |
| **B1** | Đọc BigQuery, lọc lấy **dòng Usage** của kỳ | ERP |
| **B2** | Dựng JSON theo **11 cột** của bảng đã chốt (§6.12) | ERP |
| **B3** | Gọi **API tạo dữ liệu GWS** trên CM, rồi gọi **API sinh ĐNTT** | ERP gọi · CM thực thi |
| **B4** | Đồng bộ kết quả về ERP: số ĐNTT, số tiền, trạng thái | ERP |

> **DECISION-02.** Phạm vi tính cước của phân hệ này là **dòng Usage**. Dòng Commitment thuộc luồng [BRD GWS Standard](../Gws_standard/BRD_GWS_Standard_2026-09-03.md), **không đẩy sang CM ở luồng này** để tránh tính trùng.

**Ba thay đổi cốt lõi so với hiện trạng:**

1. **Bỏ hẳn thao tác tải file và upload tay.** Google đẩy dữ liệu hằng ngày vào BigQuery của CloudAZ; ERP đọc bằng truy vấn có cấu trúc rồi gọi API sang CM, không còn khâu người tải CSV và upload.
2. **Hai luật nghiệp vụ thành code, không còn là thao tác tay.** Lọc dòng Commit và cảnh báo lẻ tháng chạy tự động trên toàn bộ dữ liệu, không phụ thuộc mắt người.
3. **ERP thành chốt kiểm soát duy nhất trước CM.** Vì CM tính đúng cái ERP đẩy sang, sai ở khâu lọc là sai thẳng vào ĐNTT gửi khách — không còn bước người soát ở giữa như khi kế toán tự xóa dòng Commit trên Excel.

### 2.2 Số liệu đối chiếu trên hóa đơn thật kỳ 06/2026

Cộng đủ 701 dòng của hóa đơn `5610176163` ra đúng **178.069,30 USD** như đầu hóa đơn ghi. Cơ cấu:

| Loại dòng | Số dòng | Số tiền (USD) | Thuộc luồng |
| :--- | ---: | ---: | :--- |
| Commitment | 558 | 151.725,80 | GWS Standard |
| New commitment | 32 | 2.212,97 | GWS Standard |
| Commitment increase | 30 | 880,08 | GWS Standard |
| Commitment renewal | 1 | 9,80 | GWS Standard |
| **Usage** | **79** | **5.442,12** | **GWS Flex — tài liệu này** |
| VAT (10%) | 1 | 17.798,53 | — |

**Bốn con số cần nhớ khi thiết kế:**

- **Phạm vi thật của phân hệ này là 5.442,12 USD trên 160.270,77 USD trước thuế**, tức **3,4%**. Mọi ước lượng khối lượng và mọi ngưỡng cảnh báo phải tính trên nền này.
- **53 tên miền có dòng Usage**, trong đó **16 tên miền có dòng Usage nhưng số tiền bằng 0** — cần chốt có đẩy sang CM hay bỏ (**Q-14**).
- **13 tên miền vừa có Usage vừa có Commitment.** Ví dụ `fireapps.vn`: Usage 3,73 USD và Commitment 1.179,50 USD. Đẩy nhầm cả hai là tính trùng tiền khách đã trả trước.
- **Tập trung rủi ro**: riêng `cellphones.com.vn` chiếm 1.517,28 USD, tức **28%** toàn bộ tiền Usage của kỳ. Một lỗi trên tên miền này là lỗi lớn.

Ngoài ra **108 dòng có ngày bắt đầu không phải mùng 1** và **85 dòng có ngày kết thúc không phải ngày cuối tháng** — luật cảnh báo lẻ tháng §5.3 nếu giữ nguyên điều kiện sẽ bắn khoảng **15% số dòng mỗi kỳ**, quá nhiều để kế toán xem tay. Cần siết điều kiện ở đợt khảo sát dữ liệu (mục 9, đợt 1).

> **Phát hiện cần kế toán giải thích (Q-13):** dòng thuế ghi **17.798,53 USD**, trong khi 10% của phần chi tiết (160.270,77 USD) là **16.027,08 USD**. Lệch **1.771,45 USD**. Chưa xác định được thuế tính trên căn cứ nào.

---

## 3. Hệ thống bị Ảnh hưởng

| Hệ thống | Vai trò | Mức tác động |
| :--- | :--- | :--- |
| **Partner Sales Console** | Nơi bật Channel Services billing export; nguồn cấu hình repricing | Cấu hình một lần, không sửa code |
| **Google BigQuery** | Kho dữ liệu trung gian nhận export hằng ngày từ Google | **Hạ tầng mới** — cần project, dataset, quyền IAM |
| **Cloud Channel API** | Danh sách customer, `correlationId`, entitlement, repricing config | Tích hợp mới (chỉ đọc + ghi `correlationId`) |
| **Reseller API** (`admin/reseller/v1`) | Tra `plan.planName` để phân biệt Flex và Commit | Tích hợp mới (chỉ đọc) |
| **ERP CloudAZ** | Lấy số, áp luật lọc, cảnh báo, đẩy sang CM và đồng bộ kết quả về | Bổ sung bảng dữ liệu, job nền, màn hình, **client gọi API CM** |
| **Hệ thống CM** | **Giữ lại** — nơi tính cước GWS và sinh ĐNTT (DECISION-01, mục 2.1) | **Tích hợp mới**: nhận dữ liệu GWS và lệnh sinh ĐNTT qua API từ ERP. Không bị thay thế |
| **Google Payments Center / Admin Console** | Nguồn PDF/CSV hóa đơn hãng để lưu trữ đối soát | Giữ nguyên thủ công, nhưng ERP phải lưu bản sao |
| **Module Thu hồi Công nợ** | Nhận đầu ra là số tiền phải thu theo kỳ | Kế thừa, không sửa |

---

## 4. Giả định / Phụ thuộc / Ngoài phạm vi

### 4.1 Giả định

- **A-01** GWS Flex map theo **`domain`** là đủ chính xác về nghiệp vụ (khác GCP phải map hàng trăm `project_id`, khác GMP phải map View Link).
- **A-02** Kế toán **không lập bảng đối soát tay** cho GWS và chấp nhận số hệ thống sinh ra, với điều kiện có cảnh báo bất thường tự động.
- **A-03** Hóa đơn hãng cho GWS về khoảng **ngày 01–02 hằng tháng**; lấy số sau đó tối thiểu 1 ngày mới đủ ổn định (kế thừa quy tắc 5.1.10 của BRD Google).
- **A-04** Một `domain` thuộc về đúng một khách hàng tại một thời điểm; khách có nhiều domain thì gộp về một khách.
- **A-05** Giá bán cho khách theo nguyên tắc chung của BRD Google: số gửi khách là số **đã bỏ Reseller margin**.
- **A-06** Trong giai đoạn chuyển đổi, ERP chạy **song song** với luồng CM để đối chiếu, chưa thay thế ngay.

### 4.2 Phụ thuộc

| Mã | Nội dung | Mức độ |
| :--- | :--- | :--- |
| **D-01** | Quyền **Google Cloud Reseller administrator** trên Partner Sales Console **và** **Google Workspace Reseller Admin hoặc Billing** — bắt buộc để bật export nguồn Workspace | 🔴 **Chặn triển khai** |
| **D-02** | Project Google Cloud có bật billing, bật **BigQuery Data Transfer Service API**, và một dataset đã tạo sẵn | 🔴 **Chặn triển khai** |
| **D-03** | Cấp `BigQuery Data Editor` cho service account của Google: `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com` | 🔴 **Chặn triển khai** |
| **D-04** | Service account riêng của ERP có quyền `BigQuery Data Viewer` + `BigQuery Job User` để truy vấn | 🟠 Cần trước khi code chạy thật |
| **D-05** | Quyền gọi **Cloud Channel API** và **Reseller API** (OAuth / service account với domain-wide delegation) | 🟠 Cần trước khi code chạy thật |
| **D-06** | Bảng ánh xạ `domain → khách hàng → hợp đồng → pháp nhân xuất hóa đơn` phải đầy đủ trước kỳ chạy đầu tiên | 🟠 Dữ liệu nghiệp vụ |
| **D-07** | Xác minh với Partner Manager của Google về kênh SFTP nhận hóa đơn — xem rủi ro **R-02** mục 4.4 | 🟡 Ảnh hưởng phương án dự phòng |
| **D-08** *(mới 2026-09-09)* | **Đặc tả API của CM**: API tạo dữ liệu GWS và API sinh ĐNTT — tham số vào, tham số ra, cách xác thực, cách chống trùng, cách báo lỗi. Kèm tài khoản gọi API trên môi trường thử | 🔴 **Chặn triển khai** — không có đặc tả thì không dựng được §6.12 |

### 4.3 Ngoài phạm vi

| Hạng mục | Lý do |
| :--- | :--- |
| **GWS Standard / Committed** | Là sản phẩm trả trước theo cam kết năm, có luồng riêng — xem [BRD GWS Standard](../Gws_standard/BRD_GWS_Standard_2026-09-03.md). Trong tài liệu này, dòng Commit **chỉ bị lọc bỏ**, không được xử lý |
| **GCP, GMP, AWS, DigitalOcean** | Có tài liệu và lộ trình riêng |
| **Tự động tạo/hủy subscription, đổi seat trên Google** | Chỉ đọc dữ liệu cước; không tự động hóa thao tác bán hàng |
| **Bước đối soát thủ công song song** | GWS không có bước này theo xác nhận của kế toán (5.4.5 BRD Google) |
| **Xuất hóa đơn VAT điện tử** | Thuộc phạm vi module hóa đơn/công nợ |

### 4.4 Rủi ro đã nhận diện

| Mã | Rủi ro | Ứng phó |
| :--- | :--- | :--- |
| **R-01** | **Chọn sai vị trí dataset.** Dataset **multi-region** (`US` / `EU`) được Google hồi tố dữ liệu từ **đầu tháng trước**; dataset **regional** chỉ có dữ liệu **từ ngày bật trở đi** | Bắt buộc tạo dataset **multi-region**. Sai thì mất trắng dữ liệu kỳ đang chạy, không có cách vá |
| **R-02** | **Phương án SFTP chưa được xác minh.** Thông số `partnerupload.google.com:19321`, thư mục `invoices` **không tìm thấy trong tài liệu chính thống của Google Workspace hay Channel Services** — tham chiếu tìm được thuộc tài liệu của sản phẩm khác (RCS for Business) | **Không đưa SFTP vào thiết kế** cho tới khi Partner Manager xác nhận tài khoản partner của CloudAZ thật sự được cấp kênh này (D-07) |
| **R-03** | **Export chết âm thầm.** Sửa cấu trúc bảng export, xóa service account của Google, hoặc bật row-level/column-level access control trên bảng đều làm export dừng | Cấm thao tác trên bảng gốc; ERP chỉ đọc qua view. Job giám sát cảnh báo khi quá 36 giờ không có `export_time` mới |
| **R-04** | **Không có backfill.** Tắt rồi bật lại export là thủng dữ liệu vĩnh viễn khoảng thời gian đó | Không tắt export. Nếu buộc phải tắt thì tải CSV thủ công cho toàn bộ khoảng thời gian đó trước |
| **R-05** | **Tập giá trị của nhãn `usage_type` chưa được Google công bố** | Không dựa vào nhãn này làm luật chính; dùng `plan.planName` từ Reseller API (xem §6.4) |
| **R-06** | **Console chỉ lưu 12 tháng hóa đơn** | ERP chủ động lưu bản sao PDF/CSV hóa đơn hãng ngay khi tải về, không coi Console là kho lưu trữ |

---

## 5. Yêu cầu Nghiệp vụ

### 5.1 Thu thập dữ liệu cước GWS

- **5.1.1** Hệ thống tự động thu thập dữ liệu cước Google Workspace theo **kỳ cước (tháng)** mà **không cần kế toán tải file thủ công**.
- **5.1.2** Hệ thống thu thập dữ liệu ở mức chi tiết đủ để truy ngược: theo **domain**, theo **subscription**, theo **SKU** và theo **khoảng thời gian sử dụng**.
- **5.1.3** Hệ thống lấy được cả **chi phí gốc** (giá CloudAZ phải trả Google) và **chi phí sau áp cấu hình giá bán cho khách**, cùng phần **Reseller margin** tách bạch.
- **5.1.4** Hệ thống cho phép cấu hình **thời điểm chốt kỳ**, mặc định **từ ngày 03 hằng tháng** — sau khi hóa đơn hãng về (ngày 01–02) tối thiểu một ngày.
- **5.1.5** Hệ thống thu thập theo cơ chế **tăng dần (incremental)** hằng ngày, không kéo lại toàn bộ lịch sử mỗi lần chạy.
- **5.1.6** Hệ thống **cảnh báo khi luồng dữ liệu ngưng** — quá 36 giờ không nhận được dữ liệu mới thì báo Quản trị viên, không đợi tới ngày chốt kỳ mới phát hiện.
- **5.1.7** Hệ thống **lưu bản sao hóa đơn gốc của hãng** (PDF/CSV) theo từng kỳ làm hồ sơ đối soát dài hạn, không phụ thuộc thời hạn lưu trữ 12 tháng của Console.

### 5.2 Phân biệt và lọc dòng Commit *(luật nghiệp vụ bắt buộc)*

> **Phạm vi (DECISION-02, 2026-09-09):** chỉ **dòng Usage** được đẩy sang CM. Đây là chốt chặn cuối cùng trước khi số đi vào ĐNTT gửi khách — CM tính đúng cái ERP đẩy sang, không có bước người soát ở giữa.
>
> Trên kỳ 06/2026 luật này giữ lại **79 dòng / 5.442,12 USD** và loại **621 dòng / 154.828,65 USD** (mục 2.2).

- **5.2.1** Hệ thống phân loại mỗi dòng cước thành **User/Usage** (lượng dùng thực tế trong tháng) hoặc **Commit** (license cam kết trả trước theo năm).
- **5.2.2** Hệ thống **chỉ tính dòng User/Usage** vào bảng cước tháng và **loại bỏ hoàn toàn dòng Commit**, kể cả khi hai loại cùng phát sinh trên một `domain`.
- **5.2.3** Việc phân loại **không được suy đoán từ tên SKU**. Căn cứ phân loại là **loại gói (plan) của subscription** lấy từ nguồn dữ liệu có tài liệu chính thức: gói **`FLEXIBLE`** ⇒ giữ lại; các gói cam kết **`ANNUAL`**, **`ANNUAL_MONTHLY_PAY`**, **`ANNUAL_YEARLY_PAY`** ⇒ lọc bỏ.
- **5.2.4** Dòng **không xác định được loại gói** thì **không tự động lọc và cũng không tự động tính** — đưa vào khu vực **"Chờ phân loại"** để kế toán quyết. *Lý do: đoán sai theo hướng nào cũng ra hóa đơn sai — bỏ nhầm thì thiếu tiền, giữ nhầm thì tính trùng license khách đã trả trước.*
- **5.2.5** Hệ thống hiển thị **số dòng và số tiền đã bị lọc bỏ** trong mỗi kỳ, để kế toán thấy được luật lọc đang tác động tới bao nhiêu tiền thay vì lọc âm thầm.
- **5.2.6** Luật lọc **có thể tra ngược**: mỗi dòng bị loại phải xem được lý do loại và giá trị `plan` căn cứ.

### 5.3 Cảnh báo khách dùng lẻ tháng *(luật nghiệp vụ bắt buộc)*

- **5.3.1** Hệ thống kiểm tra **khoảng thời gian sử dụng** của từng dòng cước. Nếu ngày bắt đầu không phải ngày đầu tháng, hoặc ngày kết thúc không phải ngày cuối tháng, hệ thống **phát cảnh báo**.
- **5.3.2** Cảnh báo nêu rõ: khách hàng, domain, subscription, khoảng ngày thực tế, và số tiền của dòng đó — để kế toán đối chiếu với file chi tiết của hãng xem có tính lẻ ngày (prorated) hay không.
- **5.3.3** Cảnh báo **không chặn việc chốt kỳ**, nhưng kỳ có cảnh báo chưa xử lý phải hiển thị rõ trạng thái *"Đã chốt — còn N cảnh báo chưa xem"*.
- **5.3.4** Hệ thống ghi nhận kết quả kiểm tra của kế toán (đã đối chiếu / chấp nhận / cần sửa) kèm người xử lý và thời điểm.

### 5.4 Ánh xạ dữ liệu về khách hàng

- **5.4.1** Hệ thống ánh xạ dữ liệu cước về khách hàng theo **hai lớp**: lớp chính là **mã khách hàng của CloudAZ gắn trên hồ sơ khách phía Google**; lớp dự phòng là **`domain`**.
- **5.4.2** Hệ thống hỗ trợ **một khách hàng có nhiều domain** — gộp toàn bộ về một dòng cước của khách.
- **5.4.3** Hệ thống **cảnh báo dòng không map được về khách hàng nào** thay vì bỏ qua âm thầm, và đưa vào khu vực chờ xử lý.
- **5.4.4** Hệ thống ánh xạ tiếp về **hợp đồng** và **pháp nhân xuất hóa đơn** có hiệu lực trong kỳ đó; cảnh báo khi khách đổi pháp nhân giữa các kỳ.
- **5.4.5** Bảng ánh xạ có **hiệu lực theo thời gian** — một domain chuyển chủ giữa các kỳ vẫn tra ngược đúng chủ của từng kỳ.

### 5.5 Tính cước & Sinh bảng tổng hợp

> **Đổi chủ thể (DECISION-01):** phần tính tiền do **CM** thực hiện, không phải ERP. Các yêu cầu dưới đây giữ nguyên giá trị nghiệp vụ nhưng đổi bên chịu trách nhiệm:
>
> | Yêu cầu | Bên làm sau 2026-09-09 |
> | :--- | :--- |
> | 5.5.1 bảng tổng hợp · 5.5.2 tỷ giá · 5.5.3 làm tròn nghìn đồng · 5.5.4 số của khách · 5.5.5 không chiết khấu Marketplace · 5.5.6 sửa tay có lý do · 5.5.7 xuất Excel | **CM** (đang chạy, không xây lại trên ERP) |
> | 5.5.8 trạng thái tính cước theo khách trong kỳ | **ERP** — bổ sung trạng thái *đã đẩy sang CM* và *đã sinh ĐNTT* |
>
> **5.5.9 (mới)** ERP hiển thị **kết quả đồng bộ về từ CM** theo kỳ: số ĐNTT, số tiền, trạng thái, thời điểm. Đẩy sang CM mà không nhận được kết quả về là một cảnh báo, không được coi là xong.
>
> **5.5.10 (mới)** Việc đẩy sang CM phải **chạy lại được mà không sinh trùng**. Đẩy hai lần cùng một kỳ và cùng một tên miền thì CM nhận đúng một bản. Khóa chống trùng chốt ở §6.12.

- **5.5.1** Hệ thống sinh **bảng tổng hợp chi phí GWS theo kỳ × khách hàng**, chi tiết tới từng domain và SKU.
- **5.5.2** Hệ thống áp **tỷ giá theo kỳ** và cho phép ghi đè tỷ giá riêng cho khách có thỏa thuận đặc biệt.
- **5.5.3** Hệ thống áp **quy tắc làm tròn đến hàng nghìn VND** cho số tiền cuối cùng. *(Đây là lỗi tồn đọng của CM mà kế toán đã phản ánh nhiều lần và vẫn phải sửa tay.)*
- **5.5.4** Hệ thống hiển thị **số của khách (đã bỏ Reseller margin)** dùng để tính cước, và **số gồm margin** dùng để đối chiếu invoice hãng.
- **5.5.5** Hệ thống **không áp chiết khấu và không áp promotion credit** lên các giao dịch qua Google Cloud Marketplace, theo quy tắc gốc 5.5.11 của BRD Google.
- **5.5.6** Hệ thống cho phép kế toán **sửa tay số liệu** trước khi chốt, kèm lý do bắt buộc và lưu vết.
- **5.5.7** Hệ thống xuất bảng tổng hợp ra **Excel** cho toàn bộ khách hoặc từng khách.
- **5.5.8** Hệ thống hiển thị **trạng thái tính cước theo từng khách** trong kỳ: chưa có dữ liệu / đã tính / có cảnh báo / đã chốt / đã gửi khách / đã xuất hóa đơn.

### 5.6 Đối soát & Kiểm soát chất lượng

> GWS **không có bước đối soát thủ công** (kế toán không lập bảng tính tay). Vì vậy các chốt kiểm soát dưới đây là **bù đắp bắt buộc**, không phải tùy chọn.

- **5.6.1** Hệ thống **đối chiếu tổng chi phí của kỳ với hóa đơn hãng** và cảnh báo khi lệch vượt ngưỡng cấu hình. Tổng đối chiếu phải bao gồm cả chi phí sử dụng, thuế, điều chỉnh và sai số làm tròn.

  > ⚠️ **Sửa 2026-09-09 — cách đối chiếu cũ không dùng được nữa.** Sau DECISION-02, phần ERP đẩy sang CM chỉ là dòng Usage. Kỳ 06/2026: hóa đơn hãng 178.069,30 USD, phần Usage 5.442,12 USD. Hai số này **không bao giờ khớp**, nên so tổng thẳng với hóa đơn hãng sẽ báo lệch mọi kỳ và mất tác dụng cảnh báo.
  >
  > **Thay bằng đối chiếu hai tầng:**
  >
  > | Tầng | So cái gì | Phải bằng nhau |
  > | :--- | :--- | :--- |
  > | **T1 — toàn hóa đơn** | Tổng mọi dòng BigQuery của kỳ (đủ Usage + Commitment + thuế + điều chỉnh) với số trên hóa đơn hãng | Bằng nhau trong ngưỡng Q-05. Chứng minh dữ liệu BigQuery đủ và đúng |
  > | **T2 — phần đẩy sang CM** | Tổng dòng Usage ERP đẩy sang, với tổng CM nhận được và với tổng trên các ĐNTT sinh ra | Bằng nhau tuyệt đối. Lệch một xu cũng là lỗi truyền dữ liệu |
  >
  > T1 xác nhận nguồn đúng, T2 xác nhận đường truyền không rơi dòng. Thiếu T2 thì không có cách nào biết CM nhận thiếu.
- **5.6.2** Hệ thống cảnh báo **biến động bất thường so với kỳ trước** theo từng khách: tăng/giảm vượt ngưỡng phần trăm cấu hình, khách kỳ trước có mà kỳ này mất, khách mới xuất hiện.
- **5.6.3** Hệ thống cảnh báo khi phát hiện **domain mới chưa được gán khách hàng**.
- **5.6.4** Hệ thống ghi nhận và hiển thị **các khoản điều chỉnh** do Google phát hành (sửa lượng dùng, sửa giá, bồi hoàn, vi phạm SLA…) thay vì gộp im vào tổng.
- **5.6.5** *(sửa 2026-09-09)* Trong **giai đoạn nghiệm thu**, hệ thống cho phép nhập bảng kế toán làm tay của một kỳ và **so sánh tự động** với kết quả luồng tự động, chỉ hiển thị các dòng lệch. Đây là điều kiện để kế toán ký nghiệm thu. *(Không còn là điều kiện để bỏ luồng CM — CM được giữ lại, DECISION-01.)*
- **5.6.6** Toàn bộ cảnh báo tập trung trên **một màn hình duy nhất** theo kỳ, có trạng thái xử lý — không nằm rải rác trong log.

### 5.7 Phân quyền & Nhật ký

- **5.7.1** Kế toán và Quản trị viên xem toàn bộ khách hàng; Sale chỉ xem khách thuộc quản lý của mình (ép ở tầng truy vấn).
- **5.7.2** Hệ thống ghi **nhật ký kiểm toán** cho mọi thao tác ảnh hưởng tới số tiền: sửa tay số liệu, đổi tỷ giá, xử lý dòng chờ phân loại, chốt kỳ, bỏ qua cảnh báo.
- **5.7.3** Thao tác **chốt kỳ** phải ghi tên người chốt và thời điểm; kỳ đã chốt chỉ mở lại được bởi Kế toán trưởng, có lý do.

---

### 5.8 Màn hình sinh ĐNTT *(bổ sung 2026-09-09 — PO chốt)*

Kế toán chủ động sinh ĐNTT bằng thao tác trên màn hình, **không chờ công việc tự động**.

- **5.8.1** Trên màn hình cước, cạnh nút **Đồng bộ dữ liệu từ CM** đang có, bổ sung nút **Sinh ĐNTT**.
- **5.8.2** Bấm nút mở hộp thoại yêu cầu chọn hai thứ: **khoảng thời gian** cần sinh, và **phương thức tính**.
- **5.8.3** Phương thức tính có hai lựa chọn, chạy hai đường khác nhau:

  | Phương thức | Đường chạy | Ghi chú |
  | :--- | :--- | :--- |
  | **GWS Standard** | **Giữ nguyên logic CM đang chạy** — gọi thẳng như hiện nay | Không sửa gì. Nghiệp vụ ở [BRD GWS Standard](../Gws_standard/BRD_GWS_Standard_2026-09-03.md) |
  | **GWS Flex** | Đi **luồng bốn bước §2.1**: đọc BigQuery → lọc dòng Usage → đẩy sang CM tạo dữ liệu GWS → sinh ĐNTT | Không gọi thẳng CM như Standard |

- **5.8.4** **Khoảng thời gian chọn theo ngày, nhưng hệ thống quy về trọn kỳ tháng.** Google chốt cước theo tháng, mỗi dòng dữ liệu gắn với một kỳ dạng `YYYYMM` và không cắt lẻ được. Chọn từ 15/06 đến 15/07 thì hệ thống hiểu là **kỳ 06/2026 và kỳ 07/2026, lấy trọn**.

  *Lý do không cắt lẻ ngày: số cắt lẻ không khớp hóa đơn hãng, mà hóa đơn hãng là chỗ duy nhất để giải trình khi khách thắc mắc.*

- **5.8.5** Trước khi chạy, hệ thống **hiện rõ phạm vi thật** đã quy đổi và cho **xem trước**: danh sách kỳ, số tên miền, số dòng, tổng tiền. Kế toán xác nhận rồi mới chạy.
- **5.8.6** Chạy xong, hệ thống hiển thị **kết quả theo từng kỳ**: các ĐNTT đã sinh kèm số tiền, và các dòng lỗi kèm lý do. Không có ĐNTT nào sinh ra vẫn phải báo rõ, không im lặng.
- **5.8.7** Mọi lần bấm đều **ghi nhật ký**: ai bấm, lúc nào, phạm vi nào, phương thức nào, kết quả ra sao — theo yêu cầu 5.7.2.
- **5.8.8** Khoảng thời gian chọn **không được vượt quá phạm vi dữ liệu đang có**. Chọn kỳ chưa có dữ liệu thì báo rõ kỳ nào thiếu và dừng, không sinh ĐNTT thiếu số.

> **Ba điểm chưa chốt của màn hình này** — xem Q-16, Q-17, Q-18 mục 8:
> ai được bấm nút · bấm lại cho kỳ đã có ĐNTT thì chặn hay ghi đè · nút bấm tay này và công việc tự động ngày 03 có cùng tồn tại không.

---

## 6. Giải pháp Kỹ thuật Chi tiết

### 6.1 Vì sao chọn BigQuery Channel Services Export

Ngoài lý do kiến trúc đã nêu trong `GiaiPhap_KyThuat_LayDuLieu_GWS.md` (đồng nhất với GCP và GMP), có một lý do quyết định hơn:

> **Google đã ngừng phát triển đường API báo cáo.** `CloudChannelReportsService.RunReportJob` và `fetchReportResults` **đã bị deprecated**, và tài liệu chính thống chỉ định thay thế bằng **Export Channel Services data to BigQuery**.

Nghĩa là BigQuery export không chỉ là phương án tốt hơn — nó là **đường duy nhất còn được Google hỗ trợ lâu dài** để lấy số cước reseller bằng máy.

### 6.2 Cấu hình hạ tầng

Các bước thao tác chi tiết đã có tại [setup_bigquery_export.md](../GCP/setup_bigquery_export.md) **Phần 3**. Tài liệu này chỉ bổ sung các ràng buộc bắt buộc mà file đó chưa nêu:

| Hạng mục | Ràng buộc | Hậu quả nếu sai |
| :--- | :--- | :--- |
| **Vị trí dataset** | Bắt buộc **multi-region** (`US` hoặc `EU`) | Regional chỉ có dữ liệu từ ngày bật; multi-region được hồi tố từ đầu tháng trước. Sai là mất kỳ đang chạy |
| **API cần bật** | **BigQuery Data Transfer Service API** trên project chứa dataset | Export không khởi động |
| **Quyền trên dataset** | `BigQuery Data Editor` cho `cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com` | Google không ghi được dữ liệu vào |
| **Quyền của người bật** | `Google Cloud Reseller administrator` (Partner Sales Console) **và** `Google Workspace Reseller Admin` hoặc `Billing` | Không chọn được nguồn Workspace khi bật export |
| **Quyền của ERP** | `BigQuery Data Viewer` + `BigQuery Job User` trên dataset, qua service account riêng | ERP không truy vấn được |
| **Cấm tuyệt đối** | Sửa cấu trúc bảng export · bật row-level / column-level access control trên bảng · gỡ service account của Google | Export **dừng**, và không có backfill khi bật lại |

Bảng sinh ra: **`PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`**
· Partition theo **`export_time`** · Cluster theo **`payer_billing_account_id`** · Nạp **incremental hằng ngày**.

> **Tối ưu chi phí truy vấn:** mọi truy vấn của ERP **bắt buộc** có điều kiện trên `export_time` (partition key). Truy vấn không lọc partition sẽ quét toàn bảng và chi phí tăng theo thời gian.

### 6.3 Các cột cần dùng của bảng export

| Cột | Kiểu | Dùng để làm gì |
| :--- | :--- | :--- |
| `invoice.month` | String `YYYYMM` | **Kỳ cước** — khớp trực tiếp với `billing_cycle` của module công nợ |
| `export_time` | Timestamp | Partition key; mốc nạp tăng dần (high-water mark) |
| `payer_billing_account_id` | String | Tài khoản thanh toán cha của CloudAZ — cluster key, dùng khi đối soát invoice |
| `billing_account_id` | String | Với Workspace là **Cloud Identity ID** của khách |
| `customer_name` | String | `accounts/{account}/customers/{customer}` — khóa chính khách hàng phía Google |
| **`customer_correlation_id`** | String | **Mã CRM/ERP của CloudAZ gắn trên hồ sơ khách** — khóa map chính (xem §6.5) |
| `entitlement_name` | String | `accounts/{a}/customers/{c}/entitlements/{e}` — nối sang Cloud Channel API |
| `system_labels` | Struct repeated | Chứa các nhãn Workspace (xem bảng dưới) |
| `service.id` / `service.description` | String | Dịch vụ Google báo cáo |
| `sku.id` / `sku.description` | String | SKU — dùng hiển thị, **không dùng làm luật lọc** |
| `usage_start_time` / `usage_end_time` | Timestamp | **Luật cảnh báo lẻ tháng §5.3** |
| `usage.amount_in_pricing_unit` / `usage.pricing_unit` | Numeric / String | Số lượng theo đơn vị tính giá — với gói theo chỗ ngồi là **số seat** |
| `cost` | Numeric | Chi phí CloudAZ phải trả Google, đã gồm chiết khấu đàm phán |
| `customer_cost` | Numeric | Chi phí của khách **sau khi áp `CustomerRepricingConfig`** |
| `cost_type` | String | `regular` / `tax` / `adjustment` / `rounding error` — **tách thuế và điều chỉnh khi đối soát** |
| `currency` / `currency_conversion_rate` | String / Float | Tiền tệ và tỷ giá quy đổi từ USD |
| `credits` | Struct repeated | `credits.type` gồm `RESELLER_MARGIN`, `PROMOTION`, `DISCOUNT`, `FREE_TIER`… ; `credits.amount`, `credits.customer_amount` |
| `adjustmentsInfo` | Struct repeated | `adjustment_type`: `USAGE_CORRECTION`, `PRICE_CORRECTION`, `GOODWILL`, `SLA_VIOLATION`… — phục vụ §5.6.4 |

**Nhãn Workspace trong `system_labels`:**

```
workspace.googleapis.com/domain_name         → tên miền  (khóa map dự phòng §5.4.1)
workspace.googleapis.com/subscription_id     → nối sang Reseller API  (luật lọc Commit §5.2)
workspace.googleapis.com/order_id
workspace.googleapis.com/purchase_order_id
workspace.googleapis.com/usage_type          → ứng viên phân loại Commit/Usage — CHƯA có tài liệu công bố tập giá trị
```

> ⚠️ **`usage_type` phải kiểm thực nghiệm trước khi dùng.** Google không công bố tập giá trị của nhãn này. Ngay sau khi export chạy lần đầu, chạy truy vấn khảo sát ở §6.4 để biết nhãn này thực sự nhận những giá trị nào. **Trong mọi trường hợp, luật lọc chính vẫn là `plan.planName`** — `usage_type` chỉ dùng làm lớp kiểm tra chéo.

### 6.4 Cài đặt luật §5.2 — Lọc dòng Commit

> 📌 **Các truy vấn trong mục này là KHẢO SÁT, không nằm trên luồng sinh ĐNTT.** Truy vấn ERP chạy thật để lấy dữ liệu là **§6.12.1**.

**Bước 1 — Khảo sát nhãn `usage_type` (chạy một lần sau khi có dữ liệu):**

```sql
SELECT
  (SELECT sl.value FROM UNNEST(system_labels) sl
    WHERE sl.key = 'workspace.googleapis.com/usage_type') AS usage_type,
  COUNT(*) AS so_dong,
  SUM(cost) AS tong_cost
FROM `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`
WHERE export_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 45 DAY)
  AND service.description LIKE 'Google Workspace%'
GROUP BY usage_type
ORDER BY tong_cost DESC
```

**Bước 2 — Đồng bộ bảng ánh xạ gói từ Reseller API (job hằng ngày):**

Gọi `GET /apps/reseller/v1/subscriptions?customerNamePrefix=...` (hoặc theo từng `customerId`), lưu vào ERP:

| Trường ERP | Nguồn | Ghi chú |
| :--- | :--- | :--- |
| `subscription_id` | `subscriptionId` | Khóa nối với nhãn `workspace.googleapis.com/subscription_id` |
| `customer_domain` | `customerDomain` | Đối chiếu chéo với nhãn `domain_name` |
| `plan_name` | `plan.planName` | **`FLEXIBLE` / `ANNUAL` / `ANNUAL_MONTHLY_PAY` / `ANNUAL_YEARLY_PAY`** |
| `sku_id` | `skuId` | |
| `seats_number` | `seats.numberOfSeats` | Gói cam kết |
| `seats_maximum` | `seats.maximumNumberOfSeats` | Gói Flex |
| `seats_licensed` | `seats.licensedNumberOfSeats` | Số license đang dùng |
| `status` | `status` | `ACTIVE`, … |
| `commitment_start` / `commitment_end` | `plan.commitmentInterval.startTime` / `.endTime` | Đối chiếu chéo với `usage_start_time` |
| `synced_at` | — | Thời điểm đồng bộ |

> **Lưu ý phạm vi:** Reseller API **không trả số tiền**. Vai trò duy nhất của nó ở đây là cung cấp `plan.planName`. Mọi con số tiền đều đến từ BigQuery export.

**Bước 3 — View chuẩn hóa trên BigQuery:**

```sql
CREATE OR REPLACE VIEW `PROJECT_ID.DATASET_NAME.v_gws_usage_line` AS
SELECT
  invoice.month                                   AS billing_month,
  export_time,
  payer_billing_account_id,
  billing_account_id,
  customer_name,
  customer_correlation_id,
  entitlement_name,
  service.description                             AS service_name,
  sku.id                                          AS sku_id,
  sku.description                                 AS sku_name,
  usage_start_time,
  usage_end_time,
  usage.amount_in_pricing_unit                    AS qty,
  usage.pricing_unit,
  currency,
  currency_conversion_rate,
  cost_type,
  cost,
  customer_cost,
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/domain_name')     AS domain_name,
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/subscription_id') AS subscription_id,
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/usage_type')      AS usage_type_label,
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/order_id')        AS order_id,
  IFNULL((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0)      AS credit_total,
  IFNULL((SELECT SUM(c.amount) FROM UNNEST(credits) c
            WHERE c.type = 'RESELLER_MARGIN'), 0)               AS reseller_margin,
  ARRAY(SELECT AS STRUCT a.adjustment_type, a.adjustment_description
          FROM UNNEST(adjustmentsInfo) a)                       AS adjustments
FROM `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`
WHERE service.description LIKE 'Google Workspace%'
```

**Bước 4 — Áp luật lọc trong ERP** (sau khi đã join bảng `gws_subscriptions`):

| `plan_name` | Phân loại | Hành động |
| :--- | :--- | :--- |
| `FLEXIBLE` | User / Usage | ✅ **Giữ lại, tính vào cước tháng** |
| `ANNUAL`, `ANNUAL_MONTHLY_PAY`, `ANNUAL_YEARLY_PAY` | Commit | 🚫 **Lọc bỏ**, ghi lý do `COMMIT_PLAN` |
| `NULL` (không tra được subscription) | Chưa xác định | ⏸️ **Chờ phân loại** — không tính, không bỏ (§5.2.4) |

Mỗi dòng bị loại đều lưu `exclude_reason` và `exclude_evidence` (giá trị `plan_name` căn cứ), phục vụ yêu cầu tra ngược §5.2.6.

### 6.5 Cài đặt §5.4 — Ánh xạ về khách hàng bằng `correlationId`

Cloud Channel API cho phép gắn **`correlationId`** lên hồ sơ customer — trường được mô tả chính thức là *"the external CRM ID for the customer"*. Google trả lại giá trị này trong cột `customer_correlation_id` của bảng export.

**Vì sao dùng nó thay vì chỉ map theo `domain`:** map theo domain vỡ khi khách đổi tên miền, khi một khách có nhiều domain, hoặc khi một domain chuyển chủ. `correlationId` do CloudAZ tự đặt nên không phụ thuộc những biến động đó.

**Việc cần làm một lần:** với mỗi customer trên Cloud Channel API, set `correlationId` = mã khách hàng trong ERP/CM. Sau đó ERP map theo thứ tự ưu tiên:

```
1. customer_correlation_id  → khách hàng ERP        (khóa chính, bền vững)
2. domain_name              → bảng gws_domain_map    (dự phòng, có hiệu lực theo kỳ)
3. Không khớp cả hai        → khu vực "Chờ gán khách" + cảnh báo §5.6.3
```

### 6.6 Cài đặt luật §5.3 — Cảnh báo lẻ tháng

> 📌 Truy vấn **cảnh báo**, chạy song song để soi dữ liệu — không phải truy vấn lấy dữ liệu đẩy sang CM (§6.12.1).

```sql
SELECT
  billing_month, domain_name, subscription_id, sku_name,
  DATE(usage_start_time) AS ngay_bat_dau,
  DATE(usage_end_time)   AS ngay_ket_thuc,
  qty, cost, customer_cost,
  CASE
    WHEN DATE(usage_start_time) > DATE_TRUNC(DATE(usage_start_time), MONTH)
      THEN 'BAT_DAU_GIUA_THANG'
    WHEN DATE(usage_end_time) < LAST_DAY(DATE(usage_end_time))
      THEN 'KET_THUC_GIUA_THANG'
  END AS canh_bao_le_thang
FROM `PROJECT_ID.DATASET_NAME.v_gws_usage_line`
WHERE billing_month = @billing_month
  AND export_time BETWEEN @tu_ngay AND @den_ngay
  AND ( DATE(usage_start_time) > DATE_TRUNC(DATE(usage_start_time), MONTH)
     OR DATE(usage_end_time)   < LAST_DAY(DATE(usage_end_time)) )
```

> ⚠️ **Cần hiệu chỉnh sau kỳ chạy đầu tiên.** Tài liệu Google mô tả `usage_start_time` / `usage_end_time` là *"khung giờ sử dụng"* — với GCP đây là cửa sổ theo giờ. Với gói Workspace theo chỗ ngồi, khung này nhiều khả năng theo ngày hoặc theo chu kỳ subscription, nhưng **chưa có tài liệu khẳng định**. Sau kỳ đầu, đối chiếu kết quả truy vấn với vài khách đã biết là dùng lẻ tháng để hiệu chỉnh điều kiện. Đối chiếu chéo thêm với `commitment_start` / `commitment_end` từ Reseller API.

### 6.7 Cài đặt §5.6.1 — Đối soát với invoice hãng

> 📌 Truy vấn **đối soát** (tầng T1 §5.6.1), lấy tổng toàn hóa đơn kể cả Commitment và thuế — không phải truy vấn lấy dữ liệu đẩy sang CM (§6.12.1).

Truy vấn theo đúng mẫu chính thống của Google, tổng này **đã gồm chi phí sử dụng, thuế, điều chỉnh và sai số làm tròn** nên so thẳng được với hóa đơn Google gửi về:

```sql
SELECT
  payer_billing_account_id,
  currency,
  invoice.month AS billing_month,
  SUM(cost) + SUM(IFNULL(
    (SELECT SUM(c.amount) FROM UNNEST(credits) AS c), 0)) AS tong_doi_soat
FROM `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`
WHERE export_time BETWEEN TIMESTAMP(@tu_ngay) AND TIMESTAMP(@den_ngay)
GROUP BY payer_billing_account_id, currency, invoice.month
```

Kế toán nhập số tổng trên hóa đơn hãng vào ERP; hệ thống so và cảnh báo khi lệch vượt ngưỡng cấu hình.

**Tách thuế và điều chỉnh** khi cần giải thích chênh lệch:

```sql
SELECT cost_type, SUM(cost) AS tong
FROM `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`
WHERE invoice.month = @billing_month
  AND export_time BETWEEN TIMESTAMP(@tu_ngay) AND TIMESTAMP(@den_ngay)
GROUP BY cost_type
```

### 6.8 Mô hình dữ liệu trong ERP

| Bảng | Nội dung | Nguồn |
| :--- | :--- | :--- |
| `gws_billing_imports` | Mỗi lần kéo dữ liệu: kỳ, mốc `export_time` cao nhất đã nạp, số dòng, số tiền, trạng thái, lỗi | Job kéo |
| `gws_usage_lines` | Dòng cước đã chuẩn hóa: kỳ, domain, subscription, SKU, khoảng thời gian, số lượng, `cost`, `customer_cost`, margin, credit, `cost_type`, phân loại Flex/Commit, `exclude_reason` | BigQuery |
| `gws_subscriptions` | Ánh xạ `subscription_id → plan_name`, seat, trạng thái, khoảng cam kết | Reseller API |
| `gws_customers_link` | `customer_name` ↔ `correlation_id` ↔ khách hàng ERP | Cloud Channel API |
| `gws_domain_map` | `domain → khách hàng → hợp đồng → pháp nhân`, **có hiệu lực theo kỳ** | Nhập tay / kế thừa CM |
| `gws_billing_summary` | Tổng hợp theo kỳ × tên miền × order: số USD **đã gộp nhóm** đúng dạng đẩy sang CM, trạng thái đẩy. *(Tỷ giá và VND đã làm tròn nằm ở CM — DECISION-01)* | Tính toán |
| `gws_cm_push_log` *(mới)* | Mỗi lần đẩy sang CM: kỳ, khóa chống trùng, số dòng, tổng tiền gửi đi, mã phản hồi, thời điểm, người kích hoạt | Job `gws_cm_push` |
| `gws_cm_results` *(mới)* | Kết quả CM trả về: số ĐNTT, số tiền CM tính, trạng thái, thời điểm đồng bộ | Job `gws_cm_sync` |
| `gws_anomalies` | Cảnh báo: loại, dòng liên quan, mức độ, người xử lý, kết quả | Tính toán |
| `gws_vendor_invoices` | Hóa đơn gốc của hãng theo kỳ: số tiền, file PDF/CSV lưu trữ | Nhập tay + upload |
| `gws_period_close` | Chốt kỳ: người chốt, thời điểm, số cảnh báo còn mở, lý do mở lại | Thao tác |

### 6.9 Job nền

| Job | Giờ chạy đề xuất | Việc làm |
| :--- | :--- | :--- |
| `gws_export_pull` | **06:00 hằng ngày** | Kéo incremental từ BigQuery theo `export_time > high-water mark` của lần chạy trước, ghi `gws_usage_lines` |
| `gws_subscription_sync` | **05:30 hằng ngày** *(chạy trước `gws_export_pull`)* | Đồng bộ `plan.planName` và seat từ Reseller API |
| `gws_customer_sync` | **05:30 hằng ngày** | Đồng bộ customer + `correlationId` từ Cloud Channel API |
| `gws_export_health` | **mỗi 6 giờ** | Cảnh báo Quản trị viên nếu quá **36 giờ** không có `export_time` mới (§5.1.6) |
| `gws_period_calc` | **03:00 ngày 03 hằng tháng** | Chốt số kỳ trước: áp luật lọc, dựng tập dòng Usage của kỳ, sinh toàn bộ cảnh báo. *(Tỷ giá và làm tròn chuyển sang CM — DECISION-01)* |
| `gws_cm_push` *(mới)* | **Kế tiếp `gws_period_calc`** | Dựng JSON §6.12, gọi API tạo dữ liệu GWS trên CM rồi gọi API sinh ĐNTT. Chạy theo lô, có khóa chống trùng |
| `gws_cm_sync` *(mới)* | **Mỗi 30 phút trong 24h sau khi đẩy** | Đồng bộ kết quả từ CM về: số ĐNTT, số tiền, trạng thái. Cảnh báo dòng đã đẩy quá 24h chưa có kết quả |

> ⚠️ **Ba job cuối phụ thuộc Q-18.** Sau khi có màn hình sinh ĐNTT (§5.8), kế toán chủ động bấm theo khoảng thời gian tự chọn. Chưa chốt được `gws_period_calc`, `gws_cm_push`, `gws_cm_sync` còn chạy tự động hay chỉ chạy khi có người bấm. Giữ cả hai đường mà không có khóa chống trùng chung là nguy cơ hai ĐNTT cho cùng một kỳ.

**Yêu cầu chung cho mọi job:** idempotent (chạy lại cùng ngày không sai số) · chạy dưới advisory lock để chống chạy trùng khi nhiều instance · múi giờ `Asia/Ho_Chi_Minh` · giờ chạy đọc từ bảng cấu hình, hot-reload không cần triển khai lại — theo đúng khuôn job nền đã dùng ở module công nợ.

**Thứ tự bắt buộc:** đồng bộ subscription & customer → kéo dữ liệu cước → tính kỳ. Chạy sai thứ tự thì luật lọc Commit thiếu căn cứ và dòng rơi hết vào "Chờ phân loại".

### 6.10 Xử lý lỗi

| Tình huống | Xử lý |
| :--- | :--- |
| BigQuery lỗi tạm thời / timeout | Thử lại 3 lần, backoff 2s → 4s → 8s. Hết lượt thì giữ nguyên high-water mark, cảnh báo Quản trị viên, lần chạy sau tự bù |
| BigQuery lỗi quyền / bảng không tồn tại | **Không thử lại** — báo Quản trị viên ngay, nêu rõ cần kiểm tra quyền hay export đã dừng |
| Quá 36 giờ không có dữ liệu mới | Cảnh báo mức cao: nhiều khả năng export đã chết vì R-03 |
| Reseller API lỗi | Job tính kỳ vẫn chạy; dòng thiếu `plan_name` rơi vào **"Chờ phân loại"**, không tự lọc và không tự tính |
| Dòng không map được khách | Vào khu vực "Chờ gán khách", đếm vào cảnh báo của kỳ, không chặn chốt kỳ nhưng hiển thị rõ |
| Tổng lệch invoice hãng vượt ngưỡng | Cảnh báo mức cao, hiển thị bảng tách theo `cost_type` và `adjustmentsInfo` để truy nguyên |
| **API CM lỗi tạm thời / timeout** | Thử lại 3 lần, backoff 2s → 4s → 8s. Hết lượt thì giữ nguyên trạng thái *chưa đẩy*, cảnh báo Quản trị viên. Lần chạy sau đẩy lại với cùng khóa chống trùng §6.12, không tạo bản ghi mới |
| **CM nhận dữ liệu nhưng không sinh được ĐNTT** | Đánh dấu kỳ ở trạng thái *đã đẩy, chưa có ĐNTT*, cảnh báo kế toán. **Không tự đẩy lại dữ liệu** — đẩy lại khi CM đã nhận là nguy cơ tính trùng |
| **Tổng ERP đẩy đi khác tổng CM nhận** | Cảnh báo mức cao ngay, chặn bước sinh ĐNTT cho tới khi kế toán xử lý. Đây là tầng T2 của §5.6.1 |
| **Quá 24h chưa đồng bộ được kết quả về** | Cảnh báo Quản trị viên. Kỳ hiển thị *đang chờ kết quả từ CM*, không được coi là đã xong |

### 6.11 Bàn giao sang CM và module Công nợ

> **Sửa 2026-09-09 (DECISION-01).** Đầu ra của phân hệ này **không còn là bảng tổng hợp do ERP tính**, mà là **tập dòng Usage đã lọc, đẩy sang CM**. CM tính tiền và sinh ĐNTT; ERP đồng bộ kết quả về rồi mới bàn giao tiếp.

Đầu ra kỹ thuật là JSON theo hợp đồng dữ liệu §6.12. Trường `billing_month` (`YYYYMM`) chuyển đổi trực tiếp sang `billing_cycle` (`MM/YYYY`) của module Thu hồi Công nợ.

### 6.12 Hợp đồng dữ liệu ERP → CM *(bổ sung 2026-09-09)*

**Cấu trúc 11 cột** đã chốt, giữ đúng thứ tự và tên cột của CSV hóa đơn kế toán đang dùng, để CM không phải đổi cách đọc:

| # | Trường JSON | Nguồn BigQuery | Ví dụ |
| :--- | :--- | :--- | :--- |
| 1 | `domain_name` | `system_labels['workspace.googleapis.com/domain_name']` | `5starsproxy.vn` |
| 2 | `subscription` | `sku.description` | `Google Workspace Business Starter` |
| 3 | `description` | `system_labels['…/usage_type']`, dự phòng `cost_type` | `FLEXIBLE_SEATS_ITEM` |
| 4 | `order_name` | `system_labels['…/order_id']` | `10905033293-09` |
| 5 | `start_date` | `MIN(DATE(usage_start_time))` | `2026-06-01` |
| 6 | `end_date` | `MAX(DATE(usage_end_time))` | `2026-06-30` |
| 7 | `quantity` | `MAX(usage.amount)` — **xem cảnh báo bên dưới** | `2` |
| 8 | `po_number` | `system_labels['…/purchase_order_id']` | *(rỗng)* |
| 9 | `amount` | `ROUND(SUM(customer_cost), 2)` | `5.88` |
| 10 | `customer_id` | `billing_account_id` | `C03w8fq94` |
| 11 | `sku_id` | `sku.id` | `1010020027` |

**Bốn ràng buộc bắt buộc khi dựng JSON:**

1. **Gom nhóm trước khi gửi.** BigQuery lưu chi tiết từng ngày cho gói Flex, có cặp dòng tăng và giảm. Phải `GROUP BY domain_name, order_name, sku_id` và `SUM(customer_cost)` mới ra đúng một dòng như CSV. Ví dụ `5starsproxy.vn` có hơn 60 dòng trong BigQuery, gộp lại thành **5,88 USD** đúng bằng CSV.
2. **Dùng `customer_cost`, không dùng `cost`.** Hiện hai cột bằng nhau vì CloudAZ chưa cấu hình giá bán riêng. Khi bật cấu hình đó, `customer_cost` mới là giá bán cho khách. Dùng sẵn từ đầu để khỏi sửa code.
3. **Khóa chống trùng** cho yêu cầu 5.5.10 là bộ ba `billing_month + domain_name + order_name`. Đẩy lại cùng bộ khóa thì CM cập nhật, không tạo thêm.
4. **Lọc partition.** Mọi truy vấn phải có điều kiện trên `export_time`, theo yêu cầu phi chức năng mục 7. Truy vấn chỉ lọc `invoice.month` sẽ quét toàn bảng và đắt dần theo thời gian.

#### 6.12.1 Truy vấn chuẩn — lấy dòng Usage GWS Flex *(truy vấn DUY NHẤT của luồng sinh ĐNTT)*

Đây là câu lệnh ERP chạy để lấy dữ liệu đẩy sang CM. Mọi truy vấn khác trong tài liệu này là **khảo sát hoặc đối soát**, không nằm trên luồng sinh ĐNTT.

```sql
-- ERP → BigQuery: dòng Usage GWS Flex của một kỳ, gom đúng dạng 11 cột §6.12
-- Tham số: @billing_month 'YYYYMM' · @export_from / @export_to (lọc partition, BẮT BUỘC)
SELECT
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/domain_name')          AS domain_name,
  sku.description                                                    AS subscription,
  COALESCE(
    (SELECT sl.value FROM UNNEST(system_labels) sl
       WHERE sl.key = 'workspace.googleapis.com/usage_type'),
    cost_type
  )                                                                  AS description,
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/order_id')             AS order_name,
  MIN(DATE(usage_start_time))                                        AS start_date,
  MAX(DATE(usage_end_time))                                          AS end_date,
  MAX(usage.amount)                                                  AS quantity,
  (SELECT sl.value FROM UNNEST(system_labels) sl
     WHERE sl.key = 'workspace.googleapis.com/purchase_order_id')    AS po_number,
  ROUND(SUM(customer_cost), 2)                                       AS amount,
  billing_account_id                                                 AS customer_id,
  sku.id                                                             AS sku_id,
  invoice.month                                                      AS billing_month,
  currency
FROM `PROJECT_ID.DATASET_NAME.reseller_billing_detailed_export_v1`
WHERE invoice.month = @billing_month
  AND export_time BETWEEN TIMESTAMP(@export_from) AND TIMESTAMP(@export_to)
  AND service.description LIKE 'Google Workspace%'
  AND cost_type = 'regular'
  AND LOWER(sku.description) != 'tax'
  AND (SELECT sl.value FROM UNNEST(system_labels) sl
         WHERE sl.key = 'workspace.googleapis.com/usage_type') = 'FLEXIBLE_SEATS_ITEM'
GROUP BY
  domain_name, subscription, description, order_name,
  po_number, customer_id, sku_id, billing_month, currency
ORDER BY domain_name, start_date
```

**Năm chỗ trong câu lệnh này đang chờ quyết định — không phải chi tiết kỹ thuật, là luật nghiệp vụ:**

| Dòng trong câu lệnh | Đang làm gì | Chờ câu hỏi |
| :--- | :--- | :--- |
| `usage_type = 'FLEXIBLE_SEATS_ITEM'` | Lọc Flex bằng **nhãn Google chưa công bố**, trong khi §5.2.3 bắt buộc dùng loại gói từ Reseller API | **Q-19** |
| `cost_type = 'regular'` | **Bỏ toàn bộ dòng điều chỉnh**, ngược với yêu cầu 5.6.4 | **Q-20** |
| `MAX(usage.amount)` | Lấy số chỗ ngồi cao nhất trong tháng, chưa xác minh CSV lấy số cao nhất hay số cuối kỳ | **Q-15** |
| Không có `HAVING SUM(customer_cost) > 0` | **Giữ cả dòng tiền bằng 0** — kỳ 06/2026 có 16 tên miền như vậy | **Q-14** |
| `billing_account_id AS customer_id` | Trả mã định danh Google, chưa phải mã khách của CloudAZ | **Q-12** |

> **Đối chiếu đã chạy trên dữ liệu thật:** với `@billing_month = '202606'`, câu lệnh này (bỏ điều kiện `usage_type`) tái tạo đúng 701 dòng và tổng **178.069,30 USD** của hóa đơn `5610176163`. Giữ điều kiện `usage_type` thì còn **79 dòng / 5.442,12 USD** — đúng phần Usage trên CSV kế toán tải tay.
>
> **Kiểm chứng gom nhóm:** `5starsproxy.vn` order `10905033293-09` có hơn 60 dòng ngày trong BigQuery, gom lại ra **5,88 USD**, khớp một dòng duy nhất trên CSV.
>
> ⚠️ **Không bỏ `export_time`.** Bảng partition theo cột này. Chỉ lọc `invoice.month` là quét toàn bảng, chi phí tăng dần theo thời gian — vi phạm yêu cầu phi chức năng mục 7.

> ⚠️ **Cột `quantity` chưa chốt được luật (Q-04 mở rộng).** Với dòng Commitment thì `MAX(usage.amount)` ra đúng. Với dòng Usage/Flex số chỗ ngồi đổi hằng ngày, chưa xác minh được CSV lấy **số cao nhất trong tháng** hay **số ngày cuối kỳ**. Phải spot-check thêm vài tên miền Flex phức tạp trước khi chốt. Sai cột này không sai tiền, nhưng sai con số khách nhìn thấy trên ĐNTT.

Sau khi kỳ được chốt và khách xác nhận, luồng đi tiếp theo đúng [BRD GWS Standard](../Gws_standard/BRD_GWS_Standard_2026-09-03.md): sinh ĐNTT → đóng dấu đỏ → phát bản cứng → Ngày X → nhắc nợ → tất toán.

---

## 7. Yêu cầu Phi chức năng

| Nhóm | Yêu cầu |
| :--- | :--- |
| **Hiệu năng** | Job kéo incremental hằng ngày < 5 phút · Sinh bảng tổng hợp một kỳ < 10 phút · Màn hình danh sách cước (30 dòng) < 500ms |
| **Chi phí truy vấn** | Mọi truy vấn BigQuery **bắt buộc lọc theo `export_time`** (partition key). Cấm truy vấn không lọc partition |
| **Tính đúng đắn** | Job idempotent, chạy lại không sai số. Kéo incremental theo high-water mark, không phụ thuộc thời điểm chạy |
| **Khả năng truy vết** | Mọi dòng trong bảng tổng hợp truy ngược được về dòng gốc trong export; mọi dòng bị lọc bỏ có lý do và bằng chứng |
| **Lưu trữ** | Dữ liệu cước và hóa đơn gốc của hãng giữ theo vòng đời hợp đồng + 5 năm, khớp thời hiệu khởi kiện hợp đồng thương mại |
| **Giám sát** | Cảnh báo Quản trị viên khi: export ngưng > 36 giờ · job không chạy đúng lịch · tổng lệch invoice hãng vượt ngưỡng · số dòng "Chờ phân loại" vượt ngưỡng |
| **Bảo mật** | Service account của ERP chỉ có quyền đọc dataset. Không cấp quyền sửa. Không log nội dung chứa dữ liệu khách hàng |

---

## 8. Câu hỏi còn Mở

> 📋 **Sổ câu hỏi tổng hợp**: các câu hỏi dưới đây đã được gom vào [`CauHoi_CanGiaiDap_2026-09-03.md`](../CauHoi_CanGiaiDap_2026-09-03.md) — khử trùng lặp với các BRD khác, gắn người trả lời và mức độ ưu tiên. **Khi có câu trả lời, cập nhật ở cả hai nơi.**

| Mã | Vấn đề cần xác nhận | Người trả lời | Trạng thái |
| :--- | :--- | :--- | :--- |
| Q-01 | **Quyền Reseller Admin và quyền bật export đã có chưa?** Đây là điều kiện chặn triển khai (D-01) | IT / Partner Admin | Chờ xác nhận |
| Q-02 | **Kênh SFTP `partnerupload.google.com` có thật sự được cấp cho tài khoản partner của CloudAZ không?** Không tìm thấy tài liệu chính thống nào của Google Workspace/Channel Services xác nhận (R-02) | Partner Manager của Google | Chờ xác nhận |
| Q-03 | Nhãn `workspace.googleapis.com/usage_type` nhận những giá trị nào trong dữ liệu thật của CloudAZ? | Đội Tech — chạy truy vấn §6.4 sau khi bật export | Chờ có dữ liệu |
| Q-04 | `usage_start_time` / `usage_end_time` với gói Workspace theo chỗ ngồi có phản ánh đúng ngày kích hoạt/hủy của khách không? | Đội Tech — đối chiếu §6.6 | Chờ có dữ liệu |
| Q-05 | **Ngưỡng lệch cho phép** khi đối soát tổng với invoice hãng là bao nhiêu? | Kế toán trưởng | Chờ xác nhận |
| Q-06 | **Ngưỡng biến động bất thường** so với kỳ trước (§5.6.2) — bao nhiêu phần trăm thì cảnh báo? | Kế toán | Chờ xác nhận |
| Q-07 | Có dùng **`CustomerRepricingConfig`** của Google để Google tính sẵn `customer_cost`, hay ERP tự tính giá bán theo hợp đồng? Ảnh hưởng lớn tới thiết kế phần tính cước | Kế toán trưởng / Đội Tech | Chờ xác nhận |
| Q-08 | Ai chịu trách nhiệm **set `correlationId`** cho toàn bộ customer trên Cloud Channel API, và mã dùng là mã khách hàng của ERP hay của CM? | Admin / Đội Tech | Chờ xác nhận |
| ~~Q-09~~ | ~~**Thời gian chạy song song** với CM là bao lâu trước khi bỏ hẳn luồng cũ?~~ | PO / Kế toán | ❌ **Không còn áp dụng** — CM được giữ lại (DECISION-01), không có bước bỏ luồng cũ |
| Q-10 | GWS Flex có bị ảnh hưởng bởi quy tắc **discount theo năm hợp đồng** (năm 1 / năm 2 "F2") như GCP không? | Kế toán / Sale | Chờ xác nhận |
| Q-11 | Khi khách có cả GWS Flex và GWS Standard trên cùng domain, bảng tổng hợp gửi khách **tách hai dòng hay hai bảng riêng**? Kỳ 06/2026 có **13 tên miền** rơi vào trường hợp này | Kế toán | Chờ xác nhận |
| **Q-12** 🔴 | **Việc quy tên miền về khách hàng và đổi tiền sang VND do CM làm hay ERP làm?** Nếu CM đã có sẵn bảng khách và tỷ giá thì ERP chỉ gửi tên miền kèm số USD. Nếu CM đòi ERP gửi kèm mã khách và số VND thì ERP phải tự nuôi bảng ánh xạ tên miền có hiệu lực theo kỳ — **một khối việc đáng kể** | PO / Đội Tech CM | **Chặn thiết kế** — chưa trả lời thì chưa chốt được §6.12 và mô hình dữ liệu §6.8 |
| **Q-13** | **Dòng thuế trên hóa đơn 06/2026 là 17.798,53 USD, trong khi 10% của phần chi tiết là 16.027,08 USD — lệch 1.771,45 USD.** Thuế tính trên căn cứ nào? | Kế toán | Chờ xác nhận |
| **Q-14** | **16 tên miền có dòng Usage nhưng số tiền bằng 0** trong kỳ 06/2026. Có đẩy sang CM để khách thấy dòng 0 đồng, hay bỏ hẳn? | Kế toán | Chờ xác nhận |
| **Q-15** | **Cột `quantity` cho dòng Flex lấy số cao nhất trong tháng hay số ngày cuối kỳ?** Sai không ảnh hưởng tiền nhưng sai con số khách nhìn thấy trên ĐNTT | Đội Tech — spot-check §6.12 | Chờ đối chiếu |
| **Q-16** | **Ai được bấm nút Sinh ĐNTT** (§5.8)? Kế toán viên hay chỉ Kế toán trưởng | Kế toán trưởng | Chờ xác nhận |
| **Q-17** 🔴 | **Bấm lại cho kỳ đã có ĐNTT thì chặn, ghi đè, hay sinh thêm bản mới?** Đây là chỗ dễ ra hai ĐNTT cho cùng một kỳ | Kế toán trưởng | **Chặn thiết kế** §5.8 |
| **Q-18** 🔴 | **Nút bấm tay (§5.8) và công việc tự động `gws_period_calc` ngày 03 (§6.9) có cùng tồn tại không?** Hai đường cùng sinh một thứ là nguy cơ trùng. Ba hướng: bỏ công việc tự động · giữ tự động và nút chỉ để chạy lại · giữ cả hai với khóa chống trùng chung | PO / Kế toán trưởng | **Chặn thiết kế** §5.8 và §6.9 |

### 8.1 Câu hỏi về luồng lấy dữ liệu → sinh ĐNTT *(bổ sung 2026-09-09)*

| Mã | Vấn đề cần xác nhận | Người trả lời | Trạng thái |
| :--- | :--- | :--- | :--- |
| **Q-19** 🔴 | **Luật lọc dòng Usage chạy bằng căn cứ nào trong giai đoạn đầu?** §5.2.3 bắt buộc dùng loại gói từ Reseller API và **cấm** suy từ nhãn `usage_type`, nhưng bản thử nghiệm đang lọc bằng đúng nhãn đó và quyền gọi Reseller API (D-05) **chưa có**. Hai hướng: chạy tạm bằng nhãn và chấp nhận rủi ro phân loại sai · chờ có quyền rồi mới chạy thật | PO / Kế toán trưởng | **Chặn triển khai** — quyết định này quyết luôn lộ trình đợt 1 |
| **Q-20** 🔴 | **Dòng điều chỉnh đang bị bỏ khỏi phạm vi.** Truy vấn hiện lọc `cost_type = 'regular'`, tức bỏ hết dòng `adjustment` (Google sửa lượng dùng, sửa giá, bồi hoàn, vi phạm SLA) và dòng `tax`. Điều chỉnh của kỳ trước tính vào đâu: kỳ phát sinh hay kỳ hiện tại? | Kế toán trưởng | **Chặn thiết kế** §6.12 — mâu thuẫn với yêu cầu 5.6.4 |
| **Q-21** 🔴 | **Dữ liệu đổi sau khi đã sinh ĐNTT.** Google đẩy dữ liệu hằng ngày và có thể thêm dòng cho kỳ cũ; bấm sinh ngày 03 và ngày 20 có thể ra hai số khác nhau cho cùng kỳ. Chênh lệch phát sinh sau khi đã gửi khách thì **đưa vào kỳ kế tiếp** hay **sinh lại kỳ cũ**? | Kế toán trưởng | Chờ xác nhận — gắn với Q-17 |
| **Q-22** | **Tên miền chưa có khách hàng trong CM.** Kỳ 06/2026 có tên miền mới xuất hiện. Khi đẩy sang mà CM không nhận ra khách: **báo lỗi và dừng cả lô** hay **bỏ qua dòng đó và vẫn sinh cho phần còn lại**? | Kế toán | Chờ xác nhận — gắn với yêu cầu 5.4.3 |
| **Q-23** 🔴 | **Một ĐNTT tính theo đơn vị nào** — theo khách hàng hay theo tên miền? Khách có nhiều tên miền thì gộp một hay tách nhiều. Ảnh hưởng trực tiếp cấu trúc dữ liệu §6.12 | Kế toán trưởng | **Chặn thiết kế** §6.12 |
| **Q-24** | **Chạy nửa chừng thì xử lý ra sao?** Đẩy 53 tên miền, CM nhận 30 và lỗi 23: sinh ĐNTT cho 30 cái đã nhận, hay hủy hết và làm lại từ đầu? *Đề xuất BA: hủy hết — sinh một phần rồi bấm lại là đường ngắn nhất tới tính trùng* | PO / Kế toán trưởng | Chờ xác nhận — gắn với §6.10 |

---

## 9. Lộ trình Triển khai

| Đợt | Nội dung | Điều kiện hoàn thành |
| :--- | :--- | :--- |
| **0 — Hạ tầng** *(làm sớm nhất có thể)* | Tạo project + dataset **multi-region**, cấp quyền service account của Google, bật export trên Partner Sales Console | Bảng `reseller_billing_detailed_export_v1` xuất hiện và có dữ liệu |
| **1 — Khảo sát dữ liệu** | Chạy truy vấn §6.4 và §6.6 trên dữ liệu thật; chốt luật phân loại Commit và luật cảnh báo lẻ tháng | Trả lời được Q-03, Q-04 |
| **2 — Nền dữ liệu** | Migration bảng ERP, job đồng bộ subscription + customer, set `correlationId`, dựng `gws_domain_map` | Map được ≥ 95% dòng về khách hàng |
| **3 — Kéo & chuẩn hóa** | View BigQuery, job kéo incremental, job giám sát sức khỏe export | Kéo đủ một kỳ, số dòng khớp với CSV tải tay |
| **4 — Áp luật lọc & cảnh báo** | Lọc dòng Usage, màn hình cảnh báo lẻ tháng và chờ phân loại | Tập dòng Usage của một kỳ khớp phần Usage trên CSV kế toán tải tay |
| **5 — Tích hợp CM** *(thay "Chạy song song")* | Dựng JSON §6.12, gọi API tạo dữ liệu GWS và API sinh ĐNTT, đồng bộ kết quả về, khóa chống trùng | Đẩy một kỳ thật: tổng ERP đẩy đi bằng tổng CM nhận bằng tổng trên ĐNTT (tầng T2 §5.6.1). Đẩy lại lần hai không sinh bản ghi trùng |
| **6 — Nghiệm thu** *(thay "Chuyển đổi")* | So kết quả ĐNTT do luồng tự động sinh với kỳ kế toán làm tay trước đó | Đủ số kỳ liên tiếp không lệch theo mức kế toán chấp nhận, kế toán ký nghiệm thu. **CM giữ nguyên vai trò** — không có bước bỏ CM |

> **Ưu tiên tổng thể vẫn là 3/3** như đánh giá trong `GiaiPhap_KyThuat_LayDuLieu_GWS.md` — thời gian tổn hao chính (~1,5 ngày/tháng) nằm ở GCP và GMP. **Ngoại lệ duy nhất là Đợt 0**: việc bật export nên làm ngay cùng lúc với GCP, vì dataset multi-region chỉ được hồi tố dữ liệu từ đầu tháng trước — chậm một tháng là mất một tháng dữ liệu, không có cách vá.

---

## 10. Tài liệu Tham chiếu

### 10.1 Tài liệu nội bộ

| Tài liệu | Nội dung |
| :--- | :--- |
| [QuyTrinh_LayHoaDon_GWS.md](QuyTrinh_LayHoaDon_GWS.md) | Quy trình AS-IS trên Admin Console và Partner Sales Console |
| [GiaiPhap_KyThuat_LayDuLieu_GWS.md](GiaiPhap_KyThuat_LayDuLieu_GWS.md) | Hai luật nghiệp vụ bắt buộc, hai phương án TO-BE |
| [BRD Tính cước Google](../Google/BRD_TinhCuoc_Google_2026-09-03.md) | Nghiệp vụ gốc từ phỏng vấn kế toán — mục 5.1.7, 5.4, 5.5, 5.6 |
| [setup_bigquery_export.md](../GCP/setup_bigquery_export.md) | Hướng dẫn cấu hình export, Phần 3 dành cho GWS |
| [BRD GWS Standard](../Gws_standard/BRD_GWS_Standard_2026-09-03.md) | Luồng công nợ nhận đầu ra của phân hệ này |

### 10.2 Tài liệu chính thống Google *(tra cứu 2026-09-03)*

| Nội dung | Đường dẫn |
| :--- | :--- |
| Cấu hình export, quyền, vị trí dataset, giới hạn, lược đồ bảng | https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery |
| Truy vấn mẫu, cách đọc `system_labels`, đối soát invoice | https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries |
| Khái niệm account / customer / entitlement / offer | https://docs.cloud.google.com/channel/docs/concepts |
| Sản phẩm, SKU và các loại gói Workspace | https://docs.cloud.google.com/channel/docs/concepts/workspace/products-skus |
| Ghi chú deprecated của `CloudChannelReportsService` | https://docs.cloud.google.com/channel/docs/reference/rpc/google.cloud.channel.v1 |
| `plan.planName`, seat, `commitmentInterval` — Reseller API | https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions |
| `correlationId` trên hồ sơ customer | https://docs.cloud.google.com/channel/docs/reference/rest/v1alpha1/accounts.customers |
| Xử lý sự cố export | https://docs.cloud.google.com/channel/docs/troubleshoot/troubleshoot-exports |
| Tải hóa đơn tháng, giới hạn lưu trữ 12 tháng | https://support.google.com/a/answer/6271108?hl=en |
