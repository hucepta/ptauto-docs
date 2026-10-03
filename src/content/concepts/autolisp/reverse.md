---
{
  "id": "concept.autolisp.reverse",
  "slug": "reverse",
  "title": "reverse",
  "description": "Đảo thứ tự list.",
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
      "title": "Autodesk — reverse",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7669E8F1-2A4F-42C7-AAA8-74D1300F9744.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(reverse lst)
```

## Tham số

list: dữ liệu.

## Kết quả

List mới đảo thứ tự.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(reverse '(1 2 3)) ; (3 2 1)
```

## Lỗi thường gặp

Đảo list điểm làm đổi tọa độ, không phải đổi hướng tuyến.
