---
{
  "id": "project.autocad-dotnet.kiem-tra-hinh-hoc-tuyen",
  "slug": "kiem-tra-hinh-hoc-tuyen",
  "title": "Geometry Utility kiểm tra tim tuyến",
  "description": "Phát hiện polyline tự giao, đoạn quá ngắn và đỉnh trùng trong DWG.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Phát hiện polyline tự giao, đoạn quá ngắn và đỉnh trùng trong DWG.",
  "prerequisites": [
    "lesson.autocad-dotnet.matrix-he-toa-do"
  ]
}
---

## Bài toán

Tim tuyến nhập từ nhiều nguồn có đỉnh trùng hoặc đoạn gần bằng 0 gây lỗi khi tạo Alignment. Plugin tạo report trước khi đưa vào Civil 3D.

## Thiết kế

Editor chọn LWPOLYLINE, Transaction đọc vertex và hệ tọa độ. Quy tắc dùng dung sai theo đơn vị DWG, không so double bằng `==` tuyệt đối. Report nêu chỉ số đoạn, tọa độ và loại lỗi; bản đầu không tự sửa để người thiết kế quyết định.

## Nghiệm thu

- Tuyến sạch không có lỗi; fixture có một đỉnh trùng và một đoạn ngắn báo đúng hai lỗi.
- UCS quay không làm đổi kết luận hình học vật lý.
- Plugin không sửa bản vẽ và có log version host/SDK.
