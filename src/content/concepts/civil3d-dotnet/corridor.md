---
{
  "id": "concept.civil3d-dotnet.corridor",
  "slug": "corridor",
  "title": "Corridor",
  "description": "Mô hình liên kết baseline, region và Assembly với các nguồn thiết kế.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.civil3d-dotnet.civildocument",
    "concept.civil3d-dotnet.tinsurface"
  ],
  "exampleIds": [],
  "examplePlacements": [],
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
      "title": "Autodesk — About Corridor Surface Boundaries",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-UserGuide/files/GUID-4B0FFB8E-B3BB-4943-AB39-EAA77C431C13.htm"
    }
  ],
  "aliases": [
    "mô hình Corridor"
  ],
  "tags": [],
  "searchableTerms": [
    "baseline",
    "region",
    "Assembly",
    "Subassembly",
    "FeatureLine",
    "CorridorCollection"
  ]
}
---

## Định nghĩa

Corridor tạo mô hình hạ tầng từ baseline và các mặt cắt điển hình được áp theo khoảng station. Baseline có thể dựa trên Alignment/Profile hoặc FeatureLine. Region xác định khoảng áp Assembly; Assembly ghép các Subassembly cho làn, lề, rãnh và các bộ phận khác.

## Quan hệ và ví dụ

Một tuyến 0–300 có region 0–100 dùng mặt cắt A, 100–300 dùng mặt cắt B. Kiểm tra khoảng station, tần suất áp Assembly và targets tại đoạn nối. Sự có mặt của object Corridor không bảo đảm các đầu vào đang đầy đủ.

Point, link, shape codes xác định thành phần hình học. Corridor surface được dựng từ codes hoặc feature lines; boundary giúp giới hạn miền cần dùng. Một surface bắc cầu qua khoảng trống giữa hai dải cần kiểm tra dữ liệu và boundary trước khi tính quantity.

## Truy cập và sai sót

CivilDocument.CorridorCollection cung cấp các ID; mở Corridor trong transaction ForRead để kiểm kê. Corridor.Baselines cho biết collection baseline, nhưng code xử lý phải xét loại baseline trước khi dùng Alignment/Profile ID.

Mẫu chỉ đọc tên Corridor; nó chưa kiểm tra targets, region hoặc trạng thái rebuild. Đối chiếu từng quan hệ trong UI khi mở rộng QA/QC, rồi lập bộ dữ liệu thử riêng cho baseline FeatureLine và baseline Alignment.
