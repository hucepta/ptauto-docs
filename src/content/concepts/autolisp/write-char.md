---
{
  "id": "concept.autolisp.write-char",
  "slug": "write-char",
  "title": "write-char",
  "description": "Ghi một ký tự.",
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
      "title": "Autodesk — write-char",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-83AA4A55-C6A0-447B-A106-717E08D2EAF1.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(write-char num [file-desc])
```

## Tham số

num: mã ký tự; file-desc: file đích tùy chọn.

## Kết quả

Mã ký tự vừa ghi.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(write-char 65) ; in A
```

## Lỗi thường gặp

Đừng truyền chuỗi thay mã số; dùng write-line để ghi văn bản.
