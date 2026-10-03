---
{
  "id": "concept.dynamo-python.python-str-count",
  "slug": "python-str-count",
  "title": "Chuỗi: count",
  "description": "Số lần xuất hiện mẫu.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: count",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.count"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.count"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.count(sub, start=0, end=len(s))
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

sub là mẫu không chồng lấp.

## Kết quả

Số lần xuất hiện mẫu.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('C01;C02'.count(';')) # 1
```

## Dễ nhầm

Không thay đếm bản ghi CSV nếu dấu ngăn có trong ô được trích dẫn.
