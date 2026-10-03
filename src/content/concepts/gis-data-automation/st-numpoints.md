---
{
  "id": "concept.gis-data-automation.st-numpoints",
  "slug": "st-numpoints",
  "title": "ST_NumPoints",
  "description": "Số đỉnh của tuyến.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_NumPoints",
      "url": "https://postgis.net/docs/ST_NumPoints.html"
    }
  ],
  "searchableTerms": [
    "ST_NumPoints"
  ]
}
---

## Cú pháp

```sql
ST_NumPoints(linestring)
```

## Tham số

linestring là tuyến cần đếm.

## Kết quả

Số đỉnh của tuyến.

## Ví dụ

```sql
SELECT ST_NumPoints(ST_GeomFromText('LINESTRING(0 0,1 1,2 1)')); -- 3
```

## Dễ nhầm

Không dùng để đếm số feature; với kiểu khác dùng ST_NPoints.
