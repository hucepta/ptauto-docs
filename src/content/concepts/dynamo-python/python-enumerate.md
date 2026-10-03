---
{
  "id": "concept.dynamo-python.python-enumerate",
  "slug": "python-enumerate",
  "title": "Python enumerate",
  "description": "Bộ duyệt các cặp chỉ số và giá trị.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python enumerate",
      "url": "https://docs.python.org/3/library/functions.html#enumerate"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "enumerate"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
enumerate(iterable, start=0)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

start là chỉ số bắt đầu ghi vào báo cáo.

## Kết quả

Bộ duyệt các cặp chỉ số và giá trị.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(enumerate(['C01','C02'],start=2)))
```

## Dễ nhầm

start=2 hữu ích cho CSV có dòng tiêu đề; không phải lý trình.
