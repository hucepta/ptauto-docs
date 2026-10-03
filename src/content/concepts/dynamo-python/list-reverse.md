---
{
  "id": "concept.dynamo-python.list-reverse",
  "slug": "list-reverse",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.Reverse",
  "description": "Danh sách theo chiều ngược.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.Reverse",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.Reverse(list)
```

## Tham số

list là danh sách cần đảo thứ tự.

## Kết quả

Danh sách theo chiều ngược.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[0,25,50];`. Tìm `List.Reverse` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `[50,25,0]`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Đảo cả bản ghi; đừng đảo riêng cột mã.
