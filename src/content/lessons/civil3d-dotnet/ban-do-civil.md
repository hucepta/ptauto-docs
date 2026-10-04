---
{
  "id": "lesson.civil3d-dotnet.ban-do-civil",
  "slug": "ban-do-civil",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.bat-dau",
  "order": 4,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "tags": [],
  "searchableTerms": [],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Ví dụ môi trường 2025/.NET 8; dùng SDK khớp phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "title": "Bản đồ Civil API",
  "description": "Lấy ID từ CivilDocument và mở đối tượng qua AutoCAD Transaction.",
  "sources": [
    {
      "title": "Autodesk — Civil 3D developer guide",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"
    },
    {
      "title": "Autodesk — CivilDocument members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
    }
  ]
}
---
<span id="hai-mô-hình-phối-hợp" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Database và CivilDocument

CivilDocument không thay thế Database: nó cung cấp collection/setting Civil cho DWG. Alignment, Surface và Profile được lưu trên hạ tầng database AutoCAD; Transaction mở chúng bằng ObjectId. Document.Editor nhận lựa chọn và in báo cáo.

```text
AutoCAD Document ── Editor (input/output)
                 └─ Database ── TransactionManager
CivilApplication.ActiveDocument ── CivilDocument
                                  ├─ GetAlignmentIds() → ObjectIdCollection
                                  ├─ GetSurfaceIds() → ObjectIdCollection
                                  └─ Styles / Settings / CogoPoints
ObjectId + Transaction.GetObject → Alignment / Surface / Profile ...
Alignment.GetProfileIds() → các ObjectId Profile thuộc tuyến
```

Đây là bản đồ truy cập, không phải cây kế thừa. CivilDocument không phải lớp cha Alignment. ObjectId định danh object và phải thuộc đúng Database mở transaction.

<span id="theo-tuyến-tới-trắc-dọc" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Alignment và Profile

Trong vòng foreach của PT_CIVIL_NAMES, sau khi mở Alignment, thêm:

```csharp
var profileIds = alignment.GetProfileIds();
doc.Editor.WriteMessage($"\nTuyen {alignment.Name}: {profileIds.Count} profile");
foreach (ObjectId profileId in profileIds)
{
    var profile = (Profile)tr.GetObject(profileId, OpenMode.ForRead);
    doc.Editor.WriteMessage($"\n  {profile.Name}: {profile.ProfileType}");
}
```

Profile thuộc Autodesk.Civil.DatabaseServices. GetProfileIds không trả trực tiếp Profile; ID cần GetObject. Tên để đối chiếu, ProfileType phân biệt loại. Mỗi tuyến có collection riêng; không lấy Profile A rồi gắn tên tuyến B.

## Đối chiếu bằng giao diện

1. **Prospector → PT_TUYEN_A → Profiles**, ghi tên có sẵn. Chưa tạo Profile thì số kỳ vọng 0; foreach bỏ qua tập rỗng.
2. Build DLL, nạp vào phiên Civil 3D mới rồi gọi lệnh. Đếm Profile từng tuyến, so Prospector.
3. Nhấp phải Profile → Properties xem tên/loại. Chọn khung trắc dọc trên màn hình: đó là ProfileView, API GetProfileViewIds khác GetProfileIds.
4. Với DWG Data Shortcut, xem biểu tượng tham chiếu trong Prospector. Code đọc IsReferenceObject; trước ghi xét IsReferenceValid, IsReferenceStale và quyền chỉnh sửa. Mở được ForRead không có nghĩa được sửa đối tượng.

## Quan hệ thiết kế

Surface Profile phụ thuộc Alignment và Surface. Corridor có baseline từ tuyến/trắc dọc, region dùng Assembly và target trỏ dữ liệu dự án. Sau thay dữ liệu gốc, cập nhật đối tượng phụ thuộc theo workflow Civil. Regen màn hình không thay thế rebuild mô hình.

StyleId chọn cách hiển thị. ID style thuộc DWG; không đưa từ template A sang Database B. Tra tên style trong tài liệu đích và báo nếu thiếu.

## Bài tập

DWG có hai Alignment chưa có Profile phải báo hai tuyến, mỗi tuyến 0 profile; không exception và không tự tạo Profile. Với DWG có trắc dọc, ghi tên Profile trực thuộc từng tuyến. Giải thích ba bước: CivilDocument lấy ID, Transaction mở object, code sao chép giá trị báo cáo. Giữ số/chuỗi để xuất sau using, không giữ wrapper Civil Entity ngoài transaction.
