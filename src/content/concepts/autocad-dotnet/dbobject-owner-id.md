---
{
  "id": "concept.autocad-dotnet.dbobject-owner-id",
  "slug": "dbobject-owner-id",
  "title": "DBObject.OwnerId",
  "description": "ID đối tượng sở hữu",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — DBObject.OwnerId",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_DBObject_OwnerId.html"
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
    "DBObject.OwnerId"
  ]
}
---

## Cú pháp

```csharp
public virtual Autodesk.AutoCAD.DatabaseServices.ObjectId OwnerId;
```

## Tham số và kết quả

Không có tham số; ObjectId của chủ sở hữu database.

## Ví dụ

ID đối tượng sở hữu. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `obj` là `DBObject` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var owner = tr.GetObject(obj.OwnerId, OpenMode.ForRead);
```

## Lỗi thường gặp

Owner không nhất thiết là Document hoặc một entity đồ họa.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
