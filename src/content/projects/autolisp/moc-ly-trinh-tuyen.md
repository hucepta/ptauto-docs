---
{
  "id": "project.autolisp.moc-ly-trinh-tuyen",
  "slug": "moc-ly-trinh-tuyen",
  "title": "Đặt mốc lý trình dọc tim tuyến",
  "description": "Từ LWPOLYLINE và bước cọc, tạo marker POINT và bảng đối chiếu vị trí.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "expectedResult": "Từ LWPOLYLINE và bước cọc, tạo marker POINT và bảng đối chiếu vị trí.",
  "prerequisites": [
    "lesson.autolisp.co-kiem-tra-ly-trinh"
  ]
}
---

## Bài toán

Kỹ sư chọn một tim tuyến LWPOLYLINE, nhập bước 20 m và nhận các marker cọc từ 0 đến trước điểm cuối. Tập dữ liệu kiểm tra gồm tuyến thẳng 95 m, tuyến gấp khúc 95 m và tuyến 10 m. Ghi rõ quy tắc có thêm cọc cuối hay không.

## Thiết kế

Tách hàm kiểm tra đầu vào, hàm sinh dãy khoảng cách và hàm tạo marker. Mỗi marker giữ `station` và tọa độ đọc từ curve; trước khi ghi kiểm tra đơn vị DWG, layer đích và điểm trùng. Chạy trên bản sao DWG, gom thay đổi thành một lượt Undo có thể kiểm tra.

## Nghiệm thu

- Tuyến 95 m bước 20 m sinh đúng 5 mốc chính.
- Bước 0, lựa chọn rỗng và entity không phải curve được báo rõ, không sửa DWG.
- Bảng station–XY khớp điểm đo trên tuyến trong dung sai dự án.
- Chạy lại không tạo trùng khi chính sách project yêu cầu cập nhật marker cũ.
