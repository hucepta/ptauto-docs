# Landing page CAD / AutoLISP

Homepage là lớp giới thiệu trước phần documentation. Các link học và dự án lấy từ content graph; Civil 3D và .NET hiển thị “Đang biên soạn” khi chưa có nội dung đã phát hành.

Chọn chủ đề học ngay tại `/#chu-de` trên homepage. Header không còn mục “Học”; nút “Bắt đầu học” dẫn tới khu vực này. Các course published được sinh thành link trực tiếp từ graph, gồm AutoLISP và Visual LISP / ActiveX hiện tại. Breadcrumb bài học/nhóm/course quay về “Trang chủ”. `/hoc/` cũ chuyển về `/#chu-de` bằng meta refresh tức thời, có link fallback và hoạt động khi tắt JavaScript; URL từng course/bài, ID và tiến độ được giữ.

## File và component

- `src/pages/index.astro`: bố cục, copy và link tới nội dung/search hiện có.
- `src/components/landing/HeroCadAnimation.astro`: SVG CAD và command line.
- `KnowledgeBridge.astro`: hình học tách thành các nhóm kiến thức khi vào viewport.
- `KnowledgeCard.astro`: mini-demo cho CAD, AutoLISP, Civil 3D và .NET; hover hoặc focus chạy hiệu ứng ngắn.
- `CodeGeometryDemo.astro`: bốn bước code/geometry, nút chọn bước và chạy lại.
- `LearningPath.astro`: bảy bước học, connector desktop/tablet/mobile.
- `src/client/landing.ts`: controller riêng homepage, IntersectionObserver và một vòng RAF hữu hạn.
- `src/styles/landing.css`: CSS/SVG animation và responsive riêng landing.
- `SearchForm.astro`: thêm placeholder tùy chọn; các trang khác giữ giá trị mặc định.
- `reading.css`: bỏ CSS homepage cũ đã không còn dùng; giữ style reader/catalog.
- `tests/e2e/landing.spec.ts`, `shell.spec.ts`: hành vi animation, demo, reduced motion, viewport và đọc không JavaScript.

## Motion

Hero chạy một lần trong 5,6 giây: grid/crosshair → nhập `PT` → dựng nét → selection, đổi layer, sinh dimension/text/block → zoom nhẹ → chữ ổn định. Text HTML, CTA và search dùng được ngay, không phải chờ animation.

Scroll làm geometry tách thành bốn nhóm; connector lộ trình được vẽ dần. Mini-demo hover không lặp vô hạn. Demo code tự chạy một lượt khi vào viewport; chọn bước dừng autoplay, “Chạy lại” bắt đầu lượt mới. RAF dừng khi demo ngoài viewport hoặc tab bị ẩn; listener/observer được cleanup khi rời trang.

Code → geometry là mô phỏng trực quan, không thực thi AutoLISP trong trình duyệt. Bước `entmod` minh họa đổi LINE sang layer PTAuto đã tồn tại. Không dùng kết quả mô phỏng làm bằng chứng code đã chạy trong AutoCAD.

Reduced motion bỏ intro/autoplay và hiện trạng thái cuối; vẫn chọn bước thủ công được. Không JavaScript vẫn đọc đủ nội dung/code và dùng được link/search. SVG trang trí được ẩn khỏi accessibility tree; nội dung chính là HTML. Landing JS/CSS chỉ nằm trên homepage.

Không thêm dependency. Dùng SVG, CSS, IntersectionObserver, requestAnimationFrame và matchMedia có sẵn trong trình duyệt; không video/canvas/WebGL.

## Kiểm tra và polish

Chạy `npm run verify` để kiểm tra type, lint, unit, production build, Pagefind, artifact và browser. E2E landing kiểm tra tất cả nét intro tồn tại ở trạng thái cuối, demo đồng bộ với code, reduced motion, không tràn/cắt tiêu đề ở 360/768/843/1440px. Axe và test search/docs hiện có vẫn nằm trong pipeline.

Lượt kiểm tra 2026-10-02: Astro check 0 lỗi/cảnh báo, lint đạt, 34 unit và 33 browser tests đạt, artifact 28 trang HTML và 17 search records. Đã xem ảnh các giai đoạn intro cùng bố cục desktop/tablet/mobile; console không có lỗi trong lượt đo Chromium 153 trên localhost.

Có thể polish thêm nhịp animation sau phản hồi từ người xem trên thiết bị thật, hoặc thay minh họa Civil 3D/.NET bằng ví dụ từ nội dung đã phát hành. Chưa kiểm tra thủ công bằng NVDA/VoiceOver; phép đo hiện tại là lab Chromium trên localhost.

Sau thay đổi điều hướng: check/lint/build, 34 unit và 36 browser tests đạt. Các test mới bao phủ đi từ homepage tới mọi course published, redirect không JavaScript và breadcrumb về homepage. `CourseList.astro` đã bỏ vì không còn catalog học riêng.
