# PTAuto Docs: hướng dẫn buổi đầu và chuyển động

Triển khai tám chú thích, biên tập tên mục theo Think Python 3, Python Tutorial, Microsoft Learn và Dynamo Primer. Giữ URL/stable ID; cập nhật anchor và examplePlacement. Thêm sáu bài chuẩn bị, sáu thuật ngữ, sáu mục tra cứu và sáu dự án; các bài sau liên kết về chuẩn bị thay vì lặp tải/mở app.

Tăng ảnh thật theo bước, nguồn/phiên bản rõ, lazy loading và kích thước cố định. Header điện thoại một hàng, logo bên trái. Thu gọn khoảng đoạn tác giả. Home về hàng thao tác, Bài sau về pager dưới.

Accordion hiện chỉ fade lúc mở: dùng Web Animations API cho chiều cao thực cả hai chiều, bấm nhanh không kẹt, reduced motion và native details khi JS tắt. Sơ đồ hiện có hai đầu mũi tên liên tiếp dưới merge; sửa một đường liên tục, không kéo ngang đầu mũi tên SVG.

Catalog khoảng 262KB được fetch mỗi trang trước khi bật nút: session cache theo build ID, fallback khi storage lỗi; prefetch theo tương tác, không chặn click để chờ hiệu ứng. Giữ HTML tĩnh, Back/Forward và JS tắt.

Kiểm chứng header 320/390/585px, animation hai chiều/bấm nhanh/reduced motion, cache khi lần fetch sau bị chặn, schema/anchor/media và toàn bộ verify. Đo lab trên cùng điều kiện, không suy số localhost ra mọi mạng internet. Review độc lập rồi xuất bản cùng Site công khai.
