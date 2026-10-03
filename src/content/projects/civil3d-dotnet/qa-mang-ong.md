---
{
  "id": "project.civil3d-dotnet.qa-mang-ong",
  "slug": "qa-mang-ong",
  "title": "QA mạng ống và hố ga",
  "description": "Kiểm pipe thiếu structure, kích thước rỗng và quan hệ mạng đứt.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Kiểm pipe thiếu structure, kích thước rỗng và quan hệ mạng đứt.",
  "prerequisites": [
    "lesson.civil3d-dotnet.pipe-network-va-corridor"
  ]
}
---

## Bài toán

Trước bàn giao, đội thoát nước cần biết pipe nào chưa nối vào hố ga, pipe thiếu kích thước và structure nào không thuộc mạng dự kiến.

## Thiết kế

Đọc Pipe Network theo tên/ID được chọn, duyệt pipe và structure trong transaction chỉ đọc. Báo ID, tên, nguồn kết nối và lý do lỗi. Không “sửa” topology bằng cách nối gần nhất tự động; thiết kế cần phê duyệt điểm nối.

## Nghiệm thu

- Fixture có một đầu pipe rời và một pipe thiếu kích thước báo hai lỗi khác loại.
- Mạng rỗng không gây exception.
- Báo cáo dùng ID để tìm lại object và nêu host Civil 3D đã chạy.
