---
{
  "id": "concept.civil3d-dotnet.surface-remove-snapshot",
  "slug": "surface-remove-snapshot",
  "title": "Surface.RemoveSnapshot",
  "description": "Bỏ snapshot bề mặt",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.RemoveSnapshot",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/24ca15c9-24d8-8d55-c05f-06778323991b.htm"
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
    "Surface.RemoveSnapshot"
  ]
}
---

## Cú pháp

```csharp
public void RemoveSnapshot()
```

## Tham số và kết quả

Không có tham số; bỏ snapshot đã có.

## Ví dụ

Bỏ snapshot bề mặt. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `surface` là `Autodesk.Civil.DatabaseServices.Surface` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
surface.RemoveSnapshot();
tr.Commit();
```

## Lỗi thường gặp

Mở ForWrite; operation sau snapshot có thể cần dựng lại từ dữ liệu gốc.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
