---
{
  "id": "lesson.dynamo-python.python-node-goi-net-api",
  "slug": "python-node-goi-net-api",
  "title": "Python node và AutoCAD/Civil .NET API",
  "description": "Hiểu IN/OUT, engine, wrapper, ObjectId và transaction trước khi mở đối tượng Civil.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.python-va-workflow",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.python-in-out-engine"
  ],
  "flow": [
    {
      "label": "IN",
      "detail": "Node đưa wrapper hoặc dữ liệu thuần vào Python"
    },
    {
      "label": "API",
      "detail": "Lấy ObjectId và mở trong transaction"
    },
    {
      "label": "OUT",
      "detail": "Trả dữ liệu đơn giản để graph tiếp tục xử lý"
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

## Node Python không phải một bản sao C#

Python node nhận dữ liệu qua danh sách `IN` và trả bằng `OUT`. Khi chỉ chuẩn hóa chuỗi CSV, dùng Python thuần. Khi cần thành viên Civil API chưa có node, phải nạp đúng assembly theo engine/host và hiểu wrapper Dynamo. `InternalObjectId` thường là lối vào an toàn để mở DBObject trong transaction; không giữ object đã đóng transaction để dùng ở node khác.

```python
rows = IN[0] or []
OUT = [str(row).strip() for row in rows if row is not None]
```

Đây là bước dữ liệu thuần; không cần `clr` hay lock. Khi thêm API host, ghi rõ version Civil/Dynamo, engine Python và assembly, rồi thử trên bản vẽ sao chép. Trả dữ liệu đơn giản như chuỗi, số, list ID; tránh đưa DBObject sống vượt qua vòng đời transaction.

## Thực hành

Đưa `["  A-01 ", None, " B-02"]` vào node và dự đoán `OUT`. Sau đó liệt kê ba thay đổi phải làm nếu đầu vào chuyển từ chuỗi sang wrapper Alignment. Đừng thực hiện bước API trước khi đọc hướng dẫn engine của phiên bản host.
