---
{
  "id": "concept.autocad-dotnet.transaction",
  "slug": "transaction",
  "title": "Transaction",
  "description": "Phạm vi mở object và commit hoặc rollback thay đổi của Database.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.autocad-dotnet.objectid",
    "concept.autocad-dotnet.documentlock"
  ],
  "exampleIds": [
    "example.autocad-dotnet.thong-ke-line-layer"
  ],
  "examplePlacements": [
    {
      "heading": "cách-dùng",
      "exampleIds": [
        "example.autocad-dotnet.thong-ke-line-layer"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — Use Transactions to Access and Create Objects (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    },
    {
      "title": "Autodesk — Lock and Unlock a Document (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-A2CD7540-69C5-4085-BCE8-2A8ACE16BFDD.htm"
    }
  ],
  "aliases": [
    "giao dịch database"
  ],
  "tags": [],
  "searchableTerms": [
    "Commit",
    "rollback",
    "ForRead",
    "ForWrite",
    "AddNewlyCreatedDBObject"
  ]
}
---

## Định nghĩa

Transaction quản lý việc mở DBObject trong một Database và kết thúc phạm vi truy cập. GetObject mở đối tượng ForRead hoặc ForWrite; Commit chấp nhận các thay đổi. Khi transaction có thay đổi bị kết thúc mà không commit, các thay đổi đó được rollback.

## Cách dùng

Đặt transaction trong `using`. Mở ForRead cho báo cáo, kiểm tra kiểu, rồi lấy giá trị. Wrapper được transaction quản lý; dữ liệu trả ra nên là chuỗi, số hoặc class snapshot không phụ thuộc object đang mở.

Ví dụ thống kê LINE đọc từng chiều dài và layer rồi nhóm snapshot sau transaction. Phần tổng hợp không cần giữ Line hay Database nên dễ kiểm tra công thức tổng.

## Tạo, sửa và sai sót

Tạo entity cần thêm vào BlockTableRecord đích và đăng ký object mới với transaction; chỉ gọi constructor chưa thêm entity vào DWG. Mở ghi đúng object cần sửa, không mở toàn bộ database ForWrite.

Transaction không thay DocumentLock ở modeless UI hoặc khi sửa Document khác. Nó cũng không tự chứng minh Undo sau nhiều thao tác đã đúng. Kiểm tra rollback và Undo trên bản sao DWG; không dùng Commit như dấu hiệu lệnh đọc đã tạo thay đổi.
