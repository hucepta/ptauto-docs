# Kiểm tra và phát hành

## Cổng kiểm tra

```powershell
npm ci
npx playwright install chromium
npm run verify
```

`verify` là cùng một pipeline cho local hoặc CI: Astro check → ESLint → unit → static build → Pagefind → artifact verifier → Playwright → artifact verifier. Repo chưa được chọn đặt trên GitHub nên không thêm workflow của một provider chưa dùng.

Artifact verifier kiểm tra ngôn ngữ/landmark, build ID, liên kết nội bộ, anchor, catalog, search records, file JS/WASM của Pagefind và checksum. `dist/release.json` chứa SHA-256 của từng file. Base path `/ptauto-docs/` cũng được build và kiểm tra trong E2E; không dùng bản base-path thử nghiệm để phát hành.

## Đo preview và kiểm tra bằng mắt

Khởi động `npm run preview`, sau đó:

```powershell
npm run measure:preview
```

Kết quả nằm ở `../PTAUTO_DOCS_QA/`: ảnh trang chủ/reader desktop, ảnh mobile, thư viện tra cứu và `metrics.json`. Đo lab trên Chromium/localhost, không mô phỏng CPU/network và không thay thế số liệu người dùng thực. Mục tiêu: LCP ≤ 2.5 s, CLS ≤ 0.1, search sau tải index ≤ 300 ms.

Lượt đo ngày 2026-10-02 trên Chromium 153, viewport 1440×1000: trang chủ LCP 1320 ms, bài List 148 ms, thư viện tra cứu 32 ms; CLS 0 ở cả ba. Search đã tải index mất 209 ms từ nhập đến kết quả của truy vấn mới, gồm debounce 180 ms. Corpus: 12 bài/Concept/Project, 17 search records, 28 trang HTML. Đây là một mẫu đo trên máy hiện tại.

Đã có test bàn phím/skip link/menu Escape, đọc không JavaScript, responsive 360/768/1024/1440 px và axe trên các trang chính. Lần kiểm tra bằng NVDA/VoiceOver thật cần được thực hiện trên thiết bị có screen reader; môi trường hiện tại không cung cấp điều khiển screen reader, nên không ghi là đã kiểm chứng.

## Sites private

Site đã đăng ký được giữ trong `.openai/hosting.json`; luôn dùng đúng `project_id` này, không tạo Site mới. Audience mặc định là owner private và phải được giữ nguyên nếu chưa có yêu cầu đổi.

1. Commit nguồn đã qua kiểm tra, bảo đảm working tree sạch.
2. Đặt `SITE_URL` là origin HTTPS của Site. `npm run package:release` build cùng commit, sinh checksum/`sourceCommit` và archive chỉ chứa `.openai/hosting.json` với `dist/`.
3. Lấy credential ngắn hạn cho repo của đúng Site. Đưa token qua stdin không echo; helper giữ trong bộ nhớ và truyền bằng `http.extraHeader` cho riêng tiến trình Git. Không ghi token vào file, URL, Git config hoặc log.
4. Push chính HEAD tới branch do credential trả về. Không force push. Kiểm tra remote HEAD trùng SHA.
5. Gọi thao tác Sites lưu version và deploy private với SHA đã push cùng đường dẫn archive. Nếu đã có version ID do lỗi trung gian, deploy version đó; không lưu version lần hai.
6. Chỉ báo live khi deployment `succeeded`; kiểm tra trang chủ, Lesson, Reference, search và state trên URL HTTPS thật.

Wrapper Sites trong plugin có thể không còn ở máy; connector Sites vẫn thực hiện đăng ký/version/deploy. `scripts/push-site-source.mjs` là đường dự phòng dùng credential của connector, không sửa quyền chia sẻ.

## Smoke và rollback

Mở một Lesson bằng deep link, nhấn liên kết Concept rồi quay lại, tìm `danh sach`/`vl-load-com`, sao chép code, lưu bài và đánh dấu hoàn thành rồi tải lại. Trên Site private, dùng tài khoản chủ Site hoặc token smoke do Sites cung cấp; không đưa token vào URL hoặc ảnh.

Giữ archive và `release.json` của lần thành công ở `.sites-runtime/`, cùng SHA/version/deployment ID trong hồ sơ phát hành. Rollback bằng deploy lại version Sites đã lưu; không ghép HTML của bản này với search của bản khác. Chỉ xóa artifact cũ khi đã chọn được bản phục hồi.

HTML/catalog/search nên được tái xác thực, còn assets có hash trong tên có thể cache dài. Preview local gửi `no-store` để tiện kiểm tra; cache HTTPS cuối cùng do Sites quản lý.
