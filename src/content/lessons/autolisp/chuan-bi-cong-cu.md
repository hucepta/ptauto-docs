---
{
  "id": "lesson.autolisp.chuan-bi-cong-cu",
  "slug": "chuan-bi-cong-cu",
  "title": "AutoCAD và VS Code",
  "description": "Tải đúng công cụ, mở bản vẽ thử, nhận diện Command Line và chạy một file LSP do chính bạn lưu.",
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
      "title": "Microsoft — tải VS Code",
      "url": "https://code.visualstudio.com/download"
    },
    {
      "title": "Autodesk — cài và cấu hình AutoLISP Extension",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Tutorials/files/GUID-8EADDE55-CD92-422A-8493-9C7A19880629.htm"
    },
    {
      "title": "Autodesk — Trusted Locations và SECURELOAD",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-Core/files/GUID-C108E81C-7A06-477C-A5F8-10AA2FDEB050.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD bản đầy đủ",
      "version": "Hướng dẫn tham chiếu 2026; cần thử trên bản cài thực tế",
      "platform": "Windows"
    }
  ],
  "chapterId": "chapter.autolisp.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.autolisp.term-host-autolisp",
    "concept.autolisp.loi-khoi-dong-lsp"
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

Bạn sẽ giữ được một bản vẽ thử và một file LSP riêng, rồi nhìn thấy dòng thông báo do file đó tạo trong AutoCAD. Chưa cần biết lập trình. Mục tiêu là phân biệt nơi viết mã, nơi chạy mã và nơi lưu kết quả; ba việc này thường bị nhầm khi mới bắt đầu.

## Tải và kiểm tra công cụ

Mở trình duyệt từ Windows Start. Vào [trang AutoCAD chính thức](https://www.autodesk.com/products/autocad/free-trial), chọn bộ cài Windows theo quyền sử dụng của tài khoản Autodesk. AutoCAD là phần mềm thương mại: dùng thuê bao hợp lệ, quyền Education nếu đủ điều kiện, hoặc trial theo điều khoản hiển thị. Không mặc định bản trial hiện tại cung cấp mọi phiên bản cũ. Đọc System requirements cho đúng năm sản phẩm trước khi tải; hãy kiểm tra Windows, RAM và dung lượng trống của máy mình.

Vào [trang VS Code](https://code.visualstudio.com/download), chọn bộ cài Windows phù hợp rồi cài theo trình hướng dẫn. VS Code là trình soạn thảo; cài nó không cài AutoCAD. Bài này dùng AutoCAD bản đầy đủ trên Windows để giữ môi trường thống nhất với các phần học tiếp theo.

Với VS Code, chọn **User Installer** phù hợp kiến trúc máy. Mở thư mục **Downloads**, bấm đúp file **VSCodeUserSetup-…exe** vừa tải. Đọc điều khoản; nếu đồng ý thì tiếp tục bằng **Next**. Giữ thư mục cài mặc định nếu không có yêu cầu khác, đi qua các màn hình lựa chọn rồi bấm **Install**. Khi cài xong, chọn mở VS Code và bấm **Finish**; nếu chưa thấy cửa sổ thì dùng Start như bước dưới. [Hướng dẫn Windows của Microsoft](https://code.visualstudio.com/docs/setup/windows) phân biệt bộ cài cho một người dùng và bộ cài toàn máy.

Với AutoCAD, tải từ tài khoản có quyền sản phẩm, mở file cài vừa tải hoặc chọn **Install** qua Autodesk Access theo phương thức trang cung cấp. Kiểm tra tên sản phẩm và năm trước khi cài; đọc điều khoản, chọn thư mục cài khi được hỏi rồi bắt đầu **Install**. Chờ trạng thái hoàn tất, khởi động lại nếu bộ cài yêu cầu. Không chuyển sang bước mở ứng dụng khi bộ cài còn đang tải thành phần. Nhãn và màn hình cài có thể khác theo năm; phần thực hành bên dưới bắt đầu từ AutoCAD đã cài xong.

## Mở hai ứng dụng và tạo thư mục học

1. Nhấn phím Windows, gõ **AutoCAD**, chọn biểu tượng có đúng năm cài đặt; chờ màn hình Start và hoàn tất đăng nhập nếu được yêu cầu.
2. Nhấn Windows, gõ **Visual Studio Code**, chọn ứng dụng. Trong cửa sổ VS Code, bấm **View > Extensions** hoặc biểu tượng các ô vuông bên trái. Tìm **AutoCAD AutoLISP Extension**, kiểm tra nhà phát hành **Autodesk**, bấm **Install**. Kết quả mong đợi là nút cài đặt đổi thành trạng thái đã cài.
3. Nhấn Windows+E để mở File Explorer. Trong Documents, bấm **New > Folder**, đặt tên **PTAutoHoc**. Trong VS Code, chọn **File > Open Folder**, chọn thư mục này. Explorer bên trái phải hiện tên PTAutoHoc. Nếu hộp thoại Workspace Trust xuất hiện, chỉ cho phép thư mục bạn vừa tự tạo và quản lý.

## Nhận diện màn hình AutoCAD

Trong AutoCAD, chọn **New** ở Start để tạo DWG thử. Nếu hộp thoại template xuất hiện, chọn một template metric có sẵn, chẳng hạn **acadiso.dwt** khi bản cài cung cấp. Vùng lớn ở giữa là vùng vẽ; Ribbon phía trên chứa tab Home và các nhóm Draw/Modify; tab tên DWG nằm trên vùng vẽ. Biểu tượng đĩa mềm ở Quick Access Toolbar dùng để lưu.

Nhấn **Ctrl+9** nếu không thấy Command Line ở dưới. Nhấp vào dòng có nhãn Command trước khi gõ; không gõ vào ô tìm kiếm của ứng dụng. Gõ **LINE**, Enter, nhập **0,0**, Enter, **10,0**, Enter rồi Enter để kết thúc. Nếu chưa nhìn thấy nét, gõ **ZOOM**, Enter, **E**, Enter. Bạn cần thấy một đoạn thẳng, không cần hình thức trình bày đẹp.

## Lưu bản vẽ và file LSP

Trong AutoCAD, bấm biểu tượng đĩa mềm hoặc **Ctrl+S**. Chọn PTAutoHoc và đặt tên **buoi-dau.dwg**. Trong VS Code, chọn **File > New Text File**, nhập mã dưới, chọn **File > Save As**, lưu **kiem-tra.lsp** trong cùng thư mục. Kiểm tra phần mở rộng thực sự là .lsp, không phải .lsp.txt.

~~~lisp
(defun c:PTA_READY ()
  (princ "\nPTAuto: file LSP da chay.")
  (princ)
)
~~~

## Nạp, chạy và đối chiếu

Quay lại AutoCAD. Tại Command Line, gõ **APPLOAD**, Enter. Trong hộp thoại Load/Unload Applications, duyệt đến kiem-tra.lsp, chọn file, bấm **Load**, đọc trạng thái rồi bấm **Close**. Nếu xuất hiện cảnh báo bảo mật, xác minh đây là file bạn vừa viết; không tắt bảo mật toàn cục để bỏ qua cảnh báo.

Nhấp Command Line, gõ **PTA_READY**, Enter. Dòng mong đợi là **PTAuto: file LSP da chay.** Nhấn F2 để đọc lịch sử nếu cần. Đổi thông báo trong VS Code, Ctrl+S, nạp lại bằng APPLOAD rồi chạy lại: Save file không tự cập nhật mã đã nạp trong AutoCAD.



Nếu AutoCAD chặn file vì thư mục chưa được tin cậy, gõ **OPTIONS**, Enter; mở tab **Files > Trusted Locations**, chọn **Add > Browse** và chọn đúng thư mục mã bạn tự quản lý. Với LSP là PTAutoHoc; với DLL là thư mục output cụ thể vừa build. Bấm **Apply > OK** rồi thử nạp lại. Chỉ thêm thư mục chứa mã đã kiểm tra; giữ nguyên SECURELOAD. Nếu thiết lập bị khóa bởi đơn vị quản lý máy, nhờ quản trị CAD cấp vị trí học phù hợp. **SECURELOAD=2** có thể chặn thẳng, không hiện nút cho phép nạp.

## Gỡ lỗi

**Unknown command** thường nghĩa là lệnh chưa được định nghĩa trong phiên làm việc này: kiểm tra tên file đã nạp và lỗi ngoặc trước đó. Nếu thấy thông báo cũ, kiểm tra đường dẫn rồi nạp lại. Nếu không có Command Line, dùng Ctrl+9. Khi báo lỗi cú pháp, quay về VS Code và kiểm tra từng dấu ngoặc thay vì cài lại ứng dụng.

Ghi năm AutoCAD, tên DWG và đường dẫn LSP trong nhật ký. Đây là tiêu chí tự kiểm tra trên máy bạn; bài hướng dẫn không phải chứng nhận đã chạy trên mọi phiên bản.

Tiếp tục với [dự án lời chào có tên bản vẽ](/du-an/autolisp/buoi-dau-loi-chao-dwg/).
