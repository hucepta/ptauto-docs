# Nền thống nhất và minh họa học tập

PTAuto Docs phục vụ người mới học lẫn người đang tra API trong sáu mảng CAD–Civil–GIS. Bản cập nhật giữ dữ liệu canonical và URL hiện tại, nhưng làm rõ con đường **khái niệm → thao tác → kết quả** ở trang chủ, bài học và dự án.

## Giao diện

- Dùng duy nhất một nền động navy–cyan có ánh sáng ấm như hero. Xóa các đường lưới vuông cũ ở nền chung, intro khóa và minh họa. Nội dung dài vẫn nằm trên mặt đọc sáng, tương phản rõ; `prefers-reduced-motion` tắt chuyển động.
- Demo trang chủ lấy đúng quy trình `RC` trong `Road_Contours_Tool_VI.lsp`: chọn tim tuyến/điểm A–B, nhập cao độ và mặt cắt, suy ra các mức cao độ, vẽ polyline đường đồng mức và nhãn. Đây là SVG mô phỏng thuật toán, không phải bằng chứng chạy AutoCAD. Chỉ một đoạn code của bước được chọn xuất hiện; khung kết quả gọn, toolbar chỉ còn “Tim tuyến”.
- Kho tri thức chỉ hiện tên khóa và lời giải thích ngắn. Trang chủ thêm lối vào các dự án đại diện và mục đã lưu (dữ liệu thật từ bookmark trên máy). Phần tra cứu trên trang chủ gợi ý định nghĩa nhập môn; tra cứu API và từ điển được đặt tên/mô tả theo hai mục đích khác nhau, cùng dùng content graph.

## Học và thực hành

- Tổng quan khóa đặt tiến độ ngay dưới tên khóa, CTA “Bắt đầu học”, xóa khối “Kết quả đầu tiên”. Đoạn giải thích trong nội dung có thụt đầu dòng nhất quán; bảng có viền/cột rõ và cuộn trong màn hình hẹp.
- Bài học có sơ đồ từ các bước đã biên soạn hoặc đầu đề thực tế của bài; hình đầu ra mô phỏng theo sáu công nghệ, có chú thích. Dùng “Tổng quan”, “Vấn đề”, “Thực hành”, “Kiểm tra” cho các mục phù hợp; mô tả cụ thể vẫn là văn bản để không mất ngữ cảnh. Viết lại bài IDE và nhập môn Civil theo lối giải thích thuật ngữ trước, ví dụ sau.
- Nút lưu và hoàn thành ở cuối bài lớn, đều nhau; bài trước/bài sau dễ nhìn. Mục lục phải tô mục đang đọc khi cuộn và dùng được bằng bàn phím.
- Trang dự án chia rõ sáu nhóm. Mỗi dự án có đầu vào, hướng giải theo từng bước, tiêu chí nghiệm thu, sơ đồ luồng và SVG mô phỏng đầu ra đặc thù công nghệ. Các dự án hiện có được mở rộng từ nội dung gốc, không tạo kết quả chạy CAD giả.

## Giới hạn và kiểm chứng

Không thêm framework hoặc thư viện animation. SVG/CSS/TypeScript nhỏ là đủ. Mã `RC` chỉ được trích từ file người dùng; không sửa hoặc tuyên bố đã chạy file đó trong AutoCAD. Kiểm tra content graph, build, lint, unit/E2E, viewport desktop/mobile, reduced motion và các đường dẫn đã lưu. Xuất bản lên Site hiện có, giữ quyền truy cập hiện tại.
