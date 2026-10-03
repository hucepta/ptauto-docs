---
{
  "id": "project.gis-data-automation.cad-gis-qa",
  "slug": "cad-gis-qa",
  "title": "Pipeline CAD–GIS có schema và báo cáo QA",
  "description": "Bắt đầu từ một lớp linework, bảo toàn mã nguồn và bàn giao dữ liệu kèm các phép kiểm tra đã thực hiện.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "expectedResult": "Có raw input, mapping/schema/CRS, dữ liệu accepted và rejected, báo cáo từng quy tắc, mã ổn định khi xuất lại và kiểm tra độc lập bằng công cụ GIS. Các lỗi CRS hoặc thông tin nguồn thiếu được dừng đúng bước, không tự gán EPSG.",
  "prerequisites": [
    "lesson.gis-data-automation.feature-crs",
    "lesson.gis-data-automation.schema-cad-gis",
    "lesson.gis-data-automation.dinh-dang-thu-vien",
    "lesson.gis-data-automation.etl-spatial-qa",
    "lesson.gis-data-automation.pipeline-cad-gis"
  ],
  "conceptIds": [
    "concept.gis-data-automation.schema-stable-id",
    "concept.gis-data-automation.crs-datum-projection",
    "concept.gis-data-automation.assign-reproject",
    "concept.gis-data-automation.spatial-validity-topology",
    "concept.gis-data-automation.geojson-geopackage"
  ],
  "exampleIds": [
    "example.gis-data-automation.map-cad-records",
    "example.gis-data-automation.qa-linework",
    "example.gis-data-automation.points-to-geojson"
  ],
  "sources": [
    {
      "title": "GDAL — AutoCAD DXF",
      "url": "https://gdal.org/en/stable/drivers/vector/dxf.html"
    },
    {
      "title": "GDAL — ogr2ogr",
      "url": "https://gdal.org/en/stable/programs/ogr2ogr.html"
    },
    {
      "title": "GeoPandas — GeoDataFrame.set_crs",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.set_crs.html"
    },
    {
      "title": "GeoPandas — GeoDataFrame.to_crs",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.to_crs.html"
    },
    {
      "title": "pyproj — Transformer",
      "url": "https://pyproj4.github.io/pyproj/stable/api/transformer.html"
    },
    {
      "title": "OGC — GeoPackage Standard",
      "url": "https://www.ogc.org/standards/geopackage/"
    },
    {
      "title": "Shapely — make_valid",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.make_valid.html"
    }
  ],
  "compatibility": [
    {
      "product": "GIS / Python",
      "version": "Logic mẫu dùng Python 3; driver, CRS và công cụ GIS cần xác nhận khi áp dụng"
    }
  ],
  "examplePlacements": [
    {
      "heading": "hồ-sơ-crs-và-mapping",
      "exampleIds": [
        "example.gis-data-automation.map-cad-records"
      ]
    },
    {
      "heading": "sàng-lọc-và-kiểm-tra-chuyên-sâu",
      "exampleIds": [
        "example.gis-data-automation.qa-linework"
      ]
    },
    {
      "heading": "chuyển-hệ-và-tạo-lớp-giao",
      "exampleIds": [
        "example.gis-data-automation.points-to-geojson"
      ]
    }
  ]
}
---

## Bộ dữ liệu và đầu ra

Chọn một lớp tim đường từ bản vẽ quản lý, kèm một bảng điểm đối chiếu nếu có. Đầu ra chính là lớp vector trong CRS kỹ thuật đã xác nhận, báo cáo QA và bảng truy dấu nguồn. GeoPackage là lựa chọn phù hợp cho lớp chiếu; GeoJSON WGS84 là đầu ra bổ sung khi mục đích trao đổi cần nó. Không đặt mục tiêu dựng lại toàn bộ Alignment, Profile hay Corridor từ linework, vì hình xuất có thể đã mất tham số thiết kế.

Lưu raw input trong thư mục nguồn riêng. Ghi source_id ổn định, phiên bản bản vẽ, bộ lọc layer, ModelSpace và loại entity trích xuất. Nếu dùng DXF/OGR, kiểm tra cách đọc block, đường cong và lớp entities theo driver; lưu thông tin phần không được chuyển. Các script kèm dự án nhận dictionary/CSV đã trích xuất, không trực tiếp mở DWG.

## Hồ sơ CRS và mapping

Tạo schema cho feature_id, source_id, source_handle, source_layer, asset_id và Geometry. Quy định loại, trường bắt buộc, giá trị thiếu và khóa cha nếu có. Với VN-2000, cần đủ định nghĩa CRS và các tham số dự án; nhãn datum chưa đủ chọn EPSG. Nếu tọa độ cục bộ chưa có hồ sơ liên hệ lưới, giữ trạng thái chưa xác định và dừng chuyển không gian.

Dùng ví dụ mapping để tạo mã xác định từ source_id/handle. Giữ namespace của ví dụ khi thử xuất lại. Mã này hỗ trợ cùng nguồn quản lý, không tự nhận diện entity bị tạo lại; mã tài sản nghiệp vụ cần quản lý riêng. Tạo bảng đối chiếu để các lần sửa dữ liệu không làm mất liên kết.

## Sàng lọc và kiểm tra chuyên sâu

Dùng ví dụ linework để kiểm tra mã, đỉnh 2D hữu hạn, đoạn liên tiếp trùng và chiều dài tối thiểu. Chỉ tính chiều dài khi đã xác nhận đơn vị mét. Mọi hàng lỗi mang mã nguồn và lý do; không xóa chúng khỏi tổng số. Tổng bản ghi trích xuất bằng rejected ở mapping cộng rejected ở QA cộng accepted cuối, nếu mỗi bước xử lý mỗi bản ghi đúng một lần.

Tiếp tục kiểm tra validity và topology bằng công cụ GIS phù hợp. Xác định quy tắc riêng cho giao cắt, đường nối, vùng chồng hoặc khóa hạ tầng; không xem hình học hợp lệ từng Feature là đủ. Với make_valid hoặc snap, lưu bản trước sửa và xem thay đổi loại/hình dạng. Dung sai là cấu hình nghiệp vụ có đơn vị, không một giá trị mặc định dùng cho mọi lớp.

## Chuyển hệ và tạo lớp giao

Nếu số tọa độ nguồn đã đúng nhưng thiếu metadata, gán định nghĩa đã xác nhận. Nếu đích khác nguồn, chọn phép biến đổi và kiểm tra điểm khống chế. Ghi area of use, dữ liệu phụ trợ và thứ tự trục được áp dụng; always_xy chỉ điều khiển thứ tự tham số. Giữ hệ cao độ riêng nếu chưa có phép biến đổi phù hợp.

Xuất lớp trong CRS kỹ thuật vào GeoPackage. Để tạo lớp điểm GeoJSON bổ sung, trước tiên có bảng longitude/latitude WGS84 đã xác nhận rồi dùng ví dụ đi kèm. Cao độ chưa rõ mốc được giữ trong properties. Không dùng Web Mercator như bằng chứng đạt độ chính xác công trình.

## Nghiệm thu lặp lại và báo cáo

Mở đầu ra bằng công cụ GIS khác. So số Feature, mã, kiểu trường, CRS, phạm vi và vài vị trí/chiều dài đối chiếu với nguồn. Chạy lại sau đổi thứ tự bản ghi để xác nhận ID giữ nguyên; thêm một entity và kiểm tra chỉ có một mã mới. Thử file thiếu hồ sơ CRS và đảm bảo pipeline vẫn tạo báo cáo trạng thái dừng.

Bộ giao gồm nguồn, cấu hình, schema/CRS, accepted, rejected và nhật ký môi trường. Ghi quy tắc đã kiểm tra, phần chưa kiểm tra và các sửa đã duyệt. Người nhận phải tìm được nguồn của từng Feature và hiểu giới hạn kết quả, kể cả khi mới hoàn thành bước xử lý bảng.
