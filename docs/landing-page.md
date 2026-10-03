# Trang chủ và kho tri thức

Trang chủ giới thiệu sáu chủ đề trong INPUT: AutoLISP, Visual LISP / ActiveX, AutoCAD .NET C#, Civil 3D .NET API, Dynamo / Python và GIS / Data Automation. Thẻ chủ đề, nhóm kiến thức, số bài và liên kết tra cứu lấy từ content graph. Không tạo một lộ trình nghề nghiệp thay thế phạm vi kỹ thuật này.

## Giao diện

Hero nằm trong khung cùng chiều rộng với nội dung, cao tối thiểu 440px trên desktop. Bố cục nhỏ hơn trên điện thoại giữ SVG ở đáy, dùng safe-area inset và system-ui. Tiêu đề có khoảng trống cho dấu tiếng Việt. Chỉ dòng “đến thuật toán.” có gradient; CTA “Bắt đầu học” màu vàng phẳng và dẫn tới `/#chu-de`.

Chu kỳ CSS/SVG 16 giây vẫn vẽ wireframe, mọc công trình, sáng cửa sổ rồi mờ về bản vẽ. Reduced motion tắt animation và hiện công trình hoàn chỉnh. Theo phản hồi mới, hero không có ô Command hoặc nút tạm dừng. KnowledgeBridge và thanh trạng thái/chạy lại dưới demo đã bỏ.

Header dùng logo đã được cung cấp, nền trắng và liên kết “Kho tri thức”. Điều hướng thu gọn trên tablet/mobile; Escape đóng menu. Tìm kiếm trên header vẫn hoạt động. Phím `/` focus ô tìm kiếm có sẵn hoặc chuyển tới trang tìm kiếm nếu trang hiện tại không có ô nhập.

Không còn mục “Học” hoặc catalog học riêng. `/hoc/` chuyển về `/#chu-de` với fallback không cần JavaScript; URL từng course/bài, ID và tiến độ giữ nguyên. Tiêu đề course hiển thị đúng tên công nghệ.

## Demo có nguồn dùng chung

`CodeGeometryDemo.astro` đọc `example.autolisp.demo-move` qua `readExampleCode`. File `demo-move.lsp` là nguồn dùng chung cho homepage, tra cứu MOVE và bài tương tác bản vẽ.

Bốn bước: tạo LINE dài 120, tạo CIRCLE bán kính 24, chọn đúng hai entity mới bằng ssadd, MOVE cả nhóm 30 đơn vị theo trục Y của UCS. Mô phỏng giả định UCS = World; hình vẽ dùng đúng tỉ lệ bán kính và chiều dài. Vị trí cũ nét đứt cùng vector ΔY làm rõ bước dịch chuyển.

Demo không thực thi AutoLISP trong trình duyệt. Autoplay chạy một lượt khi vào viewport; chọn bước dừng autoplay. RAF dừng khi ngoài viewport hoặc tab bị ẩn. Reduced motion vẫn cho chọn bước thủ công. Không JavaScript vẫn đọc được đầy đủ mã và dùng liên kết chủ đề.

## Kiểm chứng

`node scripts/verify.mjs` chạy type check, lint, unit, build, Pagefind, kiểm tra artifact và browser tests. Các test bao phủ phản hồi bị xóa, chu kỳ animation, kích thước ổn định, MOVE đồng bộ mã/hình, sáu chủ đề có bài thật, tìm kiếm từ header, redirect cũ và lưu tiến độ. Kiểm tra viewport 360/768/843/1440px và accessibility trong pipeline.

Ảnh QA và kết quả phát hành nằm trong OUTPUT/PTAUTO_DOCS_QA. Kiểm chứng web không chứng minh mã CAD đã chạy trong host; chỉ điền verifiedWith sau một lần chạy có bản ghi thật.
