---
{
  "id": "concept.visual-lisp-activex.vl-catch-all-error-message",
  "slug": "vl-catch-all-error-message",
  "title": "vl-catch-all-error-message",
  "description": "Đọc thông báo catch-all error.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vl-catch-all-error-message",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C703867D-7B64-480D-BE34-45A63BA02AB7.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-catch-all-error-message error-obj)
```

## Tham số

error-obj: đối tượng lỗi từ vl-catch-all-apply.

## Kết quả

Chuỗi mô tả lỗi.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq r (vl-catch-all-apply '/ '(1 0))) (if (vl-catch-all-error-p r) (vl-catch-all-error-message r))
```

## Lỗi thường gặp

Chỉ gọi khi đã xác nhận error-p.
