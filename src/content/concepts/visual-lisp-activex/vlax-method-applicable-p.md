---
{
  "id": "concept.visual-lisp-activex.vlax-method-applicable-p",
  "slug": "vlax-method-applicable-p",
  "title": "vlax-method-applicable-p",
  "description": "Kiểm tra đối tượng hỗ trợ method.",
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
      "title": "Autodesk — vlax-method-applicable-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-63B81424-11BA-4CB3-A783-514031A2271D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-method-applicable-p obj method)
```

## Tham số

obj: VLA object; method: symbol hoặc chuỗi tên method.

## Kết quả

T hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-method-applicable-p obj 'Move)
```

## Lỗi thường gặp

Kiểm tra method tồn tại chưa kiểm tra tính hợp lệ của đối số.
