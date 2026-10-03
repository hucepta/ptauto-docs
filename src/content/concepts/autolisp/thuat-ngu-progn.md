---
{"id": "concept.autolisp.thuat-ngu-progn", "slug": "thuat-ngu-progn", "title": "progn", "description": "Đánh giá nhiều biểu thức theo thứ tự tại vị trí chỉ cho phép một biểu thức, rồi trả giá trị biểu thức cuối. Autodesk xếp `progn` vào special forms.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm gom nhiều biểu thức `progn`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Đánh giá nhiều biểu thức theo thứ tự tại vị trí chỉ cho phép một biểu thức, rồi trả giá trị biểu thức cuối. Autodesk xếp `progn` vào special forms.

**Cách hiểu trong khóa:** hàm gom nhiều biểu thức `progn`.

## Ví dụ liên quan

```text
(progn (setq a 1) (setq b 2) (+ a b))
```
