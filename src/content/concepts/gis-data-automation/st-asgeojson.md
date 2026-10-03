---
{
  "id": "concept.gis-data-automation.st-asgeojson",
  "slug": "st-asgeojson",
  "title": "ST_AsGeoJSON",
  "description": "Chuỗi JSON mô tả hình học.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_AsGeoJSON",
      "url": "https://postgis.net/docs/ST_AsGeoJSON.html"
    }
  ],
  "searchableTerms": [
    "ST_AsGeoJSON"
  ]
}
---

## Cú pháp

```sql
ST_AsGeoJSON(geometry, maxdecimaldigits=9, options=8)
```

## Tham số

geometry là hình; maxdecimaldigits giới hạn chữ số.

## Kết quả

Chuỗi JSON mô tả hình học.

## Ví dụ

```sql
SELECT ST_AsGeoJSON(ST_SetSRID(ST_MakePoint(106,10),4326));
```

## Dễ nhầm

GeoJSON RFC 7946 dùng WGS84 kinh/vĩ độ; chuyển CRS trước xuất.
