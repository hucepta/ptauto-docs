---
{
  "id": "concept.gis-data-automation.shapely-contains",
  "slug": "shapely-contains",
  "title": "Shapely contains",
  "description": "True khi b nằm trong a theo quan hệ chứa.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely contains",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.contains.html"
    }
  ],
  "searchableTerms": [
    "Shapely contains"
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
shapely.contains(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a là hình chứa; b là hình kiểm.

## Kết quả

True khi b nằm trong a theo quan hệ chứa.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.contains(shapely.box(0,0,2,2),Point(1,1))) # True
```

## Dễ nhầm

Một điểm nằm đúng ranh polygon không được contains nhận.
