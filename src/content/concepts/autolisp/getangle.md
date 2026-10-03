---
{
  "id": "concept.autolisp.getangle",
  "slug": "getangle",
  "title": "getangle",
  "description": "Yêu cầu nhập góc.",
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
      "title": "Autodesk — getangle",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-947F34FA-5E58-4C7C-A169-556D4B8E2208.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getangle [pt] [msg])
```

## Tham số

pt: điểm gốc tùy chọn; msg: lời nhắc tùy chọn.

## Kết quả

Góc radian hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getangle '(0 0 0) "\nGoc: ")
```

## Lỗi thường gặp

Góc chịu quy ước ANGBASE/ANGDIR; xem tài liệu trước khi dùng cho hình học.
