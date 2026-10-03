---
{
  "id": "concept.gis-data-automation.shapely-intersection",
  "slug": "shapely-intersection",
  "title": "Shapely intersection",
  "description": "Phần chung của hai hình.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely intersection",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.intersection.html"
    }
  ],
  "searchableTerms": [
    "Shapely intersection"
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
shapely.intersection(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hình học cùng CRS và đơn vị.

## Kết quả

Phần chung của hai hình.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.intersection(shapely.box(0,0,2,2),shapely.box(1,1,3,3)).area) # 1
```

## Dễ nhầm

Kết quả có thể rỗng hoặc khác kiểu hình đầu vào.
