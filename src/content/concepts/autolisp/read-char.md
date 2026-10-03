---
{
  "id": "concept.autolisp.read-char",
  "slug": "read-char",
  "title": "read-char",
  "description": "Đọc một ký tự.",
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
      "title": "Autodesk — read-char",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7E94BD14-F018-47D0-88DA-2B08DE32DB2C.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(read-char [file-desc])
```

## Tham số

file-desc: file tùy chọn; bỏ qua đọc bàn phím.

## Kết quả

Mã ký tự hoặc nil cuối file.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq f (open "report.txt" "r")) (read-char f)
```

## Lỗi thường gặp

Đừng nhầm mã số ký tự với chuỗi một ký tự.
