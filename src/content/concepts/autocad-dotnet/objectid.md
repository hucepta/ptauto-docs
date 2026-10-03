---
{
  "id": "concept.autocad-dotnet.objectid",
  "slug": "objectid",
  "title": "ObjectId",
  "description": "Định danh object trong Database đang nạp; khác Handle và wrapper DBObject.",
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
      "title": "Autodesk — Work With ObjectIds (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-8D56532D-2B17-48D1-8C81-B4AD89603A1C.htm"
    },
    {
      "title": "Autodesk — Use Transactions to Access and Create Objects (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    }
  ],
  "aliases": [
    "định danh đối tượng",
    "Object ID"
  ],
  "tags": [],
  "searchableTerms": [
    "Handle",
    "DBObject",
    "IsValid",
    "IsErased"
  ]
}
---

## Định nghĩa

ObjectId xác định một đối tượng thuộc Database đang được nạp vào bộ nhớ. Nó là đầu vào để Transaction mở DBObject, rồi kiểm tra kiểu Entity cần dùng. Một ObjectId không chứa toàn bộ property của đối tượng và không thay thế wrapper đang mở.

## Cách dùng

Selection trả ObjectId; sau khi kiểm tra kết quả chọn, dùng transaction của Document tương ứng để đọc entity. Sao chép tên layer, chiều dài hoặc Handle vào báo cáo trước khi transaction kết thúc. Nếu cần mở lại cùng object trong phiên làm việc, giữ ID cùng thông tin Database và kiểm tra nó còn hợp lệ.

Ví dụ chọn một LINE: ID dẫn đến Line; giá trị Length được đọc khi transaction còn sống. Báo cáo giữ số chiều dài, không giữ Line để đọc tiếp sau khi đóng transaction.

## Phạm vi và sai sót

ObjectId không phải khóa bền vững để trao đổi giữa phiên AutoCAD hoặc giữa hai DWG. Handle tồn tại qua các lần mở bản vẽ, nhưng vẫn cần nhận diện đúng DWG khi tra lại. Không dùng ID lấy ở Document A trong transaction của Document B. Với lựa chọn đã bị xóa hoặc bản vẽ đã đóng, dừng thao tác và yêu cầu lấy dữ liệu mới.
