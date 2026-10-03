---
{
  "id": "concept.civil3d-dotnet.surface-is-volume-surface",
  "slug": "surface-is-volume-surface",
  "title": "Surface.IsVolumeSurface",
  "description": "Nhận diện mặt khối lượng",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.IsVolumeSurface",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/ffdc0146-fc92-9a51-8359-01b05d44a153.htm"
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
    "Surface.IsVolumeSurface"
  ]
}
---

## Cú pháp

```csharp
public bool IsVolumeSurface { get; }
```

## Tham số và kết quả

Không nhận đối số; bool xác định surface loại volume.

## Ví dụ

Nhận diện mặt khối lượng. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nMặt khối lượng: {surface.IsVolumeSurface}");
```

## Lỗi thường gặp

Cao độ của mặt volume biểu diễn chênh cao, không phải cao độ địa hình tuyệt đối.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
