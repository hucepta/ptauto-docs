---
{
  "id": "concept.autocad-dotnet.entity-geometric-extents",
  "slug": "entity-geometric-extents",
  "title": "Entity.GeometricExtents",
  "description": "Hộp bao hình học",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Entity.GeometricExtents",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Entity_GeometricExtents.html"
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
    "Entity.GeometricExtents"
  ]
}
---

## Cú pháp

```csharp
public virtual Extents3d GeometricExtents;
```

## Tham số và kết quả

Không có tham số; Extents3d là hộp bao theo WCS.

## Ví dụ

Hộp bao hình học. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `entity` là `Entity` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var box = entity.GeometricExtents;
ed.WriteMessage($"\nMin: {box.MinPoint}; Max: {box.MaxPoint}");
```

## Lỗi thường gặp

Một số entity chưa có extents hợp lệ; xử lý exception theo object.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
