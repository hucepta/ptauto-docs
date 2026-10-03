---
{
  "id": "project.gis-data-automation.qa-topology-thoat-nuoc",
  "slug": "qa-topology-thoat-nuoc",
  "title": "QA topology mạng thoát nước CAD–GIS",
  "description": "Tìm đầu ống hở, hình học lỗi và ID không nhất quán sau chuyển đổi.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "expectedResult": "Tìm đầu ống hở, hình học lỗi và ID không nhất quán sau chuyển đổi.",
  "prerequisites": [
    "lesson.gis-data-automation.topology-va-bao-cao-loi"
  ]
}
---

## Bài toán

GeoPackage thoát nước có lớp pipe và manhole. Tool kiểm tra mỗi đầu pipe phải nối đúng manhole trong dung sai đã thống nhất; đồng thời kiểm geometry validity và ID trùng.

## Thiết kế

Chạy ba lượt riêng: schema/ID, geometry validity, topology. Report mỗi lỗi có feature ID, vị trí, quy tắc và mức độ. Không tự snap các đầu ống vào manhole; xuất lớp lỗi để kỹ sư kiểm tra.

## Nghiệm thu

- Fixture có một pipe hở, một ID trùng và một geometry không hợp lệ tạo ba lỗi đúng loại.
- Thay dung sai làm thay đổi chỉ kết quả topology, không thay đổi lỗi ID.
- Sau sửa dữ liệu nguồn, chạy lại report không còn lỗi và ghi version dữ liệu.
