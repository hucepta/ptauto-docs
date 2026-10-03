---
{
  "id": "concept.visual-lisp-activex.reactor",
  "slug": "reactor",
  "title": "Reactor, callback và giới hạn tương tác",
  "description": "Theo dõi sự kiện mà không gây lặp hoặc can thiệp lệnh đang xử lý.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "term",
  "aliases": [
    "event",
    "callback",
    "vlr",
    "transient reactor",
    "persistent reactor"
  ],
  "relatedConceptIds": [
    "concept.visual-lisp-activex.com-errors"
  ],
  "exampleIds": [],
  "sources": [
    {
      "title": "Autodesk — About Attaching Reactors to Drawings",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP/files/GUID-49DB4EF4-7386-42CC-9633-5ABCDFA9D5D9.htm"
    },
    {
      "title": "Autodesk — About Reactor Guidelines",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-10123DBC-EA95-4300-A441-E028BB441477.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ]
}
---

## Cơ chế thông báo

Reactor liên kết sự kiện AutoCAD với hàm callback của ứng dụng. Khi sự kiện xảy ra, callback được gọi để ứng dụng biết trạng thái thay đổi. Cần `vl-load-com` trước khi dùng các hàm reactor. Reactor không phải vòng lặp quét bản vẽ và không tự biết nghiệp vụ cọc hoặc tuyến.

Transient reactor có vòng đời trong phiên; persistent reactor có yêu cầu quản lý khác khi lưu và mở bản vẽ. Chọn kiểu sau khi xác định cách module nạp, tắt và được phục hồi.

## Callback phải ngắn

Autodesk khuyến cáo tránh input tương tác, selection set, `command` và dialog tương tác trong callback vì lệnh có thể còn đang xử lý. Không sửa chính object phát thông báo, cũng không gây lại cùng sự kiện. Không dựa vào thứ tự phức tạp giữa các thông báo để suy luận nghiệp vụ.

## Quản lý đăng ký

Kiểm tra reactor đã tồn tại trước khi tạo, lưu tham chiếu để tháo khi tắt module và tránh callback lặp sau nạp lại. Một thiết kế phù hợp là callback đánh dấu dữ liệu cần cập nhật; lệnh riêng xử lý khi có ngữ cảnh hợp lệ. Kiểm tra nạp hai lần, tắt module và đóng document trước khi dùng theo dõi tự động trong tool thực tế.
