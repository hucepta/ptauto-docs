---
{
  "id": "concept.civil3d-dotnet.getalignmentids",
  "slug": "getalignmentids",
  "title": "CivilDocument.GetAlignmentIds",
  "description": "Liệt kê ObjectId của các Alignment trong CivilDocument.",
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
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
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
ObjectIdCollection ids = civilDoc.GetAlignmentIds();
```

## Tham số và kết quả

Không có đối số. Trả ObjectIdCollection; có thể rỗng.

## Cách dùng

Mở từng ID trong transaction để đọc Name, StartingStation và EndingStation.

```csharp
foreach (ObjectId id in civilDoc.GetAlignmentIds()) {
  if (tr.GetObject(id, OpenMode.ForRead) is Alignment a)
    names.Add(a.Name);
}
```

## Kiểm tra khi áp dụng

Kiểm collection rỗng trước khi lấy phần tử đầu tiên.
