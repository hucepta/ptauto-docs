---
{
  "id": "lesson.autocad-dotnet.chuyen-tool-lisp-sang-net",
  "slug": "chuyen-tool-lisp-sang-net",
  "title": "Chuyển một tool AutoLISP sang plugin C#",
  "description": "Giữ hợp đồng đầu vào/đầu ra khi đổi cách truy cập bản vẽ.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.cad-utility-va-civil",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.cad-utility-geometry-civil"
  ],
  "flow": [
    {
      "label": "Hợp đồng",
      "detail": "Ghi dữ liệu vào, kết quả, nhánh Cancel"
    },
    {
      "label": "Đối chiếu",
      "detail": "Chạy LISP và .NET trên cùng DWG"
    },
    {
      "label": "Bàn giao",
      "detail": "Version, cài đặt, rollback và hướng dẫn"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoCAD .NET Developer Guide",
      "url": "https://help.autodesk.com/view/OARX/2026/ENU/"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Build và thử với SDK/host cùng phiên bản",
      "platform": "Windows"
    }
  ]
}
---

## Không dịch từng dòng code

Một routine LISP đếm LINE có thể dùng `ssget` và `sslength`; plugin .NET dùng `Editor.GetSelection`, `SelectionFilter` và transaction nếu cần đọc thuộc tính. Hai cách khác API nhưng phải trả cùng số cho cùng tập dữ liệu. Chuyển từng dòng thường giữ lại các giả định không còn phù hợp.

Tạo fixture DWG có 2 LINE, 1 CIRCLE, 1 LINE trên layer bị khóa và một lần người dùng Cancel. Ghi bảng kết quả mong đợi trước khi viết C#. Test so số lượng, thông báo và việc không sửa bản vẽ. Chỉ sau đó thêm metadata hoặc tính năng mới.

Khi chuẩn bị sang Civil 3D, xác định rõ plugin hiện tại chỉ dùng AutoCAD API hay gọi CivilDocument. Hai trường hợp có yêu cầu host/dependency khác nhau.

## Bài luyện

Viết bảng chuyển `ssget`, `entget`, `assoc 8`, `princ` sang các khái niệm .NET tương ứng; ghi chỗ nào không có ánh xạ một-một. Đề xuất cách kiểm tra phiên bản DLL khi người dùng báo “lệnh cũ vẫn chạy”.
