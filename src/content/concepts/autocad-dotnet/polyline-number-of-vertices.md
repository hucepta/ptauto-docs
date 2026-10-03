---
{
  "id": "concept.autocad-dotnet.polyline-number-of-vertices",
  "slug": "polyline-number-of-vertices",
  "title": "Polyline.NumberOfVertices",
  "description": "Số đỉnh polyline",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Polyline.NumberOfVertices",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Polyline_NumberOfVertices.html"
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
    "Polyline.NumberOfVertices"
  ]
}
---

## Cú pháp

```csharp
public int NumberOfVertices;
```

## Tham số và kết quả

Không có tham số; int là số đỉnh.

## Ví dụ

Số đỉnh polyline. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `polyline` là `Polyline` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nĐỉnh: {polyline.NumberOfVertices}");
```

## Lỗi thường gặp

Chỉ số hợp lệ từ 0 đến NumberOfVertices - 1.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
