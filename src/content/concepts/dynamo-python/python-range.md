---
{
  "id": "concept.dynamo-python.python-range",
  "slug": "python-range",
  "title": "Python range",
  "description": "Dãy số nguyên dùng cho chỉ số.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python range",
      "url": "https://docs.python.org/3/library/functions.html#range"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "range"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
range(start, stop, step)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

start gồm trong dãy; stop bị loại; step khác 0.

## Kết quả

Dãy số nguyên dùng cho chỉ số.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(range(0,51,25))) # [0,25,50]
```

## Dễ nhầm

Không nhận bước số thực; stop không tự thuộc dãy.
