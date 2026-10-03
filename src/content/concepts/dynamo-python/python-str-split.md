---
{
  "id": "concept.dynamo-python.python-str-split",
  "slug": "python-str-split",
  "title": "Chuỗi: split",
  "description": "Danh sách các chuỗi con.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: split",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.split"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.split"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.split(sep=None, maxsplit=-1)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

sep là dấu ngăn; maxsplit giới hạn số lần tách.

## Kết quả

Danh sách các chuỗi con.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('C01,10,20'.split(','))
```

## Dễ nhầm

Không dùng split thay csv.reader khi ô có dấu phẩy trong dấu nháy.
