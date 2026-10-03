---
{
  "id": "concept.autocad-dotnet.point3d-y",
  "slug": "point3d-y",
  "title": "Point3d.Y",
  "description": "Tọa độ Y",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Point3d.Y",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Geometry_Point3d_Y.html"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Chữ ký theo tài liệu AutoCAD 2026; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "Point3d.Y"
  ]
}
---

## Cú pháp

```csharp
public double Y;
```

## Tham số và kết quả

Không có tham số; double là thành phần Y.

## Ví dụ

Tọa độ Y. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `p` là điểm hình học, ví dụ `new Point3d(3, 4, 5)`; điểm không tự tạo entity trong DWG.

```csharp
ed.WriteMessage($"\nY: {p.Y:F3}");
```

## Lỗi thường gặp

Cần biết điểm đang ở WCS hay hệ khác trước khi so sánh.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
