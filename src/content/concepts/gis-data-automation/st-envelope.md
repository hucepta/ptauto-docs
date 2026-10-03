---
{
  "id": "concept.gis-data-automation.st-envelope",
  "slug": "st-envelope",
  "title": "ST_Envelope",
  "description": "Khung bao song song trục.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Envelope",
      "url": "https://postgis.net/docs/ST_Envelope.html"
    }
  ],
  "searchableTerms": [
    "ST_Envelope"
  ]
}
---

## Cú pháp

```sql
ST_Envelope(geometry)
```

## Tham số

geometry là hình nguồn.

## Kết quả

Khung bao song song trục.

## Ví dụ

```sql
SELECT ST_AsText(ST_Envelope(ST_GeomFromText('LINESTRING(0 0,3 4)')));
```

## Dễ nhầm

Khung bao chỉ là sơ lọc, không thay ST_Intersects.
