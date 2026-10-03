---
{"id": "concept.autolisp.thuat-ngu-vlax-property-available-p", "slug": "thuat-ngu-vlax-property-available-p", "title": "vlax-property-available-p", "description": "Thuộc tuyến ActiveX Windows-only của khóa; trả T hoặc nil. Khi đối số kiểm tra sửa là T, chỉ trả T nếu property tồn tại và có thể ghi.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm kiểm tra khả năng có hoặc ghi property"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Thuộc tuyến ActiveX Windows-only của khóa; trả T hoặc nil. Khi đối số kiểm tra sửa là T, chỉ trả T nếu property tồn tại và có thể ghi.

**Cách hiểu trong khóa:** hàm kiểm tra khả năng có hoặc ghi property.

## Ví dụ liên quan

```text
(vlax-property-available-p obj 'Radius)
```
