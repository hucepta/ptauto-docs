---
{
  "id": "concept.civil3d-dotnet.point-group-get-query",
  "slug": "point-group-get-query",
  "title": "PointGroup.GetQuery",
  "description": "Đọc query nhóm điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.GetQuery",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/56f6ae30-89c5-91b2-38be-cd79a4809d1b.htm"
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
    "PointGroup.GetQuery"
  ]
}
---

## Cú pháp

```csharp
public PointGroupQuery GetQuery()
```

## Tham số và kết quả

Không có tham số; trả PointGroupQuery điều khiển thành viên nhóm.

## Ví dụ

Đọc query nhóm điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var query = group.GetQuery();
```

## Lỗi thường gặp

Query là điều kiện chọn; không phải danh sách kết quả đã được cập nhật.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
