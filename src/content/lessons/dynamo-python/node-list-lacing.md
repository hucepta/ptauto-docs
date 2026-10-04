---
{
  "id": "lesson.dynamo-python.node-list-lacing",
  "slug": "node-list-lacing",
  "title": "Ghép danh sách",
  "description": "Đọc luồng dữ liệu và dự đoán kết quả khi scalar, list hoặc nested list đi qua node.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.du-lieu-va-do-thi",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.dynamo-python.data-flow",
    "concept.dynamo-python.list-lacing"
  ],
  "exampleIds": [
    "example.dynamo-python.ghep-danh-sach"
  ],
  "exerciseIds": [
    "exercise.dynamo-python.du-doan-list"
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Data",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-3_the-building-blocks-of-programs/1-data"
    },
    {
      "title": "Dynamo Primer — What's a List",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-4_designing-with-lists/1-whats-a-list"
    },
    {
      "title": "Dynamo Primer — Lists of Lists",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-4_designing-with-lists/3-lists-of-lists"
    },
    {
      "title": "Dynamo Primer — Logic",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-3_the-building-blocks-of-programs/3-logic"
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
  "examplePlacements": [
    {
      "heading": "các-kiểu-lacing",
      "exampleIds": [
        "example.dynamo-python.ghep-danh-sach"
      ]
    }
  ],
  "illustration": "graph"
}
---
## Đọc đồ thị theo luồng dữ liệu

Dynamo biểu diễn chương trình bằng node và dây nối. Node nhận giá trị ở cổng đầu vào, thực hiện một thao tác rồi đưa kết quả ra cổng đầu ra; dây thể hiện sự phụ thuộc dữ liệu. Vì vậy, vị trí node trên canvas giúp người đọc theo dõi, còn kết nối quyết định phép tính. Một đồ thị xuất cọc có thể đi từ danh sách lý trình, qua bước tính tọa độ, tới bảng kiểm tra. Hãy đọc kiểu dữ liệu tại từng ranh giới: số, chuỗi, Boolean, hình học hay đối tượng được ứng dụng chủ bao bọc. Giá trị null cần được xử lý trước phép tính tiếp theo.

<span id="giữ-cấu-trúc-list-có-ý-nghĩa" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Cấu trúc list

List có thứ tự và chỉ số đầu tiên là 0. Nested list chứa các list con, chẳng hạn mỗi tuyến giữ một nhóm cọc. Nếu tuyến A có hai cọc và tuyến B có ba cọc, cấu trúc ngoài có hai nhóm chứ không phải năm tuyến. Flatten bỏ ranh giới nhóm; chỉ dùng khi quan hệ nhóm đã được lưu bằng khóa khác. Kiểm tra số phần tử, độ sâu và loại phần tử bằng Watch. Cùng một tập điểm có thể tạo nhiều hình riêng hoặc một đường nối, tùy cổng node nhận một điểm hay cả list điểm.

<span id="dự-đoán-lacing-trước-khi-chạy" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Các kiểu lacing

Lacing quy định ghép nhiều đầu vào dạng list. Với X gồm hai số và Y gồm ba số, Shortest tạo hai cặp; Longest tạo ba cặp bằng cách dùng lại phần tử cuối của list ngắn; Cross Product tạo sáu tổ hợp. Đây là lựa chọn nghiệp vụ: ghép cọc với cao độ tương ứng khác với tạo một lưới thử. Khi dữ liệu phải tương ứng một–một, hãy kiểm tra độ dài bằng nhau trước, vì Shortest có thể làm mất hàng mà đồ thị vẫn chạy. Ví dụ Python đi kèm thực hiện chính quy tắc ghép nghiêm ngặt đó.

<span id="dùng-logic-để-bảo-vệ-hình-học" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra dữ liệu hình học

Boolean biểu diễn điều kiện đúng hoặc sai. Dùng điều kiện như “lý trình trong phạm vi tuyến” để phân luồng dữ liệu hợp lệ và dữ liệu cần xem lại. Áp cùng mask cho toàn bộ bản ghi, tránh lọc tọa độ và mã cọc riêng rồi ghép sai hàng. Point, Curve hay Surface trong Dynamo là dữ liệu hình học; chúng không tự trở thành đối tượng Civil 3D hay mang CRS dự án.

<span id="thực-hành-quan-sát-kết-quả" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Thực hành

Tạo hai list khác độ dài và dự đoán số kết quả của từng lacing. Sau đó gom theo hai tuyến, quan sát trước và sau Flatten. Ghi rõ cấu trúc mong đợi cạnh nhóm node. Một đồ thị có hình đẹp nhưng mất mã cọc chưa đạt yêu cầu trao đổi dữ liệu.
