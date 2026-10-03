---
{
  "id": "lesson.autocad-dotnet.bat-dau-plugin",
  "slug": "bat-dau-plugin",
  "title": "Nạp plugin đầu tiên",
  "description": "Tạo project, tham chiếu API và chạy một lệnh C# trong AutoCAD.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "sources": [
    {
      "title": "Autodesk — Command definition",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    },
    {
      "title": "Autodesk — Document object",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"
    },
    {
      "title": "Autodesk — Managed .NET compatibility",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "SDK và target framework phải khớp phiên bản AutoCAD đích",
      "platform": "Windows"
    }
  ],
  "illustration": "terminal"
}
---

## Plugin và môi trường

AutoCAD .NET cho phép viết lệnh bằng C#, biên dịch thành DLL và nạp vào AutoCAD. AutoCAD chạy plugin; Visual Studio là nơi viết và build mã. DLL đầu tiên chỉ in thông báo để ta học đường đi từ source tới command trước khi sửa bản vẽ.

Cần AutoCAD trên Windows, Visual Studio có workload **.NET desktop development**, và thư viện Managed API của phiên bản AutoCAD sử dụng. Bài chọn AutoCAD 2025 đến Update 1.3/.NET 8 làm môi trường ví dụ. Theo [bảng tương thích Autodesk](https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm), AutoCAD 2025 Update 1.4 trở đi dùng .NET 10. Đọc cả năm và mức cập nhật ở Help → About trước khi chọn target. Với host dùng .NET 10, điều chỉnh target/reference theo SDK tương ứng rồi build và kiểm tra lại; không áp dụng nguyên cấu hình .NET 8 bên dưới cho mọi bản 2025.

## Tạo project từng bước

1. Mở Visual Studio Installer, chọn **Modify** tại bản Visual Studio, đánh dấu **.NET desktop development**, chọn **Modify** để cài workload nếu chưa có.
2. Mở Visual Studio → **Create a new project**. Gõ `Class Library`, lọc ngôn ngữ **C#**, chọn project .NET phù hợp → **Next**. Đặt tên `PTFirstPlugin`, chọn thư mục học riêng → **Next** → chọn **.NET 8.0** → **Create**.
3. Trong **Solution Explorer**, nhấp phải project → **Properties**. Với ví dụ Windows, đặt Target framework là `net8.0-windows` trong file `.csproj` nếu cần. Ở **Build**, chọn Platform target **x64**.
4. Nhấp phải **Dependencies** → **Add Project Reference** → **Browse** → **Browse...**. Chọn `AcMgd.dll`, `AcDbMgd.dll`, `AcCoreMgd.dll` từ SDK/cài đặt AutoCAD 2025. Chọn **Add** rồi **OK**. Trong Properties của từng reference, đặt **Copy Local = False** để AutoCAD cung cấp thư viện khi chạy.
5. Đổi tên `Class1.cs` thành `FirstCommands.cs`, thay nội dung bằng đoạn dưới rồi **Ctrl+S**.

```csharp
using Autodesk.AutoCAD.Runtime;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

public class FirstCommands
{
    [CommandMethod("PT_HELLO")]
    public void Hello()
    {
        var doc = AcApp.DocumentManager.MdiActiveDocument;
        if (doc == null) return;
        doc.Editor.WriteMessage("\nXin chao tu C#.");
    }
}
```

`using` chọn namespace. Attribute `CommandMethod` công bố tên `PT_HELLO`; method public `Hello` không nhận tham số được AutoCAD gọi. `doc` là tài liệu đang mở; `Editor.WriteMessage` đưa chuỗi vào Command Line. Dấu `\n` xuống dòng. Chưa cần Transaction vì ta không mở DBObject.

## Build và nạp

1. Chọn **Build → Build Solution** hoặc **Ctrl+Shift+B**. Mở **View → Output**, chọn **Build**. Khi thành công, tìm DLL trong `bin/Debug/net8.0-windows/` của project.
2. Mở AutoCAD, chọn **New**, tạo DWG học rồi **Save As** thành `PT_NET_01.dwg`. Dùng **Ctrl+9** để hiện Command Line nếu bị ẩn.
3. Gõ `NETLOAD` → Enter, chọn `PTFirstPlugin.dll` → **Open**. Nếu thư mục bị chặn, thêm thư mục học đáng tin cậy qua **OPTIONS → Files → Trusted Locations → Add** theo chính sách máy.
4. Gõ `PT_HELLO` → Enter. Command Line phải in `Xin chao tu C#.` một lần. `F2` mở lịch sử lệnh để đọc lại.

## Đọc lỗi và sửa một thay đổi

Nếu namespace không tìm thấy, xem reference đúng assembly và phiên bản. Nếu tên lệnh không tồn tại, kiểm tra NETLOAD đã chọn đúng DLL và method có public cùng attribute. DLL Class Library không phải chương trình độc lập để chạy bằng nút Start thông thường.

Đổi chuỗi thành `Bai hoc 1`, lưu và build. Đóng phiên AutoCAD đã nạp DLL rồi mở lại, NETLOAD DLL mới và gọi lệnh; assembly đã nạp thường tồn tại đến khi tiến trình kết thúc. Kết quả phải chuyển sang chuỗi mới.

## Bài tập

Thêm lệnh `PT_DRAWING` in `doc.Name`. Chạy trên hai tab DWG, mỗi lần chuyển tab và gọi lại lệnh. Kết quả phải là tên đường dẫn tài liệu đang hoạt động, không phải tên project Visual Studio. Cả hai lệnh không tạo LINE hoặc đổi layer.
