---
{
  "id": "lesson.civil3d-dotnet.giao-dien-va-mo-hinh",
  "slug": "giao-dien-va-mo-hinh",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.bat-dau",
  "order": 3,
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
  "title": "Giao diện và mô hình",
  "description": "Phân biệt tuyến, trắc dọc, mặt và style bằng Toolspace.",
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
## Mô hình và biểu diễn

Alignment có tên và hình học tuyến; style điều khiển màu/nét/thành phần. Label style điều khiển nhãn. Profile chứa cao độ theo lý trình; ProfileView là khung hiển thị Profile. Đếm đường nét không thay thế đếm đối tượng mô hình.

Mở DWG có hai tuyến, chọn workspace Civil, bật **Home → Palettes → Toolspace**. **Prospector** duyệt dữ liệu, **Settings** duyệt style và setting. Đổi style tác động cách nhìn; đổi hình học tác động dữ liệu phụ thuộc.

## Tuyến và style

1. **Prospector → Alignments**, mở collection chứa PT_TUYEN_A. Nhấp phải → **Properties**. Xem Name, Description và style. Chưa đổi Starting station.
2. Đổi Alignment style sang style khác trong template → **Apply**. Quan sát màu/nét. Tên và số Alignment không đổi. Chọn lại style gốc → **OK**.
3. **Settings → Alignment → Alignment Styles** chứa định nghĩa style, không phải tuyến đã tạo. Mở **Label Styles** để thấy nhóm nhãn riêng.
4. Chọn tuyến trên màn hình, nhấp phải → **Alignment Properties**. Nếu Properties nói Polyline, bạn chọn đường nguồn; dùng Prospector → tên tuyến → Select để lấy đúng object.

## Tạo Surface rỗng

Trong Prospector nhấp phải **Surfaces → Create Surface**. Type chọn TIN surface. Trong Property table đặt Name PT_MAT_HOC, chọn style có sẵn → **OK**. Mở tên mặt → **Definition**. Mặt chưa có point/breakline/contour tồn tại nhưng chưa có dữ liệu hình học hữu ích; chưa hỏi được cao độ tùy ý.

Nhấp phải mặt → **Surface Properties**. Xem Information, Definition và Statistics. Đừng lấy hình đường bao rỗng làm bằng chứng object chưa tạo. GetSurfaceIds có thể đếm mặt rỗng này là 1.

## Profile và ProfileView

Khi có mặt đủ dữ liệu, **Home → Create Design → Profile → Create Surface Profile**, chọn Alignment/Surface → **Add** → **Draw in Profile View** để dựng khung. Profile đại diện chuỗi cao độ dọc tuyến; thao tác vẽ khung tạo ProfileView. Tạo Profile mà chưa vẽ khung vẫn có dữ liệu.

Trong Prospector mở tuyến → Profiles để tìm Profile; ProfileView có nhánh riêng dưới tuyến. Một tuyến có thể có nhiều Profile và nhiều ProfileView. Báo cáo phải chọn đúng tên/loại, không lấy phần tử đầu theo giả định.

<span id="kết-quả-và-bài-tập" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Bài tập

Chạy PT_CIVIL_NAMES sau đổi style: vẫn hai tuyến. Đếm GetSurfaceIds: tính cả PT_MAT_HOC rỗng. Trong bản sao DWG, xóa mặt học qua Prospector, chạy lại: số mặt giảm 1.

Tạo bảng bốn cột: object, dữ liệu gốc, nơi xem trong Prospector, style. Điền Alignment/Surface/Profile/ProfileView. Ghi “ProfileView hiển thị Profile”. Bảng giúp đặt đúng API cho báo cáo sau.
