---
{
  "id": "concept.gis-data-automation.st-x",
  "slug": "st-x",
  "title": "ST_X",
  "description": "Tọa độ x của điểm.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_X",
      "url": "https://postgis.net/docs/ST_X.html"
    }
  ],
  "searchableTerms": [
    "ST_X"
  ]
}
---

## Cú pháp

```sql
ST_X(point)
```

## Tham số

point phải là hình Point.

## Kết quả

Tọa độ x của điểm.

## Ví dụ

```sql
SELECT ST_X(ST_MakePoint(10,20)); -- 10
```

## Dễ nhầm

Không nhận LineString làm điểm; x không luôn là kinh độ.
