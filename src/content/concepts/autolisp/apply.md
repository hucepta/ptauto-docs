---
{
  "id": "concept.autolisp.apply",
  "slug": "apply",
  "title": "apply",
  "description": "Gọi hàm với một list đối số.",
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
      "title": "Autodesk — apply",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0574ADA0-0950-456A-9330-A2518421536E.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(apply 'function list)
```

## Tham số

function: tên hàm hoặc lambda; args: list đối số.

## Kết quả

Giá trị do hàm được gọi trả về.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(apply '+ '(10 20 30)) ; 60
```

## Lỗi thường gặp

Không truyền list dữ liệu như một đối số khi hàm cần nhiều đối số.
