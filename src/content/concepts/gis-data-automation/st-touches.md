---
{
  "id": "concept.gis-data-automation.st-touches",
  "slug": "st-touches",
  "title": "ST_Touches",
  "description": "True nếu giao nhau ở ranh, không ở phần trong.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Touches",
      "url": "https://postgis.net/docs/ST_Touches.html"
    }
  ],
  "searchableTerms": [
    "ST_Touches"
  ]
}
---

## Cú pháp

```sql
ST_Touches(a, b)
```

## Tham số

a,b là hai hình cần xét.

## Kết quả

True nếu giao nhau ở ranh, không ở phần trong.

## Ví dụ

```sql
SELECT ST_Touches(ST_GeomFromText('LINESTRING(0 0,1 0)'),ST_GeomFromText('LINESTRING(1 0,2 0)')); -- true
```

## Dễ nhầm

Tiếp xúc hình học không xác nhận mạng ống có cùng cao độ.
