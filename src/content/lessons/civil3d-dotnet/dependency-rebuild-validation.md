---
{
  "id": "lesson.civil3d-dotnet.dependency-rebuild-validation",
  "slug": "dependency-rebuild-validation",
  "title": "Dependency, rebuild và validation trong plugin Civil",
  "description": "Không xuất báo cáo từ mô hình chưa cập nhật hoặc có quan hệ đứt.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.plugin-qa-qc",
  "order": 2,
  "difficulty": "nang-cao",
  "prerequisites": [
    "lesson.civil3d-dotnet.plugin-civil-kiem-ke-qa-qc"
  ],
  "flow": [
    {
      "label": "Đầu vào",
      "detail": "Kiểm tra CivilDocument, đối tượng và nguồn"
    },
    {
      "label": "Cập nhật",
      "detail": "Xác định có cần rebuild/refresh theo API"
    },
    {
      "label": "Báo cáo",
      "detail": "Ghi trạng thái, lỗi và nguồn đã dùng"
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

## Một thay đổi có thể lan qua nhiều đối tượng

Sửa Alignment hoặc Surface có thể ảnh hưởng Profile, Corridor, Section và báo cáo downstream. Plugin QA/QC cần biết đối tượng phụ thuộc vào đâu. Đừng gọi rebuild hàng loạt ngay khi mở bản vẽ: thao tác có thể tốn thời gian và đổi trạng thái mô hình. Trước hết đọc trạng thái, yêu cầu người dùng xác nhận phạm vi cần cập nhật, sau đó đối chiếu đầu ra.

Một báo cáo đáng tin phải nêu tên DWG, version Civil 3D, đối tượng nguồn, thời điểm đọc và lỗi. Nếu thiếu surface hoặc profile, báo lỗi theo đối tượng; không thay bằng số 0. Khi thực hiện cập nhật, bao vùng thay đổi bằng transaction phù hợp và kiểm tra khả năng rollback.

## Bài luyện

Vẽ sơ đồ phụ thuộc Alignment → Profile → Corridor → Section. Chọn một thay đổi ở Alignment và đánh dấu các dữ liệu cần kiểm tra lại. Viết ba test cho tool kiểm kê: nguồn hợp lệ, nguồn thiếu, nguồn có nhưng chưa cập nhật.
