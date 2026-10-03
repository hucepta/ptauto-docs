---
{
  "id": "concept.civil3d-dotnet.civil-document-styles",
  "slug": "civil-document-styles",
  "title": "CivilDocument.Styles",
  "description": "Truy cập gốc style",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.Styles",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/0d8c9704-357a-afb1-8bc3-26d521468ae3.htm"
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
    "CivilDocument.Styles"
  ]
}
---

## Cú pháp

```csharp
public StylesRoot Styles { get; }
```

## Tham số và kết quả

Không nhận đối số; trả cây style của CivilDocument.

## Ví dụ

Truy cập gốc style. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
var styles = civilDoc.Styles;
```

## Lỗi thường gặp

Style thuộc bản vẽ cụ thể; không lấy ID style từ DWG khác.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
