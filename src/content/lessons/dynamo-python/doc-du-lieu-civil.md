---
{
  "id": "lesson.dynamo-python.doc-du-lieu-civil",
  "slug": "doc-du-lieu-civil",
  "title": "Đọc dữ liệu AutoCAD và Civil 3D qua hợp đồng dữ liệu",
  "description": "Chọn dữ liệu cần lấy từ đối tượng Civil, kiểm tra ngữ cảnh host và chuyển thành bản ghi dễ kiểm tra.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.du-lieu-civil",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.node-list-lacing"
  ],
  "conceptIds": [
    "concept.dynamo-python.data-flow",
    "concept.dynamo-python.python-dotnet-host"
  ],
  "exampleIds": [],
  "exerciseIds": [],
  "sources": [
    {
      "title": "DynamoDS — Python and Civil 3D",
      "url": "https://github.com/DynamoDS/DynamoPrimerNew/blob/master/dynamo-for-civil-3d/advanced-topics/python-and-civil-3d.md"
    },
    {
      "title": "Autodesk — Samples for Dynamo for Autodesk Civil 3D 2026",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-Dynamo/files/Civil3D_Dynamo_Samples_for_Dynamo_for_Autodesk_Civil_3D_html.html"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo",
      "version": "Nguyên lý và Python 3; thư viện node, engine và host phải đối chiếu theo bản cài đặt"
    }
  ],
  "tags": [
    "Dynamo",
    "Python",
    "dữ liệu"
  ],
  "examplePlacements": []
}
---

## Phân biệt đối tượng và dữ liệu xuất

Đối tượng AutoCAD như Polyline hoặc BlockReference thuộc database bản vẽ. Alignment, Profile và Surface thêm quan hệ thiết kế của Civil 3D. Một đường nhìn giống tim tuyến chưa chắc là Alignment; một đường trắc dọc trên giấy chưa chắc còn Profile. Trước khi dựng graph, ghi loại đối tượng đầu vào và bảng đầu ra cần lấy. Ví dụ bảng cọc cần mã tuyến, lý trình, offset, tọa độ và nguồn cao độ.

## Đọc tuyến, trắc dọc và bề mặt

Alignment mô tả hướng tuyến trong mặt bằng và cơ sở lý trình; Profile mô tả cao độ theo lý trình của tuyến liên quan. Surface cung cấp mô hình bề mặt cho truy vấn cao độ tại vị trí. Hãy kiểm tra tuyến đúng, Profile thuộc đúng tuyến và điểm nằm trong miền Surface. Lý trình hiển thị có thể chịu station equation, nên phải ghi rõ quy ước dùng trong bảng. Cao độ thiết kế và cao độ bề mặt là hai trường riêng; thiếu giá trị không được biến thành số 0 để bảng trông đầy.

## Bảo toàn quan hệ hạ tầng

Sample Line và nhóm của nó liên quan đến tuyến, vị trí lấy mẫu và dữ liệu trắc ngang. Corridor có baseline, region và dữ liệu hình học phát sinh sau dựng mô hình; giữ nguồn baseline khi xuất điểm. Feature Line mang hình học và cao độ, có thể là đối tượng độc lập hoặc được tạo từ mô hình khác. Pipe Network gồm các thành phần và liên kết giữa chúng; hai đầu một pipe cần khóa tham chiếu đến structure nếu nghiệp vụ yêu cầu. Xuất các phần này thành bảng có khóa cha, thay vì Flatten rồi chỉ giữ tọa độ.

## Chọn cách đọc theo bản cài đặt

Dùng thư viện node và graph mẫu đi kèm đúng Civil 3D để tìm thao tác đọc phù hợp. Tên node, kiểu wrapper và phạm vi hỗ trợ thay đổi giữa các bản; không suy tên node từ tên class .NET. Khi phải dùng Python với API, mở đối tượng trong Transaction theo ngữ cảnh host, lấy giá trị thuần rồi kết thúc phạm vi đọc. Không giữ DBObject để dùng sau khi Transaction đã đóng. Ghi Civil 3D, Dynamo, engine và package dùng cho graph; AutoCAD thuần không cung cấp đầy đủ mô hình Civil.

## Kiểm tra trên bộ dữ liệu nhỏ

Bắt đầu với một tuyến, một Profile, một Surface và ba vị trí đã đối chiếu thủ công. Thử điểm ngoài Surface và lựa chọn rỗng. Nhật ký thử phải tách kết quả đọc AutoCAD khỏi kết quả đọc Civil 3D, vì graph xử lý được list không chứng minh API host đã hoạt động.
