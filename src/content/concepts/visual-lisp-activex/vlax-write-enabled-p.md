---
{
  "id": "concept.visual-lisp-activex.vlax-write-enabled-p",
  "slug": "vlax-write-enabled-p",
  "title": "vlax-write-enabled-p",
  "description": "Kiểm tra đối tượng cho phép ghi.",
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
      "title": "Autodesk — vlax-write-enabled-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-67DAD30A-B359-4566-9B11-C6203EB71247.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-write-enabled-p obj)
```

## Tham số

obj: VLA object.

## Kết quả

T hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-write-enabled-p obj)
```

## Lỗi thường gặp

Quyền ghi có thể thay đổi theo trạng thái đối tượng; vẫn bắt lỗi khi thao tác.
