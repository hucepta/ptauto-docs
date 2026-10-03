---
{
  "id": "concept.dynamo-python.python-round",
  "slug": "python-round",
  "title": "Python round",
  "description": "Số làm tròn theo quy tắc Python.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python round",
      "url": "https://docs.python.org/3/library/functions.html#round"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "round"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
round(number, ndigits=None)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

ndigits là số chữ số thập phân cần giữ.

## Kết quả

Số làm tròn theo quy tắc Python.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(round(12.345,2)) # 12.35
```

## Dễ nhầm

Số nhị phân có sai số; không dùng để xác nhận độ chính xác đo đạc.
