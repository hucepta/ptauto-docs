---
{
  "id": "concept.civil3d-dotnet.getsurfaceids",
  "slug": "getsurfaceids",
  "title": "CivilDocument.GetSurfaceIds",
  "description": "Liệt kê ID của các Surface trong bản vẽ Civil 3D.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-DevGuide/files/GUID-655D3624-20DD-4E47-B0ED-484AA43FAB8B.htm"
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
ObjectIdCollection ids = civilDoc.GetSurfaceIds();
```

## Tham số và kết quả

Không có đối số. Trả ObjectIdCollection của Surface; có thể rỗng.

## Cách dùng

Chọn đúng Surface theo tên/loại trước khi lấy cao độ.

```csharp
foreach (ObjectId id in civilDoc.GetSurfaceIds()) {
  var s = tr.GetObject(id, OpenMode.ForRead) as Autodesk.Civil.DatabaseServices.Surface;
  if (s != null) names.Add(s.Name);
}
```

## Kiểm tra khi áp dụng

Phân biệt Autodesk.Civil.DatabaseServices.Surface với lớp Surface của AutoCAD.
