---
{
  "id": "lesson.visual-lisp-activex.quan-sat-object",
  "slug": "quan-sat-object",
  "title": "Quan sát object",
  "description": "Tra property và method tại Command Line trước khi gọi API.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.bat-dau",
  "order": 4,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — vlax-dump-object",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-BCE56B30-54A6-42F9-8910-81AF2B7B9AA8.htm"
    },
    {
      "title": "Autodesk — vlax-method-applicable-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-63B81424-11BA-4CB3-A783-514031A2271D.htm"
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
<span id="chuẩn-bị-nơi-quan-sát" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Chuẩn bị bản vẽ

Mở DWG học có LINE và CIRCLE. Dùng VS Code mở thư mục LSP và tạo file `pt-inspect.lsp`. ActiveX chạy trong AutoCAD; Terminal của VS Code không đọc được object bản vẽ chỉ bằng cách chạy file như script thông thường.

<span id="viết-một-lệnh-quan-sát" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Viết lệnh quan sát

```lisp
(vl-load-com)
(defun c:PTINSPECT (/ pick obj)
  (setq pick (entsel "\nChon doi tuong de xem: "))
  (if pick
    (progn
      (setq obj (vlax-ename->vla-object (car pick)))
      (princ (strcat "\nLoai: " (vla-get-ObjectName obj)))
      (vlax-dump-object obj T)
    )
    (princ "\nKhong chon doi tuong.")
  )
  (princ)
)
```

Save, gõ APPLOAD trong AutoCAD, chọn file, bấm Load rồi Close. Nhập PTINSPECT và chọn LINE. Mở lịch sử Command Line bằng F2 trên Windows để xem danh sách dài. Tên object thường là AcDbLine; danh sách có property Layer, StartPoint, EndPoint và các method mà loại object hỗ trợ.

<span id="hỏi-trước-khi-thao-tác" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra property và method

Chạy riêng từng biểu thức sau với obj là object được chọn hợp lệ; nếu dùng lệnh trên, obj là biến cục bộ nên chọn lại để có biến dùng tại Command Line:

```lisp
(setq obj (vlax-ename->vla-object (car (entsel))))
(vlax-property-available-p obj 'Layer)
(vlax-property-available-p obj 'Layer T)
(vlax-method-applicable-p obj 'Move)
```

Đối với LINE thông thường, các kiểm tra trên phải trả T. T ở kiểm tra property không tự xác nhận layer đích tồn tại. T ở method không tự xác nhận tọa độ bạn truyền là hợp lệ. Dữ liệu ngoài vẫn cần được kiểm tra và lời gọi COM vẫn cần bắt lỗi ở công cụ thật.

<span id="so-sánh-để-hiểu-loại-object" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## So sánh loại object

Gọi PTINSPECT trên CIRCLE. Tìm Radius; gọi lại trên LINE và quan sát LINE không có Radius. Đây là lý do không nên xử lý mọi entity bằng một danh sách property cố định.

<span id="bài-tập-và-lỗi" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Bài tập

Ghi ba property LINE có thể đọc và một method bạn muốn thử sau. Với mỗi mục, mở trang Autodesk đúng property/method để xem kiểu đối số và giá trị trả. Nếu lỗi `no function definition: VLAX-...`, kiểm tra vl-load-com và môi trường hỗ trợ API. Nếu truyền ename trực tiếp cho dump-object, chuyển nó thành VLA object trước.
