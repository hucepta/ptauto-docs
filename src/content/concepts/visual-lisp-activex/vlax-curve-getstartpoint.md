---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getstartpoint",
  "slug": "vlax-curve-getstartpoint",
  "title": "vlax-curve-getStartPoint",
  "description": "Đọc điểm đầu curve.",
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
      "title": "Autodesk — vlax-curve-getStartPoint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-AA1C450F-AA6E-4B05-AFB3-989AD91ADBFC.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getStartPoint curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

Điểm WCS 3D hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getStartPoint curve)
```

## Lỗi thường gặp

Không coi điểm trả thuộc UCS hiện tại.
