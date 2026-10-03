---
{
  "id": "concept.gis-data-automation.assign-reproject",
  "slug": "assign-reproject",
  "title": "Gán CRS và reprojection",
  "description": "Gán metadata cho số hiện có khác với tính tọa độ mới qua phép biến đổi.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "syntax",
  "relatedConceptIds": [
    "concept.gis-data-automation.crs-datum-projection",
    "concept.gis-data-automation.geojson-geopackage"
  ],
  "exampleIds": [],
  "sources": [
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
      "title": "PostGIS — ST_SetSRID",
      "url": "https://postgis.net/docs/ST_SetSRID.html"
    }
  ],
  "aliases": [
    "reprojection",
    "set_crs",
    "to_crs",
    "ST_SetSRID"
  ],
  "searchableTerms": [
    "Transformer",
    "always_xy",
    "axis order"
  ],
  "examplePlacements": []
}
---

## Gán CRS khi đã biết nguồn

GeoPandas set_crs xác định cách diễn giải tọa độ hiện có; nó không làm điểm dịch sang một hệ mới. PostGIS ST_SetSRID cũng gán mã quy chiếu cho Geometry. Chỉ dùng khi hồ sơ đã chứng minh số tọa độ thuộc CRS đó. Gán một mã để lớp “hiện đúng chỗ” có thể che lỗi nguồn và làm phép đo sau đó sai.

## Reprojection tính số mới

GeoPandas to_crs chuyển Geometry sang CRS đích khi nguồn đã được xác định. pyproj Transformer cho phép chọn nguồn, đích và thao tác biến đổi. Số tọa độ thay đổi để mô tả cùng vị trí, nhưng chất lượng phụ thuộc định nghĩa, khu vực áp dụng và dữ liệu phụ trợ của phép biến đổi. Chuyển ngược khớp số chưa chứng minh cả hai CRS ban đầu đều đúng.

## Kiểm tra thứ tự trục

always_xy trong Transformer quy định cách truyền/nhận tọa độ theo thứ tự GIS thông dụng: longitude/latitude cho địa lý và easting/northing cho đa số hệ chiếu. Nó không nhận dạng CRS hay tự sửa nhầm trục nguồn. Ghi tên cột và đơn vị; thử vị trí đã biết trước xử lý cả lớp. Nếu hồ sơ VN-2000 hoặc hệ cao độ còn thiếu, dừng phép chuyển thay vì suy đoán một EPSG.
