---
{
  "id": "lesson.dynamo-python.chuan-bi-cong-cu",
  "slug": "chuan-bi-cong-cu",
  "title": "Mở Dynamo trong Civil 3D",
  "description": "Khởi động đúng Civil 3D, mở Dynamo từ Manage, nhận diện node/cổng và lưu graph có kết quả kiểm tra.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — tải Civil 3D và điều kiện dùng thử",
      "url": "https://www.autodesk.com/products/civil-3d/free-trial"
    },
    {
      "title": "Dynamo Primer — Getting Started with Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d/getting-started"
    },
    {
      "title": "Autodesk — mở Dynamo từ Civil 3D",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-Dynamo/files/Civil3D_Dynamo_To_Open_Dynamo_for_Autodesk_Civil_3D_html.html"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Bản đi kèm Civil 3D đang cài; đối chiếu giao diện theo phiên bản",
      "platform": "Windows"
    }
  ],
  "chapterId": "chapter.dynamo-python.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.dynamo-python.term-host-graph",
    "concept.dynamo-python.loi-khoi-dong-dynamo"
  ],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "illustration": "graph",
  "flow": [
    {
      "label": "Chuẩn bị",
      "detail": "Chọn đúng ứng dụng, phiên bản và thư mục học."
    },
    {
      "label": "Mở và lưu",
      "detail": "Nhận diện cửa sổ, tạo đầu vào thử và lưu file."
    },
    {
      "label": "Kiểm tra",
      "detail": "Chạy thao tác nhỏ rồi đối chiếu kết quả quan sát được."
    }
  ]
}
---
## Mục tiêu

Trong buổi đầu, bạn nối một giá trị số tới Watch và quan sát kết quả. Graph chưa tạo đối tượng trong DWG. Cách bắt đầu này giúp tách ba câu hỏi: Dynamo đã mở đúng host chưa, dữ liệu đã đi qua dây nối chưa và file graph đã được lưu chưa. Khi ba việc này rõ, phần Python và tự động hóa Civil mới có đầu vào đáng tin cậy.

## Cài công cụ

Từ Windows Start, mở trình duyệt, vào [trang Civil 3D](https://www.autodesk.com/products/civil-3d/free-trial) hoặc Autodesk Account. Đọc điều kiện giấy phép và System requirements theo năm trước khi cài. Dùng thuê bao, trial hoặc quyền Education hợp lệ. **Dynamo for Civil 3D** đi cùng môi trường Civil 3D; việc có Dynamo trong Revit hoặc Dynamo Sandbox không cung cấp cùng các node Civil và ngữ cảnh DWG.

Kiểm tra phần cài Dynamo trong installer của bản Civil 3D đang dùng; cách đóng gói tùy năm. Bạn chưa cần cài package cộng đồng hay Python riêng để thực hiện graph số dưới đây. Nếu đã có Civil 3D, không cài lại ngay: trước hết mở đúng ứng dụng và kiểm tra nút Dynamo. Đọc [chuẩn bị Civil 3D](/hoc/civil3d-dotnet/chuan-bi-cong-cu/) để biết cách tạo DWG và nhận diện host; phần Visual Studio không bắt buộc cho graph này.

## Mở Civil 3D, rồi mở Dynamo

1. Nhấn Windows, gõ **Civil 3D**, chọn biểu tượng có đúng năm. Sau Start, bấm **New**, chọn template thử của bản cài và Ctrl+S lưu **dynamo-dau-tien.dwg** trong Documents/PTAutoHoc.
2. Trong Ribbon Civil 3D, chọn tab **Manage**, tìm panel **Visual Programming**, bấm nút **Dynamo**. Mong đợi một cửa sổ Dynamo riêng xuất hiện trong khi Civil 3D vẫn mở. Không tìm nút này trong VS Code.
3. Ở trang đầu Dynamo, bấm **New** để tạo workspace graph. Trước khi thêm node, đổi chế độ chạy ở đáy cửa sổ thành **Manual** nếu đang Automatic. Nút **Run** sẽ là điểm bạn chủ động bắt đầu tính toán; đó là thói quen cần thiết trước các graph có khả năng thay đổi DWG.

## Nhận diện các vùng làm việc

Trong Dynamo, **Library/Search** thường ở trái để tìm node; **canvas** ở giữa là vùng đặt graph; menu và thanh công cụ ở trên có mở/lưu; vùng đáy thể hiện chế độ chạy. Node có cổng input nhận dữ liệu và output đưa dữ liệu đi. Dây nối mang giá trị giữa cổng, không phải đường vẽ trong DWG. View/preview 3D khác canvas graph; số đơn lẻ không nhất thiết tạo hình xem trước.

Khi nhìn giao diện, tìm nhãn và tooltip của nút thay vì chỉ dựa vào màu biểu tượng: theme và phiên bản có thể khác. Nhấp canvas để đưa focus về graph trước khi dùng phím tắt. Nếu không thấy node vừa đặt, dùng thao tác zoom/pan hoặc Fit graph của giao diện, chưa cần xóa workspace.

## Tạo đầu vào và xem kết quả

Nhấp đúp vùng trống của canvas để tạo **Code Block**. Gõ dòng dưới; dấu chấm phẩy kết thúc biểu thức DesignScript. Đây chưa phải Python, nên không thêm print hoặc thay cú pháp theo Python.

~~~text
7;
~~~

Tìm **Watch** trong Search/Library, chọn node Watch và đặt cạnh Code Block. Nhấp cổng output bên phải Code Block, kéo dây tới input bên trái Watch. Kiểm tra dây thật sự kết thúc ở cổng, không chỉ nằm gần node. Ở đáy cửa sổ, bấm **Run**. Mong đợi Watch hiển thị **7**. Sửa Code Block thành **9;**, bấm Run lần nữa; Watch cần đổi thành 9. Bằng phép thay đổi nhỏ này, bạn kiểm tra graph đang tính lại.

## Lưu graph và DWG riêng biệt

Trong Dynamo, chọn **File > Save As** hoặc biểu tượng đĩa mềm, lưu **so-dau-tien.dyn** vào PTAutoHoc. Trong Civil 3D, Ctrl+S lưu DWG. Hai file có vai trò khác: .dyn chứa graph, .dwg chứa bản vẽ. Lưu DWG không tự lưu thay đổi graph.

Để kiểm tra file, trong Dynamo chọn **File > Open**, mở lại so-dau-tien.dyn và giữ Manual trước khi chạy. Bấm Run; Watch cần hiển thị 9. Ghi phiên bản Civil 3D và Dynamo bằng thông tin About của ứng dụng. Không coi màu node hay build của ứng dụng là chứng nhận graph đã chạy trên mọi phiên bản.

## Gỡ lỗi

Không có nút Dynamo: kiểm tra host, workspace và thành phần cài đặt theo năm. Watch rỗng: kiểm tra dây và bấm Run trong Manual. Code Block báo lỗi: kiểm tra dấu chấm phẩy và nội dung số. Có cảnh báo package missing khi mở graph khác: quay về graph hai node này, không cài package tùy ý để chữa bài đầu.

Tiếp tục với [graph cộng hai số có kiểm tra](/du-an/dynamo-python/buoi-dau-cong-hai-so/).
