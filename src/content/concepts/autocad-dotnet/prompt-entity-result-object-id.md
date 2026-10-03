---
{
  "id": "concept.autocad-dotnet.prompt-entity-result-object-id",
  "slug": "prompt-entity-result-object-id",
  "title": "PromptEntityResult.ObjectId",
  "description": "ID entity được chọn",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PromptEntityResult.ObjectId",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_PromptEntityResult_ObjectId.html"
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
    "PromptEntityResult.ObjectId"
  ]
}
---

## Cú pháp

```csharp
public Autodesk.AutoCAD.DatabaseServices.ObjectId ObjectId;
```

## Tham số và kết quả

Không có tham số; ObjectId của entity được chọn.

## Ví dụ

ID entity được chọn. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `result` là kết quả của lời nhắc Editor tương ứng; luôn xét Status trước khi lấy dữ liệu.

```csharp
if (result.Status == PromptStatus.OK) { var obj = tr.GetObject(result.ObjectId, OpenMode.ForRead); }
```

## Lỗi thường gặp

Kiểm tra kiểu object sau GetObject, không cast mù.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
