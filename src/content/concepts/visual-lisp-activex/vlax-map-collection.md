---
{
  "id": "concept.visual-lisp-activex.vlax-map-collection",
  "slug": "vlax-map-collection",
  "title": "vlax-map-collection",
  "description": "Gọi hàm trên từng object collection.",
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
      "title": "Autodesk — vlax-map-collection",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-81247560-E2A7-486E-ABCD-B85E09266FBA.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-map-collection obj function)
```

## Tham số

obj: collection COM; function: hàm nhận một object.

## Kết quả

Object collection được truyền ở đối số đầu.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(defun show-layer (x) (princ (vla-get-Name x))) (vlax-map-collection (vla-get-Layers (vla-get-ActiveDocument (vlax-get-acad-object))) 'show-layer)
```

## Lỗi thường gặp

Không coi kết quả là list như mapcar.
