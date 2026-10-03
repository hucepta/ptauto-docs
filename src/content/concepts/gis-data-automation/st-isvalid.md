---
{
  "id": "concept.gis-data-automation.st-isvalid",
  "slug": "st-isvalid",
  "title": "ST_IsValid",
  "description": "Kiểm geometry có hợp lệ theo quy tắc hình học 2D.",
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
      "url": "https://postgis.net/docs/ST_IsValid.html"
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
SELECT ST_IsValid(geom);
```

## Tham số và kết quả

geom là geometry PostGIS. Boolean; xem ST_IsValidReason/Detail để biết lỗi.

## Cách dùng

Loại polygon self-intersection trước khi overlay.

```sql
SELECT id, ST_IsValid(geom) AS ok FROM parcels;
```

## Kiểm tra khi áp dụng

Không tự sửa geometry lỗi rồi coi dữ liệu gốc đã đúng; cần ghi báo cáo lỗi.
