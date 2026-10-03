---
{
  "id": "concept.autocad-dotnet.point3d-z",
  "slug": "point3d-z",
  "title": "Point3d.Z",
  "description": "Tọa độ Z",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Point3d.Z",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Geometry_Point3d_Z.html"
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
    "Point3d.Z"
  ]
}
---

## Cú pháp

```csharp
public double Z;
```

## Tham số và kết quả

Không có tham số; double là thành phần Z.

## Ví dụ

Tọa độ Z. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `p` là điểm hình học, ví dụ `new Point3d(3, 4, 5)`; điểm không tự tạo entity trong DWG.

```csharp
ed.WriteMessage($"\nZ: {p.Z:F3}");
```

## Lỗi thường gặp

Điểm trông trùng trên màn hình có thể khác cao độ.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
