---
{
  "id": "project.autocad-dotnet.plugin-coc-xdata",
  "slug": "plugin-coc-xdata",
  "title": "Plugin quản lý mã cọc bằng XData",
  "description": "Gắn stable ID cho block cọc và tìm lỗi ID trùng hoặc thiếu.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Gắn stable ID cho block cọc và tìm lỗi ID trùng hoặc thiếu.",
  "prerequisites": [
    "lesson.autocad-dotnet.xdata-xrecord-va-documentlock"
  ]
}
---

## Bài toán

Block cọc trong nhiều bản vẽ cần mã ổn định để ghép với bảng lý trình ngoài. Plugin đọc block reference trong phạm vi được chọn và báo ID thiếu, trùng, sai định dạng.

## Thiết kế

Định nghĩa schema XData có tên ứng dụng, version và `stake_id`. Lệnh kiểm tra chỉ đọc; lệnh gán ID dùng Transaction và xác nhận số đối tượng sẽ sửa. Tách quy tắc sinh mã khỏi thao tác Database để test bằng dữ liệu thuần.

## Nghiệm thu

- Fixture gồm 4 block: 2 hợp lệ, 1 thiếu, 1 trùng cho ra đúng hai lỗi.
- Hủy chọn và DWG chỉ đọc không tạo nửa dữ liệu.
- Báo cáo có handle/ObjectId và version schema; DLL được thử trong đúng host AutoCAD.
