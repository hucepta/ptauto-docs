---
{
  "id": "lesson.autolisp.entmake-entmod-an-toan",
  "slug": "entmake-entmod-an-toan",
  "title": "Tạo và sửa entity bằng entmake, entmod",
  "description": "Phân biệt tạo entity mới và sửa danh sách DXF của entity cũ.",
  "status": "published",
  "chapterId": "chapter.autolisp.du-lieu-ban-ve",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.entity-dxf-layer-attribute"
  ],
  "flow": [
    {
      "label": "Đọc",
      "detail": "entget lấy danh sách DXF và handle để đối chiếu"
    },
    {
      "label": "Thay đổi",
      "detail": "entmake tạo mới; entmod sửa dữ liệu hợp lệ"
    },
    {
      "label": "Kiểm tra",
      "detail": "Đọc lại entity và dùng entupd khi cần"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoLISP Developer's Guide",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; thử lại trên phiên bản đang dùng",
      "platform": "Windows / macOS"
    }
  ],
  "illustration": "metadata"
}
---

## Hai kiểu thay đổi bản vẽ

`entmake` tạo một entity từ danh sách DXF; `entmod` cập nhật một entity đang có bằng danh sách dữ liệu phù hợp. Với tuyến hạ tầng, bạn có thể tạo marker POINT mới bằng `entmake`. Nếu muốn sửa layer của một LINE có sẵn, cần lấy `entget`, thay đúng cặp mã nhóm 8 rồi gọi `entmod`. Không được sửa nhầm cặp mã nhóm 0 vì đó là loại entity.

```lisp
(entmake '((0 . "POINT") (10 0.0 0.0 0.0)))
```

Ví dụ trên chỉ tạo một điểm thử ở gốc WCS. Trước khi tạo hàng loạt điểm cọc, hãy kiểm tra tên layer đích, tọa độ và số lượng dự kiến; dùng bản sao DWG. Với dữ liệu của entity cũ, giữ nguyên các cặp DXF không định sửa. `entmod` có giới hạn theo loại đối tượng và không thay mọi thuộc tính; đọc lại kết quả hoặc dùng API thích hợp hơn khi cần.

## Thực hành

Trên DWG thử, tạo một POINT rồi dùng `entlast` và `entget` kiểm tra mã 0 và 10. Viết ra vì sao không nên giả định `entlast` là đối tượng mình vừa tạo nếu routine gọi thêm lệnh khác trước khi đọc. Thiết kế checklist trước khi cho phép routine sửa 100 đối tượng.
