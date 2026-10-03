---
{
  "id": "concept.autocad-dotnet.selection-set-count",
  "slug": "selection-set-count",
  "title": "SelectionSet.Count",
  "description": "Số entity trong selection",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — SelectionSet.Count",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_SelectionSet_Count.html"
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
    "SelectionSet.Count"
  ]
}
---

## Cú pháp

```csharp
public abstract int Count;
```

## Tham số và kết quả

Không có tham số; int là số phần tử tập chọn.

## Ví dụ

Số entity trong selection. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `selection` là `result.Value` sau khi Editor.GetSelection trả PromptStatus.OK.

```csharp
ed.WriteMessage($"\nSố chọn: {selection.Count}");
```

## Lỗi thường gặp

Count không phải số đỉnh hay số attribute của block.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
