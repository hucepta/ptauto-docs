---
{
  "id": "concept.civil3d-dotnet.point-group-contains-point",
  "slug": "point-group-contains-point",
  "title": "PointGroup.ContainsPoint",
  "description": "Kiểm tra điểm trong nhóm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.ContainsPoint",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/57e2c379-a23b-fa8d-943d-c34b6b9d7142.htm"
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
    "PointGroup.ContainsPoint"
  ]
}
---

## Cú pháp

```csharp
public bool ContainsPoint(
	uint pointNumber
)
```

## Tham số và kết quả

pointNumber là uint; bool cho biết nhóm chứa điểm đó.

## Ví dụ

Kiểm tra điểm trong nhóm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
bool included = group.ContainsPoint(101);
ed.WriteMessage($"\nChứa 101: {included}");
```

## Lỗi thường gặp

Điểm tồn tại trong DWG chưa chắc thỏa query của nhóm.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
