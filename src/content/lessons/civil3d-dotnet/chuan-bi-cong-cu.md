---
{
  "id": "lesson.civil3d-dotnet.chuan-bi-cong-cu",
  "slug": "chuan-bi-cong-cu",
  "title": "Cài công cụ Civil 3D .NET",
  "description": "Mở đúng host Civil 3D, nhận diện Toolspace và cấu hình thư viện Civil 3D 2025 cho plugin chỉ đọc.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — tải Civil 3D và điều kiện dùng thử",
      "url": "https://www.autodesk.com/products/civil-3d/free-trial"
    },
    {
      "title": "Microsoft — Visual Studio Community và điều kiện sử dụng",
      "url": "https://visualstudio.microsoft.com/vs/community/"
    },
    {
      "title": "Autodesk — Civil 3D 2025: library references",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Autodesk — làm quen Toolspace",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-Tutorials/files/GUID-E20E87D2-1F6B-4BF7-A708-3156ED5F034B.htm"
    },
    {
      "title": "Autodesk — Managed .NET Compatibility 2025",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Autodesk — Trusted Locations và SECURELOAD",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-Core/files/GUID-C108E81C-7A06-477C-A5F8-10AA2FDEB050.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D đầy đủ",
      "version": "2025 / .NET 8; hướng dẫn cấu hình, chưa thử host",
      "platform": "Windows x64"
    }
  ],
  "chapterId": "chapter.civil3d-dotnet.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.civil3d-dotnet.term-full-civil-host",
    "concept.civil3d-dotnet.loi-khoi-dong-civil-host"
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
## Mục tiêu

Bạn sẽ mở DWG trong Civil 3D, nhìn thấy cây dữ liệu Prospector và chạy một lệnh đọc số Alignment. Bản vẽ mới có thể trả về 0; đó vẫn là kết quả hợp lệ. Ta kiểm tra môi trường trước khi tạo tuyến hay đọc hồ sơ dự án lớn.

## Cài Civil 3D

Mở trình duyệt từ Windows Start, vào [Civil 3D chính thức](https://www.autodesk.com/products/civil-3d/free-trial) hoặc Autodesk Account có quyền sản phẩm. Đọc System requirements theo năm, tải bộ cài **Civil 3D đầy đủ cho Windows**. Đây là sản phẩm thương mại; trial, Education và thuê bao có điều kiện riêng. Bộ cài 2025 chỉ dùng khi tài khoản có quyền lấy phiên bản đó; không mặc định trial mới nhất là 2025.

AutoCAD thường và Civil 3D Object Enabler không phải môi trường thay thế đầy đủ cho bài này. Object Enabler giúp làm việc với một số đối tượng trong ứng dụng chủ, nhưng việc nhìn thấy hình Civil không chứng minh đã có host Civil 3D và API thực thi cần thiết.

Mốc cấu hình của bài là **Civil 3D 2025 / .NET 8**, với runtime và references tương ứng bản cài. Kiểm tra About và bảng tương thích của đúng sản phẩm/update; cập nhật nền AutoCAD có thể đổi yêu cầu .NET. Làm phần cài Visual Studio 2022 và workload trong [chuẩn bị AutoCAD .NET](/hoc/autocad-dotnet/chuan-bi-cong-cu/) nếu chưa có; ở đây bổ sung phần riêng của Civil. Với năm khác, đọc DevGuide đúng năm rồi chọn target và reference tương ứng. Không gom DLL từ nhiều bộ cài để chữa lỗi thiếu thư viện.

## Mở ứng dụng và tìm cây dữ liệu

1. Nhấn Windows, gõ **Civil 3D 2025**, chọn đúng biểu tượng Civil 3D. Chờ hoàn tất khởi động và đăng nhập. Kiểm tra tên sản phẩm ở cửa sổ, không chỉ tên acad.exe của tiến trình.
2. Tại Start, chọn **New**, chọn template Civil metric của bản cài hoặc template học được cung cấp. Không đổi đơn vị/template của hồ sơ thật để thử. Nhấn Ctrl+S, tạo folder Documents/PTAutoHoc nếu cần và lưu **civil-dau-tien.dwg**.
3. Ribbon phía trên có các nhóm tạo dữ liệu Civil; vùng vẽ ở giữa; Command Line ở dưới. Nhấn Ctrl+9 nếu thiếu dòng lệnh. Gõ **SHOWTS**, Enter để hiện **Toolspace**. Trong Toolspace, chọn tab **Prospector**, mở rộng tên DWG rồi tìm **Alignments** và **Surfaces**. Tab Settings chủ yếu liên quan style và thiết lập, không phải cùng danh sách đối tượng.

Bạn chưa cần tạo surface. Cây collection rỗng là trạng thái dễ kiểm tra: số đối tượng dự kiến bằng 0. Ghi tên DWG trước khi mở Visual Studio để tránh nạp vào tab khác.

## Tạo Class Library và references

Nhấn Windows, mở **Visual Studio 2022**. Ở màn hình đầu, chọn **Create a new project > Class Library** C#, đặt tên **PtaCivilFirst**, chọn .NET 8.0 và lưu trong PTAutoHoc. Với project Windows, kiểm tra TargetFramework net8.0-windows và platform x64.

Trong **Solution Explorer**, bấm phải Dependencies, mở **Add Reference > Browse**. Từ thư mục cài **đúng Civil 3D 2025**, thêm AcDbMgd.dll, AcMgd.dll, AcCoreMgd.dll, AecBaseMgd.dll và AeccDbMgd.dll. Thư viện có thể nằm trong thư mục con của bộ cài; duyệt đúng vị trí, không tìm một DLL bất kỳ trên Internet. Chọn từng reference, mở Properties và đặt **Copy Local = False**. Đây là bước build; host sẽ cung cấp thư viện tương ứng khi chạy.

## Lưu mã và build lệnh chỉ đọc

Trong Solution Explorer, mở Class1.cs, thay nội dung rồi Ctrl+S. Chọn **Build > Build Solution**; đọc Output phía dưới. Lệnh dưới chỉ đọc collection Alignment của CivilDocument đang hoạt động.

~~~csharp
using Autodesk.AutoCAD.Runtime;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.Civil.ApplicationServices;

public class FirstCivilCommands
{
    [CommandMethod("PTA_CIVIL_READY")]
    public void Ready()
    {
        var doc = Application.DocumentManager.MdiActiveDocument;
        if (doc == null) return;
        var civil = CivilApplication.ActiveDocument;
        doc.Editor.WriteMessage(
            "\nSo Alignment: " + civil.GetAlignmentIds().Count);
    }
}
~~~

## Nạp trong Civil 3D và đối chiếu

Quay về cửa sổ Civil 3D vừa mở. Nhấp tab civil-dau-tien.dwg, gõ **NETLOAD** tại Command Line, chọn DLL output mới build. Sau khi xử lý yêu cầu bảo mật cho DLL của chính mình, gõ **PTA_CIVIL_READY**, Enter. Với DWG thử không có Alignment, mong đợi **So Alignment: 0**. Mở F2 để đọc lại rồi so với collection Alignments trong Prospector. Ctrl+S giữ DWG, lưu nhật ký gồm tên sản phẩm, năm, target và kết quả.



Nếu AutoCAD chặn file vì thư mục chưa được tin cậy, gõ **OPTIONS**, Enter; mở tab **Files > Trusted Locations**, chọn **Add > Browse** và chọn đúng thư mục mã bạn tự quản lý. Với LSP là PTAutoHoc; với DLL là thư mục output cụ thể vừa build. Bấm **Apply > OK** rồi thử nạp lại. Chỉ thêm thư mục chứa mã đã kiểm tra; giữ nguyên SECURELOAD. Nếu thiết lập bị khóa bởi đơn vị quản lý máy, nhờ quản trị CAD cấp vị trí học phù hợp. **SECURELOAD=2** có thể chặn thẳng, không hiện nút cho phép nạp.

## Gỡ lỗi

Lỗi thiếu AeccDbMgd: kiểm tra đang mở Civil 3D đầy đủ và references đúng năm. Không chữa bằng cách chép DLL Civil vào thư mục AutoCAD thường. Không có Toolspace: dùng SHOWTS rồi kiểm tra workspace Civil. Build thành công nhưng NETLOAD lỗi vẫn cần điều tra host/runtime; đó là hai kết quả riêng. Bài không khẳng định plugin đã được thử trong host của bạn.

Tiếp tục với [đối chiếu collection Civil](/du-an/civil3d-dotnet/buoi-dau-kiem-ke-alignment/).
