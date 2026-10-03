---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getparamatdist",
  "slug": "vlax-curve-getparamatdist",
  "title": "vlax-curve-getParamAtDist",
  "description": "Đổi khoảng cách dọc curve sang parameter.",
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
      "title": "Autodesk — vlax-curve-getParamAtDist",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4F02FF68-0D68-453D-A63E-2CB96DB62B05.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getParamAtDist curve-obj dist)
```

## Tham số

curve-obj: curve; dist: chiều dài tính từ đầu.

## Kết quả

Số thực hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getParamAtDist curve 0.0)
```

## Lỗi thường gặp

Khoảng cách vượt chiều dài curve không cho parameter hợp lệ.
