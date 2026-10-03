---
{
  "id": "concept.autolisp.entnext",
  "slug": "entnext",
  "title": "entnext",
  "description": "Lấy entity kế tiếp, gồm subentity.",
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
      "title": "Autodesk — entnext",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-65924CF5-0C51-4E36-8B38-7A5513951A04.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(entnext [ename])
```

## Tham số

ename: entity trước đó, tùy chọn; bỏ qua để lấy entity đầu.

## Kết quả

Ename hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq e (entnext))
```

## Lỗi thường gặp

Đừng giả định mọi kết quả là entity chính; có thể là ATTRIB, VERTEX, SEQEND.
