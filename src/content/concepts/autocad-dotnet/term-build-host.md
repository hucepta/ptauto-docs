---
{
  "id": "concept.autocad-dotnet.term-build-host",
  "slug": "term-build-host",
  "title": "Build và chạy trong host",
  "description": "Hai giai đoạn riêng: biên dịch tạo DLL và nạp DLL vào AutoCAD phù hợp để thực hiện lệnh.",
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
  "kind": "term",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Định nghĩa

**Build** dùng compiler, SDK và references để tạo assembly DLL. **Chạy trong host** nạp assembly vào AutoCAD, dùng runtime và API của sản phẩm đó rồi gọi lệnh. Thành công của bước đầu không tự xác nhận bước sau.

## Một phép đối chiếu nhỏ

Từ Start mở **Visual Studio 2022**, mở solution, chọn **Build > Build Solution**; Output có thể báo Build succeeded. Sau đó mở **AutoCAD 2025**, tạo DWG thử, gọi NETLOAD và PTA_READY_NET theo [bài chuẩn bị](/hoc/autocad-dotnet/chuan-bi-cong-cu/). Chỉ phản hồi trong lịch sử Command Line chứng minh lệnh đó đã được gọi trong phiên ấy.

## Ranh giới phiên bản

Tài liệu Autodesk ghi AutoCAD 2025 dùng managed API 25.0/.NET 8, còn 2024 dùng .NET Framework 4.8. Guide 2026 còn phân nhánh theo update: 2026 đến 2026.1.1 dùng .NET 8, 2026.1.2 trở lên dùng .NET 10. Chọn target và references theo host; cài SDK mới nhất không tự nâng API của AutoCAD cũ. Khi báo kết quả, ghi riêng đường dẫn DLL đã build và năm/update host đã thực hành, không tuyên bố tương thích các bản chưa thử.
