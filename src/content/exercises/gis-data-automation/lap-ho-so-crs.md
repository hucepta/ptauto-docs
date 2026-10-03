---
{
  "id": "exercise.gis-data-automation.lap-ho-so-crs",
  "slug": "lap-ho-so-crs",
  "title": "Lập hồ sơ CRS trước chuyển đổi",
  "description": "Phân biệt gán CRS, reprojection và dừng vì thiếu hồ sơ trên ba tình huống dữ liệu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "expectedResult": "Nguồn A chưa đủ CRS phải dừng chuyển không gian; nguồn B đã xác nhận WGS84 longitude/latitude có thể kiểm tra để xuất GeoJSON; nguồn C có WKT2 nguồn đầy đủ chỉ thiếu metadata thì gán đúng CRS trước khi reprojection nếu đích khác. Không chọn một EPSG chung cho VN-2000.",
  "conceptIds": [
    "concept.gis-data-automation.crs-datum-projection",
    "concept.gis-data-automation.assign-reproject",
    "concept.gis-data-automation.geojson-geopackage"
  ],
  "compatibility": [
    {
      "product": "GIS / Python",
      "version": "Bài tập dữ liệu; ghi môi trường thực tế khi chạy, không suy ra đã thử API CAD"
    }
  ]
}
---

## Ba tình huống

Nguồn A là bản vẽ có ghi “VN-2000”, đơn vị mét và tọa độ mẫu X=500, Y=1000. Hồ sơ chưa có kinh tuyến trục, phép chiếu hay thông tin dịch/quay cục bộ.

Nguồn B là CSV có các cột longitude,latitude; người cung cấp đã xác nhận tọa độ WGS84 theo thứ tự longitude/latitude và đơn vị độ. Một điểm minh họa là 106,7/10,8; đích cần GeoJSON RFC 7946.

Nguồn C là lớp vector thiếu metadata CRS. Hồ sơ dự án đã cung cấp WKT2 đầy đủ và chứng minh số tọa độ đang theo đúng định nghĩa đó. Đích cần một CRS khác đã được chọn theo mục đích sử dụng.

## Tạo bảng quyết định

Với mỗi nguồn, ghi: thông tin đã biết, thông tin thiếu, bước được phép làm và phép kiểm tra cần bổ sung. Phân biệt “số tọa độ chưa đổi nhưng được diễn giải đúng” với “số mới sau phép biến đổi”. Nguồn C là bài nhận diện thao tác; không tự tạo WKT hay chọn EPSG thay hồ sơ dự án.

## Đối chiếu

Nguồn A vẫn có thể kiểm tra mã và trường số, nhưng chưa được biến thành dữ liệu địa lý xác định. Nguồn B cần kiểm tra khoảng giá trị, mã và hình thức GeoJSON; khoảng số đúng không thay bằng chứng CRS. Nguồn C cần gán CRS nguồn, chọn phép biến đổi thích hợp rồi so điểm khống chế. Giải thích vì sao always_xy và đổi sang Web Mercator không giải quyết thiếu hồ sơ nguồn hoặc tự bảo đảm độ chính xác kỹ thuật.
