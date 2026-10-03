---
{
  "id": "concept.autolisp.vl-string-trim",
  "slug": "vl-string-trim",
  "title": "vl-string-trim",
  "description": "Bỏ ký tự ở cả hai đầu chuỗi.",
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
      "title": "Autodesk — vl-string-trim",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-FF1DA441-C9D8-4C99-BC6E-B2A72B562389.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-string-trim char-set str)
```

## Tham số

char-set: tập ký tự cần bỏ; str: chuỗi gốc.

## Kết quả

Chuỗi đã cắt.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(vl-string-trim " " " ROAD ") ; "ROAD"
```

## Lỗi thường gặp

char-set là tập ký tự, không phải một chuỗi con cần khớp nguyên vẹn.
