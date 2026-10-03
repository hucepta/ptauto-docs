---
{
  "id": "concept.gis-data-automation.st-geometrytype",
  "slug": "st-geometrytype",
  "title": "ST_GeometryType",
  "description": "Tên kiểu bắt đầu bằng ST_.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_GeometryType",
      "url": "https://postgis.net/docs/ST_GeometryType.html"
    }
  ],
  "searchableTerms": [
    "ST_GeometryType"
  ]
}
---

## Cú pháp

```sql
ST_GeometryType(geometry)
```

## Tham số

geometry là hình cần nhận dạng.

## Kết quả

Tên kiểu bắt đầu bằng ST_.

## Ví dụ

```sql
SELECT ST_GeometryType(ST_MakePoint(10,20)); -- ST_Point
```

## Dễ nhầm

MultiPolygon khác Polygon; kiểm kiểu sau các phép sửa.
