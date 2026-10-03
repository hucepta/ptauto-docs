---
{
  "id": "concept.dynamo-python.json-dumps",
  "slug": "json-dumps",
  "title": "json.dumps",
  "description": "Chuỗi JSON để trao đổi dữ liệu.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: json.dumps",
      "url": "https://docs.python.org/3/library/json.html#json.dumps"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "json.dumps"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
json.dumps(obj, ensure_ascii=True, allow_nan=True)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

obj là dữ liệu; ensure_ascii=False giữ chữ Việt; allow_nan=False cấm số không hữu hạn.

## Kết quả

Chuỗi JSON để trao đổi dữ liệu.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import json
print(json.dumps({"id":"C01","z":12.5},allow_nan=False))
```

## Dễ nhầm

allow_nan=True có thể tạo NaN không hợp lệ theo chuẩn JSON.
