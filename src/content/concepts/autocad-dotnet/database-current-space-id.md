---
{
  "id": "concept.autocad-dotnet.database-current-space-id",
  "slug": "database-current-space-id",
  "title": "Database.CurrentSpaceId",
  "description": "ID không gian hiện tại",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Database.CurrentSpaceId",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Database_CurrentSpaceId.html"
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
    "Database.CurrentSpaceId"
  ]
}
---

## Cú pháp

```csharp
public ObjectId CurrentSpaceId;
```

## Tham số và kết quả

Không có tham số; ObjectId record của không gian hiện hành.

## Ví dụ

ID không gian hiện tại. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `db` là `doc.Database` của tài liệu đang hoạt động.

```csharp
var space = (BlockTableRecord)tr.GetObject(db.CurrentSpaceId, OpenMode.ForRead);
```

## Lỗi thường gặp

CurrentSpace có thể là Paper space; không luôn là Model space.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
