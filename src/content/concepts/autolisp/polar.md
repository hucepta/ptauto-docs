---
{
  "id": "concept.autolisp.polar",
  "slug": "polar",
  "title": "polar",
  "description": "Tính điểm theo góc và khoảng cách.",
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
      "title": "Autodesk — polar",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6A84BFD3-8788-45B1-AB52-5E83F0C5286E.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(polar pt ang dist)
```

## Tham số

pt: điểm gốc; ang: radian từ trục X WCS; dist: khoảng cách.

## Kết quả

Điểm mới cùng số chiều đầu vào.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(polar '(0 0 0) 0.0 10.0) ; (10 0 0)
```

## Lỗi thường gặp

Quy ước góc của polar cần chú ý khi UCS xoay.
