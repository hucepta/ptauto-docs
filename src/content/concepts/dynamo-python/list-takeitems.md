---
{
  "id": "concept.dynamo-python.list-takeitems",
  "slug": "list-takeitems",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.TakeItems",
  "description": "Danh sách con theo số lượng yêu cầu.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.TakeItems",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.TakeItems(list, amount)
```

## Tham số

list là nguồn; amount là số phần tử lấy (dương lấy từ đầu).

## Kết quả

Danh sách con theo số lượng yêu cầu.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[0,25,50];`. Tìm `List.TakeItems` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Thêm Code Block `2;` vào cổng amount. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `[0,25]`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Ví dụ dùng amount=2; số âm lấy theo phía cuối, cần kiểm thứ tự. 
