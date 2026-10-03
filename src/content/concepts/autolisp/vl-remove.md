---
{
  "id": "concept.autolisp.vl-remove",
  "slug": "vl-remove",
  "title": "vl-remove",
  "description": "Bỏ mọi phần tử bằng giá trị.",
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
      "title": "Autodesk — vl-remove",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1BF33827-5C9C-49B2-A21B-656E0F429B21.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-remove element-to-remove lst)
```

## Tham số

element: giá trị bỏ; list: dữ liệu.

## Kết quả

List mới.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(vl-remove 0 '(0 1 0 2)) ; (1 2)
```

## Lỗi thường gặp

Nhận lại kết quả; hàm không tự gán list gốc.
