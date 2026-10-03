---
{
  "id": "concept.dynamo-python.json-loads",
  "slug": "json-loads",
  "title": "json.loads",
  "description": "Đối tượng Python từ văn bản JSON.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: json.loads",
      "url": "https://docs.python.org/3/library/json.html#json.loads"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "json.loads"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
json.loads(s)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

s là chuỗi JSON.

## Kết quả

Đối tượng Python từ văn bản JSON.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import json
print(json.loads('{"id":"C01"}'))
```

## Dễ nhầm

JSON null trở thành None; JSON không cho dấu nháy đơn quanh khóa.
