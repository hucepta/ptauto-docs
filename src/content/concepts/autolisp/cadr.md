---
{
  "id": "concept.autolisp.cadr",
  "slug": "cadr",
  "title": "cadr",
  "description": "Lấy phần tử thứ hai.",
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
      "title": "Autodesk — cadr",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F8E9E4F0-218D-4587-9D7E-922BE57C9F9B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(cadr list)
```

## Tham số

list: list cần đọc.

## Kết quả

Phần tử thứ hai hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(cadr '(10 20 0)) ; 20
```

## Lỗi thường gặp

Không nhầm với cdr: cdr trả cả phần còn lại.
