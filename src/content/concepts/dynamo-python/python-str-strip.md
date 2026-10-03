---
{
  "id": "concept.dynamo-python.python-str-strip",
  "slug": "python-str-strip",
  "title": "Chuỗi: strip",
  "description": "Chuỗi bỏ ký tự đầu/cuối.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: strip",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.strip"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.strip"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.strip(chars=None)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

chars là tập ký tự bỏ ở hai đầu.

## Kết quả

Chuỗi bỏ ký tự đầu/cuối.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(' C01 '.strip()) # C01
```

## Dễ nhầm

Không bỏ khoảng trắng giữa chuỗi và không bỏ một tiền tố nguyên khối.
