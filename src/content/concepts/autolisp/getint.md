---
{
  "id": "concept.autolisp.getint",
  "slug": "getint",
  "title": "getint",
  "description": "Yêu cầu nhập số nguyên.",
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
      "title": "Autodesk — getint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-18D6FF0F-B1DF-447D-BC6C-A46C933EF78B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getint [msg])
```

## Tham số

msg: lời nhắc tùy chọn.

## Kết quả

Số nguyên hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getint "\nSo coc: ")
```

## Lỗi thường gặp

Nhập số thực không hợp lệ; dùng getreal nếu cần thập phân.
