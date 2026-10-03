---
{
  "id": "concept.dynamo-python.list-sort",
  "slug": "list-sort",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.Sort",
  "description": "Danh sách theo thứ tự tăng.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.Sort",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.Sort(list)
```

## Tham số

list chứa các giá trị cùng loại so sánh được.

## Kết quả

Danh sách theo thứ tự tăng.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[50,0,25];`. Tìm `List.Sort` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `[0,25,50]`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Sắp cột số riêng làm lệch mã cọc; dùng SortByKey khi giữ cặp dữ liệu.
