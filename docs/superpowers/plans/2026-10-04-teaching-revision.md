# PTAuto Docs — đợt chỉnh sửa đã được duyệt

**Goal:** Chuyển kho tri thức sang hướng dẫn tiếng Việt có thể tự thực hành, ảnh giao diện thật, tra cứu rộng và giao diện mềm, rõ ràng.

**Architecture:** Giữ Astro và content graph hiện có, ID/slug/state cũ. Bổ sung metadata bản đồ học trong Course; tài liệu và ảnh thuộc src/content/public. Tất cả danh sách nhóm, số bài, dự án và tra cứu sinh từ content graph.

**Authorization:** Người dùng đã duyệt tổng hợp trong hội thoại và ra lệnh triển khai toàn bộ, phát hành lên Site công khai hiện tại. Không tạo thêm quy trình duyệt thiết kế.

## Yêu cầu
- Trang chủ không đánh dấu Kho tri thức là trang hiện tại; slogan bao quát sáu nhóm; khôi phục LSP/VL/C#/C3D/PY/GIS; số bài còn lại cập nhật theo progress.
- Bo góc toàn web; xử lý tiêu đề/dấu tiếng Việt và demo bị cắt; khu thuật ngữ trang chủ đúng sáu ô.
- Tra cứu sáu nhóm có 5–7 mục xem trước, danh sách rộng theo API chính thức, trang chi tiết đủ cú pháp/tham số/kết quả/ví dụ/lỗi thường gặp/nguồn.
- Hình có chú thích dưới, căn giữa, đánh số trong từng trang; không tiêu đề dài hay mô phỏng ba hộp dùng lại. Có ảnh UI thật theo thao tác và nguồn/phiên bản. Rà soát mọi hình, nhãn tiếng Việt.
- Cuối bài gộp điều hướng và hành động; có Về trang chủ ở bài cuối; khung đọc tổng quan lấp đầy vùng trung tâm và giữ thanh bên phải.
- Sáu lộ trình theo tám lớp, có đầu vào/đầu ra và đường học tiếp; ba tầng công nghệ/kỹ năng/bài toán được nối bằng link. Hướng dẫn cụ thể nút/menu/thao tác/kết quả/lỗi/bài luyện.
- Mỗi nhóm liên kết dự án của chính nhóm; dự án giữ chín khía cạnh đã duyệt.
- Tác giả Phạm Tuấn Anh, sinh viên năm 8 Đại học Xây dựng Hà Nội, 0103466@st.huce.edu.vn. Câu đã duyệt: Tôi xây trang web này để biến kiến thức rời rạc về tự động hóa CAD, Civil 3D và GIS thành một lộ trình học rõ ràng cho người Việt.
- Cuối trang chủ có nguồn chính và “và một số nguồn khác”.

## Triển khai
- [x] Mở kho nguồn Site và giữ audience public.
- [x] Giao diện/route/progress/figure: SiteLayout, LearnLayout, trang chủ, lộ trình/bài/tra cứu, CSS, components.
- [x] Nội dung độc lập: AutoLISP/ActiveX, .NET/Civil, Dynamo/GIS; bổ sung bản đồ và bài môi trường, mở rộng tra cứu.
- [x] Ảnh giao diện nguồn chính thức: tải asset thích hợp, ghi xuất xứ và hướng dẫn vị trí bằng tiếng Việt; thay các hình mẫu trùng bằng minh họa riêng theo bài.
- [x] Kiểm tra schema, content graph, lint, build/search/artifact, e2e bàn phím/mobile/progress/navigation và hình.
- [ ] Đẩy commit, đóng gói, lưu version, deploy, xác nhận trạng thái thành công.

## Kiểm chứng
Không biến số lượng API thành tiêu chí duy nhất: mỗi mục phải có nguồn đúng và ví dụ phù hợp. Tên class/node/API giữ nguyên để tra cứu. Không gắn nhãn đã chạy trong CAD/Civil nếu chưa có bằng chứng; metadata kỹ thuật được giữ, câu trạng thái nội bộ bỏ khỏi mặt đọc.


Đợt này: 97 bài học, 488 mục tra cứu ngoài từ điển, 376 thuật ngữ, 30 ảnh UI nguồn chính thức. Rà soát độc lập sửa liên kết học tiếp và ảnh Dynamo sai chú thích. Astro check/lint đạt; 34 unit và 49 e2e Chrome đạt; artifact 1035 trang. Không thực thi mã trong các ứng dụng CAD/GIS.
