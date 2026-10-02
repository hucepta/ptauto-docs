---
{
  "id": "project.autolisp.cad-utility",
  "slug": "cad-utility",
  "title": "CAD Utility: đếm LINE",
  "description": "Ghép kiến thức list, bộ lọc và lệnh tùy chỉnh thành một tiện ích kiểm tra bản vẽ.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "expectedResult": "PTA_COUNT_LINES đếm đúng LINE được chọn, xử lý lựa chọn rỗng và không thay đổi bản vẽ.",
  "prerequisites": [
    "lesson.autolisp.chon-doi-tuong-ssget"
  ],
  "conceptIds": [
    "concept.autolisp.ssget",
    "concept.autolisp.list"
  ],
  "exampleIds": [
    "example.autolisp.dem-line"
  ],
  "sources": [
    {
      "title": "Autodesk — ssget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0F37CC5E-1559-4011-B8CF-A3BA0973B2C3.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "examplePlacements": [
    {
      "heading": "phạm-vi-thực-hiện",
      "exampleIds": [
        "example.autolisp.dem-line"
      ]
    }
  ]
}
---

## Mục tiêu

Tạo một tiện ích nhỏ phục vụ kiểm tra bản vẽ: người dùng chọn một vùng và nhận số LINE trong vùng đó. Tiện ích chỉ đọc dữ liệu.

## Phạm vi thực hiện

Nạp file ví dụ bằng APPLOAD và gọi PTA_COUNT_LINES. Đọc từng bước trong hàm: khai báo biến cục bộ, lấy selection set có bộ lọc, kiểm tra nil, in kết quả và kết thúc gọn bằng princ.

Sau khi hiểu mẫu, tự thêm một thông báo mô tả thao tác trước khi chọn. Giữ nguyên yêu cầu không chỉnh sửa bản vẽ.

## Tiêu chí nghiệm thu

- Hai LINE và một CIRCLE được chọn: đếm 2.
- Chỉ chọn CIRCLE: thông báo không có LINE.
- Không có selection set: không gọi sslength với nil.
- Sau khi chạy: vị trí, layer và màu đối tượng giữ nguyên.
- Ghi phiên bản AutoCAD và hệ điều hành vào nhật ký thử.

## Hướng mở rộng

Khi tiện ích nhỏ đã được thử ổn định, có thể mở rộng sang báo cáo số lượng theo loại entity. Tách yêu cầu mới khỏi phần đếm LINE để dễ kiểm tra.

