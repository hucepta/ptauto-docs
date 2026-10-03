---
{
  "id": "concept.dynamo-python.python-getattr",
  "slug": "python-getattr",
  "title": "Python getattr",
  "description": "Giá trị thuộc tính hoặc mặc định.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python getattr",
      "url": "https://docs.python.org/3/library/functions.html#getattr"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "getattr"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
getattr(object, name, default)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

name là chuỗi tên thuộc tính; default dùng khi thiếu.

## Kết quả

Giá trị thuộc tính hoặc mặc định.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(getattr(3+4j,'real',0)) # 3.0
```

## Dễ nhầm

Lỗi bên trong getter không luôn được thay bằng default.
