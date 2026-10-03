---
{
  "id": "concept.autocad-dotnet.document-editor",
  "slug": "document-editor",
  "title": "Document.Editor",
  "description": "Editor của tài liệu",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Document.Editor",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_ApplicationServices_Document_Editor.html"
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
    "Document.Editor"
  ]
}
---

## Cú pháp

```csharp
public Autodesk.AutoCAD.EditorInput.Editor Editor;
```

## Tham số và kết quả

Không có tham số; Editor dùng cho input/output của document.

## Ví dụ

Editor của tài liệu. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `doc` là `Application.DocumentManager.MdiActiveDocument`; bỏ qua lệnh nếu giá trị null.

```csharp
var ed = doc.Editor;
```

## Lỗi thường gặp

Không coi Editor là cha của Database; cả hai là dịch vụ của Document.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
