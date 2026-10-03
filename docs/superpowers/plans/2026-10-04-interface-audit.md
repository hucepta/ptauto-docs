# PTAuto Docs: rà soát và sửa giao diện

Người dùng yêu cầu đánh giá, phản biện, lập kế hoạch rồi tự triển khai; tiếp tục phát hành Site công khai hiện tại.

## Đánh giá và phản biện

- Nội dung có nền tảng sáu nhóm và các liên kết học/tra cứu/dự án. Số lượng chưa chứng minh độ dễ học: 30 ảnh hiện chỉ phủ 29/97 bài, ActiveX có một ảnh cho 16 bài.
- Lỗi thị giác đến từ hệ thống box không thống nhất: thẻ thuật ngữ vẫn giữ viền bảng khi bo góc; home project/saved và nhiều khung con chưa có radius; reader giữa bo nhưng hai cạnh vuông.
- Màn hình hẹp cần bố cục đọc riêng: hai sidebar làm hẹp nội dung ở tablet; TOC mở sticky chiếm nhiều chiều cao; header cuộn ngang che mục cuối.
- Không tăng ảnh chỉ vì số lượng. Mỗi ảnh phải gắn một thao tác, mô hình hoặc kết quả, có nguồn/phiên bản và phóng to. Không bo từng hàng của một bảng. Không ép chín khía cạnh thành chín đoạn nặng như nhau cho mọi dự án.
- 488 mục tra cứu có ích nhưng một số ví dụ cần tạo dữ liệu rõ hơn. Preview chọn theo alphabet làm người mới gặp API phụ trước; giữ alphabet trong từ điển, chọn preview theo nhu cầu thực hành.
- Animation nên biểu đạt trạng thái và thao tác, tránh nền chuyển động liên tục trong trang đọc. SVG sơ đồ cần đường nối thực; thêm mũi tên không đủ khi quyết định đặt sai bước.

## Kế hoạch

1. Kiểm tra kiểu box toàn web; thống nhất radius/padding/gap, chỉnh khung đọc và header/mobile. Files: styles, SiteLayout, navigation/toc.
2. Sửa nhãn/counter/footer tác giả (bỏ mục đích, Email, SĐT), cuối bài đổi vị trí Bài sau/Home và bỏ nền xanh. Bỏ danh sách bài lặp trên tổng quan; giữ dự án/học tiếp.
3. Rút gọn H2 thiếu trọng tâm, cập nhật heading placements khi đổi. Thay demo bước04; sơ đồ quyết định đúng thứ tự và đủ cạnh.
4. Bổ sung tài sản hình độc lập cho CAD và dữ liệu; chủ Site tích hợp manifest, kiểm file/lesson/source/size. Ưu tiên ActiveX và các bài cần hướng dẫn UI.
5. Chạy check/lint/unit/build/artifact và e2e toàn bộ; thêm kiểm tra box trên 320/390/768/845/1280px, TOC mở/đóng, nội dung dài, không tràn ngang, footer/thẻ nhất quán.
6. Đẩy source, đóng gói, lưu version, deploy public, xác nhận kết quả native. Không gắn nhãn host-tested cho ví dụ chưa chạy trong CAD/GIS.

## Tiêu chí nghiệm thu

- Các box độc lập bo góc; khối reader chỉ bo cạnh ngoài. Hàng danh sách/bảng giữ cấu trúc liền.
- Mục lục đóng mặc định trên màn hình hẹp, có highlight mục đang đọc; header không phải cuộn ngang để tìm menu.
- Caption dưới hình, đánh số, nguồn và ảnh tải được; không gán hình unrelated vào bài.
- Progress còn lại không có mẫu số; link tra cứu hiển thị số còn lại thật hoặc dùng nhãn không gây hiểu nhầm.
- 22 chú thích người dùng được đối chiếu, không chỉ đạt automated tests.

## Kết quả triển khai 04/10/2026

| Chú thích | Thay đổi |
| --- | --- |
| 1–3, 8, 13, 22 | Thẻ thuật ngữ có gutter và viền riêng; project/saved/khung con bo góc; bản đồ học gọn hơn; khoảng cách box và đoạn văn rõ hơn. |
| 4–6 | Bỏ đoạn mục đích; ghi Email: 0103466@st.huce.edu.vn và SĐT: 0973203858; giữ tên và học vấn đã cung cấp. |
| 7, 9, 21 | Số tra cứu còn lại trừ các mục preview; số bài còn lại bỏ mẫu số; bỏ câu lưu trên thiết bị. |
| 10–12 | Tiêu đề demo Sức mạnh tự động hóa; header rõ hơn; reader giữa thẳng, hai cạnh ngoài bo góc. |
| 14, 17 | Footer bài học căn giữa, Bài sau ở hàng thao tác, Home ở hàng dưới; bỏ nền xanh. |
| 15–16 | Thay H2 chung chung bằng tên thao tác/mô hình/công cụ; cập nhật anchor và vị trí ví dụ tương ứng. |
| 18–19 | Sơ đồ dùng đường nối SVG; kiểm tra nạp file sau bước Nạp; sửa nhánh gỡ lỗi; bước demo 04 Lên cao độ. |
| 20 | Tổng quan không lặp danh sách chương/bài phía dưới Bắt đầu học; giữ dự án mẫu theo nhóm. |

Ảnh tăng từ 30 lên 72 file duy nhất, phủ 53/97 bài, cả sáu nhóm. Kiểm file, kích thước, nguồn HTTPS, vị trí bài và SHA để tránh ảnh trùng. Caption ghi rõ ví dụ/phiên bản cũ khi khác môi trường học. Đây là ảnh tài liệu kỹ thuật và giao diện; không phải ảnh chứng minh các ví dụ đã chạy trong máy CAD của tác giả.

Review độc lập phát hiện thêm việc TOC sticky che tiêu đề sau khi chọn; đã sửa tự đóng TOC trên màn hình hẹp và tính khoảng cuộn theo chiều cao header/TOC. Kiểm tra giao diện thực tế bằng trình duyệt xác nhận tiêu đề hiện dưới thanh mục lục. Tràn ngang do tên API dài trong preview cũng đã sửa.

Kiểm chứng bản nguồn: Astro check 0 lỗi/cảnh báo; lint đạt; 35 unit tests và 52 browser tests đạt. Kiểm tra 11 dạng trang trên 320/390/768/845/1280px, không tràn ngang, điều hướng mục lục, khả năng đọc khi tắt JavaScript, reduced motion, liên kết, lưu bài và tìm kiếm. Kiểm tra responsive trong trình duyệt không thay cho thử trực tiếp trên mọi điện thoại.

## Giới hạn và ưu tiên tiếp theo

Web đã giảm các trở ngại đọc và điều hướng; chưa có bằng chứng về hiệu quả học từ người dùng thực tế. 44 bài chưa có ảnh riêng, nhưng không nên chèn ảnh chỉ để đạt tỷ lệ 100%. Ưu tiên các bài cần quan sát thao tác hoặc đối chiếu kết quả. Kho tra cứu còn cần nâng chất lượng từng ví dụ ngắn: dữ liệu đầu vào tự tạo được, kết quả mong đợi và trường hợp lỗi. Các ví dụ API chưa được coi là host-tested chỉ vì web build thành công. Mẫu CSS mới tập trung quy tắc dùng chung; các stylesheet lịch sử vẫn cần được gom lại ở một đợt riêng để giảm chồng selector.
