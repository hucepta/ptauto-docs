---
{
  "id": "concept.autocad-dotnet.commandmethod",
  "slug": "commandmethod",
  "title": "[CommandMethod]",
  "description": "Đăng ký một phương thức C# thành lệnh gọi trong AutoCAD.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Runtime_CommandMethodAttribute_CommandMethodAttribute_string.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```csharp
[CommandMethod("PTA_REPORT")]
public static void Report() { /* ... */ }
```

## Tham số và kết quả

Chuỗi là tên lệnh; có thể kèm CommandFlags theo ngữ cảnh. Khi NETLOAD nạp assembly, AutoCAD có thể gọi phương thức public static bằng tên lệnh.

## Cách dùng

Tách điểm vào lệnh khỏi hàm đọc dữ liệu và lõi tính toán.

```csharp
[CommandMethod("PTA_HELLO")]
public static void Hello() => Application.DocumentManager.MdiActiveDocument.Editor.WriteMessage("\nHELLO");
```

## Kiểm tra khi áp dụng

Đừng coi build thành công là bằng chứng lệnh đã chạy trong host.
