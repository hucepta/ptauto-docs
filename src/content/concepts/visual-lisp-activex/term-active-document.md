---
{
  "id": "concept.visual-lisp-activex.term-active-document",
  "slug": "term-active-document",
  "title": "ActiveDocument trong phiên AutoCAD",
  "description": "Bản vẽ đang hoạt động khi bạn lấy property ActiveDocument từ ứng dụng AutoCAD.",
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
  "kind": "term",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Định nghĩa

ActiveDocument là property của đối tượng ứng dụng, cho bạn tham chiếu tới bản vẽ đang hoạt động tại thời điểm lấy. Một biến đã giữ tham chiếu không tự đổi sang DWG mới chỉ vì người dùng bấm tab khác.

## Nhìn thấy nó từ giao diện

Mở **AutoCAD Windows từ Start**, Ctrl+O mở DWG thử, nhấp tab tên DWG. Tại Command Line nhập vl-load-com, lấy ứng dụng rồi ActiveDocument; quy trình đầy đủ ở [bài chuẩn bị ActiveX](/hoc/visual-lisp-activex/chuan-bi-cong-cu/). Đọc Name để đối chiếu với tab đang chọn và FullName để đối chiếu đường dẫn của DWG đã lưu.

Sau khi đổi tab, lấy lại ActiveDocument trước khi quan sát. Không sử dụng biến từ phiên cũ sau khi DWG đã đóng. Đây là bước kiểm tra ngữ cảnh, không phải thao tác sửa bản vẽ.

## Phân biệt

ActiveDocument khác file được chọn trong hộp thoại Open nhưng chưa mở xong, và khác đường dẫn LSP/DLL đã nạp. Trước thao tác thay đổi dữ liệu, xác nhận đang giữ đúng document và đúng host.
