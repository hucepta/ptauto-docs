---
{
  "id": "lesson.civil3d-dotnet.corridor-ha-tang-quantity",
  "slug": "corridor-ha-tang-quantity",
  "title": "Corridor và hạ tầng",
  "description": "Hiểu baseline/region/assembly, corridor surface, Grading và dữ liệu cần kiểm tra trước khi tính quantity.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.corridor-va-ha-tang",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.tinsurface-sampleline-section"
  ],
  "conceptIds": [
    "concept.civil3d-dotnet.corridor",
    "concept.civil3d-dotnet.tinsurface"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.kiem-ke-doi-tuong"
  ],
  "examplePlacements": [],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — About Corridor Modelling",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENG/Civil3D-UserGuide/files/GUID-F2246A0B-809E-4801-97A5-EFACFA05EE46.htm"
    },
    {
      "title": "Autodesk — Listing Baselines in a Corridor (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-9CD5C53D-3DA6-454F-8A0B-190E10B9E283.htm"
    },
    {
      "title": "Autodesk — About Creating Corridors (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-UserGuide/files/GUID-0D1D3FE9-4AE4-4298-B587-BEACD687CC70.htm"
    },
    {
      "title": "Autodesk — About Corridor Surface Boundaries",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-UserGuide/files/GUID-4B0FFB8E-B3BB-4943-AB39-EAA77C431C13.htm"
    },
    {
      "title": "Autodesk — About Grading",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/Civil3D-UserGuide/files/GUID-3E75D600-B442-4C78-8DCC-C649E1ED1F87.htm"
    },
    {
      "title": "Autodesk — About Pipe Networks",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-UserGuide/files/GUID-00D56FD1-BAF4-44A2-B7E6-EE5093F053E2.htm"
    },
    {
      "title": "Autodesk — About Pressure Networks",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/Civil3D-UserGuide/files/GUID-41385B68-76F9-4EF0-B49F-7A07BB54054B.htm"
    }
  ],
  "tags": [
    "hạ tầng",
    "quantity"
  ],
  "searchableTerms": [
    "Corridor",
    "baseline",
    "region",
    "Assembly",
    "Subassembly",
    "corridor surface",
    "FeatureLine",
    "Grading",
    "Pipe Network",
    "Pressure Network",
    "quantity"
  ],
  "illustration": "profile"
}
---
## Corridor và các đầu vào

Corridor liên kết hình học dọc với mặt cắt điển hình để tạo mô hình hạ tầng. Baseline có thể dùng Alignment/Profile hoặc FeatureLine; region chọn khoảng station và Assembly áp dụng. Assembly gồm các Subassembly mô tả bộ phận như làn, lề hoặc rãnh, cùng tham số và target.

Với tuyến 0–300, region 0–100 dùng mặt cắt A và 100–300 dùng mặt cắt B. Kiểm tra khoảng trống, chồng region, target và tần suất áp Assembly tại đoạn chuyển tiếp. Đối chiếu đầu vào và trạng thái cập nhật trong Prospector.

## Hình học và corridor surface

Point, link và shape codes mang ý nghĩa thành phần của mặt cắt. Corridor surface được tạo từ các codes hoặc feature lines được chọn; boundary giới hạn miền tam giác phù hợp. Nếu nối hai dải có khoảng trống mà thiếu hide boundary, surface có thể bắc cầu qua khu vực không phải mặt đường.

Plugin kiểm tra nên ghi tên Corridor, baseline, region và source/target cần đối chiếu. Mẫu kiểm kê chỉ đọc tên Corridor, chưa đánh giá toàn bộ hình học. Để phát triển kiểm tra region, tra SDK tương ứng và xử lý baseline dựa trên FeatureLine riêng, không mặc định baseline nào cũng có AlignmentId hợp lệ.

## FeatureLine và Grading

FeatureLine mang hình học 3D và cao độ phục vụ thiết kế, có thể dùng làm baseline, breakline hoặc footprint. Grading áp tiêu chí chiếu từ footprint đến target là surface, cao độ hoặc khoảng cách. Site và grading group ảnh hưởng cách quản lý quan hệ và tạo surface.

Ví dụ mép nền cao hơn địa hình cần kiểm tra footprint, hướng chiếu và cut/fill criteria trước khi dựng taluy. Khi chuyển FeatureLine thành Polyline, kiểm tra quan hệ động nào bị mất.

## Pipe Network và Pressure Network

Pipe Network quản lý pipes và structures cho hệ thống như thoát nước; part catalog và parts list giới hạn chủng loại, kích thước. Pressure Network có pipes, fittings và appurtenances cùng workflow riêng cho mạng có áp. Không dùng một collection hay một thuật toán nối ống chung cho hai nhóm.

Báo cáo quantity cần định nghĩa chiều dài đo theo đường nào, đường kính/kích thước nào, số lượng parts và đơn vị. Với hai ống dài 10 và 12, tổng 22 chỉ đúng sau khi thống nhất cùng đại lượng và loại trừ trùng lặp. Khối lượng đào đắp từ surface khác số lượng cấu kiện.

<span id="thực-hành-kiểm-tra" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Thực hành

Trong DWG thử, lập bảng Corridor → baseline → region → Assembly → target từ UI rồi đối chiếu API khi triển khai mở rộng. Kiểm tra một region thiếu target và một corridor surface có boundary sai. Lập danh sách pipes/structures riêng với mạng áp; không rebuild hoặc đổi parts tự động khi đang thu thập hiện trạng. Kiểm tra quantity trong Civil 3D đúng SDK.
