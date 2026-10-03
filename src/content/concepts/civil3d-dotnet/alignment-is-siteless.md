---
{
  "id": "concept.civil3d-dotnet.alignment-is-siteless",
  "slug": "alignment-is-siteless",
  "title": "Alignment.IsSiteless",
  "description": "Kiểm tra tuyến ngoài Site",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.IsSiteless",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/944cfa98-2f0d-b2ba-22f2-eb0f63485cff.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Chữ ký theo tài liệu Civil 3D 2022; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "Alignment.IsSiteless"
  ]
}
---

## Cú pháp

```csharp
public bool IsSiteless { get; }
```

## Tham số và kết quả

Không nhận đối số; bool xác định tuyến không thuộc Site.

## Ví dụ

Kiểm tra tuyến ngoài Site. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nNgoài Site: {alignment.IsSiteless}");
```

## Lỗi thường gặp

Tuyến ngoài Site vẫn là Alignment hợp lệ, không phải dữ liệu thiếu.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
