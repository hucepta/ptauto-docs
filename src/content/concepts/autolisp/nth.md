---
{
  "id": "concept.autolisp.nth",
  "slug": "nth",
  "title": "nth",
  "description": "Lấy phần tử theo chỉ số.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — nth",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0330FE17-6E15-4E34-BB50-E9040EABDADB.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(nth n lst)
```

## Tham số

n: chỉ số từ 0; list: dữ liệu.

## Kết quả

Phần tử hoặc nil nếu vượt cuối.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(nth 1 '(10 20 30)) ; 20
```

## Lỗi thường gặp

Phần tử đầu có chỉ số 0.
