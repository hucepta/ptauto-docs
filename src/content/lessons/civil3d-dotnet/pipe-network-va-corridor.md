---
{
  "id": "lesson.civil3d-dotnet.pipe-network-va-corridor",
  "slug": "pipe-network-va-corridor",
  "title": "Corridor và Pipe Network: đọc quan hệ trước khi tính khối lượng",
  "description": "Nhận biết baseline, region, assembly và mạng ống trong một bài kiểm kê hạ tầng.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.corridor-va-ha-tang",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.corridor-ha-tang-quantity"
  ],
  "flow": [
    {
      "label": "Mô hình",
      "detail": "Chọn corridor hoặc pipe network cụ thể"
    },
    {
      "label": "Quan hệ",
      "detail": "Duyệt baseline/region hoặc pipe/structure"
    },
    {
      "label": "Báo cáo",
      "detail": "ID, chiều dài, trạng thái cập nhật và ngoại lệ"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — Civil 3D .NET Developer Guide",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Build và thử với SDK/host Civil 3D cùng phiên bản",
      "platform": "Windows"
    }
  ]
}
---

## Hai hệ đối tượng khác nhau

**Corridor** dùng Alignment/Profile làm baseline, region và assembly để sinh hình học đường. **Pipe Network** gồm pipe và structure có quan hệ mạng. Không dùng số LINE trong DWG để suy ra chiều dài corridor hoặc số ống; phải đọc object Civil tương ứng.

| Trường báo cáo | Corridor | Pipe Network |
| --- | --- | --- |
| Định danh | Tên/ID corridor, baseline, region | Tên/ID network, pipe, structure |
| Phạm vi | Station đầu/cuối region | Kết nối đầu/cuối pipe |
| Kiểm tra | Rebuild và nguồn profile | Pipe thiếu structure, kích thước rỗng |

Trước khi tính quantity, ghi đơn vị, version mô hình và trạng thái rebuild. Một corridor chưa rebuild có thể không phản ánh chỉnh sửa mới nhất. Nút giao, pressure network và tính khối lượng chi tiết cần quy tắc riêng; bài này chỉ dựng cách đọc an toàn.

## Thực hành

Lập report cho một corridor có hai region và một pipe network có ba pipe. Thử trường hợp network rỗng và một region thiếu assembly hợp lệ. Tool cần nêu đúng tên đối tượng lỗi.
