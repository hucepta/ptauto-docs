---
{
  "id": "concept.autocad-dotnet.dbobject-handle",
  "slug": "dbobject-handle",
  "title": "DBObject.Handle",
  "description": "Handle lưu trong DWG",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — DBObject.Handle",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_DBObject_Handle.html"
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
    "DBObject.Handle"
  ]
}
---

## Cú pháp

```csharp
public Autodesk.AutoCAD.DatabaseServices.Handle Handle;
```

## Tham số và kết quả

Không có tham số; Handle là định danh lưu trong bản vẽ.

## Ví dụ

Handle lưu trong DWG. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `obj` là `DBObject` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\nHandle: " + obj.Handle);
```

## Lỗi thường gặp

Handle cần ngữ cảnh DWG; không dùng như khóa toàn cục.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
