---
{
  "id": "concept.civil3d-dotnet.surface-findelevationatxy",
  "slug": "surface-findelevationatxy",
  "title": "Surface.FindElevationAtXY",
  "description": "Đọc cao độ Surface tại tọa độ XY.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.FindElevationAtXY",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
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
public double FindElevationAtXY(
	double x,
	double y
)
```

## Cách gọi

```csharp
double z = surface.FindElevationAtXY(x, y);
```

## Tham số và kết quả

x/y là Easting/Northing cùng hệ tọa độ DWG. Trả cao độ; điểm ngoài miền Surface có thể ném PointNotOnEntityException.

## Cách dùng

So nền hiện trạng với Profile tại mốc tuyến.

```csharp
try { groundZ = surface.FindElevationAtXY(e, n); }
catch (PointNotOnEntityException) { /* ghi ngoài surface */ }
```

## Kiểm tra khi áp dụng

Không thay lỗi ngoài Surface bằng cao độ 0 vì sẽ làm sai báo cáo.
