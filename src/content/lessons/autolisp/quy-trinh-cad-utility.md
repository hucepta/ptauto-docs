---
{
  "id": "lesson.autolisp.quy-trinh-cad-utility",
  "slug": "quy-trinh-cad-utility",
  "title": "Quy trình CAD Utility từ yêu cầu tới bàn giao",
  "description": "Xây báo cáo hình học nhỏ, kiểm tra dữ liệu và dùng chung nền tảng cho quản lý cọc, tuyến.",
  "status": "published",
  "chapterId": "chapter.autolisp.thuc-hanh-cad",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.tool-error-undo-file-du-lieu"
  ],
  "conceptIds": [
    "concept.autolisp.ham-va-list",
    "concept.autolisp.trans",
    "concept.autolisp.entity-dxf",
    "concept.autolisp.error-undo"
  ],
  "exampleIds": [
    "example.autolisp.xuat-line-csv",
    "example.autolisp.bao-cao-toa-do"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — entget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-12540DAE-C84B-4BDB-AEEC-DDFE5BE3C42A.htm"
    },
    {
      "title": "Autodesk — LINE (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-DXF/files/GUID-FCEF5726-53AE-4C43-B4EA-C84EB8686A66.htm"
    },
    {
      "title": "Autodesk — open (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-089A323F-21FF-4337-99A9-375758E23BA4.htm"
    },
    {
      "title": "Autodesk — trans (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1A316343-0B68-4DBE-8F49-B4D601CB8FCC.htm"
    },
    {
      "title": "Autodesk — About Undoing Changes Made by a Routine",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP/files/GUID-4481039B-77DA-4500-AE8B-3D2AD6951115.htm"
    },
    {
      "title": "Autodesk — About Supported Programming Interfaces",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Customization/files/GUID-E6429154-36DF-4D84-8ABC-9FCA15B66158.htm"
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
      "heading": "thực-hiện-theo-từng-bước-có-thể-kiểm-tra",
      "exampleIds": [
        "example.autolisp.xuat-line-csv",
        "example.autolisp.bao-cao-toa-do"
      ]
    }
  ]
}
---

## Biến yêu cầu thành hợp đồng dữ liệu

CAD Utility hữu ích bắt đầu từ một công việc cụ thể: xuất danh sách LINE người dùng chọn để kiểm tra chiều dài. Xác định đầu vào là selection set LINE, đầu ra là CSV gồm Handle, layer, WCS hai đầu và chiều dài 3D. Hủy lựa chọn phải kết thúc; thiếu quyền ghi phải báo lỗi; bản vẽ không bị sửa.

Đơn vị bản vẽ không tự biến thành mét. Ghi đơn vị quy ước của dự án trong tài liệu bàn giao và phân biệt chiều dài 3D với chiều dài chiếu phẳng. Với LINE có Z khác nhau, hai kết quả này khác nhau. Đừng dùng báo cáo để suy luận dữ liệu tuyến hoặc cọc chưa được khai báo.

## Thực hiện theo từng bước có thể kiểm tra

Thử hàm tính chiều dài với chênh lệch tọa độ 3, 4, 0 cho kết quả 5. Tiếp theo đọc một LINE bằng `entget`, lấy group 10, 11 rồi tạo một record. Sau đó duyệt selection set và cuối cùng mới thêm bước chọn file.

Ví dụ PTA_EXPORT_LINES là phần lõi có thể nạp bằng APPLOAD. Mỗi entity tạo một dòng dữ liệu. Handle phục vụ đối chiếu lại trong DWG gốc; layer mô tả tổ chức bản vẽ. Với Geometry Utility khác, dùng cùng record nhưng bổ sung phép tính giao điểm hoặc hướng đã được định nghĩa rõ.

## Áp dụng cho cọc và tuyến có giới hạn

Stake Tool có thể nhận các điểm đã được chuyển về WCS, sinh mã cọc theo quy tắc và xuất tọa độ. Quản lý cọc cần phát hiện mã trùng, lưu liên kết bằng dữ liệu ứng dụng và quy định điều gì xảy ra khi người dùng xóa hoặc sao chép entity.

Một ROAD Manager ở mức AutoCAD có thể quản lý polyline, layer và mã tuyến do ứng dụng đặt. Nó không tạo đối tượng Alignment hay suy ra lý trình của phần mềm chuyên ngành. Trước khi mở rộng, xác định hướng tuyến, mốc bắt đầu, quy tắc cập nhật và dữ liệu còn hợp lệ sau Undo. Project báo cáo trong khóa này giữ phạm vi LINE để có kết quả đối chiếu cụ thể.

## Nghiệm thu và chuyển tiếp

Bản vẽ thử gồm hai LINE, một CIRCLE, một LINE 3D và layer có dấu phẩy trong tên. Kiểm tra số dòng, quoting CSV, tọa độ và trường hợp hủy. Xoay UCS rồi xuất lại cùng LINE: cột WCS phải giữ nguyên. Ghi host, phiên bản, hệ điều hành và kết quả từng ca trong nhật ký.

Khi cần collection, property hoặc đo khoảng cách dọc polyline có cung, chuyển sang Visual LISP / ActiveX trên Windows. Giữ hàm tính toán và record dữ liệu đã chuẩn hóa; chỉ thay lớp đọc API. Nội dung này cung cấp hướng dẫn và mã mẫu, chưa có lần chạy AutoCAD được ghi nhận.
