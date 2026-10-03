---
{
  "id": "concept.gis-data-automation.st-z",
  "slug": "st-z",
  "title": "ST_Z",
  "description": "Tọa độ Z hoặc NULL khi không có.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Z",
      "url": "https://postgis.net/docs/ST_Z.html"
    }
  ],
  "searchableTerms": [
    "ST_Z"
  ]
}
---

## Cú pháp

```sql
ST_Z(point)
```

## Tham số

point là Point có thể có Z.

## Kết quả

Tọa độ Z hoặc NULL khi không có.

## Ví dụ

```sql
SELECT ST_Z(ST_MakePoint(10,20,3)); -- 3
```

## Dễ nhầm

SRID ngang không tự xác định datum cao độ.
