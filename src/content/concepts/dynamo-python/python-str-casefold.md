---
{
  "id": "concept.dynamo-python.python-str-casefold",
  "slug": "python-str-casefold",
  "title": "Chuỗi: casefold",
  "description": "Chuỗi phục vụ so sánh không phân biệt hoa/thường.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: casefold",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.casefold"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.casefold"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.casefold()
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

Không nhận tham số.

## Kết quả

Chuỗi phục vụ so sánh không phân biệt hoa/thường.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('ROAD'.casefold()=='road') # True
```

## Dễ nhầm

Giữ chuỗi gốc để bàn giao và hiển thị.
