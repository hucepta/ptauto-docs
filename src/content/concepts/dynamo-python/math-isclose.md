---
{
  "id": "concept.dynamo-python.math-isclose",
  "slug": "math-isclose",
  "title": "math.isclose",
  "description": "True nếu sai khác nằm trong dung sai.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: math.isclose",
      "url": "https://docs.python.org/3/library/math.html#math.isclose"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "math.isclose"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
math.isclose(a, b, rel_tol=1e-09, abs_tol=0.0)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

a,b là số; abs_tol cùng đơn vị với dữ liệu.

## Kết quả

True nếu sai khác nằm trong dung sai.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import math
print(math.isclose(10,10.001,abs_tol=0.002))
```

## Dễ nhầm

Dung sai phải theo yêu cầu dự án; không dùng mặc định cho mọi tọa độ.
