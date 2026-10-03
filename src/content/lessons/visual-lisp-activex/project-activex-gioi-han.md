---
{
  "id": "lesson.visual-lisp-activex.project-activex-gioi-han",
  "slug": "project-activex-gioi-han",
  "title": "Ứng dụng ActiveX và tiêu chí chuyển sang .NET",
  "description": "Lắp ghép công cụ quản lý hình học tuyến, đánh giá phạm vi và giữ mô hình dữ liệu khi chuyển API.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.ung-dung",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.batch-com-error-reactor"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.object-model",
    "concept.visual-lisp-activex.curve-distance",
    "concept.visual-lisp-activex.variant-safearray",
    "concept.visual-lisp-activex.com-errors"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.chia-curve-theo-do-dai",
    "example.visual-lisp-activex.chuyen-layer-hang-loat"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — About Supported Programming Interfaces",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Customization/files/GUID-E6429154-36DF-4D84-8ABC-9FCA15B66158.htm"
    },
    {
      "title": "Autodesk — Curve Measurement Functions Reference",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4684C76F-02F7-4989-AA53-C886E528350A.htm"
    },
    {
      "title": "Autodesk — About the AutoCAD Object Model (ActiveX)",
      "url": "https://help.autodesk.com/cloudhelp/2024/CHS/AutoCAD-ActiveX/files/GUID-68D6EFA7-ED2D-482C-BBA6-EB22F2854348.htm"
    },
    {
      "title": "Autodesk — vl-catch-all-apply",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E08CC2A6-787A-422F-8BD3-18812996794C.htm"
    },
    {
      "title": "Autodesk — StartUndoMark Method",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-ActiveX-Reference/files/GUID-7C669949-1327-4CFD-96CF-CE65EC38DAA8.htm"
    },
    {
      "title": "Autodesk — About Reactor Guidelines",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-10123DBC-EA95-4300-A441-E028BB441477.htm"
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
      "heading": "ghép-các-module-đã-học",
      "exampleIds": [
        "example.visual-lisp-activex.chia-curve-theo-do-dai",
        "example.visual-lisp-activex.chuyen-layer-hang-loat"
      ]
    }
  ],
  "illustration": "graph"
}
---

## Chọn một công việc có đầu ra rõ

Bài này kết hợp báo cáo chia curve theo khoảng cách và quản lý layer của đối tượng đã chọn. Nó kết hợp AutoLISP để nhập, kiểm tra dữ liệu và ghi báo cáo với ActiveX để đọc hình học, duyệt object và thay property. Chỉ thay phần API cần dùng method mới.

Mô hình record nên gồm mã curve, Handle trong DWG gốc, khoảng cách từ đầu, điểm WCS và trạng thái xử lý. Đơn vị vẫn là đơn vị bản vẽ. Khi báo cáo được dùng cho quản lý tuyến, ghi hướng tuyến và mốc bắt đầu; người dùng đảo polyline thì thứ tự điểm thay đổi dù hình dạng không đổi.

## Ghép các module đã học

Lệnh điều phối nhận curve và số đoạn, gọi module Curve API để tạo list record, rồi đưa list cho module báo cáo. Tách module ghi file khỏi VLA-object để dễ thử với dữ liệu giả. Mẫu PTA_CURVE_DIVIDE_REPORT cung cấp phép đo lõi, còn PTA_VLA_SET_LAYER minh họa batch có nhóm Undo và báo cáo từng kết quả.

Để nâng cấp ROAD Manager mức AutoCAD, lưu mã tuyến nhỏ bằng dữ liệu ứng dụng thay vì tên layer duy nhất. Handle giúp đối chiếu trong bản gốc; sao chép giữa DWG cần quy tắc nhận dạng riêng. Reactor có thể báo dữ liệu cần cập nhật, nhưng thao tác cập nhật vẫn cần vòng đời rõ và bảo vệ khỏi lặp callback.

## Giới hạn cần đánh giá trước

ActiveX và các hàm `vlax-curve-*` trong lộ trình này dành cho Windows. Object Model chỉ cung cấp member được công bố; không suy ra một tính năng mới của AutoCAD cũng có property ActiveX tương ứng. AutoCAD LT có giới hạn khác, nên không áp nhãn hỗ trợ toàn bộ API từ việc một hàm chạy được.

Batch lớn tạo nhiều lượt gọi COM; đo thời gian với bản vẽ đại diện trước khi tối ưu. Undo mark là nhóm thao tác, không phải cơ chế Transaction tự phục hồi mọi tài nguyên. File ngoài DWG, cấu hình và tham chiếu object cần được xử lý riêng.

## Khi chuyển sang AutoCAD .NET

Cân nhắc .NET khi cần mô hình kiểu dữ liệu mạnh, truy cập database sâu hơn, giao diện hoặc quy trình plugin lớn. Việc chuyển API đòi SDK/reference phù hợp và kiểm thử trong host tương ứng; không coi build DLL là chứng minh chạy đúng. Giữ hợp đồng record, thuật toán thuần và bộ ca nghiệm thu để đối chiếu hai phiên bản công cụ.

Thực hành viết bảng so sánh đầu vào, đầu ra, xử lý hủy và Undo cho hai mẫu. Project trong mục dự án yêu cầu kiểm tra đường có cung, UCS xoay và layer khóa. Chỉ công bố hỗ trợ khi đã có nhật ký chạy thực tế; nội dung hiện cung cấp mã và hướng dẫn dựa trên tài liệu.
