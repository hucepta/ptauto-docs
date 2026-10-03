---
{
  "id": "lesson.civil3d-dotnet.mang-ong-ap-luc-va-thoat-nuoc",
  "slug": "mang-ong-ap-luc-va-thoat-nuoc",
  "title": "Mạng ống tự chảy và mạng áp lực trong Civil 3D",
  "description": "Không gộp Pipe Network và Pressure Network thành một mô hình dữ liệu khi kiểm kê hạ tầng.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.corridor-va-ha-tang",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": ["lesson.civil3d-dotnet.pipe-network-va-corridor"],
  "flow": [
    {"label": "Nhận loại mạng", "detail": "Tự chảy hay áp lực, trong đúng bản vẽ"},
    {"label": "Duyệt thành phần", "detail": "Pipe/structure hoặc pressure pipe/fitting"},
    {"label": "Báo cáo", "detail": "ID, kích cỡ, chiều dài, trạng thái và lỗi"}
  ],
  "sources": [{"title": "Autodesk — PressurePipeNetwork API", "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/f44da82b-7680-f43a-130c-50276aeef60b.htm"}],
  "compatibility": [{"product": "Civil 3D .NET", "version": "Xác minh lại lớp/thành viên với SDK Civil 3D mục tiêu", "platform": "Windows"}]
}
---

## Vì sao phải tách hai mạng?

Một tuyến thoát nước tự chảy thường được quản lý như Pipe Network với pipe và structure. Tuyến cấp nước áp lực dùng mô hình Pressure Network, có pressure pipe, fitting và appurtenance. Hai mạng có cách tạo và duyệt thành phần khác nhau; ép chúng vào một vòng lặp API sẽ dễ bỏ sót phụ kiện hoặc đếm nhầm chiều dài.

## Một bảng kiểm kê tối thiểu

| Trường | Ý nghĩa | Nếu thiếu |
|---|---|---|
| `network_type` | Loại mô hình Civil | Báo không nhận diện, không đoán theo layer. |
| `network_id` | ID đối tượng nguồn | Giữ để truy ngược khi kiểm tra. |
| `part_id` | ID pipe/fitting/structure | Không xuất dòng “ẩn danh”. |
| `nominal_size` | Kích cỡ danh nghĩa | Ghi thiếu dữ liệu, không thay bằng đường kính hình học. |
| `length` | Chiều dài theo quy tắc dự án | Nêu rõ cách lấy và đơn vị. |

Trong lệnh .NET, đọc CivilDocument và các ObjectId trong Transaction; kiểm tra loại đối tượng trước khi ép kiểu. Thu thập kết quả trước, rồi xuất CSV có cột lỗi. Với Pressure Network, kiểm tra thành viên và tên API trên bộ SDK thật vì các phiên bản Civil có thể khác nhau.

## Bài luyện

Tạo hai mạng mẫu, mỗi loại ít nhất hai đoạn và một phụ kiện/công trình. Viết bảng kỳ vọng bằng tay, rồi thiết kế hàm xuất chung chỉ cho **schema báo cáo**, không giả định chung API đọc đối tượng. Kiểm tra mạng rỗng, part bị xóa và bản vẽ cần rebuild.
