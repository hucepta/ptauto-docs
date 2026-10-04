---
{
  "id": "lesson.civil3d-dotnet.bat-dau-civil-api",
  "slug": "bat-dau-civil-api",
  "title": "Đọc tuyến đầu tiên",
  "description": "Chuẩn bị DWG có hai tuyến và đối chiếu kết quả với Toolspace.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.bat-dau",
  "order": 5,
  "difficulty": "co-ban",
  "sources": [
    {
      "title": "Autodesk — Civil 3D developer guide",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"
    },
    {
      "title": "Autodesk — CivilDocument members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
    },
    {
      "title": "Autodesk — Create Alignment from Objects",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-UserGuide/files/GUID-7D245A7F-0D27-4051-B4E6-B465123CEF29.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "SDK và host Civil 3D cùng thế hệ API",
      "platform": "Windows"
    }
  ],
  "illustration": "metadata"
}
---
<span id="civil-3d-bổ-sung-điều-gì" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đối tượng Civil 3D

Civil 3D dùng nền AutoCAD để lưu DWG và bổ sung mô hình hạ tầng. Alignment là tuyến bằng, Profile là cao độ theo tuyến, Surface là mặt; Corridor kết hợp tuyến, trắc dọc và Assembly để tạo mô hình đường. Hình trên màn hình chịu style; hình học và quan hệ gốc nằm trong đối tượng Civil.

Plugin dùng Document/Editor/Database/Transaction của AutoCAD cùng CivilDocument. Mở **Civil 3D đầy đủ trên Windows**. AutoCAD thường có Object Enabler hỗ trợ hiển thị Civil nhưng không thay thế môi trường thực hành Civil API.

<span id="tạo-dwg-dễ-đối-chiếu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Chuẩn bị DWG

1. Mở Civil 3D → **New**, chọn template Civil metric được cài. **Save As** thành `PT_CIVIL_01.dwg`. Chọn workspace Civil 3D nếu Ribbon chưa có tab Civil.
2. Trong tab **Home**, bật **Toolspace** ở panel **Palettes**. Chọn tab **Prospector**, bấm dấu cộng trước tên DWG để thấy Alignments, Surfaces, Sites và Pipe Networks.
3. Trong Model, gõ `PLINE`, nhập `0,0`, `100,0`, `200,50` rồi Enter. Đây là đường nguồn tuyến đầu.
4. Chọn **Home → Create Design → Alignment → Create Alignment from Objects**. Chọn polyline rồi Enter. Chấp nhận hướng từ (0,0) tới (200,50); nếu mũi tên ngược, chọn Reverse ở lời nhắc. Trong hộp **Create Alignment from Objects**, đặt Name `PT_TUYEN_A`, Site `<None>`, Starting station `0`, chọn Alignment style và Label set có sẵn rồi **OK**. Bỏ tùy chọn thêm curve giữa tangent để giữ hình học đơn giản.
5. Vẽ polyline thứ hai từ `0,100` tới `100,100`. Lặp lại tạo Alignment, đặt tên `PT_TUYEN_B`, Site `<None>`. Đổi tên polyline không tự tạo Alignment.

## Xem trong Toolspace

Trong Prospector, mở **Alignments → Centerline Alignments** theo loại tuyến đã chọn. Tìm A và B. Nếu chưa thấy, nhấp phải collection → **Refresh**. Nhấp phải tên → **Properties**, xem Name và Starting station; nhấp phải → **Select** để đối chiếu trên bản vẽ, rồi Esc. Không đếm tuyến theo số nhãn hiển thị.

## Lệnh liệt kê chỉ đọc

Sau khi thêm references AutoCAD cùng AecBaseMgd.dll và AeccDbMgd.dll của Civil 3D, dùng lệnh sau. Bài Môi trường Civil giải thích thao tác IDE.

```csharp
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.Runtime;
using Autodesk.Civil.ApplicationServices;
using Autodesk.Civil.DatabaseServices;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

public class CivilReadCommands
{
    [CommandMethod("PT_CIVIL_NAMES")]
    public void Names()
    {
        var doc = AcApp.DocumentManager.MdiActiveDocument;
        if (doc == null) return;
        var ids = CivilApplication.ActiveDocument.GetAlignmentIds();
        doc.Editor.WriteMessage($"\nSo tuyen: {ids.Count}");
        using (var tr = doc.Database.TransactionManager.StartTransaction())
        {
            foreach (ObjectId id in ids)
            {
                var alignment = (Alignment)tr.GetObject(id, OpenMode.ForRead);
                doc.Editor.WriteMessage("\n" + alignment.Name);
            }
        }
    }
}
```

<span id="kiểm-tra-từng-bước" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra kết quả

1. Build DLL, trong Civil 3D gõ NETLOAD chọn DLL, gọi PT_CIVIL_NAMES. F2 đọc kết quả: số tuyến 2 và hai tên đã đặt. Thứ tự không cần trùng Prospector.
2. So tên với Prospector và Select từng tuyến. Nếu count lớn hơn 2, kiểm tra tuyến thuộc Site và loại Alignment khác; GetAlignmentIds lấy tổng tuyến DWG.
3. **New** tạo DWG Civil trống, không tạo Alignment. Gọi lệnh: số tuyến 0, không dòng tên và không lỗi phần tử `[0]`.
4. Chuyển về PT_CIVIL_01.dwg, gọi lại: số tuyến 2. Lệnh lấy ActiveDocument mỗi lần, không dùng collection tab trước.
5. Trong bản sao DWG, đổi tên B thành `PT_TUYEN_C` qua Properties. Kết quả tên mới khớp; số tuyến vẫn 2.

## Bài tập

Thêm StartingStation và Length vào báo cáo. Tuyến B thẳng dài 100, lý trình đầu 0; đổi tên C chỉ thay metadata. Giải thích vì sao đổi style không tạo Alignment và vì sao hai tuyến có nhiều nhãn nhưng count vẫn 2.
