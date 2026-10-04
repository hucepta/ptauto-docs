---
{
  "id": "project.visual-lisp-activex.buoi-dau-ten-ban-ve",
  "slug": "buoi-dau-ten-ban-ve",
  "title": "Đọc tên bản vẽ bằng ActiveX",
  "description": "Đọc ActiveDocument trên hai DWG và nhận biết lúc cần lấy lại tham chiếu.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — vl-load-com",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6C7A8632-C12F-42BD-909E-68D804863AE2.htm"
    },
    {
      "title": "Autodesk — vlax-dump-object",
      "url": "https://help.autodesk.com/cloudhelp/2024/PLK/AutoCAD-LT-AutoLISP-Reference/files/GUID-BCE56B30-54A6-42F9-8910-81AF2B7B9AA8.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD bản đầy đủ có ActiveX",
      "version": "Hướng dẫn tham chiếu 2026; cần thử trên bản cài thực tế",
      "platform": "Windows"
    }
  ],
  "technology": "visual-lisp-activex",
  "difficulty": "co-ban",
  "expectedResult": "Hai lần lấy ActiveDocument in đúng tên hai DWG; ghi lại đường dẫn đã lưu và ba property quan sát được.",
  "prerequisites": [
    "lesson.visual-lisp-activex.chuan-bi-cong-cu"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.term-active-document"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---
## Chuẩn bị

Làm [chuẩn bị ActiveX trên Windows](/hoc/visual-lisp-activex/chuan-bi-cong-cu/). Bạn cần AutoCAD bản đầy đủ có ActiveX trên Windows; dự án chỉ quan sát, không gọi method sửa dữ liệu. Phiếu kiểm tra gồm tên tab DWG, Name và FullName.

## Tạo đầu vào và đọc kết quả

1. Nhấn Windows, mở AutoCAD, ở Start chọn **New**. Ctrl+S lưu **phieu-a.dwg** trong PTAutoHoc. Ctrl+9 hiện Command Line.
2. Nhấp Command Line và nhập từng biểu thức sau, Enter sau mỗi dòng. Ghi hai chuỗi cuối vào file ghi chú trong VS Code; mở VS Code từ Start và dùng **File > New Text File > Save As** để lưu **phieu-activex.txt**.

~~~lisp
(vl-load-com)
(setq ptaApp (vlax-get-acad-object))
(setq ptaDoc (vla-get-ActiveDocument ptaApp))
(vla-get-Name ptaDoc)
(vla-get-FullName ptaDoc)
~~~

3. Trong AutoCAD, dùng **New** trên Quick Access Toolbar hoặc Ctrl+N, tạo bản vẽ thứ hai và Ctrl+S lưu **phieu-b.dwg**. Nhấp tab phieu-b.dwg.
4. Trong phieu-b.dwg, nhập lại cả ba dòng **(vl-load-com)**, **(setq ptaApp (vlax-get-acad-object))** và **(setq ptaDoc (vla-get-ActiveDocument ptaApp))**, rồi gọi Name và FullName như trên. Kết quả phải là phieu-b.dwg. Mỗi DWG có không gian biến AutoLISP riêng; biến tạo trong phieu-a không tự xuất hiện trong phieu-b.
5. Nhập **(vlax-dump-object ptaDoc)**, mở F2 và tìm Name, FullName cùng một property khác hiện trên máy. Ghi giá trị quan sát; không suy đoán member không xuất hiện.

## Nghiệm thu

Phiếu có hai tên đúng với hai file đã lưu; FullName trỏ tới folder học; DWG vẫn trống vì các biểu thức chỉ đọc. Ctrl+S cả DWG và ghi chú. Sau khi khởi động lại ứng dụng, tạo lại biến từ đầu rồi kiểm tra phieu-b một lần nữa.

Nếu ptaDoc không hợp lệ, nhập lại dòng lấy ứng dụng và ActiveDocument, đọc lỗi đầu tiên. Nếu nền tảng không hỗ trợ, dừng bài ActiveX và dùng đúng host, không cài thư viện ngẫu nhiên.
