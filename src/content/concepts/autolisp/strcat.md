---
{
  "id": "concept.autolisp.strcat",
  "slug": "strcat",
  "title": "strcat",
  "description": "Nối các chuỗi.",
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
      "title": "Autodesk — strcat",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4430B1BF-DBB5-49D1-98F9-711B480976A1.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(strcat [string string_n ...])
```

## Tham số

string: không hoặc nhiều chuỗi.

## Kết quả

Chuỗi nối.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(strcat "ROAD" "-" "01") ; "ROAD-01"
```

## Lỗi thường gặp

Số phải đổi sang chuỗi trước khi nối.
