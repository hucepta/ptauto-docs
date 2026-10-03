---
{
  "id": "concept.autolisp.wcmatch",
  "slug": "wcmatch",
  "title": "wcmatch",
  "description": "So chuỗi với mẫu wildcard.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — wcmatch",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-EC257AF7-72D4-4B38-99B6-9B09952A53AD.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(wcmatch str pattern)
```

## Tham số

string: chuỗi; pattern: mẫu.

## Kết quả

T hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(wcmatch "ROAD-01" "ROAD-*") ; T
```

## Lỗi thường gặp

Phân biệt hoa thường; chuẩn hóa strcase nếu quy tắc không phân biệt.
