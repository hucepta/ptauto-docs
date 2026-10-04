---
{
  "id": "lesson.visual-lisp-activex.chuan-bi-cong-cu",
  "slug": "chuan-bi-cong-cu",
  "title": "AutoCAD Windows và ActiveX",
  "description": "Mở đúng AutoCAD, làm quen cửa sổ lệnh và đọc thuộc tính của bản vẽ bằng ActiveX.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — tải AutoCAD và điều kiện dùng thử",
      "url": "https://www.autodesk.com/products/autocad/free-trial"
    },
    {
      "title": "Autodesk — vl-load-com",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6C7A8632-C12F-42BD-909E-68D804863AE2.htm"
    },
    {
      "title": "Autodesk — vlax-dump-object",
      "url": "https://help.autodesk.com/cloudhelp/2024/PLK/AutoCAD-LT-AutoLISP-Reference/files/GUID-BCE56B30-54A6-42F9-8910-81AF2B7B9AA8.htm"
    },
    {
      "title": "Autodesk — cài và cấu hình AutoLISP Extension",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Tutorials/files/GUID-8EADDE55-CD92-422A-8493-9C7A19880629.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD bản đầy đủ có ActiveX",
      "version": "Hướng dẫn tham chiếu 2026; cần thử trên bản cài thực tế",
      "platform": "Windows"
    }
  ],
  "chapterId": "chapter.visual-lisp-activex.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.visual-lisp-activex.term-active-document",
    "concept.visual-lisp-activex.loi-khoi-dong-activex"
  ],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "illustration": "terminal",
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

Bạn sẽ mở một DWG do mình tạo, rồi yêu cầu AutoCAD in tên bản vẽ và danh sách thuộc tính của nó. ActiveX đưa các đối tượng của ứng dụng ra một mô hình có property và method. Buổi đầu chỉ đọc thông tin để bạn biết mình đang quan sát đúng bản vẽ; chưa đổi layer, xóa đối tượng hay xử lý hàng loạt.

## Chọn môi trường và tải công cụ

Từ Windows Start, mở trình duyệt và vào [trang AutoCAD](https://www.autodesk.com/products/autocad/free-trial). Chọn bản Windows có quyền sử dụng hợp lệ, đọc System requirements theo năm cài đặt và hoàn tất bộ cài. AutoCAD là sản phẩm có giấy phép; trial và Education có điều kiện riêng. Bài này dùng **AutoCAD bản đầy đủ trên Windows**. Không dùng AutoCAD Web hoặc macOS cho quy trình ActiveX này; việc một sản phẩm đọc được DWG không có nghĩa nó cung cấp cùng API.

Bạn cần một trình soạn file LSP cho các bài tiếp theo. Nếu chưa cài VS Code, làm phần tải, mở folder và cài AutoLISP Extension trong [chuẩn bị AutoLISP](/hoc/autolisp/chuan-bi-cong-cu/). Không cần tải một gói COM không rõ nguồn hay cài Python để thực hiện bài quan sát dưới đây. Các hàm ActiveX được dùng bên trong môi trường AutoCAD phù hợp.

## Mở AutoCAD và nhận diện cửa sổ

1. Nhấn Windows, gõ **AutoCAD**, chọn biểu tượng đúng năm. Đợi Start xuất hiện rồi chọn **New**; khi được hỏi template, chọn một mẫu metric có sẵn.
2. Quan sát Ribbon phía trên, tab tên DWG, vùng vẽ giữa màn hình và Command Line phía dưới. Nhấn **Ctrl+9** nếu thiếu Command Line. Nhấn **F2** để mở cửa sổ lịch sử dạng văn bản; nhấn lại để quay về.
3. Nhấn **Ctrl+S**, chọn thư mục Documents/PTAutoHoc và lưu **activex-dau-tien.dwg**. Nếu chưa có folder, bấm New Folder trong hộp thoại lưu. Sau khi lưu, tab DWG phải hiện tên này. Đây là mốc để đối chiếu với property Name.

## Kiểm tra nơi nhập biểu thức

Nhấp trực tiếp vào Command Line; gõ từng dòng dưới rồi Enter sau mỗi dòng. Không thêm dấu nhắc Command vào nội dung. Dòng đầu chuẩn bị các hàm COM; dòng tiếp lấy ứng dụng đang chứa phiên AutoLISP; dòng thứ ba lấy DWG đang hoạt động.

~~~lisp
(vl-load-com)
(setq ptaApp (vlax-get-acad-object))
(setq ptaDoc (vla-get-ActiveDocument ptaApp))
(vla-get-Name ptaDoc)
~~~

Sau dòng cuối, mong đợi chuỗi **activex-dau-tien.dwg**. Các dòng setq có thể in ký hiệu VLA-OBJECT; đây là tham chiếu tới đối tượng, không phải tên file trên đĩa. Mỗi DWG có không gian biến AutoLISP riêng. Khi mở DWG khác, nhập lại vl-load-com và hai dòng setq để tạo ptaApp, ptaDoc trong bản vẽ đó, rồi mới đọc Name. Khi quay về DWG trước, các biến của DWG trước vẫn thuộc không gian của nó.

## Xem thuộc tính và method

Tại Command Line, nhập biểu thức sau rồi mở F2 để đọc kết quả dài. T yêu cầu liệt kê thêm method. Hãy tìm dòng Name; các member có nhãn RO là chỉ đọc. Đừng gọi method chỉ vì nó xuất hiện trong danh sách.

~~~lisp
(vlax-dump-object ptaDoc T)
~~~

Bạn đang xem mô tả đối tượng của phiên hiện tại. Danh sách có thể khác theo sản phẩm và phiên bản. Ghi lại ba mục quan sát được, chẳng hạn Name, FullName và một method; không học thuộc toàn bộ danh sách. Property trả lời câu hỏi đối tượng đang có thông tin gì; method mô tả một thao tác có thể yêu cầu đối tượng thực hiện.

## Lưu và tự kiểm tra

Trong AutoCAD, bấm biểu tượng đĩa mềm trên Quick Access Toolbar để giữ DWG. Trong VS Code, mở folder PTAutoHoc bằng **File > Open Folder**, tạo **ghi-chu-activex.txt**, ghi tên DWG, năm sản phẩm và ba member vừa thấy; Ctrl+S để lưu. Nhật ký giúp phân biệt quan sát thực tế với dự đoán từ tài liệu.

Đóng rồi mở lại DWG bằng Ctrl+O và chọn đúng file. Nhập lại bốn biểu thức ở bước 3. Biến trong phiên trước không phải dữ liệu được lưu vào DWG; vì vậy bạn phải tạo lại tham chiếu khi bắt đầu phiên mới.

## Gỡ lỗi

Nếu báo không có hàm vlax hoặc vla, kiểm tra sản phẩm, nền tảng và việc chạy vl-load-com trước. Nếu ptaDoc là nil hoặc không phải VLA-object, nhập lại từng dòng lấy ứng dụng và bản vẽ, đọc lỗi đầu tiên trong F2. Nếu Name khác dự kiến, nhấp tab DWG đúng rồi lấy lại ActiveDocument. Chưa cần sửa cài đặt hệ thống khi lỗi chỉ là chọn nhầm tab.

Tiếp tục với [phiếu kiểm tra hai bản vẽ](/du-an/visual-lisp-activex/buoi-dau-ten-ban-ve/).
