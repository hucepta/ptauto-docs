---
{
  "id": "concept.visual-lisp-activex.vlax-ldata-put",
  "slug": "vlax-ldata-put",
  "title": "vlax-ldata-put",
  "description": "Lưu dữ liệu LISP trong dictionary.",
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
      "title": "Autodesk — vlax-ldata-put",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D2459C22-223C-4C8E-A69C-F288B8FBFA28.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-ldata-put dict key data [private])
```

## Tham số

dict: tên dictionary hoặc VLA object; key: khóa chuỗi; data: dữ liệu hỗ trợ; private: phạm vi VLX tùy chọn.

## Kết quả

Dữ liệu vừa lưu.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-ldata-put "PTA_LEARN" "step" 20.0)
```

## Lỗi thường gặp

Dùng namespace riêng để tránh ghi đè dữ liệu ứng dụng khác.
