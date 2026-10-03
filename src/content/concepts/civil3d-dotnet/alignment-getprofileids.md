---
{
  "id": "concept.civil3d-dotnet.alignment-getprofileids",
  "slug": "alignment-getprofileids",
  "title": "Alignment.GetProfileIds",
  "description": "Liệt kê Profile gắn với một Alignment.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/13710c82-f2b8-44f6-3574-f73f918fc39e.htm"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```csharp
ObjectIdCollection ids = alignment.GetProfileIds();
```

## Tham số và kết quả

Alignment đã mở ForRead trong transaction. Trả collection; có thể không có trắc dọc.

## Cách dùng

Chọn profile thiết kế theo tên/loại trước khi so cao độ.

```csharp
foreach (ObjectId id in alignment.GetProfileIds()) {
  if (tr.GetObject(id, OpenMode.ForRead) is Profile profile)
    names.Add(profile.Name);
}
```

## Kiểm tra khi áp dụng

Không lấy phần tử [0] khi collection rỗng hoặc khi có nhiều Profile khác vai trò.
