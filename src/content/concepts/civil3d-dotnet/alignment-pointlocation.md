---
{
  "id": "concept.civil3d-dotnet.alignment-pointlocation",
  "slug": "alignment-pointlocation",
  "title": "Alignment.PointLocation",
  "description": "Từ station và offset tìm tọa độ trên hoặc cạnh Alignment.",
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
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-DevGuide/files/GUID-8CEA16C1-D0F0-44A6-98B0-5120F2A69CB0.htm"
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
alignment.PointLocation(station, offset, ref easting, ref northing);
```

## Tham số và kết quả

station nằm trong phạm vi tuyến; offset theo quy ước Civil 3D; easting/northing là ref. Điền tọa độ Easting và Northing vào hai biến ref.

## Cách dùng

Tạo mốc lý trình từ danh sách station đã xác thực.

```csharp
double e = 0, n = 0;
alignment.PointLocation(station, 0, ref e, ref n);
var p = new Point3d(e, n, 0);
```

## Kiểm tra khi áp dụng

Đừng nhập tọa độ XY vào vị trí của station/offset; kiểm station ngoài tuyến.
