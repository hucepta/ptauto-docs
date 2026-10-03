---
{
  "id": "concept.autocad-dotnet.prompt-point-result-value",
  "slug": "prompt-point-result-value",
  "title": "PromptPointResult.Value",
  "description": "Điểm người dùng chọn",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PromptPointResult.Value",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_PromptPointResult_Value.html"
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
    "PromptPointResult.Value"
  ]
}
---

## Cú pháp

```csharp
public Point3d Value;
```

## Tham số và kết quả

Không có tham số; Point3d chỉ dùng khi Status OK.

## Ví dụ

Điểm người dùng chọn. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `result` là kết quả của lời nhắc Editor tương ứng; luôn xét Status trước khi lấy dữ liệu.

```csharp
if (result.Status == PromptStatus.OK) { var p = result.Value; }
```

## Lỗi thường gặp

Đừng tiếp tục tạo entity khi người dùng đã hủy.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
