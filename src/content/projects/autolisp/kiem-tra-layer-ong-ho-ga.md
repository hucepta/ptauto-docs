---
{
  "id": "project.autolisp.kiem-tra-layer-ong-ho-ga",
  "slug": "kiem-tra-layer-ong-ho-ga",
  "title": "Kiểm tra layer ống và hố ga",
  "description": "Báo cáo LINE/LWPOLYLINE và INSERT nằm sai layer theo bảng quy tắc.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "expectedResult": "Báo cáo LINE/LWPOLYLINE và INSERT nằm sai layer theo bảng quy tắc.",
  "prerequisites": [
    "lesson.autolisp.entity-dxf-layer-attribute"
  ]
}
---

## Bài toán

Hồ sơ thoát nước có tim ống trên layer `TN-ONG` và block hố ga trên `TN-HOGA`. Tool chỉ đọc bản vẽ, báo các đối tượng sai layer cùng handle để người thiết kế tìm lại.

## Đầu vào và kết quả

Chọn phạm vi kiểm tra, đọc DXF mã 0/8 và attribute block khi cần. Xuất bảng: handle, loại, layer hiện tại, layer mong đợi, lý do. Không sửa layer tự động trong bản đầu.

## Nghiệm thu

- DWG mẫu 2 ống đúng, 1 ống sai, 1 hố ga sai tạo đúng hai lỗi.
- Đối tượng bị khóa hoặc không có attribute vẫn xuất được dòng thông báo thích hợp.
- Hủy lựa chọn không gây lỗi `sslength` trên nil.
- Bản vẽ không đổi sau khi tạo báo cáo.
