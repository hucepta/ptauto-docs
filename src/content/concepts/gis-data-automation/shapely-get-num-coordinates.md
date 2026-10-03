---
{
  "id": "concept.gis-data-automation.shapely-get-num-coordinates",
  "slug": "shapely-get-num-coordinates",
  "title": "Shapely get_num_coordinates",
  "description": "Số tọa độ, gồm điểm đóng vòng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely get_num_coordinates",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.get_num_coordinates.html"
    }
  ],
  "searchableTerms": [
    "Shapely get_num_coordinates"
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
shapely.get_num_coordinates(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần đếm tọa độ.

## Kết quả

Số tọa độ, gồm điểm đóng vòng.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.get_num_coordinates(LineString([(0,0),(1,1)]))) # 2
```

## Dễ nhầm

Polygon đóng vòng có tọa độ đầu lặp ở cuối.
