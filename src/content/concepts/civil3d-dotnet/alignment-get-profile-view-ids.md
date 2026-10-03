---
{
  "id": "concept.civil3d-dotnet.alignment-get-profile-view-ids",
  "slug": "alignment-get-profile-view-ids",
  "title": "Alignment.GetProfileViewIds",
  "description": "Lấy khung trắc dọc",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetProfileViewIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/8009e280-e5dc-0f19-bab8-aaed693eca5d.htm"
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
    "Alignment.GetProfileViewIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetProfileViewIds()
```

## Tham số và kết quả

Không có tham số; trả ID các ProfileView của tuyến.

## Ví dụ

Lấy khung trắc dọc. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var ids = alignment.GetProfileViewIds();
ed.WriteMessage($"\nKhung: {ids.Count}");
```

## Lỗi thường gặp

Profile và ProfileView khác nhau; không có khung không đồng nghĩa không có trắc dọc.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
