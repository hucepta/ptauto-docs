# Kế hoạch rà soát chương trình học

## Mục tiêu

Người mới mở một trong sáu chủ đề phải biết công nghệ giải quyết việc gì, cần phần mềm nào, làm bài đầu tiên ra sao và sau đó học theo thứ tự nào. Nội dung đi từ bài toán hạ tầng cụ thể đến dữ liệu, thao tác, kết quả, lỗi thường gặp và bài luyện. File khóa AutoLISP của người dùng là tham chiếu về cách giảng giải; khung sáu mảng trong brief và tài liệu kỹ thuật chính thức quyết định phạm vi toàn website.

## Phạm vi thực hiện

1. Sửa lỗi đọc: code dài tự xuống dòng và có đủ chiều rộng; chuyển lưu/hoàn thành về cuối bài; làm rõ phần môi trường và nguồn; chỉnh header, bỏ khối trang chủ lặp, bỏ dấu chấm cuối các đầu đề.
2. Viết phần nhập môn ở trang đầu của cả sáu khóa: khái niệm, tình huống dùng, môi trường làm việc, luồng dữ liệu và hướng bắt đầu. Tạo bài đầu tiên cho từng khóa để người đọc thực hành được ngay.
3. Rà soát từng mục trong brief, bổ sung bài nhỏ vào nhóm còn thiếu. Giữ ID và URL bài cũ, không biến các đề mục giấy thành số chương trên web. Mỗi bài mới có mục tiêu quan sát được, ví dụ hoặc thao tác, lỗi dễ nhầm, bài luyện và nguồn.
4. Mở rộng thuật ngữ từ tài liệu người dùng, khử trùng lặp với concept hiện có. Nguồn dữ liệu vẫn nằm trong `src/content` và được index từ content graph.
5. Bổ sung dự án gắn với cọc, tuyến, trắc dọc/trắc ngang, mạng ống, kiểm tra lớp đối tượng và trao đổi CAD–GIS. Dự án có dữ liệu đầu vào, kết quả, điều kiện lỗi và tiêu chí nghiệm thu.
6. Thay minh họa trang chủ bằng một AutoLISP đặt mốc theo khoảng cách dọc tuyến. Nâng demo lên trước kho tri thức; dùng các bước code thật tương ứng với các trạng thái hình học, hỗ trợ reduced motion.
7. Dùng navy/cyan và lưới bản vẽ của hero làm nền nhẹ xuyên suốt website, nhưng giữ mặt đọc sáng và tương phản cao.

## Kiểm chứng

- `astro check`, lint, build và kiểm tra content graph/link nội bộ.
- Kiểm tra desktop/mobile cho trang chủ, trang khóa, bài dài, code dài, glossary và dự án; kiểm tra bàn phím và reduced motion.
- Ví dụ Python chạy fixture khi không cần host. AutoLISP, ActiveX, AutoCAD/Civil .NET và Dynamo cần chạy lại trong đúng ứng dụng trước khi gắn nhãn đã kiểm chứng.
- Đối chiếu danh mục xuất bản với từng mục của brief; chỉ báo hoàn thành khi tất cả mục có bài hoặc dự án thật và route hoạt động.
