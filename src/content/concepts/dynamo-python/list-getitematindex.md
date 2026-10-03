---
{
  "id": "concept.dynamo-python.list-getitematindex",
  "slug": "list-getitematindex",
  "title": "List.GetItemAtIndex",
  "description": "Lấy phần tử ở vị trí chỉ định trong list.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "kind": "syntax",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Dynamo Primer",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-3_lists-of-lists.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cổng node

`List.GetItemAtIndex` có cổng `list` và `index`. Index bắt đầu từ `0`; đầu ra là phần tử tại vị trí đó, có thể là cả một danh sách con.

## Dữ liệu và kết nối

Tạo ba node Code Block, List.GetItemAtIndex và Watch. Code Block dữ liệu:

```text
[["C01", "C02"], ["C03"]];
```

Thêm Code Block thứ hai chứa `0;`. Nối dữ liệu → `list`, số `0` → `index`, đầu ra node → Watch. Không bật Use Levels cho bài này. Chọn Manual và Run.

## Kết quả mong đợi

```text
["C01", "C02"]
```

Watch biểu diễn danh sách con bằng các dòng có index. Đổi index thành `1;`: đầu ra là `["C03"]`. Muốn lấy riêng `"C02"`, nối kết quả của lần lấy nhóm index `0` vào một List.GetItemAtIndex thứ hai và cấp index `1` cho node đó.

## Áp dụng và kiểm tra

Dùng để chọn một nhóm đã biết vị trí hoặc lấy một thuộc tính từ hàng dữ liệu. Với hai nhóm, chỉ dùng index `0` và `1` trong bài này; kiểm List.Count trước khi lấy index do người dùng nhập. Không dùng vị trí thay cho ID bền vững khi danh sách có thể bị sắp xếp lại.

Ví dụ chưa được chạy trong Dynamo tại đây. [Dynamo Primer: cấu trúc danh sách và GetItemAtIndex](https://primer.dynamobim.org/en/06_Designing-with-Lists/6-3_lists-of-lists.html).
