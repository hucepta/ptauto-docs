---
{
  "id": "concept.autocad-dotnet.point3d-origin",
  "slug": "point3d-origin",
  "title": "Point3d.Origin",
  "description": "Gốc tọa độ 3D",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Point3d.Origin",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Geometry_Point3d_Origin.html"
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
    "Point3d.Origin"
  ]
}
---

## Cú pháp

```csharp
public static Point3d Origin;
```

## Tham số và kết quả

Không nhận tham số; Point3d bằng (0,0,0).

## Ví dụ

Gốc tọa độ 3D. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `p` là điểm hình học, ví dụ `new Point3d(3, 4, 5)`; điểm không tự tạo entity trong DWG.

```csharp
var p = Point3d.Origin;
```

## Lỗi thường gặp

Gốc WCS khác gốc UCS người dùng đang sử dụng.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
