---
{
  "id": "concept.dynamo-python.python-str-replace",
  "slug": "python-str-replace",
  "title": "Chuỗi: replace",
  "description": "Chuỗi mới sau thay thế.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: replace",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.replace"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.replace"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.replace(old, new, count=-1)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

old là chuỗi tìm; new là chuỗi thay; count giới hạn.

## Kết quả

Chuỗi mới sau thay thế.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('C-01'.replace('-','')) # C01
```

## Dễ nhầm

Thay toàn bộ dấu phẩy thập phân có thể phá dấu ngăn trường.
