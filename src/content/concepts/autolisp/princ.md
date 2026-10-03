---
{
  "id": "concept.autolisp.princ",
  "slug": "princ",
  "title": "princ",
  "description": "In giá trị để hiển thị.",
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
      "title": "Autodesk — princ",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7DDA298B-A97C-49C9-94BA-46C77B50AE99.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(princ [expr [file-desc]])
```

## Tham số

expr: giá trị tùy chọn; file-desc: file đích tùy chọn.

## Kết quả

Giá trị đã in, hoặc kết thúc không in khi bỏ expr.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(princ "\nDa xu ly 3 doi tuong.")
```

## Lỗi thường gặp

princ không tự thêm dòng mới; dùng \n khi cần.
