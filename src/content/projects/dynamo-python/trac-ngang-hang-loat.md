---
{
  "id": "project.dynamo-python.trac-ngang-hang-loat",
  "slug": "trac-ngang-hang-loat",
  "title": "Graph kiểm tra trắc ngang hàng loạt",
  "description": "Đối chiếu Sample Line và Section theo từng station.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "expectedResult": "Đối chiếu Sample Line và Section theo từng station.",
  "prerequisites": [
    "lesson.dynamo-python.batch-report-kiem-soat"
  ]
}
---

## Bài toán

Một tuyến có 50 Sample Line; graph kiểm tra trắc ngang nào thiếu Section hoặc có offset trái/phải ngoài phạm vi thiết kế.

## Thiết kế

Chọn đúng Alignment và Sample Line Group. Dùng node Civil lấy danh sách theo nguồn; giữ cấu trúc list theo nhóm để không ghép nhầm section của tuyến khác. Xuất bảng station–source–offset–status, không tạo section trong lượt kiểm tra.

## Nghiệm thu

- Fixture ba mặt cắt gồm một thiếu source báo đúng một lỗi.
- Đổi tên tuyến không làm graph đọc nhầm group khác.
- Bản vẽ không thay đổi và bảng có version Civil/Dynamo.
