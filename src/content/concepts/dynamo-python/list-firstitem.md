---
{
  "id": "concept.dynamo-python.list-firstitem",
  "slug": "list-firstitem",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.FirstItem",
  "description": "Phần tử đầu, có thể là một danh sách con.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.FirstItem",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.FirstItem(list)
```

## Tham số

list là danh sách nguồn.

## Kết quả

Phần tử đầu, có thể là một danh sách con.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[0,25,50];`. Tìm `List.FirstItem` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `0`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Danh sách rỗng không có phần tử đầu.
