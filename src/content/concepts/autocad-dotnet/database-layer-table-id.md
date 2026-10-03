---
{
  "id": "concept.autocad-dotnet.database-layer-table-id",
  "slug": "database-layer-table-id",
  "title": "Database.LayerTableId",
  "description": "ID bảng layer",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Database.LayerTableId",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Database_LayerTableId.html"
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
    "Database.LayerTableId"
  ]
}
---

## Cú pháp

```csharp
public ObjectId LayerTableId;
```

## Tham số và kết quả

Không có tham số; ObjectId của LayerTable.

## Ví dụ

ID bảng layer. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `db` là `doc.Database` của tài liệu đang hoạt động.

```csharp
var layers = (LayerTable)tr.GetObject(db.LayerTableId, OpenMode.ForRead);
```

## Lỗi thường gặp

Mở bảng ForRead để kiểm tra; thêm layer cần ForWrite.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
