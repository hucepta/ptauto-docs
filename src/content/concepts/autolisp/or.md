---
{
  "id": "concept.autolisp.or",
  "slug": "or",
  "title": "or",
  "description": "Kiểm tra có ít nhất một giá trị đúng.",
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
      "title": "Autodesk — or",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-64ECF4D5-0714-45FD-8E27-284E9D2FC8B2.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(or [expr ...])
```

## Tham số

expr: các biểu thức.

## Kết quả

T nếu có biểu thức khác nil, nếu không nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(or nil (> 3 2)) ; T
```

## Lỗi thường gặp

Không dùng or để lấy chính giá trị đầu tiên như một số ngôn ngữ khác.
