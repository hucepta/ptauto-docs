---
{
  "id": "concept.dynamo-python.python-sorted",
  "slug": "python-sorted",
  "title": "Python sorted",
  "description": "Danh sách mới được sắp xếp.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python sorted",
      "url": "https://docs.python.org/3/library/functions.html#sorted"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "sorted"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
sorted(iterable, key=None, reverse=False)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

key nhận mỗi phần tử và trả khóa sắp xếp.

## Kết quả

Danh sách mới được sắp xếp.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(sorted([{'s':50},{'s':0}],key=lambda r:r['s']))
```

## Dễ nhầm

Sắp từng cột riêng làm mất quan hệ bản ghi.
