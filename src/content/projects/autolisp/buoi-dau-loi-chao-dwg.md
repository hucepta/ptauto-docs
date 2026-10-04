---
{
  "id": "project.autolisp.buoi-dau-loi-chao-dwg",
  "slug": "buoi-dau-loi-chao-dwg",
  "title": "Lệnh chào và tên DWG",
  "description": "Tạo một lệnh LSP chỉ đọc tên bản vẽ và kiểm tra Save, APPLOAD, gọi lệnh.",
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
      "title": "Autodesk — cài và cấu hình AutoLISP Extension",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Tutorials/files/GUID-8EADDE55-CD92-422A-8493-9C7A19880629.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD bản đầy đủ",
      "version": "Hướng dẫn tham chiếu 2026; cần thử trên bản cài thực tế",
      "platform": "Windows"
    }
  ],
  "technology": "autolisp",
  "difficulty": "co-ban",
  "expectedResult": "File loi-chao-dwg.lsp chạy PTA_HELLO_DWG và in đúng tên DWG đang hoạt động; mở lại vẫn nạp được.",
  "prerequisites": [
    "lesson.autolisp.chuan-bi-cong-cu"
  ],
  "conceptIds": [
    "concept.autolisp.term-host-autolisp"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---
## Chuẩn bị

Hoàn thành [chuẩn bị AutoCAD và VS Code](/hoc/autolisp/chuan-bi-cong-cu/). Giữ lại folder PTAutoHoc; đây là dự án nhỏ chỉ in thông tin. Không dùng bản vẽ sản xuất. Đầu vào là DWG hiện tại, đầu ra là một dòng trong lịch sử lệnh.

## Thực hành

1. Nhấn Windows, mở AutoCAD đúng năm. Tại Start chọn **New**, dùng template có sẵn. Ctrl+S, chọn PTAutoHoc và lưu **xin-chao.dwg**. Nhấn Ctrl+9 để hiện Command Line.
2. Nhấn Windows, mở **Visual Studio Code**. Chọn **File > Open Folder > PTAutoHoc**, rồi **File > New Text File**. Nhập mã dưới và Save As **loi-chao-dwg.lsp**.

~~~lisp
(defun c:PTA_HELLO_DWG ()
  (princ (strcat "\nXin chao: " (getvar "DWGNAME")))
  (princ)
)
~~~

3. Quay về Command Line AutoCAD, gõ **APPLOAD**, chọn loi-chao-dwg.lsp, bấm **Load > Close**. Chỉ nạp file bạn vừa viết. Gõ **PTA_HELLO_DWG**, Enter.
4. Mở F2. Đối chiếu dòng **Xin chao: xin-chao.dwg** với tab DWG. Lưu nhật ký tên file LSP và tên lệnh; đó là hai tên khác nhau.
5. Ctrl+Shift+S trong AutoCAD, lưu bản sao **xin-chao-2.dwg**. Chạy lại lệnh; tên in ra cần đổi. Lệnh đọc tên hiện tại mỗi lần chạy, không dùng chuỗi gõ sẵn.

## Nghiệm thu

Đóng DWG thử, Ctrl+O mở lại bản sao. Trong DWG vừa mở lại, APPLOAD lại file LSP rồi chạy lệnh và so tên, kể cả khi AutoCAD vẫn đang mở. Hàm AutoLISP thuộc phiên của bản vẽ, không được lưu trong DWG. Giữ cả hai DWG và file LSP trong folder học. Không có đối tượng nào cần được thêm hoặc sửa bởi lệnh.

Nếu Unknown command, quay lại bước APPLOAD và xem lỗi nạp trong F2. Nếu tên không khớp, nhấp đúng tab DWG rồi chạy lại. Ghi năm AutoCAD thực tế cùng kết quả; không suy khả năng tương thích từ một lần build hoặc từ tài liệu.
