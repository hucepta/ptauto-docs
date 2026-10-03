---
{
  "id": "concept.autolisp.quote",
  "slug": "quote",
  "title": "quote",
  "description": "Giữ dữ liệu không đánh giá.",
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
      "title": "Autodesk — quote",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-18F7E287-CB2F-4150-9A07-CE23C3F9E604.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(quote expr)
```

## Tham số

expr: dữ liệu hoặc biểu thức.

## Kết quả

Chính dữ liệu đã truyền.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(quote (10 20 0)) ; (10 20 0)
```

## Lỗi thường gặp

(10 20 0) không quote sẽ bị hiểu là gọi hàm số 10.
