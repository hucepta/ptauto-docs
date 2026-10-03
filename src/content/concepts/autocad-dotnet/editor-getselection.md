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

## Cú pháp

```csharp
public PromptSelectionResult GetSelection(
    SelectionFilter filter
);
```

## Cách gọi

```csharp
PromptSelectionResult result = editor.GetSelection(new PromptSelectionOptions(), filter);
```

## Tham số và kết quả

filter tùy chọn là bộ TypedValue theo mã DXF; kiểm result.Status. Khi OK, result.Value chứa ObjectId của các đối tượng đã chọn.

## Cách dùng

Lọc LINE trước khi làm báo cáo chiều dài.

```csharp
var filter = new SelectionFilter(new[] { new TypedValue((int)DxfCode.Start, "LINE") });
var result = doc.Editor.GetSelection(new PromptSelectionOptions(), filter);
if (result.Status != PromptStatus.OK) return;
```

## Kiểm tra khi áp dụng

Không giả định selection set khác rỗng hoặc chứa duy nhất loại entity mong muốn.
