---
{
  "id": "lesson.autolisp.dem-line-dau-tien",
  "slug": "dem-line-dau-tien",
  "title": "Đếm LINE đầu tiên",
  "description": "Tạo lệnh đếm đối tượng với dữ liệu thử và kiểm tra cả trường hợp rỗng.",
  "status": "published",
  "chapterId": "chapter.autolisp.thuc-hanh-cad",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — sslength",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-034B9EC8-0945-48A0-802A-9725DDBA0EF2.htm"
    },
    {
      "title": "Autodesk — strcat",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4430B1BF-DBB5-49D1-98F9-711B480976A1.htm"
    },
    {
      "title": "Autodesk — entsel",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9D4CF74D-8B8B-4D66-A952-564AFBA254E7.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Phiên bản có hỗ trợ API được dùng",
      "platform": "Windows"
    }
  ],
  "conceptIds": [
    "concept.autolisp.ssget",
    "concept.autolisp.sslength",
    "concept.autolisp.strcat"
  ]
}
---

## Dữ liệu thực hành

Mở DWG học riêng. Trong Model, dùng LINE tạo đúng ba đoạn độc lập, Enter sau mỗi đoạn; dùng CIRCLE tạo một đường tròn. Mỗi đoạn LINE là một entity. Một polyline có ba đoạn vẫn là một entity LWPOLYLINE và không thuộc bài đếm này.

Mục tiêu: chọn các LINE và in số lượng mà không sửa chúng. Người học có thể chọn sai loại đối tượng; filter phải giữ đúng loại LINE.

## Viết lệnh

Lưu mã thành `pt-count.lsp`:

```lisp
(defun c:PTCOUNT (/ ss n)
  (princ "\nChon cac LINE can dem: ")
  (setq ss (ssget '((0 . "LINE"))))
  (setq n (if ss (sslength ss) 0))
  (princ (strcat "\nSo LINE: " (itoa n)))
  (princ)
)
```

`ssget` cho phép người dùng chọn nhiều entity. Filter `((0 . "LINE"))` chỉ giữ LINE. `sslength` cần selection set hợp lệ; nhánh `if` chuyển nil thành số đếm 0. `itoa` đổi số nguyên thành chuỗi để `strcat` nối thông báo. Hai biến sau dấu `/` là biến cục bộ, không lưu giá trị cho lệnh lần sau.

## Nạp và chạy

1. Save file, gõ APPLOAD, chọn file và bấm Load rồi Close.
2. Gọi PTCOUNT. Quét chọn cả ba LINE cùng CIRCLE rồi Enter.
3. Đọc `So LINE: 3`. Kiểm tra CIRCLE vẫn còn và không có entity nào bị dịch chuyển.
4. Gọi lại, chỉ chọn một LINE rồi Enter; kết quả là 1.
5. Gọi lại rồi Enter không chọn; kết quả là 0. Nhấn Escape sẽ hủy thao tác input, khác Enter trả nil; chưa cần thêm xử lý lỗi phức tạp cho bài chỉ đọc này.

## Lỗi thường gặp

Nếu có lỗi `bad argument type: lselsetp nil`, bạn đã bỏ nhánh kiểm tra ss. Nếu chọn ba đoạn của một polyline mà được 0, dùng LIST để kiểm tra loại entity; đừng đổi filter chỉ để khớp con số dự đoán. Nếu thấy thông báo cũ, nạp lại LSP sau khi Save.

## Bài tập

Đổi filter thành CIRCLE và đổi lời nhắc tương ứng. Tạo hai CIRCLE, chạy bản mới và đối chiếu số 2. Sau đó thử bản vẽ không có CIRCLE. Viết một dòng mô tả đầu vào, một dòng mô tả loại entity và một dòng mô tả kết quả. Khi ba dòng thống nhất, bạn đã biết tạo một lệnh đọc dữ liệu có quy tắc.
