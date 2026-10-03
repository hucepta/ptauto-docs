---
{
  "id": "concept.gis-data-automation.shapely-union",
  "slug": "shapely-union",
  "title": "Shapely union",
  "description": "Hình học phủ cả hai đầu vào.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely union",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.union.html"
    }
  ],
  "searchableTerms": [
    "Shapely union"
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
shapely.union(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hình cần hợp.

## Kết quả

Hình học phủ cả hai đầu vào.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.union(shapely.box(0,0,2,2),shapely.box(1,1,3,3)).area) # 7
```

## Dễ nhầm

Thuộc tính ID không được gộp bởi phép hình học này.
