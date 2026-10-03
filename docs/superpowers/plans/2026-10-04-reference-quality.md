# PTAuto Docs: chất lượng ví dụ tra cứu

Người dùng yêu cầu tiếp tục các việc còn lại sau bản 11. Đợt này tập trung khả năng thực hành ở 30 mục nền tảng của sáu nhóm, không thay kiến trúc hoặc bổ sung tính năng mới.

## Khảo sát

Kho có 488 mục không phải thuật ngữ. Đếm độ ngắn chỉ là tín hiệu để đọc lại, không phải tiêu chuẩn kết luận sai. 109 mục AutoLISP đang yêu cầu người đọc tự tạo dữ liệu nhưng chưa nói rõ cách làm. Nhiều đoạn C# dùng biến transaction/ObjectId mà chưa nêu bối cảnh; các node Dynamo cần hướng dẫn kết nối đầu vào, không được trình bày như hàm Python.

## Cách triển khai

1. Đọc nguồn chính thức và soạn lại năm mục cho mỗi nhóm: dữ liệu/bối cảnh, lời gọi, kết quả, kiểm tra lỗi. Giữ frontmatter, stable ID, các ví dụ đã liên kết và anchor placement.
2. Các nhiệm vụ nghiên cứu độc lập trả bản nháp; chủ Site đọc và tích hợp. Giữ source tài liệu theo phiên bản; không biến tài liệu một năm thành lời hứa tương thích nhiều năm.
3. Python thuần dùng dữ liệu tự tạo và chạy được độc lập. Node Dynamo ghi cổng nối và dữ liệu. GIS CLI dùng fixture nhỏ có tên file rõ, đầu ra riêng và cách kiểm tra. C# ghi rõ ngữ cảnh plugin, thư viện cùng phiên bản, transaction và quyền sở hữu object.
4. Đối chiếu bảng Autodesk .NET: AutoCAD 2025 qua Update 1.3 dùng .NET 8; Update 1.4 trở đi dùng .NET 10. Bổ sung lời giải thích ở trang chuẩn bị môi trường; không suy luận mọi bản Civil có cùng số update.
5. Kiểm tra các đoạn Python thuần bằng trình thông dịch hiện có. Kiểm tra build/schema/placement/anchor/search và browser suite; không gắn nhãn host-tested cho CAD/GIS/Dynamo chưa chạy.
6. Đẩy source, đóng gói và xuất bản lên cùng Site công khai. Báo đúng số mục đã cải thiện và phần kho chưa được rà soát chi tiết.

## Tiêu chí

- Không có biến đầu vào không được giới thiệu trong ví dụ thực hành.
- Hủy chọn/kiểu sai/miền không hợp lệ có hành vi rõ; không biến Cancel thành lỗi giả hoặc thành công giả.
- Mẫu chỉ đọc không sửa bản vẽ; lệnh ghi có giải thích đối tượng/kết quả.
- Mỗi kết quả mong đợi có dữ liệu để đối chiếu; số học minh họa không được coi là kết quả host thực tế.
- Các liên kết ví dụ và heading placement cũ tiếp tục hợp lệ.

## Kết quả đợt này

Đã viết lại 30 mục: 5 AutoLISP, 5 ActiveX, 5 AutoCAD .NET, 5 Civil 3D, 5 Dynamo/Python và 5 GIS. Trong đó có 28 mục tra cứu API/node và hai mục thuật ngữ CivilDocument/TinSurface; giữ các phần giải thích, liên kết ví dụ và vị trí chèn cũ của hai thuật ngữ. Bổ sung điều kiện runtime/mức update ở ba bài chuẩn bị C#/Civil.

Các sửa cụ thể: bỏ biến selection set chưa tạo; phân biệt Enter/nil với Esc; sửa cú pháp vlax-get-property; dùng ví dụ đọc dữ liệu thay cho Move tạo tác động lên bản vẽ; C# helper nhận typed input có bối cảnh caller/transaction; node Dynamo có nguồn/cổng/kết quả; GIS CLI tự tạo fixture với output riêng; GeoPandas phân biệt gán CRS và biến đổi tọa độ.

Kiểm chứng: Astro check không có lỗi/cảnh báo, lint đạt, 35 unit tests và 52 browser tests đạt; artifact 1.035 trang được xác minh liên kết/anchor và đồng bộ tìm kiếm. Mười khối LISP thực hành cân bằng ngoặc/chuỗi. Hai khối Python độc lập chạy khớp output đã công bố; ba khối PowerShell fixture qua kiểm tra cú pháp. Review độc lập không phát hiện lỗi quan trọng và chạy lại hai mẫu Python thành công.

Chưa thực thi ví dụ trong AutoCAD/Civil 3D/Dynamo; GeoPandas/GDAL không có trong môi trường kiểm tra. Kết quả mong đợi cho các môi trường này là mốc đối chiếu, không phải kết quả runtime đã xác nhận. Đợt này không chứng nhận chất lượng toàn bộ 488 mục; những mục ngoài danh sách ưu tiên vẫn cần rà soát riêng. Không thêm số mục chỉ để tăng tổng kho.
