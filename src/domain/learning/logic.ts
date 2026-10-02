import type {LearningSnapshot} from './model';
export interface ProgressCourse {
    id: string;
    lessonIds: string[];
}
export function getProgressForIds(ids: string[], snapshot: LearningSnapshot) {
    return { completed: ids.filter(id => snapshot.progress[id]?.completed).length, total: ids.length };
}
export function getContinueFromCourses(courses: ProgressCourse[], snapshot: LearningSnapshot, courseId?: string): string | null {
    const visit = snapshot.lastVisit?.lessonId;
    const current = courseId ? courses.find(c => c.id === courseId) : courses.find(c => visit && c.lessonIds.includes(visit)) || courses[0];
    if (!current)
        return null;
    if (visit && current.lessonIds.includes(visit) && !snapshot.progress[visit]?.completed)
        return visit;
    const position = visit ? current.lessonIds.indexOf(visit) : -1;
    const candidates = position < 0 ? current.lessonIds : [...current.lessonIds.slice(position + 1), ...current.lessonIds.slice(0, position)];
    return candidates.find(id => !snapshot.progress[id]?.completed) || null;
}
