---
{
  "id": "concept.civil3d-dotnet.surface-boundaries-definition",
  "slug": "surface-boundaries-definition",
  "title": "Surface.BoundariesDefinition",
  "description": "Đọc nhóm boundary",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.BoundariesDefinition",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/f6d195dd-ef0e-de09-be73-8e5022b74d12.htm"
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
    "Surface.BoundariesDefinition"
  ]
}
---

## Cú pháp

```csharp
public SurfaceDefinitionBoundaries BoundariesDefinition { get; }
```

## Tham số và kết quả

Không nhận đối số; trả dữ liệu định nghĩa boundary của surface.

## Ví dụ

Đọc nhóm boundary. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var boundaries = surface.BoundariesDefinition;
```

## Lỗi thường gặp

Boundary có loại và thứ tự; không đồng nhất mọi boundary với đường bao ngoài.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
