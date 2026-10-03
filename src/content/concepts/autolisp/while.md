---
{
  "id": "concept.autolisp.while",
  "slug": "while",
  "title": "while",
  "description": "Lặp khi điều kiện còn đúng.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "syntax",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — while",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E7C900DB-8B66-4109-BEF6-B0A18E8CF6B6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(while testexpr [expr ...])
```

## Tham số

testexpr: điều kiện; expr: thân vòng lặp.

## Kết quả

Kết quả biểu thức cuối trong lượt cuối hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq i 0) (while (< i 3) (setq i (1+ i)))
```

## Lỗi thường gặp

Quên cập nhật điều kiện gây vòng lặp vô hạn.
