---
{
  "id": "concept.autolisp.float",
  "slug": "float",
  "title": "float",
  "description": "Đổi số sang kiểu thực.",
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
      "title": "Autodesk — float",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-93808F66-808C-49F7-9303-F12C55296080.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(float number)
```

## Tham số

number: số nguyên hoặc thực.

## Kết quả

Số thực.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(float 3) ; 3.0
```

## Lỗi thường gặp

Muốn chia thực cần một toán hạng thực trước phép chia.
