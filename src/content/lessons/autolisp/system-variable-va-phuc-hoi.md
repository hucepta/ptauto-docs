---
{
  "id": "lesson.autolisp.system-variable-va-phuc-hoi",
  "slug": "system-variable-va-phuc-hoi",
  "title": "Lưu trạng thái AutoCAD",
  "description": "Đọc, thay đổi tạm và trả lại trạng thái bản vẽ khi lệnh kết thúc hoặc bị hủy.",
  "status": "published",
  "chapterId": "chapter.autolisp.tuong-tac-ban-ve",
  "order": 4,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.autolisp.chon-doi-tuong-ssget"
  ],
  "flow": [
    {
      "label": "Ghi nhớ",
      "detail": "Đọc giá trị cũ bằng getvar"
    },
    {
      "label": "Thao tác",
      "detail": "Đổi tạm bằng setvar nếu thật cần"
    },
    {
      "label": "Khôi phục",
      "detail": "Trả giá trị cũ cả ở nhánh lỗi"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoLISP Developer's Guide",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; thử lại trên phiên bản đang dùng",
      "platform": "Windows / macOS"
    }
  ],
  "illustration": "terminal"
}
---

## Vì sao một lệnh có thể gây phiền dù kết quả đúng

Một routine có thể đổi `OSMODE` hoặc `CMDECHO` để điều khiển thao tác. Nếu nó kết thúc sớm mà không trả lại giá trị cũ, người dùng thấy AutoCAD đổi cách bắt điểm hoặc hiển thị lệnh sau khi tool đã xong. Vì vậy thay đổi system variable là một phần trạng thái cần quản lý, không phải mẹo viết mã.

```lisp
(setq oldCmdecho (getvar "CMDECHO"))
(setvar "CMDECHO" 0)
;; Chỉ thực hiện phần công việc đã kiểm tra đầu vào.
(setvar "CMDECHO" oldCmdecho)
```

Đoạn này minh họa nguyên tắc, chưa đủ xử lý khi người dùng bấm Escape giữa chừng. Với lệnh thực tế cần một `*error*` cục bộ hoặc thiết kế không đổi biến toàn cục, và cần bảo đảm không khôi phục hai lần sai thứ tự. Ưu tiên API không phụ thuộc trạng thái khi có thể.

## Thực hành

Ghi `OSMODE` trước và sau khi chạy một lệnh thử. Cố ý hủy ở giữa. Nếu hai giá trị khác nhau, tool chưa đạt điều kiện bàn giao. Viết bảng: biến nào routine đọc, biến nào sửa, nhánh nào phải khôi phục. Chỉ sau đó mới bổ sung hàm xử lý lỗi.
