---
{
  "id": "lesson.autocad-dotnet.tuong-tac-editor",
  "slug": "tuong-tac-editor",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.bat-dau",
  "order": 5,
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
  "title": "Nhận điểm và lựa chọn",
  "description": "Thiết kế lời nhắc, xử lý Esc và trả kết quả dễ kiểm tra.",
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
## Luồng người dùng

Định nghĩa yêu cầu trước API: chọn hai điểm, báo khoảng cách 3D theo đơn vị bản vẽ, không tạo object. Luồng có ba nhánh: chọn đủ điểm, hủy ở điểm đầu, hủy ở điểm sau. Hủy là quyết định của người dùng và phải kết thúc sạch.

## Điểm và vector

Point3d là vị trí X/Y/Z. Vector3d là hướng cùng độ lớn. Hiệu hai điểm tạo vector; Length của vector cho khoảng cách. Hai điểm cùng XY nhưng khác Z có khoảng cách 3D khác 0. API không tự biết đơn vị m hay mm của dự án.

Thêm lệnh vào project bài đầu:

```csharp
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

public class InputCommands
{
    [CommandMethod("PT_DISTANCE")]
    public void Distance()
    {
        var doc = AcApp.DocumentManager.MdiActiveDocument;
        if (doc == null) return;
        var ed = doc.Editor;
        var first = ed.GetPoint("\nChon diem dau: ");
        if (first.Status != PromptStatus.OK) return;
        var options = new PromptPointOptions("\nChon diem sau: ");
        options.UseBasePoint = true;
        options.BasePoint = first.Value;
        var second = ed.GetPoint(options);
        if (second.Status != PromptStatus.OK) return;
        var delta = second.Value - first.Value;
        ed.WriteMessage($"\nKhoang cach 3D: {delta.Length:F3} don vi ban ve.");
    }
}
```

UseBasePoint tạo dây cao su từ điểm đầu giúp người dùng thấy mốc đo. Value chỉ dùng sau Status OK. Đoạn không mở entity nên không có Transaction; điểm là dữ liệu hình học.

## Thực hành bằng giao diện

1. Mở DWG học, gõ UCS → World. F3 bật/tắt Object Snap. Khi nhập tọa độ, dùng giá trị tuyệt đối; có thể F12 tắt Dynamic Input giúp dễ đọc Command Line.
2. Build, mở phiên AutoCAD mới nếu đã nạp DLL cũ, NETLOAD. Gọi PT_DISTANCE, nhập `0,0,0` rồi `3,4,0`. Kết quả 5.000.
3. Chạy với `0,0,0` và `0,0,5`: vẫn 5.000. Nếu cần khoảng cách bằng, chủ động bỏ thành phần Z trong phép tính.
4. Chạy lại và Esc ở điểm đầu. Chạy lại, chọn điểm đầu rồi Esc ở điểm sau. Không có kết quả đo ở cả hai nhánh.

<span id="từ-một-tới-nhiều-entity" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Chọn nhiều entity

GetEntity dùng cho một object cùng điểm chọn. GetSelection dùng cho tập. PromptSelectionResult.Value là SelectionSet; GetObjectIds trả ID để mở bằng Transaction. Nếu dùng SelectionFilter, nêu rõ điều kiện: chỉ LINE, chỉ layer PT_LINE hoặc cả hai. Không âm thầm loại object rồi báo tổng cho cả selection.

## Bài tập

In thêm khoảng cách bằng `Math.Sqrt(delta.X * delta.X + delta.Y * delta.Y)`. Với hai điểm cùng XY nhưng lệch Z 5, cột 3D bằng 5 và cột bằng bằng 0. Thêm câu đơn vị vào kết quả, giữ xử lý Esc. Trước UI hộp thoại, hãy bảo đảm lệnh nhỏ có lời nhắc, hủy và kết quả rõ.
