---
{
  "id": "concept.gis-data-automation.st-covers",
  "slug": "st-covers",
  "title": "ST_Covers",
  "description": "True nếu mọi điểm b nằm trong hoặc trên ranh a.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Covers",
      "url": "https://postgis.net/docs/ST_Covers.html"
    }
  ],
  "searchableTerms": [
    "ST_Covers"
  ]
}
---

## Cú pháp

```sql
ST_Covers(a, b)
```

## Tham số

a là hình phủ; b là hình xét.

## Kết quả

True nếu mọi điểm b nằm trong hoặc trên ranh a.

## Ví dụ

```sql
SELECT ST_Covers(ST_GeomFromText('POLYGON((0 0,2 0,2 2,0 0))'),ST_MakePoint(0,0)); -- true
```

## Dễ nhầm

Quan hệ có hướng; đổi thứ tự đối số đổi kết quả.
