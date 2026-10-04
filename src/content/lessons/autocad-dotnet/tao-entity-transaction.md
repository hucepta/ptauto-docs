---
{
  "id": "lesson.autocad-dotnet.tao-entity-transaction",
  "slug": "tao-entity-transaction",
  "title": "Tạo entity",
  "description": "Đi từ Database đến ModelSpace, thêm entity và commit có kiểm soát.",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.plugin-transaction",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autocad-dotnet.object-model-transaction"
  ],
  "flow": [
    {
      "label": "Database",
      "detail": "Mở BlockTable/ModelSpace để ghi"
    },
    {
      "label": "Entity",
      "detail": "Tạo đối tượng và append vào record"
    },
    {
      "label": "Commit",
      "detail": "Báo transaction biết đối tượng mới và lưu"
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
<span id="tại-sao-không-chỉ-new-một-line" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Tạo Line trong Transaction

`new Line(...)` tạo một đối tượng C# trong bộ nhớ, chưa đặt nó vào DWG. Để lưu, plugin mở ModelSpace `BlockTableRecord` ở `ForWrite`, gọi `AppendEntity`, báo transaction quản lý entity mới bằng `AddNewlyCreatedDBObject`, rồi `Commit`. Nếu thiếu commit, thay đổi bị rollback khi transaction kết thúc.

```text
Document → Database → Transaction → BlockTable → ModelSpace → AppendEntity → Commit
```

Đọc hoặc ghi đúng `OpenMode`; không giữ `DBObject` ra ngoài vòng đời transaction. Trước khi tạo 500 marker hạ tầng, kiểm tra layer đích, tọa độ, số lượng dự kiến và cách Undo. Nếu có lỗi ở marker thứ 200, một transaction lớn có thể giúp rollback toàn lượt; nhưng thao tác rất lớn cần cân nhắc hiệu năng và chia lô hợp lý.

## Thực hành

Trên DWG thử, thiết kế lệnh thêm một LINE dài 10 đơn vị. Ghi thứ tự 7 bước trước khi viết C#. Bỏ `Commit` trong bản thử riêng và kiểm tra sau khi lệnh kết thúc LINE có còn trong DWG hay không.
