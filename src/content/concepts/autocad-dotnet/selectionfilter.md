---
{
  "id": "concept.autocad-dotnet.selectionfilter",
  "slug": "selectionfilter",
  "title": "SelectionFilter",
  "description": "Bộ điều kiện TypedValue dùng để giới hạn entity trong selection.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [
    "concept.autocad-dotnet.objectid"
  ],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — SelectionFilter",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_SelectionFilter_SelectionFilter_TypedValue__.html"
    },
    {
      "title": "Autodesk — Use Selection Filters to Define Selection Set Rules (.NET, 2024)",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/OARX-DevGuide-Managed/files/GUID-125398A5-184C-4114-9212-A2FF28FC1F1D.htm"
    },
    {
      "title": "Autodesk — Define Rules for Selection Filters (.NET, 2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ITA/OARX-DevGuide-Managed/files/GUID-D9FB23AE-D853-4D00-A910-4F66FCC4607A.htm"
    }
  ],
  "aliases": [
    "bộ lọc selection",
    "TypedValue filter"
  ],
  "tags": [],
  "searchableTerms": [
    "DxfCode",
    "GetSelection",
    "PromptStatus",
    "ByLayer"
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Đối chiếu chữ ký với SDK phiên bản đích.",
      "platform": "Windows"
    }
  ]
}
---

## Cú pháp

```csharp
public SelectionFilter(
    TypedValue\[\] value
);
```

## Định nghĩa

SelectionFilter mô tả tiêu chí nhận đối tượng trong selection. Mỗi TypedValue ghép mã DXF với giá trị lọc. `DxfCode.Start` cùng chuỗi `"LINE"` nhận LINE; mã layer cùng tên layer giới hạn layer được xét. Filter không tự mở object và không làm thay đổi entity.

## Cách dùng

Gọi Editor.GetSelection với filter, kiểm tra PromptStatus rồi lấy các ObjectId. Chọn LINE và CIRCLE cùng lúc nhưng filter LINE thì báo cáo chỉ xử lý LINE. Với nhiều tiêu chí, cần hiểu cách kết hợp điều kiện; không giả định mảng chuỗi là một biểu thức logic tự động.

Khi người dùng nhấn Esc hoặc không tạo selection hợp lệ, không duyệt Value. Thông báo hủy thao tác khác số lượng bằng 0 của một tập dữ liệu đã được kiểm tra.

## Thuộc tính và phạm vi

Filter xét giá trị gán trực tiếp. Một entity có màu ByLayer không tương đương entity mang màu explicit giống màu layer. Tương tự, filter linetype không tự đọc kiểu kế thừa từ layer.

Lựa chọn do người dùng tạo có phạm vi khác truy vấn toàn database. Nêu rõ Model/Paper space và đối tượng được chọn để tránh hiểu thống kê một vùng như thống kê mọi entity trong DWG.
