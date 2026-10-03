---
{
  "id": "concept.autolisp.eval",
  "slug": "eval",
  "title": "eval",
  "description": "Đánh giá một biểu thức.",
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
      "title": "Autodesk — eval",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D9B3E6CC-A982-4040-AE6E-6FD63D6C54D0.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(eval expr)
```

## Tham số

expr: biểu thức LISP.

## Kết quả

Giá trị biểu thức.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(eval '(+ 2 3)) ; 5
```

## Lỗi thường gặp

Không eval nội dung tùy ý đọc từ file cấu hình.
