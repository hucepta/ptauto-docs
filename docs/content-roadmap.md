# Kho tri thức sau rà soát chương trình

Phạm vi giữ sáu công nghệ trong brief INPUT. Tên chương trong tài liệu dùng để xác định kiến thức; website dùng nhóm chủ đề, không đánh số Chương 1/2. Mỗi chủ đề có phần nhập môn, bài published thật, định nghĩa, mã mẫu, bài tập và dự án. File DOCX AutoLISP của người dùng giúp kiểm tra cách dẫn dắt và bổ sung thuật ngữ; cấu trúc sáu nhóm vẫn bám brief và tài liệu chính thức.

| Chủ đề | Nhóm gồm nhập môn | Bài học | Tra cứu | Dự án |
|---|---:|---:|---:|---:|
| AutoLISP | 6 | 19 | 259 | 4 |
| Visual LISP / ActiveX | 6 | 12 | 9 | 3 |
| AutoCAD .NET | 6 | 12 | 10 | 3 |
| Civil 3D .NET | 6 | 12 | 11 | 3 |
| Dynamo / Python | 5 | 11 | 11 | 3 |
| GIS / Data Automation | 5 | 11 | 17 | 3 |

Các bài mới bao phủ khung cấp cao trong brief, gồm DCL, reactor, Jig/Overrule, mạng áp lực, Object Binding, GDAL/PostGIS và raster. Bài giới thiệu một API không thay cho tài liệu tham chiếu đầy đủ của SDK. Ví dụ cần chạy lại trong đúng bản AutoCAD, Civil 3D hoặc Dynamo trước khi gắn nhãn đã kiểm chứng. Bộ 259 mục AutoLISP gồm 246 thuật ngữ trích và biên tập từ DOCX; một số là từ vựng học thuật chung, nên bước biên tập tiếp theo là gom nghĩa và bổ sung liên kết ngữ cảnh thay vì chỉ tăng số mục.

## Nguyên tắc biên soạn

- Giữ stable ID, URL bài cũ và dữ liệu tiến độ.
- Bài học liên kết concept, example và bài tập theo content graph; mã canonical dùng lại ở trang học, tra cứu, dự án và demo trang chủ.
- Nguồn chính thức cùng phiên bản/nền tảng nằm trong metadata; không dùng build web làm bằng chứng đã chạy CAD.
- AutoCAD .NET và Civil 3D .NET dùng SDK và host đúng phiên bản. Object Enabler không thay thế runtime Civil 3D.
- Dynamo phân biệt engine Python, dữ liệu thuần và API host. GIS phân biệt gán CRS với reprojection; không gán một EPSG chung cho VN-2000.
- Chỉ thêm verifiedWith sau lần chạy có hồ sơ thật. Không đưa tài khoản, đồng bộ, chatbot hoặc môi trường CAD chạy trên web vào phạm vi.
