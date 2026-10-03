---
{
  "id": "lesson.visual-lisp-activex.khoi-dong-activex",
  "slug": "khoi-dong-activex",
  "title": "Khởi động ActiveX với vl-load-com",
  "description": "Chuẩn bị môi trường Windows và nạp các hàm mở rộng trước khi dùng vla-, vlax- hoặc vlr-.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.nen-tang",
  "order": 1,
  "difficulty": "co-ban",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ ActiveX",
      "platform": "Windows"
    }
  ],
  "prerequisites": [
    "lesson.autolisp.bien-kieu-du-lieu"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.vl-load-com"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.nap-activex"
  ],
  "sources": [
    {
      "title": "Autodesk — vl-load-com (AutoLISP/ActiveX)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6C7A8632-C12F-42BD-909E-68D804863AE2.htm"
    }
  ],
  "examplePlacements": [
    {
      "heading": "nạp-hàm-mở-rộng",
      "exampleIds": [
        "example.visual-lisp-activex.nap-activex"
      ]
    }
  ],
  "illustration": "terminal"
}
---

## Điều kiện môi trường

ActiveX trong AutoLISP yêu cầu AutoCAD trên Windows. Trước khi theo lộ trình này, bạn cần đọc được biểu thức AutoLISP và hiểu biến, list. Liên kết bài nền tảng nằm ở phần kiến thức cần có.

## Nạp hàm mở rộng

Đặt (vl-load-com) trước các lời gọi vla-, vlax- hoặc vlr-. Lời gọi không có đối số và trả nil; nil ở đây không có nghĩa nạp thất bại.

Nếu phần mở rộng đã được nạp, lời gọi không nạp lại. Bạn có thể đặt nó trong phần khởi tạo của file để người dùng không phải tự nhớ thực hiện.

## Kiểm tra trước khi tiếp tục

Nạp file “Khởi tạo ActiveX” đi kèm trên AutoCAD Windows. Khi bước này hoạt động, bạn mới nên viết phần truy cập đối tượng hoặc thuộc tính.

Trên macOS, quay lại các bài AutoLISP không dùng ActiveX. Không gắn nhãn tương thích đa nền tảng cho code chỉ dùng được trên Windows.

