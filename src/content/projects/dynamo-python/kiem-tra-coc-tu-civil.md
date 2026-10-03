---
{
  "id": "project.dynamo-python.kiem-tra-coc-tu-civil",
  "slug": "kiem-tra-coc-tu-civil",
  "title": "Graph kiểm tra cọc từ Alignment và Surface",
  "description": "Đọc station, cao độ và xuất hai bảng hợp lệ/lỗi.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "expectedResult": "Đọc station, cao độ và xuất hai bảng hợp lệ/lỗi.",
  "prerequisites": [
    "lesson.dynamo-python.alignment-surface-sampleline"
  ]
}
---

## Bài toán

Graph nhận Alignment, Surface và danh sách station từ CSV. Nó trả bảng cọc có XY/Z và bảng lỗi cho station ngoài miền hoặc không có cao độ.

## Thiết kế

Chia graph thành chọn nguồn, làm sạch CSV, kiểm tra station, đọc Civil và xuất. Watch số lượng hàng sau từng nhóm node. Python chỉ xử lý phần quy tắc dữ liệu mà node có sẵn không diễn đạt gọn; API host phải có ghi chú engine/version.

## Nghiệm thu

- 5 station gồm 3 hợp lệ, 2 lỗi: tổng hai bảng vẫn 5.
- Chạy lại không tạo trùng object Civil nếu graph có nhánh ghi.
- Report lỗi giữ số dòng và station gốc.
