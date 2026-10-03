---
{
  "id": "concept.civil3d-dotnet.profile-elevationat",
  "slug": "profile-elevationat",
  "title": "Profile.ElevationAt",
  "description": "Đọc cao độ Profile tại một station.",
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
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d068db0a-6cc5-8535-609c-85b357dbf6c9.htm"
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
double z = profile.ElevationAt(station);
```

## Tham số và kết quả

station theo lý trình Alignment tương ứng, trong miền Profile. Trả double cao độ.

## Cách dùng

So cao độ thiết kế với surface tại các cọc kiểm tra.

```csharp
double designZ = profile.ElevationAt(station);
double delta = designZ - groundZ;
```

## Kiểm tra khi áp dụng

Kiểm phạm vi Profile và đơn vị trước khi tính chênh cao.
