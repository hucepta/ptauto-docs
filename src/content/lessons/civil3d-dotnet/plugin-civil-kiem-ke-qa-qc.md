---
{
  "id": "lesson.civil3d-dotnet.plugin-civil-kiem-ke-qa-qc",
  "slug": "plugin-civil-kiem-ke-qa-qc",
  "title": "Plugin Civil: kiểm kê, validation và QA/QC",
  "description": "Tổ chức plugin chỉ đọc, ghi tình trạng thiết kế và tách rebuild khỏi bước kiểm tra hiện trạng.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.plugin-qa-qc",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.corridor-ha-tang-quantity"
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
  "examplePlacements": [],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — Add Library References in the Reference Manager (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Autodesk — Using Collections Within the Document Object (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-5676A992-E881-4467-A1A7-4412425B5F36.htm"
    },
    {
      "title": "Autodesk — Surface Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/920bd60e-abec-8757-d031-b9acc5d4753a.htm"
    },
    {
      "title": "Autodesk — Guidelines for Event Handlers (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-FE7D58D5-28A0-4C98-A876-D4D48F06D0B2.htm"
    },
    {
      "title": "Autodesk — About Using the Object Enabler (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-UserGuide/files/GUID-14B478FB-81E2-44A5-808C-5546D61B5697.htm"
    },
    {
      "title": "Autodesk — StationOffset(Double, Double, ref Double, ref Double)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm"
    },
    {
      "title": "Autodesk — FindElevationAtXY Method",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
    }
  ],
  "tags": [
    "plugin",
    "QA/QC"
  ],
  "searchableTerms": [
    "validation",
    "rebuild",
    "events",
    "QA/QC",
    "data reference",
    "performance",
    "logging",
    "Dynamo",
    "Python"
  ]
}
---

## Xác định phạm vi kiểm kê

Plugin QA/QC cần chỉ rõ object được kiểm tra, quy tắc và bằng chứng. Bước đầu đọc Alignment, Surface và Corridor trong DWG hiện tại, ghi tên, loại và số lượng. Lệnh `PTA_CIVIL_INVENTORY` làm đúng phạm vi này; nó chưa xác nhận mọi quan hệ thiết kế, trạng thái data reference hay khối lượng.

Đối chiếu các nhóm với Prospector. Khi một nhóm rỗng, báo “không có đối tượng”; khi API phát lỗi, báo nhóm thất bại. Phân biệt hai thông báo.

## Dependency và validation

Mẫu chọn Civil 3D 2025/.NET 8 với thư viện AutoCAD và Civil đúng phiên bản. Chạy trong Civil 3D đầy đủ; AutoCAD thường hoặc Object Enabler không được dùng làm bằng chứng nghiệm thu Civil API. Ghi assembly tham chiếu và build host để chẩn đoán dependency.

Trước kiểm tra sâu, xác nhận Document/Database khớp nhau, ObjectId còn hợp lệ, kiểu object đúng và collection không rỗng. Quy tắc nghiệp vụ nên có mã và mô tả riêng: thiếu profile cần dùng, surface không phủ điểm kiểm tra, region chưa có target. Tên object không phải khóa ổn định giữa các DWG.

## Update, rebuild và events

Thay đổi nguồn có thể làm dữ liệu phụ thuộc cần cập nhật. Với Surface, `Rebuild` xử lý lại các thao tác trong definition; nó là thao tác thay đổi mô hình, không phải một phép kiểm tra miễn phí. Corridor cũng có workflow cập nhật đầu vào và rebuild cần đánh giá riêng.

Lưu trạng thái trước khi đề xuất rebuild. Nếu người vận hành quyết định cập nhật trên bản sao DWG, chạy lại báo cáo sau đó và so sánh. Handler event chỉ ghi nhận cần kiểm tra, không hỏi input hoặc rebuild liên tục ngay trong callback. Hủy đăng ký event khi Document hoặc plugin kết thúc vòng đời.

## Hiệu năng và báo cáo QA/QC

Đọc một lần trong transaction, lấy snapshot rồi phân tích ngoài phạm vi wrapper. Tránh gọi inquiry hoặc rebuild cho mỗi item chỉ để đếm. Gom báo cáo theo nhóm và phân biệt cảnh báo với lỗi làm mất kết quả. Log lỗi chứa giai đoạn, object liên quan và exception; báo cáo người dùng dùng tên, giá trị và cách đối chiếu.

Một kiểm tra cao độ ghi X/Y và tên surface; một kiểm tra station/offset ghi Alignment và quy ước dấu. Những dữ liệu này cho phép người khác lặp lại inquiry trong host.

## Thực hành và hướng mở rộng

Thực hiện [project kiểm kê Civil](../../../du-an/civil3d-dotnet/kiem-ke-civil-qa-qc/) trên DWG rỗng, DWG có dữ liệu và hai Document. Kiểm tra Esc ở các lệnh inquiry, điểm ngoài miền TIN và lỗi dependency. Ghi kết quả chạy thực tế trước khi công bố hỗ trợ. Mở rộng cọc, profile, trắc ngang, nút giao hoặc Dynamo/Python từ snapshot có schema rõ; từng chức năng cần dữ liệu thử và tiêu chí riêng.
