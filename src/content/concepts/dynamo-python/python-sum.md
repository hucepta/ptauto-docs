---
{
  "id": "concept.dynamo-python.python-sum",
  "slug": "python-sum",
  "title": "Python sum",
  "description": "Tổng các phần tử số.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python sum",
      "url": "https://docs.python.org/3/library/functions.html#sum"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "sum"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
sum(iterable, start=0)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable chứa các số; start là tổng ban đầu.

## Kết quả

Tổng các phần tử số.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(sum([25,30,45])) # 100
```

## Dễ nhầm

Không dùng sum để nối chuỗi; lọc None trước.
