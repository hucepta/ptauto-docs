---
{
  "id": "concept.autolisp.getcorner",
  "slug": "getcorner",
  "title": "getcorner",
  "description": "Yêu cầu chọn góc đối diện hình chữ nhật.",
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
      "title": "Autodesk — getcorner",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-21BE8290-7F11-400B-AC39-62A110F07545.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getcorner pt [msg])
```

## Tham số

pt: góc đầu; msg: lời nhắc tùy chọn.

## Kết quả

Điểm UCS hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getcorner '(0 0 0) "\nGoc doi dien: ")
```

## Lỗi thường gặp

Điểm trả thuộc UCS hiện tại, không tự đổi WCS.
