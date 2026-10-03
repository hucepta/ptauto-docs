---
{
  "id": "concept.autolisp.append",
  "slug": "append",
  "title": "append",
  "description": "Nối nhiều list.",
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
      "title": "Autodesk — append",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-952B175A-D565-43A4-9208-0E6A27A5E742.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(append [list ...])
```

## Tham số

list: các list cần nối, không bắt buộc có đối số.

## Kết quả

List chứa các phần tử theo thứ tự.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(append '(1 2) '(3)) ; (1 2 3)
```

## Lỗi thường gặp

Không tự làm phẳng list lồng nhiều cấp.
