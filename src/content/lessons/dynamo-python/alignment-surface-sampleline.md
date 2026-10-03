---
{
  "id": "lesson.dynamo-python.alignment-surface-sampleline",
  "slug": "alignment-surface-sampleline",
  "title": "Đọc Alignment, Surface và Sample Line bằng node Civil",
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
  ]
}
---

## Chọn đúng shelf node

Dynamo for Civil 3D có node AutoCAD cho đối tượng DWG thông thường và node Civil cho Alignment, Surface, Corridor... Một curve Dynamo thuần không tự mang ID và quan hệ của Alignment. Khi bài toán cần cao độ mặt đất tại cọc, giữ tham chiếu tới Alignment và Surface nguồn cho đến lúc xuất báo cáo.

```text
Alignment + danh sách station + Surface → điểm trên tuyến + cao độ → bảng cọc
```

Các node có thể trả list lồng hoặc `null` khi station ngoài miền surface. Kiểm tra đầu vào và số lượng hàng trước khi tạo đối tượng mới. Nếu graph chạy trên bản vẽ khác, tên object trùng không bảo đảm là cùng object; hãy chọn theo ID/đặc điểm được xác nhận.

## Thực hành

Thiết kế graph chỉ đọc ba station của một Alignment. Nêu điều gì xảy ra khi surface không phủ station cuối. Report phải ghi station lỗi, không tạo cao độ 0 giả.
