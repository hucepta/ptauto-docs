---
{
  "id": "concept.autocad-dotnet.prompt-selection-result-value",
  "slug": "prompt-selection-result-value",
  "title": "PromptSelectionResult.Value",
  "description": "SelectionSet được chọn",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PromptSelectionResult.Value",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_PromptSelectionResult_Value.html"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Chữ ký theo tài liệu AutoCAD 2026; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "PromptSelectionResult.Value"
  ]
}
---

## Cú pháp

```csharp
public SelectionSet Value;
```

## Tham số và kết quả

Không có tham số; SelectionSet chỉ hợp lệ khi Status OK.

## Ví dụ

SelectionSet được chọn. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `result` là kết quả của lời nhắc Editor tương ứng; luôn xét Status trước khi lấy dữ liệu.

```csharp
if (result.Status == PromptStatus.OK) ed.WriteMessage($"\nChọn: {result.Value.Count}");
```

## Lỗi thường gặp

SelectionSet không chứa trực tiếp wrapper DBObject.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
