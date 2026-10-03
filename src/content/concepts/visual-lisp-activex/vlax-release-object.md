---
{
  "id": "concept.visual-lisp-activex.vlax-release-object",
  "slug": "vlax-release-object",
  "title": "vlax-release-object",
  "description": "Giải phóng tham chiếu COM.",
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
      "title": "Autodesk — vlax-release-object",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-85FA59E7-9EC9-4690-8CEE-318BF542C0E6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-release-object obj)
```

## Tham số

obj: VLA object do chương trình giữ.

## Kết quả

Số nguyên trạng thái tham chiếu.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-release-object obj)
```

## Lỗi thường gặp

Sau release không tiếp tục đọc property qua biến obj.
