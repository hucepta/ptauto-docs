---
{
  "id": "concept.gis-data-automation.shapely-area",
  "slug": "shapely-area",
  "title": "Shapely area",
  "description": "Diện tích phẳng, bình phương đơn vị tọa độ.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely area",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.area.html"
    }
  ],
  "searchableTerms": [
    "Shapely area"
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
shapely.area(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình học hoặc mảng hình học.

## Kết quả

Diện tích phẳng, bình phương đơn vị tọa độ.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.area(shapely.box(0,0,10,5))) # 50
```

## Dễ nhầm

Shapely không chuyển CRS; độ vuông không phải mét vuông.
