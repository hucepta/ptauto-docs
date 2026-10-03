---
{
  "id": "concept.gis-data-automation.st-isvalidreason",
  "slug": "st-isvalidreason",
  "title": "ST_IsValidReason",
  "description": "Thông báo lý do hợp lệ hoặc lỗi.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_IsValidReason",
      "url": "https://postgis.net/docs/ST_IsValidReason.html"
    }
  ],
  "searchableTerms": [
    "ST_IsValidReason"
  ]
}
---

## Cú pháp

```sql
ST_IsValidReason(geometry)
```

## Tham số

geometry là hình cần chẩn đoán.

## Kết quả

Thông báo lý do hợp lệ hoặc lỗi.

## Ví dụ

```sql
SELECT ST_IsValidReason(ST_GeomFromText('POLYGON((0 0,1 0,1 1,0 0))'));
```

## Dễ nhầm

Kiểm hợp lệ không xác nhận topology giữa các hàng.
