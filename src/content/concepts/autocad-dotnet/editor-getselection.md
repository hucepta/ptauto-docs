---
{
  "id": "concept.autocad-dotnet.editor-getselection",
  "slug": "editor-getselection",
  "title": "Editor.GetSelection",
  "description": "Lấy selection set từ lựa chọn tương tác, có thể kèm SelectionFilter.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Editor.GetSelection",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_Editor_GetSelection_SelectionFilter.html"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-__OVERLOADED_GetSelection_Autodesk_AutoCAD_EditorInput_Editor.html"
    },
    {
      "title": "Tài liệu chính thức — Editor.GetSelection",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Tài liệu chính thức — Editor.GetSelection",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_Editor_GetSelection_PromptSelectionOptions_SelectionFilter.html"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Đối chiếu chữ ký với SDK phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Môi trường và phạm vi

Mẫu nhắm SDK AutoCAD 2025 (API 25.0), `net8.0-windows`, Windows x64; bộ reference `AcCoreMgd.dll`, `AcMgd.dll`, `AcDbMgd.dll` cùng phiên bản, `Copy Local = False`. Phạm vi .NET 8 là AutoCAD 2025 đến Update 1.3; Update 1.4 trở lên dùng .NET 10 theo [bảng tương thích Autodesk](https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm). Chưa build hoặc chạy các đoạn này trong host. Không suy rộng sang bản 2026/2027.

## Cú pháp đang dùng

```csharp
public PromptSelectionResult GetSelection(
    PromptSelectionOptions options, SelectionFilter filter);
```

Đây là overload hai đối số, phù hợp với ví dụ dưới; không trộn với chữ ký chỉ nhận `SelectionFilter`. [Chữ ký Autodesk 2022](https://help.autodesk.com/cloudhelp/2022/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_Editor_GetSelection_PromptSelectionOptions_SelectionFilter.html).

## Ví dụ có ngữ cảnh

Helper nằm trong class DLL, được command tương tác gọi với `doc.Editor` của document hiện hành. Mảng ID trả về chỉ có ý nghĩa trong database của document đó; chưa mở các entity để đọc hình học.

```csharp
using System;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;

static ObjectId[] SelectLines(Editor ed)
{
    var options = new PromptSelectionOptions
    {
        MessageForAdding = "\nChọn các LINE: "
    };
    var filter = new SelectionFilter(new[]
    {
        new TypedValue((int)DxfCode.Start, "LINE")
    });
    PromptSelectionResult result = ed.GetSelection(options, filter);
    if (result.Status != PromptStatus.OK || result.Value == null)
        return Array.Empty<ObjectId>();
    return result.Value.GetObjectIds();
}
```

## Tham số, kết quả và thao tác thử

`options` đặt lời nhắc; `filter` dùng mã DXF để giới hạn loại. Chọn hai LINE và một CIRCLE, kết thúc chọn bằng Enter: mảng kỳ vọng chứa hai ID của LINE. Polyline không phải LINE nên bị loại.

Esc hoặc bất kỳ status khác `OK` trả mảng rỗng; helper chưa phân biệt hủy với lỗi khác, nên command có thể giữ `result.Status` nếu cần thông báo riêng. Không truy cập `result.Value` trước khi kiểm status.

Sau khi chọn, command mở transaction từ `doc.Database`, gọi `GetObject(id, ForRead)` và vẫn kiểm `is Line`. ID có thể mất hiệu lực nếu đối tượng bị xóa trước lần dùng sau. Không giữ selection set làm dữ liệu bền vững giữa các phiên DWG.
