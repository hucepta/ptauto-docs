---
{
  "id": "concept.gis-data-automation.st-union",
  "slug": "st-union",
  "title": "ST_Union",
  "description": "Hình phủ hai nguồn.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_Union",
      "url": "https://postgis.net/docs/ST_Union.html"
    }
  ],
  "searchableTerms": [
    "ST_Union"
  ]
}
---

## Cú pháp

```sql
ST_Union(a, b)
```

## Tham số

a,b là hình cần hợp; đây là dạng hai hình, không phải dạng tổng hợp.

## Kết quả

Hình phủ hai nguồn.

## Ví dụ

```sql
SELECT ST_AsText(ST_Union(ST_MakePoint(0,0),ST_MakePoint(1,1)));
```

## Dễ nhầm

Gộp hình không tự gộp thuộc tính hay giữ bảng ID.
