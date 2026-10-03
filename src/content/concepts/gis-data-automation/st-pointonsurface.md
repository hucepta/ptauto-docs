---
{
  "id": "concept.gis-data-automation.st-pointonsurface",
  "slug": "st-pointonsurface",
  "title": "ST_PointOnSurface",
  "description": "Điểm nằm trong phần mặt của vùng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_PointOnSurface",
      "url": "https://postgis.net/docs/ST_PointOnSurface.html"
    }
  ],
  "searchableTerms": [
    "ST_PointOnSurface"
  ]
}
---

## Cú pháp

```sql
ST_PointOnSurface(geometry)
```

## Tham số

geometry là vùng cần điểm nhãn.

## Kết quả

Điểm nằm trong phần mặt của vùng.

## Ví dụ

```sql
SELECT ST_AsText(ST_PointOnSurface(ST_GeomFromText('POLYGON((0 0,2 0,2 2,0 0))')));
```

## Dễ nhầm

Không đảm bảo là vị trí đẹp nhất để đặt nhãn bản đồ.
