---
{
  "id": "concept.autolisp.load",
  "slug": "load",
  "title": "load",
  "description": "Nạp và đánh giá mã từ file.",
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
      "title": "Autodesk — load",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F3639BAA-FD70-487C-AEB5-9E6096EC0255.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(load filename [onfailure])
```

## Tham số

filename: đường dẫn; onfailure: giá trị trả nếu thất bại, tùy chọn.

## Kết quả

Kết quả biểu thức cuối file hoặc onfailure.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(load "hello.lsp" "Khong tim thay file")
```

## Lỗi thường gặp

Save file trong editor chưa nạp lại mã trong AutoCAD.
