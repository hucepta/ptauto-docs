---
{
  "id": "project.dynamo-python.buoi-dau-cong-hai-so",
  "slug": "buoi-dau-cong-hai-so",
  "title": "Cộng hai số trong Dynamo",
  "description": "Nối Code Block tới Watch trong Dynamo for Civil 3D, chạy Manual và mở lại graph đã lưu.",
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
  "expectedResult": "Watch hiển thị 5 rồi 7 sau khi đổi đầu vào; file cong-hai-so.dyn mở lại và giữ nguyên kết quả tính.",
  "prerequisites": [
    "lesson.dynamo-python.chuan-bi-cong-cu"
  ],
  "conceptIds": [
    "concept.dynamo-python.term-host-graph"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---
## Điều kiện

Hoàn thành [chuẩn bị Dynamo trong Civil 3D](/hoc/dynamo-python/chuan-bi-cong-cu/). Graph này chỉ tính số bằng DesignScript, không cần Python hay package; DWG thử giúp xác nhận ngữ cảnh host Civil 3D.

## Thực hiện từ khi mở ứng dụng

1. Nhấn Windows, mở **Civil 3D** đúng năm. Tại Start bấm **Open**, chọn dynamo-dau-tien.dwg đã lưu trong bài chuẩn bị; nếu chưa có, quay lại bài đó.
2. Trên Ribbon chọn **Manage > Visual Programming > Dynamo**. Tại trang đầu Dynamo bấm **New**, chọn **Manual** ở vùng đáy trước khi tạo graph.
3. Nhấp đúp canvas để tạo Code Block. Gõ mã dưới. Nó khai báo hai giá trị và biểu thức cộng; dấu chấm phẩy thuộc cú pháp DesignScript.

~~~text
a = 2;
b = 3;
a + b;
~~~

4. Từ Library/Search tìm **Watch**, đặt node bên cạnh. Nối output của biểu thức a+b tới input Watch; nếu node có nhiều output, xem tooltip/nhãn cổng để chọn đúng. Bấm **Run**. Kết quả mong đợi là 5, không phải danh sách các giá trị đầu vào.
5. Sửa b thành **5**, bấm Run. Watch phải đổi thành **7**. Ghi đầu vào 2 và 5 cùng kết quả 7; nếu Watch vẫn 3 hoặc 5, kiểm tra cổng đã nối và trạng thái thực thi.
6. Trong Dynamo chọn **File > Save As**, lưu **cong-hai-so.dyn** trong PTAutoHoc. Trở về Civil 3D Ctrl+S lưu DWG; đây là bước lưu riêng.

## Kiểm tra hoàn thành

Trong Dynamo chọn File > Open để mở lại cong-hai-so.dyn, giữ Manual, bấm Run. Watch cần trả 7. Bạn có thể giải thích mỗi dây mang giá trị nào và vì sao Save DWG không thay thế Save graph.

Nếu Code Block lỗi, kiểm tra dấu chấm phẩy và tên biến. Watch rỗng: kiểm tra dây kết thúc tại input và bấm Run. Không tìm thấy các node Civil ở graph khác: xác minh Dynamo được mở từ Civil 3D, chưa kết luận package hỏng. Ghi phiên bản ứng dụng thực tế; đây là bài bạn tự kiểm tra, không phải tuyên bố host đã được thử bởi tác giả.
