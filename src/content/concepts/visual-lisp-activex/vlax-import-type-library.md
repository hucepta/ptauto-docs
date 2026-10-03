---
{
  "id": "concept.visual-lisp-activex.vlax-import-type-library",
  "slug": "vlax-import-type-library",
  "title": "vlax-import-type-library",
  "description": "Nhập wrapper từ type library.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "AutoCAD for Windows only; not available in AutoCAD LT for Windows, or on Mac OS and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-import-type-library",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1699B6A0-C4A6-4BC4-82DF-5040CFF3394A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-import-type-library :tlb-filename filename [:methods-prefix mprefix  :properties-prefix pprefix :constants-prefix cprefix])
```

## Tham số

Keyword :tlb-filename: đường dẫn type library; :methods-prefix, :properties-prefix, :constants-prefix: tiền tố tùy chọn.

## Kết quả

nil; định nghĩa wrapper trong môi trường LISP.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-import-type-library :tlb-filename "C:/SDK/example.tlb" :methods-prefix "ext-")
```

## Lỗi thường gặp

Đường dẫn trong ví dụ phải thay bằng type library thật; tránh trùng tên wrapper.
