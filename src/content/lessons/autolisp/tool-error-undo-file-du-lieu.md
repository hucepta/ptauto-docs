---
{
  "id": "lesson.autolisp.tool-error-undo-file-du-lieu",
  "slug": "tool-error-undo-file-du-lieu",
  "title": "Tổ chức tool, khôi phục trạng thái và lưu dữ liệu",
  "description": "Kết hợp error handling, Undo, CSV, XData, Dictionary/XRecord và DCL theo vòng đời công cụ.",
  "status": "published",
  "chapterId": "chapter.autolisp.xay-dung-tool",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.entity-dxf-layer-attribute"
  ],
  "conceptIds": [
    "concept.autolisp.error-undo",
    "concept.autolisp.xdata-xrecord"
  ],
  "exampleIds": [
    "example.autolisp.xuat-line-csv"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — command-s (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2024/CHS/AutoCAD-AutoLISP-Reference/files/GUID-5C9DC003-3DD2-4770-95E7-7E19A4EE19A1.htm"
    },
    {
      "title": "Autodesk — About Undoing Changes Made by a Routine",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP/files/GUID-4481039B-77DA-4500-AE8B-3D2AD6951115.htm"
    },
    {
      "title": "Autodesk — open (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-089A323F-21FF-4337-99A9-375758E23BA4.htm"
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
      "title": "Autodesk — new_dialog (AutoLISP/DCL)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C971FCB7-F552-455D-AC2B-4DCD8A0ADCC1.htm"
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
      "heading": "file-csv-và-cấu-hình",
      "exampleIds": [
        "example.autolisp.xuat-line-csv"
      ]
    }
  ],
  "illustration": "report"
}
---

## Chia module theo trách nhiệm

Một tool hoàn chỉnh gồm lệnh điều phối, hàm đọc bản vẽ, hàm tính toán và hàm xuất dữ liệu. Module tính toán nhận list chuẩn hóa, không tự gọi `ssget`. Module giao diện nhận lựa chọn, kiểm tra rồi gọi xử lý. Đặt tiền tố `pta:`, tên mô tả vai trò và một lệnh nạp rõ ràng; chỉ nạp file cấu hình từ đường dẫn được biết.

Để debug, in dữ liệu ở ranh giới giữa module, kiểm tra từng hàm bằng bộ dữ liệu nhỏ rồi bỏ thông báo tạm. Với nhiều entity, lọc trước và đọc `entget` một lần cho mỗi đối tượng. Không tối ưu bằng cách bỏ kiểm tra kiểu hoặc bỏ ghi nhận lỗi.

## Vòng đời lệnh và Undo

Lưu system variable trước khi đổi, chuẩn bị hàm dọn dẹp dùng được ở nhánh thành công và `*error*`. Dọn dẹp phải đóng file, khôi phục biến và kết thúc Undo đã mở. Khai báo `*error*` cục bộ giúp không để handler của tool tồn tại ngoài lệnh.

Undo Begin/End gom sửa đổi bản vẽ; nó không tự khôi phục file CSV đã ghi. Dùng `command-s` trong handler khi cần gửi chuỗi lệnh hoàn chỉnh, không tương tác. Với lệnh chỉ đọc và xuất báo cáo, tránh mở nhóm Undo không cần thiết. Nhấn Esc ở mỗi lời nhắc là một ca kiểm tra bắt buộc.

## File, CSV và cấu hình

`open` trả file descriptor hoặc `nil`; chế độ `w` ghi đè file có sẵn. Đóng bằng `close` cả khi lỗi để hoàn tất ghi. Mẫu PTA_EXPORT_LINES yêu cầu đường dẫn, xuất Handle, layer, hai đầu WCS và chiều dài 3D. Nó đặt số thập phân cố định và bao chuỗi bằng dấu nháy kép, nhân đôi dấu nháy bên trong.

CSV có dấu phân cách, quy tắc quoting và encoding riêng. Mẫu dùng UTF-8 BOM, cần engine Unicode và kiểm tra LISPSYS trước khi mở file. Không đọc cấu hình bằng cách thực thi tùy ý biểu thức trong file; kiểm tra khóa, kiểu và giá trị mặc định.

## Dữ liệu gắn bản vẽ và DCL

XData gắn dữ liệu nhỏ vào entity dưới tên ứng dụng đã `regapp`; `entget` cần danh sách ứng dụng để lấy phần đó. Nó có giới hạn 16 KB mỗi entity. Dictionary chứa mục theo khóa; XRecord lưu dữ liệu có cấu trúc rộng hơn. Khi tạo XRecord bằng `entmakex`, thêm vào dictionary bằng `dictadd` để có owner, rồi kiểm tra sau save và reopen.

DCL mô tả dialog/tile; luồng gồm `load_dialog`, `new_dialog`, gán `action_tile`, `start_dialog` và `unload_dialog`. Thu giá trị tile, đóng dialog rồi mới xử lý bản vẽ. Thực hành: xuất hai LINE, hủy ở bước chọn đường dẫn, thử thư mục không ghi được và xác nhận file được đóng, DIMZIN được khôi phục. Bài project đi kèm đưa các bước này vào tiêu chí nghiệm thu.
