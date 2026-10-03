---
{
  "id": "lesson.visual-lisp-activex.object-model-collections",
  "slug": "object-model-collections",
  "title": "Duyệt collection",
  "description": "Đi từ Application tới Document, ModelSpace, PaperSpace, Layers, Blocks và Layouts.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.object-model",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.khoi-dong-activex"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.object-model",
    "concept.visual-lisp-activex.com-errors"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.thong-ke-modelspace"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — About the AutoCAD Object Model (ActiveX)",
      "url": "https://help.autodesk.com/cloudhelp/2024/CHS/AutoCAD-ActiveX/files/GUID-68D6EFA7-ED2D-482C-BBA6-EB22F2854348.htm"
    },
    {
      "title": "Autodesk — About Working With Collection Objects",
      "url": "https://help.autodesk.com/cloudhelp/2024/ESP/AutoCAD-AutoLISP/files/GUID-100F8BDB-2852-4986-BC09-53F77AFCDB96.htm"
    },
    {
      "title": "Autodesk — vlax-property-available-p",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E8A5B009-46D6-4BA7-9655-88104F8BE792.htm"
    },
    {
      "title": "Autodesk — Data Conversion Functions Reference",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-042A3895-D875-4FD2-A1E1-A3B565B27DE5.htm"
    },
    {
      "title": "Autodesk — About Releasing Objects and Freeing Memory",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-LT-AutoLISP/files/GUID-4A2C849B-C0E0-4991-905D-A916B2CD3F25.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ],
  "tags": [
    "Visual LISP",
    "ActiveX"
  ],
  "examplePlacements": [
    {
      "heading": "thực-hành-thống-kê-modelspace",
      "exampleIds": [
        "example.visual-lisp-activex.thong-ke-modelspace"
      ]
    }
  ],
  "illustration": "metadata"
}
---

## Cây đối tượng AutoCAD

AutoCAD ActiveX tổ chức đối tượng thành cây. `vlax-get-acad-object` lấy Application của phiên AutoCAD; `vla-get-ActiveDocument` lấy bản vẽ đang hoạt động. Documents là collection các bản vẽ mở. Lưu Document ở đầu lệnh giúp tránh đọc nhầm bản vẽ nếu công cụ mở hoặc chuyển document.

Từ Document, lấy ModelSpace, PaperSpace, Layers, Blocks và Layouts qua property tương ứng. Một object đại diện phần cụ thể của môi trường, có property để đọc trạng thái và method để thực hiện hành động. Không nhầm property trả object với chuỗi tên: `Layers` là collection, còn `Layer` trên một entity là tên layer.

## Collection không phải selection set

Collection có `Count`, `Item` và khả năng duyệt bằng `vlax-for`. ModelSpace gồm đối tượng thuộc không gian mô hình; nó không tự bao gồm entity nằm bên trong mọi block definition. Blocks chứa các định nghĩa block và các block không gian; một INSERT thuộc ModelSpace là block reference.

PaperSpace và Layouts cần được hiểu theo layout hiện hành. Khi xử lý mọi layout, duyệt Layouts rồi collection Block của từng layout để biết phạm vi. Không mặc định `vla-get-PaperSpace` nghĩa là tất cả tờ giấy. Selection set lại biểu diễn các main entity người dùng chọn hoặc được lọc bằng `ssget`; dùng nó khi quyền kiểm soát phạm vi thuộc người dùng.

## Property, method và chuyển đổi

Chuyển entity name từ `entsel` hoặc `ssname` sang VLA-object bằng `vlax-ename->vla-object`; chiều ngược lại dùng `vlax-vla-object->ename`. Cùng một entity có thể được đọc DXF và gọi ActiveX mà không tạo hai đối tượng bản vẽ.

`vlax-dump-object` hỗ trợ xem member khi tìm hiểu. Trước khi đọc property tùy loại, kiểm tra `vlax-property-available-p`; khi cần ghi, truyền đối số `T`. Trước khi gọi method, dùng `vlax-method-applicable-p`. Khả năng có member chưa chứng minh thao tác sẽ thành công: đối tượng vẫn có thể bị khóa, xóa hoặc ở trạng thái không cho phép ghi.

## Thực hành thống kê ModelSpace

Ví dụ PTA_MODELSPACE_STATS duyệt ModelSpace, đọc ObjectName rồi tăng bộ đếm theo loại. Nó chỉ đọc và không dùng `command`. Tạo hai LINE, một CIRCLE và một block reference chứa LINE, rồi đối chiếu số main object: LINE bên trong definition không được đếm như LINE trực tiếp của ModelSpace.

Chạy thêm khi đang xem layout giấy để xác nhận mẫu vẫn đọc ModelSpace đã chỉ định. Sau khi dùng, giải phóng tham chiếu VLA không còn cần; giải phóng tham chiếu không xóa entity. Nếu mở nhiều DWG, ghi tên Document cùng kết quả trước khi mở rộng tool sang xử lý hàng loạt.
