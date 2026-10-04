import { createProgressRepository } from '../domain/learning/repository';
import { getProgressForIds, getContinueFromCourses } from '../domain/learning/logic';
import type { StorageLike, LearningSnapshot } from '../domain/learning/model';
import type { ContentPage } from '../domain/content/manifest';
interface Manifest {
    pages: ContentPage[];
    courses: {
        id: string;
        title: string;
        lessonIds: string[];
        url: string;
    }[];
    base: string;
}
const storage: StorageLike = { getItem: key => window.localStorage.getItem(key), setItem: (key, value) => window.localStorage.setItem(key, value), removeItem: key => window.localStorage.removeItem(key) };
async function initialize() {
    const build = document.querySelector<HTMLMetaElement>('meta[name="ptauto-build"]')?.content;
    const cacheKey = 'ptauto.docs.catalog.' + build;
    let catalog: Manifest | undefined;
    try {
        const cached = JSON.parse(sessionStorage.getItem(cacheKey) || 'null');
        if (cached?.buildId === build && Array.isArray(cached.pages) && Array.isArray(cached.courses)
            && typeof cached.base === 'string' && cached.pages.every((p: ContentPage) => typeof p.id === 'string' && typeof p.url === 'string' && p.url.startsWith('/') && typeof p.title === 'string')
            && cached.courses.every((c: Manifest['courses'][number]) => typeof c.id === 'string' && Array.isArray(c.lessonIds))) catalog = cached;
    } catch { /* Storage can be denied or corrupted; fetch remains available. */ }
    if (!catalog) {
        const response = await fetch(import.meta.env.BASE_URL + 'catalog.json');
        if (!response.ok) throw new Error('catalog');
        catalog = await response.json() as Manifest;
        try { sessionStorage.setItem(cacheKey, JSON.stringify(catalog)); } catch { /* Learning still works without a cache. */ }
    }
    const byId = new Map(catalog.pages.map(p => [p.id, p]));
    const repo = createProgressRepository(storage, { lessonIds: catalog.pages.filter(p => p.kind === 'lesson').map(p => p.id), contentIds: catalog.pages.map(p => p.id) });
    const url = (path: string) => catalog.base.replace(/\/$/, '') + path;
    const warn = () => document.querySelectorAll<HTMLElement>('[data-storage-status]').forEach(el => { el.textContent = 'Chưa lưu được trên thiết bị. Thay đổi chỉ giữ trong trang hiện tại.'; });
    const makeLink = (id: string, label?: string) => { const p = byId.get(id)!; const a = document.createElement('a'); a.href = url(p.url); a.textContent = label || p.title; return a; };
    const refresh = () => {
        const { snapshot, issues } = repo.read();
        if (issues.length)
            warn();
        document.querySelectorAll<HTMLButtonElement>('[data-bookmark]').forEach(b => { const saved = !!snapshot.bookmarks[b.dataset.bookmark!]?.saved; b.setAttribute('aria-pressed', String(saved)); b.textContent = saved ? 'Đã lưu' : 'Lưu bài'; b.disabled = false; });
        document.querySelectorAll<HTMLButtonElement>('[data-completed]').forEach(b => { const completed = !!snapshot.progress[b.dataset.completed!]?.completed; b.setAttribute('aria-pressed', String(completed)); b.textContent = completed ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'; b.disabled = false; });
        document.querySelectorAll<HTMLElement>('[data-lesson-marker]').forEach(el => { el.textContent = snapshot.progress[el.dataset.lessonMarker!]?.completed ? '✓' : ''; el.setAttribute('aria-label', el.textContent ? 'Đã hoàn thành' : 'Chưa hoàn thành'); });
        for (const course of catalog.courses) {
            const p = getProgressForIds(course.lessonIds, snapshot);
            document.querySelectorAll<HTMLElement>('[data-course-remaining]').forEach(el => { if (el.dataset.courseRemaining === course.id) el.textContent = p.completed ? (p.total - p.completed) + ' bài còn lại' : p.total + ' bài học'; });
            document.querySelectorAll<HTMLElement>('[data-course-finished]').forEach(el => { if (el.dataset.courseFinished === course.id) el.hidden = p.completed < p.total; });
            document.querySelectorAll<HTMLElement>('[data-course-progress]').forEach(el => { if (el.dataset.courseProgress === course.id)
                el.textContent = p.completed + ' / ' + p.total + ' bài đã hoàn thành'; });
            const next = getContinueFromCourses(catalog.courses, snapshot, course.id);
            document.querySelectorAll<HTMLAnchorElement>('[data-course-start]').forEach(el => {
                if (el.dataset.courseStart !== course.id)
                    return;
                if (next) {
                    el.href = url(byId.get(next)!.url);
                    el.textContent = p.completed ? 'Tiếp tục học' : 'Bắt đầu học';
                }
                else {
                    el.textContent = 'Ôn lại lộ trình';
                }
            });
        }
        renderBookmarks(snapshot);
        document.querySelectorAll<HTMLElement>('[data-continue]').forEach(el => {
            el.replaceChildren();
            el.hidden = false;
            const id = getContinueFromCourses(catalog.courses, snapshot);
            if (id) {
                el.append(makeLink(id, 'Tiếp tục: ' + byId.get(id)!.title));
            }
            else {
                el.textContent = 'Bạn đã hoàn thành các bài hiện có trong lộ trình này.';
            }
        });
    };
    const renderBookmarks = (snapshot: LearningSnapshot) => {
        const lists = document.querySelectorAll<HTMLElement>('[data-bookmarks-list], [data-home-bookmarks-list]');
        if (!lists.length) return;
        const ids = catalog.pages.filter(p => snapshot.bookmarks[p.id]?.saved).sort((a, b) => (snapshot.bookmarks[b.id].updatedAt).localeCompare(snapshot.bookmarks[a.id].updatedAt));
        const empty = document.querySelector<HTMLElement>('[data-bookmarks-empty]');
        if (empty)
            empty.hidden = ids.length > 0;
        lists.forEach(list => { list.replaceChildren(); for (const p of list.matches('[data-home-bookmarks-list]') ? ids.slice(0, 3) : ids) {
            const li = document.createElement('li'); li.append(makeLink(p.id));
            const description = document.createElement('p'); description.textContent = p.description;
            li.append(description); list.append(li);
        }});
    };
    document.querySelectorAll<HTMLButtonElement>('[data-bookmark]').forEach(b => b.addEventListener('click', () => {
        const saved = !!repo.read().snapshot.bookmarks[b.dataset.bookmark!]?.saved;
        if (!repo.setBookmark(b.dataset.bookmark!, !saved).persisted)
            warn();
        refresh();
    }));
    document.querySelectorAll<HTMLButtonElement>('[data-completed]').forEach(b => b.addEventListener('click', () => {
        const completed = !!repo.read().snapshot.progress[b.dataset.completed!]?.completed;
        if (!repo.setCompleted(b.dataset.completed!, !completed).persisted)
            warn();
        refresh();
    }));
    const current = document.querySelector<HTMLElement>('[data-content-kind=lesson]')?.dataset.contentId;
    if (current && !repo.recordVisit(current).persisted)
        warn();
    window.addEventListener('storage', event => { if (event.key === null || event.key.startsWith('ptauto.docs.v1.'))
        refresh(); });
    refresh();
}
void initialize().catch(() => {
    document.querySelectorAll<HTMLElement>('[data-storage-status]').forEach(el => { el.textContent = 'Không tải được thông tin lưu bài. Hãy tải lại trang để thử lại.'; });
});
