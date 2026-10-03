---
{
  "id": "concept.autolisp.getdist",
  "slug": "getdist",
  "title": "getdist",
  "description": "Yêu cầu nhập khoảng cách.",
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
      "title": "Autodesk — getdist",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7D381B2A-79AA-4133-9C96-3DA63F8D8632.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getdist [pt] [msg])
```

## Tham số

pt: điểm gốc tùy chọn; msg: lời nhắc tùy chọn.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getdist "\nChieu dai: ")
```

## Lỗi thường gặp

Dùng initget nếu cần cấm 0 hay số âm.
