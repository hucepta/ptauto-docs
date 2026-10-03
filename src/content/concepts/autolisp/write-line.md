---
{
  "id": "concept.autolisp.write-line",
  "slug": "write-line",
  "title": "write-line",
  "description": "Ghi một dòng chuỗi.",
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
      "title": "Autodesk — write-line",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-CB4F3ABC-F0F6-41DA-A911-75B90D9F974A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(write-line str [file-desc])
```

## Tham số

string: nội dung; file-desc: file đích tùy chọn.

## Kết quả

Chuỗi đã ghi.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq f (open "report.txt" "w")) (write-line "Layer,Count" f) (close f)
```

## Lỗi thường gặp

Tự thêm xuống dòng; không cần chèn \n cuối dòng CSV.
