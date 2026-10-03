---
{
  "id": "concept.dynamo-python.python-divmod",
  "slug": "python-divmod",
  "title": "Python divmod",
  "description": "Tuple thương nguyên và số dư.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python divmod",
      "url": "https://docs.python.org/3/library/functions.html#divmod"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "divmod"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
divmod(a, b)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

a là tổng; b là bước chia khác 0.

## Kết quả

Tuple thương nguyên và số dư.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(divmod(127,25)) # (5,2)
```

## Dễ nhầm

Không dùng số dư gần 0 của float làm bằng chứng trùng lý trình.
