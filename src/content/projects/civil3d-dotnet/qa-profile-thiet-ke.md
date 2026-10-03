---
{
  "id": "project.civil3d-dotnet.qa-profile-thiet-ke",
  "slug": "qa-profile-thiet-ke",
  "title": "QA trắc dọc thiết kế theo lý trình",
  "description": "So cao độ EG/FG, độ dốc và miền station của Profile.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "So cao độ EG/FG, độ dốc và miền station của Profile.",
  "prerequisites": [
    "lesson.civil3d-dotnet.profile-pvi-duong-do"
  ]
}
---

## Bài toán

Lập bảng tại mỗi 20 m: station, cao độ mặt đất, cao độ thiết kế và chênh cao. Flag station không có dữ liệu thay vì ghi 0.

## Thiết kế

Chọn Alignment, Surface Profile và Layout Profile rõ tên. Đọc trong transaction, kiểm tra miền chung của hai profile, đơn vị cao độ và trạng thái cập nhật nguồn. Xuất report CSV kèm tên DWG, object và version Civil 3D.

## Nghiệm thu

- Bảng 3 station mẫu khớp Civil 3D trong dung sai quy định.
- Profile thiếu hoặc trùng tên được báo để người dùng chọn lại.
- Report phân biệt `không có dữ liệu` với cao độ 0 hợp lệ.
