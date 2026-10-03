---
{
  "id": "project.autocad-dotnet.cad-utility-chi-doc",
  "slug": "cad-utility-chi-doc",
  "title": "CAD Utility: bộ lệnh kiểm tra chỉ đọc",
  "description": "Xây plugin ba lệnh kiểm tra LINE, Polyline và XData với dữ liệu đối chiếu, quản lý phạm vi và nhật ký chạy.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Ba command đọc đúng selection/entity, báo kết quả có đơn vị, xử lý Esc và thiếu dữ liệu, không thay entity hoặc XData; nhật ký ghi host/SDK và expected/observed.",
  "prerequisites": [
    "lesson.autocad-dotnet.cad-utility-geometry-civil"
  ],
  "conceptIds": [
    "concept.autocad-dotnet.objectid",
    "concept.autocad-dotnet.transaction",
    "concept.autocad-dotnet.selectionfilter",
    "concept.autocad-dotnet.documentlock"
  ],
  "exampleIds": [
    "example.autocad-dotnet.thong-ke-line-layer",
    "example.autocad-dotnet.doc-polyline",
    "example.autocad-dotnet.doc-xdata"
  ],
  "examplePlacements": [
    {
      "heading": "lõi-thống-kê-line",
      "exampleIds": [
        "example.autocad-dotnet.thong-ke-line-layer"
      ]
    },
    {
      "heading": "kiểm-tra-polyline",
      "exampleIds": [
        "example.autocad-dotnet.doc-polyline"
      ]
    },
    {
      "heading": "xdata-và-ngữ-cảnh-document",
      "exampleIds": [
        "example.autocad-dotnet.doc-xdata"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — About Managed .NET Compatibility (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Autodesk — Command Definition (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    },
    {
      "title": "Autodesk — Use Selection Filters to Define Selection Set Rules (.NET, 2024)",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/OARX-DevGuide-Managed/files/GUID-125398A5-184C-4114-9212-A2FF28FC1F1D.htm"
    },
    {
      "title": "Autodesk — Use Transactions to Access and Create Objects (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    },
    {
      "title": "Autodesk — Polyline Properties",
      "url": "https://help.autodesk.com/cloudhelp/2019/ENU/OARX-ManagedRefGuide/files/OREFNET-__MEMBERTYPE_Properties_Autodesk_AutoCAD_DatabaseServices_Polyline.html"
    },
    {
      "title": "Autodesk — DBObject.GetXDataForApplication Method",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_DBObject_GetXDataForApplication_string.html"
    },
    {
      "title": "Microsoft — Attach to running processes with the debugger",
      "url": "https://learn.microsoft.com/en-us/visualstudio/debugger/attach-to-running-processes-with-the-visual-studio-debugger?view=vs-2022"
    },
    {
      "title": "Autodesk — Lock and Unlock a Document (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-A2CD7540-69C5-4085-BCE8-2A8ACE16BFDD.htm"
    }
  ],
  "tags": [
    "CAD Utility",
    "project",
    "chỉ đọc"
  ],
  "searchableTerms": [
    "PTA_LINE_SUMMARY",
    "PTA_POLYLINE_INFO",
    "PTA_XDATA_READ",
    "NETLOAD",
    "PDB",
    "QA/QC"
  ]
}
---

## Mục tiêu và phạm vi

Tạo class library chứa ba command: PTA_LINE_SUMMARY thống kê LINE theo layer; PTA_POLYLINE_INFO đọc một Polyline; PTA_XDATA_READ xem payload của một Registered Application. Công cụ dùng selection hoặc entity do người dùng chọn, không tự thay dữ liệu bản vẽ.

Kết quả phải có phạm vi và đơn vị. “Tổng chiều dài 7” chỉ hữu ích khi biết selection, layer và đơn vị bản vẽ. Mỗi command kết thúc khi người dùng hủy; lỗi đọc không được biến thành báo cáo bằng 0. Project này là hướng dẫn xây và kiểm tra nguồn, chưa cung cấp DLL đã biên dịch hoặc kết quả host.

## Chuẩn bị project và host

Mẫu nhắm AutoCAD 2025, Windows x64, .NET 8 theo tài liệu tương thích Autodesk. Tạo class library với target `net8.0-windows`; thêm reference `AcCoreMgd.dll`, `AcDbMgd.dll`, `AcMgd.dll` từ SDK/cài đặt đúng phiên bản. Đặt Copy Local thành False cho các thư viện host. Đưa ba file C# đi kèm vào project, giữ namespace của từng class và tên command khác nhau.

Build Debug, lưu DLL/PDB cùng nhau. Mở AutoCAD 2025 với DWG thử, nạp DLL bằng NETLOAD từ vị trí host cho phép. Ghi kết quả nạp trước khi gọi command. Khi debug, attach vào đúng `acad.exe`; dùng breakpoint ở PromptStatus và lúc tạo snapshot. Nếu đổi assembly đã nạp, mở phiên host mới để thử bản build mới.

## Lõi thống kê LINE

Source thống kê đọc selection qua filter DXF LINE, mở từng Line ForRead, lấy tên layer/chiều dài rồi đóng transaction. LINQ nhóm các snapshot; không đọc wrapper sau phạm vi transaction.

Chuẩn bị hai LINE dài 3 và 4 trên layer A, một LINE dài 5 trên B, và một CIRCLE. Chọn tất cả: A có 2 LINE tổng 7, B có 1 LINE tổng 5. Chọn riêng A rồi thử Esc. Đối chiếu bằng Properties và số liệu dựng hình; CIRCLE không nằm trong báo cáo LINE.

## Kiểm tra Polyline

Source đọc lightweight Polyline báo số đỉnh, Closed và Length. Với hình chữ nhật 10×5 đóng, kết quả mong đợi là chiều dài 30 và diện tích 50. Với Polyline mở, công cụ không báo diện tích và không tự đóng.

Thêm Polyline có cung để kiểm tra Length theo geometry thay cho tổng chord. Thử CIRCLE hoặc Polyline3d để kiểm tra thông báo sai kiểu. Lưu dữ liệu trước/sau; một lỗi Area trên geometry bất thường phải được ghi nhận, không chữa bằng thao tác sửa ngầm.

## XData và ngữ cảnh Document

Source đọc XData yêu cầu tên Registered Application rồi in các TypedValue của app đó. Dùng một entity đã có payload từ công cụ nghiệp vụ hoặc DWG thử đã chuẩn bị; chạy lại với tên app không có dữ liệu. Thiếu XData là tình trạng hợp lệ, không cần đăng ký app mới.

Mở hai DWG có dữ liệu khác nhau, chuyển tab giữa các lần gọi. Kiểm tra command đọc từ Document đang hoạt động và không giữ entity của lần trước. Class command chỉ đọc hiện tại chưa có modeless UI; khi mở rộng palette sửa dữ liệu, xác định Document đích và DocumentLock trước khi thêm Transaction ghi.

## Nghiệm thu và hướng mở rộng

Lưu bảng thử gồm host/build, SDK, tên DWG, command, input, expected và observed. Cần có selection hỗn hợp, dữ liệu rỗng, Esc, sai kiểu, Polyline có cung và hai Document. So sánh layer, vị trí, chiều dài, Closed và XData trước/sau để xác nhận lệnh chỉ đọc.

Bàn giao nguồn, cấu hình reference, bộ DWG thử và nhật ký kết quả. Chỉ ghi phiên bản đã thử thực tế. Sau đó có thể thêm xuất báo cáo từ snapshot hoặc quy tắc hình học với tolerance rõ ràng; các thay đổi ghi database cần tiêu chí Undo/rollback riêng.
