---
{
  "id": "lesson.visual-lisp-activex.batch-com-error-reactor",
  "slug": "batch-com-error-reactor",
  "title": "Xử lý hàng loạt",
  "description": "Lọc phạm vi, ghi kết quả từng đối tượng, gom Undo và kiểm soát vòng đời callback.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.tool-on-dinh",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.curve-parameter-distance"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.com-errors",
    "concept.visual-lisp-activex.reactor",
    "concept.visual-lisp-activex.object-model"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.chuyen-layer-hang-loat"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — vl-catch-all-apply",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E08CC2A6-787A-422F-8BD3-18812996794C.htm"
    },
    {
      "title": "Autodesk — vlax-property-available-p",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E8A5B009-46D6-4BA7-9655-88104F8BE792.htm"
    },
    {
      "title": "Autodesk — About Releasing Objects and Freeing Memory",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-LT-AutoLISP/files/GUID-4A2C849B-C0E0-4991-905D-A916B2CD3F25.htm"
    },
    {
      "title": "Autodesk — StartUndoMark Method",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-ActiveX-Reference/files/GUID-7C669949-1327-4CFD-96CF-CE65EC38DAA8.htm"
    },
    {
      "title": "Autodesk — About Reactor Guidelines",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-10123DBC-EA95-4300-A441-E028BB441477.htm"
    },
    {
      "title": "Autodesk — About Attaching Reactors to Drawings",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP/files/GUID-49DB4EF4-7386-42CC-9633-5ABCDFA9D5D9.htm"
    },
    {
      "title": "Autodesk — LAYER (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2018/ENU/AutoCAD-DXF/files/GUID-D94802B0-8BE8-4AC9-8054-17197688AFDB.htm"
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
      "heading": "undo-và-dọn-dẹp-tham-chiếu",
      "exampleIds": [
        "example.visual-lisp-activex.chuyen-layer-hang-loat"
      ]
    }
  ],
  "illustration": "graph"
}
---

## Xác định batch trước khi sửa

Batch là một lượt xử lý nhiều đối tượng theo cùng quy tắc. Bắt đầu bằng phạm vi rõ: selection set người dùng chọn, ModelSpace hay một layout. Kiểm tra layer đích và điều kiện ghi trước khi mở Undo. Với đổi layer, bỏ qua nguồn khóa và từ chối layer đích khóa hoặc phụ thuộc xref.

Ví dụ PTA_VLA_SET_LAYER nhận tên layer đã có rồi lựa chọn entity. Nó dùng DXF để kiểm tra layer nguồn, VLA-object để ghi property Layer và thống kê thành công, bỏ qua, thất bại. DXF phù hợp cho lọc dữ liệu nhanh; ActiveX phù hợp cho thao tác property. Không quét toàn bộ Blocks chỉ vì API có collection này.

## Bắt lỗi nhưng giữ bằng chứng

`vl-catch-all-apply` trả kết quả bình thường hoặc error object. Kiểm tra bằng `vl-catch-all-error-p`, đọc thông báo qua `vl-catch-all-error-message`; không xem mọi kết quả khác `nil` là thành công. Khi lỗi một entity, ghi Handle và lý do để người dùng đối chiếu.

Kiểm tra property có thể ghi bằng `vlax-property-available-p` với đối số `T` trước khi gọi setter. Điều kiện đó không thay thế việc bắt lỗi COM. Mỗi lời gọi qua COM có chi phí, nên lấy Document và collection một lần; không lặp lại `Regen` cho từng entity nếu một lần cuối đủ phục vụ hiển thị.

## Undo và dọn dẹp tham chiếu

`StartUndoMark` và `EndUndoMark` đánh dấu một nhóm thao tác trên Document. Mở nhóm sau khi dữ liệu nhập đã hợp lệ, đóng nhóm ở đường kết thúc lẫn lỗi. Việc đóng nhóm không tự rollback; báo cáo phải phản ánh các entity thực sự đã đổi và hướng dẫn người dùng Undo khi cần.

Giải phóng VLA-object khi không còn sử dụng, không giữ tham chiếu sang document đã đóng. `vlax-release-object` không xóa entity khỏi DWG. Tránh gọi `gc` mỗi vòng vì có thể làm chậm batch. Handler của lệnh phải dọn object đang xử lý và Document đã giữ.

## Reactor phải có vòng đời

Reactor liên kết sự kiện với callback. Dùng callback ngắn để ghi nhận trạng thái, rồi xử lý ở lệnh điều phối phù hợp. Autodesk khuyến cáo không gọi `getpoint`, `entsel`, `command` hoặc mở dialog tương tác trong callback; không sửa chính object vừa phát sự kiện và không gây lại cùng sự kiện.

Khi khởi tạo, kiểm tra reactor đã tồn tại để tránh đăng ký đôi; khi tắt module, tháo reactor đã tạo. Thực hành batch trên bản vẽ thử có layer khóa, lựa chọn rỗng và nhiều loại entity. Xác nhận số lượng, thông báo lỗi, một lần Undo và không còn handler/reactor thừa sau nạp lại tool.
