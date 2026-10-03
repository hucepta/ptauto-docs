---
{
  "id": "concept.gis-data-automation.st-geomfromtext",
  "slug": "st-geomfromtext",
  "title": "ST_GeomFromText",
  "description": "Hình học có nhãn SRID.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_GeomFromText",
      "url": "https://postgis.net/docs/ST_GeomFromText.html"
    }
  ],
  "searchableTerms": [
    "ST_GeomFromText"
  ]
}
---

## Cú pháp

```sql
ST_GeomFromText(wkt, srid)
```

## Tham số

wkt là văn bản hình học; srid là hệ nguồn đã biết.

## Kết quả

Hình học có nhãn SRID.

## Ví dụ

```sql
SELECT ST_AsText(ST_GeomFromText('POINT(10 20)',4326));
```

## Dễ nhầm

Gán nhãn nguồn không chuyển tọa độ; SRID phải đúng với số đầu vào.
