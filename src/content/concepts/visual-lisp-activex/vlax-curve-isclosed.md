---
{
  "id": "concept.visual-lisp-activex.vlax-curve-isclosed",
  "slug": "vlax-curve-isclosed",
  "title": "vlax-curve-isClosed",
  "description": "Kiểm tra curve đóng.",
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
      "title": "Autodesk — vlax-curve-isClosed",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-DC3C19D3-D0EA-4638-B8AB-E3A057B66D1F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-isClosed curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

T nếu đóng, nil nếu không.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-isClosed curve)
```

## Lỗi thường gặp

Polyline có điểm đầu/cuối trùng chưa nhất thiết có cờ Closed.
