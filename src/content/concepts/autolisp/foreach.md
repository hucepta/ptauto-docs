---
{
  "id": "concept.autolisp.foreach",
  "slug": "foreach",
  "title": "foreach",
  "description": "Lặp qua từng phần tử list.",
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
      "title": "Autodesk — foreach",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-BE6A23C4-4E18-45A6-854E-2DE9574A6925.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(foreach name list [expr...])
```

## Tham số

name: biến lặp; list: dữ liệu; expr: các biểu thức trong mỗi lượt.

## Kết quả

Kết quả biểu thức cuối lượt cuối, nil nếu không có lượt.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(foreach x '(1 2 3) (princ x))
```

## Lỗi thường gặp

Không trông chờ foreach trả list kết quả như mapcar.
