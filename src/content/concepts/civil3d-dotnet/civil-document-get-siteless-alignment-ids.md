---
{
  "id": "concept.civil3d-dotnet.civil-document-get-siteless-alignment-ids",
  "slug": "civil-document-get-siteless-alignment-ids",
  "title": "CivilDocument.GetSitelessAlignmentIds",
  "description": "Lấy tuyến ngoài Site",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.GetSitelessAlignmentIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/843bdbaa-156d-e113-05ba-e36c5c121887.htm"
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
    "CivilDocument.GetSitelessAlignmentIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetSitelessAlignmentIds()
```

## Tham số và kết quả

Không có tham số; ObjectIdCollection chứa các tuyến không thuộc Site.

## Ví dụ

Lấy tuyến ngoài Site. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
var ids = civilDoc.GetSitelessAlignmentIds();
ed.WriteMessage($"\nTuyến ngoài Site: {ids.Count}");
```

## Lỗi thường gặp

Đếm siteless không bằng tổng tuyến khi bản vẽ có tuyến nằm trong Site.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
