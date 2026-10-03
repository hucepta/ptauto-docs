---
{
  "id": "lesson.autocad-dotnet.object-model-transaction",
  "slug": "object-model-transaction",
  "title": "Object Model, Database và Transaction",
  "description": "Theo dấu ObjectId từ lệnh đến entity, hiểu sự khác nhau giữa đọc, tạo và sửa dữ liệu.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.plugin-transaction",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.csharp-nen-tang-plugin"
  ],
  "conceptIds": [
    "concept.autocad-dotnet.objectid",
    "concept.autocad-dotnet.transaction"
  ],
  "exampleIds": [
    "example.autocad-dotnet.thong-ke-line-layer"
  ],
  "examplePlacements": [
    {
      "heading": "đọc-và-kiểm-tra-kết-quả",
      "exampleIds": [
        "example.autocad-dotnet.thong-ke-line-layer"
      ]
    }
  ],
  "exerciseIds": [
    "exercise.autocad-dotnet.thong-ke-line"
  ],
  "sources": [
    {
      "title": "Autodesk — Command Definition (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    },
    {
      "title": "Autodesk — Work With ObjectIds (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-8D56532D-2B17-48D1-8C81-B4AD89603A1C.htm"
    },
    {
      "title": "Autodesk — Use Transactions to Access and Create Objects (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    }
  ],
  "tags": [],
  "searchableTerms": [
    "Application",
    "Document",
    "Editor",
    "Database",
    "DBObject",
    "Entity",
    "BlockTableRecord",
    "Symbol Table",
    "AppendEntity",
    "ForWrite"
  ]
}
---

## Lệnh và mô hình đối tượng

`CommandMethod` gắn tên lệnh AutoCAD với public method không nhận tham số. `Application.DocumentManager` quản lý các tài liệu; Document chứa Editor để giao tiếp và Database để truy cập dữ liệu. `DBObject` là lớp nền của đối tượng database; `Entity` đại diện đối tượng đồ họa như Line, Circle và Polyline.

Database chứa cả entity lẫn dữ liệu có tên. `BlockTable` là bảng block; từng `BlockTableRecord` chứa entity của block, Model space hoặc Paper space. Các Symbol Table khác chứa layer, linetype và text style. Chọn đúng record trước khi đọc hay thêm entity.

## ObjectId và vòng đời mở đối tượng

ObjectId là định danh để mở đối tượng trong database đang được nạp. Nó khác object C# đang cầm và khác Handle lưu trong DWG. Không lưu ObjectId như khóa lâu dài trong file báo cáo. Trong một transaction, gọi `GetObject(id, OpenMode.ForRead)`, kiểm tra kiểu rồi đọc property. Khi transaction kết thúc, giữ các giá trị snapshot cần thiết, không giữ wrapper để tiếp tục đọc.

## Đọc và kiểm tra kết quả

Ví dụ thống kê LINE lấy ObjectId từ selection, mở từng Line ở chế độ đọc rồi sao chép layer và chiều dài. Hai đường nối các điểm (0,0)–(3,0) và (0,0)–(0,4) cho tổng 7 đơn vị bản vẽ. Báo cáo không gọi `ForWrite`, nên không cần tạo thay đổi để có kết quả.

Một transaction chỉ đọc vẫn cần kết thúc bằng `using`. Không gọi `Commit` không làm mất dữ liệu vốn có; mẫu không tạo dữ liệu mới.

## Tạo và sửa có phạm vi

Để tạo Circle trong bản vẽ thử, mở record đích `ForWrite`, tạo Circle với tâm và bán kính hợp lệ, gọi `AppendEntity`, đăng ký bằng `AddNewlyCreatedDBObject`, rồi `Commit`. Chỉ tạo object trong bộ nhớ chưa làm nó xuất hiện trong database. Transaction chịu trách nhiệm đăng ký object mới; object tạm chưa chuyển quyền sở hữu phải được giải phóng.

Để đổi layer một entity đã chọn, kiểm tra layer đích tồn tại trong LayerTable, mở đúng entity `ForWrite`, gán property rồi commit. Không nâng toàn bộ selection sang chế độ ghi khi chỉ một entity cần thay đổi.

## Sai sót và bài thực hành

Nhầm Database giữa hai Document khiến ObjectId không còn thuộc phạm vi mong đợi. Nhầm Model space với CurrentSpaceId cũng làm báo cáo đếm sai khu vực. Hãy ghi rõ phạm vi selection, database và record trong thiết kế lệnh.

Chạy mẫu trên bản vẽ có LINE và CIRCLE; filter chỉ lấy LINE. Sau đó thử Esc, chuyển sang Paper space và chạy lại. Với bài tập tạo/sửa, dùng bản sao DWG, đối chiếu số entity trước/sau và thử Undo. Biên dịch thành công cần được bổ sung bằng kiểm tra thực tế trong host tương ứng.
