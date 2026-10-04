---
{
  "id": "concept.autocad-dotnet.loi-khoi-dong-netload",
  "slug": "loi-khoi-dong-netload",
  "title": "Build được nhưng NETLOAD hoặc lệnh thất bại",
  "description": "Đối chiếu SDK, framework, DLL output và năm AutoCAD trước khi kết luận plugin chạy được.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — Managed .NET Compatibility 2025",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Microsoft — cài .NET trên Windows và phiên bản Visual Studio",
      "url": "https://learn.microsoft.com/en-us/dotnet/core/install/windows"
    },
    {
      "title": "Autodesk — Visual Studio/.NET theo năm và update AutoCAD",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-DevGuide-Managed/files/GUID-450FD531-B6F6-4BAE-9A8C-8230AAC48CB4.htm"
    },
    {
      "title": "Autodesk — thêm AutoCAD .NET references và Copy Local",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-2363CE7C-AC2B-4CAC-AE5D-F77B386132D7.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "2025, managed API 25.0 / .NET 8; hướng dẫn cấu hình, chưa thử host",
      "platform": "Windows x64"
    }
  ],
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.autocad-dotnet.term-build-host"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Triệu chứng

Visual Studio báo Build succeeded nhưng NETLOAD báo lỗi hoặc AutoCAD không nhận lệnh. Cần giữ riêng kết quả build và kết quả host.

## Kiểm tra từ hai ứng dụng

1. Từ Start mở **Visual Studio**, mở solution. Trong Project Properties kiểm tra target; với mốc AutoCAD 2025 của bài đầu là .NET 8. Với 2024 là .NET Framework 4.8. Guide 2026 ghi 2026–2026.1.1 dùng .NET 8 nhưng 2026.1.2+ dùng .NET 10; kiểm tra About để biết update. Không dùng target mới chỉ vì máy đã cài SDK mới.
2. Trong Solution Explorer kiểm tra references AcCoreMgd/AcDbMgd/AcMgd cùng năm, Copy Local=False. Build lại sau khi đóng phiên host đang giữ DLL nếu file output bị khóa.
3. Từ Start mở **AutoCAD đúng năm**, mở DWG thử; Ctrl+9 rồi NETLOAD đúng DLL output vừa build. Đọc lỗi nạp trong F2 trước khi gọi lệnh.
4. Gọi đúng tên chuỗi trong CommandMethod. Nếu đổi code nhưng phản hồi cũ, kiểm tra đường dẫn DLL và dùng phiên host mới để thử bản build mới.

## Kết quả cần giữ

Nhật ký có đường dẫn DLL, framework, references và phản hồi lệnh trong host. Xem [chuẩn bị .NET](/hoc/autocad-dotnet/chuan-bi-cong-cu/) để làm phép thử chỉ in thông báo trước khi thêm logic sửa DWG.
