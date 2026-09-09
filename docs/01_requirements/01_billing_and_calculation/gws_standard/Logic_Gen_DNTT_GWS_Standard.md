# Logic gen DNTT GWS Standard từ hệ thống CM

> Nguồn rà soát: `C:\Users\thanh\Desktop\ERP_Cloudaz\ERP_ClouAZ_Project\CloudAZ-CM-Backend`
>
> Ngày ghi nhận: 2026-09-06

## 1. API kích hoạt gen DNTT

Luồng gen Đề nghị thanh toán (DNTT) được kích hoạt qua API:

```http
POST /api/payment-request/generate
```

Route nằm tại:

```text
app/routes/paymentRequest.route.js
```

Service xử lý chính nằm tại:

```text
app/services/paymentRequest.service.js
```

Input chính của API:

| Trường | Ý nghĩa |
| --- | --- |
| `calculationIds` | Danh sách phương thức tính cần chạy |
| `productId` | Sản phẩm cần gen DNTT |
| `startDate` | Ngày bắt đầu kỳ lọc, format `YYYY-MM-DD` |
| `endDate` | Ngày kết thúc kỳ lọc, format `YYYY-MM-DD` |
| `customers` | Danh sách khách hàng cần lọc, nếu có |

Với mỗi `calculationId`, hệ thống lấy bản ghi `calculation`, đọc `calculation.functionName`, rồi gọi function tương ứng trong:

```text
app/calculations/index.js
```

Mapping cho GWS Standard:

```js
GWS_STANDARD: "calculateGwsStandard"
```

Function xử lý:

```text
app/calculations/calculateGwsStandard.js
```

## 2. Điều kiện lấy hợp đồng để tính GWS Standard

File xử lý:

```text
app/calculations/calculateGwsStandard.js
```

Hệ thống lấy danh sách hợp đồng thỏa các điều kiện:

| Điều kiện | Mô tả |
| --- | --- |
| `productId` | Trùng sản phẩm được truyền vào API |
| `status = 1` | Hợp đồng đang hoạt động |
| `deleted = false` | Chưa bị xóa mềm |
| `legalEntityId` tồn tại | Hợp đồng phải có pháp nhân |
| `customerId in customers` | Chỉ áp dụng nếu input có truyền danh sách khách hàng |
| Có kỳ thanh toán trong khoảng `startDate` - `endDate` | Dựa trên `sale_payment_term.payment_term`, format `DD/MM/YYYY` |
| Có hồ sơ pháp lý hợp lệ | `legal.document_type` là hợp đồng, phụ lục hoặc thỏa thuận chuyển giao |

Kỳ thanh toán được convert từ chuỗi `DD/MM/YYYY` sang date bằng `$dateFromString`, sau đó lọc trong khoảng:

```js
payment_term_date >= startDate
payment_term_date <= endDate
```

## 3. Cách gom dữ liệu để gen DNTT

Sau khi lấy được hợp đồng:

1. Lấy toàn bộ kỳ thanh toán từ `sale_payment_term`.
2. Loại trùng theo trường `payment_term`.
3. Chỉ giữ các kỳ thanh toán nằm trong khoảng `startDate` - `endDate`.
4. Với từng kỳ thanh toán, lấy các hợp đồng có cùng `payment_term`.
5. Group các hợp đồng theo `legalEntityId`.
6. Mỗi nhóm `legalEntityId` trong một kỳ thanh toán sẽ sinh một DNTT.

Nói cách khác:

```text
1 DNTT = 1 kỳ thanh toán + 1 pháp nhân + nhiều hợp đồng cùng kỳ/pháp nhân nếu có
```

## 4. Công thức tính tiền GWS Standard

GWS Standard không đọc file Excel GWS Data để tính tiền.

Số tiền DNTT được tính bằng tổng `value_of_payment_term` của các hợp đồng trong cùng nhóm:

```js
priceCalculated = sum(contract.sale_payment_term.value_of_payment_term)
```

Trong code:

```js
const priceCalculated = contracts.reduce((price, contract) => {
  const salePayment = contract.sale_payment_term.find(
    el => el.payment_term === paymentTerm.payment_term,
  );
  return price + salePayment.value_of_payment_term;
}, 0);
```

Kết quả hiển thị:

| Trường | Cách tính |
| --- | --- |
| `priceCalculated` | Tổng số tiền gốc dạng number |
| `price` | `priceCalculated` format dấu phẩy và hậu tố `VNĐ` |
| `price_text` | `priceCalculated` đổi sang chữ |

## 5. Logic lấy thông tin pháp lý để fill DNTT

Trong mỗi nhóm hợp đồng:

1. Tìm hợp đồng có `createdDate` mới nhất.
2. Lấy phần tử đầu tiên trong mảng `legal` của hợp đồng mới nhất đó.
3. Nếu thiếu `legal`, `contract_code` hoặc `sign_date` thì báo lỗi không tìm thấy thông tin pháp lý.
4. Lấy `legalEntity` theo `latestContract.legalEntityId`.
5. Xác định `period` bằng vị trí của kỳ thanh toán trong `latestContract.sale_payment_term`, sau đó cộng 1.
6. Lấy tên loại hồ sơ pháp lý qua `legalUtils.getLegalDocumentTypeName(legal.document_type)`.

Các trường được fill vào template:

| Field template | Nguồn / cách tính |
| --- | --- |
| `payment_term` | `paymentTerm.payment_term` trừ 1 ngày, format `DD/MM/YYYY` |
| `price` | Số tiền đã format `VNĐ` |
| `price_text` | Số tiền bằng chữ |
| `contract_code` | `legal.contract_code` |
| `customer_name` | `legalEntity.name` |
| `sign_date` | `legal.sign_date` |
| `period` | Thứ tự kỳ thanh toán, tính từ 1 |
| `payment_period` | `latestContract.payment_period`, mặc định `5`, có padding qua `addLeadingZero` |
| `legal_type` | Tên loại hồ sơ pháp lý |

## 6. Tên file DNTT

Tên file logic được tạo trong `calculateGwsStandard.js`:

```js
const fileName = `[${product.name}][${calculation.name}][${contractDealNames}][${paymentTermDate}]`;
```

Trong đó:

| Thành phần | Nguồn |
| --- | --- |
| `product.name` | Tên sản phẩm |
| `calculation.name` | Tên phương thức tính, ví dụ `Phương thức tính GWS Standard` |
| `contractDealNames` | Nối các `contract.deal_name` bằng dấu cách |
| `paymentTermDate` | `payment_term` đổi `/` thành `-` |

Khi upload file lên S3, service có bước sanitize key:

```js
const name = generateData.fileName.replace(/[^a-zA-Z ]/g, "");
```

Nhưng tên document lưu DB vẫn dùng `generateData.fileName`.

## 7. Render và lưu DNTT

Sau khi `calculateGwsStandard` trả về danh sách `generateData`, service `paymentRequest.service.js` xử lý:

1. Kiểm tra DNTT đã từng được gen chưa theo:
   - `productId`
   - `contractIds`
   - `calculationId`
   - `usageDate`
   - `deleted = false`
2. Nếu đã có, render thử nội dung hiện tại và so với nội dung file mới nhất trước đó.
3. Nếu nội dung giống nhau thì bỏ qua, không gen lại.
4. Nếu chưa có hoặc nội dung khác, render file `.docx` bằng `Docxtemplater`.
5. Bổ sung các field hệ thống:
   - `day`
   - `month`
   - `year`
   - `invoice_no`
6. Upload file `.docx` lên S3 vào `PAYMENT_REQUEST_FOLDER`.
7. Lưu document vào bảng `documents`.
8. Tạo bản ghi `paymentRequest`.

Thông tin chính lưu vào `paymentRequest`:

| Trường | Nguồn |
| --- | --- |
| `invoiceNo` | Số thứ tự có padding + năm của `usageDate` |
| `contractIds` | Danh sách hợp đồng trong nhóm |
| `productId` | Input API |
| `documentId` | File DNTT vừa render |
| `calculationId` | Phương thức tính |
| `usageDate` | Ngày kỳ thanh toán |
| `totalPrinciple` | `priceCalculated` |

## 8. Điểm khác giữa GWS Standard và GWS Flex

GWS Standard:

- Không đọc file Excel GWS Data.
- Không tính theo domain, SKU, số lượng user hay số ngày sử dụng.
- Không dùng tỷ giá.
- Không tính VAT/FCT/discount trong function này.
- Tiền phải thu lấy trực tiếp từ `sale_payment_term.value_of_payment_term`.

GWS Flex:

- Có đọc file Excel GWS Data từ bảng `gwsData`.
- Match domain trong hợp đồng với cột `Domain name` của Excel.
- Tính theo `Subscription`, `Quantity`, `Start date`, `End date`, số ngày trong tháng.
- Có dùng bảng giá SKU, tỷ giá, VAT, FCT, discount.

## 9. Kết luận nghiệp vụ

Đối với GWS Standard, hệ thống CM coi giá trị trong kỳ thanh toán của hợp đồng là nguồn tiền gốc đã chốt. Engine `calculateGwsStandard` chỉ gom hợp đồng theo kỳ thanh toán và pháp nhân, cộng `value_of_payment_term`, fill dữ liệu pháp lý vào template, rồi chuyển dữ liệu cho service gen file DNTT.

Vì vậy nếu ERP cần đồng bộ DNTT GWS Standard từ CM thì nên coi `paymentRequest.totalPrinciple` và file DNTT từ CM là kết quả đầu vào, không tính lại theo dữ liệu GWS usage.
