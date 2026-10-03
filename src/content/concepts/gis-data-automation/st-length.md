---
{
  "id": "concept.gis-data-automation.st-length",
  "slug": "st-length",
  "title": "ST_Length",
  "description": "Chiều dài 2D theo đơn vị CRS.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Length",
      "url": "https://postgis.net/docs/ST_Length.html"
    }
  ],
  "searchableTerms": [
    "ST_Length"
  ]
}
---

## Cú pháp

```sql
ST_Length(geometry)
```

## Tham số

geometry là tuyến trong CRS đã biết.

## Kết quả

Chiều dài 2D theo đơn vị CRS.

## Ví dụ

```sql
SELECT ST_Length(ST_GeomFromText('LINESTRING(0 0,3 4)')); -- 5
```

## Dễ nhầm

Polygon dùng ST_Perimeter; chiều dài 2D không cộng cao độ.
