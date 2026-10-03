---
{
  "id": "concept.gis-data-automation.st-asewkt",
  "slug": "st-asewkt",
  "title": "ST_AsEWKT",
  "description": "Văn bản mở rộng có SRID.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_AsEWKT",
      "url": "https://postgis.net/docs/ST_AsEWKT.html"
    }
  ],
  "searchableTerms": [
    "ST_AsEWKT"
  ]
}
---

## Cú pháp

```sql
ST_AsEWKT(geometry)
```

## Tham số

geometry chứa tọa độ và SRID.

## Kết quả

Văn bản mở rộng có SRID.

## Ví dụ

```sql
SELECT ST_AsEWKT(ST_SetSRID(ST_MakePoint(10,20),4326));
```

## Dễ nhầm

EWKT không phải GeoJSON và không phải WKT chuẩn cho mọi phần mềm.
