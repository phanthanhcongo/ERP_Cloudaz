# 02 — Luồng 2 giai đoạn (mục lục → chốt → viết)

> Điểm đặc trưng của `/userguide`: nó **không viết ngay**. Skill dựng mục lục trước, DỪNG lại chờ bạn duyệt, rồi mới viết chi tiết. Hiểu luồng này giúp bạn biết khi nào cần trả lời và trả lời gì.

---

## Toàn cảnh

```
/userguide [feature]
      │
   ┌──┴─ GIAI ĐOẠN 1 — DỰNG MỤC LỤC ─────────────────────┐
   │  • Quét docs/{feature}/ → phân loại nguồn            │
   │  • Cluster nội dung → mục lục (6 nhóm Diátaxis)      │
   │  • @manual-reviewer soi độ phủ + phân loại           │
   │  • Hỏi audience / ngôn ngữ / giọng / độ chi tiết     │
   │  • IN MỤC LỤC RA CHAT                                 │
   └──────────────────────────────────────────────────────┘
      │
   🛑 HARD STOP — bạn duyệt mục lục + trả lời câu hỏi, gõ `tiếp`
      │
   ┌──┴─ GIAI ĐOẠN 2 — VIẾT CHI TIẾT ───────────────────┐
   │  • Viết từng trang từ nguồn (theo khung Diátaxis)    │
   │  • Hỏi cách lấy ảnh: auto-chụp / tự chụp / dùng sẵn  │
   │  • Render file .html (cửa vào) + bundle              │
   │  • Gom Open Questions → hỏi resolve/skip             │
   └──────────────────────────────────────────────────────┘
      │
   ✅ Xong: docs/userguide/{...}.html (double-click mở)
```

---

## Vì sao có HARD STOP

Viết một cẩm nang tốn công. Nếu skill viết luôn rồi mới sai cấu trúc (thiếu trang, trộn loại, tiêu đề không task-based), bạn phải sửa lại từ đầu. HARD STOP cho bạn **duyệt bộ khung trước khi đổ công viết** — rẻ hơn nhiều so với sửa sau.

`@manual-reviewer` (một agent review) đã soi mục lục trước khi đưa bạn duyệt, nên cái bạn thấy đã qua một vòng kiểm chất lượng.

---

## Bạn thấy gì ở HARD STOP

Một bảng terse (1 dòng/trang) + vài câu hỏi:

```
🛑 Mục lục cẩm nang payment — 8 trang · @manual-reviewer: approve, 0 blocking

Audience giả định: nhân viên CSKH vận hành cổng thanh toán.

| # | Trang | Nhóm | Ghi chú |
|---|-------|------|---------|
| 1 | Tổng quan thanh toán | Tổng quan | từ prd.md |
| 2 | Bắt đầu nhanh | Bắt đầu nhanh | luồng checkout chính |
| 3 | Xử lý hoàn tiền | Hướng dẫn theo tác vụ | UC refund, +review: tách khỏi trang gộp |
| ...

❓ Cần chốt:
  Q1: Ngôn ngữ viết? (đề xuất: Tiếng Việt — từ nguồn)
  Q2: Audience? (đề xuất: CSKH vận hành)

→ Trả lời + gõ `tiếp` → em viết luôn cẩm nang.
```

---

## Bạn trả lời thế nào

| Muốn | Gõ |
|---|---|
| Đồng ý mục lục + mặc định | `tiếp` (hoặc `ok`) |
| Đổi ngôn ngữ | "viết bằng tiếng Anh" rồi `tiếp` |
| Bớt/thêm trang | "bỏ trang 5, thêm trang hướng dẫn khóa tài khoản" rồi `tiếp` |
| Đổi audience/giọng | trả lời câu hỏi tương ứng rồi `tiếp` |

Skill **không hỏi lại** cái bạn đã nói trong câu lệnh hoặc lần trước (no re-ask).

---

## 4 câu hỏi định hình cách viết

Trước HARD STOP skill hỏi 4 điều (mỗi câu có sẵn đề xuất để bạn xác nhận nhanh):

1. **Ngôn ngữ viết** — gợi ý theo nguồn (nguồn tiếng Việt → Tiếng Việt). Chọn "Other" cho ngôn ngữ bất kỳ.
2. **Audience** — người đọc cuối (admin / CSKH / người dùng cuối...).
3. **Giọng + xưng hô** — thân thiện "bạn" / trung tính.
4. **Độ chi tiết** — Ngắn gọn / Vừa đủ (khuyến nghị) / Chi tiết sâu.

---

## Sau khi gõ `tiếp`

Skill ghi ngay file `index.md` (mục lục đã duyệt, mọi trang `status: pending`) làm mốc chống mất việc, rồi viết từng trang. Nếu turn bị ngắt giữa chừng, gọi lại `/userguide` — skill đọc `index.md` biết đã viết tới đâu, **không hỏi lại từ đầu**.
