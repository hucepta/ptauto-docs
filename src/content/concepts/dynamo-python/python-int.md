---
{
  "id": "concept.dynamo-python.python-int",
  "slug": "python-int",
  "title": "Python int",
  "description": "Số nguyên được đọc từ chuỗi.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python int",
      "url": "https://docs.python.org/3/library/functions.html#int"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "int"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
int(string, base=10)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

string chứa số nguyên; base là cơ số.

## Kết quả

Số nguyên được đọc từ chuỗi.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(int('025')) # 25
```

## Dễ nhầm

int('25.5') lỗi; int(25.9) cắt phần thập phân.
