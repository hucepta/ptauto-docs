---
{
  "id": "lesson.autocad-dotnet.bat-dau-plugin",
  "slug": "bat-dau-plugin",
  "title": "Tạo và nạp plugin C# đầu tiên",
  "description": "Hiểu DLL, CommandMethod, NETLOAD và nơi mã plugin chạy trong AutoCAD.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "sources": [
    {
      "title": "Autodesk — AutoCAD .NET Developer's Guide",
      "url": "https://help.autodesk.com/view/OARX/2026/ENU/"
    },
    {
      "title": "Autodesk — About the Document Object",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"
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

## Lệnh .NET sống ở đâu

Với AutoLISP bạn nạp `.lsp`; với AutoCAD .NET bạn biên dịch project C# thành DLL rồi dùng `NETLOAD`. AutoCAD gọi method được đánh dấu `CommandMethod` khi người dùng gõ tên lệnh. Plugin chạy trong tiến trình AutoCAD và dùng các assembly/API của đúng phiên bản host; một DLL build thành công vẫn cần được thử trong AutoCAD thật.

```text
File .cs → project C# + Autodesk references → build DLL → NETLOAD → gõ lệnh → Editor phản hồi
```

## Chuẩn bị project nhỏ

Tạo Class Library theo hướng dẫn SDK cho phiên bản AutoCAD bạn dùng. Thêm reference AutoCAD managed API phù hợp, thường gồm `AcMgd`, `AcDbMgd` và `AcCoreMgd` theo SDK đó. Đặt các reference Autodesk ở chế độ không sao chép vào thư mục output nếu hướng dẫn SDK yêu cầu. Đừng tự lấy DLL từ một phiên bản AutoCAD khác để “cho build qua”.

## Viết lệnh chỉ đọc

```csharp
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.Runtime;

public class FirstCommands
{
    [CommandMethod("PT_HELLO")]
    public void Hello()
    {
        var document = Application.DocumentManager.MdiActiveDocument;
        document.Editor.WriteMessage("\nPlugin da duoc nap.");
    }
}
```

Ở đây `Application.DocumentManager` lấy document đang mở; `Editor.WriteMessage` gửi phản hồi về Command Line. Chưa có `Transaction` vì bài này chưa đọc hay sửa một entity trong Database. Build DLL, mở DWG thử, dùng `NETLOAD` chọn DLL và gọi `PT_HELLO`.

## Kiểm tra

Ghi lại phiên bản AutoCAD, SDK và framework đã dùng. Sau khi sửa chuỗi thông báo, build lại rồi nạp DLL mới theo quy trình phù hợp với host; nếu AutoCAD vẫn dùng mã cũ, kiểm tra DLL thực tế đã nạp và phiên làm việc. Bài sau sẽ giải thích `Document`, `Editor`, `Database`, `ObjectId` và `Transaction` trước khi chạm vào bản vẽ.
