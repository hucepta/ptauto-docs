---
{
  "id": "concept.gis-data-automation.st-lineinterpolatepoint",
  "slug": "st-lineinterpolatepoint",
  "title": "ST_LineInterpolatePoint",
  "description": "Điểm trên tuyến ở tỷ phần yêu cầu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_LineInterpolatePoint",
      "url": "https://postgis.net/docs/ST_LineInterpolatePoint.html"
    }
  ],
  "searchableTerms": [
    "ST_LineInterpolatePoint"
  ]
}
---

## Cú pháp

```sql
ST_LineInterpolatePoint(linestring, fraction)
```

## Tham số

fraction trong 0..1 là tỷ phần chiều dài 2D.

## Kết quả

Điểm trên tuyến ở tỷ phần yêu cầu.

## Ví dụ

```sql
SELECT ST_AsText(ST_LineInterpolatePoint(ST_GeomFromText('LINESTRING(0 0,10 0)'),0.3)); -- POINT(3 0)
```

## Dễ nhầm

Đối số là tỷ phần, không phải mét hoặc lý trình Civil 3D.
