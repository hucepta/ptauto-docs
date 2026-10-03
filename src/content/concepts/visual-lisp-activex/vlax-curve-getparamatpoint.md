---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getparamatpoint",
  "slug": "vlax-curve-getparamatpoint",
  "title": "vlax-curve-getParamAtPoint",
  "description": "Lấy parameter của điểm trên curve.",
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
      "title": "Autodesk — vlax-curve-getParamAtPoint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1827742B-21DE-4454-90A0-19551DE79B5A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getParamAtPoint curve-obj point)
```

## Tham số

curve-obj: curve; point: điểm WCS.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getParamAtPoint curve (vlax-curve-getStartPoint curve))
```

## Lỗi thường gặp

Điểm chọn từ entsel không bảo đảm nằm trên curve.
