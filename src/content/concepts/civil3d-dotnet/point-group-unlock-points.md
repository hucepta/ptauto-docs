---
{
  "id": "concept.civil3d-dotnet.point-group-unlock-points",
  "slug": "point-group-unlock-points",
  "title": "PointGroup.UnlockPoints",
  "description": "Mở khóa điểm trong nhóm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.UnlockPoints",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/28f83481-5eed-6e6f-3b9e-0a314aea0d19.htm"
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
    "PointGroup.UnlockPoints"
  ]
}
---

## Cú pháp

```csharp
public void UnlockPoints()
```

## Tham số và kết quả

Không có tham số; mở khóa các điểm thuộc nhóm.

## Ví dụ

Mở khóa điểm trong nhóm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
group.UnlockPoints();
tr.Commit();
```

## Lỗi thường gặp

Không dùng như cách vượt quyền quản lý điểm project.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
