---
{
  "id": "concept.autolisp.bieu-thuc",
  "slug": "bieu-thuc",
  "title": "Biểu thức",
  "description": "Một cấu trúc được AutoLISP đánh giá để tạo giá trị.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "term",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "aliases": [
    "expression",
    "evaluation",
    "biểu thức"
  ],
  "sources": [
    {
      "title": "Autodesk — quote (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-18F7E287-CB2F-4150-9A07-CE23C3F9E604.htm"
    }
  ]
}
---


## Cách đọc

Một lời gọi có dạng (tên-hàm đối-số...). Biểu thức lồng nhau tạo đầu vào cho biểu thức bên ngoài.

## Giữ dữ liệu nguyên dạng

quote trả biểu thức mà không đánh giá. Dấu nháy đơn là cách viết ngắn của quote. Dùng cách này cho dữ liệu literal, chẳng hạn '(1 2 3).

## Lỗi dễ gặp

Đặt một list dữ liệu vào vị trí code có thể khiến AutoLISP tìm hàm ở phần tử đầu. Xác định rõ bạn đang truyền dữ liệu hay thực hiện lời gọi.

