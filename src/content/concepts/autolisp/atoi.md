---
{
  "id": "concept.autolisp.atoi",
  "slug": "atoi",
  "title": "atoi",
  "description": "Đổi chuỗi số sang số nguyên.",
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
      "title": "Autodesk — atoi",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-20EF237C-7079-4E29-860C-B8531D6C7F36.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(atoi str)
```

## Tham số

string: chuỗi biểu diễn số.

## Kết quả

Số nguyên.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(atoi "12") ; 12
```

## Lỗi thường gặp

Phần thập phân không được giữ lại.
