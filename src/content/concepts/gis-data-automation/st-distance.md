---
{
  "id": "concept.gis-data-automation.st-distance",
  "slug": "st-distance",
  "title": "ST_Distance",
  "description": "Khoảng cách ngắn nhất 2D theo đơn vị CRS.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Distance",
      "url": "https://postgis.net/docs/ST_Distance.html"
    }
  ],
  "searchableTerms": [
    "ST_Distance"
  ]
}
---

## Cú pháp

```sql
ST_Distance(a, b)
```

## Tham số

a,b là geometry cùng CRS.

## Kết quả

Khoảng cách ngắn nhất 2D theo đơn vị CRS.

## Ví dụ

```sql
SELECT ST_Distance(ST_MakePoint(0,0),ST_MakePoint(3,4)); -- 5
```

## Dễ nhầm

Khoảng cách geometry địa lý là độ; geography có phép đo mét.
