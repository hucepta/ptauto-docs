---
{
  "id": "lesson.autocad-dotnet.jig-overrule-khi-nao",
  "slug": "jig-overrule-khi-nao",
  "title": "Jig và Overrule",
  "description": "Phân biệt xem trước hình học khi nhập điểm với thay đổi hành vi hiển thị của entity.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.plugin-tin-cay",
  "order": 3,
  "difficulty": "nang-cao",
  "prerequisites": [
    "lesson.autocad-dotnet.editor-selection-hinh-hoc",
    "lesson.autocad-dotnet.plugin-tin-cay"
  ],
  "flow": [
    {
      "label": "Tương tác",
      "detail": "Người dùng đang kéo điểm hay chỉ xem kết quả?"
    },
    {
      "label": "Chọn API",
      "detail": "Jig cho preview nhập liệu; Overrule cho hành vi entity"
    },
    {
      "label": "Vòng đời",
      "detail": "Hủy, tháo đăng ký và kiểm tra mở nhiều document"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — DrawJig Class",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_DrawJig.html"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Dùng SDK đúng phiên bản host và chạy kiểm tra trong AutoCAD",
      "platform": "Windows"
    }
  ],
  "illustration": "curve"
}
---

## Khi đặt ga dọc tuyến

Nếu người thiết kế cần rê chuột và thấy ga di chuyển trước khi bấm chọn, đây là bài toán nhập liệu có hình xem trước: khảo sát `DrawJig` hoặc `EntityJig`. Nếu chỉ cần vẽ biểu tượng cảnh báo cho entity đang tồn tại, khảo sát Overrule. Một lệnh `CommandMethod` thông thường đủ cho thao tác không cần preview; đừng thêm Jig chỉ để làm mã trông “nâng cao”.

| Tình huống | Lựa chọn đầu tiên | Kết quả cần kiểm |
|---|---|---|
| Kéo vị trí ga và xem trước | Jig | Hủy bằng Esc không để lại entity rác. |
| Đổi cách hiển thị entity hiện có | Overrule | Bật/tắt và gỡ đăng ký rõ ràng. |
| Tạo ga từ tọa độ đã có | Command + Transaction | Chỉ commit khi dữ liệu hợp lệ. |

## Cách thiết kế trước khi code

Viết ba trạng thái: **chờ điểm → xem trước → chấp nhận/hủy**. Chỉ ghi entity thật khi người dùng chấp nhận; dữ liệu xem trước không được thành một ga “mồ côi” trong Database. Với Overrule, xác định phạm vi đối tượng và thời điểm tháo đăng ký khi plugin tắt hoặc document đóng. Luôn thử trong bản vẽ sao chép.

## Thực hành

Phác sơ đồ trạng thái cho lệnh đặt hố ga. Ghi rõ chỗ kiểm tra layer, đơn vị, tọa độ và quyền ghi document. Thử hai lần liên tiếp, sau đó hủy giữa chừng và kiểm kê số entity trước/sau. Nếu bài toán không cần tương tác chuột, hãy giải thích vì sao Transaction đơn giản hơn.
