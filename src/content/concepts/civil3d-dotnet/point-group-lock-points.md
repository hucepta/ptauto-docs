---
{
  "id": "concept.civil3d-dotnet.point-group-lock-points",
  "slug": "point-group-lock-points",
  "title": "PointGroup.LockPoints",
  "description": "Khóa các điểm của nhóm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.LockPoints",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/91af2d58-c95e-567b-e6fc-9aeb6c5b1424.htm"
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
    "PointGroup.LockPoints"
  ]
}
---

## Cú pháp

```csharp
public void LockPoints()
```

## Tham số và kết quả

Không có tham số; khóa các điểm thuộc nhóm.

## Ví dụ

Khóa các điểm của nhóm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
group.LockPoints();
tr.Commit();
```

## Lỗi thường gặp

Ảnh hưởng nhiều điểm; kiểm tra thành viên nhóm trước khi gọi.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
