---
{
  "id": "concept.autolisp.atan",
  "slug": "atan",
  "title": "atan",
  "description": "Tính arctan một số hoặc tỷ số hai số.",
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
      "title": "Autodesk — atan",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1A40A16E-8ABE-437D-9888-2F43CEA0B5CE.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(atan num1 [num2])
```

## Tham số

num1: số; num2: mẫu số tùy chọn, hai số tính atan của tỷ số num1/num2.

## Kết quả

Góc radian.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(atan 1.0) ; pi/4
```

## Lỗi thường gặp

Kết quả là radian; khi suy hướng tuyến cần kiểm tra quy ước góc và góc phần tư bằng dữ liệu mẫu.
