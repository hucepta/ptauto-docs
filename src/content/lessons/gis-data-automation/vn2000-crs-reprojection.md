---
{
  "id": "lesson.gis-data-automation.vn2000-crs-reprojection",
  "slug": "vn2000-crs-reprojection",
  "title": "Chuyển hệ tọa độ",
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
  ],
  "illustration": "map"
}
---
<span id="vì-sao-hai-con-số-xy-chưa-đủ" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Tọa độ và CRS

Tọa độ 500000, 1200000 có thể là mét trong một hệ chiếu phẳng, nhưng không cho biết vị trí địa lý nếu thiếu CRS. Với dữ liệu VN-2000, cần hồ sơ chỉ rõ tham số và khu vực áp dụng; không gán một mã EPSG “VN-2000” chung cho mọi tỉnh/dự án.

`set_crs`/gán CRS chỉ gắn ý nghĩa cho giá trị đang có. `to_crs`/reprojection tính tọa độ mới. Nếu CRS nguồn sai, phép chuyển toán học vẫn chạy nhưng vị trí đầu ra sai. Khi dùng pyproj, xác nhận thứ tự trục; `always_xy=True` giữ thứ tự x/y theo cách nhiều quy trình GIS sử dụng.

## Thực hành

Lập phiếu thông tin CRS cho một bộ cọc: nguồn, datum, phép chiếu, kinh tuyến trục, múi, đơn vị và điểm kiểm tra. Nếu thiếu hai mục quan trọng, nêu lý do chưa được chuyển tọa độ. Sau khi chuyển, so ít nhất một điểm mốc đã biết.

<span id="hồ-sơ-cần-trước-phép-chuyển" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Hồ sơ hệ tọa độ

Ghi vào bảng: datum, kinh tuyến trục, múi chiếu, đơn vị, thứ tự X/Y, phép chuyển datum được cho phép và hệ cao độ. Lấy từ hồ sơ của bên cung cấp; tên tỉnh hoặc tên VN-2000 không tự xác định đầy đủ các thông số này.

Trong QGIS, mở Properties > Information của lớp và đọc CRS đang lưu. Đối chiếu với hồ sơ trước khi gán hệ nguồn. Sau đó Export > Save Features As sang một tệp riêng, chọn CRS đích cần bàn giao. Kiểm một số điểm khống chế đã biết ở cả hai hệ; ghi sai lệch và phép chuyển được sử dụng. Tọa độ hình học được chuyển nhưng cột x/y cũ chỉ là thuộc tính thường và cần quy trình cập nhật riêng nếu muốn bàn giao lại chúng.

Nếu thiếu thông số, vẫn có thể kiểm mã trùng và trường rỗng; chưa thể kết luận vị trí chính xác. Báo cáo nên ghi phần đã kiểm và dữ kiện đang thiếu để người nhận biết bước tiếp theo.
