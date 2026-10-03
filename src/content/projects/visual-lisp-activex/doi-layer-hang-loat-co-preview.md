---
{
  "id": "project.visual-lisp-activex.doi-layer-hang-loat-co-preview",
  "slug": "doi-layer-hang-loat-co-preview",
  "title": "Chuyển layer hàng loạt có bước xem trước",
  "description": "Đọc property Layer, lập danh sách thay đổi và chỉ ghi sau khi người dùng kiểm tra.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "expectedResult": "Đọc property Layer, lập danh sách thay đổi và chỉ ghi sau khi người dùng kiểm tra.",
  "prerequisites": [
    "lesson.visual-lisp-activex.batch-com-error-reactor"
  ]
}
---

## Bài toán

Các block cọc đang nằm rải trên nhiều layer cũ. Tool lập preview gồm handle, layer cũ và layer đích theo bảng mapping; người dùng chỉ áp dụng sau khi danh sách hợp lệ.

## Thiết kế

Kiểm tra property `Layer` tồn tại và ghi được; xác nhận layer đích có trong DWG. Không gọi `vla-put-Layer` trong lúc chỉ xem trước. Khi áp dụng, xử lý lỗi COM theo từng đối tượng và giữ report những mục thất bại.

## Nghiệm thu

- Preview không sửa DWG.
- Hủy trước áp dụng giữ nguyên toàn bộ layer.
- Đối tượng không cho ghi được báo đúng handle.
- Sau áp dụng, đọc lại layer để xác nhận số thành công/thất bại.
