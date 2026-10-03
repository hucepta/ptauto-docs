---
{
  "id": "concept.autolisp.fix",
  "slug": "fix",
  "title": "fix",
  "description": "Bỏ phần thập phân.",
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
      "title": "Autodesk — fix",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-93B5F13B-348E-49E0-A116-0861684506D5.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(fix number)
```

## Tham số

number: số.

## Kết quả

Số nguyên trong miền hỗ trợ.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(fix -3.8) ; -3
```

## Lỗi thường gặp

Không làm tròn xuống: số âm được cắt về 0.
