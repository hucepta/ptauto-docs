---
{
  "id": "lesson.autocad-dotnet.chuan-bi-cong-cu",
  "slug": "chuan-bi-cong-cu",
  "title": "Cài công cụ AutoCAD .NET",
  "description": "Chọn đúng bộ .NET/SDK của AutoCAD 2025, tạo Class Library, build DLL và kiểm tra lệnh trong DWG thử.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — tải AutoCAD và điều kiện dùng thử",
      "url": "https://www.autodesk.com/products/autocad/free-trial"
    },
    {
      "title": "Microsoft — Visual Studio Community và điều kiện sử dụng",
      "url": "https://visualstudio.microsoft.com/vs/community/"
    },
    {
      "title": "Microsoft — thay đổi workload Visual Studio",
      "url": "https://learn.microsoft.com/en-us/visualstudio/install/modify-visual-studio?view=visualstudio"
    },
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
    },
    {
      "title": "Autodesk — AutoCAD Developer Center / ObjectARX",
      "url": "https://www.autodesk.com/developer-network/platform-technologies/autocad"
    },
    {
      "title": "Microsoft — Visual Studio 2022 Release History / Community Current channel",
      "url": "https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-history"
    },
    {
      "title": "Autodesk — Trusted Locations và SECURELOAD",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-Core/files/GUID-C108E81C-7A06-477C-A5F8-10AA2FDEB050.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "2025 đến Update 1.3 / API 25.0 / .NET 8; chưa thử host",
      "platform": "Windows x64"
    }
  ],
  "chapterId": "chapter.autocad-dotnet.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.autocad-dotnet.term-build-host",
    "concept.autocad-dotnet.loi-khoi-dong-netload"
  ],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "illustration": "dialog",
  "flow": [
    {
      "label": "Chuẩn bị",
      "detail": "Chọn đúng ứng dụng, phiên bản và thư mục học."
    },
    {
      "label": "Mở và lưu",
      "detail": "Nhận diện cửa sổ, tạo đầu vào thử và lưu file."
    },
    {
      "label": "Kiểm tra",
      "detail": "Chạy thao tác nhỏ rồi đối chiếu kết quả quan sát được."
    }
  ]
}
---
## Công cụ và phiên bản

Visual Studio viết và biên dịch C# thành DLL. AutoCAD nạp DLL rồi thực hiện lệnh bên trong DWG. Bạn sẽ tạo một lệnh chỉ in thông báo để kiểm tra hai nửa này. **Build succeeded** chỉ xác nhận biên dịch; chưa xác nhận plugin đã chạy trong AutoCAD.

## Chọn phiên bản

Bài thực hành lấy **AutoCAD 2025 đến Update 1.3, Windows x64** làm mốc: API 25.0 và .NET 8. **AutoCAD 2025 Update 1.4 trở lên dùng .NET 10**; cấu hình .NET 8 bên dưới không áp dụng nguyên trạng cho nhánh này. AutoCAD 2024 dùng .NET Framework 4.8. Kiểm tra About trước khi chọn SDK, runtime và references; không suy cấu hình chỉ từ số năm.

**Với AutoCAD 2026, cần kiểm tra cả update:** guide hiện tại ghi 2026 đến 2026.1.1 dùng .NET 8 / Visual Studio 2022 17.14; **2026.1.2 trở lên dùng .NET 10 / Visual Studio 2026 18.0**. Vì vậy hai máy cùng ghi năm 2026 có thể cần cấu hình khác. Đọc About để biết update trước khi chọn SDK; bài 2025 dưới đây không chứng nhận DLL chạy trên nhánh .NET 10.

Mở trình duyệt từ Start, vào [AutoCAD](https://www.autodesk.com/products/autocad/free-trial) hoặc Autodesk Account của bạn. Chọn đúng năm khi quyền tài khoản cho phép; trial hiện tại không đảm bảo cung cấp 2025. Kiểm tra System requirements, dùng thuê bao, trial hoặc Education đúng điều kiện. Nếu chỉ có host khác, xác định SDK/runtime của host đó trước, chưa chạy nguyên cấu hình 2025 này.

Vào [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/), đọc điều kiện giấy phép. Cá nhân có thể dùng Community; tổ chức phải kiểm tra giới hạn áp dụng. Dùng **Visual Studio 2022 từ 17.8** cho .NET 8; khi trang tải mặc định đưa bản mới hơn, mở [Release History 2022](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-history) của Microsoft và tìm link Community thuộc kênh phù hợp. Visual Studio và VS Code là hai ứng dụng khác nhau.

## Cài workload và mở ứng dụng

1. Chạy Visual Studio Installer, chọn **Modify** ở bản 2022 nếu đã cài, đánh dấu **.NET desktop development**, kiểm tra .NET 8 SDK trong **Individual components**, rồi Install/Modify. Runtime để chạy và SDK để build có vai trò khác nhau.
2. Nhấn Windows, gõ **Visual Studio 2022**, mở ứng dụng. Chọn **Create a new project**, tìm **Class Library**, chọn mẫu C# .NET hiện đại, không chọn Class Library (.NET Framework). Đặt tên **PtaFirst**, lưu vào Documents/PTAutoHoc, chọn framework **.NET 8.0**.
3. Nhận diện vùng soạn mã ở giữa; **Solution Explorer** thường ở bên phải; **Output** và **Error List** thường ở dưới. Nếu thiếu, bật qua menu **View**. DLL không có cửa sổ riêng như ứng dụng Console.

## Thêm đúng thư viện AutoCAD

Trong Solution Explorer, bấm phải **Dependencies > Add Reference** hoặc Add Project Reference rồi chọn **Browse**. Chọn AcCoreMgd.dll, AcDbMgd.dll và AcMgd.dll từ bộ SDK/reference đúng AutoCAD 2025 hoặc thư mục cài đúng năm. Không lấy từng DLL từ các năm khác nhau. Trong Properties của từng reference, đặt **Copy Local = False** để tránh phát hành lại thư viện Autodesk cùng plugin.

Bộ ObjectARX SDK lấy từ [trang phát triển AutoCAD của Autodesk](https://www.autodesk.com/developer-network/platform-technologies/autocad), chọn đúng năm; managed reference assemblies nằm trong folder inc của bộ SDK. Với bài đầu, dùng references của bản cài đúng năm cũng là cách Autodesk hướng dẫn. SDK phục vụ lập trình, không thay giấy phép và ứng dụng host.

Mở **Project > Properties**, kiểm tra target .NET 8; với bài Windows có thể đặt TargetFramework thành **net8.0-windows** trong file project. Chọn Platform target **x64**. Ghi đường dẫn reference vào nhật ký để lần sau biết chính xác bộ dùng để build.

## Viết, lưu và build

Mở Class1.cs từ Solution Explorer, thay nội dung bằng mã dưới rồi Ctrl+S. Chọn **Build > Build Solution**. Trong Output, đọc kết quả cuối; nếu có lỗi, bấm dòng lỗi trong Error List để tới chỗ cần sửa.

~~~csharp
using Autodesk.AutoCAD.Runtime;
using Autodesk.AutoCAD.ApplicationServices;

public class FirstCommands
{
    [CommandMethod("PTA_READY_NET")]
    public void Ready()
    {
        var doc = Application.DocumentManager.MdiActiveDocument;
        if (doc != null)
            doc.Editor.WriteMessage("\nPTAuto: C# da chay.");
    }
}
~~~

## Nạp vào DWG thử và kiểm tra

Nhấn Windows, mở **AutoCAD 2025** đúng biểu tượng. Ở Start, chọn New, dùng template có sẵn; Ctrl+S lưu **dotnet-dau-tien.dwg**. Nhấn Ctrl+9 để hiện Command Line. Gõ **NETLOAD**, Enter, chọn PtaFirst.dll trong thư mục output của cấu hình vừa build; đường dẫn thường có bin/Debug/net8.0-windows. Khi được hỏi bảo mật, chỉ xác nhận DLL bạn vừa tự build và biết nguồn.

Gõ **PTA_READY_NET**, Enter. Mong đợi **PTAuto: C# da chay.** trong lịch sử F2. Lưu DWG bằng Ctrl+S, ghi phiên bản host và kết quả. Không bấm Run của Visual Studio rồi kỳ vọng DLL tự mở cửa sổ.



Nếu AutoCAD chặn file vì thư mục chưa được tin cậy, gõ **OPTIONS**, Enter; mở tab **Files > Trusted Locations**, chọn **Add > Browse** và chọn đúng thư mục mã bạn tự quản lý. Với LSP là PTAutoHoc; với DLL là thư mục output cụ thể vừa build. Bấm **Apply > OK** rồi thử nạp lại. Chỉ thêm thư mục chứa mã đã kiểm tra; giữ nguyên SECURELOAD. Nếu thiết lập bị khóa bởi đơn vị quản lý máy, nhờ quản trị CAD cấp vị trí học phù hợp. **SECURELOAD=2** có thể chặn thẳng, không hiện nút cho phép nạp.

## Gỡ lỗi

Thiếu namespace Autodesk: kiểm tra reference. Thiếu target .NET 8: kiểm tra SDK và workload. NETLOAD lỗi: đối chiếu host, target và toàn bộ đường dẫn DLL. Unknown command: đọc lỗi nạp trước đó, kiểm tra tên CommandMethod. DLL đã nạp thường bị khóa trong phiên; đóng host thử trước khi build lại. Hướng dẫn này được đối chiếu tài liệu, không thay cho kiểm thử host trên máy bạn.

Thực hành tiếp bằng [đọc tên DWG qua C#](/du-an/autocad-dotnet/buoi-dau-ten-dwg-csharp/).
