---
{
  "id": "concept.autolisp.ssmemb",
  "slug": "ssmemb",
  "title": "ssmemb",
  "description": "Kiểm tra entity thuộc tập chọn.",
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
      "title": "Autodesk — ssmemb",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8F291146-6A1A-4A31-9380-C800590BF27D.htm"
    },
    {
      "title": "Autodesk — ssmemb",
      "url": "https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-8F291146-6A1A-4A31-9380-C800590BF27D-htm.html"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(ssmemb ename ss)
```

## Tham số và kết quả

`ename` là entity name, `ss` là selection set hợp lệ. Hàm trả chính entity name nếu thuộc tập, hoặc `nil` nếu không thuộc; kết quả không phải chỉ mục hay giá trị `T`.

## Ví dụ: kiểm tra một entity trong tập LINE

Chuẩn bị DWG có LINE và một entity khác. Dán vào Command Line AutoCAD: chọn tập LINE, Enter, rồi chọn entity cần kiểm tra.

```lisp
(defun c:PTATHUOCTAP (/ ss picked)
  (setq ss (ssget '((0 . "LINE"))))
  (if ss
    (if (setq picked (entsel "\nChon entity can kiem tra: "))
      (if (ssmemb (car picked) ss)
        (princ "\nThuoc tap LINE vua chon.")
        (princ "\nKhong thuoc tap LINE vua chon."))
      (princ "\nKhong chon entity de kiem tra."))
    (princ "\nTap LINE rong."))
  (princ))
(c:PTATHUOCTAP)
```

Chọn lại LINE nằm trong tập thì in `Thuoc tap LINE vua chon.`; entity ngoài tập cho thông báo ngược lại. Không có thay đổi hình học.

## Lỗi thường gặp

Enter khi không chọn trả `nil` và được kiểm tra ở đây. Esc ngắt lệnh bằng lỗi hủy. Không truyền `nil` thay selection set; không dùng list do `entsel` trả về thay entity name — cần `car`.

[Tham chiếu Autodesk về ssmemb](https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-8F291146-6A1A-4A31-9380-C800590BF27D-htm.html).
