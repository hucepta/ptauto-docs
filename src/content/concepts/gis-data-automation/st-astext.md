---
{
  "id": "concept.gis-data-automation.st-astext",
  "slug": "st-astext",
  "title": "ST_AsText",
  "description": "Văn bản WKT không chứa SRID.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_AsText",
      "url": "https://postgis.net/docs/ST_AsText.html"
    }
  ],
  "searchableTerms": [
    "ST_AsText"
  ]
}
---

## Cú pháp

```sql
ST_AsText(geometry)
```

## Tham số

geometry là hình cần xuất.

## Kết quả

Văn bản WKT không chứa SRID.

## Ví dụ

```sql
SELECT ST_AsText(ST_MakePoint(10,20));
```

## Dễ nhầm

Không dùng WKT đơn thuần thay toàn bộ thông tin bàn giao CRS.
