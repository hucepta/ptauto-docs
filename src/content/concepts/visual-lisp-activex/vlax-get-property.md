---
{
  "id": "concept.visual-lisp-activex.vlax-get-property",
  "slug": "vlax-get-property",
  "title": "vlax-get-property",
  "description": "Đọc property COM.",
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
      "title": "Autodesk — vlax-get-property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B3F22E35-4666-452F-89C8-5BC15B9E9463.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-get-property object property)
```

## Tham số và kết quả

`object` là VLA-object; `property` là symbol hoặc chuỗi tên property. Kết quả phụ thuộc property: có thể là số, chuỗi, object, Variant hoặc SafeArray. Cú pháp tham chiếu có hai đối số; không tự thêm đối số chỉ mục.

## Ví dụ: đọc property Name của Document

Chuẩn bị AutoCAD Windows có DWG mở. Dán vào Command Line.

```lisp
(defun c:PTADOCPROPERTY (/ app doc result)
  (vl-load-com)
  (setq app (vlax-get-acad-object)
        doc (vla-get-ActiveDocument app)
        result
          (vl-catch-all-apply
            'vlax-get-property (list doc 'Name)))
  (if (vl-catch-all-error-p result)
    (princ (vl-catch-all-error-message result))
    (progn
      (princ "\nTen DWG: ")
      (princ result)))
  (princ))
(c:PTADOCPROPERTY)
```

In tên DWG hiện hành. Không có thao tác chọn hay nhánh Cancel; lỗi đọc property được in thay vì dùng nhầm kết quả lỗi.

## Lỗi thường gặp

Không coi mọi property đều là chuỗi. Sai tên hoặc property không áp dụng cho object có thể gây lỗi; dùng `vlax-property-available-p` khi cần kiểm tra trước. Hỗ trợ ActiveX này chỉ có trên Windows.

[Tham chiếu Autodesk về vlax-get-property](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B3F22E35-4666-452F-89C8-5BC15B9E9463.htm).
