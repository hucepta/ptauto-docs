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
    },
    {
      "title": "Tài liệu chính thức — List.Count",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-3_lists-of-lists.html"
    }
  ]
}
---

## Cổng node

`List.Count` nhận danh sách ở cổng `list` và trả số phần tử ở cấp ngoài cùng. Mỗi danh sách con vẫn là một phần tử. Đây là node Dynamo, không phải hàm Python.

## Dữ liệu và kết nối

Tạo graph mới, thêm Code Block và nhập dữ liệu DesignScript:

```text
[[0, 25], [50]];
```

Đặt `List.Count` và `Watch`. Nối đầu ra Code Block → cổng `list` của `List.Count` → `Watch`. Để cổng `list` ở cấu hình mặc định, không bật Use Levels. Chọn Manual rồi Run.

## Kết quả mong đợi

```text
2
```

Danh sách có hai nhóm, dù chứa tổng cộng ba số. Đổi nguồn thành `[[0, 25], [50], []];` rồi Run: kết quả là `3`; nhóm rỗng cũng chiếm một vị trí ở cấp ngoài.

## Áp dụng và kiểm tra

Dùng để đếm nhóm tuyến hoặc nhóm cọc trước khi xử lý từng nhánh. Nếu cần đếm số phần tử từng nhóm, phải chọn cấp danh sách phù hợp hoặc dùng List.Map; không suy tổng số phần tử từ số nhóm. Xem dữ liệu nguồn bằng Watch trước khi đổi List@Level.

Ví dụ là hướng dẫn dựng graph; chưa được xác nhận chạy trong Dynamo hay AutoCAD/Civil 3D ở đây. [Dynamo Primer: List.Count](https://primer.dynamobim.org/en/06_Designing-with-Lists/6-2_working-with-lists.html).
