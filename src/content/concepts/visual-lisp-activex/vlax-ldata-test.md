---
{
  "id": "concept.visual-lisp-activex.vlax-ldata-test",
  "slug": "vlax-ldata-test",
  "title": "vlax-ldata-test",
  "description": "Kiểm tra dữ liệu có lưu bằng ldata được không.",
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
      "title": "Autodesk — vlax-ldata-test",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-CD72D160-25BF-43F5-BD30-AC715F4A2426.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-ldata-test data)
```

## Tham số

data: giá trị cần thử.

## Kết quả

T nếu được lưu, nil nếu không.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-ldata-test '("ROAD" 20.0))
```

## Lỗi thường gặp

Đừng lưu VLA object sống làm tham chiếu lâu dài; lưu định danh phù hợp.
