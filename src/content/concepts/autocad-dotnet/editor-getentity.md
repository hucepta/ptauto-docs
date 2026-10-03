---
{
  "id": "concept.autocad-dotnet.editor-getentity",
  "slug": "editor-getentity",
  "title": "Editor.GetEntity",
  "description": "Yêu cầu người dùng chọn một đối tượng trong bản vẽ.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Editor.GetEntity",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_Editor_GetEntity_PromptEntityOptions.html"
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
public PromptEntityResult GetEntity(
    PromptEntityOptions options
);
```

## Cách gọi

```csharp
PromptEntityResult result = editor.GetEntity(options);
```

## Tham số và kết quả

options là PromptEntityOptions: lời nhắc và loại được phép chọn. Trả ObjectId cùng PromptStatus; chỉ dùng ObjectId khi Status == OK.

## Cách dùng

Chọn một Alignment/LINE trước khi mở object trong transaction.

```csharp
var opt = new PromptEntityOptions("\nChọn LINE: ");
opt.AddAllowedClass(typeof(Line), true);
var result = doc.Editor.GetEntity(opt);
if (result.Status != PromptStatus.OK) return;
```

## Kiểm tra khi áp dụng

Cancel hoặc chọn sai loại là nhánh bình thường, không phải lỗi cần commit.
