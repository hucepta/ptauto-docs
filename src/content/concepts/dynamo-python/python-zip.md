---
{
  "id": "concept.dynamo-python.python-zip",
  "slug": "python-zip",
  "title": "Python zip",
  "description": "Bộ duyệt các bộ giá trị song song.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python zip",
      "url": "https://docs.python.org/3/library/functions.html#zip"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "zip"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
zip(*iterables)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

Các nguồn cần ghép cùng vị trí.

## Kết quả

Bộ duyệt các bộ giá trị song song.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(zip(['C01','C02'],[10,20])))
```

## Dễ nhầm

Mặc định dừng ở nguồn ngắn nhất; kiểm len trước khi ghép.
