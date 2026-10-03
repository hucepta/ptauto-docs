---
{
  "id": "lesson.autocad-dotnet.xdata-xrecord-va-documentlock",
  "slug": "xdata-xrecord-va-documentlock",
  "title": "Dữ liệu mở rộng",
  "description": "Phân biệt XData/Xrecord và điều kiện cần DocumentLock khi tool ghi nhiều bản vẽ.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.plugin-tin-cay",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.plugin-tin-cay"
  ],
  "flow": [
    {
      "label": "Metadata",
      "detail": "Chọn ID/giá trị cần lưu"
    },
    {
      "label": "Vị trí",
      "detail": "XData trên entity hoặc Xrecord trong dictionary"
    },
    {
      "label": "Ghi",
      "detail": "DocumentLock nếu bối cảnh yêu cầu, Transaction và kiểm tra lại"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoCAD .NET Developer Guide",
      "url": "https://help.autodesk.com/view/OARX/2026/ENU/"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Build và thử với SDK/host cùng phiên bản",
      "platform": "Windows"
    }
  ],
  "illustration": "metadata"
}
---

## Metadata không thay thế bản vẽ

Một cọc có thể mang mã quản lý không thể suy ra từ hình học. **XData** gắn dữ liệu ứng dụng vào entity sau khi đăng ký tên ứng dụng; **Xrecord** trong `DBDictionary` phù hợp với dữ liệu cấu trúc hơn hoặc dữ liệu thuộc bản vẽ. Thiết kế schema gồm version, stable ID và đơn vị ngay từ đầu để lần phát hành sau đọc được dữ liệu cũ.

`DocumentLock` cần xem xét khi thao tác ngoài ngữ cảnh lệnh của document đang hoạt động hoặc trên document khác. Không khóa mọi nơi theo thói quen; khóa sai bối cảnh gây chờ hoặc xung đột. Dù có lock, việc mở đối tượng để ghi vẫn đi qua Transaction.

| Bài toán | Lựa chọn thử |
| --- | --- |
| Mã cọc gắn với một block | XData của block reference |
| Cấu hình chung bản vẽ | Named Objects Dictionary + Xrecord |

## Thực hành

Viết schema cho một `stake_id` và `alignment_id` có version. Mô tả cách tool xử lý entity cũ chưa có metadata, entity bị xóa, và người dùng mở hai DWG cùng lúc.
