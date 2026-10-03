---
{
  "id": "lesson.autocad-dotnet.reference-build-debug",
  "slug": "reference-build-debug",
  "title": "Reference, build và debug plugin theo đúng phiên bản",
  "description": "Phân biệt lỗi biên dịch, lỗi nạp DLL và lỗi khi lệnh chạy trong AutoCAD.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.csharp-cho-cad",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.autocad-dotnet.csharp-nen-tang-plugin"
  ],
  "flow": [
    {
      "label": "Project",
      "detail": "Chọn target framework và Autodesk assemblies"
    },
    {
      "label": "Build",
      "detail": "Tạo DLL và xem warning/error"
    },
    {
      "label": "Host",
      "detail": "NETLOAD, gọi lệnh, bắt lỗi và debug"
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

## Ba lớp lỗi khác nhau

Project C# có thể build nhưng AutoCAD không nạp vì khác thế hệ API hoặc thiếu assembly; DLL nạp được vẫn có thể lỗi khi lệnh truy cập dữ liệu. Vì vậy ghi rõ **AutoCAD host**, **SDK/reference**, **target framework** và DLL đang nạp. Không kết luận “đã chạy” từ một build xanh.

Tạo cấu hình Debug với reference đúng SDK của host. Build vào thư mục riêng cho từng phiên bản. Trong AutoCAD thử `NETLOAD`, gọi lệnh chỉ in thông báo, rồi đặt breakpoint trong method và attach debugger vào đúng tiến trình AutoCAD. Nếu breakpoint không dừng, kiểm tra PDB, DLL đã nạp và cấu hình Debug/Release trước khi sửa logic.

| Dấu hiệu | Kiểm tra đầu tiên |
| --- | --- |
| Compiler báo thiếu namespace | Reference và target framework |
| NETLOAD không nạp | Version API và dependency |
| Lệnh có nhưng lỗi khi chạy | Input, Document, Transaction, exception |

## Bài luyện

Viết một trang nhật ký thử gồm host/version, SDK/version, framework, đường dẫn DLL, tên lệnh, kết quả NETLOAD và kết quả chạy. Dùng mẫu này cho mọi plugin về sau.
