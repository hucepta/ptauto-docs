---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getdistatpoint",
  "slug": "vlax-curve-getdistatpoint",
  "title": "vlax-curve-getDistAtPoint",
  "description": "Đo chiều dài dọc curve đến điểm.",
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
      "title": "Autodesk — vlax-curve-getDistAtPoint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-627E64B0-B34C-4E7A-AC69-745EDAC1080D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getDistAtPoint curve-obj point)
```

## Tham số

curve-obj: curve; point: điểm WCS nằm trên curve.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getDistAtPoint curve (vlax-curve-getEndPoint curve))
```

## Lỗi thường gặp

Không thay bằng distance từ đầu: distance là khoảng cách thẳng.
