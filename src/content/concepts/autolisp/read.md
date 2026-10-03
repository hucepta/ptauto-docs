---
{
  "id": "concept.autolisp.read",
  "slug": "read",
  "title": "read",
  "description": "Phân tích biểu diễn LISP.",
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
      "title": "Autodesk — read",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-5B50BB3E-C244-46E8-85D8-6A2D48B1FE51.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(read [string])
```

## Tham số

string: chuỗi tùy chọn; bỏ qua trả nil.

## Kết quả

Atom hoặc list đầu tiên đọc được.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(read "(10 20 0)") ; (10 20 0)
```

## Lỗi thường gặp

read không phải bộ đọc CSV và không tự đánh giá biểu thức.
