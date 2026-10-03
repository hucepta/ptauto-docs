---
{
  "id": "concept.autolisp.command",
  "slug": "command",
  "title": "command",
  "description": "Gửi lệnh và câu trả lời vào AutoCAD.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — command",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1C989B35-2C5A-47EC-A0C9-71998EDFB157.htm"
    },
    {
      "title": "Autodesk — command",
      "url": "https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-F258AC00-5E9F-4B6B-A670-33F7708E3FB6-htm.html"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(command [arguments ...])
```

## Tham số và kết quả

Các đối số là tên lệnh và câu trả lời theo đúng thứ tự lời nhắc. `""` tương đương Enter; `(command)` không đối số hủy phần lớn lệnh như Esc. Hàm luôn trả `nil`; điều đó không chứng minh lệnh đã đạt mục đích.

## Ví dụ: đọc tọa độ bằng ID

Chuẩn bị DWG mở và trở về dấu nhắc Command. Dán vào Command Line AutoCAD; ví dụ không tạo entity.

```lisp
(defun c:PTAIDGOC ()
  (command "_.ID" "_non" '(0.0 0.0 0.0))
  (princ))
(c:PTAIDGOC)
```

ID in X, Y, Z của gốc UCS là 0; định dạng phụ thuộc đơn vị. `"_non"` bỏ bắt điểm cho lần nhập này. ID cập nhật LASTPOINT.

## Lỗi thường gặp

Thiếu câu trả lời có thể để AutoCAD chờ trong lệnh; Esc để thoát. Dấu `_` dùng tên lệnh/option quốc tế, dấu `.` gọi lệnh gốc. Lệnh thay đổi hình học cần DWG học phù hợp.

Khi lưu vào LSP/MNL, đặt lời gọi `command` trong `defun`. Console Visual LISP không tự chuyển focus sang AutoCAD nếu cần nhập.

[Tham chiếu command](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1C989B35-2C5A-47EC-A0C9-71998EDFB157.htm) và [lệnh ID](https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-F258AC00-5E9F-4B6B-A670-33F7708E3FB6-htm.html).
