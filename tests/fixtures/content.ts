export function contentFixture() {
    return [
        { entity: 'course', id: 'course.autolisp', slug: 'autolisp', title: 'AutoLISP', description: 'Lộ trình', technology: 'autolisp', status: 'published', order: 1 },
        { entity: 'chapter', id: 'chapter.autolisp.basic', slug: 'basic', title: 'Ngôn ngữ', description: 'Nền tảng', courseId: 'course.autolisp', status: 'published', order: 1 },
        ...['first', 'second'].map((name, i) => ({ entity: 'lesson', id: 'lesson.autolisp.' + name, slug: name, title: name, description: 'Bài học', status: 'published', body: '## Nội dung\nĐọc bài.', chapterId: 'chapter.autolisp.basic', order: i + 1, difficulty: 'co-ban' }))
    ];
}
