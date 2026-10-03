---
{
  "id": "lesson.dynamo-python.batch-report-kiem-soat",
  "slug": "batch-report-kiem-soat",
  "title": "Batch graph: kiểm soát lỗi và báo cáo theo lô",
  "description": "Thiết kế một graph chạy nhiều bản ghi cọc nhưng vẫn cho biết hàng nào lỗi.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.thuc-hanh-du-lieu",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.qa-csv-coc-gis"
  ],
  "flow": [
    {
      "label": "Nhập",
      "detail": "CSV có ID, station, elevation"
    },
    {
      "label": "Kiểm tra",
      "detail": "Tách hợp lệ/lỗi theo từng hàng"
    },
    {
      "label": "Xuất",
      "detail": "Bảng sạch và báo cáo lỗi có ID"
    }
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Dynamo for Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Node/engine theo phiên bản host",
      "platform": "Windows"
    }
  ]
}
---

## “Chạy xong” chưa đủ

Một graph có thể trả 498 hàng từ CSV 500 cọc mà không ai biết 2 hàng nào bị mất. Đầu ra nên gồm cả dữ liệu hợp lệ và **báo cáo lỗi**: số dòng, ID, lý do, giá trị gốc. Giữ thứ tự và stable ID để so với CSV nguồn. Trước khi tạo đối tượng Civil, chạy graph ở chế độ chỉ kiểm tra trên tập nhỏ.

Đối với file Excel/CSV, xác định encoding, dấu thập phân, đơn vị và tên cột. Đừng cho `null` chảy sâu vào node hình học rồi mới tìm lỗi. Tách bước normalize, validate, transform và export; Watch hoặc log ở ranh giới từng bước. Graph chạy lặp phải tránh tạo trùng đối tượng ngoài ý muốn; kiểm tra object binding của version Dynamo.

## Bài luyện

Tạo CSV 5 hàng: 3 hợp lệ, 1 thiếu ID, 1 station dạng chữ. Thiết kế hai đầu ra có 3 và 2 hàng, đối chiếu tổng vẫn là 5. Sau đó chạy lại graph và kiểm tra có nhân đôi dữ liệu hay không.
