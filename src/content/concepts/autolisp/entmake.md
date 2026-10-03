---
{
  "id": "concept.autolisp.entmake",
  "slug": "entmake",
  "title": "entmake",
  "description": "Tạo entity từ danh sách mã DXF hợp lệ.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk AutoLISP Reference",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D47983BA-1E5D-417D-85B8-6F3DE5F506BA.htm"
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
(entmake entity-data)
```

## Tham số và kết quả

entity-data là association list theo loại đối tượng. Trả dữ liệu định nghĩa khi tạo thành công, nil nếu thất bại.

## Cách dùng

Tạo LINE sau khi đã kiểm điểm đầu/cuối và layer.

```lisp
(entmake (list '(0 . "LINE") (cons 10 p1) (cons 11 p2)))
```

## Kiểm tra khi áp dụng

Thiếu mã bắt buộc làm lệnh thất bại; kiểm kết quả và Undo trên bản sao.
