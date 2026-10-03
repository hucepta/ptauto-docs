---
{
  "id": "concept.visual-lisp-activex.vlax-curve-isplanar",
  "slug": "vlax-curve-isplanar",
  "title": "vlax-curve-isPlanar",
  "description": "Kiểm tra curve phẳng.",
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
      "title": "Autodesk — vlax-curve-isPlanar",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-798B0177-0B90-4393-AF9D-C1D4607A0E7F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-isPlanar curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

T hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-isPlanar curve)
```

## Lỗi thường gặp

Curve phẳng không nhất thiết nằm trên XY WCS.
