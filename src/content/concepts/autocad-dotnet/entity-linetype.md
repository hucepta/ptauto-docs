---
{
  "id": "concept.autocad-dotnet.entity-linetype",
  "slug": "entity-linetype",
  "title": "Entity.Linetype",
  "description": "Kiểu nét entity",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Entity.Linetype",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Entity_Linetype.html"
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
    "Entity.Linetype"
  ]
}
---

## Cú pháp

```csharp
public string Linetype;
```

## Tham số và kết quả

Không có tham số khi đọc; string là tên linetype.

## Ví dụ

Kiểu nét entity. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `entity` là `Entity` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\nNét: " + entity.Linetype);
```

## Lỗi thường gặp

Linetype cần tồn tại khi gán; kích thước hiển thị còn chịu scale.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
