---
{
  "id": "concept.gis-data-automation.st-intersection",
  "slug": "st-intersection",
  "title": "ST_Intersection",
  "description": "Phần hình học chung.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Intersection",
      "url": "https://postgis.net/docs/ST_Intersection.html"
    }
  ],
  "searchableTerms": [
    "ST_Intersection"
  ]
}
---

## Cú pháp

```sql
ST_Intersection(a, b)
```

## Tham số

a,b là hình cùng CRS.

## Kết quả

Phần hình học chung.

## Ví dụ

```sql
SELECT ST_AsText(ST_Intersection(ST_GeomFromText('LINESTRING(0 0,2 0)'),ST_GeomFromText('LINESTRING(1 -1,1 1)'))); -- POINT(1 0)
```

## Dễ nhầm

Kết quả có thể đổi kiểu; lưu quan hệ ID hai nguồn riêng.
