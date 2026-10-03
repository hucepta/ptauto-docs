---
{"id": "concept.autolisp.thuat-ngu-line-command-token", "slug": "thuat-ngu-line-command-token", "title": "LINE command token", "description": "Token `._LINE`: dấu gạch dưới `_` yêu cầu tên lệnh/keyword tiếng Anh để code hoạt động trên các bản AutoCAD khác ngôn ngữ; dấu chấm `.` gọi lệnh gốc của AutoCAD nếu tên lệnh đã bị định nghĩa lại.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["token lệnh `._LINE`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Token `._LINE`: dấu gạch dưới `_` yêu cầu tên lệnh/keyword tiếng Anh để code hoạt động trên các bản AutoCAD khác ngôn ngữ; dấu chấm `.` gọi lệnh gốc của AutoCAD nếu tên lệnh đã bị định nghĩa lại.

**Cách hiểu trong khóa:** token lệnh `._LINE`.

## Ví dụ liên quan

```text
(command "._line" p1 p2 "")
```
