---
{
  "id": "lesson.autolisp.dong-goi-tool-nho",
  "slug": "dong-goi-tool-nho",
  "title": "Đóng gói tool nhỏ",
  "description": "Tổ chức thư mục, tên lệnh và cách kiểm tra trước khi chia sẻ LSP.",
  "status": "published",
  "chapterId": "chapter.autolisp.xay-dung-tool",
  "order": 3,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — sslength",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-034B9EC8-0945-48A0-802A-9725DDBA0EF2.htm"
    },
    {
      "title": "Autodesk — load",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F3639BAA-FD70-487C-AEB5-9E6096EC0255.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Phiên bản có hỗ trợ API được dùng",
      "platform": "Windows"
    }
  ]
}
---

## Bàn giao thứ gì?

Một tool nhỏ cần mã nguồn, cách nạp và bản vẽ mẫu có kết quả biết trước. Người nhận phải biết gọi lệnh gì, chọn gì và kết quả nằm ở đâu. Chỉ gửi một file tên `final2.lsp` khiến họ khó xác định bản nào đang dùng.

Tạo cấu trúc sau trong thư mục học:

```text
PTCount/
  pt-count.lsp
  README.txt
  samples/
    ba-line.dwg
```

Giữ tên lệnh có tiền tố, ví dụ PTCOUNT. Các hàm phụ cũng cần tiền tố để tránh ghi đè hàm của một routine khác. Lưu DWG mẫu riêng, không đóng gói hồ sơ khách hàng làm dữ liệu thử.

## Tách hàm xử lý và lệnh

```lisp
(defun pt-count-selection (ss)
  (if ss (sslength ss) 0)
)
(defun c:PTCOUNT (/ ss)
  (setq ss (ssget '((0 . "LINE"))))
  (princ (strcat "\nSo LINE: " (itoa (pt-count-selection ss))))
  (princ)
)
```

Hàm phụ nhận selection set và trả số. Lệnh phụ trách hỏi người dùng và in thông báo. Bạn có thể gọi `(pt-count-selection nil)` ngay tại Command Line để kiểm tra kết quả 0 mà không cần chọn entity.

## Viết hướng dẫn đủ dùng

Mở README.txt trong VS Code. Ghi: tên công cụ; phiên bản của công cụ; AutoCAD/API cần có; đường dẫn file; bước APPLOAD → Load → Close; lệnh PTCOUNT; filter LINE; kết quả in tại Command Line. Ghi rõ tool này chỉ đếm đối tượng được chọn và không đếm đoạn của polyline như LINE. Nếu tool về sau sửa DWG, hướng dẫn phải nêu thao tác Undo và cách chọn phạm vi.

## Thử từ một phiên làm việc mới

1. Mở DWG mẫu, nạp đúng file trong thư mục gói và gọi PTCOUNT.
2. Chọn cả ba LINE: phải in 3. Chỉ chọn CIRCLE: phải in 0.
3. Mở một DWG mới khác, thử gọi PTCOUNT trước khi nạp. Tùy cơ chế nạp của môi trường, lệnh có thể chưa tồn tại; nạp lại rồi thử.
4. Đổi tên thư mục gói, nạp bằng APPLOAD từ vị trí mới. Mã không nên chứa đường dẫn riêng của máy người viết.

## Bài tập

Nhờ một người khác làm theo README trên bản vẽ mẫu, hoặc tự làm trong một bản vẽ mới mà không nhìn mã. Ghi bước khiến người dùng phải đoán, rồi sửa hướng dẫn. Chưa đưa vào Startup Suite khi đang học: nạp thủ công giúp thấy rõ file nào cung cấp lệnh và nhận ra xung đột tên.
