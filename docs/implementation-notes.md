# Quyết định triển khai

Kế hoạch được duyệt bằng yêu cầu “Triển khai đi”. Các điều chỉnh trực tiếp sau đó của người dùng được ưu tiên: tổ chức theo chủ đề, một tiêu đề lớn, bỏ đoạn dẫn dưới tiêu đề lớn/chân trang, logo theo mẫu tài liệu CAD, bài học diễn giải cạnh code, giao diện lấy cảm hứng Next.js và gradient navy–teal.

## Các quyết định và tác động

1. App greenfield đặt trong `OUTPUT/ptauto-docs`, có repo và branch riêng. Không có repo trước đó để tạo worktree; INPUT và file ngoài app được giữ. Nếu cách cô lập này không phù hợp, có thể chuyển repo/app mà không đổi nội dung.
2. Dùng ledger/lệnh native Windows thay wrapper Bash của workflow, vì máy không có Bash/npm trên PATH. Rủi ro là khác cách chạy của skill; bằng chứng và review vẫn được lưu.
3. npm, cache và Chromium được bootstrap trong `OUTPUT/.tooling`. Package scripts vẫn là lệnh npm tiêu chuẩn; máy khác dùng npm có sẵn. Đổi runtime cần chạy lại pipeline.
4. Repository trạng thái nhận catalog ID published vì `StorageLike` không có API liệt kê key. Điều này tránh registry dùng chung bị ghi đè giữa tab; nếu catalog lỗi, reader vẫn hoạt động và UI báo không lưu được.
5. Code CAD có nhãn thực hành chưa kiểm chứng host. Nguồn Autodesk đã đối chiếu, nhưng không thay thế lần chạy thực tế. Chi phí còn lại là maintainer kiểm tra trong AutoCAD trước nhãn đã chạy.
6. Test sao chép so nguyên văn dữ liệu gửi vào Clipboard API; khi đọc clipboard Windows, chuẩn hóa CRLF/LF theo hệ điều hành. Nếu cần byte nguyên bản ngoài app boundary, phải dùng tải file thay clipboard text.
7. Shell sinh từ schema và nội dung thật được triển khai cùng nhau; Course published cần Lesson published. Commit tích hợp phản ánh trạng thái chạy được; không có commit course rỗng để phát hành.
8. Tắt Astro telemetry qua CLI wrapper vì telemetry attempted write ngoài workspace. Build không phụ thuộc quyền ghi telemetry; người duy trì có thể đổi chính sách riêng sau này.
9. Kiểm tra thêm nội dung bằng graph/manifest fixture và E2E route production, không sửa corpus thật trong test đang chạy. Rủi ro còn lại của một loại entity mới cần thêm kiểm tra generator tương ứng.
10. Dùng kiểm tra bàn phím, axe và accessibility tree ở môi trường này. NVDA/VoiceOver thật là bước cần thực hiện trên máy hỗ trợ; không tuyên bố đã thử screen reader.
11. Target Example ưu tiên Concept, rồi Lesson (kể cả lời giải Exercise), rồi Project. Điều này hỗ trợ ví dụ chỉ thuộc dự án/bài tập; thay ưu tiên sau này chỉ đổi target search, giữ anchor/ID.
12. Tách logic progress trình duyệt khỏi import graph/schema. Bundle chung đo được giảm từ 90,446 xuống 5,745 byte; adapters phải tiếp tục dùng chung logic đã kiểm tra.
13. Dùng gradient theo yêu cầu mới nhất dù INPUT từng tránh gradient trang trí. Đây là thay đổi CSS có thể đảo ngược; chữ và vùng đọc vẫn ưu tiên tương phản.
14. Thêm `examplePlacements` tùy chọn và parse5 chạy lúc build để ghép mục Markdown với code, giữ anchor và nội dung lồng. Tác động là khi đổi tên mục, người viết phải cập nhật anchor placement; URL và state ID không đổi.
15. Dùng connector Sites và helper source/package khi wrapper plugin không còn trên máy. Giữ đúng project đã đăng ký và quyền owner private; nếu push/packaging thất bại, thao tác phải dừng trước deployment thay vì đổi audience.
16. Git chạy dưới user thật cần tin cậy đúng repo do sandbox vừa tạo. Truyền `safe.directory` cho từng tiến trình của riêng workspace, không ghi exception global. Nếu repo chuyển vị trí, helper lấy lại đường dẫn từ chính script.
17. Repo chưa có danh tính Git của người dùng; commit tự động mang tên `Codex` và email `codex@local.invalid` ở riêng lệnh commit, không giả danh người dùng hoặc sửa cấu hình global. Người duy trì có thể chọn tác giả cho các commit sau.

## Nghiệm thu

Pipeline, fixture lỗi, các truy vấn kỹ thuật và ảnh responsive được ghi trong tài liệu release và bộ test. Các giới hạn thực tế: chưa chạy code trong AutoCAD, chưa điều khiển screen reader thật và phép đo hiệu năng là lab trên localhost.

Review cuối sẽ được ghi ở đây trước phát hành. Không lấy kết quả build web làm bằng chứng kiểm chứng CAD.
