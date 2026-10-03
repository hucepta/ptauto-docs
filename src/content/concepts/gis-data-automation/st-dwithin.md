---
{
  "id": "concept.gis-data-automation.st-dwithin",
  "slug": "st-dwithin",
  "title": "ST_DWithin",
  "description": "True nếu khoảng cách không vượt ngưỡng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_DWithin",
      "url": "https://postgis.net/docs/ST_DWithin.html"
    }
  ],
  "searchableTerms": [
    "ST_DWithin"
  ]
}
---

## Cú pháp

```sql
ST_DWithin(a, b, distance)
```

## Tham số

a,b cùng CRS; distance theo đơn vị CRS của geometry.

## Kết quả

True nếu khoảng cách không vượt ngưỡng.

## Ví dụ

```sql
SELECT ST_DWithin(ST_MakePoint(0,0),ST_MakePoint(3,4),5); -- true
```

## Dễ nhầm

Không đặt 5 với ý nghĩa mét nếu geometry dùng độ.
