---
{"id": "concept.autolisp.thuat-ngu-trustedpaths", "slug": "thuat-ngu-trustedpaths", "title": "TRUSTEDPATHS", "description": "Chuỗi đường dẫn xác định các thư mục được phép nạp và chạy file chứa mã. TRUSTEDPATHS chỉ cấp quyền nạp/chạy code; nó không tự thêm thư mục vào Support File Search Path. Muốn AutoCAD tìm file theo tên, thư mục vẫn phải nằm trong đường dẫn tìm kiếm hỗ trợ hoặc phải truyền đường dẫn phù hợp.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["biến hệ thống khai báo các đường dẫn tin cậy"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Chuỗi đường dẫn xác định các thư mục được phép nạp và chạy file chứa mã. TRUSTEDPATHS chỉ cấp quyền nạp/chạy code; nó không tự thêm thư mục vào Support File Search Path. Muốn AutoCAD tìm file theo tên, thư mục vẫn phải nằm trong đường dẫn tìm kiếm hỗ trợ hoặc phải truyền đường dẫn phù hợp.

**Cách hiểu trong khóa:** biến hệ thống khai báo các đường dẫn tin cậy.

## Ví dụ liên quan

```text
(setvar "TRUSTEDPATHS" "C:\\AutoLISP")
```
