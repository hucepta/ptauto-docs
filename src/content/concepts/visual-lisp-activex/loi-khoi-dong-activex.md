---
{
  "id": "concept.visual-lisp-activex.loi-khoi-dong-activex",
  "slug": "loi-khoi-dong-activex",
  "title": "ActiveX không có hàm hoặc đọc nhầm DWG",
  "description": "Kiểm tra Windows, host, vl-load-com và thời điểm lấy ActiveDocument trước khi sửa code.",
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
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.visual-lisp-activex.term-active-document"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Triệu chứng

Biểu thức vla/vlax báo chưa có hàm, ptaDoc không hợp lệ, hoặc Name khác tên tab DWG bạn đang xem. Ba lỗi này cần phép kiểm tra khác nhau.

## Từng bước xác định nguyên nhân

1. Từ Windows Start mở **AutoCAD bản đầy đủ** đúng năm, Ctrl+O mở DWG thử. Xác nhận bạn đang trong AutoCAD Windows, không phải Web/macOS.
2. Ctrl+9, nhấp Command Line và chạy **(vl-load-com)**. Sau đó lấy lại ứng dụng với vlax-get-acad-object. Nếu lỗi ngay tại đây, kiểm tra sản phẩm/nền tảng trước khi gọi property khác.
3. Nhấp đúng tab DWG và lấy lại ActiveDocument. Đọc Name. Nếu biến giữ document cũ, chuyển tab một mình không cập nhật biến.
4. Với vlax-dump-object, truyền VLA-object thật, không truyền chuỗi tên file. Mở F2 để đọc lỗi đầu tiên.

## Dấu hiệu đã xử lý đúng

Name khớp DWG đang được lấy tại thời điểm chạy; dump liệt kê member. Bạn chưa cần gọi method sửa bản vẽ để xác nhận. Xem [quy trình chuẩn bị](/hoc/visual-lisp-activex/chuan-bi-cong-cu/) rồi ghi sản phẩm, năm và phản hồi thực tế.
