---
{
  "id": "concept.visual-lisp-activex.vlax-make-safearray",
  "slug": "vlax-make-safearray",
  "title": "vlax-make-safearray",
  "description": "Tạo SafeArray theo kiểu và giới hạn.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows only; not available on Mac OS or Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-make-safearray",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E0D40331-096B-4A52-A0D7-10204829C4A6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-make-safearray type '(l-bound . u-bound) ['(l-bound . u-bound) ...)]
```

## Tham số

type: mã kiểu phần tử; dim: pair cận dưới/cận trên cho từng chiều.

## Kết quả

SafeArray rỗng dữ liệu ban đầu.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2)))
```

## Lỗi thường gặp

Cận trên tính cả phần tử cuối: 0..2 có ba phần tử.
