---
{
  "id": "lesson.visual-lisp-activex.tao-line-activex",
  "slug": "tao-line-activex",
  "title": "Tạo LINE bằng ActiveX",
  "description": "Đi từ Application đến ModelSpace và tạo một entity có tọa độ biết trước.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.object-model",
  "order": 3,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — vlax-3D-point",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4C3B6017-BA57-451D-8CF8-C8539E9517F6.htm"
    },
    {
      "title": "Autodesk — vlax-get-property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B3F22E35-4666-452F-89C8-5BC15B9E9463.htm"
    },
    {
      "title": "Autodesk — AddLine Method",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-ActiveX-Reference/files/GUID-26C95029-14BB-40B9-9987-49EFC980CB9D.htm"
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

## Đi qua đúng object

Application là AutoCAD đang chạy. ActiveDocument là bản vẽ đang hoạt động. ModelSpace là collection entity của Model trong bản vẽ đó. Muốn thêm LINE, gọi AddLine trên ModelSpace, không gọi trên Application hoặc một LINE có sẵn.

Đầu ra của bài là LINE từ WCS (0,0,0) đến (100,0,0). Làm trên DWG thử vì bài tạo entity mới.

## Soạn lệnh

```lisp
(vl-load-com)
(defun c:PTAXLINE (/ app doc ms line)
  (setq app (vlax-get-acad-object)
        doc (vla-get-ActiveDocument app)
        ms (vla-get-ModelSpace doc))
  (setq line (vla-AddLine ms
                (vlax-3d-point '(0.0 0.0 0.0))
                (vlax-3d-point '(100.0 0.0 0.0))))
  (princ (strcat "\nDa tao: " (vla-get-ObjectName line)))
  (princ)
)
```

Lưu `pt-ax-line.lsp`, nạp bằng APPLOAD và chạy PTAXLINE ở tab Model. Bạn phải thấy thông báo loại AcDbLine. Nếu chưa thấy đoạn mới, gõ ZOOM rồi Extents. ActiveX nhận hai điểm bằng Variant chứa mảng double; vlax-3d-point tạo đúng kiểu đó từ list LISP.

## Đối chiếu trong phần mềm

1. Gõ UCS rồi World để dễ đọc tọa độ đối chiếu.
2. Chọn LINE mới, mở Properties bằng Ctrl+1 và xem tọa độ đầu/cuối.
3. Dùng DIST bắt đầu và cuối đoạn; chiều dài phải là 100 đơn vị bản vẽ.
4. Gõ U để hoàn tác lượt tạo. Kiểm tra LINE biến mất rồi chạy lại.

100 ở đây là đơn vị bản vẽ, không mặc định là 100 mét. Bản vẽ sử dụng quy ước millimeter sẽ hiểu khác quy ước meter; xác định quy ước dự án trước khi nhập kích thước thực tế.

## Thử có chủ đích

Chuyển UCS sang hệ xoay rồi chạy lại. AddLine vẫn dùng hai điểm WCS đã ghi trong mã. Khi muốn nhận điểm bằng getpoint của người dùng, đổi bằng trans từ UCS sang WCS trước khi vlax-3d-point. Không tự thay bằng tọa độ đang hiển thị trong Properties khi UCS khác World.

## Bài tập

Đổi điểm cuối thành (100,50,0). Nạp lại, chạy và đọc Length: kết quả gần 111.8034. Tạo một lần nữa, kiểm tra có hai LINE riêng thay vì một LINE được cập nhật. Giải thích sự khác nhau giữa thêm object mới và sửa property của object cũ.
