---
{
  "id": "lesson.visual-lisp-activex.reactor-va-vong-doi",
  "slug": "reactor-va-vong-doi",
  "title": "Sự kiện reactor",
  "description": "Đăng ký, giới hạn và gỡ reactor theo vòng đời một tool AutoCAD.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.tool-on-dinh",
  "order": 2,
  "difficulty": "nang-cao",
  "prerequisites": [
    "lesson.visual-lisp-activex.batch-com-error-reactor"
  ],
  "flow": [
    {
      "label": "Sự kiện",
      "detail": "Chọn đúng event cần theo dõi"
    },
    {
      "label": "Callback",
      "detail": "Đọc ít dữ liệu, tránh sửa gây kích hoạt lại"
    },
    {
      "label": "Dọn dẹp",
      "detail": "Gỡ reactor khi ngừng tool hoặc đóng bản vẽ"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — VLA Functions with ActiveX",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD ActiveX",
      "version": "COM/VLA có hỗ trợ",
      "platform": "Windows"
    }
  ],
  "illustration": "graph"
}
---
<span id="khi-nào-cần-reactor" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Ứng dụng reactor

Một reactor có thể thông báo khi đối tượng tuyến bị sửa để đánh dấu báo cáo cần cập nhật. Nhưng callback chạy do sự kiện, có thể ở thời điểm không phù hợp để mở dialog, gọi `command` hoặc sửa chính đối tượng vừa kích hoạt sự kiện. Nếu callback sửa đối tượng và phát sinh sự kiện mới, vòng lặp có thể xảy ra.

Thiết kế an toàn là callback chỉ ghi nhận `ObjectId`/handle và trạng thái “cần cập nhật”; lệnh do người dùng gọi sau đó mới thực hiện tính toán nặng. Cần định nghĩa rõ ai tạo reactor, khi nào gỡ, và liệu đóng/mở DWG có đăng ký trùng hay không. Luôn thử trên bản sao với ít đối tượng trước.

## Thực hành

Vẽ luồng: sửa polyline → reactor đánh dấu dirty → người dùng gọi lệnh làm mới → tool đọc lại chiều dài. Viết ba tình huống test: sửa một lần, sửa liên tục 10 lần, đóng bản vẽ trước khi refresh. Giải thích vì sao callback không nên ghi CSV trực tiếp.
