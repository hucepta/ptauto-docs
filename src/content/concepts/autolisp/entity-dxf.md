---
{
  "id": "concept.autolisp.entity-dxf",
  "slug": "entity-dxf",
  "title": "Entity, Handle và Association List DXF",
  "description": "Đọc loại, layer, hình học và subentity theo cấu trúc được công bố.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "term",
  "aliases": [
    "entity name",
    "ename",
    "Handle",
    "group code",
    "DXF"
  ],
  "relatedConceptIds": [
    "concept.autolisp.assoc",
    "concept.autolisp.entmod-entmake"
  ],
  "exampleIds": [
    "example.autolisp.doc-attribute-block",
    "example.autolisp.xuat-line-csv"
  ],
  "sources": [
    {
      "title": "Autodesk — entget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-12540DAE-C84B-4BDB-AEEC-DDFE5BE3C42A.htm"
    },
    {
      "title": "Autodesk — entnext (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-AutoLISP-Reference/files/GUID-65924CF5-0C51-4E36-8B38-7A5513951A04.htm"
    },
    {
      "title": "Autodesk — LINE (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-DXF/files/GUID-FCEF5726-53AE-4C43-B4EA-C84EB8686A66.htm"
    },
    {
      "title": "Autodesk — LWPOLYLINE (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2015/ENU/AutoCAD-DXF/files/GUID-748FC305-F3F2-4F74-825A-61F04D757A50.htm"
    },
    {
      "title": "Autodesk — ATTRIB (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-DXF/files/GUID-7DD8B495-C3F8-48CD-A766-14F9D7D0DD9B.htm"
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

## Dữ liệu nào định danh đối tượng

Entity name là tham chiếu mà `entget`, `entmod` và các hàm chọn dùng trong phiên bản vẽ. Handle là chuỗi lưu với entity, hữu ích để đối chiếu trong DWG gốc. Cần giữ ngữ cảnh bản vẽ; không dùng Handle đơn lẻ làm khóa toàn bộ hệ thống nhiều DWG.

## Cách đọc DXF trong AutoLISP

`entget` trả Association List: group 0 là loại, 5 là Handle, 8 là layer. Dữ liệu AutoLISP không hoàn toàn giống biểu diễn từng dòng của file DXF. Một điểm thường là list có group code và các thành phần tọa độ.

`assoc` chỉ trả mục đầu tiên phù hợp. Với LWPOLYLINE, group 10 lặp nhiều lần cho các đỉnh nên cần duyệt list; group 42 biểu diễn bulge cho đoạn cung. Không xem các đỉnh là toàn bộ hình học đường.

## Main entity và subentity

Selection set chứa main entity. ATTRIB đi cùng INSERT có thể được đọc bằng `entnext`, kết thúc tại SEQEND. Tag nằm ở group 2; giá trị thông thường ở group 1. Mẫu đọc attribute giới hạn trường hợp thường, không diễn giải attribute nhiều dòng hoặc constant attribute như cùng một cấu trúc.
