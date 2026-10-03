---
{
  "id": "concept.dynamo-python.python-dotnet-host",
  "slug": "python-dotnet-host",
  "title": "Engine Python và ranh giới .NET",
  "description": "Xác nhận engine, host và assembly trước khi dùng Python truy cập API AutoCAD/Civil 3D.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.dynamo-python.in-out",
    "concept.dynamo-python.data-flow"
  ],
  "exampleIds": [],
  "sources": [
    {
      "title": "Dynamo — PythonNet3 và khác biệt với CPython3",
      "url": "https://dynamobim.org/pythonnet3-a-new-dynamo-python-to-fix-everything/"
    },
    {
      "title": "Dynamo — Hướng dẫn chuyển graph sang PythonNet3",
      "url": "https://dynamobim.org/dynamo-pythonnet3-upgrade-a-practical-guide-to-migrating-your-dynamo-graphs/"
    },
    {
      "title": "DynamoDS — Python and Civil 3D",
      "url": "https://github.com/DynamoDS/DynamoPrimerNew/blob/master/dynamo-for-civil-3d/advanced-topics/python-and-civil-3d.md"
    }
  ],
  "aliases": [
    "PythonNet3",
    "CPython3",
    "IronPython",
    ".NET interop"
  ],
  "searchableTerms": [
    "clr.AddReference",
    "ObjectId",
    "Transaction",
    "wrapper",
    "host"
  ],
  "examplePlacements": []
}
---

## Engine không chỉ là cú pháp

IronPython chạy trên .NET; CPython và Python.NET kết nối hai hệ runtime khác nhau. Engine CPython3 của Dynamo và PythonNet3 có khác biệt về chuyển kiểu và interop vì dùng thế hệ Python.NET khác nhau. PythonNet3 được giới thiệu cho Dynamo 3.4; tài liệu Dynamo 4.0 nêu engine mới dựa trên CPython 3.11/Python.NET 3. Kiểm tra bản host thực tế trước khi áp dụng mốc này.

## Truy cập API cần đúng ngữ cảnh

clr và AddReference phục vụ nạp assembly .NET trong môi trường phù hợp. Có import thành công chưa chứng minh đã chọn đúng overload hoặc đang thao tác đúng Document. Wrapper Dynamo không phải DBObject đang mở. Lấy ObjectId, mở trong Transaction theo ngữ cảnh host, đọc giá trị cần thiết rồi chuyển về số, chuỗi hoặc list để dùng sau phạm vi đọc.

## Ghi môi trường khi kiểm tra

Lưu tên và phiên bản Civil 3D/AutoCAD, Dynamo, engine của từng node và package phụ thuộc. Thử thao tác nhỏ trên bản sao trước khi dùng batch. Script CSV thuần có thể chạy độc lập nhưng không chứng minh API Civil hoạt động; AutoCAD thuần cũng không cung cấp toàn bộ đối tượng Civil. Khi đổi engine, kiểm tra lại collection, overload, vòng đời đối tượng và báo lỗi thay vì chỉ so việc node hết màu cảnh báo.
