---
{
  "id": "lesson.autocad-dotnet.editor-selection-hinh-hoc",
  "slug": "editor-selection-hinh-hoc",
  "title": "Chọn và tính hình học",
  "description": "Đọc input có kiểm tra trạng thái, lọc selection và xử lý hình học trong đúng hệ tọa độ.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.editor-va-hinh-hoc",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.object-model-transaction"
  ],
  "conceptIds": [
    "concept.autocad-dotnet.selectionfilter",
    "concept.autocad-dotnet.objectid"
  ],
  "exampleIds": [
    "example.autocad-dotnet.doc-polyline"
  ],
  "examplePlacements": [
    {
      "heading": "curve-và-polyline",
      "exampleIds": [
        "example.autocad-dotnet.doc-polyline"
      ]
    }
  ],
  "exerciseIds": [
    "exercise.autocad-dotnet.doc-polyline"
  ],
  "sources": [
    {
      "title": "Autodesk — Use Selection Filters to Define Selection Set Rules (.NET, 2024)",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/OARX-DevGuide-Managed/files/GUID-125398A5-184C-4114-9212-A2FF28FC1F1D.htm"
    },
    {
      "title": "Autodesk — Define Rules for Selection Filters (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ITA/OARX-DevGuide-Managed/files/GUID-D9FB23AE-D853-4D00-A910-4F66FCC4607A.htm"
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
      "title": "Autodesk — Polyline Properties",
      "url": "https://help.autodesk.com/cloudhelp/2019/ENU/OARX-ManagedRefGuide/files/OREFNET-__MEMBERTYPE_Properties_Autodesk_AutoCAD_DatabaseServices_Polyline.html"
    },
    {
      "title": "Autodesk — Entity.IntersectWith Method",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Entity_IntersectWith_Entity_Intersect_Point3dCollection_IntPtr_IntPtr.html"
    }
  ],
  "tags": [],
  "searchableTerms": [
    "TypedValue",
    "Point3d",
    "Vector3d",
    "Matrix3d",
    "Curve",
    "Polyline",
    "WCS",
    "UCS",
    "OCS",
    "IntersectWith",
    "GetOffsetCurves",
    "bulge"
  ],
  "illustration": "curve"
}
---

## Input và selection có điều kiện

Editor cung cấp `GetPoint`, `GetDouble`, `GetEntity` và `GetSelection`. Mỗi lời gọi trả kết quả kèm `PromptStatus`; chỉ dùng Value khi status là OK. Esc, lựa chọn không hợp lệ và Enter không mang cùng ý nghĩa. Thiết kế thông báo giúp người dùng biết chọn entity hay nhập giá trị.

`SelectionFilter` nhận mảng `TypedValue`. Mã DXF `DxfCode.Start` với giá trị `"LINE"` lọc loại đối tượng; mã layer lọc thuộc tính gán trực tiếp. Màu ByLayer không tương đương màu explicit của layer khi lọc entity. Selection của người dùng cũng khác truy vấn toàn database.

## Point, Vector và Matrix

`Point3d` mô tả vị trí; `Vector3d` mô tả hướng và độ lớn. Từ A=(0,0,0) đến B=(3,4,0), vector B−A có độ dài 5. Dịch cả hai điểm cùng vector không đổi khoảng cách. `Matrix3d` biểu diễn phép biến đổi; thứ tự ghép ma trận ảnh hưởng kết quả khi có cả quay và dịch.

WCS là hệ quy chiếu chung; UCS là hệ làm việc của người dùng; OCS gắn với mặt phẳng entity. API dùng WCS trừ nơi tài liệu quy định khác. Đỉnh Polyline dạng 2D có thể nằm trong OCS. Đọc normal và dùng phép chuyển thích hợp, không tự thêm Z=0 để biến nó thành điểm WCS.

## Curve và Polyline

Curve là lớp nền cho nhiều đường; Polyline ghép các segment thẳng hoặc cung. Bulge khác không biểu diễn segment cung, nên cộng khoảng cách giữa các đỉnh có thể thấp hơn chiều dài thật. Ví dụ đọc Polyline dùng `Length`, số đỉnh và cờ Closed; diện tích chỉ được báo khi đã đóng.

Một hình chữ nhật 10×5 có chu vi 30 và diện tích 50 trong đơn vị bản vẽ. Thử thêm cung vào cạnh để thấy vì sao công thức của hình chữ nhật không còn phù hợp.

## Intersection và offset

Trước khi tìm giao bằng `IntersectWith`, xác định có kéo dài các đường hay chỉ xét phần hiện có. Hai đường đồng phẳng có thể cắt nhau trong mặt bằng nhưng không chung Z. Gộp các điểm gần nhau bằng tolerance đã chọn, tránh so sánh tọa độ thực bằng bằng nhau tuyệt đối.

`GetOffsetCurves` trả collection; kết quả có thể gồm nhiều đường và đổi loại hình học. Khoảng offset mang dấu theo quy tắc của curve, không phải một lời hứa “dương luôn bên phải”. Object kết quả chưa được thêm vào database cần được giải phóng sau khi dùng.

## Thực hành và sai sót

Chạy mẫu với Polyline mở, đóng, có cung và normal khác trục Z. Đối chiếu LENGTH/AREA trong Properties. Thử Esc và chọn CIRCLE để kiểm tra rejection. Ghi đơn vị, hệ tọa độ và tolerance cùng kết quả; không dùng chiều dài bản vẽ như mét khi chưa xác định đơn vị.
