---
{
  "id": "project.autolisp.cad-utility-bao-cao",
  "slug": "cad-utility-bao-cao",
  "title": "CAD Utility: báo cáo LINE và kiểm tra tọa độ",
  "description": "Tổ chức một tiện ích xuất dữ liệu WCS có hợp đồng CSV, xử lý hủy và ca nghiệm thu cụ thể.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "expectedResult": "PTA_EXPORT_LINES xuất đúng LINE được chọn, tọa độ WCS và chiều dài 3D, quote chuỗi đúng, đóng file và khôi phục DIMZIN ở mọi đường kết thúc.",
  "prerequisites": [
    "lesson.autolisp.quy-trinh-cad-utility"
  ],
  "conceptIds": [
    "concept.autolisp.ham-va-list",
    "concept.autolisp.entity-dxf",
    "concept.autolisp.trans",
    "concept.autolisp.error-undo",
    "concept.autolisp.xdata-xrecord"
  ],
  "exampleIds": [
    "example.autolisp.xuat-line-csv",
    "example.autolisp.bao-cao-toa-do"
  ],
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
      "title": "Autodesk — About Extended Data - Xdata",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP/files/GUID-A94BC605-5517-437F-A6FE-D3EB8116A01A.htm"
    },
    {
      "title": "Autodesk — About Xrecord Objects",
      "url": "https://help.autodesk.com/cloudhelp/2024/PTB/AutoCAD-LT-AutoLISP/files/GUID-FA5F2E08-24F5-4947-A470-6CA84E404F2A.htm"
    },
    {
      "title": "Autodesk — About Undoing Changes Made by a Routine",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP/files/GUID-4481039B-77DA-4500-AE8B-3D2AD6951115.htm"
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

## Hợp đồng của tiện ích

Xây tiện ích kiểm tra hình học của các LINE người dùng chọn. Mỗi record gồm Handle trong DWG gốc, tên layer, hai đầu WCS và chiều dài 3D. Báo cáo là CSV UTF-8 BOM, dấu phân cách dấu phẩy, cột số có sáu chữ số thập phân. Công cụ chỉ đọc bản vẽ; Undo không phục hồi file đã xuất.

Trước khi chạy, người dùng phải biết đơn vị bản vẽ của dự án. LINE có chênh Z được đo trong không gian; không gắn đơn vị mét hoặc gọi đó là chiều dài chiếu bằng nếu chưa chuyển đổi. Handle giúp đối chiếu đối tượng trong DWG gốc, không phải mã duy nhất cho mọi bản vẽ hoặc mã cọc nghiệp vụ.

## Chuẩn bị bản vẽ thử

Tạo LINE thứ nhất từ (0,0,0) tới (3,4,0), chiều dài 5. Tạo LINE thứ hai từ (0,0,0) tới (0,0,12), chiều dài 12. Thêm một CIRCLE làm đối tượng phải bị loại. Đặt một LINE trên layer có dấu phẩy trong tên, chẳng hạn KIEM,TRA, để kiểm tra quoting.

Dùng bản vẽ thử riêng. Kiểm tra engine Unicode và LISPSYS bằng 1 hoặc 2 trước khi dùng tham số encoding của `open`; nếu đổi LISPSYS, cần khởi động lại AutoCAD theo tài liệu. Nạp mã bằng APPLOAD và ghi tên host, phiên bản, hệ điều hành trong nhật ký thực hành.

## Lắp ghép các phần đã học

Đọc file PTA_EXPORT_LINES, xác định ba trách nhiệm: chọn và kiểm tra dữ liệu, chuyển một LINE thành dòng CSV, quản lý file/trạng thái môi trường. Hàm `pta:line-csv-row` nhận list DXF, không tự chọn entity. `pta:csv-quote` bao chuỗi bằng dấu nháy kép và nhân đôi dấu nháy có bên trong; nó có thể dùng lại khi xuất trường chuỗi khác.

Mã dùng group 10, 11 WCS của LINE và tính khoảng cách 3D. Nó không cần đổi từ UCS khi đọc hai đầu này. DIMZIN được lưu rồi đặt về 0 để giữ chữ số thập phân; giá trị cũ được khôi phục sau đóng file hoặc trong handler. Cần phân biệt định dạng hiển thị số với dữ liệu hình học thực.

Chạy lệnh, chọn cả hai LINE và CIRCLE, chọn tên file mới. Mở CSV bằng trình soạn thảo để kiểm tra trước khi nhập vào ứng dụng bảng tính. Chỉ một nguồn mã được dùng cho bài học và project; thay đổi hợp đồng CSV phải được thực hiện tại mã canonical tương ứng.

## Ca nghiệm thu cụ thể

Báo cáo phải có một dòng header và đúng hai dòng dữ liệu cho hai LINE. Hai chiều dài lần lượt là 5 và 12. Layer KIEM,TRA phải nằm trong một trường có quote, không tạo thêm cột. Các giá trị X, Y, Z phải đối chiếu được với hai đầu WCS.

Xoay UCS và xuất lại cùng đối tượng: dữ liệu WCS phải giữ nguyên. Thử chỉ chọn CIRCLE, hủy chọn đối tượng và hủy chọn file. Không được tạo file mới khi chưa chọn đường dẫn hợp lệ. Với thư mục không ghi được, thông báo phải cho biết xuất thất bại và DIMZIN phải giữ giá trị ban đầu.

Thử lỗi sau khi file mở trong bản mã thực hành để kiểm tra file được đóng. File lúc đó có thể chỉ được ghi một phần; công cụ phải nói rõ, không coi việc đóng file là chứng minh báo cáo hoàn chỉnh. Chọn file có sẵn sẽ ghi đè trong chế độ `w`, nên chọn tên báo cáo thử rõ ràng.

## Bàn giao và mở rộng có tiêu chí

Bàn giao file LSP, hợp đồng cột CSV, bộ DWG thử và nhật ký ca nghiệm thu. Chưa có bản ghi chạy host trong nội dung này; kết quả liệt kê là mục tiêu cần xác nhận.

Để dùng nền tảng này cho Stake Tool, thay record LINE bằng điểm WCS và mã cọc, thêm kiểm tra mã trùng. XData có thể giữ mã nhỏ trên entity; cấu hình dự án lớn hơn có thể nằm trong XRecord của dictionary với phiên bản cấu trúc. Kiểm tra dữ liệu sau save và reopen, xác định quy tắc copy/xóa trước khi đưa vào dùng.

Quản lý tuyến bằng polyline cần chiều tăng, mốc bắt đầu và cách xử lý đoạn cung. Đó là yêu cầu mới có tiêu chí riêng; phần báo cáo LINE hiện tại vẫn là mẫu nhỏ để đối chiếu tính đúng của hệ dữ liệu.
