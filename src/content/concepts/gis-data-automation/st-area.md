---
{
  "id": "concept.gis-data-automation.st-area",
  "slug": "st-area",
  "title": "ST_Area",
  "description": "Diện tích phẳng theo bình phương đơn vị CRS.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Area",
      "url": "https://postgis.net/docs/ST_Area.html"
    }
  ],
  "searchableTerms": [
    "ST_Area"
  ]
}
---

## Cú pháp

```sql
ST_Area(geometry)
```

## Tham số

geometry là vùng trong CRS phù hợp.

## Kết quả

Diện tích phẳng theo bình phương đơn vị CRS.

## Ví dụ

```sql
SELECT ST_Area(ST_GeomFromText('POLYGON((0 0,10 0,10 5,0 5,0 0))')); -- 50
```

## Dễ nhầm

Geometry 4326 cho độ vuông; geography có quy tắc/đơn vị khác.
