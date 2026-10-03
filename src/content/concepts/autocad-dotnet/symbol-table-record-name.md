---
{
  "id": "concept.autocad-dotnet.symbol-table-record-name",
  "slug": "symbol-table-record-name",
  "title": "SymbolTableRecord.Name",
  "description": "Tên record có tên",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — SymbolTableRecord.Name",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_SymbolTableRecord_Name.html"
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
    "SymbolTableRecord.Name"
  ]
}
---

## Cú pháp

```csharp
public string Name;
```

## Tham số và kết quả

Không nhận tham số khi đọc; string tên record trong Symbol Table.

## Ví dụ

Tên record có tên. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `record` là `SymbolTableRecord` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\n" + record.Name);
```

## Lỗi thường gặp

Tên phải hợp lệ và không trùng trong bảng khi thêm mới.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
