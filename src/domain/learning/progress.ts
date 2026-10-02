import { getCourseLessons, type ContentGraph } from '../content/graph';
import type { LearningSnapshot } from './model';
import {getProgressForIds,getContinueFromCourses} from './logic';
export {getProgressForIds,getContinueFromCourses} from './logic';
export function getCourseProgress(graph: ContentGraph, courseId: string, snapshot: LearningSnapshot) {
    return getProgressForIds(getCourseLessons(graph, courseId).map(l => l.id), snapshot);
}
export function getContinueTarget(graph: ContentGraph, snapshot: LearningSnapshot, courseId?: string): string | null {
    return getContinueFromCourses(graph.courses.map(c => ({ id: c.id, lessonIds: getCourseLessons(graph, c.id).map(l => l.id) })), snapshot, courseId);
}
