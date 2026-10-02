import {expect,test} from 'vitest';
import {getContinueFromCourses} from '../../src/domain/learning/progress';
import {emptySnapshot} from '../../src/domain/learning/model';
test('continue_moves_forward_from_completed_visit_before_wrapping',()=>{
 const snapshot=emptySnapshot();
 snapshot.lastVisit={schemaVersion:1,lessonId:'lesson.two',openedAt:new Date().toISOString()};
 snapshot.progress['lesson.two']={schemaVersion:1,lessonId:'lesson.two',completed:true,updatedAt:new Date().toISOString()};
 expect(getContinueFromCourses([{id:'course.test',lessonIds:['lesson.one','lesson.two','lesson.three']}],snapshot)).toBe('lesson.three');
});
