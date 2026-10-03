---
{
  "id": "concept.gis-data-automation.shapely-get-num-geometries",
  "slug": "shapely-get-num-geometries",
  "title": "Shapely get_num_geometries",
  "description": "Số phần hình học cấp đầu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely get_num_geometries",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.get_num_geometries.html"
    }
  ],
  "searchableTerms": [
    "Shapely get_num_geometries"
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
shapely.get_num_geometries(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry có thể là multi hoặc collection.

## Kết quả

Số phần hình học cấp đầu.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.get_num_geometries(shapely.MultiPoint([(0,0),(1,1)]))) # 2
```

## Dễ nhầm

Không đếm đỉnh hay số hàng trong bảng.
