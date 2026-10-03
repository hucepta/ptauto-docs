---
{
  "id": "concept.dynamo-python.math-hypot",
  "slug": "math-hypot",
  "title": "math.hypot",
  "description": "Độ dài Euclid từ gốc đến điểm.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: math.hypot",
      "url": "https://docs.python.org/3/library/math.html#math.hypot"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "math.hypot"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
math.hypot(x, y)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

x,y là các thành phần lệch tọa độ.

## Kết quả

Độ dài Euclid từ gốc đến điểm.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import math
print(math.hypot(3,4)) # 5.0
```

## Dễ nhầm

Kinh/vĩ độ không được đo trực tiếp như mét bằng hypot.
