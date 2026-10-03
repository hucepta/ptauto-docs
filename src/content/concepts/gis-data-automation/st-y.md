---
{
  "id": "concept.gis-data-automation.st-y",
  "slug": "st-y",
  "title": "ST_Y",
  "description": "Tọa độ y của điểm.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Y",
      "url": "https://postgis.net/docs/ST_Y.html"
    }
  ],
  "searchableTerms": [
    "ST_Y"
  ]
}
---

## Cú pháp

```sql
ST_Y(point)
```

## Tham số

point phải là hình Point.

## Kết quả

Tọa độ y của điểm.

## Ví dụ

```sql
SELECT ST_Y(ST_MakePoint(10,20)); -- 20
```

## Dễ nhầm

Đơn vị phụ thuộc CRS, không mặc định là mét.
