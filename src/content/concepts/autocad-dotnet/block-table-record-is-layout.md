---
{
  "id": "concept.autocad-dotnet.block-table-record-is-layout",
  "slug": "block-table-record-is-layout",
  "title": "BlockTableRecord.IsLayout",
  "description": "Record của layout",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — BlockTableRecord.IsLayout",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_BlockTableRecord_IsLayout.html"
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
    "BlockTableRecord.IsLayout"
  ]
}
---

## Cú pháp

```csharp
public bool IsLayout;
```

## Tham số và kết quả

Không có tham số; bool nhận diện record liên kết layout.

## Ví dụ

Record của layout. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `record` là `BlockTableRecord` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nLayout: {record.IsLayout}");
```

## Lỗi thường gặp

Model space cũng là một record đặc biệt; kiểm tra phạm vi thống kê.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
