---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getendpoint",
  "slug": "vlax-curve-getendpoint",
  "title": "vlax-curve-getEndPoint",
  "description": "Đọc điểm cuối curve.",
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
      "title": "Autodesk — vlax-curve-getEndPoint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-11309952-C617-4467-85E8-7EBE949F2730.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getEndPoint curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

Điểm WCS 3D hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getEndPoint curve)
```

## Lỗi thường gặp

Curve đóng có điểm đầu/cuối trùng nhưng parameter có thể khác.
