---
{
  "id": "lesson.autocad-dotnet.cad-utility-geometry-civil",
  "slug": "cad-utility-geometry-civil",
  "title": "Tiện ích CAD",
  "description": "Ghép các lệnh chỉ đọc thành tiện ích có tiêu chí nghiệm thu, rồi xác định phần nào cần Civil API.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.cad-utility-va-civil",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.plugin-tin-cay"
  ],
  "conceptIds": [
    "concept.autocad-dotnet.selectionfilter",
    "concept.autocad-dotnet.documentlock"
  ],
  "exampleIds": [
    "example.autocad-dotnet.thong-ke-line-layer",
    "example.autocad-dotnet.doc-polyline"
  ],
  "examplePlacements": [],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — Command Definition (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    },
    {
      "title": "Autodesk — Use Transactions to Access and Create Objects (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    },
    {
      "title": "Autodesk — Convert Coordinates (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-0EFA65CC-C1AB-4B99-8159-C31602C1A5E8.htm"
    },
    {
      "title": "Autodesk — Offset Objects (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/PLK/OARX-DevGuide-Managed/files/GUID-80D106A9-A16F-4F32-BDE2-5C5B1F7C2C84.htm"
    },
    {
      "title": "Autodesk — About Managed .NET Compatibility (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Autodesk — Add Library References in the Reference Manager (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Autodesk — About Using the Object Enabler (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-UserGuide/files/GUID-14B478FB-81E2-44A5-808C-5546D61B5697.htm"
    }
  ],
  "tags": [
    "project",
    "kiến trúc plugin"
  ],
  "searchableTerms": [
    "CAD Utility",
    "Geometry Engine",
    "ROAD Manager",
    "AutoLISP",
    "Civil 3D",
    "QA/QC"
  ],
  "illustration": "curve"
}
---
<span id="chọn-đầu-ra-có-thể-đối-chiếu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đầu ra của tiện ích

CAD Utility đầu tiên tạo báo cáo LINE theo layer và kiểm tra một Polyline. Đầu vào là selection của người dùng, không tự quét toàn bản vẽ. Đầu ra ghi phạm vi, số lượng, chiều dài và đơn vị bản vẽ. Hai LINE dài 3 và 4 trên layer A tạo nhóm A gồm 2 đối tượng, tổng 7; một CIRCLE cùng selection không được cộng.

Một kết quả kiểm tra phải cho biết thiếu dữ liệu hay lỗi. Hủy chọn không tạo báo cáo bằng 0. Lệnh chỉ đọc giúp đối chiếu với Properties.

<span id="kiến-trúc-của-tiện-ích" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Cấu trúc tiện ích

Lớp command xử lý input, Document và thông báo. Lớp đọc mở Transaction, lấy giá trị và tạo snapshot. Phần tính toán nhận class C# thông thường, trả kết quả thống kê; phần xuất định dạng số và tên layer. Không đưa Entity hoặc Transaction vào kết quả lâu dài.

Khi chuyển một công cụ Lisp sang .NET, chuyển mục đích xử lý trước: bộ lọc, dữ liệu cần đọc, điều kiện dừng và kết quả mong đợi. Viết từng thao tác bằng API phù hợp.

<span id="geometry-workflow" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Quy trình xử lý hình học

Chuẩn hóa đơn vị và hệ tọa độ, kiểm tra dữ liệu, tính toán rồi đối chiếu. Với Polyline đóng, đọc chiều dài và diện tích; nếu có cung, không dùng tổng chord thay `Length`. Khi mở rộng sang intersection và offset, ghi rõ tolerance, điều kiện kéo dài, cách xử lý nhiều kết quả và quyền sở hữu object tạm.

Ví dụ hai đường giao ở một đỉnh chung cần một điểm trong báo cáo sau bước gộp điểm gần nhau. Chuẩn bị dữ liệu thử để xác nhận.

<span id="từ-hình-học-cad-sang-dữ-liệu-civil" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Hình học CAD và dữ liệu Civil

Một Polyline biểu diễn tim đường bằng hình học nhưng không chứa toàn bộ ý nghĩa Alignment, station equations, Profile hay Corridor. Geometry Engine có thể nhận điểm và segment; ROAD Manager cần thêm mô hình quan hệ giữa tuyến, trắc dọc và các đầu vào thiết kế.

Tách assembly tiện ích AutoCAD khỏi assembly dùng Civil API. Phần AutoCAD tham chiếu thư viện AutoCAD; phần Civil cần SDK Civil phù hợp và host Civil 3D đầy đủ. Object Enabler hỗ trợ trao đổi đối tượng qua thao tác AutoCAD, không thay thế Civil 3D để chạy bài thực hành CivilDocument.

<span id="kiểm-tra-và-mở-rộng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Thực hành

Thực hiện [project CAD Utility](../../../du-an/autocad-dotnet/cad-utility-chi-doc/) với mẫu nhắm SDK 2025/.NET 8. Chạy selection hỗn hợp, Polyline mở/đóng, Esc và hai Document. Đối chiếu số lượng và tổng chiều dài với DWG mẫu.

Sau khi có báo cáo ổn định, bổ sung xuất file và quy tắc kiểm tra hình học. Module Civil cần kiểm tra riêng theo SDK và host.
