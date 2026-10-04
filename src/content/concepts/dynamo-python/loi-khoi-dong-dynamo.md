---
{
  "id": "concept.dynamo-python.loi-khoi-dong-dynamo",
  "slug": "loi-khoi-dong-dynamo",
  "title": "Không có Dynamo hoặc Watch chưa đổi giá trị",
  "description": "Kiểm tra đường mở từ Civil 3D, chế độ Manual và cổng nối trước khi cài thêm package.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Dynamo Primer — Getting Started with Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d/getting-started"
    },
    {
      "title": "Autodesk — mở Dynamo từ Civil 3D",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-Dynamo/files/Civil3D_Dynamo_To_Open_Dynamo_for_Autodesk_Civil_3D_html.html"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Bản đi kèm Civil 3D đang cài; đối chiếu giao diện theo phiên bản",
      "platform": "Windows"
    }
  ],
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.dynamo-python.term-host-graph"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Triệu chứng và phép kiểm tra

Không thấy nút Dynamo trong ứng dụng, hoặc Watch rỗng dù đã có số trong graph. Trước hết xác định lỗi mở môi trường hay lỗi thực thi graph.

1. Từ Windows Start mở **Civil 3D**, tạo hoặc mở DWG thử. Chọn **Manage > Visual Programming > Dynamo**. Nếu thiếu nút, kiểm tra đúng sản phẩm/workspace và thành phần Dynamo trong installer của bản năm đó.
2. Trong Dynamo tạo graph mới với Code Block **7;** và Watch như [bài chuẩn bị](/hoc/dynamo-python/chuan-bi-cong-cu/). Graph này không cần package cộng đồng.
3. Chọn **Manual**, nối output Code Block vào input Watch rồi bấm **Run**. Dây phải kết thúc tại cổng. Nếu đổi số mà Watch giữ giá trị cũ, kiểm tra đã Run lại chưa.
4. Nếu Code Block lỗi, đọc cảnh báo node và kiểm tra dấu chấm phẩy. Code Block này là DesignScript, không phải Python node.

## Kết quả và file

Watch hiển thị đúng số; File > Save As giữ .dyn. Save DWG trong Civil 3D không giữ graph. Khi một graph khác báo thiếu node/package, ghi host và phiên bản rồi kiểm tra dependencies của graph đó; không cài package tùy ý để chữa phép thử hai node.
