---
{
  "id": "concept.autolisp.entget",
  "slug": "entget",
  "title": "entget",
  "description": "Đọc association list DXF của entity.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-12540DAE-C84B-4BDB-AEEC-DDFE5BE3C42A.htm"
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
(entget ename [applist])
```

## Tham số và kết quả

`ename` là entity name. `applist` tùy chọn là list tên ứng dụng đã đăng ký để lấy XData tương ứng. Kết quả là association list dữ liệu entity theo mã DXF; dùng `assoc` để tìm mã, không dựa vào thứ tự list.

## Ví dụ: đọc loại và layer

Chuẩn bị DWG có entity đồ họa sẵn. Dán khối vào Command Line AutoCAD, rồi chọn entity.

```lisp
(defun c:PTADOCDXF (/ picked ed)
  (if (setq picked (entsel "\nChon entity de doc: "))
    (progn
      (setq ed (entget (car picked)))
      (if ed
        (progn
          (princ "\nLoai: ")
          (princ (cdr (assoc 0 ed)))
          (princ "\nLayer: ")
          (princ (cdr (assoc 8 ed))))
        (princ "\nKhong doc duoc entity.")))
    (princ "\nKhong co entity duoc chon."))
  (princ))
(c:PTADOCDXF)
```

Chọn LINE trên layer 0 thì in `Loai: LINE` và `Layer: 0`. Ví dụ chỉ đọc dữ liệu.

## Kiểm tra khi áp dụng

Enter khi không chọn được xử lý; Esc ngắt bằng lỗi hủy. Mã DXF trong `entget` khác một phần với file DXF. Tọa độ cần được hiểu theo loại entity và hệ tọa độ tương ứng.

[Tham chiếu Autodesk về entget](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-12540DAE-C84B-4BDB-AEEC-DDFE5BE3C42A.htm).
