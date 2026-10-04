---
{
  "id": "lesson.dynamo-python.alignment-surface-sampleline",
  "slug": "alignment-surface-sampleline",
  "title": "Tuyến và mặt địa hình",
  "description": "Chọn đối tượng Civil đúng nguồn rồi kết hợp dữ liệu theo station.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.du-lieu-civil",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.doc-du-lieu-civil"
  ],
  "flow": [
    {
      "label": "Chọn",
      "detail": "Dùng node Civil đọc Alignment và Surface"
    },
    {
      "label": "Ghép",
      "detail": "Lấy station/mặt cắt có cùng tuyến"
    },
    {
      "label": "Soát",
      "detail": "Watch số phần tử, nil và nguồn"
    }
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Dynamo for Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Node/engine theo phiên bản host",
      "platform": "Windows"
    }
  ],
  "illustration": "graph"
}
---
<span id="chọn-đúng-nhóm-thư-viện-node" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Thư viện node Civil 3D

Dynamo for Civil 3D có node AutoCAD cho đối tượng DWG thông thường và node Civil cho Alignment, Surface, Corridor... Một curve Dynamo thuần không tự mang ID và quan hệ của Alignment. Khi bài toán cần cao độ mặt đất tại cọc, giữ tham chiếu tới Alignment và Surface nguồn cho đến lúc xuất báo cáo.

```text
Alignment + danh sách station + Surface → điểm trên tuyến + cao độ → bảng cọc
```

Các node có thể trả danh sách lồng hoặc `null` khi station ngoài miền surface. Kiểm tra đầu vào và số lượng hàng trước khi tạo đối tượng mới. Nếu đồ thị chạy trên bản vẽ khác, tên object trùng không bảo đảm là cùng object; hãy chọn theo ID/đặc điểm được xác nhận.

## Thực hành

Thiết kế đồ thị chỉ đọc ba station của một Alignment. Nêu điều gì xảy ra khi surface không phủ station cuối. Report phải ghi station lỗi, không tạo cao độ 0 giả.

<span id="chuẩn-bị-phép-đối-chiếu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đối chiếu kết quả

Trong Civil 3D, mở bản sao bản vẽ có một Alignment (tuyến) và một Surface (mặt địa hình). Ghi tên tuyến, lý trình đầu/cuối và ba vị trí trong phạm vi. Mở Dynamo tại Manage > Visual Programming > Dynamo. Trong Library, mở nhóm Civil 3D để xem node có trong bản cài; tìm theo tên loại đối tượng và đọc tên cổng, không tự suy tên node từ phương thức .NET.

Đặt Watch ngay sau bước lấy danh sách đối tượng, sau bước đọc tên và sau kết quả cao độ. Chạy Manual, kiểm số tuyến và tên trước khi lấy mẫu. Nếu bản cài không có node cho thao tác cần dùng, chọn cách gọi API theo bài Gọi API từ Python; không nối một node đọc tên thay cho node truy vấn cao độ.

Bảng đối chiếu tối thiểu có mã vị trí, lý trình, x/y, cao độ và trạng thái. Một điểm ngoài miền mặt phải có trạng thái ngoài phạm vi, không ghi cao độ 0 như một kết quả đo. So ba điểm trong miền với kết quả truy vấn thủ công của Civil 3D. Giữ tên mặt và đơn vị cùng báo cáo để biết giá trị được lấy từ đâu.
