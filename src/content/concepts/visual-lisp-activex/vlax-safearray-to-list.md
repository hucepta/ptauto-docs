---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-to-list",
  "slug": "vlax-safearray-to-list",
  "title": "vlax-safearray->list",
  "description": "Đổi SafeArray từ COM sang list AutoLISP.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2024/ESP/AutoCAD-AutoLISP-Reference/files/GUID-A38DDA9E-1E84-4529-9744-4C07219A28DB.htm"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```lisp
(vlax-safearray->list array)
```

## Tham số và kết quả

array là SafeArray, không phải Variant bọc ngoài. List hoặc nil.

## Cách dùng

Đọc chuỗi tọa độ phẳng rồi nhóm thành các điểm XY/XYZ đúng bước.

```lisp
(setq a (vlax-variant-value (vla-get-Coordinates obj)))
(setq values (vlax-safearray->list a))
```

## Kiểm tra khi áp dụng

Kiểm loại Variant trước khi bóc; list phẳng không tự mang ngữ nghĩa điểm.

## Thử với mảng tự tạo

```lisp
(vl-load-com)
(setq a (vlax-make-safearray vlax-vbDouble '(0 . 2)))
(vlax-safearray-fill a '(10.0 20.0 0.0))
(vlax-safearray->list a) ; (10.0 20.0 0.0)
```

## Lỗi thường gặp

Coordinates khác cấu trúc theo loại polyline: không nhóm mặc định mỗi ba phần tử khi dữ liệu là XY phẳng. Ví dụ mảng tự tạo ở đây có ba phần tử do bạn xác định cận 0..2.
