---
{
  "id": "concept.gis-data-automation.st-perimeter",
  "slug": "st-perimeter",
  "title": "ST_Perimeter",
  "description": "Tổng chiều dài ranh 2D.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Perimeter",
      "url": "https://postgis.net/docs/ST_Perimeter.html"
    }
  ],
  "searchableTerms": [
    "ST_Perimeter"
  ]
}
---

## Cú pháp

```sql
ST_Perimeter(geometry)
```

## Tham số

geometry là vùng cần chu vi.

## Kết quả

Tổng chiều dài ranh 2D.

## Ví dụ

```sql
SELECT ST_Perimeter(ST_GeomFromText('POLYGON((0 0,10 0,10 5,0 5,0 0))')); -- 30
```

## Dễ nhầm

Lỗ bên trong cũng có ranh; kiểm cách báo cáo chu vi dự án.
