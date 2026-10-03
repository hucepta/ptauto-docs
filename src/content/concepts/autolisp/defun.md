---
{
  "id": "concept.autolisp.defun",
  "slug": "defun",
  "title": "defun",
  "description": "Định nghĩa hàm hoặc lệnh.",
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
      "title": "Autodesk — defun",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-5269529D-A013-4AB4-AAB7-DBA1C7CA73EB.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(defun sym ([arguments] [/ variables ...]) expr ...)
```

## Tham số

sym: tên; arguments: list tham số và biến cục bộ sau /; expr: thân hàm.

## Kết quả

Định nghĩa hàm để gọi lại; kết quả khi gọi hàm là giá trị biểu thức cuối trong thân.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(defun double (x /) (* x 2)) (double 5) ; 10
```

## Lỗi thường gặp

Thiếu / khiến biến tạm trở thành biến toàn cục.
