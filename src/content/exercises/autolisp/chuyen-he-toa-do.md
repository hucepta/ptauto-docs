---
{
  "id": "exercise.autolisp.chuyen-he-toa-do",
  "slug": "chuyen-he-toa-do",
  "title": "Kiểm tra chuyển UCS–WCS",
  "description": "Đối chiếu cùng một vị trí dưới UCS xoay và phân biệt điểm với vector.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "expectedResult": "Chuyển điểm UCS sang WCS rồi trở lại sai khác dưới 1e-8 đơn vị; chuyển vector không bị tịnh tiến khi gốc UCS đổi.",
  "conceptIds": [
    "concept.autolisp.trans"
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

## Chuẩn bị tình huống

Tạo một LINE dễ nhận biết trong bản vẽ thử. Chọn một đầu LINE bằng Object Snap, ghi điểm UCS và điểm WCS. Sau đó xoay UCS quanh Z và dời gốc UCS, vẫn chọn chính vị trí đó. Dùng mẫu PTA_COORD_REPORT để quan sát trước khi bổ sung phần kiểm tra.

## Phần phải viết

Chuyển điểm từ UCS sang WCS rồi ngược lại. Tính khoảng cách giữa điểm ban đầu và điểm khôi phục; dùng dung sai 1e-8 thay vì dấu bằng tuyệt đối. Tiếp theo chuyển vector `(1.0 0.0 0.0)` từ UCS sang WCS với đối số displacement bằng `T`.

In nhãn hệ tọa độ cùng mỗi kết quả để không nhầm điểm với hướng. Không thay hình học hoặc lưu các điểm UCS làm dữ liệu báo cáo lâu dài.

## Đối chiếu

WCS của cùng vị trí phải ổn định giữa các lượt, còn UCS có thể thay đổi. Vector trục X chỉ đổi hướng khi UCS xoay và không nhận phần dịch gốc. Chạy một lượt cố ý bỏ displacement để nhận biết kết quả sai rồi sửa lại. Ghi host, trạng thái UCS và các giá trị quan sát được; tiêu chí này chưa phải kết quả chạy đã được xác nhận.
