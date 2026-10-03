---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getclosestpointtoprojection",
  "slug": "vlax-curve-getclosestpointtoprojection",
  "title": "vlax-curve-getClosestPointToProjection",
  "description": "Tìm điểm gần nhất sau khi chiếu lên mặt phẳng.",
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
      "title": "Autodesk — vlax-curve-getClosestPointToProjection",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-23A1B8CE-9FF5-482C-AF32-3EE48784B905.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getClosestPointToProjection curve-obj givenPnt normal [extend])
```

## Tham số

curve-obj: curve; givenPnt: điểm WCS; normal: vector pháp tuyến; extend: tùy chọn.

## Kết quả

Điểm WCS trên curve hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getClosestPointToProjection curve '(5 3 0) '(0 0 1))
```

## Lỗi thường gặp

Pháp tuyến phải khác vector không; phép chiếu có thể khác nearest point 3D.
