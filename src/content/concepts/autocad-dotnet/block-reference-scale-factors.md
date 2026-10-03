---
{
  "id": "concept.autocad-dotnet.block-reference-scale-factors",
  "slug": "block-reference-scale-factors",
  "title": "BlockReference.ScaleFactors",
  "description": "Tỷ lệ block",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — BlockReference.ScaleFactors",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_BlockReference_ScaleFactors.html"
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
    "BlockReference.ScaleFactors"
  ]
}
---

## Cú pháp

```csharp
public Scale3d ScaleFactors;
```

## Tham số và kết quả

Không có tham số; Scale3d gồm hệ số X/Y/Z.

## Ví dụ

Tỷ lệ block. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `block` là `BlockReference` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var scale = block.ScaleFactors;
```

## Lỗi thường gặp

Block có thể scale không đều; không suy một hệ số chung từ X.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
