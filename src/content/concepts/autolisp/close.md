---
{
  "id": "concept.autolisp.close",
  "slug": "close",
  "title": "close",
  "description": "Đóng file đã mở.",
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
      "title": "Autodesk — close",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-5308ADB6-7C46-43BE-8B6C-B32FBA8982DB.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(close file-desc)
```

## Tham số

file-desc: descriptor từ open.

## Kết quả

nil khi đóng thành công.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq f (open "report.txt" "w")) (close f)
```

## Lỗi thường gặp

Chỉ đóng descriptor hợp lệ; đóng khi hoàn tất và trong xử lý lỗi.
