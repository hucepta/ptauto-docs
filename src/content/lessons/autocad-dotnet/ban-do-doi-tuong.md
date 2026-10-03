---
{
  "id": "lesson.autocad-dotnet.ban-do-doi-tuong",
  "slug": "ban-do-doi-tuong",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.bat-dau",
  "order": 3,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "tags": [],
  "searchableTerms": [],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Ví dụ môi trường 2025/.NET 8; dùng SDK khớp phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "title": "Bản đồ đối tượng",
  "description": "Theo Document tới Database và Editor; mở ObjectId bằng Transaction.",
  "sources": [
    {
      "title": "Autodesk — Command definition",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    },
    {
      "title": "Autodesk — Document object",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"
    }
  ]
}
---

## Hai đường truy cập từ Document

Application.DocumentManager quản lý các DWG đang mở. MdiActiveDocument trả Document hoạt động. Document có hai nhánh: Editor nhận/chọn/in thông báo; Database lưu entity, block, layer và dữ liệu bản vẽ. Editor không chứa Database và Transaction không phải cấp cha trong cây hình học.

```text
Document ── Editor → GetEntity / WriteMessage
         └─ Database → TransactionManager → Transaction
Selection hoặc bảng → ObjectId → Transaction.GetObject → DBObject
DBObject → Entity → Line / Circle / BlockReference ...
Database → BlockTable → BlockTableRecord → các ObjectId entity
```

Mũi tên mô tả cách truy cập; quan hệ kế thừa C# là DBObject → Entity → Line. LayerTableRecord cũng là DBObject nhưng không phải Entity vẽ được.

## Mở một LINE

Thêm lệnh dưới vào project bài đầu. Đoạn dùng AutoCAD API, chưa cần Civil 3D.

```csharp
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

public class ReadCommands
{
    [CommandMethod("PT_READ_LINE")]
    public void ReadLine()
    {
        var doc = AcApp.DocumentManager.MdiActiveDocument;
        if (doc == null) return;
        var opt = new PromptEntityOptions("\nChon LINE: ");
        opt.SetRejectMessage("\nCan chon LINE.");
        opt.AddAllowedClass(typeof(Line), true);
        var result = doc.Editor.GetEntity(opt);
        if (result.Status != PromptStatus.OK) return;
        using (var tr = doc.Database.TransactionManager.StartTransaction())
        {
            var line = (Line)tr.GetObject(result.ObjectId, OpenMode.ForRead);
            doc.Editor.WriteMessage($"\nLayer: {line.Layer}; Length: {line.Length:F3}");
        }
    }
}
```

GetEntity đưa ObjectId, chưa đưa Line. Transaction mở ID ở ForRead rồi ta đọc Layer và Length. using kết thúc transaction kể cả khi có exception. Không Commit vì đoạn không sửa dữ liệu. Giá trị double/string có thể sao chép ra báo cáo; không giữ wrapper Line để dùng sau khi transaction đóng.

## Thao tác quan sát

1. **Build → Build Solution**, mở `PT_OBJECTS.dwg`, NETLOAD DLL mới. Gọi `PT_READ_LINE` rồi chọn LINE dài 3. Kết quả phải là PT_LINE và 3.000.
2. Gọi lại rồi chọn CIRCLE. Lời nhắc Can chon LINE xuất hiện và yêu cầu chọn lại; chọn LINE dài 4 thì ra 4.000.
3. Gọi lại và Esc. Lệnh kết thúc không in một giá trị giả bằng 0.
4. Chuyển tab DWG, tạo một LINE rồi gọi lệnh. Document/Database được lấy lại mỗi lần chạy để không dùng ID của DWG trước.

## Tạo và sửa khác đọc

Tạo entity cần mở BlockTableRecord đích ForWrite, AppendEntity, AddNewlyCreatedDBObject rồi Commit. Sửa entity đã có cần ForWrite hoặc UpgradeOpen trước lúc gán. Commit xác nhận database thay đổi; Save mới ghi DWG ra ổ đĩa.

Model space là record có tên đặc biệt BlockTableRecord.ModelSpace. Database.CurrentSpaceId là record theo không gian đang làm việc, có thể khác Model. Báo cáo phải nêu rõ phạm vi.

## Bài tập

Thêm Handle vào thông báo bằng line.Handle. Chọn cùng LINE hai lần: Handle giữ nguyên. Lưu, đóng và mở lại DWG rồi xem Handle bằng LIST. Giải thích vì sao trao đổi lâu dài cần thêm tên/bản vẽ vào Handle và vì sao ObjectId từ phiên trước không phải khóa để mở trong phiên mới.
