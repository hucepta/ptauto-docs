---
{
  "id": "concept.autolisp.getkword",
  "slug": "getkword",
  "title": "getkword",
  "description": "Nhận một từ khóa từ initget.",
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
      "title": "Autodesk — getkword",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9F940144-0D7B-4DA1-BF50-BBF8FB8DFF21.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getkword [msg])
```

## Tham số

msg: lời nhắc tùy chọn.

## Kết quả

Chuỗi từ khóa chuẩn hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(initget "Doc Sua") (getkword "\n[Doc/Sua]: ")
```

## Lỗi thường gặp

Phải gọi initget ngay trước lời gọi input cần áp dụng.
