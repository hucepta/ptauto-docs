---
{
  "id": "lesson.autocad-dotnet.plugin-tin-cay",
  "slug": "plugin-tin-cay",
  "title": "Plugin ổn định",
  "description": "Quản lý tài liệu, events, Undo, lỗi, dữ liệu mở rộng và mục đích của UI, Jig, Overrule.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.plugin-tin-cay",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.editor-selection-hinh-hoc"
  ],
  "conceptIds": [
    "concept.autocad-dotnet.documentlock",
    "concept.autocad-dotnet.transaction"
  ],
  "exampleIds": [
    "example.autocad-dotnet.doc-xdata"
  ],
  "examplePlacements": [
    {
      "heading": "xdata-và-xrecord",
      "exampleIds": [
        "example.autocad-dotnet.doc-xdata"
      ]
    }
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — Lock and Unlock a Document (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-A2CD7540-69C5-4085-BCE8-2A8ACE16BFDD.htm"
    },
    {
      "title": "Autodesk — Guidelines for Event Handlers (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-FE7D58D5-28A0-4C98-A876-D4D48F06D0B2.htm"
    },
    {
      "title": "Autodesk — ResultBuffer Data Type (.NET, 2024)",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/OARX-DevGuide-Managed/files/GUID-A43BA3F1-513E-42E5-A21F-633FAF97B5C9.htm"
    },
    {
      "title": "Autodesk — DBObject.GetXDataForApplication Method",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_DBObject_GetXDataForApplication_string.html"
    },
    {
      "title": "Autodesk — Xrecord Class",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Xrecord.html"
    },
    {
      "title": "Autodesk — EntityJig Class",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_EntityJig.html"
    },
    {
      "title": "Autodesk — Overrule Class",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Runtime_Overrule.html"
    },
    {
      "title": "Microsoft — Exception Handling",
      "url": "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/exception-handling"
    }
  ],
  "tags": [],
  "searchableTerms": [
    "DocumentLock",
    "multi-document",
    "events",
    "Undo",
    "performance",
    "logging",
    "XData",
    "ResultBuffer",
    "DBDictionary",
    "Xrecord",
    "UI",
    "Jig",
    "Overrule"
  ],
  "illustration": "graph"
}
---

## DocumentLock và nhiều bản vẽ

DocumentLock bảo vệ ngữ cảnh sửa tài liệu; Transaction quản lý object và commit. Command thông thường trong Document hiện tại được host quản lý khóa; modeless UI, lệnh Session hoặc sửa Document khác cần xem xét khóa tường minh bằng `Document.LockDocument` và giải phóng bằng `using`.

Lấy Document đích, rồi Database tương ứng. Không giữ biến static chỉ tới bản vẽ từng hoạt động: người dùng có thể chuyển tab hoặc đóng DWG trước lần bấm tiếp theo.

## Events và Undo

Đăng ký event bằng `+=`, hủy bằng `-=` khi kết thúc vòng đời. Handler chỉ nên ghi nhận dữ liệu cần kiểm tra, tránh hỏi input hoặc sửa lại object vừa phát event. Nếu handler kích hoạt cùng event, một thay đổi nhỏ có thể tạo vòng lặp.

Transaction rollback giúp phục hồi thay đổi chưa commit. Undo phục vụ người dùng sau thao tác đã hoàn thành; nó cần được kiểm tra riêng khi lệnh có nhiều bước. Tránh phát hàng loạt lệnh qua chuỗi command làm ranh giới thao tác khó kiểm soát.

## Lỗi, hiệu năng và logging

Tách đọc dữ liệu, tính toán và ghi kết quả. Mở `ForRead` trước, chỉ mở ghi object cần sửa. Gom thông báo thay vì in từng entity trong vòng lặp lớn. Tính toán thuần trên snapshot có thể được đo độc lập; không đưa wrapper database sang luồng nền như dữ liệu thông thường.

Log nên có tên lệnh, host, Document, giai đoạn và exception. Khi không ghi được log, vẫn báo lỗi chính trên Editor. Không biến exception thành số lượng bằng 0: “không có dữ liệu” và “không đọc được” khác nhau.

## XData và Xrecord

XData gắn dữ liệu theo tên Registered Application; `ResultBuffer` chứa các cặp `TypedValue`. Xrecord lưu payload trong DBDictionary, thường qua extension dictionary của object hoặc Named Objects Dictionary. Mã kiểu dùng cho XData và Xrecord không hoán đổi tùy ý.

Ví dụ chỉ đọc XData của một app trên entity được chọn, không tạo RegApp hay thay payload. Nếu app chưa có dữ liệu, thông báo thiếu dữ liệu là kết quả hợp lệ. Khi thiết kế lưu trữ, thêm trường phiên bản schema và quy tắc xử lý dữ liệu cũ.

## UI, Jig và Overrule

Bắt đầu bằng command và thông báo Editor. Palette hoặc dialog phù hợp khi người dùng cần thao tác lặp với nhiều tham số. Jig phục vụ xem trước hình học theo thao tác kéo trước khi chấp nhận; Overrule thay một phần hành vi đối tượng qua cơ chế override của host. Chỉ thêm khi chức năng thực sự cần chúng.

## Thực hành

Mở hai DWG, chạy lệnh đọc XData ở mỗi bản, rồi đóng một bản. Xác nhận không dùng dữ liệu của tab trước. Với lệnh ghi tự phát triển, thử Esc, exception giữa bước và Undo; đối chiếu DWG trước/sau cùng log.
