---
{
  "id": "concept.dynamo-python.python-print",
  "slug": "python-print",
  "title": "Python print",
  "description": "Ghi văn bản ra luồng chuẩn; trả None.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python print",
      "url": "https://docs.python.org/3/library/functions.html#print"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "print"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
print(*objects, sep=' ', end='\n')
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

objects là giá trị in; sep ngăn cách; end kết thúc.

## Kết quả

Ghi văn bản ra luồng chuẩn; trả None.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('C01',12.5,sep=',') # C01,12.5
```

## Dễ nhầm

Trong Dynamo dùng OUT và Watch; không lấy giá trị trả từ print.
