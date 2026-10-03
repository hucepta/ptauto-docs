---
{
  "id": "concept.autolisp.getstring",
  "slug": "getstring",
  "title": "getstring",
  "description": "Nhận chuỗi ở Command Line.",
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
      "title": "Autodesk — getstring",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B139EFBD-74B7-4276-B422-D2186F7D8D0A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getstring [cr] [msg])
```

## Tham số

cr: T cho phép khoảng trắng, tùy chọn; msg: lời nhắc tùy chọn.

## Kết quả

Chuỗi người dùng nhập.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getstring T "\nTen tuyen: ")
```

## Lỗi thường gặp

Bỏ T làm khoảng trắng kết thúc chuỗi.
