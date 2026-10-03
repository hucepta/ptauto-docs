---
{
  "id": "concept.dynamo-python.list-transpose",
  "slug": "list-transpose",
  "status": "published",
  "technology": "dynamo-python",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "List.Transpose",
  "description": "Bảng đổi hàng thành cột.",
  "sources": [
    {
      "title": "Tài liệu chính thức: List.Transpose",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
List.Transpose(lists)
```

## Tham số

lists là bảng các hàng có số phần tử phù hợp.

## Kết quả

Bảng đổi hàng thành cột.

## Thực hành

Trong Dynamo, bấm đúp vùng trống tạo Code Block `[["C01",10],["C02",20]];`. Tìm `List.Transpose` trong Library bên trái, đặt node và nối danh sách vào cổng nguồn. Tìm Watch, nối cổng ra node vào Watch. Chọn Manual và bấm Run; kết quả phải là `[["C01","C02"],[10,20]]`. Đổi một giá trị nguồn rồi chạy lại để kiểm phụ thuộc.

## Dễ nhầm

Hàng thiếu cột cần xử lý trước; không giả định bảng luôn chữ nhật.
