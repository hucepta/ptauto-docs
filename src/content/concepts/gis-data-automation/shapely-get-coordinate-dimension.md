---
{
  "id": "concept.gis-data-automation.shapely-get-coordinate-dimension",
  "slug": "shapely-get-coordinate-dimension",
  "title": "Shapely get_coordinate_dimension",
  "description": "Số chiều tọa độ của hình.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely get_coordinate_dimension",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.get_coordinate_dimension.html"
    }
  ],
  "searchableTerms": [
    "Shapely get_coordinate_dimension"
  ],
  "compatibility": [
    {
      "product": "Shapely",
      "version": "API dạng hàm của Shapely 2.x; kiểm phiên bản GEOS khi dùng tùy chọn mới."
    }
  ]
}
---

## Cú pháp

```python
shapely.get_coordinate_dimension(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần kiểm số thành phần tọa độ.

## Kết quả

Số chiều tọa độ của hình.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.get_coordinate_dimension(Point(1,2,3))) # 3
```

## Dễ nhầm

Có Z không làm phép phân tích Shapely thành phép đo 3D.
