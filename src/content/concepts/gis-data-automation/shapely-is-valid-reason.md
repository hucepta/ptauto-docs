---
{
  "id": "concept.gis-data-automation.shapely-is-valid-reason",
  "slug": "shapely-is-valid-reason",
  "title": "Shapely is_valid_reason",
  "description": "Chuỗi lý do hợp lệ hoặc lỗi.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely is_valid_reason",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.is_valid_reason.html"
    }
  ],
  "searchableTerms": [
    "Shapely is_valid_reason"
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
shapely.is_valid_reason(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần chẩn đoán.

## Kết quả

Chuỗi lý do hợp lệ hoặc lỗi.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.is_valid_reason(shapely.box(0,0,1,1)))
```

## Dễ nhầm

Thông báo không tự sửa hình hoặc giải thích quy tắc nghiệp vụ.
