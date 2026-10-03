---
{
  "id": "project.visual-lisp-activex.kiem-ke-curve-tuyen",
  "slug": "kiem-ke-curve-tuyen",
  "title": "Kiểm kê chiều dài các curve trên layer tuyến",
  "description": "Dùng Curve API để báo chiều dài và handle từng đoạn tim tuyến.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "expectedResult": "Dùng Curve API để báo chiều dài và handle từng đoạn tim tuyến.",
  "prerequisites": [
    "lesson.visual-lisp-activex.curve-parameter-distance"
  ]
}
---

## Bài toán

Một hồ sơ có nhiều đoạn tim tuyến dạng LINE, ARC và LWPOLYLINE. Tạo report chiều dài theo loại và layer để so với bảng khối lượng sơ bộ.

## Thiết kế

Lọc tập chọn, đổi ename sang VLA khi cần đọc property, dùng Curve API để lấy chiều dài theo miền parameter. Bắt lỗi từng entity để một đối tượng lạ không làm mất cả báo cáo. Ghi rõ đơn vị DWG và không cộng chiều dài của đối tượng trên Layout nếu phạm vi chỉ là ModelSpace.

## Nghiệm thu

- Ba curve mẫu có tổng chiều dài khớp đo thủ công trong dung sai chọn trước.
- Entity không được Curve API hỗ trợ được báo riêng, không tính thành 0.
- Report giữ handle để truy ngược DWG và không sửa hình học.
