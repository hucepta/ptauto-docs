---
{
  "id": "concept.autolisp.entmod-entmake",
  "slug": "entmod-entmake",
  "title": "entmod và entmake: sửa khác tạo",
  "description": "Giữ định danh khi sửa và cung cấp đủ định nghĩa DXF khi tạo entity mới.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "api",
  "aliases": [
    "sửa DXF",
    "tạo entity",
    "entupd",
    "subclass marker"
  ],
  "relatedConceptIds": [
    "concept.autolisp.entity-dxf",
    "concept.autolisp.trans"
  ],
  "exampleIds": [
    "example.autolisp.doc-attribute-block",
    "example.autolisp.tao-sua-line-dxf"
  ],
  "sources": [
    {
      "title": "Autodesk — entmod (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C7D27797-247E-49B9-937C-0D8C58F4C832.htm"
    },
    {
      "title": "Autodesk — entmake (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D47983BA-1E5D-417D-85B8-6F3DE5F506BA.htm"
    },
    {
      "title": "Autodesk — LWPOLYLINE (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2015/ENU/AutoCAD-DXF/files/GUID-748FC305-F3F2-4F74-825A-61F04D757A50.htm"
    },
    {
      "title": "Autodesk — LAYER (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2018/ENU/AutoCAD-DXF/files/GUID-D94802B0-8BE8-4AC9-8054-17197688AFDB.htm"
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

## Sửa entity đang có

`entmod` nhận list dữ liệu của một entity hiện hữu, thường bắt đầu từ `entget`. Dùng `subst` thay cặp cần sửa rồi kiểm tra kết quả: trả `nil` nghĩa là sửa thất bại. Không đổi loại entity hay Handle trong list. Layer khóa và giới hạn riêng của loại object cần được kiểm tra trước.

Khi đổi màu ACI group 62, group 420 True Color có thể được ưu tiên. Với attribute hoặc entity phức hợp, `entupd` hỗ trợ cập nhật hình ảnh sau sửa; nó không thay thế bước ghi dữ liệu.

## Tạo entity mới

`entmake` nhận định nghĩa DXF đủ dữ liệu, trả list khi thành công hoặc `nil` khi bị từ chối. Nó bỏ qua định danh được sao chép từ entity cũ. Với loại mới hơn, subclass marker có thể là phần bắt buộc của định nghĩa.

LWPOLYLINE cần số đỉnh, đỉnh OCS và các marker phù hợp. Tạo LINE chỉ bằng hai điểm không chứng minh cùng list dùng được cho TEXT hay polyline.

## Chọn đường xử lý

Dùng thao tác sửa cho đúng entity người dùng chỉ định, thao tác tạo cho kết quả mới. Gom sửa đổi vào Undo, kiểm tra hệ tọa độ và giữ bản vẽ thử để đối chiếu trước khi đưa vào tiện ích hàng loạt.
