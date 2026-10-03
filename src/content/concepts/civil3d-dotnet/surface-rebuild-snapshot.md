---
{
  "id": "concept.civil3d-dotnet.surface-rebuild-snapshot",
  "slug": "surface-rebuild-snapshot",
  "title": "Surface.RebuildSnapshot",
  "description": "Dựng lại snapshot",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.RebuildSnapshot",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/f90f996a-7889-d99b-eacb-80d2d9fc3d2a.htm"
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
    "Surface.RebuildSnapshot"
  ]
}
---

## Cú pháp

```csharp
public void RebuildSnapshot()
```

## Tham số và kết quả

Không có tham số; cập nhật snapshot của surface.

## Ví dụ

Dựng lại snapshot. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
surface.RebuildSnapshot();
tr.Commit();
```

## Lỗi thường gặp

Kiểm tra mặt đã có snapshot và dữ liệu định nghĩa hợp lệ trước khi gọi.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
