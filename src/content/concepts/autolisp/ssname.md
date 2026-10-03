---
{
  "id": "concept.autolisp.ssname",
  "slug": "ssname",
  "title": "ssname",
  "description": "Lấy entity theo vị trí tập chọn.",
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
      "title": "Autodesk — ssname",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-EFB83751-9AC5-4C52-AD3D-D971BC560C15.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(ssname ss index)
```

## Tham số

ss: tập; index: chỉ số bắt đầu 0.

## Kết quả

Ename hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(ssname ss 0)
```

## Lỗi thường gặp

Với chỉ số lớn hơn 32767 cần truyền real theo tài liệu.
