---
{
  "id": "concept.autolisp.setq",
  "slug": "setq",
  "title": "setq",
  "description": "Gán giá trị của biểu thức cho một hoặc nhiều symbol.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — setq (AutoLISP)",
      "url": "https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-2F4B7A7B-7B6F-4E1C-B32E-677506094EAA-htm.html"
    }
  ],
  "relatedConceptIds": [
    "concept.autolisp.bieu-thuc"
  ]
}
---


## Cú pháp

    (setq sym expr [sym expr]...)

sym không được đánh giá như một biểu thức. expr được đánh giá để tạo giá trị gán.

## Giá trị trả về

Giá trị của expr cuối cùng. Với (setq width 4.0 height 8.0), kết quả là 8.0.

## Khi sử dụng

Dùng tên biến gợi nghĩa, kiểm tra kiểu dữ liệu trước khi tính toán. Việc gán nhiều biến trong một lần gọi không tạo ra list các kết quả.

