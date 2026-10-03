---
{
  "id": "concept.gis-data-automation.st-within",
  "slug": "st-within",
  "title": "ST_Within",
  "description": "Cờ quan hệ nằm trong.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Within",
      "url": "https://postgis.net/docs/ST_Within.html"
    }
  ],
  "searchableTerms": [
    "ST_Within"
  ]
}
---

## Cú pháp

```sql
ST_Within(a, b)
```

## Tham số

a là hình xét; b là hình chứa.

## Kết quả

Cờ quan hệ nằm trong.

## Ví dụ

```sql
SELECT ST_Within(ST_MakePoint(0,0),ST_Buffer(ST_MakePoint(0,0),10)); -- true
```

## Dễ nhầm

Không dùng để giữ điểm đúng trên ranh vùng.
