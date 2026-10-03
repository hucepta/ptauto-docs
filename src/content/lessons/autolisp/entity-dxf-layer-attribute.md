---
{
  "id": "lesson.autolisp.entity-dxf-layer-attribute",
  "slug": "entity-dxf-layer-attribute",
  "title": "Đọc entity và DXF",
  "description": "Đọc entget, sửa entmod, tạo entmake và duyệt attribute bằng entnext có điểm dừng.",
  "status": "published",
  "chapterId": "chapter.autolisp.du-lieu-ban-ve",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.toa-do-trans-hinh-hoc"
  ],
  "conceptIds": [
    "concept.autolisp.entity-dxf",
    "concept.autolisp.entmod-entmake"
  ],
  "exampleIds": [
    "example.autolisp.doc-attribute-block",
    "example.autolisp.tao-sua-line-dxf"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — entget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-12540DAE-C84B-4BDB-AEEC-DDFE5BE3C42A.htm"
    },
    {
      "title": "Autodesk — entmod (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C7D27797-247E-49B9-937C-0D8C58F4C832.htm"
    },
    {
      "title": "Autodesk — entmake (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D47983BA-1E5D-417D-85B8-6F3DE5F506BA.htm"
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
  ],
  "tags": [
    "AutoLISP"
  ],
  "examplePlacements": [
    {
      "heading": "sửa-và-tạo-có-kiểm-tra",
      "exampleIds": [
        "example.autolisp.tao-sua-line-dxf"
      ]
    },
    {
      "heading": "block-và-attribute-là-cấu-trúc",
      "exampleIds": [
        "example.autolisp.doc-attribute-block"
      ]
    }
  ],
  "illustration": "metadata"
}
---

## Entity name và dữ liệu DXF

Entity là đối tượng của database bản vẽ. Entity name là tham chiếu dùng trong phiên xử lý; Handle là chuỗi định danh lưu với đối tượng trong bản vẽ. Đừng ghi entity name thành cấu hình dài hạn hay xem Handle là mã duy nhất giữa nhiều DWG.

`entget` trả Association List. Group 0 cho loại entity, 5 cho Handle, 8 cho layer. Với LINE, group 10 và 11 là hai đầu WCS; với TEXT và CIRCLE, phải kiểm tra quy ước OCS trước khi xử lý điểm. `assoc` chỉ lấy mục đầu tiên: LWPOLYLINE có nhiều group 10 nên phải duyệt để lấy hết đỉnh. Group 42 bulge lưu đoạn cung, không thể bỏ rồi tính chiều dài như toàn đoạn thẳng.

## Sửa và tạo có kiểm tra

`entmod` nhận list đã sửa của entity hiện có; thường dùng `subst` thay cặp DXF cần đổi rồi kiểm tra kết quả khác `nil`. Giữ thông tin định danh từ `entget`, không thay loại entity hoặc Handle. Kiểm tra layer khóa trước khi sửa; nếu thay màu ACI, True Color group 420 có thể ưu tiên hơn group 62.

`entmake` tạo entity từ định nghĩa DXF, trả list khi thành công và `nil` khi thiếu hoặc sai dữ liệu. LWPOLYLINE cần subclass marker, số đỉnh và chuỗi đỉnh hợp lệ; không dùng list của LINE rồi chỉ thay tên loại. Tạo trên layer rõ ràng và gom sửa đổi trong Undo trước khi làm tiện ích ghi dữ liệu.

## Block và attribute là cấu trúc

Block definition chứa hình học mẫu; INSERT là một block reference được đặt trong bản vẽ. Attribute reference của INSERT có thể là subentity ATTRIB; nó khác ATTDEF trong definition và khác attribute hằng.

Ví dụ PTA_BLOCK_ATTRS chỉ đọc INSERT có group 66 bằng 1. Dùng `entnext` đi qua chuỗi subentity, in group 2 là tag và group 1 là giá trị khi gặp ATTRIB, rồi dừng ở SEQEND. Không có attribute cũng là kết quả hợp lệ. Không tiếp tục đi toàn database sau block và không diễn giải attribute nhiều dòng bằng bộ đọc đơn giản này.

## Layer, selection và thực hành

Layer là bản ghi bảng ký hiệu; tra bằng `tblsearch`. Selection set chứa main entity, vì thế chọn INSERT không tự cho selection set riêng của ATTRIB. Lọc đúng loại và phạm vi trước khi duyệt để tránh sửa block definition dùng chung ngoài ý muốn.

Tạo block có hai attribute thường, chèn hai bản với giá trị khác nhau và chạy mẫu trên từng bản. Thử chọn LINE, block không có attribute và nhấn Enter. Sau đó đọc một LWPOLYLINE có đoạn cung để phân biệt đỉnh với đường hình học. Mục tiêu là đọc đúng cấu trúc trước khi viết lệnh thay layer hoặc đổi attribute.
