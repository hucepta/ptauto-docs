---
{
  "id": "concept.civil3d-dotnet.point-group-is-out-of-date",
  "slug": "point-group-is-out-of-date",
  "title": "PointGroup.IsOutOfDate",
  "description": "Kiểm tra nhóm chưa cập nhật",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.IsOutOfDate",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/640d4971-bae2-b34b-fc0a-e27c66aac6ce.htm"
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
    "PointGroup.IsOutOfDate"
  ]
}
---

## Cú pháp

```csharp
public bool IsOutOfDate { get; }
```

## Tham số và kết quả

Không nhận đối số; bool cho biết nhóm có thay đổi đang chờ.

## Ví dụ

Kiểm tra nhóm chưa cập nhật. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nCần cập nhật: {group.IsOutOfDate}");
```

## Lỗi thường gặp

Đếm trước Update có thể chưa phản ánh query mới.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
