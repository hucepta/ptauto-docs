---
{
  "id": "concept.civil3d-dotnet.loi-khoi-dong-civil-host",
  "slug": "loi-khoi-dong-civil-host",
  "title": "Thiếu AeccDbMgd hoặc chưa đúng host Civil",
  "description": "Xác định sản phẩm đang chạy và references đúng năm thay vì chép DLL Civil sang AutoCAD thường.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — Civil 3D 2025: library references",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Autodesk — làm quen Toolspace",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-Tutorials/files/GUID-E20E87D2-1F6B-4BF7-A708-3156ED5F034B.htm"
    },
    {
      "title": "Autodesk — Managed .NET Compatibility 2025",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D đầy đủ",
      "version": "2025 / .NET 8; hướng dẫn cấu hình, chưa thử host",
      "platform": "Windows x64"
    }
  ],
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.civil3d-dotnet.term-full-civil-host"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Triệu chứng

NETLOAD báo thiếu AeccDbMgd, lệnh Civil không chạy hoặc bạn không tìm thấy cây dữ liệu Civil mong đợi. DWG hiển thị được không đủ kết luận đã mở đúng host.

## Từng bước kiểm tra

1. Từ Windows Start chọn biểu tượng **Civil 3D đúng năm**, mở DWG thử. Kiểm tra tên sản phẩm trong cửa sổ; acad.exe cũng có thể là tiến trình của một sản phẩm nền AutoCAD.
2. Ctrl+9, gõ **SHOWTS**, mở Toolspace > Prospector. Nếu Ribbon/workspace khác, kiểm tra workspace Civil trước; việc panel bị ẩn khác với thiếu sản phẩm.
3. Mở Visual Studio từ Start, mở solution. Kiểm tra target framework theo năm. Với Civil 3D 2025, DevGuide ghi .NET 8 và base references AcDbMgd, AcMgd, AcCoreMgd, AecBaseMgd, AeccDbMgd; Copy Local=False.
4. Build, rồi NETLOAD đúng DLL trong Civil 3D đầy đủ. Đọc lỗi đầu tiên bằng F2. Không lấy một AeccDbMgd khác năm từ Internet để lấp chỗ thiếu.

## Phạm vi kết luận

Build thành công xác nhận cấu hình biên dịch; chỉ kết quả lệnh chạy trong đúng Civil 3D mới xác nhận phép thử host đó. Làm phép thử collection rỗng trong [bài chuẩn bị](/hoc/civil3d-dotnet/chuan-bi-cong-cu/) trước khi dùng bản vẽ thiết kế.
