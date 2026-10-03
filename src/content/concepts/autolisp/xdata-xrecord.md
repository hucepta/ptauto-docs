---
{
  "id": "concept.autolisp.xdata-xrecord",
  "slug": "xdata-xrecord",
  "title": "XData, Dictionary và XRecord",
  "description": "Chọn dữ liệu gắn entity hoặc lưu theo khóa, bảo đảm owner và phiên bản cấu trúc.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "term",
  "aliases": [
    "dữ liệu ứng dụng",
    "regapp",
    "dictadd",
    "namedobjdict",
    "entmakex"
  ],
  "relatedConceptIds": [
    "concept.autolisp.entity-dxf",
    "concept.autolisp.error-undo"
  ],
  "exampleIds": [],
  "sources": [
    {
      "title": "Autodesk — About Extended Data - Xdata",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP/files/GUID-A94BC605-5517-437F-A6FE-D3EB8116A01A.htm"
    },
    {
      "title": "Autodesk — About Xrecord Objects",
      "url": "https://help.autodesk.com/cloudhelp/2024/PTB/AutoCAD-LT-AutoLISP/files/GUID-FA5F2E08-24F5-4947-A470-6CA84E404F2A.htm"
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

## Chọn nơi lưu

XData lưu thông tin nhỏ gắn với entity dưới tên ứng dụng đã đăng ký bằng `regapp`. Gọi `entget` kèm danh sách tên ứng dụng để lấy dữ liệu tương ứng; phần trả về được đánh dấu bởi group -3. XData có giới hạn 16 KB mỗi entity, nên không phù hợp cho báo cáo lớn.

Dictionary tổ chức mục theo khóa. XRecord lưu dữ liệu ứng dụng bằng group code thông thường và thích hợp hơn khi cần cấu trúc rộng. Named Object Dictionary là một điểm vào để tìm dictionary hoặc mục của ứng dụng.

## Owner quyết định vòng đời

`entmakex` có thể tạo XRecord chưa có owner. Thêm nó vào dictionary bằng `dictadd` để gắn vào cấu trúc bản vẽ. Kiểm tra khóa đã có trước khi thêm; định nghĩa cách cập nhật hoặc từ chối thay vì tạo dữ liệu lặp.

## Duy trì dữ liệu có nghĩa

Lưu mã phiên bản cấu trúc cùng record. Khi đọc, kiểm tra khóa, kiểu dữ liệu và giá trị bắt buộc. Mã cọc hoặc tuyến phải có quy tắc xử lý khi entity bị sao chép hoặc xóa. Kiểm tra dữ liệu sau save, close và reopen; đọc được ngay sau tạo chưa đủ chứng minh record sẽ tồn tại đúng trong DWG.
