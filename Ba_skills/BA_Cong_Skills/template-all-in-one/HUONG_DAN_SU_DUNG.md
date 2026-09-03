# Hướng Dẫn Dùng Skill `template-all-in-one`

## 1. Mục Đích
Skill này dùng để tạo template tài liệu mô tả nghiệp vụ theo style của chị lead BA.

## 2. Khi Nào Dùng
- Khi cần tạo template cho dự án có giao diện.
- Khi cần tạo template cho dự án không có giao diện.
- Khi muốn bám đúng style mô tả theo tab/màn, CTA, form, rule, phân quyền.

## 3. Cách Gọi Skill
Gọi skill bằng:

```text
$template-all-in-one
```

Ví dụ:

```text
Use $template-all-in-one to draft a lead-BA style all-in-one document template for Cloudino VN.
```

## 4. Đầu Vào Nên Có
- Tên dự án.
- Module / Epic / Feature.
- Loại tài liệu:
  - `business-only`
  - `page-based`
- Danh sách tab/màn hoặc page.
- Nếu có giao diện: ảnh Figma hoặc tên page theo Figma.
- CTA, form, rule, phân quyền, ghi chú nếu có.

## 5. Đầu Ra Mong Muốn
- Markdown template theo đúng style lead BA.
- Cấu trúc rõ ràng, dễ copy dùng ngay.
- Nếu `business-only`: tập trung nghiệp vụ, rule, phân quyền, nghiệm thu.
- Nếu `page-based`: bám theo từng page/màn, có block hiển thị, CTA, form, ghi chú.

## 6. Quy Ước Viết
- Mở đầu bằng tiêu đề tài liệu.
- Có khối thông tin: Module / Epic / Feature / Người soạn / Phiên bản.
- Chia mục theo số thứ tự rõ ràng.
- Nếu có page/màn:
  - mô tả ngắn
  - danh sách block
  - CTA / hành động
  - form / input
  - rule
  - ghi chú
  - phân quyền
- Nếu không có giao diện:
  - mô tả theo nghiệp vụ
  - quy trình
  - rule
  - dữ liệu
  - nghiệm thu

## 7. Hai Chế Độ Chính
### 7.1 Business-only
Dùng khi dự án không có giao diện, hoặc chỉ cần tài liệu nghiệp vụ thuần.

### 7.2 Page-based
Dùng khi dự án có giao diện/Figma và cần mô tả theo từng trang/màn.

## 8. File Mẫu
- `assets/Template_All_in_one/template_business_only.md`
- `assets/Template_All_in_one/template_page_based.md`

