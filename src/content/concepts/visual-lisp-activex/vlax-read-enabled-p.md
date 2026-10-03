---
{
  "id": "concept.visual-lisp-activex.vlax-read-enabled-p",
  "slug": "vlax-read-enabled-p",
  "title": "vlax-read-enabled-p",
  "description": "Kiểm tra đối tượng cho phép đọc.",
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
      "title": "Autodesk — vlax-read-enabled-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8BBBF683-BA93-4942-9B8C-AD43D490E52A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-read-enabled-p obj)
```

## Tham số

obj: VLA object.

## Kết quả

T hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-read-enabled-p obj)
```

## Lỗi thường gặp

Không suy ra quyền ghi từ quyền đọc.
