---
{
  "id": "concept.dynamo-python.list-uniqueitems",
  "slug": "list-uniqueitems",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.UniqueItems",
  "description": "Danh sách các giá trị duy nhất.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.UniqueItems",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.UniqueItems(list)
```

## Tham số

list là nguồn cần bỏ giá trị lặp.

## Kết quả

Danh sách các giá trị duy nhất.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `["C01","C01","C02"];`. Tìm `List.UniqueItems` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `["C01","C02"]`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Bỏ trùng không giải thích bản ghi nào bị bỏ; giữ báo cáo ID trùng riêng.
