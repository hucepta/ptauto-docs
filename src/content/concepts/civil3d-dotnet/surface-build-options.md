---
{
  "id": "concept.civil3d-dotnet.surface-build-options",
  "slug": "surface-build-options",
  "title": "Surface.BuildOptions",
  "description": "Đọc tùy chọn dựng mặt",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.BuildOptions",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/faaffa66-7b1d-6501-f4a6-5b677aa26ba8.htm"
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
    "Surface.BuildOptions"
  ]
}
---

## Cú pháp

```csharp
public SurfaceBuildOptions BuildOptions { get; }
```

## Tham số và kết quả

Không nhận đối số; trả đối tượng tùy chọn build surface.

## Ví dụ

Đọc tùy chọn dựng mặt. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var options = surface.BuildOptions;
```

## Lỗi thường gặp

Không thay tùy chọn trong lệnh chỉ đọc; thay đổi có thể làm kết quả tam giác khác.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
