---
{
  "id": "concept.dynamo-python.python-hasattr",
  "slug": "python-hasattr",
  "title": "Python hasattr",
  "description": "True nếu truy cập thuộc tính không báo AttributeError.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python hasattr",
      "url": "https://docs.python.org/3/library/functions.html#hasattr"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "hasattr"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
hasattr(object, name)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

name là tên thuộc tính cần kiểm.

## Kết quả

True nếu truy cập thuộc tính không báo AttributeError.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(hasattr(3+4j,'imag')) # True
```

## Dễ nhầm

Kiểm tồn tại không chứng minh đối tượng Civil đã mở trong transaction.
