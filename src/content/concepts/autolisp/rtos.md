---
{
  "id": "concept.autolisp.rtos",
  "slug": "rtos",
  "title": "rtos",
  "description": "Định dạng số thành chuỗi chiều dài.",
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
      "title": "Autodesk — rtos",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D03ABBC2-939A-44DB-8C93-FC63B64DE4A2.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(rtos number [mode [precision]])
```

## Tham số

number: số; mode, precision: kiểu đơn vị và độ chính xác tùy chọn.

## Kết quả

Chuỗi định dạng chịu ảnh hưởng DIMZIN và biến đơn vị.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(rtos 12.5 2 2)
```

## Lỗi thường gặp

Không giả định luôn có hai số 0 cuối khi DIMZIN đang triệt tiêu số 0.
