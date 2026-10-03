---
{
  "id": "concept.autolisp.substr",
  "slug": "substr",
  "title": "substr",
  "description": "Lấy chuỗi con.",
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
      "title": "Autodesk — substr",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-36F8701B-7AB7-47BE-AC31-8508A2DF46A2.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(substr str start [length])
```

## Tham số

string: chuỗi; start: vị trí từ 1; length: số ký tự tùy chọn.

## Kết quả

Chuỗi con.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(substr "ROAD-01" 6 2) ; "01"
```

## Lỗi thường gặp

Chỉ số bắt đầu 1, khác nth bắt đầu 0.
