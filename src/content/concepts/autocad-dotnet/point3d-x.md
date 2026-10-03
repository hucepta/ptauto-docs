---
{
  "id": "concept.autocad-dotnet.point3d-x",
  "slug": "point3d-x",
  "title": "Point3d.X",
  "description": "Tọa độ X",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Point3d.X",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Geometry_Point3d_X.html"
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
    "Point3d.X"
  ]
}
---

## Cú pháp

```csharp
public double X;
```

## Tham số và kết quả

Không có tham số; double là thành phần X của Point3d.

## Ví dụ

Tọa độ X. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `p` là điểm hình học, ví dụ `new Point3d(3, 4, 5)`; điểm không tự tạo entity trong DWG.

```csharp
ed.WriteMessage($"\nX: {p.X:F3}");
```

## Lỗi thường gặp

Point3d là giá trị; đổi biến mới không tự di chuyển entity trong DWG.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
