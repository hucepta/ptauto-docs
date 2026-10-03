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
      "title": "Autodesk — Alignment.PointLocation",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/f7b94f73-828d-7988-4347-207ae780cc5c.htm"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-DevGuide/files/GUID-8CEA16C1-D0F0-44A6-98B0-5120F2A69CB0.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Đối chiếu chữ ký với SDK phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```csharp
public void PointLocation(
	double station,
	double offset,
	ref double easting,
	ref double northing
)
```

## Cách gọi

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
