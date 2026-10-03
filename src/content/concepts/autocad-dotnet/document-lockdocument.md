---
{
  "id": "concept.autocad-dotnet.document-lockdocument",
  "slug": "document-lockdocument",
  "title": "Document.LockDocument",
  "description": "Khóa Document khi mã chạy ngoài ngữ cảnh lệnh thông thường hoặc sửa tài liệu khác.",
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
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-A2CD7540-69C5-4085-BCE8-2A8ACE16BFDD.htm"
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
using (DocumentLock lockDoc = doc.LockDocument()) { /* ghi DB */ }
```

## Tham số và kết quả

doc là Document sẽ được sửa. Trả DocumentLock để giải phóng bằng Dispose.

## Cách dùng

Dùng trong modeless UI hoặc tác vụ sửa bản vẽ không phải Document hiện hành.

```csharp
using (var lockDoc = doc.LockDocument())
using (var tr = doc.Database.TransactionManager.StartTransaction()) {
  // sửa DWG
  tr.Commit();
}
```

## Kiểm tra khi áp dụng

Khóa tài liệu và transaction giải quyết hai việc khác nhau.
