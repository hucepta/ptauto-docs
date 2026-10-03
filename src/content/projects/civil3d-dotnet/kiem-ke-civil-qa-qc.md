---
{
  "id": "project.civil3d-dotnet.kiem-ke-civil-qa-qc",
  "slug": "kiem-ke-civil-qa-qc",
  "title": "Plugin Civil: kiểm kê và đối chiếu QA/QC",
  "description": "Ghép kiểm kê Civil objects, tra station/offset và tra cao độ thành bộ công cụ đối chiếu hiện trạng thiết kế.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Inventory đúng tên/loại/số lượng; station/offset và cao độ TIN đối chiếu được bằng inquiry; lỗi, Esc và ngoài miền được báo riêng. Có nhật ký thử, hiện trạng được giữ và QA/QC sâu ghi rõ phạm vi.",
  "prerequisites": [
    "lesson.civil3d-dotnet.plugin-civil-kiem-ke-qa-qc"
  ],
  "conceptIds": [
    "concept.civil3d-dotnet.civildocument",
    "concept.civil3d-dotnet.station-offset",
    "concept.civil3d-dotnet.tinsurface",
    "concept.civil3d-dotnet.corridor"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.kiem-ke-doi-tuong",
    "example.civil3d-dotnet.tra-station-offset",
    "example.civil3d-dotnet.tra-cao-do-tin"
  ],
  "examplePlacements": [
    {
      "heading": "kiểm-kê-đối-tượng",
      "exampleIds": [
        "example.civil3d-dotnet.kiem-ke-doi-tuong"
      ]
    },
    {
      "heading": "đối-chiếu-tuyến-và-bề-mặt",
      "exampleIds": [
        "example.civil3d-dotnet.tra-station-offset",
        "example.civil3d-dotnet.tra-cao-do-tin"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — Add Library References in the Reference Manager (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Autodesk — Accessing Application and Document Objects (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-16B1A3F9-35F7-4703-B5FD-F2AC00E6AB57.htm"
    },
    {
      "title": "Autodesk — Using Collections Within the Document Object (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-5676A992-E881-4467-A1A7-4412425B5F36.htm"
    },
    {
      "title": "Autodesk — CivilDocument Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
    },
    {
      "title": "Autodesk — StationOffset(Double, Double, ref Double, ref Double)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm"
    },
    {
      "title": "Autodesk — Modifying Stations with Station Equations",
      "url": "https://help.autodesk.com/cloudhelp/2021/ENU/Civil3D-DevGuide/files/GUID-F23CC3E9-C29D-4B98-90A2-604C3D8BDC81.htm"
    },
    {
      "title": "Autodesk — FindElevationAtXY Method",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
    },
    {
      "title": "Autodesk — Surface Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/920bd60e-abec-8757-d031-b9acc5d4753a.htm"
    },
    {
      "title": "Autodesk — Listing Baselines in a Corridor (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-9CD5C53D-3DA6-454F-8A0B-190E10B9E283.htm"
    },
    {
      "title": "Autodesk — Guidelines for Event Handlers (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-FE7D58D5-28A0-4C98-A876-D4D48F06D0B2.htm"
    },
    {
      "title": "Autodesk — About Using the Object Enabler (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-UserGuide/files/GUID-14B478FB-81E2-44A5-808C-5546D61B5697.htm"
    }
  ],
  "tags": [
    "Civil 3D",
    "QA/QC",
    "project"
  ],
  "searchableTerms": [
    "PTA_CIVIL_INVENTORY",
    "PTA_STATION_OFFSET",
    "PTA_TIN_ELEVATION",
    "validation",
    "rebuild",
    "dependency"
  ]
}
---

## Mục tiêu và giới hạn dữ liệu

Tạo bộ command đọc hiện trạng Civil 3D: PTA_CIVIL_INVENTORY liệt kê Alignment, Surface, Corridor; PTA_STATION_OFFSET tra vị trí theo tuyến; PTA_TIN_ELEVATION đọc cao độ TIN. Kết quả phục vụ người kiểm tra đối chiếu trong Prospector và inquiry.

Kiểm kê tên/loại chưa phải chứng nhận QA/QC toàn thiết kế. Project tách dữ liệu đã đọc, quy tắc cần kiểm tra và kết quả đối chiếu. Không rebuild hoặc sửa object trong bước thu thập ban đầu, để giữ bằng chứng về trạng thái mô hình đang được kiểm tra.

## Chuẩn bị dependency và host

Mẫu nhắm Civil 3D 2025, Windows x64, .NET 8. Tạo class library target `net8.0-windows`; dùng các reference đúng SDK/cài đặt Civil 2025: `AcCoreMgd.dll`, `AcDbMgd.dll`, `AcMgd.dll`, `AecBaseMgd.dll`, `AeccDbMgd.dll`. Đặt Copy Local thành False. Các chức năng Pressure Network hoặc UI có thể cần thư viện khác; chưa thêm chúng vào project này.

Build DLL với ba nguồn C# đi kèm, giữ PDB, rồi NETLOAD trong Civil 3D đầy đủ. Ghi build host và thư viện tham chiếu. AutoCAD thường có Object Enabler không được dùng thay môi trường nghiệm thu CivilDocument. Nếu DLL chưa nạp và command chưa đăng ký, chẩn đoán dependency trước khi kiểm tra collection. Tài liệu chưa có kết quả build hoặc host của các nguồn này.

## Kiểm kê đối tượng

Chạy inventory trên DWG rỗng: mỗi nhóm cần có số lượng 0. Chạy trên bản vẽ có hai Alignment, một TinSurface và một Corridor: đối chiếu tên và số lượng 2/1/1 trong Prospector. Surface khác TIN vẫn phải được inventory ghi đúng loại; lệnh cao độ riêng chỉ nhận TinSurface.

Source lấy CivilDocument từ Database của Document hiện tại, mở các ID ForRead rồi lưu dòng báo cáo dạng chuỗi. Không đưa wrapper Civil object ra khỏi transaction. Mở hai DWG khác nhau và chuyển tab giữa lần chạy để kiểm tra phạm vi.

## Đối chiếu tuyến và bề mặt

Với Alignment thẳng (0,0)–(100,0), station đầu 0 và không có equation, tra (50,0), (50,10), (50,−10). Đối chiếu station 50, offset 0 hoặc độ lớn 10 cùng quy ước dấu. Chạy lại trên tuyến có station equation bằng một bản sao riêng; ghi giá trị API và lý trình hiển thị, tránh gộp hai cách biểu diễn.

Với TIN gồm (0,0,10), (10,0,20), (0,10,10), point (2,3) cần cao độ 12. Tra ngoài miền và nhấn Esc ở các bước input để kiểm tra thông báo riêng. Mẫu không đổi definition hoặc tự rebuild khi điểm thiếu dữ liệu.

## Tổ chức quy tắc QA/QC

Lập bảng quy tắc: C01 xác nhận Profile cần dùng thuộc đúng Alignment; S01 kiểm tra điểm khảo sát nằm trong miền surface; R01 kiểm tra baseline/region, Assembly và target của Corridor. Ghi object liên quan, giá trị đầu vào và cách đối chiếu. Trong phạm vi mã đi kèm, S01 có inquiry cụ thể; C01/R01 cần đối chiếu UI hoặc module đọc được phát triển và thử riêng.

Phân biệt cảnh báo dữ liệu thiếu với lỗi API khiến báo cáo không hoàn thành. Baseline FeatureLine cần nhánh kiểm tra riêng, không mặc định có Alignment/Profile ID. Một Corridor hiện tên trong inventory chưa bảo đảm region liên tục hoặc targets đầy đủ.

## Cập nhật và nghiệm thu

Lưu báo cáo trước cập nhật. Khi người vận hành cần rebuild, thực hiện trên bản sao DWG, ghi các thao tác, rồi chạy lại bộ đọc để so sánh. Event handler chỉ ghi nhận cần kiểm tra; tránh inquiry tương tác hoặc rebuild lặp ngay trong callback.

Nhật ký thử cần host/SDK, DWG, command, input, expected, observed và exception nếu có. Nghiệm thu gồm DWG rỗng, có dữ liệu, hai Document, sai kiểu, Esc và điểm ngoài phạm vi. Bàn giao nguồn, cấu hình reference, dữ liệu thử và báo cáo; chỉ xác nhận những chức năng và phiên bản đã chạy thực tế.
