---
{
  "id": "concept.gis-data-automation.st-centroid",
  "slug": "st-centroid",
  "title": "ST_Centroid",
  "description": "Trọng tâm hình học.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Centroid",
      "url": "https://postgis.net/docs/ST_Centroid.html"
    }
  ],
  "searchableTerms": [
    "ST_Centroid"
  ]
}
---

## Cú pháp

```sql
ST_Centroid(geometry)
```

## Tham số

geometry là hình cần tâm.

## Kết quả

Trọng tâm hình học.

## Ví dụ

```sql
SELECT ST_AsText(ST_Centroid(ST_GeomFromText('LINESTRING(0 0,10 0)'))); -- POINT(5 0)
```

## Dễ nhầm

Tâm polygon lõm có thể ngoài vùng.
