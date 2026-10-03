---
{
  "id": "concept.autolisp.set",
  "slug": "set",
  "title": "set",
  "description": "Gán giá trị cho symbol được tính toán.",
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
      "title": "Autodesk — set",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-041BE20B-CFA6-465B-A98B-1BCBDC810881.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(set sym expr)
```

## Tham số

symbol: symbol; expr: giá trị.

## Kết quả

Giá trị vừa gán.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(set 'count 5) ; 5
```

## Lỗi thường gặp

Thông thường dùng setq; set cần symbol được quote hoặc tính ra.
