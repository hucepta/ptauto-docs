---
{
  "id": "concept.dynamo-python.python-str-startswith",
  "slug": "python-str-startswith",
  "title": "Chuỗi: startswith",
  "description": "True nếu chuỗi bắt đầu bằng tiền tố.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: startswith",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.startswith"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.startswith"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.startswith(prefix, start=0, end=len(s))
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

prefix là tiền tố; start/end giới hạn vùng xét.

## Kết quả

True nếu chuỗi bắt đầu bằng tiền tố.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('C01'.startswith('C')) # True
```

## Dễ nhầm

Phân biệt hoa/thường; không kiểm được toàn bộ quy tắc mã cọc.
