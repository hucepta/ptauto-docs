---
{
  "id": "concept.visual-lisp-activex.vlax-curve-isperiodic",
  "slug": "vlax-curve-isperiodic",
  "title": "vlax-curve-isPeriodic",
  "description": "Kiểm tra curve tuần hoàn.",
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
      "title": "Autodesk — vlax-curve-isPeriodic",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0A082EE2-ACE0-49CE-981D-2665738C7DC2.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-isPeriodic curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

T hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-isPeriodic curve)
```

## Lỗi thường gặp

Đóng và tuần hoàn là hai tính chất khác nhau.
