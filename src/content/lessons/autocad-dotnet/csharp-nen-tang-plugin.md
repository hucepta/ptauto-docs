---
{
  "id": "lesson.autocad-dotnet.csharp-nen-tang-plugin",
  "slug": "csharp-nen-tang-plugin",
  "title": "C# cho plugin",
  "description": "Từ class và collection đến DLL có reference đúng phiên bản và quy trình debug trong host.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.csharp-cho-cad",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.autocad-dotnet.transaction"
  ],
  "exampleIds": [
    "example.autocad-dotnet.thong-ke-line-layer"
  ],
  "examplePlacements": [
    {
      "heading": "collection-generic-và-linq",
      "exampleIds": [
        "example.autocad-dotnet.thong-ke-line-layer"
      ]
    }
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Microsoft — C# classes",
      "url": "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes"
    },
    {
      "title": "Microsoft — Collections and Data Structures",
      "url": "https://learn.microsoft.com/en-us/dotnet/standard/collections/"
    },
    {
      "title": "Microsoft — Generics in .NET",
      "url": "https://learn.microsoft.com/en-us/dotnet/standard/generics/"
    },
    {
      "title": "Microsoft — Introduction to LINQ Queries",
      "url": "https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries"
    },
    {
      "title": "Microsoft — Exception Handling",
      "url": "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/exception-handling"
    },
    {
      "title": "Autodesk — About Managed .NET Compatibility (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Microsoft — Attach to running processes with the debugger",
      "url": "https://learn.microsoft.com/en-us/visualstudio/debugger/attach-to-running-processes-with-the-visual-studio-debugger?view=vs-2022"
    }
  ],
  "tags": [
    "C#",
    "DLL",
    "LINQ"
  ],
  "searchableTerms": [
    "class",
    "generic",
    "Dictionary",
    "List",
    "NETLOAD",
    "PDB",
    "AcDbMgd"
  ],
  "illustration": "terminal"
}
---

## Kiểu dữ liệu và class

C# kiểm tra kiểu khi biên dịch. Dùng `double` cho chiều dài, `int` cho số lượng và `string` cho tên layer. Một class mô tả dữ liệu cùng hành vi; object là một thể hiện của class. Hai biến tham chiếu cùng object có thể nhìn thấy cùng thay đổi. Vì vậy, báo cáo nên lưu giá trị đã đọc, tránh giữ entity đang mở.

Một class `LineSnapshot` chứa tên layer và chiều dài giúp tách tính toán khỏi AutoCAD. Constructor nhận hai giá trị này; property chỉ đọc giữ dữ liệu ổn định trong bước tổng hợp. Đó là một ranh giới dễ debug.

## Collection, generic và LINQ

`List<LineSnapshot>` gom các dòng báo cáo; `Dictionary<string, int>` tra số lượng theo layer. Tham số generic giới hạn kiểu phần tử, giúp phát hiện việc thêm nhầm chuỗi vào danh sách chiều dài trước khi chạy.

LINQ có thể lọc, nhóm và tính tổng trên dữ liệu đã đọc. Với hai LINE dài 3 và 4 trên layer A, nhóm A có số lượng 2 và tổng 7. Nhiều truy vấn thực thi khi được duyệt; hãy vật chất hóa dữ liệu cần dùng trước khi transaction đóng. Đừng đưa lời gọi `GetObject` vào một truy vấn rồi trả truy vấn đó ra ngoài transaction.

## Exception và tài nguyên

Người dùng nhấn Esc là trạng thái input, không phải lỗi thiết kế. Kiểm tra `PromptStatus` trước khi dùng giá trị. Exception từ API cần được báo cùng thao tác đang thực hiện; không dùng `catch` rỗng để in kết quả thành công. `using` giải phóng transaction và buffer ngay cả khi có exception. Dữ liệu của bản vẽ do host quản lý, nên không tự `Dispose` Document hay Database đang hoạt động.

## Project, DLL và reference

Solution chứa các project; class library tạo assembly DLL được host nạp. Mẫu ở đây chọn SDK AutoCAD 2025 và .NET 8 theo bảng tương thích Autodesk. Dùng target `net8.0-windows`, x64 và reference `AcCoreMgd.dll`, `AcDbMgd.dll`, `AcMgd.dll` đúng SDK; đặt Copy Local thành False cho thư viện host.

## Debug và thực hành

Build cấu hình Debug, giữ PDB đi cùng DLL, mở bản vẽ thử và dùng `NETLOAD`. Attach debugger vào đúng tiến trình `acad.exe`, đặt breakpoint trước selection rồi xem status, ObjectId và danh sách snapshot. Ví dụ thống kê LINE đi kèm minh họa cả class, generic và LINQ.

Thử hai layer, lựa chọn rỗng và Esc. Ghi phiên bản host, SDK, tên lệnh và kết quả quan sát. Khi thay DLL đã nạp, khởi động lại host để tránh kiểm tra nhầm assembly cũ.
