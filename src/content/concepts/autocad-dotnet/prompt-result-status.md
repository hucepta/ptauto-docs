---
{
  "id": "concept.autocad-dotnet.prompt-result-status",
  "slug": "prompt-result-status",
  "title": "PromptResult.Status",
  "description": "Trạng thái lời nhắc",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PromptResult.Status",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_PromptResult_Status.html"
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
    "PromptResult.Status"
  ]
}
---

## Cú pháp

```csharp
public PromptStatus Status;
```

## Tham số và kết quả

Không có tham số; PromptStatus là kết quả tương tác.

## Ví dụ

Trạng thái lời nhắc. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `result` là kết quả của lời nhắc Editor tương ứng; luôn xét Status trước khi lấy dữ liệu.

```csharp
if (result.Status != PromptStatus.OK) return;
```

## Lỗi thường gặp

Esc là Cancel, không dùng Value/ObjectId của kết quả bị hủy.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
