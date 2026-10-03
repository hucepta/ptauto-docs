---
{
  "id": "concept.gis-data-automation.shapely-within",
  "slug": "shapely-within",
  "title": "Shapely within",
  "description": "True nếu a nằm trong b.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely within",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.within.html"
    }
  ],
  "searchableTerms": [
    "Shapely within"
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
shapely.within(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a là hình kiểm; b là hình chứa.

## Kết quả

True nếu a nằm trong b.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.within(Point(1,1),shapely.box(0,0,2,2))) # True
```

## Dễ nhầm

Điểm trên ranh không thỏa within.
