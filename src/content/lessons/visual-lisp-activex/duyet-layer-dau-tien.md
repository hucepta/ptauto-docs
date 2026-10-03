---
{
  "id": "lesson.visual-lisp-activex.duyet-layer-dau-tien",
  "slug": "duyet-layer-dau-tien",
  "title": "Đọc danh sách layer",
  "description": "Duyệt collection Layers và phân biệt tên layer với entity trên layer.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.object-model",
  "order": 4,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — vlax-for",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9CB1C7DD-7E25-4F8C-8858-D79FEC043BEC.htm"
    },
    {
      "title": "Autodesk — vl-catch-all-error-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-14CADE53-54C6-437D-8F3C-14845E08591C.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Phiên bản có hỗ trợ API được dùng",
      "platform": "Windows"
    }
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.vlax-for",
    "concept.visual-lisp-activex.vla-item",
    "concept.visual-lisp-activex.vl-catch-all-error-p"
  ]
}
---

## Chuẩn bị dữ liệu rõ ràng

Trong DWG thử, gõ LAYER để mở Layer Properties Manager. Bấm **New Layer**, tạo `PTA_ROAD` và `PTA_NOTE`. Không cần tạo entity trên hai layer: layer là mục dữ liệu của bản vẽ, tồn tại độc lập với việc có đối tượng dùng nó.

Mục tiêu là đọc toàn bộ tên layer; bài không đổi layer hiện hành và không xóa layer. Layer 0 vẫn thuộc danh sách.

## Duyệt collection

Lưu và nạp mã sau:

```lisp
(vl-load-com)
(defun c:PTLAYERS (/ doc layers lay count)
  (setq doc (vla-get-ActiveDocument (vlax-get-acad-object))
        layers (vla-get-Layers doc)
        count 0)
  (vlax-for lay layers
    (princ (strcat "\n" (vla-get-Name lay)))
    (setq count (1+ count))
  )
  (princ (strcat "\nTong layer: " (itoa count)))
  (princ)
)
```

Trong AutoCAD, gọi PTLAYERS và mở lịch sử Command Line bằng F2 nếu danh sách dài. Bạn phải tìm được PTA_ROAD, PTA_NOTE và 0. Số lượng còn gồm các layer đã có trong template, nên không giả định tổng luôn bằng 3.

## Đọc một mục cụ thể

Ở Command Line, thiết lập lại biến ngoài lệnh rồi dùng Item:

```lisp
(setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
(setq layers (vla-get-Layers doc))
(setq road (vla-Item layers "PTA_ROAD"))
(vla-get-Name road)
```

road là object layer, không phải selection set các entity trên layer. Muốn chọn entity cần ssget cùng filter mã DXF 8; việc chọn và việc tìm layer là hai nhiệm vụ khác nhau.

## Xử lý tên chưa có

Gọi Item với tên không tồn tại gây lỗi COM. Với tên nhập ngoài, bọc lời gọi:

```lisp
(setq result (vl-catch-all-apply 'vla-Item (list layers "PTA_MISSING")))
(if (vl-catch-all-error-p result)
  (princ "\nLayer chua ton tai.")
  (princ (vla-get-Name result))
)
```

## Bài tập

Tạo thêm một layer trong Layer Properties Manager, chạy lại và đối chiếu số lượng tăng 1. Sau đó vẽ hai LINE trên PTA_ROAD; chạy PTLAYERS lần nữa. Số layer không tăng vì entity mới dùng layer đã có. Không xóa layer trong lúc vlax-for đang duyệt; nếu công cụ sau cần xóa hàng loạt, thu thập mục tiêu trước rồi mới thay đổi collection.
