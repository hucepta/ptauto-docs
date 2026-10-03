---
{
  "id": "concept.civil3d-dotnet.surface-auto-rebuild",
  "slug": "surface-auto-rebuild",
  "title": "Surface.AutoRebuild",
  "description": "Đọc chế độ rebuild",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.AutoRebuild",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/07e9799f-7ec6-d387-9ce3-ddc335fe4daf.htm"
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
    "Surface.AutoRebuild"
  ]
}
---

## Cú pháp

```csharp
public bool AutoRebuild { get; set; }
```

## Tham số và kết quả

Không nhận đối số khi đọc; bool chỉ chế độ tự dựng lại.

## Ví dụ

Đọc chế độ rebuild. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nTự rebuild: {surface.AutoRebuild}");
```

## Lỗi thường gặp

Bật chế độ không thay thế việc kiểm tra Definition và dữ liệu đầu vào.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
