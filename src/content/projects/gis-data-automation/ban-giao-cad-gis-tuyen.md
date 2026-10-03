---
{
  "id": "project.gis-data-automation.ban-giao-cad-gis-tuyen",
  "slug": "ban-giao-cad-gis-tuyen",
  "title": "Bàn giao tuyến đường từ CAD/Civil sang GeoPackage",
  "description": "Giữ tim tuyến, mã, lý trình và CRS cùng report đối chiếu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "expectedResult": "Giữ tim tuyến, mã, lý trình và CRS cùng report đối chiếu.",
  "prerequisites": [
    "lesson.gis-data-automation.mapping-layer-block-attribute"
  ]
}
---

## Bài toán

Đội GIS nhận tuyến đường thiết kế từ CAD/Civil và cần feature có ID, tên tuyến, chiều dài, nguồn DWG và CRS xác nhận.

## Thiết kế

Lập mapping trường, loại bỏ bản ghi không có ID, xác minh CRS nguồn từ hồ sơ và reproject nếu yêu cầu. Xuất GeoPackage rồi nhập lại để so số feature, ID, chiều dài trong đơn vị phù hợp và vị trí điểm mốc. Giữ log mọi bản ghi bị loại.

## Nghiệm thu

- Không có feature mất ID hoặc trùng ID.
- Một điểm kiểm tra nằm trong dung sai tọa độ dự án.
- Report có file nguồn, CRS nguồn/đích và số feature trước/sau.
