---
{
  "id": "concept.visual-lisp-activex.vlax-ldata-list",
  "slug": "vlax-ldata-list",
  "title": "vlax-ldata-list",
  "description": "Liệt kê dữ liệu LISP trong dictionary.",
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
      "title": "Autodesk — vlax-ldata-list",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A124867A-FBB8-4B36-9BB0-B50D971C91A1.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-ldata-list dict [private])
```

## Tham số

dict: dictionary; private: phạm vi VLX tùy chọn.

## Kết quả

Association list các cặp khóa/dữ liệu.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-ldata-list "PTA_LEARN")
```

## Lỗi thường gặp

Không coi kết quả là collection COM; đây là list LISP.
