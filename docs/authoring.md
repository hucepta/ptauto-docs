# Biên soạn nội dung

Nội dung canonical nằm trong `src/content/`. Learn, Reference, glossary, sidebar, liên kết và search đều sinh từ nguồn này. Không thêm tên bài hoặc URL vào component để xuất bản bài mới.

## Các loại nội dung

| Loại | Nơi lưu | Vai trò |
|---|---|---|
| Course | `courses/*.json` | Mảng kiến thức, công nghệ và thứ tự catalog |
| Chapter | `chapters/*.json` | Nhóm chủ đề của Course; tên trên web không có số chương |
| Lesson | `lessons/**/*.md` | Nội dung học, thứ tự, prerequisite và các quan hệ |
| Concept | `concepts/**/*.md` | Thuật ngữ, API, cú pháp hoặc xử lý lỗi dùng cho Reference |
| Example | `examples/*.json` + `examples/code/*` | Metadata và duy nhất một file mã nguồn |
| Exercise | `exercises/**/*.md` | Bài tập, kết quả cần đạt, ví dụ lời giải |
| Project | `projects/**/*.md` | Công cụ thực hành, phạm vi và tiêu chí nghiệm thu |

ID là danh tính lâu dài như `lesson.autolisp.list-association-list`. Đổi tên/slug hoặc chuyển Lesson sang nhóm khác vẫn giữ ID; bookmark và progress dùng ID. Slug chỉ có chữ thường ASCII, chữ số và dấu gạch ngang. Lesson slug duy nhất trong Course; thứ tự duy nhất trong mỗi nhóm.

## Tạo bài

1. Tạo Markdown có frontmatter và nội dung thật. Các file hiện tại dùng JSON trong dấu `---`; YAML hợp lệ cũng được.
2. Khai báo `chapterId`, `order`, `difficulty`, quan hệ Concept/Example/Exercise, nguồn chính thức và môi trường tương thích.
3. Giữ `status: draft` khi đang viết. Chỉ chuyển sang `published` sau đọc kỹ thuật và kiểm tra các liên kết. Course/nhóm published cần ít nhất một Lesson published; nội dung published không được tham chiếu draft.
4. Chạy `npm run verify`. Build phải thất bại khi có ID/slug/order trùng, quan hệ sai loại, thiếu parent, prerequisite vòng hoặc target thiếu.

Thêm Concept một lần rồi tham chiếu `conceptIds` từ các bài. `kind: term` tạo mục glossary; các loại `api`, `syntax`, `troubleshooting` xuất hiện trong Reference. Dùng `aliases`, `tags`, `searchableTerms` cho tên gọi và thuật ngữ thực tế; không tạo bản index thứ hai.

## Trình bày từng mục

Dùng `##` cho mục chính trong nội dung, `###` cho ý nhỏ hơn. Trang chỉ có một H1; không viết lại tên bài bằng H1 hoặc thêm đoạn dẫn dưới tiêu đề lớn. Diễn giải/định nghĩa thuộc các mục nhỏ.

Renderer giữ tiêu đề và anchor do Astro tạo, ghép diễn giải với code của cùng mục. Đoạn code trực tiếp trong Markdown được lấy từ chính nội dung đó. Code dùng lại giữa các trang phải là Example có `sourceFile`, không sao chép vào Markdown.

Đặt Example cạnh mục tương ứng bằng `examplePlacements`; `heading` là anchor trong TOC, bao gồm dấu tiếng Việt khi Astro sinh như vậy:

```json
{
  "exampleIds": ["example.autolisp.tao-list"],
  "examplePlacements": [
    { "heading": "tạo-list-từ-biến", "exampleIds": ["example.autolisp.tao-list"] }
  ]
}
```

Build kiểm tra mục tồn tại, Example có trong `exampleIds` và không đặt lặp. Example chưa có vị trí được giữ trong mục “Ví dụ thực hành”. Đổi tên mục thì cập nhật anchor placement cùng lúc. Trên desktop, diễn giải bên trái và code bên phải; màn hình nhỏ xếp dọc.

Code panel dùng grammar tương ứng, có tên file và nút sao chép. File gốc được đọc nguyên văn; không thêm số dòng, highlight hoặc ký tự giao diện vào clipboard. Exercise dùng `solutionExampleId`; nếu lời giải đã hiện trong bài, panel lời giải liên kết tới ví dụ đó.

## Search và URL

Lesson: `/hoc/{course}/{lesson}/`; chuyển nhóm không đổi URL. Nhóm chủ đề: `/hoc/{course}/chu-de/{group}/`. Concept: `/tra-cuu/{technology}/{concept}/`. Project: `/du-an/{technology}/{project}/`.

Search chỉ lấy published content. Một Example có target ưu tiên Concept, rồi Lesson, rồi Project; Lesson có thể sở hữu Example qua bài tập. Ví dụ chỉ có một kết quả canonical dù được dùng ở nhiều trang. Build/link verifier bảo vệ anchor của target.

Không đưa fixture tìm kiếm hoặc nội dung demo vào `src/content/`. Có thể thử thay đổi metadata với các fixture trong `tests/fixtures/` và bổ sung test hành vi khi thay đổi logic quan trọng.
