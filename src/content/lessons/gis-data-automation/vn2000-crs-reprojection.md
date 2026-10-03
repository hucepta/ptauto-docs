---
{
  "id": "lesson.gis-data-automation.vn2000-crs-reprojection",
  "slug": "vn2000-crs-reprojection",
  "title": "VN-2000, CRS và phép chuyển tọa độ có kiểm chứng",
  "description": "Phân biệt gán CRS với reprojection và không đoán EPSG cho hồ sơ VN-2000.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.du-lieu-khong-gian",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.feature-crs"
  ],
  "flow": [
    {
      "label": "Nguồn",
      "detail": "Xác nhận datum, kinh tuyến trục, múi chiếu, đơn vị"
    },
    {
      "label": "Biến đổi",
      "detail": "Gán đúng CRS nguồn rồi chuyển sang CRS đích"
    },
    {
      "label": "Đối chiếu",
      "detail": "Kiểm điểm khống chế và sai số"
    }
  ],
  "sources": [
    {
      "title": "GeoPandas — Projections",
      "url": "https://docs.geopandas.org/en/stable/docs/user_guide/projections.html"
    }
  ],
  "compatibility": [
    {
      "product": "GIS / Python",
      "version": "Thư viện/CRS theo dự án",
      "platform": "Windows / macOS / Linux"
    }
  ]
}
---

## Vì sao hai con số X,Y chưa đủ

Tọa độ 500000, 1200000 có thể là mét trong một hệ chiếu phẳng, nhưng không cho biết vị trí địa lý nếu thiếu CRS. Với dữ liệu VN-2000, cần hồ sơ chỉ rõ tham số và khu vực áp dụng; không gán một mã EPSG “VN-2000” chung cho mọi tỉnh/dự án.

`set_crs`/gán CRS chỉ gắn ý nghĩa cho giá trị đang có. `to_crs`/reprojection tính tọa độ mới. Nếu CRS nguồn sai, phép chuyển toán học vẫn chạy nhưng vị trí đầu ra sai. Khi dùng pyproj, xác nhận thứ tự trục; `always_xy=True` giữ thứ tự x/y theo cách nhiều quy trình GIS sử dụng.

## Thực hành

Lập phiếu thông tin CRS cho một bộ cọc: nguồn, datum, phép chiếu, kinh tuyến trục, múi, đơn vị và điểm kiểm tra. Nếu thiếu hai mục quan trọng, nêu lý do chưa được chuyển tọa độ. Sau khi chuyển, so ít nhất một điểm mốc đã biết.
