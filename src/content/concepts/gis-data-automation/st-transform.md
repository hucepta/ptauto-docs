---
{
  "id": "concept.gis-data-automation.st-transform",
  "slug": "st-transform",
  "title": "ST_Transform",
  "description": "Biến đổi geometry PostGIS sang SRID đích.",
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
      "url": "https://postgis.net/docs/ST_Transform.html"
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
SELECT ST_Transform(geom, target_srid);
```

## Tham số và kết quả

geom phải có SRID nguồn đúng; target_srid tồn tại trong spatial_ref_sys. Geometry mới với tọa độ đích.

## Cách dùng

Chuẩn hóa lớp đầu vào trước truy vấn giao cắt.

```sql
SELECT ST_Transform(geom, 3857) FROM input WHERE geom IS NOT NULL;
```

## Kiểm tra khi áp dụng

Kiểm hệ nguồn, vùng áp dụng và đơn vị; phép biến đổi không sửa CRS nguồn bị gán sai.
