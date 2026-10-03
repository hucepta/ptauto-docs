---
{
  "id": "concept.civil3d-dotnet.alignment-stationoffset",
  "slug": "alignment-stationoffset",
  "title": "Alignment.StationOffset",
  "description": "Từ Easting/Northing tính station và offset của điểm so với Alignment.",
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
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm"
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
alignment.StationOffset(easting, northing, ref station, ref offset);
```

## Tham số và kết quả

easting/northing là tọa độ nguồn; station/offset là biến ref. Điền station/offset; có thể ném lỗi nếu điểm ngoài phạm vi tuyến.

## Cách dùng

Kiểm vị trí hố ga hoặc điểm khảo sát so với tim tuyến.

```csharp
double station = 0, offset = 0;
alignment.StationOffset(e, n, ref station, ref offset);
```

## Kiểm tra khi áp dụng

Phân biệt với PointLocation là chiều biến đổi ngược; xử lý PointNotOnEntityException.
