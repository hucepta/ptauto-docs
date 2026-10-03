---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getclosestpointto",
  "slug": "vlax-curve-getclosestpointto",
  "title": "vlax-curve-getClosestPointTo",
  "description": "Chiếu điểm đến vị trí gần nhất trên curve.",
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
      "title": "Autodesk — vlax-curve-getClosestPointTo",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-90F585FE-D5C8-4C08-AFC7-A09A697EA52A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getClosestPointTo curve-obj givenPnt [extend])
```

## Tham số

curve-obj: curve; givenPnt: điểm WCS; extend: T cho phép kéo dài, tùy chọn.

## Kết quả

Điểm WCS hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getClosestPointTo curve '(5 3 0))
```

## Lỗi thường gặp

Khoảng cách từ điểm đến curve khác lý trình từ đầu curve.
