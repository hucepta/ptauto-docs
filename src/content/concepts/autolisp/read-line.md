---
{
  "id": "concept.autolisp.read-line",
  "slug": "read-line",
  "title": "read-line",
  "description": "Đọc một dòng văn bản.",
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
      "title": "Autodesk — read-line",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-AC74D827-0969-4888-91C0-C3149DEC3659.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(read-line [file-desc])
```

## Tham số

file-desc: file tùy chọn; bỏ qua đọc bàn phím.

## Kết quả

Chuỗi không chứa ký tự xuống dòng; nil cuối file.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq f (open "report.txt" "r")) (read-line f)
```

## Lỗi thường gặp

Dòng rỗng trả chuỗi rỗng, khác nil cuối file.
