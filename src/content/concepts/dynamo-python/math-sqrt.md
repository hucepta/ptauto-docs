---
{
  "id": "concept.dynamo-python.math-sqrt",
  "slug": "math-sqrt",
  "title": "math.sqrt",
  "description": "Căn bậc hai số thực.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: math.sqrt",
      "url": "https://docs.python.org/3/library/math.html#math.sqrt"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "math.sqrt"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
math.sqrt(x)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

x là số không âm.

## Kết quả

Căn bậc hai số thực.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import math
print(math.sqrt(9)) # 3.0
```

## Dễ nhầm

Số âm gây ValueError.
