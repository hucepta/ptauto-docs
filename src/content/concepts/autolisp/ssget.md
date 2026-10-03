---
{
  "id": "concept.autolisp.ssget",
  "slug": "ssget",
  "title": "ssget",
  "description": "Tạo selection set bằng thao tác chọn hoặc bộ lọc đối tượng.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "aliases": [
    "selection set",
    "đối tượng",
    "doi tuong"
  ],
  "exampleIds": [
    "example.autolisp.dem-line"
  ],
  "relatedConceptIds": [
    "concept.autolisp.list"
  ],
  "sources": [
    {
      "title": "Autodesk — ssget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0F37CC5E-1559-4011-B8CF-A3BA0973B2C3.htm"
    }
  ],
  "examplePlacements": [
    {
      "heading": "giá-trị-trả-về",
      "exampleIds": [
        "example.autolisp.dem-line"
      ]
    }
  ]
}
---

## Cú pháp thường dùng

```lisp
(ssget)
(ssget '((0 . "LINE")))
(ssget "_X" '((0 . "LINE")))
```

Hai lời gọi đầu yêu cầu chọn trên màn hình; bộ lọc mã DXF 0 giữ entity loại LINE. `"_X"` tìm trong database, không yêu cầu chọn.

## Giá trị trả về

Selection set hoặc `nil` khi không chọn được đối tượng. Đây không phải list; dùng `sslength` và `ssname` để đọc.

## Ví dụ: đếm LINE do người dùng chọn

Chuẩn bị DWG có LINE sẵn. Dán cả khối vào Command Line AutoCAD hỗ trợ AutoLISP; chọn vài LINE rồi Enter. Không cần tạo thêm entity.

```lisp
(defun c:PTADEMLINE (/ ss)
  (setq ss (ssget '((0 . "LINE"))))
  (if ss
    (princ (strcat "\nSo LINE: " (itoa (sslength ss))))
    (princ "\nKhong co LINE duoc chon."))
  (princ))
(c:PTADEMLINE)
```

Chọn hai LINE thì in `So LINE: 2`. Enter khi chưa chọn thì in thông báo không có LINE; Esc ngắt lệnh bằng lỗi hủy.

## Phạm vi toàn bản vẽ

`"_X"` có thể lấy entity ngoài vùng nhìn, trên layer tắt hoặc đóng băng, và ở các space khác nhau. Giới hạn bằng bộ lọc phù hợp trước khi xử lý. Không gọi `sslength` với `nil`.

[Tham chiếu Autodesk về ssget](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0F37CC5E-1559-4011-B8CF-A3BA0973B2C3.htm).
