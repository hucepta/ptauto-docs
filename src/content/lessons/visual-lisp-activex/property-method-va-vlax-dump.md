---
{
  "id": "lesson.visual-lisp-activex.property-method-va-vlax-dump",
  "slug": "property-method-va-vlax-dump",
  "title": "Property, method và cách tự tra một VLA object",
  "description": "Dùng vlax-dump-object để quan sát thành viên, phân biệt đọc, ghi property và gọi method.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.nen-tang",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.visual-lisp-activex.khoi-dong-activex"
  ],
  "flow": [
    {
      "label": "Đối tượng",
      "detail": "Chọn entity và đổi sang VLA object"
    },
    {
      "label": "Khám phá",
      "detail": "Liệt kê thành viên bằng vlax-dump-object"
    },
    {
      "label": "Sử dụng",
      "detail": "Kiểm tra property/method trước khi gọi"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — VLA Functions with ActiveX",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD ActiveX",
      "version": "COM/VLA có hỗ trợ",
      "platform": "Windows"
    }
  ]
}
---

## Ba câu hỏi trước khi gọi API

`Layer` là property: bạn có thể đọc bằng `vla-get-Layer`; nếu cho phép ghi, dùng `vla-put-Layer`. `Move` là method: nó thực hiện hành động, không phải giá trị được đọc. Tên property/method thuộc kiểu đối tượng cụ thể; không thấy ở LINE không có nghĩa mọi đối tượng đều giống LINE.

```lisp
(vl-load-com)
(setq pick (entsel "\nChon doi tuong: "))
(if pick
  (progn
    (setq obj (vlax-ename->vla-object (car pick)))
    (vlax-dump-object obj T)
  )
)
```

`vlax-dump-object` là công cụ quan sát trong môi trường phát triển; đầu ra có thể rất dài. Đừng sao chép toàn bộ danh sách thành viên vào routine sản xuất. Trước khi ghi property, kiểm tra `vlax-property-available-p` với tham số kiểm tra writable khi cần. Trước khi gọi method không chắc có, dùng `vlax-method-applicable-p`.

## Bài luyện

So Layer và ObjectName của LINE và CIRCLE. Chọn một property chỉ đọc và một method, ghi rõ mục đích của `get`, `put` và method. Thử bấm Escape để bảo đảm không gọi hàm COM với `nil`.
