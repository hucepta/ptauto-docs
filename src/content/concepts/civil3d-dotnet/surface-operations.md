---
{
  "id": "concept.civil3d-dotnet.surface-operations",
  "slug": "surface-operations",
  "title": "Surface.Operations",
  "description": "Đọc lịch sử dựng mặt",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.Operations",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/42b788b3-714e-c3cd-99ec-02e8ac71fa7c.htm"
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
    "Surface.Operations"
  ]
}
---

## Cú pháp

```csharp
public SurfaceOperationCollection Operations { get; }
```

## Tham số và kết quả

Không nhận đối số; trả danh sách thao tác định nghĩa surface.

## Ví dụ

Đọc lịch sử dựng mặt. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var operations = surface.Operations;
```

## Lỗi thường gặp

Danh sách operation là lịch sử dựng, không phải danh sách tam giác.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
