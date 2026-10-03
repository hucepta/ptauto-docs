---
{
  "id": "lesson.visual-lisp-activex.autolisp-den-object",
  "slug": "autolisp-den-object",
  "title": "Từ LISP đến object",
  "description": "Nối kiến thức AutoLISP với property, method và phạm vi mô hình ActiveX.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.bat-dau",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — vlax-get-property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B3F22E35-4666-452F-89C8-5BC15B9E9463.htm"
    },
    {
      "title": "Autodesk — vlax-property-available-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E8A5B009-46D6-4BA7-9655-88104F8BE792.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Phiên bản có hỗ trợ API được dùng",
      "platform": "Windows"
    }
  ]
}
---

## Học tiếp từ điều đã biết

Bạn vẫn dùng defun, setq, if và list của AutoLISP. Visual LISP bổ sung các hàm `vl-`/`vlax-`; ActiveX cho phép truy cập object COM trên AutoCAD Windows. Một entity có thể được nhận diện bằng ename để đọc DXF hoặc VLA object để đọc property. Hai cách tham chiếu cùng entity nhưng có kiểu dữ liệu khác nhau.

Property mô tả trạng thái, như Layer. Method là thao tác, như Move. Collection chứa nhiều object, như Layers. Không phải mọi object có cùng property hoặc method.

## Thử một LINE

1. Mở DWG học trong AutoCAD Windows, chọn tab Model và dùng LINE tạo một đoạn.
2. Gõ `(vl-load-com)` tại Command Line.
3. Chọn LINE và chuyển tham chiếu:

```lisp
(setq pick (entsel "\nChon LINE: "))
(if pick
  (progn
    (setq en (car pick))
    (setq obj (vlax-ename->vla-object en))
    (list (type en) (type obj))
  )
)
```

Kết quả gồm ENAME và VLA-OBJECT. Bấm Enter không chọn trả nil. Escape hủy input; khi hủy, dừng lượt thử và chạy lại từ đầu.

## Đối chiếu hai cách đọc

```lisp
(list (cdr (assoc 8 (entget en))) (vla-get-Layer obj))
```

Hai chuỗi layer phải giống nhau. Chọn entity khác bằng cách chạy lại phần chọn; đừng chỉ đọc biến obj cũ và tưởng nó tự theo lựa chọn trên màn hình. Biến giữ tham chiếu đến object đã chuyển lúc trước.

Để trả từ object về ename, dùng `vlax-vla-object->ename`. Đối tượng Application hoặc collection không có cùng ý nghĩa entity hình học, nên không áp dụng việc chuyển ename cho mọi object.

## Phạm vi sử dụng

ActiveX trong AutoLISP dành cho Windows. API có trong từng sản phẩm/phiên bản phải được tra cứu trên trang Autodesk của hàm. Mô hình AutoCAD ActiveX không tự cung cấp toàn bộ dữ liệu thiết kế Civil 3D. Bắt đầu với LINE, CIRCLE và Layers để nắm object trước khi ghép API khác.

## Bài tập

Tạo LINE trên layer 0 và CIRCLE trên layer học do bạn tạo. Đọc layer bằng cả DXF và ActiveX, rồi mở Properties bằng Ctrl+1 để đối chiếu. Ghi loại giá trị en, obj và chuỗi layer; chỉ chuyển sang bài tạo object khi bạn phân biệt được ba giá trị này.
