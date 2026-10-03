---
{
  "id": "concept.autolisp.getpoint",
  "slug": "getpoint",
  "title": "getpoint",
  "description": "Yêu cầu nhập điểm.",
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
      "title": "Autodesk — getpoint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-445F32F0-8A9D-4E1D-976F-DE87CC5267D0.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getpoint [pt] [msg])
```

## Tham số

pt: điểm gốc hoặc giá trị khoảng cách tùy chọn; msg: lời nhắc tùy chọn.

## Kết quả

List điểm UCS hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getpoint "\nChon diem: ")
```

## Lỗi thường gặp

Phải trans điểm trước khi gửi API đòi WCS.
