---
{
  "id": "concept.dynamo-python.list-lastitem",
  "slug": "list-lastitem",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.LastItem",
  "description": "Phần tử cuối danh sách.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.LastItem",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.LastItem(list)
```

## Tham số

list là danh sách nguồn.

## Kết quả

Phần tử cuối danh sách.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[0,25,50];`. Tìm `List.LastItem` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `50`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Giá trị cuối không phải lớn nhất nếu nguồn chưa sắp xếp.
