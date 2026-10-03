---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getpointatparam",
  "slug": "vlax-curve-getpointatparam",
  "title": "vlax-curve-getPointAtParam",
  "description": "Đổi parameter thành điểm.",
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
      "title": "Autodesk — vlax-curve-getPointAtParam",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B506C696-DBDA-466B-9EF8-1AF3B1A485F8.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getPointAtParam curve-obj param)
```

## Tham số

curve-obj: curve; param: parameter trong miền curve.

## Kết quả

Điểm WCS hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getPointAtParam curve (vlax-curve-getStartParam curve))
```

## Lỗi thường gặp

Đừng truyền lý trình trực tiếp làm parameter.
