---
{
  "id": "concept.gis-data-automation.shapely-buffer",
  "slug": "shapely-buffer",
  "title": "Shapely buffer",
  "description": "Vùng đệm quanh hình.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely buffer",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.buffer.html"
    }
  ],
  "searchableTerms": [
    "Shapely buffer"
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
shapely.buffer(geometry, distance, quad_segs=8)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

distance theo đơn vị tọa độ; quad_segs quyết định xấp xỉ cung.

## Kết quả

Vùng đệm quanh hình.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.buffer(Point(0,0),10).area)
```

## Dễ nhầm

Chọn CRS mét trước khi đệm 10 mét; độ không phải mét.
