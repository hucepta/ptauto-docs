---
{
  "id": "concept.autolisp.progn",
  "slug": "progn",
  "title": "progn",
  "description": "Thực hiện nhiều biểu thức theo thứ tự.",
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
      "title": "Autodesk — progn",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6B2DD269-858D-4C01-ABDB-765DD08284FE.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(progn [expr ...])
```

## Tham số

expr: các biểu thức.

## Kết quả

Kết quả biểu thức cuối.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(progn (setq x 2) (+ x 3)) ; 5
```

## Lỗi thường gặp

Không tạo phạm vi biến cục bộ; khai báo biến trong defun.
