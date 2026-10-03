---
{
  "id": "concept.dynamo-python.python-str-join",
  "slug": "python-str-join",
  "title": "Chuỗi: join",
  "description": "Một chuỗi ghép từ các phần tử.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: join",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.join"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.join"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.join(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

Chuỗi nhận phương thức là dấu ngăn; iterable chứa chuỗi.

## Kết quả

Một chuỗi ghép từ các phần tử.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(';'.join(['C01','C02']))
```

## Dễ nhầm

Phải chuyển số sang chuỗi trước; không tự xử lý quy tắc CSV.
