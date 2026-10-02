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

Review độc lập trên toàn bộ commit nguồn đầu tiên phát hiện ba lỗi quan trọng. Từng lỗi đã có kiểm tra tái hiện thất bại trước khi sửa, rồi chạy lại toàn bộ pipeline: 34 unit tests, 29 browser tests, check/lint/build và artifact 28 trang đều đạt.

1. Loader mặc định của Astro dùng slug làm khóa nạp, có thể mất file trước khi graph kiểm tra. Loader nay dùng đường dẫn file; kiểm tra ingestion chạy loader Astro thật với file trên đĩa, bảo đảm graph phát hiện trùng ID/slug và chấp nhận slug giống nhau ở hai công nghệ.
2. Truy vấn không dấu `toa do` và `dong bang` không tìm thấy nội dung gốc trong corpus thật. Chỉ mục nay tự thêm dạng không dấu, giữ dữ liệu hiển thị và dấu câu API. Hai truy vấn production thất bại trước sửa, đạt sau sửa; fixture còn kiểm tra `Editor.GetSelection`, `C#`, `*error*`, dấu tiếng Việt và bộ lọc.
3. Khi localStorage đọc được dữ liệu cũ nhưng không ghi được, thay đổi tạm thời bị dữ liệu cũ che mất. Giá trị chưa lưu trong bộ nhớ nay được ưu tiên trên trang hiện tại; dữ liệu đã lưu vẫn nguyên vẹn. Kiểm tra quota và write denial bao phủ progress, bookmark và lần đọc cuối; reload vẫn phản ánh dữ liệu đã lưu thực tế.

Không có lỗi Critical trong review. Một mục Minor được hoãn: kết quả tìm theo mục Markdown hiện tới đầu bài; người đọc dùng TOC để tới mục. Example/Exercise vẫn có target anchor riêng. Việc sinh kết quả theo từng heading có thể làm ở lượt mở rộng search tiếp theo.

Các phạm vi reviewer không kết luận được đã được xử lý rõ:

- AutoCAD host: giữ nhãn chưa kiểm chứng và checklist chạy thật. Chi phí còn lại là kiểm tra sản phẩm/version cụ thể trước khi đổi nhãn.
- NVDA/VoiceOver: giữ kiểm tra axe/bàn phím/no-JS và ghi rõ chưa chạy screen reader thật. Các vấn đề thiết bị cụ thể có thể chưa được phát hiện.
- Sites HTTPS/access/cache/rollback: deployment status chỉ xác nhận nền tảng đã phát hành. Kiểm tra trực tiếp đã được ghi thành checklist; chưa coi cache hoặc rollback là đã thử thực tế ở bản đầu tiên.
- Đồng bộ nhiều thiết bị/offline: nằm ngoài phạm vi, progress/bookmark lưu trên trình duyệt hiện tại. Người dùng đổi thiết bị không có tiến độ tự đồng bộ.

Plugin Sites xuất hiện trở lại ở bước phát hành; workflow chính thức đã chuẩn bị nguồn nhưng bước package gọi Bash không có trên Windows hiện tại. Dùng helper Node/tar local để đóng gói và kiểm tra đúng nguồn đã commit, rồi connector lưu/deploy. Credential chỉ đi qua stdin/bộ nhớ; remote SHA được đối chiếu, quyền owner private được giữ. Branch `feat/ptauto-docs` được giữ, không có nhánh nền trước đó để merge và không tạo PR khi chưa được yêu cầu.

Không lấy kết quả build web làm bằng chứng kiểm chứng CAD.
