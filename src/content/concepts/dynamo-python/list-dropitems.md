---
{
  "id": "concept.dynamo-python.list-dropitems",
  "slug": "list-dropitems",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.DropItems",
  "description": "Danh sách còn lại sau bỏ.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.DropItems",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.DropItems(list, amount)
```

## Tham số

amount dương bỏ từ đầu; list là nguồn.

## Kết quả

Danh sách còn lại sau bỏ.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[0,25,50];`. Tìm `List.DropItems` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Thêm Code Block `1;` vào cổng amount. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `[25,50]`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Ví dụ dùng amount=1; bỏ riêng một cột làm lệch bản ghi.
