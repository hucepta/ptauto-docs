---
{
  "id": "lesson.gis-data-automation.schema-cad-gis",
  "slug": "schema-cad-gis",
  "title": "Cấu trúc dữ liệu",
  "description": "Thiết kế schema, ánh xạ trường và khóa liên kết để trao đổi dữ liệu mà vẫn truy về nguồn.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.ket-noi-cad-gis",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.feature-crs"
  ],
  "conceptIds": [
    "concept.gis-data-automation.schema-stable-id",
    "concept.gis-data-automation.feature-geometry-attribute"
  ],
  "exampleIds": [
    "example.gis-data-automation.map-cad-records"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "GDAL — AutoCAD DXF",
      "url": "https://gdal.org/en/stable/drivers/vector/dxf.html"
    },
    {
      "title": "Python — uuid",
      "url": "https://docs.python.org/3/library/uuid.html"
    },
    {
      "title": "Python — json",
      "url": "https://docs.python.org/3/library/json.html"
    },
    {
      "title": "Autodesk — Civil 3D 2026: LandXML Export Settings",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-UserGuide/files/GUID-6B18C936-2397-4583-9EB5-481DB08C69CD.htm"
    }
  ],
  "compatibility": [
    {
      "product": "GIS",
      "version": "Nguyên lý dữ liệu; CRS, driver và phiên bản thư viện cần xác nhận cho từng bộ dữ liệu"
    }
  ],
  "tags": [
    "GIS",
    "CAD–GIS",
    "dữ liệu không gian"
  ],
  "examplePlacements": [
    {
      "heading": "khóa-dữ-liệu",
      "exampleIds": [
        "example.gis-data-automation.map-cad-records"
      ]
    }
  ],
  "illustration": "metadata"
}
---
## Xác định đối tượng dữ liệu

CAD tổ chức đối tượng bản vẽ theo layer, block, style và quan hệ database; GIS tổ chức Feature theo lớp dữ liệu và trường. Chuyển linework sang GIS cần trả lời đường đó là tim tuyến, mép đường hay nét trình bày. Layer hỗ trợ phân loại nhưng không thay thế cấu trúc trường nghiệp vụ. Với dữ liệu Civil, Alignment có thể sinh lớp tim tuyến cùng bảng lý trình; Profile giữ quan hệ tới tuyến; pipe cần tham chiếu đến structure. Quyết định đầu ra trước, rồi chọn thuộc tính và hình học cần lấy.

## Lập bảng ánh xạ trường

Với cọc từ block, ánh xạ mã attribute thành point_id, tên layer thành source_layer và vị trí thành Geometry. station_m là số theo mét; station_label có thể giữ chuỗi trình bày. Ghi kiểu, khả năng thiếu và quy tắc chuyển của từng trường. Giá trị trống có ý nghĩa khác 0; không dùng 0 cho đường kính chưa biết hay cao độ thiếu. Gắn schema_version vào bộ dữ liệu để người nhận biết quy tắc nào đã tạo bảng.

<span id="chọn-khóa-sống-qua-nhiều-lần-xuất" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Khóa dữ liệu

Chỉ số hàng và thứ tự lựa chọn không ổn định khi thêm đối tượng. Handle là dấu vết hữu ích trong một bản vẽ, nhưng phải đi kèm source_id của bộ nguồn; nó không tự bảo đảm cùng đối tượng qua thao tác sao chép hoặc tạo lại. Ví dụ đi kèm tạo UUID xác định từ source_id và handle đã chuẩn hóa. Đây là khóa cho cùng bản ghi nguồn, không thay cho mã tài sản do dự án quản lý. Nếu có mã nghiệp vụ bền vững, lưu riêng và giữ bảng đối chiếu qua các phiên bản.

<span id="giữ-quan-hệ-và-chiều-chuyển-đổi" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Quan hệ và chiều chuyển đổi

Dữ liệu tuyến có thể tách thành bảng tuyến và bảng cọc, mỗi cọc mang alignment_id. Khi đổi thứ tự hàng, liên kết vẫn dựa trên khóa. Với GIS về CAD, xác định mã nào cập nhật đối tượng hiện có và mã nào tạo mới; không ghép bằng vị trí gần nhất nếu chưa có quy tắc dung sai. Một polyline GIS hóa có thể đã được lấy mẫu từ đường cong Civil. Hình học có thể dùng để hiển thị nhưng không còn đầy đủ tham số thiết kế để dựng lại Alignment nguyên bản.

<span id="thực-hành-ánh-xạ-và-đối-chiếu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Thực hành ánh xạ

Chuẩn bị ba bản ghi có handle, layer và đường đỉnh đã trích xuất. Chạy ví dụ ánh xạ hai lần sau khi đổi thứ tự hàng: mã ổn định phải giữ nguyên. Thử thiếu handle và trùng khóa nguồn; cả hai cần báo lỗi rõ. Ví dụ dùng dictionary thuần, không mở DWG. Khi áp dụng thực tế, đối chiếu tổng đối tượng theo loại, mã liên kết và mức mất thông tin trước khi chấp nhận kết quả.
