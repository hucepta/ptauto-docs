---
{
  "id": "lesson.gis-data-automation.feature-crs",
  "slug": "feature-crs",
  "title": "Feature, dữ liệu không gian và CRS",
  "description": "Diễn giải Geometry, Attribute, vector/raster và tọa độ trước khi chuyển dữ liệu CAD sang GIS.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.du-lieu-khong-gian",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.gis-data-automation.feature-geometry-attribute",
    "concept.gis-data-automation.crs-datum-projection",
    "concept.gis-data-automation.assign-reproject"
  ],
  "exampleIds": [],
  "exerciseIds": [
    "exercise.gis-data-automation.lap-ho-so-crs"
  ],
  "sources": [
    {
      "title": "IETF — RFC 7946: The GeoJSON Format",
      "url": "https://datatracker.ietf.org/doc/html/rfc7946"
    },
    {
      "title": "OGC — GeoPackage Standard",
      "url": "https://www.ogc.org/standards/geopackage/"
    },
    {
      "title": "PROJ — Cartographic projection",
      "url": "https://proj.org/en/stable/usage/projections.html"
    },
    {
      "title": "PROJ — Geodetic transformation",
      "url": "https://proj.org/en/stable/usage/transformation.html"
    },
    {
      "title": "GeoPandas — Projections",
      "url": "https://geopandas.org/en/stable/docs/user_guide/projections.html"
    },
    {
      "title": "PROJ — Web Mercator / Pseudo Mercator",
      "url": "https://proj.org/en/stable/operations/projections/webmerc.html"
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
  "examplePlacements": []
}
---

## Feature gắn hình học với thuộc tính

Một Feature đại diện một đối tượng nghiệp vụ, như cọc khảo sát hoặc đoạn đường. Geometry mô tả vị trí và hình dạng; Attribute mô tả mã, loại, nguồn và các giá trị đi kèm. Layer tập hợp các Feature theo schema và mục đích sử dụng. Một điểm thiếu mã có thể vẽ đúng nhưng khó đối chiếu với hồ sơ.

## Chọn vector hoặc raster theo dữ liệu

Vector biểu diễn đối tượng bằng điểm, đường và vùng; phù hợp cọc, tim tuyến hoặc ranh giới. Raster chia không gian thành lưới ô; mỗi ô mang giá trị hoặc các band, phù hợp ảnh và mô hình cao độ dạng lưới. Độ phân giải raster khác độ chính xác đo. Khi đổi Surface TIN thành raster, phải chọn kích thước ô, vùng phủ và giá trị NoData; lưới đó không còn giữ nguyên mọi tam giác và breakline. Hãy xác định dữ liệu cần bảo toàn trước khi chọn định dạng.

## CRS giải thích ý nghĩa tọa độ

CRS kết hợp cơ sở quy chiếu và hệ trục để diễn giải tọa độ. Datum liên hệ hệ tọa độ với Trái Đất; projection đưa tọa độ địa lý lên mặt phẳng. Mã EPSG định danh một định nghĩa cụ thể, không phải công cụ nhận dạng bản vẽ. Tọa độ địa lý thường dùng độ; tọa độ chiếu thường dùng mét hoặc đơn vị khác được CRS quy định. Khoảng cách giữa hai số kinh độ không trực tiếp là mét. CRS phù hợp và độ chính xác cần kiểm tra theo khu vực, phép biến đổi và mục đích công việc; Web Mercator phục vụ bản đồ web không tự đáp ứng đo đạc kỹ thuật.

## Xác minh VN-2000 và WGS84

Một bản vẽ ghi “VN-2000” vẫn cần hồ sơ phép chiếu, múi, kinh tuyến trục, hệ số tỷ lệ, đơn vị và quy ước trục. Bản vẽ cục bộ có thể còn có phép dịch hoặc quay riêng. Không gán một EPSG chung dựa vào tên datum hay độ lớn X/Y. Gán CRS chỉ xác nhận cách diễn giải số hiện có; reprojection tính số mới để biểu diễn cùng vị trí trong CRS khác. Cao độ cần hồ sơ riêng vì chuyển CRS ngang không mặc nhiên chuyển hệ cao độ.

## Thực hành đọc hồ sơ nguồn

Với một bảng cọc, ghi rõ nguồn tọa độ, đơn vị, X/Y và hệ cao độ. Nếu hồ sơ còn thiếu, đánh dấu chưa xác định và chỉ làm QA thuộc tính. GeoJSON theo RFC 7946 dùng WGS84, thứ tự longitude rồi latitude và đơn vị độ. Chỉ xuất sau khi đã xác nhận hoặc chuyển đúng tọa độ; không đổi tên x_m thành longitude để vượt qua bước này.
