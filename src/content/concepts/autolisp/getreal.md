---
{
  "id": "concept.autolisp.getreal",
  "slug": "getreal",
  "title": "getreal",
  "description": "Yêu cầu nhập số thực.",
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
      "title": "Autodesk — getreal",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-503BBE86-9B22-456A-8883-1B5F5832B7E0.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getreal [msg])
```

## Tham số

msg: lời nhắc tùy chọn.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getreal "\nBuoc coc: ")
```

## Lỗi thường gặp

Enter có thể trả nil; thiết lập giá trị mặc định trong code.
