---
{
  "id": "concept.gis-data-automation.geopandas-sjoin",
  "slug": "geopandas-sjoin",
  "title": "geopandas.sjoin",
  "description": "Ghép thuộc tính theo quan hệ không gian giữa hai lớp vector.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.sjoin.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```python
joined = geopandas.sjoin(left, right, how='left', predicate='intersects')
```

## Tham số và kết quả

Hai lớp cần CRS phù hợp; predicate chọn quan hệ hình học. GeoDataFrame kết quả, có thể nhân hàng khi một feature khớp nhiều feature.

## Cách dùng

Gán khu vực hành chính cho mốc hoặc kiểm ống giao phạm vi cấm.

```python
joined = geopandas.sjoin(points, zones, predicate='within')
```

## Kiểm tra khi áp dụng

Kiểm cardinality sau join; intersects/within không cùng nghĩa tại biên.
