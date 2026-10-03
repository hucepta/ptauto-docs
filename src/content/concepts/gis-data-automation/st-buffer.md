---
{
  "id": "concept.gis-data-automation.st-buffer",
  "slug": "st-buffer",
  "title": "ST_Buffer",
  "description": "Vùng đệm 2D.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Buffer",
      "url": "https://postgis.net/docs/ST_Buffer.html"
    }
  ],
  "searchableTerms": [
    "ST_Buffer"
  ]
}
---

## Cú pháp

```sql
ST_Buffer(geometry, radius)
```

## Tham số

radius theo đơn vị CRS, có thể âm với vùng.

## Kết quả

Vùng đệm 2D.

## Ví dụ

```sql
SELECT ST_Area(ST_Buffer(ST_MakePoint(0,0),10));
```

## Dễ nhầm

Đường cong được xấp xỉ; chọn tham số cung và CRS phù hợp.
