---
{
  "id": "concept.dynamo-python.term-host-graph",
  "slug": "term-host-graph",
  "title": "Ngữ cảnh host của graph Dynamo",
  "description": "Ứng dụng nơi Dynamo được mở quyết định môi trường tích hợp và các node làm việc với dữ liệu host.",
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
  "kind": "term",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Định nghĩa

Một file .dyn mô tả graph, nhưng môi trường thực thi còn phụ thuộc Dynamo được mở từ đâu, phiên bản và các node/package có sẵn. Dynamo for Civil 3D cung cấp ngữ cảnh làm việc với DWG và dữ liệu Civil. Không suy rằng graph Revit dùng nguyên được trong Civil 3D.

## Quan sát từ lần mở đầu

Từ Windows Start mở **Civil 3D**, tạo hoặc mở DWG thử. Trên Ribbon chọn **Manage > Visual Programming > Dynamo**. Trong cửa sổ Dynamo, tạo graph, đặt **Manual**, nối số tới Watch rồi Run theo [bài chuẩn bị](/hoc/dynamo-python/chuan-bi-cong-cu/).

Graph số kiểm tra việc tính toán trong môi trường đang mở; nó chưa chứng minh mọi node Civil khác đã hoạt động. Khi nhận graph từ người khác, cần xác minh host, phiên bản và dependencies trước khi chạy trên bản vẽ thật.

## Hai file cần phân biệt

.dyn giữ graph và kết nối node; .dwg giữ bản vẽ. Lưu một file không thay cho file còn lại. Ghi phiên bản Dynamo và Civil 3D cùng kết quả chạy khi chia sẻ bài thực hành.
