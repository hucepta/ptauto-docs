---
{
  "id": "concept.civil3d-dotnet.civil-document-assembly-collection",
  "slug": "civil-document-assembly-collection",
  "title": "CivilDocument.AssemblyCollection",
  "description": "Lấy tập Assembly",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.AssemblyCollection",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d9c9bae6-168e-79b9-44d9-b7c7d19091c0.htm"
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
    "CivilDocument.AssemblyCollection"
  ]
}
---

## Cú pháp

```csharp
public AssemblyCollection AssemblyCollection { get; }
```

## Tham số và kết quả

Không nhận đối số; trả tập ID Assembly.

## Ví dụ

Lấy tập Assembly. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
ed.WriteMessage($"\nAssembly: {civilDoc.AssemblyCollection.Count}");
```

## Lỗi thường gặp

Một Assembly không phải Corridor; không dùng số Assembly như số Corridor.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
