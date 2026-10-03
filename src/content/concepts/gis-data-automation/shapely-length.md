---
{
  "id": "concept.gis-data-automation.shapely-length",
  "slug": "shapely-length",
  "title": "Shapely length",
  "description": "Chiều dài tuyến hoặc chu vi vùng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely length",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.length.html"
    }
  ],
  "searchableTerms": [
    "Shapely length"
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
shapely.length(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là tuyến hoặc vùng.

## Kết quả

Chiều dài tuyến hoặc chu vi vùng.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.length(LineString([(0,0),(3,4)]))) # 5
```

## Dễ nhầm

Z không tham gia chiều dài phẳng.
