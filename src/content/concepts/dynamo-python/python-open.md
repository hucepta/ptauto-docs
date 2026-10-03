---
{
  "id": "concept.dynamo-python.python-open",
  "slug": "python-open",
  "title": "Python open",
  "description": "Đối tượng tệp cần đóng sau khi dùng.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python open",
      "url": "https://docs.python.org/3/library/functions.html#open"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "open"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
open(file, mode='r', encoding=None, newline=None)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

file là đường dẫn; mode='w' ghi đè; encoding điều khiển mã hóa.

## Kết quả

Đối tượng tệp cần đóng sau khi dùng.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
with open('coc.csv',encoding='utf-8-sig',newline='') as f: print(f.readline())
```

## Dễ nhầm

Đường dẫn tương đối phụ thuộc thư mục chạy, không mặc định cạnh đồ thị.
