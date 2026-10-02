# PTAuto Docs

Website tiếng Việt để học và tra cứu tự động hóa CAD, BIM và dữ liệu. Dùng Astro static, TypeScript và Pagefind; không cần backend.

## Chạy dự án

Node.js 24.16 trở lên. Dependency được khóa trong `package-lock.json`.

```powershell
npm ci
npx playwright install chromium
npm run dev
```

Ở workspace này, npm được đặt tại `../.tooling/npm/bin/npm-cli.js`; có thể thay `npm` bằng `node '..\.tooling\npm\bin\npm-cli.js'`. Khi chạy kiểm tra trình duyệt, đặt `PLAYWRIGHT_BROWSERS_PATH` trỏ tới `../.tooling/browsers`.

```powershell
npm run verify
npm run preview
```

`verify` chạy check, lint, unit, build, index tìm kiếm, E2E và kiểm tra artifact. Preview phục vụ nguyên `dist/` ở `http://127.0.0.1:4321`; sau khi sửa nguồn, build lại rồi tải lại trình duyệt.

## Tổ chức

- `src/content/`: metadata, bài học, Concept, bài tập, dự án và file code gốc.
- `src/domain/`: validation, route, navigation, search và trạng thái học.
- `src/components/`, `src/layouts/`, `src/pages/`: giao diện và các route sinh từ nội dung.
- `scripts/`: build, kiểm tra artifact, đo preview và đóng gói phát hành.
- `tests/`: fixture riêng, unit và hành trình trình duyệt.

Hiện có 5 bài học, 6 nội dung tra cứu, 4 ví dụ, 1 bài tập và 1 dự án. AutoLISP và Visual LISP / ActiveX có nội dung đọc được; bốn mảng còn lại được đánh dấu đang biên soạn.

## Tài liệu duy trì

- [Biên soạn](docs/authoring.md)
- [Kiểm chứng code CAD](docs/example-verification.md)
- [Lộ trình nội dung](docs/content-roadmap.md)
- [Kiểm tra và phát hành](docs/release.md)
- [Quyết định triển khai](docs/implementation-notes.md)

Bookmark và tiến độ lưu trên trình duyệt của thiết bị đang dùng. Ví dụ CAD là mã để thực hành, chưa có bản ghi chạy trong AutoCAD; xem quy trình kiểm chứng trước khi đánh dấu đã chạy.
