---
{
  "id": "project.civil3d-dotnet.buoi-dau-kiem-ke-alignment",
  "slug": "buoi-dau-kiem-ke-alignment",
  "title": "Đếm Alignment trong bản vẽ mới",
  "description": "Đọc số Alignment trên bản vẽ mới và so với Prospector để kiểm tra đúng CivilDocument.",
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
  "expectedResult": "DWG thử không có Alignment trả So Alignment: 0; Prospector xác nhận collection rỗng và nhật ký có đúng host Civil 3D.",
  "prerequisites": [
    "lesson.civil3d-dotnet.chuan-bi-cong-cu"
  ],
  "conceptIds": [
    "concept.civil3d-dotnet.term-full-civil-host"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---
## Điều kiện và đầu vào

Hoàn thành [chuẩn bị Civil 3D đầy đủ](/hoc/civil3d-dotnet/chuan-bi-cong-cu/), giữ project PtaCivilFirst và lệnh PTA_CIVIL_READY của bài đó. Không dùng AutoCAD thường hay chỉ Object Enabler. Dự án này luyện kiểm chứng một kết quả 0 trước khi đếm đối tượng thật.

## Từng bước thực hiện

1. Nhấn Windows, mở **Visual Studio 2022**, chọn **Open a project or solution** và mở PtaCivilFirst. Kiểm tra Dependencies chứa references của đúng Civil 3D 2025. Chọn **Build > Build Solution**, ghi đường dẫn DLL và kết quả build.
2. Nhấn Windows, mở **Civil 3D 2025** từ đúng biểu tượng. Tại Start chọn **New**, dùng template thử. Ctrl+S lưu **alignment-rong.dwg** trong PTAutoHoc.
3. Nhấn Ctrl+9, gõ **SHOWTS**, Enter. Trong Toolspace chọn **Prospector**, mở rộng tên DWG và **Alignments**. Kiểm tra các nhánh Alignment của DWG chưa có đối tượng; không dùng DWG mẫu có tuyến sẵn rồi kỳ vọng 0.
4. Tại Command Line, gõ **NETLOAD**, chọn DLL vừa build. Gõ **PTA_CIVIL_READY**, Enter. Mở F2 và ghi dòng **So Alignment: 0**.
5. Trong nhật ký, lập hai dòng: quan sát Prospector không có Alignment; API GetAlignmentIds().Count bằng 0. Lưu DWG bằng Ctrl+S và ghi chú bằng trình soạn thảo của bạn.

## Nghiệm thu

File DWG mở lại bằng Ctrl+O vẫn không có Alignment và lệnh vẫn trả 0 trong cùng môi trường phù hợp. Nhật ký ghi đầy đủ tên Civil 3D, năm, target .NET và đường dẫn DLL. Không suy từ việc LINE vẽ được rằng Civil API đã hoạt động.

Nếu số khác 0, kiểm tra đang đứng ở đúng tab DWG và template có dữ liệu sẵn hay không. Nếu thiếu AeccDbMgd, kiểm tra host và references trước; không chép DLL Civil vào AutoCAD thường. Nếu build thành công nhưng nạp lỗi, giữ hai kết quả riêng để điều tra. Muốn thử dữ liệu có tuyến, dùng bản sao và tiếp tục bài tạo Alignment sau khi bài đầu đã đạt.
