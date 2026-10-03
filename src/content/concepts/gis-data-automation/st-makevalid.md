---
{
  "id": "concept.gis-data-automation.st-makevalid",
  "slug": "st-makevalid",
  "title": "ST_MakeValid",
  "description": "Hình hợp lệ có thể đổi kiểu/số phần.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: ST_MakeValid",
      "url": "https://postgis.net/docs/ST_MakeValid.html"
    }
  ],
  "searchableTerms": [
    "ST_MakeValid"
  ]
}
---

## Cú pháp

```sql
ST_MakeValid(geometry)
```

## Tham số

geometry là hình lỗi cần sửa.

## Kết quả

Hình hợp lệ có thể đổi kiểu/số phần.

## Ví dụ

```sql
SELECT ST_AsText(ST_MakeValid(ST_GeomFromText('POLYGON((0 0,2 2,0 2,2 0,0 0))')));
```

## Dễ nhầm

Kiểm lại diện tích, loại hình và ý nghĩa sau sửa; không tự chọn ranh đúng.
