---
{
  "id": "concept.civil3d-dotnet.civil-document-get-all-point-ids",
  "slug": "civil-document-get-all-point-ids",
  "title": "CivilDocument.GetAllPointIds",
  "description": "Lấy toàn bộ điểm Civil",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.GetAllPointIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/fe98f8e8-eccf-56f4-66fa-9e239ae815b2.htm"
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
    "CivilDocument.GetAllPointIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetAllPointIds()
```

## Tham số và kết quả

Không có tham số; trả ObjectIdCollection của điểm Civil trong DWG.

## Ví dụ

Lấy toàn bộ điểm Civil. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
var ids = civilDoc.GetAllPointIds();
ed.WriteMessage($"\nĐiểm: {ids.Count}");
```

## Lỗi thường gặp

POINT AutoCAD và CogoPoint khác kiểu; đếm POINT không thay thế được API này.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
