# Landing page CAD / AutoLISP

Homepage là lớp giới thiệu trước phần documentation. Các link học và dự án lấy từ content graph; Civil 3D và .NET hiển thị “Đang biên soạn” khi chưa có nội dung đã phát hành.

Chọn chủ đề học ngay tại `/#chu-de` trên homepage. Header không còn mục “Học”; nút “Bắt đầu học” dẫn tới khu vực này. Các course published được sinh thành link trực tiếp từ graph, gồm AutoLISP và Visual LISP / ActiveX hiện tại. Breadcrumb bài học/nhóm/course quay về “Trang chủ”. `/hoc/` cũ chuyển về `/#chu-de` bằng meta refresh tức thời, có link fallback và hoạt động khi tắt JavaScript; URL từng course/bài, ID và tiến độ được giữ.

## File và component

- `src/pages/index.astro`: bố cục, copy và link tới nội dung/search hiện có.
- `src/components/landing/ConstructionHero.astro`: hero độc lập với CSS/SVG, command search và nút tạm dừng chuyển động không cần JavaScript.
- `KnowledgeBridge.astro`: hình học tách thành các nhóm kiến thức khi vào viewport.
- `KnowledgeCard.astro`: mini-demo cho CAD, AutoLISP, Civil 3D và .NET; hover hoặc focus chạy hiệu ứng ngắn.
- `CodeGeometryDemo.astro`: bốn bước code/geometry, nút chọn bước và chạy lại.
- `LearningPath.astro`: bảy bước học, connector desktop/tablet/mobile.
- `src/client/landing.ts`: controller các phần bên dưới hero, IntersectionObserver và một vòng RAF hữu hạn cho demo.
- `src/styles/landing.css`: CSS/SVG animation và responsive của các phần bên dưới hero. CSS của hero nằm trong component riêng.
- `reading.css`: bỏ CSS homepage cũ đã không còn dùng; giữ style reader/catalog.
- `tests/e2e/landing.spec.ts`, `shell.spec.ts`: hành vi animation, demo, reduced motion, viewport và đọc không JavaScript.

## Motion

Hero lặp chu kỳ 16 giây: 0–5s vẽ wireframe ba khối nhà, sàn, cột và cần cẩu; 5–10s các khối mọc từ đáy theo stagger, cửa sổ sáng vàng và chân trời chuyển cam; 10–11,5s giữ công trình hoàn chỉnh, sau đó mờ về bản vẽ để lặp. Wireframe dùng `pathLength="1"` và stroke-dashoffset; khối, cửa sổ, lưới và chân trời chỉ chuyển động bằng transform/opacity. Không animation kích thước hay vị trí trong layout.

Chỉ dòng “đến thuật toán.” dùng gradient cyan → vàng → cam, background-position theo cùng chu kỳ. “Từ thao tác” màu trắng; lớp nền trên luôn tối. CTA duy nhất trong hero là “Bắt đầu học”, màu vàng phẳng, góc 3px. Ô `Command:` gửi truy vấn tới tìm kiếm hiện có; `/` vẫn focus ô nhập, Enter hoặc nút ↵ gửi truy vấn. Con trỏ nhấp nháy chỉ xuất hiện khi ô chưa có nội dung và chưa focus.

SVG ở nửa dưới với `preserveAspectRatio="xMidYMax slice"`; responsive giữ công trình ở đáy. Hero dùng font system-ui, safe-area inset và viewport-fit=cover. Checkbox “Tạm dừng chuyển động” dừng mọi animation của hero bằng CSS, kể cả khi không có JavaScript.

Scroll làm geometry tách thành bốn nhóm; connector lộ trình được vẽ dần. Mini-demo hover không lặp vô hạn. Demo code tự chạy một lượt khi vào viewport; chọn bước dừng autoplay, “Chạy lại” bắt đầu lượt mới. RAF dừng khi demo ngoài viewport hoặc tab bị ẩn; listener/observer được cleanup khi rời trang.

Code → geometry là mô phỏng trực quan, không thực thi AutoLISP trong trình duyệt. Bước `entmod` minh họa đổi LINE sang layer PTAuto đã tồn tại. Không dùng kết quả mô phỏng làm bằng chứng code đã chạy trong AutoCAD.

Reduced motion tắt toàn bộ animation của hero, hiện công trình hoàn chỉnh với cửa sổ sáng; demo bên dưới hiện bước cuối và vẫn chọn bước thủ công được. Không JavaScript vẫn đọc đủ nội dung/code và dùng được link/search. SVG trang trí được ẩn khỏi accessibility tree; nội dung chính là HTML. Landing JS/CSS chỉ nằm trên homepage.

Không thêm dependency. Dùng SVG, CSS, IntersectionObserver, requestAnimationFrame và matchMedia có sẵn trong trình duyệt; không video/canvas/WebGL.

## Kiểm tra và polish

Chạy `npm run verify` để kiểm tra type, lint, unit, production build, Pagefind, artifact và browser. E2E landing kiểm tra các mốc 1/10/14/17s, chu kỳ 16s vô hạn, kích thước hero ổn định, một CTA, command search, pause không JavaScript, reduced motion và demo đồng bộ với code. Kiểm tra không tràn/cắt tiêu đề ở 360/768/843/1440px. Axe và test search/docs hiện có vẫn nằm trong pipeline.

Lượt kiểm tra hero 2026-10-02: Astro check 0 lỗi/cảnh báo, lint đạt, 34 unit và 38 browser tests đạt, artifact 28 trang HTML và 17 search records. Đã xem ảnh các mốc 1/4,9/8/11/14/17s cùng bố cục desktop/tablet/mobile và reduced motion trên Chromium 153 ở localhost; không có page error. Đối chiếu DOM xác nhận bốn section bên dưới giữ nguyên cấu trúc và nội dung, ngoại trừ các nhãn số được yêu cầu bỏ. Content graph vẫn có build ID `a74f0cd495fd3b9c`.

Chưa kiểm tra thủ công bằng NVDA/VoiceOver; phép đo hiện tại là lab Chromium trên localhost.

Sau thay đổi điều hướng: check/lint/build, 34 unit và 36 browser tests đạt. Các test mới bao phủ đi từ homepage tới mọi course published, redirect không JavaScript và breadcrumb về homepage. `CourseList.astro` đã bỏ vì không còn catalog học riêng.
