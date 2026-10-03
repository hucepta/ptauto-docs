---
{
  "id": "concept.visual-lisp-activex.vlax-3d-point",
  "slug": "vlax-3d-point",
  "title": "vlax-3D-point",
  "description": "Đóng gói điểm 3D cho COM.",
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
      "title": "Autodesk — vlax-3D-point",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4C3B6017-BA57-451D-8CF8-C8539E9517F6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-3D-point lst)

(vlax-3D-point x y [z])
```

## Tham số

list: list ba số; hoặc x, y, z: ba tọa độ.

## Kết quả

Variant chứa mảng ba double.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-3d-point '(10 20 0))
```

## Lỗi thường gặp

Chuyển điểm UCS sang WCS trước khi dùng method đòi WCS.
