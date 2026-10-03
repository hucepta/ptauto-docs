---
{
  "id": "concept.dynamo-python.python-format",
  "slug": "python-format",
  "title": "Python format",
  "description": "Chuỗi đã định dạng.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python format",
      "url": "https://docs.python.org/3/library/functions.html#format"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "format"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
format(value, format_spec)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

format_spec mô tả định dạng xuất.

## Kết quả

Chuỗi đã định dạng.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(format(12.5,'.2f')) # 12.50
```

## Dễ nhầm

Chuỗi định dạng dùng để hiển thị; giữ số gốc cho tính toán.
