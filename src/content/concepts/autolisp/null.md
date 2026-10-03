---
{
  "id": "concept.autolisp.null",
  "slug": "null",
  "title": "null",
  "description": "Kiểm tra nil.",
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
      "title": "Autodesk — null",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-2CA2E5F1-297F-4ECA-9500-5FFCD4877126.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(null item)
```

## Tham số

expr: giá trị.

## Kết quả

T nếu nil, ngược lại nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(null '()) ; T
```

## Lỗi thường gặp

List chứa nil vẫn là list có phần tử, không phải nil.
