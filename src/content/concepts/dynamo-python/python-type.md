---
{
  "id": "concept.dynamo-python.python-type",
  "slug": "python-type",
  "title": "Python type",
  "description": "Lớp của đối tượng.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python type",
      "url": "https://docs.python.org/3/library/functions.html#type"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "type"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
type(object)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

object là giá trị cần chẩn đoán.

## Kết quả

Lớp của đối tượng.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(type([1,2]).__name__) # list
```

## Dễ nhầm

Tên lớp đối tượng ứng dụng chủ không chứng minh nó còn hợp lệ trong bản vẽ.
