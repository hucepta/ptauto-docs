---
{
  "id": "concept.autolisp.sslength",
  "slug": "sslength",
  "title": "sslength",
  "description": "Đếm entity trong selection set.",
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
      "title": "Autodesk — sslength",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-034B9EC8-0945-48A0-802A-9725DDBA0EF2.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(sslength ss)
```

## Tham số

ss: selection set hợp lệ.

## Kết quả

Số nguyên không âm.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq ss (ssget "_X" '((0 . "LINE")))) (if ss (sslength ss) 0)
```

## Lỗi thường gặp

ssget không tìm thấy trả nil; không gọi sslength trực tiếp.
