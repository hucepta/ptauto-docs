---
{
  "id": "concept.visual-lisp-activex.vlax-erased-p",
  "slug": "vlax-erased-p",
  "title": "vlax-erased-p",
  "description": "Kiểm tra entity COM đã bị xóa.",
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
      "title": "Autodesk — vlax-erased-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-423F047A-F8B8-4DD0-ABEC-52E3C7B336B5.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-erased-p obj)
```

## Tham số

obj: VLA object.

## Kết quả

T nếu erased, nil nếu không.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-erased-p obj)
```

## Lỗi thường gặp

Object erased khác tham chiếu đã release.
