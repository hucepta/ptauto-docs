---
{
  "id": "concept.visual-lisp-activex.vlax-ldata-get",
  "slug": "vlax-ldata-get",
  "title": "vlax-ldata-get",
  "description": "Đọc dữ liệu LISP đã lưu.",
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
      "title": "Autodesk — vlax-ldata-get",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C279216F-9568-4176-A9E7-BCB45E3F59C7.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-ldata-get dict key [default-data [private]])
```

## Tham số

dict: dictionary; key: khóa; default-data: mặc định tùy chọn; private: phạm vi VLX tùy chọn.

## Kết quả

Dữ liệu hoặc giá trị mặc định/nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-ldata-get "PTA_LEARN" "step" 10.0)
```

## Lỗi thường gặp

Không có khóa khác với khóa lưu nil; thiết kế dữ liệu rõ ràng.
