---
{
  "id": "concept.autolisp.entsel",
  "slug": "entsel",
  "title": "entsel",
  "description": "Chọn một đối tượng và điểm chọn.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Theo phạm vi hỗ trợ trong tài liệu hàm",
      "platform": "Xem nền tảng được Autodesk hỗ trợ cho hàm"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — entsel",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9D4CF74D-8B8B-4D66-A952-564AFBA254E7.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(entsel [msg])
```

## Tham số

msg: lời nhắc tùy chọn.

## Kết quả

List (ename pick-point) hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq pick (entsel "\nChon LINE: "))
```

## Lỗi thường gặp

Điểm chọn không bảo đảm nằm chính xác trên đường.
