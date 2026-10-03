---
{
  "id": "concept.dynamo-python.math-isfinite",
  "slug": "math-isfinite",
  "title": "math.isfinite",
  "description": "True nếu số không là NaN hay vô cực.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: math.isfinite",
      "url": "https://docs.python.org/3/library/math.html#math.isfinite"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "math.isfinite"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
math.isfinite(x)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

x là số cần kiểm.

## Kết quả

True nếu số không là NaN hay vô cực.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import math
print(math.isfinite(float("nan"))) # False
```

## Dễ nhầm

Kiểm hữu hạn trước khi xuất tọa độ.
