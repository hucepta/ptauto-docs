---
{
  "id": "concept.autolisp.cons",
  "slug": "cons",
  "title": "cons",
  "description": "Thêm phần tử đầu hoặc tạo dotted pair.",
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
      "title": "Autodesk — cons",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-33B418E7-DB3D-4CBE-954E-F070F0A7CB2B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(cons new-first-element list-or-atom)
```

## Tham số

new-first-element: phần tử mới; list: phần đuôi hoặc giá trị pair.

## Kết quả

List mới hoặc dotted pair.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(cons 8 "ROAD") ; (8 . "ROAD")
```

## Lỗi thường gặp

Dotted pair không phải list hai phần tử.
