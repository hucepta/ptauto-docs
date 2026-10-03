---
{
  "id": "lesson.visual-lisp-activex.modelspace-paperspace-layout",
  "slug": "modelspace-paperspace-layout",
  "title": "ModelSpace, PaperSpace và Layout trong Object Model",
  "description": "Xác định collection đang chứa đối tượng trước khi đọc hoặc tạo dữ liệu.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.object-model",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.visual-lisp-activex.object-model-collections"
  ],
  "flow": [
    {
      "label": "Application",
      "detail": "Lấy ActiveDocument"
    },
    {
      "label": "Collection",
      "detail": "Chọn ModelSpace, PaperSpace, Layers hoặc Blocks"
    },
    {
      "label": "Đối tượng",
      "detail": "Duyệt hoặc thêm trong phạm vi đúng"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — VLA Functions with ActiveX",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD ActiveX",
      "version": "COM/VLA có hỗ trợ",
      "platform": "Windows"
    }
  ]
}
---

## Cùng một DWG nhưng nhiều phạm vi

`Application` là gốc mô hình ActiveX. `ActiveDocument` là bản vẽ đang làm việc. Từ Document, `ModelSpace` chứa đối tượng mô hình, còn `PaperSpace` liên quan không gian giấy/layout. Layer và Blocks là các collection khác. Nếu một tool chỉ đếm LINE trong ModelSpace, nó không tự động đếm LINE nằm trên Layout.

```text
Application
  └─ ActiveDocument
       ├─ ModelSpace → entity mô hình
       ├─ PaperSpace → entity không gian giấy
       ├─ Layers → định nghĩa layer
       └─ Blocks → định nghĩa block
```

Thực hành đọc tên bản vẽ và đếm đối tượng ModelSpace trong DWG mẫu, sau đó đối chiếu với số lượng ngoài Layout. Tránh dùng `ActiveDocument` làm biến toàn cục tồn tại qua nhiều bản vẽ: người dùng có thể đổi document. Khi cần thao tác với một document khác, phải chỉ rõ document mục tiêu.

## Bài luyện

Vẽ một LINE trong Model và một LINE trong Layout. Nêu số lượng mong đợi khi chỉ duyệt ModelSpace. Chỉ ra collection nào cần đọc nếu yêu cầu là “tất cả layer” thay vì “tất cả LINE”.
