---
{
  "id": "concept.civil3d-dotnet.surface-create-snapshot",
  "slug": "surface-create-snapshot",
  "title": "Surface.CreateSnapshot",
  "description": "Tạo snapshot bề mặt",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.CreateSnapshot",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/f353eb67-d852-6b49-ef7f-a47e0fd22906.htm"
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
    "Surface.CreateSnapshot"
  ]
}
---

## Cú pháp

```csharp
public void CreateSnapshot()
```

## Tham số và kết quả

Không có tham số; thao tác tạo snapshot từ trạng thái mặt hiện tại.

## Ví dụ

Tạo snapshot bề mặt. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
surface.CreateSnapshot();
tr.Commit();
```

## Lỗi thường gặp

Mở ForWrite; snapshot không thay thế việc lưu DWG và không phải bản sao Surface.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
