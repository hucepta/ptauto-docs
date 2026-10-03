---
{
  "id": "concept.autolisp.prin1",
  "slug": "prin1",
  "title": "prin1",
  "description": "In giá trị ở dạng có thể đọc lại.",
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
      "title": "Autodesk — prin1",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-BF4CEE45-BB6F-443B-A588-A40D9BCE378F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(prin1 [expr [file-desc]])
```

## Tham số

expr: giá trị tùy chọn; file-desc: file đích tùy chọn.

## Kết quả

Giá trị đã in; bỏ expr cho kết thúc yên lặng.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(prin1 "ROAD") ; in chuoi co dau ngoac kep
```

## Lỗi thường gặp

Không dùng để xuất CSV vì dấu quote/escape là biểu diễn LISP.
