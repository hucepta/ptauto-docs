---
{
  "id": "concept.civil3d-dotnet.civil-document-subassembly-collection",
  "slug": "civil-document-subassembly-collection",
  "title": "CivilDocument.SubassemblyCollection",
  "description": "Lấy tập Subassembly",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.SubassemblyCollection",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6f7cbb87-b3d7-1d4b-68d6-b4aa2f94a3e9.htm"
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
    "CivilDocument.SubassemblyCollection"
  ]
}
---

## Cú pháp

```csharp
public SubassemblyCollection SubassemblyCollection { get; }
```

## Tham số và kết quả

Không nhận đối số; trả tập ID Subassembly.

## Ví dụ

Lấy tập Subassembly. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
ed.WriteMessage($"\nSubassembly: {civilDoc.SubassemblyCollection.Count}");
```

## Lỗi thường gặp

Subassembly chưa được gắn vào Assembly vẫn cần xét khi kiểm kê.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
