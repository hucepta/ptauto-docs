---
{
  "id": "concept.autolisp.if",
  "slug": "if",
  "title": "if",
  "description": "Rẽ nhánh theo điều kiện.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "syntax",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — if",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-916F1A5C-FD70-4D66-897E-6DCD666DCB39.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(if testexpr thenexpr [elseexpr])
```

## Tham số

testexpr: điều kiện; thenexpr: nhánh đúng; elseexpr: nhánh sai tùy chọn.

## Kết quả

Giá trị nhánh được thực hiện.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(if (> 3 2) "Dung" "Sai")
```

## Lỗi thường gặp

Muốn nhiều biểu thức trong một nhánh cần progn.
