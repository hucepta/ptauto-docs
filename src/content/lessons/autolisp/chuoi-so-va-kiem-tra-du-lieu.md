---
{
  "id": "lesson.autolisp.chuoi-so-va-kiem-tra-du-lieu",
  "slug": "chuoi-so-va-kiem-tra-du-lieu",
  "title": "Chuỗi và số",
  "description": "Chuyển và kiểm tra dữ liệu nhập để báo cáo lý trình không bị sai kiểu.",
  "status": "published",
  "chapterId": "chapter.autolisp.ngon-ngu-co-ban",
  "order": 5,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.autolisp.bieu-thuc-evaluation"
  ],
  "flow": [
    {
      "label": "Đầu vào",
      "detail": "Chuỗi hoặc số từ Command Line và file"
    },
    {
      "label": "Kiểm tra",
      "detail": "Phân biệt nil, số, chuỗi và giá trị ngoài miền"
    },
    {
      "label": "Đầu ra",
      "detail": "Giá trị dùng được hoặc thông báo lỗi"
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
  "illustration": "report"
}
---
<span id="bài-toán-từ-bảng-lý-trình" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Dữ liệu bảng lý trình

Một file có cột lý trình dạng `"125.50"`, còn phép tính cần số 125.50. AutoLISP không tự coi chuỗi này là số. `getreal` nhận số từ người dùng; `rtos` chuyển số sang chuỗi để in, `itoa` chuyển số nguyên. Với dữ liệu file, `distof` đọc chuỗi khoảng cách theo định dạng phù hợp, nhưng vẫn phải kiểm tra kết quả có phải số và đơn vị có đúng không.

| Giá trị | Ý nghĩa | Cách kiểm tra |
| --- | --- | --- |
| `125.5` | Số thực | `numberp` trả khác `nil` |
| `"125.5"` | Chuỗi | Chưa được cộng trực tiếp |
| `nil` | Không có giá trị | Dừng hoặc hỏi lại |

## Thử trên dữ liệu nhỏ

```lisp
(setq raw "125.50")
(setq station (distof raw 2))
(if (numberp station)
  (princ (strcat "\nLy trinh: " (rtos station 2 2)))
  (princ "\nLy trinh khong hop le.")
)
```

Chọn định dạng số rõ ràng và giữ nguyên giá trị gốc để có thể đối chiếu. `nil` từ bước chuyển đổi không được đi tiếp vào phép cộng. Nếu số 0 là một lý trình hợp lệ, đừng dùng điều kiện `> 0` để loại nó.

## Thực hành

Thử chuỗi `"0"`, `"25.25"`, chuỗi rỗng và `"Km25"`. Ghi giá trị nào được chấp nhận, giá trị nào cần báo lỗi. Sau đó tạo hàm chỉ trả số hoặc `nil`; phần gọi hàm mới quyết định thông báo cho người dùng.
