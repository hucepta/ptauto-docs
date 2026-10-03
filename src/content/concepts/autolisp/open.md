---
{
  "id": "concept.autolisp.open",
  "slug": "open",
  "title": "open",
  "description": "Mở file để đọc, ghi hoặc nối.",
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
      "title": "Autodesk — open",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-089A323F-21FF-4337-99A9-375758E23BA4.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(open filename mode [encoding])
```

## Tham số

filename: đường dẫn; mode: r/w/a; encoding: tùy chọn ở phiên bản hỗ trợ Unicode.

## Kết quả

Descriptor hoặc nil khi không mở được.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq f (open "report.txt" "w"))
```

## Lỗi thường gặp

Mode w ghi đè file; chọn đường dẫn báo cáo mới trước khi thử.
