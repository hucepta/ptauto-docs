---
{
  "id": "concept.autolisp.command",
  "slug": "command",
  "title": "command",
  "description": "Gửi lệnh và câu trả lời vào AutoCAD.",
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
      "title": "Autodesk — command",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1C989B35-2C5A-47EC-A0C9-71998EDFB157.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(command [arguments ...])
```

## Tham số

arguments: tên command và các câu trả lời, chuỗi rỗng tương đương Enter.

## Kết quả

nil; lệnh có thể thay đổi bản vẽ.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(command "_.LINE" '(0 0 0) '(10 0 0) "")
```

## Lỗi thường gặp

Thiếu câu trả lời khiến AutoCAD còn ở trong lệnh; dùng _ cho tên tiếng Anh.
