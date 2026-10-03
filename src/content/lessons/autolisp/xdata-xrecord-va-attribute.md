---
{
  "id": "lesson.autolisp.xdata-xrecord-va-attribute",
  "slug": "xdata-xrecord-va-attribute",
  "title": "XData và Attribute",
  "description": "Chọn nơi lưu mã và thông số cọc theo cách người dùng sẽ đọc, sửa và trao đổi DWG.",
  "status": "published",
  "chapterId": "chapter.autolisp.du-lieu-ban-ve",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.entity-dxf-layer-attribute"
  ],
  "flow": [
    {
      "label": "Yêu cầu",
      "detail": "Ai cần xem và sửa mã cọc?"
    },
    {
      "label": "Nơi lưu",
      "detail": "Attribute, XData hoặc dictionary/Xrecord"
    },
    {
      "label": "Đọc lại",
      "detail": "Đóng/mở DWG và đối chiếu ID với bảng cọc"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — About Xrecord Objects",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-LT-AutoLISP/files/GUID-FA5F2E08-24F5-4947-A470-6CA84E404F2A.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD AutoLISP",
      "version": "Kiểm tra lại API và phiên bản đang dùng",
      "platform": "Windows / macOS"
    }
  ],
  "illustration": "metadata"
}
---

## Bài toán: cọc C-025 cần giữ tên qua lần bàn giao

Một block cọc có nhãn nhìn thấy trên bản vẽ, nhưng bảng CSV còn chứa lý trình, cao độ và mã tuyến. Nếu ghi tất cả vào TEXT rời, người sửa block sẽ làm mất quan hệ dữ liệu. Trước khi chọn API, hãy hỏi: dữ liệu nào người vẽ cần nhìn, dữ liệu nào máy cần đọc, và dữ liệu có thuộc một block hay toàn bộ dự án?

| Nơi lưu | Dùng khi | Cần lưu ý |
|---|---|---|
| Attribute của block | Người dùng cần thấy/sửa mã cọc trong bản vẽ | Duyệt subentity bằng `entnext`; kết thúc ở `SEQEND`. |
| XData | Metadata nhỏ gắn với một entity, theo tên ứng dụng đăng ký | Cần `regapp`, kiểm tra giới hạn và schema trước khi ghi. |
| Dictionary/Xrecord | Dữ liệu cấu trúc hơn, lưu ở extension dictionary hoặc named object dictionary | Xrecord phải có owner; ghi và đọc lại bằng khóa ổn định. |

## Một lượt đọc an toàn

Chọn đúng block, ghi lại handle và đọc `entget` để kiểm tra loại `INSERT`. Duyệt các entity tiếp theo cho đến `SEQEND`, chỉ nhận `ATTRIB`; không mặc định mọi block đều có attribute. Với XData, đọc bằng `entget` có tên ứng dụng cần tra. Với Xrecord, tìm dictionary và khóa trước khi đọc; nếu chưa có thì trả trạng thái “thiếu metadata” thay vì tự tạo giá trị giả.

Ví dụ này chỉ minh họa cách nhận diện attribute, chưa ghi XData hay Xrecord vào DWG:

```lisp
(defun pta:attribute-tags (insert / next data tags)
  (setq next (entnext insert))
  (while (and next (/= "SEQEND" (cdr (assoc 0 (setq data (entget next))))))
    (if (= "ATTRIB" (cdr (assoc 0 data)))
      (setq tags (cons (cdr (assoc 2 data)) tags)))
    (setq next (entnext next)))
  (reverse tags))
```

## Kiểm tra

Thử block có 0, 1 và nhiều attribute; thử block đã đổi tên nhưng vẫn giữ handle; thử DWG được sao chép sang hồ sơ khác. So số mã cọc tìm được với CSV nguồn. Chỉ chọn nơi lưu sau khi đã biết bên nhận DWG có thể đọc kiểu metadata đó.
