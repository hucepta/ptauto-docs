---
{
  "id": "concept.visual-lisp-activex.object-model",
  "slug": "object-model",
  "title": "Object Model và collection AutoCAD",
  "description": "Hiểu Application, Document và phạm vi chứa đối tượng trước khi duyệt.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "term",
  "aliases": [
    "Application",
    "Documents",
    "ModelSpace",
    "PaperSpace",
    "Layers",
    "Blocks",
    "Layouts"
  ],
  "relatedConceptIds": [],
  "exampleIds": [
    "example.visual-lisp-activex.thong-ke-modelspace"
  ],
  "sources": [
    {
      "title": "Autodesk — About the AutoCAD Object Model (ActiveX)",
      "url": "https://help.autodesk.com/cloudhelp/2024/CHS/AutoCAD-ActiveX/files/GUID-68D6EFA7-ED2D-482C-BBA6-EB22F2854348.htm"
    },
    {
      "title": "Autodesk — About Working With Collection Objects",
      "url": "https://help.autodesk.com/cloudhelp/2024/ESP/AutoCAD-AutoLISP/files/GUID-100F8BDB-2852-4986-BC09-53F77AFCDB96.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ]
}
---

## Quan hệ sở hữu

Application là gốc của Object Model. Documents chứa các bản vẽ đang mở; ActiveDocument xác định bản đang hoạt động. Từ Document, các property trả về ModelSpace, PaperSpace, Layers, Blocks hoặc Layouts. Property trả collection không phải chuỗi tên.

Giữ Document đã chọn ở đầu thao tác để batch đọc và sửa cùng một bản vẽ. Nếu đổi ActiveDocument giữa chừng, không suy ra mọi tham chiếu cũ cũng đã chuyển theo.

## Duyệt đúng phạm vi

Collection có Count, Item và khả năng duyệt qua `vlax-for`. ModelSpace chứa main object của không gian mô hình, không tự trải hình học trong block reference. Blocks chứa block definition; thao tác vào definition có thể ảnh hưởng nhiều bản chèn.

PaperSpace cần xét layout hiện hành. Khi xử lý từng layout, dùng collection Block của layout để có phạm vi rõ. Selection set là tập chọn theo tác vụ, có thể nhỏ hơn collection của không gian.

## Ứng dụng thực tế

Mẫu thống kê ObjectName của ModelSpace chỉ đọc. Tạo block chứa LINE rồi đối chiếu: block reference là một main object, LINE trong definition không được tính như LINE trực tiếp. Kiểm tra tên Document khi có nhiều DWG mở để phát hiện nhầm phạm vi trước khi thêm chức năng sửa.
