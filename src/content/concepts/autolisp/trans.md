---
{
  "id": "concept.autolisp.trans",
  "slug": "trans",
  "title": "trans: chuyển điểm và vector",
  "description": "Chuyển đúng hệ tọa độ và dùng displacement khi dữ liệu là hướng dịch.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "api",
  "aliases": [
    "WCS",
    "UCS",
    "OCS",
    "DCS",
    "vector dịch chuyển"
  ],
  "relatedConceptIds": [
    "concept.autolisp.entity-dxf"
  ],
  "exampleIds": [
    "example.autolisp.bao-cao-toa-do"
  ],
  "sources": [
    {
      "title": "Autodesk — trans (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1A316343-0B68-4DBE-8F49-B4D601CB8FCC.htm"
    },
    {
      "title": "Autodesk — About Coordinate System Transformations",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP/files/GUID-0F0B833D-78ED-4491-9918-9481793ED10B.htm"
    },
    {
      "title": "Autodesk — Object Coordinate Systems (OCS) in DXF",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-DXF/files/GUID-D99F1509-E4E4-47A3-8691-92EA07DC88F5.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows / macOS"
    }
  ]
}
---

## Hợp đồng của trans

`(trans pt from to [disp])` chuyển điểm hoặc vector giữa hai hệ. Mã 0 là WCS, 1 là UCS, 2 là DCS; mã 3 là Paper Space DCS và chỉ dùng cùng mã 2. Entity name có thể chỉ OCS của entity đó.

Điểm từ `getpoint` thuộc UCS. Chuyển sang WCS để lưu báo cáo, hoặc chuyển dữ liệu WCS/OCS về UCS trước khi truyền cho lệnh CAD. Tên biến nên ghi hệ tọa độ để dễ kiểm tra luồng dữ liệu.

## Điểm khác vector

Điểm có vị trí nên chịu tác động của gốc tọa độ. Vector chỉ mô tả độ dời hoặc hướng. Đối số cuối khác `nil`, thường là `T`, yêu cầu xử lý như vector; thiếu đối số này có thể đưa độ dịch gốc vào hướng dịch.

## Đọc đúng dữ liệu entity

Không áp dụng cùng quy tắc group 10 cho mọi loại. LINE dùng WCS cho hai đầu, CIRCLE dùng OCS cho tâm. LWPOLYLINE lưu đỉnh 2D và elevation riêng. Khi cần điểm đầy đủ, kết hợp elevation trước khi chuyển. Thử cùng vị trí dưới UCS World và UCS xoay để phát hiện lỗi đang bị che bởi hai hệ trùng nhau.
