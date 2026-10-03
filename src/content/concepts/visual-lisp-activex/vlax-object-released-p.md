---
{
  "id": "concept.visual-lisp-activex.vlax-object-released-p",
  "slug": "vlax-object-released-p",
  "title": "vlax-object-released-p",
  "description": "Kiểm tra tham chiếu COM đã release.",
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
      "title": "Autodesk — vlax-object-released-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-23DA7B30-FBB5-40DC-A93E-E1FC2A5D8B6F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-object-released-p obj)
```

## Tham số

obj: VLA object.

## Kết quả

T nếu release, nil nếu còn dùng được.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-object-released-p obj)
```

## Lỗi thường gặp

Chưa release không bảo đảm entity chưa bị xóa.
