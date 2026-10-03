---
{"id": "concept.autolisp.thuat-ngu-strcase", "slug": "thuat-ngu-strcase", "title": "strcase", "description": "Trả bản sao của chuỗi với chữ cái chuyển thành chữ hoa mặc định; khi đối số tùy chọn khác `nil`, trả chữ thường. Khóa dùng cùng một chế độ ở hai phía để so sánh layer không phân biệt hoa/thường.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm đổi kiểu chữ `strcase`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Trả bản sao của chuỗi với chữ cái chuyển thành chữ hoa mặc định; khi đối số tùy chọn khác `nil`, trả chữ thường. Khóa dùng cùng một chế độ ở hai phía để so sánh layer không phân biệt hoa/thường.

**Cách hiểu trong khóa:** hàm đổi kiểu chữ `strcase`.

## Ví dụ liên quan

```text
(= (strcase layer) (strcase layer-chuan))
```
