---
{
  "id": "concept.autolisp.rem",
  "slug": "rem",
  "title": "rem",
  "description": "Lấy phần dư phép chia.",
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
      "title": "Autodesk — rem",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4CC43BEB-3215-41AE-839B-2DCE6354241A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(rem [number number ...])
```

## Tham số

number1: số bị chia; number2 và các số tiếp theo: số chia.

## Kết quả

Số phần dư.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(rem 17 5) ; 2
```

## Lỗi thường gặp

Không truyền số chia 0.
