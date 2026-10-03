---
{"id": "concept.autolisp.thuat-ngu-repeat", "slug": "thuat-ngu-repeat", "title": "repeat", "description": "Đánh giá các biểu thức một số lần đã chỉ định và trả giá trị biểu thức cuối. Nếu không có biểu thức, trả `nil`; Autodesk xếp `repeat` vào special forms.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm lặp theo số lần `repeat`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Đánh giá các biểu thức một số lần đã chỉ định và trả giá trị biểu thức cuối. Nếu không có biểu thức, trả `nil`; Autodesk xếp `repeat` vào special forms.

**Cách hiểu trong khóa:** hàm lặp theo số lần `repeat`.

## Ví dụ liên quan

```text
(repeat 3 (princ "\nLap"))
```
