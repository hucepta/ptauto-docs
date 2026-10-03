---
{
  "id": "concept.gis-data-automation.st-setsrid",
  "slug": "st-setsrid",
  "title": "ST_SetSRID",
  "description": "Gán SRID cho geometry PostGIS mà không tính lại tọa độ.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức",
      "url": "https://postgis.net/docs/ST_SetSRID.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```sql
SELECT ST_SetSRID(geom, source_srid);
```

## Tham số và kết quả

source_srid mô tả đúng số tọa độ hiện có. Geometry được gắn metadata SRID.

## Cách dùng

Sửa dữ liệu thiếu metadata sau khi xác minh CRS nguồn.

```sql
SELECT ST_SRID(ST_SetSRID(geom, 4326)) FROM input;
```

## Kiểm tra khi áp dụng

Muốn đổi hệ tọa độ thực dùng ST_Transform, không dùng ST_SetSRID.
