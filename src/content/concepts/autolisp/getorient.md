---
{
  "id": "concept.autolisp.getorient",
  "slug": "getorient",
  "title": "getorient",
  "description": "Yêu cầu nhập góc phương vị theo trục X.",
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
      "title": "Autodesk — getorient",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4F8606DD-6453-4D01-84C6-EC8EEBBE2D1A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getorient [pt] [msg])
```

## Tham số

pt: điểm gốc tùy chọn; msg: lời nhắc tùy chọn.

## Kết quả

Góc radian hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getorient "\nHuong: ")
```

## Lỗi thường gặp

Không thay thế getangle mà bỏ qua khác biệt ANGBASE.
