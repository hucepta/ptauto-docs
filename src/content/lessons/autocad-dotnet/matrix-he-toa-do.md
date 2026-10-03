---
{
  "id": "lesson.autocad-dotnet.matrix-he-toa-do",
  "slug": "matrix-he-toa-do",
  "title": "Đổi hệ tọa độ",
  "description": "Chuyển hình học đúng hệ trước khi tính offset hoặc chèn cọc.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.editor-va-hinh-hoc",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.editor-selection-hinh-hoc"
  ],
  "flow": [
    {
      "label": "Nguồn",
      "detail": "Xác định WCS/UCS/OCS của điểm đầu vào"
    },
    {
      "label": "Biến đổi",
      "detail": "Dùng Matrix3d phù hợp"
    },
    {
      "label": "Đối chiếu",
      "detail": "So tọa độ và hình học sau chuyển"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoCAD .NET Developer Guide",
      "url": "https://help.autodesk.com/view/OARX/2026/ENU/"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Build và thử với SDK/host cùng phiên bản",
      "platform": "Windows"
    }
  ],
  "illustration": "curve"
}
---

## Điểm có số chưa chắc cùng ý nghĩa

Một điểm nhận từ `Editor.GetPoint` chịu bối cảnh UCS của người dùng. Một số API Database lưu hình học theo WCS hoặc OCS của entity. Nếu lấy hai điểm từ hệ khác nhau rồi cộng trừ trực tiếp, kết quả offset tuyến có thể sai khi UCS quay. `Point3d` biểu diễn vị trí; `Vector3d` biểu diễn hướng/độ dời; `Matrix3d` mô tả phép biến đổi.

```text
Điểm nhập trong UCS → xác định phép đổi → điểm WCS → tính toán → lưu trong hệ API yêu cầu
```

Trước mỗi công thức, ghi cạnh biến điểm đang thuộc hệ nào và đơn vị gì. Kiểm tra với UCS World rồi với UCS quay 30 độ trên cùng DWG. Một thuật toán đúng phải cho cùng vị trí vật lý, dù số hiển thị trên Command Line có thể khác.

## Thực hành

Vẽ một tuyến nằm ngang WCS và quay UCS. Chọn cùng một điểm hai lần. Lập bảng: tọa độ người dùng thấy, tọa độ sau chuyển sang WCS, kết quả mong đợi. Chỉ viết phép offset khi bảng này đã rõ.
