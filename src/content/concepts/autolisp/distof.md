---
{
  "id": "concept.autolisp.distof",
  "slug": "distof",
  "title": "distof",
  "description": "Đổi chuỗi chiều dài thành số.",
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
      "title": "Autodesk — distof",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-CC0490B9-29BC-44C4-A317-5BAA34B0168E.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(distof str [mode])
```

## Tham số

string: chuỗi chiều dài; mode: kiểu đơn vị tùy chọn.

## Kết quả

Số thực hoặc nil khi không phân tích được.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(distof "12.5" 2) ; 12.5
```

## Lỗi thường gặp

Kiểm tra nil khi người dùng nhập chuỗi không hợp lệ.
