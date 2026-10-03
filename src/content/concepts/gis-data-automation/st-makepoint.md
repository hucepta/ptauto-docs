---
{
  "id": "concept.gis-data-automation.st-makepoint",
  "slug": "st-makepoint",
  "title": "ST_MakePoint",
  "description": "Hình học Point chưa mang hệ quy chiếu đã xác minh.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_MakePoint",
      "url": "https://postgis.net/docs/ST_MakePoint.html"
    }
  ],
  "searchableTerms": [
    "ST_MakePoint"
  ]
}
---

## Cú pháp

```sql
ST_MakePoint(x, y)
```

## Tham số

x,y là tọa độ số.

## Kết quả

Hình học Point chưa mang hệ quy chiếu đã xác minh.

## Ví dụ

```sql
SELECT ST_AsText(ST_MakePoint(10,20)); -- POINT(10 20)
```

## Dễ nhầm

Với tọa độ địa lý x là kinh độ; không đảo x/y.
