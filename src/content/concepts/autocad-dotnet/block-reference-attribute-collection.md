---
{
  "id": "concept.autocad-dotnet.block-reference-attribute-collection",
  "slug": "block-reference-attribute-collection",
  "title": "BlockReference.AttributeCollection",
  "description": "Tập attribute của block",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — BlockReference.AttributeCollection",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_BlockReference_AttributeCollection.html"
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
    "BlockReference.AttributeCollection"
  ]
}
---

## Cú pháp

```csharp
public Autodesk.AutoCAD.DatabaseServices.AttributeCollection AttributeCollection;
```

## Tham số và kết quả

Không có tham số; AttributeCollection chứa attribute của instance.

## Ví dụ

Tập attribute của block. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `block` là `BlockReference` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
foreach (ObjectId id in block.AttributeCollection) { var a = (AttributeReference)tr.GetObject(id, OpenMode.ForRead); ed.WriteMessage("\n" + a.TextString); }
```

## Lỗi thường gặp

AttributeDefinition trong definition khác AttributeReference của instance.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
