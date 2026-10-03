# Kho tri thức và phạm vi tiếp theo

Phạm vi giữ sáu công nghệ trong brief INPUT. Tên chương trong tài liệu dùng để xác định kiến thức; website dùng nhóm chủ đề, không đánh số Chương 1/2. Mỗi chủ đề hiện có bài published thật, định nghĩa, mã mẫu, bài tập và dự án. Không tạo route từ một đề cương trống.

| Chủ đề | Nhóm | Bài học | Tra cứu | Ví dụ | Bài tập | Dự án |
|---|---:|---:|---:|---:|---:|---:|
| AutoLISP | 5 | 10 | 13 | 9 | 3 | 2 |
| Visual LISP / ActiveX | 5 | 6 | 6 | 5 | 2 | 1 |
| AutoCAD .NET | 5 | 5 | 4 | 3 | 2 | 1 |
| Civil 3D .NET | 5 | 5 | 4 | 3 | 2 | 1 |
| Dynamo / Python | 4 | 5 | 4 | 3 | 2 | 1 |
| GIS / Data Automation | 4 | 5 | 6 | 3 | 2 | 1 |

Đây là nền tảng và quy trình thực hành của kho tri thức, chưa phải mọi tình huống chuyên sâu của từng SDK. DCL/reactor, Jig/Overrule, xử lý thiết kế Corridor/Pipe Network và pipeline spatial topology nâng cao còn cần ví dụ riêng cùng kiểm chứng trong môi trường đích.

## Nguyên tắc biên soạn

- Giữ stable ID, URL bài cũ và dữ liệu tiến độ.
- Bài học liên kết concept, example và bài tập theo content graph; mã canonical dùng lại ở trang học, tra cứu, dự án và demo trang chủ.
- Nguồn chính thức cùng phiên bản/nền tảng nằm trong metadata; không dùng build web làm bằng chứng đã chạy CAD.
- AutoCAD .NET và Civil 3D .NET dùng SDK và host đúng phiên bản. Object Enabler không thay thế runtime Civil 3D.
- Dynamo phân biệt engine Python, dữ liệu thuần và API host. GIS phân biệt gán CRS với reprojection; không gán một EPSG chung cho VN-2000.
- Chỉ thêm verifiedWith sau lần chạy có hồ sơ thật. Không đưa tài khoản, đồng bộ, chatbot hoặc môi trường CAD chạy trên web vào phạm vi.
