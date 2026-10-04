# Rà soát và sửa PTAuto Docs — 04/10/2026

## Đánh giá

Vấn đề chính là phần chỉ dẫn còn bỏ qua thao tác đầu tiên, đề mục dài và thiếu tên nội dung, cùng các tương tác tải lại dữ liệu không cần thiết. Tăng ảnh và animation chỉ có ích khi chúng giải thích thao tác hoặc phản hồi ngay khi người học bấm. Không đặt ảnh trang trí dày đặc thay cho một bước còn thiếu; không buộc người học chờ hiệu ứng kết thúc mới chuyển trang.

Tám chú thích đã được xử lý: khoảng đoạn tác giả, Mục tiêu, Quan sát nơi làm việc, đường nối sơ đồ, mở VS Code trước Open Folder, Home/Bài sau, Nạp file và header điện thoại một hàng. Giữ bố cục các box cuối bài; Home ở hàng thao tác, Bài sau ở thẻ chuyển bài bên dưới.

## Nội dung và hình ảnh

Đối chiếu cấu trúc [Think Python 3](https://allendowney.github.io/ThinkPython/chap01.html), [Python Tutorial](https://docs.python.org/3/tutorial/), [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/csharp-write-first/) và [Dynamo Primer](https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-4_designing-with-lists/1-whats-a-list). Biên tập 193 mục bài học, 6 phần giới thiệu khóa học và 3 nhãn dùng chung. Giữ tên API, URL và ID nội dung; giữ anchor cũ qua alias, đổi mục lục và example placement sang anchor mới.

Thêm 6 bài chuẩn bị, 6 dự án, 6 thuật ngữ và 6 mục tra lỗi. Tổng 103 bài học, 25 dự án. Bài chuẩn bị dạy tải công cụ, mở từ Start, tìm menu/biểu tượng, lưu file và tự đối chiếu. Bài tiếp theo liên kết về bài chuẩn bị. Cấu hình .NET được giới hạn theo sản phẩm/update; build và chạy host được phân biệt.

Thêm 42 ảnh khác nhau từ nguồn Autodesk, Microsoft, QGIS và Dynamo: tổng 114 ảnh thật trong 64 bài. Ảnh có nguồn, kích thước cố định, lazy loading, chú thích thao tác và liên kết phóng to. Ảnh giao diện cũ hoặc của mẫu Visual Studio khác có nhãn phạm vi minh họa; không dùng chúng để hứa menu giống trên mọi phiên bản. Chưa phải mọi bài đều có ảnh thật; các sơ đồ SVG bổ sung giải thích cấu trúc và luồng.

Review độc lập đã sửa: biến AutoLISP riêng trong từng DWG, cần APPLOAD sau đóng/mở DWG, và thư mục tin cậy khi SECURELOAD=2. Giữ mức bảo mật, chỉ hướng dẫn thêm thư mục học do người học quản lý. Mã CAD/Civil/Dynamo/PyQGIS đã đối chiếu tài liệu; chưa được thực thi trong các host này tại lần sửa website.

## Tương tác và tốc độ

Native details dùng animation chiều cao 240ms khi mở lẫn đóng; có xử lý bấm liên tiếp, bấm liên kết TOC và đổi breakpoint giữa hiệu ứng. Reduced motion giữ thao tác và tắt hiệu ứng. Header kiểm tra tại 320, 390, 585px; logo và menu cùng hàng. Chuyển trang dùng native view transitions ngắn khi trình duyệt hỗ trợ; đường dẫn HTML vẫn chạy khi JS tắt.

Catalog khoảng 262KB được dùng lại qua sessionStorage, khóa theo build ID và fallback nếu cache/storage lỗi. Prefetch theo tương tác giảm chờ trang kế tiếp. Không chuyển sang router SPA để tránh làm hỏng trạng thái và event handler của các trang đọc.

Đo lab Chrome, viewport 390x844, cố ý thêm 400ms chờ catalog: lần đầu nút tiến độ sẵn sàng sau 440ms từ DOMContentLoaded, trang tiếp theo 35ms, tổng chỉ một request catalog. Đây là phép đo có kiểm soát về nút tiến độ, không chứng minh mọi chuyển trang trên Android/iOS nhanh gấp một tỷ lệ cố định. Dữ liệu: [navigation.json](navigation.json).

## Kiểm chứng

Astro check không lỗi/cảnh báo; lint và 35 unit tests đạt. Artifact kiểm tra schema, liên kết, anchor, checksum và tìm kiếm; 1059 trang HTML. Browser tests kiểm tra bố cục, truy cập bàn phím, không JS, base path, tìm kiếm, bookmark/progress, đóng mở hai chiều, bấm nhanh, giảm chuyển động và lộ trình bắt đầu bằng bài chuẩn bị.

Giới hạn: chưa thử trên thiết bị Android/iPhone thật. Native view transitions phụ thuộc khả năng trình duyệt; accordion dùng Web Animations API có fallback native. Tốc độ thực tế còn phụ thuộc mạng và thiết bị.

Kết quả cuối: 35/35 unit tests và 58/58 browser tests đạt; Astro check 0 lỗi, 0 cảnh báo; lint và kiểm tra toàn bộ artifact đạt.
