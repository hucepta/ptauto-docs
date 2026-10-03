---
{
  "id": "concept.autolisp.setvar",
  "slug": "setvar",
  "title": "setvar",
  "description": "Đặt system variable.",
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
      "title": "Autodesk — setvar",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B1CE1BFB-2448-47F1-95EC-10E9509F01FA.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(setvar varname value)
```

## Tham số

varname: tên; value: giá trị đúng kiểu.

## Kết quả

Giá trị được đặt.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq old (getvar "CMDECHO")) (setvar "CMDECHO" 0) (setvar "CMDECHO" old)
```

## Lỗi thường gặp

Lưu và khôi phục trạng thái kể cả khi người dùng hủy lệnh.
