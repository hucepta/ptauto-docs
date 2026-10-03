---
{
  "id": "concept.gis-data-automation.st-srid",
  "slug": "st-srid",
  "title": "ST_SRID",
  "description": "Số nguyên SRID đang lưu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_SRID",
      "url": "https://postgis.net/docs/ST_SRID.html"
    }
  ],
  "searchableTerms": [
    "ST_SRID"
  ]
}
---

## Cú pháp

```sql
ST_SRID(geometry)
```

## Tham số

geometry là hình cần đọc nhãn.

## Kết quả

Số nguyên SRID đang lưu.

## Ví dụ

```sql
SELECT ST_SRID(ST_SetSRID(ST_MakePoint(10,20),4326)); -- 4326
```

## Dễ nhầm

Đọc được SRID không chứng minh đã gán đúng nguồn.
