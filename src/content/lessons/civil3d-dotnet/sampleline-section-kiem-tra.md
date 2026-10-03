---
{
  "id": "lesson.civil3d-dotnet.sampleline-section-kiem-tra",
  "slug": "sampleline-section-kiem-tra",
  "title": "Mặt cắt ngang",
  "description": "Đi từ nhóm Sample Line đến Section, nhận biết thiếu dữ liệu ở từng lý trình.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.surface-va-trac-ngang",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.tinsurface-sampleline-section"
  ],
  "flow": [
    {
      "label": "Lý trình",
      "detail": "Sample Line cắt ngang Alignment"
    },
    {
      "label": "Dữ liệu",
      "detail": "Section lấy từ surface/corridor được sampling"
    },
    {
      "label": "QA",
      "detail": "So số mặt cắt và phạm vi offset"
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
  ],
  "illustration": "profile"
}
---

## Bài toán thiếu trắc ngang

Một tuyến dài 1 km dự kiến có Sample Line mỗi 20 m nhưng vài lý trình không có Section từ surface. Nếu chỉ đếm sample line, báo cáo có thể kết luận sai là “đủ mặt cắt”. Cần đi qua Sample Line Group, từng Sample Line và Section gắn vào nó; đồng thời kiểm tra nguồn dữ liệu đã được sampling.

Tạo bảng gồm station, số Section, tên source và khoảng offset trái/phải. Nếu một sample line không có section, ghi lỗi cụ thể để người dùng sửa nguồn hoặc chạy lại sampling. Với surface chưa cập nhật, báo cáo phải có dấu hiệu cần rebuild/refresh trước khi nghiệm thu.

## Thực hành

Trên DWG mẫu, tạo ba sample line nhưng chỉ hai mặt cắt hợp lệ. Tool chỉ đọc phải báo đúng một lý trình thiếu dữ liệu. Sau đó đổi tên source và xác nhận report không nhầm tên cũ.
