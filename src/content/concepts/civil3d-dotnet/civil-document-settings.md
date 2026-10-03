---
{
  "id": "concept.civil3d-dotnet.civil-document-settings",
  "slug": "civil-document-settings",
  "title": "CivilDocument.Settings",
  "description": "Truy cập thiết lập Civil",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.Settings",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/e7252125-d8db-9f76-ef8f-98cf7f86dd23.htm"
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
    "CivilDocument.Settings"
  ]
}
---

## Cú pháp

```csharp
public SettingsRoot Settings { get; }
```

## Tham số và kết quả

Không nhận đối số; trả gốc Settings của tài liệu Civil.

## Ví dụ

Truy cập thiết lập Civil. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
var settings = civilDoc.Settings;
```

## Lỗi thường gặp

Thiết lập bản vẽ, feature và command có cấp khác nhau; lấy đúng kiểu Settings khi đi sâu.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
