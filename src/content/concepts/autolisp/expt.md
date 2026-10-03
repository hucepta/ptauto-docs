---
{
  "id": "concept.autolisp.expt",
  "slug": "expt",
  "title": "expt",
  "description": "Tính lũy thừa.",
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
      "title": "Autodesk — expt",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-FCAC3150-7491-43DB-8042-37EDE3791A96.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(expt number power)
```

## Tham số

number: cơ số; power: số mũ.

## Kết quả

Kết quả số.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(expt 2 3) ; 8
```

## Lỗi thường gặp

Cơ số âm với số mũ phân số không cho kết quả thực mong muốn.
