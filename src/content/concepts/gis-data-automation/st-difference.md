---
{
  "id": "concept.gis-data-automation.st-difference",
  "slug": "st-difference",
  "title": "ST_Difference",
  "description": "Phần của a ngoài b.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Difference",
      "url": "https://postgis.net/docs/ST_Difference.html"
    }
  ],
  "searchableTerms": [
    "ST_Difference"
  ]
}
---

## Cú pháp

```sql
ST_Difference(a, b)
```

## Tham số

a là hình giữ; b là hình loại.

## Kết quả

Phần của a ngoài b.

## Ví dụ

```sql
SELECT ST_AsText(ST_Difference(ST_GeomFromText('LINESTRING(0 0,2 0)'),ST_GeomFromText('LINESTRING(1 0,3 0)')));
```

## Dễ nhầm

Thứ tự a,b quyết định phần được giữ.
