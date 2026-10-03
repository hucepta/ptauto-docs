---
{
  "id": "concept.visual-lisp-activex.vlax-ldata-delete",
  "slug": "vlax-ldata-delete",
  "title": "vlax-ldata-delete",
  "description": "Xóa một khóa dữ liệu LISP.",
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
      "title": "Autodesk — vlax-ldata-delete",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-06F6C8B7-A55C-42DE-BD51-A9FAB68260D3.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-ldata-delete dict key [private])
```

## Tham số

dict: dictionary; key: khóa; private: phạm vi VLX tùy chọn.

## Kết quả

T nếu xóa thành công, nil nếu không.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-ldata-delete "PTA_LEARN" "step")
```

## Lỗi thường gặp

Chỉ xóa khóa do tool của bạn sở hữu.
