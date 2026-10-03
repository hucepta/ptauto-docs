---
{
  "id": "concept.dynamo-python.python-repr",
  "slug": "python-repr",
  "title": "Python repr",
  "description": "Chuỗi biểu diễn phục vụ chẩn đoán.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python repr",
      "url": "https://docs.python.org/3/library/functions.html#repr"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "repr"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
repr(object)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

object là dữ liệu cần xem dấu nháy/ký tự ẩn.

## Kết quả

Chuỗi biểu diễn phục vụ chẩn đoán.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(repr('C01\n')) # thấy \n
```

## Dễ nhầm

Không đưa repr thay dữ liệu thực vào CSV bàn giao.
