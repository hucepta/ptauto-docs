---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getstartparam",
  "slug": "vlax-curve-getstartparam",
  "title": "vlax-curve-getStartParam",
  "description": "Đọc parameter đầu curve.",
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
      "title": "Autodesk — vlax-curve-getStartParam",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-854C3C4D-1305-4920-9E42-D9ACB9E4363C.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getStartParam curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getStartParam curve)
```

## Lỗi thường gặp

Parameter không nhất thiết là chiều dài theo đơn vị bản vẽ.
