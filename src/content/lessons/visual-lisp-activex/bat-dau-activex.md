---
{
  "id": "lesson.visual-lisp-activex.bat-dau-activex",
  "slug": "bat-dau-activex",
  "title": "Đọc object đầu tiên",
  "description": "Hiểu khi nào dùng ActiveX, nạp vl-load-com và đọc thuộc tính của một đối tượng đã chọn.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "sources": [
    {
      "title": "Autodesk — About Accessing the AutoCAD Application Object",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-62F07541-9663-4D83-B5EE-24D562351FCE.htm"
    },
    {
      "title": "Autodesk — About Using VLA Functions",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "ActiveX/COM có hỗ trợ",
      "platform": "Windows"
    }
  ],
  "illustration": "metadata"
}
---

## Vì sao cần thêm ActiveX

AutoLISP có thể đọc thông tin một đối tượng bằng `entget` và mã DXF. Khi bạn cần đi qua Documents, ModelSpace, Layers hoặc gọi phương thức hình học trên Curve, ActiveX cho bạn một mô hình đối tượng khác. Một đối tượng bản vẽ có thể được tham chiếu bằng **ename** khi chọn hoặc bằng **VLA object** khi dùng property/method COM. Hai giá trị này không hoán đổi trực tiếp.

| Bạn có | Muốn làm | Cầu nối |
| --- | --- | --- |
| ename từ `entsel` | Dùng `vla-get-Layer` | `vlax-ename->vla-object` |
| VLA object | Dùng `entget` | `vlax-vla-object->ename` |

ActiveX trong AutoLISP chỉ có trên Windows. Trước lời gọi `vla-` hoặc `vlax-`, nạp phần mở rộng bằng `(vl-load-com)`.

## Quan sát một đối tượng

Mở DWG thử có LINE. Chạy từng biểu thức sau trong AutoCAD Command Line; chọn LINE khi được hỏi.

```lisp
(vl-load-com)
(setq selected (entsel "\nChon mot doi tuong: "))
(if selected
  (progn
    (setq obj (vlax-ename->vla-object (car selected)))
    (list (vla-get-ObjectName obj) (vla-get-Layer obj))
  )
  (princ "\nKhong co doi tuong duoc chon.")
)
```

`entsel` trả một list chứa ename và điểm chọn; `car` lấy ename. Nhánh `if` ngăn chuyển đổi khi người dùng nhấn Enter mà không chọn được đối tượng. `vla-get-ObjectName` trả tên loại đối tượng theo COM; `vla-get-Layer` trả tên layer. Chưa có dòng nào sửa DWG.

## Kiểm tra

Chọn một CIRCLE rồi so kết quả với LINE. Bấm Enter mà không chọn để thấy nhánh `nil`. Escape hủy input và dừng lượt chạy; khi cần xử lý hủy trong một công cụ có thay đổi trạng thái, thêm hàm xử lý lỗi để khôi phục. Nếu gọi `vla-get-Layer` trực tiếp với ename, bạn sẽ thấy vì sao phải chuyển sang VLA object. Sau bài này, học Object Model để hiểu đối tượng đang nằm ở đâu trong Document.
