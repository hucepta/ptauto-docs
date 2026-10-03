---
{
  "id": "concept.gis-data-automation.st-isempty",
  "slug": "st-isempty",
  "title": "ST_IsEmpty",
  "description": "Cờ rỗng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_IsEmpty",
      "url": "https://postgis.net/docs/ST_IsEmpty.html"
    }
  ],
  "searchableTerms": [
    "ST_IsEmpty"
  ]
}
---

## Cú pháp

```sql
ST_IsEmpty(geometry)
```

## Tham số

geometry là hình cần kiểm.

## Kết quả

Cờ rỗng.

## Ví dụ

```sql
SELECT ST_IsEmpty(ST_GeomFromText('POINT EMPTY')); -- true
```

## Dễ nhầm

NULL là thiếu dữ liệu, không phải hình rỗng; kiểm IS NULL riêng.
