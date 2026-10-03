---
{
  "id": "concept.autolisp.last",
  "slug": "last",
  "title": "last",
  "description": "Lấy phần tử cuối list.",
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
      "title": "Autodesk — last",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-463C97F2-B72F-44C6-B19B-659D231AA836.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(last lst)
```

## Tham số

list: dữ liệu.

## Kết quả

Phần tử cuối hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(last '(1 2 3)) ; 3
```

## Lỗi thường gặp

Không giống một số dialect Lisp trả list đuôi một phần tử.
