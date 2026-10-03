---
{
  "id": "concept.civil3d-dotnet.point-group-update",
  "slug": "point-group-update",
  "title": "PointGroup.Update",
  "description": "Cập nhật nhóm điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.Update",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/527e5bdd-1c27-98fa-65c3-7c2665c7aa98.htm"
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
    "PointGroup.Update"
  ]
}
---

## Cú pháp

```csharp
public void Update()
```

## Tham số và kết quả

Không có tham số; cập nhật thay đổi đang chờ của nhóm.

## Ví dụ

Cập nhật nhóm điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
group.Update();
tr.Commit();
```

## Lỗi thường gặp

Mở nhóm ForWrite và xem lại GetPointNumbers sau khi cập nhật.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
