---
{
  "id": "concept.autocad-dotnet.selection-set-get-object-ids",
  "slug": "selection-set-get-object-ids",
  "title": "SelectionSet.GetObjectIds",
  "description": "Lấy ID từ selection",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — SelectionSet.GetObjectIds",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_SelectionSet_GetObjectIds.html"
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
    "SelectionSet.GetObjectIds"
  ]
}
---

## Cú pháp

```csharp
public abstract ObjectId\[\] GetObjectIds();
```

## Tham số và kết quả

Không có tham số; ObjectId[] để mở qua transaction.

## Ví dụ

Lấy ID từ selection. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `selection` là `result.Value` sau khi Editor.GetSelection trả PromptStatus.OK.

```csharp
foreach (ObjectId id in selection.GetObjectIds()) { var obj = tr.GetObject(id, OpenMode.ForRead); }
```

## Lỗi thường gặp

Không giữ object đã mở để đọc tiếp ngoài using transaction.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
