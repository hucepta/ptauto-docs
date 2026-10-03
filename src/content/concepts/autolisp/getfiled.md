---
{
  "id": "concept.autolisp.getfiled",
  "slug": "getfiled",
  "title": "getfiled",
  "description": "Hiện hộp chọn file.",
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
      "title": "Autodesk — getfiled",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-AD65DF88-5218-4655-B877-B4D33B9FB6D1.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getfiled title default ext flags)
```

## Tham số

title: tiêu đề; default: tên/đường dẫn ban đầu; ext: phần mở rộng; flags: tổ hợp bit hành vi.

## Kết quả

Đường dẫn chọn hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getfiled "Chon CSV" "" "csv" 0)
```

## Lỗi thường gặp

Hủy hộp thoại trả nil; không mở file ngay khi chưa kiểm tra.
