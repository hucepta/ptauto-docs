---
{
  "id": "concept.gis-data-automation.st-contains",
  "slug": "st-contains",
  "title": "ST_Contains",
  "description": "Cờ quan hệ chứa.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Contains",
      "url": "https://postgis.net/docs/ST_Contains.html"
    }
  ],
  "searchableTerms": [
    "ST_Contains"
  ]
}
---

## Cú pháp

```sql
ST_Contains(a, b)
```

## Tham số

a là hình chứa; b là hình xét.

## Kết quả

Cờ quan hệ chứa.

## Ví dụ

```sql
SELECT ST_Contains(ST_Buffer(ST_MakePoint(0,0),10),ST_MakePoint(0,0)); -- true
```

## Dễ nhầm

Điểm trên ranh không được Contains nhận; cân nhắc ST_Covers.
