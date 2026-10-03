---
{
  "id": "concept.gis-data-automation.st-intersects",
  "slug": "st-intersects",
  "title": "ST_Intersects",
  "description": "Kiểm hai geometry có phần không gian chung.",
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
      "url": "https://postgis.net/docs/ST_Intersects.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```sql
SELECT ST_Intersects(a.geom, b.geom);
```

## Tham số và kết quả

Hai geometry phải so trong cùng hệ tọa độ phù hợp. Boolean.

## Cách dùng

Tìm đoạn ống giao vùng kiểm soát.

```sql
SELECT a.id, b.id FROM pipes a JOIN zones b ON ST_Intersects(a.geom, b.geom);
```

## Kiểm tra khi áp dụng

Intersects bao gồm chạm biên; dùng quan hệ khác khi quy tắc nghiệp vụ yêu cầu.
