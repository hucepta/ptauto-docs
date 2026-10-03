---
{
  "id": "concept.autolisp.sqrt",
  "slug": "sqrt",
  "title": "sqrt",
  "description": "Lấy căn bậc hai.",
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
      "title": "Autodesk — sqrt",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B8D3BA69-95FE-4036-83BA-6AFEA45BADE5.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(sqrt num)
```

## Tham số

number: số không âm.

## Kết quả

Số thực.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(sqrt 25) ; 5.0
```

## Lỗi thường gặp

Số âm nằm ngoài miền kết quả thực.
