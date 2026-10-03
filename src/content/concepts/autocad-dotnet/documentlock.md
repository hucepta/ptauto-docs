---
{
  "id": "concept.autocad-dotnet.documentlock",
  "slug": "documentlock",
  "title": "DocumentLock",
  "description": "Khóa Document trong ngữ cảnh cần sửa dữ liệu, tách khỏi Transaction.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.autocad-dotnet.transaction"
  ],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Lock and Unlock a Document (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-A2CD7540-69C5-4085-BCE8-2A8ACE16BFDD.htm"
    },
    {
      "title": "Autodesk — Command Definition (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    }
  ],
  "aliases": [
    "khóa tài liệu"
  ],
  "tags": [],
  "searchableTerms": [
    "LockDocument",
    "modeless",
    "CommandFlags.Session",
    "multi-document"
  ]
}
---

## Định nghĩa

DocumentLock giữ khóa của một Document trong thời gian thao tác. Document.LockDocument trả đối tượng khóa có thể giải phóng bằng `using`. Transaction vẫn cần thiết để mở object và commit dữ liệu; hai phạm vi này không thay thế nhau.

## Khi cần xem xét khóa

Command thông thường chạy trong Document hiện tại được host quản lý khóa. Modeless dialog, lệnh có CommandFlags.Session hoặc thao tác sửa Document khác cần khóa tường minh theo ngữ cảnh. Lấy Document đích trước khi bắt đầu, rồi dùng chính Database của tài liệu đó.

Ví dụ palette ghi dữ liệu vào DWG A trong khi người dùng đang ở DWG B: lựa chọn đích phải là A; không lấy Database từ MdiActiveDocument sau khi đã quyết định thao tác với A.

## Vòng đời và sai sót

Giữ khóa ngắn, kết thúc sau thao tác database; không giữ khóa xuyên nhiều lần bấm UI. Khi Document đóng, cache theo Document và các đăng ký event liên quan cũng cần được xử lý.

Không thêm khóa vào mọi hàm như cách chữa chung cho lock violation. Kiểm tra command context, Document đích và quyền truy cập object để tìm nguyên nhân. Thử nhiều Document và trường hợp đóng tab trước lần thao tác tiếp theo.
