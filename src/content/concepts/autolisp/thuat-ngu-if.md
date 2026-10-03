---
{"id": "concept.autolisp.thuat-ngu-if", "slug": "thuat-ngu-if", "title": "if", "description": "Đánh giá test expression; nếu khác `nil` thì chạy nhánh then, nếu là `nil` thì chạy nhánh else nếu có. Trả giá trị của nhánh được chọn; Autodesk xếp `if` vào special forms.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["biểu thức rẽ nhánh có điều kiện `if`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Đánh giá test expression; nếu khác `nil` thì chạy nhánh then, nếu là `nil` thì chạy nhánh else nếu có. Trả giá trị của nhánh được chọn; Autodesk xếp `if` vào special forms.

**Cách hiểu trong khóa:** biểu thức rẽ nhánh có điều kiện `if`.

## Ví dụ liên quan

```text
(if (> n 0) (princ "Duong") (princ "Khong duong"))
```
