---
{
  "id": "concept.autolisp.logior",
  "slug": "logior",
  "title": "logior",
  "description": "OR theo bit các số nguyên.",
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
      "title": "Autodesk — logior",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A4BF3B68-4988-42F0-AFE6-BFD06D0DB159.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(logior [int int ...])
```

## Tham số

int: các số nguyên.

## Kết quả

Số nguyên chứa các bit được bật ở ít nhất một đầu vào.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(logior 1 2 4) ; 7
```

## Lỗi thường gặp

Bit flags không cộng lặp cùng bit; OR thể hiện mục đích rõ hơn.
