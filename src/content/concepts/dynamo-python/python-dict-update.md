---
{
  "id": "concept.dynamo-python.python-dict-update",
  "slug": "python-dict-update",
  "title": "dict: update",
  "description": "Thay đổi từ điển, trả None.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: dict: update",
      "url": "https://docs.python.org/3/library/stdtypes.html#dict.update"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "dict.update"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
dict.update(other)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

other là từ điển hoặc các cặp khóa/giá trị.

## Kết quả

Thay đổi từ điển, trả None.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
r={'id':'C01'}; r.update({'x':10}); print(r)
```

## Dễ nhầm

Khóa trùng bị ghi đè; kiểm trước khi gộp hồ sơ.
