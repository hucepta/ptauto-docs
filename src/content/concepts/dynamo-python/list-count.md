---
{
  "id": "concept.dynamo-python.list-count",
  "slug": "list-count",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.Count",
  "description": "Số phần tử ở cấp đầu.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.Count",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.Count(list)
```

## Tham số

list là danh sách ở cấp muốn đếm.

## Kết quả

Số phần tử ở cấp đầu.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[[0,25],[50]];`. Tìm `List.Count` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `2`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Không đếm ba số nằm trong các nhánh con.
