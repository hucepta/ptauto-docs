---
{"id":"lesson.gis-data-automation.bat-dau-gis","slug":"bat-dau-gis","title":"Một đối tượng hạ tầng trở thành dữ liệu GIS thế nào","description":"Phân biệt hình học, thuộc tính, CRS và kiểm tra kết quả trước khi chuyển CAD sang GIS.","status":"published","chapterId":"chapter.gis-data-automation.bat-dau","order":1,"difficulty":"co-ban","sources":[{"title":"QGIS — Vector Data","url":"https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/vector_data.html"},{"title":"QGIS — Coordinate Reference Systems","url":"https://docs.qgis.org/3.10/en/docs/gentle_gis_introduction/coordinate_reference_systems.html"}],"compatibility":[{"product":"QGIS / Python GIS","version":"Đối chiếu thư viện và CRS với dữ liệu dự án","platform":"Windows / macOS / Linux"}]}
---

## Từ nét vẽ sang feature

Trong CAD, một LINE có hình dạng và các thông tin như layer. Trong GIS, một **feature** kết hợp hình học, bảng thuộc tính và vị trí trong một hệ quy chiếu. Ví dụ một đoạn ống thoát nước cần hình tuyến, mã ống, đường kính, vật liệu và CRS của tọa độ. Chỉ đổi đuôi DWG sang định dạng khác không tạo ra những thuộc tính còn thiếu.

| Phần dữ liệu | Ví dụ | Kiểm tra |
| --- | --- | --- |
| Hình học | LineString biểu diễn tim ống | Số điểm, chiều dài, hướng tuyến |
| Thuộc tính | `pipe_id`, `diameter_mm` | ID không rỗng, đường kính hợp lý |
| CRS và đơn vị | Hồ sơ tọa độ dự án | Nguồn xác nhận, đơn vị độ hay mét |

```text
DWG/Civil + hồ sơ tọa độ → mapping đối tượng → feature có ID → chuyển CRS nếu cần → QA/QC → GeoPackage/GeoJSON
```

## Cần xác minh CRS trước khi xuất

**Gán CRS** nói cho phần mềm biết tọa độ hiện có đang dùng hệ nào; nó không đổi giá trị số. **Reprojection** tính ra tọa độ mới trong hệ đích. Không đoán một mã EPSG chung cho mọi dự án VN-2000. Hãy lấy kinh tuyến trục, múi chiếu, datum và đơn vị từ hồ sơ bàn giao; nếu thiếu, dừng việc định vị chính xác và yêu cầu làm rõ nguồn.

## Bài thử không cần CAD

Tạo bảng ba điểm cọc với `stake_id`, `x`, `y` và một cột nguồn CRS. Mở trong QGIS, kiểm tra vị trí trên nền bản đồ phù hợp, rồi ghi ra GeoPackage thử. Đếm lại ba đối tượng và đối chiếu từng ID. Nếu tọa độ là mét địa phương nhưng hiển thị như độ kinh/vĩ, bạn đã phát hiện một lỗi CRS trước khi giao dữ liệu.

## Tự kiểm tra

Giải thích bằng lời vì sao hai tuyến có cùng hình dạng trên màn hình vẫn có thể nằm sai vị trí ngoài thực địa. Liệt kê ba thông tin bạn cần xin từ đơn vị cung cấp trước khi chuyển bản vẽ hạ tầng sang GIS.
