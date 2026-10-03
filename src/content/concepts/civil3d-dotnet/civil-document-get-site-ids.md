---
{
  "id": "concept.civil3d-dotnet.civil-document-get-site-ids",
  "slug": "civil-document-get-site-ids",
  "title": "CivilDocument.GetSiteIds",
  "description": "Lấy danh sách Site",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.GetSiteIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/866a5d5d-7684-f678-b077-36b4388bff90.htm"
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
    "CivilDocument.GetSiteIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetSiteIds()
```

## Tham số và kết quả

Không có tham số; kết quả là các ObjectId của Site trong DWG.

## Ví dụ

Lấy danh sách Site. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
var ids = civilDoc.GetSiteIds();
ed.WriteMessage($"\nSite: {ids.Count}");
```

## Lỗi thường gặp

Site rỗng vẫn tồn tại; số Site không nói lên số tuyến.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
