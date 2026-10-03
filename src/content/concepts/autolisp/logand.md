---
{
  "id": "concept.autolisp.logand",
  "slug": "logand",
  "title": "logand",
  "description": "AND theo bit các số nguyên.",
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
      "title": "Autodesk — logand",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4E042C63-8BD7-4FED-B9E1-B5CE12D18273.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(logand [int int ...])
```

## Tham số

int: các số nguyên.

## Kết quả

Số nguyên chứa các bit cùng bật.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(logand 7 2) ; 2
```

## Lỗi thường gặp

Không dùng để thay and cho điều kiện Boolean.
