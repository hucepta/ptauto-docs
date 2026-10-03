---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getendparam",
  "slug": "vlax-curve-getendparam",
  "title": "vlax-curve-getEndParam",
  "description": "Đọc parameter cuối curve.",
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
      "title": "Autodesk — vlax-curve-getEndParam",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B939A11A-DF89-4450-B520-11D59BD2A126.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getEndParam curve-obj)
```

## Tham số

curve-obj: VLA curve.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getEndParam curve)
```

## Lỗi thường gặp

Không coi parameter cuối là tổng chiều dài; dùng getDistAtParam.
