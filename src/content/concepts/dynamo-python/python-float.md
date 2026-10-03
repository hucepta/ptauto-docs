---
{
  "id": "concept.dynamo-python.python-float",
  "slug": "python-float",
  "title": "Python float",
  "description": "Số thực Python.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python float",
      "url": "https://docs.python.org/3/library/functions.html#float"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "float"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
float(string)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

string dùng dấu chấm thập phân.

## Kết quả

Số thực Python.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(float('12.50')) # 12.5
```

## Dễ nhầm

float('12,50') lỗi; NaN và infinity cũng có thể được chấp nhận.
